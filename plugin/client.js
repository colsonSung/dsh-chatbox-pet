window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var ya=Object.create;var Ke=Object.defineProperty;var wa=Object.getOwnPropertyDescriptor;var va=Object.getOwnPropertyNames;var ka=Object.getPrototypeOf,Sa=Object.prototype.hasOwnProperty;var Na=(e,r,t)=>()=>{if(t)throw t[0];try{return e&&(r=e(e=0)),r}catch(n){throw t=[n],n}};var Tt=(e,r)=>{for(var t in r)Ke(e,t,{get:r[t],enumerable:!0})},Mt=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of va(r))!Sa.call(e,a)&&a!==t&&Ke(e,a,{get:()=>r[a],enumerable:!(n=wa(r,a))||n.enumerable});return e};var Ne=(e,r,t)=>(t=e!=null?ya(ka(e)):{},Mt(r||!e||!e.__esModule?Ke(t,"default",{value:e,enumerable:!0}):t,e)),za=e=>Mt(Ke({},"__esModule",{value:!0}),e);var jr={};Tt(jr,{transcribe:()=>kn});async function kn(e){let r=await fetch("/api/chatbox-pet/transcribe?name=voice.webm",{method:"POST",headers:{"content-type":e.type||"audio/webm"},body:e}),t;try{t=await r.json()}catch{throw new Error(`\u8F6C\u5199\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${r.status}\uFF09`)}if(t?.ok!==!0)throw new Error(t?.error?.message??"\u8F6C\u5199\u5931\u8D25");let n=t.result?.text??"";if(n.trim()==="")throw new Error("\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF0C\u8BF7\u518D\u8BF4\u4E00\u6B21");return n}var _r=Na(()=>{});var Dn={};Tt(Dn,{apply:()=>ca,inject:()=>sa});module.exports=za(Dn);var ze=Ne(require("react"),1);var ot="chatboxPet.sound",Et=!0,Ra=.3,Ca=1e3,Ta=7,nt={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},$n=Object.freeze(Object.keys(nt)),Ma={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function Ft(e,r){return e==="error"?r==="cancelled"?"cancelled":"error":Ma[e]}function Oe(e){try{return e?.getItem(ot)==="off"?"off":"on"}catch{return"on"}}function It(e){Et=e!==!1}function it(e,r){try{e?.setItem(ot,r==="off"?"off":"on")}catch{}}function Pt(e){let r=Oe(e)==="on"?"off":"on";return it(e,r),r}function Pe(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function Ea(e){let r=2166136261,t=String(e??"");for(let n=0;n<t.length;n+=1)r^=t.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function Fa(e){let r=e.now??(()=>Date.now()),t=null,n=null,a=!1,s=new Map,i=new Map,o=0;function p(){if(!a)try{let d=e.createContext();if(d==null)return;let b=d.createGain();if(b.gain.value=Ra,b.connect(d.destination),d.state==="suspended"&&typeof d.resume=="function"){let m=d.resume();m!==void 0&&typeof m.catch=="function"&&m.catch(()=>{})}t=d,n=b,a=!0}catch{t=null,n=null,a=!1}}function f(d,b,m){if(b<=1)return 0;if(typeof m=="string"&&m!=="")return Ea(m)%b;let x=(i.get(d)??0)%b;return i.set(d,x+1),x}function k(d,b){if(e.getPref()!=="on"||!a||t===null||n===null||!e.isVisible())return!1;let m=nt[d];if(m===void 0)return!1;let x=r(),M=s.get(d);if(M!==void 0&&x-M<Ca)return!1;s.set(d,x);let A=Array.isArray(m.variants)?m.variants:[];if(A.length===0)return!1;let h=A[f(d,A.length,b)];o=(o+1)%7;let C=(o-3)*(Ta/3);try{return Ia(t,n,h,C),!0}catch{return!1}}return{play:k,unlock:p,isUnlocked:()=>a,recipeNames:()=>Object.keys(nt)}}function Ia(e,r,t,n){let a=e.currentTime;for(let s of t.notes){let i=a+s.at,o=e.createOscillator(),p=e.createGain();o.type=s.type,o.frequency.setValueAtTime(s.freq,i),typeof s.slideTo=="number"&&o.frequency.exponentialRampToValueAtTime(s.slideTo,i+s.dur),n!==0&&typeof o.detune=="object"&&o.detune!==null&&o.detune.setValueAtTime(n,i),p.gain.setValueAtTime(1e-4,i),p.gain.exponentialRampToValueAtTime(s.level,i+.008),p.gain.exponentialRampToValueAtTime(1e-4,i+s.dur),o.connect(p),p.connect(r),o.start(i),o.stop(i+s.dur+.02)}}function Pa(){return{getPref:()=>{let e=Pe()?.getItem(ot);return e==="on"||e==="off"?e:Et?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var ie=Fa(Pa());var ia=require("react");var Me="chatboxPet",At={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","sheet.close":"\u5173\u95ED","sheet.resize":"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F","sheet.fill":"\u586B\u5165\u8F93\u5165\u6846","sheet.again":"\u518D\u6765\u4E00\u6B21","sheet.working":"\u6B63\u5728\u751F\u6210\u2026","sheet.transcribe.title":"\u5F55\u97F3\u8F6C\u5199","sheet.transcribe.hint":"\u5F55\u97F3\u53EA\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u97F3\u9891\u4E0D\u4E0A\u4F20\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6216\u89C6\u9891\u6587\u4EF6\u3002","sheet.transcribe.idle":"\u70B9\u4E00\u4E0B\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.start":"\u5F00\u59CB\u5F55\u97F3","sheet.transcribe.stop":"\u505C\u6B62\u5E76\u8F6C\u5199","sheet.transcribe.working":"\u6B63\u5728\u8F6C\u5199\u2026","sheet.transcribe.pick":"\u6216\u9009\u62E9\u4E00\u4E2A\u97F3\u9891/\u89C6\u9891\u6587\u4EF6","sheet.transcribe.denied":"\u6D4F\u89C8\u5668\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650\uFF1A\u5728\u5730\u5740\u680F\u7684\u6743\u9650\u8BBE\u7F6E\u91CC\u5141\u8BB8\u9EA6\u514B\u98CE\uFF0C\u6216\u76F4\u63A5\u9009\u4E00\u4E2A\u97F3\u9891\u6587\u4EF6\u3002","sheet.transcribe.meta":(e,r,t)=>`${e} \u6BB5 \xB7 \u8BED\u8A00 ${r} \xB7 \u65F6\u957F ${Math.round(t)} \u79D2`,"sheet.transcribe.empty":"\uFF08\u6CA1\u6709\u8BC6\u522B\u5230\u8BED\u97F3\uFF09","sheet.write.title":"\u5E2E\u6211\u5199\u4F5C","sheet.write.hint":"\u5148\u5199\u4E3B\u9898\uFF0C\u6A21\u578B\u5199\u597D\u540E\u53EF\u4EE5\u6539\uFF0C\u518D\u81EA\u5DF1\u53D1\u9001\u3002","sheet.write.topic":"\u5199\u4EC0\u4E48\uFF1F\u4F8B\u5982\uFF1AQ2 \u6B27\u6D32\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u4E0A\u7EBF\u8FDB\u5C55","sheet.write.tone":"\u8BED\u6C14\uFF08\u53EF\u9009\uFF09\uFF1A\u7B80\u6D01\u3001\u6B63\u5F0F\u3001\u6709\u8BF4\u670D\u529B\u2026","sheet.write.go":"\u5199\u4E00\u7248","sheet.deck.title":"PPT \u751F\u6210","sheet.deck.hint":"\u7ED9\u4E00\u53E5\u4E3B\u9898\uFF0C\u6A21\u578B\u51FA\u5927\u7EB2\u3001\u672C\u673A\u6E32\u67D3\u6210 .pptx\uFF1B\u751F\u6210\u540E\u53EF\u4EE5\u4E0B\u8F7D\u3002","sheet.deck.topic":"\u4E3B\u9898\uFF0C\u4F8B\u5982\uFF1A\u652F\u4ED8\u4EA7\u54C1\u5B63\u5EA6\u590D\u76D8","sheet.deck.audience":"\u53D7\u4F17\uFF08\u53EF\u9009\uFF09\uFF1A\u7BA1\u7406\u5C42 / \u5BA2\u6237 / \u56E2\u961F","sheet.deck.go":"\u751F\u6210 PPT","sheet.deck.working":"\u6B63\u5728\u5199\u5927\u7EB2\u5E76\u6392\u7248\u2026","sheet.deck.meta":e=>`${e} \u9875 \xB7 16:9 \xB7 \u53EF\u7F16\u8F91 PowerPoint`,"sheet.deck.download":"\u4E0B\u8F7D .pptx","sheet.translate.title":"\u7FFB\u8BD1","sheet.translate.hint":"\u6587\u5B57\u3001\u8BED\u97F3\u6216\u6587\u4EF6\u90FD\u80FD\u7FFB\uFF1B\u8BD1\u6587\u53EF\u4EE5\u6536\u85CF\u8FDB\u751F\u8BCD\u672C\uFF0C\u6216\u76F4\u63A5\u586B\u8FDB\u8F93\u5165\u6846\u3002","sheet.video.title":"\u89C6\u9891\u7406\u89E3","sheet.video.hint":"\u8D34\u4E00\u6761\u89C6\u9891\u94FE\u63A5\uFF0C\u6216\u5148\u628A\u89C6\u9891\u62D6\u8FDB\u8F93\u5165\u6846\u518D\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u3002","sheet.video.placeholder":"YouTube / X / Bilibili \u94FE\u63A5\uFF08\u53EF\u7559\u7A7A\uFF09","sheet.video.go":"\u586B\u5165\u6307\u4EE4","sheet.video.prompt":"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002","sheet.video.promptWith":e=>`\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF1A${e}\u3002\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\uFF0C\u5E76\u6309\u65F6\u95F4\u7801\u5217\u51FA\u5173\u952E\u7247\u6BB5\u3002`,"merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.labelBatch":(e,r,t)=>`\u5408\u5E76\u524D ${e} \u6761\uFF08\u5171 ${r} \u6761\uFF0C\u5206 ${t} \u6279\uFF09`,"merge.labelSkipped":(e,r)=>`\u5408\u5E76 ${e} \u6761\u6587\u5B57\u6D88\u606F\uFF08${r} \u6761\u542B\u56FE\u7247\uFF0C\u4E0D\u53C2\u4E0E\u5408\u5E76\uFF09`,"merge.labelImages":(e,r)=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F\uFF08\u542B ${r} \u5F20\u56FE\u7247\uFF09`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.attachments":"\u542B\u56FE\u7247\u7684\u6D88\u606F\u4E0D\u80FD\u8FD9\u6837\u5408\u5E76\uFF0C\u8BF7\u91CD\u8BD5","merge.empty":"\u8FD9\u4E9B\u6D88\u606F\u6CA1\u6709\u53EF\u5408\u5E76\u7684\u6587\u5B57","merge.partial":"\u5408\u5E76\u540E\u7684\u6D88\u606F\u5DF2\u8FDB\u5165\u961F\u5217\uFF0C\u4F46\u6709\u51E0\u6761\u539F\u6D88\u606F\u6CA1\u5220\u6389\uFF0C\u8BF7\u624B\u52A8\u5220\u9664","merge.tooManyImages":e=>`\u4E00\u6B21\u6700\u591A\u5408\u5E76 ${e} \u5F20\u56FE\u7247`},Lt={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","sheet.close":"Close","sheet.resize":"Drag to resize","sheet.fill":"Put in composer","sheet.again":"Again","sheet.working":"Working\u2026","sheet.transcribe.title":"Transcribe audio","sheet.transcribe.hint":"Audio is transcribed on this machine and never uploaded. You can also pick an audio or video file.","sheet.transcribe.idle":"Click to record","sheet.transcribe.start":"Start recording","sheet.transcribe.stop":"Stop and transcribe","sheet.transcribe.working":"Transcribing\u2026","sheet.transcribe.pick":"or pick an audio/video file","sheet.transcribe.denied":"No microphone permission: allow it in the address bar, or pick an audio file instead.","sheet.transcribe.meta":(e,r,t)=>`${e} segments \xB7 ${r} \xB7 ${Math.round(t)}s`,"sheet.transcribe.empty":"(no speech detected)","sheet.write.title":"Write for me","sheet.write.hint":"Give it a topic; edit the draft, then send it yourself.","sheet.write.topic":"What to write? e.g. Q2 update on European local payment methods","sheet.write.tone":"Tone (optional): concise, formal, persuasive\u2026","sheet.write.go":"Write a draft","sheet.deck.title":"Generate slides","sheet.deck.hint":"One topic in, an outline from the model, a .pptx rendered here \u2014 then download it.","sheet.deck.topic":"Topic, e.g. Payment product quarterly review","sheet.deck.audience":"Audience (optional): leadership / customers / team","sheet.deck.go":"Generate deck","sheet.deck.working":"Outlining and laying out\u2026","sheet.deck.meta":e=>`${e} slides \xB7 16:9 \xB7 editable PowerPoint`,"sheet.deck.download":"Download .pptx","sheet.translate.title":"Translate","sheet.translate.hint":"Text, voice or a document \u2014 and every translation can go into the saved list or the composer.","sheet.video.title":"Read a video","sheet.video.hint":"Paste a link, or drop the video into the composer first and then press the button.","sheet.video.placeholder":"YouTube / X / Bilibili link (optional)","sheet.video.go":"Fill the instruction","sheet.video.prompt":"Use video_read on this video: summarise what it says, who speaks, and list the key moments with timestamps.","sheet.video.promptWith":e=>`Use video_read on this video: ${e}. Summarise what it says, who speaks, and list the key moments with timestamps.`,"merge.label":e=>`Merge ${e} queued messages`,"merge.labelBatch":(e,r,t)=>`Merge the first ${e} (${r} in ${t} batches)`,"merge.labelSkipped":(e,r)=>`Merge ${e} text messages (${r} with an image stay queued)`,"merge.labelImages":(e,r)=>`Merge ${e} queued messages (${r} images)`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue","merge.attachments":"A message with an image cannot be merged this way; try again","merge.empty":"These messages have no text to merge","merge.partial":"The merged message is queued, but some originals could not be removed; delete them","merge.tooManyImages":e=>`Merge at most ${e} images at once`};var F=Ne(require("react"),1);var Aa=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],La={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},Dt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],st={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},_n=[...Dt.map(e=>e.id),"fallback"];function ct(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Bt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function qt(e){let r=Bt(e);if(r==="")return null;for(let t of Aa){let n=/^[a-z ]+$/.test(t),s=(n?new RegExp(`(^|[^a-z])${ct(t).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(ct(t))).exec(r);if(s===null)continue;let i=s.index+(n?s[1].length:0),o=i+(n?t.replace(/ /g," ").length:t.length),p=`${r.slice(0,i)} ${r.slice(o)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:t,rest:p}}return null}function qa(e){let r=2166136261,t=String(e??"");for(let n=0;n<t.length;n+=1)r^=t.charCodeAt(n),r=Math.imul(r,16777619);return r>>>0}function Da(e){let r=Bt(e);if(r==="")return"fallback";for(let t of Dt){for(let n of t.zh)if(r.includes(n))return t.id;for(let n of t.en)if(new RegExp(`(^|[^a-z])${ct(n).replace(/ /g,"\\s+")}([^a-z]|$)`).test(r))return t.id}return"fallback"}function $t(e,r){let t=Array.isArray(e)?e.filter(n=>typeof n=="string"&&n!==""):[];return t.length===0?"":t[qa(r)%t.length]}function Ba(e,r={}){let t=st[e]??st.fallback,n=r.locale==="en"?"en":"zh",a=typeof r.seed=="string"&&r.seed!==""?r.seed:String(e);return{intent:st[e]===void 0?"fallback":e,clip:t.clip,sound:t.sound,line:$t(t[n],a)}}function Ot(e,r="zh"){let t=String(e??"");return/[\u4e00-\u9fff]/.test(t)?"zh":/[a-z]/i.test(t)||r==="en"?"en":"zh"}function jt(e={}){let r=e.locale==="en"?"en":"zh";return $t(La[r],e.seed??"wake")}function _t(e={}){let r=typeof e.now=="function"?e.now:()=>Date.now(),t=Number.isFinite(e.debounceMs)?e.debounceMs:700,n=Number.isFinite(e.holdMs)?e.holdMs:15e3,a=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,s=!1,i="",o="",p=0,f=0;function k(m){let x=qt(m);return x===null?s?(s=!1,i="",o="",{kind:"off"}):null:(p=r(),s?null:(s=!0,i=x.wake,o=x.rest,p=r(),f=0,{kind:"wake",wake:x.wake,digest:x.rest}))}function d(m,x={}){if(!s)return null;let M=qt(m);if(M===null)return s=!1,{kind:"off"};let A=`${M.wake}\0${M.rest}`;if(A===o)return null;let h=r(),C=h-f;if(C<a)return{kind:"cooldown",retryInMs:a-C};o=A,f=h,p=h;let T=Da(M.rest);return{kind:"reply",...Ba(T,{...x,seed:A}),digest:A}}function b(){return!s||r()-p<n?null:(s=!1,i="",o="",{kind:"off"})}return{observe:k,settle:d,expire:b,isActive:()=>s,debounceMs:t,holdMs:n,wakeWord:()=>i}}var U=Ne(require("react"),1),Zt=require("react-dom");var Ut=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Qe=60;function Wt(e,r){let t=r==="en"?"en":"zh";return typeof e?.[t]=="string"?e[t]:""}function je(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=Qe?r:t.slice(0,Qe).join("")}function Ht(e,r,t,n=8){let s=Number.isFinite(r?.width)?r.width:0,i=Number.isFinite(r?.height)?r.height:0,o=Number.isFinite(t?.width)?t.width:0,p=Number.isFinite(t?.height)?t.height:0,f=(Number.isFinite(e?.right)?e.right:0)-s;f<8&&(f=Number.isFinite(e?.left)?e.left:8);let k=(Number.isFinite(e?.top)?e.top:0)-i-n;k<8&&(k=(Number.isFinite(e?.bottom)?e.bottom:0)+n);let d=Math.max(8,o-s-8),b=Math.max(8,p-i-8);return{left:Math.min(Math.max(f,8),d),top:Math.min(Math.max(k,8),b)}}var lt=["topic","reminder","recall","nudge","encourage","tease","chitchat"],Gt={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Kt=9e3,$a=24e4,pt=.05;function Qt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<$a)return!1;let t=Number.isFinite(e.chance)?e.chance:pt;return(typeof e.random=="function"?e.random:Math.random)()<t}function Jt(e,r){let t=r==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[t]??""}function Vt(e){return Gt[e]??Gt.chitchat}async function Yt(e={}){let r=typeof e.fetch=="function"?e.fetch:(...t)=>globalThis.fetch(...t);try{let t=await r("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!t.ok)return null;let n=await t.json();if(n?.ok!==!0)return null;let a=n.result;return typeof a?.text!="string"||a.text.trim()===""?null:{kind:lt.includes(a.kind)?a.kind:"chitchat",text:a.text.trim(),quote:typeof a?.quote=="string"?a.quote:"",item:typeof a?.item=="string"?a.item:"",source:typeof a?.source?.label=="string"?a.source:null,sources:Array.isArray(a?.sources)?a.sources:[]}}catch{return null}}var Xt=268;function er({anchor:e,locale:r,onSay:t,onAction:n,onQuip:a,recent:s,onForget:i,onClose:o,t:p}){let f=U.useRef(null),k=U.useRef(null),[d,b]=U.useState(""),[m,x]=U.useState(()=>({left:0,top:0,ready:!1}));U.useLayoutEffect(()=>{let h=f.current;if(h===null)return;let C=h.getBoundingClientRect().height,T=Ht(e,{width:Xt,height:C},{width:window.innerWidth,height:window.innerHeight});x({...T,ready:!0})},[e]),U.useEffect(()=>{let h=k.current;h!==null&&typeof h.focus=="function"&&h.focus()},[]),U.useEffect(()=>{let h=T=>{let P=f.current;P!==null&&T.target instanceof Node&&P.contains(T.target)||o()},C=T=>{T.key==="Escape"&&(T.preventDefault(),T.stopPropagation(),o())};return document.addEventListener("pointerdown",h,!0),document.addEventListener("keydown",C,!0),()=>{document.removeEventListener("pointerdown",h,!0),document.removeEventListener("keydown",C,!0)}},[o]);let M=()=>{let h=je(d);h!==""&&(t(h),o())},A={left:`${Math.round(m.left)}px`,top:`${Math.round(m.top)}px`,width:`${Xt}px`,visibility:m.ready?"visible":"hidden"};return(0,Zt.createPortal)(U.createElement("div",{ref:f,className:"cbp-menu",style:A,role:"menu","aria-label":p("menu.title"),"data-cbp-menu":"true",onContextMenu:h=>h.preventDefault()},U.createElement("div",{className:"cbp-menu-say"},U.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},p("menu.say")),U.createElement("div",{className:"cbp-menu-row"},U.createElement("input",{id:"cbp-menu-say-input",ref:k,className:"cbp-menu-input",type:"text",value:d,maxLength:Qe,placeholder:p("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:h=>b(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),h.stopPropagation(),M())}}),U.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:je(d)==="",onClick:M},p("menu.saySubmit")))),s.length===0?null:U.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},U.createElement("span",{className:"cbp-menu-label"},p("menu.recent"),U.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:i},p("menu.clear"))),U.createElement("div",{className:"cbp-menu-recent-list"},s.slice(0,8).map(h=>U.createElement("button",{key:`${h.text}-${h.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":h.text,title:h.text,onClick:()=>{t(h.text),o()}},h.text)))),U.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},U.createElement("span",{className:"cbp-menu-label"},p("menu.quip")),U.createElement("div",{className:"cbp-menu-grid"},lt.map(h=>U.createElement("button",{key:h,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":h,onClick:()=>{a(h),o()}},Jt(h,r))))),U.createElement("div",{className:"cbp-menu-actions"},U.createElement("span",{className:"cbp-menu-label"},p("menu.action")),U.createElement("div",{className:"cbp-menu-grid"},Ut.map(h=>U.createElement("button",{key:h.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":h.clip,title:h.clip,onClick:()=>{n(h.clip),o()}},Wt(h,r))))),U.createElement("p",{className:"cbp-menu-hint"},p("menu.hint"))),document.body)}var dt="/api/chatbox-pet/said",tr="chatboxPet.said";function bt(e){let r=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(r==="")return"";let t=Array.from(r);return t.length<=60?r:t.slice(0,60).join("")}function Oa(e,r,t=Date.now()){let n=bt(r),a=Array.isArray(e)?e.filter(i=>typeof i?.text=="string"):[];if(n==="")return a.slice(0,24);let s=a.filter(i=>i.text!==n);return[{text:n,at:t},...s].slice(0,24)}function ut(e){let r=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],t=[],n=new Set;for(let a of r){let s=bt(typeof a=="string"?a:a?.text);if(!(s===""||n.has(s))&&(n.add(s),t.push({text:s,at:Number.isFinite(a?.at)?a.at:0}),t.length>=24))break}return t}function ja(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function _a(e={}){let r=typeof e.fetch=="function"?e.fetch:(...d)=>globalThis.fetch(...d),t=e.storage===void 0?ja():e.storage,n=()=>{try{let d=t?.getItem(tr);return d==null?[]:ut(JSON.parse(d))}catch{return[]}},a=d=>{try{t?.setItem(tr,JSON.stringify(d))}catch{}},s=Object.freeze({lines:Object.freeze(n()),loaded:!1}),i=new Set;function o(d){s=Object.freeze({...s,...d});for(let b of i)try{b()}catch{}}async function p(){try{let b=await(await r(dt,{method:"GET",headers:{accept:"application/json"}})).json();if(b?.ok===!0){let m=ut(b.result);return o({lines:m,loaded:!0}),a(m),m}}catch{}return o({loaded:!0}),s.lines}async function f(d){let b=bt(d);if(b==="")return s.lines;let m=Oa(s.lines,b);o({lines:Object.freeze(m)}),a(m);try{let M=await(await r(dt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:b})})).json();if(M?.ok===!0){let A=ut(M.result);return o({lines:A,loaded:!0}),a(A),A}}catch{}return s.lines}async function k(){o({lines:Object.freeze([])}),a([]);try{await r(dt,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(d){return typeof d!="function"?()=>{}:(i.add(d),()=>i.delete(d))},getSnapshot(){return s},refresh:p,remember:f,clear:k}}var Ae=_a();var ht=null;function rr(e,r){let t=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(t)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(t)?!1:/Mac/i.test(typeof r=="string"?r:t)}function ar(e){if(e!==void 0)return rr(e.userAgent,e.platform)?".mov":".webm";if(ht===null){let r=typeof navigator>"u"?void 0:navigator;ht=rr(r?.userAgent,r?.platform)?".mov":".webm"}return ht}var nr={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},Ua={failed:"click-angry",cancelled:"act-shy"};function or(e){let r=e?.previous?.status??"idle",t=e?.next?.status??"idle",n=e?.previous?.detail??null,a=e?.next?.detail??null,s=t!==r||a!==n,o=r==="working"&&t==="thinking"?"result":t;if(!s)return{changed:!1,status:o,detail:a,clip:null,sound:null};if(t==="idle")return{changed:!0,status:"idle",detail:a,clip:null,sound:null};let p=o==="error"?Ua[a]??nr.error:nr[o]??e?.idleClip??null;return{changed:!0,status:o,detail:a,clip:p,sound:Ft(o,a)}}var Wa=6e3,Ha=5e3,Ga={thinking:0,working:1,result:2,waiting:3,success:4,error:5},Ee="idle-breathe-loop",ir="click-wave",sr=["act-harley","act-beach"],cr=6e3,Ka=9e4,Qa=.12;function lr({sessionId:e,t:r,useInput:t,locale:n}){let a=F.useRef(null),s=F.useRef(null),i=F.useRef("idle"),o=F.useRef(null),p=F.useRef(Date.now()),f=F.useRef(null),k=F.useRef(0),d=F.useRef(0),[b,m]=F.useState(null),[x,M]=F.useState(null),h=F.useSyncExternalStore(Ae.subscribe,Ae.getSnapshot,Ae.getSnapshot).lines,C=F.useRef(0),[T,P]=F.useState(null),[z,S]=F.useState("idle"),[L,$]=F.useState(!0),D=F.useRef(!1),B=F.useCallback((v,I)=>{let O=a.current;if(O===null||O.dataset.clip===v&&O.loop===I&&!O.ended)return;O.dataset.clip=v,O.loop=I,O.src=`/api/chatbox-pet/asset/${v}${ar()}`;let G=O.play();G!==void 0&&typeof G.catch=="function"&&G.catch(()=>{})},[]),we=F.useCallback(()=>{let v=a.current;if(v!==null){if(!D.current&&v.dataset.clip!==Ee){D.current=!0,B(Ee,!0);return}$(!1)}},[B]),le=F.useCallback(()=>{window.clearTimeout(C.current),P(null)},[]),X=F.useCallback((v,I,O,G=Ha,Z=null)=>{window.clearTimeout(C.current),P({text:v,kind:O,source:Z}),I||(C.current=window.setTimeout(()=>P(null),G))},[]),Re=F.useCallback(v=>{let I=s.current?.workStatusTexts,O=Ga[v],G=O===void 0||!Array.isArray(I)?void 0:I[O];if(!(!Array.isArray(G)||G.length===0))return G[Math.floor(Math.random()*G.length)]},[]),ve=F.useCallback(v=>{let I=typeof v?.status=="string"?v.status:"idle",O=i.current,G=typeof v?.detail=="string"?v.detail:null,Z=or({previous:{status:O,detail:o.current},next:{status:I,detail:G},idleClip:Ee});if(!Z.changed){I==="waiting"&&typeof v?.bubble=="string"&&v.bubble!==""&&X(v.bubble,!0,"waiting");return}if(i.current=I,o.current=G,S(I),f.current!==null&&f.current.isActive()){p.current=Date.now();return}if(I==="idle"){B(Ee,!0),le(),p.current=Date.now();return}p.current=Date.now();let Y=Z.status,Ie=Z.detail;B(Z.clip??Ee,!1);let K=typeof v?.bubble=="string"&&v.bubble!==""?v.bubble:Re(Y),he=v?.source==="broadcast"?"notify":Z.sound;ie.play(he,K),K!==void 0?X(K,I==="waiting",Y):le()},[le,Re,B,X]),me=F.useCallback(async v=>{let I=await Yt({kind:v,locale:typeof n=="function"?n():"zh"});if(I===null)return;let O=Vt(I.kind);B(O.clip,!1),ie.play(O.sound,I.text),X(I.text,!1,"quip",Kt,I.source?.label??null)},[n,B,X]),ge=F.useCallback(()=>{if(i.current!=="idle"||f.current!==null&&f.current.isActive())return;let I=Date.now()-p.current;if(I<Ka)return;if(Qt({idleForMs:I,chance:pt})){p.current=Date.now(),me(null);return}if(Math.random()>Qa)return;let O=sr[Math.floor(Math.random()*sr.length)];B(O,!1),p.current=Date.now()},[B,me]),ue=F.useCallback((v,I,O)=>{typeof v.clip=="string"&&v.clip!==""&&B(v.clip,!1),typeof v.sound=="string"&&v.sound!==""&&ie.play(v.sound,v.line),typeof v.line=="string"&&v.line!==""&&X(v.line,I,"chat",O)},[B,X]),ke=F.useCallback(()=>{window.clearTimeout(d.current),m(null),B(Ee,!0),le()},[le,B]),be=typeof t=="function"?t(v=>typeof v?.draft=="string"?v.draft:""):"";F.useEffect(()=>{f.current===null&&(f.current=_t());let v=f.current,I=Ot(be,typeof n=="function"?n():"zh"),O=v.observe(be);if(O!==null&&O.kind==="wake"&&(m({phase:"awake"}),ue({clip:"click-surprise",sound:"wake",line:jt({locale:I,seed:be})},!0)),O!==null&&O.kind==="off"){ke();return}if(window.clearTimeout(k.current),!v.isActive())return;let G=Z=>{k.current=window.setTimeout(()=>{let Y=v.settle(be,{locale:I});if(Y!==null&&Y.kind==="cooldown"){G(Math.max(120,Y.retryInMs));return}Y===null||Y.kind!=="reply"||(ue(Y,!1,cr),window.clearTimeout(d.current),d.current=window.setTimeout(()=>ke(),v.holdMs))},Z)};return G(v.debounceMs),()=>window.clearTimeout(k.current)},[be,n,ue,ke]),F.useEffect(()=>{Ae.refresh()},[]),F.useEffect(()=>{let v=!1;return fetch("/api/chatbox-pet/config").then(I=>I.ok?I.json():null).then(I=>{!v&&I?.ok===!0&&(s.current=I.result)}).catch(()=>{}),()=>{v=!0}},[]),F.useEffect(()=>{if(typeof e!="string"||e==="")return;let v=!1,I=0,O=async()=>{if(document.visibilityState==="visible"){try{let Y=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),Ie=Y.ok?await Y.json():null;!v&&Ie?.ok===!0&&ve(Ie.result)}catch{}v||ge()}},G=()=>{I=window.setTimeout(async()=>{await O(),v||G()},Wa)},Z=()=>{document.visibilityState==="visible"&&O()};return document.addEventListener("visibilitychange",Z),O(),G(),()=>{v=!0,window.clearTimeout(I),document.removeEventListener("visibilitychange",Z)}},[e,ve]),F.useEffect(()=>(B(Ee,!0),()=>window.clearTimeout(C.current)),[B]);let[Ce,te]=F.useState(()=>Oe(Pe())==="on"),Te=F.useCallback(v=>{let I=je(v);I!==""&&(B(ir,!1),ie.play("click",I),X(I,!1,"chat",cr),Ae.remember(I))},[B,X]),W=F.useCallback(v=>{typeof v!="string"||v===""||(B(v,!1),ie.play("click",v))},[B]),Fe=F.useCallback(()=>{let v=document.querySelector("[data-cbp-pet]"),I=v instanceof Element?v.getBoundingClientRect():null;I!==null&&M({left:I.left,right:I.right,top:I.top,bottom:I.bottom})},[]);return F.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},F.createElement("div",{className:"cbp-stage"},F.createElement("div",{className:(T===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(T?.kind==="error"?" cbp-bubble--error":"")+(T?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":r("aria.bubble")},T?.source?F.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":T.source},T.source):null,F.createElement("span",{className:"cbp-bubble-text"},T?.text??"")),F.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":r(Ce?"sound.on":"sound.off"),"aria-pressed":Ce,onClick:v=>{v.stopPropagation();let I=Pt(Pe())==="on";te(I),prefsStore.update({sound:I})}},Ce?F.createElement(Ja,null):F.createElement(Va,null)),F.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":b===null?z:"awake","data-cbp-chat":b===null?"false":"true","aria-label":r("aria.pet"),onClick:()=>{ie.play("click"),B(ir,!1)},onContextMenu:v=>{v.preventDefault(),v.stopPropagation(),Fe()},onKeyDown:v=>{(v.key==="ContextMenu"||v.shiftKey&&v.key==="F10")&&(v.preventDefault(),Fe())},"aria-haspopup":"menu","aria-expanded":x===null?"false":"true"},L?F.createElement("video",{ref:a,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:v=>{v.currentTarget.loop||B(Ee,!0)},onError:we}):F.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),x===null?null:F.createElement(er,{anchor:x,locale:typeof n=="function"?n():"zh",onSay:Te,onAction:W,onQuip:v=>{me(v)},recent:h,onForget:()=>{Ae.clear()},onClose:()=>M(null),t:r}))}function Ja(){return F.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},F.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),F.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),F.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function Va(){return F.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},F.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),F.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var pr=`
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
 * The queue-merge chip in the composer tool row. The count shows the current
 * batch; "/total" appears only when the queue needs more than one press.
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
.cbp-merge-total{font-size:9.5px;opacity:.55;margin-left:-2px}
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
`;var dr="/api/chatbox-pet/prefs",Ya=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function Xa(e={}){let r=typeof e.fetch=="function"?e.fetch:(...o)=>globalThis.fetch(...o),t=Ya,n=new Set;function a(o){t={...t,...o};for(let p of n)try{p()}catch{}}async function s(){try{let p=await(await r(dr,{method:"GET",headers:{accept:"application/json"}})).json();p?.ok===!0&&p.result!==null&&typeof p.result=="object"?a({pet:p.result.pet!==!1,boost:p.result.boost!==!1,sound:p.result.sound!==!1,loaded:!0}):a({loaded:!0})}catch{}return t}async function i(o){let p=t,f={};for(let k of["pet","boost","sound"])typeof o?.[k]=="boolean"&&(f[k]=o[k]);a(f);try{let d=await(await r(dr,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:f})})).json();if(d?.ok!==!0||d.result===null||typeof d.result!="object")throw new Error("rejected");return a({pet:d.result.pet!==!1,boost:d.result.boost!==!1,sound:d.result.sound!==!1,loaded:!0}),!0}catch{return a({pet:p.pet,boost:p.boost,sound:p.sound}),!1}}return{subscribe(o){return typeof o!="function"?()=>{}:(n.add(o),()=>n.delete(o))},getSnapshot(){return t},refresh:s,update:i}}var fe=Xa();var ae=Ne(require("react"),1),ur=require("react");var br=`
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
`;function ft({id:e,checked:r,label:t,onChange:n}){return ae.createElement("label",{className:"cbp-set-item",htmlFor:e},ae.createElement("span",{className:"cbp-switch"},ae.createElement("input",{id:e,type:"checkbox",role:"switch",checked:r,onChange:a=>n(a.target.checked),"data-cbp-pref":e}),ae.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),ae.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),t)}function hr({t:e}){let r=(0,ur.useSyncExternalStore)(fe.subscribe,fe.getSnapshot,fe.getSnapshot),[t,n]=ae.useState(()=>Oe(Pe())==="on"),a=s=>{n(s),it(Pe(),s?"on":"off"),fe.update({sound:s})};return ae.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},ae.createElement("div",{className:"cbp-set-head"},ae.createElement("span",{className:"cbp-set-title"},e("settings.title")),ae.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),ae.createElement("div",{className:"cbp-set-items"},ae.createElement(ft,{id:"chatbox-pet-feature-pet",checked:r.pet!==!1,label:e("settings.pet"),onChange:s=>{fe.update({pet:s})}}),ae.createElement(ft,{id:"chatbox-pet-feature-boost",checked:r.boost!==!1,label:e("settings.boost"),onChange:s=>{fe.update({boost:s})}}),ae.createElement(ft,{id:"chatbox-pet-feature-sound",checked:t,label:e("settings.sound"),onChange:a})))}var _e=Ne(require("react"),1),Ve=require("react"),gt=require("@deepseek-ai/dsh-client-ui-primitives");var V=require("react");function qe({size:e=16,children:r}){return(0,V.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},r)}function Je({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,V.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function fr({size:e=16}){return(0,V.createElement)(qe,{size:e},(0,V.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function mr({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function mt({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,V.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function gr({size:e=16}){return(0,V.createElement)(qe,{size:e},(0,V.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function xr({size:e=16}){return(0,V.createElement)(qe,{size:e},[(0,V.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,V.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,V.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,V.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,V.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function Za({label:e,children:r}){return typeof gt.Tooltip=="function"?_e.createElement(gt.Tooltip,{label:e,side:"top",delayMs:400},r):(0,Ve.cloneElement)(r,{title:e})}function yr({inputActions:e,useInput:r,store:t,t:n,locale:a}){let s=(0,Ve.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),i=typeof r=="function"?r(b=>b):void 0;t.setDraftMirror(e,i);let o=typeof i?.draft=="string"?i.draft:"",p=s.phase==="running"||s.phase==="streaming",f=s.phase!=="idle",k=n(p?"button.running":"button.label"),d=p?n("button.running"):o.trim()===""?n("button.tooltipCompose"):n("button.tooltip");return _e.createElement(Za,{label:d},_e.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":p?"true":"false","data-pb-open":f?"true":"false","aria-label":k,"aria-busy":p?"true":void 0,"aria-expanded":f?"true":"false","aria-controls":t.panelId(e),onMouseDown:b=>b.preventDefault(),onClick:()=>t.start(e,{locale:typeof a=="function"?a():"zh"})},_e.createElement(Je,{size:16})))}var ne=Ne(require("react"),1),Ze=require("react"),yt=require("@deepseek-ai/dsh-client-ui-primitives");var wr="next-turn";function De(e){return(Array.isArray(e?.content)?e.content:[]).filter(t=>t!==null&&typeof t=="object"&&t.type==="text"&&typeof t.text=="string").map(t=>t.text).join("").trim()}function Ye(e){return(Array.isArray(e?.content)?e.content:[]).filter(t=>t!==null&&typeof t=="object"&&t.type==="image"&&typeof t.attachment=="object"&&t.attachment!==null&&typeof t.attachment.attachmentId=="string")}function en(e){return(Array.isArray(e?.content)?e.content:[]).some(t=>t===null||typeof t!="object"||t.type!=="text"&&t.type!=="image")}function Sr(e){return(Array.isArray(e?.content)?e.content:[]).some(t=>t===null||typeof t!="object"||t.type!=="text")}function vr(e,r=De(e)){return typeof e?.id=="string"&&r!==""&&!Sr(e)}function tn(e,r){let t=Array.isArray(e)?e:[],n=Array.isArray(r)?r:[],a=0;for(;a<t.length;){if(!vr(t[a],n[a]??"")){a+=1;continue}let s=a;for(;s+1<t.length&&vr(t[s+1],n[s+1]??"");)s+=1;if(s-a+1>=2)return{start:a,length:s-a+1};a=s+1}return{start:-1,length:0}}function kr(e){let r=[];try{let n=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();r=Array.isArray(n?.[wr])?n[wr]:[]}catch{r=[]}return xt(r)}function xt(e){let t=(Array.isArray(e)?e:[]).filter(m=>m!==null&&typeof m=="object"&&typeof m.id=="string"),n=t.map(De),a=t.reduce((m,x)=>m+Ye(x).length,0),s=t.some(m=>en(m)),i=tn(t,n),o="none",p=-1,f=0,k=1,d=0,b="too-few";return!s&&a>0?a>20?b="too-many-images":t.length>=2&&(o="requeue",p=0,f=t.length,b=""):i.length>=2?(o="edit",p=i.start,f=Math.min(i.length,8),k=Math.max(1,Math.ceil(i.length/8)),d=Math.max(0,t.length-i.length),b=""):s&&(b="unsupported"),{items:t,texts:n,mode:o,start:p,batch:f,batches:k,skipped:d,images:a,blocked:b}}async function rn(e,r={}){let t=an(e),n=typeof r.fetchImpl=="function"?r.fetchImpl:(...a)=>globalThis.fetch(...a);try{let a=await n("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof r.sessionId=="string"?r.sessionId:void 0,locale:r.locale==="en"?"en":"zh"})});if(!a.ok)return{prompt:t,optimized:!1,reason:"http-"+String(a.status)};let s=await a.json(),i=typeof s?.result?.prompt=="string"?s.result.prompt.trim():"";return i===""?{prompt:t,optimized:!1,reason:"empty"}:{prompt:i,optimized:s.result.optimized===!0,reason:typeof s.result.reason=="string"?s.result.reason:""}}catch{return{prompt:t,optimized:!1,reason:"network"}}}function an(e){return(Array.isArray(e)?e:[]).map(r=>String(r??"").trim()).filter(r=>r!=="").join(`

`)}async function nn(e,r,t){let n=Array.isArray(r)?r:[],a=String(t??"").trim();if(n.length<2||a==="")return{ok:!1,merged:0,removed:0,claimed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,claimed:0,error:"no-session"};if(n.some(o=>Sr(o)))return{ok:!1,merged:0,removed:0,claimed:0,error:"has-attachment"};if(n.some(o=>De(o)===""))return{ok:!1,merged:0,removed:0,claimed:0,error:"bad-input"};let[s,...i]=n;try{let o=await e.updateQueue(s.id,{kind:"edit",content:[{type:"text",text:a}]});if(o?.ok!==!0)return{ok:!1,merged:0,removed:0,claimed:0,error:o?.error?.code??"edit-failed"}}catch(o){return{ok:!1,merged:0,removed:0,claimed:0,error:Xe(o)}}return Nr(e,i,1)}async function on(e,r,t){let n=Array.isArray(r)?r:[],a=String(t??"").trim();if(n.length<2)return{ok:!1,merged:0,removed:0,claimed:0,error:"bad-input"};if(typeof e?.prompt!="function"||typeof e?.readAttachment!="function"||typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,claimed:0,error:"no-session"};let s=n.flatMap(p=>Ye(p));if(s.length===0)return{ok:!1,merged:0,removed:0,claimed:0,error:"bad-input"};if(s.length>20)return{ok:!1,merged:0,removed:0,claimed:0,error:"too-many-images"};let i=[];for(let p of s){let f;try{f=await e.readAttachment(p.attachment)}catch(m){return{ok:!1,merged:0,removed:0,claimed:0,error:Xe(m)}}if(f?.ok!==!0)return{ok:!1,merged:0,removed:0,claimed:0,error:f?.error?.code??"image-read-failed"};let k=f.value?.data;if(!(k instanceof Uint8Array)||k.length===0)return{ok:!1,merged:0,removed:0,claimed:0,error:"image-read-failed"};let d=p.attachment?.mediaType;if(typeof d!="string"||d==="")return{ok:!1,merged:0,removed:0,claimed:0,error:"image-read-failed"};let b=typeof p.attachment?.name=="string"&&p.attachment.name!==""?p.attachment.name:"";i.push({type:"image",mediaType:d,data:cn(k),...b===""?{}:{name:b}})}let o=a===""?i:[...i,{type:"text",text:a}];try{let p=await e.prompt(o,"queue");if(p?.ok!==!0)return{ok:!1,merged:0,removed:0,claimed:0,error:p?.error?.code??"prompt-failed"}}catch(p){return{ok:!1,merged:0,removed:0,claimed:0,error:Xe(p)}}return Nr(e,n,1)}async function Nr(e,r,t){let n=0,a=0;for(let s of Array.isArray(r)?r:[])try{let i=await e.updateQueue(s.id,{kind:"remove"});if(i?.ok===!0){n+=1;continue}if(i?.error?.code==="session/queue-item-not-found"){a+=1;continue}return{ok:!1,merged:t,removed:n,claimed:a,error:i?.error?.code??"remove-failed"}}catch(i){return{ok:!1,merged:t,removed:n,claimed:a,error:Xe(i)}}return{ok:a===0,merged:t,removed:n,claimed:a,error:a>0?"session/queue-item-not-found":""}}async function zr(e={}){let r=kr(e.session);if(r.blocked!==""||r.mode==="none")return{ok:!1,count:0,optimized:!1,reason:"",mode:"none",error:r.blocked||"too-few"};let t=r.items.slice(r.start,r.start+r.batch),n=t.map(De).filter(k=>k!==""),a=n.length>=2?await rn(n,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}):{prompt:n.join(`

`),optimized:!1,reason:"too-few"},s=kr(e.session),i=s.blocked===""&&s.mode===r.mode?s.items.slice(s.start,s.start+t.length):[],o=i.length===t.length&&i.every((k,d)=>sn(k,t[d])),p=r.mode!=="requeue"||s.items.length===t.length;if(!o||!p)return{ok:!1,count:t.length,optimized:!1,reason:"",mode:r.mode,error:"queue-changed"};let f=r.mode==="requeue"?await on(e.session,i,a.prompt):await nn(e.session,i,a.prompt);return{ok:f.ok,count:t.length,optimized:a.optimized,reason:a.reason,mode:r.mode,error:f.error}}function sn(e,r){if(e?.id!==r?.id||De(e)!==De(r))return!1;let t=Ye(e).map(a=>a.attachment.attachmentId),n=Ye(r).map(a=>a.attachment.attachmentId);return t.length===n.length&&t.every((a,s)=>a===n[s])}function cn(e){let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=e.length,n=[],a="",s=0;for(;s+2<t;s+=3){let o=e[s]<<16|e[s+1]<<8|e[s+2];a+=r[o>>18&63]+r[o>>12&63]+r[o>>6&63]+r[o&63],a.length>=8192&&(n.push(a),a="")}let i=t-s;if(i===1){let o=e[s]<<16;a+=r[o>>18&63]+r[o>>12&63]+"=="}else if(i===2){let o=e[s]<<16|e[s+1]<<8;a+=r[o>>18&63]+r[o>>12&63]+r[o>>6&63]+"="}return n.push(a),n.join("")}function Xe(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function ln({label:e,children:r}){return typeof yt.Tooltip=="function"?ne.createElement(yt.Tooltip,{label:e,side:"top",delayMs:400},r):(0,Ze.cloneElement)(r,{title:e})}var pn=Object.freeze({}),dn=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>pn});function un(e){let r=(()=>{try{let n=e?.projections?.faceOf?.("inbox");if(typeof n?.subscribe=="function"&&typeof n?.getSnapshot=="function")return n}catch{}return dn})(),t=(0,Ze.useSyncExternalStore)(r.subscribe,r.getSnapshot,r.getSnapshot);return xt(t?.["next-turn"])}function Rr({sessionId:e,sessions:r,t,locale:n,onNotice:a}){let s=ne.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return r?.binding?.(e)?.session??null}catch{return null}},[r,e]),i=un(s),[o,p]=ne.useState("idle"),[f,k]=ne.useState(""),d=ne.useRef(0);ne.useEffect(()=>()=>window.clearTimeout(d.current),[]);let b=i.items.length,m=i.batch??0,x=i.skipped??0,M=i.images??0,A=i.mode??"none";if(m<2||A==="none")return null;let h=async()=>{if(o!=="running"){p("running"),k("");try{let T=await zr({session:s,sessionId:e,locale:typeof n=="function"?n():"zh"});if(T.ok){let P=T.optimized?t("merge.done")(T.count):t("merge.donePlain")(T.count);k(P),a?.(P)}else k(T.error==="queue-changed"?t("merge.changed"):T.error==="session/queue-item-not-found"?t("merge.claimed"):T.error==="remove-failed"?t("merge.partial"):T.error==="has-attachment"?t("merge.attachments"):T.error==="bad-input"||T.error==="empty"?t("merge.empty"):T.error==="too-many-images"?t("merge.tooManyImages")(M):t("merge.failed"))}catch{k(t("merge.failed"))}finally{p("idle"),window.clearTimeout(d.current),d.current=window.setTimeout(()=>k(""),4e3)}}},C=o==="running"?t("merge.running"):f!==""?f:A==="requeue"?t("merge.labelImages")(b,M):x>0?t("merge.labelSkipped")(m,x):m<b?t("merge.labelBatch")(m,b,i.batches??2):t("merge.label")(b);return ne.createElement(ln,{label:C},ne.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":b,"data-cbp-merge-batch":m,"data-cbp-merge-mode":A,"data-cbp-merge-phase":o,"aria-label":C,"aria-busy":o==="running"?"true":void 0,disabled:o==="running",onClick:T=>{T.stopPropagation(),h()}},ne.createElement(xr,null),ne.createElement("span",{className:"cbp-merge-count"},o==="running"?"\u2026":m),A==="edit"&&x===0&&m<b?ne.createElement("span",{className:"cbp-merge-total"},"/",b):null))}var Ue="promptBoost",Cr={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},Tr={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var R=Ne(require("react"),1),se=require("react");var bn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function hn(){return R.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},R.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),R.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function Mr(e,r){let t=`source.${e.id}`,n=r(t);return n===t?e.label:n}function fn(e,r){if(e==null)return r("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return r("panel.error.network");case"timeout":return r("panel.error.timeout");case"stream":return r("panel.error.stream");case"empty":return r("panel.error.empty");case"apply":return r("panel.error.apply");case"host":return r("panel.error.host");default:return r("panel.error.unknown")}}function mn(e,r){if(e.phase!=="ready")return"";let t=[];return e.cached&&t.push(r("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&t.push(r("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),t.join(" \xB7 ")}function gn(e,r){if(e.phase==="running")return r("chip.running");if(e.phase==="streaming"){let t=e.sources.slice(0,2).map(n=>`${Mr(n,r)} ${n.count}`).join(" \xB7 ");return t===""?r("chip.writing"):`${t} \xB7 ${r("chip.writing")}`}return e.phase==="ready"?r("chip.ready"):e.phase==="applied"?r("undo.done"):e.phase==="error"?r("chip.failed"):r("undo.done")}function xn({state:e,store:r,t,inputActions:n,chipRef:a}){let s=e.phase==="applied",i=e.phase==="running"||e.phase==="streaming",o=e.phase==="ready",p=e.phase==="error",f=e.mode==="compose"?t("panel.compose"):t("button.label"),k=gn(e,t);return s?R.createElement("div",{className:"pb-chip-row"},R.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":t("chip.expand"),onClick:()=>r.expand(n),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),r.expand(n))}},R.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},R.createElement(fr,{size:12})),R.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},t("undo.done")),R.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),R.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":t("undo.label"),onClick:()=>r.undo(n)},t("undo.action")))):R.createElement("div",{className:"pb-chip-row"},R.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":i?"true":"false",onClick:()=>r.expand(n)},R.createElement("button",{ref:a,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":r.panelId(n),"aria-label":`${t("chip.expand")} \xB7 ${f}`,onClick:()=>r.expand(n)},R.createElement("span",{className:i||o?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},i?R.createElement(hn,null):p?R.createElement(mt,{size:12}):R.createElement(Je,{size:12})),R.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},k),o||p?R.createElement(R.Fragment,null,R.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),R.createElement("span",{className:"pb-chip-view"},t("chip.view"))):null),R.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":t("chip.dismiss"),onClick:()=>r.dismiss(n)},R.createElement(mr,{size:10}))))}function yn({state:e,store:r,t,inputActions:n,locale:a,panelRef:s}){let i=(0,se.useRef)(null),o=e.phase,p=o==="running",f=o==="streaming",k=o==="ready",d=o==="applied",b=k||d,m=o==="error",x=e.sources,M=p||f||b||x.length>0,A=d?e.applied:e.prompt,h=mn(e,t),C=r.panelId(n),T=t(bn?"shortcut.mac":"shortcut.other"),P=t(p?"panel.announceRunning":f?"panel.streaming":d?"panel.announceApplied":k?"panel.announceReady":"panel.announceError");return(0,se.useEffect)(()=>{let z=i.current;z===null||o!=="streaming"||(z.scrollTop=z.scrollHeight)},[e.prompt,o]),R.createElement("section",{ref:s,id:C,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":o,"data-pb-running":p||f?"true":"false",tabIndex:-1,"aria-labelledby":`${C}-title`,"aria-busy":p||f?"true":void 0},R.createElement("header",{className:"pb-head"},R.createElement("div",{className:"pb-head-row"},R.createElement("h2",{className:"pb-title",id:`${C}-title`},t("panel.title")),e.mode==="compose"?R.createElement("span",{className:"pb-mode"},t("panel.compose")):null,R.createElement("span",{className:"pb-meta"},h),R.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":t("panel.collapse"),title:t("panel.collapse"),onClick:()=>r.collapse(n)},R.createElement(gr,{size:14}))),M?R.createElement("div",{className:"pb-sources",role:"list","aria-label":t("panel.sources")},x.length>0?x.map(z=>R.createElement("span",{key:z.id,className:"pb-chip",role:"listitem","data-pb-source":z.id},R.createElement("span",{className:"pb-chip-label"},Mr(z,t)),R.createElement("span",{className:"pb-chip-count"},z.count))):p?[R.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),R.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:R.createElement("span",{className:"pb-note"},t("panel.noSources"))):null),R.createElement("div",{className:"pb-rule","aria-hidden":"true"}),R.createElement("div",{className:"pb-body"},p?R.createElement(R.Fragment,null,R.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},R.createElement("span",{className:"pb-skeleton-line is-long"}),R.createElement("span",{className:"pb-skeleton-line is-full"}),R.createElement("span",{className:"pb-skeleton-line is-short"})),R.createElement("div",{className:"pb-status"},R.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.status"))):null,f||b?R.createElement("textarea",{ref:i,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:f||d,spellCheck:!1,"aria-label":t("panel.editLabel"),placeholder:t("panel.placeholder"),value:A}):null,f?R.createElement("div",{className:"pb-status"},R.createElement("span",{className:"pb-dot","aria-hidden":"true"}),t("panel.streaming")):null,m?R.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},R.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},R.createElement(mt,{size:14})),R.createElement("span",{className:"pb-error-text"},fn(e.error,t))):null,R.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},P)),R.createElement("div",{className:"pb-foot"},R.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>r.collapse(n)},t("panel.close")),R.createElement("span",{className:"pb-foot-spacer"}),b?R.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:T,onClick:()=>r.retry(n,{locale:a()})},t("panel.another"),R.createElement("span",{className:"pb-kbd","aria-hidden":"true"},T)):null,d?R.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>r.undo(n)},t("undo.action")):null,p||f?R.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>r.retry(n,{locale:a()})},t("panel.retry")):null,m?R.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>r.retry(n,{locale:a()})},t("panel.retryError")):null))}function Er({inputActions:e,store:r,t,locale:n,session:a}){let s=(0,se.useSyncExternalStore)(r.subscribe,()=>r.getState(e),()=>r.getState(e)),i=s.phase,o=i!=="idle"||s.undo!==null,p=s.expanded===!0&&i!=="idle";(0,se.useEffect)(()=>{let x=typeof a?.id=="string"?a.id:"";x!==""&&r.setSessionId(e,x)},[a?.id,e,r]);let f=(0,se.useRef)(null),k=(0,se.useRef)(null),d=(0,se.useRef)(null),b=(0,se.useRef)(!1),m=(0,se.useRef)(!1);return(0,se.useEffect)(()=>{if(!o)return;let x=M=>{if(!(M.defaultPrevented||p===!1)){if(M.key==="Escape"){M.preventDefault(),M.stopPropagation(),r.collapse(e);return}M.key==="Enter"&&(M.metaKey||M.ctrlKey)&&(M.preventDefault(),M.stopPropagation(),i==="applied"||i==="ready"?r.retry(e,{locale:n()}):i==="error"&&r.retry(e,{locale:n()}))}};return document.addEventListener("keydown",x,!0),()=>document.removeEventListener("keydown",x,!0)},[o,p,i,e,r,n]),(0,se.useEffect)(()=>{if(o&&b.current===!1){b.current=!0,d.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(o===!1&&b.current){b.current=!1;let x=d.current;if(d.current=null,x==null||x.isConnected===!1||typeof x.focus!="function")return;try{x.focus({preventScroll:!0})}catch{}}},[o]),(0,se.useEffect)(()=>{if(p&&m.current===!1){m.current=!0;let x=k.current;if(x!==null&&typeof x.focus=="function")try{x.focus({preventScroll:!0})}catch{}return}if(p===!1&&m.current){m.current=!1;let x=i==="idle"?d.current:f.current;if(x==null||x.isConnected===!1||typeof x.focus!="function")return;try{x.focus({preventScroll:!0})}catch{}}},[p,i]),o?p===!1?R.createElement(xn,{state:s,store:r,t,inputActions:e,chipRef:f}):R.createElement(yn,{state:s,store:r,t,inputActions:e,locale:n,panelRef:k}):null}var N=Ne(require("react"),1),kt=require("react-dom");var Fr=[{id:"transcribe",icon:"mic",sheet:"transcribe",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",sheet:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",sheet:"video",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"translate",icon:"translate",zh:"\u7FFB\u8BD1",en:"Translate",sheet:"translate",prompt:{zh:"\u5E2E\u6211\u7FFB\u8BD1\uFF1A",en:"Translate this: "}},{id:"slides",icon:"slides",sheet:"deck",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function wt(e,r){return r==="en"?e.en:e.zh}var g=Ne(require("react"),1),Ir=require("react-dom"),Pr="/api/chatbox-pet",wn=[{id:"email",zh:"\u90AE\u4EF6",en:"Email"},{id:"update",zh:"\u8FDB\u5C55\u66F4\u65B0",en:"Update"},{id:"prd",zh:"PRD \u6458\u8981",en:"PRD"},{id:"copy",zh:"\u4EA7\u54C1\u6587\u6848",en:"Copy"}],vn=[{id:6,zh:"6 \u9875",en:"6 slides"},{id:10,zh:"10 \u9875",en:"10 slides"},{id:14,zh:"14 \u9875",en:"14 slides"}];async function Ar(e,r){let t=await fetch(`${Pr}${e}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)}),n;try{n=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return n.result}function Lr(e,r){if(typeof e?.setDraft!="function")return!1;try{return e.setDraft({text:r,references:[]}),!0}catch{try{return e.setDraft(r),!0}catch{return!1}}}function Be({title:e,hint:r,onClose:t,children:n,t:a,wide:s=!1}){let i=g.useRef(null),[o,p]=g.useState(()=>{try{let d=JSON.parse(localStorage.getItem("chatbox-pet:sheet-size")||"null");if(d&&Number.isFinite(d.width)&&Number.isFinite(d.height))return{width:Math.min(d.width,window.innerWidth-48),height:Math.min(d.height,window.innerHeight-48)}}catch{}return null}),f=g.useRef(null),k=d=>{let b=i.current;if(b===null)return;d.preventDefault(),d.stopPropagation();let m=b.getBoundingClientRect();f.current={x:d.clientX,y:d.clientY,width:m.width,height:m.height};let x=A=>{let h=f.current;h!==null&&p({width:Math.min(Math.max(360,h.width+(A.clientX-h.x)),window.innerWidth-48),height:Math.min(Math.max(220,h.height+(A.clientY-h.y)),window.innerHeight-48)})},M=()=>{f.current=null,window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",M);try{let A=i.current;if(A!==null){let h=A.getBoundingClientRect();localStorage.setItem("chatbox-pet:sheet-size",JSON.stringify({width:Math.round(h.width),height:Math.round(h.height)}))}}catch{}};window.addEventListener("pointermove",x),window.addEventListener("pointerup",M)};return g.useEffect(()=>{let d=b=>{b.key==="Escape"&&(b.preventDefault(),b.stopPropagation(),t())};return document.addEventListener("keydown",d,!0),()=>document.removeEventListener("keydown",d,!0)},[t]),(0,Ir.createPortal)(g.createElement("div",{className:"cbp-sheet-veil","data-cbp-sheet":"true",onMouseDown:d=>d.stopPropagation()},g.createElement("div",{className:s?"cbp-sheet cbp-sheet-wide":"cbp-sheet",role:"dialog","aria-modal":"true","aria-label":e,ref:i,style:o===null?void 0:{width:`${Math.round(o.width)}px`,height:`${Math.round(o.height)}px`}},g.createElement("div",{className:"cbp-sheet-head"},g.createElement("span",{className:"cbp-sheet-title"},e),g.createElement("button",{type:"button",className:"cbp-sheet-close","aria-label":a("sheet.close"),onClick:t},"\u2715")),r?g.createElement("p",{className:"cbp-sheet-hint"},r):null,g.createElement("div",{className:"cbp-sheet-body"},n),g.createElement("button",{type:"button",className:"cbp-sheet-grip","data-cbp-sheet-grip":"true","aria-label":a("sheet.resize"),title:a("sheet.resize"),onPointerDown:k}))),document.body)}function qr({onClose:e,onFill:r,t,locale:n}){let[a,s]=g.useState("idle"),[i,o]=g.useState(0),[p,f]=g.useState(null),[k,d]=g.useState(""),b=g.useRef(null),m=g.useRef([]),x=g.useRef(0),M=()=>{x.current!==0&&(clearInterval(x.current),x.current=0)};g.useEffect(()=>()=>{M();try{b.current?.stream?.getTracks?.().forEach(P=>P.stop())}catch{}},[]);let A=async P=>{s("working"),d("");try{let S=await(await fetch(`${Pr}/transcribe?name=recording.webm`,{method:"POST",headers:{"content-type":P.type||"audio/webm"},body:P})).json();if(S?.ok!==!0)throw new Error(S?.error?.message??"\u8F6C\u5199\u5931\u8D25");f(S.result),s("done")}catch(z){d(String(z?.message??z)),s("idle")}},h=async()=>{d("");try{let P=await navigator.mediaDevices.getUserMedia({audio:!0}),z=new MediaRecorder(P);m.current=[],z.ondataavailable=S=>{S.data?.size>0&&m.current.push(S.data)},z.onstop=()=>{M(),P.getTracks().forEach(L=>L.stop());let S=new Blob(m.current,{type:z.mimeType||"audio/webm"});A(S)},b.current=z,z.start(),o(0),s("recording"),x.current=setInterval(()=>o(S=>S+1),1e3)}catch(P){let z=P?.name==="NotAllowedError"||P?.name==="SecurityError";d(z?t("sheet.transcribe.denied"):String(P?.message??P))}},C=()=>{s("working");try{b.current?.stop()}catch{M(),s("idle")}},T=`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`;return g.createElement(Be,{title:t("sheet.transcribe.title"),hint:t("sheet.transcribe.hint"),onClose:e,t},p===null?g.createElement(g.Fragment,null,g.createElement("div",{className:"cbp-sheet-center"},g.createElement("button",{type:"button",className:"cbp-rec","data-cbp-rec":a,"aria-label":t(a==="recording"?"sheet.transcribe.stop":"sheet.transcribe.start"),onClick:a==="recording"?C:h,disabled:a==="working"},g.createElement("span",{className:"cbp-rec-dot"})),g.createElement("span",{className:"cbp-rec-time"},a==="recording"?T:t(a==="working"?"sheet.transcribe.working":"sheet.transcribe.idle"))),g.createElement("label",{className:"cbp-sheet-file"},g.createElement("input",{type:"file",accept:"audio/*,video/*","data-cbp-audio-file":"true",onChange:P=>{let z=P.target.files?.[0];z&&A(z),P.target.value=""}}),g.createElement("span",null,t("sheet.transcribe.pick")))):g.createElement(g.Fragment,null,g.createElement("div",{className:"cbp-sheet-meta"},t("sheet.transcribe.meta")(p.segments?.length??0,p.language??"\u2014",p.durationSeconds??0)),g.createElement("pre",{className:"cbp-sheet-pre","data-cbp-transcript":"true"},p.text||t("sheet.transcribe.empty")),g.createElement("div",{className:"cbp-sheet-actions"},g.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(p.text)},t("sheet.fill")),g.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>{f(null),s("idle")}},t("sheet.again")))),k?g.createElement("p",{className:"cbp-sheet-error"},k):null)}function Dr({onClose:e,onFill:r,t,locale:n,sessionId:a=""}){let[s,i]=g.useState("update"),[o,p]=g.useState(""),[f,k]=g.useState(""),[d,b]=g.useState("idle"),[m,x]=g.useState(""),[M,A]=g.useState(""),h=async()=>{b("working"),A("");try{let C=await Ar("/write",{genre:s,topic:o,tone:f,locale:n(),session:a});x(C.text),b("done")}catch(C){A(String(C?.message??C)),b("idle")}};return g.createElement(Be,{title:t("sheet.write.title"),hint:t("sheet.write.hint"),onClose:e,t},g.createElement("div",{className:"cbp-chips"},wn.map(C=>g.createElement("button",{key:C.id,type:"button",className:"cbp-chip","data-cbp-genre":C.id,"aria-pressed":s===C.id?"true":"false",onClick:()=>i(C.id)},n()==="en"?C.en:C.zh))),g.createElement("input",{className:"cbp-input","data-cbp-write-topic":"true",placeholder:t("sheet.write.topic"),value:o,maxLength:200,onChange:C=>p(C.target.value)}),g.createElement("input",{className:"cbp-input","data-cbp-write-tone":"true",placeholder:t("sheet.write.tone"),value:f,maxLength:80,onChange:C=>k(C.target.value)}),m===""?g.createElement("div",{className:"cbp-sheet-actions"},g.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-write-go":"true",disabled:d==="working"||o.trim()==="",onClick:h},t(d==="working"?"sheet.working":"sheet.write.go"))):g.createElement(g.Fragment,null,g.createElement("pre",{className:"cbp-sheet-pre","data-cbp-written":"true"},m),g.createElement("div",{className:"cbp-sheet-actions"},g.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary",onClick:()=>r(m)},t("sheet.fill")),g.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>x("")},t("sheet.again")))),M?g.createElement("p",{className:"cbp-sheet-error"},M):null)}function Br({onClose:e,t:r,locale:t,sessionId:n=""}){let[a,s]=g.useState(""),[i,o]=g.useState(""),[p,f]=g.useState(10),[k,d]=g.useState("idle"),[b,m]=g.useState(null),[x,M]=g.useState(""),A=async()=>{d("working"),M("");try{let C=await Ar("/deck",{topic:a,audience:i,pages:p,locale:t(),session:n});m(C),d("done")}catch(C){M(String(C?.message??C)),d("idle")}},h=()=>{if(!b?.base64)return;let C=Uint8Array.from(atob(b.base64),S=>S.charCodeAt(0)),T=new Blob([C],{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}),P=URL.createObjectURL(T),z=document.createElement("a");z.href=P,z.download=b.name||"deck.pptx",document.body.appendChild(z),z.click(),z.remove(),setTimeout(()=>URL.revokeObjectURL(P),4e3)};return g.createElement(Be,{title:r("sheet.deck.title"),hint:r("sheet.deck.hint"),onClose:e,t:r},b===null?g.createElement(g.Fragment,null,g.createElement("input",{className:"cbp-input","data-cbp-deck-topic":"true",placeholder:r("sheet.deck.topic"),value:a,maxLength:200,onChange:C=>s(C.target.value)}),g.createElement("input",{className:"cbp-input","data-cbp-deck-audience":"true",placeholder:r("sheet.deck.audience"),value:i,maxLength:120,onChange:C=>o(C.target.value)}),g.createElement("div",{className:"cbp-chips"},vn.map(C=>g.createElement("button",{key:C.id,type:"button",className:"cbp-chip","data-cbp-size":C.id,"aria-pressed":p===C.id?"true":"false",onClick:()=>f(C.id)},t()==="en"?C.en:C.zh))),g.createElement("div",{className:"cbp-sheet-actions"},g.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-go":"true",disabled:k==="working"||a.trim()==="",onClick:A},r(k==="working"?"sheet.deck.working":"sheet.deck.go")))):g.createElement(g.Fragment,null,g.createElement("div",{className:"cbp-deck-card","data-cbp-deck-result":"true"},g.createElement("div",{className:"cbp-deck-title"},b.title||a),g.createElement("div",{className:"cbp-deck-meta"},r("sheet.deck.meta")(b.slides??0)),g.createElement("div",{className:"cbp-deck-path",title:b.path},b.path)),g.createElement("div",{className:"cbp-sheet-actions"},g.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-deck-download":"true",onClick:h},r("sheet.deck.download")),g.createElement("button",{type:"button",className:"cbp-btn",onClick:()=>m(null)},r("sheet.again")))),x?g.createElement("p",{className:"cbp-sheet-error"},x):null)}function $r({onClose:e,onFill:r,t}){let[n,a]=g.useState(""),s=()=>{let i=n.trim();r(i===""?t("sheet.video.prompt"):t("sheet.video.promptWith")(i))};return g.createElement(Be,{title:t("sheet.video.title"),hint:t("sheet.video.hint"),onClose:e,t},g.createElement("input",{className:"cbp-input","data-cbp-video-link":"true",placeholder:t("sheet.video.placeholder"),value:n,maxLength:500,onChange:i=>a(i.target.value)}),g.createElement("div",{className:"cbp-sheet-actions"},g.createElement("button",{type:"button",className:"cbp-btn cbp-btn-primary","data-cbp-video-go":"true",onClick:s},t("sheet.video.go"))))}var Or=`
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
`;var c=Ne(require("react"),1),vt="/api/chatbox-pet",Ur=[{id:"auto",zh:"\u81EA\u52A8\u68C0\u6D4B",en:"Detect"},{id:"zh",zh:"\u4E2D\u6587",en:"Chinese"},{id:"en",zh:"\u82F1\u6587",en:"English"},{id:"ja",zh:"\u65E5\u6587",en:"Japanese"},{id:"ko",zh:"\u97E9\u6587",en:"Korean"},{id:"fr",zh:"\u6CD5\u6587",en:"French"},{id:"de",zh:"\u5FB7\u6587",en:"German"},{id:"es",zh:"\u897F\u73ED\u7259\u6587",en:"Spanish"}];function Sn(e){let r=String(e??"").trim();return r===""||r.length>40||/[.!?。！？\n]/.test(r)?!1:r.split(/\s+/).filter(Boolean).length<=3}var Wr=[{id:"polish",zh:"\u53E5\u5B50\u6DA6\u8272",en:"Polish"},{id:"grammar",zh:"\u8BED\u6CD5\u7EA0\u9519",en:"Grammar"},{id:"wiki",zh:"\u5355\u8BCD\u767E\u79D1",en:"Word wiki"},{id:"dedupe",zh:"\u8BBA\u6587\u53BB\u91CD",en:"De-duplicate"},{id:"write",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Write"},{id:"reading",zh:"\u9605\u8BFB\u52A9\u624B",en:"Reading help"},{id:"summarize",zh:"\u91CD\u70B9\u63D0\u70BC",en:"Key points"},{id:"expand",zh:"\u5185\u5BB9\u6269\u5199",en:"Expand"}],Nn=new Set(["\u7684","\u4E86","\u662F","\u5728","\u548C","\u4E0E","\u4E5F","\u5C31","\u90FD","\u800C","\u53CA","\u5176","\u4E4B","\u7740","\u8FC7","\u628A","\u88AB","\u8BA9","\u7ED9","\u5BF9","\u4ECE","\u5230","\u5F88","\u66F4","\u6700","\u4E0D","\u6CA1","\u6709","\u4E0A","\u4E0B","\u4E2A","\u8FD9","\u90A3","\u6211","\u4F60","\u4ED6","\u5979","\u5B83","\u4EEC","\u53BB","\u6765","\u4F1A","\u80FD","\u8981"]),Hr=new Set(["the","a","an","and","or","but","if","to","of","in","on","at","for","with","by","is","are","was","were","be","been","being","am","it","its","this","that","these","those","i","you","he","she","we","they","them","his","her","their","our","my","as","so","than","then","there","here","not","no","do","does","did","has","have","had"]);function zn(e,r,t=""){let n=String(e??"");if(n==="")return[n];let a=String(t??"").trim().toLowerCase(),s=a.replace(/(e|y)$/i,""),i=[],o=0,p=0;for(let f of n.matchAll(/[A-Za-z][A-Za-z'’-]{1,24}/g)){let k=f.index??0;k>o&&i.push(n.slice(o,k));let d=f[0],b=d.replace(/['’-]+$/,""),m=a!==""&&s!==""&&b.toLowerCase().startsWith(s)&&b.length-a.length<=3;if(p+=1,!m&&Hr.has(b.toLowerCase())){i.push(d),o=k+d.length;continue}let x=c.createElement("button",{type:"button",className:m?"cbt-word cbt-word--head":"cbt-word","data-cbt-word":b,key:`${k}-${p}`,onClick:()=>r(b)},d);i.push(m?c.createElement("mark",{className:"cbt-mark",key:`m${k}`},x):x),o=k+d.length}return o<n.length&&i.push(n.slice(o)),i.length===0?[n]:i}function Rn(e,r){let t=String(e??"");if(t==="")return[t];let n=null;try{n=new Intl.Segmenter(void 0,{granularity:"word"})}catch{n=null}if(n===null)return[t];let a=[],s=0;for(let i of n.segment(t)){let o=i.segment;if(!i.isWordLike||Hr.has(o.toLowerCase())||Nn.has(o)){a.push(o);continue}s+=1,a.push(c.createElement("button",{type:"button",className:"cbt-word","data-cbt-word":o,key:`${i.index}-${s}`,onClick:()=>r(o)},o))}return a.length===0?[t]:a}async function de(e,r){let t=await fetch(`${vt}${e}`,r),n;try{n=await t.json()}catch{throw new Error(`\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE JSON\uFF08HTTP ${t.status}\uFF09`)}if(n?.ok!==!0)throw new Error(n?.error?.message??`\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);return n.result}function Gr({t:e,locale:r=()=>"zh",inputActions:t}){let n=r()!=="en",a=c.useCallback((l,w)=>n?l:w,[n]),[s,i]=c.useState("translate"),[o,p]=c.useState("auto"),[f,k]=c.useState(()=>n?"en":"zh"),[d,b]=c.useState("text"),[m,x]=c.useState(""),[M,A]=c.useState(""),[h,C]=c.useState(null),[T,P]=c.useState(null),[z,S]=c.useState(null),[L,$]=c.useState(!1),[D,B]=c.useState(""),[we,le]=c.useState(""),[X,Re]=c.useState([]),[ve,me]=c.useState(null),[ge,ue]=c.useState(null),[ke,be]=c.useState(""),[Ce,te]=c.useState("idle"),[Te,W]=c.useState(""),[Fe,v]=c.useState(""),[I,O]=c.useState(!1),[G,Z]=c.useState(0),[Y,Ie]=c.useState([]),[K,he]=c.useState(null),[u,y]=c.useState({due:0,total:0,newCards:0}),[E,_]=c.useState("all"),[H,J]=c.useState(""),[pe,oe]=c.useState(!1),Se=c.useRef(null),xe=c.useRef([]),ye=c.useRef(0),$e=c.useCallback(()=>{ye.current!==0&&(clearInterval(ye.current),ye.current=0)},[]),j=c.useCallback(async(l=E,w=H)=>{try{let q=new URLSearchParams;l!=="all"&&q.set("kind",l),w.trim()!==""&&q.set("search",w.trim());let Q=await de(`/favorites?${q.toString()}`);Ie(Q.items??[]),Q.counts&&y(Q.counts)}catch(q){W(String(q?.message??q))}},[E,H]);c.useEffect(()=>{j("all","")},[]),c.useEffect(()=>{let l=!1;return fetch(`${vt}/translate/engine`).then(w=>w.json()).then(w=>{!l&&w?.ok===!0&&C(w.result)}).catch(()=>{}),()=>{l=!0}},[]),c.useEffect(()=>()=>{$e();try{Se.current?.stream?.getTracks?.().forEach(l=>l.stop())}catch{}},[$e]);let ee=async(l=m)=>{let w=l.trim();if(w===""){W(a("\u5148\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57","Type something to translate first"));return}te("working"),W(""),oe(!1),P(null),S(null),me(null),Re([]);let q=Sn(w)?"dict":"sentence",Q=f==="zh"?"zh":"en";try{let re=await de("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w,from:o,to:f,locale:q==="dict"?Q:n?"zh":"en",mode:q})});q==="dict"?(P(re.dict),A(""),le("input"),rt(re.dict.word)):A(re.translated),C(Ge=>({...Ge??{},last:{engine:re.engine,ms:re.ms}})),te("done")}catch(re){W(String(re?.message??re)),te("idle")}},tt=()=>{if(f==="auto"){k(o==="auto"?"zh":o),p("auto");return}p(f),k(o==="auto"?"zh":o),M!==""&&(x(M),A(""))},la=async l=>{te("working"),W(""),oe(!1),v(l.name);try{let w=await de(`/translate/file?name=${encodeURIComponent(l.name)}`,{method:"POST",headers:{"content-type":l.type||"application/octet-stream"},body:l});x(w.text);let q=await de("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w.text,from:o,to:f,locale:n?"zh":"en"})});A(q.translated),te("done"),b("text"),w.truncated&&W(a("\u6587\u4EF6\u8F83\u957F\uFF0C\u53EA\u7FFB\u8BD1\u4E86\u524D 6 \u4E07\u4E2A\u5B57\u7B26","Long document: only the first 60,000 characters were translated"))}catch(w){W(String(w?.message??w)),te("idle")}},pa=async()=>{W("");try{let l=await navigator.mediaDevices.getUserMedia({audio:!0}),w=new MediaRecorder(l);xe.current=[],w.ondataavailable=q=>{q.data?.size>0&&xe.current.push(q.data)},w.onstop=async()=>{$e(),l.getTracks().forEach(Q=>Q.stop()),O(!1),te("working");let q=new Blob(xe.current,{type:w.mimeType||"audio/webm"});try{let{transcribe:Q}=await Promise.resolve().then(()=>(_r(),jr)),re=await Q(q);x(re),b("text"),te("idle")}catch(Q){W(String(Q?.message??Q)),te("idle")}},Se.current=w,w.start(),O(!0),Z(0),ye.current=setInterval(()=>Z(q=>q+1),1e3)}catch(l){let w=l?.name==="NotAllowedError"||l?.name==="SecurityError";W(w?a("\u6CA1\u6709\u9EA6\u514B\u98CE\u6743\u9650","No microphone permission"):String(l?.message??l))}},da=async()=>{if(m.trim()!=="")try{await de("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"sentence",source:m,target:M,from:o,to:f})}),oe(!0),await j()}catch(l){W(String(l?.message??l))}},Ct=l=>{let w=l.currentTarget,q=typeof window.getSelection=="function"?window.getSelection():null,Q=String(q?.toString?.()??"").trim();if(Q===""||Q.length>40){me(null);return}let re=q?.rangeCount>0?q.getRangeAt(0):null;if(re===null||w===null||!w.contains(re.commonAncestorContainer)){me(null);return}let Ge=re.getBoundingClientRect();me({text:Q,x:Math.round(Ge.left-w.getBoundingClientRect().left),y:Math.round(Ge.top-w.getBoundingClientRect().top)})},Le=async l=>{W(""),oe(!1),te("working"),T!==null&&T.word.toLowerCase()!==l.toLowerCase()&&Re(w=>[...w,T]);try{let w=await de("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:l,mode:"dict",locale:f==="zh"?"zh":"en"})});P(w.dict),S(null),le("result"),te("done"),rt(w.dict.word)}catch(w){W(String(w?.message??w)),te("idle")}},ua=()=>{if(X.length>0){let l=X[X.length-1];Re(X.slice(0,-1)),P(l),S(null),rt(l.word);return}P(null),S(null),Re([]),le("")},rt=async l=>{S(null),$(!0);try{let w=await de("/translate",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:l,mode:"expand",locale:f==="zh"?"zh":"en"})});S(w.expand)}catch{S(null)}finally{$(!1)}},ba=async(l,w)=>{B(w);try{let q=await de("/speak",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:l,accent:w})}),Q=new Audio(`data:${q.mime};base64,${q.base64}`);Q.onended=()=>B(""),Q.onerror=()=>B(""),await Q.play()}catch(q){B(""),W(String(q?.message??q))}},ha=async l=>{try{await de("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"add",kind:"word",source:l.word,target:l.senses.map(w=>w.meaning).join("\uFF1B"),from:o,to:f})}),oe(!0),await j()}catch(w){W(String(w?.message??w))}},fa=async l=>{let w=m.trim();if(w===""){W(a("\u5148\u5728\u8F93\u5165\u6846\u91CC\u5199\u70B9\u5185\u5BB9","Type something first"));return}W(""),be(l);try{let q=await de("/assist",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({task:l,text:w})});ue({task:l,...q})}catch(q){W(String(q?.message??q))}finally{be("")}},ma=async()=>{W("");try{let w=(await de("/favorites?due=1&limit=30")).items??[];if(w.length===0){he({cards:[],index:0,revealed:!1,done:!0});return}he({cards:w,index:0,revealed:!1,done:!1})}catch(l){W(String(l?.message??l))}},ga=async l=>{if(K===null)return;let w=K.cards[K.index];if(w===void 0)return;try{await de("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"grade",id:w.id,grade:l})})}catch(re){W(String(re?.message??re))}let q=l==="again"?[...K.cards,w]:K.cards,Q=K.index+1;if(Q>=q.length){he({cards:q,index:Q,revealed:!1,done:!0}),await j();return}he({cards:q,index:Q,revealed:!1,done:!1})},xa=async l=>{try{await de("/favorites",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action:"remove",id:l})}),await j()}catch(w){W(String(w?.message??w))}},at=async l=>{try{await navigator.clipboard.writeText(l)}catch{W(a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u6587\u672C","Copy failed \u2014 select the text manually"))}};return c.createElement("div",{className:"cbt-page"},c.createElement("div",{className:"cbt-viewtabs",role:"tablist"},[["translate",a("\u7FFB\u8BD1","Translate")],["favorites",a("\u6536\u85CF\u672C","Saved")],["review",a("\u590D\u4E60","Review")]].map(([l,w])=>c.createElement("button",{key:l,type:"button",role:"tab",className:"cbt-viewtab","data-cbt-view":l,"aria-selected":l==="review"?K!==null?"true":"false":s===l?"true":"false",onClick:()=>{if(l==="review"){i("favorites"),ma();return}he(null),i(l)}},w,l==="favorites"&&(u.total||Y.length)>0?` \xB7 ${u.total||Y.length}`:"",l==="review"&&u.due>0?` \xB7 ${u.due}`:""))),s==="translate"?c.createElement(c.Fragment,null,c.createElement("div",{className:"cbt-bar"},c.createElement("select",{className:"cbt-select",value:o,onChange:l=>p(l.target.value),"aria-label":a("\u6E90\u8BED\u8A00","Source language")},Ur.map(l=>c.createElement("option",{key:l.id,value:l.id},n?l.zh:l.en))),c.createElement("button",{type:"button",className:"cbt-swap",onClick:tt,title:a("\u4EA4\u6362\u8BED\u8A00","Swap"),"aria-label":a("\u4EA4\u6362\u8BED\u8A00","Swap")},"\u21C4"),c.createElement("select",{className:"cbt-select",value:f,onChange:l=>k(l.target.value),"aria-label":a("\u76EE\u6807\u8BED\u8A00","Target language")},Ur.filter(l=>l.id!=="auto").map(l=>c.createElement("option",{key:l.id,value:l.id},n?l.zh:l.en))),c.createElement("span",{className:"cbt-spacer"}),c.createElement("div",{className:"cbt-tabs",role:"tablist"},["text","voice","file"].map(l=>c.createElement("button",{key:l,type:"button",role:"tab",className:"cbt-tab","data-cbt-tab":l,"aria-selected":d===l?"true":"false",onClick:()=>b(l)},l==="text"?a("\u6587\u5B57","Text"):l==="voice"?a("\u8BED\u97F3","Voice"):a("\u6587\u4EF6","File"))))),c.createElement("div",{className:"cbt-assist-bar","data-cbt-assist-bar":"true"},Wr.map(l=>c.createElement("button",{key:l.id,type:"button",className:"cbt-assist","data-cbt-assist":l.id,"aria-busy":ke===l.id?"true":"false",disabled:ke!=="",onClick:()=>{fa(l.id)}},ke===l.id?"\u2026":n?l.zh:l.en))),d==="text"?c.createElement("textarea",{className:"cbt-input","data-cbt-source":"true",placeholder:a("\u8F93\u5165\u8981\u7FFB\u8BD1\u7684\u6587\u5B57\uFF0CCtrl / \u2318 + Enter \u7FFB\u8BD1","Type text to translate \u2014 Ctrl / \u2318 + Enter"),value:m,onChange:l=>x(l.target.value),onKeyDown:l=>{l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&(l.preventDefault(),ee())}}):null,d==="voice"?c.createElement("div",{className:"cbt-voice"},c.createElement("button",{type:"button",className:"cbt-rec","data-cbt-record":I?"on":"off","aria-label":I?a("\u505C\u6B62\u5F55\u97F3","Stop recording"):a("\u5F00\u59CB\u5F55\u97F3","Start recording"),onClick:I?()=>Se.current?.stop():pa},c.createElement("span",{className:"cbt-rec-dot"})),c.createElement("span",{className:"cbt-hint"},I?`${String(Math.floor(G/60)).padStart(2,"0")}:${String(G%60).padStart(2,"0")} \xB7 ${a("\u518D\u70B9\u4E00\u4E0B\u7ED3\u675F","tap again to stop")}`:a("\u5F55\u97F3\u5728\u672C\u673A\u8F6C\u5199\uFF0C\u5B8C\u6210\u540E\u586B\u8FDB\u6587\u5B57\u6846","Transcribed on this machine, then placed in the text box"))):null,d==="file"?c.createElement("label",{className:"cbt-drop"},c.createElement("input",{type:"file",accept:".pdf,.docx,.txt,.md,.markdown,.html,.htm,.csv,.json","data-cbt-file":"true",onChange:l=>{let w=l.target.files?.[0];w&&la(w),l.target.value=""}}),c.createElement("span",{className:"cbt-drop-title"},a("\u9009\u62E9\u4E00\u4E2A\u6587\u6863","Pick a document")),c.createElement("span",{className:"cbt-hint"},a("PDF / DOCX / TXT / Markdown / HTML\uFF0C30 MB \u4EE5\u5185","PDF / DOCX / TXT / Markdown / HTML, up to 30 MB"))):null,Fe!==""?c.createElement("div",{className:"cbt-doc","data-cbt-doc":"true"},Fe):null,c.createElement("div",{className:"cbt-actions"},c.createElement("button",{type:"button",className:"cbt-btn cbt-btn-primary","data-cbt-translate":"true",disabled:Ce==="working",onClick:()=>{ee()}},Ce==="working"?a("\u7FFB\u8BD1\u4E2D\u2026","Translating\u2026"):a("\u7FFB\u8BD1","Translate")),c.createElement("span",{className:"cbt-hint"},m.trim()===""?"":a(`${m.trim().length} \u5B57\u7B26`,`${m.trim().length} chars`))),T!==null?c.createElement("div",{className:"cbt-dict","data-cbt-dict":"true"},we==="result"?c.createElement("button",{type:"button",className:"cbt-back","data-cbt-back":"true",onClick:ua},"\u2190"," ",X.length>0?`${a("\u8FD4\u56DE","Back to")} ${X[X.length-1].word}`:a("\u8FD4\u56DE\u8BD1\u6587","Back to translation")):null,c.createElement("div",{className:"cbt-dict-head"},c.createElement("span",{className:"cbt-dict-word"},T.word),T.phonetic?c.createElement("span",{className:"cbt-dict-phonetic"},T.phonetic):null,c.createElement("span",{className:"cbt-dict-play"},[["en-US",a("\u7F8E","US")],["en-GB",a("\u82F1","UK")]].map(([l,w])=>c.createElement("button",{key:l,type:"button",className:"cbt-speak","data-cbt-speak":l,"aria-label":`${a("\u6717\u8BFB","Pronounce")} ${w}`,onClick:()=>{ba(T.word,l)}},c.createElement("span",{className:"cbt-speak-icon","aria-hidden":"true"},D===l?"\u25A0":"\u25B6"),w)))),c.createElement("ul",{className:"cbt-dict-senses"},T.senses.map((l,w)=>c.createElement("li",{key:w,className:"cbt-dict-sense"},l.pos?c.createElement("span",{className:"cbt-dict-pos"},l.pos):null,c.createElement("span",{className:"cbt-dict-meaning"},l.meaning),l.example?c.createElement("div",{className:"cbt-dict-example","data-cbt-example":"true"},zn(l.example,q=>{Le(q)},T.word)):null))),L?c.createElement("div",{className:"cbt-dict-loading"},a("\u6B63\u5728\u6269\u5C55\u8BCD\u6761\u2026","Loading word details\u2026")):null,z&&z.forms.length>0?c.createElement("div",{className:"cbt-dict-section","data-cbt-forms":"true"},c.createElement("div",{className:"cbt-dict-label"},a("\u8BCD\u5F62","Forms")),c.createElement("div",{className:"cbt-dict-chips"},z.forms.map((l,w)=>c.createElement("span",{className:"cbt-dict-chip",key:w},c.createElement("span",{className:"cbt-dict-chip-label"},l.label)," ",l.value)))):null,z&&(z.synonyms.length>0||z.antonyms.length>0)?c.createElement("div",{className:"cbt-dict-section"},z.synonyms.length>0?c.createElement("div",{className:"cbt-dict-row"},c.createElement("span",{className:"cbt-dict-label"},a("\u8FD1\u4E49","Synonyms")),c.createElement("span",{className:"cbt-dict-words"},z.synonyms.map((l,w)=>c.createElement(c.Fragment,{key:l},c.createElement("button",{type:"button",className:"cbt-word cbt-word--rel","data-cbt-related":l,onClick:()=>{Le(l)}},l),w<z.synonyms.length-1?c.createElement("span",{className:"cbt-sep"}," \xB7 "):null)))):null,z.antonyms.length>0?c.createElement("div",{className:"cbt-dict-row"},c.createElement("span",{className:"cbt-dict-label"},a("\u53CD\u4E49","Antonyms")),c.createElement("span",{className:"cbt-dict-words"},z.antonyms.map((l,w)=>c.createElement(c.Fragment,{key:l},c.createElement("button",{type:"button",className:"cbt-word cbt-word--rel","data-cbt-related":l,onClick:()=>{Le(l)}},l),w<z.antonyms.length-1?c.createElement("span",{className:"cbt-sep"}," \xB7 "):null)))):null):null,z&&z.phrases.length>0?c.createElement("div",{className:"cbt-dict-section","data-cbt-phrases":"true"},c.createElement("div",{className:"cbt-dict-label"},a("\u5E38\u89C1\u642D\u914D","Phrases")),c.createElement("ul",{className:"cbt-dict-phrases"},z.phrases.map((l,w)=>c.createElement("li",{key:w},c.createElement("button",{type:"button",className:"cbt-word cbt-word--phrase","data-cbt-phrase":l.en,onClick:()=>{Le(l.en)}},l.en),l.zh?c.createElement("span",{className:"cbt-dict-phrase-zh"},l.zh):null)))):null,z&&z.mnemonic?c.createElement("div",{className:"cbt-dict-section"},c.createElement("div",{className:"cbt-dict-label"},a("\u8BB0\u5FC6","Memory hook")),c.createElement("div",{className:"cbt-dict-mnemonic"},z.mnemonic)):null,T.note?c.createElement("div",{className:"cbt-dict-note"},T.note):null,c.createElement("div",{className:"cbt-actions"},c.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{at(T.word+" "+T.senses.map(l=>l.meaning).join("\uFF1B"))}},a("\u590D\u5236","Copy")),c.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{ha(T)}},pe?a("\u5DF2\u6536\u85CF","Saved"):a("\u6536\u85CF","Save")))):null,M!==""?c.createElement("div",{className:"cbt-result","data-cbt-result":"true"},c.createElement("div",{className:"cbt-result-text","data-cbt-result-text":"true",onMouseUp:Ct,onKeyUp:Ct},Rn(M,l=>{Le(l)}),ve!==null?c.createElement("button",{type:"button",className:"cbt-pick","data-cbt-pick":"true",style:{left:`${ve.x}px`,top:`${Math.max(0,ve.y-26)}px`},onMouseDown:l=>l.preventDefault(),onClick:()=>{let l=ve.text;me(null),Le(l)}},a("\u67E5\u8BE2","Look up"),"\u300C",ve.text,"\u300D"):null),c.createElement("div",{className:"cbt-actions"},c.createElement("button",{type:"button",className:"cbt-btn",onClick:()=>{at(M)}},a("\u590D\u5236","Copy")),c.createElement("button",{type:"button",className:"cbt-btn","data-cbt-save":"true",onClick:()=>{da()}},pe?a("\u5DF2\u6536\u85CF","Saved"):a("\u6536\u85CF","Save")),typeof t?.setDraft=="function"?c.createElement("button",{type:"button",className:"cbt-btn","data-cbt-fill":"true",onClick:()=>t.setDraft({text:M,references:[]})},a("\u586B\u5165\u8F93\u5165\u6846","Put in composer")):null)):null,ge!==null?c.createElement("div",{className:"cbt-assist-result","data-cbt-assist-result":"true"},c.createElement("div",{className:"cbt-assist-head"},c.createElement("span",{className:"cbt-assist-title"},(Wr.find(l=>l.id===ge.task)??{})[n?"zh":"en"]),c.createElement("span",{className:"cbt-assist-meta"},ge.engine==="local"?a("\u672C\u673A","Local"):a("\u5BBF\u4E3B\u6A21\u578B","Host")," \xB7 ",ge.ms," ms"),c.createElement("span",{className:"cbt-spacer"}),c.createElement("button",{type:"button",className:"cbt-link","data-cbt-assist-copy":"true",onClick:()=>{at(ge.text)}},a("\u590D\u5236","Copy")),c.createElement("button",{type:"button",className:"cbt-link","data-cbt-assist-close":"true",onClick:()=>ue(null),"aria-label":a("\u5173\u95ED","Close")},"\u2715")),c.createElement("div",{className:"cbt-assist-text","data-cbt-assist-text":"true"},ge.text)):null,c.createElement("div",{className:"cbt-engine","data-cbt-engine":"true"},h===null?"":h.local?`${a("\u672C\u673A\u6A21\u578B","Local")} \xB7 ${h.model||"local"}${h.last?` \xB7 ${h.last.ms} ms`:""}`:`${a("\u5BBF\u4E3B\u6A21\u578B","Host model")}${h.last?` \xB7 ${h.last.ms} ms`:""}`),Te!==""?c.createElement("p",{className:"cbt-error","data-cbt-error":"true"},Te):null):K!==null?c.createElement("div",{className:"cbt-review","data-cbt-review":"true"},K.done?c.createElement("div",{className:"cbt-review-done"},c.createElement("div",{className:"cbt-review-title"},a("\u4ECA\u65E5\u590D\u4E60\u5B8C\u6210","Review done for today")),c.createElement("p",{className:"cbt-review-hint"},a("\u5361\u7247\u4F1A\u6309\u95F4\u9694\u81EA\u52A8\u5B89\u6392\u4E0B\u4E00\u6B21\u590D\u4E60\u3002","Cards are scheduled automatically for their next review.")),c.createElement("button",{type:"button",className:"cbt-primary","data-cbt-review-exit":"true",onClick:()=>{he(null),j()}},a("\u56DE\u5230\u6536\u85CF\u672C","Back to saved"))):c.createElement(c.Fragment,null,c.createElement("div",{className:"cbt-review-head"},c.createElement("span",{className:"cbt-review-progress","data-cbt-review-progress":"true"},K.index+1," / ",K.cards.length),c.createElement("button",{type:"button",className:"cbt-link",onClick:()=>{he(null),j()}},a("\u7ED3\u675F","End"))),c.createElement("div",{className:"cbt-review-card","data-cbt-review-card":"true"},c.createElement("div",{className:"cbt-review-word"},K.cards[K.index]?.source),K.revealed?c.createElement("div",{className:"cbt-review-answer","data-cbt-review-answer":"true"},K.cards[K.index]?.target):c.createElement("button",{type:"button",className:"cbt-primary","data-cbt-reveal":"true",onClick:()=>he({...K,revealed:!0})},a("\u663E\u793A\u7B54\u6848","Show answer"))),K.revealed?c.createElement("div",{className:"cbt-review-grades"},[["again",a("\u4E0D\u4F1A","Again")],["hard",a("\u6A21\u7CCA","Hard")],["good",a("\u4F1A\u4E86","Good")]].map(([l,w])=>c.createElement("button",{key:l,type:"button",className:"cbt-grade","data-cbt-grade":l,onClick:()=>{ga(l)}},w))):null)):c.createElement(c.Fragment,null,c.createElement("div",{className:"cbt-bar"},[["all",a("\u5168\u90E8","All")],["word",a("\u5355\u8BCD","Words")],["sentence",a("\u53E5\u5B50","Sentences")]].map(([l,w])=>c.createElement("button",{key:l,type:"button",className:"cbt-chip","data-cbt-kind":l,"aria-pressed":E===l?"true":"false",onClick:()=>{_(l),j(l,H)}},w)),c.createElement("span",{className:"cbt-spacer"}),c.createElement("a",{className:"cbt-link",href:`${vt}/favorites/export`,download:"favorites.md"},a("\u5BFC\u51FA Markdown","Export Markdown"))),c.createElement("input",{className:"cbt-search","data-cbt-search":"true",placeholder:a("\u641C\u7D22\u6536\u85CF","Search saved"),value:H,onChange:l=>{J(l.target.value),j(E,l.target.value)}}),c.createElement("div",{className:"cbt-list","data-cbt-favorites":"true"},Y.length===0?c.createElement("p",{className:"cbt-empty"},a("\u8FD8\u6CA1\u6709\u6536\u85CF\u3002\u7FFB\u8BD1\u540E\u70B9\u300C\u6536\u85CF\u300D\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002","Nothing saved yet \u2014 translate something and press Save.")):Y.map(l=>c.createElement("div",{className:"cbt-item",key:l.id,"data-cbt-item":l.id},c.createElement("div",{className:"cbt-item-source"},l.source),l.target?c.createElement("div",{className:"cbt-item-target"},l.target):null,c.createElement("div",{className:"cbt-item-foot"},c.createElement("span",{className:"cbt-item-kind"},l.kind==="word"?a("\u5355\u8BCD","Word"):a("\u53E5\u5B50","Sentence")),c.createElement("button",{type:"button",className:"cbt-item-remove",onClick:()=>{xa(l.id)},"aria-label":a("\u5220\u9664","Delete")},"\u2715"))))),Te!==""?c.createElement("p",{className:"cbt-error"},Te):null))}var Kr=`
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
.cbt-assist-bar{display:flex;gap:5px;flex-wrap:wrap}
.cbt-assist{
  height:24px;padding:0 10px;border-radius:999px;cursor:pointer;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 11%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-label-primary) 4%,transparent);
  color:var(--dsw-alias-label-secondary);font-size:11.5px;white-space:nowrap;
}
.cbt-assist:hover{background:color-mix(in oklab,#635BFF 12%,transparent);border-color:color-mix(in oklab,#635BFF 35%,transparent);color:var(--dsw-alias-label-primary)}
.cbt-assist[aria-busy="true"]{opacity:.75}
.cbt-assist:disabled{cursor:default;opacity:.5}
.cbt-assist-result{
  padding:12px;border-radius:12px;display:flex;flex-direction:column;gap:8px;
  border:1px solid color-mix(in oklab,#635BFF 26%,transparent);
  background:color-mix(in oklab,#635BFF 7%,transparent);
  max-height:240px;overflow:auto;
}
.cbt-assist-head{display:flex;align-items:center;gap:8px;font-size:11.5px}
.cbt-assist-title{font-weight:600;color:var(--dsw-alias-label-primary)}
.cbt-assist-meta{color:var(--dsw-alias-label-tertiary);font-size:10.5px}
.cbt-assist-text{font-size:12.5px;line-height:1.65;white-space:pre-wrap;color:var(--dsw-alias-label-primary)}
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
`;function Qr({name:e}){let r={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return N.createElement("svg",{...r},N.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),N.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return N.createElement("svg",{...r},N.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),N.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),N.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return N.createElement("svg",{...r},N.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),N.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return N.createElement("svg",{...r},N.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),N.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return N.createElement("svg",{...r},N.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),N.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return N.createElement("svg",{...r},N.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),N.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),N.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"translate":return N.createElement("svg",{...r},N.createElement("path",{d:"M2.4 4.2h6M5.4 4.2v1.2c0 2.6-1.4 4.7-3.4 5.6"}),N.createElement("path",{d:"M3.9 8.4c.9 1.4 2.1 2.4 3.5 2.9"}),N.createElement("path",{d:"M9.4 13.6 11.6 8l2.2 5.6M10.2 11.9h2.8"}));case"slides":return N.createElement("svg",{...r},N.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),N.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return N.createElement("svg",{...r},N.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),N.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),N.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),N.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function Cn(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let r=e.closest('[data-composer-card="true"]');if(r)return r}return document.querySelector('[data-composer-card="true"]')}function Tn({t:e,locale:r,inputActions:t,onClose:n}){return N.createElement(Be,{title:e("sheet.translate.title"),hint:e("sheet.translate.hint"),onClose:n,t:e,wide:!0},N.createElement(Gr,{t:e,locale:r,inputActions:t}))}function Jr({inputActions:e,t:r,locale:t,sessionId:n=""}){let a=typeof e?.setDraft=="function",[s,i]=N.useState(!1),[o,p]=N.useState(null),[f,k]=N.useState(null),d=N.useRef(null),b=N.useRef(null),[m,x]=N.useState(null);N.useEffect(()=>{x(Cn())},[]);let M=N.useCallback(()=>{let S=d.current?.getBoundingClientRect();S!=null&&k({right:Math.max(8,Math.round(window.innerWidth-S.right)),bottom:Math.max(8,Math.round(window.innerHeight-S.top)+8)})},[]);N.useLayoutEffect(()=>{s&&M()},[s,M]),N.useEffect(()=>{if(!s)return;let S=D=>{let B=D.target;B instanceof Node&&b.current?.contains(B)!==!0&&d.current?.contains(B)!==!0&&i(!1)},L=D=>{D.key==="Escape"&&(D.preventDefault(),D.stopPropagation(),i(!1),d.current?.focus?.())},$=()=>i(!1);return document.addEventListener("pointerdown",S,!0),document.addEventListener("keydown",L,!0),window.addEventListener("resize",$),window.addEventListener("scroll",$,!0),()=>{document.removeEventListener("pointerdown",S,!0),document.removeEventListener("keydown",L,!0),window.removeEventListener("resize",$),window.removeEventListener("scroll",$,!0)}},[s]);let A=S=>{if(typeof S.sheet=="string"){i(!1),p(S.sheet);return}let L=wt(S.prompt,typeof t=="function"?t():"zh");try{e.setDraft({text:L,references:[]})}catch{try{e.setDraft(L)}catch{}}i(!1),d.current?.focus?.()},h=r("quick.label"),C=typeof t=="function"?t():"zh";N.useEffect(()=>{let S=d.current;if(S===null)return;let L=window.matchMedia("(max-width:520px)"),$=window.matchMedia("(max-width:380px)"),D=()=>{let B=L.matches?$.matches?20:22:0;for(let we of["height","min-height","max-height","line-height"])B===0?S.style.removeProperty(we):S.style.setProperty(we,`${B}px`,"important")};return D(),L.addEventListener("change",D),$.addEventListener("change",D),()=>{L.removeEventListener("change",D),$.removeEventListener("change",D)}},[]);let T=N.createElement("button",{ref:d,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":s?"true":"false","aria-label":r("quick.aria"),title:r(a?"quick.aria":"quick.disabled"),disabled:!a,onMouseDown:S=>S.preventDefault(),onClick:()=>i(S=>!S)},N.createElement(Qr,{name:"grid"}),N.createElement("span",{className:"cbp-more-label"},h)),P=s&&f!==null?(0,kt.createPortal)(N.createElement("div",{ref:b,className:"cbp-quick-panel",role:"menu","aria-label":r("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${f.right}px`,bottom:`${f.bottom}px`}},N.createElement("div",{className:"cbp-quick-head"},N.createElement("span",{className:"cbp-quick-title"},r("quick.title")),N.createElement("span",{className:"cbp-quick-hint"},r("quick.hint"))),N.createElement("div",{className:"cbp-quick-grid"},Fr.map(S=>N.createElement("button",{key:S.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":S.id,onClick:()=>A(S)},N.createElement("span",{className:"cbp-quick-icon"},N.createElement(Qr,{name:S.icon})),N.createElement("span",{className:"cbp-quick-name"},wt({zh:S.zh,en:S.en},C)))))),document.body):null,z=S=>{typeof S=="string"&&S.trim()!==""&&Lr(e,S),p(null)};return N.createElement(N.Fragment,null,N.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),m!==null?(0,kt.createPortal)(T,m):null,P,o==="transcribe"?N.createElement(qr,{t:r,locale:t,onClose:()=>p(null),onFill:z}):null,o==="write"?N.createElement(Dr,{t:r,locale:t,sessionId:n,onClose:()=>p(null),onFill:z}):null,o==="deck"?N.createElement(Br,{t:r,locale:t,sessionId:n,onClose:()=>p(null)}):null,o==="video"?N.createElement($r,{t:r,onClose:()=>p(null),onFill:z}):null,o==="translate"?N.createElement(Tn,{t:r,locale:t,inputActions:e,onClose:()=>p(null)}):null)}var Vr=`
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
/* Phones: the pill sits inside a narrow composer, so it has to be flat and
   light \u2014 a 28px capsule with a heavy shadow reads as a floating button and
   eats the first line of the input. */
@media (max-width:520px){
  /* The shell pins every button to a 44px touch target on phones (!important),
     which is what made this pill look tall. A word chip is not a primary
     control, so the height has to be forced back down here. */
  .cbp-more{
    top:8px !important;
    right:8px !important;
    height:22px !important;
    min-height:22px !important;
    max-height:22px !important;
    padding:0 9px !important;
    gap:4px !important;
    font-size:11px !important;
    line-height:22px !important;
    border-radius:999px !important;
    box-shadow:0 1px 1px color-mix(in oklab,var(--dsw-alias-label-primary,#0f1115) 5%,transparent),inset 0 1px 0 color-mix(in oklab,#ffffff 32%,transparent) !important;
    -webkit-backdrop-filter:blur(12px) saturate(140%) !important;
    backdrop-filter:blur(12px) saturate(140%) !important;
  }
  .cbp-more svg{width:11px !important;height:11px !important}
  /* The pill is shorter but not narrower \u2014 it still holds an icon and a word. */
  [data-composer-card="true"] [class*="_input"]{padding-right:100px !important}
  .cbp-quick-panel{width:min(316px,calc(100vw - 24px))}
}
@media (max-width:380px){
  .cbp-more{height:20px !important;min-height:20px !important;max-height:20px !important;line-height:20px !important;padding:0 8px !important;font-size:10.5px !important;gap:3px !important}
  .cbp-more svg{width:10px !important;height:10px !important}
  [data-composer-card="true"] [class*="_input"]{padding-right:92px !important}
}
@media (prefers-reduced-motion: reduce){
  .cbp-quick-panel{animation:none}
}
`;var ta="/api/chatbox-pet/boost",Yr=4e3,Mn=12e4,En=24,Fn=8e3,ra=25e3;function aa(e){return{set:typeof e?.set=="function"?e.set:(r,t)=>setTimeout(r,t),clear:typeof e?.clear=="function"?e.clear:r=>clearTimeout(r)}}function Rt(e){let r=typeof e=="string"?e:"";return r.length>Yr?r.slice(0,Yr):r}function Xr(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function We(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(r=>({...r})):[]}}function St(e){if(!Array.isArray(e))return[];let r=[];for(let t of e){if(t===null||typeof t!="object")continue;let n=typeof t.id=="string"?t.id.trim():"",a=Number(t.count);n===""||!Number.isFinite(a)||a<=0||r.push({id:n,label:typeof t.label=="string"&&t.label.trim()!==""?t.label.trim():n,count:Math.round(a)})}return r}function He(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function ce(e,r,t){let n=new Error(typeof r=="string"&&r!==""?r:e);return n.code=e,t!==void 0&&(n.cause=t),n}function Zr(e){let r=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",t=typeof e?.message=="string"&&e.message!==""&&e.message!==r?e.message:void 0;return t===void 0?{code:r}:{code:r,message:t}}function In(e){let r=[],t=e;for(;;){let n=/(?:\r?\n){2}/.exec(t);if(n===null)break;r.push(t.slice(0,n.index)),t=t.slice(n.index+n[0].length)}return{frames:r,rest:t}}function ea(e){let r=[];for(let t of e.split(`
`)){let n=t.trim();n===""||n.startsWith(":")||n.startsWith("data:")&&r.push(n.slice(5).trimStart())}if(r.length===0)return null;try{let t=JSON.parse(r.join(`
`));return t!==null&&typeof t=="object"&&Array.isArray(t)===!1?t:null}catch{return null}}async function Nt(e){try{return await e.json()}catch{return null}}function zt(e,r){if(e===null||typeof e!="object")throw ce("host",void 0,r);if(e.ok!==!0){let a=typeof e.error?.message=="string"?e.error.message.trim():"";throw ce(typeof e.error?.code=="string"?e.error.code:"host",a===""?void 0:a)}let t=e.result,n=typeof t?.prompt=="string"?t.prompt.trim():"";if(n==="")throw ce("empty");return{prompt:n,mode:t.mode==="compose"?"compose":"improve",sources:St(t.sources),elapsedMs:Number.isFinite(t.elapsedMs)?Math.max(0,Number(t.elapsedMs)):null,cached:t.cached===!0}}async function Pn(e){let{draft:r,mode:t,locale:n,signal:a,onEvent:s,idleMs:i=ra,sessionId:o=""}=e,p=o===""?{}:{sessionId:o},f=typeof e.fetch=="function"?e.fetch:globalThis.fetch,k=aa(e.timers),d=new AbortController,b=()=>d.abort();a!==void 0&&(a.aborted?d.abort():a.addEventListener("abort",b,{once:!0}));let m=!1,x=null,M=()=>{x!==null&&k.clear(x),x=k.set(()=>{m=!0,d.abort()},i)},A=!1;try{M();let h;try{h=await f(ta,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:Rt(r),mode:t,locale:n,stream:!0,...p}}),signal:d.signal})}catch(S){throw m?ce("timeout",void 0,S):He(S)?S:ce("network",void 0,S)}if(m)throw ce("timeout");if(h===null||typeof h!="object")throw ce("host");if(h.ok!==!0){let S=await Nt(h);if(h.status>=400)throw ce("host",void 0,h.status);let L=zt(S,h.status);s({type:"replace",text:L.prompt}),s({type:"done",result:L});return}let C=typeof h.headers?.get=="function"?String(h.headers.get("content-type")??""):"";if(h.body===null||h.body===void 0||typeof h.body.getReader!="function"||!C.includes("text/event-stream")){let S=zt(await Nt(h),h.status);s({type:"replace",text:S.prompt}),s({type:"done",result:S});return}let T=h.body.getReader(),P=new TextDecoder,z="";for(;!A;){let S;try{S=await T.read()}catch($){throw m?ce("timeout",void 0,$):He($)?$:ce("stream",void 0,$)}if(S.done===!0)break;M(),z+=P.decode(S.value,{stream:!0});let L=In(z);z=L.rest;for(let $ of L.frames){let D=ea($);if(D!==null&&s(D)==="stop"){A=!0;break}}}if(!A){let S=z.trim();if(S!==""){let L=ea(S);L!==null&&s(L)}}if(A)try{await T.cancel()}catch{}}finally{x!==null&&k.clear(x),a!==void 0&&a.removeEventListener("abort",b)}}async function An(e){let{draft:r,mode:t,locale:n,signal:a,sessionId:s=""}=e,i=typeof e.fetch=="function"?e.fetch:globalThis.fetch,o;try{o=await i(ta,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:Rt(r),mode:t,locale:n,stream:!1,...s===""?{}:{sessionId:s}}}),signal:a})}catch(p){throw He(p)?p:ce("network",void 0,p)}if(o===null||typeof o!="object")throw ce("host");if(o.ok!==!0&&o.status>=400)throw ce("host",void 0,o.status);return zt(await Nt(o),o.status)}function Ln(e={}){let r=typeof e.fetch=="function"?e.fetch:void 0,t=typeof e.now=="function"?e.now:()=>Date.now(),n=aa(e.timers),a=Number.isFinite(e.idleMs)?Number(e.idleMs):ra,s=Number.isFinite(e.undoMs)?Number(e.undoMs):Fn,i=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):Mn,o=new WeakMap,p=new WeakMap,f=new WeakMap,k=new WeakMap,d=new WeakMap,b="",m=new Set,x=new Map,M=Xr(),A=We(null),h=null,C=0,T=0,P=null,z=null,S=()=>{for(let u of[...m])try{u()}catch(y){console.error("[prompt-boost] a store listener failed:",y)}},L=u=>u!=null&&(typeof u=="object"||typeof u=="function");function $(u){let y=L(u)?u:z;if(!L(y))return M;let E=o.get(y);return E===void 0&&(E=Xr(),o.set(y,E)),E}function D(u,y){let E=L(u)?u:z,H={...$(E),...y};return L(E)?o.set(E,H):M=H,S(),H}function B(u){let y=L(u)?u:z;return L(y)?f.get(y)??We(null):A}function we(u){return L(u)?u:z}function le(u){let y=L(u)?u:z;if(!L(y))return"default";let E=p.get(y);return E===void 0&&(C+=1,E=`s${C}`,p.set(y,E)),E}function X(u){return`prompt-boost-panel-${le(u)}`}function Re(u,y,E){return`${le(u)}\0${y}\0${E}`}function ve(u){let y=x.get(u);return y===void 0?null:t()-y.at>i?(x.delete(u),null):(x.delete(u),x.set(u,y),y.result)}function me(u,y){for(x.delete(u),x.set(u,{at:t(),result:y});x.size>En;){let E=x.keys().next();if(E.done===!0)break;x.delete(E.value)}}function ge(){if(P===null)return;let u=P;P=null;try{u.controller.abort()}catch{}}function ue(u){let y=L(u)?u:z,E=L(y)?k.get(y):h;E!=null&&n.clear(E),L(y)?k.delete(y):h=null}function ke(u){ue(u);let y=null;y=n.set(()=>{let _=$(u);_.undo!==null&&D(u,{undo:null,phase:_.phase==="applied"?"idle":_.phase,applied:"",prompt:_.phase==="applied"?"":_.prompt,sources:_.phase==="applied"?[]:_.sources})},s);let E=L(u)?u:z;L(E)?k.set(E,y):h=y}function be(u,y,E){let _=we(u),H=We(B(u)),J=!1;if(L(_)&&typeof _.setDraft=="function")try{_.setDraft({text:y.prompt,references:[]}),J=!0}catch{try{_.setDraft(y.prompt),J=!0}catch{J=!1}}if(!J){D(u,{phase:"error",mode:y.mode,prompt:y.prompt,sources:y.sources,elapsedMs:y.elapsedMs,cached:y.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}D(u,{phase:"applied",mode:y.mode,prompt:y.prompt,applied:y.prompt,sources:y.sources,elapsedMs:y.elapsedMs,cached:y.cached===!0,error:null,undo:{draft:H,at:t()},expanded:!1}),ke(u),me(E,y),ie.play("boostDone")}async function Ce(u,y,E){let{draft:_,mode:H,locale:J,key:pe,sessionId:oe}=E,Se=!1,xe=!1,ye=()=>P===y&&y.controller.signal.aborted===!1,$e=j=>{if(!ye())return"stop";if(Se=!0,j.type==="sources"){let ee=$(u);D(u,{sources:St(j.sources),mode:j.mode==="compose"?"compose":ee.mode});return}if(j.type==="delta"){if(typeof j.text!="string"||j.text==="")return;let ee=$(u);D(u,{phase:"streaming",prompt:ee.prompt+j.text});return}if(j.type==="replace"){if(typeof j.text!="string")return;let ee=$(u),tt=ee.phase==="ready"||j.text===""?ee.phase:"streaming";D(u,{prompt:j.text,phase:tt});return}if(j.type==="done"){xe=!0;let ee={prompt:typeof j.result?.prompt=="string"?j.result.prompt.trim():$(u).prompt.trim(),mode:j.result?.mode==="compose"?"compose":H,sources:St(j.result?.sources??$(u).sources),elapsedMs:Number.isFinite(j.result?.elapsedMs)?Math.max(0,Number(j.result.elapsedMs)):null,cached:j.result?.cached===!0};return ee.prompt===""?(D(u,{phase:"error",error:{code:"empty"}}),ie.play("boostFail"),"stop"):(be(u,ee,pe),"stop")}if(j.type==="error"){xe=!0;let ee=typeof j.message=="string"&&j.message.trim()!==""?j.message.trim():void 0;return D(u,{phase:"error",error:ee===void 0?{code:"unknown"}:{code:"host",message:ee}}),"stop"}};try{if(await Pn({draft:_,mode:H,locale:J,sessionId:oe,signal:y.controller.signal,onEvent:$e,fetch:r,timers:n,idleMs:a}),xe)return;if(Se)throw ce("stream");await te(u,y,{draft:_,mode:H,locale:J,key:pe,sessionId:oe})}catch(j){if(y.controller.signal.aborted||He(j)||!ye())return;if(Se){D(u,{phase:"error",error:Zr(j)}),ie.play("boostFail");return}try{await te(u,y,{draft:_,mode:H,locale:J,key:pe,sessionId:oe})}catch(ee){if(y.controller.signal.aborted||He(ee)||!ye())return;D(u,{phase:"error",error:Zr(ee)}),ie.play("boostFail")}}finally{P===y&&(P=null)}}async function te(u,y,E){let _=await An({draft:E.draft,mode:E.mode,locale:E.locale,signal:y.controller.signal,fetch:r,sessionId:E.sessionId??""});P!==y||y.controller.signal.aborted||be(u,_,E.key)}function Te(u,y){let E=typeof y=="string"?y:"";E!==""&&(b=E,L(u)&&d.set(u,E))}function W(u){return L(u)?d.get(u)??b:b}function Fe(u,y){let E=typeof y?.draft=="string"?y.draft:"",_=Array.isArray(y?.occurrences)?y.occurrences:[],H=B(u);if(H.text===E&&H.references.length===_.length)return;let J={text:E,references:_.map(oe=>({...oe}))},pe=L(u)?u:z;L(pe)?f.set(pe,J):A=J}function v(u,y={}){L(u)&&(z=u);let E=y.locale==="en"?"en":"zh",_=y.force===!0,H=B(u),J=Rt(H.text),pe=J.trim()===""?"compose":"improve",oe=Re(u,pe,J);if(ge(),ue(u),!_){let ye=ve(oe);if(ye!==null){be(u,{...ye,cached:!0},oe);return}}T+=1;let Se={seq:T,actions:u,controller:new AbortController};P=Se;let xe=$(u);D(u,{phase:"running",mode:pe,seed:J,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:xe.phase==="idle"&&xe.undo===null?!1:xe.expanded}),ie.play("boostStart"),Ce(u,Se,{draft:J,mode:pe,locale:E,key:oe,sessionId:W(u)})}function I(u,y={}){v(u,{locale:y.locale,force:!0})}function O(u){let y=$(u);if(y.phase!=="ready")return!1;let E=y.prompt.trim();if(E==="")return!1;let _=we(u);if(!L(_)||typeof _.setDraft!="function")return D(u,{phase:"error",error:{code:"apply"}}),!1;let H=We(B(u)),J=!1;try{_.setDraft({text:E,references:[]}),J=!0}catch{try{_.setDraft(E),J=!0}catch{J=!1}}return J?(ue(u),D(u,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:H,at:t()},expanded:!1}),ke(u),!0):(D(u,{phase:"error",error:{code:"apply"}}),!1)}function G(u){let y=$(u);if(y.undo===null)return!1;let E=we(u),_=We(y.undo.draft),H=!1;if(L(E)&&typeof E.setDraft=="function")try{E.setDraft({text:_.text,references:_.references}),H=!0}catch{try{E.setDraft(_.text),H=!0}catch{H=!1}}return ue(u),D(u,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),H}function Z(u){$(u).expanded!==!1&&D(u,{expanded:!1})}function Y(u){let y=$(u);y.phase==="idle"&&y.undo===null||y.expanded===!0||D(u,{expanded:!0})}function Ie(u){$(u).expanded===!0?Z(u):Y(u)}function K(u){let y=L(u)?u:z;P!==null&&P.actions===y&&ge(),ue(u),D(u,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function he(u,y){let E=$(u);E.phase==="streaming"&&(typeof y!="string"||y===E.prompt||D(u,{prompt:y}))}return{subscribe(u){return typeof u!="function"?()=>{}:(m.add(u),()=>{m.delete(u)})},getState:$,panelId:X,sessionKey:le,setDraftMirror:Fe,setSessionId:Te,start:v,retry:I,apply:O,undo:G,expand:Y,collapse:Z,toggle:Ie,dismiss:K,edit:he}}var et=Ln();var na=`
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
`;var qn="@local/chatbox-pet",sa=["slots","locale"];function oa(){return(0,ia.useSyncExternalStore)(fe.subscribe,fe.getSnapshot,fe.getSnapshot)}function ca(e){let r=e.locale.bind(Me),t=e.locale.bind(Ue);e.effect(()=>e.locale.register(Me,{zh:At,en:Lt}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(Ue,{zh:Cr,en:Tr}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let i=document.querySelector('style[data-plugin="chatbox-pet"]');i!==null&&i.remove();let o=document.createElement("style");return o.setAttribute("data-plugin","chatbox-pet"),o.textContent=`${pr}
${na}
${br}
${Vr}
${Or}
${Kr}`,document.head.appendChild(o),()=>{o.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{fe.refresh().then(i=>{It(i?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let i=()=>ie.unlock();return window.addEventListener("pointerdown",i,{capture:!0}),window.addEventListener("keydown",i,{capture:!0}),()=>{window.removeEventListener("pointerdown",i,{capture:!0}),window.removeEventListener("keydown",i,{capture:!0})}},"chatbox-pet: sound unlock");let n=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:qn,order:1,label:()=>r("label"),locale:Me,inject:i=>({sessionId:i})},i=>{if(oa().pet===!1)return null;let p=typeof i?.sessionId=="string"&&i.sessionId!==""?i.sessionId:typeof i?.session?.id=="string"?i.session.id:"";return p===""?null:ze.createElement(lr,{sessionId:p,t:r,useInput:i?.useInput,locale:n})}));let a=i=>o=>oa().boost===!1?null:i(o);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>t("button.label"),locale:Ue},a(i=>ze.createElement(yr,{...i,store:et,t,locale:n})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>r("merge.label")(2),locale:Me,inject:i=>({sessionId:i})},i=>{let o=typeof i?.sessionId=="string"?i.sessionId:"";return o===""?null:ze.createElement(Rr,{sessionId:o,sessions:e.get("sessions"),t:r,locale:n,onNotice:p=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:o,text:p,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:Ue},a(i=>ze.createElement(Er,{...i,store:et,t,locale:n})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>r("quick.label"),locale:Me,inject:i=>({sessionId:i})},i=>ze.createElement(Jr,{inputActions:i?.inputActions,sessionId:typeof i?.sessionId=="string"?i.sessionId:"",t:r,locale:n})));function s({sessionId:i,session:o}){let p=typeof i=="string"&&i!==""?i:typeof o?.id=="string"?o.id:"";return ze.useEffect(()=>{p!==""&&et.setSessionId(null,p)},[p]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>r("label"),locale:Me,inject:i=>({sessionId:i})},i=>ze.createElement(s,{sessionId:i?.sessionId,session:i?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:Me},()=>ze.createElement(hr,{t:r})))}
		return module.exports;
	}
});
