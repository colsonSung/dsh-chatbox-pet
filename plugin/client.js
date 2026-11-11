window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var Kr=Object.create;var Ae=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var Vr=Object.getOwnPropertyNames;var Jr=Object.getPrototypeOf,Yr=Object.prototype.hasOwnProperty;var Xr=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(n){throw r=[n],n}};var bt=(e,t)=>{for(var r in t)Ae(e,r,{get:t[r],enumerable:!0})},ft=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Vr(t))!Yr.call(e,o)&&o!==r&&Ae(e,o,{get:()=>t[o],enumerable:!(n=Gr(t,o))||n.enumerable});return e};var pe=(e,t,r)=>(r=e!=null?Kr(Jr(e)):{},ft(t||!e||!e.__esModule?Ae(r,"default",{value:e,enumerable:!0}):r,e)),Zr=e=>ft(Ae({},"__esModule",{value:!0}),e);var Cr={};bt(Cr,{transcribe:()=>Kn});async function Kn(e){let t=await fetch("/api/chatbox-pet/transcribe?name=voice.webm",{method:"POST",headers:{"content-type":e.type||"audio/webm"},body:e}),r;try{r=await t.json()}catch{throw new Error(`\u8F6C\u5199\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(r?.ok!==!0)throw new Error(r?.error?.message??"\u8F6C\u5199\u5931\u8D25");let n=r.result?.text??"";if(n.trim()==="")throw new Error("\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF0C\u8BF7\u518D\u8BF4\u4E00\u6B21");return n}var Tr=Xr(()=>{});var na={};bt(na,{apply:()=>Wr,inject:()=>Ur});module.exports=Zr(na);var Z=pe(require("react"),1);var He="chatboxPet.sound",ht=!0,en=.3,tn=1e3,rn=7,We={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},oa=Object.freeze(Object.keys(We)),nn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function mt(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":nn[e]}function Ee(e){try{return e?.getItem(He)==="off"?"off":"on"}catch{return"on"}}function gt(e){ht=e!==!1}function Qe(e,t){try{e?.setItem(He,t==="off"?"off":"on")}catch{}}function xt(e){let t=Ee(e)==="on"?"off":"on";return Qe(e,t),t}function ye(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function an(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function on(e){let t=e.now??(()=>Date.now()),r=null,n=null,o=!1,i=new Map,l=new Map,a=0;function s(){if(!o)try{let p=e.createContext();if(p==null)return;let x=p.createGain();if(x.gain.value=en,x.connect(p.destination),p.state==="suspended"&&typeof p.resume=="function"){let k=p.resume();k!==void 0&&typeof k.catch=="function"&&k.catch(()=>{})}r=p,n=x,o=!0}catch{r=null,n=null,o=!1}}function f(p,x,k){if(x<=1)return 0;if(typeof k=="string"&&k!=="")return an(k)%x;let h=(l.get(p)??0)%x;return l.set(p,h+1),h}function S(p,x){if(e.getPref()!=="on"||!o||r===null||n===null||!e.isVisible())return!1;let k=We[p];if(k===void 0)return!1;let h=t(),C=i.get(p);if(C!==void 0&&h-C<tn)return!1;i.set(p,h);let P=Array.isArray(k.variants)?k.variants:[];if(P.length===0)return!1;let g=P[f(p,P.length,x)];a=(a+1)%7;let y=(a-3)*(rn/3);try{return sn(r,n,g,y),!0}catch{return!1}}return{play:S,unlock:s,isUnlocked:()=>o,recipeNames:()=>Object.keys(We)}}function sn(e,t,r,n){let o=e.currentTime;for(let i of r.notes){let l=o+i.at,a=e.createOscillator(),s=e.createGain();a.type=i.type,a.frequency.setValueAtTime(i.freq,l),typeof i.slideTo=="number"&&a.frequency.exponentialRampToValueAtTime(i.slideTo,l+i.dur),n!==0&&typeof a.detune=="object"&&a.detune!==null&&a.detune.setValueAtTime(n,l),s.gain.setValueAtTime(1e-4,l),s.gain.exponentialRampToValueAtTime(i.level,l+.008),s.gain.exponentialRampToValueAtTime(1e-4,l+i.dur),a.connect(s),s.connect(t),a.start(l),a.stop(l+i.dur+.02)}}function cn(){return{getPref:()=>{let e=ye()?.getItem(He);return e==="on"||e==="off"?e:ht?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var J=on(cn());var $r=require("react");var de="chatboxPet",yt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","translate.sidebar":"\u7FFB\u8BD1","sheet.close":"\u5173\u95ED","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,t,r)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${t} \xB7 \u65F6\u957F ${Math.round(r)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},wt={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","translate.sidebar":"Translate","sheet.close":"Close","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,t,r)=>`${e} segments \xB7 ${t} \xB7 ${Math.round(r)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var R=pe(require("react"),1);var ln=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],pn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},vt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],Ke={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},ca=[...vt.map(e=>e.id),"fallback"];function Ge(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function St(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function kt(e){let t=St(e);if(t==="")return null;for(let r of ln){let n=/^[a-z ]+$/.test(r),i=(n?new RegExp(`(^|[^a-z])${Ge(r).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(Ge(r))).exec(t);if(i===null)continue;let l=i.index+(n?i[1].length:0),a=l+(n?r.replace(/ /g," ").length:r.length),s=`${t.slice(0,l)} ${t.slice(a)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:r,rest:s}}return null}function dn(e){let t=2166136261,r=String(e??"");for(let n=0;n<r.length;n+=1)t^=r.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function un(e){let t=St(e);if(t==="")return"fallback";for(let r of vt){for(let n of r.zh)if(t.includes(n))return r.id;for(let n of r.en)if(new RegExp(`(^|[^a-z])${Ge(n).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return r.id}return"fallback"}function Nt(e,t){let r=Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[];return r.length===0?"":r[dn(t)%r.length]}function bn(e,t={}){let r=Ke[e]??Ke.fallback,n=t.locale==="en"?"en":"zh",o=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:Ke[e]===void 0?"fallback":e,clip:r.clip,sound:r.sound,line:Nt(r[n],o)}}function zt(e,t="zh"){let r=String(e??"");return/[\u4e00-\u9fff]/.test(r)?"zh":/[a-z]/i.test(r)||t==="en"?"en":"zh"}function Rt(e={}){let t=e.locale==="en"?"en":"zh";return Nt(pn[t],e.seed??"wake")}function Ct(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),r=Number.isFinite(e.debounceMs)?e.debounceMs:700,n=Number.isFinite(e.holdMs)?e.holdMs:15e3,o=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,i=!1,l="",a="",s=0,f=0;function S(k){let h=kt(k);return h===null?i?(i=!1,l="",a="",{kind:"off"}):null:(s=t(),i?null:(i=!0,l=h.wake,a=h.rest,s=t(),f=0,{kind:"wake",wake:h.wake,digest:h.rest}))}function p(k,h={}){if(!i)return null;let C=kt(k);if(C===null)return i=!1,{kind:"off"};let P=`${C.wake}\0${C.rest}`;if(P===a)return null;let g=t(),y=g-f;if(y<o)return{kind:"cooldown",retryInMs:o-y};a=P,f=g,s=g;let D=un(C.rest);return{kind:"reply",...bn(D,{...h,seed:P}),digest:P}}function x(){return!i||t()-s<n?null:(i=!1,l="",a="",{kind:"off"})}return{observe:S,settle:p,expire:x,isActive:()=>i,debounceMs:r,holdMs:n,wakeWord:()=>l}}var B=pe(require("react"),1),jt=require("react-dom");var Tt=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Fe=60;function Mt(e,t){let r=t==="en"?"en":"zh";return typeof e?.[r]=="string"?e[r]:""}function Ie(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=Fe?t:r.slice(0,Fe).join("")}function Et(e,t,r,n=8){let i=Number.isFinite(t?.width)?t.width:0,l=Number.isFinite(t?.height)?t.height:0,a=Number.isFinite(r?.width)?r.width:0,s=Number.isFinite(r?.height)?r.height:0,f=(Number.isFinite(e?.right)?e.right:0)-i;f<8&&(f=Number.isFinite(e?.left)?e.left:8);let S=(Number.isFinite(e?.top)?e.top:0)-l-n;S<8&&(S=(Number.isFinite(e?.bottom)?e.bottom:0)+n);let p=Math.max(8,a-i-8),x=Math.max(8,s-l-8);return{left:Math.min(Math.max(f,8),p),top:Math.min(Math.max(S,8),x)}}var Ve=["topic","reminder","recall","nudge","encourage","tease","chitchat"],It={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Pt=9e3,fn=24e4,Je=.05;function qt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<fn)return!1;let r=Number.isFinite(e.chance)?e.chance:Je;return(typeof e.random=="function"?e.random:Math.random)()<r}function Lt(e,t){let r=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[r]??""}function Dt(e){return It[e]??It.chitchat}async function At(e={}){let t=typeof e.fetch=="function"?e.fetch:(...r)=>globalThis.fetch(...r);try{let r=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!r.ok)return null;let n=await r.json();if(n?.ok!==!0)return null;let o=n.result;return typeof o?.text!="string"||o.text.trim()===""?null:{kind:Ve.includes(o.kind)?o.kind:"chitchat",text:o.text.trim(),quote:typeof o?.quote=="string"?o.quote:"",item:typeof o?.item=="string"?o.item:"",source:typeof o?.source?.label=="string"?o.source:null,sources:Array.isArray(o?.sources)?o.sources:[]}}catch{return null}}var Ft=268;function Ot({anchor:e,locale:t,onSay:r,onAction:n,onQuip:o,recent:i,onForget:l,onClose:a,t:s}){let f=B.useRef(null),S=B.useRef(null),[p,x]=B.useState(""),[k,h]=B.useState(()=>({left:0,top:0,ready:!1}));B.useLayoutEffect(()=>{let g=f.current;if(g===null)return;let y=g.getBoundingClientRect().height,D=Et(e,{width:Ft,height:y},{width:window.innerWidth,height:window.innerHeight});h({...D,ready:!0})},[e]),B.useEffect(()=>{let g=S.current;g!==null&&typeof g.focus=="function"&&g.focus()},[]),B.useEffect(()=>{let g=D=>{let q=f.current;q!==null&&D.target instanceof Node&&q.contains(D.target)||a()},y=D=>{D.key==="Escape"&&(D.preventDefault(),D.stopPropagation(),a())};return document.addEventListener("pointerdown",g,!0),document.addEventListener("keydown",y,!0),()=>{document.removeEventListener("pointerdown",g,!0),document.removeEventListener("keydown",y,!0)}},[a]);let C=()=>{let g=Ie(p);g!==""&&(r(g),a())},P={left:`${Math.round(k.left)}px`,top:`${Math.round(k.top)}px`,width:`${Ft}px`,visibility:k.ready?"visible":"hidden"};return(0,jt.createPortal)(B.createElement("div",{ref:f,className:"cbp-menu",style:P,role:"menu","aria-label":s("menu.title"),"data-cbp-menu":"true",onContextMenu:g=>g.preventDefault()},B.createElement("div",{className:"cbp-menu-say"},B.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},s("menu.say")),B.createElement("div",{className:"cbp-menu-row"},B.createElement("input",{id:"cbp-menu-say-input",ref:S,className:"cbp-menu-input",type:"text",value:p,maxLength:Fe,placeholder:s("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:g=>x(g.target.value),onKeyDown:g=>{g.key==="Enter"&&(g.preventDefault(),g.stopPropagation(),C())}}),B.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:Ie(p)==="",onClick:C},s("menu.saySubmit")))),i.length===0?null:B.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},B.createElement("span",{className:"cbp-menu-label"},s("menu.recent"),B.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:l},s("menu.clear"))),B.createElement("div",{className:"cbp-menu-recent-list"},i.slice(0,8).map(g=>B.createElement("button",{key:`${g.text}-${g.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":g.text,title:g.text,onClick:()=>{r(g.text),a()}},g.text)))),B.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},B.createElement("span",{className:"cbp-menu-label"},s("menu.quip")),B.createElement("div",{className:"cbp-menu-grid"},Ve.map(g=>B.createElement("button",{key:g,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":g,onClick:()=>{o(g),a()}},Lt(g,t))))),B.createElement("div",{className:"cbp-menu-actions"},B.createElement("span",{className:"cbp-menu-label"},s("menu.action")),B.createElement("div",{className:"cbp-menu-grid"},Tt.map(g=>B.createElement("button",{key:g.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":g.clip,title:g.clip,onClick:()=>{n(g.clip),a()}},Mt(g,t))))),B.createElement("p",{className:"cbp-menu-hint"},s("menu.hint"))),document.body)}var Ye="/api/chatbox-pet/said",_t="chatboxPet.said";function Ze(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let r=Array.from(t);return r.length<=60?t:r.slice(0,60).join("")}function hn(e,t,r=Date.now()){let n=Ze(t),o=Array.isArray(e)?e.filter(l=>typeof l?.text=="string"):[];if(n==="")return o.slice(0,24);let i=o.filter(l=>l.text!==n);return[{text:n,at:r},...i].slice(0,24)}function Xe(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],r=[],n=new Set;for(let o of t){let i=Ze(typeof o=="string"?o:o?.text);if(!(i===""||n.has(i))&&(n.add(i),r.push({text:i,at:Number.isFinite(o?.at)?o.at:0}),r.length>=24))break}return r}function mn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function gn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...p)=>globalThis.fetch(...p),r=e.storage===void 0?mn():e.storage,n=()=>{try{let p=r?.getItem(_t);return p==null?[]:Xe(JSON.parse(p))}catch{return[]}},o=p=>{try{r?.setItem(_t,JSON.stringify(p))}catch{}},i=Object.freeze({lines:Object.freeze(n()),loaded:!1}),l=new Set;function a(p){i=Object.freeze({...i,...p});for(let x of l)try{x()}catch{}}async function s(){try{let x=await(await t(Ye,{method:"GET",headers:{accept:"application/json"}})).json();if(x?.ok===!0){let k=Xe(x.result);return a({lines:k,loaded:!0}),o(k),k}}catch{}return a({loaded:!0}),i.lines}async function f(p){let x=Ze(p);if(x==="")return i.lines;let k=hn(i.lines,x);a({lines:Object.freeze(k)}),o(k);try{let C=await(await t(Ye,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:x})})).json();if(C?.ok===!0){let P=Xe(C.result);return a({lines:P,loaded:!0}),o(P),P}}catch{}return i.lines}async function S(){a({lines:Object.freeze([])}),o([]);try{await t(Ye,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(p){return typeof p!="function"?()=>{}:(l.add(p),()=>l.delete(p))},getSnapshot(){return i},refresh:s,remember:f,clear:S}}var we=gn();var et=null;function Bt(e,t){let r=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(r)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(r)?!1:/Mac/i.test(typeof t=="string"?t:r)}function $t(e){if(e!==void 0)return Bt(e.userAgent,e.platform)?".mov":".webm";if(et===null){let t=typeof navigator>"u"?void 0:navigator;et=Bt(t?.userAgent,t?.platform)?".mov":".webm"}return et}var Ut={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},xn={failed:"click-angry",cancelled:"act-shy"};function Wt(e){let t=e?.previous?.status??"idle",r=e?.next?.status??"idle",n=e?.previous?.detail??null,o=e?.next?.detail??null,i=r!==t||o!==n,a=t==="working"&&r==="thinking"?"result":r;if(!i)return{changed:!1,status:a,detail:o,clip:null,sound:null};if(r==="idle")return{changed:!0,status:"idle",detail:o,clip:null,sound:null};let s=a==="error"?xn[o]??Ut.error:Ut[a]??e?.idleClip??null;return{changed:!0,status:a,detail:o,clip:s,sound:mt(a,o)}}var yn=6e3,wn=5e3,kn={thinking:0,working:1,result:2,waiting:3,success:4,error:5},he="idle-breathe-loop",Ht="click-wave",Qt=["act-harley","act-beach"],Kt=6e3,vn=9e4,Sn=.12;function Gt({sessionId:e,t,useInput:r,locale:n}){let o=R.useRef(null),i=R.useRef(null),l=R.useRef("idle"),a=R.useRef(null),s=R.useRef(Date.now()),f=R.useRef(null),S=R.useRef(0),p=R.useRef(0),[x,k]=R.useState(null),[h,C]=R.useState(null),g=R.useSyncExternalStore(we.subscribe,we.getSnapshot,we.getSnapshot).lines,y=R.useRef(0),[D,q]=R.useState(null),[T,z]=R.useState("idle"),[L,O]=R.useState(!0),F=R.useRef(!1),_=R.useCallback((m,M)=>{let A=o.current;if(A===null||A.dataset.clip===m&&A.loop===M&&!A.ended)return;A.dataset.clip=m,A.loop=M,A.src=`/api/chatbox-pet/asset/${m}${$t()}`;let d=A.play();d!==void 0&&typeof d.catch=="function"&&d.catch(()=>{})},[]),ce=R.useCallback(()=>{let m=o.current;if(m!==null){if(!F.current&&m.dataset.clip!==he){F.current=!0,_(he,!0);return}O(!1)}},[_]),oe=R.useCallback(()=>{window.clearTimeout(y.current),q(null)},[]),K=R.useCallback((m,M,A,d=wn,I=null)=>{window.clearTimeout(y.current),q({text:m,kind:A,source:I}),M||(y.current=window.setTimeout(()=>q(null),d))},[]),ke=R.useCallback(m=>{let M=i.current?.workStatusTexts,A=kn[m],d=A===void 0||!Array.isArray(M)?void 0:M[A];if(!(!Array.isArray(d)||d.length===0))return d[Math.floor(Math.random()*d.length)]},[]),ve=R.useCallback(m=>{let M=typeof m?.status=="string"?m.status:"idle",A=l.current,d=typeof m?.detail=="string"?m.detail:null,I=Wt({previous:{status:A,detail:a.current},next:{status:M,detail:d},idleClip:he});if(!I.changed){M==="waiting"&&typeof m?.bubble=="string"&&m.bubble!==""&&K(m.bubble,!0,"waiting");return}if(l.current=M,a.current=d,z(M),f.current!==null&&f.current.isActive()){s.current=Date.now();return}if(M==="idle"){_(he,!0),oe(),s.current=Date.now();return}s.current=Date.now();let $=I.status,ee=I.detail;_(I.clip??he,!1);let ge=typeof m?.bubble=="string"&&m.bubble!==""?m.bubble:ke($),Ue=m?.source==="broadcast"?"notify":I.sound;J.play(Ue,ge),ge!==void 0?K(ge,M==="waiting",$):oe()},[oe,ke,_,K]),ue=R.useCallback(async m=>{let M=await At({kind:m,locale:typeof n=="function"?n():"zh"});if(M===null)return;let A=Dt(M.kind);_(A.clip,!1),J.play(A.sound,M.text),K(M.text,!1,"quip",Pt,M.source?.label??null)},[n,_,K]),fe=R.useCallback(()=>{if(l.current!=="idle"||f.current!==null&&f.current.isActive())return;let M=Date.now()-s.current;if(M<vn)return;if(qt({idleForMs:M,chance:Je})){s.current=Date.now(),ue(null);return}if(Math.random()>Sn)return;let A=Qt[Math.floor(Math.random()*Qt.length)];_(A,!1),s.current=Date.now()},[_,ue]),re=R.useCallback((m,M,A)=>{typeof m.clip=="string"&&m.clip!==""&&_(m.clip,!1),typeof m.sound=="string"&&m.sound!==""&&J.play(m.sound,m.line),typeof m.line=="string"&&m.line!==""&&K(m.line,M,"chat",A)},[_,K]),ie=R.useCallback(()=>{window.clearTimeout(p.current),k(null),_(he,!0),oe()},[oe,_]),ne=typeof r=="function"?r(m=>typeof m?.draft=="string"?m.draft:""):"";R.useEffect(()=>{f.current===null&&(f.current=Ct());let m=f.current,M=zt(ne,typeof n=="function"?n():"zh"),A=m.observe(ne);if(A!==null&&A.kind==="wake"&&(k({phase:"awake"}),re({clip:"click-surprise",sound:"wake",line:Rt({locale:M,seed:ne})},!0)),A!==null&&A.kind==="off"){ie();return}if(window.clearTimeout(S.current),!m.isActive())return;let d=I=>{S.current=window.setTimeout(()=>{let $=m.settle(ne,{locale:M});if($!==null&&$.kind==="cooldown"){d(Math.max(120,$.retryInMs));return}$===null||$.kind!=="reply"||(re($,!1,Kt),window.clearTimeout(p.current),p.current=window.setTimeout(()=>ie(),m.holdMs))},I)};return d(m.debounceMs),()=>window.clearTimeout(S.current)},[ne,n,re,ie]),R.useEffect(()=>{we.refresh()},[]),R.useEffect(()=>{let m=!1;return fetch("/api/chatbox-pet/config").then(M=>M.ok?M.json():null).then(M=>{!m&&M?.ok===!0&&(i.current=M.result)}).catch(()=>{}),()=>{m=!0}},[]),R.useEffect(()=>{if(typeof e!="string"||e==="")return;let m=!1,M=0,A=async()=>{if(document.visibilityState==="visible"){try{let $=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),ee=$.ok?await $.json():null;!m&&ee?.ok===!0&&ve(ee.result)}catch{}m||fe()}},d=()=>{M=window.setTimeout(async()=>{await A(),m||d()},yn)},I=()=>{document.visibilityState==="visible"&&A()};return document.addEventListener("visibilitychange",I),A(),d(),()=>{m=!0,window.clearTimeout(M),document.removeEventListener("visibilitychange",I)}},[e,ve]),R.useEffect(()=>(_(he,!0),()=>window.clearTimeout(y.current)),[_]);let[se,me]=R.useState(()=>Ee(ye())==="on"),Te=R.useCallback(m=>{let M=Ie(m);M!==""&&(_(Ht,!1),J.play("click",M),K(M,!1,"chat",Kt),we.remember(M))},[_,K]),Me=R.useCallback(m=>{typeof m!="string"||m===""||(_(m,!1),J.play("click",m))},[_]),Se=R.useCallback(()=>{let m=document.querySelector("[data-cbp-pet]"),M=m instanceof Element?m.getBoundingClientRect():null;M!==null&&C({left:M.left,right:M.right,top:M.top,bottom:M.bottom})},[]);return R.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},R.createElement("div",{className:"cbp-stage"},R.createElement("div",{className:(D===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(D?.kind==="error"?" cbp-bubble--error":"")+(D?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},D?.source?R.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":D.source},D.source):null,R.createElement("span",{className:"cbp-bubble-text"},D?.text??"")),R.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(se?"sound.on":"sound.off"),"aria-pressed":se,onClick:m=>{m.stopPropagation();let M=xt(ye())==="on";me(M),prefsStore.update({sound:M})}},se?R.createElement(Nn,null):R.createElement(zn,null)),R.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":x===null?T:"awake","data-cbp-chat":x===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{J.play("click"),_(Ht,!1)},onContextMenu:m=>{m.preventDefault(),m.stopPropagation(),Se()},onKeyDown:m=>{(m.key==="ContextMenu"||m.shiftKey&&m.key==="F10")&&(m.preventDefault(),Se())},"aria-haspopup":"menu","aria-expanded":h===null?"false":"true"},L?R.createElement("video",{ref:o,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:m=>{m.currentTarget.loop||_(he,!0)},onError:ce}):R.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),h===null?null:R.createElement(Ot,{anchor:h,locale:typeof n=="function"?n():"zh",onSay:Te,onAction:Me,onQuip:m=>{ue(m)},recent:g,onForget:()=>{we.clear()},onClose:()=>C(null),t}))}function Nn(){return R.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},R.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),R.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),R.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function zn(){return R.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},R.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),R.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Vt=`
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
`;var Jt="/api/chatbox-pet/prefs",Rn=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function Cn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...a)=>globalThis.fetch(...a),r=Rn,n=new Set;function o(a){r={...r,...a};for(let s of n)try{s()}catch{}}async function i(){try{let s=await(await t(Jt,{method:"GET",headers:{accept:"application/json"}})).json();s?.ok===!0&&s.result!==null&&typeof s.result=="object"?o({pet:s.result.pet!==!1,boost:s.result.boost!==!1,sound:s.result.sound!==!1,loaded:!0}):o({loaded:!0})}catch{}return r}async function l(a){let s=r,f={};for(let S of["pet","boost","sound"])typeof a?.[S]=="boolean"&&(f[S]=a[S]);o(f);try{let p=await(await t(Jt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:f})})).json();if(p?.ok!==!0||p.result===null||typeof p.result!="object")throw new Error("rejected");return o({pet:p.result.pet!==!1,boost:p.result.boost!==!1,sound:p.result.sound!==!1,loaded:!0}),!0}catch{return o({pet:s.pet,boost:s.boost,sound:s.sound}),!1}}return{subscribe(a){return typeof a!="function"?()=>{}:(n.add(a),()=>n.delete(a))},getSnapshot(){return r},refresh:i,update:l}}var ae=Cn();var G=pe(require("react"),1),Yt=require("react");var Xt=`
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
`;function tt({id:e,checked:t,label:r,onChange:n}){return G.createElement("label",{className:"cbp-set-item",htmlFor:e},G.createElement("span",{className:"cbp-switch"},G.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:o=>n(o.target.checked),"data-cbp-pref":e}),G.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),G.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),r)}function Zt({t:e}){let t=(0,Yt.useSyncExternalStore)(ae.subscribe,ae.getSnapshot,ae.getSnapshot),[r,n]=G.useState(()=>Ee(ye())==="on"),o=i=>{n(i),Qe(ye(),i?"on":"off"),ae.update({sound:i})};return G.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},G.createElement("div",{className:"cbp-set-head"},G.createElement("span",{className:"cbp-set-title"},e("settings.title")),G.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),G.createElement("div",{className:"cbp-set-items"},G.createElement(tt,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:i=>{ae.update({pet:i})}}),G.createElement(tt,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:i=>{ae.update({boost:i})}}),G.createElement(tt,{id:"chatbox-pet-feature-sound",checked:r,label:e("settings.sound"),onChange:o})))}var Pe=pe(require("react"),1),Oe=require("react"),nt=require("@deepseek-ai/dsh-client-ui-primitives");var W=require("react");function Re({size:e=16,children:t}){return(0,W.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function je({size:e=16}){return(0,W.createElement)(Re,{size:e},[(0,W.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,W.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function er({size:e=16}){return(0,W.createElement)(Re,{size:e},(0,W.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function tr({size:e=16}){return(0,W.createElement)(Re,{size:e},[(0,W.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function rt({size:e=16}){return(0,W.createElement)(Re,{size:e},[(0,W.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,W.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function rr({size:e=16}){return(0,W.createElement)(Re,{size:e},(0,W.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function nr({size:e=16}){return(0,W.createElement)(Re,{size:e},[(0,W.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,W.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,W.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,W.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,W.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function Tn({label:e,children:t}){return typeof nt.Tooltip=="function"?Pe.createElement(nt.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Oe.cloneElement)(t,{title:e})}function ar({inputActions:e,useInput:t,store:r,t:n,locale:o}){let i=(0,Oe.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),l=typeof t=="function"?t(x=>x):void 0;r.setDraftMirror(e,l);let a=typeof l?.draft=="string"?l.draft:"",s=i.phase==="running"||i.phase==="streaming",f=i.phase!=="idle",S=n(s?"button.running":"button.label"),p=s?n("button.running"):a.trim()===""?n("button.tooltipCompose"):n("button.tooltip");return Pe.createElement(Tn,{label:p},Pe.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":s?"true":"false","data-pb-open":f?"true":"false","aria-label":S,"aria-busy":s?"true":void 0,"aria-expanded":f?"true":"false","aria-controls":r.panelId(e),onMouseDown:x=>x.preventDefault(),onClick:()=>r.start(e,{locale:typeof o=="function"?o():"zh"})},Pe.createElement(je,{size:16})))}var Y=pe(require("react"),1),_e=require("react"),it=require("@deepseek-ai/dsh-client-ui-primitives");var or="next-turn";function at(e){return(Array.isArray(e?.content)?e.content:[]).filter(r=>r!==null&&typeof r=="object"&&r.type==="text"&&typeof r.text=="string").map(r=>r.text).join("").trim()}function Mn(e){return(Array.isArray(e?.content)?e.content:[]).some(r=>r===null||typeof r!="object"||r.type!=="text")}function ir(e){let t=[];try{let n=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();t=Array.isArray(n?.[or])?n[or]:[]}catch{t=[]}return ot(t)}function ot(e){let r=(Array.isArray(e)?e:[]).filter(l=>l!==null&&typeof l=="object"&&typeof l.id=="string"),n=r.map(at),o=r.filter((l,a)=>!Mn(l)&&n[a]!==""),i="";return r.length>=2&&o.length!==r.length?i="attachment":r.length>8?i="too-many":r.length<2&&(i="too-few"),{items:r,texts:n,mergeable:r.length,blocked:i}}async function En(e,t={}){let r=In(e),n=typeof t.fetchImpl=="function"?t.fetchImpl:(...o)=>globalThis.fetch(...o);try{let o=await n("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof t.sessionId=="string"?t.sessionId:void 0,locale:t.locale==="en"?"en":"zh"})});if(!o.ok)return{prompt:r,optimized:!1,reason:"http-"+String(o.status)};let i=await o.json(),l=typeof i?.result?.prompt=="string"?i.result.prompt.trim():"";return l===""?{prompt:r,optimized:!1,reason:"empty"}:{prompt:l,optimized:i.result.optimized===!0,reason:typeof i.result.reason=="string"?i.result.reason:""}}catch{return{prompt:r,optimized:!1,reason:"network"}}}function In(e){return(Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>t!=="").join(`

`)}async function Pn(e,t,r){let n=Array.isArray(t)?t:[],o=String(r??"").trim();if(n.length<2||o==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[i,...l]=n;try{let f=await e.updateQueue(i.id,{kind:"edit",content:[{type:"text",text:o}]});if(f?.ok!==!0)return{ok:!1,merged:0,removed:0,error:f?.error?.code??"edit-failed"}}catch(f){return{ok:!1,merged:0,removed:0,error:sr(f)}}let a=0,s=0;for(let f of l)try{let S=await e.updateQueue(f.id,{kind:"remove"});if(S?.ok===!0){a+=1;continue}if(S?.error?.code==="session/queue-item-not-found"){s+=1;continue}return{ok:!1,merged:1,removed:a,claimed:s,error:S?.error?.code??"remove-failed"}}catch(S){return{ok:!1,merged:1,removed:a,claimed:s,error:sr(S)}}return{ok:s===0,merged:1,removed:a,claimed:s,error:s>0?"session/queue-item-not-found":""}}async function cr(e={}){let t=ir(e.session);if(t.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:t.blocked};let r=t.items.map(at),n=await En(r,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),o=ir(e.session);if(!(o.items.length===t.items.length&&o.items.every((a,s)=>a.id===t.items[s].id&&at(a)===r[s])))return{ok:!1,count:t.items.length,optimized:!1,reason:"",error:"queue-changed"};let l=await Pn(e.session,t.items,n.prompt);return{ok:l.ok,count:t.items.length,optimized:n.optimized,reason:n.reason,error:l.error}}function sr(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function qn({label:e,children:t}){return typeof it.Tooltip=="function"?Y.createElement(it.Tooltip,{label:e,side:"top",delayMs:400},t):(0,_e.cloneElement)(t,{title:e})}var Ln=Object.freeze({}),Dn=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>Ln});function An(e){let t=(()=>{try{let n=e?.projections?.faceOf?.("inbox");if(typeof n?.subscribe=="function"&&typeof n?.getSnapshot=="function")return n}catch{}return Dn})(),r=(0,_e.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot);return ot(r?.["next-turn"])}function lr({sessionId:e,sessions:t,t:r,locale:n,onNotice:o}){let i=Y.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return t?.binding?.(e)?.session??null}catch{return null}},[t,e]),l=An(i),[a,s]=Y.useState("idle"),[f,S]=Y.useState(""),p=Y.useRef(0);Y.useEffect(()=>()=>window.clearTimeout(p.current),[]);let x=l.items.length;if(x<2||l.blocked==="attachment"||l.blocked==="too-many")return null;let k=async()=>{if(a!=="running"){s("running"),S("");try{let C=await cr({session:i,sessionId:e,locale:typeof n=="function"?n():"zh"});if(C.ok){let P=C.optimized?r("merge.done")(C.count):r("merge.donePlain")(C.count);S(P),o?.(P)}else S(C.error==="queue-changed"?r("merge.changed"):C.error==="session/queue-item-not-found"?r("merge.claimed"):r("merge.failed"))}catch{S(r("merge.failed"))}finally{s("idle"),window.clearTimeout(p.current),p.current=window.setTimeout(()=>S(""),4e3)}}},h=a==="running"?r("merge.running"):f!==""?f:r("merge.label")(x);return Y.createElement(qn,{label:h},Y.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":x,"data-cbp-merge-phase":a,"aria-label":h,"aria-busy":a==="running"?"true":void 0,disabled:a==="running",onClick:C=>{C.stopPropagation(),k()}},Y.createElement(nr,null),Y.createElement("span",{className:"cbp-merge-count"},a==="running"?"\u2026":x)))}var qe="promptBoost",pr={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},dr={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var v=pe(require("react"),1),X=require("react");var Fn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function jn(){return v.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},v.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),v.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function ur(e,t){let r=`source.${e.id}`,n=t(r);return n===r?e.label:n}function On(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function _n(e,t){if(e.phase!=="ready")return"";let r=[];return e.cached&&r.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&r.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),r.join(" \xB7 ")}function Bn(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let r=e.sources.slice(0,2).map(n=>`${ur(n,t)} ${n.count}`).join(" \xB7 ");return r===""?t("chip.writing"):`${r} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function $n({state:e,store:t,t:r,inputActions:n,chipRef:o}){let i=e.phase==="applied",l=e.phase==="running"||e.phase==="streaming",a=e.phase==="ready",s=e.phase==="error",f=e.mode==="compose"?r("panel.compose"):r("button.label"),S=Bn(e,r);return i?v.createElement("div",{className:"pb-chip-row"},v.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":r("chip.expand"),onClick:()=>t.expand(n),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),t.expand(n))}},v.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},v.createElement(er,{size:12})),v.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},r("undo.done")),v.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),v.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":r("undo.label"),onClick:()=>t.undo(n)},r("undo.action")))):v.createElement("div",{className:"pb-chip-row"},v.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":l?"true":"false",onClick:()=>t.expand(n)},v.createElement("button",{ref:o,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(n),"aria-label":`${r("chip.expand")} \xB7 ${f}`,onClick:()=>t.expand(n)},v.createElement("span",{className:l||a?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},l?v.createElement(jn,null):s?v.createElement(rt,{size:12}):v.createElement(je,{size:12})),v.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},S),a||s?v.createElement(v.Fragment,null,v.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),v.createElement("span",{className:"pb-chip-view"},r("chip.view"))):null),v.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":r("chip.dismiss"),onClick:()=>t.dismiss(n)},v.createElement(tr,{size:10}))))}function Un({state:e,store:t,t:r,inputActions:n,locale:o,panelRef:i}){let l=(0,X.useRef)(null),a=e.phase,s=a==="running",f=a==="streaming",S=a==="ready",p=a==="applied",x=S||p,k=a==="error",h=e.sources,C=s||f||x||h.length>0,P=p?e.applied:e.prompt,g=_n(e,r),y=t.panelId(n),D=r(Fn?"shortcut.mac":"shortcut.other"),q=r(s?"panel.announceRunning":f?"panel.streaming":p?"panel.announceApplied":S?"panel.announceReady":"panel.announceError");return(0,X.useEffect)(()=>{let T=l.current;T===null||a!=="streaming"||(T.scrollTop=T.scrollHeight)},[e.prompt,a]),v.createElement("section",{ref:i,id:y,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":a,"data-pb-running":s||f?"true":"false",tabIndex:-1,"aria-labelledby":`${y}-title`,"aria-busy":s||f?"true":void 0},v.createElement("header",{className:"pb-head"},v.createElement("div",{className:"pb-head-row"},v.createElement("h2",{className:"pb-title",id:`${y}-title`},r("panel.title")),e.mode==="compose"?v.createElement("span",{className:"pb-mode"},r("panel.compose")):null,v.createElement("span",{className:"pb-meta"},g),v.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":r("panel.collapse"),title:r("panel.collapse"),onClick:()=>t.collapse(n)},v.createElement(rr,{size:14}))),C?v.createElement("div",{className:"pb-sources",role:"list","aria-label":r("panel.sources")},h.length>0?h.map(T=>v.createElement("span",{key:T.id,className:"pb-chip",role:"listitem","data-pb-source":T.id},v.createElement("span",{className:"pb-chip-label"},ur(T,r)),v.createElement("span",{className:"pb-chip-count"},T.count))):s?[v.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),v.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:v.createElement("span",{className:"pb-note"},r("panel.noSources"))):null),v.createElement("div",{className:"pb-rule","aria-hidden":"true"}),v.createElement("div",{className:"pb-body"},s?v.createElement(v.Fragment,null,v.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},v.createElement("span",{className:"pb-skeleton-line is-long"}),v.createElement("span",{className:"pb-skeleton-line is-full"}),v.createElement("span",{className:"pb-skeleton-line is-short"})),v.createElement("div",{className:"pb-status"},v.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.status"))):null,f||x?v.createElement("textarea",{ref:l,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:f||p,spellCheck:!1,"aria-label":r("panel.editLabel"),placeholder:r("panel.placeholder"),value:P}):null,f?v.createElement("div",{className:"pb-status"},v.createElement("span",{className:"pb-dot","aria-hidden":"true"}),r("panel.streaming")):null,k?v.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},v.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},v.createElement(rt,{size:14})),v.createElement("span",{className:"pb-error-text"},On(e.error,r))):null,v.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},q)),v.createElement("div",{className:"pb-foot"},v.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(n)},r("panel.close")),v.createElement("span",{className:"pb-foot-spacer"}),x?v.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:D,onClick:()=>t.retry(n,{locale:o()})},r("panel.another"),v.createElement("span",{className:"pb-kbd","aria-hidden":"true"},D)):null,p?v.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(n)},r("undo.action")):null,s||f?v.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(n,{locale:o()})},r("panel.retry")):null,k?v.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(n,{locale:o()})},r("panel.retryError")):null))}function br({inputActions:e,store:t,t:r,locale:n,session:o}){let i=(0,X.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),l=i.phase,a=l!=="idle"||i.undo!==null,s=i.expanded===!0&&l!=="idle";(0,X.useEffect)(()=>{let h=typeof o?.id=="string"?o.id:"";h!==""&&t.setSessionId(e,h)},[o?.id,e,t]);let f=(0,X.useRef)(null),S=(0,X.useRef)(null),p=(0,X.useRef)(null),x=(0,X.useRef)(!1),k=(0,X.useRef)(!1);return(0,X.useEffect)(()=>{if(!a)return;let h=C=>{if(!(C.defaultPrevented||s===!1)){if(C.key==="Escape"){C.preventDefault(),C.stopPropagation(),t.collapse(e);return}C.key==="Enter"&&(C.metaKey||C.ctrlKey)&&(C.preventDefault(),C.stopPropagation(),l==="applied"||l==="ready"?t.retry(e,{locale:n()}):l==="error"&&t.retry(e,{locale:n()}))}};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[a,s,l,e,t,n]),(0,X.useEffect)(()=>{if(a&&x.current===!1){x.current=!0,p.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(a===!1&&x.current){x.current=!1;let h=p.current;if(p.current=null,h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[a]),(0,X.useEffect)(()=>{if(s&&k.current===!1){k.current=!0;let h=S.current;if(h!==null&&typeof h.focus=="function")try{h.focus({preventScroll:!0})}catch{}return}if(s===!1&&k.current){k.current=!1;let h=l==="idle"?p.current:f.current;if(h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[s,l]),a?s===!1?v.createElement($n,{state:i,store:t,t:r,inputActions:e,chipRef:f}):v.createElement(Un,{state:i,store:t,t:r,inputActions:e,locale:n,panelRef:S}):null}var N=pe(require("react"),1),ct=require("react-dom");var fr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function st(e,t){return t==="en"?e.en:e.zh}var u=pe(require("react"),1),hr=require("react-dom"),mr="/api/chatbox-pet",Wn=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],Hn=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function gr(e,t){let r=await fetch(`${mr}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}),n;try{n=await r.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${r.status}\uFF09`);return n.result}function xr(e,t){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:t,references:[]}),!0}catch{try{return e.setDraft(t),!0}catch{return!1}}}function Be({title:e,hint:t,onClose:r,children:n,t:o}){let i=u.useRef(null);return u.useEffect(()=>{let l=a=>{a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),r())};return document.addEventListener("keydown",l,!0),()=>document.removeEventListener("keydown",l,!0)},[r]),(0,hr.createPortal)(u.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:l=>l.stopPropagation()},u.createElement("div",{className:"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:i},u.createElement("div",{className:"cbp-sheet-head"},u.createElement("span",{className:"cbp-sheet-title"},e),u.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":o("sheet.close"),onClick:r},"\u2715")),t?u.createElement("p",{className:"cbp-sheet-hint"},t):null,u.createElement("div",{className:"cbp-sheet-body"},n))),document.body)}function yr({onClose:e,onFill:t,t:r,locale:n}){let[o,i]=u.useState("idle"),[l,a]=u.useState(0),[s,f]=u.useState(null),[S,p]=u.useState(""),x=u.useRef(null),k=u.useRef([]),h=u.useRef(0),C=()=>{h.current!==0&&(clearInterval(h.current),h.current=0)};u.useEffect(()=>()=>{C();try{x.current?.stream?.getTracks?.().forEach(q=>q.stop())}catch{}},[]);let P=async q=>{i("working"),p("");try{let z=await(await fetch(`${mr}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":q.type||"audio/webm"},body:q})).json();if(z?.ok!==!0)throw new Error(z?.error?.message??"\u8F6C\u5199\u5931\u8D25");f(z.result),i("done")}catch(T){p(String(T?.message??T)),i("idle")}},g=async()=>{p("");try{let q=await navigator.mediaDevices.getUserMedia({audio:!0}),T=new MediaRecorder(q);k.current=[],T.ondataavailable=z=>{z.data?.size>0&&k.current.push(z.data)},T.onstop=()=>{C(),q.getTracks().forEach(L=>L.stop());let z=new Blob(k.current,{type:T.mimeType||"audio/webm"});P(z)},x.current=T,T.start(),a(0),i("recording"),h.current=setInterval(()=>a(z=>z+1),1e3)}catch(q){let T=q?.name==="NotAllowedError"||q?.name==="SecurityError";p(T?r("sheet.transcribe.denied"):String(q?.message??q))}},y=()=>{i("working");try{x.current?.stop()}catch{C(),i("idle")}},D=`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`;return u.createElement(Be,{title:r("sheet.transcribe.title"),hint:r("sheet.transcribe.hint"),onClose:e,t:r},s===null?u.createElement(u.Fragment,null,u.createElement("div",{className:"cbp-sheet-center"},u.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":o,"aria-label":r(o==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:o==="recording"?y:g,disabled:o==="working"},u.createElement("span",{className:"cbp-rec-dot"})),u.createElement("span",{className:"cbp-rec-time"},o==="recording"?D:r(o==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),u.createElement("label",{className:"cbp-sheet-file"},u.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:q=>{let T=q.target.files?.[0];T&&P(T),q.target.value=""}}),u.createElement("span",null,r("sheet.transcribe.pick")))):u.createElement(u.Fragment,null,u.createElement("div",{className:"cbp-sheet-meta"},r("sheet.transcribe.meta")(s.segments?.length??0,s.language??"\u2014",s.durationSeconds??0)),u.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},s.text||r("sheet.transcribe.empty")),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(s.text)},r("sheet.fill")),u.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{f(null),i("idle")}},r("sheet.again")))),S?u.createElement("p",{className:"cbp-sheet-error"},S):null)}function wr({onClose:e,onFill:t,t:r,locale:n,sessionId:o=""}){let[i,l]=u.useState("update"),[a,s]=u.useState(""),[f,S]=u.useState(""),[p,x]=u.useState("idle"),[k,h]=u.useState(""),[C,P]=u.useState(""),g=async()=>{x("working"),P("");try{let y=await gr("/write",{genre:i,topic:a,tone:f,locale:n(),session:o});h(y.text),x("done")}catch(y){P(String(y?.message??y)),x("idle")}};return u.createElement(Be,{title:r("sheet.write.title"),hint:r("sheet.write.hint"),onClose:e,t:r},u.createElement("div",{className:"cbp-chips"},Wn.map(y=>u.createElement("button",{key:y.id,type:"button",className:"cbp-chip","data-cbp-genre":y.id,"aria-pressed":i===y.id?"true":"false",onClick:()=>l(y.id)},n()==="en"?y.en:y.zh))),u.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:r("sheet.write.topic"),value:a,maxLength:200,onChange:y=>s(y.target.value)}),u.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:r("sheet.write.tone"),value:f,maxLength:80,onChange:y=>S(y.target.value)}),k===""?u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:p==="working"||a.trim()==="",onClick:g},r(p==="working"?"sheet.working":"sheet.write.go"))):u.createElement(u.Fragment,null,u.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},k),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>t(k)},r("sheet.fill")),u.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>h("")},r("sheet.again")))),C?u.createElement("p",{className:"cbp-sheet-error"},C):null)}function kr({onClose:e,t,locale:r,sessionId:n=""}){let[o,i]=u.useState(""),[l,a]=u.useState(""),[s,f]=u.useState(10),[S,p]=u.useState("idle"),[x,k]=u.useState(null),[h,C]=u.useState(""),P=async()=>{p("working"),C("");try{let y=await gr("/deck",{topic:o,audience:l,pages:s,locale:r(),session:n});k(y),p("done")}catch(y){C(String(y?.message??y)),p("idle")}},g=()=>{if(!x?.base64)return;let y=Uint8Array.from(atob(x.base64),z=>z.charCodeAt(0)),D=new Blob([y],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),q=URL.createObjectURL(D),T=document.createElement("a");T.href=q,T.download=x.name||"deck.pptx",document.body.appendChild(T),T.click(),T.remove(),setTimeout(()=>URL.revokeObjectURL(q),4e3)};return u.createElement(Be,{title:t("sheet.deck.title"),hint:t("sheet.deck.hint"),onClose:e,t},x===null?u.createElement(u.Fragment,null,u.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:t("sheet.deck.topic"),value:o,maxLength:200,onChange:y=>i(y.target.value)}),u.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:t("sheet.deck.audience"),value:l,maxLength:120,onChange:y=>a(y.target.value)}),u.createElement("div",{className:"cbp-chips"},Hn.map(y=>u.createElement("button",{key:y.id,type:"button",className:"cbp-chip","data-cbp-size":y.id,"aria-pressed":s===y.id?"true":"false",onClick:()=>f(y.id)},r()==="en"?y.en:y.zh))),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:S==="working"||o.trim()==="",onClick:P},t(S==="working"?"sheet.deck.working":"sheet.deck.go")))):u.createElement(u.Fragment,null,u.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},u.createElement("div",{className:"cbp-deck-title"},x.title||o),u.createElement("div",{className:"cbp-deck-meta"},t("sheet.deck.meta")(x.slides??0)),u.createElement("div",{className:"cbp-deck-path",title:x.path},x.path)),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:g},t("sheet.deck.download")),u.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>k(null)},t("sheet.again")))),h?u.createElement("p",{className:"cbp-sheet-error"},h):null)}function vr({onClose:e,onFill:t,t:r}){let[n,o]=u.useState(""),i=()=>{let l=n.trim();t(l===""?r("sheet.video.prompt"):r("sheet.video.promptWith")(l))};return u.createElement(Be,{title:r("sheet.video.title"),hint:r("sheet.video.hint"),onClose:e,t:r},u.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:r("sheet.video.placeholder"),value:n,maxLength:500,onChange:l=>o(l.target.value)}),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:i},r("sheet.video.go"))))}var Sr=`
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
`;function Nr({name:e}){let t={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return N.createElement("svg",{...t},N.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),N.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return N.createElement("svg",{...t},N.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),N.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),N.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return N.createElement("svg",{...t},N.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),N.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return N.createElement("svg",{...t},N.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),N.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return N.createElement("svg",{...t},N.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),N.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return N.createElement("svg",{...t},N.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),N.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),N.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"slides":return N.createElement("svg",{...t},N.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),N.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return N.createElement("svg",{...t},N.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),N.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),N.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),N.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function Qn(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let t=e.closest('[data-composer-card="true"]');if(t)return t}return document.querySelector('[data-composer-card="true"]')}function zr({inputActions:e,t,locale:r,sessionId:n=""}){let o=typeof e?.setDraft=="function",[i,l]=N.useState(!1),[a,s]=N.useState(null),[f,S]=N.useState(null),p=N.useRef(null),x=N.useRef(null),[k,h]=N.useState(null);N.useEffect(()=>{h(Qn())},[]);let C=N.useCallback(()=>{let z=p.current?.getBoundingClientRect();z!=null&&S({right:Math.max(8,Math.round(window.innerWidth-z.right)),bottom:Math.max(8,Math.round(window.innerHeight-z.top)+8)})},[]);N.useLayoutEffect(()=>{i&&C()},[i,C]),N.useEffect(()=>{if(!i)return;let z=F=>{let _=F.target;_ instanceof Node&&x.current?.contains(_)!==!0&&p.current?.contains(_)!==!0&&l(!1)},L=F=>{F.key==="Escape"&&(F.preventDefault(),F.stopPropagation(),l(!1),p.current?.focus?.())},O=()=>l(!1);return document.addEventListener("pointerdown",z,!0),document.addEventListener("keydown",L,!0),window.addEventListener("resize",O),window.addEventListener("scroll",O,!0),()=>{document.removeEventListener("pointerdown",z,!0),document.removeEventListener("keydown",L,!0),window.removeEventListener("resize",O),window.removeEventListener("scroll",O,!0)}},[i]);let P=z=>{if(typeof z.sheet=="string"){l(!1),s(z.sheet);return}let L=st(z.prompt,typeof r=="function"?r():"zh");try{e.setDraft({text:L,references:[]})}catch{try{e.setDraft(L)}catch{}}l(!1),p.current?.focus?.()},g=t("quick.label"),y=typeof r=="function"?r():"zh",D=N.createElement("button",{ref:p,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":i?"true":"false","aria-label":t("quick.aria"),title:t(o?"quick.aria":"quick.disabled"),disabled:!o,onMouseDown:z=>z.preventDefault(),onClick:()=>l(z=>!z)},N.createElement(Nr,{name:"grid"}),N.createElement("span",{className:"cbp-more-label"},g)),q=i&&f!==null?(0,ct.createPortal)(N.createElement("div",{ref:x,className:"cbp-quick-panel",role:"menu","aria-label":t("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${f.right}px`,bottom:`${f.bottom}px`}},N.createElement("div",{className:"cbp-quick-head"},N.createElement("span",{className:"cbp-quick-title"},t("quick.title")),N.createElement("span",{className:"cbp-quick-hint"},t("quick.hint"))),N.createElement("div",{className:"cbp-quick-grid"},fr.map(z=>N.createElement("button",{key:z.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":z.id,onClick:()=>P(z)},N.createElement("span",{className:"cbp-quick-icon"},N.createElement(Nr,{name:z.icon})),N.createElement("span",{className:"cbp-quick-name"},st({zh:z.zh,en:z.en},y)))))),document.body):null,T=z=>{typeof z=="string"&&z.trim()!==""&&xr(e,z),s(null)};return N.createElement(N.Fragment,null,N.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),k!==null?(0,ct.createPortal)(D,k):null,q,a==="transcribe"?N.createElement(yr,{t,locale:r,onClose:()=>s(null),onFill:T}):null,a==="write"?N.createElement(wr,{t,locale:r,sessionId:n,onClose:()=>s(null),onFill:T}):null,a==="deck"?N.createElement(kr,{t,locale:r,sessionId:n,onClose:()=>s(null)}):null,a==="video"?N.createElement(vr,{t,onClose:()=>s(null),onFill:T}):null)}var Rr=`
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
`;var w=pe(require("react"),1),Er="/api/chatbox-pet",Mr=[{id:"auto",zh:"\u81EA\u52A8\u68C0\u6D4B",en:"Detect"},{id:"zh",zh:"\u4E2D\u6587",en:"Chinese"},{id:"en",zh:"\u82F1\u6587",en:"English"},{id:"ja",zh:"\u65E5\u6587",en:"Japanese"},{id:"ko",zh:"\u97E9\u6587",en:"Korean"},{id:"fr",zh:"\u6CD5\u6587",en:"French"},{id:"de",zh:"\u5FB7\u6587",en:"German"},{id:"es",zh:"\u897F\u73ED\u7259\u6587",en:"Spanish"}];async function Ce(e,t){let r=await fetch(`${Er}${e}`,t),n;try{n=await r.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${r.status}\uFF09`);return n.result}function Ir({t:e,locale:t=()=>"zh",inputActions:r}){let n=t()!=="en",o=w.useCallback((d,I)=>n?d:I,[n]),[i,l]=w.useState("auto"),[a,s]=w.useState(()=>n?"en":"zh"),[f,S]=w.useState("text"),[p,x]=w.useState(""),[k,h]=w.useState(""),[C,P]=w.useState("idle"),[g,y]=w.useState(""),[D,q]=w.useState(""),[T,z]=w.useState(!1),[L,O]=w.useState(0),[F,_]=w.useState([]),[ce,oe]=w.useState("all"),[K,ke]=w.useState(""),[ve,ue]=w.useState(!1),fe=w.useRef(null),re=w.useRef([]),ie=w.useRef(0),ne=w.useCallback(()=>{ie.current!==0&&(clearInterval(ie.current),ie.current=0)},[]),se=w.useCallback(async(d=ce,I=K)=>{try{let $=new URLSearchParams;d!=="all"&&$.set("kind",d),I.trim()!==""&&$.set("search",I.trim());let ee=await Ce(`/favorites?${$.toString()}`);_(ee.items??[])}catch($){y(String($?.message??$))}},[ce,K]);w.useEffect(()=>{se("all","")},[]),w.useEffect(()=>()=>{ne();try{fe.current?.stream?.getTracks?.().forEach(d=>d.stop())}catch{}},[ne]);let me=async()=>{let d=p.trim();if(d===""){y(o("\u5148\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57","Type something to translate first"));return}P("working"),y(""),ue(!1);try{let I=await Ce("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:d,from:i,to:a,locale:n?"zh":"en"})});h(I.translated),P("done")}catch(I){y(String(I?.message??I)),P("idle")}},Te=()=>{if(a==="auto"){s(i==="auto"?"zh":i),l("auto");return}l(a),s(i==="auto"?"zh":i),k!==""&&(x(k),h(""))},Me=async d=>{P("working"),y(""),ue(!1),S("text"),q(d.name);try{let I=await Ce(`/translate/file?name=${encodeURIComponent(d.name)}`,{method:"POST",headers:{"content-type":d.type||"application/octet-stream"},body:d});x(I.text);let $=await Ce("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:I.text,from:i,to:a,locale:n?"zh":"en"})});h($.translated),P("done"),I.truncated&&y(o("\u6587\u4EF6\u8F83\u957F\uFF0C\u53EA\u7FFB\u8BD1\u4E86\u524D 6 \u4E07\u4E2A\u5B57\u7B26","Long document: only the first 60,000 characters were translated"))}catch(I){y(String(I?.message??I)),P("idle")}},Se=async()=>{y("");try{let d=await navigator.mediaDevices.getUserMedia({audio:!0}),I=new MediaRecorder(d);re.current=[],I.ondataavailable=$=>{$.data?.size>0&&re.current.push($.data)},I.onstop=async()=>{ne(),d.getTracks().forEach(ee=>ee.stop()),z(!1),P("working");let $=new Blob(re.current,{type:I.mimeType||"audio/webm"});try{let{transcribe:ee}=await Promise.resolve().then(()=>(Tr(),Cr)),ge=await ee($);x(ge),S("text"),P("idle")}catch(ee){y(String(ee?.message??ee)),P("idle")}},fe.current=I,I.start(),z(!0),O(0),ie.current=setInterval(()=>O($=>$+1),1e3)}catch(d){let I=d?.name==="NotAllowedError"||d?.name==="SecurityError";y(I?o("\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650","No microphone permission"):String(d?.message??d))}},m=async(d="sentence")=>{if(p.trim()!=="")try{await Ce("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:d,source:p,target:k,from:a})}),ue(!0),await se()}catch(I){y(String(I?.message??I))}},M=async d=>{try{await Ce("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"remove",id:d})}),await se()}catch(I){y(String(I?.message??I))}},A=async d=>{try{await navigator.clipboard.writeText(d)}catch{y(o("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C","Copy failed \u2014 select the text manually"))}};return w.createElement("div",{className:"cbt-page"},w.createElement("div",{className:"cbt-bar"},w.createElement("select",{className:"cbt-select",value:i,onChange:d=>l(d.target.value),"aria-label":o("\u6E90\u8BED\u8A00","Source language")},Mr.map(d=>w.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),w.createElement("button",{type:"button",className:"cbt-swap",onClick:Te,title:o("\u4EA4\u6362\u8BED\u8A00","Swap"),"aria-label":o("\u4EA4\u6362\u8BED\u8A00","Swap")},"\u21C4"),w.createElement("select",{className:"cbt-select",value:a,onChange:d=>s(d.target.value),"aria-label":o("\u76EE\u6807\u8BED\u8A00","Target language")},Mr.filter(d=>d.id!=="auto").map(d=>w.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),w.createElement("span",{className:"cbt-spacer"}),w.createElement("div",{className:"cbt-tabs",role:"tablist"},["text","voice","file"].map(d=>w.createElement("button",{key:d,type:"button",role:"tab",className:"cbt-tab","data-cbt-tab":d,"aria-selected":f===d?"true":"false",onClick:()=>S(d)},d==="text"?o("\u6587\u5B57","Text"):d==="voice"?o("\u8BED\u97F3","Voice"):o("\u6587\u4EF6","File"))))),w.createElement("div",{className:"cbt-grid"},w.createElement("div",{className:"cbt-main"},f==="text"?w.createElement("textarea",{className:"cbt-input","data-cbt-source":"true",placeholder:o("\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57\uFF0CCtrl / \u2318 + Enter \u7FFB\u8BD1","Type text to translate \u2014 Ctrl / \u2318 + Enter"),value:p,onChange:d=>x(d.target.value),onKeyDown:d=>{d.key==="Enter"&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),me())}}):null,f==="voice"?w.createElement("div",{className:"cbt-voice"},w.createElement("button",{type:"button",className:"cbt-rec","data-cbt-record":T?"on":"off","aria-label":T?o("\u505C\u6B62\u5F55\u97F3","Stop recording"):o("\u5F00\u59CB\u5F55\u97F3","Start recording"),onClick:T?()=>fe.current?.stop():Se},w.createElement("span",{className:"cbt-rec-dot"})),w.createElement("span",{className:"cbt-hint"},T?`${String(Math.floor(L/60)).padStart(2,"0")}:${String(L%60).padStart(2,"0")} \xB7 ${o("\u518D\u70B9\u4E00\u4E0B\u7ED3\u675F","tap again to stop")}`:o("\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3\uFF0C\u8F6C\u5199\u5B8C\u4F1A\u81EA\u52A8\u586B\u8FDB\u6587\u5B57\u6846","Tap to record; the transcript lands in the text box"))):null,f==="file"?w.createElement("label",{className:"cbt-drop"},w.createElement("input",{type:"file",accept:".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json","data-cbt-file":"true",onChange:d=>{let I=d.target.files?.[0];I&&Me(I),d.target.value=""}}),w.createElement("span",{className:"cbt-drop-title"},o("\u9009\u62E9\u4E00\u4E2A\u6587\u6863","Pick a document")),w.createElement("span",{className:"cbt-hint"},o("PDF / DOCX / TXT / Markdown / HTML\uFF0C30 MB \u4EE5\u5185","PDF / DOCX / TXT / Markdown / HTML, up to 30 MB"))):null,D!==""?w.createElement("div",{className:"cbt-doc","data-cbt-doc":"true"},D):null,w.createElement("div",{className:"cbt-actions"},w.createElement("button",{type:"button",className:"cbt-btn cbt-btn-primary","data-cbt-translate":"true",disabled:C==="working",onClick:me},C==="working"?o("\u7FFB\u8BD1\u4E2D\u2026","Translating\u2026"):o("\u7FFB\u8BD1","Translate")),w.createElement("span",{className:"cbt-hint"},p.trim()===""?"":o(`${p.trim().length} \u5B57\u7B26`,`${p.trim().length} chars`))),k!==""?w.createElement("div",{className:"cbt-result","data-cbt-result":"true"},w.createElement("div",{className:"cbt-result-text"},k),w.createElement("div",{className:"cbt-actions"},w.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{A(k)}},o("\u590D\u5236","Copy")),w.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{m("sentence")}},ve?o("\u5DF2\u6536\u85CF","Saved"):o("\u6536\u85CF","Save")),typeof r?.setDraft=="function"?w.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>r.setDraft({text:k,references:[]})},o("\u586B\u5165\u8F93\u5165\u6846","Put in composer")):null)):null,g!==""?w.createElement("p",{className:"cbt-error","data-cbt-error":"true"},g):null),w.createElement("aside",{className:"cbt-side"},w.createElement("div",{className:"cbt-side-head"},w.createElement("span",{className:"cbt-side-title"},o("\u6536\u85CF\u672C","Saved")),w.createElement("a",{className:"cbt-link",href:`${Er}/favorites/export`,download:"favorites.md"},o("\u5BFC\u51FA","Export"))),w.createElement("div",{className:"cbt-filters"},[["all",o("\u5168\u90E8","All")],["word",o("\u5355\u8BCD","Words")],["sentence",o("\u53E5\u5B50","Sentences")]].map(([d,I])=>w.createElement("button",{key:d,type:"button",className:"cbt-chip","data-cbt-kind":d,"aria-pressed":ce===d?"true":"false",onClick:()=>{oe(d),se(d,K)}},I))),w.createElement("input",{className:"cbt-search","data-cbt-search":"true",placeholder:o("\u641C\u7D22\u6536\u85CF","Search"),value:K,onChange:d=>{ke(d.target.value),se(ce,d.target.value)}}),w.createElement("div",{className:"cbt-list","data-cbt-favorites":"true"},F.length===0?w.createElement("p",{className:"cbt-empty"},o("\u8FD8\u6CA1\u6709\u6536\u85CF\u3002\u7FFB\u8BD1\u540E\u70B9\u300C\u6536\u85CF\u300D\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002","Nothing saved yet \u2014 translate something and press Save.")):F.map(d=>w.createElement("div",{className:"cbt-item",key:d.id,"data-cbt-item":d.id},w.createElement("div",{className:"cbt-item-source"},d.source),d.target?w.createElement("div",{className:"cbt-item-target"},d.target):null,w.createElement("div",{className:"cbt-item-foot"},w.createElement("span",{className:"cbt-item-kind"},d.kind==="word"?o("\u5355\u8BCD","Word"):o("\u53E5\u5B50","Sentence")),w.createElement("button",{type:"button",className:"cbt-item-remove",onClick:()=>{M(d.id)},"aria-label":o("\u5220\u9664","Delete")},"\u2715"))))))))}var Pr=`
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
`;var Fr="/api/chatbox-pet/boost",qr=4e3,Gn=12e4,Vn=24,Jn=8e3,jr=25e3;function Or(e){return{set:typeof e?.set=="function"?e.set:(t,r)=>setTimeout(t,r),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function ut(e){let t=typeof e=="string"?e:"";return t.length>qr?t.slice(0,qr):t}function Lr(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function Le(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function lt(e){if(!Array.isArray(e))return[];let t=[];for(let r of e){if(r===null||typeof r!="object")continue;let n=typeof r.id=="string"?r.id.trim():"",o=Number(r.count);n===""||!Number.isFinite(o)||o<=0||t.push({id:n,label:typeof r.label=="string"&&r.label.trim()!==""?r.label.trim():n,count:Math.round(o)})}return t}function De(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function te(e,t,r){let n=new Error(typeof t=="string"&&t!==""?t:e);return n.code=e,r!==void 0&&(n.cause=r),n}function Dr(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",r=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return r===void 0?{code:t}:{code:t,message:r}}function Yn(e){let t=[],r=e;for(;;){let n=/(?:\r?\n){2}/.exec(r);if(n===null)break;t.push(r.slice(0,n.index)),r=r.slice(n.index+n[0].length)}return{frames:t,rest:r}}function Ar(e){let t=[];for(let r of e.split(`
`)){let n=r.trim();n===""||n.startsWith(":")||n.startsWith("data:")&&t.push(n.slice(5).trimStart())}if(t.length===0)return null;try{let r=JSON.parse(t.join(`
`));return r!==null&&typeof r=="object"&&Array.isArray(r)===!1?r:null}catch{return null}}async function pt(e){try{return await e.json()}catch{return null}}function dt(e,t){if(e===null||typeof e!="object")throw te("host",void 0,t);if(e.ok!==!0){let o=typeof e.error?.message=="string"?e.error.message.trim():"";throw te(typeof e.error?.code=="string"?e.error.code:"host",o===""?void 0:o)}let r=e.result,n=typeof r?.prompt=="string"?r.prompt.trim():"";if(n==="")throw te("empty");return{prompt:n,mode:r.mode==="compose"?"compose":"improve",sources:lt(r.sources),elapsedMs:Number.isFinite(r.elapsedMs)?Math.max(0,Number(r.elapsedMs)):null,cached:r.cached===!0}}async function Xn(e){let{draft:t,mode:r,locale:n,signal:o,onEvent:i,idleMs:l=jr,sessionId:a=""}=e,s=a===""?{}:{sessionId:a},f=typeof e.fetch=="function"?e.fetch:globalThis.fetch,S=Or(e.timers),p=new AbortController,x=()=>p.abort();o!==void 0&&(o.aborted?p.abort():o.addEventListener("abort",x,{once:!0}));let k=!1,h=null,C=()=>{h!==null&&S.clear(h),h=S.set(()=>{k=!0,p.abort()},l)},P=!1;try{C();let g;try{g=await f(Fr,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:ut(t),mode:r,locale:n,stream:!0,...s}}),signal:p.signal})}catch(z){throw k?te("timeout",void 0,z):De(z)?z:te("network",void 0,z)}if(k)throw te("timeout");if(g===null||typeof g!="object")throw te("host");if(g.ok!==!0){let z=await pt(g);if(g.status>=400)throw te("host",void 0,g.status);let L=dt(z,g.status);i({type:"replace",text:L.prompt}),i({type:"done",result:L});return}let y=typeof g.headers?.get=="function"?String(g.headers.get("content-type")??""):"";if(g.body===null||g.body===void 0||typeof g.body.getReader!="function"||!y.includes("text/event-stream")){let z=dt(await pt(g),g.status);i({type:"replace",text:z.prompt}),i({type:"done",result:z});return}let D=g.body.getReader(),q=new TextDecoder,T="";for(;!P;){let z;try{z=await D.read()}catch(O){throw k?te("timeout",void 0,O):De(O)?O:te("stream",void 0,O)}if(z.done===!0)break;C(),T+=q.decode(z.value,{stream:!0});let L=Yn(T);T=L.rest;for(let O of L.frames){let F=Ar(O);if(F!==null&&i(F)==="stop"){P=!0;break}}}if(!P){let z=T.trim();if(z!==""){let L=Ar(z);L!==null&&i(L)}}if(P)try{await D.cancel()}catch{}}finally{h!==null&&S.clear(h),o!==void 0&&o.removeEventListener("abort",x)}}async function Zn(e){let{draft:t,mode:r,locale:n,signal:o,sessionId:i=""}=e,l=typeof e.fetch=="function"?e.fetch:globalThis.fetch,a;try{a=await l(Fr,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:ut(t),mode:r,locale:n,stream:!1,...i===""?{}:{sessionId:i}}}),signal:o})}catch(s){throw De(s)?s:te("network",void 0,s)}if(a===null||typeof a!="object")throw te("host");if(a.ok!==!0&&a.status>=400)throw te("host",void 0,a.status);return dt(await pt(a),a.status)}function ea(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,r=typeof e.now=="function"?e.now:()=>Date.now(),n=Or(e.timers),o=Number.isFinite(e.idleMs)?Number(e.idleMs):jr,i=Number.isFinite(e.undoMs)?Number(e.undoMs):Jn,l=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):Gn,a=new WeakMap,s=new WeakMap,f=new WeakMap,S=new WeakMap,p=new WeakMap,x="",k=new Set,h=new Map,C=Lr(),P=Le(null),g=null,y=0,D=0,q=null,T=null,z=()=>{for(let c of[...k])try{c()}catch(b){console.error("[prompt-boost] a store listener failed:",b)}},L=c=>c!=null&&(typeof c=="object"||typeof c=="function");function O(c){let b=L(c)?c:T;if(!L(b))return C;let E=a.get(b);return E===void 0&&(E=Lr(),a.set(b,E)),E}function F(c,b){let E=L(c)?c:T,H={...O(E),...b};return L(E)?a.set(E,H):C=H,z(),H}function _(c){let b=L(c)?c:T;return L(b)?f.get(b)??Le(null):P}function ce(c){return L(c)?c:T}function oe(c){let b=L(c)?c:T;if(!L(b))return"default";let E=s.get(b);return E===void 0&&(y+=1,E=`s${y}`,s.set(b,E)),E}function K(c){return`prompt-boost-panel-${oe(c)}`}function ke(c,b,E){return`${oe(c)}\0${b}\0${E}`}function ve(c){let b=h.get(c);return b===void 0?null:r()-b.at>l?(h.delete(c),null):(h.delete(c),h.set(c,b),b.result)}function ue(c,b){for(h.delete(c),h.set(c,{at:r(),result:b});h.size>Vn;){let E=h.keys().next();if(E.done===!0)break;h.delete(E.value)}}function fe(){if(q===null)return;let c=q;q=null;try{c.controller.abort()}catch{}}function re(c){let b=L(c)?c:T,E=L(b)?S.get(b):g;E!=null&&n.clear(E),L(b)?S.delete(b):g=null}function ie(c){re(c);let b=null;b=n.set(()=>{let j=O(c);j.undo!==null&&F(c,{undo:null,phase:j.phase==="applied"?"idle":j.phase,applied:"",prompt:j.phase==="applied"?"":j.prompt,sources:j.phase==="applied"?[]:j.sources})},i);let E=L(c)?c:T;L(E)?S.set(E,b):g=b}function ne(c,b,E){let j=ce(c),H=Le(_(c)),Q=!1;if(L(j)&&typeof j.setDraft=="function")try{j.setDraft({text:b.prompt,references:[]}),Q=!0}catch{try{j.setDraft(b.prompt),Q=!0}catch{Q=!1}}if(!Q){F(c,{phase:"error",mode:b.mode,prompt:b.prompt,sources:b.sources,elapsedMs:b.elapsedMs,cached:b.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}F(c,{phase:"applied",mode:b.mode,prompt:b.prompt,applied:b.prompt,sources:b.sources,elapsedMs:b.elapsedMs,cached:b.cached===!0,error:null,undo:{draft:H,at:r()},expanded:!1}),ie(c),ue(E,b),J.play("boostDone")}async function se(c,b,E){let{draft:j,mode:H,locale:Q,key:le,sessionId:be}=E,Ne=!1,xe=!1,ze=()=>q===b&&b.controller.signal.aborted===!1,Hr=U=>{if(!ze())return"stop";if(Ne=!0,U.type==="sources"){let V=O(c);F(c,{sources:lt(U.sources),mode:U.mode==="compose"?"compose":V.mode});return}if(U.type==="delta"){if(typeof U.text!="string"||U.text==="")return;let V=O(c);F(c,{phase:"streaming",prompt:V.prompt+U.text});return}if(U.type==="replace"){if(typeof U.text!="string")return;let V=O(c),Qr=V.phase==="ready"||U.text===""?V.phase:"streaming";F(c,{prompt:U.text,phase:Qr});return}if(U.type==="done"){xe=!0;let V={prompt:typeof U.result?.prompt=="string"?U.result.prompt.trim():O(c).prompt.trim(),mode:U.result?.mode==="compose"?"compose":H,sources:lt(U.result?.sources??O(c).sources),elapsedMs:Number.isFinite(U.result?.elapsedMs)?Math.max(0,Number(U.result.elapsedMs)):null,cached:U.result?.cached===!0};return V.prompt===""?(F(c,{phase:"error",error:{code:"empty"}}),J.play("boostFail"),"stop"):(ne(c,V,le),"stop")}if(U.type==="error"){xe=!0;let V=typeof U.message=="string"&&U.message.trim()!==""?U.message.trim():void 0;return F(c,{phase:"error",error:V===void 0?{code:"unknown"}:{code:"host",message:V}}),"stop"}};try{if(await Xn({draft:j,mode:H,locale:Q,sessionId:be,signal:b.controller.signal,onEvent:Hr,fetch:t,timers:n,idleMs:o}),xe)return;if(Ne)throw te("stream");await me(c,b,{draft:j,mode:H,locale:Q,key:le,sessionId:be})}catch(U){if(b.controller.signal.aborted||De(U)||!ze())return;if(Ne){F(c,{phase:"error",error:Dr(U)}),J.play("boostFail");return}try{await me(c,b,{draft:j,mode:H,locale:Q,key:le,sessionId:be})}catch(V){if(b.controller.signal.aborted||De(V)||!ze())return;F(c,{phase:"error",error:Dr(V)}),J.play("boostFail")}}finally{q===b&&(q=null)}}async function me(c,b,E){let j=await Zn({draft:E.draft,mode:E.mode,locale:E.locale,signal:b.controller.signal,fetch:t,sessionId:E.sessionId??""});q!==b||b.controller.signal.aborted||ne(c,j,E.key)}function Te(c,b){let E=typeof b=="string"?b:"";E!==""&&(x=E,L(c)&&p.set(c,E))}function Me(c){return L(c)?p.get(c)??x:x}function Se(c,b){let E=typeof b?.draft=="string"?b.draft:"",j=Array.isArray(b?.occurrences)?b.occurrences:[],H=_(c);if(H.text===E&&H.references.length===j.length)return;let Q={text:E,references:j.map(be=>({...be}))},le=L(c)?c:T;L(le)?f.set(le,Q):P=Q}function m(c,b={}){L(c)&&(T=c);let E=b.locale==="en"?"en":"zh",j=b.force===!0,H=_(c),Q=ut(H.text),le=Q.trim()===""?"compose":"improve",be=ke(c,le,Q);if(fe(),re(c),!j){let ze=ve(be);if(ze!==null){ne(c,{...ze,cached:!0},be);return}}D+=1;let Ne={seq:D,actions:c,controller:new AbortController};q=Ne;let xe=O(c);F(c,{phase:"running",mode:le,seed:Q,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:xe.phase==="idle"&&xe.undo===null?!1:xe.expanded}),J.play("boostStart"),se(c,Ne,{draft:Q,mode:le,locale:E,key:be,sessionId:Me(c)})}function M(c,b={}){m(c,{locale:b.locale,force:!0})}function A(c){let b=O(c);if(b.phase!=="ready")return!1;let E=b.prompt.trim();if(E==="")return!1;let j=ce(c);if(!L(j)||typeof j.setDraft!="function")return F(c,{phase:"error",error:{code:"apply"}}),!1;let H=Le(_(c)),Q=!1;try{j.setDraft({text:E,references:[]}),Q=!0}catch{try{j.setDraft(E),Q=!0}catch{Q=!1}}return Q?(re(c),F(c,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:H,at:r()},expanded:!1}),ie(c),!0):(F(c,{phase:"error",error:{code:"apply"}}),!1)}function d(c){let b=O(c);if(b.undo===null)return!1;let E=ce(c),j=Le(b.undo.draft),H=!1;if(L(E)&&typeof E.setDraft=="function")try{E.setDraft({text:j.text,references:j.references}),H=!0}catch{try{E.setDraft(j.text),H=!0}catch{H=!1}}return re(c),F(c,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),H}function I(c){O(c).expanded!==!1&&F(c,{expanded:!1})}function $(c){let b=O(c);b.phase==="idle"&&b.undo===null||b.expanded===!0||F(c,{expanded:!0})}function ee(c){O(c).expanded===!0?I(c):$(c)}function ge(c){let b=L(c)?c:T;q!==null&&q.actions===b&&fe(),re(c),F(c,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Ue(c,b){let E=O(c);E.phase==="streaming"&&(typeof b!="string"||b===E.prompt||F(c,{prompt:b}))}return{subscribe(c){return typeof c!="function"?()=>{}:(k.add(c),()=>{k.delete(c)})},getState:O,panelId:K,sessionKey:oe,setDraftMirror:Se,setSessionId:Te,start:m,retry:M,apply:A,undo:d,expand:$,collapse:I,toggle:ee,dismiss:ge,edit:Ue}}var $e=ea();var _r=`
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
`;var ta="@local/chatbox-pet",Ur=["slots","locale"];function ra({size:e=18,active:t}){return Z.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:t?1.9:1.6,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},Z.createElement("path",{d:"M3.5 6.2h8.2M7.6 6.2v1.4c0 3.1-1.7 5.6-4.1 6.7"}),Z.createElement("path",{d:"M5.2 11.3c1 1.7 2.5 2.9 4.2 3.5"}),Z.createElement("path",{d:"M13.2 18.4 16.6 9.6l3.4 8.8M14.5 15.6h4.2"}))}function Br(){return(0,$r.useSyncExternalStore)(ae.subscribe,ae.getSnapshot,ae.getSnapshot)}function Wr(e){let t=e.locale.bind(de),r=e.locale.bind(qe);e.effect(()=>e.locale.register(de,{zh:yt,en:wt}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(qe,{zh:pr,en:dr}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let a=document.querySelector('style[data-plugin="chatbox-pet"]');a!==null&&a.remove();let s=document.createElement("style");return s.setAttribute("data-plugin","chatbox-pet"),s.textContent=`${Vt}
${_r}
${Xt}
${Rr}
${Sr}
${Pr}`,document.head.appendChild(s),()=>{s.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{ae.refresh().then(a=>{gt(a?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let a=()=>J.unlock();return window.addEventListener("pointerdown",a,{capture:!0}),window.addEventListener("keydown",a,{capture:!0}),()=>{window.removeEventListener("pointerdown",a,{capture:!0}),window.removeEventListener("keydown",a,{capture:!0})}},"chatbox-pet: sound unlock");let n=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:ta,order:1,label:()=>t("label"),locale:de,inject:a=>({sessionId:a})},a=>{if(Br().pet===!1)return null;let f=typeof a?.sessionId=="string"&&a.sessionId!==""?a.sessionId:typeof a?.session?.id=="string"?a.session.id:"";return f===""?null:Z.createElement(Gt,{sessionId:f,t,useInput:a?.useInput,locale:n})}));let o=a=>s=>Br().boost===!1?null:a(s);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>r("button.label"),locale:qe},o(a=>Z.createElement(ar,{...a,store:$e,t:r,locale:n})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>t("merge.label")(2),locale:de,inject:a=>({sessionId:a})},a=>{let s=typeof a?.sessionId=="string"?a.sessionId:"";return s===""?null:Z.createElement(lr,{sessionId:s,sessions:e.get("sessions"),t,locale:n,onNotice:f=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:s,text:f,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:qe},o(a=>Z.createElement(br,{...a,store:$e,t:r,locale:n})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>t("quick.label"),locale:de,inject:a=>({sessionId:a})},a=>Z.createElement(zr,{inputActions:a?.inputActions,sessionId:typeof a?.sessionId=="string"?a.sessionId:"",t,locale:n})));function i({sessionId:a,session:s}){let f=typeof a=="string"&&a!==""?a:typeof s?.id=="string"?s.id:"";return Z.useEffect(()=>{f!==""&&$e.setSessionId(null,f)},[f]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:de,inject:a=>({sessionId:a})},a=>Z.createElement(i,{sessionId:a?.sessionId,session:a?.session})));let l="chatbox-pet-translate";e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:l,order:23,label:()=>t("translate.sidebar"),locale:de},ra)),e.slots.inject("main",()=>e.slots.register({name:"main",key:l,locale:de},a=>Z.createElement(Ir,{t,locale:n,inputActions:a?.inputActions}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:de},()=>Z.createElement(Zt,{t})))}
		return module.exports;
	}
});
