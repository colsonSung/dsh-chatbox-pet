window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var Qr=Object.create;var Oe=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var Vr=Object.getOwnPropertyNames;var Jr=Object.getPrototypeOf,Yr=Object.prototype.hasOwnProperty;var Xr=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}};var mt=(e,t)=>{for(var r in t)Oe(e,r,{get:t[r],enumerable:!0})},gt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Vr(t))!Yr.call(e,a)&&a!==r&&Oe(e,a,{get:()=>t[a],enumerable:!(n=Gr(t,a))||n.enumerable});return e};var ue=(e,t,r)=>(r=e!=null?Qr(Jr(e)):{},gt(t||!e||!e.__esModule?Oe(r,"default",{value:e,enumerable:!0}):r,e)),Zr=e=>gt(Oe({},"__esModule",{value:!0}),e);var Cr={};mt(Cr,{transcribe:()=>Kn});async function Kn(e){let t=await fetch("/api/chatbox-pet/transcribe?name=voice.webm",{method:"POST",headers:{"content-type":e.type||"audio/webm"},body:e}),r;try{r=await t.json()}catch{throw new Error(`\u8F6C\u5199\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(r?.ok!==!0)throw new Error(r?.error?.message??"\u8F6C\u5199\u5931\u8D25");let n=r.result?.text??"";if(n.trim()==="")throw new Error("\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF0C\u8BF7\u518D\u8BF4\u4E00\u6B21");return n}var Tr=Xr(()=>{});var aa={};mt(aa,{apply:()=>Kr,inject:()=>Hr});module.exports=Zr(aa);var be=ue(require("react"),1);var Qe="chatboxPet.sound",xt=!0,en=.3,tn=1e3,rn=7,Ke={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},ia=Object.freeze(Object.keys(Ke)),nn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function yt(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":nn[e]}function qe(e){try{return e?.getItem(Qe)==="off"?"off":"on"}catch{return"on"}}function wt(e){xt=e!==!1}function Ge(e,t){try{e?.setItem(Qe,t==="off"?"off":"on")}catch{}}function vt(e){let t=qe(e)==="on"?"off":"on";return Ge(e,t),t}function Re(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function an(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function on(e){let t=e.now??(()=>Date.now()),r=null,n=null,a=!1,s=new Map,i=new Map,o=0;function c(){if(!a)try{let u=e.createContext();if(u==null)return;let y=u.createGain();if(y.gain.value=en,y.connect(u.destination),u.state==="suspended"&&typeof u.resume=="function"){let v=u.resume();v!==void 0&&typeof v.catch=="function"&&v.catch(()=>{})}r=u,n=y,a=!0}catch{r=null,n=null,a=!1}}function x(u,y,v){if(y<=1)return 0;if(typeof v=="string"&&v!=="")return an(v)%y;let m=(i.get(u)??0)%y;return i.set(u,m+1),m}function N(u,y){if(e.getPref()!=="on"||!a||r===null||n===null||!e.isVisible())return!1;let v=Ke[u];if(v===void 0)return!1;let m=t(),R=s.get(u);if(R!==void 0&&m-R<tn)return!1;s.set(u,m);let F=Array.isArray(v.variants)?v.variants:[];if(F.length===0)return!1;let h=F[x(u,F.length,y)];o=(o+1)%7;let C=(o-3)*(rn/3);try{return sn(r,n,h,C),!0}catch{return!1}}return{play:N,unlock:c,isUnlocked:()=>a,recipeNames:()=>Object.keys(Ke)}}function sn(e,t,r,n){let a=e.currentTime;for(let s of r.notes){let i=a+s.at,o=e.createOscillator(),c=e.createGain();o.type=s.type,o.frequency.setValueAtTime(s.freq,i),typeof s.slideTo=="number"&&o.frequency.exponentialRampToValueAtTime(s.slideTo,i+s.dur),n!==0&&typeof o.detune=="object"&&o.detune!==null&&o.detune.setValueAtTime(n,i),c.gain.setValueAtTime(1e-4,i),c.gain.exponentialRampToValueAtTime(s.level,i+.008),c.gain.exponentialRampToValueAtTime(1e-4,i+s.dur),o.connect(c),c.connect(t),o.start(i),o.stop(i+s.dur+.02)}}function cn(){return{getPref:()=>{let e=Re()?.getItem(Qe);return e==="on"||e==="off"?e:xt?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var te=on(cn());var Wr=require("react");var ke="chatboxPet",kt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","sheet.close":"\u5173\u95ED","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,t,r)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${t} \xB7 \u65F6\u957F ${Math.round(r)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.translate.title":"\u7FFB\u8BD1","sheet.translate.hint":"\u6587\u5B57\u3001\u8BED\u97F3\u6216\u6587\u4EF6\u90FD\u80FD\u7FFB\uFF1B\u8BD1\u6587\u53EF\u4EE5\u6536\u85CF\u8FDB\u751F\u8BCD\u672C\uFF0C\u6216\u76F4\u63A5\u586B\u8FDB\u8F93\u5165\u6846\u3002","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},St={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","sheet.close":"Close","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,t,r)=>`${e} segments \xB7 ${t} \xB7 ${Math.round(r)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.translate.title":"Translate","sheet.translate.hint":"Text, voice or a document \u2014 and every translation can go into the saved list or the composer.","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var M=ue(require("react"),1);var ln=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],pn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},zt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],Ve={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},la=[...zt.map(e=>e.id),"fallback"];function Je(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Rt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function Nt(e){let t=Rt(e);if(t==="")return null;for(let r of ln){let n=/^[a-z ]+$/.test(r),s=(n?new RegExp(`(^|[^a-z])${Je(r).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(Je(r))).exec(t);if(s===null)continue;let i=s.index+(n?s[1].length:0),o=i+(n?r.replace(/ /g," ").length:r.length),c=`${t.slice(0,i)} ${t.slice(o)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:r,rest:c}}return null}function dn(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function un(e){let t=Rt(e);if(t==="")return"fallback";for(let r of zt){for(let n of r.zh)if(t.includes(n))return r.id;for(let n of r.en)if(new RegExp(`(^|[^a-z])${Je(n).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return r.id}return"fallback"}function Ct(e,t){let r=Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[];return r.length===0?"":r[dn(t)%r.length]}function bn(e,t={}){let r=Ve[e]??Ve.fallback,n=t.locale==="en"?"en":"zh",a=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:Ve[e]===void 0?"fallback":e,clip:r.clip,sound:r.sound,line:Ct(r[n],a)}}function Tt(e,t="zh"){let r=String(e??"");return/[\u4e00-\u9fff]/.test(r)?"zh":/[a-z]/i.test(r)||t==="en"?"en":"zh"}function Mt(e={}){let t=e.locale==="en"?"en":"zh";return Ct(pn[t],e.seed??"wake")}function Et(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),r=Number.isFinite(e.debounceMs)?e.debounceMs:700,n=Number.isFinite(e.holdMs)?e.holdMs:15e3,a=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,s=!1,i="",o="",c=0,x=0;function N(v){let m=Nt(v);return m===null?s?(s=!1,i="",o="",{kind:"off"}):null:(c=t(),s?null:(s=!0,i=m.wake,o=m.rest,c=t(),x=0,{kind:"wake",wake:m.wake,digest:m.rest}))}function u(v,m={}){if(!s)return null;let R=Nt(v);if(R===null)return s=!1,{kind:"off"};let F=`${R.wake}\0${R.rest}`;if(F===o)return null;let h=t(),C=h-x;if(C<a)return{kind:"cooldown",retryInMs:a-C};o=F,x=h,c=h;let q=un(R.rest);return{kind:"reply",...bn(q,{...m,seed:F}),digest:F}}function y(){return!s||t()-c<n?null:(s=!1,i="",o="",{kind:"off"})}return{observe:N,settle:u,expire:y,isActive:()=>s,debounceMs:r,holdMs:n,wakeWord:()=>i}}var $=ue(require("react"),1),Bt=require("react-dom");var Pt=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],_e=60;function It(e,t){let r=t==="en"?"en":"zh";return typeof e?.[r]=="string"?e[r]:""}function Le(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=_e?t:r.slice(0,_e).join("")}function qt(e,t,r,n=8){let s=Number.isFinite(t?.width)?t.width:0,i=Number.isFinite(t?.height)?t.height:0,o=Number.isFinite(r?.width)?r.width:0,c=Number.isFinite(r?.height)?r.height:0,x=(Number.isFinite(e?.right)?e.right:0)-s;x<8&&(x=Number.isFinite(e?.left)?e.left:8);let N=(Number.isFinite(e?.top)?e.top:0)-i-n;N<8&&(N=(Number.isFinite(e?.bottom)?e.bottom:0)+n);let u=Math.max(8,o-s-8),y=Math.max(8,c-i-8);return{left:Math.min(Math.max(x,8),u),top:Math.min(Math.max(N,8),y)}}var Ye=["topic","reminder","recall","nudge","encourage","tease","chitchat"],Lt={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Ft=9e3,fn=24e4,Xe=.05;function Dt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<fn)return!1;let r=Number.isFinite(e.chance)?e.chance:Xe;return(typeof e.random=="function"?e.random:Math.random)()<r}function At(e,t){let r=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[r]??""}function jt(e){return Lt[e]??Lt.chitchat}async function Ot(e={}){let t=typeof e.fetch=="function"?e.fetch:(...r)=>globalThis.fetch(...r);try{let r=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!r.ok)return null;let n=await r.json();if(n?.ok!==!0)return null;let a=n.result;return typeof a?.text!="string"||a.text.trim()===""?null:{kind:Ye.includes(a.kind)?a.kind:"chitchat",text:a.text.trim(),quote:typeof a?.quote=="string"?a.quote:"",item:typeof a?.item=="string"?a.item:"",source:typeof a?.source?.label=="string"?a.source:null,sources:Array.isArray(a?.sources)?a.sources:[]}}catch{return null}}var _t=268;function $t({anchor:e,locale:t,onSay:r,onAction:n,onQuip:a,recent:s,onForget:i,onClose:o,t:c}){let x=$.useRef(null),N=$.useRef(null),[u,y]=$.useState(""),[v,m]=$.useState(()=>({left:0,top:0,ready:!1}));$.useLayoutEffect(()=>{let h=x.current;if(h===null)return;let C=h.getBoundingClientRect().height,q=qt(e,{width:_t,height:C},{width:window.innerWidth,height:window.innerHeight});m({...q,ready:!0})},[e]),$.useEffect(()=>{let h=N.current;h!==null&&typeof h.focus=="function"&&h.focus()},[]),$.useEffect(()=>{let h=q=>{let I=x.current;I!==null&&q.target instanceof Node&&I.contains(q.target)||o()},C=q=>{q.key==="Escape"&&(q.preventDefault(),q.stopPropagation(),o())};return document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",C,!0),()=>{document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",C,!0)}},[o]);let R=()=>{let h=Le(u);h!==""&&(r(h),o())},F={left:`${Math.round(v.left)}px`,top:`${Math.round(v.top)}px`,width:`${_t}px`,visibility:v.ready?"visible":"hidden"};return(0,Bt.createPortal)($.createElement("div",{ref:x,className:"cbp-menu",style:F,role:"menu","aria-label":c("menu.title"),"data-cbp-menu":"true",onContextMenu:h=>h.preventDefault()},$.createElement("div",{className:"cbp-menu-say"},$.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},c("menu.say")),$.createElement("div",{className:"cbp-menu-row"},$.createElement("input",{id:"cbp-menu-say-input",ref:N,className:"cbp-menu-input",type:"text",value:u,maxLength:_e,placeholder:c("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:h=>y(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),h.stopPropagation(),R())}}),$.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:Le(u)==="",onClick:R},c("menu.saySubmit")))),s.length===0?null:$.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},$.createElement("span",{className:"cbp-menu-label"},c("menu.recent"),$.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:i},c("menu.clear"))),$.createElement("div",{className:"cbp-menu-recent-list"},s.slice(0,8).map(h=>$.createElement("button",{key:`${h.text}-${h.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":h.text,title:h.text,onClick:()=>{r(h.text),o()}},h.text)))),$.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},$.createElement("span",{className:"cbp-menu-label"},c("menu.quip")),$.createElement("div",{className:"cbp-menu-grid"},Ye.map(h=>$.createElement("button",{key:h,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":h,onClick:()=>{a(h),o()}},At(h,t))))),$.createElement("div",{className:"cbp-menu-actions"},$.createElement("span",{className:"cbp-menu-label"},c("menu.action")),$.createElement("div",{className:"cbp-menu-grid"},Pt.map(h=>$.createElement("button",{key:h.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":h.clip,title:h.clip,onClick:()=>{n(h.clip),o()}},It(h,t))))),$.createElement("p",{className:"cbp-menu-hint"},c("menu.hint"))),document.body)}var Ze="/api/chatbox-pet/said",Ut="chatboxPet.said";function tt(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=60?t:r.slice(0,60).join("")}function hn(e,t,r=Date.now()){let n=tt(t),a=Array.isArray(e)?e.filter(i=>typeof i?.text=="string"):[];if(n==="")return a.slice(0,24);let s=a.filter(i=>i.text!==n);return[{text:n,at:r},...s].slice(0,24)}function et(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],r=[],n=new Set;for(let a of t){let s=tt(typeof a=="string"?a:a?.text);if(!(s===""||n.has(s))&&(n.add(s),r.push({text:s,at:Number.isFinite(a?.at)?a.at:0}),r.length>=24))break}return r}function mn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function gn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...u)=>globalThis.fetch(...u),r=e.storage===void 0?mn():e.storage,n=()=>{try{let u=r?.getItem(Ut);return u==null?[]:et(JSON.parse(u))}catch{return[]}},a=u=>{try{r?.setItem(Ut,JSON.stringify(u))}catch{}},s=Object.freeze({lines:Object.freeze(n()),loaded:!1}),i=new Set;function o(u){s=Object.freeze({...s,...u});for(let y of i)try{y()}catch{}}async function c(){try{let y=await(await t(Ze,{method:"GET",headers:{accept:"application/json"}})).json();if(y?.ok===!0){let v=et(y.result);return o({lines:v,loaded:!0}),a(v),v}}catch{}return o({loaded:!0}),s.lines}async function x(u){let y=tt(u);if(y==="")return s.lines;let v=hn(s.lines,y);o({lines:Object.freeze(v)}),a(v);try{let R=await(await t(Ze,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:y})})).json();if(R?.ok===!0){let F=et(R.result);return o({lines:F,loaded:!0}),a(F),F}}catch{}return s.lines}async function N(){o({lines:Object.freeze([])}),a([]);try{await t(Ze,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(u){return typeof u!="function"?()=>{}:(i.add(u),()=>i.delete(u))},getSnapshot(){return s},refresh:c,remember:x,clear:N}}var Ce=gn();var rt=null;function Wt(e,t){let r=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(r)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(r)?!1:/Mac/i.test(typeof t=="string"?t:r)}function Ht(e){if(e!==void 0)return Wt(e.userAgent,e.platform)?".mov":".webm";if(rt===null){let t=typeof navigator>"u"?void 0:navigator;rt=Wt(t?.userAgent,t?.platform)?".mov":".webm"}return rt}var Kt={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},xn={failed:"click-angry",cancelled:"act-shy"};function Qt(e){let t=e?.previous?.status??"idle",r=e?.next?.status??"idle",n=e?.previous?.detail??null,a=e?.next?.detail??null,s=r!==t||a!==n,o=t==="working"&&r==="thinking"?"result":r;if(!s)return{changed:!1,status:o,detail:a,clip:null,sound:null};if(r==="idle")return{changed:!0,status:"idle",detail:a,clip:null,sound:null};let c=o==="error"?xn[a]??Kt.error:Kt[o]??e?.idleClip??null;return{changed:!0,status:o,detail:a,clip:c,sound:yt(o,a)}}var yn=6e3,wn=5e3,vn={thinking:0,working:1,result:2,waiting:3,success:4,error:5},Se="idle-breathe-loop",Gt="click-wave",Vt=["act-harley","act-beach"],Jt=6e3,kn=9e4,Sn=.12;function Yt({sessionId:e,t,useInput:r,locale:n}){let a=M.useRef(null),s=M.useRef(null),i=M.useRef("idle"),o=M.useRef(null),c=M.useRef(Date.now()),x=M.useRef(null),N=M.useRef(0),u=M.useRef(0),[y,v]=M.useState(null),[m,R]=M.useState(null),h=M.useSyncExternalStore(Ce.subscribe,Ce.getSnapshot,Ce.getSnapshot).lines,C=M.useRef(0),[q,I]=M.useState(null),[S,z]=M.useState("idle"),[L,B]=M.useState(!0),_=M.useRef(!1),j=M.useCallback((g,P)=>{let A=a.current;if(A===null||A.dataset.clip===g&&A.loop===P&&!A.ended)return;A.dataset.clip=g,A.loop=P,A.src=`/api/chatbox-pet/asset/${g}${Ht()}`;let H=A.play();H!==void 0&&typeof H.catch=="function"&&H.catch(()=>{})},[]),we=M.useCallback(()=>{let g=a.current;if(g!==null){if(!_.current&&g.dataset.clip!==Se){_.current=!0,j(Se,!0);return}B(!1)}},[j]),Y=M.useCallback(()=>{window.clearTimeout(C.current),I(null)},[]),Z=M.useCallback((g,P,A,H=wn,X=null)=>{window.clearTimeout(C.current),I({text:g,kind:A,source:X}),P||(C.current=window.setTimeout(()=>I(null),H))},[]),V=M.useCallback(g=>{let P=s.current?.workStatusTexts,A=vn[g],H=A===void 0||!Array.isArray(P)?void 0:P[A];if(!(!Array.isArray(H)||H.length===0))return H[Math.floor(Math.random()*H.length)]},[]),Ne=M.useCallback(g=>{let P=typeof g?.status=="string"?g.status:"idle",A=i.current,H=typeof g?.detail=="string"?g.detail:null,X=Qt({previous:{status:A,detail:o.current},next:{status:P,detail:H},idleClip:Se});if(!X.changed){P==="waiting"&&typeof g?.bubble=="string"&&g.bubble!==""&&Z(g.bubble,!0,"waiting");return}if(i.current=P,o.current=H,z(P),x.current!==null&&x.current.isActive()){c.current=Date.now();return}if(P==="idle"){j(Se,!0),Y(),c.current=Date.now();return}c.current=Date.now();let J=X.status,ge=X.detail;j(X.clip??Se,!1);let se=typeof g?.bubble=="string"&&g.bubble!==""?g.bubble:V(J),Me=g?.source==="broadcast"?"notify":X.sound;te.play(Me,se),se!==void 0?Z(se,P==="waiting",J):Y()},[Y,V,j,Z]),ze=M.useCallback(async g=>{let P=await Ot({kind:g,locale:typeof n=="function"?n():"zh"});if(P===null)return;let A=jt(P.kind);j(A.clip,!1),te.play(A.sound,P.text),Z(P.text,!1,"quip",Ft,P.source?.label??null)},[n,j,Z]),fe=M.useCallback(()=>{if(i.current!=="idle"||x.current!==null&&x.current.isActive())return;let P=Date.now()-c.current;if(P<kn)return;if(Dt({idleForMs:P,chance:Xe})){c.current=Date.now(),ze(null);return}if(Math.random()>Sn)return;let A=Vt[Math.floor(Math.random()*Vt.length)];j(A,!1),c.current=Date.now()},[j,ze]),oe=M.useCallback((g,P,A)=>{typeof g.clip=="string"&&g.clip!==""&&j(g.clip,!1),typeof g.sound=="string"&&g.sound!==""&&te.play(g.sound,g.line),typeof g.line=="string"&&g.line!==""&&Z(g.line,P,"chat",A)},[j,Z]),he=M.useCallback(()=>{window.clearTimeout(u.current),v(null),j(Se,!0),Y()},[Y,j]),ie=typeof r=="function"?r(g=>typeof g?.draft=="string"?g.draft:""):"";M.useEffect(()=>{x.current===null&&(x.current=Et());let g=x.current,P=Tt(ie,typeof n=="function"?n():"zh"),A=g.observe(ie);if(A!==null&&A.kind==="wake"&&(v({phase:"awake"}),oe({clip:"click-surprise",sound:"wake",line:Mt({locale:P,seed:ie})},!0)),A!==null&&A.kind==="off"){he();return}if(window.clearTimeout(N.current),!g.isActive())return;let H=X=>{N.current=window.setTimeout(()=>{let J=g.settle(ie,{locale:P});if(J!==null&&J.kind==="cooldown"){H(Math.max(120,J.retryInMs));return}J===null||J.kind!=="reply"||(oe(J,!1,Jt),window.clearTimeout(u.current),u.current=window.setTimeout(()=>he(),g.holdMs))},X)};return H(g.debounceMs),()=>window.clearTimeout(N.current)},[ie,n,oe,he]),M.useEffect(()=>{Ce.refresh()},[]),M.useEffect(()=>{let g=!1;return fetch("/api/chatbox-pet/config").then(P=>P.ok?P.json():null).then(P=>{!g&&P?.ok===!0&&(s.current=P.result)}).catch(()=>{}),()=>{g=!0}},[]),M.useEffect(()=>{if(typeof e!="string"||e==="")return;let g=!1,P=0,A=async()=>{if(document.visibilityState==="visible"){try{let J=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),ge=J.ok?await J.json():null;!g&&ge?.ok===!0&&Ne(ge.result)}catch{}g||fe()}},H=()=>{P=window.setTimeout(async()=>{await A(),g||H()},yn)},X=()=>{document.visibilityState==="visible"&&A()};return document.addEventListener("visibilitychange",X),A(),H(),()=>{g=!0,window.clearTimeout(P),document.removeEventListener("visibilitychange",X)}},[e,Ne]),M.useEffect(()=>(j(Se,!0),()=>window.clearTimeout(C.current)),[j]);let[de,Te]=M.useState(()=>qe(Re())==="on"),ve=M.useCallback(g=>{let P=Le(g);P!==""&&(j(Gt,!1),te.play("click",P),Z(P,!1,"chat",Jt),Ce.remember(P))},[j,Z]),Ie=M.useCallback(g=>{typeof g!="string"||g===""||(j(g,!1),te.play("click",g))},[j]),me=M.useCallback(()=>{let g=document.querySelector("[data-cbp-pet]"),P=g instanceof Element?g.getBoundingClientRect():null;P!==null&&R({left:P.left,right:P.right,top:P.top,bottom:P.bottom})},[]);return M.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},M.createElement("div",{className:"cbp-stage"},M.createElement("div",{className:(q===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(q?.kind==="error"?" cbp-bubble--error":"")+(q?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},q?.source?M.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":q.source},q.source):null,M.createElement("span",{className:"cbp-bubble-text"},q?.text??"")),M.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(de?"sound.on":"sound.off"),"aria-pressed":de,onClick:g=>{g.stopPropagation();let P=vt(Re())==="on";Te(P),prefsStore.update({sound:P})}},de?M.createElement(Nn,null):M.createElement(zn,null)),M.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":y===null?S:"awake","data-cbp-chat":y===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{te.play("click"),j(Gt,!1)},onContextMenu:g=>{g.preventDefault(),g.stopPropagation(),me()},onKeyDown:g=>{(g.key==="ContextMenu"||g.shiftKey&&g.key==="F10")&&(g.preventDefault(),me())},"aria-haspopup":"menu","aria-expanded":m===null?"false":"true"},L?M.createElement("video",{ref:a,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:g=>{g.currentTarget.loop||j(Se,!0)},onError:we}):M.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),m===null?null:M.createElement($t,{anchor:m,locale:typeof n=="function"?n():"zh",onSay:ve,onAction:Ie,onQuip:g=>{ze(g)},recent:h,onForget:()=>{Ce.clear()},onClose:()=>R(null),t}))}function Nn(){return M.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},M.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),M.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),M.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function zn(){return M.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},M.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),M.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Xt=`
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
`;var Zt="/api/chatbox-pet/prefs",Rn=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function Cn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...o)=>globalThis.fetch(...o),r=Rn,n=new Set;function a(o){r={...r,...o};for(let c of n)try{c()}catch{}}async function s(){try{let c=await(await t(Zt,{method:"GET",headers:{accept:"application/json"}})).json();c?.ok===!0&&c.result!==null&&typeof c.result=="object"?a({pet:c.result.pet!==!1,boost:c.result.boost!==!1,sound:c.result.sound!==!1,loaded:!0}):a({loaded:!0})}catch{}return r}async function i(o){let c=r,x={};for(let N of["pet","boost","sound"])typeof o?.[N]=="boolean"&&(x[N]=o[N]);a(x);try{let u=await(await t(Zt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:x})})).json();if(u?.ok!==!0||u.result===null||typeof u.result!="object")throw new Error("rejected");return a({pet:u.result.pet!==!1,boost:u.result.boost!==!1,sound:u.result.sound!==!1,loaded:!0}),!0}catch{return a({pet:c.pet,boost:c.boost,sound:c.sound}),!1}}return{subscribe(o){return typeof o!="function"?()=>{}:(n.add(o),()=>n.delete(o))},getSnapshot(){return r},refresh:s,update:i}}var le=Cn();var ee=ue(require("react"),1),er=require("react");var tr=`
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
`;function nt({id:e,checked:t,label:r,onChange:n}){return ee.createElement("label",{className:"cbp-set-item",htmlFor:e},ee.createElement("span",{className:"cbp-switch"},ee.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:a=>n(a.target.checked),"data-cbp-pref":e}),ee.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),ee.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),r)}function rr({t:e}){let t=(0,er.useSyncExternalStore)(le.subscribe,le.getSnapshot,le.getSnapshot),[r,n]=ee.useState(()=>qe(Re())==="on"),a=s=>{n(s),Ge(Re(),s?"on":"off"),le.update({sound:s})};return ee.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},ee.createElement("div",{className:"cbp-set-head"},ee.createElement("span",{className:"cbp-set-title"},e("settings.title")),ee.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),ee.createElement("div",{className:"cbp-set-items"},ee.createElement(nt,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:s=>{le.update({pet:s})}}),ee.createElement(nt,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:s=>{le.update({boost:s})}}),ee.createElement(nt,{id:"chatbox-pet-feature-sound",checked:r,label:e("settings.sound"),onChange:a})))}var Fe=ue(require("react"),1),$e=require("react"),ot=require("@deepseek-ai/dsh-client-ui-primitives");var G=require("react");function Ee({size:e=16,children:t}){return(0,G.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function Be({size:e=16}){return(0,G.createElement)(Ee,{size:e},[(0,G.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,G.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function nr({size:e=16}){return(0,G.createElement)(Ee,{size:e},(0,G.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function ar({size:e=16}){return(0,G.createElement)(Ee,{size:e},[(0,G.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function at({size:e=16}){return(0,G.createElement)(Ee,{size:e},[(0,G.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,G.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function or({size:e=16}){return(0,G.createElement)(Ee,{size:e},(0,G.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function ir({size:e=16}){return(0,G.createElement)(Ee,{size:e},[(0,G.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,G.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,G.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,G.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,G.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function Tn({label:e,children:t}){return typeof ot.Tooltip=="function"?Fe.createElement(ot.Tooltip,{label:e,side:"top",delayMs:400},t):(0,$e.cloneElement)(t,{title:e})}function sr({inputActions:e,useInput:t,store:r,t:n,locale:a}){let s=(0,$e.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),i=typeof t=="function"?t(y=>y):void 0;r.setDraftMirror(e,i);let o=typeof i?.draft=="string"?i.draft:"",c=s.phase==="running"||s.phase==="streaming",x=s.phase!=="idle",N=n(c?"button.running":"button.label"),u=c?n("button.running"):o.trim()===""?n("button.tooltipCompose"):n("button.tooltip");return Fe.createElement(Tn,{label:u},Fe.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":c?"true":"false","data-pb-open":x?"true":"false","aria-label":N,"aria-busy":c?"true":void 0,"aria-expanded":x?"true":"false","aria-controls":r.panelId(e),onMouseDown:y=>y.preventDefault(),onClick:()=>r.start(e,{locale:typeof a=="function"?a():"zh"})},Fe.createElement(Be,{size:16})))}var re=ue(require("react"),1),Ue=require("react"),ct=require("@deepseek-ai/dsh-client-ui-primitives");var cr="next-turn";function it(e){return(Array.isArray(e?.content)?e.content:[]).filter(r=>r!==null&&typeof r=="object"&&r.type==="text"&&typeof r.text=="string").map(r=>r.text).join("").trim()}function Mn(e){return(Array.isArray(e?.content)?e.content:[]).some(r=>r===null||typeof r!="object"||r.type!=="text")}function lr(e){let t=[];try{let n=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();t=Array.isArray(n?.[cr])?n[cr]:[]}catch{t=[]}return st(t)}function st(e){let r=(Array.isArray(e)?e:[]).filter(i=>i!==null&&typeof i=="object"&&typeof i.id=="string"),n=r.map(it),a=r.filter((i,o)=>!Mn(i)&&n[o]!==""),s="";return r.length>=2&&a.length!==r.length?s="attachment":r.length>8?s="too-many":r.length<2&&(s="too-few"),{items:r,texts:n,mergeable:r.length,blocked:s}}async function En(e,t={}){let r=Pn(e),n=typeof t.fetchImpl=="function"?t.fetchImpl:(...a)=>globalThis.fetch(...a);try{let a=await n("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof t.sessionId=="string"?t.sessionId:void 0,locale:t.locale==="en"?"en":"zh"})});if(!a.ok)return{prompt:r,optimized:!1,reason:"http-"+String(a.status)};let s=await a.json(),i=typeof s?.result?.prompt=="string"?s.result.prompt.trim():"";return i===""?{prompt:r,optimized:!1,reason:"empty"}:{prompt:i,optimized:s.result.optimized===!0,reason:typeof s.result.reason=="string"?s.result.reason:""}}catch{return{prompt:r,optimized:!1,reason:"network"}}}function Pn(e){return(Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>t!=="").join(`

`)}async function In(e,t,r){let n=Array.isArray(t)?t:[],a=String(r??"").trim();if(n.length<2||a==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[s,...i]=n;try{let x=await e.updateQueue(s.id,{kind:"edit",content:[{type:"text",text:a}]});if(x?.ok!==!0)return{ok:!1,merged:0,removed:0,error:x?.error?.code??"edit-failed"}}catch(x){return{ok:!1,merged:0,removed:0,error:pr(x)}}let o=0,c=0;for(let x of i)try{let N=await e.updateQueue(x.id,{kind:"remove"});if(N?.ok===!0){o+=1;continue}if(N?.error?.code==="session/queue-item-not-found"){c+=1;continue}return{ok:!1,merged:1,removed:o,claimed:c,error:N?.error?.code??"remove-failed"}}catch(N){return{ok:!1,merged:1,removed:o,claimed:c,error:pr(N)}}return{ok:c===0,merged:1,removed:o,claimed:c,error:c>0?"session/queue-item-not-found":""}}async function dr(e={}){let t=lr(e.session);if(t.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:t.blocked};let r=t.items.map(it),n=await En(r,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),a=lr(e.session);if(!(a.items.length===t.items.length&&a.items.every((o,c)=>o.id===t.items[c].id&&it(o)===r[c])))return{ok:!1,count:t.items.length,optimized:!1,reason:"",error:"queue-changed"};let i=await In(e.session,t.items,n.prompt);return{ok:i.ok,count:t.items.length,optimized:n.optimized,reason:n.reason,error:i.error}}function pr(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function qn({label:e,children:t}){return typeof ct.Tooltip=="function"?re.createElement(ct.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Ue.cloneElement)(t,{title:e})}var Ln=Object.freeze({}),Fn=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>Ln});function Dn(e){let t=(()=>{try{let n=e?.projections?.faceOf?.("inbox");if(typeof n?.subscribe=="function"&&typeof n?.getSnapshot=="function")return n}catch{}return Fn})(),r=(0,Ue.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot);return st(r?.["next-turn"])}function ur({sessionId:e,sessions:t,t:r,locale:n,onNotice:a}){let s=re.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return t?.binding?.(e)?.session??null}catch{return null}},[t,e]),i=Dn(s),[o,c]=re.useState("idle"),[x,N]=re.useState(""),u=re.useRef(0);re.useEffect(()=>()=>window.clearTimeout(u.current),[]);let y=i.items.length;if(y<2||i.blocked==="attachment"||i.blocked==="too-many")return null;let v=async()=>{if(o!=="running"){c("running"),N("");try{let R=await dr({session:s,sessionId:e,locale:typeof n=="function"?n():"zh"});if(R.ok){let F=R.optimized?r("merge.done")(R.count):r("merge.donePlain")(R.count);N(F),a?.(F)}else N(R.error==="queue-changed"?r("merge.changed"):R.error==="session/queue-item-not-found"?r("merge.claimed"):r("merge.failed"))}catch{N(r("merge.failed"))}finally{c("idle"),window.clearTimeout(u.current),u.current=window.setTimeout(()=>N(""),4e3)}}},m=o==="running"?r("merge.running"):x!==""?x:r("merge.label")(y);return re.createElement(qn,{label:m},re.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":y,"data-cbp-merge-phase":o,"aria-label":m,"aria-busy":o==="running"?"true":void 0,disabled:o==="running",onClick:R=>{R.stopPropagation(),v()}},re.createElement(ir,null),re.createElement("span",{className:"cbp-merge-count"},o==="running"?"\u2026":y)))}var De="promptBoost",br={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},fr={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var k=ue(require("react"),1),ne=require("react");var An=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function jn(){return k.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},k.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),k.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function hr(e,t){let r=`source.${e.id}`,n=t(r);return n===r?e.label:n}function On(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function _n(e,t){if(e.phase!=="ready")return"";let r=[];return e.cached&&r.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&r.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),r.join(" \xB7 ")}function Bn(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let r=e.sources.slice(0,2).map(n=>`${hr(n,t)} ${n.count}`).join(" \xB7 ");return r===""?t("chip.writing"):`${r} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function $n({state:e,store:t,t:r,inputActions:n,chipRef:a}){let s=e.phase==="applied",i=e.phase==="running"||e.phase==="streaming",o=e.phase==="ready",c=e.phase==="error",x=e.mode==="compose"?r("panel.compose"):r("button.label"),N=Bn(e,r);return s?k.createElement("div",{className:"pb-chip-row"},k.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":r("chip.expand"),onClick:()=>t.expand(n),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),t.expand(n))}},k.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},k.createElement(nr,{size:12})),k.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},r("undo.done")),k.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),k.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":r("undo.label"),onClick:()=>t.undo(n)},r("undo.action")))):k.createElement("div",{className:"pb-chip-row"},k.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":i?"true":"false",onClick:()=>t.expand(n)},k.createElement("button",{ref:a,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(n),"aria-label":`${r("chip.expand")} \xB7 ${x}`,onClick:()=>t.expand(n)},k.createElement("span",{className:i||o?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},i?k.createElement(jn,null):c?k.createElement(at,{size:12}):k.createElement(Be,{size:12})),k.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},N),o||c?k.createElement(k.Fragment,null,k.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),k.createElement("span",{className:"pb-chip-view"},r("chip.view"))):null),k.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":r("chip.dismiss"),onClick:()=>t.dismiss(n)},k.createElement(ar,{size:10}))))}function Un({state:e,store:t,t:r,inputActions:n,locale:a,panelRef:s}){let i=(0,ne.useRef)(null),o=e.phase,c=o==="running",x=o==="streaming",N=o==="ready",u=o==="applied",y=N||u,v=o==="error",m=e.sources,R=c||x||y||m.length>0,F=u?e.applied:e.prompt,h=_n(e,r),C=t.panelId(n),q=r(An?"shortcut.mac":"shortcut.other"),I=r(c?"panel.announceRunning":x?"panel.streaming":u?"panel.announceApplied":N?"panel.announceReady":"panel.announceError");return(0,ne.useEffect)(()=>{let S=i.current;S===null||o!=="streaming"||(S.scrollTop=S.scrollHeight)},[e.prompt,o]),k.createElement("section",{ref:s,id:C,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":o,"data-pb-running":c||x?"true":"false",tabIndex:-1,"aria-labelledby":`${C}-title`,"aria-busy":c||x?"true":void 0},k.createElement("header",{className:"pb-head"},k.createElement("div",{className:"pb-head-row"},k.createElement("h2",{className:"pb-title",id:`${C}-title`},r("panel.title")),e.mode==="compose"?k.createElement("span",{className:"pb-mode"},r("panel.compose")):null,k.createElement("span",{className:"pb-meta"},h),k.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":r("panel.collapse"),title:r("panel.collapse"),onClick:()=>t.collapse(n)},k.createElement(or,{size:14}))),R?k.createElement("div",{className:"pb-sources",role:"list","aria-label":r("panel.sources")},m.length>0?m.map(S=>k.createElement("span",{key:S.id,className:"pb-chip",role:"listitem","data-pb-source":S.id},k.createElement("span",{className:"pb-chip-label"},hr(S,r)),k.createElement("span",{className:"pb-chip-count"},S.count))):c?[k.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),k.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:k.createElement("span",{className:"pb-note"},r("panel.noSources"))):null),k.createElement("div",{className:"pb-rule","aria-hidden":"true"}),k.createElement("div",{className:"pb-body"},c?k.createElement(k.Fragment,null,k.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},k.createElement("span",{className:"pb-skeleton-line is-long"}),k.createElement("span",{className:"pb-skeleton-line is-full"}),k.createElement("span",{className:"pb-skeleton-line is-short"})),k.createElement("div",{className:"pb-status"},k.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.status"))):null,x||y?k.createElement("textarea",{ref:i,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:x||u,spellCheck:!1,"aria-label":r("panel.editLabel"),placeholder:r("panel.placeholder"),value:F}):null,x?k.createElement("div",{className:"pb-status"},k.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.streaming")):null,v?k.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},k.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},k.createElement(at,{size:14})),k.createElement("span",{className:"pb-error-text"},On(e.error,r))):null,k.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},I)),k.createElement("div",{className:"pb-foot"},k.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(n)},r("panel.close")),k.createElement("span",{className:"pb-foot-spacer"}),y?k.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:q,onClick:()=>t.retry(n,{locale:a()})},r("panel.another"),k.createElement("span",{className:"pb-kbd","aria-hidden":"true"},q)):null,u?k.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(n)},r("undo.action")):null,c||x?k.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(n,{locale:a()})},r("panel.retry")):null,v?k.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(n,{locale:a()})},r("panel.retryError")):null))}function mr({inputActions:e,store:t,t:r,locale:n,session:a}){let s=(0,ne.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),i=s.phase,o=i!=="idle"||s.undo!==null,c=s.expanded===!0&&i!=="idle";(0,ne.useEffect)(()=>{let m=typeof a?.id=="string"?a.id:"";m!==""&&t.setSessionId(e,m)},[a?.id,e,t]);let x=(0,ne.useRef)(null),N=(0,ne.useRef)(null),u=(0,ne.useRef)(null),y=(0,ne.useRef)(!1),v=(0,ne.useRef)(!1);return(0,ne.useEffect)(()=>{if(!o)return;let m=R=>{if(!(R.defaultPrevented||c===!1)){if(R.key==="Escape"){R.preventDefault(),R.stopPropagation(),t.collapse(e);return}R.key==="Enter"&&(R.metaKey||R.ctrlKey)&&(R.preventDefault(),R.stopPropagation(),i==="applied"||i==="ready"?t.retry(e,{locale:n()}):i==="error"&&t.retry(e,{locale:n()}))}};return document.addEventListener("keydown",m,!0),()=>document.removeEventListener("keydown",m,!0)},[o,c,i,e,t,n]),(0,ne.useEffect)(()=>{if(o&&y.current===!1){y.current=!0,u.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(o===!1&&y.current){y.current=!1;let m=u.current;if(u.current=null,m==null||m.isConnected===!1||typeof m.focus!="function")return;try{m.focus({preventScroll:!0})}catch{}}},[o]),(0,ne.useEffect)(()=>{if(c&&v.current===!1){v.current=!0;let m=N.current;if(m!==null&&typeof m.focus=="function")try{m.focus({preventScroll:!0})}catch{}return}if(c===!1&&v.current){v.current=!1;let m=i==="idle"?u.current:x.current;if(m==null||m.isConnected===!1||typeof m.focus!="function")return;try{m.focus({preventScroll:!0})}catch{}}},[c,i]),o?c===!1?k.createElement($n,{state:s,store:t,t:r,inputActions:e,chipRef:x}):k.createElement(Un,{state:s,store:t,t:r,inputActions:e,locale:n,panelRef:N}):null}var w=ue(require("react"),1),dt=require("react-dom");var gr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"translate",icon:"translate",zh:"\u7FFB\u8BD1",en:"Translate",sheet:"translate",prompt:{zh:"\u5E2E\u6211\u7FFB\u8BD1\uFF1A",en:"Translate this: "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function lt(e,t){return t==="en"?e.en:e.zh}var f=ue(require("react"),1),xr=require("react-dom"),yr="/api/chatbox-pet",Wn=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],Hn=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function wr(e,t){let r=await fetch(`${yr}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),n;try{n=await r.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${r.status}\uFF09`);return n.result}function vr(e,t){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:t,references:[]}),!0}catch{try{return e.setDraft(t),!0}catch{return!1}}}function Pe({title:e,hint:t,onClose:r,children:n,t:a,wide:s=!1}){let i=f.useRef(null);return f.useEffect(()=>{let o=c=>{c.key==="Escape"&&(c.preventDefault(),c.stopPropagation(),r())};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[r]),(0,xr.createPortal)(f.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:o=>o.stopPropagation()},f.createElement("div",{className:s?"cbp-sheet cbp-sheet-wide":"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:i},f.createElement("div",{className:"cbp-sheet-head"},f.createElement("span",{className:"cbp-sheet-title"},e),f.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":a("sheet.close"),onClick:r},"\u2715")),t?f.createElement("p",{className:"cbp-sheet-hint"},t):null,f.createElement("div",{className:"cbp-sheet-body"},n))),document.body)}function kr({onClose:e,onFill:t,t:r,locale:n}){let[a,s]=f.useState("idle"),[i,o]=f.useState(0),[c,x]=f.useState(null),[N,u]=f.useState(""),y=f.useRef(null),v=f.useRef([]),m=f.useRef(0),R=()=>{m.current!==0&&(clearInterval(m.current),m.current=0)};f.useEffect(()=>()=>{R();try{y.current?.stream?.getTracks?.().forEach(I=>I.stop())}catch{}},[]);let F=async I=>{s("working"),u("");try{let z=await(await fetch(`${yr}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":I.type||"audio/webm"},body:I})).json();if(z?.ok!==!0)throw new Error(z?.error?.message??"\u8F6C\u5199\u5931\u8D25");x(z.result),s("done")}catch(S){u(String(S?.message??S)),s("idle")}},h=async()=>{u("");try{let I=await navigator.mediaDevices.getUserMedia({audio:!0}),S=new MediaRecorder(I);v.current=[],S.ondataavailable=z=>{z.data?.size>0&&v.current.push(z.data)},S.onstop=()=>{R(),I.getTracks().forEach(L=>L.stop());let z=new Blob(v.current,{type:S.mimeType||"audio/webm"});F(z)},y.current=S,S.start(),o(0),s("recording"),m.current=setInterval(()=>o(z=>z+1),1e3)}catch(I){let S=I?.name==="NotAllowedError"||I?.name==="SecurityError";u(S?r("sheet.transcribe.denied"):String(I?.message??I))}},C=()=>{s("working");try{y.current?.stop()}catch{R(),s("idle")}},q=`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`;return f.createElement(Pe,{title:r("sheet.transcribe.title"),hint:r("sheet.transcribe.hint"),onClose:e,t:r},c===null?f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-sheet-center"},f.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":a,"aria-label":r(a==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:a==="recording"?C:h,disabled:a==="working"},f.createElement("span",{className:"cbp-rec-dot"})),f.createElement("span",{className:"cbp-rec-time"},a==="recording"?q:r(a==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),f.createElement("label",{className:"cbp-sheet-file"},f.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:I=>{let S=I.target.files?.[0];S&&F(S),I.target.value=""}}),f.createElement("span",null,r("sheet.transcribe.pick")))):f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-sheet-meta"},r("sheet.transcribe.meta")(c.segments?.length??0,c.language??"\u2014",c.durationSeconds??0)),f.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},c.text||r("sheet.transcribe.empty")),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(c.text)},r("sheet.fill")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{x(null),s("idle")}},r("sheet.again")))),N?f.createElement("p",{className:"cbp-sheet-error"},N):null)}function Sr({onClose:e,onFill:t,t:r,locale:n,sessionId:a=""}){let[s,i]=f.useState("update"),[o,c]=f.useState(""),[x,N]=f.useState(""),[u,y]=f.useState("idle"),[v,m]=f.useState(""),[R,F]=f.useState(""),h=async()=>{y("working"),F("");try{let C=await wr("/write",{genre:s,topic:o,tone:x,locale:n(),session:a});m(C.text),y("done")}catch(C){F(String(C?.message??C)),y("idle")}};return f.createElement(Pe,{title:r("sheet.write.title"),hint:r("sheet.write.hint"),onClose:e,t:r},f.createElement("div",{className:"cbp-chips"},Wn.map(C=>f.createElement("button",{key:C.id,type:"button",className:"cbp-chip","data-cbp-genre":C.id,"aria-pressed":s===C.id?"true":"false",onClick:()=>i(C.id)},n()==="en"?C.en:C.zh))),f.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:r("sheet.write.topic"),value:o,maxLength:200,onChange:C=>c(C.target.value)}),f.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:r("sheet.write.tone"),value:x,maxLength:80,onChange:C=>N(C.target.value)}),v===""?f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:u==="working"||o.trim()==="",onClick:h},r(u==="working"?"sheet.working":"sheet.write.go"))):f.createElement(f.Fragment,null,f.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},v),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(v)},r("sheet.fill")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>m("")},r("sheet.again")))),R?f.createElement("p",{className:"cbp-sheet-error"},R):null)}function Nr({onClose:e,t,locale:r,sessionId:n=""}){let[a,s]=f.useState(""),[i,o]=f.useState(""),[c,x]=f.useState(10),[N,u]=f.useState("idle"),[y,v]=f.useState(null),[m,R]=f.useState(""),F=async()=>{u("working"),R("");try{let C=await wr("/deck",{topic:a,audience:i,pages:c,locale:r(),session:n});v(C),u("done")}catch(C){R(String(C?.message??C)),u("idle")}},h=()=>{if(!y?.base64)return;let C=Uint8Array.from(atob(y.base64),z=>z.charCodeAt(0)),q=new Blob([C],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),I=URL.createObjectURL(q),S=document.createElement("a");S.href=I,S.download=y.name||"deck.pptx",document.body.appendChild(S),S.click(),S.remove(),setTimeout(()=>URL.revokeObjectURL(I),4e3)};return f.createElement(Pe,{title:t("sheet.deck.title"),hint:t("sheet.deck.hint"),onClose:e,t},y===null?f.createElement(f.Fragment,null,f.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:t("sheet.deck.topic"),value:a,maxLength:200,onChange:C=>s(C.target.value)}),f.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:t("sheet.deck.audience"),value:i,maxLength:120,onChange:C=>o(C.target.value)}),f.createElement("div",{className:"cbp-chips"},Hn.map(C=>f.createElement("button",{key:C.id,type:"button",className:"cbp-chip","data-cbp-size":C.id,"aria-pressed":c===C.id?"true":"false",onClick:()=>x(C.id)},r()==="en"?C.en:C.zh))),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:N==="working"||a.trim()==="",onClick:F},t(N==="working"?"sheet.deck.working":"sheet.deck.go")))):f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},f.createElement("div",{className:"cbp-deck-title"},y.title||a),f.createElement("div",{className:"cbp-deck-meta"},t("sheet.deck.meta")(y.slides??0)),f.createElement("div",{className:"cbp-deck-path",title:y.path},y.path)),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:h},t("sheet.deck.download")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>v(null)},t("sheet.again")))),m?f.createElement("p",{className:"cbp-sheet-error"},m):null)}function zr({onClose:e,onFill:t,t:r}){let[n,a]=f.useState(""),s=()=>{let i=n.trim();t(i===""?r("sheet.video.prompt"):r("sheet.video.promptWith")(i))};return f.createElement(Pe,{title:r("sheet.video.title"),hint:r("sheet.video.hint"),onClose:e,t:r},f.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:r("sheet.video.placeholder"),value:n,maxLength:500,onChange:i=>a(i.target.value)}),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:s},r("sheet.video.go"))))}var Rr=`
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
  max-height:min(84vh,720px);
}
@media (prefers-reduced-motion: reduce){
  .cbp-sheet-veil,.cbp-sheet{animation:none}
}
`;var p=ue(require("react"),1),pt="/api/chatbox-pet",Mr=[{id:"auto",zh:"\u81EA\u52A8\u68C0\u6D4B",en:"Detect"},{id:"zh",zh:"\u4E2D\u6587",en:"Chinese"},{id:"en",zh:"\u82F1\u6587",en:"English"},{id:"ja",zh:"\u65E5\u6587",en:"Japanese"},{id:"ko",zh:"\u97E9\u6587",en:"Korean"},{id:"fr",zh:"\u6CD5\u6587",en:"French"},{id:"de",zh:"\u5FB7\u6587",en:"German"},{id:"es",zh:"\u897F\u73ED\u7259\u6587",en:"Spanish"}];function Qn(e){let t=String(e??"").trim();return t===""||t.length>40||/[.!?。！？\n]/.test(t)?!1:t.split(/\s+/).filter(Boolean).length<=3}async function ye(e,t){let r=await fetch(`${pt}${e}`,t),n;try{n=await r.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${r.status}\uFF09`);return n.result}function Er({t:e,locale:t=()=>"zh",inputActions:r}){let n=t()!=="en",a=p.useCallback((d,T)=>n?d:T,[n]),[s,i]=p.useState("translate"),[o,c]=p.useState("auto"),[x,N]=p.useState(()=>n?"en":"zh"),[u,y]=p.useState("text"),[v,m]=p.useState(""),[R,F]=p.useState(""),[h,C]=p.useState(null),[q,I]=p.useState(null),[S,z]=p.useState(null),[L,B]=p.useState(!1),[_,j]=p.useState(""),[we,Y]=p.useState("idle"),[Z,V]=p.useState(""),[Ne,ze]=p.useState(""),[fe,oe]=p.useState(!1),[he,ie]=p.useState(0),[de,Te]=p.useState([]),[ve,Ie]=p.useState("all"),[me,g]=p.useState(""),[P,A]=p.useState(!1),H=p.useRef(null),X=p.useRef([]),J=p.useRef(0),ge=p.useCallback(()=>{J.current!==0&&(clearInterval(J.current),J.current=0)},[]),se=p.useCallback(async(d=ve,T=me)=>{try{let U=new URLSearchParams;d!=="all"&&U.set("kind",d),T.trim()!==""&&U.set("search",T.trim());let D=await ye(`/favorites?${U.toString()}`);Te(D.items??[])}catch(U){V(String(U?.message??U))}},[ve,me]);p.useEffect(()=>{se("all","")},[]),p.useEffect(()=>{let d=!1;return fetch(`${pt}/translate/engine`).then(T=>T.json()).then(T=>{!d&&T?.ok===!0&&C(T.result)}).catch(()=>{}),()=>{d=!0}},[]),p.useEffect(()=>()=>{ge();try{H.current?.stream?.getTracks?.().forEach(d=>d.stop())}catch{}},[ge]);let Me=async(d=v)=>{let T=d.trim();if(T===""){V(a("\u5148\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57","Type something to translate first"));return}Y("working"),V(""),A(!1),I(null),z(null);let U=Qn(T)?"dict":"sentence",D=x==="zh"?"zh":"en";try{let W=await ye("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:T,from:o,to:x,locale:U==="dict"?D:n?"zh":"en",mode:U})});U==="dict"?(I(W.dict),F(""),K(W.dict.word)):F(W.translated),C(He=>({...He??{},last:{engine:W.engine,ms:W.ms}})),Y("done")}catch(W){V(String(W?.message??W)),Y("idle")}},l=()=>{if(x==="auto"){N(o==="auto"?"zh":o),c("auto");return}c(x),N(o==="auto"?"zh":o),R!==""&&(m(R),F(""))},b=async d=>{Y("working"),V(""),A(!1),ze(d.name);try{let T=await ye(`/translate/file?name=${encodeURIComponent(d.name)}`,{method:"POST",headers:{"content-type":d.type||"application/octet-stream"},body:d});m(T.text);let U=await ye("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:T.text,from:o,to:x,locale:n?"zh":"en"})});F(U.translated),Y("done"),y("text"),T.truncated&&V(a("\u6587\u4EF6\u8F83\u957F\uFF0C\u53EA\u7FFB\u8BD1\u4E86\u524D 6 \u4E07\u4E2A\u5B57\u7B26","Long document: only the first 60,000 characters were translated"))}catch(T){V(String(T?.message??T)),Y("idle")}},E=async()=>{V("");try{let d=await navigator.mediaDevices.getUserMedia({audio:!0}),T=new MediaRecorder(d);X.current=[],T.ondataavailable=U=>{U.data?.size>0&&X.current.push(U.data)},T.onstop=async()=>{ge(),d.getTracks().forEach(D=>D.stop()),oe(!1),Y("working");let U=new Blob(X.current,{type:T.mimeType||"audio/webm"});try{let{transcribe:D}=await Promise.resolve().then(()=>(Tr(),Cr)),W=await D(U);m(W),y("text"),Y("idle")}catch(D){V(String(D?.message??D)),Y("idle")}},H.current=T,T.start(),oe(!0),ie(0),J.current=setInterval(()=>ie(U=>U+1),1e3)}catch(d){let T=d?.name==="NotAllowedError"||d?.name==="SecurityError";V(T?a("\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650","No microphone permission"):String(d?.message??d))}},O=async()=>{if(v.trim()!=="")try{await ye("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"sentence",source:v,target:R,from:o,to:x})}),A(!0),await se()}catch(d){V(String(d?.message??d))}},K=async d=>{z(null),B(!0);try{let T=await ye("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:d,mode:"expand",locale:x==="zh"?"zh":"en"})});z(T.expand)}catch{z(null)}finally{B(!1)}},Q=async(d,T)=>{j(T);try{let U=await ye("/speak",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:d,accent:T})}),D=new Audio(`data:${U.mime};base64,${U.base64}`);D.onended=()=>j(""),D.onerror=()=>j(""),await D.play()}catch(U){j(""),V(String(U?.message??U))}},ce=async d=>{try{await ye("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"word",source:d.word,target:d.senses.map(T=>T.meaning).join("\uFF1B"),from:o,to:x})}),A(!0),await se()}catch(T){V(String(T?.message??T))}},pe=async d=>{try{await ye("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"remove",id:d})}),await se()}catch(T){V(String(T?.message??T))}},xe=async d=>{try{await navigator.clipboard.writeText(d)}catch{V(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C","Copy failed \u2014 select the text manually"))}};return p.createElement("div",{className:"cbt-page"},p.createElement("div",{className:"cbt-viewtabs",role:"tablist"},[["translate",a("\u7FFB\u8BD1","Translate")],["favorites",a("\u6536\u85CF\u672C","Saved")]].map(([d,T])=>p.createElement("button",{key:d,type:"button",role:"tab",className:"cbt-viewtab","data-cbt-view":d,"aria-selected":s===d?"true":"false",onClick:()=>i(d)},T,d==="favorites"&&de.length>0?` \xB7 ${de.length}`:""))),s==="translate"?p.createElement(p.Fragment,null,p.createElement("div",{className:"cbt-bar"},p.createElement("select",{className:"cbt-select",value:o,onChange:d=>c(d.target.value),"aria-label":a("\u6E90\u8BED\u8A00","Source language")},Mr.map(d=>p.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),p.createElement("button",{type:"button",className:"cbt-swap",onClick:l,title:a("\u4EA4\u6362\u8BED\u8A00","Swap"),"aria-label":a("\u4EA4\u6362\u8BED\u8A00","Swap")},"\u21C4"),p.createElement("select",{className:"cbt-select",value:x,onChange:d=>N(d.target.value),"aria-label":a("\u76EE\u6807\u8BED\u8A00","Target language")},Mr.filter(d=>d.id!=="auto").map(d=>p.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),p.createElement("span",{className:"cbt-spacer"}),p.createElement("div",{className:"cbt-tabs",role:"tablist"},["text","voice","file"].map(d=>p.createElement("button",{key:d,type:"button",role:"tab",className:"cbt-tab","data-cbt-tab":d,"aria-selected":u===d?"true":"false",onClick:()=>y(d)},d==="text"?a("\u6587\u5B57","Text"):d==="voice"?a("\u8BED\u97F3","Voice"):a("\u6587\u4EF6","File"))))),u==="text"?p.createElement("textarea",{className:"cbt-input","data-cbt-source":"true",placeholder:a("\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57\uFF0CCtrl / \u2318 + Enter \u7FFB\u8BD1","Type text to translate \u2014 Ctrl / \u2318 + Enter"),value:v,onChange:d=>m(d.target.value),onKeyDown:d=>{d.key==="Enter"&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),Me())}}):null,u==="voice"?p.createElement("div",{className:"cbt-voice"},p.createElement("button",{type:"button",className:"cbt-rec","data-cbt-record":fe?"on":"off","aria-label":fe?a("\u505C\u6B62\u5F55\u97F3","Stop recording"):a("\u5F00\u59CB\u5F55\u97F3","Start recording"),onClick:fe?()=>H.current?.stop():E},p.createElement("span",{className:"cbt-rec-dot"})),p.createElement("span",{className:"cbt-hint"},fe?`${String(Math.floor(he/60)).padStart(2,"0")}:${String(he%60).padStart(2,"0")} \xB7 ${a("\u518D\u70B9\u4E00\u4E0B\u7ED3\u675F","tap again to stop")}`:a("\u5F55\u97F3\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u5B8C\u6210\u540E\u586B\u8FDB\u6587\u5B57\u6846","Transcribed on this machine, then placed in the text box"))):null,u==="file"?p.createElement("label",{className:"cbt-drop"},p.createElement("input",{type:"file",accept:".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json","data-cbt-file":"true",onChange:d=>{let T=d.target.files?.[0];T&&b(T),d.target.value=""}}),p.createElement("span",{className:"cbt-drop-title"},a("\u9009\u62E9\u4E00\u4E2A\u6587\u6863","Pick a document")),p.createElement("span",{className:"cbt-hint"},a("PDF / DOCX / TXT / Markdown / HTML\uFF0C30 MB \u4EE5\u5185","PDF / DOCX / TXT / Markdown / HTML, up to 30 MB"))):null,Ne!==""?p.createElement("div",{className:"cbt-doc","data-cbt-doc":"true"},Ne):null,p.createElement("div",{className:"cbt-actions"},p.createElement("button",{type:"button",className:"cbt-btn cbt-btn-primary","data-cbt-translate":"true",disabled:we==="working",onClick:()=>{Me()}},we==="working"?a("\u7FFB\u8BD1\u4E2D\u2026","Translating\u2026"):a("\u7FFB\u8BD1","Translate")),p.createElement("span",{className:"cbt-hint"},v.trim()===""?"":a(`${v.trim().length} \u5B57\u7B26`,`${v.trim().length} chars`))),q!==null?p.createElement("div",{className:"cbt-dict","data-cbt-dict":"true"},p.createElement("div",{className:"cbt-dict-head"},p.createElement("span",{className:"cbt-dict-word"},q.word),q.phonetic?p.createElement("span",{className:"cbt-dict-phonetic"},q.phonetic):null,p.createElement("span",{className:"cbt-dict-play"},[["en-US",a("\u7F8E","US")],["en-GB",a("\u82F1","UK")]].map(([d,T])=>p.createElement("button",{key:d,type:"button",className:"cbt-speak","data-cbt-speak":d,"aria-label":`${a("\u6717\u8BFB","Pronounce")} ${T}`,onClick:()=>{Q(q.word,d)}},p.createElement("span",{className:"cbt-speak-icon","aria-hidden":"true"},_===d?"\u25A0":"\u25B6"),T)))),p.createElement("ul",{className:"cbt-dict-senses"},q.senses.map((d,T)=>p.createElement("li",{key:T,className:"cbt-dict-sense"},d.pos?p.createElement("span",{className:"cbt-dict-pos"},d.pos):null,p.createElement("span",{className:"cbt-dict-meaning"},d.meaning),d.example?p.createElement("div",{className:"cbt-dict-example"},d.example):null))),L?p.createElement("div",{className:"cbt-dict-loading"},a("\u6B63\u5728\u6269\u5C55\u8BCD\u6761\u2026","Loading word details\u2026")):null,S&&S.forms.length>0?p.createElement("div",{className:"cbt-dict-section","data-cbt-forms":"true"},p.createElement("div",{className:"cbt-dict-label"},a("\u8BCD\u5F62","Forms")),p.createElement("div",{className:"cbt-dict-chips"},S.forms.map((d,T)=>p.createElement("span",{className:"cbt-dict-chip",key:T},p.createElement("span",{className:"cbt-dict-chip-label"},d.label)," ",d.value)))):null,S&&(S.synonyms.length>0||S.antonyms.length>0)?p.createElement("div",{className:"cbt-dict-section"},S.synonyms.length>0?p.createElement("div",{className:"cbt-dict-row"},p.createElement("span",{className:"cbt-dict-label"},a("\u8FD1\u4E49","Synonyms")),p.createElement("span",{className:"cbt-dict-words"},S.synonyms.join(" \xB7 "))):null,S.antonyms.length>0?p.createElement("div",{className:"cbt-dict-row"},p.createElement("span",{className:"cbt-dict-label"},a("\u53CD\u4E49","Antonyms")),p.createElement("span",{className:"cbt-dict-words"},S.antonyms.join(" \xB7 "))):null):null,S&&S.phrases.length>0?p.createElement("div",{className:"cbt-dict-section","data-cbt-phrases":"true"},p.createElement("div",{className:"cbt-dict-label"},a("\u5E38\u89C1\u642D\u914D","Phrases")),p.createElement("ul",{className:"cbt-dict-phrases"},S.phrases.map((d,T)=>p.createElement("li",{key:T},p.createElement("span",{className:"cbt-dict-phrase-en"},d.en),d.zh?p.createElement("span",{className:"cbt-dict-phrase-zh"},d.zh):null)))):null,S&&S.mnemonic?p.createElement("div",{className:"cbt-dict-section"},p.createElement("div",{className:"cbt-dict-label"},a("\u8BB0\u5FC6","Memory hook")),p.createElement("div",{className:"cbt-dict-mnemonic"},S.mnemonic)):null,q.note?p.createElement("div",{className:"cbt-dict-note"},q.note):null,p.createElement("div",{className:"cbt-actions"},p.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{xe(q.word+" "+q.senses.map(d=>d.meaning).join("\uFF1B"))}},a("\u590D\u5236","Copy")),p.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{ce(q)}},P?a("\u5DF2\u6536\u85CF","Saved"):a("\u6536\u85CF","Save")))):null,R!==""?p.createElement("div",{className:"cbt-result","data-cbt-result":"true"},p.createElement("div",{className:"cbt-result-text"},R),p.createElement("div",{className:"cbt-actions"},p.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{xe(R)}},a("\u590D\u5236","Copy")),p.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{O()}},P?a("\u5DF2\u6536\u85CF","Saved"):a("\u6536\u85CF","Save")),typeof r?.setDraft=="function"?p.createElement("button",{type:"button",className:"cbt-btn","data-cbt-fill":"true",onClick:()=>r.setDraft({text:R,references:[]})},a("\u586B\u5165\u8F93\u5165\u6846","Put in composer")):null)):null,p.createElement("div",{className:"cbt-engine","data-cbt-engine":"true"},h===null?"":h.local?`${a("\u672C\u673A\u6A21\u578B","Local")} \xB7 ${h.model||"local"}${h.last?` \xB7 ${h.last.ms} ms`:""}`:`${a("\u5BBF\u4E3B\u6A21\u578B","Host model")}${h.last?` \xB7 ${h.last.ms} ms`:""}`),Z!==""?p.createElement("p",{className:"cbt-error","data-cbt-error":"true"},Z):null):p.createElement(p.Fragment,null,p.createElement("div",{className:"cbt-bar"},[["all",a("\u5168\u90E8","All")],["word",a("\u5355\u8BCD","Words")],["sentence",a("\u53E5\u5B50","Sentences")]].map(([d,T])=>p.createElement("button",{key:d,type:"button",className:"cbt-chip","data-cbt-kind":d,"aria-pressed":ve===d?"true":"false",onClick:()=>{Ie(d),se(d,me)}},T)),p.createElement("span",{className:"cbt-spacer"}),p.createElement("a",{className:"cbt-link",href:`${pt}/favorites/export`,download:"favorites.md"},a("\u5BFC\u51FA Markdown","Export Markdown"))),p.createElement("input",{className:"cbt-search","data-cbt-search":"true",placeholder:a("\u641C\u7D22\u6536\u85CF","Search saved"),value:me,onChange:d=>{g(d.target.value),se(ve,d.target.value)}}),p.createElement("div",{className:"cbt-list","data-cbt-favorites":"true"},de.length===0?p.createElement("p",{className:"cbt-empty"},a("\u8FD8\u6CA1\u6709\u6536\u85CF\u3002\u7FFB\u8BD1\u540E\u70B9\u300C\u6536\u85CF\u300D\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002","Nothing saved yet \u2014 translate something and press Save.")):de.map(d=>p.createElement("div",{className:"cbt-item",key:d.id,"data-cbt-item":d.id},p.createElement("div",{className:"cbt-item-source"},d.source),d.target?p.createElement("div",{className:"cbt-item-target"},d.target):null,p.createElement("div",{className:"cbt-item-foot"},p.createElement("span",{className:"cbt-item-kind"},d.kind==="word"?a("\u5355\u8BCD","Word"):a("\u53E5\u5B50","Sentence")),p.createElement("button",{type:"button",className:"cbt-item-remove",onClick:()=>{pe(d.id)},"aria-label":a("\u5220\u9664","Delete")},"\u2715"))))),Z!==""?p.createElement("p",{className:"cbt-error"},Z):null))}var Pr=`
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
`;function Ir({name:e}){let t={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return w.createElement("svg",{...t},w.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),w.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),w.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),w.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return w.createElement("svg",{...t},w.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),w.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),w.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),w.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return w.createElement("svg",{...t},w.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),w.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),w.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"translate":return w.createElement("svg",{...t},w.createElement("path",{d:"M2.4 4.2h6M5.4 4.2v1.2c0 2.6-1.4 4.7-3.4 5.6"}),w.createElement("path",{d:"M3.9 8.4c.9 1.4 2.1 2.4 3.5 2.9"}),w.createElement("path",{d:"M9.4 13.6 11.6 8l2.2 5.6M10.2 11.9h2.8"}));case"slides":return w.createElement("svg",{...t},w.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),w.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return w.createElement("svg",{...t},w.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),w.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),w.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),w.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function Gn(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let t=e.closest('[data-composer-card="true"]');if(t)return t}return document.querySelector('[data-composer-card="true"]')}function Vn({t:e,locale:t,inputActions:r,onClose:n}){return w.createElement(Pe,{title:e("sheet.translate.title"),hint:e("sheet.translate.hint"),onClose:n,t:e,wide:!0},w.createElement(Er,{t:e,locale:t,inputActions:r}))}function qr({inputActions:e,t,locale:r,sessionId:n=""}){let a=typeof e?.setDraft=="function",[s,i]=w.useState(!1),[o,c]=w.useState(null),[x,N]=w.useState(null),u=w.useRef(null),y=w.useRef(null),[v,m]=w.useState(null);w.useEffect(()=>{m(Gn())},[]);let R=w.useCallback(()=>{let z=u.current?.getBoundingClientRect();z!=null&&N({right:Math.max(8,Math.round(window.innerWidth-z.right)),bottom:Math.max(8,Math.round(window.innerHeight-z.top)+8)})},[]);w.useLayoutEffect(()=>{s&&R()},[s,R]),w.useEffect(()=>{if(!s)return;let z=_=>{let j=_.target;j instanceof Node&&y.current?.contains(j)!==!0&&u.current?.contains(j)!==!0&&i(!1)},L=_=>{_.key==="Escape"&&(_.preventDefault(),_.stopPropagation(),i(!1),u.current?.focus?.())},B=()=>i(!1);return document.addEventListener("pointerdown",z,!0),document.addEventListener("keydown",L,!0),window.addEventListener("resize",B),window.addEventListener("scroll",B,!0),()=>{document.removeEventListener("pointerdown",z,!0),document.removeEventListener("keydown",L,!0),window.removeEventListener("resize",B),window.removeEventListener("scroll",B,!0)}},[s]);let F=z=>{if(typeof z.sheet=="string"){i(!1),c(z.sheet);return}let L=lt(z.prompt,typeof r=="function"?r():"zh");try{e.setDraft({text:L,references:[]})}catch{try{e.setDraft(L)}catch{}}i(!1),u.current?.focus?.()},h=t("quick.label"),C=typeof r=="function"?r():"zh",q=w.createElement("button",{ref:u,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":s?"true":"false","aria-label":t("quick.aria"),title:t(a?"quick.aria":"quick.disabled"),disabled:!a,onMouseDown:z=>z.preventDefault(),onClick:()=>i(z=>!z)},w.createElement(Ir,{name:"grid"}),w.createElement("span",{className:"cbp-more-label"},h)),I=s&&x!==null?(0,dt.createPortal)(w.createElement("div",{ref:y,className:"cbp-quick-panel",role:"menu","aria-label":t("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${x.right}px`,bottom:`${x.bottom}px`}},w.createElement("div",{className:"cbp-quick-head"},w.createElement("span",{className:"cbp-quick-title"},t("quick.title")),w.createElement("span",{className:"cbp-quick-hint"},t("quick.hint"))),w.createElement("div",{className:"cbp-quick-grid"},gr.map(z=>w.createElement("button",{key:z.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":z.id,onClick:()=>F(z)},w.createElement("span",{className:"cbp-quick-icon"},w.createElement(Ir,{name:z.icon})),w.createElement("span",{className:"cbp-quick-name"},lt({zh:z.zh,en:z.en},C)))))),document.body):null,S=z=>{typeof z=="string"&&z.trim()!==""&&vr(e,z),c(null)};return w.createElement(w.Fragment,null,w.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),v!==null?(0,dt.createPortal)(q,v):null,I,o==="transcribe"?w.createElement(kr,{t,locale:r,onClose:()=>c(null),onFill:S}):null,o==="write"?w.createElement(Sr,{t,locale:r,sessionId:n,onClose:()=>c(null),onFill:S}):null,o==="deck"?w.createElement(Nr,{t,locale:r,sessionId:n,onClose:()=>c(null)}):null,o==="video"?w.createElement(zr,{t,onClose:()=>c(null),onFill:S}):null,o==="translate"?w.createElement(Vn,{t,locale:r,inputActions:e,onClose:()=>c(null)}):null)}var Lr=`
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
`;var Or="/api/chatbox-pet/boost",Fr=4e3,Jn=12e4,Yn=24,Xn=8e3,_r=25e3;function Br(e){return{set:typeof e?.set=="function"?e.set:(t,r)=>setTimeout(t,r),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function ht(e){let t=typeof e=="string"?e:"";return t.length>Fr?t.slice(0,Fr):t}function Dr(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function Ae(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function ut(e){if(!Array.isArray(e))return[];let t=[];for(let r of e){if(r===null||typeof r!="object")continue;let n=typeof r.id=="string"?r.id.trim():"",a=Number(r.count);n===""||!Number.isFinite(a)||a<=0||t.push({id:n,label:typeof r.label=="string"&&r.label.trim()!==""?r.label.trim():n,count:Math.round(a)})}return t}function je(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function ae(e,t,r){let n=new Error(typeof t=="string"&&t!==""?t:e);return n.code=e,r!==void 0&&(n.cause=r),n}function Ar(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",r=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return r===void 0?{code:t}:{code:t,message:r}}function Zn(e){let t=[],r=e;for(;;){let n=/(?:\r?\n){2}/.exec(r);if(n===null)break;t.push(r.slice(0,n.index)),r=r.slice(n.index+n[0].length)}return{frames:t,rest:r}}function jr(e){let t=[];for(let r of e.split(`
`)){let n=r.trim();n===""||n.startsWith(":")||n.startsWith("data:")&&t.push(n.slice(5).trimStart())}if(t.length===0)return null;try{let r=JSON.parse(t.join(`
`));return r!==null&&typeof r=="object"&&Array.isArray(r)===!1?r:null}catch{return null}}async function bt(e){try{return await e.json()}catch{return null}}function ft(e,t){if(e===null||typeof e!="object")throw ae("host",void 0,t);if(e.ok!==!0){let a=typeof e.error?.message=="string"?e.error.message.trim():"";throw ae(typeof e.error?.code=="string"?e.error.code:"host",a===""?void 0:a)}let r=e.result,n=typeof r?.prompt=="string"?r.prompt.trim():"";if(n==="")throw ae("empty");return{prompt:n,mode:r.mode==="compose"?"compose":"improve",sources:ut(r.sources),elapsedMs:Number.isFinite(r.elapsedMs)?Math.max(0,Number(r.elapsedMs)):null,cached:r.cached===!0}}async function ea(e){let{draft:t,mode:r,locale:n,signal:a,onEvent:s,idleMs:i=_r,sessionId:o=""}=e,c=o===""?{}:{sessionId:o},x=typeof e.fetch=="function"?e.fetch:globalThis.fetch,N=Br(e.timers),u=new AbortController,y=()=>u.abort();a!==void 0&&(a.aborted?u.abort():a.addEventListener("abort",y,{once:!0}));let v=!1,m=null,R=()=>{m!==null&&N.clear(m),m=N.set(()=>{v=!0,u.abort()},i)},F=!1;try{R();let h;try{h=await x(Or,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:ht(t),mode:r,locale:n,stream:!0,...c}}),signal:u.signal})}catch(z){throw v?ae("timeout",void 0,z):je(z)?z:ae("network",void 0,z)}if(v)throw ae("timeout");if(h===null||typeof h!="object")throw ae("host");if(h.ok!==!0){let z=await bt(h);if(h.status>=400)throw ae("host",void 0,h.status);let L=ft(z,h.status);s({type:"replace",text:L.prompt}),s({type:"done",result:L});return}let C=typeof h.headers?.get=="function"?String(h.headers.get("content-type")??""):"";if(h.body===null||h.body===void 0||typeof h.body.getReader!="function"||!C.includes("text/event-stream")){let z=ft(await bt(h),h.status);s({type:"replace",text:z.prompt}),s({type:"done",result:z});return}let q=h.body.getReader(),I=new TextDecoder,S="";for(;!F;){let z;try{z=await q.read()}catch(B){throw v?ae("timeout",void 0,B):je(B)?B:ae("stream",void 0,B)}if(z.done===!0)break;R(),S+=I.decode(z.value,{stream:!0});let L=Zn(S);S=L.rest;for(let B of L.frames){let _=jr(B);if(_!==null&&s(_)==="stop"){F=!0;break}}}if(!F){let z=S.trim();if(z!==""){let L=jr(z);L!==null&&s(L)}}if(F)try{await q.cancel()}catch{}}finally{m!==null&&N.clear(m),a!==void 0&&a.removeEventListener("abort",y)}}async function ta(e){let{draft:t,mode:r,locale:n,signal:a,sessionId:s=""}=e,i=typeof e.fetch=="function"?e.fetch:globalThis.fetch,o;try{o=await i(Or,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:ht(t),mode:r,locale:n,stream:!1,...s===""?{}:{sessionId:s}}}),signal:a})}catch(c){throw je(c)?c:ae("network",void 0,c)}if(o===null||typeof o!="object")throw ae("host");if(o.ok!==!0&&o.status>=400)throw ae("host",void 0,o.status);return ft(await bt(o),o.status)}function ra(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,r=typeof e.now=="function"?e.now:()=>Date.now(),n=Br(e.timers),a=Number.isFinite(e.idleMs)?Number(e.idleMs):_r,s=Number.isFinite(e.undoMs)?Number(e.undoMs):Xn,i=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):Jn,o=new WeakMap,c=new WeakMap,x=new WeakMap,N=new WeakMap,u=new WeakMap,y="",v=new Set,m=new Map,R=Dr(),F=Ae(null),h=null,C=0,q=0,I=null,S=null,z=()=>{for(let l of[...v])try{l()}catch(b){console.error("[prompt-boost] a store listener failed:",b)}},L=l=>l!=null&&(typeof l=="object"||typeof l=="function");function B(l){let b=L(l)?l:S;if(!L(b))return R;let E=o.get(b);return E===void 0&&(E=Dr(),o.set(b,E)),E}function _(l,b){let E=L(l)?l:S,K={...B(E),...b};return L(E)?o.set(E,K):R=K,z(),K}function j(l){let b=L(l)?l:S;return L(b)?x.get(b)??Ae(null):F}function we(l){return L(l)?l:S}function Y(l){let b=L(l)?l:S;if(!L(b))return"default";let E=c.get(b);return E===void 0&&(C+=1,E=`s${C}`,c.set(b,E)),E}function Z(l){return`prompt-boost-panel-${Y(l)}`}function V(l,b,E){return`${Y(l)}\0${b}\0${E}`}function Ne(l){let b=m.get(l);return b===void 0?null:r()-b.at>i?(m.delete(l),null):(m.delete(l),m.set(l,b),b.result)}function ze(l,b){for(m.delete(l),m.set(l,{at:r(),result:b});m.size>Yn;){let E=m.keys().next();if(E.done===!0)break;m.delete(E.value)}}function fe(){if(I===null)return;let l=I;I=null;try{l.controller.abort()}catch{}}function oe(l){let b=L(l)?l:S,E=L(b)?N.get(b):h;E!=null&&n.clear(E),L(b)?N.delete(b):h=null}function he(l){oe(l);let b=null;b=n.set(()=>{let O=B(l);O.undo!==null&&_(l,{undo:null,phase:O.phase==="applied"?"idle":O.phase,applied:"",prompt:O.phase==="applied"?"":O.prompt,sources:O.phase==="applied"?[]:O.sources})},s);let E=L(l)?l:S;L(E)?N.set(E,b):h=b}function ie(l,b,E){let O=we(l),K=Ae(j(l)),Q=!1;if(L(O)&&typeof O.setDraft=="function")try{O.setDraft({text:b.prompt,references:[]}),Q=!0}catch{try{O.setDraft(b.prompt),Q=!0}catch{Q=!1}}if(!Q){_(l,{phase:"error",mode:b.mode,prompt:b.prompt,sources:b.sources,elapsedMs:b.elapsedMs,cached:b.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}_(l,{phase:"applied",mode:b.mode,prompt:b.prompt,applied:b.prompt,sources:b.sources,elapsedMs:b.elapsedMs,cached:b.cached===!0,error:null,undo:{draft:K,at:r()},expanded:!1}),he(l),ze(E,b),te.play("boostDone")}async function de(l,b,E){let{draft:O,mode:K,locale:Q,key:ce,sessionId:pe}=E,xe=!1,d=!1,T=()=>I===b&&b.controller.signal.aborted===!1,U=D=>{if(!T())return"stop";if(xe=!0,D.type==="sources"){let W=B(l);_(l,{sources:ut(D.sources),mode:D.mode==="compose"?"compose":W.mode});return}if(D.type==="delta"){if(typeof D.text!="string"||D.text==="")return;let W=B(l);_(l,{phase:"streaming",prompt:W.prompt+D.text});return}if(D.type==="replace"){if(typeof D.text!="string")return;let W=B(l),He=W.phase==="ready"||D.text===""?W.phase:"streaming";_(l,{prompt:D.text,phase:He});return}if(D.type==="done"){d=!0;let W={prompt:typeof D.result?.prompt=="string"?D.result.prompt.trim():B(l).prompt.trim(),mode:D.result?.mode==="compose"?"compose":K,sources:ut(D.result?.sources??B(l).sources),elapsedMs:Number.isFinite(D.result?.elapsedMs)?Math.max(0,Number(D.result.elapsedMs)):null,cached:D.result?.cached===!0};return W.prompt===""?(_(l,{phase:"error",error:{code:"empty"}}),te.play("boostFail"),"stop"):(ie(l,W,ce),"stop")}if(D.type==="error"){d=!0;let W=typeof D.message=="string"&&D.message.trim()!==""?D.message.trim():void 0;return _(l,{phase:"error",error:W===void 0?{code:"unknown"}:{code:"host",message:W}}),"stop"}};try{if(await ea({draft:O,mode:K,locale:Q,sessionId:pe,signal:b.controller.signal,onEvent:U,fetch:t,timers:n,idleMs:a}),d)return;if(xe)throw ae("stream");await Te(l,b,{draft:O,mode:K,locale:Q,key:ce,sessionId:pe})}catch(D){if(b.controller.signal.aborted||je(D)||!T())return;if(xe){_(l,{phase:"error",error:Ar(D)}),te.play("boostFail");return}try{await Te(l,b,{draft:O,mode:K,locale:Q,key:ce,sessionId:pe})}catch(W){if(b.controller.signal.aborted||je(W)||!T())return;_(l,{phase:"error",error:Ar(W)}),te.play("boostFail")}}finally{I===b&&(I=null)}}async function Te(l,b,E){let O=await ta({draft:E.draft,mode:E.mode,locale:E.locale,signal:b.controller.signal,fetch:t,sessionId:E.sessionId??""});I!==b||b.controller.signal.aborted||ie(l,O,E.key)}function ve(l,b){let E=typeof b=="string"?b:"";E!==""&&(y=E,L(l)&&u.set(l,E))}function Ie(l){return L(l)?u.get(l)??y:y}function me(l,b){let E=typeof b?.draft=="string"?b.draft:"",O=Array.isArray(b?.occurrences)?b.occurrences:[],K=j(l);if(K.text===E&&K.references.length===O.length)return;let Q={text:E,references:O.map(pe=>({...pe}))},ce=L(l)?l:S;L(ce)?x.set(ce,Q):F=Q}function g(l,b={}){L(l)&&(S=l);let E=b.locale==="en"?"en":"zh",O=b.force===!0,K=j(l),Q=ht(K.text),ce=Q.trim()===""?"compose":"improve",pe=V(l,ce,Q);if(fe(),oe(l),!O){let T=Ne(pe);if(T!==null){ie(l,{...T,cached:!0},pe);return}}q+=1;let xe={seq:q,actions:l,controller:new AbortController};I=xe;let d=B(l);_(l,{phase:"running",mode:ce,seed:Q,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:d.phase==="idle"&&d.undo===null?!1:d.expanded}),te.play("boostStart"),de(l,xe,{draft:Q,mode:ce,locale:E,key:pe,sessionId:Ie(l)})}function P(l,b={}){g(l,{locale:b.locale,force:!0})}function A(l){let b=B(l);if(b.phase!=="ready")return!1;let E=b.prompt.trim();if(E==="")return!1;let O=we(l);if(!L(O)||typeof O.setDraft!="function")return _(l,{phase:"error",error:{code:"apply"}}),!1;let K=Ae(j(l)),Q=!1;try{O.setDraft({text:E,references:[]}),Q=!0}catch{try{O.setDraft(E),Q=!0}catch{Q=!1}}return Q?(oe(l),_(l,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:K,at:r()},expanded:!1}),he(l),!0):(_(l,{phase:"error",error:{code:"apply"}}),!1)}function H(l){let b=B(l);if(b.undo===null)return!1;let E=we(l),O=Ae(b.undo.draft),K=!1;if(L(E)&&typeof E.setDraft=="function")try{E.setDraft({text:O.text,references:O.references}),K=!0}catch{try{E.setDraft(O.text),K=!0}catch{K=!1}}return oe(l),_(l,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),K}function X(l){B(l).expanded!==!1&&_(l,{expanded:!1})}function J(l){let b=B(l);b.phase==="idle"&&b.undo===null||b.expanded===!0||_(l,{expanded:!0})}function ge(l){B(l).expanded===!0?X(l):J(l)}function se(l){let b=L(l)?l:S;I!==null&&I.actions===b&&fe(),oe(l),_(l,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Me(l,b){let E=B(l);E.phase==="streaming"&&(typeof b!="string"||b===E.prompt||_(l,{prompt:b}))}return{subscribe(l){return typeof l!="function"?()=>{}:(v.add(l),()=>{v.delete(l)})},getState:B,panelId:Z,sessionKey:Y,setDraftMirror:me,setSessionId:ve,start:g,retry:P,apply:A,undo:H,expand:J,collapse:X,toggle:ge,dismiss:se,edit:Me}}var We=ra();var $r=`
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
`;var na="@local/chatbox-pet",Hr=["slots","locale"];function Ur(){return(0,Wr.useSyncExternalStore)(le.subscribe,le.getSnapshot,le.getSnapshot)}function Kr(e){let t=e.locale.bind(ke),r=e.locale.bind(De);e.effect(()=>e.locale.register(ke,{zh:kt,en:St}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(De,{zh:br,en:fr}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let i=document.querySelector('style[data-plugin="chatbox-pet"]');i!==null&&i.remove();let o=document.createElement("style");return o.setAttribute("data-plugin","chatbox-pet"),o.textContent=`${Xt}
${$r}
${tr}
${Lr}
${Rr}
${Pr}`,document.head.appendChild(o),()=>{o.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{le.refresh().then(i=>{wt(i?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let i=()=>te.unlock();return window.addEventListener("pointerdown",i,{capture:!0}),window.addEventListener("keydown",i,{capture:!0}),()=>{window.removeEventListener("pointerdown",i,{capture:!0}),window.removeEventListener("keydown",i,{capture:!0})}},"chatbox-pet: sound unlock");let n=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:na,order:1,label:()=>t("label"),locale:ke,inject:i=>({sessionId:i})},i=>{if(Ur().pet===!1)return null;let c=typeof i?.sessionId=="string"&&i.sessionId!==""?i.sessionId:typeof i?.session?.id=="string"?i.session.id:"";return c===""?null:be.createElement(Yt,{sessionId:c,t,useInput:i?.useInput,locale:n})}));let a=i=>o=>Ur().boost===!1?null:i(o);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>r("button.label"),locale:De},a(i=>be.createElement(sr,{...i,store:We,t:r,locale:n})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>t("merge.label")(2),locale:ke,inject:i=>({sessionId:i})},i=>{let o=typeof i?.sessionId=="string"?i.sessionId:"";return o===""?null:be.createElement(ur,{sessionId:o,sessions:e.get("sessions"),t,locale:n,onNotice:c=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:o,text:c,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:De},a(i=>be.createElement(mr,{...i,store:We,t:r,locale:n})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>t("quick.label"),locale:ke,inject:i=>({sessionId:i})},i=>be.createElement(qr,{inputActions:i?.inputActions,sessionId:typeof i?.sessionId=="string"?i.sessionId:"",t,locale:n})));function s({sessionId:i,session:o}){let c=typeof i=="string"&&i!==""?i:typeof o?.id=="string"?o.id:"";return be.useEffect(()=>{c!==""&&We.setSessionId(null,c)},[c]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:ke,inject:i=>({sessionId:i})},i=>be.createElement(s,{sessionId:i?.sessionId,session:i?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:ke},()=>be.createElement(rr,{t})))}
		return module.exports;
	}
});
