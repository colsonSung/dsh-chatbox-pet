# Chatbox Pet（输入框伴侣）

一个 DeepSeek Harness 客户端插件：在会话输入框的右上角挂一只皮卡丘。它大部分时间安静地待着，只在 agent 的工作状态变化时动一下、说一句；你可以喊它的名字跟它对话，也可以右键让它说指定的话、做指定的动作，或者从你的记忆、纪要、读书、随手记里挑一件事说给你听。

一个 bundle，两个**可独立开关**的功能，外加一个音效开关：

1. **pet** —— 上面那只皮卡丘。
2. **boost** —— 提示词增强：输入框工具行里的星标按钮，加上卡片上方的折叠面板。四个个人数据源采集 + 流式改写 + 缓存 + 撤销。

三个开关在「设置 → 输入框伴侣」里各占一个原生开关，即时生效，不用重启：**显示宠物**、**提示词增强**、**音效**。第一个是宠物的展示开关——关掉它只隐藏皮卡丘（连同它的气泡、对话与说笑），提示词增强、排队消息合并和音效照常可用；它按「显示宠物」而不是角色名来命名，就是为了让人一眼看出这是一次纯粹的隐藏操作，而不是关掉一个功能。

---

## 视频理解（第三个功能）

同一个 bundle 还注册一个宿主工具 `video_read`：把上传的视频文件或 YouTube / X /
Bilibili / TikTok / 抖音 / Vimeo 链接变成模型能引用的证据——元数据、带时间码与
说话人标签的逐段转写、画面烧录字幕（OCR）、关键帧图片。

- 全本机：faster-whisper 转写、sherpa-onnx 说话人分离（模型用
  `tools/fetch-models.sh` 下载，约 45 MB）、macOS Vision 做字幕 OCR；
  不上传音频/图片，不调云端 ASR/OCR。
- 微信视频号/公众号视频明确拒绝（`unsupported-platform`），给导出/录屏的替代做法。
- 缺依赖逐项降级，并在 `warnings` 里写清原因与补装命令。
- 配置在 patch 的 `video` 命名空间，与 pet / boost / sound 互不影响；
  工作目录 `~/.dsh/video-lens/`，自动清理只碰 16 位哈希目录。

---

## 快捷功能（更多）

输入框**内部右上角**有一个玻璃质感的「更多」胶囊，点开是快捷功能面板：

| 条目 | 点一下填入的指令 |
| --- | --- |
| 录音转写 | 帮我转写这段录音，并按要点整理成清单。 |
| 图像生成 | 帮我生成一张图： |
| 帮我写作 | 帮我写一段文字，主题是： |
| 视频生成 | 帮我生成一个短视频，内容是： |
| 视频理解 | 用 video_read 看这个视频，总结它讲了什么、有谁在说话。 |
| 音乐生成 | 帮我生成一段音乐，风格是： |
| PPT 生成 | 帮我做一份 PPT，主题是： |

其中四个已经做成**真工作台**（0.5.0）：

| 工作台 | 做什么 | 依赖 |
| --- | --- | --- |
| 录音转写 | 录音或选文件 → 本地转写（带时间码）→ 填入输入框 | faster-whisper + ffmpeg |
| 帮我写作 | 体裁 + 主题 → 模型写一版 → 填入输入框 | 宿主已配置的模型 |
| PPT 生成 | 主题 + 受众 + 页数 → 模型大纲 → 本机渲染 → 下载 .pptx | 模型 + python-pptx |
| 视频理解 | 贴链接 → 生成带上下文的 video_read 指令 | 自带 video_read |

其余三个（图像 / 视频 / 音乐）仍只填入指令：它们需要本机没有的生成模型或外部服务。

- 产出型功能**只写草稿不发送**；录音不上传、PPT 在本机渲染。
- 快捷功能只把指令**填入输入框**，不发送、不自动请求。
- 加一个功能：在 `src/client/quick-actions.js` 的数组里加一个对象（id / 图标 /
  中英文标签 / 两套提示词），重新 build 即可。
- 位置：胶囊落在 composer 卡片内部右上角；编辑器右侧留白由插件样式撑开，不压字。
- 质感：玻璃（半透明 + 背景模糊/饱和 + 顶部高光 + 柔和投影），深浅色主题各自适配。
- 点外面、Esc、滚动或缩放都会关闭面板；面板是 portal，不会撑高 composer。

---

## 界面位置

| 位置 | 内容 |
| --- | --- |
| `conversation.input.dock` | 皮卡丘本体 + 气泡。挂在这个 slot 上，所以**只有会话存在时它才存在**；dock 行高度为 0，宠物绝对定位在卡片右边缘上方，不占排版空间 |
| `conversation.input.left` | 提示词增强的星标按钮 |
| `conversation.input.dock`（更宽的面板位） | 增强面板：折叠起来是一排来源 chip，点开才展开 |
| `settings.general.item` | 一行设置项：显示宠物 / 提示词增强 / 音效 |

右键菜单是唯一的例外：它用 `createPortal` 挂到 `document.body`，因为 dock 会裁切子元素，菜单留在里面会在卡片上边缘被切掉一半。

