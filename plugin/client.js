window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var Kr=Object.create;var je=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var Vr=Object.getOwnPropertyNames;var Jr=Object.getPrototypeOf,Yr=Object.prototype.hasOwnProperty;var Xr=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}};var ft=(e,t)=>{for(var r in t)je(e,r,{get:t[r],enumerable:!0})},ht=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Vr(t))!Yr.call(e,o)&&o!==r&&je(e,o,{get:()=>t[o],enumerable:!(n=Gr(t,o))||n.enumerable});return e};var se=(e,t,r)=>(r=e!=null?Kr(Jr(e)):{},ht(t||!e||!e.__esModule?je(r,"default",{value:e,enumerable:!0}):r,e)),Zr=e=>ht(je({},"__esModule",{value:!0}),e);var zr={};ft(zr,{transcribe:()=>Qn});async function Qn(e){let t=await fetch("/api/chatbox-pet/transcribe?name=voice.webm",{method:"POST",headers:{"content-type":e.type||"audio/webm"},body:e}),r;try{r=await t.json()}catch{throw new Error(`\u8F6C\u5199\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(r?.ok!==!0)throw new Error(r?.error?.message??"\u8F6C\u5199\u5931\u8D25");let n=r.result?.text??"";if(n.trim()==="")throw new Error("\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF0C\u8BF7\u518D\u8BF4\u4E00\u6B21");return n}var Rr=Xr(()=>{});var aa={};ft(aa,{apply:()=>Wr,inject:()=>Ur});module.exports=Zr(aa);var ce=se(require("react"),1);var He="chatboxPet.sound",mt=!0,en=.3,tn=1e3,rn=7,We={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},ia=Object.freeze(Object.keys(We)),nn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function gt(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":nn[e]}function Pe(e){try{return e?.getItem(He)==="off"?"off":"on"}catch{return"on"}}function xt(e){mt=e!==!1}function Qe(e,t){try{e?.setItem(He,t==="off"?"off":"on")}catch{}}function yt(e){let t=Pe(e)==="on"?"off":"on";return Qe(e,t),t}function Ne(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function an(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function on(e){let t=e.now??(()=>Date.now()),r=null,n=null,o=!1,c=new Map,s=new Map,i=0;function l(){if(!o)try{let d=e.createContext();if(d==null)return;let y=d.createGain();if(y.gain.value=en,y.connect(d.destination),d.state==="suspended"&&typeof d.resume=="function"){let k=d.resume();k!==void 0&&typeof k.catch=="function"&&k.catch(()=>{})}r=d,n=y,o=!0}catch{r=null,n=null,o=!1}}function x(d,y,k){if(y<=1)return 0;if(typeof k=="string"&&k!=="")return an(k)%y;let g=(s.get(d)??0)%y;return s.set(d,g+1),g}function N(d,y){if(e.getPref()!=="on"||!o||r===null||n===null||!e.isVisible())return!1;let k=We[d];if(k===void 0)return!1;let g=t(),z=c.get(d);if(z!==void 0&&g-z<tn)return!1;c.set(d,g);let D=Array.isArray(k.variants)?k.variants:[];if(D.length===0)return!1;let h=D[x(d,D.length,y)];i=(i+1)%7;let R=(i-3)*(rn/3);try{return sn(r,n,h,R),!0}catch{return!1}}return{play:N,unlock:l,isUnlocked:()=>o,recipeNames:()=>Object.keys(We)}}function sn(e,t,r,n){let o=e.currentTime;for(let c of r.notes){let s=o+c.at,i=e.createOscillator(),l=e.createGain();i.type=c.type,i.frequency.setValueAtTime(c.freq,s),typeof c.slideTo=="number"&&i.frequency.exponentialRampToValueAtTime(c.slideTo,s+c.dur),n!==0&&typeof i.detune=="object"&&i.detune!==null&&i.detune.setValueAtTime(n,s),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(c.level,s+.008),l.gain.exponentialRampToValueAtTime(1e-4,s+c.dur),i.connect(l),l.connect(t),i.start(s),i.stop(s+c.dur+.02)}}function cn(){return{getPref:()=>{let e=Ne()?.getItem(He);return e==="on"||e==="off"?e:mt?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var V=on(cn());var $r=require("react");var he="chatboxPet",wt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","sheet.close":"\u5173\u95ED","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,t,r)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${t} \xB7 \u65F6\u957F ${Math.round(r)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.translate.title":"\u7FFB\u8BD1","sheet.translate.hint":"\u6587\u5B57\u3001\u8BED\u97F3\u6216\u6587\u4EF6\u90FD\u80FD\u7FFB\uFF1B\u8BD1\u6587\u53EF\u4EE5\u6536\u85CF\u8FDB\u751F\u8BCD\u672C\uFF0C\u6216\u76F4\u63A5\u586B\u8FDB\u8F93\u5165\u6846\u3002","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},kt={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","sheet.close":"Close","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,t,r)=>`${e} segments \xB7 ${t} \xB7 ${Math.round(r)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.translate.title":"Translate","sheet.translate.hint":"Text, voice or a document \u2014 and every translation can go into the saved list or the composer.","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var T=se(require("react"),1);var ln=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],pn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},St=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],Ke={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},la=[...St.map(e=>e.id),"fallback"];function Ge(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Nt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function vt(e){let t=Nt(e);if(t==="")return null;for(let r of ln){let n=/^[a-z ]+$/.test(r),c=(n?new RegExp(`(^|[^a-z])${Ge(r).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(Ge(r))).exec(t);if(c===null)continue;let s=c.index+(n?c[1].length:0),i=s+(n?r.replace(/ /g," ").length:r.length),l=`${t.slice(0,s)} ${t.slice(i)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:r,rest:l}}return null}function dn(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function un(e){let t=Nt(e);if(t==="")return"fallback";for(let r of St){for(let n of r.zh)if(t.includes(n))return r.id;for(let n of r.en)if(new RegExp(`(^|[^a-z])${Ge(n).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return r.id}return"fallback"}function zt(e,t){let r=Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[];return r.length===0?"":r[dn(t)%r.length]}function bn(e,t={}){let r=Ke[e]??Ke.fallback,n=t.locale==="en"?"en":"zh",o=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:Ke[e]===void 0?"fallback":e,clip:r.clip,sound:r.sound,line:zt(r[n],o)}}function Rt(e,t="zh"){let r=String(e??"");return/[\u4e00-\u9fff]/.test(r)?"zh":/[a-z]/i.test(r)||t==="en"?"en":"zh"}function Ct(e={}){let t=e.locale==="en"?"en":"zh";return zt(pn[t],e.seed??"wake")}function Tt(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),r=Number.isFinite(e.debounceMs)?e.debounceMs:700,n=Number.isFinite(e.holdMs)?e.holdMs:15e3,o=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,c=!1,s="",i="",l=0,x=0;function N(k){let g=vt(k);return g===null?c?(c=!1,s="",i="",{kind:"off"}):null:(l=t(),c?null:(c=!0,s=g.wake,i=g.rest,l=t(),x=0,{kind:"wake",wake:g.wake,digest:g.rest}))}function d(k,g={}){if(!c)return null;let z=vt(k);if(z===null)return c=!1,{kind:"off"};let D=`${z.wake}\0${z.rest}`;if(D===i)return null;let h=t(),R=h-x;if(R<o)return{kind:"cooldown",retryInMs:o-R};i=D,x=h,l=h;let q=un(z.rest);return{kind:"reply",...bn(q,{...g,seed:D}),digest:D}}function y(){return!c||t()-l<n?null:(c=!1,s="",i="",{kind:"off"})}return{observe:N,settle:d,expire:y,isActive:()=>c,debounceMs:r,holdMs:n,wakeWord:()=>s}}var _=se(require("react"),1),Ot=require("react-dom");var Mt=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Oe=60;function Et(e,t){let r=t==="en"?"en":"zh";return typeof e?.[r]=="string"?e[r]:""}function qe(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=Oe?t:r.slice(0,Oe).join("")}function It(e,t,r,n=8){let c=Number.isFinite(t?.width)?t.width:0,s=Number.isFinite(t?.height)?t.height:0,i=Number.isFinite(r?.width)?r.width:0,l=Number.isFinite(r?.height)?r.height:0,x=(Number.isFinite(e?.right)?e.right:0)-c;x<8&&(x=Number.isFinite(e?.left)?e.left:8);let N=(Number.isFinite(e?.top)?e.top:0)-s-n;N<8&&(N=(Number.isFinite(e?.bottom)?e.bottom:0)+n);let d=Math.max(8,i-c-8),y=Math.max(8,l-s-8);return{left:Math.min(Math.max(x,8),d),top:Math.min(Math.max(N,8),y)}}var Ve=["topic","reminder","recall","nudge","encourage","tease","chitchat"],Pt={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},qt=9e3,fn=24e4,Je=.05;function Lt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<fn)return!1;let r=Number.isFinite(e.chance)?e.chance:Je;return(typeof e.random=="function"?e.random:Math.random)()<r}function Dt(e,t){let r=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[r]??""}function At(e){return Pt[e]??Pt.chitchat}async function Ft(e={}){let t=typeof e.fetch=="function"?e.fetch:(...r)=>globalThis.fetch(...r);try{let r=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!r.ok)return null;let n=await r.json();if(n?.ok!==!0)return null;let o=n.result;return typeof o?.text!="string"||o.text.trim()===""?null:{kind:Ve.includes(o.kind)?o.kind:"chitchat",text:o.text.trim(),quote:typeof o?.quote=="string"?o.quote:"",item:typeof o?.item=="string"?o.item:"",source:typeof o?.source?.label=="string"?o.source:null,sources:Array.isArray(o?.sources)?o.sources:[]}}catch{return null}}var jt=268;function _t({anchor:e,locale:t,onSay:r,onAction:n,onQuip:o,recent:c,onForget:s,onClose:i,t:l}){let x=_.useRef(null),N=_.useRef(null),[d,y]=_.useState(""),[k,g]=_.useState(()=>({left:0,top:0,ready:!1}));_.useLayoutEffect(()=>{let h=x.current;if(h===null)return;let R=h.getBoundingClientRect().height,q=It(e,{width:jt,height:R},{width:window.innerWidth,height:window.innerHeight});g({...q,ready:!0})},[e]),_.useEffect(()=>{let h=N.current;h!==null&&typeof h.focus=="function"&&h.focus()},[]),_.useEffect(()=>{let h=q=>{let P=x.current;P!==null&&q.target instanceof Node&&P.contains(q.target)||i()},R=q=>{q.key==="Escape"&&(q.preventDefault(),q.stopPropagation(),i())};return document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",R,!0),()=>{document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",R,!0)}},[i]);let z=()=>{let h=qe(d);h!==""&&(r(h),i())},D={left:`${Math.round(k.left)}px`,top:`${Math.round(k.top)}px`,width:`${jt}px`,visibility:k.ready?"visible":"hidden"};return(0,Ot.createPortal)(_.createElement("div",{ref:x,className:"cbp-menu",style:D,role:"menu","aria-label":l("menu.title"),"data-cbp-menu":"true",onContextMenu:h=>h.preventDefault()},_.createElement("div",{className:"cbp-menu-say"},_.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},l("menu.say")),_.createElement("div",{className:"cbp-menu-row"},_.createElement("input",{id:"cbp-menu-say-input",ref:N,className:"cbp-menu-input",type:"text",value:d,maxLength:Oe,placeholder:l("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:h=>y(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),h.stopPropagation(),z())}}),_.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:qe(d)==="",onClick:z},l("menu.saySubmit")))),c.length===0?null:_.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},_.createElement("span",{className:"cbp-menu-label"},l("menu.recent"),_.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:s},l("menu.clear"))),_.createElement("div",{className:"cbp-menu-recent-list"},c.slice(0,8).map(h=>_.createElement("button",{key:`${h.text}-${h.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":h.text,title:h.text,onClick:()=>{r(h.text),i()}},h.text)))),_.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},_.createElement("span",{className:"cbp-menu-label"},l("menu.quip")),_.createElement("div",{className:"cbp-menu-grid"},Ve.map(h=>_.createElement("button",{key:h,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":h,onClick:()=>{o(h),i()}},Dt(h,t))))),_.createElement("div",{className:"cbp-menu-actions"},_.createElement("span",{className:"cbp-menu-label"},l("menu.action")),_.createElement("div",{className:"cbp-menu-grid"},Mt.map(h=>_.createElement("button",{key:h.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":h.clip,title:h.clip,onClick:()=>{n(h.clip),i()}},Et(h,t))))),_.createElement("p",{className:"cbp-menu-hint"},l("menu.hint"))),document.body)}var Ye="/api/chatbox-pet/said",Bt="chatboxPet.said";function Ze(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=60?t:r.slice(0,60).join("")}function hn(e,t,r=Date.now()){let n=Ze(t),o=Array.isArray(e)?e.filter(s=>typeof s?.text=="string"):[];if(n==="")return o.slice(0,24);let c=o.filter(s=>s.text!==n);return[{text:n,at:r},...c].slice(0,24)}function Xe(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],r=[],n=new Set;for(let o of t){let c=Ze(typeof o=="string"?o:o?.text);if(!(c===""||n.has(c))&&(n.add(c),r.push({text:c,at:Number.isFinite(o?.at)?o.at:0}),r.length>=24))break}return r}function mn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function gn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...d)=>globalThis.fetch(...d),r=e.storage===void 0?mn():e.storage,n=()=>{try{let d=r?.getItem(Bt);return d==null?[]:Xe(JSON.parse(d))}catch{return[]}},o=d=>{try{r?.setItem(Bt,JSON.stringify(d))}catch{}},c=Object.freeze({lines:Object.freeze(n()),loaded:!1}),s=new Set;function i(d){c=Object.freeze({...c,...d});for(let y of s)try{y()}catch{}}async function l(){try{let y=await(await t(Ye,{method:"GET",headers:{accept:"application/json"}})).json();if(y?.ok===!0){let k=Xe(y.result);return i({lines:k,loaded:!0}),o(k),k}}catch{}return i({loaded:!0}),c.lines}async function x(d){let y=Ze(d);if(y==="")return c.lines;let k=hn(c.lines,y);i({lines:Object.freeze(k)}),o(k);try{let z=await(await t(Ye,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:y})})).json();if(z?.ok===!0){let D=Xe(z.result);return i({lines:D,loaded:!0}),o(D),D}}catch{}return c.lines}async function N(){i({lines:Object.freeze([])}),o([]);try{await t(Ye,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(d){return typeof d!="function"?()=>{}:(s.add(d),()=>s.delete(d))},getSnapshot(){return c},refresh:l,remember:x,clear:N}}var ze=gn();var et=null;function $t(e,t){let r=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(r)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(r)?!1:/Mac/i.test(typeof t=="string"?t:r)}function Ut(e){if(e!==void 0)return $t(e.userAgent,e.platform)?".mov":".webm";if(et===null){let t=typeof navigator>"u"?void 0:navigator;et=$t(t?.userAgent,t?.platform)?".mov":".webm"}return et}var Wt={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},xn={failed:"click-angry",cancelled:"act-shy"};function Ht(e){let t=e?.previous?.status??"idle",r=e?.next?.status??"idle",n=e?.previous?.detail??null,o=e?.next?.detail??null,c=r!==t||o!==n,i=t==="working"&&r==="thinking"?"result":r;if(!c)return{changed:!1,status:i,detail:o,clip:null,sound:null};if(r==="idle")return{changed:!0,status:"idle",detail:o,clip:null,sound:null};let l=i==="error"?xn[o]??Wt.error:Wt[i]??e?.idleClip??null;return{changed:!0,status:i,detail:o,clip:l,sound:gt(i,o)}}var yn=6e3,wn=5e3,kn={thinking:0,working:1,result:2,waiting:3,success:4,error:5},me="idle-breathe-loop",Qt="click-wave",Kt=["act-harley","act-beach"],Gt=6e3,vn=9e4,Sn=.12;function Vt({sessionId:e,t,useInput:r,locale:n}){let o=T.useRef(null),c=T.useRef(null),s=T.useRef("idle"),i=T.useRef(null),l=T.useRef(Date.now()),x=T.useRef(null),N=T.useRef(0),d=T.useRef(0),[y,k]=T.useState(null),[g,z]=T.useState(null),h=T.useSyncExternalStore(ze.subscribe,ze.getSnapshot,ze.getSnapshot).lines,R=T.useRef(0),[q,P]=T.useState(null),[M,v]=T.useState("idle"),[I,L]=T.useState(!0),F=T.useRef(!1),O=T.useCallback((m,C)=>{let A=o.current;if(A===null||A.dataset.clip===m&&A.loop===C&&!A.ended)return;A.dataset.clip=m,A.loop=C,A.src=`/api/chatbox-pet/asset/${m}${Ut()}`;let U=A.play();U!==void 0&&typeof U.catch=="function"&&U.catch(()=>{})},[]),ie=T.useCallback(()=>{let m=o.current;if(m!==null){if(!F.current&&m.dataset.clip!==me){F.current=!0,O(me,!0);return}L(!1)}},[O]),ee=T.useCallback(()=>{window.clearTimeout(R.current),P(null)},[]),X=T.useCallback((m,C,A,U=wn,H=null)=>{window.clearTimeout(R.current),P({text:m,kind:A,source:H}),C||(R.current=window.setTimeout(()=>P(null),U))},[]),ge=T.useCallback(m=>{let C=c.current?.workStatusTexts,A=kn[m],U=A===void 0||!Array.isArray(C)?void 0:C[A];if(!(!Array.isArray(U)||U.length===0))return U[Math.floor(Math.random()*U.length)]},[]),le=T.useCallback(m=>{let C=typeof m?.status=="string"?m.status:"idle",A=s.current,U=typeof m?.detail=="string"?m.detail:null,H=Ht({previous:{status:A,detail:i.current},next:{status:C,detail:U},idleClip:me});if(!H.changed){C==="waiting"&&typeof m?.bubble=="string"&&m.bubble!==""&&X(m.bubble,!0,"waiting");return}if(s.current=C,i.current=U,v(C),x.current!==null&&x.current.isActive()){l.current=Date.now();return}if(C==="idle"){O(me,!0),ee(),l.current=Date.now();return}l.current=Date.now();let Q=H.status,ke=H.detail;O(H.clip??me,!1);let ve=typeof m?.bubble=="string"&&m.bubble!==""?m.bubble:ge(Q),Ie=m?.source==="broadcast"?"notify":H.sound;V.play(Ie,ve),ve!==void 0?X(ve,C==="waiting",Q):ee()},[ee,ge,O,X]),xe=T.useCallback(async m=>{let C=await Ft({kind:m,locale:typeof n=="function"?n():"zh"});if(C===null)return;let A=At(C.kind);O(A.clip,!1),V.play(A.sound,C.text),X(C.text,!1,"quip",qt,C.source?.label??null)},[n,O,X]),pe=T.useCallback(()=>{if(s.current!=="idle"||x.current!==null&&x.current.isActive())return;let C=Date.now()-l.current;if(C<vn)return;if(Lt({idleForMs:C,chance:Je})){l.current=Date.now(),xe(null);return}if(Math.random()>Sn)return;let A=Kt[Math.floor(Math.random()*Kt.length)];O(A,!1),l.current=Date.now()},[O,xe]),ne=T.useCallback((m,C,A)=>{typeof m.clip=="string"&&m.clip!==""&&O(m.clip,!1),typeof m.sound=="string"&&m.sound!==""&&V.play(m.sound,m.line),typeof m.line=="string"&&m.line!==""&&X(m.line,C,"chat",A)},[O,X]),ae=T.useCallback(()=>{window.clearTimeout(d.current),k(null),O(me,!0),ee()},[ee,O]),oe=typeof r=="function"?r(m=>typeof m?.draft=="string"?m.draft:""):"";T.useEffect(()=>{x.current===null&&(x.current=Tt());let m=x.current,C=Rt(oe,typeof n=="function"?n():"zh"),A=m.observe(oe);if(A!==null&&A.kind==="wake"&&(k({phase:"awake"}),ne({clip:"click-surprise",sound:"wake",line:Ct({locale:C,seed:oe})},!0)),A!==null&&A.kind==="off"){ae();return}if(window.clearTimeout(N.current),!m.isActive())return;let U=H=>{N.current=window.setTimeout(()=>{let Q=m.settle(oe,{locale:C});if(Q!==null&&Q.kind==="cooldown"){U(Math.max(120,Q.retryInMs));return}Q===null||Q.kind!=="reply"||(ne(Q,!1,Gt),window.clearTimeout(d.current),d.current=window.setTimeout(()=>ae(),m.holdMs))},H)};return U(m.debounceMs),()=>window.clearTimeout(N.current)},[oe,n,ne,ae]),T.useEffect(()=>{ze.refresh()},[]),T.useEffect(()=>{let m=!1;return fetch("/api/chatbox-pet/config").then(C=>C.ok?C.json():null).then(C=>{!m&&C?.ok===!0&&(c.current=C.result)}).catch(()=>{}),()=>{m=!0}},[]),T.useEffect(()=>{if(typeof e!="string"||e==="")return;let m=!1,C=0,A=async()=>{if(document.visibilityState==="visible"){try{let Q=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),ke=Q.ok?await Q.json():null;!m&&ke?.ok===!0&&le(ke.result)}catch{}m||pe()}},U=()=>{C=window.setTimeout(async()=>{await A(),m||U()},yn)},H=()=>{document.visibilityState==="visible"&&A()};return document.addEventListener("visibilitychange",H),A(),U(),()=>{m=!0,window.clearTimeout(C),document.removeEventListener("visibilitychange",H)}},[e,le]),T.useEffect(()=>(O(me,!0),()=>window.clearTimeout(R.current)),[O]);let[fe,de]=T.useState(()=>Pe(Ne())==="on"),ye=T.useCallback(m=>{let C=qe(m);C!==""&&(O(Qt,!1),V.play("click",C),X(C,!1,"chat",Gt),ze.remember(C))},[O,X]),we=T.useCallback(m=>{typeof m!="string"||m===""||(O(m,!1),V.play("click",m))},[O]),ue=T.useCallback(()=>{let m=document.querySelector("[data-cbp-pet]"),C=m instanceof Element?m.getBoundingClientRect():null;C!==null&&z({left:C.left,right:C.right,top:C.top,bottom:C.bottom})},[]);return T.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},T.createElement("div",{className:"cbp-stage"},T.createElement("div",{className:(q===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(q?.kind==="error"?" cbp-bubble--error":"")+(q?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},q?.source?T.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":q.source},q.source):null,T.createElement("span",{className:"cbp-bubble-text"},q?.text??"")),T.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(fe?"sound.on":"sound.off"),"aria-pressed":fe,onClick:m=>{m.stopPropagation();let C=yt(Ne())==="on";de(C),prefsStore.update({sound:C})}},fe?T.createElement(Nn,null):T.createElement(zn,null)),T.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":y===null?M:"awake","data-cbp-chat":y===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{V.play("click"),O(Qt,!1)},onContextMenu:m=>{m.preventDefault(),m.stopPropagation(),ue()},onKeyDown:m=>{(m.key==="ContextMenu"||m.shiftKey&&m.key==="F10")&&(m.preventDefault(),ue())},"aria-haspopup":"menu","aria-expanded":g===null?"false":"true"},I?T.createElement("video",{ref:o,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:m=>{m.currentTarget.loop||O(me,!0)},onError:ie}):T.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),g===null?null:T.createElement(_t,{anchor:g,locale:typeof n=="function"?n():"zh",onSay:ye,onAction:we,onQuip:m=>{xe(m)},recent:h,onForget:()=>{ze.clear()},onClose:()=>z(null),t}))}function Nn(){return T.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},T.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),T.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),T.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function zn(){return T.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},T.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),T.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Jt=`
.cbp-root{
  position:relative;
  height:0;
  /* Mirror the composer card's geometry (same recipe as prompt-boost's
     panel, both vars verified in dsh-client-ui-conversation): the dock row
     itself is full width, so the root must re-derive the card's width and
     center itself before the stage can anchor to the card's right edge. */
  width:min(
    calc(100% - var(--dsh-composer-side-clearance, 16px)*2),
    var(--dsh-composer-card-max-width, 952px)
  );
  margin:0 auto;
  overflow:visible;
  pointer-events:none;
  z-index:20;
}
.cbp-stage{
  position:absolute;
  right:12px;
  bottom:0;
  width:112px;
  height:84px;
  pointer-events:none;
}
.cbp-pet{
  position:relative;
  display:block;
  width:112px;
  height:84px;
  padding:0;
  border:0;
  background:transparent;
  cursor:pointer;
  pointer-events:auto;
  overflow:hidden;
  border-radius:var(--dsw-radius-md);
  appearance:none;
  animation:cbp-fade-in 200ms cubic-bezier(.23,1,.32,1);
}
.cbp-pet:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:2px;
}
/*
 * The clips are 640x360 with the character off-center (bbox centers x 326-388,
 * union over all frames per clip, measured with libvpx alpha decode). The
 * crop window is centered on source (350,180): at 154px wide the video renders
 * the idle character ~69px tall, and every clip's head/tail/feet extremes stay
 * inside the 112x84 box \u2014 verified frame-by-frame against idle-breathe,
 * act-typing, act-reading, act-shy, act-thunderbolt, click-wave, click-angry.
 * Only click-wave's waving-hand sweep grazes the right edge, which is action,
 * not the body. Absolute sizing, no layout cost, hit area stays the container.
 */
.cbp-pet video{
  position:absolute;
  left:-28px;
  top:-1px;
  width:154px;
  height:auto;
  max-width:none;
}
.cbp-pet img{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
}
.cbp-pet::after{
  content:"";
  position:absolute;
  left:18%;
  right:18%;
  bottom:4px;
  height:8px;
  border-radius:50%;
  background:radial-gradient(ellipse at center,
    color-mix(in oklab,var(--dsw-alias-label-primary) 22%,transparent),
    transparent 70%);
  z-index:-1;
  pointer-events:none;
}
/*
 * Bubble v2: a compact speech bubble on the host's overlay recipe \u2014 overlay
 * surface, 10% hairline, one soft elevation, 12px/500 ink. The tail is a
 * rotated square sharing surface + hairline, bottom-right, pointing at the
 * pet's head. The only per-status cue is the 3px accent rule on the left:
 * Pikachu yellow normally, the host error token on error. The bubble grows
 * leftward from its right anchor (the pet is at the viewport's right edge),
 * so it can never clip outside the conversation column.
 */
.cbp-bubble{
  position:absolute;
  right:20px;
  bottom:calc(100% + 8px);
  box-sizing:border-box;
  /*
   * width:max-content, not the default shrink-to-fit: the bubble's containing
   * block is the 112px pet stage, and shrink-to-fit would cap the bubble at
   * 92px \u2014 a long line then wrapped into a tall narrow column. max-content
   * lets the bubble grow to its text (and max-width still wraps it).
   */
  width:max-content;
  max-width:236px;
  padding:6px 10px 6px 13px;
  border-radius:var(--dsw-radius-md);
  background:var(--dsw-alias-bg-overlay);
  color:var(--dsw-alias-label-primary);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  box-shadow:0 4px 16px -6px color-mix(in oklab,var(--dsw-alias-label-primary) 18%,transparent);
  font-size:12px;
  line-height:1.45;
  font-weight:500;
  pointer-events:none;
  opacity:0;
  visibility:hidden;
  transform:translateY(6px);
  transition:opacity 120ms ease,transform 120ms ease,visibility 0s linear 120ms;
}
.cbp-bubble--visible{
  opacity:1;
  visibility:visible;
  transform:translateY(0);
  transition:opacity 180ms cubic-bezier(.2,0,0,1),transform 180ms cubic-bezier(.2,0,0,1);
}
.cbp-bubble::before{
  content:"";
  position:absolute;
  left:5px;
  top:7px;
  bottom:7px;
  width:3px;
  border-radius:999px;
  background:#E9A13B;
}
body[data-ds-dark-theme] .cbp-bubble::before{
  background:#FFC46B;
}
.cbp-bubble--error::before{
  background:var(--dsw-alias-state-error-primary);
}
.cbp-bubble::after{
  content:"";
  position:absolute;
  right:22px;
  bottom:-5px;
  width:10px;
  height:10px;
  background:var(--dsw-alias-bg-overlay);
  border-right:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  border-bottom:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  border-bottom-right-radius:4px;
  transform:rotate(45deg);
}
.cbp-bubble-text{
  display:block;
  max-width:180px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
/* A small-talk line is a sentence, not a status hint: it wraps instead of
   being cut, and the bubble grows with it. */
.cbp-bubble--quip{
  max-width:264px;
}
.cbp-bubble--quip .cbp-bubble-text{
  max-width:none;
  white-space:normal;
  overflow:visible;
  text-overflow:clip;
  line-height:1.5;
}
/*
 * The sound toggle: a small ghost icon button at the pet's top-left. Hidden
 * until the pet is hovered or focus is inside it \u2014 except when muted, where
 * it stays visible so the user can always find the way back.
 */
.cbp-sound{
  position:absolute;
  top:-6px;
  left:-6px;
  z-index:2;
  width:24px;
  height:24px;
  padding:4px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:0;
  border-radius:999px;
  background:transparent;
  cursor:pointer;
  pointer-events:auto;
  color:var(--dsw-alias-label-secondary);
  opacity:0;
  visibility:hidden;
  transition:opacity 100ms ease,background-color 100ms ease,color 100ms ease,visibility 0s linear 100ms;
}
.cbp-stage:hover .cbp-sound,
.cbp-stage:focus-within .cbp-sound,
.cbp-sound[aria-pressed="false"]{
  opacity:1;
  visibility:visible;
  transition:opacity 100ms ease,background-color 100ms ease,color 100ms ease;
}
.cbp-sound:hover{
  background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary);
}
.cbp-sound:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:1px;
  opacity:1;
  visibility:visible;
}
.cbp-sound svg{
  width:14px;
  height:14px;
  display:block;
}
@keyframes cbp-fade-in{
  from{opacity:0}
  to{opacity:1}
}
@media (prefers-reduced-motion: reduce){
  .cbp-pet{animation:none}
  .cbp-bubble,
  .cbp-bubble--visible{transition:opacity 120ms ease,visibility 0s linear 120ms;transform:none}
  .cbp-bubble--visible{transition:opacity 180ms ease}
  .cbp-sound{transition:none}
}

/*
 * Context menu: portalled to document.body (the composer dock clips its own
 * children, so an in-dock menu would be cut at the card edge). Host overlay
 * surface + hairline + one float shadow, matching the bubble's recipe so the
 * pet's two popovers read as one family. Chips are quiet by default and only
 * tint on hover, so 17 actions never look like a wall of buttons.
 */
.cbp-menu{
  position:fixed;
  z-index:2147483000;
  box-sizing:border-box;
  padding:10px;
  border-radius:var(--dsw-radius-lg, 12px);
  background:var(--dsw-alias-bg-overlay);
  color:var(--dsw-alias-label-primary);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  box-shadow:0 16px 40px -12px color-mix(in oklab,var(--dsw-alias-label-primary) 28%,transparent);
  font-size:12px;
  line-height:1.4;
  animation:cbp-menu-in 120ms cubic-bezier(.23,1,.32,1);
}
@keyframes cbp-menu-in{
  from{opacity:0;transform:translateY(4px);}
  to{opacity:1;transform:translateY(0);}
}
.cbp-menu-label{
  display:block;
  margin:0 0 6px;
  color:var(--dsw-alias-label-secondary);
  font-size:11px;
  font-weight:500;
  letter-spacing:.02em;
}
.cbp-menu-row{
  display:flex;
  gap:6px;
  align-items:center;
}
.cbp-menu-input{
  box-sizing:border-box;
  flex:1 1 auto;
  min-width:0;
  height:28px;
  padding:0 8px;
  border-radius:var(--dsw-radius-md);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 14%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay) 92%,var(--dsw-alias-label-primary) 8%);
  color:var(--dsw-alias-label-primary);
  font:inherit;
  font-size:12px;
}
.cbp-menu-input:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:1px;
}
.cbp-menu-submit{
  flex:0 0 auto;
  height:28px;
  padding:0 12px;
  border:0;
  border-radius:var(--dsw-radius-md);
  background:var(--dsw-alias-brand-primary);
  color:#fff;
  font:inherit;
  font-size:12px;
  font-weight:500;
  cursor:pointer;
}
.cbp-menu-submit:disabled{
  opacity:.45;
  cursor:default;
}
.cbp-menu-actions{
  margin-top:10px;
  padding-top:10px;
  border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
}
.cbp-menu-grid{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:4px;
  max-height:168px;
  overflow:auto;
  scrollbar-width:none;
}
.cbp-menu-grid::-webkit-scrollbar{display:none;}
.cbp-menu-chip{
  height:26px;
  padding:0 6px;
  border:0;
  border-radius:var(--dsw-radius-md);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font:inherit;
  font-size:12px;
  line-height:1;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  cursor:pointer;
}
.cbp-menu-chip:hover{
  background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary);
}
.cbp-menu-chip:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:-2px;
}
.cbp-menu-hint{
  margin:8px 0 0;
  color:var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  font-size:11px;
  opacity:.8;
}

