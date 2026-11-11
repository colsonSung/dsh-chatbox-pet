window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var _r=Object.create;var qe=Object.defineProperty;var jr=Object.getOwnPropertyDescriptor;var Or=Object.getOwnPropertyNames;var Br=Object.getPrototypeOf,$r=Object.prototype.hasOwnProperty;var Ur=(e,t)=>{for(var r in t)qe(e,r,{get:t[r],enumerable:!0})},dt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Or(t))!$r.call(e,i)&&i!==r&&qe(e,i,{get:()=>t[i],enumerable:!(n=jr(t,i))||n.enumerable});return e};var ie=(e,t,r)=>(r=e!=null?_r(Br(e)):{},dt(t||!e||!e.__esModule?qe(r,"default",{value:e,enumerable:!0}):r,e)),Wr=e=>dt(qe({},"__esModule",{value:!0}),e);var Qn={};Ur(Qn,{apply:()=>Dr,inject:()=>Lr});module.exports=Wr(Qn);var te=ie(require("react"),1);var Ue="chatboxPet.sound",ut=!0,Hr=.3,Qr=1e3,Gr=7,$e={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},Kn=Object.freeze(Object.keys($e)),Kr={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function bt(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":Kr[e]}function ke(e){try{return e?.getItem(Ue)==="off"?"off":"on"}catch{return"on"}}function ft(e){ut=e!==!1}function We(e,t){try{e?.setItem(Ue,t==="off"?"off":"on")}catch{}}function ht(e){let t=ke(e)==="on"?"off":"on";return We(e,t),t}function pe(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function Vr(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Yr(e){let t=e.now??(()=>Date.now()),r=null,n=null,i=!1,s=new Map,o=new Map,a=0;function l(){if(!i)try{let p=e.createContext();if(p==null)return;let m=p.createGain();if(m.gain.value=Hr,m.connect(p.destination),p.state==="suspended"&&typeof p.resume=="function"){let w=p.resume();w!==void 0&&typeof w.catch=="function"&&w.catch(()=>{})}r=p,n=m,i=!0}catch{r=null,n=null,i=!1}}function g(p,m,w){if(m<=1)return 0;if(typeof w=="string"&&w!=="")return Vr(w)%m;let f=(o.get(p)??0)%m;return o.set(p,f+1),f}function k(p,m){if(e.getPref()!=="on"||!i||r===null||n===null||!e.isVisible())return!1;let w=$e[p];if(w===void 0)return!1;let f=t(),C=s.get(p);if(C!==void 0&&f-C<Qr)return!1;s.set(p,f);let I=Array.isArray(w.variants)?w.variants:[];if(I.length===0)return!1;let h=I[g(p,I.length,m)];a=(a+1)%7;let v=(a-3)*(Gr/3);try{return Jr(r,n,h,v),!0}catch{return!1}}return{play:k,unlock:l,isUnlocked:()=>i,recipeNames:()=>Object.keys($e)}}function Jr(e,t,r,n){let i=e.currentTime;for(let s of r.notes){let o=i+s.at,a=e.createOscillator(),l=e.createGain();a.type=s.type,a.frequency.setValueAtTime(s.freq,o),typeof s.slideTo=="number"&&a.frequency.exponentialRampToValueAtTime(s.slideTo,o+s.dur),n!==0&&typeof a.detune=="object"&&a.detune!==null&&a.detune.setValueAtTime(n,o),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(s.level,o+.008),l.gain.exponentialRampToValueAtTime(1e-4,o+s.dur),a.connect(l),l.connect(t),a.start(o),a.stop(o+s.dur+.02)}}function Zr(){return{getPref:()=>{let e=pe()?.getItem(Ue);return e==="on"||e==="off"?e:ut?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var K=Yr(Zr());var Pr=require("react");var se="chatboxPet",mt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","sheet.close":"\u5173\u95ED","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,t,r)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${t} \xB7 \u65F6\u957F ${Math.round(r)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},gt={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","sheet.close":"Close","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,t,r)=>`${e} segments \xB7 ${t} \xB7 ${Math.round(r)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var N=ie(require("react"),1);var Xr=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],en={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},yt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],He={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},Jn=[...yt.map(e=>e.id),"fallback"];function Qe(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function wt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function xt(e){let t=wt(e);if(t==="")return null;for(let r of Xr){let n=/^[a-z ]+$/.test(r),s=(n?new RegExp(`(^|[^a-z])${Qe(r).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(Qe(r))).exec(t);if(s===null)continue;let o=s.index+(n?s[1].length:0),a=o+(n?r.replace(/ /g," ").length:r.length),l=`${t.slice(0,o)} ${t.slice(a)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:r,rest:l}}return null}function tn(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function rn(e){let t=wt(e);if(t==="")return"fallback";for(let r of yt){for(let n of r.zh)if(t.includes(n))return r.id;for(let n of r.en)if(new RegExp(`(^|[^a-z])${Qe(n).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return r.id}return"fallback"}function kt(e,t){let r=Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[];return r.length===0?"":r[tn(t)%r.length]}function nn(e,t={}){let r=He[e]??He.fallback,n=t.locale==="en"?"en":"zh",i=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:He[e]===void 0?"fallback":e,clip:r.clip,sound:r.sound,line:kt(r[n],i)}}function vt(e,t="zh"){let r=String(e??"");return/[\u4e00-\u9fff]/.test(r)?"zh":/[a-z]/i.test(r)||t==="en"?"en":"zh"}function St(e={}){let t=e.locale==="en"?"en":"zh";return kt(en[t],e.seed??"wake")}function Nt(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),r=Number.isFinite(e.debounceMs)?e.debounceMs:700,n=Number.isFinite(e.holdMs)?e.holdMs:15e3,i=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,s=!1,o="",a="",l=0,g=0;function k(w){let f=xt(w);return f===null?s?(s=!1,o="",a="",{kind:"off"}):null:(l=t(),s?null:(s=!0,o=f.wake,a=f.rest,l=t(),g=0,{kind:"wake",wake:f.wake,digest:f.rest}))}function p(w,f={}){if(!s)return null;let C=xt(w);if(C===null)return s=!1,{kind:"off"};let I=`${C.wake}\0${C.rest}`;if(I===a)return null;let h=t(),v=h-g;if(v<i)return{kind:"cooldown",retryInMs:i-v};a=I,g=h,l=h;let q=rn(C.rest);return{kind:"reply",...nn(q,{...f,seed:I}),digest:I}}function m(){return!s||t()-l<n?null:(s=!1,o="",a="",{kind:"off"})}return{observe:k,settle:p,expire:m,isActive:()=>s,debounceMs:r,holdMs:n,wakeWord:()=>o}}var D=ie(require("react"),1),Dt=require("react-dom");var Ct=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Pe=60;function zt(e,t){let r=t==="en"?"en":"zh";return typeof e?.[r]=="string"?e[r]:""}function ve(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=Pe?t:r.slice(0,Pe).join("")}function Rt(e,t,r,n=8){let s=Number.isFinite(t?.width)?t.width:0,o=Number.isFinite(t?.height)?t.height:0,a=Number.isFinite(r?.width)?r.width:0,l=Number.isFinite(r?.height)?r.height:0,g=(Number.isFinite(e?.right)?e.right:0)-s;g<8&&(g=Number.isFinite(e?.left)?e.left:8);let k=(Number.isFinite(e?.top)?e.top:0)-o-n;k<8&&(k=(Number.isFinite(e?.bottom)?e.bottom:0)+n);let p=Math.max(8,a-s-8),m=Math.max(8,l-o-8);return{left:Math.min(Math.max(g,8),p),top:Math.min(Math.max(k,8),m)}}var Ge=["topic","reminder","recall","nudge","encourage","tease","chitchat"],Mt={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Tt=9e3,on=24e4,Ke=.05;function Et(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<on)return!1;let r=Number.isFinite(e.chance)?e.chance:Ke;return(typeof e.random=="function"?e.random:Math.random)()<r}function It(e,t){let r=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[r]??""}function qt(e){return Mt[e]??Mt.chitchat}async function Pt(e={}){let t=typeof e.fetch=="function"?e.fetch:(...r)=>globalThis.fetch(...r);try{let r=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!r.ok)return null;let n=await r.json();if(n?.ok!==!0)return null;let i=n.result;return typeof i?.text!="string"||i.text.trim()===""?null:{kind:Ge.includes(i.kind)?i.kind:"chitchat",text:i.text.trim(),quote:typeof i?.quote=="string"?i.quote:"",item:typeof i?.item=="string"?i.item:"",source:typeof i?.source?.label=="string"?i.source:null,sources:Array.isArray(i?.sources)?i.sources:[]}}catch{return null}}var Lt=268;function At({anchor:e,locale:t,onSay:r,onAction:n,onQuip:i,recent:s,onForget:o,onClose:a,t:l}){let g=D.useRef(null),k=D.useRef(null),[p,m]=D.useState(""),[w,f]=D.useState(()=>({left:0,top:0,ready:!1}));D.useLayoutEffect(()=>{let h=g.current;if(h===null)return;let v=h.getBoundingClientRect().height,q=Rt(e,{width:Lt,height:v},{width:window.innerWidth,height:window.innerHeight});f({...q,ready:!0})},[e]),D.useEffect(()=>{let h=k.current;h!==null&&typeof h.focus=="function"&&h.focus()},[]),D.useEffect(()=>{let h=q=>{let T=g.current;T!==null&&q.target instanceof Node&&T.contains(q.target)||a()},v=q=>{q.key==="Escape"&&(q.preventDefault(),q.stopPropagation(),a())};return document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",v,!0),()=>{document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",v,!0)}},[a]);let C=()=>{let h=ve(p);h!==""&&(r(h),a())},I={left:`${Math.round(w.left)}px`,top:`${Math.round(w.top)}px`,width:`${Lt}px`,visibility:w.ready?"visible":"hidden"};return(0,Dt.createPortal)(D.createElement("div",{ref:g,className:"cbp-menu",style:I,role:"menu","aria-label":l("menu.title"),"data-cbp-menu":"true",onContextMenu:h=>h.preventDefault()},D.createElement("div",{className:"cbp-menu-say"},D.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},l("menu.say")),D.createElement("div",{className:"cbp-menu-row"},D.createElement("input",{id:"cbp-menu-say-input",ref:k,className:"cbp-menu-input",type:"text",value:p,maxLength:Pe,placeholder:l("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:h=>m(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),h.stopPropagation(),C())}}),D.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:ve(p)==="",onClick:C},l("menu.saySubmit")))),s.length===0?null:D.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},D.createElement("span",{className:"cbp-menu-label"},l("menu.recent"),D.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:o},l("menu.clear"))),D.createElement("div",{className:"cbp-menu-recent-list"},s.slice(0,8).map(h=>D.createElement("button",{key:`${h.text}-${h.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":h.text,title:h.text,onClick:()=>{r(h.text),a()}},h.text)))),D.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},D.createElement("span",{className:"cbp-menu-label"},l("menu.quip")),D.createElement("div",{className:"cbp-menu-grid"},Ge.map(h=>D.createElement("button",{key:h,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":h,onClick:()=>{i(h),a()}},It(h,t))))),D.createElement("div",{className:"cbp-menu-actions"},D.createElement("span",{className:"cbp-menu-label"},l("menu.action")),D.createElement("div",{className:"cbp-menu-grid"},Ct.map(h=>D.createElement("button",{key:h.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":h.clip,title:h.clip,onClick:()=>{n(h.clip),a()}},zt(h,t))))),D.createElement("p",{className:"cbp-menu-hint"},l("menu.hint"))),document.body)}var Ve="/api/chatbox-pet/said",Ft="chatboxPet.said";function Je(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=60?t:r.slice(0,60).join("")}function an(e,t,r=Date.now()){let n=Je(t),i=Array.isArray(e)?e.filter(o=>typeof o?.text=="string"):[];if(n==="")return i.slice(0,24);let s=i.filter(o=>o.text!==n);return[{text:n,at:r},...s].slice(0,24)}function Ye(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],r=[],n=new Set;for(let i of t){let s=Je(typeof i=="string"?i:i?.text);if(!(s===""||n.has(s))&&(n.add(s),r.push({text:s,at:Number.isFinite(i?.at)?i.at:0}),r.length>=24))break}return r}function sn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function cn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...p)=>globalThis.fetch(...p),r=e.storage===void 0?sn():e.storage,n=()=>{try{let p=r?.getItem(Ft);return p==null?[]:Ye(JSON.parse(p))}catch{return[]}},i=p=>{try{r?.setItem(Ft,JSON.stringify(p))}catch{}},s=Object.freeze({lines:Object.freeze(n()),loaded:!1}),o=new Set;function a(p){s=Object.freeze({...s,...p});for(let m of o)try{m()}catch{}}async function l(){try{let m=await(await t(Ve,{method:"GET",headers:{accept:"application/json"}})).json();if(m?.ok===!0){let w=Ye(m.result);return a({lines:w,loaded:!0}),i(w),w}}catch{}return a({loaded:!0}),s.lines}async function g(p){let m=Je(p);if(m==="")return s.lines;let w=an(s.lines,m);a({lines:Object.freeze(w)}),i(w);try{let C=await(await t(Ve,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:m})})).json();if(C?.ok===!0){let I=Ye(C.result);return a({lines:I,loaded:!0}),i(I),I}}catch{}return s.lines}async function k(){a({lines:Object.freeze([])}),i([]);try{await t(Ve,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(p){return typeof p!="function"?()=>{}:(o.add(p),()=>o.delete(p))},getSnapshot(){return s},refresh:l,remember:g,clear:k}}var de=cn();var Ze=null;function _t(e,t){let r=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(r)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(r)?!1:/Mac/i.test(typeof t=="string"?t:r)}function jt(e){if(e!==void 0)return _t(e.userAgent,e.platform)?".mov":".webm";if(Ze===null){let t=typeof navigator>"u"?void 0:navigator;Ze=_t(t?.userAgent,t?.platform)?".mov":".webm"}return Ze}var Ot={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},ln={failed:"click-angry",cancelled:"act-shy"};function Bt(e){let t=e?.previous?.status??"idle",r=e?.next?.status??"idle",n=e?.previous?.detail??null,i=e?.next?.detail??null,s=r!==t||i!==n,a=t==="working"&&r==="thinking"?"result":r;if(!s)return{changed:!1,status:a,detail:i,clip:null,sound:null};if(r==="idle")return{changed:!0,status:"idle",detail:i,clip:null,sound:null};let l=a==="error"?ln[i]??Ot.error:Ot[a]??e?.idleClip??null;return{changed:!0,status:a,detail:i,clip:l,sound:bt(a,i)}}var pn=6e3,dn=5e3,un={thinking:0,working:1,result:2,waiting:3,success:4,error:5},ce="idle-breathe-loop",$t="click-wave",Ut=["act-harley","act-beach"],Wt=6e3,bn=9e4,fn=.12;function Ht({sessionId:e,t,useInput:r,locale:n}){let i=N.useRef(null),s=N.useRef(null),o=N.useRef("idle"),a=N.useRef(null),l=N.useRef(Date.now()),g=N.useRef(null),k=N.useRef(0),p=N.useRef(0),[m,w]=N.useState(null),[f,C]=N.useState(null),h=N.useSyncExternalStore(de.subscribe,de.getSnapshot,de.getSnapshot).lines,v=N.useRef(0),[q,T]=N.useState(null),[M,S]=N.useState("idle"),[E,_]=N.useState(!0),A=N.useRef(!1),F=N.useCallback((b,R)=>{let P=i.current;if(P===null||P.dataset.clip===b&&P.loop===R&&!P.ended)return;P.dataset.clip=b,P.loop=R,P.src=`/api/chatbox-pet/asset/${b}${jt()}`;let $=P.play();$!==void 0&&typeof $.catch=="function"&&$.catch(()=>{})},[]),me=N.useCallback(()=>{let b=i.current;if(b!==null){if(!A.current&&b.dataset.clip!==ce){A.current=!0,F(ce,!0);return}_(!1)}},[F]),re=N.useCallback(()=>{window.clearTimeout(v.current),T(null)},[]),X=N.useCallback((b,R,P,$=dn,H=null)=>{window.clearTimeout(v.current),T({text:b,kind:P,source:H}),R||(v.current=window.setTimeout(()=>T(null),$))},[]),Re=N.useCallback(b=>{let R=s.current?.workStatusTexts,P=un[b],$=P===void 0||!Array.isArray(R)?void 0:R[P];if(!(!Array.isArray($)||$.length===0))return $[Math.floor(Math.random()*$.length)]},[]),Me=N.useCallback(b=>{let R=typeof b?.status=="string"?b.status:"idle",P=o.current,$=typeof b?.detail=="string"?b.detail:null,H=Bt({previous:{status:P,detail:a.current},next:{status:R,detail:$},idleClip:ce});if(!H.changed){R==="waiting"&&typeof b?.bubble=="string"&&b.bubble!==""&&X(b.bubble,!0,"waiting");return}if(o.current=R,a.current=$,S(R),g.current!==null&&g.current.isActive()){l.current=Date.now();return}if(R==="idle"){F(ce,!0),re(),l.current=Date.now();return}l.current=Date.now();let Q=H.status,ye=H.detail;F(H.clip??ce,!1);let we=typeof b?.bubble=="string"&&b.bubble!==""?b.bubble:Re(Q),Be=b?.source==="broadcast"?"notify":H.sound;K.play(Be,we),we!==void 0?X(we,R==="waiting",Q):re()},[re,Re,F,X]),ge=N.useCallback(async b=>{let R=await Pt({kind:b,locale:typeof n=="function"?n():"zh"});if(R===null)return;let P=qt(R.kind);F(P.clip,!1),K.play(P.sound,R.text),X(R.text,!1,"quip",Tt,R.source?.label??null)},[n,F,X]),Te=N.useCallback(()=>{if(o.current!=="idle"||g.current!==null&&g.current.isActive())return;let R=Date.now()-l.current;if(R<bn)return;if(Et({idleForMs:R,chance:Ke})){l.current=Date.now(),ge(null);return}if(Math.random()>fn)return;let P=Ut[Math.floor(Math.random()*Ut.length)];F(P,!1),l.current=Date.now()},[F,ge]),ne=N.useCallback((b,R,P)=>{typeof b.clip=="string"&&b.clip!==""&&F(b.clip,!1),typeof b.sound=="string"&&b.sound!==""&&K.play(b.sound,b.line),typeof b.line=="string"&&b.line!==""&&X(b.line,R,"chat",P)},[F,X]),ue=N.useCallback(()=>{window.clearTimeout(p.current),w(null),F(ce,!0),re()},[re,F]),oe=typeof r=="function"?r(b=>typeof b?.draft=="string"?b.draft:""):"";N.useEffect(()=>{g.current===null&&(g.current=Nt());let b=g.current,R=vt(oe,typeof n=="function"?n():"zh"),P=b.observe(oe);if(P!==null&&P.kind==="wake"&&(w({phase:"awake"}),ne({clip:"click-surprise",sound:"wake",line:St({locale:R,seed:oe})},!0)),P!==null&&P.kind==="off"){ue();return}if(window.clearTimeout(k.current),!b.isActive())return;let $=H=>{k.current=window.setTimeout(()=>{let Q=b.settle(oe,{locale:R});if(Q!==null&&Q.kind==="cooldown"){$(Math.max(120,Q.retryInMs));return}Q===null||Q.kind!=="reply"||(ne(Q,!1,Wt),window.clearTimeout(p.current),p.current=window.setTimeout(()=>ue(),b.holdMs))},H)};return $(b.debounceMs),()=>window.clearTimeout(k.current)},[oe,n,ne,ue]),N.useEffect(()=>{de.refresh()},[]),N.useEffect(()=>{let b=!1;return fetch("/api/chatbox-pet/config").then(R=>R.ok?R.json():null).then(R=>{!b&&R?.ok===!0&&(s.current=R.result)}).catch(()=>{}),()=>{b=!0}},[]),N.useEffect(()=>{if(typeof e!="string"||e==="")return;let b=!1,R=0,P=async()=>{if(document.visibilityState==="visible"){try{let Q=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),ye=Q.ok?await Q.json():null;!b&&ye?.ok===!0&&Me(ye.result)}catch{}b||Te()}},$=()=>{R=window.setTimeout(async()=>{await P(),b||$()},pn)},H=()=>{document.visibilityState==="visible"&&P()};return document.addEventListener("visibilitychange",H),P(),$(),()=>{b=!0,window.clearTimeout(R),document.removeEventListener("visibilitychange",H)}},[e,Me]),N.useEffect(()=>(F(ce,!0),()=>window.clearTimeout(v.current)),[F]);let[xe,Ee]=N.useState(()=>ke(pe())==="on"),je=N.useCallback(b=>{let R=ve(b);R!==""&&(F($t,!1),K.play("click",R),X(R,!1,"chat",Wt),de.remember(R))},[F,X]),Oe=N.useCallback(b=>{typeof b!="string"||b===""||(F(b,!1),K.play("click",b))},[F]),Ie=N.useCallback(()=>{let b=document.querySelector("[data-cbp-pet]"),R=b instanceof Element?b.getBoundingClientRect():null;R!==null&&C({left:R.left,right:R.right,top:R.top,bottom:R.bottom})},[]);return N.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},N.createElement("div",{className:"cbp-stage"},N.createElement("div",{className:(q===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(q?.kind==="error"?" cbp-bubble--error":"")+(q?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},q?.source?N.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":q.source},q.source):null,N.createElement("span",{className:"cbp-bubble-text"},q?.text??"")),N.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(xe?"sound.on":"sound.off"),"aria-pressed":xe,onClick:b=>{b.stopPropagation();let R=ht(pe())==="on";Ee(R),prefsStore.update({sound:R})}},xe?N.createElement(hn,null):N.createElement(mn,null)),N.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":m===null?M:"awake","data-cbp-chat":m===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{K.play("click"),F($t,!1)},onContextMenu:b=>{b.preventDefault(),b.stopPropagation(),Ie()},onKeyDown:b=>{(b.key==="ContextMenu"||b.shiftKey&&b.key==="F10")&&(b.preventDefault(),Ie())},"aria-haspopup":"menu","aria-expanded":f===null?"false":"true"},E?N.createElement("video",{ref:i,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:b=>{b.currentTarget.loop||F(ce,!0)},onError:me}):N.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),f===null?null:N.createElement(At,{anchor:f,locale:typeof n=="function"?n():"zh",onSay:je,onAction:Oe,onQuip:b=>{ge(b)},recent:h,onForget:()=>{de.clear()},onClose:()=>C(null),t}))}function hn(){return N.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},N.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),N.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),N.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function mn(){return N.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},N.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),N.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Qt=`
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
`;var Gt="/api/chatbox-pet/prefs",gn=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function xn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...a)=>globalThis.fetch(...a),r=gn,n=new Set;function i(a){r={...r,...a};for(let l of n)try{l()}catch{}}async function s(){try{let l=await(await t(Gt,{method:"GET",headers:{accept:"application/json"}})).json();l?.ok===!0&&l.result!==null&&typeof l.result=="object"?i({pet:l.result.pet!==!1,boost:l.result.boost!==!1,sound:l.result.sound!==!1,loaded:!0}):i({loaded:!0})}catch{}return r}async function o(a){let l=r,g={};for(let k of["pet","boost","sound"])typeof a?.[k]=="boolean"&&(g[k]=a[k]);i(g);try{let p=await(await t(Gt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:g})})).json();if(p?.ok!==!0||p.result===null||typeof p.result!="object")throw new Error("rejected");return i({pet:p.result.pet!==!1,boost:p.result.boost!==!1,sound:p.result.sound!==!1,loaded:!0}),!0}catch{return i({pet:l.pet,boost:l.boost,sound:l.sound}),!1}}return{subscribe(a){return typeof a!="function"?()=>{}:(n.add(a),()=>n.delete(a))},getSnapshot(){return r},refresh:s,update:o}}var Z=xn();var W=ie(require("react"),1),Kt=require("react");var Vt=`
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
`;function Xe({id:e,checked:t,label:r,onChange:n}){return W.createElement("label",{className:"cbp-set-item",htmlFor:e},W.createElement("span",{className:"cbp-switch"},W.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:i=>n(i.target.checked),"data-cbp-pref":e}),W.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),W.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),r)}function Yt({t:e}){let t=(0,Kt.useSyncExternalStore)(Z.subscribe,Z.getSnapshot,Z.getSnapshot),[r,n]=W.useState(()=>ke(pe())==="on"),i=s=>{n(s),We(pe(),s?"on":"off"),Z.update({sound:s})};return W.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},W.createElement("div",{className:"cbp-set-head"},W.createElement("span",{className:"cbp-set-title"},e("settings.title")),W.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),W.createElement("div",{className:"cbp-set-items"},W.createElement(Xe,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:s=>{Z.update({pet:s})}}),W.createElement(Xe,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:s=>{Z.update({boost:s})}}),W.createElement(Xe,{id:"chatbox-pet-feature-sound",checked:r,label:e("settings.sound"),onChange:i})))}var Se=ie(require("react"),1),De=require("react"),tt=require("@deepseek-ai/dsh-client-ui-primitives");var O=require("react");function he({size:e=16,children:t}){return(0,O.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function Le({size:e=16}){return(0,O.createElement)(he,{size:e},[(0,O.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,O.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function Jt({size:e=16}){return(0,O.createElement)(he,{size:e},(0,O.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function Zt({size:e=16}){return(0,O.createElement)(he,{size:e},[(0,O.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function et({size:e=16}){return(0,O.createElement)(he,{size:e},[(0,O.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,O.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function Xt({size:e=16}){return(0,O.createElement)(he,{size:e},(0,O.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function er({size:e=16}){return(0,O.createElement)(he,{size:e},[(0,O.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,O.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,O.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,O.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function yn({label:e,children:t}){return typeof tt.Tooltip=="function"?Se.createElement(tt.Tooltip,{label:e,side:"top",delayMs:400},t):(0,De.cloneElement)(t,{title:e})}function tr({inputActions:e,useInput:t,store:r,t:n,locale:i}){let s=(0,De.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),o=typeof t=="function"?t(m=>m):void 0;r.setDraftMirror(e,o);let a=typeof o?.draft=="string"?o.draft:"",l=s.phase==="running"||s.phase==="streaming",g=s.phase!=="idle",k=n(l?"button.running":"button.label"),p=l?n("button.running"):a.trim()===""?n("button.tooltipCompose"):n("button.tooltip");return Se.createElement(yn,{label:p},Se.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":l?"true":"false","data-pb-open":g?"true":"false","aria-label":k,"aria-busy":l?"true":void 0,"aria-expanded":g?"true":"false","aria-controls":r.panelId(e),onMouseDown:m=>m.preventDefault(),onClick:()=>r.start(e,{locale:typeof i=="function"?i():"zh"})},Se.createElement(Le,{size:16})))}var V=ie(require("react"),1),Ae=require("react"),ot=require("@deepseek-ai/dsh-client-ui-primitives");var rr="next-turn";function rt(e){return(Array.isArray(e?.content)?e.content:[]).filter(r=>r!==null&&typeof r=="object"&&r.type==="text"&&typeof r.text=="string").map(r=>r.text).join("").trim()}function wn(e){return(Array.isArray(e?.content)?e.content:[]).some(r=>r===null||typeof r!="object"||r.type!=="text")}function nr(e){let t=[];try{let n=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();t=Array.isArray(n?.[rr])?n[rr]:[]}catch{t=[]}return nt(t)}function nt(e){let r=(Array.isArray(e)?e:[]).filter(o=>o!==null&&typeof o=="object"&&typeof o.id=="string"),n=r.map(rt),i=r.filter((o,a)=>!wn(o)&&n[a]!==""),s="";return r.length>=2&&i.length!==r.length?s="attachment":r.length>8?s="too-many":r.length<2&&(s="too-few"),{items:r,texts:n,mergeable:r.length,blocked:s}}async function kn(e,t={}){let r=vn(e),n=typeof t.fetchImpl=="function"?t.fetchImpl:(...i)=>globalThis.fetch(...i);try{let i=await n("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof t.sessionId=="string"?t.sessionId:void 0,locale:t.locale==="en"?"en":"zh"})});if(!i.ok)return{prompt:r,optimized:!1,reason:"http-"+String(i.status)};let s=await i.json(),o=typeof s?.result?.prompt=="string"?s.result.prompt.trim():"";return o===""?{prompt:r,optimized:!1,reason:"empty"}:{prompt:o,optimized:s.result.optimized===!0,reason:typeof s.result.reason=="string"?s.result.reason:""}}catch{return{prompt:r,optimized:!1,reason:"network"}}}function vn(e){return(Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>t!=="").join(`

`)}async function Sn(e,t,r){let n=Array.isArray(t)?t:[],i=String(r??"").trim();if(n.length<2||i==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[s,...o]=n;try{let g=await e.updateQueue(s.id,{kind:"edit",content:[{type:"text",text:i}]});if(g?.ok!==!0)return{ok:!1,merged:0,removed:0,error:g?.error?.code??"edit-failed"}}catch(g){return{ok:!1,merged:0,removed:0,error:or(g)}}let a=0,l=0;for(let g of o)try{let k=await e.updateQueue(g.id,{kind:"remove"});if(k?.ok===!0){a+=1;continue}if(k?.error?.code==="session/queue-item-not-found"){l+=1;continue}return{ok:!1,merged:1,removed:a,claimed:l,error:k?.error?.code??"remove-failed"}}catch(k){return{ok:!1,merged:1,removed:a,claimed:l,error:or(k)}}return{ok:l===0,merged:1,removed:a,claimed:l,error:l>0?"session/queue-item-not-found":""}}async function ar(e={}){let t=nr(e.session);if(t.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:t.blocked};let r=t.items.map(rt),n=await kn(r,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),i=nr(e.session);if(!(i.items.length===t.items.length&&i.items.every((a,l)=>a.id===t.items[l].id&&rt(a)===r[l])))return{ok:!1,count:t.items.length,optimized:!1,reason:"",error:"queue-changed"};let o=await Sn(e.session,t.items,n.prompt);return{ok:o.ok,count:t.items.length,optimized:n.optimized,reason:n.reason,error:o.error}}function or(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function Nn({label:e,children:t}){return typeof ot.Tooltip=="function"?V.createElement(ot.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Ae.cloneElement)(t,{title:e})}var Cn=Object.freeze({}),zn=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>Cn});function Rn(e){let t=(()=>{try{let n=e?.projections?.faceOf?.("inbox");if(typeof n?.subscribe=="function"&&typeof n?.getSnapshot=="function")return n}catch{}return zn})(),r=(0,Ae.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot);return nt(r?.["next-turn"])}function ir({sessionId:e,sessions:t,t:r,locale:n,onNotice:i}){let s=V.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return t?.binding?.(e)?.session??null}catch{return null}},[t,e]),o=Rn(s),[a,l]=V.useState("idle"),[g,k]=V.useState(""),p=V.useRef(0);V.useEffect(()=>()=>window.clearTimeout(p.current),[]);let m=o.items.length;if(m<2||o.blocked==="attachment"||o.blocked==="too-many")return null;let w=async()=>{if(a!=="running"){l("running"),k("");try{let C=await ar({session:s,sessionId:e,locale:typeof n=="function"?n():"zh"});if(C.ok){let I=C.optimized?r("merge.done")(C.count):r("merge.donePlain")(C.count);k(I),i?.(I)}else k(C.error==="queue-changed"?r("merge.changed"):C.error==="session/queue-item-not-found"?r("merge.claimed"):r("merge.failed"))}catch{k(r("merge.failed"))}finally{l("idle"),window.clearTimeout(p.current),p.current=window.setTimeout(()=>k(""),4e3)}}},f=a==="running"?r("merge.running"):g!==""?g:r("merge.label")(m);return V.createElement(Nn,{label:f},V.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":m,"data-cbp-merge-phase":a,"aria-label":f,"aria-busy":a==="running"?"true":void 0,disabled:a==="running",onClick:C=>{C.stopPropagation(),w()}},V.createElement(er,null),V.createElement("span",{className:"cbp-merge-count"},a==="running"?"\u2026":m)))}var Ne="promptBoost",sr={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},cr={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var x=ie(require("react"),1),Y=require("react");var Mn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function Tn(){return x.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},x.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),x.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function lr(e,t){let r=`source.${e.id}`,n=t(r);return n===r?e.label:n}function En(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function In(e,t){if(e.phase!=="ready")return"";let r=[];return e.cached&&r.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&r.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),r.join(" \xB7 ")}function qn(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let r=e.sources.slice(0,2).map(n=>`${lr(n,t)} ${n.count}`).join(" \xB7 ");return r===""?t("chip.writing"):`${r} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function Pn({state:e,store:t,t:r,inputActions:n,chipRef:i}){let s=e.phase==="applied",o=e.phase==="running"||e.phase==="streaming",a=e.phase==="ready",l=e.phase==="error",g=e.mode==="compose"?r("panel.compose"):r("button.label"),k=qn(e,r);return s?x.createElement("div",{className:"pb-chip-row"},x.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":r("chip.expand"),onClick:()=>t.expand(n),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),t.expand(n))}},x.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},x.createElement(Jt,{size:12})),x.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},r("undo.done")),x.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),x.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":r("undo.label"),onClick:()=>t.undo(n)},r("undo.action")))):x.createElement("div",{className:"pb-chip-row"},x.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":o?"true":"false",onClick:()=>t.expand(n)},x.createElement("button",{ref:i,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(n),"aria-label":`${r("chip.expand")} \xB7 ${g}`,onClick:()=>t.expand(n)},x.createElement("span",{className:o||a?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},o?x.createElement(Tn,null):l?x.createElement(et,{size:12}):x.createElement(Le,{size:12})),x.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},k),a||l?x.createElement(x.Fragment,null,x.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),x.createElement("span",{className:"pb-chip-view"},r("chip.view"))):null),x.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":r("chip.dismiss"),onClick:()=>t.dismiss(n)},x.createElement(Zt,{size:10}))))}function Ln({state:e,store:t,t:r,inputActions:n,locale:i,panelRef:s}){let o=(0,Y.useRef)(null),a=e.phase,l=a==="running",g=a==="streaming",k=a==="ready",p=a==="applied",m=k||p,w=a==="error",f=e.sources,C=l||g||m||f.length>0,I=p?e.applied:e.prompt,h=In(e,r),v=t.panelId(n),q=r(Mn?"shortcut.mac":"shortcut.other"),T=r(l?"panel.announceRunning":g?"panel.streaming":p?"panel.announceApplied":k?"panel.announceReady":"panel.announceError");return(0,Y.useEffect)(()=>{let M=o.current;M===null||a!=="streaming"||(M.scrollTop=M.scrollHeight)},[e.prompt,a]),x.createElement("section",{ref:s,id:v,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":a,"data-pb-running":l||g?"true":"false",tabIndex:-1,"aria-labelledby":`${v}-title`,"aria-busy":l||g?"true":void 0},x.createElement("header",{className:"pb-head"},x.createElement("div",{className:"pb-head-row"},x.createElement("h2",{className:"pb-title",id:`${v}-title`},r("panel.title")),e.mode==="compose"?x.createElement("span",{className:"pb-mode"},r("panel.compose")):null,x.createElement("span",{className:"pb-meta"},h),x.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":r("panel.collapse"),title:r("panel.collapse"),onClick:()=>t.collapse(n)},x.createElement(Xt,{size:14}))),C?x.createElement("div",{className:"pb-sources",role:"list","aria-label":r("panel.sources")},f.length>0?f.map(M=>x.createElement("span",{key:M.id,className:"pb-chip",role:"listitem","data-pb-source":M.id},x.createElement("span",{className:"pb-chip-label"},lr(M,r)),x.createElement("span",{className:"pb-chip-count"},M.count))):l?[x.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),x.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:x.createElement("span",{className:"pb-note"},r("panel.noSources"))):null),x.createElement("div",{className:"pb-rule","aria-hidden":"true"}),x.createElement("div",{className:"pb-body"},l?x.createElement(x.Fragment,null,x.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},x.createElement("span",{className:"pb-skeleton-line is-long"}),x.createElement("span",{className:"pb-skeleton-line is-full"}),x.createElement("span",{className:"pb-skeleton-line is-short"})),x.createElement("div",{className:"pb-status"},x.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.status"))):null,g||m?x.createElement("textarea",{ref:o,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:g||p,spellCheck:!1,"aria-label":r("panel.editLabel"),placeholder:r("panel.placeholder"),value:I}):null,g?x.createElement("div",{className:"pb-status"},x.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.streaming")):null,w?x.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},x.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},x.createElement(et,{size:14})),x.createElement("span",{className:"pb-error-text"},En(e.error,r))):null,x.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},T)),x.createElement("div",{className:"pb-foot"},x.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(n)},r("panel.close")),x.createElement("span",{className:"pb-foot-spacer"}),m?x.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:q,onClick:()=>t.retry(n,{locale:i()})},r("panel.another"),x.createElement("span",{className:"pb-kbd","aria-hidden":"true"},q)):null,p?x.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(n)},r("undo.action")):null,l||g?x.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(n,{locale:i()})},r("panel.retry")):null,w?x.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(n,{locale:i()})},r("panel.retryError")):null))}function pr({inputActions:e,store:t,t:r,locale:n,session:i}){let s=(0,Y.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),o=s.phase,a=o!=="idle"||s.undo!==null,l=s.expanded===!0&&o!=="idle";(0,Y.useEffect)(()=>{let f=typeof i?.id=="string"?i.id:"";f!==""&&t.setSessionId(e,f)},[i?.id,e,t]);let g=(0,Y.useRef)(null),k=(0,Y.useRef)(null),p=(0,Y.useRef)(null),m=(0,Y.useRef)(!1),w=(0,Y.useRef)(!1);return(0,Y.useEffect)(()=>{if(!a)return;let f=C=>{if(!(C.defaultPrevented||l===!1)){if(C.key==="Escape"){C.preventDefault(),C.stopPropagation(),t.collapse(e);return}C.key==="Enter"&&(C.metaKey||C.ctrlKey)&&(C.preventDefault(),C.stopPropagation(),o==="applied"||o==="ready"?t.retry(e,{locale:n()}):o==="error"&&t.retry(e,{locale:n()}))}};return document.addEventListener("keydown",f,!0),()=>document.removeEventListener("keydown",f,!0)},[a,l,o,e,t,n]),(0,Y.useEffect)(()=>{if(a&&m.current===!1){m.current=!0,p.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(a===!1&&m.current){m.current=!1;let f=p.current;if(p.current=null,f==null||f.isConnected===!1||typeof f.focus!="function")return;try{f.focus({preventScroll:!0})}catch{}}},[a]),(0,Y.useEffect)(()=>{if(l&&w.current===!1){w.current=!0;let f=k.current;if(f!==null&&typeof f.focus=="function")try{f.focus({preventScroll:!0})}catch{}return}if(l===!1&&w.current){w.current=!1;let f=o==="idle"?p.current:g.current;if(f==null||f.isConnected===!1||typeof f.focus!="function")return;try{f.focus({preventScroll:!0})}catch{}}},[l,o]),a?l===!1?x.createElement(Pn,{state:s,store:t,t:r,inputActions:e,chipRef:g}):x.createElement(Ln,{state:s,store:t,t:r,inputActions:e,locale:n,panelRef:k}):null}var y=ie(require("react"),1),it=require("react-dom");var dr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function at(e,t){return t==="en"?e.en:e.zh}var d=ie(require("react"),1),ur=require("react-dom"),br="/api/chatbox-pet",Dn=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],An=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function fr(e,t){let r=await fetch(`${br}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),n;try{n=await r.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${r.status}\uFF09`);return n.result}function hr(e,t){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:t,references:[]}),!0}catch{try{return e.setDraft(t),!0}catch{return!1}}}function Fe({title:e,hint:t,onClose:r,children:n,t:i}){let s=d.useRef(null);return d.useEffect(()=>{let o=a=>{a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),r())};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[r]),(0,ur.createPortal)(d.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:o=>o.stopPropagation()},d.createElement("div",{className:"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:s},d.createElement("div",{className:"cbp-sheet-head"},d.createElement("span",{className:"cbp-sheet-title"},e),d.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":i("sheet.close"),onClick:r},"\u2715")),t?d.createElement("p",{className:"cbp-sheet-hint"},t):null,d.createElement("div",{className:"cbp-sheet-body"},n))),document.body)}function mr({onClose:e,onFill:t,t:r,locale:n}){let[i,s]=d.useState("idle"),[o,a]=d.useState(0),[l,g]=d.useState(null),[k,p]=d.useState(""),m=d.useRef(null),w=d.useRef([]),f=d.useRef(0),C=()=>{f.current!==0&&(clearInterval(f.current),f.current=0)};d.useEffect(()=>()=>{C();try{m.current?.stream?.getTracks?.().forEach(T=>T.stop())}catch{}},[]);let I=async T=>{s("working"),p("");try{let S=await(await fetch(`${br}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":T.type||"audio/webm"},body:T})).json();if(S?.ok!==!0)throw new Error(S?.error?.message??"\u8F6C\u5199\u5931\u8D25");g(S.result),s("done")}catch(M){p(String(M?.message??M)),s("idle")}},h=async()=>{p("");try{let T=await navigator.mediaDevices.getUserMedia({audio:!0}),M=new MediaRecorder(T);w.current=[],M.ondataavailable=S=>{S.data?.size>0&&w.current.push(S.data)},M.onstop=()=>{C(),T.getTracks().forEach(E=>E.stop());let S=new Blob(w.current,{type:M.mimeType||"audio/webm"});I(S)},m.current=M,M.start(),a(0),s("recording"),f.current=setInterval(()=>a(S=>S+1),1e3)}catch(T){let M=T?.name==="NotAllowedError"||T?.name==="SecurityError";p(M?r("sheet.transcribe.denied"):String(T?.message??T))}},v=()=>{s("working");try{m.current?.stop()}catch{C(),s("idle")}},q=`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return d.createElement(Fe,{title:r("sheet.transcribe.title"),hint:r("sheet.transcribe.hint"),onClose:e,t:r},l===null?d.createElement(d.Fragment,null,d.createElement("div",{className:"cbp-sheet-center"},d.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":i,"aria-label":r(i==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:i==="recording"?v:h,disabled:i==="working"},d.createElement("span",{className:"cbp-rec-dot"})),d.createElement("span",{className:"cbp-rec-time"},i==="recording"?q:r(i==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),d.createElement("label",{className:"cbp-sheet-file"},d.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:T=>{let M=T.target.files?.[0];M&&I(M),T.target.value=""}}),d.createElement("span",null,r("sheet.transcribe.pick")))):d.createElement(d.Fragment,null,d.createElement("div",{className:"cbp-sheet-meta"},r("sheet.transcribe.meta")(l.segments?.length??0,l.language??"\u2014",l.durationSeconds??0)),d.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},l.text||r("sheet.transcribe.empty")),d.createElement("div",{className:"cbp-sheet-actions"},d.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(l.text)},r("sheet.fill")),d.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{g(null),s("idle")}},r("sheet.again")))),k?d.createElement("p",{className:"cbp-sheet-error"},k):null)}function gr({onClose:e,onFill:t,t:r,locale:n,sessionId:i=""}){let[s,o]=d.useState("update"),[a,l]=d.useState(""),[g,k]=d.useState(""),[p,m]=d.useState("idle"),[w,f]=d.useState(""),[C,I]=d.useState(""),h=async()=>{m("working"),I("");try{let v=await fr("/write",{genre:s,topic:a,tone:g,locale:n(),session:i});f(v.text),m("done")}catch(v){I(String(v?.message??v)),m("idle")}};return d.createElement(Fe,{title:r("sheet.write.title"),hint:r("sheet.write.hint"),onClose:e,t:r},d.createElement("div",{className:"cbp-chips"},Dn.map(v=>d.createElement("button",{key:v.id,type:"button",className:"cbp-chip","data-cbp-genre":v.id,"aria-pressed":s===v.id?"true":"false",onClick:()=>o(v.id)},n()==="en"?v.en:v.zh))),d.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:r("sheet.write.topic"),value:a,maxLength:200,onChange:v=>l(v.target.value)}),d.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:r("sheet.write.tone"),value:g,maxLength:80,onChange:v=>k(v.target.value)}),w===""?d.createElement("div",{className:"cbp-sheet-actions"},d.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:p==="working"||a.trim()==="",onClick:h},r(p==="working"?"sheet.working":"sheet.write.go"))):d.createElement(d.Fragment,null,d.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},w),d.createElement("div",{className:"cbp-sheet-actions"},d.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(w)},r("sheet.fill")),d.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>f("")},r("sheet.again")))),C?d.createElement("p",{className:"cbp-sheet-error"},C):null)}function xr({onClose:e,t,locale:r,sessionId:n=""}){let[i,s]=d.useState(""),[o,a]=d.useState(""),[l,g]=d.useState(10),[k,p]=d.useState("idle"),[m,w]=d.useState(null),[f,C]=d.useState(""),I=async()=>{p("working"),C("");try{let v=await fr("/deck",{topic:i,audience:o,pages:l,locale:r(),session:n});w(v),p("done")}catch(v){C(String(v?.message??v)),p("idle")}},h=()=>{if(!m?.base64)return;let v=Uint8Array.from(atob(m.base64),S=>S.charCodeAt(0)),q=new Blob([v],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),T=URL.createObjectURL(q),M=document.createElement("a");M.href=T,M.download=m.name||"deck.pptx",document.body.appendChild(M),M.click(),M.remove(),setTimeout(()=>URL.revokeObjectURL(T),4e3)};return d.createElement(Fe,{title:t("sheet.deck.title"),hint:t("sheet.deck.hint"),onClose:e,t},m===null?d.createElement(d.Fragment,null,d.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:t("sheet.deck.topic"),value:i,maxLength:200,onChange:v=>s(v.target.value)}),d.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:t("sheet.deck.audience"),value:o,maxLength:120,onChange:v=>a(v.target.value)}),d.createElement("div",{className:"cbp-chips"},An.map(v=>d.createElement("button",{key:v.id,type:"button",className:"cbp-chip","data-cbp-size":v.id,"aria-pressed":l===v.id?"true":"false",onClick:()=>g(v.id)},r()==="en"?v.en:v.zh))),d.createElement("div",{className:"cbp-sheet-actions"},d.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:k==="working"||i.trim()==="",onClick:I},t(k==="working"?"sheet.deck.working":"sheet.deck.go")))):d.createElement(d.Fragment,null,d.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},d.createElement("div",{className:"cbp-deck-title"},m.title||i),d.createElement("div",{className:"cbp-deck-meta"},t("sheet.deck.meta")(m.slides??0)),d.createElement("div",{className:"cbp-deck-path",title:m.path},m.path)),d.createElement("div",{className:"cbp-sheet-actions"},d.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:h},t("sheet.deck.download")),d.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>w(null)},t("sheet.again")))),f?d.createElement("p",{className:"cbp-sheet-error"},f):null)}function yr({onClose:e,onFill:t,t:r}){let[n,i]=d.useState(""),s=()=>{let o=n.trim();t(o===""?r("sheet.video.prompt"):r("sheet.video.promptWith")(o))};return d.createElement(Fe,{title:r("sheet.video.title"),hint:r("sheet.video.hint"),onClose:e,t:r},d.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:r("sheet.video.placeholder"),value:n,maxLength:500,onChange:o=>i(o.target.value)}),d.createElement("div",{className:"cbp-sheet-actions"},d.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:s},r("sheet.video.go"))))}var wr=`
.cbp-sheet-veil{
  position:fixed;
  inset:0;
  z-index:80;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  background:color-mix(in oklab,#0b0c0f 32%,transparent);
  -webkit-backdrop-filter:blur(3px);
  backdrop-filter:blur(3px);
  animation:cbp-sheet-fade 140ms ease;
}
@keyframes cbp-sheet-fade{from{opacity:0}to{opacity:1}}
.cbp-sheet{
  box-sizing:border-box;
  width:min(520px,100%);
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
.cbp-sheet-body{display:flex;flex-direction:column;gap:10px;}
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
@media (prefers-reduced-motion: reduce){
  .cbp-sheet-veil,.cbp-sheet{animation:none}
}
`;function kr({name:e}){let t={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return y.createElement("svg",{...t},y.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),y.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),y.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),y.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return y.createElement("svg",{...t},y.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),y.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),y.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),y.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return y.createElement("svg",{...t},y.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),y.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),y.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"slides":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),y.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return y.createElement("svg",{...t},y.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function Fn(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let t=e.closest('[data-composer-card="true"]');if(t)return t}return document.querySelector('[data-composer-card="true"]')}function vr({inputActions:e,t,locale:r,sessionId:n=""}){let i=typeof e?.setDraft=="function",[s,o]=y.useState(!1),[a,l]=y.useState(null),[g,k]=y.useState(null),p=y.useRef(null),m=y.useRef(null),[w,f]=y.useState(null);y.useEffect(()=>{f(Fn())},[]);let C=y.useCallback(()=>{let S=p.current?.getBoundingClientRect();S!=null&&k({right:Math.max(8,Math.round(window.innerWidth-S.right)),bottom:Math.max(8,Math.round(window.innerHeight-S.top)+8)})},[]);y.useLayoutEffect(()=>{s&&C()},[s,C]),y.useEffect(()=>{if(!s)return;let S=A=>{let F=A.target;F instanceof Node&&m.current?.contains(F)!==!0&&p.current?.contains(F)!==!0&&o(!1)},E=A=>{A.key==="Escape"&&(A.preventDefault(),A.stopPropagation(),o(!1),p.current?.focus?.())},_=()=>o(!1);return document.addEventListener("pointerdown",S,!0),document.addEventListener("keydown",E,!0),window.addEventListener("resize",_),window.addEventListener("scroll",_,!0),()=>{document.removeEventListener("pointerdown",S,!0),document.removeEventListener("keydown",E,!0),window.removeEventListener("resize",_),window.removeEventListener("scroll",_,!0)}},[s]);let I=S=>{if(typeof S.sheet=="string"){o(!1),l(S.sheet);return}let E=at(S.prompt,typeof r=="function"?r():"zh");try{e.setDraft({text:E,references:[]})}catch{try{e.setDraft(E)}catch{}}o(!1),p.current?.focus?.()},h=t("quick.label"),v=typeof r=="function"?r():"zh",q=y.createElement("button",{ref:p,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":s?"true":"false","aria-label":t("quick.aria"),title:t(i?"quick.aria":"quick.disabled"),disabled:!i,onMouseDown:S=>S.preventDefault(),onClick:()=>o(S=>!S)},y.createElement(kr,{name:"grid"}),y.createElement("span",{className:"cbp-more-label"},h)),T=s&&g!==null?(0,it.createPortal)(y.createElement("div",{ref:m,className:"cbp-quick-panel",role:"menu","aria-label":t("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${g.right}px`,bottom:`${g.bottom}px`}},y.createElement("div",{className:"cbp-quick-head"},y.createElement("span",{className:"cbp-quick-title"},t("quick.title")),y.createElement("span",{className:"cbp-quick-hint"},t("quick.hint"))),y.createElement("div",{className:"cbp-quick-grid"},dr.map(S=>y.createElement("button",{key:S.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":S.id,onClick:()=>I(S)},y.createElement("span",{className:"cbp-quick-icon"},y.createElement(kr,{name:S.icon})),y.createElement("span",{className:"cbp-quick-name"},at({zh:S.zh,en:S.en},v)))))),document.body):null,M=S=>{typeof S=="string"&&S.trim()!==""&&hr(e,S),l(null)};return y.createElement(y.Fragment,null,y.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),w!==null?(0,it.createPortal)(q,w):null,T,a==="transcribe"?y.createElement(mr,{t,locale:r,onClose:()=>l(null),onFill:M}):null,a==="write"?y.createElement(gr,{t,locale:r,sessionId:n,onClose:()=>l(null),onFill:M}):null,a==="deck"?y.createElement(xr,{t,locale:r,sessionId:n,onClose:()=>l(null)}):null,a==="video"?y.createElement(yr,{t,onClose:()=>l(null),onFill:M}):null)}var Sr=`
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
`;var Mr="/api/chatbox-pet/boost",Nr=4e3,_n=12e4,jn=24,On=8e3,Tr=25e3;function Er(e){return{set:typeof e?.set=="function"?e.set:(t,r)=>setTimeout(t,r),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function pt(e){let t=typeof e=="string"?e:"";return t.length>Nr?t.slice(0,Nr):t}function Cr(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function Ce(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function st(e){if(!Array.isArray(e))return[];let t=[];for(let r of e){if(r===null||typeof r!="object")continue;let n=typeof r.id=="string"?r.id.trim():"",i=Number(r.count);n===""||!Number.isFinite(i)||i<=0||t.push({id:n,label:typeof r.label=="string"&&r.label.trim()!==""?r.label.trim():n,count:Math.round(i)})}return t}function ze(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function J(e,t,r){let n=new Error(typeof t=="string"&&t!==""?t:e);return n.code=e,r!==void 0&&(n.cause=r),n}function zr(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",r=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return r===void 0?{code:t}:{code:t,message:r}}function Bn(e){let t=[],r=e;for(;;){let n=/(?:\r?\n){2}/.exec(r);if(n===null)break;t.push(r.slice(0,n.index)),r=r.slice(n.index+n[0].length)}return{frames:t,rest:r}}function Rr(e){let t=[];for(let r of e.split(`
`)){let n=r.trim();n===""||n.startsWith(":")||n.startsWith("data:")&&t.push(n.slice(5).trimStart())}if(t.length===0)return null;try{let r=JSON.parse(t.join(`
`));return r!==null&&typeof r=="object"&&Array.isArray(r)===!1?r:null}catch{return null}}async function ct(e){try{return await e.json()}catch{return null}}function lt(e,t){if(e===null||typeof e!="object")throw J("host",void 0,t);if(e.ok!==!0){let i=typeof e.error?.message=="string"?e.error.message.trim():"";throw J(typeof e.error?.code=="string"?e.error.code:"host",i===""?void 0:i)}let r=e.result,n=typeof r?.prompt=="string"?r.prompt.trim():"";if(n==="")throw J("empty");return{prompt:n,mode:r.mode==="compose"?"compose":"improve",sources:st(r.sources),elapsedMs:Number.isFinite(r.elapsedMs)?Math.max(0,Number(r.elapsedMs)):null,cached:r.cached===!0}}async function $n(e){let{draft:t,mode:r,locale:n,signal:i,onEvent:s,idleMs:o=Tr,sessionId:a=""}=e,l=a===""?{}:{sessionId:a},g=typeof e.fetch=="function"?e.fetch:globalThis.fetch,k=Er(e.timers),p=new AbortController,m=()=>p.abort();i!==void 0&&(i.aborted?p.abort():i.addEventListener("abort",m,{once:!0}));let w=!1,f=null,C=()=>{f!==null&&k.clear(f),f=k.set(()=>{w=!0,p.abort()},o)},I=!1;try{C();let h;try{h=await g(Mr,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:pt(t),mode:r,locale:n,stream:!0,...l}}),signal:p.signal})}catch(S){throw w?J("timeout",void 0,S):ze(S)?S:J("network",void 0,S)}if(w)throw J("timeout");if(h===null||typeof h!="object")throw J("host");if(h.ok!==!0){let S=await ct(h);if(h.status>=400)throw J("host",void 0,h.status);let E=lt(S,h.status);s({type:"replace",text:E.prompt}),s({type:"done",result:E});return}let v=typeof h.headers?.get=="function"?String(h.headers.get("content-type")??""):"";if(h.body===null||h.body===void 0||typeof h.body.getReader!="function"||!v.includes("text/event-stream")){let S=lt(await ct(h),h.status);s({type:"replace",text:S.prompt}),s({type:"done",result:S});return}let q=h.body.getReader(),T=new TextDecoder,M="";for(;!I;){let S;try{S=await q.read()}catch(_){throw w?J("timeout",void 0,_):ze(_)?_:J("stream",void 0,_)}if(S.done===!0)break;C(),M+=T.decode(S.value,{stream:!0});let E=Bn(M);M=E.rest;for(let _ of E.frames){let A=Rr(_);if(A!==null&&s(A)==="stop"){I=!0;break}}}if(!I){let S=M.trim();if(S!==""){let E=Rr(S);E!==null&&s(E)}}if(I)try{await q.cancel()}catch{}}finally{f!==null&&k.clear(f),i!==void 0&&i.removeEventListener("abort",m)}}async function Un(e){let{draft:t,mode:r,locale:n,signal:i,sessionId:s=""}=e,o=typeof e.fetch=="function"?e.fetch:globalThis.fetch,a;try{a=await o(Mr,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:pt(t),mode:r,locale:n,stream:!1,...s===""?{}:{sessionId:s}}}),signal:i})}catch(l){throw ze(l)?l:J("network",void 0,l)}if(a===null||typeof a!="object")throw J("host");if(a.ok!==!0&&a.status>=400)throw J("host",void 0,a.status);return lt(await ct(a),a.status)}function Wn(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,r=typeof e.now=="function"?e.now:()=>Date.now(),n=Er(e.timers),i=Number.isFinite(e.idleMs)?Number(e.idleMs):Tr,s=Number.isFinite(e.undoMs)?Number(e.undoMs):On,o=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):_n,a=new WeakMap,l=new WeakMap,g=new WeakMap,k=new WeakMap,p=new WeakMap,m="",w=new Set,f=new Map,C=Cr(),I=Ce(null),h=null,v=0,q=0,T=null,M=null,S=()=>{for(let c of[...w])try{c()}catch(u){console.error("[prompt-boost] a store listener failed:",u)}},E=c=>c!=null&&(typeof c=="object"||typeof c=="function");function _(c){let u=E(c)?c:M;if(!E(u))return C;let z=a.get(u);return z===void 0&&(z=Cr(),a.set(u,z)),z}function A(c,u){let z=E(c)?c:M,B={..._(z),...u};return E(z)?a.set(z,B):C=B,S(),B}function F(c){let u=E(c)?c:M;return E(u)?g.get(u)??Ce(null):I}function me(c){return E(c)?c:M}function re(c){let u=E(c)?c:M;if(!E(u))return"default";let z=l.get(u);return z===void 0&&(v+=1,z=`s${v}`,l.set(u,z)),z}function X(c){return`prompt-boost-panel-${re(c)}`}function Re(c,u,z){return`${re(c)}\0${u}\0${z}`}function Me(c){let u=f.get(c);return u===void 0?null:r()-u.at>o?(f.delete(c),null):(f.delete(c),f.set(c,u),u.result)}function ge(c,u){for(f.delete(c),f.set(c,{at:r(),result:u});f.size>jn;){let z=f.keys().next();if(z.done===!0)break;f.delete(z.value)}}function Te(){if(T===null)return;let c=T;T=null;try{c.controller.abort()}catch{}}function ne(c){let u=E(c)?c:M,z=E(u)?k.get(u):h;z!=null&&n.clear(z),E(u)?k.delete(u):h=null}function ue(c){ne(c);let u=null;u=n.set(()=>{let L=_(c);L.undo!==null&&A(c,{undo:null,phase:L.phase==="applied"?"idle":L.phase,applied:"",prompt:L.phase==="applied"?"":L.prompt,sources:L.phase==="applied"?[]:L.sources})},s);let z=E(c)?c:M;E(z)?k.set(z,u):h=u}function oe(c,u,z){let L=me(c),B=Ce(F(c)),U=!1;if(E(L)&&typeof L.setDraft=="function")try{L.setDraft({text:u.prompt,references:[]}),U=!0}catch{try{L.setDraft(u.prompt),U=!0}catch{U=!1}}if(!U){A(c,{phase:"error",mode:u.mode,prompt:u.prompt,sources:u.sources,elapsedMs:u.elapsedMs,cached:u.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}A(c,{phase:"applied",mode:u.mode,prompt:u.prompt,applied:u.prompt,sources:u.sources,elapsedMs:u.elapsedMs,cached:u.cached===!0,error:null,undo:{draft:B,at:r()},expanded:!1}),ue(c),ge(z,u),K.play("boostDone")}async function xe(c,u,z){let{draft:L,mode:B,locale:U,key:ee,sessionId:ae}=z,be=!1,le=!1,fe=()=>T===u&&u.controller.signal.aborted===!1,Ar=j=>{if(!fe())return"stop";if(be=!0,j.type==="sources"){let G=_(c);A(c,{sources:st(j.sources),mode:j.mode==="compose"?"compose":G.mode});return}if(j.type==="delta"){if(typeof j.text!="string"||j.text==="")return;let G=_(c);A(c,{phase:"streaming",prompt:G.prompt+j.text});return}if(j.type==="replace"){if(typeof j.text!="string")return;let G=_(c),Fr=G.phase==="ready"||j.text===""?G.phase:"streaming";A(c,{prompt:j.text,phase:Fr});return}if(j.type==="done"){le=!0;let G={prompt:typeof j.result?.prompt=="string"?j.result.prompt.trim():_(c).prompt.trim(),mode:j.result?.mode==="compose"?"compose":B,sources:st(j.result?.sources??_(c).sources),elapsedMs:Number.isFinite(j.result?.elapsedMs)?Math.max(0,Number(j.result.elapsedMs)):null,cached:j.result?.cached===!0};return G.prompt===""?(A(c,{phase:"error",error:{code:"empty"}}),K.play("boostFail"),"stop"):(oe(c,G,ee),"stop")}if(j.type==="error"){le=!0;let G=typeof j.message=="string"&&j.message.trim()!==""?j.message.trim():void 0;return A(c,{phase:"error",error:G===void 0?{code:"unknown"}:{code:"host",message:G}}),"stop"}};try{if(await $n({draft:L,mode:B,locale:U,sessionId:ae,signal:u.controller.signal,onEvent:Ar,fetch:t,timers:n,idleMs:i}),le)return;if(be)throw J("stream");await Ee(c,u,{draft:L,mode:B,locale:U,key:ee,sessionId:ae})}catch(j){if(u.controller.signal.aborted||ze(j)||!fe())return;if(be){A(c,{phase:"error",error:zr(j)}),K.play("boostFail");return}try{await Ee(c,u,{draft:L,mode:B,locale:U,key:ee,sessionId:ae})}catch(G){if(u.controller.signal.aborted||ze(G)||!fe())return;A(c,{phase:"error",error:zr(G)}),K.play("boostFail")}}finally{T===u&&(T=null)}}async function Ee(c,u,z){let L=await Un({draft:z.draft,mode:z.mode,locale:z.locale,signal:u.controller.signal,fetch:t,sessionId:z.sessionId??""});T!==u||u.controller.signal.aborted||oe(c,L,z.key)}function je(c,u){let z=typeof u=="string"?u:"";z!==""&&(m=z,E(c)&&p.set(c,z))}function Oe(c){return E(c)?p.get(c)??m:m}function Ie(c,u){let z=typeof u?.draft=="string"?u.draft:"",L=Array.isArray(u?.occurrences)?u.occurrences:[],B=F(c);if(B.text===z&&B.references.length===L.length)return;let U={text:z,references:L.map(ae=>({...ae}))},ee=E(c)?c:M;E(ee)?g.set(ee,U):I=U}function b(c,u={}){E(c)&&(M=c);let z=u.locale==="en"?"en":"zh",L=u.force===!0,B=F(c),U=pt(B.text),ee=U.trim()===""?"compose":"improve",ae=Re(c,ee,U);if(Te(),ne(c),!L){let fe=Me(ae);if(fe!==null){oe(c,{...fe,cached:!0},ae);return}}q+=1;let be={seq:q,actions:c,controller:new AbortController};T=be;let le=_(c);A(c,{phase:"running",mode:ee,seed:U,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:le.phase==="idle"&&le.undo===null?!1:le.expanded}),K.play("boostStart"),xe(c,be,{draft:U,mode:ee,locale:z,key:ae,sessionId:Oe(c)})}function R(c,u={}){b(c,{locale:u.locale,force:!0})}function P(c){let u=_(c);if(u.phase!=="ready")return!1;let z=u.prompt.trim();if(z==="")return!1;let L=me(c);if(!E(L)||typeof L.setDraft!="function")return A(c,{phase:"error",error:{code:"apply"}}),!1;let B=Ce(F(c)),U=!1;try{L.setDraft({text:z,references:[]}),U=!0}catch{try{L.setDraft(z),U=!0}catch{U=!1}}return U?(ne(c),A(c,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:B,at:r()},expanded:!1}),ue(c),!0):(A(c,{phase:"error",error:{code:"apply"}}),!1)}function $(c){let u=_(c);if(u.undo===null)return!1;let z=me(c),L=Ce(u.undo.draft),B=!1;if(E(z)&&typeof z.setDraft=="function")try{z.setDraft({text:L.text,references:L.references}),B=!0}catch{try{z.setDraft(L.text),B=!0}catch{B=!1}}return ne(c),A(c,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),B}function H(c){_(c).expanded!==!1&&A(c,{expanded:!1})}function Q(c){let u=_(c);u.phase==="idle"&&u.undo===null||u.expanded===!0||A(c,{expanded:!0})}function ye(c){_(c).expanded===!0?H(c):Q(c)}function we(c){let u=E(c)?c:M;T!==null&&T.actions===u&&Te(),ne(c),A(c,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Be(c,u){let z=_(c);z.phase==="streaming"&&(typeof u!="string"||u===z.prompt||A(c,{prompt:u}))}return{subscribe(c){return typeof c!="function"?()=>{}:(w.add(c),()=>{w.delete(c)})},getState:_,panelId:X,sessionKey:re,setDraftMirror:Ie,setSessionId:je,start:b,retry:R,apply:P,undo:$,expand:Q,collapse:H,toggle:ye,dismiss:we,edit:Be}}var _e=Wn();var Ir=`
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
`;var Hn="@local/chatbox-pet",Lr=["slots","locale"];function qr(){return(0,Pr.useSyncExternalStore)(Z.subscribe,Z.getSnapshot,Z.getSnapshot)}function Dr(e){let t=e.locale.bind(se),r=e.locale.bind(Ne);e.effect(()=>e.locale.register(se,{zh:mt,en:gt}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(Ne,{zh:sr,en:cr}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let o=document.querySelector('style[data-plugin="chatbox-pet"]');o!==null&&o.remove();let a=document.createElement("style");return a.setAttribute("data-plugin","chatbox-pet"),a.textContent=`${Qt}
${Ir}
${Vt}
${Sr}
${wr}`,document.head.appendChild(a),()=>{a.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{Z.refresh().then(o=>{ft(o?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let o=()=>K.unlock();return window.addEventListener("pointerdown",o,{capture:!0}),window.addEventListener("keydown",o,{capture:!0}),()=>{window.removeEventListener("pointerdown",o,{capture:!0}),window.removeEventListener("keydown",o,{capture:!0})}},"chatbox-pet: sound unlock");let n=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:Hn,order:1,label:()=>t("label"),locale:se,inject:o=>({sessionId:o})},o=>{if(qr().pet===!1)return null;let l=typeof o?.sessionId=="string"&&o.sessionId!==""?o.sessionId:typeof o?.session?.id=="string"?o.session.id:"";return l===""?null:te.createElement(Ht,{sessionId:l,t,useInput:o?.useInput,locale:n})}));let i=o=>a=>qr().boost===!1?null:o(a);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>r("button.label"),locale:Ne},i(o=>te.createElement(tr,{...o,store:_e,t:r,locale:n})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>t("merge.label")(2),locale:se,inject:o=>({sessionId:o})},o=>{let a=typeof o?.sessionId=="string"?o.sessionId:"";return a===""?null:te.createElement(ir,{sessionId:a,sessions:e.get("sessions"),t,locale:n,onNotice:l=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:a,text:l,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:Ne},i(o=>te.createElement(pr,{...o,store:_e,t:r,locale:n})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>t("quick.label"),locale:se,inject:o=>({sessionId:o})},o=>te.createElement(vr,{inputActions:o?.inputActions,sessionId:typeof o?.sessionId=="string"?o.sessionId:"",t,locale:n})));function s({sessionId:o,session:a}){let l=typeof o=="string"&&o!==""?o:typeof a?.id=="string"?a.id:"";return te.useEffect(()=>{l!==""&&_e.setSessionId(null,l)},[l]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:se,inject:o=>({sessionId:o})},o=>te.createElement(s,{sessionId:o?.sessionId,session:o?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:se},()=>te.createElement(Yt,{t})))}
		return module.exports;
	}
});