---

## 工作状态 → 动作 / 音效 / 气泡

宠物只在**状态迁移**时说话，同一状态的重复轮询什么也不做。

| 状态 | 动作（播一次后回 idle） | 音效 |
| --- | --- | --- |
| `thinking` 回合开始、模型在流式输出 | `act-typing` | 一声高而软的「皮」 |
| `working` 工具在跑 | `act-reading` | 中频双击，机械感 |
| `result` 一个步骤结束 | `act-spin` | 明亮的两音铃 |
| `waiting` 有提问/审批等着你 | `act-shy` | 两声下沉的脉冲 |
| `success` 任务完成 | `act-thunderbolt` | 上行三音琶音 |
| `error` 任务失败 | `click-angry` | 低频失谐音 |
| `error` + `detail=cancelled` 任务被中止 | `act-shy` | 柔和的下行双音 |

**为什么「完成」和「中止」要分开**：Harness 把每一种结局都记成同一个 `turn/end` 事件，真正的原因在 `data.reason.kind`（`completed` / `aborted` / `interrupted` / `error` / `max-tokens` / `blocked`）。只读事件类型，会把「任务被停掉」当成「任务做完了」，两者听起来一模一样。另外 `listEvents` 只返回元数据、不含 `data`，所以宿主侧会把最后一条 `turn/end` 通过 `readEvent` 补读成完整事件；读不到原因时按「未知」处理，**绝不默认成功**。

气泡文案来自宠物包的 `workStatusTexts`（皮卡丘口吻，≤20 字），插件在桶内随机取；停留约 5 秒后淡出。`waiting` 的气泡会一直留到等待解除。

---

## 对话模式

在输入框里打唤醒词，**不用发送**，皮卡丘就知道你在叫它。

- 唤醒词：`hi pika`、`pika pika`、`皮卡丘`、`电老鼠`、`pika`。拉丁词的边界按整词判断（`pikachu` 不算叫它），中文按子串。
- **两个时刻**，故意分开：
  1. **听到**——唤醒词一出现，立刻抬头看你（`click-surprise` + 「皮卡？」+ `wake` 音效）。瞬时，不防抖。
  2. **作答**——你停手约 0.7 秒后，按内容分类作答，各配自己的动作 + 音效 + 台词。两次作答之间有 1.2 秒冷却；冷却期内打的新内容**不会被吞掉**，引擎会报告还要等多久，到点补答。
- 它用**你的语言**回答：草稿里有中文就说中文，纯英文就说英文（界面语言只作兜底）。
- 会话进行中，工作状态的轮询照旧更新，但不再抢宠物的注意力；安静 15 秒或清空草稿就交还空闲循环。

| 意图 | 动作 | 音效 |
| --- | --- | --- |
| 打招呼 | `click-wave` | `click` |
| 夸它 | `click-cheer` | `cheer` |
| 道谢 | `click-cheer` | `cheer` |
| 骂它 | `click-angry` | `pout` |
| 道别 | `click-wave` | `click` |
| 饿了 | `act-fishing` | `cheer` |
| 一起玩 | `act-spin` | `cheer` |
| 问它在干嘛 | `act-reading` | `thinking` |
| 提问 | `act-typing` | `thinking` |
| 困了 | `act-snore` | `sleep` |
| 听不懂 | `click-surprise` | `notify` |

台词是本地词库（确定、即时、零成本），不走模型——气泡等 5–20 秒就不是陪伴了。

---

## 右键菜单

右键皮卡丘（或聚焦后按 Shift+F10）打开，四段：

1. **让它说…** —— 一句话，挥个手，气泡原样显示。折叠空白、去控制字符、按**码点**截到 60 字（emoji 不会被劈成两半）。
2. **最近说过** —— 它记住你让它说过的每一句（宿主侧 `said.json`），点一下就再说一遍。新的排最前，同一句会移到最前而不是多一条，最多 24 条；「清空」会同时清掉宿主的那份。
3. **聊点什么** —— 七种口气：话题 / 提醒 / 回忆 / 催促 / 鼓励 / 调侃 / 聊闲。
4. **做个动作** —— 17 个动作片，点哪个播哪个。

Esc 或点外面关闭，焦点回到皮卡丘。

---

## 合并排队消息

智能体忙的时候，你连续发出的几条消息会排队。工具行里会出现一个带数字的合并 chip（2–8 条时出现），点一下就把它们合成**一条仍在排队中的消息**。

- 第一条被**编辑**成合并稿，其余被**移除**，走的都是宿主自己的 `session.updateQueue` 命令路径。
- 宿主只做**整合**，不发明需求：事实、数字、文件名、约束全部保留；互相冲突的指令保留并加一条「待确认」。
- **模型不可用也能合并**：直接按原文拼接，标记 `optimized: false`，不会因为模型挂了丢掉你的话。
- 模型回答期间队列变了就**什么也不改**；有消息被智能体取走会明确提示，而不是装作成功。

## 小话题：从你自己的数据里取一句话

「聊点什么」里选一种口气，宿主会从四个来源挑一条**真实存在**的内容：