/* Remembered lines: the list the reader built by making the pet talk. One row
   per line, ellipsised, newest first; "clear" sits in the section label. */
.cbp-menu-recent{
  margin-top:10px;
  padding-top:10px;
  border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
}
.cbp-menu-recent .cbp-menu-label{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
}
.cbp-menu-forget{
  border:0;
  background:transparent;
  color:var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  font:inherit;
  font-size:11px;
  cursor:pointer;
  padding:0 2px;
  border-radius:var(--dsw-radius-sm, 4px);
}
.cbp-menu-forget:hover{color:var(--dsw-alias-label-primary);}
.cbp-menu-recent-list{
  display:flex;
  flex-direction:column;
  gap:2px;
  max-height:132px;
  overflow:auto;
  scrollbar-width:none;
}
.cbp-menu-recent-list::-webkit-scrollbar{display:none;}
.cbp-menu-recent-item{
  height:24px;
  padding:0 6px;
  border:0;
  border-radius:var(--dsw-radius-md);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font:inherit;
  font-size:12px;
  text-align:left;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  cursor:pointer;
}
.cbp-menu-recent-item:hover{
  background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary);
}
.cbp-menu-recent-item:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:-2px;
}

/* Small talk: the seven kinds the pet can bring up. Same chip shape as the
   actions, one section higher, because it is the pet talking, not the menu. */
