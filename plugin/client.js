window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var pn=Object.create;var Ke=Object.defineProperty;var dn=Object.getOwnPropertyDescriptor;var un=Object.getOwnPropertyNames;var bn=Object.getPrototypeOf,fn=Object.prototype.hasOwnProperty;var hn=(e,r,t)=>()=>{if(t)throw t[0];try{return e&&(r=e(e=0)),r}catch(a){throw t=[a],a}};var zt=(e,r)=>{for(var t in r)Ke(e,t,{get:r[t],enumerable:!0})},Rt=(e,r,t,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of un(r))!fn.call(e,n)&&n!==t&&Ke(e,n,{get:()=>r[n],enumerable:!(a=dn(r,n))||a.enumerable});return e};var xe=(e,r,t)=>(t=e!=null?pn(bn(e)):{},Rt(r||!e||!e.__esModule?Ke(t,"default",{value:e,enumerable:!0}):t,e)),mn=e=>Rt(Ke({},"__esModule",{value:!0}),e);var Dr={};zt(Dr,{transcribe:()=>ca});async function ca(e){let r=await fetch("/api/chatbox-pet/transcribe?name=voice.webm",{method:"POST",headers:{"content-type":e.type||"audio/webm"},body:e}),t;try{t=await r.json()}catch{throw new Error(`\u8F6C\u5199\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(t?.ok!==!0)throw new Error(t?.error?.message??"\u8F6C\u5199\u5931\u8D25");let a=t.result?.text??"";if(a.trim()==="")throw new Error("\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF0C\u8BF7\u518D\u8BF4\u4E00\u6B21");return a}var Ar=hn(()=>{});var Sa={};zt(Sa,{apply:()=>rn,inject:()=>tn});module.exports=mn(Sa);var ye=xe(require("react"),1);var tt="chatboxPet.sound",Ct=!0,gn=.3,xn=1e3,yn=7,et={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},za=Object.freeze(Object.keys(et)),wn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function Tt(e,r){return e==="error"?r==="cancelled"?"cancelled":"error":wn[e]}function Be(e){try{return e?.getItem(tt)==="off"?"off":"on"}catch{return"on"}}function Mt(e){Ct=e!==!1}function rt(e,r){try{e?.setItem(tt,r==="off"?"off":"on")}catch{}}function Et(e){let r=Be(e)==="on"?"off":"on";return rt(e,r),r}function Ee(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function vn(e){let r=2166136261,t=String(e??"");for(let a=0;a<t.length;a+=1)r^=t.charCodeAt(a),r=Math.imul(r,16777619);return r>>>0}function kn(e){let r=e.now??(()=>Date.now()),t=null,a=null,n=!1,l=new Map,i=new Map,o=0;function p(){if(!n)try{let u=e.createContext();if(u==null)return;let g=u.createGain();if(g.gain.value=gn,g.connect(u.destination),u.state==="suspended"&&typeof u.resume=="function"){let v=u.resume();v!==void 0&&typeof v.catch=="function"&&v.catch(()=>{})}t=u,a=g,n=!0}catch{t=null,a=null,n=!1}}function m(u,g,v){if(g<=1)return 0;if(typeof v=="string"&&v!=="")return vn(v)%g;let x=(i.get(u)??0)%g;return i.set(u,x+1),x}function k(u,g){if(e.getPref()!=="on"||!n||t===null||a===null||!e.isVisible())return!1;let v=et[u];if(v===void 0)return!1;let x=r(),C=l.get(u);if(C!==void 0&&x-C<xn)return!1;l.set(u,x);let P=Array.isArray(v.variants)?v.variants:[];if(P.length===0)return!1;let b=P[m(u,P.length,g)];o=(o+1)%7;let T=(o-3)*(yn/3);try{return Sn(t,a,b,T),!0}catch{return!1}}return{play:k,unlock:p,isUnlocked:()=>n,recipeNames:()=>Object.keys(et)}}function Sn(e,r,t,a){let n=e.currentTime;for(let l of t.notes){let i=n+l.at,o=e.createOscillator(),p=e.createGain();o.type=l.type,o.frequency.setValueAtTime(l.freq,i),typeof l.slideTo=="number"&&o.frequency.exponentialRampToValueAtTime(l.slideTo,i+l.dur),a!==0&&typeof o.detune=="object"&&o.detune!==null&&o.detune.setValueAtTime(a,i),p.gain.setValueAtTime(1e-4,i),p.gain.exponentialRampToValueAtTime(l.level,i+.008),p.gain.exponentialRampToValueAtTime(1e-4,i+l.dur),o.connect(p),p.connect(r),o.start(i),o.stop(i+l.dur+.02)}}function Nn(){return{getPref:()=>{let e=Ee()?.getItem(tt);return e==="on"||e==="off"?e:Ct?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var oe=kn(Nn());var en=require("react");var Ne="chatboxPet",Ft={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","sheet.close":"\u5173\u95ED","sheet.resize":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,r,t)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${r} \xB7 \u65F6\u957F ${Math.round(t)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.translate.title":"\u7FFB\u8BD1","sheet.translate.hint":"\u6587\u5B57\u3001\u8BED\u97F3\u6216\u6587\u4EF6\u90FD\u80FD\u7FFB\uFF1B\u8BD1\u6587\u53EF\u4EE5\u6536\u85CF\u8FDB\u751F\u8BCD\u672C\uFF0C\u6216\u76F4\u63A5\u586B\u8FDB\u8F93\u5165\u6846\u3002","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},Pt={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","sheet.close":"Close","sheet.resize":"Drag to resize","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,r,t)=>`${e} segments \xB7 ${r} \xB7 ${Math.round(t)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.translate.title":"Translate","sheet.translate.hint":"Text, voice or a document \u2014 and every translation can go into the saved list or the composer.","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var M=xe(require("react"),1);var zn=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],Rn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},Lt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],nt={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},Ta=[...Lt.map(e=>e.id),"fallback"];function at(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function It(e){let r=qt(e);if(r==="")return null;for(let t of zn){let a=/^[a-z ]+$/.test(t),l=(a?new RegExp(`(^|[^a-z])${at(t).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(at(t))).exec(r);if(l===null)continue;let i=l.index+(a?l[1].length:0),o=i+(a?t.replace(/ /g," ").length:t.length),p=`${r.slice(0,i)} ${r.slice(o)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:t,rest:p}}return null}function Cn(e){let r=2166136261,t=String(e??"");for(let a=0;a<t.length;a+=1)r^=t.charCodeAt(a),r=Math.imul(r,16777619);return r>>>0}function Tn(e){let r=qt(e);if(r==="")return"fallback";for(let t of Lt){for(let a of t.zh)if(r.includes(a))return t.id;for(let a of t.en)if(new RegExp(`(^|[^a-z])${at(a).replace(/ /g,"\\s+")}([^a-z]|$)`).test(r))return t.id}return"fallback"}function Dt(e,r){let t=Array.isArray(e)?e.filter(a=>typeof a=="string"&&a!==""):[];return t.length===0?"":t[Cn(r)%t.length]}function Mn(e,r={}){let t=nt[e]??nt.fallback,a=r.locale==="en"?"en":"zh",n=typeof r.seed=="string"&&r.seed!==""?r.seed:String(e);return{intent:nt[e]===void 0?"fallback":e,clip:t.clip,sound:t.sound,line:Dt(t[a],n)}}function At(e,r="zh"){let t=String(e??"");return/[\u4e00-\u9fff]/.test(t)?"zh":/[a-z]/i.test(t)||r==="en"?"en":"zh"}function Bt(e={}){let r=e.locale==="en"?"en":"zh";return Dt(Rn[r],e.seed??"wake")}function Ot(e={}){let r=typeof e.now=="function"?e.now:()=>Date.now(),t=Number.isFinite(e.debounceMs)?e.debounceMs:700,a=Number.isFinite(e.holdMs)?e.holdMs:15e3,n=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,l=!1,i="",o="",p=0,m=0;function k(v){let x=It(v);return x===null?l?(l=!1,i="",o="",{kind:"off"}):null:(p=r(),l?null:(l=!0,i=x.wake,o=x.rest,p=r(),m=0,{kind:"wake",wake:x.wake,digest:x.rest}))}function u(v,x={}){if(!l)return null;let C=It(v);if(C===null)return l=!1,{kind:"off"};let P=`${C.wake}\0${C.rest}`;if(P===o)return null;let b=r(),T=b-m;if(T<n)return{kind:"cooldown",retryInMs:n-T};o=P,m=b,p=b;let I=Tn(C.rest);return{kind:"reply",...Mn(I,{...x,seed:P}),digest:P}}function g(){return!l||r()-p<a?null:(l=!1,i="",o="",{kind:"off"})}return{observe:k,settle:u,expire:g,isActive:()=>l,debounceMs:t,holdMs:a,wakeWord:()=>i}}var U=xe(require("react"),1),Vt=require("react-dom");var jt=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Ge=60;function $t(e,r){let t=r==="en"?"en":"zh";return typeof e?.[t]=="string"?e[t]:""}function Oe(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=Ge?r:t.slice(0,Ge).join("")}function _t(e,r,t,a=8){let l=Number.isFinite(r?.width)?r.width:0,i=Number.isFinite(r?.height)?r.height:0,o=Number.isFinite(t?.width)?t.width:0,p=Number.isFinite(t?.height)?t.height:0,m=(Number.isFinite(e?.right)?e.right:0)-l;m<8&&(m=Number.isFinite(e?.left)?e.left:8);let k=(Number.isFinite(e?.top)?e.top:0)-i-a;k<8&&(k=(Number.isFinite(e?.bottom)?e.bottom:0)+a);let u=Math.max(8,o-l-8),g=Math.max(8,p-i-8);return{left:Math.min(Math.max(m,8),u),top:Math.min(Math.max(k,8),g)}}var ot=["topic","reminder","recall","nudge","encourage","tease","chitchat"],Ut={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Wt=9e3,En=24e4,it=.05;function Ht(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<En)return!1;let t=Number.isFinite(e.chance)?e.chance:it;return(typeof e.random=="function"?e.random:Math.random)()<t}function Kt(e,r){let t=r==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[t]??""}function Gt(e){return Ut[e]??Ut.chitchat}async function Jt(e={}){let r=typeof e.fetch=="function"?e.fetch:(...t)=>globalThis.fetch(...t);try{let t=await r("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!t.ok)return null;let a=await t.json();if(a?.ok!==!0)return null;let n=a.result;return typeof n?.text!="string"||n.text.trim()===""?null:{kind:ot.includes(n.kind)?n.kind:"chitchat",text:n.text.trim(),quote:typeof n?.quote=="string"?n.quote:"",item:typeof n?.item=="string"?n.item:"",source:typeof n?.source?.label=="string"?n.source:null,sources:Array.isArray(n?.sources)?n.sources:[]}}catch{return null}}var Qt=268;function Yt({anchor:e,locale:r,onSay:t,onAction:a,onQuip:n,recent:l,onForget:i,onClose:o,t:p}){let m=U.useRef(null),k=U.useRef(null),[u,g]=U.useState(""),[v,x]=U.useState(()=>({left:0,top:0,ready:!1}));U.useLayoutEffect(()=>{let b=m.current;if(b===null)return;let T=b.getBoundingClientRect().height,I=_t(e,{width:Qt,height:T},{width:window.innerWidth,height:window.innerHeight});x({...I,ready:!0})},[e]),U.useEffect(()=>{let b=k.current;b!==null&&typeof b.focus=="function"&&b.focus()},[]),U.useEffect(()=>{let b=I=>{let L=m.current;L!==null&&I.target instanceof Node&&L.contains(I.target)||o()},T=I=>{I.key==="Escape"&&(I.preventDefault(),I.stopPropagation(),o())};return document.addEventListener("pointerdown",b,!0),document.addEventListener("keydown",T,!0),()=>{document.removeEventListener("pointerdown",b,!0),document.removeEventListener("keydown",T,!0)}},[o]);let C=()=>{let b=Oe(u);b!==""&&(t(b),o())},P={left:`${Math.round(v.left)}px`,top:`${Math.round(v.top)}px`,width:`${Qt}px`,visibility:v.ready?"visible":"hidden"};return(0,Vt.createPortal)(U.createElement("div",{ref:m,className:"cbp-menu",style:P,role:"menu","aria-label":p("menu.title"),"data-cbp-menu":"true",onContextMenu:b=>b.preventDefault()},U.createElement("div",{className:"cbp-menu-say"},U.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},p("menu.say")),U.createElement("div",{className:"cbp-menu-row"},U.createElement("input",{id:"cbp-menu-say-input",ref:k,className:"cbp-menu-input",type:"text",value:u,maxLength:Ge,placeholder:p("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:b=>g(b.target.value),onKeyDown:b=>{b.key==="Enter"&&(b.preventDefault(),b.stopPropagation(),C())}}),U.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:Oe(u)==="",onClick:C},p("menu.saySubmit")))),l.length===0?null:U.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},U.createElement("span",{className:"cbp-menu-label"},p("menu.recent"),U.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:i},p("menu.clear"))),U.createElement("div",{className:"cbp-menu-recent-list"},l.slice(0,8).map(b=>U.createElement("button",{key:`${b.text}-${b.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":b.text,title:b.text,onClick:()=>{t(b.text),o()}},b.text)))),U.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},U.createElement("span",{className:"cbp-menu-label"},p("menu.quip")),U.createElement("div",{className:"cbp-menu-grid"},ot.map(b=>U.createElement("button",{key:b,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":b,onClick:()=>{n(b),o()}},Kt(b,r))))),U.createElement("div",{className:"cbp-menu-actions"},U.createElement("span",{className:"cbp-menu-label"},p("menu.action")),U.createElement("div",{className:"cbp-menu-grid"},jt.map(b=>U.createElement("button",{key:b.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":b.clip,title:b.clip,onClick:()=>{a(b.clip),o()}},$t(b,r))))),U.createElement("p",{className:"cbp-menu-hint"},p("menu.hint"))),document.body)}var st="/api/chatbox-pet/said",Xt="chatboxPet.said";function lt(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=60?r:t.slice(0,60).join("")}function Fn(e,r,t=Date.now()){let a=lt(r),n=Array.isArray(e)?e.filter(i=>typeof i?.text=="string"):[];if(a==="")return n.slice(0,24);let l=n.filter(i=>i.text!==a);return[{text:a,at:t},...l].slice(0,24)}function ct(e){let r=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],t=[],a=new Set;for(let n of r){let l=lt(typeof n=="string"?n:n?.text);if(!(l===""||a.has(l))&&(a.add(l),t.push({text:l,at:Number.isFinite(n?.at)?n.at:0}),t.length>=24))break}return t}function Pn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function In(e={}){let r=typeof e.fetch=="function"?e.fetch:(...u)=>globalThis.fetch(...u),t=e.storage===void 0?Pn():e.storage,a=()=>{try{let u=t?.getItem(Xt);return u==null?[]:ct(JSON.parse(u))}catch{return[]}},n=u=>{try{t?.setItem(Xt,JSON.stringify(u))}catch{}},l=Object.freeze({lines:Object.freeze(a()),loaded:!1}),i=new Set;function o(u){l=Object.freeze({...l,...u});for(let g of i)try{g()}catch{}}async function p(){try{let g=await(await r(st,{method:"GET",headers:{accept:"application/json"}})).json();if(g?.ok===!0){let v=ct(g.result);return o({lines:v,loaded:!0}),n(v),v}}catch{}return o({loaded:!0}),l.lines}async function m(u){let g=lt(u);if(g==="")return l.lines;let v=Fn(l.lines,g);o({lines:Object.freeze(v)}),n(v);try{let C=await(await r(st,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:g})})).json();if(C?.ok===!0){let P=ct(C.result);return o({lines:P,loaded:!0}),n(P),P}}catch{}return l.lines}async function k(){o({lines:Object.freeze([])}),n([]);try{await r(st,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(u){return typeof u!="function"?()=>{}:(i.add(u),()=>i.delete(u))},getSnapshot(){return l},refresh:p,remember:m,clear:k}}var Fe=In();var pt=null;function Zt(e,r){let t=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(t)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(t)?!1:/Mac/i.test(typeof r=="string"?r:t)}function er(e){if(e!==void 0)return Zt(e.userAgent,e.platform)?".mov":".webm";if(pt===null){let r=typeof navigator>"u"?void 0:navigator;pt=Zt(r?.userAgent,r?.platform)?".mov":".webm"}return pt}var tr={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},Ln={failed:"click-angry",cancelled:"act-shy"};function rr(e){let r=e?.previous?.status??"idle",t=e?.next?.status??"idle",a=e?.previous?.detail??null,n=e?.next?.detail??null,l=t!==r||n!==a,o=r==="working"&&t==="thinking"?"result":t;if(!l)return{changed:!1,status:o,detail:n,clip:null,sound:null};if(t==="idle")return{changed:!0,status:"idle",detail:n,clip:null,sound:null};let p=o==="error"?Ln[n]??tr.error:tr[o]??e?.idleClip??null;return{changed:!0,status:o,detail:n,clip:p,sound:Tt(o,n)}}var qn=6e3,Dn=5e3,An={thinking:0,working:1,result:2,waiting:3,success:4,error:5},ze="idle-breathe-loop",nr="click-wave",ar=["act-harley","act-beach"],or=6e3,Bn=9e4,On=.12;function ir({sessionId:e,t:r,useInput:t,locale:a}){let n=M.useRef(null),l=M.useRef(null),i=M.useRef("idle"),o=M.useRef(null),p=M.useRef(Date.now()),m=M.useRef(null),k=M.useRef(0),u=M.useRef(0),[g,v]=M.useState(null),[x,C]=M.useState(null),b=M.useSyncExternalStore(Fe.subscribe,Fe.getSnapshot,Fe.getSnapshot).lines,T=M.useRef(0),[I,L]=M.useState(null),[N,R]=M.useState("idle"),[q,_]=M.useState(!0),$=M.useRef(!1),B=M.useCallback((y,E)=>{let O=n.current;if(O===null||O.dataset.clip===y&&O.loop===E&&!O.ended)return;O.dataset.clip=y,O.loop=E,O.src=`/api/chatbox-pet/asset/${y}${er()}`;let D=O.play();D!==void 0&&typeof D.catch=="function"&&D.catch(()=>{})},[]),Re=M.useCallback(()=>{let y=n.current;if(y!==null){if(!$.current&&y.dataset.clip!==ze){$.current=!0,B(ze,!0);return}_(!1)}},[B]),le=M.useCallback(()=>{window.clearTimeout(T.current),L(null)},[]),Z=M.useCallback((y,E,O,D=Dn,J=null)=>{window.clearTimeout(T.current),L({text:y,kind:O,source:J}),E||(T.current=window.setTimeout(()=>L(null),D))},[]),we=M.useCallback(y=>{let E=l.current?.workStatusTexts,O=An[y],D=O===void 0||!Array.isArray(E)?void 0:E[O];if(!(!Array.isArray(D)||D.length===0))return D[Math.floor(Math.random()*D.length)]},[]),he=M.useCallback(y=>{let E=typeof y?.status=="string"?y.status:"idle",O=i.current,D=typeof y?.detail=="string"?y.detail:null,J=rr({previous:{status:O,detail:o.current},next:{status:E,detail:D},idleClip:ze});if(!J.changed){E==="waiting"&&typeof y?.bubble=="string"&&y.bubble!==""&&Z(y.bubble,!0,"waiting");return}if(i.current=E,o.current=D,R(E),m.current!==null&&m.current.isActive()){p.current=Date.now();return}if(E==="idle"){B(ze,!0),le(),p.current=Date.now();return}p.current=Date.now();let X=J.status,Me=J.detail;B(J.clip??ze,!1);let me=typeof y?.bubble=="string"&&y.bubble!==""?y.bubble:we(X),Ae=y?.source==="broadcast"?"notify":J.sound;oe.play(Ae,me),me!==void 0?Z(me,E==="waiting",X):le()},[le,we,B,Z]),be=M.useCallback(async y=>{let E=await Jt({kind:y,locale:typeof a=="function"?a():"zh"});if(E===null)return;let O=Gt(E.kind);B(O.clip,!1),oe.play(O.sound,E.text),Z(E.text,!1,"quip",Wt,E.source?.label??null)},[a,B,Z]),Ce=M.useCallback(()=>{if(i.current!=="idle"||m.current!==null&&m.current.isActive())return;let E=Date.now()-p.current;if(E<Bn)return;if(Ht({idleForMs:E,chance:it})){p.current=Date.now(),be(null);return}if(Math.random()>On)return;let O=ar[Math.floor(Math.random()*ar.length)];B(O,!1),p.current=Date.now()},[B,be]),Y=M.useCallback((y,E,O)=>{typeof y.clip=="string"&&y.clip!==""&&B(y.clip,!1),typeof y.sound=="string"&&y.sound!==""&&oe.play(y.sound,y.line),typeof y.line=="string"&&y.line!==""&&Z(y.line,E,"chat",O)},[B,Z]),fe=M.useCallback(()=>{window.clearTimeout(u.current),v(null),B(ze,!0),le()},[le,B]),W=typeof t=="function"?t(y=>typeof y?.draft=="string"?y.draft:""):"";M.useEffect(()=>{m.current===null&&(m.current=Ot());let y=m.current,E=At(W,typeof a=="function"?a():"zh"),O=y.observe(W);if(O!==null&&O.kind==="wake"&&(v({phase:"awake"}),Y({clip:"click-surprise",sound:"wake",line:Bt({locale:E,seed:W})},!0)),O!==null&&O.kind==="off"){fe();return}if(window.clearTimeout(k.current),!y.isActive())return;let D=J=>{k.current=window.setTimeout(()=>{let X=y.settle(W,{locale:E});if(X!==null&&X.kind==="cooldown"){D(Math.max(120,X.retryInMs));return}X===null||X.kind!=="reply"||(Y(X,!1,or),window.clearTimeout(u.current),u.current=window.setTimeout(()=>fe(),y.holdMs))},J)};return D(y.debounceMs),()=>window.clearTimeout(k.current)},[W,a,Y,fe]),M.useEffect(()=>{Fe.refresh()},[]),M.useEffect(()=>{let y=!1;return fetch("/api/chatbox-pet/config").then(E=>E.ok?E.json():null).then(E=>{!y&&E?.ok===!0&&(l.current=E.result)}).catch(()=>{}),()=>{y=!0}},[]),M.useEffect(()=>{if(typeof e!="string"||e==="")return;let y=!1,E=0,O=async()=>{if(document.visibilityState==="visible"){try{let X=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),Me=X.ok?await X.json():null;!y&&Me?.ok===!0&&he(Me.result)}catch{}y||Ce()}},D=()=>{E=window.setTimeout(async()=>{await O(),y||D()},qn)},J=()=>{document.visibilityState==="visible"&&O()};return document.addEventListener("visibilitychange",J),O(),D(),()=>{y=!0,window.clearTimeout(E),document.removeEventListener("visibilitychange",J)}},[e,he]),M.useEffect(()=>(B(ze,!0),()=>window.clearTimeout(T.current)),[B]);let[ve,Pe]=M.useState(()=>Be(Ee())==="on"),ke=M.useCallback(y=>{let E=Oe(y);E!==""&&(B(nr,!1),oe.play("click",E),Z(E,!1,"chat",or),Fe.remember(E))},[B,Z]),Ie=M.useCallback(y=>{typeof y!="string"||y===""||(B(y,!1),oe.play("click",y))},[B]),Te=M.useCallback(()=>{let y=document.querySelector("[data-cbp-pet]"),E=y instanceof Element?y.getBoundingClientRect():null;E!==null&&C({left:E.left,right:E.right,top:E.top,bottom:E.bottom})},[]);return M.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},M.createElement("div",{className:"cbp-stage"},M.createElement("div",{className:(I===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(I?.kind==="error"?" cbp-bubble--error":"")+(I?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":r("aria.bubble")},I?.source?M.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":I.source},I.source):null,M.createElement("span",{className:"cbp-bubble-text"},I?.text??"")),M.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":r(ve?"sound.on":"sound.off"),"aria-pressed":ve,onClick:y=>{y.stopPropagation();let E=Et(Ee())==="on";Pe(E),prefsStore.update({sound:E})}},ve?M.createElement(jn,null):M.createElement($n,null)),M.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":g===null?N:"awake","data-cbp-chat":g===null?"false":"true","aria-label":r("aria.pet"),onClick:()=>{oe.play("click"),B(nr,!1)},onContextMenu:y=>{y.preventDefault(),y.stopPropagation(),Te()},onKeyDown:y=>{(y.key==="ContextMenu"||y.shiftKey&&y.key==="F10")&&(y.preventDefault(),Te())},"aria-haspopup":"menu","aria-expanded":x===null?"false":"true"},q?M.createElement("video",{ref:n,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:y=>{y.currentTarget.loop||B(ze,!0)},onError:Re}):M.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),x===null?null:M.createElement(Yt,{anchor:x,locale:typeof a=="function"?a():"zh",onSay:ke,onAction:Ie,onQuip:y=>{be(y)},recent:b,onForget:()=>{Fe.clear()},onClose:()=>C(null),t:r}))}function jn(){return M.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},M.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),M.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),M.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function $n(){return M.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},M.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),M.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var sr=`
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
`;var cr="/api/chatbox-pet/prefs",_n=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function Un(e={}){let r=typeof e.fetch=="function"?e.fetch:(...o)=>globalThis.fetch(...o),t=_n,a=new Set;function n(o){t={...t,...o};for(let p of a)try{p()}catch{}}async function l(){try{let p=await(await r(cr,{method:"GET",headers:{accept:"application/json"}})).json();p?.ok===!0&&p.result!==null&&typeof p.result=="object"?n({pet:p.result.pet!==!1,boost:p.result.boost!==!1,sound:p.result.sound!==!1,loaded:!0}):n({loaded:!0})}catch{}return t}async function i(o){let p=t,m={};for(let k of["pet","boost","sound"])typeof o?.[k]=="boolean"&&(m[k]=o[k]);n(m);try{let u=await(await r(cr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:m})})).json();if(u?.ok!==!0||u.result===null||typeof u.result!="object")throw new Error("rejected");return n({pet:u.result.pet!==!1,boost:u.result.boost!==!1,sound:u.result.sound!==!1,loaded:!0}),!0}catch{return n({pet:p.pet,boost:p.boost,sound:p.sound}),!1}}return{subscribe(o){return typeof o!="function"?()=>{}:(a.add(o),()=>a.delete(o))},getSnapshot(){return t},refresh:l,update:i}}var de=Un();var ne=xe(require("react"),1),lr=require("react");var pr=`
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
`;function dt({id:e,checked:r,label:t,onChange:a}){return ne.createElement("label",{className:"cbp-set-item",htmlFor:e},ne.createElement("span",{className:"cbp-switch"},ne.createElement("input",{id:e,type:"checkbox",role:"switch",checked:r,onChange:n=>a(n.target.checked),"data-cbp-pref":e}),ne.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),ne.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),t)}function dr({t:e}){let r=(0,lr.useSyncExternalStore)(de.subscribe,de.getSnapshot,de.getSnapshot),[t,a]=ne.useState(()=>Be(Ee())==="on"),n=l=>{a(l),rt(Ee(),l?"on":"off"),de.update({sound:l})};return ne.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},ne.createElement("div",{className:"cbp-set-head"},ne.createElement("span",{className:"cbp-set-title"},e("settings.title")),ne.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),ne.createElement("div",{className:"cbp-set-items"},ne.createElement(dt,{id:"chatbox-pet-feature-pet",checked:r.pet!==!1,label:e("settings.pet"),onChange:l=>{de.update({pet:l})}}),ne.createElement(dt,{id:"chatbox-pet-feature-boost",checked:r.boost!==!1,label:e("settings.boost"),onChange:l=>{de.update({boost:l})}}),ne.createElement(dt,{id:"chatbox-pet-feature-sound",checked:t,label:e("settings.sound"),onChange:n})))}var je=xe(require("react"),1),Qe=require("react"),bt=require("@deepseek-ai/dsh-client-ui-primitives");var V=require("react");function qe({size:e=16,children:r}){return(0,V.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},r)}function Je({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,V.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function ur({size:e=16}){return(0,V.createElement)(qe,{size:e},(0,V.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function br({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function ut({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,V.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function fr({size:e=16}){return(0,V.createElement)(qe,{size:e},(0,V.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function hr({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,V.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,V.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,V.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function Wn({label:e,children:r}){return typeof bt.Tooltip=="function"?je.createElement(bt.Tooltip,{label:e,side:"top",delayMs:400},r):(0,Qe.cloneElement)(r,{title:e})}function mr({inputActions:e,useInput:r,store:t,t:a,locale:n}){let l=(0,Qe.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),i=typeof r=="function"?r(g=>g):void 0;t.setDraftMirror(e,i);let o=typeof i?.draft=="string"?i.draft:"",p=l.phase==="running"||l.phase==="streaming",m=l.phase!=="idle",k=a(p?"button.running":"button.label"),u=p?a("button.running"):o.trim()===""?a("button.tooltipCompose"):a("button.tooltip");return je.createElement(Wn,{label:u},je.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":p?"true":"false","data-pb-open":m?"true":"false","aria-label":k,"aria-busy":p?"true":void 0,"aria-expanded":m?"true":"false","aria-controls":t.panelId(e),onMouseDown:g=>g.preventDefault(),onClick:()=>t.start(e,{locale:typeof n=="function"?n():"zh"})},je.createElement(Je,{size:16})))}var ie=xe(require("react"),1),Ve=require("react"),mt=require("@deepseek-ai/dsh-client-ui-primitives");var gr="next-turn";function ft(e){return(Array.isArray(e?.content)?e.content:[]).filter(t=>t!==null&&typeof t=="object"&&t.type==="text"&&typeof t.text=="string").map(t=>t.text).join("").trim()}function Hn(e){return(Array.isArray(e?.content)?e.content:[]).some(t=>t===null||typeof t!="object"||t.type!=="text")}function xr(e){let r=[];try{let a=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();r=Array.isArray(a?.[gr])?a[gr]:[]}catch{r=[]}return ht(r)}function ht(e){let t=(Array.isArray(e)?e:[]).filter(i=>i!==null&&typeof i=="object"&&typeof i.id=="string"),a=t.map(ft),n=t.filter((i,o)=>!Hn(i)&&a[o]!==""),l="";return t.length>=2&&n.length!==t.length?l="attachment":t.length>8?l="too-many":t.length<2&&(l="too-few"),{items:t,texts:a,mergeable:t.length,blocked:l}}async function Kn(e,r={}){let t=Gn(e),a=typeof r.fetchImpl=="function"?r.fetchImpl:(...n)=>globalThis.fetch(...n);try{let n=await a("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof r.sessionId=="string"?r.sessionId:void 0,locale:r.locale==="en"?"en":"zh"})});if(!n.ok)return{prompt:t,optimized:!1,reason:"http-"+String(n.status)};let l=await n.json(),i=typeof l?.result?.prompt=="string"?l.result.prompt.trim():"";return i===""?{prompt:t,optimized:!1,reason:"empty"}:{prompt:i,optimized:l.result.optimized===!0,reason:typeof l.result.reason=="string"?l.result.reason:""}}catch{return{prompt:t,optimized:!1,reason:"network"}}}function Gn(e){return(Array.isArray(e)?e:[]).map(r=>String(r??"").trim()).filter(r=>r!=="").join(`

`)}async function Jn(e,r,t){let a=Array.isArray(r)?r:[],n=String(t??"").trim();if(a.length<2||n==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[l,...i]=a;try{let m=await e.updateQueue(l.id,{kind:"edit",content:[{type:"text",text:n}]});if(m?.ok!==!0)return{ok:!1,merged:0,removed:0,error:m?.error?.code??"edit-failed"}}catch(m){return{ok:!1,merged:0,removed:0,error:yr(m)}}let o=0,p=0;for(let m of i)try{let k=await e.updateQueue(m.id,{kind:"remove"});if(k?.ok===!0){o+=1;continue}if(k?.error?.code==="session/queue-item-not-found"){p+=1;continue}return{ok:!1,merged:1,removed:o,claimed:p,error:k?.error?.code??"remove-failed"}}catch(k){return{ok:!1,merged:1,removed:o,claimed:p,error:yr(k)}}return{ok:p===0,merged:1,removed:o,claimed:p,error:p>0?"session/queue-item-not-found":""}}async function wr(e={}){let r=xr(e.session);if(r.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:r.blocked};let t=r.items.map(ft),a=await Kn(t,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),n=xr(e.session);if(!(n.items.length===r.items.length&&n.items.every((o,p)=>o.id===r.items[p].id&&ft(o)===t[p])))return{ok:!1,count:r.items.length,optimized:!1,reason:"",error:"queue-changed"};let i=await Jn(e.session,r.items,a.prompt);return{ok:i.ok,count:r.items.length,optimized:a.optimized,reason:a.reason,error:i.error}}function yr(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function Qn({label:e,children:r}){return typeof mt.Tooltip=="function"?ie.createElement(mt.Tooltip,{label:e,side:"top",delayMs:400},r):(0,Ve.cloneElement)(r,{title:e})}var Vn=Object.freeze({}),Yn=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>Vn});function Xn(e){let r=(()=>{try{let a=e?.projections?.faceOf?.("inbox");if(typeof a?.subscribe=="function"&&typeof a?.getSnapshot=="function")return a}catch{}return Yn})(),t=(0,Ve.useSyncExternalStore)(r.subscribe,r.getSnapshot,r.getSnapshot);return ht(t?.["next-turn"])}function vr({sessionId:e,sessions:r,t,locale:a,onNotice:n}){let l=ie.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return r?.binding?.(e)?.session??null}catch{return null}},[r,e]),i=Xn(l),[o,p]=ie.useState("idle"),[m,k]=ie.useState(""),u=ie.useRef(0);ie.useEffect(()=>()=>window.clearTimeout(u.current),[]);let g=i.items.length;if(g<2||i.blocked==="attachment"||i.blocked==="too-many")return null;let v=async()=>{if(o!=="running"){p("running"),k("");try{let C=await wr({session:l,sessionId:e,locale:typeof a=="function"?a():"zh"});if(C.ok){let P=C.optimized?t("merge.done")(C.count):t("merge.donePlain")(C.count);k(P),n?.(P)}else k(C.error==="queue-changed"?t("merge.changed"):C.error==="session/queue-item-not-found"?t("merge.claimed"):t("merge.failed"))}catch{k(t("merge.failed"))}finally{p("idle"),window.clearTimeout(u.current),u.current=window.setTimeout(()=>k(""),4e3)}}},x=o==="running"?t("merge.running"):m!==""?m:t("merge.label")(g);return ie.createElement(Qn,{label:x},ie.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":g,"data-cbp-merge-phase":o,"aria-label":x,"aria-busy":o==="running"?"true":void 0,disabled:o==="running",onClick:C=>{C.stopPropagation(),v()}},ie.createElement(hr,null),ie.createElement("span",{className:"cbp-merge-count"},o==="running"?"\u2026":g)))}var $e="promptBoost",kr={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},Sr={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var z=xe(require("react"),1),se=require("react");var Zn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function ea(){return z.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},z.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),z.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function Nr(e,r){let t=`source.${e.id}`,a=r(t);return a===t?e.label:a}function ta(e,r){if(e==null)return r("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return r("panel.error.network");case"timeout":return r("panel.error.timeout");case"stream":return r("panel.error.stream");case"empty":return r("panel.error.empty");case"apply":return r("panel.error.apply");case"host":return r("panel.error.host");default:return r("panel.error.unknown")}}function ra(e,r){if(e.phase!=="ready")return"";let t=[];return e.cached&&t.push(r("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&t.push(r("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),t.join(" \xB7 ")}function na(e,r){if(e.phase==="running")return r("chip.running");if(e.phase==="streaming"){let t=e.sources.slice(0,2).map(a=>`${Nr(a,r)} ${a.count}`).join(" \xB7 ");return t===""?r("chip.writing"):`${t} \xB7 ${r("chip.writing")}`}return e.phase==="ready"?r("chip.ready"):e.phase==="applied"?r("undo.done"):e.phase==="error"?r("chip.failed"):r("undo.done")}function aa({state:e,store:r,t,inputActions:a,chipRef:n}){let l=e.phase==="applied",i=e.phase==="running"||e.phase==="streaming",o=e.phase==="ready",p=e.phase==="error",m=e.mode==="compose"?t("panel.compose"):t("button.label"),k=na(e,t);return l?z.createElement("div",{className:"pb-chip-row"},z.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":t("chip.expand"),onClick:()=>r.expand(a),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),r.expand(a))}},z.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},z.createElement(ur,{size:12})),z.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},t("undo.done")),z.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),z.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":t("undo.label"),onClick:()=>r.undo(a)},t("undo.action")))):z.createElement("div",{className:"pb-chip-row"},z.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":i?"true":"false",onClick:()=>r.expand(a)},z.createElement("button",{ref:n,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":r.panelId(a),"aria-label":`${t("chip.expand")} \xB7 ${m}`,onClick:()=>r.expand(a)},z.createElement("span",{className:i||o?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},i?z.createElement(ea,null):p?z.createElement(ut,{size:12}):z.createElement(Je,{size:12})),z.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},k),o||p?z.createElement(z.Fragment,null,z.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),z.createElement("span",{className:"pb-chip-view"},t("chip.view"))):null),z.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":t("chip.dismiss"),onClick:()=>r.dismiss(a)},z.createElement(br,{size:10}))))}function oa({state:e,store:r,t,inputActions:a,locale:n,panelRef:l}){let i=(0,se.useRef)(null),o=e.phase,p=o==="running",m=o==="streaming",k=o==="ready",u=o==="applied",g=k||u,v=o==="error",x=e.sources,C=p||m||g||x.length>0,P=u?e.applied:e.prompt,b=ra(e,t),T=r.panelId(a),I=t(Zn?"shortcut.mac":"shortcut.other"),L=t(p?"panel.announceRunning":m?"panel.streaming":u?"panel.announceApplied":k?"panel.announceReady":"panel.announceError");return(0,se.useEffect)(()=>{let N=i.current;N===null||o!=="streaming"||(N.scrollTop=N.scrollHeight)},[e.prompt,o]),z.createElement("section",{ref:l,id:T,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":o,"data-pb-running":p||m?"true":"false",tabIndex:-1,"aria-labelledby":`${T}-title`,"aria-busy":p||m?"true":void 0},z.createElement("header",{className:"pb-head"},z.createElement("div",{className:"pb-head-row"},z.createElement("h2",{className:"pb-title",id:`${T}-title`},t("panel.title")),e.mode==="compose"?z.createElement("span",{className:"pb-mode"},t("panel.compose")):null,z.createElement("span",{className:"pb-meta"},b),z.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":t("panel.collapse"),title:t("panel.collapse"),onClick:()=>r.collapse(a)},z.createElement(fr,{size:14}))),C?z.createElement("div",{className:"pb-sources",role:"list","aria-label":t("panel.sources")},x.length>0?x.map(N=>z.createElement("span",{key:N.id,className:"pb-chip",role:"listitem","data-pb-source":N.id},z.createElement("span",{className:"pb-chip-label"},Nr(N,t)),z.createElement("span",{className:"pb-chip-count"},N.count))):p?[z.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),z.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:z.createElement("span",{className:"pb-note"},t("panel.noSources"))):null),z.createElement("div",{className:"pb-rule","aria-hidden":"true"}),z.createElement("div",{className:"pb-body"},p?z.createElement(z.Fragment,null,z.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},z.createElement("span",{className:"pb-skeleton-line is-long"}),z.createElement("span",{className:"pb-skeleton-line is-full"}),z.createElement("span",{className:"pb-skeleton-line is-short"})),z.createElement("div",{className:"pb-status"},z.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.status"))):null,m||g?z.createElement("textarea",{ref:i,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:m||u,spellCheck:!1,"aria-label":t("panel.editLabel"),placeholder:t("panel.placeholder"),value:P}):null,m?z.createElement("div",{className:"pb-status"},z.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.streaming")):null,v?z.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},z.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},z.createElement(ut,{size:14})),z.createElement("span",{className:"pb-error-text"},ta(e.error,t))):null,z.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},L)),z.createElement("div",{className:"pb-foot"},z.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>r.collapse(a)},t("panel.close")),z.createElement("span",{className:"pb-foot-spacer"}),g?z.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:I,onClick:()=>r.retry(a,{locale:n()})},t("panel.another"),z.createElement("span",{className:"pb-kbd","aria-hidden":"true"},I)):null,u?z.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>r.undo(a)},t("undo.action")):null,p||m?z.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>r.retry(a,{locale:n()})},t("panel.retry")):null,v?z.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>r.retry(a,{locale:n()})},t("panel.retryError")):null))}function zr({inputActions:e,store:r,t,locale:a,session:n}){let l=(0,se.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),i=l.phase,o=i!=="idle"||l.undo!==null,p=l.expanded===!0&&i!=="idle";(0,se.useEffect)(()=>{let x=typeof n?.id=="string"?n.id:"";x!==""&&r.setSessionId(e,x)},[n?.id,e,r]);let m=(0,se.useRef)(null),k=(0,se.useRef)(null),u=(0,se.useRef)(null),g=(0,se.useRef)(!1),v=(0,se.useRef)(!1);return(0,se.useEffect)(()=>{if(!o)return;let x=C=>{if(!(C.defaultPrevented||p===!1)){if(C.key==="Escape"){C.preventDefault(),C.stopPropagation(),r.collapse(e);return}C.key==="Enter"&&(C.metaKey||C.ctrlKey)&&(C.preventDefault(),C.stopPropagation(),i==="applied"||i==="ready"?r.retry(e,{locale:a()}):i==="error"&&r.retry(e,{locale:a()}))}};return document.addEventListener("keydown",x,!0),()=>document.removeEventListener("keydown",x,!0)},[o,p,i,e,r,a]),(0,se.useEffect)(()=>{if(o&&g.current===!1){g.current=!0,u.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(o===!1&&g.current){g.current=!1;let x=u.current;if(u.current=null,x==null||x.isConnected===!1||typeof x.focus!="function")return;try{x.focus({preventScroll:!0})}catch{}}},[o]),(0,se.useEffect)(()=>{if(p&&v.current===!1){v.current=!0;let x=k.current;if(x!==null&&typeof x.focus=="function")try{x.focus({preventScroll:!0})}catch{}return}if(p===!1&&v.current){v.current=!1;let x=i==="idle"?u.current:m.current;if(x==null||x.isConnected===!1||typeof x.focus!="function")return;try{x.focus({preventScroll:!0})}catch{}}},[p,i]),o?p===!1?z.createElement(aa,{state:l,store:r,t,inputActions:e,chipRef:m}):z.createElement(oa,{state:l,store:r,t,inputActions:e,locale:a,panelRef:k}):null}var S=xe(require("react"),1),yt=require("react-dom");var Rr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"translate",icon:"translate",zh:"\u7FFB\u8BD1",en:"Translate",sheet:"translate",prompt:{zh:"\u5E2E\u6211\u7FFB\u8BD1\uFF1A",en:"Translate this: "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function gt(e,r){return r==="en"?e.en:e.zh}var f=xe(require("react"),1),Cr=require("react-dom"),Tr="/api/chatbox-pet",ia=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],sa=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function Mr(e,r){let t=await fetch(`${Tr}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)}),a;try{a=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(a?.ok!==!0)throw new Error(a?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return a.result}function Er(e,r){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:r,references:[]}),!0}catch{try{return e.setDraft(r),!0}catch{return!1}}}function De({title:e,hint:r,onClose:t,children:a,t:n,wide:l=!1}){let i=f.useRef(null),[o,p]=f.useState(()=>{try{let u=JSON.parse(localStorage.getItem("chatbox-pet:sheet-size")||"null");if(u&&Number.isFinite(u.width)&&Number.isFinite(u.height))return{width:Math.min(u.width,window.innerWidth-48),height:Math.min(u.height,window.innerHeight-48)}}catch{}return null}),m=f.useRef(null),k=u=>{let g=i.current;if(g===null)return;u.preventDefault(),u.stopPropagation();let v=g.getBoundingClientRect();m.current={x:u.clientX,y:u.clientY,width:v.width,height:v.height};let x=P=>{let b=m.current;b!==null&&p({width:Math.min(Math.max(360,b.width+(P.clientX-b.x)),window.innerWidth-48),height:Math.min(Math.max(220,b.height+(P.clientY-b.y)),window.innerHeight-48)})},C=()=>{m.current=null,window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",C);try{let P=i.current;if(P!==null){let b=P.getBoundingClientRect();localStorage.setItem("chatbox-pet:sheet-size",JSON.stringify({width:Math.round(b.width),height:Math.round(b.height)}))}}catch{}};window.addEventListener("pointermove",x),window.addEventListener("pointerup",C)};return f.useEffect(()=>{let u=g=>{g.key==="Escape"&&(g.preventDefault(),g.stopPropagation(),t())};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[t]),(0,Cr.createPortal)(f.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:u=>u.stopPropagation()},f.createElement("div",{className:l?"cbp-sheet cbp-sheet-wide":"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:i,style:o===null?void 0:{width:`${Math.round(o.width)}px`,height:`${Math.round(o.height)}px`}},f.createElement("div",{className:"cbp-sheet-head"},f.createElement("span",{className:"cbp-sheet-title"},e),f.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":n("sheet.close"),onClick:t},"\u2715")),r?f.createElement("p",{className:"cbp-sheet-hint"},r):null,f.createElement("div",{className:"cbp-sheet-body"},a),f.createElement("button",{type:"button",className:"cbp-sheet-grip","data-cbp-sheet-grip":"true","aria-label":n("sheet.resize"),title:n("sheet.resize"),onPointerDown:k}))),document.body)}function Fr({onClose:e,onFill:r,t,locale:a}){let[n,l]=f.useState("idle"),[i,o]=f.useState(0),[p,m]=f.useState(null),[k,u]=f.useState(""),g=f.useRef(null),v=f.useRef([]),x=f.useRef(0),C=()=>{x.current!==0&&(clearInterval(x.current),x.current=0)};f.useEffect(()=>()=>{C();try{g.current?.stream?.getTracks?.().forEach(L=>L.stop())}catch{}},[]);let P=async L=>{l("working"),u("");try{let R=await(await fetch(`${Tr}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":L.type||"audio/webm"},body:L})).json();if(R?.ok!==!0)throw new Error(R?.error?.message??"\u8F6C\u5199\u5931\u8D25");m(R.result),l("done")}catch(N){u(String(N?.message??N)),l("idle")}},b=async()=>{u("");try{let L=await navigator.mediaDevices.getUserMedia({audio:!0}),N=new MediaRecorder(L);v.current=[],N.ondataavailable=R=>{R.data?.size>0&&v.current.push(R.data)},N.onstop=()=>{C(),L.getTracks().forEach(q=>q.stop());let R=new Blob(v.current,{type:N.mimeType||"audio/webm"});P(R)},g.current=N,N.start(),o(0),l("recording"),x.current=setInterval(()=>o(R=>R+1),1e3)}catch(L){let N=L?.name==="NotAllowedError"||L?.name==="SecurityError";u(N?t("sheet.transcribe.denied"):String(L?.message??L))}},T=()=>{l("working");try{g.current?.stop()}catch{C(),l("idle")}},I=`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`;return f.createElement(De,{title:t("sheet.transcribe.title"),hint:t("sheet.transcribe.hint"),onClose:e,t},p===null?f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-sheet-center"},f.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":n,"aria-label":t(n==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:n==="recording"?T:b,disabled:n==="working"},f.createElement("span",{className:"cbp-rec-dot"})),f.createElement("span",{className:"cbp-rec-time"},n==="recording"?I:t(n==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),f.createElement("label",{className:"cbp-sheet-file"},f.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:L=>{let N=L.target.files?.[0];N&&P(N),L.target.value=""}}),f.createElement("span",null,t("sheet.transcribe.pick")))):f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-sheet-meta"},t("sheet.transcribe.meta")(p.segments?.length??0,p.language??"\u2014",p.durationSeconds??0)),f.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},p.text||t("sheet.transcribe.empty")),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(p.text)},t("sheet.fill")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{m(null),l("idle")}},t("sheet.again")))),k?f.createElement("p",{className:"cbp-sheet-error"},k):null)}function Pr({onClose:e,onFill:r,t,locale:a,sessionId:n=""}){let[l,i]=f.useState("update"),[o,p]=f.useState(""),[m,k]=f.useState(""),[u,g]=f.useState("idle"),[v,x]=f.useState(""),[C,P]=f.useState(""),b=async()=>{g("working"),P("");try{let T=await Mr("/write",{genre:l,topic:o,tone:m,locale:a(),session:n});x(T.text),g("done")}catch(T){P(String(T?.message??T)),g("idle")}};return f.createElement(De,{title:t("sheet.write.title"),hint:t("sheet.write.hint"),onClose:e,t},f.createElement("div",{className:"cbp-chips"},ia.map(T=>f.createElement("button",{key:T.id,type:"button",className:"cbp-chip","data-cbp-genre":T.id,"aria-pressed":l===T.id?"true":"false",onClick:()=>i(T.id)},a()==="en"?T.en:T.zh))),f.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:t("sheet.write.topic"),value:o,maxLength:200,onChange:T=>p(T.target.value)}),f.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:t("sheet.write.tone"),value:m,maxLength:80,onChange:T=>k(T.target.value)}),v===""?f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:u==="working"||o.trim()==="",onClick:b},t(u==="working"?"sheet.working":"sheet.write.go"))):f.createElement(f.Fragment,null,f.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},v),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(v)},t("sheet.fill")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>x("")},t("sheet.again")))),C?f.createElement("p",{className:"cbp-sheet-error"},C):null)}function Ir({onClose:e,t:r,locale:t,sessionId:a=""}){let[n,l]=f.useState(""),[i,o]=f.useState(""),[p,m]=f.useState(10),[k,u]=f.useState("idle"),[g,v]=f.useState(null),[x,C]=f.useState(""),P=async()=>{u("working"),C("");try{let T=await Mr("/deck",{topic:n,audience:i,pages:p,locale:t(),session:a});v(T),u("done")}catch(T){C(String(T?.message??T)),u("idle")}},b=()=>{if(!g?.base64)return;let T=Uint8Array.from(atob(g.base64),R=>R.charCodeAt(0)),I=new Blob([T],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),L=URL.createObjectURL(I),N=document.createElement("a");N.href=L,N.download=g.name||"deck.pptx",document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(L),4e3)};return f.createElement(De,{title:r("sheet.deck.title"),hint:r("sheet.deck.hint"),onClose:e,t:r},g===null?f.createElement(f.Fragment,null,f.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:r("sheet.deck.topic"),value:n,maxLength:200,onChange:T=>l(T.target.value)}),f.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:r("sheet.deck.audience"),value:i,maxLength:120,onChange:T=>o(T.target.value)}),f.createElement("div",{className:"cbp-chips"},sa.map(T=>f.createElement("button",{key:T.id,type:"button",className:"cbp-chip","data-cbp-size":T.id,"aria-pressed":p===T.id?"true":"false",onClick:()=>m(T.id)},t()==="en"?T.en:T.zh))),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:k==="working"||n.trim()==="",onClick:P},r(k==="working"?"sheet.deck.working":"sheet.deck.go")))):f.createElement(f.Fragment,null,f.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},f.createElement("div",{className:"cbp-deck-title"},g.title||n),f.createElement("div",{className:"cbp-deck-meta"},r("sheet.deck.meta")(g.slides??0)),f.createElement("div",{className:"cbp-deck-path",title:g.path},g.path)),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:b},r("sheet.deck.download")),f.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>v(null)},r("sheet.again")))),x?f.createElement("p",{className:"cbp-sheet-error"},x):null)}function Lr({onClose:e,onFill:r,t}){let[a,n]=f.useState(""),l=()=>{let i=a.trim();r(i===""?t("sheet.video.prompt"):t("sheet.video.promptWith")(i))};return f.createElement(De,{title:t("sheet.video.title"),hint:t("sheet.video.hint"),onClose:e,t},f.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:t("sheet.video.placeholder"),value:a,maxLength:500,onChange:i=>n(i.target.value)}),f.createElement("div",{className:"cbp-sheet-actions"},f.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:l},t("sheet.video.go"))))}var qr=`
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
`;var s=xe(require("react"),1),xt="/api/chatbox-pet",Br=[{id:"auto",zh:"\u81EA\u52A8\u68C0\u6D4B",en:"Detect"},{id:"zh",zh:"\u4E2D\u6587",en:"Chinese"},{id:"en",zh:"\u82F1\u6587",en:"English"},{id:"ja",zh:"\u65E5\u6587",en:"Japanese"},{id:"ko",zh:"\u97E9\u6587",en:"Korean"},{id:"fr",zh:"\u6CD5\u6587",en:"French"},{id:"de",zh:"\u5FB7\u6587",en:"German"},{id:"es",zh:"\u897F\u73ED\u7259\u6587",en:"Spanish"}];function la(e){let r=String(e??"").trim();return r===""||r.length>40||/[.!?。！？\n]/.test(r)?!1:r.split(/\s+/).filter(Boolean).length<=3}var pa=new Set(["\u7684","\u4E86","\u662F","\u5728","\u548C","\u4E0E","\u4E5F","\u5C31","\u90FD","\u800C","\u53CA","\u5176","\u4E4B","\u7740","\u8FC7","\u628A","\u88AB","\u8BA9","\u7ED9","\u5BF9","\u4ECE","\u5230","\u5F88","\u66F4","\u6700","\u4E0D","\u6CA1","\u6709","\u4E0A","\u4E0B","\u4E2A","\u8FD9","\u90A3","\u6211","\u4F60","\u4ED6","\u5979","\u5B83","\u4EEC","\u53BB","\u6765","\u4F1A","\u80FD","\u8981"]),Or=new Set(["the","a","an","and","or","but","if","to","of","in","on","at","for","with","by","is","are","was","were","be","been","being","am","it","its","this","that","these","those","i","you","he","she","we","they","them","his","her","their","our","my","as","so","than","then","there","here","not","no","do","does","did","has","have","had"]);function da(e,r,t=""){let a=String(e??"");if(a==="")return[a];let n=String(t??"").trim().toLowerCase(),l=n.replace(/(e|y)$/i,""),i=[],o=0,p=0;for(let m of a.matchAll(/[A-Za-z][A-Za-z'’-]{1,24}/g)){let k=m.index??0;k>o&&i.push(a.slice(o,k));let u=m[0],g=u.replace(/['’-]+$/,""),v=n!==""&&l!==""&&g.toLowerCase().startsWith(l)&&g.length-n.length<=3;if(p+=1,!v&&Or.has(g.toLowerCase())){i.push(u),o=k+u.length;continue}let x=s.createElement("button",{type:"button",className:v?"cbt-word cbt-word--head":"cbt-word","data-cbt-word":g,key:`${k}-${p}`,onClick:()=>r(g)},u);i.push(v?s.createElement("mark",{className:"cbt-mark",key:`m${k}`},x):x),o=k+u.length}return o<a.length&&i.push(a.slice(o)),i.length===0?[a]:i}function ua(e,r){let t=String(e??"");if(t==="")return[t];let a=null;try{a=new Intl.Segmenter(void 0,{granularity:"word"})}catch{a=null}if(a===null)return[t];let n=[],l=0;for(let i of a.segment(t)){let o=i.segment;if(!i.isWordLike||Or.has(o.toLowerCase())||pa.has(o)){n.push(o);continue}l+=1,n.push(s.createElement("button",{type:"button",className:"cbt-word","data-cbt-word":o,key:`${i.index}-${l}`,onClick:()=>r(o)},o))}return n.length===0?[t]:n}async function ue(e,r){let t=await fetch(`${xt}${e}`,r),a;try{a=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(a?.ok!==!0)throw new Error(a?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return a.result}function jr({t:e,locale:r=()=>"zh",inputActions:t}){let a=r()!=="en",n=s.useCallback((c,w)=>a?c:w,[a]),[l,i]=s.useState("translate"),[o,p]=s.useState("auto"),[m,k]=s.useState(()=>a?"en":"zh"),[u,g]=s.useState("text"),[v,x]=s.useState(""),[C,P]=s.useState(""),[b,T]=s.useState(null),[I,L]=s.useState(null),[N,R]=s.useState(null),[q,_]=s.useState(!1),[$,B]=s.useState(""),[Re,le]=s.useState(""),[Z,we]=s.useState([]),[he,be]=s.useState(null),[Ce,Y]=s.useState("idle"),[fe,W]=s.useState(""),[ve,Pe]=s.useState(""),[ke,Ie]=s.useState(!1),[Te,y]=s.useState(0),[E,O]=s.useState([]),[D,J]=s.useState(null),[X,Me]=s.useState({due:0,total:0,newCards:0}),[me,Ae]=s.useState("all"),[d,h]=s.useState(""),[F,A]=s.useState(!1),K=s.useRef(null),G=s.useRef([]),ae=s.useRef(0),pe=s.useCallback(()=>{ae.current!==0&&(clearInterval(ae.current),ae.current=0)},[]),re=s.useCallback(async(c=me,w=d)=>{try{let j=new URLSearchParams;c!=="all"&&j.set("kind",c),w.trim()!==""&&j.set("search",w.trim());let Q=await ue(`/favorites?${j.toString()}`);O(Q.items??[]),Q.counts&&Me(Q.counts)}catch(j){W(String(j?.message??j))}},[me,d]);s.useEffect(()=>{re("all","")},[]),s.useEffect(()=>{let c=!1;return fetch(`${xt}/translate/engine`).then(w=>w.json()).then(w=>{!c&&w?.ok===!0&&T(w.result)}).catch(()=>{}),()=>{c=!0}},[]),s.useEffect(()=>()=>{pe();try{K.current?.stream?.getTracks?.().forEach(c=>c.stop())}catch{}},[pe]);let ge=async(c=v)=>{let w=c.trim();if(w===""){W(n("\u5148\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57","Type something to translate first"));return}Y("working"),W(""),A(!1),L(null),R(null),be(null),we([]);let j=la(w)?"dict":"sentence",Q=m==="zh"?"zh":"en";try{let te=await ue("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w,from:o,to:m,locale:j==="dict"?Q:a?"zh":"en",mode:j})});j==="dict"?(L(te.dict),P(""),le("input"),Ze(te.dict.word)):P(te.translated),T(He=>({...He??{},last:{engine:te.engine,ms:te.ms}})),Y("done")}catch(te){W(String(te?.message??te)),Y("idle")}},Se=()=>{if(m==="auto"){k(o==="auto"?"zh":o),p("auto");return}p(m),k(o==="auto"?"zh":o),C!==""&&(x(C),P(""))},Xe=async c=>{Y("working"),W(""),A(!1),Pe(c.name);try{let w=await ue(`/translate/file?name=${encodeURIComponent(c.name)}`,{method:"POST",headers:{"content-type":c.type||"application/octet-stream"},body:c});x(w.text);let j=await ue("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w.text,from:o,to:m,locale:a?"zh":"en"})});P(j.translated),Y("done"),g("text"),w.truncated&&W(n("\u6587\u4EF6\u8F83\u957F\uFF0C\u53EA\u7FFB\u8BD1\u4E86\u524D 6 \u4E07\u4E2A\u5B57\u7B26","Long document: only the first 60,000 characters were translated"))}catch(w){W(String(w?.message??w)),Y("idle")}},H=async()=>{W("");try{let c=await navigator.mediaDevices.getUserMedia({audio:!0}),w=new MediaRecorder(c);G.current=[],w.ondataavailable=j=>{j.data?.size>0&&G.current.push(j.data)},w.onstop=async()=>{pe(),c.getTracks().forEach(Q=>Q.stop()),Ie(!1),Y("working");let j=new Blob(G.current,{type:w.mimeType||"audio/webm"});try{let{transcribe:Q}=await Promise.resolve().then(()=>(Ar(),Dr)),te=await Q(j);x(te),g("text"),Y("idle")}catch(Q){W(String(Q?.message??Q)),Y("idle")}},K.current=w,w.start(),Ie(!0),y(0),ae.current=setInterval(()=>y(j=>j+1),1e3)}catch(c){let w=c?.name==="NotAllowedError"||c?.name==="SecurityError";W(w?n("\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650","No microphone permission"):String(c?.message??c))}},ee=async()=>{if(v.trim()!=="")try{await ue("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"sentence",source:v,target:C,from:o,to:m})}),A(!0),await re()}catch(c){W(String(c?.message??c))}},We=c=>{let w=c.currentTarget,j=typeof window.getSelection=="function"?window.getSelection():null,Q=String(j?.toString?.()??"").trim();if(Q===""||Q.length>40){be(null);return}let te=j?.rangeCount>0?j.getRangeAt(0):null;if(te===null||w===null||!w.contains(te.commonAncestorContainer)){be(null);return}let He=te.getBoundingClientRect();be({text:Q,x:Math.round(He.left-w.getBoundingClientRect().left),y:Math.round(He.top-w.getBoundingClientRect().top)})},Le=async c=>{W(""),A(!1),Y("working"),I!==null&&I.word.toLowerCase()!==c.toLowerCase()&&we(w=>[...w,I]);try{let w=await ue("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:c,mode:"dict",locale:m==="zh"?"zh":"en"})});L(w.dict),R(null),le("result"),Y("done"),Ze(w.dict.word)}catch(w){W(String(w?.message??w)),Y("idle")}},nn=()=>{if(Z.length>0){let c=Z[Z.length-1];we(Z.slice(0,-1)),L(c),R(null),Ze(c.word);return}L(null),R(null),we([]),le("")},Ze=async c=>{R(null),_(!0);try{let w=await ue("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:c,mode:"expand",locale:m==="zh"?"zh":"en"})});R(w.expand)}catch{R(null)}finally{_(!1)}},an=async(c,w)=>{B(w);try{let j=await ue("/speak",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:c,accent:w})}),Q=new Audio(`data:${j.mime};base64,${j.base64}`);Q.onended=()=>B(""),Q.onerror=()=>B(""),await Q.play()}catch(j){B(""),W(String(j?.message??j))}},on=async c=>{try{await ue("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"word",source:c.word,target:c.senses.map(w=>w.meaning).join("\uFF1B"),from:o,to:m})}),A(!0),await re()}catch(w){W(String(w?.message??w))}},sn=async()=>{W("");try{let w=(await ue("/favorites?due=1&limit=30")).items??[];if(w.length===0){J({cards:[],index:0,revealed:!1,done:!0});return}J({cards:w,index:0,revealed:!1,done:!1})}catch(c){W(String(c?.message??c))}},cn=async c=>{if(D===null)return;let w=D.cards[D.index];if(w===void 0)return;try{await ue("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"grade",id:w.id,grade:c})})}catch(te){W(String(te?.message??te))}let j=c==="again"?[...D.cards,w]:D.cards,Q=D.index+1;if(Q>=j.length){J({cards:j,index:Q,revealed:!1,done:!0}),await re();return}J({cards:j,index:Q,revealed:!1,done:!1})},ln=async c=>{try{await ue("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"remove",id:c})}),await re()}catch(w){W(String(w?.message??w))}},Nt=async c=>{try{await navigator.clipboard.writeText(c)}catch{W(n("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C","Copy failed \u2014 select the text manually"))}};return s.createElement("div",{className:"cbt-page"},s.createElement("div",{className:"cbt-viewtabs",role:"tablist"},[["translate",n("\u7FFB\u8BD1","Translate")],["favorites",n("\u6536\u85CF\u672C","Saved")],["review",n("\u590D\u4E60","Review")]].map(([c,w])=>s.createElement("button",{key:c,type:"button",role:"tab",className:"cbt-viewtab","data-cbt-view":c,"aria-selected":c==="review"?D!==null?"true":"false":l===c?"true":"false",onClick:()=>{if(c==="review"){i("favorites"),sn();return}J(null),i(c)}},w,c==="favorites"&&(X.total||E.length)>0?` \xB7 ${X.total||E.length}`:"",c==="review"&&X.due>0?` \xB7 ${X.due}`:""))),l==="translate"?s.createElement(s.Fragment,null,s.createElement("div",{className:"cbt-bar"},s.createElement("select",{className:"cbt-select",value:o,onChange:c=>p(c.target.value),"aria-label":n("\u6E90\u8BED\u8A00","Source language")},Br.map(c=>s.createElement("option",{key:c.id,value:c.id},a?c.zh:c.en))),s.createElement("button",{type:"button",className:"cbt-swap",onClick:Se,title:n("\u4EA4\u6362\u8BED\u8A00","Swap"),"aria-label":n("\u4EA4\u6362\u8BED\u8A00","Swap")},"\u21C4"),s.createElement("select",{className:"cbt-select",value:m,onChange:c=>k(c.target.value),"aria-label":n("\u76EE\u6807\u8BED\u8A00","Target language")},Br.filter(c=>c.id!=="auto").map(c=>s.createElement("option",{key:c.id,value:c.id},a?c.zh:c.en))),s.createElement("span",{className:"cbt-spacer"}),s.createElement("div",{className:"cbt-tabs",role:"tablist"},["text","voice","file"].map(c=>s.createElement("button",{key:c,type:"button",role:"tab",className:"cbt-tab","data-cbt-tab":c,"aria-selected":u===c?"true":"false",onClick:()=>g(c)},c==="text"?n("\u6587\u5B57","Text"):c==="voice"?n("\u8BED\u97F3","Voice"):n("\u6587\u4EF6","File"))))),u==="text"?s.createElement("textarea",{className:"cbt-input","data-cbt-source":"true",placeholder:n("\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57\uFF0CCtrl / \u2318 + Enter \u7FFB\u8BD1","Type text to translate \u2014 Ctrl / \u2318 + Enter"),value:v,onChange:c=>x(c.target.value),onKeyDown:c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&(c.preventDefault(),ge())}}):null,u==="voice"?s.createElement("div",{className:"cbt-voice"},s.createElement("button",{type:"button",className:"cbt-rec","data-cbt-record":ke?"on":"off","aria-label":ke?n("\u505C\u6B62\u5F55\u97F3","Stop recording"):n("\u5F00\u59CB\u5F55\u97F3","Start recording"),onClick:ke?()=>K.current?.stop():H},s.createElement("span",{className:"cbt-rec-dot"})),s.createElement("span",{className:"cbt-hint"},ke?`${String(Math.floor(Te/60)).padStart(2,"0")}:${String(Te%60).padStart(2,"0")} \xB7 ${n("\u518D\u70B9\u4E00\u4E0B\u7ED3\u675F","tap again to stop")}`:n("\u5F55\u97F3\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u5B8C\u6210\u540E\u586B\u8FDB\u6587\u5B57\u6846","Transcribed on this machine, then placed in the text box"))):null,u==="file"?s.createElement("label",{className:"cbt-drop"},s.createElement("input",{type:"file",accept:".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json","data-cbt-file":"true",onChange:c=>{let w=c.target.files?.[0];w&&Xe(w),c.target.value=""}}),s.createElement("span",{className:"cbt-drop-title"},n("\u9009\u62E9\u4E00\u4E2A\u6587\u6863","Pick a document")),s.createElement("span",{className:"cbt-hint"},n("PDF / DOCX / TXT / Markdown / HTML\uFF0C30 MB \u4EE5\u5185","PDF / DOCX / TXT / Markdown / HTML, up to 30 MB"))):null,ve!==""?s.createElement("div",{className:"cbt-doc","data-cbt-doc":"true"},ve):null,s.createElement("div",{className:"cbt-actions"},s.createElement("button",{type:"button",className:"cbt-btn cbt-btn-primary","data-cbt-translate":"true",disabled:Ce==="working",onClick:()=>{ge()}},Ce==="working"?n("\u7FFB\u8BD1\u4E2D\u2026","Translating\u2026"):n("\u7FFB\u8BD1","Translate")),s.createElement("span",{className:"cbt-hint"},v.trim()===""?"":n(`${v.trim().length} \u5B57\u7B26`,`${v.trim().length} chars`))),I!==null?s.createElement("div",{className:"cbt-dict","data-cbt-dict":"true"},Re==="result"?s.createElement("button",{type:"button",className:"cbt-back","data-cbt-back":"true",onClick:nn},"\u2190"," ",Z.length>0?`${n("\u8FD4\u56DE","Back to")} ${Z[Z.length-1].word}`:n("\u8FD4\u56DE\u8BD1\u6587","Back to translation")):null,s.createElement("div",{className:"cbt-dict-head"},s.createElement("span",{className:"cbt-dict-word"},I.word),I.phonetic?s.createElement("span",{className:"cbt-dict-phonetic"},I.phonetic):null,s.createElement("span",{className:"cbt-dict-play"},[["en-US",n("\u7F8E","US")],["en-GB",n("\u82F1","UK")]].map(([c,w])=>s.createElement("button",{key:c,type:"button",className:"cbt-speak","data-cbt-speak":c,"aria-label":`${n("\u6717\u8BFB","Pronounce")} ${w}`,onClick:()=>{an(I.word,c)}},s.createElement("span",{className:"cbt-speak-icon","aria-hidden":"true"},$===c?"\u25A0":"\u25B6"),w)))),s.createElement("ul",{className:"cbt-dict-senses"},I.senses.map((c,w)=>s.createElement("li",{key:w,className:"cbt-dict-sense"},c.pos?s.createElement("span",{className:"cbt-dict-pos"},c.pos):null,s.createElement("span",{className:"cbt-dict-meaning"},c.meaning),c.example?s.createElement("div",{className:"cbt-dict-example","data-cbt-example":"true"},da(c.example,j=>{Le(j)},I.word)):null))),q?s.createElement("div",{className:"cbt-dict-loading"},n("\u6B63\u5728\u6269\u5C55\u8BCD\u6761\u2026","Loading word details\u2026")):null,N&&N.forms.length>0?s.createElement("div",{className:"cbt-dict-section","data-cbt-forms":"true"},s.createElement("div",{className:"cbt-dict-label"},n("\u8BCD\u5F62","Forms")),s.createElement("div",{className:"cbt-dict-chips"},N.forms.map((c,w)=>s.createElement("span",{className:"cbt-dict-chip",key:w},s.createElement("span",{className:"cbt-dict-chip-label"},c.label)," ",c.value)))):null,N&&(N.synonyms.length>0||N.antonyms.length>0)?s.createElement("div",{className:"cbt-dict-section"},N.synonyms.length>0?s.createElement("div",{className:"cbt-dict-row"},s.createElement("span",{className:"cbt-dict-label"},n("\u8FD1\u4E49","Synonyms")),s.createElement("span",{className:"cbt-dict-words"},N.synonyms.map((c,w)=>s.createElement(s.Fragment,{key:c},s.createElement("button",{type:"button",className:"cbt-word cbt-word--rel","data-cbt-related":c,onClick:()=>{Le(c)}},c),w<N.synonyms.length-1?s.createElement("span",{className:"cbt-sep"}," \xB7 "):null)))):null,N.antonyms.length>0?s.createElement("div",{className:"cbt-dict-row"},s.createElement("span",{className:"cbt-dict-label"},n("\u53CD\u4E49","Antonyms")),s.createElement("span",{className:"cbt-dict-words"},N.antonyms.map((c,w)=>s.createElement(s.Fragment,{key:c},s.createElement("button",{type:"button",className:"cbt-word cbt-word--rel","data-cbt-related":c,onClick:()=>{Le(c)}},c),w<N.antonyms.length-1?s.createElement("span",{className:"cbt-sep"}," \xB7 "):null)))):null):null,N&&N.phrases.length>0?s.createElement("div",{className:"cbt-dict-section","data-cbt-phrases":"true"},s.createElement("div",{className:"cbt-dict-label"},n("\u5E38\u89C1\u642D\u914D","Phrases")),s.createElement("ul",{className:"cbt-dict-phrases"},N.phrases.map((c,w)=>s.createElement("li",{key:w},s.createElement("button",{type:"button",className:"cbt-word cbt-word--phrase","data-cbt-phrase":c.en,onClick:()=>{Le(c.en)}},c.en),c.zh?s.createElement("span",{className:"cbt-dict-phrase-zh"},c.zh):null)))):null,N&&N.mnemonic?s.createElement("div",{className:"cbt-dict-section"},s.createElement("div",{className:"cbt-dict-label"},n("\u8BB0\u5FC6","Memory hook")),s.createElement("div",{className:"cbt-dict-mnemonic"},N.mnemonic)):null,I.note?s.createElement("div",{className:"cbt-dict-note"},I.note):null,s.createElement("div",{className:"cbt-actions"},s.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{Nt(I.word+" "+I.senses.map(c=>c.meaning).join("\uFF1B"))}},n("\u590D\u5236","Copy")),s.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{on(I)}},F?n("\u5DF2\u6536\u85CF","Saved"):n("\u6536\u85CF","Save")))):null,C!==""?s.createElement("div",{className:"cbt-result","data-cbt-result":"true"},s.createElement("div",{className:"cbt-result-text","data-cbt-result-text":"true",onMouseUp:We,onKeyUp:We},ua(C,c=>{Le(c)}),he!==null?s.createElement("button",{type:"button",className:"cbt-pick","data-cbt-pick":"true",style:{left:`${he.x}px`,top:`${Math.max(0,he.y-26)}px`},onMouseDown:c=>c.preventDefault(),onClick:()=>{let c=he.text;be(null),Le(c)}},n("\u67E5\u8BE2","Look up"),"\u300C",he.text,"\u300D"):null),s.createElement("div",{className:"cbt-actions"},s.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{Nt(C)}},n("\u590D\u5236","Copy")),s.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{ee()}},F?n("\u5DF2\u6536\u85CF","Saved"):n("\u6536\u85CF","Save")),typeof t?.setDraft=="function"?s.createElement("button",{type:"button",className:"cbt-btn","data-cbt-fill":"true",onClick:()=>t.setDraft({text:C,references:[]})},n("\u586B\u5165\u8F93\u5165\u6846","Put in composer")):null)):null,s.createElement("div",{className:"cbt-engine","data-cbt-engine":"true"},b===null?"":b.local?`${n("\u672C\u673A\u6A21\u578B","Local")} \xB7 ${b.model||"local"}${b.last?` \xB7 ${b.last.ms} ms`:""}`:`${n("\u5BBF\u4E3B\u6A21\u578B","Host model")}${b.last?` \xB7 ${b.last.ms} ms`:""}`),fe!==""?s.createElement("p",{className:"cbt-error","data-cbt-error":"true"},fe):null):D!==null?s.createElement("div",{className:"cbt-review","data-cbt-review":"true"},D.done?s.createElement("div",{className:"cbt-review-done"},s.createElement("div",{className:"cbt-review-title"},n("\u4ECA\u65E5\u590D\u4E60\u5B8C\u6210","Review done for today")),s.createElement("p",{className:"cbt-review-hint"},n("\u5361\u7247\u4F1A\u6309\u95F4\u9694\u81EA\u52A8\u5B89\u6392\u4E0B\u4E00\u6B21\u590D\u4E60\u3002","Cards are scheduled automatically for their next review.")),s.createElement("button",{type:"button",className:"cbt-primary","data-cbt-review-exit":"true",onClick:()=>{J(null),re()}},n("\u56DE\u5230\u6536\u85CF\u672C","Back to saved"))):s.createElement(s.Fragment,null,s.createElement("div",{className:"cbt-review-head"},s.createElement("span",{className:"cbt-review-progress","data-cbt-review-progress":"true"},D.index+1," / ",D.cards.length),s.createElement("button",{type:"button",className:"cbt-link",onClick:()=>{J(null),re()}},n("\u7ED3\u675F","End"))),s.createElement("div",{className:"cbt-review-card","data-cbt-review-card":"true"},s.createElement("div",{className:"cbt-review-word"},D.cards[D.index]?.source),D.revealed?s.createElement("div",{className:"cbt-review-answer","data-cbt-review-answer":"true"},D.cards[D.index]?.target):s.createElement("button",{type:"button",className:"cbt-primary","data-cbt-reveal":"true",onClick:()=>J({...D,revealed:!0})},n("\u663E\u793A\u7B54\u6848","Show answer"))),D.revealed?s.createElement("div",{className:"cbt-review-grades"},[["again",n("\u4E0D\u4F1A","Again")],["hard",n("\u6A21\u7CCA","Hard")],["good",n("\u4F1A\u4E86","Good")]].map(([c,w])=>s.createElement("button",{key:c,type:"button",className:"cbt-grade","data-cbt-grade":c,onClick:()=>{cn(c)}},w))):null)):s.createElement(s.Fragment,null,s.createElement("div",{className:"cbt-bar"},[["all",n("\u5168\u90E8","All")],["word",n("\u5355\u8BCD","Words")],["sentence",n("\u53E5\u5B50","Sentences")]].map(([c,w])=>s.createElement("button",{key:c,type:"button",className:"cbt-chip","data-cbt-kind":c,"aria-pressed":me===c?"true":"false",onClick:()=>{Ae(c),re(c,d)}},w)),s.createElement("span",{className:"cbt-spacer"}),s.createElement("a",{className:"cbt-link",href:`${xt}/favorites/export`,download:"favorites.md"},n("\u5BFC\u51FA Markdown","Export Markdown"))),s.createElement("input",{className:"cbt-search","data-cbt-search":"true",placeholder:n("\u641C\u7D22\u6536\u85CF","Search saved"),value:d,onChange:c=>{h(c.target.value),re(me,c.target.value)}}),s.createElement("div",{className:"cbt-list","data-cbt-favorites":"true"},E.length===0?s.createElement("p",{className:"cbt-empty"},n("\u8FD8\u6CA1\u6709\u6536\u85CF\u3002\u7FFB\u8BD1\u540E\u70B9\u300C\u6536\u85CF\u300D\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002","Nothing saved yet \u2014 translate something and press Save.")):E.map(c=>s.createElement("div",{className:"cbt-item",key:c.id,"data-cbt-item":c.id},s.createElement("div",{className:"cbt-item-source"},c.source),c.target?s.createElement("div",{className:"cbt-item-target"},c.target):null,s.createElement("div",{className:"cbt-item-foot"},s.createElement("span",{className:"cbt-item-kind"},c.kind==="word"?n("\u5355\u8BCD","Word"):n("\u53E5\u5B50","Sentence")),s.createElement("button",{type:"button",className:"cbt-item-remove",onClick:()=>{ln(c.id)},"aria-label":n("\u5220\u9664","Delete")},"\u2715"))))),fe!==""?s.createElement("p",{className:"cbt-error"},fe):null))}var $r=`
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
.cbt-review{display:flex;flex-direction:column;gap:12px;padding:4px 0}
.cbt-review-head{display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--dsw-alias-label-tertiary)}
.cbt-review-progress{font-variant-numeric:tabular-nums}
.cbt-review-card{
  display:flex;flex-direction:column;align-items:center;gap:14px;
  padding:26px 18px;border-radius:14px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay,#fff) 40%,transparent);
  text-align:center;
}
.cbt-review-word{font-size:26px;font-weight:600;letter-spacing:-0.01em;line-height:1.3}
.cbt-review-answer{font-size:14px;line-height:1.7;color:var(--dsw-alias-label-secondary);white-space:pre-wrap}
.cbt-review-grades{display:flex;gap:8px}
.cbt-grade{
  flex:1;height:34px;border-radius:10px;cursor:pointer;font-size:12.5px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-label-primary) 4%,transparent);
  color:var(--dsw-alias-label-primary);
}
.cbt-grade:hover{background:color-mix(in oklab,#635BFF 14%,transparent);border-color:color-mix(in oklab,#635BFF 40%,transparent)}
.cbt-grade[data-cbt-grade="good"]{background:color-mix(in oklab,#635BFF 16%,transparent);border-color:color-mix(in oklab,#635BFF 42%,transparent)}
.cbt-review-done{display:flex;flex-direction:column;align-items:center;gap:10px;padding:26px 16px;text-align:center}
.cbt-review-title{font-size:15px;font-weight:600}
.cbt-review-hint{margin:0;font-size:12px;line-height:1.6;color:var(--dsw-alias-label-secondary)}
.cbt-primary{
  align-self:center;height:32px;padding:0 16px;border-radius:9px;border:0;cursor:pointer;
  background:#635BFF;color:#fff;font-size:12.5px;font-weight:500;
}
.cbt-primary:hover{filter:brightness(1.06)}
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
/* Inside a <mark> the word inherits the highlight; no second underline. */
.cbt-word--head{text-decoration:none;color:inherit;font-weight:500}
.cbt-word--rel{text-decoration-color:color-mix(in oklab,#635BFF 30%,transparent)}
.cbt-word--phrase{text-decoration-color:color-mix(in oklab,#635BFF 30%,transparent);font-size:12.5px}
.cbt-sep{color:var(--dsw-alias-label-tertiary);text-decoration:none;pointer-events:none}
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
`;function _r({name:e}){let r={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return S.createElement("svg",{...r},S.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),S.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return S.createElement("svg",{...r},S.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),S.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),S.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return S.createElement("svg",{...r},S.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),S.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return S.createElement("svg",{...r},S.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),S.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return S.createElement("svg",{...r},S.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),S.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return S.createElement("svg",{...r},S.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),S.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),S.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"translate":return S.createElement("svg",{...r},S.createElement("path",{d:"M2.4 4.2h6M5.4 4.2v1.2c0 2.6-1.4 4.7-3.4 5.6"}),S.createElement("path",{d:"M3.9 8.4c.9 1.4 2.1 2.4 3.5 2.9"}),S.createElement("path",{d:"M9.4 13.6 11.6 8l2.2 5.6M10.2 11.9h2.8"}));case"slides":return S.createElement("svg",{...r},S.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),S.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return S.createElement("svg",{...r},S.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),S.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),S.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),S.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function ba(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let r=e.closest('[data-composer-card="true"]');if(r)return r}return document.querySelector('[data-composer-card="true"]')}function fa({t:e,locale:r,inputActions:t,onClose:a}){return S.createElement(De,{title:e("sheet.translate.title"),hint:e("sheet.translate.hint"),onClose:a,t:e,wide:!0},S.createElement(jr,{t:e,locale:r,inputActions:t}))}function Ur({inputActions:e,t:r,locale:t,sessionId:a=""}){let n=typeof e?.setDraft=="function",[l,i]=S.useState(!1),[o,p]=S.useState(null),[m,k]=S.useState(null),u=S.useRef(null),g=S.useRef(null),[v,x]=S.useState(null);S.useEffect(()=>{x(ba())},[]);let C=S.useCallback(()=>{let R=u.current?.getBoundingClientRect();R!=null&&k({right:Math.max(8,Math.round(window.innerWidth-R.right)),bottom:Math.max(8,Math.round(window.innerHeight-R.top)+8)})},[]);S.useLayoutEffect(()=>{l&&C()},[l,C]),S.useEffect(()=>{if(!l)return;let R=$=>{let B=$.target;B instanceof Node&&g.current?.contains(B)!==!0&&u.current?.contains(B)!==!0&&i(!1)},q=$=>{$.key==="Escape"&&($.preventDefault(),$.stopPropagation(),i(!1),u.current?.focus?.())},_=()=>i(!1);return document.addEventListener("pointerdown",R,!0),document.addEventListener("keydown",q,!0),window.addEventListener("resize",_),window.addEventListener("scroll",_,!0),()=>{document.removeEventListener("pointerdown",R,!0),document.removeEventListener("keydown",q,!0),window.removeEventListener("resize",_),window.removeEventListener("scroll",_,!0)}},[l]);let P=R=>{if(typeof R.sheet=="string"){i(!1),p(R.sheet);return}let q=gt(R.prompt,typeof t=="function"?t():"zh");try{e.setDraft({text:q,references:[]})}catch{try{e.setDraft(q)}catch{}}i(!1),u.current?.focus?.()},b=r("quick.label"),T=typeof t=="function"?t():"zh",I=S.createElement("button",{ref:u,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":l?"true":"false","aria-label":r("quick.aria"),title:r(n?"quick.aria":"quick.disabled"),disabled:!n,onMouseDown:R=>R.preventDefault(),onClick:()=>i(R=>!R)},S.createElement(_r,{name:"grid"}),S.createElement("span",{className:"cbp-more-label"},b)),L=l&&m!==null?(0,yt.createPortal)(S.createElement("div",{ref:g,className:"cbp-quick-panel",role:"menu","aria-label":r("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${m.right}px`,bottom:`${m.bottom}px`}},S.createElement("div",{className:"cbp-quick-head"},S.createElement("span",{className:"cbp-quick-title"},r("quick.title")),S.createElement("span",{className:"cbp-quick-hint"},r("quick.hint"))),S.createElement("div",{className:"cbp-quick-grid"},Rr.map(R=>S.createElement("button",{key:R.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":R.id,onClick:()=>P(R)},S.createElement("span",{className:"cbp-quick-icon"},S.createElement(_r,{name:R.icon})),S.createElement("span",{className:"cbp-quick-name"},gt({zh:R.zh,en:R.en},T)))))),document.body):null,N=R=>{typeof R=="string"&&R.trim()!==""&&Er(e,R),p(null)};return S.createElement(S.Fragment,null,S.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),v!==null?(0,yt.createPortal)(I,v):null,L,o==="transcribe"?S.createElement(Fr,{t:r,locale:t,onClose:()=>p(null),onFill:N}):null,o==="write"?S.createElement(Pr,{t:r,locale:t,sessionId:a,onClose:()=>p(null),onFill:N}):null,o==="deck"?S.createElement(Ir,{t:r,locale:t,sessionId:a,onClose:()=>p(null)}):null,o==="video"?S.createElement(Lr,{t:r,onClose:()=>p(null),onFill:N}):null,o==="translate"?S.createElement(fa,{t:r,locale:t,inputActions:e,onClose:()=>p(null)}):null)}var Wr=`
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
`;var Qr="/api/chatbox-pet/boost",Hr=4e3,ha=12e4,ma=24,ga=8e3,Vr=25e3;function Yr(e){return{set:typeof e?.set=="function"?e.set:(r,t)=>setTimeout(r,t),clear:typeof e?.clear=="function"?e.clear:r=>clearTimeout(r)}}function St(e){let r=typeof e=="string"?e:"";return r.length>Hr?r.slice(0,Hr):r}function Kr(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function _e(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(r=>({...r})):[]}}function wt(e){if(!Array.isArray(e))return[];let r=[];for(let t of e){if(t===null||typeof t!="object")continue;let a=typeof t.id=="string"?t.id.trim():"",n=Number(t.count);a===""||!Number.isFinite(n)||n<=0||r.push({id:a,label:typeof t.label=="string"&&t.label.trim()!==""?t.label.trim():a,count:Math.round(n)})}return r}function Ue(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function ce(e,r,t){let a=new Error(typeof r=="string"&&r!==""?r:e);return a.code=e,t!==void 0&&(a.cause=t),a}function Gr(e){let r=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",t=typeof e?.message=="string"&&e.message!==""&&e.message!==r?e.message:void 0;return t===void 0?{code:r}:{code:r,message:t}}function xa(e){let r=[],t=e;for(;;){let a=/(?:\r?\n){2}/.exec(t);if(a===null)break;r.push(t.slice(0,a.index)),t=t.slice(a.index+a[0].length)}return{frames:r,rest:t}}function Jr(e){let r=[];for(let t of e.split(`
`)){let a=t.trim();a===""||a.startsWith(":")||a.startsWith("data:")&&r.push(a.slice(5).trimStart())}if(r.length===0)return null;try{let t=JSON.parse(r.join(`
`));return t!==null&&typeof t=="object"&&Array.isArray(t)===!1?t:null}catch{return null}}async function vt(e){try{return await e.json()}catch{return null}}function kt(e,r){if(e===null||typeof e!="object")throw ce("host",void 0,r);if(e.ok!==!0){let n=typeof e.error?.message=="string"?e.error.message.trim():"";throw ce(typeof e.error?.code=="string"?e.error.code:"host",n===""?void 0:n)}let t=e.result,a=typeof t?.prompt=="string"?t.prompt.trim():"";if(a==="")throw ce("empty");return{prompt:a,mode:t.mode==="compose"?"compose":"improve",sources:wt(t.sources),elapsedMs:Number.isFinite(t.elapsedMs)?Math.max(0,Number(t.elapsedMs)):null,cached:t.cached===!0}}async function ya(e){let{draft:r,mode:t,locale:a,signal:n,onEvent:l,idleMs:i=Vr,sessionId:o=""}=e,p=o===""?{}:{sessionId:o},m=typeof e.fetch=="function"?e.fetch:globalThis.fetch,k=Yr(e.timers),u=new AbortController,g=()=>u.abort();n!==void 0&&(n.aborted?u.abort():n.addEventListener("abort",g,{once:!0}));let v=!1,x=null,C=()=>{x!==null&&k.clear(x),x=k.set(()=>{v=!0,u.abort()},i)},P=!1;try{C();let b;try{b=await m(Qr,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:St(r),mode:t,locale:a,stream:!0,...p}}),signal:u.signal})}catch(R){throw v?ce("timeout",void 0,R):Ue(R)?R:ce("network",void 0,R)}if(v)throw ce("timeout");if(b===null||typeof b!="object")throw ce("host");if(b.ok!==!0){let R=await vt(b);if(b.status>=400)throw ce("host",void 0,b.status);let q=kt(R,b.status);l({type:"replace",text:q.prompt}),l({type:"done",result:q});return}let T=typeof b.headers?.get=="function"?String(b.headers.get("content-type")??""):"";if(b.body===null||b.body===void 0||typeof b.body.getReader!="function"||!T.includes("text/event-stream")){let R=kt(await vt(b),b.status);l({type:"replace",text:R.prompt}),l({type:"done",result:R});return}let I=b.body.getReader(),L=new TextDecoder,N="";for(;!P;){let R;try{R=await I.read()}catch(_){throw v?ce("timeout",void 0,_):Ue(_)?_:ce("stream",void 0,_)}if(R.done===!0)break;C(),N+=L.decode(R.value,{stream:!0});let q=xa(N);N=q.rest;for(let _ of q.frames){let $=Jr(_);if($!==null&&l($)==="stop"){P=!0;break}}}if(!P){let R=N.trim();if(R!==""){let q=Jr(R);q!==null&&l(q)}}if(P)try{await I.cancel()}catch{}}finally{x!==null&&k.clear(x),n!==void 0&&n.removeEventListener("abort",g)}}async function wa(e){let{draft:r,mode:t,locale:a,signal:n,sessionId:l=""}=e,i=typeof e.fetch=="function"?e.fetch:globalThis.fetch,o;try{o=await i(Qr,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:St(r),mode:t,locale:a,stream:!1,...l===""?{}:{sessionId:l}}}),signal:n})}catch(p){throw Ue(p)?p:ce("network",void 0,p)}if(o===null||typeof o!="object")throw ce("host");if(o.ok!==!0&&o.status>=400)throw ce("host",void 0,o.status);return kt(await vt(o),o.status)}function va(e={}){let r=typeof e.fetch=="function"?e.fetch:void 0,t=typeof e.now=="function"?e.now:()=>Date.now(),a=Yr(e.timers),n=Number.isFinite(e.idleMs)?Number(e.idleMs):Vr,l=Number.isFinite(e.undoMs)?Number(e.undoMs):ga,i=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):ha,o=new WeakMap,p=new WeakMap,m=new WeakMap,k=new WeakMap,u=new WeakMap,g="",v=new Set,x=new Map,C=Kr(),P=_e(null),b=null,T=0,I=0,L=null,N=null,R=()=>{for(let d of[...v])try{d()}catch(h){console.error("[prompt-boost] a store listener failed:",h)}},q=d=>d!=null&&(typeof d=="object"||typeof d=="function");function _(d){let h=q(d)?d:N;if(!q(h))return C;let F=o.get(h);return F===void 0&&(F=Kr(),o.set(h,F)),F}function $(d,h){let F=q(d)?d:N,K={..._(F),...h};return q(F)?o.set(F,K):C=K,R(),K}function B(d){let h=q(d)?d:N;return q(h)?m.get(h)??_e(null):P}function Re(d){return q(d)?d:N}function le(d){let h=q(d)?d:N;if(!q(h))return"default";let F=p.get(h);return F===void 0&&(T+=1,F=`s${T}`,p.set(h,F)),F}function Z(d){return`prompt-boost-panel-${le(d)}`}function we(d,h,F){return`${le(d)}\0${h}\0${F}`}function he(d){let h=x.get(d);return h===void 0?null:t()-h.at>i?(x.delete(d),null):(x.delete(d),x.set(d,h),h.result)}function be(d,h){for(x.delete(d),x.set(d,{at:t(),result:h});x.size>ma;){let F=x.keys().next();if(F.done===!0)break;x.delete(F.value)}}function Ce(){if(L===null)return;let d=L;L=null;try{d.controller.abort()}catch{}}function Y(d){let h=q(d)?d:N,F=q(h)?k.get(h):b;F!=null&&a.clear(F),q(h)?k.delete(h):b=null}function fe(d){Y(d);let h=null;h=a.set(()=>{let A=_(d);A.undo!==null&&$(d,{undo:null,phase:A.phase==="applied"?"idle":A.phase,applied:"",prompt:A.phase==="applied"?"":A.prompt,sources:A.phase==="applied"?[]:A.sources})},l);let F=q(d)?d:N;q(F)?k.set(F,h):b=h}function W(d,h,F){let A=Re(d),K=_e(B(d)),G=!1;if(q(A)&&typeof A.setDraft=="function")try{A.setDraft({text:h.prompt,references:[]}),G=!0}catch{try{A.setDraft(h.prompt),G=!0}catch{G=!1}}if(!G){$(d,{phase:"error",mode:h.mode,prompt:h.prompt,sources:h.sources,elapsedMs:h.elapsedMs,cached:h.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}$(d,{phase:"applied",mode:h.mode,prompt:h.prompt,applied:h.prompt,sources:h.sources,elapsedMs:h.elapsedMs,cached:h.cached===!0,error:null,undo:{draft:K,at:t()},expanded:!1}),fe(d),be(F,h),oe.play("boostDone")}async function ve(d,h,F){let{draft:A,mode:K,locale:G,key:ae,sessionId:pe}=F,re=!1,ge=!1,Se=()=>L===h&&h.controller.signal.aborted===!1,Xe=H=>{if(!Se())return"stop";if(re=!0,H.type==="sources"){let ee=_(d);$(d,{sources:wt(H.sources),mode:H.mode==="compose"?"compose":ee.mode});return}if(H.type==="delta"){if(typeof H.text!="string"||H.text==="")return;let ee=_(d);$(d,{phase:"streaming",prompt:ee.prompt+H.text});return}if(H.type==="replace"){if(typeof H.text!="string")return;let ee=_(d),We=ee.phase==="ready"||H.text===""?ee.phase:"streaming";$(d,{prompt:H.text,phase:We});return}if(H.type==="done"){ge=!0;let ee={prompt:typeof H.result?.prompt=="string"?H.result.prompt.trim():_(d).prompt.trim(),mode:H.result?.mode==="compose"?"compose":K,sources:wt(H.result?.sources??_(d).sources),elapsedMs:Number.isFinite(H.result?.elapsedMs)?Math.max(0,Number(H.result.elapsedMs)):null,cached:H.result?.cached===!0};return ee.prompt===""?($(d,{phase:"error",error:{code:"empty"}}),oe.play("boostFail"),"stop"):(W(d,ee,ae),"stop")}if(H.type==="error"){ge=!0;let ee=typeof H.message=="string"&&H.message.trim()!==""?H.message.trim():void 0;return $(d,{phase:"error",error:ee===void 0?{code:"unknown"}:{code:"host",message:ee}}),"stop"}};try{if(await ya({draft:A,mode:K,locale:G,sessionId:pe,signal:h.controller.signal,onEvent:Xe,fetch:r,timers:a,idleMs:n}),ge)return;if(re)throw ce("stream");await Pe(d,h,{draft:A,mode:K,locale:G,key:ae,sessionId:pe})}catch(H){if(h.controller.signal.aborted||Ue(H)||!Se())return;if(re){$(d,{phase:"error",error:Gr(H)}),oe.play("boostFail");return}try{await Pe(d,h,{draft:A,mode:K,locale:G,key:ae,sessionId:pe})}catch(ee){if(h.controller.signal.aborted||Ue(ee)||!Se())return;$(d,{phase:"error",error:Gr(ee)}),oe.play("boostFail")}}finally{L===h&&(L=null)}}async function Pe(d,h,F){let A=await wa({draft:F.draft,mode:F.mode,locale:F.locale,signal:h.controller.signal,fetch:r,sessionId:F.sessionId??""});L!==h||h.controller.signal.aborted||W(d,A,F.key)}function ke(d,h){let F=typeof h=="string"?h:"";F!==""&&(g=F,q(d)&&u.set(d,F))}function Ie(d){return q(d)?u.get(d)??g:g}function Te(d,h){let F=typeof h?.draft=="string"?h.draft:"",A=Array.isArray(h?.occurrences)?h.occurrences:[],K=B(d);if(K.text===F&&K.references.length===A.length)return;let G={text:F,references:A.map(pe=>({...pe}))},ae=q(d)?d:N;q(ae)?m.set(ae,G):P=G}function y(d,h={}){q(d)&&(N=d);let F=h.locale==="en"?"en":"zh",A=h.force===!0,K=B(d),G=St(K.text),ae=G.trim()===""?"compose":"improve",pe=we(d,ae,G);if(Ce(),Y(d),!A){let Se=he(pe);if(Se!==null){W(d,{...Se,cached:!0},pe);return}}I+=1;let re={seq:I,actions:d,controller:new AbortController};L=re;let ge=_(d);$(d,{phase:"running",mode:ae,seed:G,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:ge.phase==="idle"&&ge.undo===null?!1:ge.expanded}),oe.play("boostStart"),ve(d,re,{draft:G,mode:ae,locale:F,key:pe,sessionId:Ie(d)})}function E(d,h={}){y(d,{locale:h.locale,force:!0})}function O(d){let h=_(d);if(h.phase!=="ready")return!1;let F=h.prompt.trim();if(F==="")return!1;let A=Re(d);if(!q(A)||typeof A.setDraft!="function")return $(d,{phase:"error",error:{code:"apply"}}),!1;let K=_e(B(d)),G=!1;try{A.setDraft({text:F,references:[]}),G=!0}catch{try{A.setDraft(F),G=!0}catch{G=!1}}return G?(Y(d),$(d,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:K,at:t()},expanded:!1}),fe(d),!0):($(d,{phase:"error",error:{code:"apply"}}),!1)}function D(d){let h=_(d);if(h.undo===null)return!1;let F=Re(d),A=_e(h.undo.draft),K=!1;if(q(F)&&typeof F.setDraft=="function")try{F.setDraft({text:A.text,references:A.references}),K=!0}catch{try{F.setDraft(A.text),K=!0}catch{K=!1}}return Y(d),$(d,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),K}function J(d){_(d).expanded!==!1&&$(d,{expanded:!1})}function X(d){let h=_(d);h.phase==="idle"&&h.undo===null||h.expanded===!0||$(d,{expanded:!0})}function Me(d){_(d).expanded===!0?J(d):X(d)}function me(d){let h=q(d)?d:N;L!==null&&L.actions===h&&Ce(),Y(d),$(d,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Ae(d,h){let F=_(d);F.phase==="streaming"&&(typeof h!="string"||h===F.prompt||$(d,{prompt:h}))}return{subscribe(d){return typeof d!="function"?()=>{}:(v.add(d),()=>{v.delete(d)})},getState:_,panelId:Z,sessionKey:le,setDraftMirror:Te,setSessionId:ke,start:y,retry:E,apply:O,undo:D,expand:X,collapse:J,toggle:Me,dismiss:me,edit:Ae}}var Ye=va();var Xr=`
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
`;var ka="@local/chatbox-pet",tn=["slots","locale"];function Zr(){return(0,en.useSyncExternalStore)(de.subscribe,de.getSnapshot,de.getSnapshot)}function rn(e){let r=e.locale.bind(Ne),t=e.locale.bind($e);e.effect(()=>e.locale.register(Ne,{zh:Ft,en:Pt}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register($e,{zh:kr,en:Sr}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let i=document.querySelector('style[data-plugin="chatbox-pet"]');i!==null&&i.remove();let o=document.createElement("style");return o.setAttribute("data-plugin","chatbox-pet"),o.textContent=`${sr}
${Xr}
${pr}
${Wr}
${qr}
${$r}`,document.head.appendChild(o),()=>{o.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{de.refresh().then(i=>{Mt(i?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let i=()=>oe.unlock();return window.addEventListener("pointerdown",i,{capture:!0}),window.addEventListener("keydown",i,{capture:!0}),()=>{window.removeEventListener("pointerdown",i,{capture:!0}),window.removeEventListener("keydown",i,{capture:!0})}},"chatbox-pet: sound unlock");let a=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:ka,order:1,label:()=>r("label"),locale:Ne,inject:i=>({sessionId:i})},i=>{if(Zr().pet===!1)return null;let p=typeof i?.sessionId=="string"&&i.sessionId!==""?i.sessionId:typeof i?.session?.id=="string"?i.session.id:"";return p===""?null:ye.createElement(ir,{sessionId:p,t:r,useInput:i?.useInput,locale:a})}));let n=i=>o=>Zr().boost===!1?null:i(o);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>t("button.label"),locale:$e},n(i=>ye.createElement(mr,{...i,store:Ye,t,locale:a})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>r("merge.label")(2),locale:Ne,inject:i=>({sessionId:i})},i=>{let o=typeof i?.sessionId=="string"?i.sessionId:"";return o===""?null:ye.createElement(vr,{sessionId:o,sessions:e.get("sessions"),t:r,locale:a,onNotice:p=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:o,text:p,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:$e},n(i=>ye.createElement(zr,{...i,store:Ye,t,locale:a})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>r("quick.label"),locale:Ne,inject:i=>({sessionId:i})},i=>ye.createElement(Ur,{inputActions:i?.inputActions,sessionId:typeof i?.sessionId=="string"?i.sessionId:"",t:r,locale:a})));function l({sessionId:i,session:o}){let p=typeof i=="string"&&i!==""?i:typeof o?.id=="string"?o.id:"";return ye.useEffect(()=>{p!==""&&Ye.setSessionId(null,p)},[p]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>r("label"),locale:Ne,inject:i=>({sessionId:i})},i=>ye.createElement(l,{sessionId:i?.sessionId,session:i?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:Ne},()=>ye.createElement(dr,{t:r})))}
		return module.exports;
	}
});
