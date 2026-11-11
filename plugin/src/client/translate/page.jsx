/**
 * The translation workbench, opened from the "更多" panel.
 *
 * Two views inside one sheet: the translator (language pair, text, voice,
 * document, result) and the favourite book (the words and sentences the reader
 * kept). It lives in the panel rather than a sidebar page because that is where
 * the rest of the quick actions are.
 */
import * as React from 'react';

const API = '/api/chatbox-pet';

const LANGUAGES = [
  { id: 'auto', zh: '自动检测', en: 'Detect' },
  { id: 'zh', zh: '中文', en: 'Chinese' },
  { id: 'en', zh: '英文', en: 'English' },
  { id: 'ja', zh: '日文', en: 'Japanese' },
  { id: 'ko', zh: '韩文', en: 'Korean' },
  { id: 'fr', zh: '法文', en: 'French' },
  { id: 'de', zh: '德文', en: 'German' },
  { id: 'es', zh: '西班牙文', en: 'Spanish' },
];

/**
 * Is this input a headword rather than a sentence?
 *
 * A word or a short phrase gets the dictionary shape (phonetic, senses,
 * examples); a sentence gets a translation. The rule is deliberately simple:
 * at most three words, no sentence-ending punctuation, short enough to be a
 * lookup.
 * @param {string} text - the input.
 * @returns {boolean} true when it should be looked up.
 */
export function looksLikeWord(text) {
  const value = String(text ?? '').trim();
  if (value === '' || value.length > 40) return false;
  if (/[.!?。！？\n]/.test(value)) return false;
  const words = value.split(/\s+/).filter(Boolean);
  return words.length <= 3;
}

/**
 * Escape one string for use inside a RegExp.
 * @param {string} value - the literal text.
 * @returns {string} the escaped pattern.
 */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Render one example sentence with the headword marked.
 *
 * The model writes the example itself, so the headword may appear inflected
 * (milestones, reached). A stem match covers the common suffixes without
 * pretending to be a lemmatiser.
 * @param {string} text - the example.
 * @param {string} word - the headword.
 * @returns {Array} React children, plain strings and <mark> elements.
 */
export function highlightTerm(text, word) {
  const source = String(text ?? '');
  const head = String(word ?? '').trim();
  if (head === '') return [source];
  const stem = head.replace(/(e|y)$/i, '');
  const pattern = new RegExp(`\\b${escapeRegExp(stem)}[a-z]{0,3}\\b`, 'gi');
  const out = [];
  let last = 0;
  for (const match of source.matchAll(pattern)) {
    const at = match.index ?? 0;
    if (at > last) out.push(source.slice(last, at));
    out.push(
      <mark className="cbt-mark" key={`${at}-${match[0]}`}>
        {match[0]}
      </mark>,
    );
    last = at + match[0].length;
  }
  if (last < source.length) out.push(source.slice(last));
  return out.length === 0 ? [source] : out;
}

/**
 * Split a translation into clickable tokens.
 *
 * Only latin words are clickable: segmenting Chinese needs a dictionary the
 * bundle does not ship, and guessing would make the page feel broken.
 * @param {string} text - the translation.
 * @param {Function} onPick - called with the clicked word.
 * @returns {Array} React children.
 */
