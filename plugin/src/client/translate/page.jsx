/**
 * The translation page: text, voice and documents in, a translation and a
 * favourite book out.
 *
 * Layout follows what a reader expects from a translator (input on top, output
 * under it, a side column for the kept words), not a chat transcript: the page
 * owns its state, so translating twice does not scroll anything.
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

/** Copy shared by the page and its tests. */
export const TRANSLATE_NS = 'chatboxPet';

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
 * The translation page.
 * @param {object} props - main-slot props.
 * @returns {object} the element.
 */
export function TranslatePage({ t, locale = () => 'zh', inputActions }) {
  const zh = locale() !== 'en';
  const L = React.useCallback(
    (cn, en) => (zh ? cn : en),
    [zh],
  );

  const [from, setFrom] = React.useState('auto');
  const [to, setTo] = React.useState(() => (zh ? 'en' : 'zh'));
  const [tab, setTab] = React.useState('text');
  const [source, setSource] = React.useState('');
  const [target, setTarget] = React.useState('');
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

  /**
   * Reload the favourite book.
   * @param {string} [kindFilter] - all | word | sentence.
   * @param {string} [searchText] - free text.
   * @returns {Promise<void>} resolves when loaded.
   */
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

  React.useEffect(() => () => {
    stopTimer();
    try {
      recorderRef.current?.stream?.getTracks?.().forEach((track) => track.stop());
    } catch {
      // already released
    }
  }, [stopTimer]);

  /**
   * Translate the current source text.
   * @returns {Promise<void>} resolves when done.
   */
  const translate = async () => {
    const text = source.trim();
    if (text === '') {
      setError(L('先输入要翻译的文字', 'Type something to translate first'));
      return;
    }
    setPhase('working');
    setError('');
    setSaved(false);
    try {
      const result = await call('/translate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text, from, to, locale: zh ? 'zh' : 'en' }),
      });
      setTarget(result.translated);
      setPhase('done');
    } catch (failure) {
      setError(String(failure?.message ?? failure));
      setPhase('idle');
    }
  };

  /**
   * Swap source and target, keeping both sides.
   * @returns {void}
   */
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

  /**
   * Send a dropped document to the Host for text extraction, then translate.
   * @param {File} file - the document.
   * @returns {Promise<void>} resolves when done.
   */
  const translateFile = async (file) => {
    setPhase('working');
    setError('');
    setSaved(false);
    setTab('text');
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

  /**
   * Keep the current pair in the favourite book.
   * @param {string} itemKind - word | sentence.
   * @returns {Promise<void>} resolves when saved.
   */
  const favourite = async (itemKind = 'sentence') => {
    if (source.trim() === '') return;
    try {
      await call('/favorites', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ action: 'add', kind: itemKind, source, target, from: to }),
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

      <div className="cbt-grid">
        <div className="cbt-main">
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
                  : L('点一下开始录音，转写完会自动填进文字框', 'Tap to record; the transcript lands in the text box')}
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
              onClick={translate}
            >
              {phase === 'working' ? L('翻译中…', 'Translating…') : L('翻译', 'Translate')}
            </button>
            <span className="cbt-hint">
              {source.trim() === '' ? '' : L(`${source.trim().length} 字符`, `${source.trim().length} chars`)}
            </span>
          </div>

          {target !== '' ? (
            <div className="cbt-result" data-cbt-result="true">
              <div className="cbt-result-text">{target}</div>
              <div className="cbt-actions">
                <button type="button" className="cbt-btn" onClick={() => void copy(target)}>
                  {L('复制', 'Copy')}
                </button>
                <button type="button" className="cbt-btn" data-cbt-save="true" onClick={() => void favourite('sentence')}>
                  {saved ? L('已收藏', 'Saved') : L('收藏', 'Save')}
                </button>
                {typeof inputActions?.setDraft === 'function' ? (
                  <button
                    type="button"
                    className="cbt-btn"
                    onClick={() => inputActions.setDraft({ text: target, references: [] })}
                  >
                    {L('填入输入框', 'Put in composer')}
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}

          {error !== '' ? <p className="cbt-error" data-cbt-error="true">{error}</p> : null}
        </div>

        <aside className="cbt-side">
          <div className="cbt-side-head">
            <span className="cbt-side-title">{L('收藏本', 'Saved')}</span>
            <a className="cbt-link" href={`${API}/favorites/export`} download="favorites.md">
              {L('导出', 'Export')}
            </a>
          </div>
          <div className="cbt-filters">
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
          </div>
          <input
            className="cbt-search"
            data-cbt-search="true"
            placeholder={L('搜索收藏', 'Search')}
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
        </aside>
      </div>
    </div>
  );
}

/** The page stylesheet. */
export const TRANSLATE_CSS = `
.cbt-page{
  display:flex;
  flex-direction:column;
  height:100%;
  min-height:0;
  padding:18px 22px 20px;
  gap:14px;
  color:var(--dsw-alias-label-primary);
  font-size:13px;
}
.cbt-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.cbt-select{
  height:30px;
  padding:0 10px;
  border-radius:9px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 55%,transparent);
  color:inherit;
  font-size:12.5px;
  outline:none;
}
.cbt-swap{
  width:30px;height:30px;border-radius:9px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;color:inherit;cursor:pointer;font-size:13px;line-height:1;
}
.cbt-swap:hover{background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent)}
.cbt-spacer{flex:1}
.cbt-tabs{display:flex;gap:2px;padding:2px;border-radius:10px;background:color-mix(in oklab,var(--dsw-alias-label-primary) 6%,transparent)}
.cbt-tab{
  height:26px;padding:0 12px;border:0;border-radius:8px;background:transparent;
  color:var(--dsw-alias-label-secondary);font-size:12px;cursor:pointer;
}
.cbt-tab[aria-selected="true"]{
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 92%,transparent);
  color:var(--dsw-alias-label-primary);
  box-shadow:0 1px 2px color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
}
.cbt-grid{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:14px;min-height:0;flex:1}
.cbt-main{display:flex;flex-direction:column;gap:10px;min-width:0;min-height:0}
.cbt-input{
  box-sizing:border-box;
  width:100%;
  min-height:160px;
  flex:1;
  padding:14px;
  border-radius:14px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 11%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 45%,transparent);
  color:inherit;
  font:inherit;
  font-size:14px;
  line-height:1.65;
  resize:none;
  outline:none;
}
.cbt-input:focus{border-color:color-mix(in oklab,#635BFF 55%,transparent)}
.cbt-actions{display:flex;align-items:center;gap:8px}
.cbt-btn{
  height:30px;padding:0 13px;border-radius:9px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;color:inherit;font-size:12.5px;cursor:pointer;
}
.cbt-btn:hover{background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent)}
.cbt-btn:disabled{opacity:.5;cursor:default}
.cbt-btn-primary{background:#635BFF;border-color:transparent;color:#fff}
.cbt-btn-primary:hover{background:#5149E6}
.cbt-hint{color:var(--dsw-alias-label-tertiary);font-size:11.5px}
.cbt-result{
  padding:14px;
  border-radius:14px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 40%,transparent);
  display:flex;flex-direction:column;gap:10px;
  max-height:38%;
  overflow:auto;
}
.cbt-result-text{font-size:14.5px;line-height:1.7;white-space:pre-wrap;word-break:break-word}
.cbt-error{margin:0;color:#e5484d;font-size:12px;line-height:1.5}
.cbt-voice{display:flex;align-items:center;gap:14px;padding:26px 0}
.cbt-rec{
  width:56px;height:56px;border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 55%,transparent);
  display:flex;align-items:center;justify-content:center;cursor:pointer;
}
.cbt-rec[data-cbt-record="on"]{background:color-mix(in oklab,#e5484d 14%,transparent);border-color:color-mix(in oklab,#e5484d 45%,transparent)}
.cbt-rec-dot{width:18px;height:18px;border-radius:999px;background:#e5484d}
.cbt-rec[data-cbt-record="on"] .cbt-rec-dot{width:13px;height:13px;border-radius:4px}
.cbt-drop{
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;
  padding:34px 20px;border-radius:14px;cursor:pointer;
  border:1px dashed color-mix(in oklab,var(--dsw-alias-label-primary) 20%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 35%,transparent);
}
.cbt-drop input{display:none}
.cbt-drop-title{font-size:13.5px;font-weight:500}
.cbt-doc{font-size:11.5px;color:var(--dsw-alias-label-tertiary)}
.cbt-side{
  display:flex;flex-direction:column;gap:8px;min-height:0;
  padding:12px;border-radius:14px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 35%,transparent);
}
.cbt-side-head{display:flex;align-items:center;justify-content:space-between}
.cbt-side-title{font-size:12.5px;font-weight:600}
.cbt-link{font-size:11.5px;color:#635BFF;text-decoration:none}
.cbt-link:hover{text-decoration:underline}
.cbt-filters{display:flex;gap:4px}
.cbt-chip{
  height:24px;padding:0 9px;border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;color:var(--dsw-alias-label-secondary);font-size:11.5px;cursor:pointer;
}
.cbt-chip[aria-pressed="true"]{background:color-mix(in oklab,#635BFF 14%,transparent);border-color:color-mix(in oklab,#635BFF 45%,transparent);color:var(--dsw-alias-label-primary)}
.cbt-search{
  height:28px;padding:0 10px;border-radius:8px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;color:inherit;font-size:12px;outline:none;
}
.cbt-list{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:6px;padding-right:2px}
.cbt-empty{margin:12px 2px;color:var(--dsw-alias-label-tertiary);font-size:11.5px;line-height:1.6}
.cbt-item{
  padding:8px 9px;border-radius:10px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 55%,transparent);
  display:flex;flex-direction:column;gap:3px;
}
.cbt-item-source{font-size:12.5px;font-weight:500;word-break:break-word}
.cbt-item-target{font-size:12px;color:var(--dsw-alias-label-secondary);line-height:1.5;word-break:break-word}
.cbt-item-foot{display:flex;align-items:center;justify-content:space-between;margin-top:2px}
.cbt-item-kind{font-size:10.5px;color:var(--dsw-alias-label-tertiary)}
.cbt-item-remove{
  border:0;background:transparent;color:var(--dsw-alias-label-tertiary);
  font-size:11px;cursor:pointer;padding:2px 4px;border-radius:6px;
}
.cbt-item-remove:hover{background:color-mix(in oklab,#e5484d 14%,transparent);color:#e5484d}
@media (max-width:960px){
  .cbt-grid{grid-template-columns:minmax(0,1fr)}
  .cbt-side{max-height:280px}
}
`;
