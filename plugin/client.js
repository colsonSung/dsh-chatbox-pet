window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var en=Object.create;var He=Object.defineProperty;var tn=Object.getOwnPropertyDescriptor;var rn=Object.getOwnPropertyNames;var nn=Object.getPrototypeOf,an=Object.prototype.hasOwnProperty;var on=(e,r,t)=>()=>{if(t)throw t[0];try{return e&&(r=e(e=0)),r}catch(n){throw t=[n],n}};var St=(e,r)=>{for(var t in r)He(e,t,{get:r[t],enumerable:!0})},Nt=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of rn(r))!an.call(e,a)&&a!==t&&He(e,a,{get:()=>r[a],enumerable:!(n=tn(r,a))||n.enumerable});return e};var me=(e,r,t)=>(t=e!=null?en(nn(e)):{},Nt(r||!e||!e.__esModule?He(t,"default",{value:e,enumerable:!0}):t,e)),sn=e=>Nt(He({},"__esModule",{value:!0}),e);var Lr={};St(Lr,{transcribe:()=>Zn});async function Zn(e){let r=await fetch("/api/chatbox-pet/transcribe?name=voice.webm",{method:"POST",headers:{"content-type":e.type||"audio/webm"},body:e}),t;try{t=await r.json()}catch{throw new Error(`\u8F6C\u5199\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(t?.ok!==!0)throw new Error(t?.error?.message??"\u8F6C\u5199\u5931\u8D25");let n=t.result?.text??"";if(n.trim()==="")throw new Error("\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF0C\u8BF7\u518D\u8BF4\u4E00\u6B21");return n}var qr=on(()=>{});var fa={};St(fa,{apply:()=>Zr,inject:()=>Xr});module.exports=sn(fa);var xe=me(require("react"),1);var Ze="chatboxPet.sound",zt=!0,cn=.3,ln=1e3,pn=7,Xe={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},ma=Object.freeze(Object.keys(Xe)),dn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function Rt(e,r){return e==="error"?r==="cancelled"?"cancelled":"error":dn[e]}function Ae(e){try{return e?.getItem(Ze)==="off"?"off":"on"}catch{return"on"}}function Ct(e){zt=e!==!1}function et(e,r){try{e?.setItem(Ze,r==="off"?"off":"on")}catch{}}function Tt(e){let r=Ae(e)==="on"?"off":"on";return et(e,r),r}function Pe(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function un(e){let r=2166136261,t=String(e??"");for(let n=0;n<t.length;n+=1)r^=t.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function bn(e){let r=e.now??(()=>Date.now()),t=null,n=null,a=!1,s=new Map,o=new Map,i=0;function c(){if(!a)try{let u=e.createContext();if(u==null)return;let x=u.createGain();if(x.gain.value=cn,x.connect(u.destination),u.state==="suspended"&&typeof u.resume=="function"){let w=u.resume();w!==void 0&&typeof w.catch=="function"&&w.catch(()=>{})}t=u,n=x,a=!0}catch{t=null,n=null,a=!1}}function m(u,x,w){if(x<=1)return 0;if(typeof w=="string"&&w!=="")return un(w)%x;let g=(o.get(u)??0)%x;return o.set(u,g+1),g}function z(u,x){if(e.getPref()!=="on"||!a||t===null||n===null||!e.isVisible())return!1;let w=Xe[u];if(w===void 0)return!1;let g=r(),R=s.get(u);if(R!==void 0&&g-R<ln)return!1;s.set(u,g);let I=Array.isArray(w.variants)?w.variants:[];if(I.length===0)return!1;let b=I[m(u,I.length,x)];i=(i+1)%7;let T=(i-3)*(pn/3);try{return fn(t,n,b,T),!0}catch{return!1}}return{play:z,unlock:c,isUnlocked:()=>a,recipeNames:()=>Object.keys(Xe)}}function fn(e,r,t,n){let a=e.currentTime;for(let s of t.notes){let o=a+s.at,i=e.createOscillator(),c=e.createGain();i.type=s.type,i.frequency.setValueAtTime(s.freq,o),typeof s.slideTo=="number"&&i.frequency.exponentialRampToValueAtTime(s.slideTo,o+s.dur),n!==0&&typeof i.detune=="object"&&i.detune!==null&&i.detune.setValueAtTime(n,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s.level,o+.008),c.gain.exponentialRampToValueAtTime(1e-4,o+s.dur),i.connect(c),c.connect(r),i.start(o),i.stop(o+s.dur+.02)}}function hn(){return{getPref:()=>{let e=Pe()?.getItem(Ze);return e==="on"||e==="off"?e:zt?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var re=bn(hn());var Yr=require("react");var ze="chatboxPet",Mt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","sheet.close":"\u5173\u95ED","sheet.resize":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,r,t)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${r} \xB7 \u65F6\u957F ${Math.round(t)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.translate.title":"\u7FFB\u8BD1","sheet.translate.hint":"\u6587\u5B57\u3001\u8BED\u97F3\u6216\u6587\u4EF6\u90FD\u80FD\u7FFB\uFF1B\u8BD1\u6587\u53EF\u4EE5\u6536\u85CF\u8FDB\u751F\u8BCD\u672C\uFF0C\u6216\u76F4\u63A5\u586B\u8FDB\u8F93\u5165\u6846\u3002","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},Et={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","sheet.close":"Close","sheet.resize":"Drag to resize","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,r,t)=>`${e} segments \xB7 ${r} \xB7 ${Math.round(t)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.translate.title":"Translate","sheet.translate.hint":"Text, voice or a document \u2014 and every translation can go into the saved list or the composer.","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var E=me(require("react"),1);var mn=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],gn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},It=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],tt={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},ya=[...It.map(e=>e.id),"fallback"];function rt(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ft(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function Pt(e){let r=Ft(e);if(r==="")return null;for(let t of mn){let n=/^[a-z ]+$/.test(t),s=(n?new RegExp(`(^|[^a-z])${rt(t).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(rt(t))).exec(r);if(s===null)continue;let o=s.index+(n?s[1].length:0),i=o+(n?t.replace(/ /g," ").length:t.length),c=`${r.slice(0,o)} ${r.slice(i)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:t,rest:c}}return null}function xn(e){let r=2166136261,t=String(e??"");for(let n=0;n<t.length;n+=1)r^=t.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function yn(e){let r=Ft(e);if(r==="")return"fallback";for(let t of It){for(let n of t.zh)if(r.includes(n))return t.id;for(let n of t.en)if(new RegExp(`(^|[^a-z])${rt(n).replace(/ /g,"\\s+")}([^a-z]|$)`).test(r))return t.id}return"fallback"}function Lt(e,r){let t=Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[];return t.length===0?"":t[xn(r)%t.length]}function wn(e,r={}){let t=tt[e]??tt.fallback,n=r.locale==="en"?"en":"zh",a=typeof r.seed=="string"&&r.seed!==""?r.seed:String(e);return{intent:tt[e]===void 0?"fallback":e,clip:t.clip,sound:t.sound,line:Lt(t[n],a)}}function qt(e,r="zh"){let t=String(e??"");return/[\u4e00-\u9fff]/.test(t)?"zh":/[a-z]/i.test(t)||r==="en"?"en":"zh"}function Dt(e={}){let r=e.locale==="en"?"en":"zh";return Lt(gn[r],e.seed??"wake")}function At(e={}){let r=typeof e.now=="function"?e.now:()=>Date.now(),t=Number.isFinite(e.debounceMs)?e.debounceMs:700,n=Number.isFinite(e.holdMs)?e.holdMs:15e3,a=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,s=!1,o="",i="",c=0,m=0;function z(w){let g=Pt(w);return g===null?s?(s=!1,o="",i="",{kind:"off"}):null:(c=r(),s?null:(s=!0,o=g.wake,i=g.rest,c=r(),m=0,{kind:"wake",wake:g.wake,digest:g.rest}))}function u(w,g={}){if(!s)return null;let R=Pt(w);if(R===null)return s=!1,{kind:"off"};let I=`${R.wake}\0${R.rest}`;if(I===i)return null;let b=r(),T=b-m;if(T<a)return{kind:"cooldown",retryInMs:a-T};i=I,m=b,c=b;let L=yn(R.rest);return{kind:"reply",...wn(L,{...g,seed:I}),digest:I}}function x(){return!s||r()-c<n?null:(s=!1,o="",i="",{kind:"off"})}return{observe:z,settle:u,expire:x,isActive:()=>s,debounceMs:t,holdMs:n,wakeWord:()=>o}}var $=me(require("react"),1),Gt=require("react-dom");var Ot=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Ke=60;function jt(e,r){let t=r==="en"?"en":"zh";return typeof e?.[t]=="string"?e[t]:""}function Oe(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=Ke?r:t.slice(0,Ke).join("")}function Bt(e,r,t,n=8){let s=Number.isFinite(r?.width)?r.width:0,o=Number.isFinite(r?.height)?r.height:0,i=Number.isFinite(t?.width)?t.width:0,c=Number.isFinite(t?.height)?t.height:0,m=(Number.isFinite(e?.right)?e.right:0)-s;m<8&&(m=Number.isFinite(e?.left)?e.left:8);let z=(Number.isFinite(e?.top)?e.top:0)-o-n;z<8&&(z=(Number.isFinite(e?.bottom)?e.bottom:0)+n);let u=Math.max(8,i-s-8),x=Math.max(8,c-o-8);return{left:Math.min(Math.max(m,8),u),top:Math.min(Math.max(z,8),x)}}var nt=["topic","reminder","recall","nudge","encourage","tease","chitchat"],$t={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},_t=9e3,kn=24e4,at=.05;function Ut(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<kn)return!1;let t=Number.isFinite(e.chance)?e.chance:at;return(typeof e.random=="function"?e.random:Math.random)()<t}function Wt(e,r){let t=r==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[t]??""}function Ht(e){return $t[e]??$t.chitchat}async function Kt(e={}){let r=typeof e.fetch=="function"?e.fetch:(...t)=>globalThis.fetch(...t);try{let t=await r("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!t.ok)return null;let n=await t.json();if(n?.ok!==!0)return null;let a=n.result;return typeof a?.text!="string"||a.text.trim()===""?null:{kind:nt.includes(a.kind)?a.kind:"chitchat",text:a.text.trim(),quote:typeof a?.quote=="string"?a.quote:"",item:typeof a?.item=="string"?a.item:"",source:typeof a?.source?.label=="string"?a.source:null,sources:Array.isArray(a?.sources)?a.sources:[]}}catch{return null}}var Qt=268;function Jt({anchor:e,locale:r,onSay:t,onAction:n,onQuip:a,recent:s,onForget:o,onClose:i,t:c}){let m=$.useRef(null),z=$.useRef(null),[u,x]=$.useState(""),[w,g]=$.useState(()=>({left:0,top:0,ready:!1}));$.useLayoutEffect(()=>{let b=m.current;if(b===null)return;let T=b.getBoundingClientRect().height,L=Bt(e,{width:Qt,height:T},{width:window.innerWidth,height:window.innerHeight});g({...L,ready:!0})},[e]),$.useEffect(()=>{let b=z.current;b!==null&&typeof b.focus=="function"&&b.focus()},[]),$.useEffect(()=>{let b=L=>{let F=m.current;F!==null&&L.target instanceof Node&&F.contains(L.target)||i()},T=L=>{L.key==="Escape"&&(L.preventDefault(),L.stopPropagation(),i())};return document.addEventListener("pointerdown",b,!0),document.addEventListener("keydown",T,!0),()=>{document.removeEventListener("pointerdown",b,!0),document.removeEventListener("keydown",T,!0)}},[i]);let R=()=>{let b=Oe(u);b!==""&&(t(b),i())},I={left:`${Math.round(w.left)}px`,top:`${Math.round(w.top)}px`,width:`${Qt}px`,visibility:w.ready?"visible":"hidden"};return(0,Gt.createPortal)($.createElement("div",{ref:m,className:"cbp-menu",style:I,role:"menu","aria-label":c("menu.title"),"data-cbp-menu":"true",onContextMenu:b=>b.preventDefault()},$.createElement("div",{className:"cbp-menu-say"},$.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},c("menu.say")),$.createElement("div",{className:"cbp-menu-row"},$.createElement("input",{id:"cbp-menu-say-input",ref:z,className:"cbp-menu-input",type:"text",value:u,maxLength:Ke,placeholder:c("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:b=>x(b.target.value),onKeyDown:b=>{b.key==="Enter"&&(b.preventDefault(),b.stopPropagation(),R())}}),$.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:Oe(u)==="",onClick:R},c("menu.saySubmit")))),s.length===0?null:$.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},$.createElement("span",{className:"cbp-menu-label"},c("menu.recent"),$.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:o},c("menu.clear"))),$.createElement("div",{className:"cbp-menu-recent-list"},s.slice(0,8).map(b=>$.createElement("button",{key:`${b.text}-${b.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":b.text,title:b.text,onClick:()=>{t(b.text),i()}},b.text)))),$.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},$.createElement("span",{className:"cbp-menu-label"},c("menu.quip")),$.createElement("div",{className:"cbp-menu-grid"},nt.map(b=>$.createElement("button",{key:b,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":b,onClick:()=>{a(b),i()}},Wt(b,r))))),$.createElement("div",{className:"cbp-menu-actions"},$.createElement("span",{className:"cbp-menu-label"},c("menu.action")),$.createElement("div",{className:"cbp-menu-grid"},Ot.map(b=>$.createElement("button",{key:b.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":b.clip,title:b.clip,onClick:()=>{n(b.clip),i()}},jt(b,r))))),$.createElement("p",{className:"cbp-menu-hint"},c("menu.hint"))),document.body)}var ot="/api/chatbox-pet/said",Vt="chatboxPet.said";function st(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=60?r:t.slice(0,60).join("")}function vn(e,r,t=Date.now()){let n=st(r),a=Array.isArray(e)?e.filter(o=>typeof o?.text=="string"):[];if(n==="")return a.slice(0,24);let s=a.filter(o=>o.text!==n);return[{text:n,at:t},...s].slice(0,24)}function it(e){let r=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],t=[],n=new Set;for(let a of r){let s=st(typeof a=="string"?a:a?.text);if(!(s===""||n.has(s))&&(n.add(s),t.push({text:s,at:Number.isFinite(a?.at)?a.at:0}),t.length>=24))break}return t}function Sn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function Nn(e={}){let r=typeof e.fetch=="function"?e.fetch:(...u)=>globalThis.fetch(...u),t=e.storage===void 0?Sn():e.storage,n=()=>{try{let u=t?.getItem(Vt);return u==null?[]:it(JSON.parse(u))}catch{return[]}},a=u=>{try{t?.setItem(Vt,JSON.stringify(u))}catch{}},s=Object.freeze({lines:Object.freeze(n()),loaded:!1}),o=new Set;function i(u){s=Object.freeze({...s,...u});for(let x of o)try{x()}catch{}}async function c(){try{let x=await(await r(ot,{method:"GET",headers:{accept:"application/json"}})).json();if(x?.ok===!0){let w=it(x.result);return i({lines:w,loaded:!0}),a(w),w}}catch{}return i({loaded:!0}),s.lines}async function m(u){let x=st(u);if(x==="")return s.lines;let w=vn(s.lines,x);i({lines:Object.freeze(w)}),a(w);try{let R=await(await r(ot,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:x})})).json();if(R?.ok===!0){let I=it(R.result);return i({lines:I,loaded:!0}),a(I),I}}catch{}return s.lines}async function z(){i({lines:Object.freeze([])}),a([]);try{await r(ot,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(u){return typeof u!="function"?()=>{}:(o.add(u),()=>o.delete(u))},getSnapshot(){return s},refresh:c,remember:m,clear:z}}var Ie=Nn();var ct=null;function Yt(e,r){let t=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(t)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(t)?!1:/Mac/i.test(typeof r=="string"?r:t)}function Xt(e){if(e!==void 0)return Yt(e.userAgent,e.platform)?".mov":".webm";if(ct===null){let r=typeof navigator>"u"?void 0:navigator;ct=Yt(r?.userAgent,r?.platform)?".mov":".webm"}return ct}var Zt={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},zn={failed:"click-angry",cancelled:"act-shy"};function er(e){let r=e?.previous?.status??"idle",t=e?.next?.status??"idle",n=e?.previous?.detail??null,a=e?.next?.detail??null,s=t!==r||a!==n,i=r==="working"&&t==="thinking"?"result":t;if(!s)return{changed:!1,status:i,detail:a,clip:null,sound:null};if(t==="idle")return{changed:!0,status:"idle",detail:a,clip:null,sound:null};let c=i==="error"?zn[a]??Zt.error:Zt[i]??e?.idleClip??null;return{changed:!0,status:i,detail:a,clip:c,sound:Rt(i,a)}}var Rn=6e3,Cn=5e3,Tn={thinking:0,working:1,result:2,waiting:3,success:4,error:5},Re="idle-breathe-loop",tr="click-wave",rr=["act-harley","act-beach"],nr=6e3,Mn=9e4,En=.12;function ar({sessionId:e,t:r,useInput:t,locale:n}){let a=E.useRef(null),s=E.useRef(null),o=E.useRef("idle"),i=E.useRef(null),c=E.useRef(Date.now()),m=E.useRef(null),z=E.useRef(0),u=E.useRef(0),[x,w]=E.useState(null),[g,R]=E.useState(null),b=E.useSyncExternalStore(Ie.subscribe,Ie.getSnapshot,Ie.getSnapshot).lines,T=E.useRef(0),[L,F]=E.useState(null),[S,C]=E.useState("idle"),[q,B]=E.useState(!0),j=E.useRef(!1),A=E.useCallback((y,P)=>{let O=a.current;if(O===null||O.dataset.clip===y&&O.loop===P&&!O.ended)return;O.dataset.clip=y,O.loop=P,O.src=`/api/chatbox-pet/asset/${y}${Xt()}`;let H=O.play();H!==void 0&&typeof H.catch=="function"&&H.catch(()=>{})},[]),Ce=E.useCallback(()=>{let y=a.current;if(y!==null){if(!j.current&&y.dataset.clip!==Re){j.current=!0,A(Re,!0);return}B(!1)}},[A]),se=E.useCallback(()=>{window.clearTimeout(T.current),F(null)},[]),X=E.useCallback((y,P,O,H=Cn,Z=null)=>{window.clearTimeout(T.current),F({text:y,kind:O,source:Z}),P||(T.current=window.setTimeout(()=>F(null),H))},[]),be=E.useCallback(y=>{let P=s.current?.workStatusTexts,O=Tn[y],H=O===void 0||!Array.isArray(P)?void 0:P[O];if(!(!Array.isArray(H)||H.length===0))return H[Math.floor(Math.random()*H.length)]},[]),Te=E.useCallback(y=>{let P=typeof y?.status=="string"?y.status:"idle",O=o.current,H=typeof y?.detail=="string"?y.detail:null,Z=er({previous:{status:O,detail:i.current},next:{status:P,detail:H},idleClip:Re});if(!Z.changed){P==="waiting"&&typeof y?.bubble=="string"&&y.bubble!==""&&X(y.bubble,!0,"waiting");return}if(o.current=P,i.current=H,C(P),m.current!==null&&m.current.isActive()){c.current=Date.now();return}if(P==="idle"){A(Re,!0),se(),c.current=Date.now();return}c.current=Date.now();let V=Z.status,de=Z.detail;A(Z.clip??Re,!1);let ve=typeof y?.bubble=="string"&&y.bubble!==""?y.bubble:be(V),Ee=y?.source==="broadcast"?"notify":Z.sound;re.play(Ee,ve),ve!==void 0?X(ve,P==="waiting",V):se()},[se,be,A,X]),J=E.useCallback(async y=>{let P=await Kt({kind:y,locale:typeof n=="function"?n():"zh"});if(P===null)return;let O=Ht(P.kind);A(O.clip,!1),re.play(O.sound,P.text),X(P.text,!1,"quip",_t,P.source?.label??null)},[n,A,X]),ye=E.useCallback(()=>{if(o.current!=="idle"||m.current!==null&&m.current.isActive())return;let P=Date.now()-c.current;if(P<Mn)return;if(Ut({idleForMs:P,chance:at})){c.current=Date.now(),J(null);return}if(Math.random()>En)return;let O=rr[Math.floor(Math.random()*rr.length)];A(O,!1),c.current=Date.now()},[A,J]),W=E.useCallback((y,P,O)=>{typeof y.clip=="string"&&y.clip!==""&&A(y.clip,!1),typeof y.sound=="string"&&y.sound!==""&&re.play(y.sound,y.line),typeof y.line=="string"&&y.line!==""&&X(y.line,P,"chat",O)},[A,X]),we=E.useCallback(()=>{window.clearTimeout(u.current),w(null),A(Re,!0),se()},[se,A]),pe=typeof t=="function"?t(y=>typeof y?.draft=="string"?y.draft:""):"";E.useEffect(()=>{m.current===null&&(m.current=At());let y=m.current,P=qt(pe,typeof n=="function"?n():"zh"),O=y.observe(pe);if(O!==null&&O.kind==="wake"&&(w({phase:"awake"}),W({clip:"click-surprise",sound:"wake",line:Dt({locale:P,seed:pe})},!0)),O!==null&&O.kind==="off"){we();return}if(window.clearTimeout(z.current),!y.isActive())return;let H=Z=>{z.current=window.setTimeout(()=>{let V=y.settle(pe,{locale:P});if(V!==null&&V.kind==="cooldown"){H(Math.max(120,V.retryInMs));return}V===null||V.kind!=="reply"||(W(V,!1,nr),window.clearTimeout(u.current),u.current=window.setTimeout(()=>we(),y.holdMs))},Z)};return H(y.debounceMs),()=>window.clearTimeout(z.current)},[pe,n,W,we]),E.useEffect(()=>{Ie.refresh()},[]),E.useEffect(()=>{let y=!1;return fetch("/api/chatbox-pet/config").then(P=>P.ok?P.json():null).then(P=>{!y&&P?.ok===!0&&(s.current=P.result)}).catch(()=>{}),()=>{y=!0}},[]),E.useEffect(()=>{if(typeof e!="string"||e==="")return;let y=!1,P=0,O=async()=>{if(document.visibilityState==="visible"){try{let V=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),de=V.ok?await V.json():null;!y&&de?.ok===!0&&Te(de.result)}catch{}y||ye()}},H=()=>{P=window.setTimeout(async()=>{await O(),y||H()},Rn)},Z=()=>{document.visibilityState==="visible"&&O()};return document.addEventListener("visibilitychange",Z),O(),H(),()=>{y=!0,window.clearTimeout(P),document.removeEventListener("visibilitychange",Z)}},[e,Te]),E.useEffect(()=>(A(Re,!0),()=>window.clearTimeout(T.current)),[A]);let[fe,Me]=E.useState(()=>Ae(Pe())==="on"),Fe=E.useCallback(y=>{let P=Oe(y);P!==""&&(A(tr,!1),re.play("click",P),X(P,!1,"chat",nr),Ie.remember(P))},[A,X]),Le=E.useCallback(y=>{typeof y!="string"||y===""||(A(y,!1),re.play("click",y))},[A]),ke=E.useCallback(()=>{let y=document.querySelector("[data-cbp-pet]"),P=y instanceof Element?y.getBoundingClientRect():null;P!==null&&R({left:P.left,right:P.right,top:P.top,bottom:P.bottom})},[]);return E.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},E.createElement("div",{className:"cbp-stage"},E.createElement("div",{className:(L===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(L?.kind==="error"?" cbp-bubble--error":"")+(L?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":r("aria.bubble")},L?.source?E.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":L.source},L.source):null,E.createElement("span",{className:"cbp-bubble-text"},L?.text??"")),E.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":r(fe?"sound.on":"sound.off"),"aria-pressed":fe,onClick:y=>{y.stopPropagation();let P=Tt(Pe())==="on";Me(P),prefsStore.update({sound:P})}},fe?E.createElement(Pn,null):E.createElement(In,null)),E.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":x===null?S:"awake","data-cbp-chat":x===null?"false":"true","aria-label":r("aria.pet"),onClick:()=>{re.play("click"),A(tr,!1)},onContextMenu:y=>{y.preventDefault(),y.stopPropagation(),ke()},onKeyDown:y=>{(y.key==="ContextMenu"||y.shiftKey&&y.key==="F10")&&(y.preventDefault(),ke())},"aria-haspopup":"menu","aria-expanded":g===null?"false":"true"},q?E.createElement("video",{ref:a,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:y=>{y.currentTarget.loop||A(Re,!0)},onError:Ce}):E.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),g===null?null:E.createElement(Jt,{anchor:g,locale:typeof n=="function"?n():"zh",onSay:Fe,onAction:Le,onQuip:y=>{J(y)},recent:b,onForget:()=>{Ie.clear()},onClose:()=>R(null),t:r}))}function Pn(){return E.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},E.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),E.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),E.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function In(){return E.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},E.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),E.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var or=`
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
`;var ir="/api/chatbox-pet/prefs",Fn=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function Ln(e={}){let r=typeof e.fetch=="function"?e.fetch:(...i)=>globalThis.fetch(...i),t=Fn,n=new Set;function a(i){t={...t,...i};for(let c of n)try{c()}catch{}}async function s(){try{let c=await(await r(ir,{method:"GET",headers:{accept:"application/json"}})).json();c?.ok===!0&&c.result!==null&&typeof c.result=="object"?a({pet:c.result.pet!==!1,boost:c.result.boost!==!1,sound:c.result.sound!==!1,loaded:!0}):a({loaded:!0})}catch{}return t}async function o(i){let c=t,m={};for(let z of["pet","boost","sound"])typeof i?.[z]=="boolean"&&(m[z]=i[z]);a(m);try{let u=await(await r(ir,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:m})})).json();if(u?.ok!==!0||u.result===null||typeof u.result!="object")throw new Error("rejected");return a({pet:u.result.pet!==!1,boost:u.result.boost!==!1,sound:u.result.sound!==!1,loaded:!0}),!0}catch{return a({pet:c.pet,boost:c.boost,sound:c.sound}),!1}}return{subscribe(i){return typeof i!="function"?()=>{}:(n.add(i),()=>n.delete(i))},getSnapshot(){return t},refresh:s,update:o}}var le=Ln();var te=me(require("react"),1),sr=require("react");var cr=`
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
`;function lt({id:e,checked:r,label:t,onChange:n}){return te.createElement("label",{className:"cbp-set-item",htmlFor:e},te.createElement("span",{className:"cbp-switch"},te.createElement("input",{id:e,type:"checkbox",role:"switch",checked:r,onChange:a=>n(a.target.checked),"data-cbp-pref":e}),te.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),te.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),t)}function lr({t:e}){let r=(0,sr.useSyncExternalStore)(le.subscribe,le.getSnapshot,le.getSnapshot),[t,n]=te.useState(()=>Ae(Pe())==="on"),a=s=>{n(s),et(Pe(),s?"on":"off"),le.update({sound:s})};return te.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},te.createElement("div",{className:"cbp-set-head"},te.createElement("span",{className:"cbp-set-title"},e("settings.title")),te.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),te.createElement("div",{className:"cbp-set-items"},te.createElement(lt,{id:"chatbox-pet-feature-pet",checked:r.pet!==!1,label:e("settings.pet"),onChange:s=>{le.update({pet:s})}}),te.createElement(lt,{id:"chatbox-pet-feature-boost",checked:r.boost!==!1,label:e("settings.boost"),onChange:s=>{le.update({boost:s})}}),te.createElement(lt,{id:"chatbox-pet-feature-sound",checked:t,label:e("settings.sound"),onChange:a})))}var je=me(require("react"),1),Ge=require("react"),dt=require("@deepseek-ai/dsh-client-ui-primitives");var G=require("react");function qe({size:e=16,children:r}){return(0,G.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},r)}function Qe({size:e=16}){return(0,G.createElement)(qe,{size:e},[(0,G.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,G.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function pr({size:e=16}){return(0,G.createElement)(qe,{size:e},(0,G.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function dr({size:e=16}){return(0,G.createElement)(qe,{size:e},[(0,G.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function pt({size:e=16}){return(0,G.createElement)(qe,{size:e},[(0,G.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,G.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function ur({size:e=16}){return(0,G.createElement)(qe,{size:e},(0,G.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function br({size:e=16}){return(0,G.createElement)(qe,{size:e},[(0,G.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,G.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,G.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,G.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function qn({label:e,children:r}){return typeof dt.Tooltip=="function"?je.createElement(dt.Tooltip,{label:e,side:"top",delayMs:400},r):(0,Ge.cloneElement)(r,{title:e})}function fr({inputActions:e,useInput:r,store:t,t:n,locale:a}){let s=(0,Ge.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),o=typeof r=="function"?r(x=>x):void 0;t.setDraftMirror(e,o);let i=typeof o?.draft=="string"?o.draft:"",c=s.phase==="running"||s.phase==="streaming",m=s.phase!=="idle",z=n(c?"button.running":"button.label"),u=c?n("button.running"):i.trim()===""?n("button.tooltipCompose"):n("button.tooltip");return je.createElement(qn,{label:u},je.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":c?"true":"false","data-pb-open":m?"true":"false","aria-label":z,"aria-busy":c?"true":void 0,"aria-expanded":m?"true":"false","aria-controls":t.panelId(e),onMouseDown:x=>x.preventDefault(),onClick:()=>t.start(e,{locale:typeof a=="function"?a():"zh"})},je.createElement(Qe,{size:16})))}var ne=me(require("react"),1),Je=require("react"),ft=require("@deepseek-ai/dsh-client-ui-primitives");var hr="next-turn";function ut(e){return(Array.isArray(e?.content)?e.content:[]).filter(t=>t!==null&&typeof t=="object"&&t.type==="text"&&typeof t.text=="string").map(t=>t.text).join("").trim()}function Dn(e){return(Array.isArray(e?.content)?e.content:[]).some(t=>t===null||typeof t!="object"||t.type!=="text")}function mr(e){let r=[];try{let n=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();r=Array.isArray(n?.[hr])?n[hr]:[]}catch{r=[]}return bt(r)}function bt(e){let t=(Array.isArray(e)?e:[]).filter(o=>o!==null&&typeof o=="object"&&typeof o.id=="string"),n=t.map(ut),a=t.filter((o,i)=>!Dn(o)&&n[i]!==""),s="";return t.length>=2&&a.length!==t.length?s="attachment":t.length>8?s="too-many":t.length<2&&(s="too-few"),{items:t,texts:n,mergeable:t.length,blocked:s}}async function An(e,r={}){let t=On(e),n=typeof r.fetchImpl=="function"?r.fetchImpl:(...a)=>globalThis.fetch(...a);try{let a=await n("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof r.sessionId=="string"?r.sessionId:void 0,locale:r.locale==="en"?"en":"zh"})});if(!a.ok)return{prompt:t,optimized:!1,reason:"http-"+String(a.status)};let s=await a.json(),o=typeof s?.result?.prompt=="string"?s.result.prompt.trim():"";return o===""?{prompt:t,optimized:!1,reason:"empty"}:{prompt:o,optimized:s.result.optimized===!0,reason:typeof s.result.reason=="string"?s.result.reason:""}}catch{return{prompt:t,optimized:!1,reason:"network"}}}function On(e){return(Array.isArray(e)?e:[]).map(r=>String(r??"").trim()).filter(r=>r!=="").join(`

`)}async function jn(e,r,t){let n=Array.isArray(r)?r:[],a=String(t??"").trim();if(n.length<2||a==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[s,...o]=n;try{let m=await e.updateQueue(s.id,{kind:"edit",content:[{type:"text",text:a}]});if(m?.ok!==!0)return{ok:!1,merged:0,removed:0,error:m?.error?.code??"edit-failed"}}catch(m){return{ok:!1,merged:0,removed:0,error:gr(m)}}let i=0,c=0;for(let m of o)try{let z=await e.updateQueue(m.id,{kind:"remove"});if(z?.ok===!0){i+=1;continue}if(z?.error?.code==="session/queue-item-not-found"){c+=1;continue}return{ok:!1,merged:1,removed:i,claimed:c,error:z?.error?.code??"remove-failed"}}catch(z){return{ok:!1,merged:1,removed:i,claimed:c,error:gr(z)}}return{ok:c===0,merged:1,removed:i,claimed:c,error:c>0?"session/queue-item-not-found":""}}async function xr(e={}){let r=mr(e.session);if(r.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:r.blocked};let t=r.items.map(ut),n=await An(t,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),a=mr(e.session);if(!(a.items.length===r.items.length&&a.items.every((i,c)=>i.id===r.items[c].id&&ut(i)===t[c])))return{ok:!1,count:r.items.length,optimized:!1,reason:"",error:"queue-changed"};let o=await jn(e.session,r.items,n.prompt);return{ok:o.ok,count:r.items.length,optimized:n.optimized,reason:n.reason,error:o.error}}function gr(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function Bn({label:e,children:r}){return typeof ft.Tooltip=="function"?ne.createElement(ft.Tooltip,{label:e,side:"top",delayMs:400},r):(0,Je.cloneElement)(r,{title:e})}var $n=Object.freeze({}),_n=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>$n});function Un(e){let r=(()=>{try{let n=e?.projections?.faceOf?.("inbox");if(typeof n?.subscribe=="function"&&typeof n?.getSnapshot=="function")return n}catch{}return _n})(),t=(0,Je.useSyncExternalStore)(r.subscribe,r.getSnapshot,r.getSnapshot);return bt(t?.["next-turn"])}function yr({sessionId:e,sessions:r,t,locale:n,onNotice:a}){let s=ne.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return r?.binding?.(e)?.session??null}catch{return null}},[r,e]),o=Un(s),[i,c]=ne.useState("idle"),[m,z]=ne.useState(""),u=ne.useRef(0);ne.useEffect(()=>()=>window.clearTimeout(u.current),[]);let x=o.items.length;if(x<2||o.blocked==="attachment"||o.blocked==="too-many")return null;let w=async()=>{if(i!=="running"){c("running"),z("");try{let R=await xr({session:s,sessionId:e,locale:typeof n=="function"?n():"zh"});if(R.ok){let I=R.optimized?t("merge.done")(R.count):t("merge.donePlain")(R.count);z(I),a?.(I)}else z(R.error==="queue-changed"?t("merge.changed"):R.error==="session/queue-item-not-found"?t("merge.claimed"):t("merge.failed"))}catch{z(t("merge.failed"))}finally{c("idle"),window.clearTimeout(u.current),u.current=window.setTimeout(()=>z(""),4e3)}}},g=i==="running"?t("merge.running"):m!==""?m:t("merge.label")(x);return ne.createElement(Bn,{label:g},ne.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":x,"data-cbp-merge-phase":i,"aria-label":g,"aria-busy":i==="running"?"true":void 0,disabled:i==="running",onClick:R=>{R.stopPropagation(),w()}},ne.createElement(br,null),ne.createElement("span",{className:"cbp-merge-count"},i==="running"?"\u2026":x)))}var Be="promptBoost",wr={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},kr={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var v=me(require("react"),1),ae=require("react");var Wn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function Hn(){return v.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},v.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),v.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function vr(e,r){let t=`source.${e.id}`,n=r(t);return n===t?e.label:n}function Kn(e,r){if(e==null)return r("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return r("panel.error.network");case"timeout":return r("panel.error.timeout");case"stream":return r("panel.error.stream");case"empty":return r("panel.error.empty");case"apply":return r("panel.error.apply");case"host":return r("panel.error.host");default:return r("panel.error.unknown")}}function Qn(e,r){if(e.phase!=="ready")return"";let t=[];return e.cached&&t.push(r("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&t.push(r("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),t.join(" \xB7 ")}function Gn(e,r){if(e.phase==="running")return r("chip.running");if(e.phase==="streaming"){let t=e.sources.slice(0,2).map(n=>`${vr(n,r)} ${n.count}`).join(" \xB7 ");return t===""?r("chip.writing"):`${t} \xB7 ${r("chip.writing")}`}return e.phase==="ready"?r("chip.ready"):e.phase==="applied"?r("undo.done"):e.phase==="error"?r("chip.failed"):r("undo.done")}function Jn({state:e,store:r,t,inputActions:n,chipRef:a}){let s=e.phase==="applied",o=e.phase==="running"||e.phase==="streaming",i=e.phase==="ready",c=e.phase==="error",m=e.mode==="compose"?t("panel.compose"):t("button.label"),z=Gn(e,t);return s?v.createElement("div",{className:"pb-chip-row"},v.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":t("chip.expand"),onClick:()=>r.expand(n),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),r.expand(n))}},v.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},v.createElement(pr,{size:12})),v.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},t("undo.done")),v.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),v.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":t("undo.label"),onClick:()=>r.undo(n)},t("undo.action")))):v.createElement("div",{className:"pb-chip-row"},v.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":o?"true":"false",onClick:()=>r.expand(n)},v.createElement("button",{ref:a,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":r.panelId(n),"aria-label":`${t("chip.expand")} \xB7 ${m}`,onClick:()=>r.expand(n)},v.createElement("span",{className:o||i?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},o?v.createElement(Hn,null):c?v.createElement(pt,{size:12}):v.createElement(Qe,{size:12})),v.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},z),i||c?v.createElement(v.Fragment,null,v.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),v.createElement("span",{className:"pb-chip-view"},t("chip.view"))):null),v.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":t("chip.dismiss"),onClick:()=>r.dismiss(n)},v.createElement(dr,{size:10}))))}function Vn({state:e,store:r,t,inputActions:n,locale:a,panelRef:s}){let o=(0,ae.useRef)(null),i=e.phase,c=i==="running",m=i==="streaming",z=i==="ready",u=i==="applied",x=z||u,w=i==="error",g=e.sources,R=c||m||x||g.length>0,I=u?e.applied:e.prompt,b=Qn(e,t),T=r.panelId(n),L=t(Wn?"shortcut.mac":"shortcut.other"),F=t(c?"panel.announceRunning":m?"panel.streaming":u?"panel.announceApplied":z?"panel.announceReady":"panel.announceError");return(0,ae.useEffect)(()=>{let S=o.current;S===null||i!=="streaming"||(S.scrollTop=S.scrollHeight)},[e.prompt,i]),v.createElement("section",{ref:s,id:T,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":i,"data-pb-running":c||m?"true":"false",tabIndex:-1,"aria-labelledby":`${T}-title`,"aria-busy":c||m?"true":void 0},v.createElement("header",{className:"pb-head"},v.createElement("div",{className:"pb-head-row"},v.createElement("h2",{className:"pb-title",id:`${T}-title`},t("panel.title")),e.mode==="compose"?v.createElement("span",{className:"pb-mode"},t("panel.compose")):null,v.createElement("span",{className:"pb-meta"},b),v.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":t("panel.collapse"),title:t("panel.collapse"),onClick:()=>r.collapse(n)},v.createElement(ur,{size:14}))),R?v.createElement("div",{className:"pb-sources",role:"list","aria-label":t("panel.sources")},g.length>0?g.map(S=>v.createElement("span",{key:S.id,className:"pb-chip",role:"listitem","data-pb-source":S.id},v.createElement("span",{className:"pb-chip-label"},vr(S,t)),v.createElement("span",{className:"pb-chip-count"},S.count))):c?[v.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),v.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:v.createElement("span",{className:"pb-note"},t("panel.noSources"))):null),v.createElement("div",{className:"pb-rule","aria-hidden":"true"}),v.createElement("div",{className:"pb-body"},c?v.createElement(v.Fragment,null,v.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},v.createElement("span",{className:"pb-skeleton-line is-long"}),v.createElement("span",{className:"pb-skeleton-line is-full"}),v.createElement("span",{className:"pb-skeleton-line is-short"})),v.createElement("div",{className:"pb-status"},v.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.status"))):null,m||x?v.createElement("textarea",{ref:o,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:m||u,spellCheck:!1,"aria-label":t("panel.editLabel"),placeholder:t("panel.placeholder"),value:I}):null,m?v.createElement("div",{className:"pb-status"},v.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.streaming")):null,w?v.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},v.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},v.createElement(pt,{size:14})),v.createElement("span",{className:"pb-error-text"},Kn(e.error,t))):null,v.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},F)),v.createElement("div",{className:"pb-foot"},v.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>r.collapse(n)},t("panel.close")),v.createElement("span",{className:"pb-foot-spacer"}),x?v.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:L,onClick:()=>r.retry(n,{locale:a()})},t("panel.another"),v.createElement("span",{className:"pb-kbd","aria-hidden":"true"},L)):null,u?v.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>r.undo(n)},t("undo.action")):null,c||m?v.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>r.retry(n,{locale:a()})},t("panel.retry")):null,w?v.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>r.retry(n,{locale:a()})},t("panel.retryError")):null))}function Sr({inputActions:e,store:r,t,locale:n,session:a}){let s=(0,ae.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),o=s.phase,i=o!=="idle"||s.undo!==null,c=s.expanded===!0&&o!=="idle";(0,ae.useEffect)(()=>{let g=typeof a?.id=="string"?a.id:"";g!==""&&r.setSessionId(e,g)},[a?.id,e,r]);let m=(0,ae.useRef)(null),z=(0,ae.useRef)(null),u=(0,ae.useRef)(null),x=(0,ae.useRef)(!1),w=(0,ae.useRef)(!1);return(0,ae.useEffect)(()=>{if(!i)return;let g=R=>{if(!(R.defaultPrevented||c===!1)){if(R.key==="Escape"){R.preventDefault(),R.stopPropagation(),r.collapse(e);return}R.key==="Enter"&&(R.metaKey||R.ctrlKey)&&(R.preventDefault(),R.stopPropagation(),o==="applied"||o==="ready"?r.retry(e,{locale:n()}):o==="error"&&r.retry(e,{locale:n()}))}};return document.addEventListener("keydown",g,!0),()=>document.removeEventListener("keydown",g,!0)},[i,c,o,e,r,n]),(0,ae.useEffect)(()=>{if(i&&x.current===!1){x.current=!0,u.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(i===!1&&x.current){x.current=!1;let g=u.current;if(u.current=null,g==null||g.isConnected===!1||typeof g.focus!="function")return;try{g.focus({preventScroll:!0})}catch{}}},[i]),(0,ae.useEffect)(()=>{if(c&&w.current===!1){w.current=!0;let g=z.current;if(g!==null&&typeof g.focus=="function")try{g.focus({preventScroll:!0})}catch{}return}if(c===!1&&w.current){w.current=!1;let g=o==="idle"?u.current:m.current;if(g==null||g.isConnected===!1||typeof g.focus!="function")return;try{g.focus({preventScroll:!0})}catch{}}},[c,o]),i?c===!1?v.createElement(Jn,{state:s,store:r,t,inputActions:e,chipRef:m}):v.createElement(Vn,{state:s,store:r,t,inputActions:e,locale:n,panelRef:z}):null}var k=me(require("react"),1),gt=require("react-dom");var Nr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"translate",icon:"translate",zh:"\u7FFB\u8BD1",en:"Translate",sheet:"translate",prompt:{zh:"\u5E2E\u6211\u7FFB\u8BD1\uFF1A",en:"Translate this: "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function ht(e,r){return r==="en"?e.en:e.zh}var h=me(require("react"),1),zr=require("react-dom"),Rr="/api/chatbox-pet",Yn=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],Xn=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function Cr(e,r){let t=await fetch(`${Rr}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)}),n;try{n=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return n.result}function Tr(e,r){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:r,references:[]}),!0}catch{try{return e.setDraft(r),!0}catch{return!1}}}function De({title:e,hint:r,onClose:t,children:n,t:a,wide:s=!1}){let o=h.useRef(null),[i,c]=h.useState(()=>{try{let u=JSON.parse(localStorage.getItem("chatbox-pet:sheet-size")||"null");if(u&&Number.isFinite(u.width)&&Number.isFinite(u.height))return{width:Math.min(u.width,window.innerWidth-48),height:Math.min(u.height,window.innerHeight-48)}}catch{}return null}),m=h.useRef(null),z=u=>{let x=o.current;if(x===null)return;u.preventDefault(),u.stopPropagation();let w=x.getBoundingClientRect();m.current={x:u.clientX,y:u.clientY,width:w.width,height:w.height};let g=I=>{let b=m.current;b!==null&&c({width:Math.min(Math.max(360,b.width+(I.clientX-b.x)),window.innerWidth-48),height:Math.min(Math.max(220,b.height+(I.clientY-b.y)),window.innerHeight-48)})},R=()=>{m.current=null,window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",R);try{let I=o.current;if(I!==null){let b=I.getBoundingClientRect();localStorage.setItem("chatbox-pet:sheet-size",JSON.stringify({width:Math.round(b.width),height:Math.round(b.height)}))}}catch{}};window.addEventListener("pointermove",g),window.addEventListener("pointerup",R)};return h.useEffect(()=>{let u=x=>{x.key==="Escape"&&(x.preventDefault(),x.stopPropagation(),t())};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[t]),(0,zr.createPortal)(h.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:u=>u.stopPropagation()},h.createElement("div",{className:s?"cbp-sheet cbp-sheet-wide":"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:o,style:i===null?void 0:{width:`${Math.round(i.width)}px`,height:`${Math.round(i.height)}px`}},h.createElement("div",{className:"cbp-sheet-head"},h.createElement("span",{className:"cbp-sheet-title"},e),h.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":a("sheet.close"),onClick:t},"\u2715")),r?h.createElement("p",{className:"cbp-sheet-hint"},r):null,h.createElement("div",{className:"cbp-sheet-body"},n),h.createElement("button",{type:"button",className:"cbp-sheet-grip","data-cbp-sheet-grip":"true","aria-label":a("sheet.resize"),title:a("sheet.resize"),onPointerDown:z}))),document.body)}function Mr({onClose:e,onFill:r,t,locale:n}){let[a,s]=h.useState("idle"),[o,i]=h.useState(0),[c,m]=h.useState(null),[z,u]=h.useState(""),x=h.useRef(null),w=h.useRef([]),g=h.useRef(0),R=()=>{g.current!==0&&(clearInterval(g.current),g.current=0)};h.useEffect(()=>()=>{R();try{x.current?.stream?.getTracks?.().forEach(F=>F.stop())}catch{}},[]);let I=async F=>{s("working"),u("");try{let C=await(await fetch(`${Rr}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":F.type||"audio/webm"},body:F})).json();if(C?.ok!==!0)throw new Error(C?.error?.message??"\u8F6C\u5199\u5931\u8D25");m(C.result),s("done")}catch(S){u(String(S?.message??S)),s("idle")}},b=async()=>{u("");try{let F=await navigator.mediaDevices.getUserMedia({audio:!0}),S=new MediaRecorder(F);w.current=[],S.ondataavailable=C=>{C.data?.size>0&&w.current.push(C.data)},S.onstop=()=>{R(),F.getTracks().forEach(q=>q.stop());let C=new Blob(w.current,{type:S.mimeType||"audio/webm"});I(C)},x.current=S,S.start(),i(0),s("recording"),g.current=setInterval(()=>i(C=>C+1),1e3)}catch(F){let S=F?.name==="NotAllowedError"||F?.name==="SecurityError";u(S?t("sheet.transcribe.denied"):String(F?.message??F))}},T=()=>{s("working");try{x.current?.stop()}catch{R(),s("idle")}},L=`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return h.createElement(De,{title:t("sheet.transcribe.title"),hint:t("sheet.transcribe.hint"),onClose:e,t},c===null?h.createElement(h.Fragment,null,h.createElement("div",{className:"cbp-sheet-center"},h.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":a,"aria-label":t(a==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:a==="recording"?T:b,disabled:a==="working"},h.createElement("span",{className:"cbp-rec-dot"})),h.createElement("span",{className:"cbp-rec-time"},a==="recording"?L:t(a==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),h.createElement("label",{className:"cbp-sheet-file"},h.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:F=>{let S=F.target.files?.[0];S&&I(S),F.target.value=""}}),h.createElement("span",null,t("sheet.transcribe.pick")))):h.createElement(h.Fragment,null,h.createElement("div",{className:"cbp-sheet-meta"},t("sheet.transcribe.meta")(c.segments?.length??0,c.language??"\u2014",c.durationSeconds??0)),h.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},c.text||t("sheet.transcribe.empty")),h.createElement("div",{className:"cbp-sheet-actions"},h.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(c.text)},t("sheet.fill")),h.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{m(null),s("idle")}},t("sheet.again")))),z?h.createElement("p",{className:"cbp-sheet-error"},z):null)}function Er({onClose:e,onFill:r,t,locale:n,sessionId:a=""}){let[s,o]=h.useState("update"),[i,c]=h.useState(""),[m,z]=h.useState(""),[u,x]=h.useState("idle"),[w,g]=h.useState(""),[R,I]=h.useState(""),b=async()=>{x("working"),I("");try{let T=await Cr("/write",{genre:s,topic:i,tone:m,locale:n(),session:a});g(T.text),x("done")}catch(T){I(String(T?.message??T)),x("idle")}};return h.createElement(De,{title:t("sheet.write.title"),hint:t("sheet.write.hint"),onClose:e,t},h.createElement("div",{className:"cbp-chips"},Yn.map(T=>h.createElement("button",{key:T.id,type:"button",className:"cbp-chip","data-cbp-genre":T.id,"aria-pressed":s===T.id?"true":"false",onClick:()=>o(T.id)},n()==="en"?T.en:T.zh))),h.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:t("sheet.write.topic"),value:i,maxLength:200,onChange:T=>c(T.target.value)}),h.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:t("sheet.write.tone"),value:m,maxLength:80,onChange:T=>z(T.target.value)}),w===""?h.createElement("div",{className:"cbp-sheet-actions"},h.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:u==="working"||i.trim()==="",onClick:b},t(u==="working"?"sheet.working":"sheet.write.go"))):h.createElement(h.Fragment,null,h.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},w),h.createElement("div",{className:"cbp-sheet-actions"},h.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(w)},t("sheet.fill")),h.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>g("")},t("sheet.again")))),R?h.createElement("p",{className:"cbp-sheet-error"},R):null)}function Pr({onClose:e,t:r,locale:t,sessionId:n=""}){let[a,s]=h.useState(""),[o,i]=h.useState(""),[c,m]=h.useState(10),[z,u]=h.useState("idle"),[x,w]=h.useState(null),[g,R]=h.useState(""),I=async()=>{u("working"),R("");try{let T=await Cr("/deck",{topic:a,audience:o,pages:c,locale:t(),session:n});w(T),u("done")}catch(T){R(String(T?.message??T)),u("idle")}},b=()=>{if(!x?.base64)return;let T=Uint8Array.from(atob(x.base64),C=>C.charCodeAt(0)),L=new Blob([T],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),F=URL.createObjectURL(L),S=document.createElement("a");S.href=F,S.download=x.name||"deck.pptx",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(F),4e3)};return h.createElement(De,{title:r("sheet.deck.title"),hint:r("sheet.deck.hint"),onClose:e,t:r},x===null?h.createElement(h.Fragment,null,h.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:r("sheet.deck.topic"),value:a,maxLength:200,onChange:T=>s(T.target.value)}),h.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:r("sheet.deck.audience"),value:o,maxLength:120,onChange:T=>i(T.target.value)}),h.createElement("div",{className:"cbp-chips"},Xn.map(T=>h.createElement("button",{key:T.id,type:"button",className:"cbp-chip","data-cbp-size":T.id,"aria-pressed":c===T.id?"true":"false",onClick:()=>m(T.id)},t()==="en"?T.en:T.zh))),h.createElement("div",{className:"cbp-sheet-actions"},h.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:z==="working"||a.trim()==="",onClick:I},r(z==="working"?"sheet.deck.working":"sheet.deck.go")))):h.createElement(h.Fragment,null,h.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},h.createElement("div",{className:"cbp-deck-title"},x.title||a),h.createElement("div",{className:"cbp-deck-meta"},r("sheet.deck.meta")(x.slides??0)),h.createElement("div",{className:"cbp-deck-path",title:x.path},x.path)),h.createElement("div",{className:"cbp-sheet-actions"},h.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:b},r("sheet.deck.download")),h.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>w(null)},r("sheet.again")))),g?h.createElement("p",{className:"cbp-sheet-error"},g):null)}function Ir({onClose:e,onFill:r,t}){let[n,a]=h.useState(""),s=()=>{let o=n.trim();r(o===""?t("sheet.video.prompt"):t("sheet.video.promptWith")(o))};return h.createElement(De,{title:t("sheet.video.title"),hint:t("sheet.video.hint"),onClose:e,t},h.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:t("sheet.video.placeholder"),value:n,maxLength:500,onChange:o=>a(o.target.value)}),h.createElement("div",{className:"cbp-sheet-actions"},h.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:s},t("sheet.video.go"))))}var Fr=`
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
  position:relative;
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
  max-height:min(84vh,720px);
}
/* A solid size is set inline while resizing; the height must then win over the
   CSS max-height, otherwise the grip would move without the panel following. */
