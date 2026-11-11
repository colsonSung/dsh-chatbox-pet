window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var Kr=Object.create;var Fe=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var Vr=Object.getOwnPropertyNames;var Jr=Object.getPrototypeOf,Yr=Object.prototype.hasOwnProperty;var Xr=(e,r,t)=>()=>{if(t)throw t[0];try{return e&&(r=e(e=0)),r}catch(n){throw t=[n],n}};var bt=(e,r)=>{for(var t in r)Fe(e,t,{get:r[t],enumerable:!0})},ft=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of Vr(r))!Yr.call(e,a)&&a!==t&&Fe(e,a,{get:()=>r[a],enumerable:!(n=Gr(r,a))||n.enumerable});return e};var de=(e,r,t)=>(t=e!=null?Kr(Jr(e)):{},ft(r||!e||!e.__esModule?Fe(t,"default",{value:e,enumerable:!0}):t,e)),Zr=e=>ft(Fe({},"__esModule",{value:!0}),e);var Nr={};bt(Nr,{transcribe:()=>Qn});async function Qn(e){let r=await fetch("/api/chatbox-pet/transcribe?name=voice.webm",{method:"POST",headers:{"content-type":e.type||"audio/webm"},body:e}),t;try{t=await r.json()}catch{throw new Error(`\u8F6C\u5199\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(t?.ok!==!0)throw new Error(t?.error?.message??"\u8F6C\u5199\u5931\u8D25");let n=t.result?.text??"";if(n.trim()==="")throw new Error("\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF0C\u8BF7\u518D\u8BF4\u4E00\u6B21");return n}var zr=Xr(()=>{});var na={};bt(na,{apply:()=>Wr,inject:()=>Ur});module.exports=Zr(na);var ue=de(require("react"),1);var He="chatboxPet.sound",ht=!0,en=.3,tn=1e3,rn=7,We={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},oa=Object.freeze(Object.keys(We)),nn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function mt(e,r){return e==="error"?r==="cancelled"?"cancelled":"error":nn[e]}function Ie(e){try{return e?.getItem(He)==="off"?"off":"on"}catch{return"on"}}function gt(e){ht=e!==!1}function Qe(e,r){try{e?.setItem(He,r==="off"?"off":"on")}catch{}}function xt(e){let r=Ie(e)==="on"?"off":"on";return Qe(e,r),r}function ke(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function an(e){let r=2166136261,t=String(e??"");for(let n=0;n<t.length;n+=1)r^=t.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function on(e){let r=e.now??(()=>Date.now()),t=null,n=null,a=!1,s=new Map,o=new Map,i=0;function l(){if(!a)try{let p=e.createContext();if(p==null)return;let w=p.createGain();if(w.gain.value=en,w.connect(p.destination),p.state==="suspended"&&typeof p.resume=="function"){let v=p.resume();v!==void 0&&typeof v.catch=="function"&&v.catch(()=>{})}t=p,n=w,a=!0}catch{t=null,n=null,a=!1}}function x(p,w,v){if(w<=1)return 0;if(typeof v=="string"&&v!=="")return an(v)%w;let f=(o.get(p)??0)%w;return o.set(p,f+1),f}function N(p,w){if(e.getPref()!=="on"||!a||t===null||n===null||!e.isVisible())return!1;let v=We[p];if(v===void 0)return!1;let f=r(),z=s.get(p);if(z!==void 0&&f-z<tn)return!1;s.set(p,f);let q=Array.isArray(v.variants)?v.variants:[];if(q.length===0)return!1;let m=q[x(p,q.length,w)];i=(i+1)%7;let k=(i-3)*(rn/3);try{return sn(t,n,m,k),!0}catch{return!1}}return{play:N,unlock:l,isUnlocked:()=>a,recipeNames:()=>Object.keys(We)}}function sn(e,r,t,n){let a=e.currentTime;for(let s of t.notes){let o=a+s.at,i=e.createOscillator(),l=e.createGain();i.type=s.type,i.frequency.setValueAtTime(s.freq,o),typeof s.slideTo=="number"&&i.frequency.exponentialRampToValueAtTime(s.slideTo,o+s.dur),n!==0&&typeof i.detune=="object"&&i.detune!==null&&i.detune.setValueAtTime(n,o),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(s.level,o+.008),l.gain.exponentialRampToValueAtTime(1e-4,o+s.dur),i.connect(l),l.connect(r),i.start(o),i.stop(o+s.dur+.02)}}function cn(){return{getPref:()=>{let e=ke()?.getItem(He);return e==="on"||e==="off"?e:ht?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var X=on(cn());var $r=require("react");var ge="chatboxPet",yt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","sheet.close":"\u5173\u95ED","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,r,t)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${r} \xB7 \u65F6\u957F ${Math.round(t)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.translate.title":"\u7FFB\u8BD1","sheet.translate.hint":"\u6587\u5B57\u3001\u8BED\u97F3\u6216\u6587\u4EF6\u90FD\u80FD\u7FFB\uFF1B\u8BD1\u6587\u53EF\u4EE5\u6536\u85CF\u8FDB\u751F\u8BCD\u672C\uFF0C\u6216\u76F4\u63A5\u586B\u8FDB\u8F93\u5165\u6846\u3002","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},wt={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","sheet.close":"Close","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,r,t)=>`${e} segments \xB7 ${r} \xB7 ${Math.round(t)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.translate.title":"Translate","sheet.translate.hint":"Text, voice or a document \u2014 and every translation can go into the saved list or the composer.","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var C=de(require("react"),1);var ln=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],pn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},vt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],Ke={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},ca=[...vt.map(e=>e.id),"fallback"];function Ge(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function St(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function kt(e){let r=St(e);if(r==="")return null;for(let t of ln){let n=/^[a-z ]+$/.test(t),s=(n?new RegExp(`(^|[^a-z])${Ge(t).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(Ge(t))).exec(r);if(s===null)continue;let o=s.index+(n?s[1].length:0),i=o+(n?t.replace(/ /g," ").length:t.length),l=`${r.slice(0,o)} ${r.slice(i)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:t,rest:l}}return null}function dn(e){let r=2166136261,t=String(e??"");for(let n=0;n<t.length;n+=1)r^=t.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function un(e){let r=St(e);if(r==="")return"fallback";for(let t of vt){for(let n of t.zh)if(r.includes(n))return t.id;for(let n of t.en)if(new RegExp(`(^|[^a-z])${Ge(n).replace(/ /g,"\\s+")}([^a-z]|$)`).test(r))return t.id}return"fallback"}function Nt(e,r){let t=Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[];return t.length===0?"":t[dn(r)%t.length]}function bn(e,r={}){let t=Ke[e]??Ke.fallback,n=r.locale==="en"?"en":"zh",a=typeof r.seed=="string"&&r.seed!==""?r.seed:String(e);return{intent:Ke[e]===void 0?"fallback":e,clip:t.clip,sound:t.sound,line:Nt(t[n],a)}}function zt(e,r="zh"){let t=String(e??"");return/[\u4e00-\u9fff]/.test(t)?"zh":/[a-z]/i.test(t)||r==="en"?"en":"zh"}function Rt(e={}){let r=e.locale==="en"?"en":"zh";return Nt(pn[r],e.seed??"wake")}function Ct(e={}){let r=typeof e.now=="function"?e.now:()=>Date.now(),t=Number.isFinite(e.debounceMs)?e.debounceMs:700,n=Number.isFinite(e.holdMs)?e.holdMs:15e3,a=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,s=!1,o="",i="",l=0,x=0;function N(v){let f=kt(v);return f===null?s?(s=!1,o="",i="",{kind:"off"}):null:(l=r(),s?null:(s=!0,o=f.wake,i=f.rest,l=r(),x=0,{kind:"wake",wake:f.wake,digest:f.rest}))}function p(v,f={}){if(!s)return null;let z=kt(v);if(z===null)return s=!1,{kind:"off"};let q=`${z.wake}\0${z.rest}`;if(q===i)return null;let m=r(),k=m-x;if(k<a)return{kind:"cooldown",retryInMs:a-k};i=q,x=m,l=m;let L=un(z.rest);return{kind:"reply",...bn(L,{...f,seed:q}),digest:q}}function w(){return!s||r()-l<n?null:(s=!1,o="",i="",{kind:"off"})}return{observe:N,settle:p,expire:w,isActive:()=>s,debounceMs:t,holdMs:n,wakeWord:()=>o}}var B=de(require("react"),1),Ot=require("react-dom");var Tt=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Oe=60;function Mt(e,r){let t=r==="en"?"en":"zh";return typeof e?.[t]=="string"?e[t]:""}function Pe(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=Oe?r:t.slice(0,Oe).join("")}function Et(e,r,t,n=8){let s=Number.isFinite(r?.width)?r.width:0,o=Number.isFinite(r?.height)?r.height:0,i=Number.isFinite(t?.width)?t.width:0,l=Number.isFinite(t?.height)?t.height:0,x=(Number.isFinite(e?.right)?e.right:0)-s;x<8&&(x=Number.isFinite(e?.left)?e.left:8);let N=(Number.isFinite(e?.top)?e.top:0)-o-n;N<8&&(N=(Number.isFinite(e?.bottom)?e.bottom:0)+n);let p=Math.max(8,i-s-8),w=Math.max(8,l-o-8);return{left:Math.min(Math.max(x,8),p),top:Math.min(Math.max(N,8),w)}}var Ve=["topic","reminder","recall","nudge","encourage","tease","chitchat"],It={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Pt=9e3,fn=24e4,Je=.05;function qt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<fn)return!1;let t=Number.isFinite(e.chance)?e.chance:Je;return(typeof e.random=="function"?e.random:Math.random)()<t}function Lt(e,r){let t=r==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[t]??""}function Dt(e){return It[e]??It.chitchat}async function At(e={}){let r=typeof e.fetch=="function"?e.fetch:(...t)=>globalThis.fetch(...t);try{let t=await r("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!t.ok)return null;let n=await t.json();if(n?.ok!==!0)return null;let a=n.result;return typeof a?.text!="string"||a.text.trim()===""?null:{kind:Ve.includes(a.kind)?a.kind:"chitchat",text:a.text.trim(),quote:typeof a?.quote=="string"?a.quote:"",item:typeof a?.item=="string"?a.item:"",source:typeof a?.source?.label=="string"?a.source:null,sources:Array.isArray(a?.sources)?a.sources:[]}}catch{return null}}var Ft=268;function jt({anchor:e,locale:r,onSay:t,onAction:n,onQuip:a,recent:s,onForget:o,onClose:i,t:l}){let x=B.useRef(null),N=B.useRef(null),[p,w]=B.useState(""),[v,f]=B.useState(()=>({left:0,top:0,ready:!1}));B.useLayoutEffect(()=>{let m=x.current;if(m===null)return;let k=m.getBoundingClientRect().height,L=Et(e,{width:Ft,height:k},{width:window.innerWidth,height:window.innerHeight});f({...L,ready:!0})},[e]),B.useEffect(()=>{let m=N.current;m!==null&&typeof m.focus=="function"&&m.focus()},[]),B.useEffect(()=>{let m=L=>{let T=x.current;T!==null&&L.target instanceof Node&&T.contains(L.target)||i()},k=L=>{L.key==="Escape"&&(L.preventDefault(),L.stopPropagation(),i())};return document.addEventListener("pointerdown",m,!0),document.addEventListener("keydown",k,!0),()=>{document.removeEventListener("pointerdown",m,!0),document.removeEventListener("keydown",k,!0)}},[i]);let z=()=>{let m=Pe(p);m!==""&&(t(m),i())},q={left:`${Math.round(v.left)}px`,top:`${Math.round(v.top)}px`,width:`${Ft}px`,visibility:v.ready?"visible":"hidden"};return(0,Ot.createPortal)(B.createElement("div",{ref:x,className:"cbp-menu",style:q,role:"menu","aria-label":l("menu.title"),"data-cbp-menu":"true",onContextMenu:m=>m.preventDefault()},B.createElement("div",{className:"cbp-menu-say"},B.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},l("menu.say")),B.createElement("div",{className:"cbp-menu-row"},B.createElement("input",{id:"cbp-menu-say-input",ref:N,className:"cbp-menu-input",type:"text",value:p,maxLength:Oe,placeholder:l("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:m=>w(m.target.value),onKeyDown:m=>{m.key==="Enter"&&(m.preventDefault(),m.stopPropagation(),z())}}),B.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:Pe(p)==="",onClick:z},l("menu.saySubmit")))),s.length===0?null:B.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},B.createElement("span",{className:"cbp-menu-label"},l("menu.recent"),B.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:o},l("menu.clear"))),B.createElement("div",{className:"cbp-menu-recent-list"},s.slice(0,8).map(m=>B.createElement("button",{key:`${m.text}-${m.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":m.text,title:m.text,onClick:()=>{t(m.text),i()}},m.text)))),B.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},B.createElement("span",{className:"cbp-menu-label"},l("menu.quip")),B.createElement("div",{className:"cbp-menu-grid"},Ve.map(m=>B.createElement("button",{key:m,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":m,onClick:()=>{a(m),i()}},Lt(m,r))))),B.createElement("div",{className:"cbp-menu-actions"},B.createElement("span",{className:"cbp-menu-label"},l("menu.action")),B.createElement("div",{className:"cbp-menu-grid"},Tt.map(m=>B.createElement("button",{key:m.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":m.clip,title:m.clip,onClick:()=>{n(m.clip),i()}},Mt(m,r))))),B.createElement("p",{className:"cbp-menu-hint"},l("menu.hint"))),document.body)}var Ye="/api/chatbox-pet/said",_t="chatboxPet.said";function Ze(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=60?r:t.slice(0,60).join("")}function hn(e,r,t=Date.now()){let n=Ze(r),a=Array.isArray(e)?e.filter(o=>typeof o?.text=="string"):[];if(n==="")return a.slice(0,24);let s=a.filter(o=>o.text!==n);return[{text:n,at:t},...s].slice(0,24)}function Xe(e){let r=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],t=[],n=new Set;for(let a of r){let s=Ze(typeof a=="string"?a:a?.text);if(!(s===""||n.has(s))&&(n.add(s),t.push({text:s,at:Number.isFinite(a?.at)?a.at:0}),t.length>=24))break}return t}function mn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function gn(e={}){let r=typeof e.fetch=="function"?e.fetch:(...p)=>globalThis.fetch(...p),t=e.storage===void 0?mn():e.storage,n=()=>{try{let p=t?.getItem(_t);return p==null?[]:Xe(JSON.parse(p))}catch{return[]}},a=p=>{try{t?.setItem(_t,JSON.stringify(p))}catch{}},s=Object.freeze({lines:Object.freeze(n()),loaded:!1}),o=new Set;function i(p){s=Object.freeze({...s,...p});for(let w of o)try{w()}catch{}}async function l(){try{let w=await(await r(Ye,{method:"GET",headers:{accept:"application/json"}})).json();if(w?.ok===!0){let v=Xe(w.result);return i({lines:v,loaded:!0}),a(v),v}}catch{}return i({loaded:!0}),s.lines}async function x(p){let w=Ze(p);if(w==="")return s.lines;let v=hn(s.lines,w);i({lines:Object.freeze(v)}),a(v);try{let z=await(await r(Ye,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w})})).json();if(z?.ok===!0){let q=Xe(z.result);return i({lines:q,loaded:!0}),a(q),q}}catch{}return s.lines}async function N(){i({lines:Object.freeze([])}),a([]);try{await r(Ye,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(p){return typeof p!="function"?()=>{}:(o.add(p),()=>o.delete(p))},getSnapshot(){return s},refresh:l,remember:x,clear:N}}var ve=gn();var et=null;function Bt(e,r){let t=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(t)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(t)?!1:/Mac/i.test(typeof r=="string"?r:t)}function $t(e){if(e!==void 0)return Bt(e.userAgent,e.platform)?".mov":".webm";if(et===null){let r=typeof navigator>"u"?void 0:navigator;et=Bt(r?.userAgent,r?.platform)?".mov":".webm"}return et}var Ut={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},xn={failed:"click-angry",cancelled:"act-shy"};function Wt(e){let r=e?.previous?.status??"idle",t=e?.next?.status??"idle",n=e?.previous?.detail??null,a=e?.next?.detail??null,s=t!==r||a!==n,i=r==="working"&&t==="thinking"?"result":t;if(!s)return{changed:!1,status:i,detail:a,clip:null,sound:null};if(t==="idle")return{changed:!0,status:"idle",detail:a,clip:null,sound:null};let l=i==="error"?xn[a]??Ut.error:Ut[i]??e?.idleClip??null;return{changed:!0,status:i,detail:a,clip:l,sound:mt(i,a)}}var yn=6e3,wn=5e3,kn={thinking:0,working:1,result:2,waiting:3,success:4,error:5},xe="idle-breathe-loop",Ht="click-wave",Qt=["act-harley","act-beach"],Kt=6e3,vn=9e4,Sn=.12;function Gt({sessionId:e,t:r,useInput:t,locale:n}){let a=C.useRef(null),s=C.useRef(null),o=C.useRef("idle"),i=C.useRef(null),l=C.useRef(Date.now()),x=C.useRef(null),N=C.useRef(0),p=C.useRef(0),[w,v]=C.useState(null),[f,z]=C.useState(null),m=C.useSyncExternalStore(ve.subscribe,ve.getSnapshot,ve.getSnapshot).lines,k=C.useRef(0),[L,T]=C.useState(null),[I,R]=C.useState("idle"),[P,_]=C.useState(!0),F=C.useRef(!1),O=C.useCallback((h,M)=>{let A=a.current;if(A===null||A.dataset.clip===h&&A.loop===M&&!A.ended)return;A.dataset.clip=h,A.loop=M,A.src=`/api/chatbox-pet/asset/${h}${$t()}`;let W=A.play();W!==void 0&&typeof W.catch=="function"&&W.catch(()=>{})},[]),se=C.useCallback(()=>{let h=a.current;if(h!==null){if(!F.current&&h.dataset.clip!==xe){F.current=!0,O(xe,!0);return}_(!1)}},[O]),ie=C.useCallback(()=>{window.clearTimeout(k.current),T(null)},[]),V=C.useCallback((h,M,A,W=wn,G=null)=>{window.clearTimeout(k.current),T({text:h,kind:A,source:G}),M||(k.current=window.setTimeout(()=>T(null),W))},[]),Se=C.useCallback(h=>{let M=s.current?.workStatusTexts,A=kn[h],W=A===void 0||!Array.isArray(M)?void 0:M[A];if(!(!Array.isArray(W)||W.length===0))return W[Math.floor(Math.random()*W.length)]},[]),be=C.useCallback(h=>{let M=typeof h?.status=="string"?h.status:"idle",A=o.current,W=typeof h?.detail=="string"?h.detail:null,G=Wt({previous:{status:A,detail:i.current},next:{status:M,detail:W},idleClip:xe});if(!G.changed){M==="waiting"&&typeof h?.bubble=="string"&&h.bubble!==""&&V(h.bubble,!0,"waiting");return}if(o.current=M,i.current=W,R(M),x.current!==null&&x.current.isActive()){l.current=Date.now();return}if(M==="idle"){O(xe,!0),ie(),l.current=Date.now();return}l.current=Date.now();let d=G.status,D=G.detail;O(G.clip??xe,!1);let $=typeof h?.bubble=="string"&&h.bubble!==""?h.bubble:Se(d),ae=h?.source==="broadcast"?"notify":G.sound;X.play(ae,$),$!==void 0?V($,M==="waiting",d):ie()},[ie,Se,O,V]),ye=C.useCallback(async h=>{let M=await At({kind:h,locale:typeof n=="function"?n():"zh"});if(M===null)return;let A=Dt(M.kind);O(A.clip,!1),X.play(A.sound,M.text),V(M.text,!1,"quip",Pt,M.source?.label??null)},[n,O,V]),Ne=C.useCallback(()=>{if(o.current!=="idle"||x.current!==null&&x.current.isActive())return;let M=Date.now()-l.current;if(M<vn)return;if(qt({idleForMs:M,chance:Je})){l.current=Date.now(),ye(null);return}if(Math.random()>Sn)return;let A=Qt[Math.floor(Math.random()*Qt.length)];O(A,!1),l.current=Date.now()},[O,ye]),re=C.useCallback((h,M,A)=>{typeof h.clip=="string"&&h.clip!==""&&O(h.clip,!1),typeof h.sound=="string"&&h.sound!==""&&X.play(h.sound,h.line),typeof h.line=="string"&&h.line!==""&&V(h.line,M,"chat",A)},[O,V]),ce=C.useCallback(()=>{window.clearTimeout(p.current),v(null),O(xe,!0),ie()},[ie,O]),ne=typeof t=="function"?t(h=>typeof h?.draft=="string"?h.draft:""):"";C.useEffect(()=>{x.current===null&&(x.current=Ct());let h=x.current,M=zt(ne,typeof n=="function"?n():"zh"),A=h.observe(ne);if(A!==null&&A.kind==="wake"&&(v({phase:"awake"}),re({clip:"click-surprise",sound:"wake",line:Rt({locale:M,seed:ne})},!0)),A!==null&&A.kind==="off"){ce();return}if(window.clearTimeout(N.current),!h.isActive())return;let W=G=>{N.current=window.setTimeout(()=>{let d=h.settle(ne,{locale:M});if(d!==null&&d.kind==="cooldown"){W(Math.max(120,d.retryInMs));return}d===null||d.kind!=="reply"||(re(d,!1,Kt),window.clearTimeout(p.current),p.current=window.setTimeout(()=>ce(),h.holdMs))},G)};return W(h.debounceMs),()=>window.clearTimeout(N.current)},[ne,n,re,ce]),C.useEffect(()=>{ve.refresh()},[]),C.useEffect(()=>{let h=!1;return fetch("/api/chatbox-pet/config").then(M=>M.ok?M.json():null).then(M=>{!h&&M?.ok===!0&&(s.current=M.result)}).catch(()=>{}),()=>{h=!0}},[]),C.useEffect(()=>{if(typeof e!="string"||e==="")return;let h=!1,M=0,A=async()=>{if(document.visibilityState==="visible"){try{let d=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),D=d.ok?await d.json():null;!h&&D?.ok===!0&&be(D.result)}catch{}h||Ne()}},W=()=>{M=window.setTimeout(async()=>{await A(),h||W()},yn)},G=()=>{document.visibilityState==="visible"&&A()};return document.addEventListener("visibilitychange",G),A(),W(),()=>{h=!0,window.clearTimeout(M),document.removeEventListener("visibilitychange",G)}},[e,be]),C.useEffect(()=>(O(xe,!0),()=>window.clearTimeout(k.current)),[O]);let[le,me]=C.useState(()=>Ie(ke())==="on"),fe=C.useCallback(h=>{let M=Pe(h);M!==""&&(O(Ht,!1),X.play("click",M),V(M,!1,"chat",Kt),ve.remember(M))},[O,V]),ze=C.useCallback(h=>{typeof h!="string"||h===""||(O(h,!1),X.play("click",h))},[O]),Re=C.useCallback(()=>{let h=document.querySelector("[data-cbp-pet]"),M=h instanceof Element?h.getBoundingClientRect():null;M!==null&&z({left:M.left,right:M.right,top:M.top,bottom:M.bottom})},[]);return C.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},C.createElement("div",{className:"cbp-stage"},C.createElement("div",{className:(L===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(L?.kind==="error"?" cbp-bubble--error":"")+(L?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":r("aria.bubble")},L?.source?C.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":L.source},L.source):null,C.createElement("span",{className:"cbp-bubble-text"},L?.text??"")),C.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":r(le?"sound.on":"sound.off"),"aria-pressed":le,onClick:h=>{h.stopPropagation();let M=xt(ke())==="on";me(M),prefsStore.update({sound:M})}},le?C.createElement(Nn,null):C.createElement(zn,null)),C.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":w===null?I:"awake","data-cbp-chat":w===null?"false":"true","aria-label":r("aria.pet"),onClick:()=>{X.play("click"),O(Ht,!1)},onContextMenu:h=>{h.preventDefault(),h.stopPropagation(),Re()},onKeyDown:h=>{(h.key==="ContextMenu"||h.shiftKey&&h.key==="F10")&&(h.preventDefault(),Re())},"aria-haspopup":"menu","aria-expanded":f===null?"false":"true"},P?C.createElement("video",{ref:a,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:h=>{h.currentTarget.loop||O(xe,!0)},onError:se}):C.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),f===null?null:C.createElement(jt,{anchor:f,locale:typeof n=="function"?n():"zh",onSay:fe,onAction:ze,onQuip:h=>{ye(h)},recent:m,onForget:()=>{ve.clear()},onClose:()=>z(null),t:r}))}function Nn(){return C.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},C.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),C.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),C.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function zn(){return C.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},C.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),C.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Vt=`
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
`;var Jt="/api/chatbox-pet/prefs",Rn=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function Cn(e={}){let r=typeof e.fetch=="function"?e.fetch:(...i)=>globalThis.fetch(...i),t=Rn,n=new Set;function a(i){t={...t,...i};for(let l of n)try{l()}catch{}}async function s(){try{let l=await(await r(Jt,{method:"GET",headers:{accept:"application/json"}})).json();l?.ok===!0&&l.result!==null&&typeof l.result=="object"?a({pet:l.result.pet!==!1,boost:l.result.boost!==!1,sound:l.result.sound!==!1,loaded:!0}):a({loaded:!0})}catch{}return t}async function o(i){let l=t,x={};for(let N of["pet","boost","sound"])typeof i?.[N]=="boolean"&&(x[N]=i[N]);a(x);try{let p=await(await r(Jt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:x})})).json();if(p?.ok!==!0||p.result===null||typeof p.result!="object")throw new Error("rejected");return a({pet:p.result.pet!==!1,boost:p.result.boost!==!1,sound:p.result.sound!==!1,loaded:!0}),!0}catch{return a({pet:l.pet,boost:l.boost,sound:l.sound}),!1}}return{subscribe(i){return typeof i!="function"?()=>{}:(n.add(i),()=>n.delete(i))},getSnapshot(){return t},refresh:s,update:o}}var oe=Cn();var J=de(require("react"),1),Yt=require("react");var Xt=`
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
`;function tt({id:e,checked:r,label:t,onChange:n}){return J.createElement("label",{className:"cbp-set-item",htmlFor:e},J.createElement("span",{className:"cbp-switch"},J.createElement("input",{id:e,type:"checkbox",role:"switch",checked:r,onChange:a=>n(a.target.checked),"data-cbp-pref":e}),J.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),J.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),t)}function Zt({t:e}){let r=(0,Yt.useSyncExternalStore)(oe.subscribe,oe.getSnapshot,oe.getSnapshot),[t,n]=J.useState(()=>Ie(ke())==="on"),a=s=>{n(s),Qe(ke(),s?"on":"off"),oe.update({sound:s})};return J.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},J.createElement("div",{className:"cbp-set-head"},J.createElement("span",{className:"cbp-set-title"},e("settings.title")),J.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),J.createElement("div",{className:"cbp-set-items"},J.createElement(tt,{id:"chatbox-pet-feature-pet",checked:r.pet!==!1,label:e("settings.pet"),onChange:s=>{oe.update({pet:s})}}),J.createElement(tt,{id:"chatbox-pet-feature-boost",checked:r.boost!==!1,label:e("settings.boost"),onChange:s=>{oe.update({boost:s})}}),J.createElement(tt,{id:"chatbox-pet-feature-sound",checked:t,label:e("settings.sound"),onChange:a})))}var qe=de(require("react"),1),_e=require("react"),nt=require("@deepseek-ai/dsh-client-ui-primitives");var H=require("react");function Me({size:e=16,children:r}){return(0,H.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},r)}function je({size:e=16}){return(0,H.createElement)(Me,{size:e},[(0,H.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,H.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,H.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function er({size:e=16}){return(0,H.createElement)(Me,{size:e},(0,H.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function tr({size:e=16}){return(0,H.createElement)(Me,{size:e},[(0,H.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,H.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function rt({size:e=16}){return(0,H.createElement)(Me,{size:e},[(0,H.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,H.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,H.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function rr({size:e=16}){return(0,H.createElement)(Me,{size:e},(0,H.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function nr({size:e=16}){return(0,H.createElement)(Me,{size:e},[(0,H.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,H.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,H.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,H.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,H.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function Tn({label:e,children:r}){return typeof nt.Tooltip=="function"?qe.createElement(nt.Tooltip,{label:e,side:"top",delayMs:400},r):(0,_e.cloneElement)(r,{title:e})}function ar({inputActions:e,useInput:r,store:t,t:n,locale:a}){let s=(0,_e.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),o=typeof r=="function"?r(w=>w):void 0;t.setDraftMirror(e,o);let i=typeof o?.draft=="string"?o.draft:"",l=s.phase==="running"||s.phase==="streaming",x=s.phase!=="idle",N=n(l?"button.running":"button.label"),p=l?n("button.running"):i.trim()===""?n("button.tooltipCompose"):n("button.tooltip");return qe.createElement(Tn,{label:p},qe.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":l?"true":"false","data-pb-open":x?"true":"false","aria-label":N,"aria-busy":l?"true":void 0,"aria-expanded":x?"true":"false","aria-controls":t.panelId(e),onMouseDown:w=>w.preventDefault(),onClick:()=>t.start(e,{locale:typeof a=="function"?a():"zh"})},qe.createElement(je,{size:16})))}var Z=de(require("react"),1),Be=require("react"),it=require("@deepseek-ai/dsh-client-ui-primitives");var or="next-turn";function at(e){return(Array.isArray(e?.content)?e.content:[]).filter(t=>t!==null&&typeof t=="object"&&t.type==="text"&&typeof t.text=="string").map(t=>t.text).join("").trim()}function Mn(e){return(Array.isArray(e?.content)?e.content:[]).some(t=>t===null||typeof t!="object"||t.type!=="text")}function ir(e){let r=[];try{let n=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();r=Array.isArray(n?.[or])?n[or]:[]}catch{r=[]}return ot(r)}function ot(e){let t=(Array.isArray(e)?e:[]).filter(o=>o!==null&&typeof o=="object"&&typeof o.id=="string"),n=t.map(at),a=t.filter((o,i)=>!Mn(o)&&n[i]!==""),s="";return t.length>=2&&a.length!==t.length?s="attachment":t.length>8?s="too-many":t.length<2&&(s="too-few"),{items:t,texts:n,mergeable:t.length,blocked:s}}async function En(e,r={}){let t=In(e),n=typeof r.fetchImpl=="function"?r.fetchImpl:(...a)=>globalThis.fetch(...a);try{let a=await n("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof r.sessionId=="string"?r.sessionId:void 0,locale:r.locale==="en"?"en":"zh"})});if(!a.ok)return{prompt:t,optimized:!1,reason:"http-"+String(a.status)};let s=await a.json(),o=typeof s?.result?.prompt=="string"?s.result.prompt.trim():"";return o===""?{prompt:t,optimized:!1,reason:"empty"}:{prompt:o,optimized:s.result.optimized===!0,reason:typeof s.result.reason=="string"?s.result.reason:""}}catch{return{prompt:t,optimized:!1,reason:"network"}}}function In(e){return(Array.isArray(e)?e:[]).map(r=>String(r??"").trim()).filter(r=>r!=="").join(`

`)}async function Pn(e,r,t){let n=Array.isArray(r)?r:[],a=String(t??"").trim();if(n.length<2||a==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[s,...o]=n;try{let x=await e.updateQueue(s.id,{kind:"edit",content:[{type:"text",text:a}]});if(x?.ok!==!0)return{ok:!1,merged:0,removed:0,error:x?.error?.code??"edit-failed"}}catch(x){return{ok:!1,merged:0,removed:0,error:sr(x)}}let i=0,l=0;for(let x of o)try{let N=await e.updateQueue(x.id,{kind:"remove"});if(N?.ok===!0){i+=1;continue}if(N?.error?.code==="session/queue-item-not-found"){l+=1;continue}return{ok:!1,merged:1,removed:i,claimed:l,error:N?.error?.code??"remove-failed"}}catch(N){return{ok:!1,merged:1,removed:i,claimed:l,error:sr(N)}}return{ok:l===0,merged:1,removed:i,claimed:l,error:l>0?"session/queue-item-not-found":""}}async function cr(e={}){let r=ir(e.session);if(r.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:r.blocked};let t=r.items.map(at),n=await En(t,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),a=ir(e.session);if(!(a.items.length===r.items.length&&a.items.every((i,l)=>i.id===r.items[l].id&&at(i)===t[l])))return{ok:!1,count:r.items.length,optimized:!1,reason:"",error:"queue-changed"};let o=await Pn(e.session,r.items,n.prompt);return{ok:o.ok,count:r.items.length,optimized:n.optimized,reason:n.reason,error:o.error}}function sr(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function qn({label:e,children:r}){return typeof it.Tooltip=="function"?Z.createElement(it.Tooltip,{label:e,side:"top",delayMs:400},r):(0,Be.cloneElement)(r,{title:e})}var Ln=Object.freeze({}),Dn=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>Ln});function An(e){let r=(()=>{try{let n=e?.projections?.faceOf?.("inbox");if(typeof n?.subscribe=="function"&&typeof n?.getSnapshot=="function")return n}catch{}return Dn})(),t=(0,Be.useSyncExternalStore)(r.subscribe,r.getSnapshot,r.getSnapshot);return ot(t?.["next-turn"])}function lr({sessionId:e,sessions:r,t,locale:n,onNotice:a}){let s=Z.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return r?.binding?.(e)?.session??null}catch{return null}},[r,e]),o=An(s),[i,l]=Z.useState("idle"),[x,N]=Z.useState(""),p=Z.useRef(0);Z.useEffect(()=>()=>window.clearTimeout(p.current),[]);let w=o.items.length;if(w<2||o.blocked==="attachment"||o.blocked==="too-many")return null;let v=async()=>{if(i!=="running"){l("running"),N("");try{let z=await cr({session:s,sessionId:e,locale:typeof n=="function"?n():"zh"});if(z.ok){let q=z.optimized?t("merge.done")(z.count):t("merge.donePlain")(z.count);N(q),a?.(q)}else N(z.error==="queue-changed"?t("merge.changed"):z.error==="session/queue-item-not-found"?t("merge.claimed"):t("merge.failed"))}catch{N(t("merge.failed"))}finally{l("idle"),window.clearTimeout(p.current),p.current=window.setTimeout(()=>N(""),4e3)}}},f=i==="running"?t("merge.running"):x!==""?x:t("merge.label")(w);return Z.createElement(qn,{label:f},Z.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":w,"data-cbp-merge-phase":i,"aria-label":f,"aria-busy":i==="running"?"true":void 0,disabled:i==="running",onClick:z=>{z.stopPropagation(),v()}},Z.createElement(nr,null),Z.createElement("span",{className:"cbp-merge-count"},i==="running"?"\u2026":w)))}var Le="promptBoost",pr={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},dr={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var S=de(require("react"),1),ee=require("react");var Fn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function On(){return S.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},S.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),S.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function ur(e,r){let t=`source.${e.id}`,n=r(t);return n===t?e.label:n}function jn(e,r){if(e==null)return r("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return r("panel.error.network");case"timeout":return r("panel.error.timeout");case"stream":return r("panel.error.stream");case"empty":return r("panel.error.empty");case"apply":return r("panel.error.apply");case"host":return r("panel.error.host");default:return r("panel.error.unknown")}}function _n(e,r){if(e.phase!=="ready")return"";let t=[];return e.cached&&t.push(r("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&t.push(r("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),t.join(" \xB7 ")}function Bn(e,r){if(e.phase==="running")return r("chip.running");if(e.phase==="streaming"){let t=e.sources.slice(0,2).map(n=>`${ur(n,r)} ${n.count}`).join(" \xB7 ");return t===""?r("chip.writing"):`${t} \xB7 ${r("chip.writing")}`}return e.phase==="ready"?r("chip.ready"):e.phase==="applied"?r("undo.done"):e.phase==="error"?r("chip.failed"):r("undo.done")}function $n({state:e,store:r,t,inputActions:n,chipRef:a}){let s=e.phase==="applied",o=e.phase==="running"||e.phase==="streaming",i=e.phase==="ready",l=e.phase==="error",x=e.mode==="compose"?t("panel.compose"):t("button.label"),N=Bn(e,t);return s?S.createElement("div",{className:"pb-chip-row"},S.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":t("chip.expand"),onClick:()=>r.expand(n),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),r.expand(n))}},S.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},S.createElement(er,{size:12})),S.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},t("undo.done")),S.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),S.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":t("undo.label"),onClick:()=>r.undo(n)},t("undo.action")))):S.createElement("div",{className:"pb-chip-row"},S.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":o?"true":"false",onClick:()=>r.expand(n)},S.createElement("button",{ref:a,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":r.panelId(n),"aria-label":`${t("chip.expand")} \xB7 ${x}`,onClick:()=>r.expand(n)},S.createElement("span",{className:o||i?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},o?S.createElement(On,null):l?S.createElement(rt,{size:12}):S.createElement(je,{size:12})),S.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},N),i||l?S.createElement(S.Fragment,null,S.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),S.createElement("span",{className:"pb-chip-view"},t("chip.view"))):null),S.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":t("chip.dismiss"),onClick:()=>r.dismiss(n)},S.createElement(tr,{size:10}))))}function Un({state:e,store:r,t,inputActions:n,locale:a,panelRef:s}){let o=(0,ee.useRef)(null),i=e.phase,l=i==="running",x=i==="streaming",N=i==="ready",p=i==="applied",w=N||p,v=i==="error",f=e.sources,z=l||x||w||f.length>0,q=p?e.applied:e.prompt,m=_n(e,t),k=r.panelId(n),L=t(Fn?"shortcut.mac":"shortcut.other"),T=t(l?"panel.announceRunning":x?"panel.streaming":p?"panel.announceApplied":N?"panel.announceReady":"panel.announceError");return(0,ee.useEffect)(()=>{let I=o.current;I===null||i!=="streaming"||(I.scrollTop=I.scrollHeight)},[e.prompt,i]),S.createElement("section",{ref:s,id:k,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":i,"data-pb-running":l||x?"true":"false",tabIndex:-1,"aria-labelledby":`${k}-title`,"aria-busy":l||x?"true":void 0},S.createElement("header",{className:"pb-head"},S.createElement("div",{className:"pb-head-row"},S.createElement("h2",{className:"pb-title",id:`${k}-title`},t("panel.title")),e.mode==="compose"?S.createElement("span",{className:"pb-mode"},t("panel.compose")):null,S.createElement("span",{className:"pb-meta"},m),S.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":t("panel.collapse"),title:t("panel.collapse"),onClick:()=>r.collapse(n)},S.createElement(rr,{size:14}))),z?S.createElement("div",{className:"pb-sources",role:"list","aria-label":t("panel.sources")},f.length>0?f.map(I=>S.createElement("span",{key:I.id,className:"pb-chip",role:"listitem","data-pb-source":I.id},S.createElement("span",{className:"pb-chip-label"},ur(I,t)),S.createElement("span",{className:"pb-chip-count"},I.count))):l?[S.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),S.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:S.createElement("span",{className:"pb-note"},t("panel.noSources"))):null),S.createElement("div",{className:"pb-rule","aria-hidden":"true"}),S.createElement("div",{className:"pb-body"},l?S.createElement(S.Fragment,null,S.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},S.createElement("span",{className:"pb-skeleton-line is-long"}),S.createElement("span",{className:"pb-skeleton-line is-full"}),S.createElement("span",{className:"pb-skeleton-line is-short"})),S.createElement("div",{className:"pb-status"},S.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.status"))):null,x||w?S.createElement("textarea",{ref:o,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:x||p,spellCheck:!1,"aria-label":t("panel.editLabel"),placeholder:t("panel.placeholder"),value:q}):null,x?S.createElement("div",{className:"pb-status"},S.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.streaming")):null,v?S.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},S.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},S.createElement(rt,{size:14})),S.createElement("span",{className:"pb-error-text"},jn(e.error,t))):null,S.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},T)),S.createElement("div",{className:"pb-foot"},S.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>r.collapse(n)},t("panel.close")),S.createElement("span",{className:"pb-foot-spacer"}),w?S.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:L,onClick:()=>r.retry(n,{locale:a()})},t("panel.another"),S.createElement("span",{className:"pb-kbd","aria-hidden":"true"},L)):null,p?S.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>r.undo(n)},t("undo.action")):null,l||x?S.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>r.retry(n,{locale:a()})},t("panel.retry")):null,v?S.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>r.retry(n,{locale:a()})},t("panel.retryError")):null))}function br({inputActions:e,store:r,t,locale:n,session:a}){let s=(0,ee.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),o=s.phase,i=o!=="idle"||s.undo!==null,l=s.expanded===!0&&o!=="idle";(0,ee.useEffect)(()=>{let f=typeof a?.id=="string"?a.id:"";f!==""&&r.setSessionId(e,f)},[a?.id,e,r]);let x=(0,ee.useRef)(null),N=(0,ee.useRef)(null),p=(0,ee.useRef)(null),w=(0,ee.useRef)(!1),v=(0,ee.useRef)(!1);return(0,ee.useEffect)(()=>{if(!i)return;let f=z=>{if(!(z.defaultPrevented||l===!1)){if(z.key==="Escape"){z.preventDefault(),z.stopPropagation(),r.collapse(e);return}z.key==="Enter"&&(z.metaKey||z.ctrlKey)&&(z.preventDefault(),z.stopPropagation(),o==="applied"||o==="ready"?r.retry(e,{locale:n()}):o==="error"&&r.retry(e,{locale:n()}))}};return document.addEventListener("keydown",f,!0),()=>document.removeEventListener("keydown",f,!0)},[i,l,o,e,r,n]),(0,ee.useEffect)(()=>{if(i&&w.current===!1){w.current=!0,p.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(i===!1&&w.current){w.current=!1;let f=p.current;if(p.current=null,f==null||f.isConnected===!1||typeof f.focus!="function")return;try{f.focus({preventScroll:!0})}catch{}}},[i]),(0,ee.useEffect)(()=>{if(l&&v.current===!1){v.current=!0;let f=N.current;if(f!==null&&typeof f.focus=="function")try{f.focus({preventScroll:!0})}catch{}return}if(l===!1&&v.current){v.current=!1;let f=o==="idle"?p.current:x.current;if(f==null||f.isConnected===!1||typeof f.focus!="function")return;try{f.focus({preventScroll:!0})}catch{}}},[l,o]),i?l===!1?S.createElement($n,{state:s,store:r,t,inputActions:e,chipRef:x}):S.createElement(Un,{state:s,store:r,t,inputActions:e,locale:n,panelRef:N}):null}var y=de(require("react"),1),ct=require("react-dom");var fr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"translate",icon:"translate",zh:"\u7FFB\u8BD1",en:"Translate",sheet:"translate",prompt:{zh:"\u5E2E\u6211\u7FFB\u8BD1\uFF1A",en:"Translate this: "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function st(e,r){return r==="en"?e.en:e.zh}var u=de(require("react"),1),hr=require("react-dom"),mr="/api/chatbox-pet",Wn=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],Hn=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function gr(e,r){let t=await fetch(`${mr}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)}),n;try{n=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return n.result}function xr(e,r){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:r,references:[]}),!0}catch{try{return e.setDraft(r),!0}catch{return!1}}}function $e({title:e,hint:r,onClose:t,children:n,t:a}){let s=u.useRef(null);return u.useEffect(()=>{let o=i=>{i.key==="Escape"&&(i.preventDefault(),i.stopPropagation(),t())};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[t]),(0,hr.createPortal)(u.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:o=>o.stopPropagation()},u.createElement("div",{className:"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:s},u.createElement("div",{className:"cbp-sheet-head"},u.createElement("span",{className:"cbp-sheet-title"},e),u.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":a("sheet.close"),onClick:t},"\u2715")),r?u.createElement("p",{className:"cbp-sheet-hint"},r):null,u.createElement("div",{className:"cbp-sheet-body"},n))),document.body)}function yr({onClose:e,onFill:r,t,locale:n}){let[a,s]=u.useState("idle"),[o,i]=u.useState(0),[l,x]=u.useState(null),[N,p]=u.useState(""),w=u.useRef(null),v=u.useRef([]),f=u.useRef(0),z=()=>{f.current!==0&&(clearInterval(f.current),f.current=0)};u.useEffect(()=>()=>{z();try{w.current?.stream?.getTracks?.().forEach(T=>T.stop())}catch{}},[]);let q=async T=>{s("working"),p("");try{let R=await(await fetch(`${mr}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":T.type||"audio/webm"},body:T})).json();if(R?.ok!==!0)throw new Error(R?.error?.message??"\u8F6C\u5199\u5931\u8D25");x(R.result),s("done")}catch(I){p(String(I?.message??I)),s("idle")}},m=async()=>{p("");try{let T=await navigator.mediaDevices.getUserMedia({audio:!0}),I=new MediaRecorder(T);v.current=[],I.ondataavailable=R=>{R.data?.size>0&&v.current.push(R.data)},I.onstop=()=>{z(),T.getTracks().forEach(P=>P.stop());let R=new Blob(v.current,{type:I.mimeType||"audio/webm"});q(R)},w.current=I,I.start(),i(0),s("recording"),f.current=setInterval(()=>i(R=>R+1),1e3)}catch(T){let I=T?.name==="NotAllowedError"||T?.name==="SecurityError";p(I?t("sheet.transcribe.denied"):String(T?.message??T))}},k=()=>{s("working");try{w.current?.stop()}catch{z(),s("idle")}},L=`${String(Math.floor(o/60)).padStart(2,"0")}:${String(o%60).padStart(2,"0")}`;return u.createElement($e,{title:t("sheet.transcribe.title"),hint:t("sheet.transcribe.hint"),onClose:e,t},l===null?u.createElement(u.Fragment,null,u.createElement("div",{className:"cbp-sheet-center"},u.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":a,"aria-label":t(a==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:a==="recording"?k:m,disabled:a==="working"},u.createElement("span",{className:"cbp-rec-dot"})),u.createElement("span",{className:"cbp-rec-time"},a==="recording"?L:t(a==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),u.createElement("label",{className:"cbp-sheet-file"},u.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:T=>{let I=T.target.files?.[0];I&&q(I),T.target.value=""}}),u.createElement("span",null,t("sheet.transcribe.pick")))):u.createElement(u.Fragment,null,u.createElement("div",{className:"cbp-sheet-meta"},t("sheet.transcribe.meta")(l.segments?.length??0,l.language??"\u2014",l.durationSeconds??0)),u.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},l.text||t("sheet.transcribe.empty")),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(l.text)},t("sheet.fill")),u.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{x(null),s("idle")}},t("sheet.again")))),N?u.createElement("p",{className:"cbp-sheet-error"},N):null)}function wr({onClose:e,onFill:r,t,locale:n,sessionId:a=""}){let[s,o]=u.useState("update"),[i,l]=u.useState(""),[x,N]=u.useState(""),[p,w]=u.useState("idle"),[v,f]=u.useState(""),[z,q]=u.useState(""),m=async()=>{w("working"),q("");try{let k=await gr("/write",{genre:s,topic:i,tone:x,locale:n(),session:a});f(k.text),w("done")}catch(k){q(String(k?.message??k)),w("idle")}};return u.createElement($e,{title:t("sheet.write.title"),hint:t("sheet.write.hint"),onClose:e,t},u.createElement("div",{className:"cbp-chips"},Wn.map(k=>u.createElement("button",{key:k.id,type:"button",className:"cbp-chip","data-cbp-genre":k.id,"aria-pressed":s===k.id?"true":"false",onClick:()=>o(k.id)},n()==="en"?k.en:k.zh))),u.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:t("sheet.write.topic"),value:i,maxLength:200,onChange:k=>l(k.target.value)}),u.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:t("sheet.write.tone"),value:x,maxLength:80,onChange:k=>N(k.target.value)}),v===""?u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:p==="working"||i.trim()==="",onClick:m},t(p==="working"?"sheet.working":"sheet.write.go"))):u.createElement(u.Fragment,null,u.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},v),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(v)},t("sheet.fill")),u.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>f("")},t("sheet.again")))),z?u.createElement("p",{className:"cbp-sheet-error"},z):null)}function kr({onClose:e,t:r,locale:t,sessionId:n=""}){let[a,s]=u.useState(""),[o,i]=u.useState(""),[l,x]=u.useState(10),[N,p]=u.useState("idle"),[w,v]=u.useState(null),[f,z]=u.useState(""),q=async()=>{p("working"),z("");try{let k=await gr("/deck",{topic:a,audience:o,pages:l,locale:t(),session:n});v(k),p("done")}catch(k){z(String(k?.message??k)),p("idle")}},m=()=>{if(!w?.base64)return;let k=Uint8Array.from(atob(w.base64),R=>R.charCodeAt(0)),L=new Blob([k],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),T=URL.createObjectURL(L),I=document.createElement("a");I.href=T,I.download=w.name||"deck.pptx",document.body.appendChild(I),I.click(),I.remove(),setTimeout(()=>URL.revokeObjectURL(T),4e3)};return u.createElement($e,{title:r("sheet.deck.title"),hint:r("sheet.deck.hint"),onClose:e,t:r},w===null?u.createElement(u.Fragment,null,u.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:r("sheet.deck.topic"),value:a,maxLength:200,onChange:k=>s(k.target.value)}),u.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:r("sheet.deck.audience"),value:o,maxLength:120,onChange:k=>i(k.target.value)}),u.createElement("div",{className:"cbp-chips"},Hn.map(k=>u.createElement("button",{key:k.id,type:"button",className:"cbp-chip","data-cbp-size":k.id,"aria-pressed":l===k.id?"true":"false",onClick:()=>x(k.id)},t()==="en"?k.en:k.zh))),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:N==="working"||a.trim()==="",onClick:q},r(N==="working"?"sheet.deck.working":"sheet.deck.go")))):u.createElement(u.Fragment,null,u.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},u.createElement("div",{className:"cbp-deck-title"},w.title||a),u.createElement("div",{className:"cbp-deck-meta"},r("sheet.deck.meta")(w.slides??0)),u.createElement("div",{className:"cbp-deck-path",title:w.path},w.path)),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:m},r("sheet.deck.download")),u.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>v(null)},r("sheet.again")))),f?u.createElement("p",{className:"cbp-sheet-error"},f):null)}function vr({onClose:e,onFill:r,t}){let[n,a]=u.useState(""),s=()=>{let o=n.trim();r(o===""?t("sheet.video.prompt"):t("sheet.video.promptWith")(o))};return u.createElement($e,{title:t("sheet.video.title"),hint:t("sheet.video.hint"),onClose:e,t},u.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:t("sheet.video.placeholder"),value:n,maxLength:500,onChange:o=>a(o.target.value)}),u.createElement("div",{className:"cbp-sheet-actions"},u.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:s},t("sheet.video.go"))))}var Sr=`
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
.cbp-sheet.cbp-sheet-wide{
  width:min(660px,100%);
  max-height:min(82vh,720px);
}
@media (prefers-reduced-motion: reduce){
  .cbp-sheet-veil,.cbp-sheet{animation:none}
}
`;var g=de(require("react"),1),Cr="/api/chatbox-pet",Rr=[{id:"auto",zh:"\u81EA\u52A8\u68C0\u6D4B",en:"Detect"},{id:"zh",zh:"\u4E2D\u6587",en:"Chinese"},{id:"en",zh:"\u82F1\u6587",en:"English"},{id:"ja",zh:"\u65E5\u6587",en:"Japanese"},{id:"ko",zh:"\u97E9\u6587",en:"Korean"},{id:"fr",zh:"\u6CD5\u6587",en:"French"},{id:"de",zh:"\u5FB7\u6587",en:"German"},{id:"es",zh:"\u897F\u73ED\u7259\u6587",en:"Spanish"}];async function Ee(e,r){let t=await fetch(`${Cr}${e}`,r),n;try{n=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return n.result}function Tr({t:e,locale:r=()=>"zh",inputActions:t}){let n=r()!=="en",a=g.useCallback((d,D)=>n?d:D,[n]),[s,o]=g.useState("translate"),[i,l]=g.useState("auto"),[x,N]=g.useState(()=>n?"en":"zh"),[p,w]=g.useState("text"),[v,f]=g.useState(""),[z,q]=g.useState(""),[m,k]=g.useState("idle"),[L,T]=g.useState(""),[I,R]=g.useState(""),[P,_]=g.useState(!1),[F,O]=g.useState(0),[se,ie]=g.useState([]),[V,Se]=g.useState("all"),[be,ye]=g.useState(""),[Ne,re]=g.useState(!1),ce=g.useRef(null),ne=g.useRef([]),le=g.useRef(0),me=g.useCallback(()=>{le.current!==0&&(clearInterval(le.current),le.current=0)},[]),fe=g.useCallback(async(d=V,D=be)=>{try{let $=new URLSearchParams;d!=="all"&&$.set("kind",d),D.trim()!==""&&$.set("search",D.trim());let ae=await Ee(`/favorites?${$.toString()}`);ie(ae.items??[])}catch($){T(String($?.message??$))}},[V,be]);g.useEffect(()=>{fe("all","")},[]),g.useEffect(()=>()=>{me();try{ce.current?.stream?.getTracks?.().forEach(d=>d.stop())}catch{}},[me]);let ze=async(d=v)=>{let D=d.trim();if(D===""){T(a("\u5148\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57","Type something to translate first"));return}k("working"),T(""),re(!1);try{let $=await Ee("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:D,from:i,to:x,locale:n?"zh":"en"})});q($.translated),k("done")}catch($){T(String($?.message??$)),k("idle")}},Re=()=>{if(x==="auto"){N(i==="auto"?"zh":i),l("auto");return}l(x),N(i==="auto"?"zh":i),z!==""&&(f(z),q(""))},h=async d=>{k("working"),T(""),re(!1),R(d.name);try{let D=await Ee(`/translate/file?name=${encodeURIComponent(d.name)}`,{method:"POST",headers:{"content-type":d.type||"application/octet-stream"},body:d});f(D.text);let $=await Ee("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:D.text,from:i,to:x,locale:n?"zh":"en"})});q($.translated),k("done"),w("text"),D.truncated&&T(a("\u6587\u4EF6\u8F83\u957F\uFF0C\u53EA\u7FFB\u8BD1\u4E86\u524D 6 \u4E07\u4E2A\u5B57\u7B26","Long document: only the first 60,000 characters were translated"))}catch(D){T(String(D?.message??D)),k("idle")}},M=async()=>{T("");try{let d=await navigator.mediaDevices.getUserMedia({audio:!0}),D=new MediaRecorder(d);ne.current=[],D.ondataavailable=$=>{$.data?.size>0&&ne.current.push($.data)},D.onstop=async()=>{me(),d.getTracks().forEach(ae=>ae.stop()),_(!1),k("working");let $=new Blob(ne.current,{type:D.mimeType||"audio/webm"});try{let{transcribe:ae}=await Promise.resolve().then(()=>(zr(),Nr)),c=await ae($);f(c),w("text"),k("idle")}catch(ae){T(String(ae?.message??ae)),k("idle")}},ce.current=D,D.start(),_(!0),O(0),le.current=setInterval(()=>O($=>$+1),1e3)}catch(d){let D=d?.name==="NotAllowedError"||d?.name==="SecurityError";T(D?a("\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650","No microphone permission"):String(d?.message??d))}},A=async()=>{if(v.trim()!=="")try{await Ee("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"sentence",source:v,target:z,from:i,to:x})}),re(!0),await fe()}catch(d){T(String(d?.message??d))}},W=async d=>{try{await Ee("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"remove",id:d})}),await fe()}catch(D){T(String(D?.message??D))}},G=async d=>{try{await navigator.clipboard.writeText(d)}catch{T(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C","Copy failed \u2014 select the text manually"))}};return g.createElement("div",{className:"cbt-page"},g.createElement("div",{className:"cbt-viewtabs",role:"tablist"},[["translate",a("\u7FFB\u8BD1","Translate")],["favorites",a("\u6536\u85CF\u672C","Saved")]].map(([d,D])=>g.createElement("button",{key:d,type:"button",role:"tab",className:"cbt-viewtab","data-cbt-view":d,"aria-selected":s===d?"true":"false",onClick:()=>o(d)},D,d==="favorites"&&se.length>0?` \xB7 ${se.length}`:""))),s==="translate"?g.createElement(g.Fragment,null,g.createElement("div",{className:"cbt-bar"},g.createElement("select",{className:"cbt-select",value:i,onChange:d=>l(d.target.value),"aria-label":a("\u6E90\u8BED\u8A00","Source language")},Rr.map(d=>g.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),g.createElement("button",{type:"button",className:"cbt-swap",onClick:Re,title:a("\u4EA4\u6362\u8BED\u8A00","Swap"),"aria-label":a("\u4EA4\u6362\u8BED\u8A00","Swap")},"\u21C4"),g.createElement("select",{className:"cbt-select",value:x,onChange:d=>N(d.target.value),"aria-label":a("\u76EE\u6807\u8BED\u8A00","Target language")},Rr.filter(d=>d.id!=="auto").map(d=>g.createElement("option",{key:d.id,value:d.id},n?d.zh:d.en))),g.createElement("span",{className:"cbt-spacer"}),g.createElement("div",{className:"cbt-tabs",role:"tablist"},["text","voice","file"].map(d=>g.createElement("button",{key:d,type:"button",role:"tab",className:"cbt-tab","data-cbt-tab":d,"aria-selected":p===d?"true":"false",onClick:()=>w(d)},d==="text"?a("\u6587\u5B57","Text"):d==="voice"?a("\u8BED\u97F3","Voice"):a("\u6587\u4EF6","File"))))),p==="text"?g.createElement("textarea",{className:"cbt-input","data-cbt-source":"true",placeholder:a("\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57\uFF0CCtrl / \u2318 + Enter \u7FFB\u8BD1","Type text to translate \u2014 Ctrl / \u2318 + Enter"),value:v,onChange:d=>f(d.target.value),onKeyDown:d=>{d.key==="Enter"&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),ze())}}):null,p==="voice"?g.createElement("div",{className:"cbt-voice"},g.createElement("button",{type:"button",className:"cbt-rec","data-cbt-record":P?"on":"off","aria-label":P?a("\u505C\u6B62\u5F55\u97F3","Stop recording"):a("\u5F00\u59CB\u5F55\u97F3","Start recording"),onClick:P?()=>ce.current?.stop():M},g.createElement("span",{className:"cbt-rec-dot"})),g.createElement("span",{className:"cbt-hint"},P?`${String(Math.floor(F/60)).padStart(2,"0")}:${String(F%60).padStart(2,"0")} \xB7 ${a("\u518D\u70B9\u4E00\u4E0B\u7ED3\u675F","tap again to stop")}`:a("\u5F55\u97F3\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u5B8C\u6210\u540E\u586B\u8FDB\u6587\u5B57\u6846","Transcribed on this machine, then placed in the text box"))):null,p==="file"?g.createElement("label",{className:"cbt-drop"},g.createElement("input",{type:"file",accept:".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json","data-cbt-file":"true",onChange:d=>{let D=d.target.files?.[0];D&&h(D),d.target.value=""}}),g.createElement("span",{className:"cbt-drop-title"},a("\u9009\u62E9\u4E00\u4E2A\u6587\u6863","Pick a document")),g.createElement("span",{className:"cbt-hint"},a("PDF / DOCX / TXT / Markdown / HTML\uFF0C30 MB \u4EE5\u5185","PDF / DOCX / TXT / Markdown / HTML, up to 30 MB"))):null,I!==""?g.createElement("div",{className:"cbt-doc","data-cbt-doc":"true"},I):null,g.createElement("div",{className:"cbt-actions"},g.createElement("button",{type:"button",className:"cbt-btn cbt-btn-primary","data-cbt-translate":"true",disabled:m==="working",onClick:()=>{ze()}},m==="working"?a("\u7FFB\u8BD1\u4E2D\u2026","Translating\u2026"):a("\u7FFB\u8BD1","Translate")),g.createElement("span",{className:"cbt-hint"},v.trim()===""?"":a(`${v.trim().length} \u5B57\u7B26`,`${v.trim().length} chars`))),z!==""?g.createElement("div",{className:"cbt-result","data-cbt-result":"true"},g.createElement("div",{className:"cbt-result-text"},z),g.createElement("div",{className:"cbt-actions"},g.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{G(z)}},a("\u590D\u5236","Copy")),g.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{A()}},Ne?a("\u5DF2\u6536\u85CF","Saved"):a("\u6536\u85CF","Save")),typeof t?.setDraft=="function"?g.createElement("button",{type:"button",className:"cbt-btn","data-cbt-fill":"true",onClick:()=>t.setDraft({text:z,references:[]})},a("\u586B\u5165\u8F93\u5165\u6846","Put in composer")):null)):null,L!==""?g.createElement("p",{className:"cbt-error","data-cbt-error":"true"},L):null):g.createElement(g.Fragment,null,g.createElement("div",{className:"cbt-bar"},[["all",a("\u5168\u90E8","All")],["word",a("\u5355\u8BCD","Words")],["sentence",a("\u53E5\u5B50","Sentences")]].map(([d,D])=>g.createElement("button",{key:d,type:"button",className:"cbt-chip","data-cbt-kind":d,"aria-pressed":V===d?"true":"false",onClick:()=>{Se(d),fe(d,be)}},D)),g.createElement("span",{className:"cbt-spacer"}),g.createElement("a",{className:"cbt-link",href:`${Cr}/favorites/export`,download:"favorites.md"},a("\u5BFC\u51FA Markdown","Export Markdown"))),g.createElement("input",{className:"cbt-search","data-cbt-search":"true",placeholder:a("\u641C\u7D22\u6536\u85CF","Search saved"),value:be,onChange:d=>{ye(d.target.value),fe(V,d.target.value)}}),g.createElement("div",{className:"cbt-list","data-cbt-favorites":"true"},se.length===0?g.createElement("p",{className:"cbt-empty"},a("\u8FD8\u6CA1\u6709\u6536\u85CF\u3002\u7FFB\u8BD1\u540E\u70B9\u300C\u6536\u85CF\u300D\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002","Nothing saved yet \u2014 translate something and press Save.")):se.map(d=>g.createElement("div",{className:"cbt-item",key:d.id,"data-cbt-item":d.id},g.createElement("div",{className:"cbt-item-source"},d.source),d.target?g.createElement("div",{className:"cbt-item-target"},d.target):null,g.createElement("div",{className:"cbt-item-foot"},g.createElement("span",{className:"cbt-item-kind"},d.kind==="word"?a("\u5355\u8BCD","Word"):a("\u53E5\u5B50","Sentence")),g.createElement("button",{type:"button",className:"cbt-item-remove",onClick:()=>{W(d.id)},"aria-label":a("\u5220\u9664","Delete")},"\u2715"))))),L!==""?g.createElement("p",{className:"cbt-error"},L):null))}var Mr=`
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
.cbt-input{box-sizing:border-box;width:100%;min-height:104px;max-height:200px;padding:12px;border-radius:12px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 11%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 45%,transparent);color:inherit;font:inherit;font-size:13.5px;line-height:1.6;resize:vertical;outline:none}
.cbt-input:focus{border-color:color-mix(in oklab,#635BFF 55%,transparent)}
.cbt-actions{display:flex;align-items:center;gap:8px}
.cbt-btn{height:28px;padding:0 12px;border-radius:8px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);background:transparent;color:inherit;font-size:12px;cursor:pointer}
.cbt-btn:hover{background:color-mix(in oklab,var(--dsw-alias-label-primary) 7%,transparent)}
.cbt-btn:disabled{opacity:.5;cursor:default}
.cbt-btn-primary{background:#635BFF;border-color:transparent;color:#fff}
.cbt-btn-primary:hover{background:#5149E6}
.cbt-hint{color:var(--dsw-alias-label-tertiary);font-size:11px}
.cbt-result{padding:12px;border-radius:12px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 40%,transparent);display:flex;flex-direction:column;gap:8px;max-height:220px;overflow:auto}
.cbt-result-text{font-size:13.5px;line-height:1.65;white-space:pre-wrap;word-break:break-word}
.cbt-error{margin:0;color:#e5484d;font-size:11.5px;line-height:1.5}
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
.cbt-list{flex:1;min-height:120px;max-height:260px;overflow:auto;display:flex;flex-direction:column;gap:6px;padding-right:2px}
.cbt-empty{margin:10px 2px;color:var(--dsw-alias-label-tertiary);font-size:11.5px;line-height:1.6}
.cbt-item{padding:8px 9px;border-radius:10px;border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 8%,transparent);background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 55%,transparent);display:flex;flex-direction:column;gap:3px}
.cbt-item-source{font-size:12.5px;font-weight:500;word-break:break-word}
.cbt-item-target{font-size:12px;color:var(--dsw-alias-label-secondary);line-height:1.5;word-break:break-word}
.cbt-item-foot{display:flex;align-items:center;justify-content:space-between;margin-top:2px}
.cbt-item-kind{font-size:10.5px;color:var(--dsw-alias-label-tertiary)}
.cbt-item-remove{border:0;background:transparent;color:var(--dsw-alias-label-tertiary);font-size:11px;cursor:pointer;padding:2px 4px;border-radius:6px}
.cbt-item-remove:hover{background:color-mix(in oklab,#e5484d 14%,transparent);color:#e5484d}
`;function Er({name:e}){let r={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return y.createElement("svg",{...r},y.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),y.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return y.createElement("svg",{...r},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),y.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),y.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return y.createElement("svg",{...r},y.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),y.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return y.createElement("svg",{...r},y.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),y.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return y.createElement("svg",{...r},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),y.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return y.createElement("svg",{...r},y.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),y.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),y.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"translate":return y.createElement("svg",{...r},y.createElement("path",{d:"M2.4 4.2h6M5.4 4.2v1.2c0 2.6-1.4 4.7-3.4 5.6"}),y.createElement("path",{d:"M3.9 8.4c.9 1.4 2.1 2.4 3.5 2.9"}),y.createElement("path",{d:"M9.4 13.6 11.6 8l2.2 5.6M10.2 11.9h2.8"}));case"slides":return y.createElement("svg",{...r},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),y.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return y.createElement("svg",{...r},y.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function Kn(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let r=e.closest('[data-composer-card="true"]');if(r)return r}return document.querySelector('[data-composer-card="true"]')}function Gn({t:e,locale:r,inputActions:t,onClose:n}){return y.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:a=>a.stopPropagation()},y.createElement("div",{className:"cbp-sheet cbp-sheet-wide",role:"dialog","aria-modal":"true","aria-label":e("sheet.translate.title")},y.createElement("div",{className:"cbp-sheet-head"},y.createElement("span",{className:"cbp-sheet-title"},e("sheet.translate.title")),y.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":e("sheet.close"),onClick:n},"\u2715")),y.createElement("p",{className:"cbp-sheet-hint"},e("sheet.translate.hint")),y.createElement("div",{className:"cbp-sheet-body"},y.createElement(Tr,{t:e,locale:r,inputActions:t}))))}function Ir({inputActions:e,t:r,locale:t,sessionId:n=""}){let a=typeof e?.setDraft=="function",[s,o]=y.useState(!1),[i,l]=y.useState(null),[x,N]=y.useState(null),p=y.useRef(null),w=y.useRef(null),[v,f]=y.useState(null);y.useEffect(()=>{f(Kn())},[]);let z=y.useCallback(()=>{let R=p.current?.getBoundingClientRect();R!=null&&N({right:Math.max(8,Math.round(window.innerWidth-R.right)),bottom:Math.max(8,Math.round(window.innerHeight-R.top)+8)})},[]);y.useLayoutEffect(()=>{s&&z()},[s,z]),y.useEffect(()=>{if(!s)return;let R=F=>{let O=F.target;O instanceof Node&&w.current?.contains(O)!==!0&&p.current?.contains(O)!==!0&&o(!1)},P=F=>{F.key==="Escape"&&(F.preventDefault(),F.stopPropagation(),o(!1),p.current?.focus?.())},_=()=>o(!1);return document.addEventListener("pointerdown",R,!0),document.addEventListener("keydown",P,!0),window.addEventListener("resize",_),window.addEventListener("scroll",_,!0),()=>{document.removeEventListener("pointerdown",R,!0),document.removeEventListener("keydown",P,!0),window.removeEventListener("resize",_),window.removeEventListener("scroll",_,!0)}},[s]);let q=R=>{if(typeof R.sheet=="string"){o(!1),l(R.sheet);return}let P=st(R.prompt,typeof t=="function"?t():"zh");try{e.setDraft({text:P,references:[]})}catch{try{e.setDraft(P)}catch{}}o(!1),p.current?.focus?.()},m=r("quick.label"),k=typeof t=="function"?t():"zh",L=y.createElement("button",{ref:p,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":s?"true":"false","aria-label":r("quick.aria"),title:r(a?"quick.aria":"quick.disabled"),disabled:!a,onMouseDown:R=>R.preventDefault(),onClick:()=>o(R=>!R)},y.createElement(Er,{name:"grid"}),y.createElement("span",{className:"cbp-more-label"},m)),T=s&&x!==null?(0,ct.createPortal)(y.createElement("div",{ref:w,className:"cbp-quick-panel",role:"menu","aria-label":r("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${x.right}px`,bottom:`${x.bottom}px`}},y.createElement("div",{className:"cbp-quick-head"},y.createElement("span",{className:"cbp-quick-title"},r("quick.title")),y.createElement("span",{className:"cbp-quick-hint"},r("quick.hint"))),y.createElement("div",{className:"cbp-quick-grid"},fr.map(R=>y.createElement("button",{key:R.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":R.id,onClick:()=>q(R)},y.createElement("span",{className:"cbp-quick-icon"},y.createElement(Er,{name:R.icon})),y.createElement("span",{className:"cbp-quick-name"},st({zh:R.zh,en:R.en},k)))))),document.body):null,I=R=>{typeof R=="string"&&R.trim()!==""&&xr(e,R),l(null)};return y.createElement(y.Fragment,null,y.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),v!==null?(0,ct.createPortal)(L,v):null,T,i==="transcribe"?y.createElement(yr,{t:r,locale:t,onClose:()=>l(null),onFill:I}):null,i==="write"?y.createElement(wr,{t:r,locale:t,sessionId:n,onClose:()=>l(null),onFill:I}):null,i==="deck"?y.createElement(kr,{t:r,locale:t,sessionId:n,onClose:()=>l(null)}):null,i==="video"?y.createElement(vr,{t:r,onClose:()=>l(null),onFill:I}):null,i==="translate"?y.createElement(Gn,{t:r,locale:t,inputActions:e,onClose:()=>l(null)}):null)}var Pr=`
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
`;var Fr="/api/chatbox-pet/boost",qr=4e3,Vn=12e4,Jn=24,Yn=8e3,Or=25e3;function jr(e){return{set:typeof e?.set=="function"?e.set:(r,t)=>setTimeout(r,t),clear:typeof e?.clear=="function"?e.clear:r=>clearTimeout(r)}}function ut(e){let r=typeof e=="string"?e:"";return r.length>qr?r.slice(0,qr):r}function Lr(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function De(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(r=>({...r})):[]}}function lt(e){if(!Array.isArray(e))return[];let r=[];for(let t of e){if(t===null||typeof t!="object")continue;let n=typeof t.id=="string"?t.id.trim():"",a=Number(t.count);n===""||!Number.isFinite(a)||a<=0||r.push({id:n,label:typeof t.label=="string"&&t.label.trim()!==""?t.label.trim():n,count:Math.round(a)})}return r}function Ae(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function te(e,r,t){let n=new Error(typeof r=="string"&&r!==""?r:e);return n.code=e,t!==void 0&&(n.cause=t),n}function Dr(e){let r=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",t=typeof e?.message=="string"&&e.message!==""&&e.message!==r?e.message:void 0;return t===void 0?{code:r}:{code:r,message:t}}function Xn(e){let r=[],t=e;for(;;){let n=/(?:\r?\n){2}/.exec(t);if(n===null)break;r.push(t.slice(0,n.index)),t=t.slice(n.index+n[0].length)}return{frames:r,rest:t}}function Ar(e){let r=[];for(let t of e.split(`
`)){let n=t.trim();n===""||n.startsWith(":")||n.startsWith("data:")&&r.push(n.slice(5).trimStart())}if(r.length===0)return null;try{let t=JSON.parse(r.join(`
`));return t!==null&&typeof t=="object"&&Array.isArray(t)===!1?t:null}catch{return null}}async function pt(e){try{return await e.json()}catch{return null}}function dt(e,r){if(e===null||typeof e!="object")throw te("host",void 0,r);if(e.ok!==!0){let a=typeof e.error?.message=="string"?e.error.message.trim():"";throw te(typeof e.error?.code=="string"?e.error.code:"host",a===""?void 0:a)}let t=e.result,n=typeof t?.prompt=="string"?t.prompt.trim():"";if(n==="")throw te("empty");return{prompt:n,mode:t.mode==="compose"?"compose":"improve",sources:lt(t.sources),elapsedMs:Number.isFinite(t.elapsedMs)?Math.max(0,Number(t.elapsedMs)):null,cached:t.cached===!0}}async function Zn(e){let{draft:r,mode:t,locale:n,signal:a,onEvent:s,idleMs:o=Or,sessionId:i=""}=e,l=i===""?{}:{sessionId:i},x=typeof e.fetch=="function"?e.fetch:globalThis.fetch,N=jr(e.timers),p=new AbortController,w=()=>p.abort();a!==void 0&&(a.aborted?p.abort():a.addEventListener("abort",w,{once:!0}));let v=!1,f=null,z=()=>{f!==null&&N.clear(f),f=N.set(()=>{v=!0,p.abort()},o)},q=!1;try{z();let m;try{m=await x(Fr,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:ut(r),mode:t,locale:n,stream:!0,...l}}),signal:p.signal})}catch(R){throw v?te("timeout",void 0,R):Ae(R)?R:te("network",void 0,R)}if(v)throw te("timeout");if(m===null||typeof m!="object")throw te("host");if(m.ok!==!0){let R=await pt(m);if(m.status>=400)throw te("host",void 0,m.status);let P=dt(R,m.status);s({type:"replace",text:P.prompt}),s({type:"done",result:P});return}let k=typeof m.headers?.get=="function"?String(m.headers.get("content-type")??""):"";if(m.body===null||m.body===void 0||typeof m.body.getReader!="function"||!k.includes("text/event-stream")){let R=dt(await pt(m),m.status);s({type:"replace",text:R.prompt}),s({type:"done",result:R});return}let L=m.body.getReader(),T=new TextDecoder,I="";for(;!q;){let R;try{R=await L.read()}catch(_){throw v?te("timeout",void 0,_):Ae(_)?_:te("stream",void 0,_)}if(R.done===!0)break;z(),I+=T.decode(R.value,{stream:!0});let P=Xn(I);I=P.rest;for(let _ of P.frames){let F=Ar(_);if(F!==null&&s(F)==="stop"){q=!0;break}}}if(!q){let R=I.trim();if(R!==""){let P=Ar(R);P!==null&&s(P)}}if(q)try{await L.cancel()}catch{}}finally{f!==null&&N.clear(f),a!==void 0&&a.removeEventListener("abort",w)}}async function ea(e){let{draft:r,mode:t,locale:n,signal:a,sessionId:s=""}=e,o=typeof e.fetch=="function"?e.fetch:globalThis.fetch,i;try{i=await o(Fr,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:ut(r),mode:t,locale:n,stream:!1,...s===""?{}:{sessionId:s}}}),signal:a})}catch(l){throw Ae(l)?l:te("network",void 0,l)}if(i===null||typeof i!="object")throw te("host");if(i.ok!==!0&&i.status>=400)throw te("host",void 0,i.status);return dt(await pt(i),i.status)}function ta(e={}){let r=typeof e.fetch=="function"?e.fetch:void 0,t=typeof e.now=="function"?e.now:()=>Date.now(),n=jr(e.timers),a=Number.isFinite(e.idleMs)?Number(e.idleMs):Or,s=Number.isFinite(e.undoMs)?Number(e.undoMs):Yn,o=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):Vn,i=new WeakMap,l=new WeakMap,x=new WeakMap,N=new WeakMap,p=new WeakMap,w="",v=new Set,f=new Map,z=Lr(),q=De(null),m=null,k=0,L=0,T=null,I=null,R=()=>{for(let c of[...v])try{c()}catch(b){console.error("[prompt-boost] a store listener failed:",b)}},P=c=>c!=null&&(typeof c=="object"||typeof c=="function");function _(c){let b=P(c)?c:I;if(!P(b))return z;let E=i.get(b);return E===void 0&&(E=Lr(),i.set(b,E)),E}function F(c,b){let E=P(c)?c:I,Q={..._(E),...b};return P(E)?i.set(E,Q):z=Q,R(),Q}function O(c){let b=P(c)?c:I;return P(b)?x.get(b)??De(null):q}function se(c){return P(c)?c:I}function ie(c){let b=P(c)?c:I;if(!P(b))return"default";let E=l.get(b);return E===void 0&&(k+=1,E=`s${k}`,l.set(b,E)),E}function V(c){return`prompt-boost-panel-${ie(c)}`}function Se(c,b,E){return`${ie(c)}\0${b}\0${E}`}function be(c){let b=f.get(c);return b===void 0?null:t()-b.at>o?(f.delete(c),null):(f.delete(c),f.set(c,b),b.result)}function ye(c,b){for(f.delete(c),f.set(c,{at:t(),result:b});f.size>Jn;){let E=f.keys().next();if(E.done===!0)break;f.delete(E.value)}}function Ne(){if(T===null)return;let c=T;T=null;try{c.controller.abort()}catch{}}function re(c){let b=P(c)?c:I,E=P(b)?N.get(b):m;E!=null&&n.clear(E),P(b)?N.delete(b):m=null}function ce(c){re(c);let b=null;b=n.set(()=>{let j=_(c);j.undo!==null&&F(c,{undo:null,phase:j.phase==="applied"?"idle":j.phase,applied:"",prompt:j.phase==="applied"?"":j.prompt,sources:j.phase==="applied"?[]:j.sources})},s);let E=P(c)?c:I;P(E)?N.set(E,b):m=b}function ne(c,b,E){let j=se(c),Q=De(O(c)),K=!1;if(P(j)&&typeof j.setDraft=="function")try{j.setDraft({text:b.prompt,references:[]}),K=!0}catch{try{j.setDraft(b.prompt),K=!0}catch{K=!1}}if(!K){F(c,{phase:"error",mode:b.mode,prompt:b.prompt,sources:b.sources,elapsedMs:b.elapsedMs,cached:b.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}F(c,{phase:"applied",mode:b.mode,prompt:b.prompt,applied:b.prompt,sources:b.sources,elapsedMs:b.elapsedMs,cached:b.cached===!0,error:null,undo:{draft:Q,at:t()},expanded:!1}),ce(c),ye(E,b),X.play("boostDone")}async function le(c,b,E){let{draft:j,mode:Q,locale:K,key:pe,sessionId:he}=E,Ce=!1,we=!1,Te=()=>T===b&&b.controller.signal.aborted===!1,Hr=U=>{if(!Te())return"stop";if(Ce=!0,U.type==="sources"){let Y=_(c);F(c,{sources:lt(U.sources),mode:U.mode==="compose"?"compose":Y.mode});return}if(U.type==="delta"){if(typeof U.text!="string"||U.text==="")return;let Y=_(c);F(c,{phase:"streaming",prompt:Y.prompt+U.text});return}if(U.type==="replace"){if(typeof U.text!="string")return;let Y=_(c),Qr=Y.phase==="ready"||U.text===""?Y.phase:"streaming";F(c,{prompt:U.text,phase:Qr});return}if(U.type==="done"){we=!0;let Y={prompt:typeof U.result?.prompt=="string"?U.result.prompt.trim():_(c).prompt.trim(),mode:U.result?.mode==="compose"?"compose":Q,sources:lt(U.result?.sources??_(c).sources),elapsedMs:Number.isFinite(U.result?.elapsedMs)?Math.max(0,Number(U.result.elapsedMs)):null,cached:U.result?.cached===!0};return Y.prompt===""?(F(c,{phase:"error",error:{code:"empty"}}),X.play("boostFail"),"stop"):(ne(c,Y,pe),"stop")}if(U.type==="error"){we=!0;let Y=typeof U.message=="string"&&U.message.trim()!==""?U.message.trim():void 0;return F(c,{phase:"error",error:Y===void 0?{code:"unknown"}:{code:"host",message:Y}}),"stop"}};try{if(await Zn({draft:j,mode:Q,locale:K,sessionId:he,signal:b.controller.signal,onEvent:Hr,fetch:r,timers:n,idleMs:a}),we)return;if(Ce)throw te("stream");await me(c,b,{draft:j,mode:Q,locale:K,key:pe,sessionId:he})}catch(U){if(b.controller.signal.aborted||Ae(U)||!Te())return;if(Ce){F(c,{phase:"error",error:Dr(U)}),X.play("boostFail");return}try{await me(c,b,{draft:j,mode:Q,locale:K,key:pe,sessionId:he})}catch(Y){if(b.controller.signal.aborted||Ae(Y)||!Te())return;F(c,{phase:"error",error:Dr(Y)}),X.play("boostFail")}}finally{T===b&&(T=null)}}async function me(c,b,E){let j=await ea({draft:E.draft,mode:E.mode,locale:E.locale,signal:b.controller.signal,fetch:r,sessionId:E.sessionId??""});T!==b||b.controller.signal.aborted||ne(c,j,E.key)}function fe(c,b){let E=typeof b=="string"?b:"";E!==""&&(w=E,P(c)&&p.set(c,E))}function ze(c){return P(c)?p.get(c)??w:w}function Re(c,b){let E=typeof b?.draft=="string"?b.draft:"",j=Array.isArray(b?.occurrences)?b.occurrences:[],Q=O(c);if(Q.text===E&&Q.references.length===j.length)return;let K={text:E,references:j.map(he=>({...he}))},pe=P(c)?c:I;P(pe)?x.set(pe,K):q=K}function h(c,b={}){P(c)&&(I=c);let E=b.locale==="en"?"en":"zh",j=b.force===!0,Q=O(c),K=ut(Q.text),pe=K.trim()===""?"compose":"improve",he=Se(c,pe,K);if(Ne(),re(c),!j){let Te=be(he);if(Te!==null){ne(c,{...Te,cached:!0},he);return}}L+=1;let Ce={seq:L,actions:c,controller:new AbortController};T=Ce;let we=_(c);F(c,{phase:"running",mode:pe,seed:K,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:we.phase==="idle"&&we.undo===null?!1:we.expanded}),X.play("boostStart"),le(c,Ce,{draft:K,mode:pe,locale:E,key:he,sessionId:ze(c)})}function M(c,b={}){h(c,{locale:b.locale,force:!0})}function A(c){let b=_(c);if(b.phase!=="ready")return!1;let E=b.prompt.trim();if(E==="")return!1;let j=se(c);if(!P(j)||typeof j.setDraft!="function")return F(c,{phase:"error",error:{code:"apply"}}),!1;let Q=De(O(c)),K=!1;try{j.setDraft({text:E,references:[]}),K=!0}catch{try{j.setDraft(E),K=!0}catch{K=!1}}return K?(re(c),F(c,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:Q,at:t()},expanded:!1}),ce(c),!0):(F(c,{phase:"error",error:{code:"apply"}}),!1)}function W(c){let b=_(c);if(b.undo===null)return!1;let E=se(c),j=De(b.undo.draft),Q=!1;if(P(E)&&typeof E.setDraft=="function")try{E.setDraft({text:j.text,references:j.references}),Q=!0}catch{try{E.setDraft(j.text),Q=!0}catch{Q=!1}}return re(c),F(c,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),Q}function G(c){_(c).expanded!==!1&&F(c,{expanded:!1})}function d(c){let b=_(c);b.phase==="idle"&&b.undo===null||b.expanded===!0||F(c,{expanded:!0})}function D(c){_(c).expanded===!0?G(c):d(c)}function $(c){let b=P(c)?c:I;T!==null&&T.actions===b&&Ne(),re(c),F(c,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function ae(c,b){let E=_(c);E.phase==="streaming"&&(typeof b!="string"||b===E.prompt||F(c,{prompt:b}))}return{subscribe(c){return typeof c!="function"?()=>{}:(v.add(c),()=>{v.delete(c)})},getState:_,panelId:V,sessionKey:ie,setDraftMirror:Re,setSessionId:fe,start:h,retry:M,apply:A,undo:W,expand:d,collapse:G,toggle:D,dismiss:$,edit:ae}}var Ue=ta();var _r=`
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
`;var ra="@local/chatbox-pet",Ur=["slots","locale"];function Br(){return(0,$r.useSyncExternalStore)(oe.subscribe,oe.getSnapshot,oe.getSnapshot)}function Wr(e){let r=e.locale.bind(ge),t=e.locale.bind(Le);e.effect(()=>e.locale.register(ge,{zh:yt,en:wt}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(Le,{zh:pr,en:dr}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let o=document.querySelector('style[data-plugin="chatbox-pet"]');o!==null&&o.remove();let i=document.createElement("style");return i.setAttribute("data-plugin","chatbox-pet"),i.textContent=`${Vt}
${_r}
${Xt}
${Pr}
${Sr}
${Mr}`,document.head.appendChild(i),()=>{i.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{oe.refresh().then(o=>{gt(o?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let o=()=>X.unlock();return window.addEventListener("pointerdown",o,{capture:!0}),window.addEventListener("keydown",o,{capture:!0}),()=>{window.removeEventListener("pointerdown",o,{capture:!0}),window.removeEventListener("keydown",o,{capture:!0})}},"chatbox-pet: sound unlock");let n=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:ra,order:1,label:()=>r("label"),locale:ge,inject:o=>({sessionId:o})},o=>{if(Br().pet===!1)return null;let l=typeof o?.sessionId=="string"&&o.sessionId!==""?o.sessionId:typeof o?.session?.id=="string"?o.session.id:"";return l===""?null:ue.createElement(Gt,{sessionId:l,t:r,useInput:o?.useInput,locale:n})}));let a=o=>i=>Br().boost===!1?null:o(i);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>t("button.label"),locale:Le},a(o=>ue.createElement(ar,{...o,store:Ue,t,locale:n})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>r("merge.label")(2),locale:ge,inject:o=>({sessionId:o})},o=>{let i=typeof o?.sessionId=="string"?o.sessionId:"";return i===""?null:ue.createElement(lr,{sessionId:i,sessions:e.get("sessions"),t:r,locale:n,onNotice:l=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:i,text:l,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:Le},a(o=>ue.createElement(br,{...o,store:Ue,t,locale:n})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>r("quick.label"),locale:ge,inject:o=>({sessionId:o})},o=>ue.createElement(Ir,{inputActions:o?.inputActions,sessionId:typeof o?.sessionId=="string"?o.sessionId:"",t:r,locale:n})));function s({sessionId:o,session:i}){let l=typeof o=="string"&&o!==""?o:typeof i?.id=="string"?i.id:"";return ue.useEffect(()=>{l!==""&&Ue.setSessionId(null,l)},[l]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>r("label"),locale:ge,inject:o=>({sessionId:o})},o=>ue.createElement(s,{sessionId:o?.sessionId,session:o?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:ge},()=>ue.createElement(Zt,{t:r})))}
		return module.exports;
	}
});
