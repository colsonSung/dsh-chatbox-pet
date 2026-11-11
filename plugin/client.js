window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var Tn=Object.create;var Ie=Object.defineProperty;var Rn=Object.getOwnPropertyDescriptor;var En=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,qn=Object.prototype.hasOwnProperty;var Ln=(e,t)=>{for(var n in t)Ie(e,n,{get:t[n],enumerable:!0})},ct=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of En(t))!qn.call(e,i)&&i!==n&&Ie(e,i,{get:()=>t[i],enumerable:!(r=Rn(t,i))||r.enumerable});return e};var ae=(e,t,n)=>(n=e!=null?Tn(In(e)):{},ct(t||!e||!e.__esModule?Ie(n,"default",{value:e,enumerable:!0}):n,e)),Pn=e=>ct(Ie({},"__esModule",{value:!0}),e);var Lr={};Ln(Lr,{apply:()=>Mn,inject:()=>zn});module.exports=Pn(Lr);var ee=ae(require("react"),1);var Be="chatboxPet.sound",pt=!0,An=.3,Dn=1e3,_n=7,je={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},Ar=Object.freeze(Object.keys(je)),Fn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function ut(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":Fn[e]}function we(e){try{return e?.getItem(Be)==="off"?"off":"on"}catch{return"on"}}function dt(e){pt=e!==!1}function $e(e,t){try{e?.setItem(Be,t==="off"?"off":"on")}catch{}}function ft(e){let t=we(e)==="on"?"off":"on";return $e(e,t),t}function ce(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function On(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function jn(e){let t=e.now??(()=>Date.now()),n=null,r=null,i=!1,l=new Map,o=new Map,a=0;function c(){if(!i)try{let u=e.createContext();if(u==null)return;let w=u.createGain();if(w.gain.value=An,w.connect(u.destination),u.state==="suspended"&&typeof u.resume=="function"){let S=u.resume();S!==void 0&&typeof S.catch=="function"&&S.catch(()=>{})}n=u,r=w,i=!0}catch{n=null,r=null,i=!1}}function m(u,w,S){if(w<=1)return 0;if(typeof S=="string"&&S!=="")return On(S)%w;let h=(o.get(u)??0)%w;return o.set(u,h+1),h}function k(u,w){if(e.getPref()!=="on"||!i||n===null||r===null||!e.isVisible())return!1;let S=je[u];if(S===void 0)return!1;let h=t(),z=l.get(u);if(z!==void 0&&h-z<Dn)return!1;l.set(u,h);let q=Array.isArray(S.variants)?S.variants:[];if(q.length===0)return!1;let f=q[m(u,q.length,w)];a=(a+1)%7;let M=(a-3)*(_n/3);try{return Bn(n,r,f,M),!0}catch{return!1}}return{play:k,unlock:c,isUnlocked:()=>i,recipeNames:()=>Object.keys(je)}}function Bn(e,t,n,r){let i=e.currentTime;for(let l of n.notes){let o=i+l.at,a=e.createOscillator(),c=e.createGain();a.type=l.type,a.frequency.setValueAtTime(l.freq,o),typeof l.slideTo=="number"&&a.frequency.exponentialRampToValueAtTime(l.slideTo,o+l.dur),r!==0&&typeof a.detune=="object"&&a.detune!==null&&a.detune.setValueAtTime(r,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(l.level,o+.008),c.gain.exponentialRampToValueAtTime(1e-4,o+l.dur),a.connect(c),c.connect(t),a.start(o),a.stop(o+l.dur+.02)}}function $n(){return{getPref:()=>{let e=ce()?.getItem(Be);return e==="on"||e==="off"?e:pt?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var K=jn($n());var Sn=require("react");var ie="chatboxPet",bt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},ht={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var g=ae(require("react"),1);var Un=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],Hn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},gt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],Ue={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},Fr=[...gt.map(e=>e.id),"fallback"];function He(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function yt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function mt(e){let t=yt(e);if(t==="")return null;for(let n of Un){let r=/^[a-z ]+$/.test(n),l=(r?new RegExp(`(^|[^a-z])${He(n).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(He(n))).exec(t);if(l===null)continue;let o=l.index+(r?l[1].length:0),a=o+(r?n.replace(/ /g," ").length:n.length),c=`${t.slice(0,o)} ${t.slice(a)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:n,rest:c}}return null}function Wn(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function Qn(e){let t=yt(e);if(t==="")return"fallback";for(let n of gt){for(let r of n.zh)if(t.includes(r))return n.id;for(let r of n.en)if(new RegExp(`(^|[^a-z])${He(r).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return n.id}return"fallback"}function xt(e,t){let n=Array.isArray(e)?e.filter(r=>typeof r=="string"&&r!==""):[];return n.length===0?"":n[Wn(t)%n.length]}function Kn(e,t={}){let n=Ue[e]??Ue.fallback,r=t.locale==="en"?"en":"zh",i=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:Ue[e]===void 0?"fallback":e,clip:n.clip,sound:n.sound,line:xt(n[r],i)}}function wt(e,t="zh"){let n=String(e??"");return/[\u4e00-\u9fff]/.test(n)?"zh":/[a-z]/i.test(n)||t==="en"?"en":"zh"}function kt(e={}){let t=e.locale==="en"?"en":"zh";return xt(Hn[t],e.seed??"wake")}function vt(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),n=Number.isFinite(e.debounceMs)?e.debounceMs:700,r=Number.isFinite(e.holdMs)?e.holdMs:15e3,i=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,l=!1,o="",a="",c=0,m=0;function k(S){let h=mt(S);return h===null?l?(l=!1,o="",a="",{kind:"off"}):null:(c=t(),l?null:(l=!0,o=h.wake,a=h.rest,c=t(),m=0,{kind:"wake",wake:h.wake,digest:h.rest}))}function u(S,h={}){if(!l)return null;let z=mt(S);if(z===null)return l=!1,{kind:"off"};let q=`${z.wake}\0${z.rest}`;if(q===a)return null;let f=t(),M=f-m;if(M<i)return{kind:"cooldown",retryInMs:i-M};a=q,m=f,c=f;let C=Qn(z.rest);return{kind:"reply",...Kn(C,{...h,seed:q}),digest:q}}function w(){return!l||t()-c<r?null:(l=!1,o="",a="",{kind:"off"})}return{observe:k,settle:u,expire:w,isActive:()=>l,debounceMs:n,holdMs:r,wakeWord:()=>o}}var I=ae(require("react"),1),Lt=require("react-dom");var St=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],qe=60;function zt(e,t){let n=t==="en"?"en":"zh";return typeof e?.[n]=="string"?e[n]:""}function ke(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=qe?t:n.slice(0,qe).join("")}function Mt(e,t,n,r=8){let l=Number.isFinite(t?.width)?t.width:0,o=Number.isFinite(t?.height)?t.height:0,a=Number.isFinite(n?.width)?n.width:0,c=Number.isFinite(n?.height)?n.height:0,m=(Number.isFinite(e?.right)?e.right:0)-l;m<8&&(m=Number.isFinite(e?.left)?e.left:8);let k=(Number.isFinite(e?.top)?e.top:0)-o-r;k<8&&(k=(Number.isFinite(e?.bottom)?e.bottom:0)+r);let u=Math.max(8,a-l-8),w=Math.max(8,c-o-8);return{left:Math.min(Math.max(m,8),u),top:Math.min(Math.max(k,8),w)}}var We=["topic","reminder","recall","nudge","encourage","tease","chitchat"],Nt={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Ct=9e3,Vn=24e4,Qe=.05;function Tt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<Vn)return!1;let n=Number.isFinite(e.chance)?e.chance:Qe;return(typeof e.random=="function"?e.random:Math.random)()<n}function Rt(e,t){let n=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[n]??""}function Et(e){return Nt[e]??Nt.chitchat}async function It(e={}){let t=typeof e.fetch=="function"?e.fetch:(...n)=>globalThis.fetch(...n);try{let n=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!n.ok)return null;let r=await n.json();if(r?.ok!==!0)return null;let i=r.result;return typeof i?.text!="string"||i.text.trim()===""?null:{kind:We.includes(i.kind)?i.kind:"chitchat",text:i.text.trim(),quote:typeof i?.quote=="string"?i.quote:"",item:typeof i?.item=="string"?i.item:"",source:typeof i?.source?.label=="string"?i.source:null,sources:Array.isArray(i?.sources)?i.sources:[]}}catch{return null}}var qt=268;function Pt({anchor:e,locale:t,onSay:n,onAction:r,onQuip:i,recent:l,onForget:o,onClose:a,t:c}){let m=I.useRef(null),k=I.useRef(null),[u,w]=I.useState(""),[S,h]=I.useState(()=>({left:0,top:0,ready:!1}));I.useLayoutEffect(()=>{let f=m.current;if(f===null)return;let M=f.getBoundingClientRect().height,C=Mt(e,{width:qt,height:M},{width:window.innerWidth,height:window.innerHeight});h({...C,ready:!0})},[e]),I.useEffect(()=>{let f=k.current;f!==null&&typeof f.focus=="function"&&f.focus()},[]),I.useEffect(()=>{let f=C=>{let L=m.current;L!==null&&C.target instanceof Node&&L.contains(C.target)||a()},M=C=>{C.key==="Escape"&&(C.preventDefault(),C.stopPropagation(),a())};return document.addEventListener("pointerdown",f,!0),document.addEventListener("keydown",M,!0),()=>{document.removeEventListener("pointerdown",f,!0),document.removeEventListener("keydown",M,!0)}},[a]);let z=()=>{let f=ke(u);f!==""&&(n(f),a())},q={left:`${Math.round(S.left)}px`,top:`${Math.round(S.top)}px`,width:`${qt}px`,visibility:S.ready?"visible":"hidden"};return(0,Lt.createPortal)(I.createElement("div",{ref:m,className:"cbp-menu",style:q,role:"menu","aria-label":c("menu.title"),"data-cbp-menu":"true",onContextMenu:f=>f.preventDefault()},I.createElement("div",{className:"cbp-menu-say"},I.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},c("menu.say")),I.createElement("div",{className:"cbp-menu-row"},I.createElement("input",{id:"cbp-menu-say-input",ref:k,className:"cbp-menu-input",type:"text",value:u,maxLength:qe,placeholder:c("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:f=>w(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),f.stopPropagation(),z())}}),I.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:ke(u)==="",onClick:z},c("menu.saySubmit")))),l.length===0?null:I.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},I.createElement("span",{className:"cbp-menu-label"},c("menu.recent"),I.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:o},c("menu.clear"))),I.createElement("div",{className:"cbp-menu-recent-list"},l.slice(0,8).map(f=>I.createElement("button",{key:`${f.text}-${f.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":f.text,title:f.text,onClick:()=>{n(f.text),a()}},f.text)))),I.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},I.createElement("span",{className:"cbp-menu-label"},c("menu.quip")),I.createElement("div",{className:"cbp-menu-grid"},We.map(f=>I.createElement("button",{key:f,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":f,onClick:()=>{i(f),a()}},Rt(f,t))))),I.createElement("div",{className:"cbp-menu-actions"},I.createElement("span",{className:"cbp-menu-label"},c("menu.action")),I.createElement("div",{className:"cbp-menu-grid"},St.map(f=>I.createElement("button",{key:f.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":f.clip,title:f.clip,onClick:()=>{r(f.clip),a()}},zt(f,t))))),I.createElement("p",{className:"cbp-menu-hint"},c("menu.hint"))),document.body)}var Ke="/api/chatbox-pet/said",At="chatboxPet.said";function Ge(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=60?t:n.slice(0,60).join("")}function Gn(e,t,n=Date.now()){let r=Ge(t),i=Array.isArray(e)?e.filter(o=>typeof o?.text=="string"):[];if(r==="")return i.slice(0,24);let l=i.filter(o=>o.text!==r);return[{text:r,at:n},...l].slice(0,24)}function Ve(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],n=[],r=new Set;for(let i of t){let l=Ge(typeof i=="string"?i:i?.text);if(!(l===""||r.has(l))&&(r.add(l),n.push({text:l,at:Number.isFinite(i?.at)?i.at:0}),n.length>=24))break}return n}function Jn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function Yn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...u)=>globalThis.fetch(...u),n=e.storage===void 0?Jn():e.storage,r=()=>{try{let u=n?.getItem(At);return u==null?[]:Ve(JSON.parse(u))}catch{return[]}},i=u=>{try{n?.setItem(At,JSON.stringify(u))}catch{}},l=Object.freeze({lines:Object.freeze(r()),loaded:!1}),o=new Set;function a(u){l=Object.freeze({...l,...u});for(let w of o)try{w()}catch{}}async function c(){try{let w=await(await t(Ke,{method:"GET",headers:{accept:"application/json"}})).json();if(w?.ok===!0){let S=Ve(w.result);return a({lines:S,loaded:!0}),i(S),S}}catch{}return a({loaded:!0}),l.lines}async function m(u){let w=Ge(u);if(w==="")return l.lines;let S=Gn(l.lines,w);a({lines:Object.freeze(S)}),i(S);try{let z=await(await t(Ke,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w})})).json();if(z?.ok===!0){let q=Ve(z.result);return a({lines:q,loaded:!0}),i(q),q}}catch{}return l.lines}async function k(){a({lines:Object.freeze([])}),i([]);try{await t(Ke,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(u){return typeof u!="function"?()=>{}:(o.add(u),()=>o.delete(u))},getSnapshot(){return l},refresh:c,remember:m,clear:k}}var pe=Yn();var Je=null;function Dt(e,t){let n=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(n)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(n)?!1:/Mac/i.test(typeof t=="string"?t:n)}function _t(e){if(e!==void 0)return Dt(e.userAgent,e.platform)?".mov":".webm";if(Je===null){let t=typeof navigator>"u"?void 0:navigator;Je=Dt(t?.userAgent,t?.platform)?".mov":".webm"}return Je}var Ft={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},Zn={failed:"click-angry",cancelled:"act-shy"};function Ot(e){let t=e?.previous?.status??"idle",n=e?.next?.status??"idle",r=e?.previous?.detail??null,i=e?.next?.detail??null,l=n!==t||i!==r,a=t==="working"&&n==="thinking"?"result":n;if(!l)return{changed:!1,status:a,detail:i,clip:null,sound:null};if(n==="idle")return{changed:!0,status:"idle",detail:i,clip:null,sound:null};let c=a==="error"?Zn[i]??Ft.error:Ft[a]??e?.idleClip??null;return{changed:!0,status:a,detail:i,clip:c,sound:ut(a,i)}}var Xn=6e3,er=5e3,tr={thinking:0,working:1,result:2,waiting:3,success:4,error:5},se="idle-breathe-loop",jt="click-wave",Bt=["act-harley","act-beach"],$t=6e3,nr=9e4,rr=.12;function Ut({sessionId:e,t,useInput:n,locale:r}){let i=g.useRef(null),l=g.useRef(null),o=g.useRef("idle"),a=g.useRef(null),c=g.useRef(Date.now()),m=g.useRef(null),k=g.useRef(0),u=g.useRef(0),[w,S]=g.useState(null),[h,z]=g.useState(null),f=g.useSyncExternalStore(pe.subscribe,pe.getSnapshot,pe.getSnapshot).lines,M=g.useRef(0),[C,L]=g.useState(null),[E,_]=g.useState("idle"),[N,F]=g.useState(!0),D=g.useRef(!1),P=g.useCallback((d,v)=>{let T=i.current;if(T===null||T.dataset.clip===d&&T.loop===v&&!T.ended)return;T.dataset.clip=d,T.loop=v,T.src=`/api/chatbox-pet/asset/${d}${_t()}`;let B=T.play();B!==void 0&&typeof B.catch=="function"&&B.catch(()=>{})},[]),he=g.useCallback(()=>{let d=i.current;if(d!==null){if(!D.current&&d.dataset.clip!==se){D.current=!0,P(se,!0);return}F(!1)}},[P]),te=g.useCallback(()=>{window.clearTimeout(M.current),L(null)},[]),Z=g.useCallback((d,v,T,B=er,H=null)=>{window.clearTimeout(M.current),L({text:d,kind:T,source:H}),v||(M.current=window.setTimeout(()=>L(null),B))},[]),Ne=g.useCallback(d=>{let v=l.current?.workStatusTexts,T=tr[d],B=T===void 0||!Array.isArray(v)?void 0:v[T];if(!(!Array.isArray(B)||B.length===0))return B[Math.floor(Math.random()*B.length)]},[]),Ce=g.useCallback(d=>{let v=typeof d?.status=="string"?d.status:"idle",T=o.current,B=typeof d?.detail=="string"?d.detail:null,H=Ot({previous:{status:T,detail:a.current},next:{status:v,detail:B},idleClip:se});if(!H.changed){v==="waiting"&&typeof d?.bubble=="string"&&d.bubble!==""&&Z(d.bubble,!0,"waiting");return}if(o.current=v,a.current=B,_(v),m.current!==null&&m.current.isActive()){c.current=Date.now();return}if(v==="idle"){P(se,!0),te(),c.current=Date.now();return}c.current=Date.now();let W=H.status,ye=H.detail;P(H.clip??se,!1);let xe=typeof d?.bubble=="string"&&d.bubble!==""?d.bubble:Ne(W),Oe=d?.source==="broadcast"?"notify":H.sound;K.play(Oe,xe),xe!==void 0?Z(xe,v==="waiting",W):te()},[te,Ne,P,Z]),me=g.useCallback(async d=>{let v=await It({kind:d,locale:typeof r=="function"?r():"zh"});if(v===null)return;let T=Et(v.kind);P(T.clip,!1),K.play(T.sound,v.text),Z(v.text,!1,"quip",Ct,v.source?.label??null)},[r,P,Z]),Te=g.useCallback(()=>{if(o.current!=="idle"||m.current!==null&&m.current.isActive())return;let v=Date.now()-c.current;if(v<nr)return;if(Tt({idleForMs:v,chance:Qe})){c.current=Date.now(),me(null);return}if(Math.random()>rr)return;let T=Bt[Math.floor(Math.random()*Bt.length)];P(T,!1),c.current=Date.now()},[P,me]),ne=g.useCallback((d,v,T)=>{typeof d.clip=="string"&&d.clip!==""&&P(d.clip,!1),typeof d.sound=="string"&&d.sound!==""&&K.play(d.sound,d.line),typeof d.line=="string"&&d.line!==""&&Z(d.line,v,"chat",T)},[P,Z]),ue=g.useCallback(()=>{window.clearTimeout(u.current),S(null),P(se,!0),te()},[te,P]),re=typeof n=="function"?n(d=>typeof d?.draft=="string"?d.draft:""):"";g.useEffect(()=>{m.current===null&&(m.current=vt());let d=m.current,v=wt(re,typeof r=="function"?r():"zh"),T=d.observe(re);if(T!==null&&T.kind==="wake"&&(S({phase:"awake"}),ne({clip:"click-surprise",sound:"wake",line:kt({locale:v,seed:re})},!0)),T!==null&&T.kind==="off"){ue();return}if(window.clearTimeout(k.current),!d.isActive())return;let B=H=>{k.current=window.setTimeout(()=>{let W=d.settle(re,{locale:v});if(W!==null&&W.kind==="cooldown"){B(Math.max(120,W.retryInMs));return}W===null||W.kind!=="reply"||(ne(W,!1,$t),window.clearTimeout(u.current),u.current=window.setTimeout(()=>ue(),d.holdMs))},H)};return B(d.debounceMs),()=>window.clearTimeout(k.current)},[re,r,ne,ue]),g.useEffect(()=>{pe.refresh()},[]),g.useEffect(()=>{let d=!1;return fetch("/api/chatbox-pet/config").then(v=>v.ok?v.json():null).then(v=>{!d&&v?.ok===!0&&(l.current=v.result)}).catch(()=>{}),()=>{d=!0}},[]),g.useEffect(()=>{if(typeof e!="string"||e==="")return;let d=!1,v=0,T=async()=>{if(document.visibilityState==="visible"){try{let W=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),ye=W.ok?await W.json():null;!d&&ye?.ok===!0&&Ce(ye.result)}catch{}d||Te()}},B=()=>{v=window.setTimeout(async()=>{await T(),d||B()},Xn)},H=()=>{document.visibilityState==="visible"&&T()};return document.addEventListener("visibilitychange",H),T(),B(),()=>{d=!0,window.clearTimeout(v),document.removeEventListener("visibilitychange",H)}},[e,Ce]),g.useEffect(()=>(P(se,!0),()=>window.clearTimeout(M.current)),[P]);let[ge,Re]=g.useState(()=>we(ce())==="on"),_e=g.useCallback(d=>{let v=ke(d);v!==""&&(P(jt,!1),K.play("click",v),Z(v,!1,"chat",$t),pe.remember(v))},[P,Z]),Fe=g.useCallback(d=>{typeof d!="string"||d===""||(P(d,!1),K.play("click",d))},[P]),Ee=g.useCallback(()=>{let d=document.querySelector("[data-cbp-pet]"),v=d instanceof Element?d.getBoundingClientRect():null;v!==null&&z({left:v.left,right:v.right,top:v.top,bottom:v.bottom})},[]);return g.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},g.createElement("div",{className:"cbp-stage"},g.createElement("div",{className:(C===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(C?.kind==="error"?" cbp-bubble--error":"")+(C?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},C?.source?g.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":C.source},C.source):null,g.createElement("span",{className:"cbp-bubble-text"},C?.text??"")),g.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(ge?"sound.on":"sound.off"),"aria-pressed":ge,onClick:d=>{d.stopPropagation();let v=ft(ce())==="on";Re(v),prefsStore.update({sound:v})}},ge?g.createElement(or,null):g.createElement(ar,null)),g.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":w===null?E:"awake","data-cbp-chat":w===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{K.play("click"),P(jt,!1)},onContextMenu:d=>{d.preventDefault(),d.stopPropagation(),Ee()},onKeyDown:d=>{(d.key==="ContextMenu"||d.shiftKey&&d.key==="F10")&&(d.preventDefault(),Ee())},"aria-haspopup":"menu","aria-expanded":h===null?"false":"true"},N?g.createElement("video",{ref:i,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:d=>{d.currentTarget.loop||P(se,!0)},onError:he}):g.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),h===null?null:g.createElement(Pt,{anchor:h,locale:typeof r=="function"?r():"zh",onSay:_e,onAction:Fe,onQuip:d=>{me(d)},recent:f,onForget:()=>{pe.clear()},onClose:()=>z(null),t}))}function or(){return g.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},g.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),g.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),g.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function ar(){return g.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},g.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),g.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Ht=`
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
`;var Wt="/api/chatbox-pet/prefs",ir=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function sr(e={}){let t=typeof e.fetch=="function"?e.fetch:(...a)=>globalThis.fetch(...a),n=ir,r=new Set;function i(a){n={...n,...a};for(let c of r)try{c()}catch{}}async function l(){try{let c=await(await t(Wt,{method:"GET",headers:{accept:"application/json"}})).json();c?.ok===!0&&c.result!==null&&typeof c.result=="object"?i({pet:c.result.pet!==!1,boost:c.result.boost!==!1,sound:c.result.sound!==!1,loaded:!0}):i({loaded:!0})}catch{}return n}async function o(a){let c=n,m={};for(let k of["pet","boost","sound"])typeof a?.[k]=="boolean"&&(m[k]=a[k]);i(m);try{let u=await(await t(Wt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:m})})).json();if(u?.ok!==!0||u.result===null||typeof u.result!="object")throw new Error("rejected");return i({pet:u.result.pet!==!1,boost:u.result.boost!==!1,sound:u.result.sound!==!1,loaded:!0}),!0}catch{return i({pet:c.pet,boost:c.boost,sound:c.sound}),!1}}return{subscribe(a){return typeof a!="function"?()=>{}:(r.add(a),()=>r.delete(a))},getSnapshot(){return n},refresh:l,update:o}}var Y=sr();var U=ae(require("react"),1),Qt=require("react");var Kt=`
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
`;function Ye({id:e,checked:t,label:n,onChange:r}){return U.createElement("label",{className:"cbp-set-item",htmlFor:e},U.createElement("span",{className:"cbp-switch"},U.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:i=>r(i.target.checked),"data-cbp-pref":e}),U.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),U.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),n)}function Vt({t:e}){let t=(0,Qt.useSyncExternalStore)(Y.subscribe,Y.getSnapshot,Y.getSnapshot),[n,r]=U.useState(()=>we(ce())==="on"),i=l=>{r(l),$e(ce(),l?"on":"off"),Y.update({sound:l})};return U.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},U.createElement("div",{className:"cbp-set-head"},U.createElement("span",{className:"cbp-set-title"},e("settings.title")),U.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),U.createElement("div",{className:"cbp-set-items"},U.createElement(Ye,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:l=>{Y.update({pet:l})}}),U.createElement(Ye,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:l=>{Y.update({boost:l})}}),U.createElement(Ye,{id:"chatbox-pet-feature-sound",checked:n,label:e("settings.sound"),onChange:i})))}var ve=ae(require("react"),1),Pe=require("react"),Xe=require("@deepseek-ai/dsh-client-ui-primitives");var O=require("react");function be({size:e=16,children:t}){return(0,O.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function Le({size:e=16}){return(0,O.createElement)(be,{size:e},[(0,O.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,O.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function Gt({size:e=16}){return(0,O.createElement)(be,{size:e},(0,O.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function Jt({size:e=16}){return(0,O.createElement)(be,{size:e},[(0,O.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function Ze({size:e=16}){return(0,O.createElement)(be,{size:e},[(0,O.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,O.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function Yt({size:e=16}){return(0,O.createElement)(be,{size:e},(0,O.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function Zt({size:e=16}){return(0,O.createElement)(be,{size:e},[(0,O.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,O.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,O.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,O.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,O.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function lr({label:e,children:t}){return typeof Xe.Tooltip=="function"?ve.createElement(Xe.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Pe.cloneElement)(t,{title:e})}function Xt({inputActions:e,useInput:t,store:n,t:r,locale:i}){let l=(0,Pe.useSyncExternalStore)(n.subscribe,()=>n.getState(e),()=>n.getState(e)),o=typeof t=="function"?t(w=>w):void 0;n.setDraftMirror(e,o);let a=typeof o?.draft=="string"?o.draft:"",c=l.phase==="running"||l.phase==="streaming",m=l.phase!=="idle",k=r(c?"button.running":"button.label"),u=c?r("button.running"):a.trim()===""?r("button.tooltipCompose"):r("button.tooltip");return ve.createElement(lr,{label:u},ve.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":c?"true":"false","data-pb-open":m?"true":"false","aria-label":k,"aria-busy":c?"true":void 0,"aria-expanded":m?"true":"false","aria-controls":n.panelId(e),onMouseDown:w=>w.preventDefault(),onClick:()=>n.start(e,{locale:typeof i=="function"?i():"zh"})},ve.createElement(Le,{size:16})))}var V=ae(require("react"),1),Ae=require("react"),nt=require("@deepseek-ai/dsh-client-ui-primitives");var en="next-turn";function et(e){return(Array.isArray(e?.content)?e.content:[]).filter(n=>n!==null&&typeof n=="object"&&n.type==="text"&&typeof n.text=="string").map(n=>n.text).join("").trim()}function cr(e){return(Array.isArray(e?.content)?e.content:[]).some(n=>n===null||typeof n!="object"||n.type!=="text")}function tn(e){let t=[];try{let r=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();t=Array.isArray(r?.[en])?r[en]:[]}catch{t=[]}return tt(t)}function tt(e){let n=(Array.isArray(e)?e:[]).filter(o=>o!==null&&typeof o=="object"&&typeof o.id=="string"),r=n.map(et),i=n.filter((o,a)=>!cr(o)&&r[a]!==""),l="";return n.length>=2&&i.length!==n.length?l="attachment":n.length>8?l="too-many":n.length<2&&(l="too-few"),{items:n,texts:r,mergeable:n.length,blocked:l}}async function pr(e,t={}){let n=ur(e),r=typeof t.fetchImpl=="function"?t.fetchImpl:(...i)=>globalThis.fetch(...i);try{let i=await r("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof t.sessionId=="string"?t.sessionId:void 0,locale:t.locale==="en"?"en":"zh"})});if(!i.ok)return{prompt:n,optimized:!1,reason:"http-"+String(i.status)};let l=await i.json(),o=typeof l?.result?.prompt=="string"?l.result.prompt.trim():"";return o===""?{prompt:n,optimized:!1,reason:"empty"}:{prompt:o,optimized:l.result.optimized===!0,reason:typeof l.result.reason=="string"?l.result.reason:""}}catch{return{prompt:n,optimized:!1,reason:"network"}}}function ur(e){return(Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>t!=="").join(`

`)}async function dr(e,t,n){let r=Array.isArray(t)?t:[],i=String(n??"").trim();if(r.length<2||i==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[l,...o]=r;try{let m=await e.updateQueue(l.id,{kind:"edit",content:[{type:"text",text:i}]});if(m?.ok!==!0)return{ok:!1,merged:0,removed:0,error:m?.error?.code??"edit-failed"}}catch(m){return{ok:!1,merged:0,removed:0,error:nn(m)}}let a=0,c=0;for(let m of o)try{let k=await e.updateQueue(m.id,{kind:"remove"});if(k?.ok===!0){a+=1;continue}if(k?.error?.code==="session/queue-item-not-found"){c+=1;continue}return{ok:!1,merged:1,removed:a,claimed:c,error:k?.error?.code??"remove-failed"}}catch(k){return{ok:!1,merged:1,removed:a,claimed:c,error:nn(k)}}return{ok:c===0,merged:1,removed:a,claimed:c,error:c>0?"session/queue-item-not-found":""}}async function rn(e={}){let t=tn(e.session);if(t.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:t.blocked};let n=t.items.map(et),r=await pr(n,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),i=tn(e.session);if(!(i.items.length===t.items.length&&i.items.every((a,c)=>a.id===t.items[c].id&&et(a)===n[c])))return{ok:!1,count:t.items.length,optimized:!1,reason:"",error:"queue-changed"};let o=await dr(e.session,t.items,r.prompt);return{ok:o.ok,count:t.items.length,optimized:r.optimized,reason:r.reason,error:o.error}}function nn(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function fr({label:e,children:t}){return typeof nt.Tooltip=="function"?V.createElement(nt.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Ae.cloneElement)(t,{title:e})}var br=Object.freeze({}),hr=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>br});function mr(e){let t=(()=>{try{let r=e?.projections?.faceOf?.("inbox");if(typeof r?.subscribe=="function"&&typeof r?.getSnapshot=="function")return r}catch{}return hr})(),n=(0,Ae.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot);return tt(n?.["next-turn"])}function on({sessionId:e,sessions:t,t:n,locale:r,onNotice:i}){let l=V.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return t?.binding?.(e)?.session??null}catch{return null}},[t,e]),o=mr(l),[a,c]=V.useState("idle"),[m,k]=V.useState(""),u=V.useRef(0);V.useEffect(()=>()=>window.clearTimeout(u.current),[]);let w=o.items.length;if(w<2||o.blocked==="attachment"||o.blocked==="too-many")return null;let S=async()=>{if(a!=="running"){c("running"),k("");try{let z=await rn({session:l,sessionId:e,locale:typeof r=="function"?r():"zh"});if(z.ok){let q=z.optimized?n("merge.done")(z.count):n("merge.donePlain")(z.count);k(q),i?.(q)}else k(z.error==="queue-changed"?n("merge.changed"):z.error==="session/queue-item-not-found"?n("merge.claimed"):n("merge.failed"))}catch{k(n("merge.failed"))}finally{c("idle"),window.clearTimeout(u.current),u.current=window.setTimeout(()=>k(""),4e3)}}},h=a==="running"?n("merge.running"):m!==""?m:n("merge.label")(w);return V.createElement(fr,{label:h},V.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":w,"data-cbp-merge-phase":a,"aria-label":h,"aria-busy":a==="running"?"true":void 0,disabled:a==="running",onClick:z=>{z.stopPropagation(),S()}},V.createElement(Zt,null),V.createElement("span",{className:"cbp-merge-count"},a==="running"?"\u2026":w)))}var Se="promptBoost",an={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},sn={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var b=ae(require("react"),1),G=require("react");var gr=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function yr(){return b.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},b.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),b.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function ln(e,t){let n=`source.${e.id}`,r=t(n);return r===n?e.label:r}function xr(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function wr(e,t){if(e.phase!=="ready")return"";let n=[];return e.cached&&n.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&n.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),n.join(" \xB7 ")}function kr(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let n=e.sources.slice(0,2).map(r=>`${ln(r,t)} ${r.count}`).join(" \xB7 ");return n===""?t("chip.writing"):`${n} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function vr({state:e,store:t,t:n,inputActions:r,chipRef:i}){let l=e.phase==="applied",o=e.phase==="running"||e.phase==="streaming",a=e.phase==="ready",c=e.phase==="error",m=e.mode==="compose"?n("panel.compose"):n("button.label"),k=kr(e,n);return l?b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":n("chip.expand"),onClick:()=>t.expand(r),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),t.expand(r))}},b.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},b.createElement(Gt,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},n("undo.done")),b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":n("undo.label"),onClick:()=>t.undo(r)},n("undo.action")))):b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":o?"true":"false",onClick:()=>t.expand(r)},b.createElement("button",{ref:i,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(r),"aria-label":`${n("chip.expand")} \xB7 ${m}`,onClick:()=>t.expand(r)},b.createElement("span",{className:o||a?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},o?b.createElement(yr,null):c?b.createElement(Ze,{size:12}):b.createElement(Le,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},k),a||c?b.createElement(b.Fragment,null,b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("span",{className:"pb-chip-view"},n("chip.view"))):null),b.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":n("chip.dismiss"),onClick:()=>t.dismiss(r)},b.createElement(Jt,{size:10}))))}function Sr({state:e,store:t,t:n,inputActions:r,locale:i,panelRef:l}){let o=(0,G.useRef)(null),a=e.phase,c=a==="running",m=a==="streaming",k=a==="ready",u=a==="applied",w=k||u,S=a==="error",h=e.sources,z=c||m||w||h.length>0,q=u?e.applied:e.prompt,f=wr(e,n),M=t.panelId(r),C=n(gr?"shortcut.mac":"shortcut.other"),L=n(c?"panel.announceRunning":m?"panel.streaming":u?"panel.announceApplied":k?"panel.announceReady":"panel.announceError");return(0,G.useEffect)(()=>{let E=o.current;E===null||a!=="streaming"||(E.scrollTop=E.scrollHeight)},[e.prompt,a]),b.createElement("section",{ref:l,id:M,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":a,"data-pb-running":c||m?"true":"false",tabIndex:-1,"aria-labelledby":`${M}-title`,"aria-busy":c||m?"true":void 0},b.createElement("header",{className:"pb-head"},b.createElement("div",{className:"pb-head-row"},b.createElement("h2",{className:"pb-title",id:`${M}-title`},n("panel.title")),e.mode==="compose"?b.createElement("span",{className:"pb-mode"},n("panel.compose")):null,b.createElement("span",{className:"pb-meta"},f),b.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":n("panel.collapse"),title:n("panel.collapse"),onClick:()=>t.collapse(r)},b.createElement(Yt,{size:14}))),z?b.createElement("div",{className:"pb-sources",role:"list","aria-label":n("panel.sources")},h.length>0?h.map(E=>b.createElement("span",{key:E.id,className:"pb-chip",role:"listitem","data-pb-source":E.id},b.createElement("span",{className:"pb-chip-label"},ln(E,n)),b.createElement("span",{className:"pb-chip-count"},E.count))):c?[b.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),b.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:b.createElement("span",{className:"pb-note"},n("panel.noSources"))):null),b.createElement("div",{className:"pb-rule","aria-hidden":"true"}),b.createElement("div",{className:"pb-body"},c?b.createElement(b.Fragment,null,b.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},b.createElement("span",{className:"pb-skeleton-line is-long"}),b.createElement("span",{className:"pb-skeleton-line is-full"}),b.createElement("span",{className:"pb-skeleton-line is-short"})),b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.status"))):null,m||w?b.createElement("textarea",{ref:o,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:m||u,spellCheck:!1,"aria-label":n("panel.editLabel"),placeholder:n("panel.placeholder"),value:q}):null,m?b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.streaming")):null,S?b.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},b.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},b.createElement(Ze,{size:14})),b.createElement("span",{className:"pb-error-text"},xr(e.error,n))):null,b.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},L)),b.createElement("div",{className:"pb-foot"},b.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(r)},n("panel.close")),b.createElement("span",{className:"pb-foot-spacer"}),w?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:C,onClick:()=>t.retry(r,{locale:i()})},n("panel.another"),b.createElement("span",{className:"pb-kbd","aria-hidden":"true"},C)):null,u?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(r)},n("undo.action")):null,c||m?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(r,{locale:i()})},n("panel.retry")):null,S?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(r,{locale:i()})},n("panel.retryError")):null))}function cn({inputActions:e,store:t,t:n,locale:r,session:i}){let l=(0,G.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),o=l.phase,a=o!=="idle"||l.undo!==null,c=l.expanded===!0&&o!=="idle";(0,G.useEffect)(()=>{let h=typeof i?.id=="string"?i.id:"";h!==""&&t.setSessionId(e,h)},[i?.id,e,t]);let m=(0,G.useRef)(null),k=(0,G.useRef)(null),u=(0,G.useRef)(null),w=(0,G.useRef)(!1),S=(0,G.useRef)(!1);return(0,G.useEffect)(()=>{if(!a)return;let h=z=>{if(!(z.defaultPrevented||c===!1)){if(z.key==="Escape"){z.preventDefault(),z.stopPropagation(),t.collapse(e);return}z.key==="Enter"&&(z.metaKey||z.ctrlKey)&&(z.preventDefault(),z.stopPropagation(),o==="applied"||o==="ready"?t.retry(e,{locale:r()}):o==="error"&&t.retry(e,{locale:r()}))}};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[a,c,o,e,t,r]),(0,G.useEffect)(()=>{if(a&&w.current===!1){w.current=!0,u.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(a===!1&&w.current){w.current=!1;let h=u.current;if(u.current=null,h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[a]),(0,G.useEffect)(()=>{if(c&&S.current===!1){S.current=!0;let h=k.current;if(h!==null&&typeof h.focus=="function")try{h.focus({preventScroll:!0})}catch{}return}if(c===!1&&S.current){S.current=!1;let h=o==="idle"?u.current:m.current;if(h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[c,o]),a?c===!1?b.createElement(vr,{state:l,store:t,t:n,inputActions:e,chipRef:m}):b.createElement(Sr,{state:l,store:t,t:n,inputActions:e,locale:r,panelRef:k}):null}var y=ae(require("react"),1),ot=require("react-dom");var pn=[{id:"transcribe",icon:"mic",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"slides",icon:"slides",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function rt(e,t){return t==="en"?e.en:e.zh}function un({name:e}){let t={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return y.createElement("svg",{...t},y.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),y.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),y.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),y.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return y.createElement("svg",{...t},y.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),y.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),y.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),y.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return y.createElement("svg",{...t},y.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),y.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),y.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"slides":return y.createElement("svg",{...t},y.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),y.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return y.createElement("svg",{...t},y.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),y.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function zr(){let e=document.querySelector(".cbp-quick");if(e&&typeof e.closest=="function"){let t=e.closest('[data-composer-card="true"]');if(t)return t}return document.querySelector('[data-composer-card="true"]')}function dn({inputActions:e,t,locale:n}){let r=typeof e?.setDraft=="function",[i,l]=y.useState(!1),[o,a]=y.useState(null),c=y.useRef(null),m=y.useRef(null),[k,u]=y.useState(null);y.useEffect(()=>{u(zr())},[]);let w=y.useCallback(()=>{let M=c.current?.getBoundingClientRect();M!=null&&a({right:Math.max(8,Math.round(window.innerWidth-M.right)),bottom:Math.max(8,Math.round(window.innerHeight-M.top)+8)})},[]);y.useLayoutEffect(()=>{i&&w()},[i,w]),y.useEffect(()=>{if(!i)return;let M=E=>{let _=E.target;_ instanceof Node&&m.current?.contains(_)!==!0&&c.current?.contains(_)!==!0&&l(!1)},C=E=>{E.key==="Escape"&&(E.preventDefault(),E.stopPropagation(),l(!1),c.current?.focus?.())},L=()=>l(!1);return document.addEventListener("pointerdown",M,!0),document.addEventListener("keydown",C,!0),window.addEventListener("resize",L),window.addEventListener("scroll",L,!0),()=>{document.removeEventListener("pointerdown",M,!0),document.removeEventListener("keydown",C,!0),window.removeEventListener("resize",L),window.removeEventListener("scroll",L,!0)}},[i]);let S=M=>{let C=rt(M.prompt,typeof n=="function"?n():"zh");try{e.setDraft({text:C,references:[]})}catch{try{e.setDraft(C)}catch{}}l(!1),c.current?.focus?.()},h=t("quick.label"),z=typeof n=="function"?n():"zh",q=y.createElement("button",{ref:c,type:"button",className:"cbp-more","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":i?"true":"false","aria-label":t("quick.aria"),title:t(r?"quick.aria":"quick.disabled"),disabled:!r,onMouseDown:M=>M.preventDefault(),onClick:()=>l(M=>!M)},y.createElement(un,{name:"grid"}),y.createElement("span",{className:"cbp-more-label"},h)),f=i&&o!==null?(0,ot.createPortal)(y.createElement("div",{ref:m,className:"cbp-quick-panel",role:"menu","aria-label":t("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${o.right}px`,bottom:`${o.bottom}px`}},y.createElement("div",{className:"cbp-quick-head"},y.createElement("span",{className:"cbp-quick-title"},t("quick.title")),y.createElement("span",{className:"cbp-quick-hint"},t("quick.hint"))),y.createElement("div",{className:"cbp-quick-grid"},pn.map(M=>y.createElement("button",{key:M.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":M.id,onClick:()=>S(M)},y.createElement("span",{className:"cbp-quick-icon"},y.createElement(un,{name:M.icon})),y.createElement("span",{className:"cbp-quick-name"},rt({zh:M.zh,en:M.en},z)))))),document.body):null;return y.createElement(y.Fragment,null,y.createElement("span",{className:"cbp-quick",style:{display:"none"},"aria-hidden":"true"}),k!==null?(0,ot.createPortal)(q,k):null,f)}var fn=`
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
`;var yn="/api/chatbox-pet/boost",bn=4e3,Mr=12e4,Nr=24,Cr=8e3,xn=25e3;function wn(e){return{set:typeof e?.set=="function"?e.set:(t,n)=>setTimeout(t,n),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function lt(e){let t=typeof e=="string"?e:"";return t.length>bn?t.slice(0,bn):t}function hn(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function ze(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function at(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(n===null||typeof n!="object")continue;let r=typeof n.id=="string"?n.id.trim():"",i=Number(n.count);r===""||!Number.isFinite(i)||i<=0||t.push({id:r,label:typeof n.label=="string"&&n.label.trim()!==""?n.label.trim():r,count:Math.round(i)})}return t}function Me(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function J(e,t,n){let r=new Error(typeof t=="string"&&t!==""?t:e);return r.code=e,n!==void 0&&(r.cause=n),r}function mn(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",n=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return n===void 0?{code:t}:{code:t,message:n}}function Tr(e){let t=[],n=e;for(;;){let r=/(?:\r?\n){2}/.exec(n);if(r===null)break;t.push(n.slice(0,r.index)),n=n.slice(r.index+r[0].length)}return{frames:t,rest:n}}function gn(e){let t=[];for(let n of e.split(`
`)){let r=n.trim();r===""||r.startsWith(":")||r.startsWith("data:")&&t.push(r.slice(5).trimStart())}if(t.length===0)return null;try{let n=JSON.parse(t.join(`
`));return n!==null&&typeof n=="object"&&Array.isArray(n)===!1?n:null}catch{return null}}async function it(e){try{return await e.json()}catch{return null}}function st(e,t){if(e===null||typeof e!="object")throw J("host",void 0,t);if(e.ok!==!0){let i=typeof e.error?.message=="string"?e.error.message.trim():"";throw J(typeof e.error?.code=="string"?e.error.code:"host",i===""?void 0:i)}let n=e.result,r=typeof n?.prompt=="string"?n.prompt.trim():"";if(r==="")throw J("empty");return{prompt:r,mode:n.mode==="compose"?"compose":"improve",sources:at(n.sources),elapsedMs:Number.isFinite(n.elapsedMs)?Math.max(0,Number(n.elapsedMs)):null,cached:n.cached===!0}}async function Rr(e){let{draft:t,mode:n,locale:r,signal:i,onEvent:l,idleMs:o=xn,sessionId:a=""}=e,c=a===""?{}:{sessionId:a},m=typeof e.fetch=="function"?e.fetch:globalThis.fetch,k=wn(e.timers),u=new AbortController,w=()=>u.abort();i!==void 0&&(i.aborted?u.abort():i.addEventListener("abort",w,{once:!0}));let S=!1,h=null,z=()=>{h!==null&&k.clear(h),h=k.set(()=>{S=!0,u.abort()},o)},q=!1;try{z();let f;try{f=await m(yn,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:lt(t),mode:n,locale:r,stream:!0,...c}}),signal:u.signal})}catch(_){throw S?J("timeout",void 0,_):Me(_)?_:J("network",void 0,_)}if(S)throw J("timeout");if(f===null||typeof f!="object")throw J("host");if(f.ok!==!0){let _=await it(f);if(f.status>=400)throw J("host",void 0,f.status);let N=st(_,f.status);l({type:"replace",text:N.prompt}),l({type:"done",result:N});return}let M=typeof f.headers?.get=="function"?String(f.headers.get("content-type")??""):"";if(f.body===null||f.body===void 0||typeof f.body.getReader!="function"||!M.includes("text/event-stream")){let _=st(await it(f),f.status);l({type:"replace",text:_.prompt}),l({type:"done",result:_});return}let C=f.body.getReader(),L=new TextDecoder,E="";for(;!q;){let _;try{_=await C.read()}catch(F){throw S?J("timeout",void 0,F):Me(F)?F:J("stream",void 0,F)}if(_.done===!0)break;z(),E+=L.decode(_.value,{stream:!0});let N=Tr(E);E=N.rest;for(let F of N.frames){let D=gn(F);if(D!==null&&l(D)==="stop"){q=!0;break}}}if(!q){let _=E.trim();if(_!==""){let N=gn(_);N!==null&&l(N)}}if(q)try{await C.cancel()}catch{}}finally{h!==null&&k.clear(h),i!==void 0&&i.removeEventListener("abort",w)}}async function Er(e){let{draft:t,mode:n,locale:r,signal:i,sessionId:l=""}=e,o=typeof e.fetch=="function"?e.fetch:globalThis.fetch,a;try{a=await o(yn,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:lt(t),mode:n,locale:r,stream:!1,...l===""?{}:{sessionId:l}}}),signal:i})}catch(c){throw Me(c)?c:J("network",void 0,c)}if(a===null||typeof a!="object")throw J("host");if(a.ok!==!0&&a.status>=400)throw J("host",void 0,a.status);return st(await it(a),a.status)}function Ir(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,n=typeof e.now=="function"?e.now:()=>Date.now(),r=wn(e.timers),i=Number.isFinite(e.idleMs)?Number(e.idleMs):xn,l=Number.isFinite(e.undoMs)?Number(e.undoMs):Cr,o=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):Mr,a=new WeakMap,c=new WeakMap,m=new WeakMap,k=new WeakMap,u=new WeakMap,w="",S=new Set,h=new Map,z=hn(),q=ze(null),f=null,M=0,C=0,L=null,E=null,_=()=>{for(let s of[...S])try{s()}catch(p){console.error("[prompt-boost] a store listener failed:",p)}},N=s=>s!=null&&(typeof s=="object"||typeof s=="function");function F(s){let p=N(s)?s:E;if(!N(p))return z;let x=a.get(p);return x===void 0&&(x=hn(),a.set(p,x)),x}function D(s,p){let x=N(s)?s:E,j={...F(x),...p};return N(x)?a.set(x,j):z=j,_(),j}function P(s){let p=N(s)?s:E;return N(p)?m.get(p)??ze(null):q}function he(s){return N(s)?s:E}function te(s){let p=N(s)?s:E;if(!N(p))return"default";let x=c.get(p);return x===void 0&&(M+=1,x=`s${M}`,c.set(p,x)),x}function Z(s){return`prompt-boost-panel-${te(s)}`}function Ne(s,p,x){return`${te(s)}\0${p}\0${x}`}function Ce(s){let p=h.get(s);return p===void 0?null:n()-p.at>o?(h.delete(s),null):(h.delete(s),h.set(s,p),p.result)}function me(s,p){for(h.delete(s),h.set(s,{at:n(),result:p});h.size>Nr;){let x=h.keys().next();if(x.done===!0)break;h.delete(x.value)}}function Te(){if(L===null)return;let s=L;L=null;try{s.controller.abort()}catch{}}function ne(s){let p=N(s)?s:E,x=N(p)?k.get(p):f;x!=null&&r.clear(x),N(p)?k.delete(p):f=null}function ue(s){ne(s);let p=null;p=r.set(()=>{let R=F(s);R.undo!==null&&D(s,{undo:null,phase:R.phase==="applied"?"idle":R.phase,applied:"",prompt:R.phase==="applied"?"":R.prompt,sources:R.phase==="applied"?[]:R.sources})},l);let x=N(s)?s:E;N(x)?k.set(x,p):f=p}function re(s,p,x){let R=he(s),j=ze(P(s)),$=!1;if(N(R)&&typeof R.setDraft=="function")try{R.setDraft({text:p.prompt,references:[]}),$=!0}catch{try{R.setDraft(p.prompt),$=!0}catch{$=!1}}if(!$){D(s,{phase:"error",mode:p.mode,prompt:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}D(s,{phase:"applied",mode:p.mode,prompt:p.prompt,applied:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:null,undo:{draft:j,at:n()},expanded:!1}),ue(s),me(x,p),K.play("boostDone")}async function ge(s,p,x){let{draft:R,mode:j,locale:$,key:X,sessionId:oe}=x,de=!1,le=!1,fe=()=>L===p&&p.controller.signal.aborted===!1,Nn=A=>{if(!fe())return"stop";if(de=!0,A.type==="sources"){let Q=F(s);D(s,{sources:at(A.sources),mode:A.mode==="compose"?"compose":Q.mode});return}if(A.type==="delta"){if(typeof A.text!="string"||A.text==="")return;let Q=F(s);D(s,{phase:"streaming",prompt:Q.prompt+A.text});return}if(A.type==="replace"){if(typeof A.text!="string")return;let Q=F(s),Cn=Q.phase==="ready"||A.text===""?Q.phase:"streaming";D(s,{prompt:A.text,phase:Cn});return}if(A.type==="done"){le=!0;let Q={prompt:typeof A.result?.prompt=="string"?A.result.prompt.trim():F(s).prompt.trim(),mode:A.result?.mode==="compose"?"compose":j,sources:at(A.result?.sources??F(s).sources),elapsedMs:Number.isFinite(A.result?.elapsedMs)?Math.max(0,Number(A.result.elapsedMs)):null,cached:A.result?.cached===!0};return Q.prompt===""?(D(s,{phase:"error",error:{code:"empty"}}),K.play("boostFail"),"stop"):(re(s,Q,X),"stop")}if(A.type==="error"){le=!0;let Q=typeof A.message=="string"&&A.message.trim()!==""?A.message.trim():void 0;return D(s,{phase:"error",error:Q===void 0?{code:"unknown"}:{code:"host",message:Q}}),"stop"}};try{if(await Rr({draft:R,mode:j,locale:$,sessionId:oe,signal:p.controller.signal,onEvent:Nn,fetch:t,timers:r,idleMs:i}),le)return;if(de)throw J("stream");await Re(s,p,{draft:R,mode:j,locale:$,key:X,sessionId:oe})}catch(A){if(p.controller.signal.aborted||Me(A)||!fe())return;if(de){D(s,{phase:"error",error:mn(A)}),K.play("boostFail");return}try{await Re(s,p,{draft:R,mode:j,locale:$,key:X,sessionId:oe})}catch(Q){if(p.controller.signal.aborted||Me(Q)||!fe())return;D(s,{phase:"error",error:mn(Q)}),K.play("boostFail")}}finally{L===p&&(L=null)}}async function Re(s,p,x){let R=await Er({draft:x.draft,mode:x.mode,locale:x.locale,signal:p.controller.signal,fetch:t,sessionId:x.sessionId??""});L!==p||p.controller.signal.aborted||re(s,R,x.key)}function _e(s,p){let x=typeof p=="string"?p:"";x!==""&&(w=x,N(s)&&u.set(s,x))}function Fe(s){return N(s)?u.get(s)??w:w}function Ee(s,p){let x=typeof p?.draft=="string"?p.draft:"",R=Array.isArray(p?.occurrences)?p.occurrences:[],j=P(s);if(j.text===x&&j.references.length===R.length)return;let $={text:x,references:R.map(oe=>({...oe}))},X=N(s)?s:E;N(X)?m.set(X,$):q=$}function d(s,p={}){N(s)&&(E=s);let x=p.locale==="en"?"en":"zh",R=p.force===!0,j=P(s),$=lt(j.text),X=$.trim()===""?"compose":"improve",oe=Ne(s,X,$);if(Te(),ne(s),!R){let fe=Ce(oe);if(fe!==null){re(s,{...fe,cached:!0},oe);return}}C+=1;let de={seq:C,actions:s,controller:new AbortController};L=de;let le=F(s);D(s,{phase:"running",mode:X,seed:$,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:le.phase==="idle"&&le.undo===null?!1:le.expanded}),K.play("boostStart"),ge(s,de,{draft:$,mode:X,locale:x,key:oe,sessionId:Fe(s)})}function v(s,p={}){d(s,{locale:p.locale,force:!0})}function T(s){let p=F(s);if(p.phase!=="ready")return!1;let x=p.prompt.trim();if(x==="")return!1;let R=he(s);if(!N(R)||typeof R.setDraft!="function")return D(s,{phase:"error",error:{code:"apply"}}),!1;let j=ze(P(s)),$=!1;try{R.setDraft({text:x,references:[]}),$=!0}catch{try{R.setDraft(x),$=!0}catch{$=!1}}return $?(ne(s),D(s,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:j,at:n()},expanded:!1}),ue(s),!0):(D(s,{phase:"error",error:{code:"apply"}}),!1)}function B(s){let p=F(s);if(p.undo===null)return!1;let x=he(s),R=ze(p.undo.draft),j=!1;if(N(x)&&typeof x.setDraft=="function")try{x.setDraft({text:R.text,references:R.references}),j=!0}catch{try{x.setDraft(R.text),j=!0}catch{j=!1}}return ne(s),D(s,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),j}function H(s){F(s).expanded!==!1&&D(s,{expanded:!1})}function W(s){let p=F(s);p.phase==="idle"&&p.undo===null||p.expanded===!0||D(s,{expanded:!0})}function ye(s){F(s).expanded===!0?H(s):W(s)}function xe(s){let p=N(s)?s:E;L!==null&&L.actions===p&&Te(),ne(s),D(s,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Oe(s,p){let x=F(s);x.phase==="streaming"&&(typeof p!="string"||p===x.prompt||D(s,{prompt:p}))}return{subscribe(s){return typeof s!="function"?()=>{}:(S.add(s),()=>{S.delete(s)})},getState:F,panelId:Z,sessionKey:te,setDraftMirror:Ee,setSessionId:_e,start:d,retry:v,apply:T,undo:B,expand:W,collapse:H,toggle:ye,dismiss:xe,edit:Oe}}var De=Ir();var kn=`
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
`;var qr="@local/chatbox-pet",zn=["slots","locale"];function vn(){return(0,Sn.useSyncExternalStore)(Y.subscribe,Y.getSnapshot,Y.getSnapshot)}function Mn(e){let t=e.locale.bind(ie),n=e.locale.bind(Se);e.effect(()=>e.locale.register(ie,{zh:bt,en:ht}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(Se,{zh:an,en:sn}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let o=document.querySelector('style[data-plugin="chatbox-pet"]');o!==null&&o.remove();let a=document.createElement("style");return a.setAttribute("data-plugin","chatbox-pet"),a.textContent=`${Ht}
${kn}
${Kt}
${fn}`,document.head.appendChild(a),()=>{a.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{Y.refresh().then(o=>{dt(o?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let o=()=>K.unlock();return window.addEventListener("pointerdown",o,{capture:!0}),window.addEventListener("keydown",o,{capture:!0}),()=>{window.removeEventListener("pointerdown",o,{capture:!0}),window.removeEventListener("keydown",o,{capture:!0})}},"chatbox-pet: sound unlock");let r=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:qr,order:1,label:()=>t("label"),locale:ie,inject:o=>({sessionId:o})},o=>{if(vn().pet===!1)return null;let c=typeof o?.sessionId=="string"&&o.sessionId!==""?o.sessionId:typeof o?.session?.id=="string"?o.session.id:"";return c===""?null:ee.createElement(Ut,{sessionId:c,t,useInput:o?.useInput,locale:r})}));let i=o=>a=>vn().boost===!1?null:o(a);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>n("button.label"),locale:Se},i(o=>ee.createElement(Xt,{...o,store:De,t:n,locale:r})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>t("merge.label")(2),locale:ie,inject:o=>({sessionId:o})},o=>{let a=typeof o?.sessionId=="string"?o.sessionId:"";return a===""?null:ee.createElement(on,{sessionId:a,sessions:e.get("sessions"),t,locale:r,onNotice:c=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:a,text:c,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:Se},i(o=>ee.createElement(cn,{...o,store:De,t:n,locale:r})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>t("quick.label"),locale:ie},o=>ee.createElement(dn,{inputActions:o?.inputActions,t,locale:r})));function l({sessionId:o,session:a}){let c=typeof o=="string"&&o!==""?o:typeof a?.id=="string"?a.id:"";return ee.useEffect(()=>{c!==""&&De.setSessionId(null,c)},[c]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:ie,inject:o=>({sessionId:o})},o=>ee.createElement(l,{sessionId:o?.sessionId,session:o?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:ie},()=>ee.createElement(Vt,{t})))}
		return module.exports;
	}
});