| 来源 | 说明 |
| --- | --- |
| 记忆 | dsh-memory 的长期记忆 |
| 听记 | 会议纪要 |
| 读书 | 阅读书架 |
| 瞬间 | 随手记 |

- 每种口气有偏好来源（提醒偏听记、回忆偏记忆），同一来源内取最新的。
- **引文取标题或小标题**，不取正文前 20 个字——那会得到「2026-11-07 Moments …」这种什么也没说的截断日期。
- **语言跟着被引用的那条笔记走**，不跟界面走。
- 每条接地的台词**必须露出引文**；渲染时会过滤掉没有占位符的模板，避免「取了素材却没说出来」。
- 气泡上方带来源标签（记忆 / 听记 / 读书 / 瞬间）。
- 空闲 4 分钟后，有小概率（5%）自己冒一句——规则写成纯函数，可测，不是靠运气。

---

## 接口

路由基址 `/api/chatbox-pet`，全部由宿主侧注册。

| 路由 | 说明 |
| --- | --- |
| `GET /config` | 动画白名单、气泡文案桶、包名 |
| `GET /state?session=<id>` | `{ status, changedAt, detail?, bubble?, waiting?, superagent? }`。`detail` 是最近一次任务结局的细分原因 |
| `POST /broadcast` | 向某个会话（或 `*`）推一条自定义气泡并可选覆盖状态，用于让别的插件借它的嘴说话 |
| `GET /asset/<name>.webm` | 动画字节（`video/webm`） |
| `GET /asset/<name>.mov` | 同一段动画的 HEVC-alpha 版本（`video/quicktime`，给 WebKit） |
| `GET /prefs`、`POST /prefs` | `{ pet, boost, sound }` |
| `GET\|POST\|DELETE /said` | 记住的台词：读、追加（去重 + 上限）、清空 |
| `POST /quip` | 从小话题引擎取一句：`{ kind?, locale? }` → `{ kind, text, quote, item, locale, source, key, at, sources }` |
| `POST /merge` | 排队消息合并：`{ texts, locale?, session? }` → `{ prompt, merged, optimized, reason }` |
| `POST /boost` | 提示词改写（`optimize`）与上下文调试（`debug`） |

功能被关掉时，对应路由答 **403 `chatbox-pet/disabled`**，不会出现「关了还在偷偷做事」。

**动画资产必须两种格式都注册**：Chromium/Firefox 吃 webm 的 alpha，WebKit（Safari 和所有 iOS 浏览器）会丢掉 VP9 的 alpha 面、把宠物画成黑块，只能吃 HEVC-alpha 的 mov。缺 mov 时答 404 而不是偷偷回落到 webm——客户端会退成静态头像，比黑方块好。

**缓存**：素材路由发 `cache-control: no-cache` + 内容 ETag（sha1），支持 `If-None-Match` 的 304。**不能发 `immutable`**：这些片段是原地重写的（动画流水线每次生成都覆盖同名文件），长缓存会让重建后的页面继续放旧片。

---

## 配置与状态文件

| 路径 | 内容 |
| --- | --- |
| `<profileDir>/chatbox-pet/prefs.json` | `{ pet, boost, sound }`，原子写；读的时候容错，文件坏了用默认值 |
| `<profileDir>/chatbox-pet/said.json` | 记住的台词 `[{ text, at }]`，最多 24 条 |

插件行 `config` 里的同名键只作为「这台机器还没写过文件」时的默认值，**prefs 文件优先**。

---

## 测试钩子

客户端在宠物元素上暴露这些属性，验收脚本用它们判断状态，不靠像素：

- `data-cbp-pet` —— 宠物按钮
- `data-cbp-status` —— 当前状态（`idle` / `thinking` / … / `awake`）
- `data-cbp-chat="true|false"` —— 对话模式是否激活
- `data-cbp-bubble` + `data-cbp-bubble-source` —— 气泡正文与来源标签
- `data-cbp-menu`、`data-cbp-menu-say`、`data-cbp-menu-submit`
- `data-cbp-menu-action="<clip>"` —— 动作 chip
- `data-cbp-menu-quip-kind="<kind>"` —— 小话题 chip
- `data-cbp-menu-recent-item="<text>"`、`data-cbp-menu-forget`

---

## 开发

```bash
cd plugin
npm install             # esbuild / jsdom / react（只有开发和测试需要）
node build.mjs          # 从 src/client/** 重新构建 client.js
node --test test/*.test.mjs
node tools/smoke.mjs    # 路由注册与 handler 行为
```

`client.js` 是提交进仓库的构建产物，装插件不需要构建。

---

## 已知限制

- **不带任何美术资源或角色资产**。截图/视频里的皮卡丘仅用于本地演示，不随仓库分发，也不授予任何使用权。使用者必须自备或自行生成自己有权使用的动画包；MIT 只覆盖本插件代码。素材放在 `~/.dsh/dsh-pet/pet/`，没有素材包时宠物只显示静态占位头像。
- 小话题是**本地模板 + 真实引文**，不是模型生成。想要「真的聊两句」需要接模型，代价是几秒延迟。
- 四段右键菜单只有 17 个动作，暂不支持自定义排序或按状态推荐。