.cbp-sheet[style*="height"]{
  max-height:none;
}
.cbp-sheet-grip{
  position:absolute;
  right:6px;
  bottom:6px;
  width:16px;
  height:16px;
  padding:0;
  border:0;
  background:transparent;
  cursor:nwse-resize;
  opacity:.45;
  transition:opacity 120ms ease;
}
.cbp-sheet-grip:hover{opacity:.9}
.cbp-sheet-grip::before,
.cbp-sheet-grip::after{
  content:"";
  position:absolute;
  right:0;
  bottom:0;
  border-style:solid;
  border-color:transparent;
}
.cbp-sheet-grip::before{border-width:0 0 10px 10px;border-bottom-color:color-mix(in oklab,var(--dsw-alias-label-primary) 45%,transparent)}
.cbp-sheet-grip::after{right:3px;bottom:3px;border-width:0 0 6px 6px;border-bottom-color:color-mix(in oklab,var(--dsw-alias-label-primary) 30%,transparent)}
@media (prefers-reduced-motion: reduce){
  .cbp-sheet-veil,.cbp-sheet{animation:none}
}
`;var p=me(require("react"),1),mt="/api/chatbox-pet",Dr=[{id:"auto",zh:"\u81EA\u52A8\u68C0\u6D4B",en:"Detect"},{id:"zh",zh:"\u4E2D\u6587",en:"Chinese"},{id:"en",zh:"\u82F1\u6587",en:"English"},{id:"ja",zh:"\u65E5\u6587",en:"Japanese"},{id:"ko",zh:"\u97E9\u6587",en:"Korean"},{id:"fr",zh:"\u6CD5\u6587",en:"French"},{id:"de",zh:"\u5FB7\u6587",en:"German"},{id:"es",zh:"\u897F\u73ED\u7259\u6587",en:"Spanish"}];function ea(e){let r=String(e??"").trim();return r===""||r.length>40||/[.!?。！？\n]/.test(r)?!1:r.split(/\s+/).filter(Boolean).length<=3}function ta(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ra(e,r){let t=String(e??""),n=String(r??"").trim();if(n==="")return[t];let a=n.replace(/(e|y)$/i,""),s=new RegExp(`\\b${ta(a)}[a-z]{0,3}\\b`,"gi"),o=[],i=0;for(let c of t.matchAll(s)){let m=c.index??0;m>i&&o.push(t.slice(i,m)),o.push(p.createElement("mark",{className:"cbt-mark",key:`${m}-${c[0]}`},c[0])),i=m+c[0].length}return i<t.length&&o.push(t.slice(i)),o.length===0?[t]:o}function na(e,r){let t=String(e??""),n=[],a=0;for(let s of t.matchAll(/[A-Za-z][A-Za-z'’-]{1,24}/g)){let o=s.index??0;o>a&&n.push(t.slice(a,o));let i=s[0].replace(/['’-]+$/,"");n.push(p.createElement("button",{type:"button",className:"cbt-word","data-cbt-word":i,key:`${o}-${i}`,onClick:()=>r(i)},s[0])),a=o+s[0].length}return a<t.length&&n.push(t.slice(a)),n.length===0?[t]:n}async function ge(e,r){let t=await fetch(`${mt}${e}`,r),n;try{n=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return n.result}function Ar({t:e,locale:r=()=>"zh",inputActions:t}){let n=r()!=="en",a=p.useCallback((d,N)=>n?d:N,[n]),[s,o]=p.useState("translate"),[i,c]=p.useState("auto"),[m,z]=p.useState(()=>n?"en":"zh"),[u,x]=p.useState("text"),[w,g]=p.useState(""),[R,I]=p.useState(""),[b,T]=p.useState(null),[L,F]=p.useState(null),[S,C]=p.useState(null),[q,B]=p.useState(!1),[j,A]=p.useState(""),[Ce,se]=p.useState(""),[X,be]=p.useState(null),[Te,J]=p.useState("idle"),[ye,W]=p.useState(""),[we,pe]=p.useState(""),[fe,Me]=p.useState(!1),[Fe,Le]=p.useState(0),[ke,y]=p.useState([]),[P,O]=p.useState("all"),[H,Z]=p.useState(""),[V,de]=p.useState(!1),ve=p.useRef(null),Ee=p.useRef([]),l=p.useRef(0),f=p.useCallback(()=>{l.current!==0&&(clearInterval(l.current),l.current=0)},[]),M=p.useCallback(async(d=P,N=H)=>{try{let _=new URLSearchParams;d!=="all"&&_.set("kind",d),N.trim()!==""&&_.set("search",N.trim());let Y=await ge(`/favorites?${_.toString()}`);y(Y.items??[])}catch(_){W(String(_?.message??_))}},[P,H]);p.useEffect(()=>{M("all","")},[]),p.useEffect(()=>{let d=!1;return fetch(`${mt}/translate/engine`).then(N=>N.json()).then(N=>{!d&&N?.ok===!0&&T(N.result)}).catch(()=>{}),()=>{d=!0}},[]),p.useEffect(()=>()=>{f();try{ve.current?.stream?.getTracks?.().forEach(d=>d.stop())}catch{}},[f]);let D=async(d=w)=>{let N=d.trim();if(N===""){W(a("\u5148\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57","Type something to translate first"));return}J("working"),W(""),de(!1),F(null),C(null),be(null);let _=ea(N)?"dict":"sentence",Y=m==="zh"?"zh":"en";try{let oe=await ge("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:N,from:i,to:m,locale:_==="dict"?Y:n?"zh":"en",mode:_})});_==="dict"?(F(oe.dict),I(""),se("input"),Ue(oe.dict.word)):I(oe.translated),T(We=>({...We??{},last:{engine:oe.engine,ms:oe.ms}})),J("done")}catch(oe){W(String(oe?.message??oe)),J("idle")}},K=()=>{if(m==="auto"){z(i==="auto"?"zh":i),c("auto");return}c(m),z(i==="auto"?"zh":i),R!==""&&(g(R),I(""))},Q=async d=>{J("working"),W(""),de(!1),pe(d.name);try{let N=await ge(`/translate/file?name=${encodeURIComponent(d.name)}`,{method:"POST",headers:{"content-type":d.type||"application/octet-stream"},body:d});g(N.text);let _=await ge("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:N.text,from:i,to:m,locale:n?"zh":"en"})});I(_.translated),J("done"),x("text"),N.truncated&&W(a("\u6587\u4EF6\u8F83\u957F\uFF0C\u53EA\u7FFB\u8BD1\u4E86\u524D 6 \u4E07\u4E2A\u5B57\u7B26","Long document: only the first 60,000 characters were translated"))}catch(N){W(String(N?.message??N)),J("idle")}},ce=async()=>{W("");try{let d=await navigator.mediaDevices.getUserMedia({audio:!0}),N=new MediaRecorder(d);Ee.current=[],N.ondataavailable=_=>{_.data?.size>0&&Ee.current.push(_.data)},N.onstop=async()=>{f(),d.getTracks().forEach(Y=>Y.stop()),Me(!1),J("working");let _=new Blob(Ee.current,{type:N.mimeType||"audio/webm"});try{let{transcribe:Y}=await Promise.resolve().then(()=>(qr(),Lr)),oe=await Y(_);g(oe),x("text"),J("idle")}catch(Y){W(String(Y?.message??Y)),J("idle")}},ve.current=N,N.start(),Me(!0),Le(0),l.current=setInterval(()=>Le(_=>_+1),1e3)}catch(d){let N=d?.name==="NotAllowedError"||d?.name==="SecurityError";W(N?a("\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650","No microphone permission"):String(d?.message??d))}},ue=async()=>{if(w.trim()!=="")try{await ge("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"sentence",source:w,target:R,from:i,to:m})}),de(!0),await M()}catch(d){W(String(d?.message??d))}},Se=d=>{let N=d.currentTarget,_=typeof window.getSelection=="function"?window.getSelection():null,Y=String(_?.toString?.()??"").trim();if(Y===""||Y.length>40){be(null);return}let oe=_?.rangeCount>0?_.getRangeAt(0):null;if(oe===null||N===null||!N.contains(oe.commonAncestorContainer)){be(null);return}let We=oe.getBoundingClientRect();be({text:Y,x:Math.round(We.left-N.getBoundingClientRect().left),y:Math.round(We.top-N.getBoundingClientRect().top)})},he=async d=>{W(""),de(!1),J("working");try{let N=await ge("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:d,mode:"dict",locale:m==="zh"?"zh":"en"})});F(N.dict),C(null),se("result"),J("done"),Ue(N.dict.word)}catch(N){W(String(N?.message??N)),J("idle")}},Ne=()=>{F(null),C(null),se("")},Ue=async d=>{C(null),B(!0);try{let N=await ge("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:d,mode:"expand",locale:m==="zh"?"zh":"en"})});C(N.expand)}catch{C(null)}finally{B(!1)}},U=async(d,N)=>{A(N);try{let _=await ge("/speak",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:d,accent:N})}),Y=new Audio(`data:${_.mime};base64,${_.base64}`);Y.onended=()=>A(""),Y.onerror=()=>A(""),await Y.play()}catch(_){A(""),W(String(_?.message??_))}},ee=async d=>{try{await ge("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"word",source:d.word,target:d.senses.map(N=>N.meaning).join("\uFF1B"),from:i,to:m})}),de(!0),await M()}catch(N){W(String(N?.message??N))}},Ye=async d=>{try{await ge("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"remove",id:d})}),await M()}catch(N){W(String(N?.message??N))}},vt=async d=>{try{await navigator.clipboard.writeText(d)}catch{W(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C","Copy failed \u2014 select the text manually"))}};return p.createElement("div",{className:"cbt-page"},p.createElement("div",{className:"cbt-viewtabs",role:"tablist"},[["translate",a("\u7FFB\u8BD1","Translate")],["favorites",a("\u6536\u85CF\u672C","Saved")]].map(([d,N])=>p.createElement("button",{key:d,type:"button",role:"tab",className:"cbt-viewtab","data-cbt-view":d,"aria-selected":s===d?"true":"false",onClick:()=>o(d)},N,d==="favorites"&&ke.length>0?` \xB7 ${ke.length}`:""))),s==="translate"?p.createElement(p.Fragment,null,p.createElement("div",{className:"cbt-bar"},p.createElement("select",{className:"cbt-select",value:i,onChange:d=>c(d.target.value),"aria-label":a("\u6E90\u8BED\u8A00","Source language")},Dr.map(d=>p.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),p.createElement("button",{type:"button",className:"cbt-swap",onClick:K,title:a("\u4EA4\u6362\u8BED\u8A00","Swap"),"aria-label":a("\u4EA4\u6362\u8BED\u8A00","Swap")},"\u21C4"),p.createElement("select",{className:"cbt-select",value:m,onChange:d=>z(d.target.value),"aria-label":a("\u76EE\u6807\u8BED\u8A00","Target language")},Dr.filter(d=>d.id!=="auto").map(d=>p.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),p.createElement("span",{className:"cbt-spacer"}),p.createElement("div",{className:"cbt-tabs",role:"tablist"},["text","voice","file"].map(d=>p.createElement("button",{key:d,type:"button",role:"tab",className:"cbt-tab","data-cbt-tab":d,"aria-selected":u===d?"true":"false",onClick:()=>x(d)},d==="text"?a("\u6587\u5B57","Text"):d==="voice"?a("\u8BED\u97F3","Voice"):a("\u6587\u4EF6","File"))))),u==="text"?p.createElement("textarea",{className:"cbt-input","data-cbt-source":"true",placeholder:a("\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57\uFF0CCtrl / \u2318 + Enter \u7FFB\u8BD1","Type text to translate \u2014 Ctrl / \u2318 + Enter"),value:w,onChange:d=>g(d.target.value),onKeyDown:d=>{d.key==="Enter"&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),D())}}):null,u==="voice"?p.createElement("div",{className:"cbt-voice"},p.createElement("button",{type:"button",className:"cbt-rec","data-cbt-record":fe?"on":"off","aria-label":fe?a("\u505C\u6B62\u5F55\u97F3","Stop recording"):a("\u5F00\u59CB\u5F55\u97F3","Start recording"),onClick:fe?()=>ve.current?.stop():ce},p.createElement("span",{className:"cbt-rec-dot"})),p.createElement("span",{className:"cbt-hint"},fe?`${String(Math.floor(Fe/60)).padStart(2,"0")}:${String(Fe%60).padStart(2,"0")} \xB7 ${a("\u518D\u70B9\u4E00\u4E0B\u7ED3\u675F","tap again to stop")}`:a("\u5F55\u97F3\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u5B8C\u6210\u540E\u586B\u8FDB\u6587\u5B57\u6846","Transcribed on this machine, then placed in the text box"))):null,u==="file"?p.createElement("label",{className:"cbt-drop"},p.createElement("input",{type:"file",accept:".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json","data-cbt-file":"true",onChange:d=>{let N=d.target.files?.[0];N&&Q(N),d.target.value=""}}),p.createElement("span",{className:"cbt-drop-title"},a("\u9009\u62E9\u4E00\u4E2A\u6587\u6863","Pick a document")),p.createElement("span",{className:"cbt-hint"},a("PDF / DOCX / TXT / Markdown / HTML\uFF0C30 MB \u4EE5\u5185","PDF / DOCX / TXT / Markdown / HTML, up to 30 MB"))):null,we!==""?p.createElement("div",{className:"cbt-doc","data-cbt-doc":"true"},we):null,p.createElement("div",{className:"cbt-actions"},p.createElement("button",{type:"button",className:"cbt-btn cbt-btn-primary","data-cbt-translate":"true",disabled:Te==="working",onClick:()=>{D()}},Te==="working"?a("\u7FFB\u8BD1\u4E2D\u2026","Translating\u2026"):a("\u7FFB\u8BD1","Translate")),p.createElement("span",{className:"cbt-hint"},w.trim()===""?"":a(`${w.trim().length} \u5B57\u7B26`,`${w.trim().length} chars`))),L!==null?p.createElement("div",{className:"cbt-dict","data-cbt-dict":"true"},Ce==="result"?p.createElement("button",{type:"button",className:"cbt-back","data-cbt-back":"true",onClick:Ne},"\u2190 ",a("\u8FD4\u56DE\u8BD1\u6587","Back to translation")):null,p.createElement("div",{className:"cbt-dict-head"},p.createElement("span",{className:"cbt-dict-word"},L.word),L.phonetic?p.createElement("span",{className:"cbt-dict-phonetic"},L.phonetic):null,p.createElement("span",{className:"cbt-dict-play"},[["en-US",a("\u7F8E","US")],["en-GB",a("\u82F1","UK")]].map(([d,N])=>p.createElement("button",{key:d,type:"button",className:"cbt-speak","data-cbt-speak":d,"aria-label":`${a("\u6717\u8BFB","Pronounce")} ${N}`,onClick:()=>{U(L.word,d)}},p.createElement("span",{className:"cbt-speak-icon","aria-hidden":"true"},j===d?"\u25A0":"\u25B6"),N)))),p.createElement("ul",{className:"cbt-dict-senses"},L.senses.map((d,N)=>p.createElement("li",{key:N,className:"cbt-dict-sense"},d.pos?p.createElement("span",{className:"cbt-dict-pos"},d.pos):null,p.createElement("span",{className:"cbt-dict-meaning"},d.meaning),d.example?p.createElement("div",{className:"cbt-dict-example","data-cbt-example":"true"},ra(d.example,L.word)):null))),q?p.createElement("div",{className:"cbt-dict-loading"},a("\u6B63\u5728\u6269\u5C55\u8BCD\u6761\u2026","Loading word details\u2026")):null,S&&S.forms.length>0?p.createElement("div",{className:"cbt-dict-section","data-cbt-forms":"true"},p.createElement("div",{className:"cbt-dict-label"},a("\u8BCD\u5F62","Forms")),p.createElement("div",{className:"cbt-dict-chips"},S.forms.map((d,N)=>p.createElement("span",{className:"cbt-dict-chip",key:N},p.createElement("span",{className:"cbt-dict-chip-label"},d.label)," ",d.value)))):null,S&&(S.synonyms.length>0||S.antonyms.length>0)?p.createElement("div",{className:"cbt-dict-section"},S.synonyms.length>0?p.createElement("div",{className:"cbt-dict-row"},p.createElement("span",{className:"cbt-dict-label"},a("\u8FD1\u4E49","Synonyms")),p.createElement("span",{className:"cbt-dict-words"},S.synonyms.join(" \xB7 "))):null,S.antonyms.length>0?p.createElement("div",{className:"cbt-dict-row"},p.createElement("span",{className:"cbt-dict-label"},a("\u53CD\u4E49","Antonyms")),p.createElement("span",{className:"cbt-dict-words"},S.antonyms.join(" \xB7 "))):null):null,S&&S.phrases.length>0?p.createElement("div",{className:"cbt-dict-section","data-cbt-phrases":"true"},p.createElement("div",{className:"cbt-dict-label"},a("\u5E38\u89C1\u642D\u914D","Phrases")),p.createElement("ul",{className:"cbt-dict-phrases"},S.phrases.map((d,N)=>p.createElement("li",{key:N},p.createElement("span",{className:"cbt-dict-phrase-en"},d.en),d.zh?p.createElement("span",{className:"cbt-dict-phrase-zh"},d.zh):null)))):null,S&&S.mnemonic?p.createElement("div",{className:"cbt-dict-section"},p.createElement("div",{className:"cbt-dict-label"},a("\u8BB0\u5FC6","Memory hook")),p.createElement("div",{className:"cbt-dict-mnemonic"},S.mnemonic)):null,L.note?p.createElement("div",{className:"cbt-dict-note"},L.note):null,p.createElement("div",{className:"cbt-actions"},p.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{vt(L.word+" "+L.senses.map(d=>d.meaning).join("\uFF1B"))}},a("\u590D\u5236","Copy")),p.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{ee(L)}},V?a("\u5DF2\u6536\u85CF","Saved"):a("\u6536\u85CF","Save")))):null,R!==""?p.createElement("div",{className:"cbt-result","data-cbt-result":"true"},p.createElement("div",{className:"cbt-result-text","data-cbt-result-text":"true",onMouseUp:Se,onKeyUp:Se},na(R,d=>{he(d)}),X!==null?p.createElement("button",{type:"button",className:"cbt-pick","data-cbt-pick":"true",style:{left:`${X.x}px`,top:`${Math.max(0,X.y-26)}px`},onMouseDown:d=>d.preventDefault(),onClick:()=>{let d=X.text;be(null),he(d)}},a("\u67E5\u8BE2","Look up"),"\u300C",X.text,"\u300D"):null),p.createElement("div",{className:"cbt-actions"},p.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{vt(R)}},a("\u590D\u5236","Copy")),p.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{ue()}},V?a("\u5DF2\u6536\u85CF","Saved"):a("\u6536\u85CF","Save")),typeof t?.setDraft=="function"?p.createElement("button",{type:"button",className:"cbt-btn","data-cbt-fill":"true",onClick:()=>t.setDraft({text:R,references:[]})},a("\u586B\u5165\u8F93\u5165\u6846","Put in composer")):null)):null,p.createElement("div",{className:"cbt-engine","data-cbt-engine":"true"},b===null?"":b.local?`${a("\u672C\u673A\u6A21\u578B","Local")} \xB7 ${b.model||"local"}${b.last?` \xB7 ${b.last.ms} ms`:""}`:`${a("\u5BBF\u4E3B\u6A21\u578B","Host model")}${b.last?` \xB7 ${b.last.ms} ms`:""}`),ye!==""?p.createElement("p",{className:"cbt-error","data-cbt-error":"true"},ye):null):p.createElement(p.Fragment,null,p.createElement("div",{className:"cbt-bar"},[["all",a("\u5168\u90E8","All")],["word",a("\u5355\u8BCD","Words")],["sentence",a("\u53E5\u5B50","Sentences")]].map(([d,N])=>p.createElement("button",{key:d,type:"button",className:"cbt-chip","data-cbt-kind":d,"aria-pressed":P===d?"true":"false",onClick:()=>{O(d),M(d,H)}},N)),p.createElement("span",{className:"cbt-spacer"}),p.createElement("a",{className:"cbt-link",href:`${mt}/favorites/export`,download:"favorites.md"},a("\u5BFC\u51FA Markdown","Export Markdown"))),p.createElement("input",{className:"cbt-search","data-cbt-search":"true",placeholder:a("\u641C\u7D22\u6536\u85CF","Search saved"),value:H,onChange:d=>{Z(d.target.value),M(P,d.target.value)}}),p.createElement("div",{className:"cbt-list","data-cbt-favorites":"true"},ke.length===0?p.createElement("p",{className:"cbt-empty"},a("\u8FD8\u6CA1\u6709\u6536\u85CF\u3002\u7FFB\u8BD1\u540E\u70B9\u300C\u6536\u85CF\u300D\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002","Nothing saved yet \u2014 translate something and press Save.")):ke.map(d=>p.createElement("div",{className:"cbt-item",key:d.id,"data-cbt-item":d.id},p.createElement("div",{className:"cbt-item-source"},d.source),d.target?p.createElement("div",{className:"cbt-item-target"},d.target):null,p.createElement("div",{className:"cbt-item-foot"},p.createElement("span",{className:"cbt-item-kind"},d.kind==="word"?a("\u5355\u8BCD","Word"):a("\u53E5\u5B50","Sentence")),p.createElement("button",{type:"button",className:"cbt-item-remove",onClick:()=>{Ye(d.id)},"aria-label":a("\u5220\u9664","Delete")},"\u2715"))))),ye!==""?p.createElement("p",{className:"cbt-error"},ye):null))}var Or=`
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
`;function jr({name:e}){let r={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return k.createElement("svg",{...r},k.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),k.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return k.createElement("svg",{...r},k.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),k.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),k.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return k.createElement("svg",{...r},k.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),k.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return k.createElement("svg",{...r},k.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),k.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return k.createElement("svg",{...r},k.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),k.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return k.createElement("svg",{...r},k.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),k.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),k.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"translate":return k.createElement("svg",{...r},k.createElement("path",{d:"M2.4 4.2h6M5.4 4.2v1.2c0 2.6-1.4 4.7-3.4 5.6"}),k.createElement("path",{d:"M3.9 8.4c.9 1.4 2.1 2.4 3.5 2.9"}),k.createElement("path",{d:"M9.4 13.6 11.6 8l2.2 5.6M10.2 11.9h2.8"}));case"slides":return k.createElement("svg",{...r},k.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),k.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return k.createElement("svg",{...r},k.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),k.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),k.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),k.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function aa(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let r=e.closest('[data-composer-card="true"]');if(r)return r}return document.querySelector('[data-composer-card="true"]')}function oa({t:e,locale:r,inputActions:t,onClose:n}){return k.createElement(De,{title:e("sheet.translate.title"),hint:e("sheet.translate.hint"),onClose:n,t:e,wide:!0},k.createElement(Ar,{t:e,locale:r,inputActions:t}))}function Br({inputActions:e,t:r,locale:t,sessionId:n=""}){let a=typeof e?.setDraft=="function",[s,o]=k.useState(!1),[i,c]=k.useState(null),[m,z]=k.useState(null),u=k.useRef(null),x=k.useRef(null),[w,g]=k.useState(null);k.useEffect(()=>{g(aa())},[]);let R=k.useCallback(()=>{let C=u.current?.getBoundingClientRect();C!=null&&z({right:Math.max(8,Math.round(window.innerWidth-C.right)),bottom:Math.max(8,Math.round(window.innerHeight-C.top)+8)})},[]);k.useLayoutEffect(()=>{s&&R()},[s,R]),k.useEffect(()=>{if(!s)return;let C=j=>{let A=j.target;A instanceof Node&&x.current?.contains(A)!==!0&&u.current?.contains(A)!==!0&&o(!1)},q=j=>{j.key==="Escape"&&(j.preventDefault(),j.stopPropagation(),o(!1),u.current?.focus?.())},B=()=>o(!1);return document.addEventListener("pointerdown",C,!0),document.addEventListener("keydown",q,!0),window.addEventListener("resize",B),window.addEventListener("scroll",B,!0),()=>{document.removeEventListener("pointerdown",C,!0),document.removeEventListener("keydown",q,!0),window.removeEventListener("resize",B),window.removeEventListener("scroll",B,!0)}},[s]);let I=C=>{if(typeof C.sheet=="string"){o(!1),c(C.sheet);return}let q=ht(C.prompt,typeof t=="function"?t():"zh");try{e.setDraft({text:q,references:[]})}catch{try{e.setDraft(q)}catch{}}o(!1),u.current?.focus?.()},b=r("quick.label"),T=typeof t=="function"?t():"zh",L=k.createElement("button",{ref:u,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":s?"true":"false","aria-label":r("quick.aria"),title:r(a?"quick.aria":"quick.disabled"),disabled:!a,onMouseDown:C=>C.preventDefault(),onClick:()=>o(C=>!C)},k.createElement(jr,{name:"grid"}),k.createElement("span",{className:"cbp-more-label"},b)),F=s&&m!==null?(0,gt.createPortal)(k.createElement("div",{ref:x,className:"cbp-quick-panel",role:"menu","aria-label":r("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${m.right}px`,bottom:`${m.bottom}px`}},k.createElement("div",{className:"cbp-quick-head"},k.createElement("span",{className:"cbp-quick-title"},r("quick.title")),k.createElement("span",{className:"cbp-quick-hint"},r("quick.hint"))),k.createElement("div",{className:"cbp-quick-grid"},Nr.map(C=>k.createElement("button",{key:C.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":C.id,onClick:()=>I(C)},k.createElement("span",{className:"cbp-quick-icon"},k.createElement(jr,{name:C.icon})),k.createElement("span",{className:"cbp-quick-name"},ht({zh:C.zh,en:C.en},T)))))),document.body):null,S=C=>{typeof C=="string"&&C.trim()!==""&&Tr(e,C),c(null)};return k.createElement(k.Fragment,null,k.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),w!==null?(0,gt.createPortal)(L,w):null,F,i==="transcribe"?k.createElement(Mr,{t:r,locale:t,onClose:()=>c(null),onFill:S}):null,i==="write"?k.createElement(Er,{t:r,locale:t,sessionId:n,onClose:()=>c(null),onFill:S}):null,i==="deck"?k.createElement(Pr,{t:r,locale:t,sessionId:n,onClose:()=>c(null)}):null,i==="video"?k.createElement(Ir,{t:r,onClose:()=>c(null),onFill:S}):null,i==="translate"?k.createElement(oa,{t:r,locale:t,inputActions:e,onClose:()=>c(null)}):null)}var $r=`
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
`;var Kr="/api/chatbox-pet/boost",_r=4e3,ia=12e4,sa=24,ca=8e3,Qr=25e3;function Gr(e){return{set:typeof e?.set=="function"?e.set:(r,t)=>setTimeout(r,t),clear:typeof e?.clear=="function"?e.clear:r=>clearTimeout(r)}}function kt(e){let r=typeof e=="string"?e:"";return r.length>_r?r.slice(0,_r):r}function Ur(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function $e(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(r=>({...r})):[]}}function xt(e){if(!Array.isArray(e))return[];let r=[];for(let t of e){if(t===null||typeof t!="object")continue;let n=typeof t.id=="string"?t.id.trim():"",a=Number(t.count);n===""||!Number.isFinite(a)||a<=0||r.push({id:n,label:typeof t.label=="string"&&t.label.trim()!==""?t.label.trim():n,count:Math.round(a)})}return r}function _e(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function ie(e,r,t){let n=new Error(typeof r=="string"&&r!==""?r:e);return n.code=e,t!==void 0&&(n.cause=t),n}function Wr(e){let r=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",t=typeof e?.message=="string"&&e.message!==""&&e.message!==r?e.message:void 0;return t===void 0?{code:r}:{code:r,message:t}}function la(e){let r=[],t=e;for(;;){let n=/(?:\r?\n){2}/.exec(t);if(n===null)break;r.push(t.slice(0,n.index)),t=t.slice(n.index+n[0].length)}return{frames:r,rest:t}}function Hr(e){let r=[];for(let t of e.split(`
`)){let n=t.trim();n===""||n.startsWith(":")||n.startsWith("data:")&&r.push(n.slice(5).trimStart())}if(r.length===0)return null;try{let t=JSON.parse(r.join(`
`));return t!==null&&typeof t=="object"&&Array.isArray(t)===!1?t:null}catch{return null}}async function yt(e){try{return await e.json()}catch{return null}}function wt(e,r){if(e===null||typeof e!="object")throw ie("host",void 0,r);if(e.ok!==!0){let a=typeof e.error?.message=="string"?e.error.message.trim():"";throw ie(typeof e.error?.code=="string"?e.error.code:"host",a===""?void 0:a)}let t=e.result,n=typeof t?.prompt=="string"?t.prompt.trim():"";if(n==="")throw ie("empty");return{prompt:n,mode:t.mode==="compose"?"compose":"improve",sources:xt(t.sources),elapsedMs:Number.isFinite(t.elapsedMs)?Math.max(0,Number(t.elapsedMs)):null,cached:t.cached===!0}}async function pa(e){let{draft:r,mode:t,locale:n,signal:a,onEvent:s,idleMs:o=Qr,sessionId:i=""}=e,c=i===""?{}:{sessionId:i},m=typeof e.fetch=="function"?e.fetch:globalThis.fetch,z=Gr(e.timers),u=new AbortController,x=()=>u.abort();a!==void 0&&(a.aborted?u.abort():a.addEventListener("abort",x,{once:!0}));let w=!1,g=null,R=()=>{g!==null&&z.clear(g),g=z.set(()=>{w=!0,u.abort()},o)},I=!1;try{R();let b;try{b=await m(Kr,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:kt(r),mode:t,locale:n,stream:!0,...c}}),signal:u.signal})}catch(C){throw w?ie("timeout",void 0,C):_e(C)?C:ie("network",void 0,C)}if(w)throw ie("timeout");if(b===null||typeof b!="object")throw ie("host");if(b.ok!==!0){let C=await yt(b);if(b.status>=400)throw ie("host",void 0,b.status);let q=wt(C,b.status);s({type:"replace",text:q.prompt}),s({type:"done",result:q});return}let T=typeof b.headers?.get=="function"?String(b.headers.get("content-type")??""):"";if(b.body===null||b.body===void 0||typeof b.body.getReader!="function"||!T.includes("text/event-stream")){let C=wt(await yt(b),b.status);s({type:"replace",text:C.prompt}),s({type:"done",result:C});return}let L=b.body.getReader(),F=new TextDecoder,S="";for(;!I;){let C;try{C=await L.read()}catch(B){throw w?ie("timeout",void 0,B):_e(B)?B:ie("stream",void 0,B)}if(C.done===!0)break;R(),S+=F.decode(C.value,{stream:!0});let q=la(S);S=q.rest;for(let B of q.frames){let j=Hr(B);if(j!==null&&s(j)==="stop"){I=!0;break}}}if(!I){let C=S.trim();if(C!==""){let q=Hr(C);q!==null&&s(q)}}if(I)try{await L.cancel()}catch{}}finally{g!==null&&z.clear(g),a!==void 0&&a.removeEventListener("abort",x)}}async function da(e){let{draft:r,mode:t,locale:n,signal:a,sessionId:s=""}=e,o=typeof e.fetch=="function"?e.fetch:globalThis.fetch,i;try{i=await o(Kr,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:kt(r),mode:t,locale:n,stream:!1,...s===""?{}:{sessionId:s}}}),signal:a})}catch(c){throw _e(c)?c:ie("network",void 0,c)}if(i===null||typeof i!="object")throw ie("host");if(i.ok!==!0&&i.status>=400)throw ie("host",void 0,i.status);return wt(await yt(i),i.status)}function ua(e={}){let r=typeof e.fetch=="function"?e.fetch:void 0,t=typeof e.now=="function"?e.now:()=>Date.now(),n=Gr(e.timers),a=Number.isFinite(e.idleMs)?Number(e.idleMs):Qr,s=Number.isFinite(e.undoMs)?Number(e.undoMs):ca,o=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):ia,i=new WeakMap,c=new WeakMap,m=new WeakMap,z=new WeakMap,u=new WeakMap,x="",w=new Set,g=new Map,R=Ur(),I=$e(null),b=null,T=0,L=0,F=null,S=null,C=()=>{for(let l of[...w])try{l()}catch(f){console.error("[prompt-boost] a store listener failed:",f)}},q=l=>l!=null&&(typeof l=="object"||typeof l=="function");function B(l){let f=q(l)?l:S;if(!q(f))return R;let M=i.get(f);return M===void 0&&(M=Ur(),i.set(f,M)),M}function j(l,f){let M=q(l)?l:S,K={...B(M),...f};return q(M)?i.set(M,K):R=K,C(),K}function A(l){let f=q(l)?l:S;return q(f)?m.get(f)??$e(null):I}function Ce(l){return q(l)?l:S}function se(l){let f=q(l)?l:S;if(!q(f))return"default";let M=c.get(f);return M===void 0&&(T+=1,M=`s${T}`,c.set(f,M)),M}function X(l){return`prompt-boost-panel-${se(l)}`}function be(l,f,M){return`${se(l)}\0${f}\0${M}`}function Te(l){let f=g.get(l);return f===void 0?null:t()-f.at>o?(g.delete(l),null):(g.delete(l),g.set(l,f),f.result)}function J(l,f){for(g.delete(l),g.set(l,{at:t(),result:f});g.size>sa;){let M=g.keys().next();if(M.done===!0)break;g.delete(M.value)}}function ye(){if(F===null)return;let l=F;F=null;try{l.controller.abort()}catch{}}function W(l){let f=q(l)?l:S,M=q(f)?z.get(f):b;M!=null&&n.clear(M),q(f)?z.delete(f):b=null}function we(l){W(l);let f=null;f=n.set(()=>{let D=B(l);D.undo!==null&&j(l,{undo:null,phase:D.phase==="applied"?"idle":D.phase,applied:"",prompt:D.phase==="applied"?"":D.prompt,sources:D.phase==="applied"?[]:D.sources})},s);let M=q(l)?l:S;q(M)?z.set(M,f):b=f}function pe(l,f,M){let D=Ce(l),K=$e(A(l)),Q=!1;if(q(D)&&typeof D.setDraft=="function")try{D.setDraft({text:f.prompt,references:[]}),Q=!0}catch{try{D.setDraft(f.prompt),Q=!0}catch{Q=!1}}if(!Q){j(l,{phase:"error",mode:f.mode,prompt:f.prompt,sources:f.sources,elapsedMs:f.elapsedMs,cached:f.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}j(l,{phase:"applied",mode:f.mode,prompt:f.prompt,applied:f.prompt,sources:f.sources,elapsedMs:f.elapsedMs,cached:f.cached===!0,error:null,undo:{draft:K,at:t()},expanded:!1}),we(l),J(M,f),re.play("boostDone")}async function fe(l,f,M){let{draft:D,mode:K,locale:Q,key:ce,sessionId:ue}=M,Se=!1,he=!1,Ne=()=>F===f&&f.controller.signal.aborted===!1,Ue=U=>{if(!Ne())return"stop";if(Se=!0,U.type==="sources"){let ee=B(l);j(l,{sources:xt(U.sources),mode:U.mode==="compose"?"compose":ee.mode});return}if(U.type==="delta"){if(typeof U.text!="string"||U.text==="")return;let ee=B(l);j(l,{phase:"streaming",prompt:ee.prompt+U.text});return}if(U.type==="replace"){if(typeof U.text!="string")return;let ee=B(l),Ye=ee.phase==="ready"||U.text===""?ee.phase:"streaming";j(l,{prompt:U.text,phase:Ye});return}if(U.type==="done"){he=!0;let ee={prompt:typeof U.result?.prompt=="string"?U.result.prompt.trim():B(l).prompt.trim(),mode:U.result?.mode==="compose"?"compose":K,sources:xt(U.result?.sources??B(l).sources),elapsedMs:Number.isFinite(U.result?.elapsedMs)?Math.max(0,Number(U.result.elapsedMs)):null,cached:U.result?.cached===!0};return ee.prompt===""?(j(l,{phase:"error",error:{code:"empty"}}),re.play("boostFail"),"stop"):(pe(l,ee,ce),"stop")}if(U.type==="error"){he=!0;let ee=typeof U.message=="string"&&U.message.trim()!==""?U.message.trim():void 0;return j(l,{phase:"error",error:ee===void 0?{code:"unknown"}:{code:"host",message:ee}}),"stop"}};try{if(await pa({draft:D,mode:K,locale:Q,sessionId:ue,signal:f.controller.signal,onEvent:Ue,fetch:r,timers:n,idleMs:a}),he)return;if(Se)throw ie("stream");await Me(l,f,{draft:D,mode:K,locale:Q,key:ce,sessionId:ue})}catch(U){if(f.controller.signal.aborted||_e(U)||!Ne())return;if(Se){j(l,{phase:"error",error:Wr(U)}),re.play("boostFail");return}try{await Me(l,f,{draft:D,mode:K,locale:Q,key:ce,sessionId:ue})}catch(ee){if(f.controller.signal.aborted||_e(ee)||!Ne())return;j(l,{phase:"error",error:Wr(ee)}),re.play("boostFail")}}finally{F===f&&(F=null)}}async function Me(l,f,M){let D=await da({draft:M.draft,mode:M.mode,locale:M.locale,signal:f.controller.signal,fetch:r,sessionId:M.sessionId??""});F!==f||f.controller.signal.aborted||pe(l,D,M.key)}function Fe(l,f){let M=typeof f=="string"?f:"";M!==""&&(x=M,q(l)&&u.set(l,M))}function Le(l){return q(l)?u.get(l)??x:x}function ke(l,f){let M=typeof f?.draft=="string"?f.draft:"",D=Array.isArray(f?.occurrences)?f.occurrences:[],K=A(l);if(K.text===M&&K.references.length===D.length)return;let Q={text:M,references:D.map(ue=>({...ue}))},ce=q(l)?l:S;q(ce)?m.set(ce,Q):I=Q}function y(l,f={}){q(l)&&(S=l);let M=f.locale==="en"?"en":"zh",D=f.force===!0,K=A(l),Q=kt(K.text),ce=Q.trim()===""?"compose":"improve",ue=be(l,ce,Q);if(ye(),W(l),!D){let Ne=Te(ue);if(Ne!==null){pe(l,{...Ne,cached:!0},ue);return}}L+=1;let Se={seq:L,actions:l,controller:new AbortController};F=Se;let he=B(l);j(l,{phase:"running",mode:ce,seed:Q,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:he.phase==="idle"&&he.undo===null?!1:he.expanded}),re.play("boostStart"),fe(l,Se,{draft:Q,mode:ce,locale:M,key:ue,sessionId:Le(l)})}function P(l,f={}){y(l,{locale:f.locale,force:!0})}function O(l){let f=B(l);if(f.phase!=="ready")return!1;let M=f.prompt.trim();if(M==="")return!1;let D=Ce(l);if(!q(D)||typeof D.setDraft!="function")return j(l,{phase:"error",error:{code:"apply"}}),!1;let K=$e(A(l)),Q=!1;try{D.setDraft({text:M,references:[]}),Q=!0}catch{try{D.setDraft(M),Q=!0}catch{Q=!1}}return Q?(W(l),j(l,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:K,at:t()},expanded:!1}),we(l),!0):(j(l,{phase:"error",error:{code:"apply"}}),!1)}function H(l){let f=B(l);if(f.undo===null)return!1;let M=Ce(l),D=$e(f.undo.draft),K=!1;if(q(M)&&typeof M.setDraft=="function")try{M.setDraft({text:D.text,references:D.references}),K=!0}catch{try{M.setDraft(D.text),K=!0}catch{K=!1}}return W(l),j(l,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),K}function Z(l){B(l).expanded!==!1&&j(l,{expanded:!1})}function V(l){let f=B(l);f.phase==="idle"&&f.undo===null||f.expanded===!0||j(l,{expanded:!0})}function de(l){B(l).expanded===!0?Z(l):V(l)}function ve(l){let f=q(l)?l:S;F!==null&&F.actions===f&&ye(),W(l),j(l,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Ee(l,f){let M=B(l);M.phase==="streaming"&&(typeof f!="string"||f===M.prompt||j(l,{prompt:f}))}return{subscribe(l){return typeof l!="function"?()=>{}:(w.add(l),()=>{w.delete(l)})},getState:B,panelId:X,sessionKey:se,setDraftMirror:ke,setSessionId:Fe,start:y,retry:P,apply:O,undo:H,expand:V,collapse:Z,toggle:de,dismiss:ve,edit:Ee}}var Ve=ua();var Jr=`
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
`;var ba="@local/chatbox-pet",Xr=["slots","locale"];function Vr(){return(0,Yr.useSyncExternalStore)(le.subscribe,le.getSnapshot,le.getSnapshot)}function Zr(e){let r=e.locale.bind(ze),t=e.locale.bind(Be);e.effect(()=>e.locale.register(ze,{zh:Mt,en:Et}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(Be,{zh:wr,en:kr}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let o=document.querySelector('style[data-plugin="chatbox-pet"]');o!==null&&o.remove();let i=document.createElement("style");return i.setAttribute("data-plugin","chatbox-pet"),i.textContent=`${or}
${Jr}
${cr}
${$r}
${Fr}
${Or}`,document.head.appendChild(i),()=>{i.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{le.refresh().then(o=>{Ct(o?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let o=()=>re.unlock();return window.addEventListener("pointerdown",o,{capture:!0}),window.addEventListener("keydown",o,{capture:!0}),()=>{window.removeEventListener("pointerdown",o,{capture:!0}),window.removeEventListener("keydown",o,{capture:!0})}},"chatbox-pet: sound unlock");let n=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:ba,order:1,label:()=>r("label"),locale:ze,inject:o=>({sessionId:o})},o=>{if(Vr().pet===!1)return null;let c=typeof o?.sessionId=="string"&&o.sessionId!==""?o.sessionId:typeof o?.session?.id=="string"?o.session.id:"";return c===""?null:xe.createElement(ar,{sessionId:c,t:r,useInput:o?.useInput,locale:n})}));let a=o=>i=>Vr().boost===!1?null:o(i);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>t("button.label"),locale:Be},a(o=>xe.createElement(fr,{...o,store:Ve,t,locale:n})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>r("merge.label")(2),locale:ze,inject:o=>({sessionId:o})},o=>{let i=typeof o?.sessionId=="string"?o.sessionId:"";return i===""?null:xe.createElement(yr,{sessionId:i,sessions:e.get("sessions"),t:r,locale:n,onNotice:c=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:i,text:c,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:Be},a(o=>xe.createElement(Sr,{...o,store:Ve,t,locale:n})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>r("quick.label"),locale:ze,inject:o=>({sessionId:o})},o=>xe.createElement(Br,{inputActions:o?.inputActions,sessionId:typeof o?.sessionId=="string"?o.sessionId:"",t:r,locale:n})));function s({sessionId:o,session:i}){let c=typeof o=="string"&&o!==""?o:typeof i?.id=="string"?i.id:"";return xe.useEffect(()=>{c!==""&&Ve.setSessionId(null,c)},[c]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>r("label"),locale:ze,inject:o=>({sessionId:o})},o=>xe.createElement(s,{sessionId:o?.sessionId,session:o?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:ze},()=>xe.createElement(lr,{t:r})))}
		return module.exports;
	}
});