.cbp-menu-quip{
  margin-top:10px;
  padding-top:10px;
  border-top:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
}

/* Where a small-talk line came from ('\u8BB0\u5FC6' / '\u542C\u8BB0' / '\u77AC\u95F4'). A quiet tag
   above the line, so the reader knows the pet is quoting their own notes. */
.cbp-bubble-source{
  display:block;
  margin:0 0 3px;
  color:var(--dsw-alias-label-secondary);
  font-size:10px;
  font-weight:500;
  letter-spacing:.04em;
  opacity:.75;
}

/*
 * The queue-merge chip in the composer tool row.
 *
 * Same 28px ghost footprint as the Host's own tool buttons so the row keeps one
 * rhythm; the count rides in a small pill because "how many will this fold" is
 * the only question the reader has before clicking. It only ever renders while
 * a queue exists, so the row never carries a permanently disabled control.
 */
.cbp-merge{
  display:inline-flex;
  align-items:center;
  gap:4px;
  height:28px;
  padding:0 6px 0 5px;
  border:0;
  border-radius:var(--dsw-radius-md);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font:inherit;
  font-size:12px;
  cursor:pointer;
  transition:background-color 120ms ease,color 120ms ease;
}
.cbp-merge:hover{
  background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary);
}
.cbp-merge:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:1px;
}
.cbp-merge[disabled]{cursor:default;opacity:.6;}
.cbp-merge-count{
  min-width:16px;
  height:16px;
  padding:0 4px;
  border-radius:999px;
  background:color-mix(in oklab,var(--dsw-alias-brand-primary) 16%,transparent);
  color:var(--dsw-alias-brand-primary);
  font-size:11px;
  font-weight:600;
  line-height:16px;
  text-align:center;
}
@keyframes cbp-merge-spin{to{transform:rotate(360deg);}}
.cbp-merge[data-cbp-merge-phase="running"] svg{animation:cbp-merge-spin 900ms linear infinite;}
@media (prefers-reduced-motion:reduce){
  .cbp-merge[data-cbp-merge-phase="running"] svg{animation:none;}
}
`;var Yt="/api/chatbox-pet/prefs",Rn=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function Cn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...i)=>globalThis.fetch(...i),r=Rn,n=new Set;function o(i){r={...r,...i};for(let l of n)try{l()}catch{}}async function c(){try{let l=await(await t(Yt,{method:"GET",headers:{accept:"application/json"}})).json();l?.ok===!0&&l.result!==null&&typeof l.result=="object"?o({pet:l.result.pet!==!1,boost:l.result.boost!==!1,sound:l.result.sound!==!1,loaded:!0}):o({loaded:!0})}catch{}return r}async function s(i){let l=r,x={};for(let N of["pet","boost","sound"])typeof i?.[N]=="boolean"&&(x[N]=i[N]);o(x);try{let d=await(await t(Yt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:x})})).json();if(d?.ok!==!0||d.result===null||typeof d.result!="object")throw new Error("rejected");return o({pet:d.result.pet!==!1,boost:d.result.boost!==!1,sound:d.result.sound!==!1,loaded:!0}),!0}catch{return o({pet:l.pet,boost:l.boost,sound:l.sound}),!1}}return{subscribe(i){return typeof i!="function"?()=>{}:(n.add(i),()=>n.delete(i))},getSnapshot(){return r},refresh:c,update:s}}var re=Cn();var K=se(require("react"),1),Xt=require("react");var Zt=`
.cbp-set-row{display:flex;flex-direction:column;gap:10px;padding:14px 0;border-bottom:.5px solid var(--dsw-alias-border-l2,#e6e6e6)}
.cbp-set-head{display:flex;flex-direction:column;gap:3px}
.cbp-set-title{font-size:14px;font-weight:500;line-height:22px;color:var(--dsw-alias-label-primary,#1f1f1f)}
.cbp-set-desc{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary,#8a8a8a)}
.cbp-set-items{display:flex;flex-wrap:wrap;gap:18px}
.cbp-set-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;line-height:20px;color:var(--dsw-alias-label-primary,#1f1f1f);cursor:pointer}
.cbp-switch{position:relative;display:inline-flex;flex:none;width:32px;height:18px}
.cbp-switch input{position:absolute;inset:0;margin:0;opacity:0;cursor:pointer;width:100%;height:100%}
.cbp-switch-track{position:absolute;inset:0;border-radius:999px;background:var(--dsw-alias-bg-layer-3,#dcdcdc);transition:background-color 140ms ease;pointer-events:none}
.cbp-switch-thumb{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:999px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.28);transition:transform 140ms ease;pointer-events:none}
.cbp-switch input:checked + .cbp-switch-track{background:#B4690E}
.cbp-switch input:checked ~ .cbp-switch-thumb{transform:translateX(14px)}
.cbp-switch input:focus-visible + .cbp-switch-track{outline:2px solid var(--dsw-alias-label-primary,#1f1f1f);outline-offset:2px}
body[data-ds-dark-theme] .cbp-switch input:checked + .cbp-switch-track{background:#FFC46B}
body[data-ds-dark-theme] .cbp-switch-thumb{background:#1b1b1c}
@media (prefers-reduced-motion:reduce){.cbp-switch-track,.cbp-switch-thumb{transition:none}}
`;function tt({id:e,checked:t,label:r,onChange:n}){return K.createElement("label",{className:"cbp-set-item",htmlFor:e},K.createElement("span",{className:"cbp-switch"},K.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:o=>n(o.target.checked),"data-cbp-pref":e}),K.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),K.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),r)}function er({t:e}){let t=(0,Xt.useSyncExternalStore)(re.subscribe,re.getSnapshot,re.getSnapshot),[r,n]=K.useState(()=>Pe(Ne())==="on"),o=c=>{n(c),Qe(Ne(),c?"on":"off"),re.update({sound:c})};return K.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},K.createElement("div",{className:"cbp-set-head"},K.createElement("span",{className:"cbp-set-title"},e("settings.title")),K.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),K.createElement("div",{className:"cbp-set-items"},K.createElement(tt,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:c=>{re.update({pet:c})}}),K.createElement(tt,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:c=>{re.update({boost:c})}}),K.createElement(tt,{id:"chatbox-pet-feature-sound",checked:r,label:e("settings.sound"),onChange:o})))}var Le=se(require("react"),1),Be=require("react"),nt=require("@deepseek-ai/dsh-client-ui-primitives");var W=require("react");function Me({size:e=16,children:t}){return(0,W.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function _e({size:e=16}){return(0,W.createElement)(Me,{size:e},[(0,W.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,W.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function tr({size:e=16}){return(0,W.createElement)(Me,{size:e},(0,W.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function rr({size:e=16}){return(0,W.createElement)(Me,{size:e},[(0,W.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function rt({size:e=16}){return(0,W.createElement)(Me,{size:e},[(0,W.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,W.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function nr({size:e=16}){return(0,W.createElement)(Me,{size:e},(0,W.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function ar({size:e=16}){return(0,W.createElement)(Me,{size:e},[(0,W.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,W.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,W.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,W.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function Tn({label:e,children:t}){return typeof nt.Tooltip=="function"?Le.createElement(nt.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Be.cloneElement)(t,{title:e})}function or({inputActions:e,useInput:t,store:r,t:n,locale:o}){let c=(0,Be.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),s=typeof t=="function"?t(y=>y):void 0;r.setDraftMirror(e,s);let i=typeof s?.draft=="string"?s.draft:"",l=c.phase==="running"||c.phase==="streaming",x=c.phase!=="idle",N=n(l?"button.running":"button.label"),d=l?n("button.running"):i.trim()===""?n("button.tooltipCompose"):n("button.tooltip");return Le.createElement(Tn,{label:d},Le.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":l?"true":"false","data-pb-open":x?"true":"false","aria-label":N,"aria-busy":l?"true":void 0,"aria-expanded":x?"true":"false","aria-controls":r.panelId(e),onMouseDown:y=>y.preventDefault(),onClick:()=>r.start(e,{locale:typeof o=="function"?o():"zh"})},Le.createElement(_e,{size:16})))}var J=se(require("react"),1),$e=require("react"),it=require("@deepseek-ai/dsh-client-ui-primitives");var ir="next-turn";function at(e){return(Array.isArray(e?.content)?e.content:[]).filter(r=>r!==null&&typeof r=="object"&&r.type==="text"&&typeof r.text=="string").map(r=>r.text).join("").trim()}function Mn(e){return(Array.isArray(e?.content)?e.content:[]).some(r=>r===null||typeof r!="object"||r.type!=="text")}function sr(e){let t=[];try{let n=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();t=Array.isArray(n?.[ir])?n[ir]:[]}catch{t=[]}return ot(t)}function ot(e){let r=(Array.isArray(e)?e:[]).filter(s=>s!==null&&typeof s=="object"&&typeof s.id=="string"),n=r.map(at),o=r.filter((s,i)=>!Mn(s)&&n[i]!==""),c="";return r.length>=2&&o.length!==r.length?c="attachment":r.length>8?c="too-many":r.length<2&&(c="too-few"),{items:r,texts:n,mergeable:r.length,blocked:c}}async function En(e,t={}){let r=In(e),n=typeof t.fetchImpl=="function"?t.fetchImpl:(...o)=>globalThis.fetch(...o);try{let o=await n("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof t.sessionId=="string"?t.sessionId:void 0,locale:t.locale==="en"?"en":"zh"})});if(!o.ok)return{prompt:r,optimized:!1,reason:"http-"+String(o.status)};let c=await o.json(),s=typeof c?.result?.prompt=="string"?c.result.prompt.trim():"";return s===""?{prompt:r,optimized:!1,reason:"empty"}:{prompt:s,optimized:c.result.optimized===!0,reason:typeof c.result.reason=="string"?c.result.reason:""}}catch{return{prompt:r,optimized:!1,reason:"network"}}}function In(e){return(Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>t!=="").join(`

`)}async function Pn(e,t,r){let n=Array.isArray(t)?t:[],o=String(r??"").trim();if(n.length<2||o==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[c,...s]=n;try{let x=await e.updateQueue(c.id,{kind:"edit",content:[{type:"text",text:o}]});if(x?.ok!==!0)return{ok:!1,merged:0,removed:0,error:x?.error?.code??"edit-failed"}}catch(x){return{ok:!1,merged:0,removed:0,error:cr(x)}}let i=0,l=0;for(let x of s)try{let N=await e.updateQueue(x.id,{kind:"remove"});if(N?.ok===!0){i+=1;continue}if(N?.error?.code==="session/queue-item-not-found"){l+=1;continue}return{ok:!1,merged:1,removed:i,claimed:l,error:N?.error?.code??"remove-failed"}}catch(N){return{ok:!1,merged:1,removed:i,claimed:l,error:cr(N)}}return{ok:l===0,merged:1,removed:i,claimed:l,error:l>0?"session/queue-item-not-found":""}}async function lr(e={}){let t=sr(e.session);if(t.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:t.blocked};let r=t.items.map(at),n=await En(r,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),o=sr(e.session);if(!(o.items.length===t.items.length&&o.items.every((i,l)=>i.id===t.items[l].id&&at(i)===r[l])))return{ok:!1,count:t.items.length,optimized:!1,reason:"",error:"queue-changed"};let s=await Pn(e.session,t.items,n.prompt);return{ok:s.ok,count:t.items.length,optimized:n.optimized,reason:n.reason,error:s.error}}function cr(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function qn({label:e,children:t}){return typeof it.Tooltip=="function"?J.createElement(it.Tooltip,{label:e,side:"top",delayMs:400},t):(0,$e.cloneElement)(t,{title:e})}var Ln=Object.freeze({}),Dn=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>Ln});function An(e){let t=(()=>{try{let n=e?.projections?.faceOf?.("inbox");if(typeof n?.subscribe=="function"&&typeof n?.getSnapshot=="function")return n}catch{}return Dn})(),r=(0,$e.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot);return ot(r?.["next-turn"])}function pr({sessionId:e,sessions:t,t:r,locale:n,onNotice:o}){let c=J.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return t?.binding?.(e)?.session??null}catch{return null}},[t,e]),s=An(c),[i,l]=J.useState("idle"),[x,N]=J.useState(""),d=J.useRef(0);J.useEffect(()=>()=>window.clearTimeout(d.current),[]);let y=s.items.length;if(y<2||s.blocked==="attachment"||s.blocked==="too-many")return null;let k=async()=>{if(i!=="running"){l("running"),N("");try{let z=await lr({session:c,sessionId:e,locale:typeof n=="function"?n():"zh"});if(z.ok){let D=z.optimized?r("merge.done")(z.count):r("merge.donePlain")(z.count);N(D),o?.(D)}else N(z.error==="queue-changed"?r("merge.changed"):z.error==="session/queue-item-not-found"?r("merge.claimed"):r("merge.failed"))}catch{N(r("merge.failed"))}finally{l("idle"),window.clearTimeout(d.current),d.current=window.setTimeout(()=>N(""),4e3)}}},g=i==="running"?r("merge.running"):x!==""?x:r("merge.label")(y);return J.createElement(qn,{label:g},J.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":y,"data-cbp-merge-phase":i,"aria-label":g,"aria-busy":i==="running"?"true":void 0,disabled:i==="running",onClick:z=>{z.stopPropagation(),k()}},J.createElement(ar,null),J.createElement("span",{className:"cbp-merge-count"},i==="running"?"\u2026":y)))}var De="promptBoost",dr={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},ur={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var S=se(require("react"),1),Y=require("react");var Fn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function jn(){return S.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},S.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),S.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function br(e,t){let r=`source.${e.id}`,n=t(r);return n===r?e.label:n}function On(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function _n(e,t){if(e.phase!=="ready")return"";let r=[];return e.cached&&r.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&r.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),r.join(" \xB7 ")}function Bn(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let r=e.sources.slice(0,2).map(n=>`${br(n,t)} ${n.count}`).join(" \xB7 ");return r===""?t("chip.writing"):`${r} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function $n({state:e,store:t,t:r,inputActions:n,chipRef:o}){let c=e.phase==="applied",s=e.phase==="running"||e.phase==="streaming",i=e.phase==="ready",l=e.phase==="error",x=e.mode==="compose"?r("panel.compose"):r("button.label"),N=Bn(e,r);return c?S.createElement("div",{className:"pb-chip-row"},S.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":r("chip.expand"),onClick:()=>t.expand(n),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),t.expand(n))}},S.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},S.createElement(tr,{size:12})),S.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},r("undo.done")),S.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),S.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":r("undo.label"),onClick:()=>t.undo(n)},r("undo.action")))):S.createElement("div",{className:"pb-chip-row"},S.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":s?"true":"false",onClick:()=>t.expand(n)},S.createElement("button",{ref:o,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(n),"aria-label":`${r("chip.expand")} \xB7 ${x}`,onClick:()=>t.expand(n)},S.createElement("span",{className:s||i?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},s?S.createElement(jn,null):l?S.createElement(rt,{size:12}):S.createElement(_e,{size:12})),S.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},N),i||l?S.createElement(S.Fragment,null,S.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),S.createElement("span",{className:"pb-chip-view"},r("chip.view"))):null),S.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":r("chip.dismiss"),onClick:()=>t.dismiss(n)},S.createElement(rr,{size:10}))))}function Un({state:e,store:t,t:r,inputActions:n,locale:o,panelRef:c}){let s=(0,Y.useRef)(null),i=e.phase,l=i==="running",x=i==="streaming",N=i==="ready",d=i==="applied",y=N||d,k=i==="error",g=e.sources,z=l||x||y||g.length>0,D=d?e.applied:e.prompt,h=_n(e,r),R=t.panelId(n),q=r(Fn?"shortcut.mac":"shortcut.other"),P=r(l?"panel.announceRunning":x?"panel.streaming":d?"panel.announceApplied":N?"panel.announceReady":"panel.announceError");return(0,Y.useEffect)(()=>{let M=s.current;M===null||i!=="streaming"||(M.scrollTop=M.scrollHeight)},[e.prompt,i]),S.createElement("section",{ref:c,id:R,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":i,"data-pb-running":l||x?"true":"false",tabIndex:-1,"aria-labelledby":`${R}-title`,"aria-busy":l||x?"true":void 0},S.createElement("header",{className:"pb-head"},S.createElement("div",{className:"pb-head-row"},S.createElement("h2",{className:"pb-title",id:`${R}-title`},r("panel.title")),e.mode==="compose"?S.createElement("span",{className:"pb-mode"},r("panel.compose")):null,S.createElement("span",{className:"pb-meta"},h),S.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":r("panel.collapse"),title:r("panel.collapse"),onClick:()=>t.collapse(n)},S.createElement(nr,{size:14}))),z?S.createElement("div",{className:"pb-sources",role:"list","aria-label":r("panel.sources")},g.length>0?g.map(M=>S.createElement("span",{key:M.id,className:"pb-chip",role:"listitem","data-pb-source":M.id},S.createElement("span",{className:"pb-chip-label"},br(M,r)),S.createElement("span",{className:"pb-chip-count"},M.count))):l?[S.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),S.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:S.createElement("span",{className:"pb-note"},r("panel.noSources"))):null),S.createElement("div",{className:"pb-rule","aria-hidden":"true"}),S.createElement("div",{className:"pb-body"},l?S.createElement(S.Fragment,null,S.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},S.createElement("span",{className:"pb-skeleton-line is-long"}),S.createElement("span",{className:"pb-skeleton-line is-full"}),S.createElement("span",{className:"pb-skeleton-line is-short"})),S.createElement("div",{className:"pb-status"},S.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.status"))):null,x||y?S.createElement("textarea",{ref:s,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:x||d,spellCheck:!1,"aria-label":r("panel.editLabel"),placeholder:r("panel.placeholder"),value:D}):null,x?S.createElement("div",{className:"pb-status"},S.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.streaming")):null,k?S.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},S.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},S.createElement(rt,{size:14})),S.createElement("span",{className:"pb-error-text"},On(e.error,r))):null,S.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},P)),S.createElement("div",{className:"pb-foot"},S.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(n)},r("panel.close")),S.createElement("span",{className:"pb-foot-spacer"}),y?S.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:q,onClick:()=>t.retry(n,{locale:o()})},r("panel.another"),S.createElement("span",{className:"pb-kbd","aria-hidden":"true"},q)):null,d?S.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(n)},r("undo.action")):null,l||x?S.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(n,{locale:o()})},r("panel.retry")):null,k?S.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(n,{locale:o()})},r("panel.retryError")):null))}function fr({inputActions:e,store:t,t:r,locale:n,session:o}){let c=(0,Y.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),s=c.phase,i=s!=="idle"||c.undo!==null,l=c.expanded===!0&&s!=="idle";(0,Y.useEffect)(()=>{let g=typeof o?.id=="string"?o.id:"";g!==""&&t.setSessionId(e,g)},[o?.id,e,t]);let x=(0,Y.useRef)(null),N=(0,Y.useRef)(null),d=(0,Y.useRef)(null),y=(0,Y.useRef)(!1),k=(0,Y.useRef)(!1);return(0,Y.useEffect)(()=>{if(!i)return;let g=z=>{if(!(z.defaultPrevented||l===!1)){if(z.key==="Escape"){z.preventDefault(),z.stopPropagation(),t.collapse(e);return}z.key==="Enter"&&(z.metaKey||z.ctrlKey)&&(z.preventDefault(),z.stopPropagation(),s==="applied"||s==="ready"?t.retry(e,{locale:n()}):s==="error"&&t.retry(e,{locale:n()}))}};return document.addEventListener("keydown",g,!0),()=>document.removeEventListener("keydown",g,!0)},[i,l,s,e,t,n]),(0,Y.useEffect)(()=>{if(i&&y.current===!1){y.current=!0,d.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(i===!1&&y.current){y.current=!1;let g=d.current;if(d.current=null,g==null||g.isConnected===!1||typeof g.focus!="function")return;try{g.focus({preventScroll:!0})}catch{}}},[i]),(0,Y.useEffect)(()=>{if(l&&k.current===!1){k.current=!0;let g=N.current;if(g!==null&&typeof g.focus=="function")try{g.focus({preventScroll:!0})}catch{}return}if(l===!1&&k.current){k.current=!1;let g=s==="idle"?d.current:x.current;if(g==null||g.isConnected===!1||typeof g.focus!="function")return;try{g.focus({preventScroll:!0})}catch{}}},[l,s]),i?l===!1?S.createElement($n,{state:c,store:t,t:r,inputActions:e,chipRef:x}):S.createElement(Un,{state:c,store:t,t:r,inputActions:e,locale:n,panelRef:N}):null}var w=se(require("react"),1),lt=require("react-dom");var hr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"translate",icon:"translate",zh:"\u7FFB\u8BD1",en:"Translate",sheet:"translate",prompt:{zh:"\u5E2E\u6211\u7FFB\u8BD1\uFF1A",en:"Translate this: "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function st(e,t){return t==="en"?e.en:e.zh}var f=se(require("react"),1),mr=require("react-dom"),gr="/api/chatbox-pet",Wn=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],Hn=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function xr(e,t){let r=await fetch(`${gr}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),n;try{n=await r.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${r.status}\uFF09`);return n.result}function yr(e,t){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:t,references:[]}),!0}catch{try{return e.setDraft(t),!0}catch{return!1}}}function Ee({title:e,hint:t,onClose:r,children:n,t:o,wide:c=!1}){let s=f.useRef(null);return f.useEffect(()=>{let i=l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),r())};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[r]),(0,mr.createPortal)(f.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:i=>i.stopPropagation()},f.createElement("div",{className:c?"cbp-sheet cbp-sheet-wide":"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:s},f.createElement("div",{className:"cbp-sheet-head"},f.createElement("span",{className:"cbp-sheet-title"},e),f.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":o("sheet.close"),onClick:r},"\u2715")),t?f.createElement("p",{className:"cbp-sheet-hint"},t):null,f.createElement("div",{className:"cbp-sheet-body"},n))),document.body)}function wr({onClose:e,onFill:t,t:r,locale:n}){let[o,c]=f.useState("idle"),[s,i]=f.useState(0),[l,x]=f.useState(null),[N,d]=f.useState(""),y=f.useRef(null),k=f.useRef([]),g=f.useRef(0),z=()=>{g.current!==0&&(clearInterval(g.current),g.current=0)};f.useEffect(()=>()=>{z();try{y.current?.stream?.getTracks?.().forEach(P=>P.stop())}catch{}},[]);let D=async P=>{c("working"),d("");try{let v=await(await fetch(`${gr}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":P.type||"audio/webm"},body:P})).json();if(v?.ok!==!0)throw new Error(v?.error?.message??"\u8F6C\u5199\u5931\u8D25");x(v.result),c("done")}catch(M){d(String(M?.message??M)),c("idle")}},h=async()=>{d("");try{let P=await navigator.mediaDevices.getUserMedia({audio:!0}),M=new MediaRecorder(P);k.current=[],M.ondataavailable=v=>{v.data?.size>0&&k.current.push(v.data)},M.onstop=()=>{z(),P.getTracks().forEach(I=>I.stop());let v=new Blob(k.current,{type:M.mimeType||"audio/webm"});D(v)},y.current=M,M.start(),i(0),c("recording"),g.current=setInterval(()=>i(v=>v+1),1e3)}catch(P){let M=P?.name==="NotAllowedError"||P?.name==="SecurityError";d(M?r("sheet.transcribe.denied"):String(P?.message??P))}},R=()=>{c("working");try{y.current?.stop()}catch{z(),c("idle")}},q=`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;return f.createElement(Ee,{title:r("sheet.transcribe.title"),hint:r("sheet.transcribe.hint"),onClose:e,t:r},l===null?f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-sheet-center"},f.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":o,"aria-label":r(o==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:o==="recording"?R:h,disabled:o==="working"},f.createElement("span",{className:"cbp-rec-dot"})),f.createElement("span",{className:"cbp-rec-time"},o==="recording"?q:r(o==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),f.createElement("label",{className:"cbp-sheet-file"},f.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:P=>{let M=P.target.files?.[0];M&&D(M),P.target.value=""}}),f.createElement("span",null,r("sheet.transcribe.pick")))):f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-sheet-meta"},r("sheet.transcribe.meta")(l.segments?.length??0,l.language??"\u2014",l.durationSeconds??0)),f.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},l.text||r("sheet.transcribe.empty")),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(l.text)},r("sheet.fill")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{x(null),c("idle")}},r("sheet.again")))),N?f.createElement("p",{className:"cbp-sheet-error"},N):null)}function kr({onClose:e,onFill:t,t:r,locale:n,sessionId:o=""}){let[c,s]=f.useState("update"),[i,l]=f.useState(""),[x,N]=f.useState(""),[d,y]=f.useState("idle"),[k,g]=f.useState(""),[z,D]=f.useState(""),h=async()=>{y("working"),D("");try{let R=await xr("/write",{genre:c,topic:i,tone:x,locale:n(),session:o});g(R.text),y("done")}catch(R){D(String(R?.message??R)),y("idle")}};return f.createElement(Ee,{title:r("sheet.write.title"),hint:r("sheet.write.hint"),onClose:e,t:r},f.createElement("div",{className:"cbp-chips"},Wn.map(R=>f.createElement("button",{key:R.id,type:"button",className:"cbp-chip","data-cbp-genre":R.id,"aria-pressed":c===R.id?"true":"false",onClick:()=>s(R.id)},n()==="en"?R.en:R.zh))),f.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:r("sheet.write.topic"),value:i,maxLength:200,onChange:R=>l(R.target.value)}),f.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:r("sheet.write.tone"),value:x,maxLength:80,onChange:R=>N(R.target.value)}),k===""?f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:d==="working"||i.trim()==="",onClick:h},r(d==="working"?"sheet.working":"sheet.write.go"))):f.createElement(f.Fragment,null,f.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},k),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(k)},r("sheet.fill")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>g("")},r("sheet.again")))),z?f.createElement("p",{className:"cbp-sheet-error"},z):null)}function vr({onClose:e,t,locale:r,sessionId:n=""}){let[o,c]=f.useState(""),[s,i]=f.useState(""),[l,x]=f.useState(10),[N,d]=f.useState("idle"),[y,k]=f.useState(null),[g,z]=f.useState(""),D=async()=>{d("working"),z("");try{let R=await xr("/deck",{topic:o,audience:s,pages:l,locale:r(),session:n});k(R),d("done")}catch(R){z(String(R?.message??R)),d("idle")}},h=()=>{if(!y?.base64)return;let R=Uint8Array.from(atob(y.base64),v=>v.charCodeAt(0)),q=new Blob([R],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),P=URL.createObjectURL(q),M=document.createElement("a");M.href=P,M.download=y.name||"deck.pptx",document.body.appendChild(M),M.click(),M.remove(),setTimeout(()=>URL.revokeObjectURL(P),4e3)};return f.createElement(Ee,{title:t("sheet.deck.title"),hint:t("sheet.deck.hint"),onClose:e,t},y===null?f.createElement(f.Fragment,null,f.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:t("sheet.deck.topic"),value:o,maxLength:200,onChange:R=>c(R.target.value)}),f.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:t("sheet.deck.audience"),value:s,maxLength:120,onChange:R=>i(R.target.value)}),f.createElement("div",{className:"cbp-chips"},Hn.map(R=>f.createElement("button",{key:R.id,type:"button",className:"cbp-chip","data-cbp-size":R.id,"aria-pressed":l===R.id?"true":"false",onClick:()=>x(R.id)},r()==="en"?R.en:R.zh))),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:N==="working"||o.trim()==="",onClick:D},t(N==="working"?"sheet.deck.working":"sheet.deck.go")))):f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},f.createElement("div",{className:"cbp-deck-title"},y.title||o),f.createElement("div",{className:"cbp-deck-meta"},t("sheet.deck.meta")(y.slides??0)),f.createElement("div",{className:"cbp-deck-path",title:y.path},y.path)),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:h},t("sheet.deck.download")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>k(null)},t("sheet.again")))),g?f.createElement("p",{className:"cbp-sheet-error"},g):null)}function Sr({onClose:e,onFill:t,t:r}){let[n,o]=f.useState(""),c=()=>{let s=n.trim();t(s===""?r("sheet.video.prompt"):r("sheet.video.promptWith")(s))};return f.createElement(Ee,{title:r("sheet.video.title"),hint:r("sheet.video.hint"),onClose:e,t:r},f.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:r("sheet.video.placeholder"),value:n,maxLength:500,onChange:s=>o(s.target.value)}),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:c},r("sheet.video.go"))))}var Nr=`
.cbp-sheet-veil{
  position:fixed;
  inset:0;
  z-index:80;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  overflow:auto;
  background:color-mix(in oklab,#0b0c0f 32%,transparent);
  -webkit-backdrop-filter:blur(3px);
  backdrop-filter:blur(3px);
  animation:cbp-sheet-fade 140ms ease;
}
@keyframes cbp-sheet-fade{from{opacity:0}to{opacity:1}}
.cbp-sheet{
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  width:min(520px,100%);
}
.cbp-sheet{
  max-height:min(76vh,640px);
  overflow:auto;
  padding:18px 18px 16px;
  border-radius:20px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 10%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 55%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 78%,transparent);
  -webkit-backdrop-filter:blur(28px) saturate(180%);
  backdrop-filter:blur(28px) saturate(180%);
  box-shadow:0 24px 60px -18px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 40%,transparent),0 4px 12px -4px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 16%,transparent);
  animation:cbp-sheet-in 160ms cubic-bezier(.23,1,.32,1);
}
body[data-ds-dark-theme] .cbp-sheet{
  background:color-mix(in oklab,#1b1b1e 86%,transparent);
  border-color:color-mix(in oklab,#ffffff 13%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 22%,transparent);
  box-shadow:0 24px 60px -18px rgba(0,0,0,.65),0 4px 12px -4px rgba(0,0,0,.35);
}
@keyframes cbp-sheet-in{from{opacity:0;transform:translateY(6px) scale(.99)}to{opacity:1;transform:none}}
.cbp-sheet-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}
.cbp-sheet-title{
  color:var(--dsw-alias-label-primary);
  font-size:15px;
  font-weight:600;
}
.cbp-sheet-close{
  border:0;
  background:transparent;
  color:var(--dsw-alias-label-tertiary);
  font-size:13px;
  line-height:1;
  padding:6px 8px;
  border-radius:8px;
  cursor:pointer;
}
.cbp-sheet-close:hover{
  background:color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
  color:var(--dsw-alias-label-primary);
}
.cbp-sheet-hint{
  margin:6px 0 14px;
  color:var(--dsw-alias-label-tertiary);
  font-size:11.5px;
  line-height:1.5;
}
/*
 * The body owns the scrolling: the head and the hint stay put, so a tall
 * workbench (translate) never pushes the sheet past the viewport edge.
 */
.cbp-sheet-body{display:flex;flex-direction:column;gap:10px;flex:1;min-height:0;overflow:auto;}
.cbp-sheet-center{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  padding:10px 0 4px;
}
.cbp-rec{
  width:64px;
  height:64px;
  border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay) 60%,transparent);
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:transform 120ms ease,background-color 120ms ease,border-color 120ms ease;
}
.cbp-rec:hover{transform:scale(1.03)}
.cbp-rec[data-cbp-rec="recording"]{
  background:color-mix(in oklab,#e5484d 14%,transparent);
  border-color:color-mix(in oklab,#e5484d 45%,transparent);
}
.cbp-rec-dot{
  width:20px;
  height:20px;
  border-radius:999px;
  background:#e5484d;
  transition:border-radius 140ms ease,width 140ms ease,height 140ms ease;
}
.cbp-rec[data-cbp-rec="recording"] .cbp-rec-dot{
  width:14px;
  height:14px;
  border-radius:4px;
}
.cbp-rec-time{
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  font-variant-numeric:tabular-nums;
}
.cbp-sheet-file{
  display:flex;
  justify-content:center;
  color:var(--dsw-alias-label-tertiary);
  font-size:11.5px;
  cursor:pointer;
}
.cbp-sheet-file input{display:none}
.cbp-sheet-file span{text-decoration:underline;text-underline-offset:2px}
.cbp-sheet-meta{
  color:var(--dsw-alias-label-tertiary);
  font-size:11px;
}
.cbp-sheet-pre{
  margin:0;
  max-height:260px;
  overflow:auto;
  padding:12px;
  border-radius:12px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-base,#f6f7f9) 60%,transparent);
  color:var(--dsw-alias-label-primary);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:12px;
  line-height:1.6;
  white-space:pre-wrap;
  word-break:break-word;
}
.cbp-sheet-actions{
  display:flex;
  gap:8px;
  justify-content:flex-end;
  padding-top:2px;
}
.cbp-btn{
  height:32px;
  padding:0 14px;
  border-radius:10px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:500;
  cursor:pointer;
  transition:background-color 120ms ease,opacity 120ms ease;
}
.cbp-btn:hover{background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent)}
.cbp-btn:disabled{opacity:.45;cursor:default}
/*
 * The primary button carries its own accent instead of the Host brand token:
 * in this shell that token resolves to the page text colour, which painted a
 * white button with white text (measured 2026-11-11).
 */
.cbp-btn-primary{
  background:#635BFF;
  border-color:transparent;
  color:#fff;
}
.cbp-btn-primary:hover{background:#5149E6}
.cbp-btn-primary:disabled{background:#635BFF;opacity:.5}
.cbp-input{
  height:38px;
  padding:0 12px;
  border-radius:11px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-base,#f6f7f9) 55%,transparent);
  color:var(--dsw-alias-label-primary);
  font-size:13px;
  outline:none;
}
.cbp-input:focus{border-color:color-mix(in oklab,var(--dsw-alias-brand-primary,#635BFF) 55%,transparent)}
.cbp-input::placeholder{color:var(--dsw-alias-label-tertiary)}
.cbp-chips{display:flex;gap:6px;flex-wrap:wrap}
.cbp-chip{
  height:28px;
  padding:0 11px;
  border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:transparent;
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  cursor:pointer;
}
.cbp-chip[aria-pressed="true"]{
  border-color:color-mix(in oklab,var(--dsw-alias-brand-primary,#635BFF) 50%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-brand-primary,#635BFF) 12%,transparent);
  color:var(--dsw-alias-label-primary);
}
.cbp-sheet-error{
  margin:2px 0 0;
  color:var(--dsw-alias-state-error-primary,#e5484d);
  font-size:11.5px;
  line-height:1.5;
}
.cbp-deck-card{
  padding:14px;
  border-radius:14px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-base,#f6f7f9) 55%,transparent);
  display:flex;
  flex-direction:column;
  gap:4px;
}
.cbp-deck-title{font-size:14px;font-weight:600;color:var(--dsw-alias-label-primary)}
.cbp-deck-meta{font-size:11.5px;color:var(--dsw-alias-label-secondary)}
.cbp-deck-path{
  font-size:10.5px;
  color:var(--dsw-alias-label-tertiary);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.cbp-sheet.cbp-sheet-wide{
  width:min(660px,100%);
  max-height:min(74vh,600px);
}
@media (prefers-reduced-motion: reduce){
  .cbp-sheet-veil,.cbp-sheet{animation:none}
}
`;var b=se(require("react"),1),ct="/api/chatbox-pet",Cr=[{id:"auto",zh:"\u81EA\u52A8\u68C0\u6D4B",en:"Detect"},{id:"zh",zh:"\u4E2D\u6587",en:"Chinese"},{id:"en",zh:"\u82F1\u6587",en:"English"},{id:"ja",zh:"\u65E5\u6587",en:"Japanese"},{id:"ko",zh:"\u97E9\u6587",en:"Korean"},{id:"fr",zh:"\u6CD5\u6587",en:"French"},{id:"de",zh:"\u5FB7\u6587",en:"German"},{id:"es",zh:"\u897F\u73ED\u7259\u6587",en:"Spanish"}];function Kn(e){let t=String(e??"").trim();return t===""||t.length>40||/[.!?。！？\n]/.test(t)?!1:t.split(/\s+/).filter(Boolean).length<=3}async function Re(e,t){let r=await fetch(`${ct}${e}`,t),n;try{n=await r.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${r.status}\uFF09`);return n.result}function Tr({t:e,locale:t=()=>"zh",inputActions:r}){let n=t()!=="en",o=b.useCallback((a,u)=>n?a:u,[n]),[c,s]=b.useState("translate"),[i,l]=b.useState("auto"),[x,N]=b.useState(()=>n?"en":"zh"),[d,y]=b.useState("text"),[k,g]=b.useState(""),[z,D]=b.useState(""),[h,R]=b.useState(null),[q,P]=b.useState(null),[M,v]=b.useState("idle"),[I,L]=b.useState(""),[F,O]=b.useState(""),[ie,ee]=b.useState(!1),[X,ge]=b.useState(0),[le,xe]=b.useState([]),[pe,ne]=b.useState("all"),[ae,oe]=b.useState(""),[fe,de]=b.useState(!1),ye=b.useRef(null),we=b.useRef([]),ue=b.useRef(0),m=b.useCallback(()=>{ue.current!==0&&(clearInterval(ue.current),ue.current=0)},[]),C=b.useCallback(async(a=pe,u=ae)=>{try{let E=new URLSearchParams;a!=="all"&&E.set("kind",a),u.trim()!==""&&E.set("search",u.trim());let j=await Re(`/favorites?${E.toString()}`);xe(j.items??[])}catch(E){L(String(E?.message??E))}},[pe,ae]);b.useEffect(()=>{C("all","")},[]),b.useEffect(()=>{let a=!1;return fetch(`${ct}/translate/engine`).then(u=>u.json()).then(u=>{!a&&u?.ok===!0&&R(u.result)}).catch(()=>{}),()=>{a=!0}},[]),b.useEffect(()=>()=>{m();try{ye.current?.stream?.getTracks?.().forEach(a=>a.stop())}catch{}},[m]);let A=async(a=k)=>{let u=a.trim();if(u===""){L(o("\u5148\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57","Type something to translate first"));return}v("working"),L(""),de(!1),P(null);let E=Kn(u)?"dict":"sentence",j=x==="zh"?"zh":"en";try{let B=await Re("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:u,from:i,to:x,locale:E==="dict"?j:n?"zh":"en",mode:E})});E==="dict"?(P(B.dict),D("")):D(B.translated),R(te=>({...te??{},last:{engine:B.engine,ms:B.ms}})),v("done")}catch(B){L(String(B?.message??B)),v("idle")}},U=()=>{if(x==="auto"){N(i==="auto"?"zh":i),l("auto");return}l(x),N(i==="auto"?"zh":i),z!==""&&(g(z),D(""))},H=async a=>{v("working"),L(""),de(!1),O(a.name);try{let u=await Re(`/translate/file?name=${encodeURIComponent(a.name)}`,{method:"POST",headers:{"content-type":a.type||"application/octet-stream"},body:a});g(u.text);let E=await Re("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:u.text,from:i,to:x,locale:n?"zh":"en"})});D(E.translated),v("done"),y("text"),u.truncated&&L(o("\u6587\u4EF6\u8F83\u957F\uFF0C\u53EA\u7FFB\u8BD1\u4E86\u524D 6 \u4E07\u4E2A\u5B57\u7B26","Long document: only the first 60,000 characters were translated"))}catch(u){L(String(u?.message??u)),v("idle")}},Q=async()=>{L("");try{let a=await navigator.mediaDevices.getUserMedia({audio:!0}),u=new MediaRecorder(a);we.current=[],u.ondataavailable=E=>{E.data?.size>0&&we.current.push(E.data)},u.onstop=async()=>{m(),a.getTracks().forEach(j=>j.stop()),ee(!1),v("working");let E=new Blob(we.current,{type:u.mimeType||"audio/webm"});try{let{transcribe:j}=await Promise.resolve().then(()=>(Rr(),zr)),B=await j(E);g(B),y("text"),v("idle")}catch(j){L(String(j?.message??j)),v("idle")}},ye.current=u,u.start(),ee(!0),ge(0),ue.current=setInterval(()=>ge(E=>E+1),1e3)}catch(a){let u=a?.name==="NotAllowedError"||a?.name==="SecurityError";L(u?o("\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650","No microphone permission"):String(a?.message??a))}},ke=async()=>{if(k.trim()!=="")try{await Re("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"sentence",source:k,target:z,from:i,to:x})}),de(!0),await C()}catch(a){L(String(a?.message??a))}},ve=async a=>{try{await Re("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"word",source:a.word,target:a.senses.map(u=>u.meaning).join("\uFF1B"),from:i,to:x})}),de(!0),await C()}catch(u){L(String(u?.message??u))}},Ie=async a=>{try{await Re("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"remove",id:a})}),await C()}catch(u){L(String(u?.message??u))}},p=async a=>{try{await navigator.clipboard.writeText(a)}catch{L(o("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C","Copy failed \u2014 select the text manually"))}};return b.createElement("div",{className:"cbt-page"},b.createElement("div",{className:"cbt-viewtabs",role:"tablist"},[["translate",o("\u7FFB\u8BD1","Translate")],["favorites",o("\u6536\u85CF\u672C","Saved")]].map(([a,u])=>b.createElement("button",{key:a,type:"button",role:"tab",className:"cbt-viewtab","data-cbt-view":a,"aria-selected":c===a?"true":"false",onClick:()=>s(a)},u,a==="favorites"&&le.length>0?` \xB7 ${le.length}`:""))),c==="translate"?b.createElement(b.Fragment,null,b.createElement("div",{className:"cbt-bar"},b.createElement("select",{className:"cbt-select",value:i,onChange:a=>l(a.target.value),"aria-label":o("\u6E90\u8BED\u8A00","Source language")},Cr.map(a=>b.createElement("option",{key:a.id,value:a.id},n?a.zh:a.en))),b.createElement("button",{type:"button",className:"cbt-swap",onClick:U,title:o("\u4EA4\u6362\u8BED\u8A00","Swap"),"aria-label":o("\u4EA4\u6362\u8BED\u8A00","Swap")},"\u21C4"),b.createElement("select",{className:"cbt-select",value:x,onChange:a=>N(a.target.value),"aria-label":o("\u76EE\u6807\u8BED\u8A00","Target language")},Cr.filter(a=>a.id!=="auto").map(a=>b.createElement("option",{key:a.id,value:a.id},n?a.zh:a.en))),b.createElement("span",{className:"cbt-spacer"}),b.createElement("div",{className:"cbt-tabs",role:"tablist"},["text","voice","file"].map(a=>b.createElement("button",{key:a,type:"button",role:"tab",className:"cbt-tab","data-cbt-tab":a,"aria-selected":d===a?"true":"false",onClick:()=>y(a)},a==="text"?o("\u6587\u5B57","Text"):a==="voice"?o("\u8BED\u97F3","Voice"):o("\u6587\u4EF6","File"))))),d==="text"?b.createElement("textarea",{className:"cbt-input","data-cbt-source":"true",placeholder:o("\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57\uFF0CCtrl / \u2318 + Enter \u7FFB\u8BD1","Type text to translate \u2014 Ctrl / \u2318 + Enter"),value:k,onChange:a=>g(a.target.value),onKeyDown:a=>{a.key==="Enter"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),A())}}):null,d==="voice"?b.createElement("div",{className:"cbt-voice"},b.createElement("button",{type:"button",className:"cbt-rec","data-cbt-record":ie?"on":"off","aria-label":ie?o("\u505C\u6B62\u5F55\u97F3","Stop recording"):o("\u5F00\u59CB\u5F55\u97F3","Start recording"),onClick:ie?()=>ye.current?.stop():Q},b.createElement("span",{className:"cbt-rec-dot"})),b.createElement("span",{className:"cbt-hint"},ie?`${String(Math.floor(X/60)).padStart(2,"0")}:${String(X%60).padStart(2,"0")} \xB7 ${o("\u518D\u70B9\u4E00\u4E0B\u7ED3\u675F","tap again to stop")}`:o("\u5F55\u97F3\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u5B8C\u6210\u540E\u586B\u8FDB\u6587\u5B57\u6846","Transcribed on this machine, then placed in the text box"))):null,d==="file"?b.createElement("label",{className:"cbt-drop"},b.createElement("input",{type:"file",accept:".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json","data-cbt-file":"true",onChange:a=>{let u=a.target.files?.[0];u&&H(u),a.target.value=""}}),b.createElement("span",{className:"cbt-drop-title"},o("\u9009\u62E9\u4E00\u4E2A\u6587\u6863","Pick a document")),b.createElement("span",{className:"cbt-hint"},o("PDF / DOCX / TXT / Markdown / HTML\uFF0C30 MB \u4EE5\u5185","PDF / DOCX / TXT / Markdown / HTML, up to 30 MB"))):null,F!==""?b.createElement("div",{className:"cbt-doc","data-cbt-doc":"true"},F):null,b.createElement("div",{className:"cbt-actions"},b.createElement("button",{type:"button",className:"cbt-btn cbt-btn-primary","data-cbt-translate":"true",disabled:M==="working",onClick:()=>{A()}},M==="working"?o("\u7FFB\u8BD1\u4E2D\u2026","Translating\u2026"):o("\u7FFB\u8BD1","Translate")),b.createElement("span",{className:"cbt-hint"},k.trim()===""?"":o(`${k.trim().length} \u5B57\u7B26`,`${k.trim().length} chars`))),q!==null?b.createElement("div",{className:"cbt-dict","data-cbt-dict":"true"},b.createElement("div",{className:"cbt-dict-head"},b.createElement("span",{className:"cbt-dict-word"},q.word),q.phonetic?b.createElement("span",{className:"cbt-dict-phonetic"},q.phonetic):null),b.createElement("ul",{className:"cbt-dict-senses"},q.senses.map((a,u)=>b.createElement("li",{key:u,className:"cbt-dict-sense"},a.pos?b.createElement("span",{className:"cbt-dict-pos"},a.pos):null,b.createElement("span",{className:"cbt-dict-meaning"},a.meaning),a.example?b.createElement("div",{className:"cbt-dict-example"},a.example):null))),q.note?b.createElement("div",{className:"cbt-dict-note"},q.note):null,b.createElement("div",{className:"cbt-actions"},b.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{p(q.word+" "+q.senses.map(a=>a.meaning).join("\uFF1B"))}},o("\u590D\u5236","Copy")),b.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{ve(q)}},fe?o("\u5DF2\u6536\u85CF","Saved"):o("\u6536\u85CF","Save")))):null,z!==""?b.createElement("div",{className:"cbt-result","data-cbt-result":"true"},b.createElement("div",{className:"cbt-result-text"},z),b.createElement("div",{className:"cbt-actions"},b.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{p(z)}},o("\u590D\u5236","Copy")),b.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{ke()}},fe?o("\u5DF2\u6536\u85CF","Saved"):o("\u6536\u85CF","Save")),typeof r?.setDraft=="function"?b.createElement("button",{type:"button",className:"cbt-btn","data-cbt-fill":"true",onClick:()=>r.setDraft({text:z,references:[]})},o("\u586B\u5165\u8F93\u5165\u6846","Put in composer")):null)):null,b.createElement("div",{className:"cbt-engine","data-cbt-engine":"true"},h===null?"":h.local?`${o("\u672C\u673A\u6A21\u578B","Local")} \xB7 ${h.model||"local"}${h.last?` \xB7 ${h.last.ms} ms`:""}`:`${o("\u5BBF\u4E3B\u6A21\u578B","Host model")}${h.last?` \xB7 ${h.last.ms} ms`:""}`),I!==""?b.createElement("p",{className:"cbt-error","data-cbt-error":"true"},I):null):b.createElement(b.Fragment,null,b.createElement("div",{className:"cbt-bar"},[["all",o("\u5168\u90E8","All")],["word",o("\u5355\u8BCD","Words")],["sentence",o("\u53E5\u5B50","Sentences")]].map(([a,u])=>b.createElement("button",{key:a,type:"button",className:"cbt-chip","data-cbt-kind":a,"aria-pressed":pe===a?"true":"false",onClick:()=>{ne(a),C(a,ae)}},u)),b.createElement("span",{className:"cbt-spacer"}),b.createElement("a",{className:"cbt-link",href:`${ct}/favorites/export`,download:"favorites.md"},o("\u5BFC\u51FA Markdown","Export Markdown"))),b.createElement("input",{className:"cbt-search","data-cbt-search":"true",placeholder:o("\u641C\u7D22\u6536\u85CF","Search saved"),value:ae,onChange:a=>{oe(a.target.value),C(pe,a.target.value)}}),b.createElement("div",{className:"cbt-list","data-cbt-favorites":"true"},le.length===0?b.createElement("p",{className:"cbt-empty"},o("\u8FD8\u6CA1\u6709\u6536\u85CF\u3002\u7FFB\u8BD1\u540E\u70B9\u300C\u6536\u85CF\u300D\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002","Nothing saved yet \u2014 translate something and press Save.")):le.map(a=>b.createElement("div",{className:"cbt-item",key:a.id,"data-cbt-item":a.id},b.createElement("div",{className:"cbt-item-source"},a.source),a.target?b.createElement("div",{className:"cbt-item-target"},a.target):null,b.createElement("div",{className:"cbt-item-foot"},b.createElement("span",{className:"cbt-item-kind"},a.kind==="word"?o("\u5355\u8BCD","Word"):o("\u53E5\u5B50","Sentence")),b.createElement("button",{type:"button",className:"cbt-item-remove",onClick:()=>{Ie(a.id)},"aria-label":o("\u5220\u9664","Delete")},"\u2715"))))),I!==""?b.createElement("p",{className:"cbt-error"},I):null))}var Mr=`
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
.cbt-result-text{font-size:13.5px;line-height:1.65;white-space:pre-wrap;word-break:break-word}
.cbt-error{margin:0;color:#e5484d;font-size:11.5px;line-height:1.5}
.cbt-engine{margin-top:-4px;color:var(--dsw-alias-label-tertiary);font-size:10.5px;line-height:1.5}
.cbt-dict{padding:14px;border-radius:12px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 40%,transparent);display:flex;flex-direction:column;gap:8px;max-height:260px;overflow:auto}
.cbt-dict-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
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
`;function Er({name:e}){let t={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return w.createElement("svg",{...t},w.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),w.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),w.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),w.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return w.createElement("svg",{...t},w.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),w.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),w.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),w.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return w.createElement("svg",{...t},w.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),w.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),w.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"translate":return w.createElement("svg",{...t},w.createElement("path",{d:"M2.4 4.2h6M5.4 4.2v1.2c0 2.6-1.4 4.7-3.4 5.6"}),w.createElement("path",{d:"M3.9 8.4c.9 1.4 2.1 2.4 3.5 2.9"}),w.createElement("path",{d:"M9.4 13.6 11.6 8l2.2 5.6M10.2 11.9h2.8"}));case"slides":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),w.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return w.createElement("svg",{...t},w.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),w.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),w.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),w.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function Gn(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let t=e.closest('[data-composer-card="true"]');if(t)return t}return document.querySelector('[data-composer-card="true"]')}function Vn({t:e,locale:t,inputActions:r,onClose:n}){return w.createElement(Ee,{title:e("sheet.translate.title"),hint:e("sheet.translate.hint"),onClose:n,t:e,wide:!0},w.createElement(Tr,{t:e,locale:t,inputActions:r}))}function Ir({inputActions:e,t,locale:r,sessionId:n=""}){let o=typeof e?.setDraft=="function",[c,s]=w.useState(!1),[i,l]=w.useState(null),[x,N]=w.useState(null),d=w.useRef(null),y=w.useRef(null),[k,g]=w.useState(null);w.useEffect(()=>{g(Gn())},[]);let z=w.useCallback(()=>{let v=d.current?.getBoundingClientRect();v!=null&&N({right:Math.max(8,Math.round(window.innerWidth-v.right)),bottom:Math.max(8,Math.round(window.innerHeight-v.top)+8)})},[]);w.useLayoutEffect(()=>{c&&z()},[c,z]),w.useEffect(()=>{if(!c)return;let v=F=>{let O=F.target;O instanceof Node&&y.current?.contains(O)!==!0&&d.current?.contains(O)!==!0&&s(!1)},I=F=>{F.key==="Escape"&&(F.preventDefault(),F.stopPropagation(),s(!1),d.current?.focus?.())},L=()=>s(!1);return document.addEventListener("pointerdown",v,!0),document.addEventListener("keydown",I,!0),window.addEventListener("resize",L),window.addEventListener("scroll",L,!0),()=>{document.removeEventListener("pointerdown",v,!0),document.removeEventListener("keydown",I,!0),window.removeEventListener("resize",L),window.removeEventListener("scroll",L,!0)}},[c]);let D=v=>{if(typeof v.sheet=="string"){s(!1),l(v.sheet);return}let I=st(v.prompt,typeof r=="function"?r():"zh");try{e.setDraft({text:I,references:[]})}catch{try{e.setDraft(I)}catch{}}s(!1),d.current?.focus?.()},h=t("quick.label"),R=typeof r=="function"?r():"zh",q=w.createElement("button",{ref:d,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":c?"true":"false","aria-label":t("quick.aria"),title:t(o?"quick.aria":"quick.disabled"),disabled:!o,onMouseDown:v=>v.preventDefault(),onClick:()=>s(v=>!v)},w.createElement(Er,{name:"grid"}),w.createElement("span",{className:"cbp-more-label"},h)),P=c&&x!==null?(0,lt.createPortal)(w.createElement("div",{ref:y,className:"cbp-quick-panel",role:"menu","aria-label":t("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${x.right}px`,bottom:`${x.bottom}px`}},w.createElement("div",{className:"cbp-quick-head"},w.createElement("span",{className:"cbp-quick-title"},t("quick.title")),w.createElement("span",{className:"cbp-quick-hint"},t("quick.hint"))),w.createElement("div",{className:"cbp-quick-grid"},hr.map(v=>w.createElement("button",{key:v.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":v.id,onClick:()=>D(v)},w.createElement("span",{className:"cbp-quick-icon"},w.createElement(Er,{name:v.icon})),w.createElement("span",{className:"cbp-quick-name"},st({zh:v.zh,en:v.en},R)))))),document.body):null,M=v=>{typeof v=="string"&&v.trim()!==""&&yr(e,v),l(null)};return w.createElement(w.Fragment,null,w.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),k!==null?(0,lt.createPortal)(q,k):null,P,i==="transcribe"?w.createElement(wr,{t,locale:r,onClose:()=>l(null),onFill:M}):null,i==="write"?w.createElement(kr,{t,locale:r,sessionId:n,onClose:()=>l(null),onFill:M}):null,i==="deck"?w.createElement(vr,{t,locale:r,sessionId:n,onClose:()=>l(null)}):null,i==="video"?w.createElement(Sr,{t,onClose:()=>l(null),onFill:M}):null,i==="translate"?w.createElement(Vn,{t,locale:r,inputActions:e,onClose:()=>l(null)}):null)}var Pr=`
/* Give the typed text room: the pill occupies the card's top-right ~110px.
   The editor's own right padding (8px) would let text run under the pill. */
[data-composer-card="true"] [class*="_input"]{
  padding-right:118px !important;
}
.cbp-more{
  position:absolute;
  top:12px;
  right:12px;
  z-index:5;
  display:inline-flex;
  align-items:center;
  gap:5px;
  height:28px;
  padding:0 12px;
  border-radius:999px;
  /* Glass: a translucent surface, blurred and saturated backdrop, a hairline
     with a light top edge, and a soft shadow \u2014 not a flat opaque chip. */
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 10%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 55%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 42%,transparent);
  -webkit-backdrop-filter:blur(18px) saturate(160%);
  backdrop-filter:blur(18px) saturate(160%);
  box-shadow:0 1px 2px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 6%,transparent),0 6px 18px -8px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 22%,transparent),inset 0 1px 0 color-mix(in oklab,#ffffff 40%,transparent);
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  font-weight:500;
  line-height:1;
  cursor:pointer;
  transition:background-color 120ms ease,color 120ms ease,border-color 120ms ease,box-shadow 120ms ease;
}
body[data-ds-dark-theme] .cbp-more{
  background:color-mix(in oklab,#ffffff 10%,transparent);
  border-color:color-mix(in oklab,#ffffff 16%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 26%,transparent);
  box-shadow:0 1px 2px rgba(0,0,0,.2),0 6px 18px -8px rgba(0,0,0,.45),inset 0 1px 0 color-mix(in oklab,#ffffff 12%,transparent);
}
.cbp-more:hover{
  color:var(--dsw-alias-label-primary);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 62%,transparent);
}
body[data-ds-dark-theme] .cbp-more:hover{
  background:color-mix(in oklab,#ffffff 16%,transparent);
}
.cbp-more[aria-expanded="true"]{
  color:var(--dsw-alias-label-primary);
  border-color:color-mix(in oklab,var(--dsw-alias-label-primary) 18%,transparent);
}
.cbp-more:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:2px;
}
.cbp-more:disabled{
  opacity:.5;
  cursor:default;
}
.cbp-more svg{
  width:14px;
  height:14px;
  display:block;
}
.cbp-more-label{
  white-space:nowrap;
}
.cbp-quick-panel{
  position:fixed;
  z-index:60;
  box-sizing:border-box;
  width:316px;
  padding:12px 12px 14px;
  border-radius:18px;
  /* Same glass recipe as the pill, stronger blur so text stays readable. */
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 10%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 55%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#ffffff) 62%,transparent);
  -webkit-backdrop-filter:blur(24px) saturate(180%);
  backdrop-filter:blur(24px) saturate(180%);
  box-shadow:0 18px 44px -14px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 30%,transparent),0 3px 10px -3px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 12%,transparent),inset 0 1px 0 color-mix(in oklab,#ffffff 40%,transparent);
  animation:cbp-quick-in 140ms cubic-bezier(.23,1,.32,1);
}
body[data-ds-dark-theme] .cbp-quick-panel{
  background:color-mix(in oklab,#1c1c1e 72%,transparent);
  border-color:color-mix(in oklab,#ffffff 14%,transparent);
  border-top-color:color-mix(in oklab,#ffffff 22%,transparent);
  box-shadow:0 18px 44px -14px rgba(0,0,0,.55),0 3px 10px -3px rgba(0,0,0,.3),inset 0 1px 0 color-mix(in oklab,#ffffff 10%,transparent);
}
@keyframes cbp-quick-in{
  from{opacity:0;transform:translateY(4px)}
  to{opacity:1;transform:none}
}
.cbp-quick-head{
  display:flex;
  flex-direction:column;
  gap:2px;
  padding:2px 4px 10px;
}
.cbp-quick-title{
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:600;
  line-height:1.4;
}
.cbp-quick-hint{
  color:var(--dsw-alias-label-tertiary);
  font-size:11px;
  line-height:1.4;
}
.cbp-quick-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:3px;
}
.cbp-quick-item{
  display:flex;
  align-items:center;
  gap:8px;
  min-height:36px;
  padding:0 9px;
  border:0;
  border-radius:10px;
  background:transparent;
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:450;
  text-align:left;
  cursor:pointer;
  transition:background-color 100ms ease;
}
.cbp-quick-item:hover{
  background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent);
}
.cbp-quick-item:focus-visible{
  outline:2px solid var(--dsw-alias-brand-primary);
  outline-offset:-1px;
}
.cbp-quick-icon{
  display:flex;
  align-items:center;
  color:var(--dsw-alias-label-secondary);
}
.cbp-quick-icon svg{
  width:16px;
  height:16px;
  display:block;
}
.cbp-quick-name{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
@media (max-width:520px){
  .cbp-more{top:10px;right:10px}
  [data-composer-card="true"] [class*="_input"]{padding-right:96px !important}
  .cbp-quick-panel{width:min(316px,calc(100vw - 24px))}
}
@media (prefers-reduced-motion: reduce){
  .cbp-quick-panel{animation:none}
}
`;var Fr="/api/chatbox-pet/boost",qr=4e3,Jn=12e4,Yn=24,Xn=8e3,jr=25e3;function Or(e){return{set:typeof e?.set=="function"?e.set:(t,r)=>setTimeout(t,r),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function bt(e){let t=typeof e=="string"?e:"";return t.length>qr?t.slice(0,qr):t}function Lr(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function Ae(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function pt(e){if(!Array.isArray(e))return[];let t=[];for(let r of e){if(r===null||typeof r!="object")continue;let n=typeof r.id=="string"?r.id.trim():"",o=Number(r.count);n===""||!Number.isFinite(o)||o<=0||t.push({id:n,label:typeof r.label=="string"&&r.label.trim()!==""?r.label.trim():n,count:Math.round(o)})}return t}function Fe(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function Z(e,t,r){let n=new Error(typeof t=="string"&&t!==""?t:e);return n.code=e,r!==void 0&&(n.cause=r),n}function Dr(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",r=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return r===void 0?{code:t}:{code:t,message:r}}function Zn(e){let t=[],r=e;for(;;){let n=/(?:\r?\n){2}/.exec(r);if(n===null)break;t.push(r.slice(0,n.index)),r=r.slice(n.index+n[0].length)}return{frames:t,rest:r}}function Ar(e){let t=[];for(let r of e.split(`
`)){let n=r.trim();n===""||n.startsWith(":")||n.startsWith("data:")&&t.push(n.slice(5).trimStart())}if(t.length===0)return null;try{let r=JSON.parse(t.join(`
`));return r!==null&&typeof r=="object"&&Array.isArray(r)===!1?r:null}catch{return null}}async function dt(e){try{return await e.json()}catch{return null}}function ut(e,t){if(e===null||typeof e!="object")throw Z("host",void 0,t);if(e.ok!==!0){let o=typeof e.error?.message=="string"?e.error.message.trim():"";throw Z(typeof e.error?.code=="string"?e.error.code:"host",o===""?void 0:o)}let r=e.result,n=typeof r?.prompt=="string"?r.prompt.trim():"";if(n==="")throw Z("empty");return{prompt:n,mode:r.mode==="compose"?"compose":"improve",sources:pt(r.sources),elapsedMs:Number.isFinite(r.elapsedMs)?Math.max(0,Number(r.elapsedMs)):null,cached:r.cached===!0}}async function ea(e){let{draft:t,mode:r,locale:n,signal:o,onEvent:c,idleMs:s=jr,sessionId:i=""}=e,l=i===""?{}:{sessionId:i},x=typeof e.fetch=="function"?e.fetch:globalThis.fetch,N=Or(e.timers),d=new AbortController,y=()=>d.abort();o!==void 0&&(o.aborted?d.abort():o.addEventListener("abort",y,{once:!0}));let k=!1,g=null,z=()=>{g!==null&&N.clear(g),g=N.set(()=>{k=!0,d.abort()},s)},D=!1;try{z();let h;try{h=await x(Fr,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:bt(t),mode:r,locale:n,stream:!0,...l}}),signal:d.signal})}catch(v){throw k?Z("timeout",void 0,v):Fe(v)?v:Z("network",void 0,v)}if(k)throw Z("timeout");if(h===null||typeof h!="object")throw Z("host");if(h.ok!==!0){let v=await dt(h);if(h.status>=400)throw Z("host",void 0,h.status);let I=ut(v,h.status);c({type:"replace",text:I.prompt}),c({type:"done",result:I});return}let R=typeof h.headers?.get=="function"?String(h.headers.get("content-type")??""):"";if(h.body===null||h.body===void 0||typeof h.body.getReader!="function"||!R.includes("text/event-stream")){let v=ut(await dt(h),h.status);c({type:"replace",text:v.prompt}),c({type:"done",result:v});return}let q=h.body.getReader(),P=new TextDecoder,M="";for(;!D;){let v;try{v=await q.read()}catch(L){throw k?Z("timeout",void 0,L):Fe(L)?L:Z("stream",void 0,L)}if(v.done===!0)break;z(),M+=P.decode(v.value,{stream:!0});let I=Zn(M);M=I.rest;for(let L of I.frames){let F=Ar(L);if(F!==null&&c(F)==="stop"){D=!0;break}}}if(!D){let v=M.trim();if(v!==""){let I=Ar(v);I!==null&&c(I)}}if(D)try{await q.cancel()}catch{}}finally{g!==null&&N.clear(g),o!==void 0&&o.removeEventListener("abort",y)}}async function ta(e){let{draft:t,mode:r,locale:n,signal:o,sessionId:c=""}=e,s=typeof e.fetch=="function"?e.fetch:globalThis.fetch,i;try{i=await s(Fr,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:bt(t),mode:r,locale:n,stream:!1,...c===""?{}:{sessionId:c}}}),signal:o})}catch(l){throw Fe(l)?l:Z("network",void 0,l)}if(i===null||typeof i!="object")throw Z("host");if(i.ok!==!0&&i.status>=400)throw Z("host",void 0,i.status);return ut(await dt(i),i.status)}function ra(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,r=typeof e.now=="function"?e.now:()=>Date.now(),n=Or(e.timers),o=Number.isFinite(e.idleMs)?Number(e.idleMs):jr,c=Number.isFinite(e.undoMs)?Number(e.undoMs):Xn,s=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):Jn,i=new WeakMap,l=new WeakMap,x=new WeakMap,N=new WeakMap,d=new WeakMap,y="",k=new Set,g=new Map,z=Lr(),D=Ae(null),h=null,R=0,q=0,P=null,M=null,v=()=>{for(let p of[...k])try{p()}catch(a){console.error("[prompt-boost] a store listener failed:",a)}},I=p=>p!=null&&(typeof p=="object"||typeof p=="function");function L(p){let a=I(p)?p:M;if(!I(a))return z;let u=i.get(a);return u===void 0&&(u=Lr(),i.set(a,u)),u}function F(p,a){let u=I(p)?p:M,j={...L(u),...a};return I(u)?i.set(u,j):z=j,v(),j}function O(p){let a=I(p)?p:M;return I(a)?x.get(a)??Ae(null):D}function ie(p){return I(p)?p:M}function ee(p){let a=I(p)?p:M;if(!I(a))return"default";let u=l.get(a);return u===void 0&&(R+=1,u=`s${R}`,l.set(a,u)),u}function X(p){return`prompt-boost-panel-${ee(p)}`}function ge(p,a,u){return`${ee(p)}\0${a}\0${u}`}function le(p){let a=g.get(p);return a===void 0?null:r()-a.at>s?(g.delete(p),null):(g.delete(p),g.set(p,a),a.result)}function xe(p,a){for(g.delete(p),g.set(p,{at:r(),result:a});g.size>Yn;){let u=g.keys().next();if(u.done===!0)break;g.delete(u.value)}}function pe(){if(P===null)return;let p=P;P=null;try{p.controller.abort()}catch{}}function ne(p){let a=I(p)?p:M,u=I(a)?N.get(a):h;u!=null&&n.clear(u),I(a)?N.delete(a):h=null}function ae(p){ne(p);let a=null;a=n.set(()=>{let E=L(p);E.undo!==null&&F(p,{undo:null,phase:E.phase==="applied"?"idle":E.phase,applied:"",prompt:E.phase==="applied"?"":E.prompt,sources:E.phase==="applied"?[]:E.sources})},c);let u=I(p)?p:M;I(u)?N.set(u,a):h=a}function oe(p,a,u){let E=ie(p),j=Ae(O(p)),B=!1;if(I(E)&&typeof E.setDraft=="function")try{E.setDraft({text:a.prompt,references:[]}),B=!0}catch{try{E.setDraft(a.prompt),B=!0}catch{B=!1}}if(!B){F(p,{phase:"error",mode:a.mode,prompt:a.prompt,sources:a.sources,elapsedMs:a.elapsedMs,cached:a.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}F(p,{phase:"applied",mode:a.mode,prompt:a.prompt,applied:a.prompt,sources:a.sources,elapsedMs:a.elapsedMs,cached:a.cached===!0,error:null,undo:{draft:j,at:r()},expanded:!1}),ae(p),xe(u,a),V.play("boostDone")}async function fe(p,a,u){let{draft:E,mode:j,locale:B,key:te,sessionId:be}=u,Ce=!1,Se=!1,Te=()=>P===a&&a.controller.signal.aborted===!1,Hr=$=>{if(!Te())return"stop";if(Ce=!0,$.type==="sources"){let G=L(p);F(p,{sources:pt($.sources),mode:$.mode==="compose"?"compose":G.mode});return}if($.type==="delta"){if(typeof $.text!="string"||$.text==="")return;let G=L(p);F(p,{phase:"streaming",prompt:G.prompt+$.text});return}if($.type==="replace"){if(typeof $.text!="string")return;let G=L(p),Qr=G.phase==="ready"||$.text===""?G.phase:"streaming";F(p,{prompt:$.text,phase:Qr});return}if($.type==="done"){Se=!0;let G={prompt:typeof $.result?.prompt=="string"?$.result.prompt.trim():L(p).prompt.trim(),mode:$.result?.mode==="compose"?"compose":j,sources:pt($.result?.sources??L(p).sources),elapsedMs:Number.isFinite($.result?.elapsedMs)?Math.max(0,Number($.result.elapsedMs)):null,cached:$.result?.cached===!0};return G.prompt===""?(F(p,{phase:"error",error:{code:"empty"}}),V.play("boostFail"),"stop"):(oe(p,G,te),"stop")}if($.type==="error"){Se=!0;let G=typeof $.message=="string"&&$.message.trim()!==""?$.message.trim():void 0;return F(p,{phase:"error",error:G===void 0?{code:"unknown"}:{code:"host",message:G}}),"stop"}};try{if(await ea({draft:E,mode:j,locale:B,sessionId:be,signal:a.controller.signal,onEvent:Hr,fetch:t,timers:n,idleMs:o}),Se)return;if(Ce)throw Z("stream");await de(p,a,{draft:E,mode:j,locale:B,key:te,sessionId:be})}catch($){if(a.controller.signal.aborted||Fe($)||!Te())return;if(Ce){F(p,{phase:"error",error:Dr($)}),V.play("boostFail");return}try{await de(p,a,{draft:E,mode:j,locale:B,key:te,sessionId:be})}catch(G){if(a.controller.signal.aborted||Fe(G)||!Te())return;F(p,{phase:"error",error:Dr(G)}),V.play("boostFail")}}finally{P===a&&(P=null)}}async function de(p,a,u){let E=await ta({draft:u.draft,mode:u.mode,locale:u.locale,signal:a.controller.signal,fetch:t,sessionId:u.sessionId??""});P!==a||a.controller.signal.aborted||oe(p,E,u.key)}function ye(p,a){let u=typeof a=="string"?a:"";u!==""&&(y=u,I(p)&&d.set(p,u))}function we(p){return I(p)?d.get(p)??y:y}function ue(p,a){let u=typeof a?.draft=="string"?a.draft:"",E=Array.isArray(a?.occurrences)?a.occurrences:[],j=O(p);if(j.text===u&&j.references.length===E.length)return;let B={text:u,references:E.map(be=>({...be}))},te=I(p)?p:M;I(te)?x.set(te,B):D=B}function m(p,a={}){I(p)&&(M=p);let u=a.locale==="en"?"en":"zh",E=a.force===!0,j=O(p),B=bt(j.text),te=B.trim()===""?"compose":"improve",be=ge(p,te,B);if(pe(),ne(p),!E){let Te=le(be);if(Te!==null){oe(p,{...Te,cached:!0},be);return}}q+=1;let Ce={seq:q,actions:p,controller:new AbortController};P=Ce;let Se=L(p);F(p,{phase:"running",mode:te,seed:B,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:Se.phase==="idle"&&Se.undo===null?!1:Se.expanded}),V.play("boostStart"),fe(p,Ce,{draft:B,mode:te,locale:u,key:be,sessionId:we(p)})}function C(p,a={}){m(p,{locale:a.locale,force:!0})}function A(p){let a=L(p);if(a.phase!=="ready")return!1;let u=a.prompt.trim();if(u==="")return!1;let E=ie(p);if(!I(E)||typeof E.setDraft!="function")return F(p,{phase:"error",error:{code:"apply"}}),!1;let j=Ae(O(p)),B=!1;try{E.setDraft({text:u,references:[]}),B=!0}catch{try{E.setDraft(u),B=!0}catch{B=!1}}return B?(ne(p),F(p,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:j,at:r()},expanded:!1}),ae(p),!0):(F(p,{phase:"error",error:{code:"apply"}}),!1)}function U(p){let a=L(p);if(a.undo===null)return!1;let u=ie(p),E=Ae(a.undo.draft),j=!1;if(I(u)&&typeof u.setDraft=="function")try{u.setDraft({text:E.text,references:E.references}),j=!0}catch{try{u.setDraft(E.text),j=!0}catch{j=!1}}return ne(p),F(p,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),j}function H(p){L(p).expanded!==!1&&F(p,{expanded:!1})}function Q(p){let a=L(p);a.phase==="idle"&&a.undo===null||a.expanded===!0||F(p,{expanded:!0})}function ke(p){L(p).expanded===!0?H(p):Q(p)}function ve(p){let a=I(p)?p:M;P!==null&&P.actions===a&&pe(),ne(p),F(p,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Ie(p,a){let u=L(p);u.phase==="streaming"&&(typeof a!="string"||a===u.prompt||F(p,{prompt:a}))}return{subscribe(p){return typeof p!="function"?()=>{}:(k.add(p),()=>{k.delete(p)})},getState:L,panelId:X,sessionKey:ee,setDraftMirror:ue,setSessionId:ye,start:m,retry:C,apply:A,undo:U,expand:Q,collapse:H,toggle:ke,dismiss:ve,edit:Ie}}var Ue=ra();var _r=`
/* ---- the plugin's own tokens: one accent, one surface ramp ---- */
.pb-trigger,
.pb-panel,
.pb-chip-row {
  --pb-accent: #B4690E;
  --pb-accent-ink: #8A4E06;
  --pb-accent-fill: #A45D08;
  --pb-accent-fill-hover: #8D4F05;
  --pb-accent-soft: color-mix(in oklab, #B4690E 13%, transparent);
  --pb-accent-line: color-mix(in oklab, #B4690E 26%, transparent);
  --pb-ink: var(--dsw-alias-label-primary, #0f1115);
  --pb-ink-2: var(--dsw-alias-label-secondary, #61666b);
  --pb-ink-3: var(--dsw-alias-label-tertiary, #81858c);
  --pb-line: var(--dsw-alias-border-l1, rgba(0, 0, 0, 0.04));
  --pb-line-strong: var(--dsw-alias-border-l2, rgba(0, 0, 0, 0.1));
  --pb-hover: var(--dsw-alias-interactive-bg-hover, rgba(38, 49, 72, 0.06));
  --pb-error: #C1121B;
  --pb-focus: var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary, #4176e6));
  --pb-focus-width: var(--dsw-focus-ring-width, 2px);
  --pb-card-width: min(
    calc(100% - var(--dsh-composer-side-clearance, 16px) - var(--dsh-composer-side-clearance, 16px)),
    var(--dsh-composer-card-max-width, 952px)
  );
}
body[data-ds-dark-theme] .pb-trigger,
body[data-ds-dark-theme] .pb-panel,
body[data-ds-dark-theme] .pb-chip-row {
  --pb-accent: #FFC46B;
  --pb-accent-ink: #FFC46B;
  --pb-accent-fill: #FFC46B;
  --pb-accent-fill-hover: #FFD28C;
  --pb-accent-soft: color-mix(in oklab, #FFC46B 16%, transparent);
  --pb-accent-line: color-mix(in oklab, #FFC46B 30%, transparent);
  --pb-error: #FF9A9A;
}

/* ---- composer tool-row seat: a host-native ghost icon button ---- */
.pb-trigger {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--dsw-radius-sm, 8px);
  background: transparent;
  color: var(--pb-ink-3);
  font: inherit;
  line-height: 0;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;
}
.pb-trigger:hover {
  background: var(--pb-hover);
  color: var(--pb-ink);
}
.pb-trigger:active { transform: scale(0.96); }
.pb-trigger:focus-visible {
  outline: var(--pb-focus-width) solid var(--pb-focus);
  outline-offset: 2px;
}
.pb-trigger[data-pb-running="true"] {
  color: var(--pb-accent-ink);
  background: var(--pb-accent-soft);
  cursor: progress;
}
.pb-trigger[data-pb-running="true"]::after {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: calc(var(--dsw-radius-sm, 8px) + 2px);
  background: conic-gradient(
    from 0deg,
    color-mix(in oklab, var(--pb-accent) 0%, transparent) 0deg,
    var(--pb-accent) 70deg,
    color-mix(in oklab, var(--pb-accent) 0%, transparent) 160deg
  );
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px));
  animation: pb-scan 1.2s linear infinite;
  pointer-events: none;
}
@keyframes pb-scan { to { transform: rotate(1turn); } }

/* ---- collapsed chip: one slim row above the composer card ---- */
.pb-chip-row {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: var(--pb-card-width);
  height: 28px;
  margin: 0 auto;
  min-width: 0;
}
.pb-chip-status {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  min-width: 0;
  height: 24px;
  border: 0.5px solid var(--pb-line-strong);
  border-radius: 999px;
  background: var(--pb-hover);
  color: var(--pb-ink-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  overflow: hidden;
  animation: pb-chip-in 140ms cubic-bezier(0.23, 1, 0.32, 1);
}
.pb-chip-status.is-applied {
  gap: 4px;
  padding: 0 4px 0 8px;
}
.pb-chip-main {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  padding: 0 8px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  transition: color 120ms ease;
}
.pb-chip-main:hover { color: var(--pb-ink); }
.pb-chip-main:focus-visible {
  outline: var(--pb-focus-width) solid var(--pb-focus);
  outline-offset: -2px;
}
.pb-chip-text {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pb-chip-ico {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
}
.pb-chip-ico.is-accent { color: var(--pb-accent-ink); }
.pb-chip-ico.is-error { color: var(--pb-error); }
.pb-chip-sep { flex: none; color: var(--pb-ink-2); }
.pb-chip-view {
  flex: none;
  color: var(--pb-ink);
  font-weight: 500;
  white-space: nowrap;
}
.pb-chip-dismiss {
  box-sizing: border-box;
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0 999px 999px 0;
  background: transparent;
  color: var(--pb-ink-2);
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  transition: color 120ms ease;
}
.pb-chip-dismiss:hover { color: var(--pb-ink); }
.pb-chip-dismiss:focus-visible {
  outline: var(--pb-focus-width) solid var(--pb-focus);
  outline-offset: -2px;
}
.pb-chip-action {
  box-sizing: border-box;
  min-height: 24px;
  margin: 0;
  padding: 0 4px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--pb-accent-ink);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}
.pb-chip-action:hover { text-decoration: underline; text-underline-offset: 2px; }
.pb-chip-action:focus-visible {
  outline: var(--pb-focus-width) solid var(--pb-focus);
  outline-offset: 2px;
}
.pb-spinner { animation: pb-spin 0.9s linear infinite; }
@keyframes pb-spin { to { transform: rotate(1turn); } }

/* ---- expanded panel: opens UPWARD from the chip row ---- */
.pb-panel {
  box-sizing: border-box;
  display: flex;
  flex: none;
  flex-direction: column;
  width: var(--pb-card-width);
  min-width: 0;
  max-height: 45vh;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--dsw-radius-lg, 16px);
  background: var(--dsw-specific-menu, #f8f9fa);
  -webkit-backdrop-filter: var(--dsw-menu-backdrop-filter, blur(40px) saturate(150%));
  backdrop-filter: var(--dsw-menu-backdrop-filter, blur(40px) saturate(150%));
  box-shadow:
    var(--dsw-elevation-panel, 0 3px 8px rgba(0, 0, 0, 0.04)),
    inset 0 1px 0 color-mix(in oklab, var(--pb-ink) 6%, transparent);
  --dsw-elevation-stroke-color: var(--pb-line);
  outline: none;
  animation: pb-unfold 180ms cubic-bezier(0.2, 0, 0, 1);
}
.pb-head {
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 8px;
  padding: 8px 12px;
}
.pb-head-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.pb-title {
  margin: 0;
  color: var(--pb-ink);
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
}
.pb-mode {
  display: inline-flex;
  flex: none;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  border-radius: 999px;
  background: var(--pb-accent-soft);
  color: var(--pb-accent-ink);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
}
.pb-meta {
  min-width: 0;
  margin-left: auto;
  overflow: hidden;
  color: var(--pb-ink-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pb-control-btn {
  box-sizing: border-box;
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--dsw-radius-sm, 8px);
  background: transparent;
  color: var(--pb-ink-2);
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 120ms ease, color 120ms ease;
}
.pb-control-btn:hover {
  background: var(--pb-hover);
  color: var(--pb-ink);
}
.pb-control-btn:focus-visible {
  outline: var(--pb-focus-width) solid var(--pb-focus);
  outline-offset: 2px;
}
.pb-sources {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  min-width: 0;
}
.pb-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  border: 0.5px solid var(--pb-accent-line);
  border-radius: 999px;
  background: var(--pb-accent-soft);
  color: var(--pb-ink-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  white-space: nowrap;
}
.pb-chip-count {
  color: var(--pb-accent-ink);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.pb-note {
  color: var(--pb-ink-2);
  font-size: 12px;
  line-height: 18px;
}
.pb-skeleton-chip {
  width: 64px;
  height: 24px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--pb-ink) 7%, transparent);
  animation: pb-breathe 1.6s ease-in-out infinite alternate;
}
.pb-skeleton-chip.is-short { width: 48px; }
.pb-rule {
  flex: none;
  height: 1px;
  margin: 0;
  background: linear-gradient(
    90deg,
    var(--pb-accent) 0%,
    color-mix(in oklab, var(--pb-accent) 24%, transparent) 42%,
    transparent 88%
  );
  opacity: 0.72;
}
.pb-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 8px;
  min-height: 0;
  padding: 12px;
  overflow-y: auto;
}
.pb-skeleton {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 0;
}
.pb-skeleton-line {
  height: 10px;
  border-radius: 4px;
  background: color-mix(in oklab, var(--pb-ink) 8%, transparent);
  animation: pb-breathe 1.6s ease-in-out infinite alternate;
}
.pb-skeleton-line.is-long { width: 62%; }
.pb-skeleton-line.is-full { width: 94%; }
.pb-skeleton-line.is-short { width: 44%; }
.pb-status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--pb-ink-2);
  font-size: 12px;
  line-height: 18px;
}
.pb-dot {
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: var(--pb-accent);
  animation: pb-pulse 1.2s ease-in-out infinite;
}
.pb-text {
  box-sizing: border-box;
  width: 100%;
  min-height: 76px;
  max-height: 180px;
  margin: 0;
  padding: 8px 12px;
  resize: none;
  border: 0.5px solid var(--pb-line-strong);
  border-radius: var(--dsw-radius-md, 12px);
  background: transparent;
  color: var(--pb-ink);
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}
.pb-text:focus-visible {
  border-color: transparent;
  outline: var(--pb-focus-width) solid var(--pb-focus);
  outline-offset: 2px;
}
.pb-text::placeholder { color: var(--pb-ink-2); }
.pb-text[readonly] { cursor: default; }
.pb-error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 12px;
  border-radius: var(--dsw-radius-sm, 8px);
  background: color-mix(in oklab, var(--pb-error) 8%, transparent);
  color: var(--pb-error);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
}
.pb-error-icon { display: inline-flex; flex: none; margin-top: 1px; }
.pb-error-text { min-width: 0; overflow-wrap: anywhere; }
.pb-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
.pb-foot {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 0 12px 12px;
}
.pb-foot-spacer { flex: 1 1 auto; }
.pb-btn {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 28px;
  margin: 0;
  padding: 0 12px;
  border: 0;
  border-radius: var(--dsw-radius-sm, 8px);
  background: transparent;
  color: var(--pb-ink-2);
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 120ms ease, color 120ms ease, transform 120ms ease;
}
.pb-btn:hover {
  background: var(--pb-hover);
  color: var(--pb-ink);
}
.pb-btn:active { transform: scale(0.97); }
.pb-btn:focus-visible {
  outline: var(--pb-focus-width) solid var(--pb-focus);
  outline-offset: 2px;
}
.pb-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.pb-btn-primary {
  background: var(--pb-accent-fill);
  color: #fff;
  font-weight: 600;
}
.pb-btn-primary:hover {
  background: var(--pb-accent-fill-hover);
  color: #fff;
}
body[data-ds-dark-theme] .pb-btn-primary { color: #231604; }
body[data-ds-dark-theme] .pb-btn-primary:hover { color: #231604; }
.pb-kbd {
  padding: 0 4px;
  border-radius: 4px;
  background: color-mix(in oklab, var(--pb-accent-fill) 76%, #000 24%);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
}

/* ---- motion: one signature device, everything else is a fade ---- */
/* The panel unfolds from the chip row's own 28px rather than from 0, so
   expanding never dips the composer row below the height it already had. */
@keyframes pb-unfold {
  from { max-height: 28px; opacity: 0.6; }
  to { max-height: 45vh; opacity: 1; }
}
@keyframes pb-chip-in {
  from { opacity: 0; transform: translateY(-2px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pb-breathe {
  from { opacity: 0.55; }
  to { opacity: 1; }
}
@keyframes pb-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.86); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-trigger,
  .pb-btn,
  .pb-chip-main,
  .pb-chip-dismiss,
  .pb-control-btn,
  .pb-chip-action {
    transition: none;
  }
  .pb-trigger:active,
  .pb-btn:active {
    transform: none;
  }
  .pb-trigger[data-pb-running="true"]::after {
    animation: none;
    background: conic-gradient(
      from 0deg,
      var(--pb-accent) 0deg,
      color-mix(in oklab, var(--pb-accent) 0%, transparent) 110deg
    );
  }
  .pb-spinner { animation: none; }
  .pb-panel { animation: pb-fade 120ms ease; }
  .pb-chip-status { animation: pb-fade 120ms ease; }
  .pb-skeleton-line,
  .pb-skeleton-chip,
  .pb-dot {
    animation: none;
  }
  .pb-skeleton-line,
  .pb-skeleton-chip {
    opacity: 0.8;
  }
}
@keyframes pb-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;var na="@local/chatbox-pet",Ur=["slots","locale"];function Br(){return(0,$r.useSyncExternalStore)(re.subscribe,re.getSnapshot,re.getSnapshot)}function Wr(e){let t=e.locale.bind(he),r=e.locale.bind(De);e.effect(()=>e.locale.register(he,{zh:wt,en:kt}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(De,{zh:dr,en:ur}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let s=document.querySelector('style[data-plugin="chatbox-pet"]');s!==null&&s.remove();let i=document.createElement("style");return i.setAttribute("data-plugin","chatbox-pet"),i.textContent=`${Jt}
${_r}
${Zt}
${Pr}
${Nr}
${Mr}`,document.head.appendChild(i),()=>{i.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{re.refresh().then(s=>{xt(s?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let s=()=>V.unlock();return window.addEventListener("pointerdown",s,{capture:!0}),window.addEventListener("keydown",s,{capture:!0}),()=>{window.removeEventListener("pointerdown",s,{capture:!0}),window.removeEventListener("keydown",s,{capture:!0})}},"chatbox-pet: sound unlock");let n=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:na,order:1,label:()=>t("label"),locale:he,inject:s=>({sessionId:s})},s=>{if(Br().pet===!1)return null;let l=typeof s?.sessionId=="string"&&s.sessionId!==""?s.sessionId:typeof s?.session?.id=="string"?s.session.id:"";return l===""?null:ce.createElement(Vt,{sessionId:l,t,useInput:s?.useInput,locale:n})}));let o=s=>i=>Br().boost===!1?null:s(i);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>r("button.label"),locale:De},o(s=>ce.createElement(or,{...s,store:Ue,t:r,locale:n})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>t("merge.label")(2),locale:he,inject:s=>({sessionId:s})},s=>{let i=typeof s?.sessionId=="string"?s.sessionId:"";return i===""?null:ce.createElement(pr,{sessionId:i,sessions:e.get("sessions"),t,locale:n,onNotice:l=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:i,text:l,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:De},o(s=>ce.createElement(fr,{...s,store:Ue,t:r,locale:n})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>t("quick.label"),locale:he,inject:s=>({sessionId:s})},s=>ce.createElement(Ir,{inputActions:s?.inputActions,sessionId:typeof s?.sessionId=="string"?s.sessionId:"",t,locale:n})));function c({sessionId:s,session:i}){let l=typeof s=="string"&&s!==""?s:typeof i?.id=="string"?i.id:"";return ce.useEffect(()=>{l!==""&&Ue.setSessionId(null,l)},[l]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:he,inject:s=>({sessionId:s})},s=>ce.createElement(c,{sessionId:s?.sessionId,session:s?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:he},()=>ce.createElement(er,{t})))}
		return module.exports;
	}
});
