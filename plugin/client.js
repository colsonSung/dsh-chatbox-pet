window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var kn=Object.create;var Ee=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var Sn=Object.getOwnPropertyNames;var Nn=Object.getPrototypeOf,Mn=Object.prototype.hasOwnProperty;var Cn=(e,t)=>{for(var n in t)Ee(e,n,{get:t[n],enumerable:!0})},it=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Sn(t))!Mn.call(e,s)&&s!==n&&Ee(e,s,{get:()=>t[s],enumerable:!(r=vn(t,s))||r.enumerable});return e};var ie=(e,t,n)=>(n=e!=null?kn(Nn(e)):{},it(t||!e||!e.__esModule?Ee(n,"default",{value:e,enumerable:!0}):n,e)),Tn=e=>it(Ee({},"__esModule",{value:!0}),e);var Mr={};Cn(Mr,{apply:()=>yn,inject:()=>gn});module.exports=Tn(Mr);var re=ie(require("react"),1);var Oe="chatboxPet.sound",st=!0,zn=.3,Rn=1e3,En=7,je={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},Tr=Object.freeze(Object.keys(je)),In={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function lt(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":In[e]}function xe(e){try{return e?.getItem(Oe)==="off"?"off":"on"}catch{return"on"}}function ct(e){st=e!==!1}function Be(e,t){try{e?.setItem(Oe,t==="off"?"off":"on")}catch{}}function pt(e){let t=xe(e)==="on"?"off":"on";return Be(e,t),t}function se(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function An(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function Ln(e){let t=e.now??(()=>Date.now()),n=null,r=null,s=!1,l=new Map,i=new Map,a=0;function c(){if(!s)try{let u=e.createContext();if(u==null)return;let w=u.createGain();if(w.gain.value=zn,w.connect(u.destination),u.state==="suspended"&&typeof u.resume=="function"){let v=u.resume();v!==void 0&&typeof v.catch=="function"&&v.catch(()=>{})}n=u,r=w,s=!0}catch{n=null,r=null,s=!1}}function g(u,w,v){if(w<=1)return 0;if(typeof v=="string"&&v!=="")return An(v)%w;let h=(i.get(u)??0)%w;return i.set(u,h+1),h}function k(u,w){if(e.getPref()!=="on"||!s||n===null||r===null||!e.isVisible())return!1;let v=je[u];if(v===void 0)return!1;let h=t(),S=l.get(u);if(S!==void 0&&h-S<Rn)return!1;l.set(u,h);let z=Array.isArray(v.variants)?v.variants:[];if(z.length===0)return!1;let f=z[g(u,z.length,w)];a=(a+1)%7;let D=(a-3)*(En/3);try{return Pn(n,r,f,D),!0}catch{return!1}}return{play:k,unlock:c,isUnlocked:()=>s,recipeNames:()=>Object.keys(je)}}function Pn(e,t,n,r){let s=e.currentTime;for(let l of n.notes){let i=s+l.at,a=e.createOscillator(),c=e.createGain();a.type=l.type,a.frequency.setValueAtTime(l.freq,i),typeof l.slideTo=="number"&&a.frequency.exponentialRampToValueAtTime(l.slideTo,i+l.dur),r!==0&&typeof a.detune=="object"&&a.detune!==null&&a.detune.setValueAtTime(r,i),c.gain.setValueAtTime(1e-4,i),c.gain.exponentialRampToValueAtTime(l.level,i+.008),c.gain.exponentialRampToValueAtTime(1e-4,i+l.dur),a.connect(c),c.connect(t),a.start(i),a.stop(i+l.dur+.02)}}function Dn(){return{getPref:()=>{let e=se()?.getItem(Oe);return e==="on"||e==="off"?e:st?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var Q=Ln(Dn());var mn=require("react");var le="chatboxPet",ut={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},dt={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var m=ie(require("react"),1);var qn=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],Fn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},bt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],$e={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},Er=[...bt.map(e=>e.id),"fallback"];function Ue(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ht(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function ft(e){let t=ht(e);if(t==="")return null;for(let n of qn){let r=/^[a-z ]+$/.test(n),l=(r?new RegExp(`(^|[^a-z])${Ue(n).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(Ue(n))).exec(t);if(l===null)continue;let i=l.index+(r?l[1].length:0),a=i+(r?n.replace(/ /g," ").length:n.length),c=`${t.slice(0,i)} ${t.slice(a)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:n,rest:c}}return null}function _n(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function jn(e){let t=ht(e);if(t==="")return"fallback";for(let n of bt){for(let r of n.zh)if(t.includes(r))return n.id;for(let r of n.en)if(new RegExp(`(^|[^a-z])${Ue(r).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return n.id}return"fallback"}function mt(e,t){let n=Array.isArray(e)?e.filter(r=>typeof r=="string"&&r!==""):[];return n.length===0?"":n[_n(t)%n.length]}function On(e,t={}){let n=$e[e]??$e.fallback,r=t.locale==="en"?"en":"zh",s=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:$e[e]===void 0?"fallback":e,clip:n.clip,sound:n.sound,line:mt(n[r],s)}}function gt(e,t="zh"){let n=String(e??"");return/[\u4e00-\u9fff]/.test(n)?"zh":/[a-z]/i.test(n)||t==="en"?"en":"zh"}function yt(e={}){let t=e.locale==="en"?"en":"zh";return mt(Fn[t],e.seed??"wake")}function xt(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),n=Number.isFinite(e.debounceMs)?e.debounceMs:700,r=Number.isFinite(e.holdMs)?e.holdMs:15e3,s=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,l=!1,i="",a="",c=0,g=0;function k(v){let h=ft(v);return h===null?l?(l=!1,i="",a="",{kind:"off"}):null:(c=t(),l?null:(l=!0,i=h.wake,a=h.rest,c=t(),g=0,{kind:"wake",wake:h.wake,digest:h.rest}))}function u(v,h={}){if(!l)return null;let S=ft(v);if(S===null)return l=!1,{kind:"off"};let z=`${S.wake}\0${S.rest}`;if(z===a)return null;let f=t(),D=f-g;if(D<s)return{kind:"cooldown",retryInMs:s-D};a=z,g=f,c=f;let R=jn(S.rest);return{kind:"reply",...On(R,{...h,seed:z}),digest:z}}function w(){return!l||t()-c<r?null:(l=!1,i="",a="",{kind:"off"})}return{observe:k,settle:u,expire:w,isActive:()=>l,debounceMs:n,holdMs:r,wakeWord:()=>i}}var T=ie(require("react"),1),Et=require("react-dom");var wt=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Ie=60;function kt(e,t){let n=t==="en"?"en":"zh";return typeof e?.[n]=="string"?e[n]:""}function we(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=Ie?t:n.slice(0,Ie).join("")}function vt(e,t,n,r=8){let l=Number.isFinite(t?.width)?t.width:0,i=Number.isFinite(t?.height)?t.height:0,a=Number.isFinite(n?.width)?n.width:0,c=Number.isFinite(n?.height)?n.height:0,g=(Number.isFinite(e?.right)?e.right:0)-l;g<8&&(g=Number.isFinite(e?.left)?e.left:8);let k=(Number.isFinite(e?.top)?e.top:0)-i-r;k<8&&(k=(Number.isFinite(e?.bottom)?e.bottom:0)+r);let u=Math.max(8,a-l-8),w=Math.max(8,c-i-8);return{left:Math.min(Math.max(g,8),u),top:Math.min(Math.max(k,8),w)}}var He=["topic","reminder","recall","nudge","encourage","tease","chitchat"],St={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Nt=9e3,Bn=24e4,We=.05;function Mt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<Bn)return!1;let n=Number.isFinite(e.chance)?e.chance:We;return(typeof e.random=="function"?e.random:Math.random)()<n}function Ct(e,t){let n=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[n]??""}function Tt(e){return St[e]??St.chitchat}async function zt(e={}){let t=typeof e.fetch=="function"?e.fetch:(...n)=>globalThis.fetch(...n);try{let n=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!n.ok)return null;let r=await n.json();if(r?.ok!==!0)return null;let s=r.result;return typeof s?.text!="string"||s.text.trim()===""?null:{kind:He.includes(s.kind)?s.kind:"chitchat",text:s.text.trim(),quote:typeof s?.quote=="string"?s.quote:"",item:typeof s?.item=="string"?s.item:"",source:typeof s?.source?.label=="string"?s.source:null,sources:Array.isArray(s?.sources)?s.sources:[]}}catch{return null}}var Rt=268;function It({anchor:e,locale:t,onSay:n,onAction:r,onQuip:s,recent:l,onForget:i,onClose:a,t:c}){let g=T.useRef(null),k=T.useRef(null),[u,w]=T.useState(""),[v,h]=T.useState(()=>({left:0,top:0,ready:!1}));T.useLayoutEffect(()=>{let f=g.current;if(f===null)return;let D=f.getBoundingClientRect().height,R=vt(e,{width:Rt,height:D},{width:window.innerWidth,height:window.innerHeight});h({...R,ready:!0})},[e]),T.useEffect(()=>{let f=k.current;f!==null&&typeof f.focus=="function"&&f.focus()},[]),T.useEffect(()=>{let f=R=>{let F=g.current;F!==null&&R.target instanceof Node&&F.contains(R.target)||a()},D=R=>{R.key==="Escape"&&(R.preventDefault(),R.stopPropagation(),a())};return document.addEventListener("pointerdown",f,!0),document.addEventListener("keydown",D,!0),()=>{document.removeEventListener("pointerdown",f,!0),document.removeEventListener("keydown",D,!0)}},[a]);let S=()=>{let f=we(u);f!==""&&(n(f),a())},z={left:`${Math.round(v.left)}px`,top:`${Math.round(v.top)}px`,width:`${Rt}px`,visibility:v.ready?"visible":"hidden"};return(0,Et.createPortal)(T.createElement("div",{ref:g,className:"cbp-menu",style:z,role:"menu","aria-label":c("menu.title"),"data-cbp-menu":"true",onContextMenu:f=>f.preventDefault()},T.createElement("div",{className:"cbp-menu-say"},T.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},c("menu.say")),T.createElement("div",{className:"cbp-menu-row"},T.createElement("input",{id:"cbp-menu-say-input",ref:k,className:"cbp-menu-input",type:"text",value:u,maxLength:Ie,placeholder:c("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:f=>w(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),f.stopPropagation(),S())}}),T.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:we(u)==="",onClick:S},c("menu.saySubmit")))),l.length===0?null:T.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},T.createElement("span",{className:"cbp-menu-label"},c("menu.recent"),T.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:i},c("menu.clear"))),T.createElement("div",{className:"cbp-menu-recent-list"},l.slice(0,8).map(f=>T.createElement("button",{key:`${f.text}-${f.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":f.text,title:f.text,onClick:()=>{n(f.text),a()}},f.text)))),T.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},T.createElement("span",{className:"cbp-menu-label"},c("menu.quip")),T.createElement("div",{className:"cbp-menu-grid"},He.map(f=>T.createElement("button",{key:f,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":f,onClick:()=>{s(f),a()}},Ct(f,t))))),T.createElement("div",{className:"cbp-menu-actions"},T.createElement("span",{className:"cbp-menu-label"},c("menu.action")),T.createElement("div",{className:"cbp-menu-grid"},wt.map(f=>T.createElement("button",{key:f.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":f.clip,title:f.clip,onClick:()=>{r(f.clip),a()}},kt(f,t))))),T.createElement("p",{className:"cbp-menu-hint"},c("menu.hint"))),document.body)}var Qe="/api/chatbox-pet/said",At="chatboxPet.said";function Ve(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=60?t:n.slice(0,60).join("")}function $n(e,t,n=Date.now()){let r=Ve(t),s=Array.isArray(e)?e.filter(i=>typeof i?.text=="string"):[];if(r==="")return s.slice(0,24);let l=s.filter(i=>i.text!==r);return[{text:r,at:n},...l].slice(0,24)}function Ke(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],n=[],r=new Set;for(let s of t){let l=Ve(typeof s=="string"?s:s?.text);if(!(l===""||r.has(l))&&(r.add(l),n.push({text:l,at:Number.isFinite(s?.at)?s.at:0}),n.length>=24))break}return n}function Un(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function Hn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...u)=>globalThis.fetch(...u),n=e.storage===void 0?Un():e.storage,r=()=>{try{let u=n?.getItem(At);return u==null?[]:Ke(JSON.parse(u))}catch{return[]}},s=u=>{try{n?.setItem(At,JSON.stringify(u))}catch{}},l=Object.freeze({lines:Object.freeze(r()),loaded:!1}),i=new Set;function a(u){l=Object.freeze({...l,...u});for(let w of i)try{w()}catch{}}async function c(){try{let w=await(await t(Qe,{method:"GET",headers:{accept:"application/json"}})).json();if(w?.ok===!0){let v=Ke(w.result);return a({lines:v,loaded:!0}),s(v),v}}catch{}return a({loaded:!0}),l.lines}async function g(u){let w=Ve(u);if(w==="")return l.lines;let v=$n(l.lines,w);a({lines:Object.freeze(v)}),s(v);try{let S=await(await t(Qe,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w})})).json();if(S?.ok===!0){let z=Ke(S.result);return a({lines:z,loaded:!0}),s(z),z}}catch{}return l.lines}async function k(){a({lines:Object.freeze([])}),s([]);try{await t(Qe,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(u){return typeof u!="function"?()=>{}:(i.add(u),()=>i.delete(u))},getSnapshot(){return l},refresh:c,remember:g,clear:k}}var ce=Hn();var Ge=null;function Lt(e,t){let n=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(n)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(n)?!1:/Mac/i.test(typeof t=="string"?t:n)}function Pt(e){if(e!==void 0)return Lt(e.userAgent,e.platform)?".mov":".webm";if(Ge===null){let t=typeof navigator>"u"?void 0:navigator;Ge=Lt(t?.userAgent,t?.platform)?".mov":".webm"}return Ge}var Dt={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},Wn={failed:"click-angry",cancelled:"act-shy"};function qt(e){let t=e?.previous?.status??"idle",n=e?.next?.status??"idle",r=e?.previous?.detail??null,s=e?.next?.detail??null,l=n!==t||s!==r,a=t==="working"&&n==="thinking"?"result":n;if(!l)return{changed:!1,status:a,detail:s,clip:null,sound:null};if(n==="idle")return{changed:!0,status:"idle",detail:s,clip:null,sound:null};let c=a==="error"?Wn[s]??Dt.error:Dt[a]??e?.idleClip??null;return{changed:!0,status:a,detail:s,clip:c,sound:lt(a,s)}}var Qn=6e3,Kn=5e3,Vn={thinking:0,working:1,result:2,waiting:3,success:4,error:5},oe="idle-breathe-loop",Ft="click-wave",_t=["act-harley","act-beach"],jt=6e3,Gn=9e4,Jn=.12;function Ot({sessionId:e,t,useInput:n,locale:r}){let s=m.useRef(null),l=m.useRef(null),i=m.useRef("idle"),a=m.useRef(null),c=m.useRef(Date.now()),g=m.useRef(null),k=m.useRef(0),u=m.useRef(0),[w,v]=m.useState(null),[h,S]=m.useState(null),f=m.useSyncExternalStore(ce.subscribe,ce.getSnapshot,ce.getSnapshot).lines,D=m.useRef(0),[R,F]=m.useState(null),[E,B]=m.useState("idle"),[N,P]=m.useState(!0),L=m.useRef(!1),I=m.useCallback((d,x)=>{let M=s.current;if(M===null||M.dataset.clip===d&&M.loop===x&&!M.ended)return;M.dataset.clip=d,M.loop=x,M.src=`/api/chatbox-pet/asset/${d}${Pt()}`;let j=M.play();j!==void 0&&typeof j.catch=="function"&&j.catch(()=>{})},[]),be=m.useCallback(()=>{let d=s.current;if(d!==null){if(!L.current&&d.dataset.clip!==oe){L.current=!0,I(oe,!0);return}P(!1)}},[I]),X=m.useCallback(()=>{window.clearTimeout(D.current),F(null)},[]),Y=m.useCallback((d,x,M,j=Kn,U=null)=>{window.clearTimeout(D.current),F({text:d,kind:M,source:U}),x||(D.current=window.setTimeout(()=>F(null),j))},[]),Me=m.useCallback(d=>{let x=l.current?.workStatusTexts,M=Vn[d],j=M===void 0||!Array.isArray(x)?void 0:x[M];if(!(!Array.isArray(j)||j.length===0))return j[Math.floor(Math.random()*j.length)]},[]),Ce=m.useCallback(d=>{let x=typeof d?.status=="string"?d.status:"idle",M=i.current,j=typeof d?.detail=="string"?d.detail:null,U=qt({previous:{status:M,detail:a.current},next:{status:x,detail:j},idleClip:oe});if(!U.changed){x==="waiting"&&typeof d?.bubble=="string"&&d.bubble!==""&&Y(d.bubble,!0,"waiting");return}if(i.current=x,a.current=j,B(x),g.current!==null&&g.current.isActive()){c.current=Date.now();return}if(x==="idle"){I(oe,!0),X(),c.current=Date.now();return}c.current=Date.now();let H=U.status,ge=U.detail;I(U.clip??oe,!1);let ye=typeof d?.bubble=="string"&&d.bubble!==""?d.bubble:Me(H),_e=d?.source==="broadcast"?"notify":U.sound;Q.play(_e,ye),ye!==void 0?Y(ye,x==="waiting",H):X()},[X,Me,I,Y]),he=m.useCallback(async d=>{let x=await zt({kind:d,locale:typeof r=="function"?r():"zh"});if(x===null)return;let M=Tt(x.kind);I(M.clip,!1),Q.play(M.sound,x.text),Y(x.text,!1,"quip",Nt,x.source?.label??null)},[r,I,Y]),Te=m.useCallback(()=>{if(i.current!=="idle"||g.current!==null&&g.current.isActive())return;let x=Date.now()-c.current;if(x<Gn)return;if(Mt({idleForMs:x,chance:We})){c.current=Date.now(),he(null);return}if(Math.random()>Jn)return;let M=_t[Math.floor(Math.random()*_t.length)];I(M,!1),c.current=Date.now()},[I,he]),ee=m.useCallback((d,x,M)=>{typeof d.clip=="string"&&d.clip!==""&&I(d.clip,!1),typeof d.sound=="string"&&d.sound!==""&&Q.play(d.sound,d.line),typeof d.line=="string"&&d.line!==""&&Y(d.line,x,"chat",M)},[I,Y]),pe=m.useCallback(()=>{window.clearTimeout(u.current),v(null),I(oe,!0),X()},[X,I]),te=typeof n=="function"?n(d=>typeof d?.draft=="string"?d.draft:""):"";m.useEffect(()=>{g.current===null&&(g.current=xt());let d=g.current,x=gt(te,typeof r=="function"?r():"zh"),M=d.observe(te);if(M!==null&&M.kind==="wake"&&(v({phase:"awake"}),ee({clip:"click-surprise",sound:"wake",line:yt({locale:x,seed:te})},!0)),M!==null&&M.kind==="off"){pe();return}if(window.clearTimeout(k.current),!d.isActive())return;let j=U=>{k.current=window.setTimeout(()=>{let H=d.settle(te,{locale:x});if(H!==null&&H.kind==="cooldown"){j(Math.max(120,H.retryInMs));return}H===null||H.kind!=="reply"||(ee(H,!1,jt),window.clearTimeout(u.current),u.current=window.setTimeout(()=>pe(),d.holdMs))},U)};return j(d.debounceMs),()=>window.clearTimeout(k.current)},[te,r,ee,pe]),m.useEffect(()=>{ce.refresh()},[]),m.useEffect(()=>{let d=!1;return fetch("/api/chatbox-pet/config").then(x=>x.ok?x.json():null).then(x=>{!d&&x?.ok===!0&&(l.current=x.result)}).catch(()=>{}),()=>{d=!0}},[]),m.useEffect(()=>{if(typeof e!="string"||e==="")return;let d=!1,x=0,M=async()=>{if(document.visibilityState==="visible"){try{let H=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),ge=H.ok?await H.json():null;!d&&ge?.ok===!0&&Ce(ge.result)}catch{}d||Te()}},j=()=>{x=window.setTimeout(async()=>{await M(),d||j()},Qn)},U=()=>{document.visibilityState==="visible"&&M()};return document.addEventListener("visibilitychange",U),M(),j(),()=>{d=!0,window.clearTimeout(x),document.removeEventListener("visibilitychange",U)}},[e,Ce]),m.useEffect(()=>(I(oe,!0),()=>window.clearTimeout(D.current)),[I]);let[me,ze]=m.useState(()=>xe(se())==="on"),qe=m.useCallback(d=>{let x=we(d);x!==""&&(I(Ft,!1),Q.play("click",x),Y(x,!1,"chat",jt),ce.remember(x))},[I,Y]),Fe=m.useCallback(d=>{typeof d!="string"||d===""||(I(d,!1),Q.play("click",d))},[I]),Re=m.useCallback(()=>{let d=document.querySelector("[data-cbp-pet]"),x=d instanceof Element?d.getBoundingClientRect():null;x!==null&&S({left:x.left,right:x.right,top:x.top,bottom:x.bottom})},[]);return m.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},m.createElement("div",{className:"cbp-stage"},m.createElement("div",{className:(R===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(R?.kind==="error"?" cbp-bubble--error":"")+(R?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},R?.source?m.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":R.source},R.source):null,m.createElement("span",{className:"cbp-bubble-text"},R?.text??"")),m.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(me?"sound.on":"sound.off"),"aria-pressed":me,onClick:d=>{d.stopPropagation();let x=pt(se())==="on";ze(x),prefsStore.update({sound:x})}},me?m.createElement(Yn,null):m.createElement(Zn,null)),m.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":w===null?E:"awake","data-cbp-chat":w===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{Q.play("click"),I(Ft,!1)},onContextMenu:d=>{d.preventDefault(),d.stopPropagation(),Re()},onKeyDown:d=>{(d.key==="ContextMenu"||d.shiftKey&&d.key==="F10")&&(d.preventDefault(),Re())},"aria-haspopup":"menu","aria-expanded":h===null?"false":"true"},N?m.createElement("video",{ref:s,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:d=>{d.currentTarget.loop||I(oe,!0)},onError:be}):m.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),h===null?null:m.createElement(It,{anchor:h,locale:typeof r=="function"?r():"zh",onSay:qe,onAction:Fe,onQuip:d=>{he(d)},recent:f,onForget:()=>{ce.clear()},onClose:()=>S(null),t}))}function Yn(){return m.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},m.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),m.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),m.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function Zn(){return m.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},m.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),m.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Bt=`
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
`;var $t="/api/chatbox-pet/prefs",Xn=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function er(e={}){let t=typeof e.fetch=="function"?e.fetch:(...a)=>globalThis.fetch(...a),n=Xn,r=new Set;function s(a){n={...n,...a};for(let c of r)try{c()}catch{}}async function l(){try{let c=await(await t($t,{method:"GET",headers:{accept:"application/json"}})).json();c?.ok===!0&&c.result!==null&&typeof c.result=="object"?s({pet:c.result.pet!==!1,boost:c.result.boost!==!1,sound:c.result.sound!==!1,loaded:!0}):s({loaded:!0})}catch{}return n}async function i(a){let c=n,g={};for(let k of["pet","boost","sound"])typeof a?.[k]=="boolean"&&(g[k]=a[k]);s(g);try{let u=await(await t($t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:g})})).json();if(u?.ok!==!0||u.result===null||typeof u.result!="object")throw new Error("rejected");return s({pet:u.result.pet!==!1,boost:u.result.boost!==!1,sound:u.result.sound!==!1,loaded:!0}),!0}catch{return s({pet:c.pet,boost:c.boost,sound:c.sound}),!1}}return{subscribe(a){return typeof a!="function"?()=>{}:(r.add(a),()=>r.delete(a))},getSnapshot(){return n},refresh:l,update:i}}var J=er();var $=ie(require("react"),1),Ut=require("react");var Ht=`
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
`;function Je({id:e,checked:t,label:n,onChange:r}){return $.createElement("label",{className:"cbp-set-item",htmlFor:e},$.createElement("span",{className:"cbp-switch"},$.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:s=>r(s.target.checked),"data-cbp-pref":e}),$.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),$.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),n)}function Wt({t:e}){let t=(0,Ut.useSyncExternalStore)(J.subscribe,J.getSnapshot,J.getSnapshot),[n,r]=$.useState(()=>xe(se())==="on"),s=l=>{r(l),Be(se(),l?"on":"off"),J.update({sound:l})};return $.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},$.createElement("div",{className:"cbp-set-head"},$.createElement("span",{className:"cbp-set-title"},e("settings.title")),$.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),$.createElement("div",{className:"cbp-set-items"},$.createElement(Je,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:l=>{J.update({pet:l})}}),$.createElement(Je,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:l=>{J.update({boost:l})}}),$.createElement(Je,{id:"chatbox-pet-feature-sound",checked:n,label:e("settings.sound"),onChange:s})))}var ke=ie(require("react"),1),Le=require("react"),Ze=require("@deepseek-ai/dsh-client-ui-primitives");var q=require("react");function fe({size:e=16,children:t}){return(0,q.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function Ae({size:e=16}){return(0,q.createElement)(fe,{size:e},[(0,q.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,q.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,q.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function Qt({size:e=16}){return(0,q.createElement)(fe,{size:e},(0,q.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function Kt({size:e=16}){return(0,q.createElement)(fe,{size:e},[(0,q.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,q.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function Ye({size:e=16}){return(0,q.createElement)(fe,{size:e},[(0,q.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,q.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,q.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function Vt({size:e=16}){return(0,q.createElement)(fe,{size:e},(0,q.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function Gt({size:e=16}){return(0,q.createElement)(fe,{size:e},[(0,q.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,q.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,q.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,q.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,q.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function tr({label:e,children:t}){return typeof Ze.Tooltip=="function"?ke.createElement(Ze.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Le.cloneElement)(t,{title:e})}function Jt({inputActions:e,useInput:t,store:n,t:r,locale:s}){let l=(0,Le.useSyncExternalStore)(n.subscribe,()=>n.getState(e),()=>n.getState(e)),i=typeof t=="function"?t(w=>w):void 0;n.setDraftMirror(e,i);let a=typeof i?.draft=="string"?i.draft:"",c=l.phase==="running"||l.phase==="streaming",g=l.phase!=="idle",k=r(c?"button.running":"button.label"),u=c?r("button.running"):a.trim()===""?r("button.tooltipCompose"):r("button.tooltip");return ke.createElement(tr,{label:u},ke.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":c?"true":"false","data-pb-open":g?"true":"false","aria-label":k,"aria-busy":c?"true":void 0,"aria-expanded":g?"true":"false","aria-controls":n.panelId(e),onMouseDown:w=>w.preventDefault(),onClick:()=>n.start(e,{locale:typeof s=="function"?s():"zh"})},ke.createElement(Ae,{size:16})))}var K=ie(require("react"),1),Pe=require("react"),tt=require("@deepseek-ai/dsh-client-ui-primitives");var Yt="next-turn";function Xe(e){return(Array.isArray(e?.content)?e.content:[]).filter(n=>n!==null&&typeof n=="object"&&n.type==="text"&&typeof n.text=="string").map(n=>n.text).join("").trim()}function nr(e){return(Array.isArray(e?.content)?e.content:[]).some(n=>n===null||typeof n!="object"||n.type!=="text")}function Zt(e){let t=[];try{let r=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();t=Array.isArray(r?.[Yt])?r[Yt]:[]}catch{t=[]}return et(t)}function et(e){let n=(Array.isArray(e)?e:[]).filter(i=>i!==null&&typeof i=="object"&&typeof i.id=="string"),r=n.map(Xe),s=n.filter((i,a)=>!nr(i)&&r[a]!==""),l="";return n.length>=2&&s.length!==n.length?l="attachment":n.length>8?l="too-many":n.length<2&&(l="too-few"),{items:n,texts:r,mergeable:n.length,blocked:l}}async function rr(e,t={}){let n=or(e),r=typeof t.fetchImpl=="function"?t.fetchImpl:(...s)=>globalThis.fetch(...s);try{let s=await r("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof t.sessionId=="string"?t.sessionId:void 0,locale:t.locale==="en"?"en":"zh"})});if(!s.ok)return{prompt:n,optimized:!1,reason:"http-"+String(s.status)};let l=await s.json(),i=typeof l?.result?.prompt=="string"?l.result.prompt.trim():"";return i===""?{prompt:n,optimized:!1,reason:"empty"}:{prompt:i,optimized:l.result.optimized===!0,reason:typeof l.result.reason=="string"?l.result.reason:""}}catch{return{prompt:n,optimized:!1,reason:"network"}}}function or(e){return(Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>t!=="").join(`

`)}async function ar(e,t,n){let r=Array.isArray(t)?t:[],s=String(n??"").trim();if(r.length<2||s==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[l,...i]=r;try{let g=await e.updateQueue(l.id,{kind:"edit",content:[{type:"text",text:s}]});if(g?.ok!==!0)return{ok:!1,merged:0,removed:0,error:g?.error?.code??"edit-failed"}}catch(g){return{ok:!1,merged:0,removed:0,error:Xt(g)}}let a=0,c=0;for(let g of i)try{let k=await e.updateQueue(g.id,{kind:"remove"});if(k?.ok===!0){a+=1;continue}if(k?.error?.code==="session/queue-item-not-found"){c+=1;continue}return{ok:!1,merged:1,removed:a,claimed:c,error:k?.error?.code??"remove-failed"}}catch(k){return{ok:!1,merged:1,removed:a,claimed:c,error:Xt(k)}}return{ok:c===0,merged:1,removed:a,claimed:c,error:c>0?"session/queue-item-not-found":""}}async function en(e={}){let t=Zt(e.session);if(t.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:t.blocked};let n=t.items.map(Xe),r=await rr(n,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),s=Zt(e.session);if(!(s.items.length===t.items.length&&s.items.every((a,c)=>a.id===t.items[c].id&&Xe(a)===n[c])))return{ok:!1,count:t.items.length,optimized:!1,reason:"",error:"queue-changed"};let i=await ar(e.session,t.items,r.prompt);return{ok:i.ok,count:t.items.length,optimized:r.optimized,reason:r.reason,error:i.error}}function Xt(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function ir({label:e,children:t}){return typeof tt.Tooltip=="function"?K.createElement(tt.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Pe.cloneElement)(t,{title:e})}var sr=Object.freeze({}),lr=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>sr});function cr(e){let t=(()=>{try{let r=e?.projections?.faceOf?.("inbox");if(typeof r?.subscribe=="function"&&typeof r?.getSnapshot=="function")return r}catch{}return lr})(),n=(0,Pe.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot);return et(n?.["next-turn"])}function tn({sessionId:e,sessions:t,t:n,locale:r,onNotice:s}){let l=K.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return t?.binding?.(e)?.session??null}catch{return null}},[t,e]),i=cr(l),[a,c]=K.useState("idle"),[g,k]=K.useState(""),u=K.useRef(0);K.useEffect(()=>()=>window.clearTimeout(u.current),[]);let w=i.items.length;if(w<2||i.blocked==="attachment"||i.blocked==="too-many")return null;let v=async()=>{if(a!=="running"){c("running"),k("");try{let S=await en({session:l,sessionId:e,locale:typeof r=="function"?r():"zh"});if(S.ok){let z=S.optimized?n("merge.done")(S.count):n("merge.donePlain")(S.count);k(z),s?.(z)}else k(S.error==="queue-changed"?n("merge.changed"):S.error==="session/queue-item-not-found"?n("merge.claimed"):n("merge.failed"))}catch{k(n("merge.failed"))}finally{c("idle"),window.clearTimeout(u.current),u.current=window.setTimeout(()=>k(""),4e3)}}},h=a==="running"?n("merge.running"):g!==""?g:n("merge.label")(w);return K.createElement(ir,{label:h},K.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":w,"data-cbp-merge-phase":a,"aria-label":h,"aria-busy":a==="running"?"true":void 0,disabled:a==="running",onClick:S=>{S.stopPropagation(),v()}},K.createElement(Gt,null),K.createElement("span",{className:"cbp-merge-count"},a==="running"?"\u2026":w)))}var ve="promptBoost",nn={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},rn={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var b=ie(require("react"),1),V=require("react");var pr=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function ur(){return b.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},b.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),b.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function on(e,t){let n=`source.${e.id}`,r=t(n);return r===n?e.label:r}function dr(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function fr(e,t){if(e.phase!=="ready")return"";let n=[];return e.cached&&n.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&n.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),n.join(" \xB7 ")}function br(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let n=e.sources.slice(0,2).map(r=>`${on(r,t)} ${r.count}`).join(" \xB7 ");return n===""?t("chip.writing"):`${n} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function hr({state:e,store:t,t:n,inputActions:r,chipRef:s}){let l=e.phase==="applied",i=e.phase==="running"||e.phase==="streaming",a=e.phase==="ready",c=e.phase==="error",g=e.mode==="compose"?n("panel.compose"):n("button.label"),k=br(e,n);return l?b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":n("chip.expand"),onClick:()=>t.expand(r),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),t.expand(r))}},b.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},b.createElement(Qt,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},n("undo.done")),b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":n("undo.label"),onClick:()=>t.undo(r)},n("undo.action")))):b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":i?"true":"false",onClick:()=>t.expand(r)},b.createElement("button",{ref:s,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(r),"aria-label":`${n("chip.expand")} \xB7 ${g}`,onClick:()=>t.expand(r)},b.createElement("span",{className:i||a?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},i?b.createElement(ur,null):c?b.createElement(Ye,{size:12}):b.createElement(Ae,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},k),a||c?b.createElement(b.Fragment,null,b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("span",{className:"pb-chip-view"},n("chip.view"))):null),b.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":n("chip.dismiss"),onClick:()=>t.dismiss(r)},b.createElement(Kt,{size:10}))))}function mr({state:e,store:t,t:n,inputActions:r,locale:s,panelRef:l}){let i=(0,V.useRef)(null),a=e.phase,c=a==="running",g=a==="streaming",k=a==="ready",u=a==="applied",w=k||u,v=a==="error",h=e.sources,S=c||g||w||h.length>0,z=u?e.applied:e.prompt,f=fr(e,n),D=t.panelId(r),R=n(pr?"shortcut.mac":"shortcut.other"),F=n(c?"panel.announceRunning":g?"panel.streaming":u?"panel.announceApplied":k?"panel.announceReady":"panel.announceError");return(0,V.useEffect)(()=>{let E=i.current;E===null||a!=="streaming"||(E.scrollTop=E.scrollHeight)},[e.prompt,a]),b.createElement("section",{ref:l,id:D,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":a,"data-pb-running":c||g?"true":"false",tabIndex:-1,"aria-labelledby":`${D}-title`,"aria-busy":c||g?"true":void 0},b.createElement("header",{className:"pb-head"},b.createElement("div",{className:"pb-head-row"},b.createElement("h2",{className:"pb-title",id:`${D}-title`},n("panel.title")),e.mode==="compose"?b.createElement("span",{className:"pb-mode"},n("panel.compose")):null,b.createElement("span",{className:"pb-meta"},f),b.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":n("panel.collapse"),title:n("panel.collapse"),onClick:()=>t.collapse(r)},b.createElement(Vt,{size:14}))),S?b.createElement("div",{className:"pb-sources",role:"list","aria-label":n("panel.sources")},h.length>0?h.map(E=>b.createElement("span",{key:E.id,className:"pb-chip",role:"listitem","data-pb-source":E.id},b.createElement("span",{className:"pb-chip-label"},on(E,n)),b.createElement("span",{className:"pb-chip-count"},E.count))):c?[b.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),b.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:b.createElement("span",{className:"pb-note"},n("panel.noSources"))):null),b.createElement("div",{className:"pb-rule","aria-hidden":"true"}),b.createElement("div",{className:"pb-body"},c?b.createElement(b.Fragment,null,b.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},b.createElement("span",{className:"pb-skeleton-line is-long"}),b.createElement("span",{className:"pb-skeleton-line is-full"}),b.createElement("span",{className:"pb-skeleton-line is-short"})),b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.status"))):null,g||w?b.createElement("textarea",{ref:i,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:g||u,spellCheck:!1,"aria-label":n("panel.editLabel"),placeholder:n("panel.placeholder"),value:z}):null,g?b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.streaming")):null,v?b.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},b.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},b.createElement(Ye,{size:14})),b.createElement("span",{className:"pb-error-text"},dr(e.error,n))):null,b.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},F)),b.createElement("div",{className:"pb-foot"},b.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(r)},n("panel.close")),b.createElement("span",{className:"pb-foot-spacer"}),w?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:R,onClick:()=>t.retry(r,{locale:s()})},n("panel.another"),b.createElement("span",{className:"pb-kbd","aria-hidden":"true"},R)):null,u?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(r)},n("undo.action")):null,c||g?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(r,{locale:s()})},n("panel.retry")):null,v?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(r,{locale:s()})},n("panel.retryError")):null))}function an({inputActions:e,store:t,t:n,locale:r,session:s}){let l=(0,V.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),i=l.phase,a=i!=="idle"||l.undo!==null,c=l.expanded===!0&&i!=="idle";(0,V.useEffect)(()=>{let h=typeof s?.id=="string"?s.id:"";h!==""&&t.setSessionId(e,h)},[s?.id,e,t]);let g=(0,V.useRef)(null),k=(0,V.useRef)(null),u=(0,V.useRef)(null),w=(0,V.useRef)(!1),v=(0,V.useRef)(!1);return(0,V.useEffect)(()=>{if(!a)return;let h=S=>{if(!(S.defaultPrevented||c===!1)){if(S.key==="Escape"){S.preventDefault(),S.stopPropagation(),t.collapse(e);return}S.key==="Enter"&&(S.metaKey||S.ctrlKey)&&(S.preventDefault(),S.stopPropagation(),i==="applied"||i==="ready"?t.retry(e,{locale:r()}):i==="error"&&t.retry(e,{locale:r()}))}};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[a,c,i,e,t,r]),(0,V.useEffect)(()=>{if(a&&w.current===!1){w.current=!0,u.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(a===!1&&w.current){w.current=!1;let h=u.current;if(u.current=null,h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[a]),(0,V.useEffect)(()=>{if(c&&v.current===!1){v.current=!0;let h=k.current;if(h!==null&&typeof h.focus=="function")try{h.focus({preventScroll:!0})}catch{}return}if(c===!1&&v.current){v.current=!1;let h=i==="idle"?u.current:g.current;if(h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[c,i]),a?c===!1?b.createElement(hr,{state:l,store:t,t:n,inputActions:e,chipRef:g}):b.createElement(mr,{state:l,store:t,t:n,inputActions:e,locale:r,panelRef:k}):null}var un="/api/chatbox-pet/boost",sn=4e3,gr=12e4,yr=24,xr=8e3,dn=25e3;function fn(e){return{set:typeof e?.set=="function"?e.set:(t,n)=>setTimeout(t,n),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function at(e){let t=typeof e=="string"?e:"";return t.length>sn?t.slice(0,sn):t}function ln(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function Se(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function nt(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(n===null||typeof n!="object")continue;let r=typeof n.id=="string"?n.id.trim():"",s=Number(n.count);r===""||!Number.isFinite(s)||s<=0||t.push({id:r,label:typeof n.label=="string"&&n.label.trim()!==""?n.label.trim():r,count:Math.round(s)})}return t}function Ne(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function G(e,t,n){let r=new Error(typeof t=="string"&&t!==""?t:e);return r.code=e,n!==void 0&&(r.cause=n),r}function cn(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",n=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return n===void 0?{code:t}:{code:t,message:n}}function wr(e){let t=[],n=e;for(;;){let r=/(?:\r?\n){2}/.exec(n);if(r===null)break;t.push(n.slice(0,r.index)),n=n.slice(r.index+r[0].length)}return{frames:t,rest:n}}function pn(e){let t=[];for(let n of e.split(`
`)){let r=n.trim();r===""||r.startsWith(":")||r.startsWith("data:")&&t.push(r.slice(5).trimStart())}if(t.length===0)return null;try{let n=JSON.parse(t.join(`
`));return n!==null&&typeof n=="object"&&Array.isArray(n)===!1?n:null}catch{return null}}async function rt(e){try{return await e.json()}catch{return null}}function ot(e,t){if(e===null||typeof e!="object")throw G("host",void 0,t);if(e.ok!==!0){let s=typeof e.error?.message=="string"?e.error.message.trim():"";throw G(typeof e.error?.code=="string"?e.error.code:"host",s===""?void 0:s)}let n=e.result,r=typeof n?.prompt=="string"?n.prompt.trim():"";if(r==="")throw G("empty");return{prompt:r,mode:n.mode==="compose"?"compose":"improve",sources:nt(n.sources),elapsedMs:Number.isFinite(n.elapsedMs)?Math.max(0,Number(n.elapsedMs)):null,cached:n.cached===!0}}async function kr(e){let{draft:t,mode:n,locale:r,signal:s,onEvent:l,idleMs:i=dn,sessionId:a=""}=e,c=a===""?{}:{sessionId:a},g=typeof e.fetch=="function"?e.fetch:globalThis.fetch,k=fn(e.timers),u=new AbortController,w=()=>u.abort();s!==void 0&&(s.aborted?u.abort():s.addEventListener("abort",w,{once:!0}));let v=!1,h=null,S=()=>{h!==null&&k.clear(h),h=k.set(()=>{v=!0,u.abort()},i)},z=!1;try{S();let f;try{f=await g(un,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:at(t),mode:n,locale:r,stream:!0,...c}}),signal:u.signal})}catch(B){throw v?G("timeout",void 0,B):Ne(B)?B:G("network",void 0,B)}if(v)throw G("timeout");if(f===null||typeof f!="object")throw G("host");if(f.ok!==!0){let B=await rt(f);if(f.status>=400)throw G("host",void 0,f.status);let N=ot(B,f.status);l({type:"replace",text:N.prompt}),l({type:"done",result:N});return}let D=typeof f.headers?.get=="function"?String(f.headers.get("content-type")??""):"";if(f.body===null||f.body===void 0||typeof f.body.getReader!="function"||!D.includes("text/event-stream")){let B=ot(await rt(f),f.status);l({type:"replace",text:B.prompt}),l({type:"done",result:B});return}let R=f.body.getReader(),F=new TextDecoder,E="";for(;!z;){let B;try{B=await R.read()}catch(P){throw v?G("timeout",void 0,P):Ne(P)?P:G("stream",void 0,P)}if(B.done===!0)break;S(),E+=F.decode(B.value,{stream:!0});let N=wr(E);E=N.rest;for(let P of N.frames){let L=pn(P);if(L!==null&&l(L)==="stop"){z=!0;break}}}if(!z){let B=E.trim();if(B!==""){let N=pn(B);N!==null&&l(N)}}if(z)try{await R.cancel()}catch{}}finally{h!==null&&k.clear(h),s!==void 0&&s.removeEventListener("abort",w)}}async function vr(e){let{draft:t,mode:n,locale:r,signal:s,sessionId:l=""}=e,i=typeof e.fetch=="function"?e.fetch:globalThis.fetch,a;try{a=await i(un,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:at(t),mode:n,locale:r,stream:!1,...l===""?{}:{sessionId:l}}}),signal:s})}catch(c){throw Ne(c)?c:G("network",void 0,c)}if(a===null||typeof a!="object")throw G("host");if(a.ok!==!0&&a.status>=400)throw G("host",void 0,a.status);return ot(await rt(a),a.status)}function Sr(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,n=typeof e.now=="function"?e.now:()=>Date.now(),r=fn(e.timers),s=Number.isFinite(e.idleMs)?Number(e.idleMs):dn,l=Number.isFinite(e.undoMs)?Number(e.undoMs):xr,i=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):gr,a=new WeakMap,c=new WeakMap,g=new WeakMap,k=new WeakMap,u=new WeakMap,w="",v=new Set,h=new Map,S=ln(),z=Se(null),f=null,D=0,R=0,F=null,E=null,B=()=>{for(let o of[...v])try{o()}catch(p){console.error("[prompt-boost] a store listener failed:",p)}},N=o=>o!=null&&(typeof o=="object"||typeof o=="function");function P(o){let p=N(o)?o:E;if(!N(p))return S;let y=a.get(p);return y===void 0&&(y=ln(),a.set(p,y)),y}function L(o,p){let y=N(o)?o:E,_={...P(y),...p};return N(y)?a.set(y,_):S=_,B(),_}function I(o){let p=N(o)?o:E;return N(p)?g.get(p)??Se(null):z}function be(o){return N(o)?o:E}function X(o){let p=N(o)?o:E;if(!N(p))return"default";let y=c.get(p);return y===void 0&&(D+=1,y=`s${D}`,c.set(p,y)),y}function Y(o){return`prompt-boost-panel-${X(o)}`}function Me(o,p,y){return`${X(o)}\0${p}\0${y}`}function Ce(o){let p=h.get(o);return p===void 0?null:n()-p.at>i?(h.delete(o),null):(h.delete(o),h.set(o,p),p.result)}function he(o,p){for(h.delete(o),h.set(o,{at:n(),result:p});h.size>yr;){let y=h.keys().next();if(y.done===!0)break;h.delete(y.value)}}function Te(){if(F===null)return;let o=F;F=null;try{o.controller.abort()}catch{}}function ee(o){let p=N(o)?o:E,y=N(p)?k.get(p):f;y!=null&&r.clear(y),N(p)?k.delete(p):f=null}function pe(o){ee(o);let p=null;p=r.set(()=>{let C=P(o);C.undo!==null&&L(o,{undo:null,phase:C.phase==="applied"?"idle":C.phase,applied:"",prompt:C.phase==="applied"?"":C.prompt,sources:C.phase==="applied"?[]:C.sources})},l);let y=N(o)?o:E;N(y)?k.set(y,p):f=p}function te(o,p,y){let C=be(o),_=Se(I(o)),O=!1;if(N(C)&&typeof C.setDraft=="function")try{C.setDraft({text:p.prompt,references:[]}),O=!0}catch{try{C.setDraft(p.prompt),O=!0}catch{O=!1}}if(!O){L(o,{phase:"error",mode:p.mode,prompt:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}L(o,{phase:"applied",mode:p.mode,prompt:p.prompt,applied:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:null,undo:{draft:_,at:n()},expanded:!1}),pe(o),he(y,p),Q.play("boostDone")}async function me(o,p,y){let{draft:C,mode:_,locale:O,key:Z,sessionId:ne}=y,ue=!1,ae=!1,de=()=>F===p&&p.controller.signal.aborted===!1,xn=A=>{if(!de())return"stop";if(ue=!0,A.type==="sources"){let W=P(o);L(o,{sources:nt(A.sources),mode:A.mode==="compose"?"compose":W.mode});return}if(A.type==="delta"){if(typeof A.text!="string"||A.text==="")return;let W=P(o);L(o,{phase:"streaming",prompt:W.prompt+A.text});return}if(A.type==="replace"){if(typeof A.text!="string")return;let W=P(o),wn=W.phase==="ready"||A.text===""?W.phase:"streaming";L(o,{prompt:A.text,phase:wn});return}if(A.type==="done"){ae=!0;let W={prompt:typeof A.result?.prompt=="string"?A.result.prompt.trim():P(o).prompt.trim(),mode:A.result?.mode==="compose"?"compose":_,sources:nt(A.result?.sources??P(o).sources),elapsedMs:Number.isFinite(A.result?.elapsedMs)?Math.max(0,Number(A.result.elapsedMs)):null,cached:A.result?.cached===!0};return W.prompt===""?(L(o,{phase:"error",error:{code:"empty"}}),Q.play("boostFail"),"stop"):(te(o,W,Z),"stop")}if(A.type==="error"){ae=!0;let W=typeof A.message=="string"&&A.message.trim()!==""?A.message.trim():void 0;return L(o,{phase:"error",error:W===void 0?{code:"unknown"}:{code:"host",message:W}}),"stop"}};try{if(await kr({draft:C,mode:_,locale:O,sessionId:ne,signal:p.controller.signal,onEvent:xn,fetch:t,timers:r,idleMs:s}),ae)return;if(ue)throw G("stream");await ze(o,p,{draft:C,mode:_,locale:O,key:Z,sessionId:ne})}catch(A){if(p.controller.signal.aborted||Ne(A)||!de())return;if(ue){L(o,{phase:"error",error:cn(A)}),Q.play("boostFail");return}try{await ze(o,p,{draft:C,mode:_,locale:O,key:Z,sessionId:ne})}catch(W){if(p.controller.signal.aborted||Ne(W)||!de())return;L(o,{phase:"error",error:cn(W)}),Q.play("boostFail")}}finally{F===p&&(F=null)}}async function ze(o,p,y){let C=await vr({draft:y.draft,mode:y.mode,locale:y.locale,signal:p.controller.signal,fetch:t,sessionId:y.sessionId??""});F!==p||p.controller.signal.aborted||te(o,C,y.key)}function qe(o,p){let y=typeof p=="string"?p:"";y!==""&&(w=y,N(o)&&u.set(o,y))}function Fe(o){return N(o)?u.get(o)??w:w}function Re(o,p){let y=typeof p?.draft=="string"?p.draft:"",C=Array.isArray(p?.occurrences)?p.occurrences:[],_=I(o);if(_.text===y&&_.references.length===C.length)return;let O={text:y,references:C.map(ne=>({...ne}))},Z=N(o)?o:E;N(Z)?g.set(Z,O):z=O}function d(o,p={}){N(o)&&(E=o);let y=p.locale==="en"?"en":"zh",C=p.force===!0,_=I(o),O=at(_.text),Z=O.trim()===""?"compose":"improve",ne=Me(o,Z,O);if(Te(),ee(o),!C){let de=Ce(ne);if(de!==null){te(o,{...de,cached:!0},ne);return}}R+=1;let ue={seq:R,actions:o,controller:new AbortController};F=ue;let ae=P(o);L(o,{phase:"running",mode:Z,seed:O,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:ae.phase==="idle"&&ae.undo===null?!1:ae.expanded}),Q.play("boostStart"),me(o,ue,{draft:O,mode:Z,locale:y,key:ne,sessionId:Fe(o)})}function x(o,p={}){d(o,{locale:p.locale,force:!0})}function M(o){let p=P(o);if(p.phase!=="ready")return!1;let y=p.prompt.trim();if(y==="")return!1;let C=be(o);if(!N(C)||typeof C.setDraft!="function")return L(o,{phase:"error",error:{code:"apply"}}),!1;let _=Se(I(o)),O=!1;try{C.setDraft({text:y,references:[]}),O=!0}catch{try{C.setDraft(y),O=!0}catch{O=!1}}return O?(ee(o),L(o,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:_,at:n()},expanded:!1}),pe(o),!0):(L(o,{phase:"error",error:{code:"apply"}}),!1)}function j(o){let p=P(o);if(p.undo===null)return!1;let y=be(o),C=Se(p.undo.draft),_=!1;if(N(y)&&typeof y.setDraft=="function")try{y.setDraft({text:C.text,references:C.references}),_=!0}catch{try{y.setDraft(C.text),_=!0}catch{_=!1}}return ee(o),L(o,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),_}function U(o){P(o).expanded!==!1&&L(o,{expanded:!1})}function H(o){let p=P(o);p.phase==="idle"&&p.undo===null||p.expanded===!0||L(o,{expanded:!0})}function ge(o){P(o).expanded===!0?U(o):H(o)}function ye(o){let p=N(o)?o:E;F!==null&&F.actions===p&&Te(),ee(o),L(o,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function _e(o,p){let y=P(o);y.phase==="streaming"&&(typeof p!="string"||p===y.prompt||L(o,{prompt:p}))}return{subscribe(o){return typeof o!="function"?()=>{}:(v.add(o),()=>{v.delete(o)})},getState:P,panelId:Y,sessionKey:X,setDraftMirror:Re,setSessionId:qe,start:d,retry:x,apply:M,undo:j,expand:H,collapse:U,toggle:ge,dismiss:ye,edit:_e}}var De=Sr();var bn=`
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
`;var Nr="@local/chatbox-pet",gn=["slots","locale"];function hn(){return(0,mn.useSyncExternalStore)(J.subscribe,J.getSnapshot,J.getSnapshot)}function yn(e){let t=e.locale.bind(le),n=e.locale.bind(ve);e.effect(()=>e.locale.register(le,{zh:ut,en:dt}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(ve,{zh:nn,en:rn}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let i=document.querySelector('style[data-plugin="chatbox-pet"]');i!==null&&i.remove();let a=document.createElement("style");return a.setAttribute("data-plugin","chatbox-pet"),a.textContent=`${Bt}
${bn}
${Ht}`,document.head.appendChild(a),()=>{a.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{J.refresh().then(i=>{ct(i?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let i=()=>Q.unlock();return window.addEventListener("pointerdown",i,{capture:!0}),window.addEventListener("keydown",i,{capture:!0}),()=>{window.removeEventListener("pointerdown",i,{capture:!0}),window.removeEventListener("keydown",i,{capture:!0})}},"chatbox-pet: sound unlock");let r=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:Nr,order:1,label:()=>t("label"),locale:le,inject:i=>({sessionId:i})},i=>{if(hn().pet===!1)return null;let c=typeof i?.sessionId=="string"&&i.sessionId!==""?i.sessionId:typeof i?.session?.id=="string"?i.session.id:"";return c===""?null:re.createElement(Ot,{sessionId:c,t,useInput:i?.useInput,locale:r})}));let s=i=>a=>hn().boost===!1?null:i(a);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>n("button.label"),locale:ve},s(i=>re.createElement(Jt,{...i,store:De,t:n,locale:r})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>t("merge.label")(2),locale:le,inject:i=>({sessionId:i})},i=>{let a=typeof i?.sessionId=="string"?i.sessionId:"";return a===""?null:re.createElement(tn,{sessionId:a,sessions:e.get("sessions"),t,locale:r,onNotice:c=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:a,text:c,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:ve},s(i=>re.createElement(an,{...i,store:De,t:n,locale:r}))));function l({sessionId:i,session:a}){let c=typeof i=="string"&&i!==""?i:typeof a?.id=="string"?a.id:"";return re.useEffect(()=>{c!==""&&De.setSessionId(null,c)},[c]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:le,inject:i=>({sessionId:i})},i=>re.createElement(l,{sessionId:i?.sessionId,session:i?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:le},()=>re.createElement(Wt,{t})))}
		return module.exports;
	}
});