export function tokenizeForLookup(text, onPick) {
  const source = String(text ?? '');
  const out = [];
  let last = 0;
  for (const match of source.matchAll(/[A-Za-z][A-Za-z'’-]{1,24}/g)) {
    const at = match.index ?? 0;
    if (at > last) out.push(source.slice(last, at));
    const word = match[0].replace(/['’-]+$/, '');
    out.push(
      <button
        type="button"
        className="cbt-word"
        data-cbt-word={word}
        key={`${at}-${word}`}
        onClick={() => onPick(word)}
      >
        {match[0]}
      </button>,
    );
    last = at + match[0].length;
  }
  if (last < source.length) out.push(source.slice(last));
  return out.length === 0 ? [source] : out;
}

/**
 * One JSON call to the Host.
 * @param {string} path - route below the plugin base.
 * @param {object} [init] - fetch init.
 * @returns {Promise<any>} the unwrapped result.
 */
async function call(path, init) {
  const response = await fetch(`${API}${path}`, init);
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error(`服务没有返回 JSON（HTTP ${response.status}）`);
  }
  if (payload?.ok !== true) throw new Error(payload?.error?.message ?? `请求失败（HTTP ${response.status}）`);
  return payload.result;
}

/**
 * The workbench.
 * @param {object} props - plugin faces.
 * @param {Function} props.t - namespace-bound translator.
 * @param {Function} props.locale - reads the active locale id.
 * @param {any} [props.inputActions] - the composer actions, when a composer is on screen.
 * @returns {object} the element.
 */
export function TranslateWorkbench({ t, locale = () => 'zh', inputActions }) {
  const zh = locale() !== 'en';
  const L = React.useCallback((cn, en) => (zh ? cn : en), [zh]);

  const [view, setView] = React.useState('translate');
  const [from, setFrom] = React.useState('auto');
  const [to, setTo] = React.useState(() => (zh ? 'en' : 'zh'));
  const [tab, setTab] = React.useState('text');
  const [source, setSource] = React.useState('');
  const [target, setTarget] = React.useState('');
  // Which engine answered, for the little badge under the result.
  const [engine, setEngine] = React.useState(null);
  const [dict, setDict] = React.useState(null);
  // The word expansion loads after the dictionary card so the senses show first.
  const [expand, setExpand] = React.useState(null);
  const [expandLoading, setExpandLoading] = React.useState(false);
  const [playing, setPlaying] = React.useState('');
  // Where the current dictionary card came from: the input box or a word in the
  // translation. A card opened from the translation offers a way back.
  const [dictFrom, setDictFrom] = React.useState('');
  // Text the reader selected inside the translation, with its screen position.
  const [picked, setPicked] = React.useState(null);
  const [phase, setPhase] = React.useState('idle');
  const [error, setError] = React.useState('');
  const [docName, setDocName] = React.useState('');
  const [recording, setRecording] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [kind, setKind] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [saved, setSaved] = React.useState(false);

  const recorderRef = React.useRef(null);
  const chunksRef = React.useRef([]);
  const timerRef = React.useRef(0);

  const stopTimer = React.useCallback(() => {
    if (timerRef.current !== 0) {
      clearInterval(timerRef.current);
      timerRef.current = 0;
    }
  }, []);

  const loadFavorites = React.useCallback(async (kindFilter = kind, searchText = search) => {
    try {
      const query = new URLSearchParams();
      if (kindFilter !== 'all') query.set('kind', kindFilter);
      if (searchText.trim() !== '') query.set('search', searchText.trim());
      const result = await call(`/favorites?${query.toString()}`);
      setItems(result.items ?? []);
    } catch (failure) {
      setError(String(failure?.message ?? failure));
    }
  }, [kind, search]);

  React.useEffect(() => {
    void loadFavorites('all', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Probe the local translation server once: the badge tells the reader whether
  // they are on the fast local model or the slower Host one.
  React.useEffect(() => {
    let cancelled = false;
    fetch(`${API}/translate/engine`)
      .then((response) => response.json())
      .then((payload) => {
        if (!cancelled && payload?.ok === true) setEngine(payload.result);
      })
      .catch(() => {
        // A missing probe only means we do not show the badge.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => () => {
    stopTimer();
    try {
      recorderRef.current?.stream?.getTracks?.().forEach((track) => track.stop());
    } catch {
      // already released
    }
  }, [stopTimer]);

  const translate = async (text = source) => {
    const clean = text.trim();
    if (clean === '') {
      setError(L('先输入要翻译的文字', 'Type something to translate first'));
      return;
    }
    setPhase('working');
    setError('');
    setSaved(false);
    setDict(null);
    setExpand(null);
    setPicked(null);
    const mode = looksLikeWord(clean) ? 'dict' : 'sentence';
    // The dictionary explains in the *target* language, not the UI language:
    // an English UI translating into Chinese must still get Chinese senses.
    const dictLocale = to === 'zh' ? 'zh' : 'en';
    try {
      const result = await call('/translate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text: clean, from, to, locale: mode === 'dict' ? dictLocale : zh ? 'zh' : 'en', mode }),
      });
      if (mode === 'dict') {
        setDict(result.dict);
        setTarget('');
        setDictFrom('input');
        void loadExpand(result.dict.word);
      } else {
        setTarget(result.translated);
      }
      setEngine((previous) => ({ ...(previous ?? {}), last: { engine: result.engine, ms: result.ms } }));
      setPhase('done');
    } catch (failure) {
      setError(String(failure?.message ?? failure));
      setPhase('idle');
    }
  };

  const swap = () => {
    if (to === 'auto') {
      setTo(from === 'auto' ? 'zh' : from);
      setFrom('auto');
      return;
    }
    const nextFrom = to;
    setFrom(nextFrom);
    setTo(from === 'auto' ? 'zh' : from);
    if (target !== '') {
      setSource(target);
      setTarget('');
    }
  };

  const translateFile = async (file) => {
    setPhase('working');
    setError('');
    setSaved(false);
    setDocName(file.name);
    try {
      const extracted = await call(`/translate/file?name=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        headers: { 'content-type': file.type || 'application/octet-stream' },
        body: file,
      });
      setSource(extracted.text);
      const result = await call('/translate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text: extracted.text, from, to, locale: zh ? 'zh' : 'en' }),
      });
      setTarget(result.translated);
      setPhase('done');
      setTab('text');
      if (extracted.truncated) {
        setError(L('文件较长，只翻译了前 6 万个字符', 'Long document: only the first 60,000 characters were translated'));
      }
    } catch (failure) {
      setError(String(failure?.message ?? failure));
      setPhase('idle');
    }
  };

  const startRecording = async () => {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data?.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = async () => {
        stopTimer();
        stream.getTracks().forEach((track) => track.stop());
        setRecording(false);
        setPhase('working');
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        try {
          const { transcribe } = await import('./voice.js');
          const text = await transcribe(blob);
          setSource(text);
          setTab('text');
          setPhase('idle');
        } catch (failure) {
          setError(String(failure?.message ?? failure));
          setPhase('idle');
        }
      };
      recorderRef.current = recorder;
      recorder.start();
      setRecording(true);
      setSeconds(0);
      timerRef.current = setInterval(() => setSeconds((value) => value + 1), 1000);
    } catch (failure) {
      const denied = failure?.name === 'NotAllowedError' || failure?.name === 'SecurityError';
      setError(denied ? L('没有麦克风权限', 'No microphone permission') : String(failure?.message ?? failure));
    }
  };

  const favourite = async () => {
    if (source.trim() === '') return;
    try {
      await call('/favorites', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'add', kind: 'sentence', source, target, from, to }),
      });
      setSaved(true);
      await loadFavorites();
    } catch (failure) {
      setError(String(failure?.message ?? failure));
    }
  };

  /**
   * Read the current selection inside the translation and offer to look it up.
   *
   * Latin words are already clickable one by one; this is what makes Chinese
   * text work too, since segmenting it needs a dictionary the bundle does not
   * ship.
   * @param {object} event - the mouseup event.
   * @returns {void}
   */
  const onSelectInResult = (event) => {
    const host = event.currentTarget;
    const selection = typeof window.getSelection === 'function' ? window.getSelection() : null;
    const text = String(selection?.toString?.() ?? '').trim();
    if (text === '' || text.length > 40) {
      setPicked(null);
      return;
    }
    const range = selection?.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (range === null || host === null || !host.contains(range.commonAncestorContainer)) {
      setPicked(null);
      return;
    }
    const rect = range.getBoundingClientRect();
    setPicked({
      text,
      // Position relative to the result box so the chip lands under the selection.
      x: Math.round(rect.left - host.getBoundingClientRect().left),
      y: Math.round(rect.top - host.getBoundingClientRect().top),
    });
  };

  /**
   * Look up one word clicked inside the translation.
   * @param {string} word - the clicked word.
   * @returns {Promise<void>} resolves when the card is shown.
   */
  const lookupWordFromResult = async (word) => {
    setError('');
    setSaved(false);
    setPhase('working');
    try {
      const result = await call('/translate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text: word, mode: 'dict', locale: to === 'zh' ? 'zh' : 'en' }),
      });
      setDict(result.dict);
      setExpand(null);
      setDictFrom('result');
      setPhase('done');
      void loadExpand(result.dict.word);
    } catch (failure) {
      setError(String(failure?.message ?? failure));
      setPhase('idle');
    }
  };

  /**
   * Close a card opened from the translation and return to it.
   * @returns {void}
   */
  const backToResult = () => {
    setDict(null);
    setExpand(null);
    setDictFrom('');
  };

  /**
   * Load synonyms / forms / phrases for one headword.
   * @param {string} word - the headword.
   * @returns {Promise<void>} resolves when loaded.
   */
  const loadExpand = async (word) => {
    setExpand(null);
    setExpandLoading(true);
    try {
      const result = await call('/translate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text: word, mode: 'expand', locale: to === 'zh' ? 'zh' : 'en' }),
      });
      setExpand(result.expand);
    } catch {
      setExpand(null);
    } finally {
      setExpandLoading(false);
    }
  };

  /**
   * Play one word or sentence with a given accent.
   * @param {string} text - what to say.
   * @param {string} accent - en-US | en-GB | zh-CN.
   * @returns {Promise<void>} resolves when playback started.
   */
  const say = async (text, accent) => {
    setPlaying(accent);
    try {
      const result = await call('/speak', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text, accent }),
      });
      const audio = new Audio(`data:${result.mime};base64,${result.base64}`);
      audio.onended = () => setPlaying('');
      audio.onerror = () => setPlaying('');
      await audio.play();
    } catch (failure) {
      setPlaying('');
      setError(String(failure?.message ?? failure));
    }
  };

  /**
   * Keep one dictionary headword in the favourite book.
   * @param {object} entry - the dictionary card.
   * @returns {Promise<void>} resolves when saved.
   */
  const favouriteDict = async (entry) => {
    try {
      await call('/favorites', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          action: 'add',
          kind: 'word',
          source: entry.word,
          target: entry.senses.map((sense) => sense.meaning).join('；'),
          from,
          to,
        }),
      });
      setSaved(true);
      await loadFavorites();
    } catch (failure) {
      setError(String(failure?.message ?? failure));
    }
  };

  const remove = async (id) => {
    try {
      await call('/favorites', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'remove', id }),
      });
      await loadFavorites();
    } catch (failure) {
      setError(String(failure?.message ?? failure));
    }
  };

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      setError(L('复制失败，请手动选择文本', 'Copy failed — select the text manually'));
    }
  };

  return (
    <div className="cbt-page">
      <div className="cbt-viewtabs" role="tablist">
        {[
          ['translate', L('翻译', 'Translate')],
          ['favorites', L('收藏本', 'Saved')],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            className="cbt-viewtab"
            data-cbt-view={id}
            aria-selected={view === id ? 'true' : 'false'}
            onClick={() => setView(id)}
          >
            {label}
            {id === 'favorites' && items.length > 0 ? ` · ${items.length}` : ''}
          </button>
        ))}
      </div>

      {view === 'translate' ? (
        <>
          <div className="cbt-bar">
            <select className="cbt-select" value={from} onChange={(event) => setFrom(event.target.value)} aria-label={L('源语言', 'Source language')}>
              {LANGUAGES.map((item) => (
                <option key={item.id} value={item.id}>
                  {zh ? item.zh : item.en}
                </option>
              ))}
            </select>
            <button type="button" className="cbt-swap" onClick={swap} title={L('交换语言', 'Swap')} aria-label={L('交换语言', 'Swap')}>
              ⇄
            </button>
            <select className="cbt-select" value={to} onChange={(event) => setTo(event.target.value)} aria-label={L('目标语言', 'Target language')}>
              {LANGUAGES.filter((item) => item.id !== 'auto').map((item) => (
                <option key={item.id} value={item.id}>
                  {zh ? item.zh : item.en}
                </option>
              ))}
            </select>
            <span className="cbt-spacer" />
            <div className="cbt-tabs" role="tablist">
              {['text', 'voice', 'file'].map((id) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  className="cbt-tab"
                  data-cbt-tab={id}
                  aria-selected={tab === id ? 'true' : 'false'}
                  onClick={() => setTab(id)}
                >
                  {id === 'text' ? L('文字', 'Text') : id === 'voice' ? L('语音', 'Voice') : L('文件', 'File')}
                </button>
              ))}
            </div>
          </div>

          {tab === 'text' ? (
            <textarea
              className="cbt-input"
              data-cbt-source="true"
              placeholder={L('输入要翻译的文字，Ctrl / ⌘ + Enter 翻译', 'Type text to translate — Ctrl / ⌘ + Enter')}
              value={source}
              onChange={(event) => setSource(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
                  event.preventDefault();
                  void translate();
                }
              }}
            />
          ) : null}

          {tab === 'voice' ? (
            <div className="cbt-voice">
              <button
                type="button"
                className="cbt-rec"
                data-cbt-record={recording ? 'on' : 'off'}
                aria-label={recording ? L('停止录音', 'Stop recording') : L('开始录音', 'Start recording')}
                onClick={recording ? () => recorderRef.current?.stop() : startRecording}
              >
                <span className="cbt-rec-dot" />
              </button>
              <span className="cbt-hint">
                {recording
                  ? `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')} · ${L('再点一下结束', 'tap again to stop')}`
                  : L('录音在本机转写，完成后填进文字框', 'Transcribed on this machine, then placed in the text box')}
              </span>
            </div>
          ) : null}

          {tab === 'file' ? (
            <label className="cbt-drop">
              <input
                type="file"
                accept=".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json"
                data-cbt-file="true"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void translateFile(file);
                  event.target.value = '';
                }}
              />
              <span className="cbt-drop-title">{L('选择一个文档', 'Pick a document')}</span>
              <span className="cbt-hint">{L('PDF / DOCX / TXT / Markdown / HTML，30 MB 以内', 'PDF / DOCX / TXT / Markdown / HTML, up to 30 MB')}</span>
            </label>
          ) : null}

          {docName !== '' ? <div className="cbt-doc" data-cbt-doc="true">{docName}</div> : null}

          <div className="cbt-actions">
            <button
              type="button"
              className="cbt-btn cbt-btn-primary"
              data-cbt-translate="true"
              disabled={phase === 'working'}
              onClick={() => void translate()}
            >
              {phase === 'working' ? L('翻译中…', 'Translating…') : L('翻译', 'Translate')}
            </button>
            <span className="cbt-hint">
              {source.trim() === '' ? '' : L(`${source.trim().length} 字符`, `${source.trim().length} chars`)}
            </span>
          </div>

          {dict !== null ? (
            <div className="cbt-dict" data-cbt-dict="true">
              {dictFrom === 'result' ? (
                <button type="button" className="cbt-back" data-cbt-back="true" onClick={backToResult}>
                  ← {L('返回译文', 'Back to translation')}
                </button>
              ) : null}
              <div className="cbt-dict-head">
                <span className="cbt-dict-word">{dict.word}</span>
                {dict.phonetic ? <span className="cbt-dict-phonetic">{dict.phonetic}</span> : null}
                <span className="cbt-dict-play">
                  {[
                    ['en-US', L('美', 'US')],
                    ['en-GB', L('英', 'UK')],
                  ].map(([accent, label]) => (
                    <button
                      key={accent}
                      type="button"
                      className="cbt-speak"
                      data-cbt-speak={accent}
                      aria-label={`${L('朗读', 'Pronounce')} ${label}`}
                      onClick={() => void say(dict.word, accent)}
                    >
                      <span className="cbt-speak-icon" aria-hidden="true">
                        {playing === accent ? '■' : '▶'}
                      </span>
                      {label}
                    </button>
                  ))}
                </span>
              </div>
              <ul className="cbt-dict-senses">
                {dict.senses.map((sense, index) => (
                  <li key={index} className="cbt-dict-sense">
                    {sense.pos ? <span className="cbt-dict-pos">{sense.pos}</span> : null}
                    <span className="cbt-dict-meaning">{sense.meaning}</span>
                    {sense.example ? (
                      <div className="cbt-dict-example" data-cbt-example="true">
                        {highlightTerm(sense.example, dict.word)}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
              {expandLoading ? <div className="cbt-dict-loading">{L('正在扩展词条…', 'Loading word details…')}</div> : null}

              {expand && expand.forms.length > 0 ? (
                <div className="cbt-dict-section" data-cbt-forms="true">
                  <div className="cbt-dict-label">{L('词形', 'Forms')}</div>
                  <div className="cbt-dict-chips">
                    {expand.forms.map((form, index) => (
                      <span className="cbt-dict-chip" key={index}>
                        <span className="cbt-dict-chip-label">{form.label}</span> {form.value}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {expand && (expand.synonyms.length > 0 || expand.antonyms.length > 0) ? (
                <div className="cbt-dict-section">
                  {expand.synonyms.length > 0 ? (
                    <div className="cbt-dict-row">
                      <span className="cbt-dict-label">{L('近义', 'Synonyms')}</span>
                      <span className="cbt-dict-words">{expand.synonyms.join(' · ')}</span>
                    </div>
                  ) : null}
                  {expand.antonyms.length > 0 ? (
                    <div className="cbt-dict-row">
                      <span className="cbt-dict-label">{L('反义', 'Antonyms')}</span>
                      <span className="cbt-dict-words">{expand.antonyms.join(' · ')}</span>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {expand && expand.phrases.length > 0 ? (
                <div className="cbt-dict-section" data-cbt-phrases="true">
                  <div className="cbt-dict-label">{L('常见搭配', 'Phrases')}</div>
                  <ul className="cbt-dict-phrases">
                    {expand.phrases.map((phrase, index) => (
                      <li key={index}>
                        <span className="cbt-dict-phrase-en">{phrase.en}</span>
                        {phrase.zh ? <span className="cbt-dict-phrase-zh">{phrase.zh}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {expand && expand.mnemonic ? (
                <div className="cbt-dict-section">
                  <div className="cbt-dict-label">{L('记忆', 'Memory hook')}</div>
                  <div className="cbt-dict-mnemonic">{expand.mnemonic}</div>
                </div>
              ) : null}

              {dict.note ? <div className="cbt-dict-note">{dict.note}</div> : null}
              <div className="cbt-actions">
                <button type="button" className="cbt-btn" onClick={() => void copy(dict.word + ' ' + dict.senses.map((s) => s.meaning).join('；'))}>
                  {L('复制', 'Copy')}
                </button>
                <button
                  type="button"
                  className="cbt-btn"
                  data-cbt-save="true"
                  onClick={() => void favouriteDict(dict)}
                >
                  {saved ? L('已收藏', 'Saved') : L('收藏', 'Save')}
                </button>
              </div>
            </div>
          ) : null}

          {target !== '' ? (
            <div className="cbt-result" data-cbt-result="true">
              <div
                className="cbt-result-text"
                data-cbt-result-text="true"
                onMouseUp={onSelectInResult}
                onKeyUp={onSelectInResult}
              >
                {tokenizeForLookup(target, (word) => void lookupWordFromResult(word))}
                {picked !== null ? (
                  <button
                    type="button"
                    className="cbt-pick"
                    data-cbt-pick="true"
                    style={{ left: `${picked.x}px`, top: `${Math.max(0, picked.y - 26)}px` }}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      const text = picked.text;
                      setPicked(null);
                      void lookupWordFromResult(text);
                    }}
                  >
                    {L('查询', 'Look up')}「{picked.text}」
                  </button>
                ) : null}
              </div>
              <div className="cbt-actions">
                <button type="button" className="cbt-btn" onClick={() => void copy(target)}>
                  {L('复制', 'Copy')}
                </button>
                <button type="button" className="cbt-btn" data-cbt-save="true" onClick={() => void favourite()}>
                  {saved ? L('已收藏', 'Saved') : L('收藏', 'Save')}
                </button>
                {typeof inputActions?.setDraft === 'function' ? (
                  <button
                    type="button"
                    className="cbt-btn"
                    data-cbt-fill="true"
                    onClick={() => inputActions.setDraft({ text: target, references: [] })}
                  >
                    {L('填入输入框', 'Put in composer')}
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="cbt-engine" data-cbt-engine="true">
            {engine === null
              ? ''
              : engine.local
                ? `${L('本机模型', 'Local')} · ${engine.model || 'local'}${engine.last ? ` · ${engine.last.ms} ms` : ''}`
                : `${L('宿主模型', 'Host model')}${engine.last ? ` · ${engine.last.ms} ms` : ''}`}
          </div>

          {error !== '' ? <p className="cbt-error" data-cbt-error="true">{error}</p> : null}
        </>
      ) : (
        <>
          <div className="cbt-bar">
            {[
              ['all', L('全部', 'All')],
              ['word', L('单词', 'Words')],
              ['sentence', L('句子', 'Sentences')],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                className="cbt-chip"
                data-cbt-kind={id}
                aria-pressed={kind === id ? 'true' : 'false'}
                onClick={() => {
                  setKind(id);
                  void loadFavorites(id, search);
                }}
              >
                {label}
              </button>
            ))}
            <span className="cbt-spacer" />
            <a className="cbt-link" href={`${API}/favorites/export`} download="favorites.md">
              {L('导出 Markdown', 'Export Markdown')}
            </a>
          </div>
          <input
            className="cbt-search"
            data-cbt-search="true"
            placeholder={L('搜索收藏', 'Search saved')}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              void loadFavorites(kind, event.target.value);
            }}
          />
          <div className="cbt-list" data-cbt-favorites="true">
            {items.length === 0 ? (
              <p className="cbt-empty">{L('还没有收藏。翻译后点「收藏」就会出现在这里。', 'Nothing saved yet — translate something and press Save.')}</p>
            ) : (
              items.map((item) => (
                <div className="cbt-item" key={item.id} data-cbt-item={item.id}>
                  <div className="cbt-item-source">{item.source}</div>
                  {item.target ? <div className="cbt-item-target">{item.target}</div> : null}
                  <div className="cbt-item-foot">
                    <span className="cbt-item-kind">{item.kind === 'word' ? L('单词', 'Word') : L('句子', 'Sentence')}</span>
                    <button type="button" className="cbt-item-remove" onClick={() => void remove(item.id)} aria-label={L('删除', 'Delete')}>
                      ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {error !== '' ? <p className="cbt-error">{error}</p> : null}
        </>
      )}
    </div>
  );
}

/** The workbench stylesheet (lives inside the quick-actions sheet). */
export const TRANSLATE_CSS = `
.cbt-page{display:flex;flex-direction:column;gap:10px;min-height:0;color:var(--dsw-alias-label-primary);font-size:13px}
.cbt-viewtabs{display:flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in oklab,var(--dsw-alias-label-primary) 6%,transparent);align-self:flex-start}
.cbt-viewtab{height:26px;padding:0 12px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:12px;cursor:pointer}
.cbt-viewtab[aria-selected="true"]{background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 92%,transparent);color:var(--dsw-alias-label-primary);box-shadow:0 1px 2px color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent)}
.cbt-bar{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.cbt-select{height:28px;padding:0 9px;border-radius:8px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 55%,transparent);color:inherit;font-size:12px;outline:none}
.cbt-swap{width:28px;height:28px;border-radius:8px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);background:transparent;color:inherit;cursor:pointer;font-size:12px;line-height:1}
.cbt-swap:hover{background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent)}
.cbt-spacer{flex:1}
.cbt-tabs{display:flex;gap:2px;padding:2px;border-radius:9px;background:color-mix(in oklab,var(--dsw-alias-label-primary) 6%,transparent)}
.cbt-tab{height:24px;padding:0 10px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11.5px;cursor:pointer}
.cbt-tab[aria-selected="true"]{background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 92%,transparent);color:var(--dsw-alias-label-primary)}
.cbt-input{box-sizing:border-box;width:100%;min-height:88px;max-height:150px;padding:12px;border-radius:12px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 11%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 45%,transparent);color:inherit;font:inherit;font-size:13.5px;line-height:1.6;resize:vertical;outline:none}
.cbt-input:focus{border-color:color-mix(in oklab,#635BFF 55%,transparent)}
.cbt-actions{display:flex;align-items:center;gap:8px}
.cbt-btn{height:28px;padding:0 12px;border-radius:8px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);background:transparent;color:inherit;font-size:12px;cursor:pointer}
.cbt-btn:hover{background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent)}
.cbt-btn:disabled{opacity:.5;cursor:default}
.cbt-btn-primary{background:#635BFF;border-color:transparent;color:#fff}
.cbt-btn-primary:hover{background:#5149E6}
.cbt-hint{color:var(--dsw-alias-label-tertiary);font-size:11px}
.cbt-result{padding:12px;border-radius:12px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 40%,transparent);display:flex;flex-direction:column;gap:8px;max-height:180px;overflow:auto}
.cbt-result-text{position:relative;font-size:13.5px;line-height:1.65;white-space:pre-wrap;word-break:break-word}
.cbt-pick{
  position:absolute;
  z-index:2;
  padding:3px 9px;
  border-radius:999px;
  border:1px solid color-mix(in oklab,#635BFF 45%,transparent);
  background:color-mix(in oklab,#635BFF 16%,var(--dsw-alias-bg-overlay,#fff));
  color:var(--dsw-alias-label-primary);
  font-size:11.5px;
  cursor:pointer;
  white-space:nowrap;
  box-shadow:0 4px 12px -4px color-mix(in oklab,var(--dsw-alias-label-primary) 30%,transparent);
}
.cbt-pick:hover{background:color-mix(in oklab,#635BFF 26%,var(--dsw-alias-bg-overlay,#fff))}
.cbt-error{margin:0;color:#e5484d;font-size:11.5px;line-height:1.5}
.cbt-engine{margin-top:-4px;color:var(--dsw-alias-label-tertiary);font-size:10.5px;line-height:1.5}
.cbt-mark{
  background:color-mix(in oklab,#635BFF 22%,transparent);
  color:var(--dsw-alias-label-primary);
  border-radius:3px;
  padding:0 2px;
}
.cbt-word{
  display:inline;
  padding:0;
  margin:0;
  border:0;
  background:transparent;
  color:inherit;
  font:inherit;
  cursor:pointer;
  border-radius:3px;
  text-decoration:underline;
  text-decoration-color:color-mix(in oklab,#635BFF 45%,transparent);
  text-underline-offset:2px;
}
.cbt-word:hover{
  background:color-mix(in oklab,#635BFF 14%,transparent);
  text-decoration-color:#635BFF;
}
.cbt-back{
  align-self:flex-start;
  padding:0 0 2px;
  border:0;
  background:transparent;
  color:#635BFF;
  font-size:11.5px;
  cursor:pointer;
}
.cbt-back:hover{text-decoration:underline}
.cbt-dict{padding:14px;border-radius:12px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 40%,transparent);display:flex;flex-direction:column;gap:8px;max-height:min(46vh,360px);overflow:auto}
.cbt-dict-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.cbt-dict-play{display:flex;gap:4px;margin-left:2px}
.cbt-speak{
  display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 8px;
  border-radius:999px;border:1px solid color-mix(in oklab,#635BFF 35%,transparent);
  background:color-mix(in oklab,#635BFF 10%,transparent);
  color:var(--dsw-alias-label-primary);font-size:11px;cursor:pointer;
}
.cbt-speak:hover{background:color-mix(in oklab,#635BFF 18%,transparent)}
.cbt-speak-icon{font-size:9px;color:#635BFF}
.cbt-dict-loading{font-size:11px;color:var(--dsw-alias-label-tertiary)}
.cbt-dict-section{display:flex;flex-direction:column;gap:4px;padding-top:6px;border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent)}
.cbt-dict-label{font-size:10.5px;color:var(--dsw-alias-label-tertiary);letter-spacing:.02em}
.cbt-dict-chips{display:flex;flex-wrap:wrap;gap:4px}
.cbt-dict-chip{
  padding:2px 8px;border-radius:7px;font-size:11.5px;
  background:color-mix(in oklab,var(--dsw-alias-label-primary) 6%,transparent);
  color:var(--dsw-alias-label-primary);
}
.cbt-dict-chip-label{color:var(--dsw-alias-label-tertiary);margin-right:3px}
.cbt-dict-row{display:flex;gap:8px;font-size:12.5px;line-height:1.5}
.cbt-dict-words{color:var(--dsw-alias-label-primary);word-break:break-word}
.cbt-dict-phrases{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:3px;font-size:12.5px}
.cbt-dict-phrase-en{color:var(--dsw-alias-label-primary)}
.cbt-dict-phrase-zh{margin-left:8px;color:var(--dsw-alias-label-secondary)}
.cbt-dict-mnemonic{font-size:12.5px;line-height:1.55;color:var(--dsw-alias-label-secondary)}
.cbt-dict-word{font-size:20px;font-weight:600;letter-spacing:-0.01em}
.cbt-dict-phonetic{font-size:12px;color:var(--dsw-alias-label-secondary);font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.cbt-dict-senses{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px}
.cbt-dict-sense{font-size:13px;line-height:1.6}
.cbt-dict-pos{display:inline-block;margin-right:8px;color:#635BFF;font-size:11.5px;font-style:italic}
.cbt-dict-meaning{color:var(--dsw-alias-label-primary)}
.cbt-dict-example{margin-top:2px;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.5;padding-left:2px;border-left:2px solid color-mix(in oklab,#635BFF 30%,transparent);padding-left:8px}
.cbt-dict-note{padding-top:6px;border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.55}
.cbt-voice{display:flex;align-items:center;gap:14px;padding:18px 0}
.cbt-rec{width:48px;height:48px;border-radius:999px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 55%,transparent);display:flex;align-items:center;justify-content:center;cursor:pointer}
.cbt-rec[data-cbt-record="on"]{background:color-mix(in oklab,#e5484d 14%,transparent);border-color:color-mix(in oklab,#e5484d 45%,transparent)}
.cbt-rec-dot{width:16px;height:16px;border-radius:999px;background:#e5484d}
.cbt-rec[data-cbt-record="on"] .cbt-rec-dot{width:12px;height:12px;border-radius:4px}
.cbt-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:24px 16px;border-radius:12px;cursor:pointer;border:1px dashed color-mix(in oklab,var(--dsw-alias-label-primary) 20%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 35%,transparent)}
.cbt-drop input{display:none}
.cbt-drop-title{font-size:13px;font-weight:500}
.cbt-doc{font-size:11px;color:var(--dsw-alias-label-tertiary)}
.cbt-chip{height:24px;padding:0 9px;border-radius:999px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);background:transparent;color:var(--dsw-alias-label-secondary);font-size:11.5px;cursor:pointer}
.cbt-chip[aria-pressed="true"]{background:color-mix(in oklab,#635BFF 14%,transparent);border-color:color-mix(in oklab,#635BFF 45%,transparent);color:var(--dsw-alias-label-primary)}
.cbt-link{font-size:11.5px;color:#635BFF;text-decoration:none}
.cbt-link:hover{text-decoration:underline}
.cbt-search{height:28px;padding:0 10px;border-radius:8px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);background:transparent;color:inherit;font-size:12px;outline:none}
.cbt-list{flex:1;min-height:96px;max-height:200px;overflow:auto;display:flex;flex-direction:column;gap:6px;padding-right:2px}
.cbt-empty{margin:10px 2px;color:var(--dsw-alias-label-tertiary);font-size:11.5px;line-height:1.6}
.cbt-item{padding:8px 9px;border-radius:10px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 55%,transparent);display:flex;flex-direction:column;gap:3px}
.cbt-item-source{font-size:12.5px;font-weight:500;word-break:break-word}
.cbt-item-target{font-size:12px;color:var(--dsw-alias-label-secondary);line-height:1.5;word-break:break-word}
.cbt-item-foot{display:flex;align-items:center;justify-content:space-between;margin-top:2px}
.cbt-item-kind{font-size:10.5px;color:var(--dsw-alias-label-tertiary)}
.cbt-item-remove{border:0;background:transparent;color:var(--dsw-alias-label-tertiary);font-size:11px;cursor:pointer;padding:2px 4px;border-radius:6px}
.cbt-item-remove:hover{background:color-mix(in oklab,#e5484d 14%,transparent);color:#e5484d}
`;