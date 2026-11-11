window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var Tn=Object.create;var Ie=Object.defineProperty;var Rn=Object.getOwnPropertyDescriptor;var En=Object.getOwnPropertyNames;var In=Object.getPrototypeOf,qn=Object.prototype.hasOwnProperty;var Ln=(e,t)=>{for(var n in t)Ie(e,n,{get:t[n],enumerable:!0})},lt=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of En(t))!qn.call(e,s)&&s!==n&&Ie(e,s,{get:()=>t[s],enumerable:!(r=Rn(t,s))||r.enumerable});return e};var ae=(e,t,n)=>(n=e!=null?Tn(In(e)):{},lt(t||!e||!e.__esModule?Ie(n,"default",{value:e,enumerable:!0}):n,e)),Pn=e=>lt(Ie({},"__esModule",{value:!0}),e);var qr={};Ln(qr,{apply:()=>Mn,inject:()=>zn});module.exports=Pn(qr);var ee=ae(require("react"),1);var Be="chatboxPet.sound",pt=!0,An=.3,Dn=1e3,_n=7,je={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},Pr=Object.freeze(Object.keys(je)),Fn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function ut(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":Fn[e]}function we(e){try{return e?.getItem(Be)==="off"?"off":"on"}catch{return"on"}}function dt(e){pt=e!==!1}function $e(e,t){try{e?.setItem(Be,t==="off"?"off":"on")}catch{}}function ft(e){let t=we(e)==="on"?"off":"on";return $e(e,t),t}function le(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function On(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function jn(e){let t=e.now??(()=>Date.now()),n=null,r=null,s=!1,c=new Map,a=new Map,o=0;function l(){if(!s)try{let u=e.createContext();if(u==null)return;let k=u.createGain();if(k.gain.value=An,k.connect(u.destination),u.state==="suspended"&&typeof u.resume=="function"){let z=u.resume();z!==void 0&&typeof z.catch=="function"&&z.catch(()=>{})}n=u,r=k,s=!0}catch{n=null,r=null,s=!1}}function m(u,k,z){if(k<=1)return 0;if(typeof z=="string"&&z!=="")return On(z)%k;let h=(a.get(u)??0)%k;return a.set(u,h+1),h}function w(u,k){if(e.getPref()!=="on"||!s||n===null||r===null||!e.isVisible())return!1;let z=je[u];if(z===void 0)return!1;let h=t(),g=c.get(u);if(g!==void 0&&h-g<Dn)return!1;c.set(u,h);let M=Array.isArray(z.variants)?z.variants:[];if(M.length===0)return!1;let f=M[m(u,M.length,k)];o=(o+1)%7;let I=(o-3)*(_n/3);try{return Bn(n,r,f,I),!0}catch{return!1}}return{play:w,unlock:l,isUnlocked:()=>s,recipeNames:()=>Object.keys(je)}}function Bn(e,t,n,r){let s=e.currentTime;for(let c of n.notes){let a=s+c.at,o=e.createOscillator(),l=e.createGain();o.type=c.type,o.frequency.setValueAtTime(c.freq,a),typeof c.slideTo=="number"&&o.frequency.exponentialRampToValueAtTime(c.slideTo,a+c.dur),r!==0&&typeof o.detune=="object"&&o.detune!==null&&o.detune.setValueAtTime(r,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(c.level,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+c.dur),o.connect(l),l.connect(t),o.start(a),o.stop(a+c.dur+.02)}}function $n(){return{getPref:()=>{let e=le()?.getItem(Be);return e==="on"||e==="off"?e:pt?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var K=jn($n());var Sn=require("react");var ie="chatboxPet",bt={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E09\u4E2A\u5F00\u5173\u4E92\u4E0D\u5F71\u54CD\uFF1A\u5173\u6389\u300C\u663E\u793A\u5BA0\u7269\u300D\u53EA\u9690\u85CF\u76AE\u5361\u4E18\uFF0C\u63D0\u793A\u8BCD\u589E\u5F3A\u4E0E\u97F3\u6548\u7167\u5E38\u53EF\u7528\u3002","settings.pet":"\u663E\u793A\u5BA0\u7269","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355","quick.label":"\u66F4\u591A","quick.aria":"\u6253\u5F00\u5FEB\u6377\u529F\u80FD","quick.title":"\u5FEB\u6377\u529F\u80FD","quick.hint":"\u70B9\u4E00\u4E0B\u628A\u6307\u4EE4\u586B\u5165\u8F93\u5165\u6846\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u53D1\u9001","quick.disabled":"\u5F53\u524D\u8F93\u5165\u6846\u8FD8\u4E0D\u80FD\u63A5\u6536\u6587\u5B57","merge.label":e=>`\u5408\u5E76 ${e} \u6761\u6392\u961F\u6D88\u606F`,"merge.running":"\u6B63\u5728\u5408\u5E76\u2026","merge.done":e=>`\u5DF2\u628A ${e} \u6761\u5408\u5E76\u6210 1 \u6761`,"merge.donePlain":e=>`\u5DF2\u5408\u5E76 ${e} \u6761\uFF08\u672A\u4F18\u5316\uFF09`,"merge.failed":"\u5408\u5E76\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217","merge.changed":"\u961F\u5217\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u5408\u5E76","merge.claimed":"\u6709\u6D88\u606F\u5DF2\u88AB\u667A\u80FD\u4F53\u53D6\u8D70\uFF0C\u8BF7\u68C0\u67E5\u961F\u5217"},ht={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Three independent switches: turning the pet off only hides Pikachu; prompt boost and sound keep working.","settings.pet":"Show pet","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu","quick.label":"More","quick.aria":"Open quick actions","quick.title":"Quick actions","quick.hint":"Fills the composer \u2014 never sends on its own.","quick.disabled":"This composer cannot take text yet","merge.label":e=>`Merge ${e} queued messages`,"merge.running":"Merging\u2026","merge.done":e=>`Merged ${e} into one`,"merge.donePlain":e=>`Merged ${e} (not optimised)`,"merge.failed":"Merge incomplete; check the queue","merge.changed":"The queue changed; merge again","merge.claimed":"The agent claimed a message; check the queue"};var y=ae(require("react"),1);var Un=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],Hn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},gt=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],Ue={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},_r=[...gt.map(e=>e.id),"fallback"];function He(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function yt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function mt(e){let t=yt(e);if(t==="")return null;for(let n of Un){let r=/^[a-z ]+$/.test(n),c=(r?new RegExp(`(^|[^a-z])${He(n).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(He(n))).exec(t);if(c===null)continue;let a=c.index+(r?c[1].length:0),o=a+(r?n.replace(/ /g," ").length:n.length),l=`${t.slice(0,a)} ${t.slice(o)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:n,rest:l}}return null}function Wn(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function Qn(e){let t=yt(e);if(t==="")return"fallback";for(let n of gt){for(let r of n.zh)if(t.includes(r))return n.id;for(let r of n.en)if(new RegExp(`(^|[^a-z])${He(r).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return n.id}return"fallback"}function xt(e,t){let n=Array.isArray(e)?e.filter(r=>typeof r=="string"&&r!==""):[];return n.length===0?"":n[Wn(t)%n.length]}function Kn(e,t={}){let n=Ue[e]??Ue.fallback,r=t.locale==="en"?"en":"zh",s=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:Ue[e]===void 0?"fallback":e,clip:n.clip,sound:n.sound,line:xt(n[r],s)}}function wt(e,t="zh"){let n=String(e??"");return/[\u4e00-\u9fff]/.test(n)?"zh":/[a-z]/i.test(n)||t==="en"?"en":"zh"}function kt(e={}){let t=e.locale==="en"?"en":"zh";return xt(Hn[t],e.seed??"wake")}function vt(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),n=Number.isFinite(e.debounceMs)?e.debounceMs:700,r=Number.isFinite(e.holdMs)?e.holdMs:15e3,s=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,c=!1,a="",o="",l=0,m=0;function w(z){let h=mt(z);return h===null?c?(c=!1,a="",o="",{kind:"off"}):null:(l=t(),c?null:(c=!0,a=h.wake,o=h.rest,l=t(),m=0,{kind:"wake",wake:h.wake,digest:h.rest}))}function u(z,h={}){if(!c)return null;let g=mt(z);if(g===null)return c=!1,{kind:"off"};let M=`${g.wake}\0${g.rest}`;if(M===o)return null;let f=t(),I=f-m;if(I<s)return{kind:"cooldown",retryInMs:s-I};o=M,m=f,l=f;let E=Qn(g.rest);return{kind:"reply",...Kn(E,{...h,seed:M}),digest:M}}function k(){return!c||t()-l<r?null:(c=!1,a="",o="",{kind:"off"})}return{observe:w,settle:u,expire:k,isActive:()=>c,debounceMs:n,holdMs:r,wakeWord:()=>a}}var R=ae(require("react"),1),Lt=require("react-dom");var St=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],qe=60;function zt(e,t){let n=t==="en"?"en":"zh";return typeof e?.[n]=="string"?e[n]:""}function ke(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=qe?t:n.slice(0,qe).join("")}function Mt(e,t,n,r=8){let c=Number.isFinite(t?.width)?t.width:0,a=Number.isFinite(t?.height)?t.height:0,o=Number.isFinite(n?.width)?n.width:0,l=Number.isFinite(n?.height)?n.height:0,m=(Number.isFinite(e?.right)?e.right:0)-c;m<8&&(m=Number.isFinite(e?.left)?e.left:8);let w=(Number.isFinite(e?.top)?e.top:0)-a-r;w<8&&(w=(Number.isFinite(e?.bottom)?e.bottom:0)+r);let u=Math.max(8,o-c-8),k=Math.max(8,l-a-8);return{left:Math.min(Math.max(m,8),u),top:Math.min(Math.max(w,8),k)}}var We=["topic","reminder","recall","nudge","encourage","tease","chitchat"],Nt={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},Ct=9e3,Vn=24e4,Qe=.05;function Tt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<Vn)return!1;let n=Number.isFinite(e.chance)?e.chance:Qe;return(typeof e.random=="function"?e.random:Math.random)()<n}function Rt(e,t){let n=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[n]??""}function Et(e){return Nt[e]??Nt.chitchat}async function It(e={}){let t=typeof e.fetch=="function"?e.fetch:(...n)=>globalThis.fetch(...n);try{let n=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!n.ok)return null;let r=await n.json();if(r?.ok!==!0)return null;let s=r.result;return typeof s?.text!="string"||s.text.trim()===""?null:{kind:We.includes(s.kind)?s.kind:"chitchat",text:s.text.trim(),quote:typeof s?.quote=="string"?s.quote:"",item:typeof s?.item=="string"?s.item:"",source:typeof s?.source?.label=="string"?s.source:null,sources:Array.isArray(s?.sources)?s.sources:[]}}catch{return null}}var qt=268;function Pt({anchor:e,locale:t,onSay:n,onAction:r,onQuip:s,recent:c,onForget:a,onClose:o,t:l}){let m=R.useRef(null),w=R.useRef(null),[u,k]=R.useState(""),[z,h]=R.useState(()=>({left:0,top:0,ready:!1}));R.useLayoutEffect(()=>{let f=m.current;if(f===null)return;let I=f.getBoundingClientRect().height,E=Mt(e,{width:qt,height:I},{width:window.innerWidth,height:window.innerHeight});h({...E,ready:!0})},[e]),R.useEffect(()=>{let f=w.current;f!==null&&typeof f.focus=="function"&&f.focus()},[]),R.useEffect(()=>{let f=E=>{let F=m.current;F!==null&&E.target instanceof Node&&F.contains(E.target)||o()},I=E=>{E.key==="Escape"&&(E.preventDefault(),E.stopPropagation(),o())};return document.addEventListener("pointerdown",f,!0),document.addEventListener("keydown",I,!0),()=>{document.removeEventListener("pointerdown",f,!0),document.removeEventListener("keydown",I,!0)}},[o]);let g=()=>{let f=ke(u);f!==""&&(n(f),o())},M={left:`${Math.round(z.left)}px`,top:`${Math.round(z.top)}px`,width:`${qt}px`,visibility:z.ready?"visible":"hidden"};return(0,Lt.createPortal)(R.createElement("div",{ref:m,className:"cbp-menu",style:M,role:"menu","aria-label":l("menu.title"),"data-cbp-menu":"true",onContextMenu:f=>f.preventDefault()},R.createElement("div",{className:"cbp-menu-say"},R.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},l("menu.say")),R.createElement("div",{className:"cbp-menu-row"},R.createElement("input",{id:"cbp-menu-say-input",ref:w,className:"cbp-menu-input",type:"text",value:u,maxLength:qe,placeholder:l("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:f=>k(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),f.stopPropagation(),g())}}),R.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:ke(u)==="",onClick:g},l("menu.saySubmit")))),c.length===0?null:R.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},R.createElement("span",{className:"cbp-menu-label"},l("menu.recent"),R.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:a},l("menu.clear"))),R.createElement("div",{className:"cbp-menu-recent-list"},c.slice(0,8).map(f=>R.createElement("button",{key:`${f.text}-${f.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":f.text,title:f.text,onClick:()=>{n(f.text),o()}},f.text)))),R.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},R.createElement("span",{className:"cbp-menu-label"},l("menu.quip")),R.createElement("div",{className:"cbp-menu-grid"},We.map(f=>R.createElement("button",{key:f,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":f,onClick:()=>{s(f),o()}},Rt(f,t))))),R.createElement("div",{className:"cbp-menu-actions"},R.createElement("span",{className:"cbp-menu-label"},l("menu.action")),R.createElement("div",{className:"cbp-menu-grid"},St.map(f=>R.createElement("button",{key:f.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":f.clip,title:f.clip,onClick:()=>{r(f.clip),o()}},zt(f,t))))),R.createElement("p",{className:"cbp-menu-hint"},l("menu.hint"))),document.body)}var Ke="/api/chatbox-pet/said",At="chatboxPet.said";function Ge(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=60?t:n.slice(0,60).join("")}function Gn(e,t,n=Date.now()){let r=Ge(t),s=Array.isArray(e)?e.filter(a=>typeof a?.text=="string"):[];if(r==="")return s.slice(0,24);let c=s.filter(a=>a.text!==r);return[{text:r,at:n},...c].slice(0,24)}function Ve(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],n=[],r=new Set;for(let s of t){let c=Ge(typeof s=="string"?s:s?.text);if(!(c===""||r.has(c))&&(r.add(c),n.push({text:c,at:Number.isFinite(s?.at)?s.at:0}),n.length>=24))break}return n}function Jn(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function Yn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...u)=>globalThis.fetch(...u),n=e.storage===void 0?Jn():e.storage,r=()=>{try{let u=n?.getItem(At);return u==null?[]:Ve(JSON.parse(u))}catch{return[]}},s=u=>{try{n?.setItem(At,JSON.stringify(u))}catch{}},c=Object.freeze({lines:Object.freeze(r()),loaded:!1}),a=new Set;function o(u){c=Object.freeze({...c,...u});for(let k of a)try{k()}catch{}}async function l(){try{let k=await(await t(Ke,{method:"GET",headers:{accept:"application/json"}})).json();if(k?.ok===!0){let z=Ve(k.result);return o({lines:z,loaded:!0}),s(z),z}}catch{}return o({loaded:!0}),c.lines}async function m(u){let k=Ge(u);if(k==="")return c.lines;let z=Gn(c.lines,k);o({lines:Object.freeze(z)}),s(z);try{let g=await(await t(Ke,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:k})})).json();if(g?.ok===!0){let M=Ve(g.result);return o({lines:M,loaded:!0}),s(M),M}}catch{}return c.lines}async function w(){o({lines:Object.freeze([])}),s([]);try{await t(Ke,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(u){return typeof u!="function"?()=>{}:(a.add(u),()=>a.delete(u))},getSnapshot(){return c},refresh:l,remember:m,clear:w}}var pe=Yn();var Je=null;function Dt(e,t){let n=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(n)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(n)?!1:/Mac/i.test(typeof t=="string"?t:n)}function _t(e){if(e!==void 0)return Dt(e.userAgent,e.platform)?".mov":".webm";if(Je===null){let t=typeof navigator>"u"?void 0:navigator;Je=Dt(t?.userAgent,t?.platform)?".mov":".webm"}return Je}var Ft={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},Zn={failed:"click-angry",cancelled:"act-shy"};function Ot(e){let t=e?.previous?.status??"idle",n=e?.next?.status??"idle",r=e?.previous?.detail??null,s=e?.next?.detail??null,c=n!==t||s!==r,o=t==="working"&&n==="thinking"?"result":n;if(!c)return{changed:!1,status:o,detail:s,clip:null,sound:null};if(n==="idle")return{changed:!0,status:"idle",detail:s,clip:null,sound:null};let l=o==="error"?Zn[s]??Ft.error:Ft[o]??e?.idleClip??null;return{changed:!0,status:o,detail:s,clip:l,sound:ut(o,s)}}var Xn=6e3,er=5e3,tr={thinking:0,working:1,result:2,waiting:3,success:4,error:5},se="idle-breathe-loop",jt="click-wave",Bt=["act-harley","act-beach"],$t=6e3,nr=9e4,rr=.12;function Ut({sessionId:e,t,useInput:n,locale:r}){let s=y.useRef(null),c=y.useRef(null),a=y.useRef("idle"),o=y.useRef(null),l=y.useRef(Date.now()),m=y.useRef(null),w=y.useRef(0),u=y.useRef(0),[k,z]=y.useState(null),[h,g]=y.useState(null),f=y.useSyncExternalStore(pe.subscribe,pe.getSnapshot,pe.getSnapshot).lines,I=y.useRef(0),[E,F]=y.useState(null),[q,$]=y.useState("idle"),[N,D]=y.useState(!0),A=y.useRef(!1),L=y.useCallback((d,v)=>{let C=s.current;if(C===null||C.dataset.clip===d&&C.loop===v&&!C.ended)return;C.dataset.clip=d,C.loop=v,C.src=`/api/chatbox-pet/asset/${d}${_t()}`;let j=C.play();j!==void 0&&typeof j.catch=="function"&&j.catch(()=>{})},[]),he=y.useCallback(()=>{let d=s.current;if(d!==null){if(!A.current&&d.dataset.clip!==se){A.current=!0,L(se,!0);return}D(!1)}},[L]),te=y.useCallback(()=>{window.clearTimeout(I.current),F(null)},[]),Z=y.useCallback((d,v,C,j=er,H=null)=>{window.clearTimeout(I.current),F({text:d,kind:C,source:H}),v||(I.current=window.setTimeout(()=>F(null),j))},[]),Ne=y.useCallback(d=>{let v=c.current?.workStatusTexts,C=tr[d],j=C===void 0||!Array.isArray(v)?void 0:v[C];if(!(!Array.isArray(j)||j.length===0))return j[Math.floor(Math.random()*j.length)]},[]),Ce=y.useCallback(d=>{let v=typeof d?.status=="string"?d.status:"idle",C=a.current,j=typeof d?.detail=="string"?d.detail:null,H=Ot({previous:{status:C,detail:o.current},next:{status:v,detail:j},idleClip:se});if(!H.changed){v==="waiting"&&typeof d?.bubble=="string"&&d.bubble!==""&&Z(d.bubble,!0,"waiting");return}if(a.current=v,o.current=j,$(v),m.current!==null&&m.current.isActive()){l.current=Date.now();return}if(v==="idle"){L(se,!0),te(),l.current=Date.now();return}l.current=Date.now();let W=H.status,ye=H.detail;L(H.clip??se,!1);let xe=typeof d?.bubble=="string"&&d.bubble!==""?d.bubble:Ne(W),Oe=d?.source==="broadcast"?"notify":H.sound;K.play(Oe,xe),xe!==void 0?Z(xe,v==="waiting",W):te()},[te,Ne,L,Z]),me=y.useCallback(async d=>{let v=await It({kind:d,locale:typeof r=="function"?r():"zh"});if(v===null)return;let C=Et(v.kind);L(C.clip,!1),K.play(C.sound,v.text),Z(v.text,!1,"quip",Ct,v.source?.label??null)},[r,L,Z]),Te=y.useCallback(()=>{if(a.current!=="idle"||m.current!==null&&m.current.isActive())return;let v=Date.now()-l.current;if(v<nr)return;if(Tt({idleForMs:v,chance:Qe})){l.current=Date.now(),me(null);return}if(Math.random()>rr)return;let C=Bt[Math.floor(Math.random()*Bt.length)];L(C,!1),l.current=Date.now()},[L,me]),ne=y.useCallback((d,v,C)=>{typeof d.clip=="string"&&d.clip!==""&&L(d.clip,!1),typeof d.sound=="string"&&d.sound!==""&&K.play(d.sound,d.line),typeof d.line=="string"&&d.line!==""&&Z(d.line,v,"chat",C)},[L,Z]),ue=y.useCallback(()=>{window.clearTimeout(u.current),z(null),L(se,!0),te()},[te,L]),re=typeof n=="function"?n(d=>typeof d?.draft=="string"?d.draft:""):"";y.useEffect(()=>{m.current===null&&(m.current=vt());let d=m.current,v=wt(re,typeof r=="function"?r():"zh"),C=d.observe(re);if(C!==null&&C.kind==="wake"&&(z({phase:"awake"}),ne({clip:"click-surprise",sound:"wake",line:kt({locale:v,seed:re})},!0)),C!==null&&C.kind==="off"){ue();return}if(window.clearTimeout(w.current),!d.isActive())return;let j=H=>{w.current=window.setTimeout(()=>{let W=d.settle(re,{locale:v});if(W!==null&&W.kind==="cooldown"){j(Math.max(120,W.retryInMs));return}W===null||W.kind!=="reply"||(ne(W,!1,$t),window.clearTimeout(u.current),u.current=window.setTimeout(()=>ue(),d.holdMs))},H)};return j(d.debounceMs),()=>window.clearTimeout(w.current)},[re,r,ne,ue]),y.useEffect(()=>{pe.refresh()},[]),y.useEffect(()=>{let d=!1;return fetch("/api/chatbox-pet/config").then(v=>v.ok?v.json():null).then(v=>{!d&&v?.ok===!0&&(c.current=v.result)}).catch(()=>{}),()=>{d=!0}},[]),y.useEffect(()=>{if(typeof e!="string"||e==="")return;let d=!1,v=0,C=async()=>{if(document.visibilityState==="visible"){try{let W=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),ye=W.ok?await W.json():null;!d&&ye?.ok===!0&&Ce(ye.result)}catch{}d||Te()}},j=()=>{v=window.setTimeout(async()=>{await C(),d||j()},Xn)},H=()=>{document.visibilityState==="visible"&&C()};return document.addEventListener("visibilitychange",H),C(),j(),()=>{d=!0,window.clearTimeout(v),document.removeEventListener("visibilitychange",H)}},[e,Ce]),y.useEffect(()=>(L(se,!0),()=>window.clearTimeout(I.current)),[L]);let[ge,Re]=y.useState(()=>we(le())==="on"),_e=y.useCallback(d=>{let v=ke(d);v!==""&&(L(jt,!1),K.play("click",v),Z(v,!1,"chat",$t),pe.remember(v))},[L,Z]),Fe=y.useCallback(d=>{typeof d!="string"||d===""||(L(d,!1),K.play("click",d))},[L]),Ee=y.useCallback(()=>{let d=document.querySelector("[data-cbp-pet]"),v=d instanceof Element?d.getBoundingClientRect():null;v!==null&&g({left:v.left,right:v.right,top:v.top,bottom:v.bottom})},[]);return y.createElement("div",{className:"cbp-root","data-cbp-root":!0,"data-cbp-session":e},y.createElement("div",{className:"cbp-stage"},y.createElement("div",{className:(E===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(E?.kind==="error"?" cbp-bubble--error":"")+(E?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},E?.source?y.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":E.source},E.source):null,y.createElement("span",{className:"cbp-bubble-text"},E?.text??"")),y.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(ge?"sound.on":"sound.off"),"aria-pressed":ge,onClick:d=>{d.stopPropagation();let v=ft(le())==="on";Re(v),prefsStore.update({sound:v})}},ge?y.createElement(or,null):y.createElement(ar,null)),y.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":k===null?q:"awake","data-cbp-chat":k===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{K.play("click"),L(jt,!1)},onContextMenu:d=>{d.preventDefault(),d.stopPropagation(),Ee()},onKeyDown:d=>{(d.key==="ContextMenu"||d.shiftKey&&d.key==="F10")&&(d.preventDefault(),Ee())},"aria-haspopup":"menu","aria-expanded":h===null?"false":"true"},N?y.createElement("video",{ref:s,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:d=>{d.currentTarget.loop||L(se,!0)},onError:he}):y.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),h===null?null:y.createElement(Pt,{anchor:h,locale:typeof r=="function"?r():"zh",onSay:_e,onAction:Fe,onQuip:d=>{me(d)},recent:f,onForget:()=>{pe.clear()},onClose:()=>g(null),t}))}function or(){return y.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},y.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),y.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),y.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function ar(){return y.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},y.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),y.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Ht=`
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
`;var Wt="/api/chatbox-pet/prefs",ir=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function sr(e={}){let t=typeof e.fetch=="function"?e.fetch:(...o)=>globalThis.fetch(...o),n=ir,r=new Set;function s(o){n={...n,...o};for(let l of r)try{l()}catch{}}async function c(){try{let l=await(await t(Wt,{method:"GET",headers:{accept:"application/json"}})).json();l?.ok===!0&&l.result!==null&&typeof l.result=="object"?s({pet:l.result.pet!==!1,boost:l.result.boost!==!1,sound:l.result.sound!==!1,loaded:!0}):s({loaded:!0})}catch{}return n}async function a(o){let l=n,m={};for(let w of["pet","boost","sound"])typeof o?.[w]=="boolean"&&(m[w]=o[w]);s(m);try{let u=await(await t(Wt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:m})})).json();if(u?.ok!==!0||u.result===null||typeof u.result!="object")throw new Error("rejected");return s({pet:u.result.pet!==!1,boost:u.result.boost!==!1,sound:u.result.sound!==!1,loaded:!0}),!0}catch{return s({pet:l.pet,boost:l.boost,sound:l.sound}),!1}}return{subscribe(o){return typeof o!="function"?()=>{}:(r.add(o),()=>r.delete(o))},getSnapshot(){return n},refresh:c,update:a}}var Y=sr();var U=ae(require("react"),1),Qt=require("react");var Kt=`
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
`;function Ye({id:e,checked:t,label:n,onChange:r}){return U.createElement("label",{className:"cbp-set-item",htmlFor:e},U.createElement("span",{className:"cbp-switch"},U.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:s=>r(s.target.checked),"data-cbp-pref":e}),U.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),U.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),n)}function Vt({t:e}){let t=(0,Qt.useSyncExternalStore)(Y.subscribe,Y.getSnapshot,Y.getSnapshot),[n,r]=U.useState(()=>we(le())==="on"),s=c=>{r(c),$e(le(),c?"on":"off"),Y.update({sound:c})};return U.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},U.createElement("div",{className:"cbp-set-head"},U.createElement("span",{className:"cbp-set-title"},e("settings.title")),U.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),U.createElement("div",{className:"cbp-set-items"},U.createElement(Ye,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:c=>{Y.update({pet:c})}}),U.createElement(Ye,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:c=>{Y.update({boost:c})}}),U.createElement(Ye,{id:"chatbox-pet-feature-sound",checked:n,label:e("settings.sound"),onChange:s})))}var ve=ae(require("react"),1),Pe=require("react"),Xe=require("@deepseek-ai/dsh-client-ui-primitives");var _=require("react");function be({size:e=16,children:t}){return(0,_.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function Le({size:e=16}){return(0,_.createElement)(be,{size:e},[(0,_.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,_.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,_.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function Gt({size:e=16}){return(0,_.createElement)(be,{size:e},(0,_.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function Jt({size:e=16}){return(0,_.createElement)(be,{size:e},[(0,_.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,_.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function Ze({size:e=16}){return(0,_.createElement)(be,{size:e},[(0,_.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,_.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,_.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function Yt({size:e=16}){return(0,_.createElement)(be,{size:e},(0,_.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function Zt({size:e=16}){return(0,_.createElement)(be,{size:e},[(0,_.createElement)("path",{key:"a",d:"M2.5 4.5h5",stroke:"currentColor"}),(0,_.createElement)("path",{key:"b",d:"M2.5 11.5h5",stroke:"currentColor"}),(0,_.createElement)("path",{key:"c",d:"M10.5 4.5h3",stroke:"currentColor"}),(0,_.createElement)("path",{key:"d",d:"M10.5 11.5h3",stroke:"currentColor"}),(0,_.createElement)("path",{key:"e",d:"M8 4.5l2.5 3.5L8 11.5",stroke:"currentColor"})])}function cr({label:e,children:t}){return typeof Xe.Tooltip=="function"?ve.createElement(Xe.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Pe.cloneElement)(t,{title:e})}function Xt({inputActions:e,useInput:t,store:n,t:r,locale:s}){let c=(0,Pe.useSyncExternalStore)(n.subscribe,()=>n.getState(e),()=>n.getState(e)),a=typeof t=="function"?t(k=>k):void 0;n.setDraftMirror(e,a);let o=typeof a?.draft=="string"?a.draft:"",l=c.phase==="running"||c.phase==="streaming",m=c.phase!=="idle",w=r(l?"button.running":"button.label"),u=l?r("button.running"):o.trim()===""?r("button.tooltipCompose"):r("button.tooltip");return ve.createElement(cr,{label:u},ve.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":l?"true":"false","data-pb-open":m?"true":"false","aria-label":w,"aria-busy":l?"true":void 0,"aria-expanded":m?"true":"false","aria-controls":n.panelId(e),onMouseDown:k=>k.preventDefault(),onClick:()=>n.start(e,{locale:typeof s=="function"?s():"zh"})},ve.createElement(Le,{size:16})))}var V=ae(require("react"),1),Ae=require("react"),nt=require("@deepseek-ai/dsh-client-ui-primitives");var en="next-turn";function et(e){return(Array.isArray(e?.content)?e.content:[]).filter(n=>n!==null&&typeof n=="object"&&n.type==="text"&&typeof n.text=="string").map(n=>n.text).join("").trim()}function lr(e){return(Array.isArray(e?.content)?e.content:[]).some(n=>n===null||typeof n!="object"||n.type!=="text")}function tn(e){let t=[];try{let r=e?.projections?.faceOf?.("inbox")?.getSnapshot?.();t=Array.isArray(r?.[en])?r[en]:[]}catch{t=[]}return tt(t)}function tt(e){let n=(Array.isArray(e)?e:[]).filter(a=>a!==null&&typeof a=="object"&&typeof a.id=="string"),r=n.map(et),s=n.filter((a,o)=>!lr(a)&&r[o]!==""),c="";return n.length>=2&&s.length!==n.length?c="attachment":n.length>8?c="too-many":n.length<2&&(c="too-few"),{items:n,texts:r,mergeable:n.length,blocked:c}}async function pr(e,t={}){let n=ur(e),r=typeof t.fetchImpl=="function"?t.fetchImpl:(...s)=>globalThis.fetch(...s);try{let s=await r("/api/chatbox-pet/merge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({texts:e,session:typeof t.sessionId=="string"?t.sessionId:void 0,locale:t.locale==="en"?"en":"zh"})});if(!s.ok)return{prompt:n,optimized:!1,reason:"http-"+String(s.status)};let c=await s.json(),a=typeof c?.result?.prompt=="string"?c.result.prompt.trim():"";return a===""?{prompt:n,optimized:!1,reason:"empty"}:{prompt:a,optimized:c.result.optimized===!0,reason:typeof c.result.reason=="string"?c.result.reason:""}}catch{return{prompt:n,optimized:!1,reason:"network"}}}function ur(e){return(Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>t!=="").join(`

`)}async function dr(e,t,n){let r=Array.isArray(t)?t:[],s=String(n??"").trim();if(r.length<2||s==="")return{ok:!1,merged:0,removed:0,error:"bad-input"};if(typeof e?.updateQueue!="function")return{ok:!1,merged:0,removed:0,error:"no-session"};let[c,...a]=r;try{let m=await e.updateQueue(c.id,{kind:"edit",content:[{type:"text",text:s}]});if(m?.ok!==!0)return{ok:!1,merged:0,removed:0,error:m?.error?.code??"edit-failed"}}catch(m){return{ok:!1,merged:0,removed:0,error:nn(m)}}let o=0,l=0;for(let m of a)try{let w=await e.updateQueue(m.id,{kind:"remove"});if(w?.ok===!0){o+=1;continue}if(w?.error?.code==="session/queue-item-not-found"){l+=1;continue}return{ok:!1,merged:1,removed:o,claimed:l,error:w?.error?.code??"remove-failed"}}catch(w){return{ok:!1,merged:1,removed:o,claimed:l,error:nn(w)}}return{ok:l===0,merged:1,removed:o,claimed:l,error:l>0?"session/queue-item-not-found":""}}async function rn(e={}){let t=tn(e.session);if(t.blocked!=="")return{ok:!1,count:0,optimized:!1,reason:"",error:t.blocked};let n=t.items.map(et),r=await pr(n,{sessionId:e.sessionId,locale:e.locale,fetchImpl:e.fetchImpl}),s=tn(e.session);if(!(s.items.length===t.items.length&&s.items.every((o,l)=>o.id===t.items[l].id&&et(o)===n[l])))return{ok:!1,count:t.items.length,optimized:!1,reason:"",error:"queue-changed"};let a=await dr(e.session,t.items,r.prompt);return{ok:a.ok,count:t.items.length,optimized:r.optimized,reason:r.reason,error:a.error}}function nn(e){return typeof e?.message=="string"&&e.message.trim()!==""?e.message.trim():String(e)}function fr({label:e,children:t}){return typeof nt.Tooltip=="function"?V.createElement(nt.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Ae.cloneElement)(t,{title:e})}var br=Object.freeze({}),hr=Object.freeze({subscribe:()=>()=>{},getSnapshot:()=>br});function mr(e){let t=(()=>{try{let r=e?.projections?.faceOf?.("inbox");if(typeof r?.subscribe=="function"&&typeof r?.getSnapshot=="function")return r}catch{}return hr})(),n=(0,Ae.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot);return tt(n?.["next-turn"])}function on({sessionId:e,sessions:t,t:n,locale:r,onNotice:s}){let c=V.useMemo(()=>{if(typeof e!="string"||e==="")return null;try{return t?.binding?.(e)?.session??null}catch{return null}},[t,e]),a=mr(c),[o,l]=V.useState("idle"),[m,w]=V.useState(""),u=V.useRef(0);V.useEffect(()=>()=>window.clearTimeout(u.current),[]);let k=a.items.length;if(k<2||a.blocked==="attachment"||a.blocked==="too-many")return null;let z=async()=>{if(o!=="running"){l("running"),w("");try{let g=await rn({session:c,sessionId:e,locale:typeof r=="function"?r():"zh"});if(g.ok){let M=g.optimized?n("merge.done")(g.count):n("merge.donePlain")(g.count);w(M),s?.(M)}else w(g.error==="queue-changed"?n("merge.changed"):g.error==="session/queue-item-not-found"?n("merge.claimed"):n("merge.failed"))}catch{w(n("merge.failed"))}finally{l("idle"),window.clearTimeout(u.current),u.current=window.setTimeout(()=>w(""),4e3)}}},h=o==="running"?n("merge.running"):m!==""?m:n("merge.label")(k);return V.createElement(fr,{label:h},V.createElement("button",{type:"button",className:"cbp-merge","data-cbp-merge":!0,"data-cbp-merge-count":k,"data-cbp-merge-phase":o,"aria-label":h,"aria-busy":o==="running"?"true":void 0,disabled:o==="running",onClick:g=>{g.stopPropagation(),z()}},V.createElement(Zt,null),V.createElement("span",{className:"cbp-merge-count"},o==="running"?"\u2026":k)))}var Se="promptBoost",an={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},sn={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var b=ae(require("react"),1),G=require("react");var gr=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function yr(){return b.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},b.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),b.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function cn(e,t){let n=`source.${e.id}`,r=t(n);return r===n?e.label:r}function xr(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function wr(e,t){if(e.phase!=="ready")return"";let n=[];return e.cached&&n.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&n.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),n.join(" \xB7 ")}function kr(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let n=e.sources.slice(0,2).map(r=>`${cn(r,t)} ${r.count}`).join(" \xB7 ");return n===""?t("chip.writing"):`${n} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function vr({state:e,store:t,t:n,inputActions:r,chipRef:s}){let c=e.phase==="applied",a=e.phase==="running"||e.phase==="streaming",o=e.phase==="ready",l=e.phase==="error",m=e.mode==="compose"?n("panel.compose"):n("button.label"),w=kr(e,n);return c?b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":n("chip.expand"),onClick:()=>t.expand(r),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),t.expand(r))}},b.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},b.createElement(Gt,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},n("undo.done")),b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":n("undo.label"),onClick:()=>t.undo(r)},n("undo.action")))):b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":a?"true":"false",onClick:()=>t.expand(r)},b.createElement("button",{ref:s,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(r),"aria-label":`${n("chip.expand")} \xB7 ${m}`,onClick:()=>t.expand(r)},b.createElement("span",{className:a||o?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},a?b.createElement(yr,null):l?b.createElement(Ze,{size:12}):b.createElement(Le,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},w),o||l?b.createElement(b.Fragment,null,b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("span",{className:"pb-chip-view"},n("chip.view"))):null),b.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":n("chip.dismiss"),onClick:()=>t.dismiss(r)},b.createElement(Jt,{size:10}))))}function Sr({state:e,store:t,t:n,inputActions:r,locale:s,panelRef:c}){let a=(0,G.useRef)(null),o=e.phase,l=o==="running",m=o==="streaming",w=o==="ready",u=o==="applied",k=w||u,z=o==="error",h=e.sources,g=l||m||k||h.length>0,M=u?e.applied:e.prompt,f=wr(e,n),I=t.panelId(r),E=n(gr?"shortcut.mac":"shortcut.other"),F=n(l?"panel.announceRunning":m?"panel.streaming":u?"panel.announceApplied":w?"panel.announceReady":"panel.announceError");return(0,G.useEffect)(()=>{let q=a.current;q===null||o!=="streaming"||(q.scrollTop=q.scrollHeight)},[e.prompt,o]),b.createElement("section",{ref:c,id:I,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":o,"data-pb-running":l||m?"true":"false",tabIndex:-1,"aria-labelledby":`${I}-title`,"aria-busy":l||m?"true":void 0},b.createElement("header",{className:"pb-head"},b.createElement("div",{className:"pb-head-row"},b.createElement("h2",{className:"pb-title",id:`${I}-title`},n("panel.title")),e.mode==="compose"?b.createElement("span",{className:"pb-mode"},n("panel.compose")):null,b.createElement("span",{className:"pb-meta"},f),b.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":n("panel.collapse"),title:n("panel.collapse"),onClick:()=>t.collapse(r)},b.createElement(Yt,{size:14}))),g?b.createElement("div",{className:"pb-sources",role:"list","aria-label":n("panel.sources")},h.length>0?h.map(q=>b.createElement("span",{key:q.id,className:"pb-chip",role:"listitem","data-pb-source":q.id},b.createElement("span",{className:"pb-chip-label"},cn(q,n)),b.createElement("span",{className:"pb-chip-count"},q.count))):l?[b.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),b.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:b.createElement("span",{className:"pb-note"},n("panel.noSources"))):null),b.createElement("div",{className:"pb-rule","aria-hidden":"true"}),b.createElement("div",{className:"pb-body"},l?b.createElement(b.Fragment,null,b.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},b.createElement("span",{className:"pb-skeleton-line is-long"}),b.createElement("span",{className:"pb-skeleton-line is-full"}),b.createElement("span",{className:"pb-skeleton-line is-short"})),b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.status"))):null,m||k?b.createElement("textarea",{ref:a,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:m||u,spellCheck:!1,"aria-label":n("panel.editLabel"),placeholder:n("panel.placeholder"),value:M}):null,m?b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.streaming")):null,z?b.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},b.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},b.createElement(Ze,{size:14})),b.createElement("span",{className:"pb-error-text"},xr(e.error,n))):null,b.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},F)),b.createElement("div",{className:"pb-foot"},b.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(r)},n("panel.close")),b.createElement("span",{className:"pb-foot-spacer"}),k?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:E,onClick:()=>t.retry(r,{locale:s()})},n("panel.another"),b.createElement("span",{className:"pb-kbd","aria-hidden":"true"},E)):null,u?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(r)},n("undo.action")):null,l||m?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(r,{locale:s()})},n("panel.retry")):null,z?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(r,{locale:s()})},n("panel.retryError")):null))}function ln({inputActions:e,store:t,t:n,locale:r,session:s}){let c=(0,G.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),a=c.phase,o=a!=="idle"||c.undo!==null,l=c.expanded===!0&&a!=="idle";(0,G.useEffect)(()=>{let h=typeof s?.id=="string"?s.id:"";h!==""&&t.setSessionId(e,h)},[s?.id,e,t]);let m=(0,G.useRef)(null),w=(0,G.useRef)(null),u=(0,G.useRef)(null),k=(0,G.useRef)(!1),z=(0,G.useRef)(!1);return(0,G.useEffect)(()=>{if(!o)return;let h=g=>{if(!(g.defaultPrevented||l===!1)){if(g.key==="Escape"){g.preventDefault(),g.stopPropagation(),t.collapse(e);return}g.key==="Enter"&&(g.metaKey||g.ctrlKey)&&(g.preventDefault(),g.stopPropagation(),a==="applied"||a==="ready"?t.retry(e,{locale:r()}):a==="error"&&t.retry(e,{locale:r()}))}};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[o,l,a,e,t,r]),(0,G.useEffect)(()=>{if(o&&k.current===!1){k.current=!0,u.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(o===!1&&k.current){k.current=!1;let h=u.current;if(u.current=null,h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[o]),(0,G.useEffect)(()=>{if(l&&z.current===!1){z.current=!0;let h=w.current;if(h!==null&&typeof h.focus=="function")try{h.focus({preventScroll:!0})}catch{}return}if(l===!1&&z.current){z.current=!1;let h=a==="idle"?u.current:m.current;if(h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[l,a]),o?l===!1?b.createElement(vr,{state:c,store:t,t:n,inputActions:e,chipRef:m}):b.createElement(Sr,{state:c,store:t,t:n,inputActions:e,locale:r,panelRef:w}):null}var S=ae(require("react"),1),dn=require("react-dom");var pn=[{id:"transcribe",icon:"mic",zh:"\u5F55\u97F3\u8F6C\u5199",en:"Transcribe",prompt:{zh:"\u5E2E\u6211\u8F6C\u5199\u8FD9\u6BB5\u5F55\u97F3\uFF0C\u5E76\u6309\u8981\u70B9\u6574\u7406\u6210\u6E05\u5355\u3002",en:"Transcribe this recording and turn it into a list of key points."}},{id:"image",icon:"image",zh:"\u56FE\u50CF\u751F\u6210",en:"Image",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u5F20\u56FE\uFF1A",en:"Generate an image of "}},{id:"writing",icon:"pen",zh:"\u5E2E\u6211\u5199\u4F5C",en:"Writing",prompt:{zh:"\u5E2E\u6211\u5199\u4E00\u6BB5\u6587\u5B57\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Write a short piece about "}},{id:"video",icon:"video",zh:"\u89C6\u9891\u751F\u6210",en:"Video",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u4E2A\u77ED\u89C6\u9891\uFF0C\u5185\u5BB9\u662F\uFF1A",en:"Generate a short video about "}},{id:"read-video",icon:"film",zh:"\u89C6\u9891\u7406\u89E3",en:"Read video",prompt:{zh:"\u7528 video_read \u770B\u8FD9\u4E2A\u89C6\u9891\uFF0C\u603B\u7ED3\u5B83\u8BB2\u4E86\u4EC0\u4E48\u3001\u6709\u8C01\u5728\u8BF4\u8BDD\u3002",en:"Use video_read on this video: summarise what it says and who speaks."}},{id:"music",icon:"music",zh:"\u97F3\u4E50\u751F\u6210",en:"Music",prompt:{zh:"\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u97F3\u4E50\uFF0C\u98CE\u683C\u662F\uFF1A",en:"Generate a short piece of music in the style of "}},{id:"slides",icon:"slides",zh:"PPT \u751F\u6210",en:"Slides",prompt:{zh:"\u5E2E\u6211\u505A\u4E00\u4EFD PPT\uFF0C\u4E3B\u9898\u662F\uFF1A",en:"Build me a slide deck about "}}];function rt(e,t){return t==="en"?e.en:e.zh}function un({name:e}){let t={width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"};switch(e){case"mic":return S.createElement("svg",{...t},S.createElement("rect",{x:"6",y:"2.2",width:"4",height:"7",rx:"2"}),S.createElement("path",{d:"M4 7.6a4 4 0 0 0 8 0M8 11.6v2.2M6 13.8h4"}));case"image":return S.createElement("svg",{...t},S.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),S.createElement("circle",{cx:"6",cy:"6.6",r:"1.2"}),S.createElement("path",{d:"M2.8 11.4 6.4 8.2l2.4 2.1 1.9-1.6 2.3 2"}));case"pen":return S.createElement("svg",{...t},S.createElement("path",{d:"M3 13h2.4l7-7a1.7 1.7 0 0 0-2.4-2.4l-7 7V13Z"}),S.createElement("path",{d:"M9.6 4.6 11.4 6.4"}));case"video":return S.createElement("svg",{...t},S.createElement("rect",{x:"2.2",y:"4.2",width:"8.4",height:"7.6",rx:"2"}),S.createElement("path",{d:"M10.6 7.4 13.8 5.6v4.8l-3.2-1.8Z"}));case"film":return S.createElement("svg",{...t},S.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"9.6",rx:"2"}),S.createElement("path",{d:"M5.2 3.4v9.2M10.8 3.4v9.2M2.4 8h11.2"}));case"music":return S.createElement("svg",{...t},S.createElement("path",{d:"M6 12.2V4.4l6-1.2v7.6"}),S.createElement("circle",{cx:"4.4",cy:"12.2",r:"1.7"}),S.createElement("circle",{cx:"10.4",cy:"10.8",r:"1.7"}));case"slides":return S.createElement("svg",{...t},S.createElement("rect",{x:"2.2",y:"3.2",width:"11.6",height:"7.4",rx:"1.8"}),S.createElement("path",{d:"M8 10.6v2.2M5.6 13.4h4.8"}));default:return S.createElement("svg",{...t},S.createElement("rect",{x:"2.6",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),S.createElement("rect",{x:"9",y:"2.6",width:"4.4",height:"4.4",rx:"1.2"}),S.createElement("rect",{x:"2.6",y:"9",width:"4.4",height:"4.4",rx:"1.2"}),S.createElement("rect",{x:"9",y:"9",width:"4.4",height:"4.4",rx:"1.2"}))}}function fn({inputActions:e,t,locale:n,petVisible:r=!0}){let s=typeof e?.setDraft=="function",[c,a]=S.useState(!1),[o,l]=S.useState(null),m=S.useRef(null),w=S.useRef(null),u=S.useCallback(()=>{let g=m.current?.getBoundingClientRect();g!=null&&l({right:Math.max(8,Math.round(window.innerWidth-g.right)),bottom:Math.max(8,Math.round(window.innerHeight-g.top)+8)})},[]);S.useLayoutEffect(()=>{c&&u()},[c,u]),S.useEffect(()=>{if(!c)return;let g=I=>{let E=I.target;E instanceof Node&&w.current?.contains(E)!==!0&&m.current?.contains(E)!==!0&&a(!1)},M=I=>{I.key==="Escape"&&(I.preventDefault(),I.stopPropagation(),a(!1),m.current?.focus?.())},f=()=>a(!1);return document.addEventListener("pointerdown",g,!0),document.addEventListener("keydown",M,!0),window.addEventListener("resize",f),window.addEventListener("scroll",f,!0),()=>{document.removeEventListener("pointerdown",g,!0),document.removeEventListener("keydown",M,!0),window.removeEventListener("resize",f),window.removeEventListener("scroll",f,!0)}},[c]);let k=g=>{let M=rt(g.prompt,typeof n=="function"?n():"zh");try{e.setDraft({text:M,references:[]})}catch{try{e.setDraft(M)}catch{}}a(!1),m.current?.focus?.()},z=t("quick.label"),h=typeof n=="function"?n():"zh";return S.createElement("div",{className:"cbp-quick"},S.createElement("button",{ref:m,type:"button",className:r?"cbp-more":"cbp-more cbp-more--alone","data-cbp-more":"","aria-haspopup":"menu","aria-expanded":c?"true":"false","aria-label":t("quick.aria"),title:t(s?"quick.aria":"quick.disabled"),disabled:!s,onMouseDown:g=>g.preventDefault(),onClick:()=>a(g=>!g)},S.createElement(un,{name:"grid"}),S.createElement("span",{className:"cbp-more-label"},z)),c&&o!==null?(0,dn.createPortal)(S.createElement("div",{ref:w,className:"cbp-quick-panel",role:"menu","aria-label":t("quick.title"),"data-cbp-quick-panel":"true",style:{right:`${o.right}px`,bottom:`${o.bottom}px`}},S.createElement("div",{className:"cbp-quick-head"},S.createElement("span",{className:"cbp-quick-title"},t("quick.title")),S.createElement("span",{className:"cbp-quick-hint"},t("quick.hint"))),S.createElement("div",{className:"cbp-quick-grid"},pn.map(g=>S.createElement("button",{key:g.id,type:"button",className:"cbp-quick-item",role:"menuitem","data-cbp-action":g.id,onClick:()=>k(g)},S.createElement("span",{className:"cbp-quick-icon"},S.createElement(un,{name:g.icon})),S.createElement("span",{className:"cbp-quick-name"},rt({zh:g.zh,en:g.en},h)))))),document.body):null)}var bn=`
.cbp-quick{
  position:relative;
  height:0;
  width:min(
    calc(100% - var(--dsh-composer-side-clearance, 16px)*2),
    var(--dsh-composer-card-max-width, 952px)
  );
  margin:0 auto;
  overflow:visible;
  pointer-events:none;
  z-index:21;
}
.cbp-more{
  position:absolute;
  right:132px;
  bottom:10px;
  display:inline-flex;
  align-items:center;
  gap:5px;
  height:26px;
  padding:0 10px;
  border-radius:999px;
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 9%,transparent);
  background:color-mix(in oklab,var(--dsw-alias-bg-overlay) 92%,transparent);
  color:var(--dsw-alias-label-secondary);
  font-size:12px;
  font-weight:500;
  line-height:1;
  cursor:pointer;
  pointer-events:auto;
  backdrop-filter:blur(12px);
  transition:background-color 120ms ease,color 120ms ease,border-color 120ms ease;
}
.cbp-more--alone{
  right:20px;
}
.cbp-more:hover{
  color:var(--dsw-alias-label-primary);
  background:var(--dsw-alias-interactive-bg-hover);
}
.cbp-more[aria-expanded="true"]{
  color:var(--dsw-alias-label-primary);
  border-color:color-mix(in oklab,var(--dsw-alias-label-primary) 16%,transparent);
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
  width:304px;
  padding:10px 10px 12px;
  border-radius:var(--dsw-radius-lg,14px);
  border:1px solid color-mix(in oklab,var(--dsw-alias-label-primary) 10%,transparent);
  background:var(--dsw-alias-bg-overlay);
  box-shadow:0 12px 32px -12px color-mix(in oklab,var(--dsw-alias-label-primary) 28%,transparent),0 2px 6px -2px color-mix(in oklab,var(--dsw-alias-label-primary) 12%,transparent);
  backdrop-filter:blur(18px);
  animation:cbp-quick-in 140ms cubic-bezier(.23,1,.32,1);
}
@keyframes cbp-quick-in{
  from{opacity:0;transform:translateY(4px)}
  to{opacity:1;transform:none}
}
.cbp-quick-head{
  display:flex;
  flex-direction:column;
  gap:2px;
  padding:2px 4px 8px;
}
.cbp-quick-title{
  color:var(--dsw-alias-label-primary);
  font-size:12px;
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
  gap:2px;
}
.cbp-quick-item{
  display:flex;
  align-items:center;
  gap:8px;
  min-height:34px;
  padding:0 8px;
  border:0;
  border-radius:var(--dsw-radius-md,8px);
  background:transparent;
  color:var(--dsw-alias-label-primary);
  font-size:12.5px;
  font-weight:450;
  text-align:left;
  cursor:pointer;
  transition:background-color 100ms ease;
}
.cbp-quick-item:hover{
  background:var(--dsw-alias-interactive-bg-hover);
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
  .cbp-more{right:20px;bottom:8px}
  .cbp-quick-panel{width:min(304px,calc(100vw - 24px))}
}
@media (prefers-reduced-motion: reduce){
  .cbp-quick-panel{animation:none}
}
`;var xn="/api/chatbox-pet/boost",hn=4e3,zr=12e4,Mr=24,Nr=8e3,wn=25e3;function kn(e){return{set:typeof e?.set=="function"?e.set:(t,n)=>setTimeout(t,n),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function st(e){let t=typeof e=="string"?e:"";return t.length>hn?t.slice(0,hn):t}function mn(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function ze(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function ot(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(n===null||typeof n!="object")continue;let r=typeof n.id=="string"?n.id.trim():"",s=Number(n.count);r===""||!Number.isFinite(s)||s<=0||t.push({id:r,label:typeof n.label=="string"&&n.label.trim()!==""?n.label.trim():r,count:Math.round(s)})}return t}function Me(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function J(e,t,n){let r=new Error(typeof t=="string"&&t!==""?t:e);return r.code=e,n!==void 0&&(r.cause=n),r}function gn(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",n=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return n===void 0?{code:t}:{code:t,message:n}}function Cr(e){let t=[],n=e;for(;;){let r=/(?:\r?\n){2}/.exec(n);if(r===null)break;t.push(n.slice(0,r.index)),n=n.slice(r.index+r[0].length)}return{frames:t,rest:n}}function yn(e){let t=[];for(let n of e.split(`
`)){let r=n.trim();r===""||r.startsWith(":")||r.startsWith("data:")&&t.push(r.slice(5).trimStart())}if(t.length===0)return null;try{let n=JSON.parse(t.join(`
`));return n!==null&&typeof n=="object"&&Array.isArray(n)===!1?n:null}catch{return null}}async function at(e){try{return await e.json()}catch{return null}}function it(e,t){if(e===null||typeof e!="object")throw J("host",void 0,t);if(e.ok!==!0){let s=typeof e.error?.message=="string"?e.error.message.trim():"";throw J(typeof e.error?.code=="string"?e.error.code:"host",s===""?void 0:s)}let n=e.result,r=typeof n?.prompt=="string"?n.prompt.trim():"";if(r==="")throw J("empty");return{prompt:r,mode:n.mode==="compose"?"compose":"improve",sources:ot(n.sources),elapsedMs:Number.isFinite(n.elapsedMs)?Math.max(0,Number(n.elapsedMs)):null,cached:n.cached===!0}}async function Tr(e){let{draft:t,mode:n,locale:r,signal:s,onEvent:c,idleMs:a=wn,sessionId:o=""}=e,l=o===""?{}:{sessionId:o},m=typeof e.fetch=="function"?e.fetch:globalThis.fetch,w=kn(e.timers),u=new AbortController,k=()=>u.abort();s!==void 0&&(s.aborted?u.abort():s.addEventListener("abort",k,{once:!0}));let z=!1,h=null,g=()=>{h!==null&&w.clear(h),h=w.set(()=>{z=!0,u.abort()},a)},M=!1;try{g();let f;try{f=await m(xn,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:st(t),mode:n,locale:r,stream:!0,...l}}),signal:u.signal})}catch($){throw z?J("timeout",void 0,$):Me($)?$:J("network",void 0,$)}if(z)throw J("timeout");if(f===null||typeof f!="object")throw J("host");if(f.ok!==!0){let $=await at(f);if(f.status>=400)throw J("host",void 0,f.status);let N=it($,f.status);c({type:"replace",text:N.prompt}),c({type:"done",result:N});return}let I=typeof f.headers?.get=="function"?String(f.headers.get("content-type")??""):"";if(f.body===null||f.body===void 0||typeof f.body.getReader!="function"||!I.includes("text/event-stream")){let $=it(await at(f),f.status);c({type:"replace",text:$.prompt}),c({type:"done",result:$});return}let E=f.body.getReader(),F=new TextDecoder,q="";for(;!M;){let $;try{$=await E.read()}catch(D){throw z?J("timeout",void 0,D):Me(D)?D:J("stream",void 0,D)}if($.done===!0)break;g(),q+=F.decode($.value,{stream:!0});let N=Cr(q);q=N.rest;for(let D of N.frames){let A=yn(D);if(A!==null&&c(A)==="stop"){M=!0;break}}}if(!M){let $=q.trim();if($!==""){let N=yn($);N!==null&&c(N)}}if(M)try{await E.cancel()}catch{}}finally{h!==null&&w.clear(h),s!==void 0&&s.removeEventListener("abort",k)}}async function Rr(e){let{draft:t,mode:n,locale:r,signal:s,sessionId:c=""}=e,a=typeof e.fetch=="function"?e.fetch:globalThis.fetch,o;try{o=await a(xn,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:st(t),mode:n,locale:r,stream:!1,...c===""?{}:{sessionId:c}}}),signal:s})}catch(l){throw Me(l)?l:J("network",void 0,l)}if(o===null||typeof o!="object")throw J("host");if(o.ok!==!0&&o.status>=400)throw J("host",void 0,o.status);return it(await at(o),o.status)}function Er(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,n=typeof e.now=="function"?e.now:()=>Date.now(),r=kn(e.timers),s=Number.isFinite(e.idleMs)?Number(e.idleMs):wn,c=Number.isFinite(e.undoMs)?Number(e.undoMs):Nr,a=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):zr,o=new WeakMap,l=new WeakMap,m=new WeakMap,w=new WeakMap,u=new WeakMap,k="",z=new Set,h=new Map,g=mn(),M=ze(null),f=null,I=0,E=0,F=null,q=null,$=()=>{for(let i of[...z])try{i()}catch(p){console.error("[prompt-boost] a store listener failed:",p)}},N=i=>i!=null&&(typeof i=="object"||typeof i=="function");function D(i){let p=N(i)?i:q;if(!N(p))return g;let x=o.get(p);return x===void 0&&(x=mn(),o.set(p,x)),x}function A(i,p){let x=N(i)?i:q,O={...D(x),...p};return N(x)?o.set(x,O):g=O,$(),O}function L(i){let p=N(i)?i:q;return N(p)?m.get(p)??ze(null):M}function he(i){return N(i)?i:q}function te(i){let p=N(i)?i:q;if(!N(p))return"default";let x=l.get(p);return x===void 0&&(I+=1,x=`s${I}`,l.set(p,x)),x}function Z(i){return`prompt-boost-panel-${te(i)}`}function Ne(i,p,x){return`${te(i)}\0${p}\0${x}`}function Ce(i){let p=h.get(i);return p===void 0?null:n()-p.at>a?(h.delete(i),null):(h.delete(i),h.set(i,p),p.result)}function me(i,p){for(h.delete(i),h.set(i,{at:n(),result:p});h.size>Mr;){let x=h.keys().next();if(x.done===!0)break;h.delete(x.value)}}function Te(){if(F===null)return;let i=F;F=null;try{i.controller.abort()}catch{}}function ne(i){let p=N(i)?i:q,x=N(p)?w.get(p):f;x!=null&&r.clear(x),N(p)?w.delete(p):f=null}function ue(i){ne(i);let p=null;p=r.set(()=>{let T=D(i);T.undo!==null&&A(i,{undo:null,phase:T.phase==="applied"?"idle":T.phase,applied:"",prompt:T.phase==="applied"?"":T.prompt,sources:T.phase==="applied"?[]:T.sources})},c);let x=N(i)?i:q;N(x)?w.set(x,p):f=p}function re(i,p,x){let T=he(i),O=ze(L(i)),B=!1;if(N(T)&&typeof T.setDraft=="function")try{T.setDraft({text:p.prompt,references:[]}),B=!0}catch{try{T.setDraft(p.prompt),B=!0}catch{B=!1}}if(!B){A(i,{phase:"error",mode:p.mode,prompt:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}A(i,{phase:"applied",mode:p.mode,prompt:p.prompt,applied:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:null,undo:{draft:O,at:n()},expanded:!1}),ue(i),me(x,p),K.play("boostDone")}async function ge(i,p,x){let{draft:T,mode:O,locale:B,key:X,sessionId:oe}=x,de=!1,ce=!1,fe=()=>F===p&&p.controller.signal.aborted===!1,Nn=P=>{if(!fe())return"stop";if(de=!0,P.type==="sources"){let Q=D(i);A(i,{sources:ot(P.sources),mode:P.mode==="compose"?"compose":Q.mode});return}if(P.type==="delta"){if(typeof P.text!="string"||P.text==="")return;let Q=D(i);A(i,{phase:"streaming",prompt:Q.prompt+P.text});return}if(P.type==="replace"){if(typeof P.text!="string")return;let Q=D(i),Cn=Q.phase==="ready"||P.text===""?Q.phase:"streaming";A(i,{prompt:P.text,phase:Cn});return}if(P.type==="done"){ce=!0;let Q={prompt:typeof P.result?.prompt=="string"?P.result.prompt.trim():D(i).prompt.trim(),mode:P.result?.mode==="compose"?"compose":O,sources:ot(P.result?.sources??D(i).sources),elapsedMs:Number.isFinite(P.result?.elapsedMs)?Math.max(0,Number(P.result.elapsedMs)):null,cached:P.result?.cached===!0};return Q.prompt===""?(A(i,{phase:"error",error:{code:"empty"}}),K.play("boostFail"),"stop"):(re(i,Q,X),"stop")}if(P.type==="error"){ce=!0;let Q=typeof P.message=="string"&&P.message.trim()!==""?P.message.trim():void 0;return A(i,{phase:"error",error:Q===void 0?{code:"unknown"}:{code:"host",message:Q}}),"stop"}};try{if(await Tr({draft:T,mode:O,locale:B,sessionId:oe,signal:p.controller.signal,onEvent:Nn,fetch:t,timers:r,idleMs:s}),ce)return;if(de)throw J("stream");await Re(i,p,{draft:T,mode:O,locale:B,key:X,sessionId:oe})}catch(P){if(p.controller.signal.aborted||Me(P)||!fe())return;if(de){A(i,{phase:"error",error:gn(P)}),K.play("boostFail");return}try{await Re(i,p,{draft:T,mode:O,locale:B,key:X,sessionId:oe})}catch(Q){if(p.controller.signal.aborted||Me(Q)||!fe())return;A(i,{phase:"error",error:gn(Q)}),K.play("boostFail")}}finally{F===p&&(F=null)}}async function Re(i,p,x){let T=await Rr({draft:x.draft,mode:x.mode,locale:x.locale,signal:p.controller.signal,fetch:t,sessionId:x.sessionId??""});F!==p||p.controller.signal.aborted||re(i,T,x.key)}function _e(i,p){let x=typeof p=="string"?p:"";x!==""&&(k=x,N(i)&&u.set(i,x))}function Fe(i){return N(i)?u.get(i)??k:k}function Ee(i,p){let x=typeof p?.draft=="string"?p.draft:"",T=Array.isArray(p?.occurrences)?p.occurrences:[],O=L(i);if(O.text===x&&O.references.length===T.length)return;let B={text:x,references:T.map(oe=>({...oe}))},X=N(i)?i:q;N(X)?m.set(X,B):M=B}function d(i,p={}){N(i)&&(q=i);let x=p.locale==="en"?"en":"zh",T=p.force===!0,O=L(i),B=st(O.text),X=B.trim()===""?"compose":"improve",oe=Ne(i,X,B);if(Te(),ne(i),!T){let fe=Ce(oe);if(fe!==null){re(i,{...fe,cached:!0},oe);return}}E+=1;let de={seq:E,actions:i,controller:new AbortController};F=de;let ce=D(i);A(i,{phase:"running",mode:X,seed:B,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:ce.phase==="idle"&&ce.undo===null?!1:ce.expanded}),K.play("boostStart"),ge(i,de,{draft:B,mode:X,locale:x,key:oe,sessionId:Fe(i)})}function v(i,p={}){d(i,{locale:p.locale,force:!0})}function C(i){let p=D(i);if(p.phase!=="ready")return!1;let x=p.prompt.trim();if(x==="")return!1;let T=he(i);if(!N(T)||typeof T.setDraft!="function")return A(i,{phase:"error",error:{code:"apply"}}),!1;let O=ze(L(i)),B=!1;try{T.setDraft({text:x,references:[]}),B=!0}catch{try{T.setDraft(x),B=!0}catch{B=!1}}return B?(ne(i),A(i,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:O,at:n()},expanded:!1}),ue(i),!0):(A(i,{phase:"error",error:{code:"apply"}}),!1)}function j(i){let p=D(i);if(p.undo===null)return!1;let x=he(i),T=ze(p.undo.draft),O=!1;if(N(x)&&typeof x.setDraft=="function")try{x.setDraft({text:T.text,references:T.references}),O=!0}catch{try{x.setDraft(T.text),O=!0}catch{O=!1}}return ne(i),A(i,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),O}function H(i){D(i).expanded!==!1&&A(i,{expanded:!1})}function W(i){let p=D(i);p.phase==="idle"&&p.undo===null||p.expanded===!0||A(i,{expanded:!0})}function ye(i){D(i).expanded===!0?H(i):W(i)}function xe(i){let p=N(i)?i:q;F!==null&&F.actions===p&&Te(),ne(i),A(i,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Oe(i,p){let x=D(i);x.phase==="streaming"&&(typeof p!="string"||p===x.prompt||A(i,{prompt:p}))}return{subscribe(i){return typeof i!="function"?()=>{}:(z.add(i),()=>{z.delete(i)})},getState:D,panelId:Z,sessionKey:te,setDraftMirror:Ee,setSessionId:_e,start:d,retry:v,apply:C,undo:j,expand:W,collapse:H,toggle:ye,dismiss:xe,edit:Oe}}var De=Er();var vn=`
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
`;var Ir="@local/chatbox-pet",zn=["slots","locale"];function ct(){return(0,Sn.useSyncExternalStore)(Y.subscribe,Y.getSnapshot,Y.getSnapshot)}function Mn(e){let t=e.locale.bind(ie),n=e.locale.bind(Se);e.effect(()=>e.locale.register(ie,{zh:bt,en:ht}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(Se,{zh:an,en:sn}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let a=document.querySelector('style[data-plugin="chatbox-pet"]');a!==null&&a.remove();let o=document.createElement("style");return o.setAttribute("data-plugin","chatbox-pet"),o.textContent=`${Ht}
${vn}
${Kt}
${bn}`,document.head.appendChild(o),()=>{o.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{Y.refresh().then(a=>{dt(a?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let a=()=>K.unlock();return window.addEventListener("pointerdown",a,{capture:!0}),window.addEventListener("keydown",a,{capture:!0}),()=>{window.removeEventListener("pointerdown",a,{capture:!0}),window.removeEventListener("keydown",a,{capture:!0})}},"chatbox-pet: sound unlock");let r=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:Ir,order:1,label:()=>t("label"),locale:ie,inject:a=>({sessionId:a})},a=>{if(ct().pet===!1)return null;let l=typeof a?.sessionId=="string"&&a.sessionId!==""?a.sessionId:typeof a?.session?.id=="string"?a.session.id:"";return l===""?null:ee.createElement(Ut,{sessionId:l,t,useInput:a?.useInput,locale:r})}));let s=a=>o=>ct().boost===!1?null:a(o);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>n("button.label"),locale:Se},s(a=>ee.createElement(Xt,{...a,store:De,t:n,locale:r})))),e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/merge",order:3,label:()=>t("merge.label")(2),locale:ie,inject:a=>({sessionId:a})},a=>{let o=typeof a?.sessionId=="string"?a.sessionId:"";return o===""?null:ee.createElement(on,{sessionId:o,sessions:e.get("sessions"),t,locale:r,onNotice:l=>{fetch("/api/chatbox-pet/broadcast",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({session:o,text:l,durationMs:4e3})}).catch(()=>{})}})})),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:Se},s(a=>ee.createElement(ln,{...a,store:De,t:n,locale:r})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/quick-actions",order:2,label:()=>t("quick.label"),locale:ie},a=>{let o=ct();return ee.createElement(fn,{inputActions:a?.inputActions,t,locale:r,petVisible:o.pet!==!1})}));function c({sessionId:a,session:o}){let l=typeof a=="string"&&a!==""?a:typeof o?.id=="string"?o.id:"";return ee.useEffect(()=>{l!==""&&De.setSessionId(null,l)},[l]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:ie,inject:a=>({sessionId:a})},a=>ee.createElement(c,{sessionId:a?.sessionId,session:a?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:ie},()=>ee.createElement(Vt,{t})))}
		return module.exports;
	}
});
