window.__ModuleLoader__.load({
	id: "@local/chatbox-pet",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var pn=Object.create;var Te=Object.defineProperty;var un=Object.getOwnPropertyDescriptor;var dn=Object.getOwnPropertyNames;var fn=Object.getPrototypeOf,bn=Object.prototype.hasOwnProperty;var hn=(e,t)=>{for(var n in t)Te(e,n,{get:t[n],enumerable:!0})},tt=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of dn(t))!bn.call(e,i)&&i!==n&&Te(e,i,{get:()=>t[i],enumerable:!(r=un(t,i))||r.enumerable});return e};var pe=(e,t,n)=>(n=e!=null?pn(fn(e)):{},tt(t||!e||!e.__esModule?Te(n,"default",{value:e,enumerable:!0}):n,e)),mn=e=>tt(Te({},"__esModule",{value:!0}),e);var ir={};hn(ir,{apply:()=>sn,inject:()=>an});module.exports=mn(ir);var re=pe(require("react"),1);var qe="chatboxPet.sound",nt=!0,gn=.3,yn=1e3,xn=7,_e={thinking:{variants:[{notes:[{freq:880,type:"sine",at:0,dur:.06,level:.9}]},{notes:[{freq:987.77,type:"sine",at:0,dur:.055,level:.9}]},{notes:[{freq:783.99,type:"sine",at:0,dur:.07,level:.85}]}]},working:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.05,level:.8},{freq:392,type:"triangle",at:.09,dur:.05,level:.7}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.045,level:.8},{freq:440,type:"triangle",at:.08,dur:.045,level:.7}]}]},result:{variants:[{notes:[{freq:659.25,type:"sine",at:0,dur:.09,level:.95},{freq:880,type:"sine",at:.09,dur:.11,level:.85}]},{notes:[{freq:698.46,type:"sine",at:0,dur:.08,level:.9},{freq:932.33,type:"sine",at:.08,dur:.11,level:.82}]}]},success:{variants:[{notes:[{freq:523.25,type:"triangle",at:0,dur:.08,level:.9},{freq:659.25,type:"triangle",at:.07,dur:.08,level:.9},{freq:783.99,type:"sine",at:.14,dur:.16,level:.95}]},{notes:[{freq:587.33,type:"triangle",at:0,dur:.08,level:.9},{freq:739.99,type:"triangle",at:.07,dur:.08,level:.9},{freq:880,type:"sine",at:.14,dur:.16,level:.95}]}]},waiting:{variants:[{notes:[{freq:440,slideTo:392,type:"triangle",at:0,dur:.1,level:.8},{freq:440,slideTo:392,type:"triangle",at:.18,dur:.1,level:.7}]},{notes:[{freq:392,slideTo:349.23,type:"triangle",at:0,dur:.11,level:.8},{freq:392,slideTo:349.23,type:"triangle",at:.2,dur:.11,level:.7}]}]},error:{variants:[{notes:[{freq:164.81,type:"sawtooth",at:0,dur:.22,level:.32},{freq:155.56,type:"sawtooth",at:.02,dur:.2,level:.26}]},{notes:[{freq:146.83,type:"square",at:0,dur:.18,level:.24}]}]},cancelled:{variants:[{notes:[{freq:523.25,slideTo:415.3,type:"triangle",at:0,dur:.16,level:.62},{freq:329.63,type:"sine",at:.12,dur:.2,level:.45}]},{notes:[{freq:466.16,slideTo:349.23,type:"triangle",at:0,dur:.15,level:.58},{freq:293.66,type:"sine",at:.11,dur:.2,level:.42}]}]},click:{variants:[{notes:[{freq:950,slideTo:320,type:"triangle",at:0,dur:.055,level:.9}]},{notes:[{freq:1100,slideTo:360,type:"triangle",at:0,dur:.05,level:.85}]}]},notify:{variants:[{notes:[{freq:1046.5,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]},{notes:[{freq:1174.66,type:"sine",at:0,dur:.12,level:.9},{freq:1567.98,type:"sine",at:.1,dur:.22,level:.85}]}]},sleep:{variants:[{notes:[{freq:196,type:"sine",at:0,dur:.5,level:.35},{freq:203,type:"sine",at:.05,dur:.45,level:.3}]}]},wake:{variants:[{notes:[{freq:440,slideTo:880,type:"sine",at:0,dur:.14,level:.75}]}]},cheer:{variants:[{notes:[{freq:783.99,type:"triangle",at:0,dur:.05,level:.85},{freq:987.77,type:"triangle",at:.06,dur:.05,level:.85},{freq:1318.51,type:"sine",at:.12,dur:.14,level:.9}]}]},pout:{variants:[{notes:[{freq:392,slideTo:293.66,type:"triangle",at:0,dur:.18,level:.55},{freq:261.63,type:"sine",at:.16,dur:.22,level:.4}]}]},boostStart:{variants:[{notes:[{freq:1567.98,type:"sine",at:0,dur:.03,level:.35}]}]},boostDone:{variants:[{notes:[{freq:783.99,type:"sine",at:0,dur:.08,level:.55},{freq:1174.66,type:"sine",at:.07,dur:.14,level:.5}]},{notes:[{freq:659.25,type:"sine",at:0,dur:.08,level:.55},{freq:987.77,type:"sine",at:.07,dur:.14,level:.5}]}]},boostFail:{variants:[{notes:[{freq:233.08,type:"sine",at:0,dur:.14,level:.32}]}]}},lr=Object.freeze(Object.keys(_e)),wn={thinking:"thinking",working:"working",result:"result",success:"success",waiting:"waiting",error:"error"};function rt(e,t){return e==="error"?t==="cancelled"?"cancelled":"error":wn[e]}function ge(e){try{return e?.getItem(qe)==="off"?"off":"on"}catch{return"on"}}function ot(e){nt=e!==!1}function Be(e,t){try{e?.setItem(qe,t==="off"?"off":"on")}catch{}}function at(e){let t=ge(e)==="on"?"off":"on";return Be(e,t),t}function ae(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function kn(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function vn(e){let t=e.now??(()=>Date.now()),n=null,r=null,i=!1,l=new Map,s=new Map,a=0;function c(){if(!i)try{let d=e.createContext();if(d==null)return;let w=d.createGain();if(w.gain.value=gn,w.connect(d.destination),d.state==="suspended"&&typeof d.resume=="function"){let k=d.resume();k!==void 0&&typeof k.catch=="function"&&k.catch(()=>{})}n=d,r=w,i=!0}catch{n=null,r=null,i=!1}}function x(d,w,k){if(w<=1)return 0;if(typeof k=="string"&&k!=="")return kn(k)%w;let h=(s.get(d)??0)%w;return s.set(d,h+1),h}function v(d,w){if(e.getPref()!=="on"||!i||n===null||r===null||!e.isVisible())return!1;let k=_e[d];if(k===void 0)return!1;let h=t(),S=l.get(d);if(S!==void 0&&h-S<yn)return!1;l.set(d,h);let L=Array.isArray(k.variants)?k.variants:[];if(L.length===0)return!1;let f=L[x(d,L.length,w)];a=(a+1)%7;let A=(a-3)*(xn/3);try{return Sn(n,r,f,A),!0}catch{return!1}}return{play:v,unlock:c,isUnlocked:()=>i,recipeNames:()=>Object.keys(_e)}}function Sn(e,t,n,r){let i=e.currentTime;for(let l of n.notes){let s=i+l.at,a=e.createOscillator(),c=e.createGain();a.type=l.type,a.frequency.setValueAtTime(l.freq,s),typeof l.slideTo=="number"&&a.frequency.exponentialRampToValueAtTime(l.slideTo,s+l.dur),r!==0&&typeof a.detune=="object"&&a.detune!==null&&a.detune.setValueAtTime(r,s),c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(l.level,s+.008),c.gain.exponentialRampToValueAtTime(1e-4,s+l.dur),a.connect(c),c.connect(t),a.start(s),a.stop(s+l.dur+.02)}}function Nn(){return{getPref:()=>{let e=ae()?.getItem(qe);return e==="on"||e==="off"?e:nt?"on":"off"},isVisible:()=>{try{return document.visibilityState==="visible"}catch{return!0}},createContext:()=>{let e=window.AudioContext??window.webkitAudioContext;return typeof e=="function"?new e:null},now:()=>Date.now()}}var K=vn(Nn());var on=require("react");var ue="chatboxPet",it={label:"\u76AE\u5361\u4E18","aria.pet":"\u76AE\u5361\u4E18\u5DE5\u4F5C\u4F19\u4F34\uFF0C\u70B9\u51FB\u6325\u624B","aria.bubble":"\u5DE5\u4F5C\u72B6\u6001\u63D0\u793A","sound.on":"\u97F3\u6548\u5F00","sound.off":"\u97F3\u6548\u5173","settings.title":"\u8F93\u5165\u6846\u4F34\u4FA3","settings.desc":"\u4E24\u4E2A\u529F\u80FD\u5404\u81EA\u72EC\u7ACB\uFF0C\u5173\u6389\u4E00\u4E2A\u4E0D\u5F71\u54CD\u53E6\u4E00\u4E2A\u3002","settings.pet":"\u76AE\u5361\u4E18","settings.boost":"\u63D0\u793A\u8BCD\u589E\u5F3A","settings.sound":"\u97F3\u6548","menu.title":"\u76AE\u5361\u4E18\u83DC\u5355","menu.say":"\u8BA9\u5B83\u8BF4\u2026","menu.sayPlaceholder":"\u5B83\u4F1A\u628A\u8FD9\u53E5\u8BDD\u8BF4\u51FA\u6765","menu.saySubmit":"\u8BF4","menu.action":"\u505A\u4E2A\u52A8\u4F5C","menu.hint":"Esc \u6216\u70B9\u5916\u9762\u5173\u95ED","menu.recent":"\u6700\u8FD1\u8BF4\u8FC7","menu.quip":"\u804A\u70B9\u4EC0\u4E48","menu.clear":"\u6E05\u7A7A","aria.menu":"\u6253\u5F00\u76AE\u5361\u4E18\u83DC\u5355"},st={label:"Pikachu","aria.pet":"Pikachu work companion; activate to wave","aria.bubble":"Work status hint","sound.on":"Sound on","sound.off":"Sound off","settings.title":"Composer companion","settings.desc":"Two independent features; switching one off leaves the other alone.","settings.pet":"Pikachu","settings.boost":"Prompt boost","settings.sound":"Sound","menu.title":"Pikachu menu","menu.say":"Make it say\u2026","menu.sayPlaceholder":"It will say this line","menu.saySubmit":"Say","menu.action":"Do an action","menu.hint":"Esc or click outside to close","menu.recent":"Said before","menu.quip":"Small talk","menu.clear":"Clear","aria.menu":"Open the Pikachu menu"};var m=pe(require("react"),1);var Cn=["hi pika","pika pika","\u76AE\u5361\u4E18","\u7535\u8001\u9F20","pika"],zn={zh:["\u76AE\u5361\uFF1F","\u55EF\uFF1F\u76AE\u5361","\u76AE\u5361\u76AE\u5361\uFF1F"],en:["Pika?","Hm? Pika","Pika pika?"]},ct=[{id:"sleep",zh:["\u7761","\u56F0","\u665A\u5B89","\u4F11\u606F"],en:["sleep","sleepy","tired","night"]},{id:"bye",zh:["\u62DC\u62DC","\u518D\u89C1","\u8D70\u4E86","\u56DE\u5934\u89C1"],en:["bye","goodbye","see you","later"]},{id:"thanks",zh:["\u8C22\u8C22","\u8C22\u5566","\u611F\u8C22","\u8F9B\u82E6\u4E86"],en:["thanks","thank you","thx","appreciate"]},{id:"scold",zh:["\u7B28","\u5435","\u70E6","\u95ED\u5634","\u6EDA","\u8BA8\u538C","\u96BE\u770B","\u522B\u5435"],en:["stupid","annoying","shut up","hate","useless"]},{id:"praise",zh:["\u5389\u5BB3","\u68D2","\u53EF\u7231","\u559C\u6B22","\u7231\u4F60","\u4E56","\u771F\u597D","\u4E0D\u9519","\u725B","\u8D5E"],en:["good","great","cute","love","nice","awesome","smart","best"]},{id:"food",zh:["\u5403","\u997F","\u996D","\u96F6\u98DF","\u679C\u6C41","\u5496\u5561","\u7CD6"],en:["food","hungry","snack","juice","coffee","eat"]},{id:"play",zh:["\u73A9","\u8DF3\u821E","\u8F6C\u5708","\u4E00\u8D77","\u6E38\u620F"],en:["play","dance","spin","game","together"]},{id:"status",zh:["\u5728\u5E72\u561B","\u5728\u5E72\u4EC0\u4E48","\u4F60\u597D\u5417","\u600E\u4E48\u6837","\u5FD9\u5417","\u72B6\u6001","\u5728\u5FD9"],en:["how are you","what are you doing","busy","status"]},{id:"greet",zh:["\u4F60\u597D","\u55E8","\u54C8\u55BD","\u65E9\u4E0A\u597D","\u65E9","\u5728\u5417"],en:["hello","hi","hey","morning"]},{id:"question",zh:["\u4E3A\u4EC0\u4E48","\u600E\u4E48","\u4EC0\u4E48","\u80FD\u4E0D\u80FD","\u662F\u4E0D\u662F","\u5417","\uFF1F","?"],en:["why","how","what","can you","?"]}],Oe={greet:{clip:"click-wave",sound:"click",zh:["\u76AE\u5361\uFF01","\u76AE\u5361\u76AE\u5361\uFF5E","\u76AE\u5361\u4E18\u5728\u7684"],en:["Pika!","Pika pika~","Pikachu is here"]},praise:{clip:"click-cheer",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u563F\u563F\u2026\u76AE\u5361","\u88AB\u5938\u4E86\u76AE\u5361"],en:["Pika pika!","Hehe, pika","I am flattered"]},thanks:{clip:"click-cheer",sound:"cheer",zh:["\u4E0D\u5BA2\u6C14\u76AE\u5361","\u76AE\u5361\uFF5E","\u4E3E\u624B\u4E4B\u52B3\u76AE\u5361"],en:["No problem, pika","Pika~","Anytime, pika"]},scold:{clip:"click-angry",sound:"pout",zh:["\u76AE\u5361\u2026\u2026","\u59D4\u5C48\u76AE\u5361","\u545C\u2026\u76AE\u5361"],en:["Pika...","That hurt, pika","Aw, pika"]},bye:{clip:"click-wave",sound:"click",zh:["\u4E0B\u6B21\u89C1\u76AE\u5361","\u62DC\u62DC\u76AE\u5361\uFF01","\u76AE\u5361\u4E18\u8D70\u5566"],en:["See you, pika","Bye bye pika!","Pikachu is off"]},food:{clip:"act-fishing",sound:"cheer",zh:["\u60F3\u5403\u76AE\u5361\uFF01","\u6709\u96F6\u98DF\u5417\u76AE\u5361","\u679C\u6C41\uFF01\u76AE\u5361"],en:["Hungry pika!","Got a snack, pika?","Juice! Pika"]},play:{clip:"act-spin",sound:"cheer",zh:["\u76AE\u5361\u76AE\u5361\uFF01","\u8F6C\u5708\u5708\u76AE\u5361","\u4E00\u8D77\u73A9\u76AE\u5361"],en:["Pika pika!","Spin spin, pika","Let us play, pika"]},status:{clip:"act-reading",sound:"thinking",zh:["\u5728\u770B\u4EE3\u7801\u76AE\u5361","\u76AE\u5361\u5728\u5E72\u6D3B","\u521A\u6B47\u4E00\u4F1A\u513F\u76AE\u5361"],en:["Reading code, pika","Pika is working","Taking a break, pika"]},question:{clip:"act-typing",sound:"thinking",zh:["\u76AE\u5361\uFF1F","\u8BA9\u6211\u60F3\u60F3\u76AE\u5361","\u8FD9\u4E2A\u76AE\u5361\u60F3\u60F3"],en:["Pika?","Let me think, pika","Hmm, pika is thinking"]},sleep:{clip:"act-snore",sound:"sleep",zh:["zzz\u2026\u76AE\u5361","\u76AE\u5361\u8981\u5145\u7535\u4E86","\u665A\u5B89\u76AE\u5361"],en:["Zzz... pika","Pikachu needs a charge","Good night, pika"]},fallback:{clip:"click-surprise",sound:"notify",zh:["\u76AE\u5361\uFF1F","\u76AE\u5361\u76AE\u5361","\u55EF\uFF1F\u76AE\u5361"],en:["Pika?","Pika pika","Hm? Pika"]}},ur=[...ct.map(e=>e.id),"fallback"];function je(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pt(e){return String(e??"").normalize("NFC").toLowerCase().replace(/\s+/g," ").trim()}function lt(e){let t=pt(e);if(t==="")return null;for(let n of Cn){let r=/^[a-z ]+$/.test(n),l=(r?new RegExp(`(^|[^a-z])${je(n).replace(/ /g,"\\s+")}([^a-z]|$)`):new RegExp(je(n))).exec(t);if(l===null)continue;let s=l.index+(r?l[1].length:0),a=s+(r?n.replace(/ /g," ").length:n.length),c=`${t.slice(0,s)} ${t.slice(a)}`.replace(/^[\s,，。.!！?？、:：;；-]+|[\s,，。.!！?？、:：;；-]+$/g,"").trim();return{wake:n,rest:c}}return null}function Mn(e){let t=2166136261,n=String(e??"");for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function Rn(e){let t=pt(e);if(t==="")return"fallback";for(let n of ct){for(let r of n.zh)if(t.includes(r))return n.id;for(let r of n.en)if(new RegExp(`(^|[^a-z])${je(r).replace(/ /g,"\\s+")}([^a-z]|$)`).test(t))return n.id}return"fallback"}function ut(e,t){let n=Array.isArray(e)?e.filter(r=>typeof r=="string"&&r!==""):[];return n.length===0?"":n[Mn(t)%n.length]}function Tn(e,t={}){let n=Oe[e]??Oe.fallback,r=t.locale==="en"?"en":"zh",i=typeof t.seed=="string"&&t.seed!==""?t.seed:String(e);return{intent:Oe[e]===void 0?"fallback":e,clip:n.clip,sound:n.sound,line:ut(n[r],i)}}function dt(e,t="zh"){let n=String(e??"");return/[\u4e00-\u9fff]/.test(n)?"zh":/[a-z]/i.test(n)||t==="en"?"en":"zh"}function ft(e={}){let t=e.locale==="en"?"en":"zh";return ut(zn[t],e.seed??"wake")}function bt(e={}){let t=typeof e.now=="function"?e.now:()=>Date.now(),n=Number.isFinite(e.debounceMs)?e.debounceMs:700,r=Number.isFinite(e.holdMs)?e.holdMs:15e3,i=Number.isFinite(e.minReplyGapMs)?e.minReplyGapMs:1200,l=!1,s="",a="",c=0,x=0;function v(k){let h=lt(k);return h===null?l?(l=!1,s="",a="",{kind:"off"}):null:(c=t(),l?null:(l=!0,s=h.wake,a=h.rest,c=t(),x=0,{kind:"wake",wake:h.wake,digest:h.rest}))}function d(k,h={}){if(!l)return null;let S=lt(k);if(S===null)return l=!1,{kind:"off"};let L=`${S.wake}\0${S.rest}`;if(L===a)return null;let f=t(),A=f-x;if(A<i)return{kind:"cooldown",retryInMs:i-A};a=L,x=f,c=f;let R=Rn(S.rest);return{kind:"reply",...Tn(R,{...h,seed:L}),digest:L}}function w(){return!l||t()-c<r?null:(l=!1,s="",a="",{kind:"off"})}return{observe:v,settle:d,expire:w,isActive:()=>l,debounceMs:n,holdMs:r,wakeWord:()=>s}}var M=pe(require("react"),1),Ct=require("react-dom");var ht=[{clip:"click-wave",zh:"\u6325\u624B",en:"Wave"},{clip:"click-cheer",zh:"\u6B22\u547C",en:"Cheer"},{clip:"click-surprise",zh:"\u60CA\u8BB6",en:"Surprise"},{clip:"click-angry",zh:"\u751F\u6C14",en:"Angry"},{clip:"act-shy",zh:"\u5BB3\u7F9E",en:"Shy"},{clip:"act-spin",zh:"\u8F6C\u5708",en:"Spin"},{clip:"act-stretch",zh:"\u4F38\u61D2\u8170",en:"Stretch"},{clip:"act-reading",zh:"\u8BFB\u4EE3\u7801",en:"Read"},{clip:"act-typing",zh:"\u6253\u5B57",en:"Type"},{clip:"act-fishing",zh:"\u9493\u9C7C",en:"Fish"},{clip:"act-snore",zh:"\u6253\u76F9",en:"Doze"},{clip:"act-charge",zh:"\u84C4\u529B",en:"Charge"},{clip:"act-thunderbolt",zh:"\u653E\u7535",en:"Zap"},{clip:"idle-look",zh:"\u5F20\u671B",en:"Look"},{clip:"idle-march",zh:"\u8E0F\u6B65",en:"March"},{clip:"act-harley",zh:"\u9A91\u54C8\u96F7",en:"Ride"},{clip:"act-beach",zh:"\u6D77\u8FB9",en:"Beach"}],Ee=60;function mt(e,t){let n=t==="en"?"en":"zh";return typeof e?.[n]=="string"?e[n]:""}function ye(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=Ee?t:n.slice(0,Ee).join("")}function gt(e,t,n,r=8){let l=Number.isFinite(t?.width)?t.width:0,s=Number.isFinite(t?.height)?t.height:0,a=Number.isFinite(n?.width)?n.width:0,c=Number.isFinite(n?.height)?n.height:0,x=(Number.isFinite(e?.right)?e.right:0)-l;x<8&&(x=Number.isFinite(e?.left)?e.left:8);let v=(Number.isFinite(e?.top)?e.top:0)-s-r;v<8&&(v=(Number.isFinite(e?.bottom)?e.bottom:0)+r);let d=Math.max(8,a-l-8),w=Math.max(8,c-s-8);return{left:Math.min(Math.max(x,8),d),top:Math.min(Math.max(v,8),w)}}var Ue=["topic","reminder","recall","nudge","encourage","tease","chitchat"],yt={topic:{clip:"idle-look",sound:"thinking"},reminder:{clip:"act-typing",sound:"notify"},recall:{clip:"act-reading",sound:"thinking"},nudge:{clip:"click-surprise",sound:"notify"},encourage:{clip:"click-cheer",sound:"cheer"},tease:{clip:"act-shy",sound:"pout"},chitchat:{clip:"click-wave",sound:"click"}},xt=9e3,En=24e4,$e=.05;function wt(e={}){if((Number.isFinite(e.idleForMs)?e.idleForMs:0)<En)return!1;let n=Number.isFinite(e.chance)?e.chance:$e;return(typeof e.random=="function"?e.random:Math.random)()<n}function kt(e,t){let n=t==="en"?"en":"zh";return{topic:{zh:"\u8BDD\u9898",en:"Topic"},reminder:{zh:"\u63D0\u9192",en:"Reminder"},recall:{zh:"\u56DE\u5FC6",en:"Recall"},nudge:{zh:"\u50AC\u4FC3",en:"Nudge"},encourage:{zh:"\u9F13\u52B1",en:"Cheer"},tease:{zh:"\u8C03\u4F83",en:"Tease"},chitchat:{zh:"\u804A\u95F2",en:"Chat"}}[e]?.[n]??""}function vt(e){return yt[e]??yt.chitchat}async function St(e={}){let t=typeof e.fetch=="function"?e.fetch:(...n)=>globalThis.fetch(...n);try{let n=await t("/api/chatbox-pet/quip",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({kind:typeof e.kind=="string"?e.kind:void 0,locale:e.locale==="en"?"en":"zh"})});if(!n.ok)return null;let r=await n.json();if(r?.ok!==!0)return null;let i=r.result;return typeof i?.text!="string"||i.text.trim()===""?null:{kind:Ue.includes(i.kind)?i.kind:"chitchat",text:i.text.trim(),quote:typeof i?.quote=="string"?i.quote:"",item:typeof i?.item=="string"?i.item:"",source:typeof i?.source?.label=="string"?i.source:null,sources:Array.isArray(i?.sources)?i.sources:[]}}catch{return null}}var Nt=268;function zt({anchor:e,locale:t,onSay:n,onAction:r,onQuip:i,recent:l,onForget:s,onClose:a,t:c}){let x=M.useRef(null),v=M.useRef(null),[d,w]=M.useState(""),[k,h]=M.useState(()=>({left:0,top:0,ready:!1}));M.useLayoutEffect(()=>{let f=x.current;if(f===null)return;let A=f.getBoundingClientRect().height,R=gt(e,{width:Nt,height:A},{width:window.innerWidth,height:window.innerHeight});h({...R,ready:!0})},[e]),M.useEffect(()=>{let f=v.current;f!==null&&typeof f.focus=="function"&&f.focus()},[]),M.useEffect(()=>{let f=R=>{let F=x.current;F!==null&&R.target instanceof Node&&F.contains(R.target)||a()},A=R=>{R.key==="Escape"&&(R.preventDefault(),R.stopPropagation(),a())};return document.addEventListener("pointerdown",f,!0),document.addEventListener("keydown",A,!0),()=>{document.removeEventListener("pointerdown",f,!0),document.removeEventListener("keydown",A,!0)}},[a]);let S=()=>{let f=ye(d);f!==""&&(n(f),a())},L={left:`${Math.round(k.left)}px`,top:`${Math.round(k.top)}px`,width:`${Nt}px`,visibility:k.ready?"visible":"hidden"};return(0,Ct.createPortal)(M.createElement("div",{ref:x,className:"cbp-menu",style:L,role:"menu","aria-label":c("menu.title"),"data-cbp-menu":"true",onContextMenu:f=>f.preventDefault()},M.createElement("div",{className:"cbp-menu-say"},M.createElement("label",{className:"cbp-menu-label",htmlFor:"cbp-menu-say-input"},c("menu.say")),M.createElement("div",{className:"cbp-menu-row"},M.createElement("input",{id:"cbp-menu-say-input",ref:v,className:"cbp-menu-input",type:"text",value:d,maxLength:Ee,placeholder:c("menu.sayPlaceholder"),"data-cbp-menu-say":"true",onChange:f=>w(f.target.value),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),f.stopPropagation(),S())}}),M.createElement("button",{type:"button",className:"cbp-menu-submit","data-cbp-menu-submit":"true",disabled:ye(d)==="",onClick:S},c("menu.saySubmit")))),l.length===0?null:M.createElement("div",{className:"cbp-menu-recent","data-cbp-menu-recent":"true"},M.createElement("span",{className:"cbp-menu-label"},c("menu.recent"),M.createElement("button",{type:"button",className:"cbp-menu-forget","data-cbp-menu-forget":"true",onClick:s},c("menu.clear"))),M.createElement("div",{className:"cbp-menu-recent-list"},l.slice(0,8).map(f=>M.createElement("button",{key:`${f.text}-${f.at}`,type:"button",className:"cbp-menu-recent-item","data-cbp-menu-recent-item":f.text,title:f.text,onClick:()=>{n(f.text),a()}},f.text)))),M.createElement("div",{className:"cbp-menu-quip","data-cbp-menu-quip":"true"},M.createElement("span",{className:"cbp-menu-label"},c("menu.quip")),M.createElement("div",{className:"cbp-menu-grid"},Ue.map(f=>M.createElement("button",{key:f,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-quip-kind":f,onClick:()=>{i(f),a()}},kt(f,t))))),M.createElement("div",{className:"cbp-menu-actions"},M.createElement("span",{className:"cbp-menu-label"},c("menu.action")),M.createElement("div",{className:"cbp-menu-grid"},ht.map(f=>M.createElement("button",{key:f.clip,type:"button",className:"cbp-menu-chip",role:"menuitem","data-cbp-menu-action":f.clip,title:f.clip,onClick:()=>{r(f.clip),a()}},mt(f,t))))),M.createElement("p",{className:"cbp-menu-hint"},c("menu.hint"))),document.body)}var He="/api/chatbox-pet/said",Mt="chatboxPet.said";function Ke(e){let t=String(e??"").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim();if(t==="")return"";let n=Array.from(t);return n.length<=60?t:n.slice(0,60).join("")}function In(e,t,n=Date.now()){let r=Ke(t),i=Array.isArray(e)?e.filter(s=>typeof s?.text=="string"):[];if(r==="")return i.slice(0,24);let l=i.filter(s=>s.text!==r);return[{text:r,at:n},...l].slice(0,24)}function We(e){let t=Array.isArray(e?.lines)?e.lines:Array.isArray(e)?e:[],n=[],r=new Set;for(let i of t){let l=Ke(typeof i=="string"?i:i?.text);if(!(l===""||r.has(l))&&(r.add(l),n.push({text:l,at:Number.isFinite(i?.at)?i.at:0}),n.length>=24))break}return n}function Ln(){try{return typeof window>"u"?void 0:window.localStorage}catch{return}}function Pn(e={}){let t=typeof e.fetch=="function"?e.fetch:(...d)=>globalThis.fetch(...d),n=e.storage===void 0?Ln():e.storage,r=()=>{try{let d=n?.getItem(Mt);return d==null?[]:We(JSON.parse(d))}catch{return[]}},i=d=>{try{n?.setItem(Mt,JSON.stringify(d))}catch{}},l=Object.freeze({lines:Object.freeze(r()),loaded:!1}),s=new Set;function a(d){l=Object.freeze({...l,...d});for(let w of s)try{w()}catch{}}async function c(){try{let w=await(await t(He,{method:"GET",headers:{accept:"application/json"}})).json();if(w?.ok===!0){let k=We(w.result);return a({lines:k,loaded:!0}),i(k),k}}catch{}return a({loaded:!0}),l.lines}async function x(d){let w=Ke(d);if(w==="")return l.lines;let k=In(l.lines,w);a({lines:Object.freeze(k)}),i(k);try{let S=await(await t(He,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:w})})).json();if(S?.ok===!0){let L=We(S.result);return a({lines:L,loaded:!0}),i(L),L}}catch{}return l.lines}async function v(){a({lines:Object.freeze([])}),i([]);try{await t(He,{method:"DELETE",headers:{accept:"application/json"}})}catch{}return[]}return{subscribe(d){return typeof d!="function"?()=>{}:(s.add(d),()=>s.delete(d))},getSnapshot(){return l},refresh:c,remember:x,clear:v}}var ie=Pn();var Ve=null;function Rt(e,t){let n=typeof e=="string"?e:"";return/iPhone|iPad|iPod/i.test(n)?!0:/Chrome|Chromium|Edg|OPR|Firefox|FxiOS/i.test(n)?!1:/Mac/i.test(typeof t=="string"?t:n)}function Tt(e){if(e!==void 0)return Rt(e.userAgent,e.platform)?".mov":".webm";if(Ve===null){let t=typeof navigator>"u"?void 0:navigator;Ve=Rt(t?.userAgent,t?.platform)?".mov":".webm"}return Ve}var Et={thinking:"act-typing",working:"act-reading",result:"act-spin",waiting:"act-shy",success:"act-thunderbolt",error:"click-angry"},Dn={failed:"click-angry",cancelled:"act-shy"};function It(e){let t=e?.previous?.status??"idle",n=e?.next?.status??"idle",r=e?.previous?.detail??null,i=e?.next?.detail??null,l=n!==t||i!==r,a=t==="working"&&n==="thinking"?"result":n;if(!l)return{changed:!1,status:a,detail:i,clip:null,sound:null};if(n==="idle")return{changed:!0,status:"idle",detail:i,clip:null,sound:null};let c=a==="error"?Dn[i]??Et.error:Et[a]??e?.idleClip??null;return{changed:!0,status:a,detail:i,clip:c,sound:rt(a,i)}}var An=6e3,Fn=5e3,_n={thinking:0,working:1,result:2,waiting:3,success:4,error:5},ne="idle-breathe-loop",Lt="click-wave",Pt=["act-harley","act-beach"],Dt=6e3,qn=9e4,Bn=.12;function At({sessionId:e,t,useInput:n,locale:r}){let i=m.useRef(null),l=m.useRef(null),s=m.useRef("idle"),a=m.useRef(null),c=m.useRef(Date.now()),x=m.useRef(null),v=m.useRef(0),d=m.useRef(0),[w,k]=m.useState(null),[h,S]=m.useState(null),f=m.useSyncExternalStore(ie.subscribe,ie.getSnapshot,ie.getSnapshot).lines,A=m.useRef(0),[R,F]=m.useState(null),[T,O]=m.useState("idle"),[N,D]=m.useState(!0),P=m.useRef(!1),E=m.useCallback((u,y)=>{let C=i.current;if(C===null||C.dataset.clip===u&&C.loop===y&&!C.ended)return;C.dataset.clip=u,C.loop=y,C.src=`/api/chatbox-pet/asset/${u}${Tt()}`;let q=C.play();q!==void 0&&typeof q.catch=="function"&&q.catch(()=>{})},[]),de=m.useCallback(()=>{let u=i.current;if(u!==null){if(!P.current&&u.dataset.clip!==ne){P.current=!0,E(ne,!0);return}D(!1)}},[E]),Z=m.useCallback(()=>{window.clearTimeout(A.current),F(null)},[]),J=m.useCallback((u,y,C,q=Fn,$=null)=>{window.clearTimeout(A.current),F({text:u,kind:C,source:$}),y||(A.current=window.setTimeout(()=>F(null),q))},[]),Ne=m.useCallback(u=>{let y=l.current?.workStatusTexts,C=_n[u],q=C===void 0||!Array.isArray(y)?void 0:y[C];if(!(!Array.isArray(q)||q.length===0))return q[Math.floor(Math.random()*q.length)]},[]),Ce=m.useCallback(u=>{let y=typeof u?.status=="string"?u.status:"idle",C=s.current,q=typeof u?.detail=="string"?u.detail:null,$=It({previous:{status:C,detail:a.current},next:{status:y,detail:q},idleClip:ne});if(!$.changed){y==="waiting"&&typeof u?.bubble=="string"&&u.bubble!==""&&J(u.bubble,!0,"waiting");return}if(s.current=y,a.current=q,O(y),x.current!==null&&x.current.isActive()){c.current=Date.now();return}if(y==="idle"){E(ne,!0),Z(),c.current=Date.now();return}c.current=Date.now();let H=$.status,he=$.detail;E($.clip??ne,!1);let me=typeof u?.bubble=="string"&&u.bubble!==""?u.bubble:Ne(H),Fe=u?.source==="broadcast"?"notify":$.sound;K.play(Fe,me),me!==void 0?J(me,y==="waiting",H):Z()},[Z,Ne,E,J]),fe=m.useCallback(async u=>{let y=await St({kind:u,locale:typeof r=="function"?r():"zh"});if(y===null)return;let C=vt(y.kind);E(C.clip,!1),K.play(C.sound,y.text),J(y.text,!1,"quip",xt,y.source?.label??null)},[r,E,J]),ze=m.useCallback(()=>{if(s.current!=="idle"||x.current!==null&&x.current.isActive())return;let y=Date.now()-c.current;if(y<qn)return;if(wt({idleForMs:y,chance:$e})){c.current=Date.now(),fe(null);return}if(Math.random()>Bn)return;let C=Pt[Math.floor(Math.random()*Pt.length)];E(C,!1),c.current=Date.now()},[E,fe]),X=m.useCallback((u,y,C)=>{typeof u.clip=="string"&&u.clip!==""&&E(u.clip,!1),typeof u.sound=="string"&&u.sound!==""&&K.play(u.sound,u.line),typeof u.line=="string"&&u.line!==""&&J(u.line,y,"chat",C)},[E,J]),se=m.useCallback(()=>{window.clearTimeout(d.current),k(null),E(ne,!0),Z()},[Z,E]),ee=typeof n=="function"?n(u=>typeof u?.draft=="string"?u.draft:""):"";m.useEffect(()=>{x.current===null&&(x.current=bt());let u=x.current,y=dt(ee,typeof r=="function"?r():"zh"),C=u.observe(ee);if(C!==null&&C.kind==="wake"&&(k({phase:"awake"}),X({clip:"click-surprise",sound:"wake",line:ft({locale:y,seed:ee})},!0)),C!==null&&C.kind==="off"){se();return}if(window.clearTimeout(v.current),!u.isActive())return;let q=$=>{v.current=window.setTimeout(()=>{let H=u.settle(ee,{locale:y});if(H!==null&&H.kind==="cooldown"){q(Math.max(120,H.retryInMs));return}H===null||H.kind!=="reply"||(X(H,!1,Dt),window.clearTimeout(d.current),d.current=window.setTimeout(()=>se(),u.holdMs))},$)};return q(u.debounceMs),()=>window.clearTimeout(v.current)},[ee,r,X,se]),m.useEffect(()=>{ie.refresh()},[]),m.useEffect(()=>{let u=!1;return fetch("/api/chatbox-pet/config").then(y=>y.ok?y.json():null).then(y=>{!u&&y?.ok===!0&&(l.current=y.result)}).catch(()=>{}),()=>{u=!0}},[]),m.useEffect(()=>{if(typeof e!="string"||e==="")return;let u=!1,y=0,C=async()=>{if(document.visibilityState==="visible"){try{let H=await fetch(`/api/chatbox-pet/state?session=${encodeURIComponent(e)}`),he=H.ok?await H.json():null;!u&&he?.ok===!0&&Ce(he.result)}catch{}u||ze()}},q=()=>{y=window.setTimeout(async()=>{await C(),u||q()},An)},$=()=>{document.visibilityState==="visible"&&C()};return document.addEventListener("visibilitychange",$),C(),q(),()=>{u=!0,window.clearTimeout(y),document.removeEventListener("visibilitychange",$)}},[e,Ce]),m.useEffect(()=>(E(ne,!0),()=>window.clearTimeout(A.current)),[E]);let[be,Me]=m.useState(()=>ge(ae())==="on"),De=m.useCallback(u=>{let y=ye(u);y!==""&&(E(Lt,!1),K.play("click",y),J(y,!1,"chat",Dt),ie.remember(y))},[E,J]),Ae=m.useCallback(u=>{typeof u!="string"||u===""||(E(u,!1),K.play("click",u))},[E]),Re=m.useCallback(()=>{let u=document.querySelector("[data-cbp-pet]"),y=u instanceof Element?u.getBoundingClientRect():null;y!==null&&S({left:y.left,right:y.right,top:y.top,bottom:y.bottom})},[]);return m.createElement("div",{className:"cbp-root","data-cbp-root":!0},m.createElement("div",{className:"cbp-stage"},m.createElement("div",{className:(R===null?"cbp-bubble":"cbp-bubble cbp-bubble--visible")+(R?.kind==="error"?" cbp-bubble--error":"")+(R?.kind==="quip"?" cbp-bubble--quip":""),"data-cbp-bubble":!0,role:"status","aria-live":"polite","aria-label":t("aria.bubble")},R?.source?m.createElement("span",{className:"cbp-bubble-source","data-cbp-bubble-source":R.source},R.source):null,m.createElement("span",{className:"cbp-bubble-text"},R?.text??"")),m.createElement("button",{type:"button",className:"cbp-sound","data-cbp-sound":!0,"aria-label":t(be?"sound.on":"sound.off"),"aria-pressed":be,onClick:u=>{u.stopPropagation();let y=at(ae())==="on";Me(y),prefsStore.update({sound:y})}},be?m.createElement(On,null):m.createElement(jn,null)),m.createElement("button",{type:"button",className:"cbp-pet","data-cbp-pet":!0,"data-cbp-status":w===null?T:"awake","data-cbp-chat":w===null?"false":"true","aria-label":t("aria.pet"),onClick:()=>{K.play("click"),E(Lt,!1)},onContextMenu:u=>{u.preventDefault(),u.stopPropagation(),Re()},onKeyDown:u=>{(u.key==="ContextMenu"||u.shiftKey&&u.key==="F10")&&(u.preventDefault(),Re())},"aria-haspopup":"menu","aria-expanded":h===null?"false":"true"},N?m.createElement("video",{ref:i,muted:!0,autoPlay:!0,loop:!0,playsInline:!0,preload:"auto",onEnded:u=>{u.currentTarget.loop||E(ne,!0)},onError:de}):m.createElement("img",{src:"/api/chatbox-pet/asset/pokemon-avatar.png",alt:"",draggable:!1}))),h===null?null:m.createElement(zt,{anchor:h,locale:typeof r=="function"?r():"zh",onSay:De,onAction:Ae,onQuip:u=>{fe(u)},recent:f,onForget:()=>{ie.clear()},onClose:()=>S(null),t}))}function On(){return m.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},m.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),m.createElement("path",{d:"M10.1 6.3a2.6 2.6 0 0 1 0 3.4"}),m.createElement("path",{d:"M11.9 4.7a4.9 4.9 0 0 1 0 6.6"}))}function jn(){return m.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},m.createElement("path",{d:"M8 4.6 5.4 7H4c-.5 0-.8.4-.8.8v2.4c0 .4.3.8.8.8h1.4L8 11.4V4.6Z"}),m.createElement("path",{d:"M10.3 6.5l3.2 3.2M13.5 6.5l-3.2 3.2"}))}var Ft=`
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
`;var _t="/api/chatbox-pet/prefs",Un=Object.freeze({pet:!0,boost:!0,sound:!0,loaded:!1});function $n(e={}){let t=typeof e.fetch=="function"?e.fetch:(...a)=>globalThis.fetch(...a),n=Un,r=new Set;function i(a){n={...n,...a};for(let c of r)try{c()}catch{}}async function l(){try{let c=await(await t(_t,{method:"GET",headers:{accept:"application/json"}})).json();c?.ok===!0&&c.result!==null&&typeof c.result=="object"?i({pet:c.result.pet!==!1,boost:c.result.boost!==!1,sound:c.result.sound!==!1,loaded:!0}):i({loaded:!0})}catch{}return n}async function s(a){let c=n,x={};for(let v of["pet","boost","sound"])typeof a?.[v]=="boolean"&&(x[v]=a[v]);i(x);try{let d=await(await t(_t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({prefs:x})})).json();if(d?.ok!==!0||d.result===null||typeof d.result!="object")throw new Error("rejected");return i({pet:d.result.pet!==!1,boost:d.result.boost!==!1,sound:d.result.sound!==!1,loaded:!0}),!0}catch{return i({pet:c.pet,boost:c.boost,sound:c.sound}),!1}}return{subscribe(a){return typeof a!="function"?()=>{}:(r.add(a),()=>r.delete(a))},getSnapshot(){return n},refresh:l,update:s}}var Q=$n();var U=pe(require("react"),1),qt=require("react");var Bt=`
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
`;function Ge({id:e,checked:t,label:n,onChange:r}){return U.createElement("label",{className:"cbp-set-item",htmlFor:e},U.createElement("span",{className:"cbp-switch"},U.createElement("input",{id:e,type:"checkbox",role:"switch",checked:t,onChange:i=>r(i.target.checked),"data-cbp-pref":e}),U.createElement("span",{className:"cbp-switch-track","aria-hidden":"true"}),U.createElement("span",{className:"cbp-switch-thumb","aria-hidden":"true"})),n)}function Ot({t:e}){let t=(0,qt.useSyncExternalStore)(Q.subscribe,Q.getSnapshot,Q.getSnapshot),[n,r]=U.useState(()=>ge(ae())==="on"),i=l=>{r(l),Be(ae(),l?"on":"off"),Q.update({sound:l})};return U.createElement("div",{className:"cbp-set-row","data-cbp-settings":""},U.createElement("div",{className:"cbp-set-head"},U.createElement("span",{className:"cbp-set-title"},e("settings.title")),U.createElement("span",{className:"cbp-set-desc"},e("settings.desc"))),U.createElement("div",{className:"cbp-set-items"},U.createElement(Ge,{id:"chatbox-pet-feature-pet",checked:t.pet!==!1,label:e("settings.pet"),onChange:l=>{Q.update({pet:l})}}),U.createElement(Ge,{id:"chatbox-pet-feature-boost",checked:t.boost!==!1,label:e("settings.boost"),onChange:l=>{Q.update({boost:l})}}),U.createElement(Ge,{id:"chatbox-pet-feature-sound",checked:n,label:e("settings.sound"),onChange:i})))}var we=pe(require("react"),1),Le=require("react"),Je=require("@deepseek-ai/dsh-client-ui-primitives");var j=require("react");function xe({size:e=16,children:t}){return(0,j.createElement)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},t)}function Ie({size:e=16}){return(0,j.createElement)(xe,{size:e},[(0,j.createElement)("path",{key:"a",d:"M5.875 3C5.875 6.33333 7.54167 8 10.875 8C7.54167 8 5.875 9.66667 5.875 13C5.875 9.66667 4.20833 8 0.875 8C4.20833 8 5.875 6.33333 5.875 3Z",stroke:"currentColor"}),(0,j.createElement)("path",{key:"b",d:"M12.375 1.55823C12.375 3.39156 13.2917 4.30823 15.125 4.30823C13.2917 4.30823 12.375 5.22489 12.375 7.05823C12.375 5.22489 11.4583 4.30823 9.625 4.30823C11.4583 4.30823 12.375 3.39156 12.375 1.55823Z",stroke:"currentColor"}),(0,j.createElement)("path",{key:"c",d:"M12.375 10.4418C12.375 11.7751 13.0417 12.4418 14.375 12.4418C13.0417 12.4418 12.375 13.1084 12.375 14.4418C12.375 13.1084 11.7083 12.4418 10.375 12.4418C11.7083 12.4418 12.375 11.7751 12.375 10.4418Z",stroke:"currentColor"})])}function jt({size:e=16}){return(0,j.createElement)(xe,{size:e},(0,j.createElement)("path",{d:"M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4",stroke:"currentColor"}))}function Ut({size:e=16}){return(0,j.createElement)(xe,{size:e},[(0,j.createElement)("path",{key:"a",d:"M2.5 2.5L13.5 13.5",stroke:"currentColor"}),(0,j.createElement)("path",{key:"b",d:"M13.5 2.5L2.5 13.5",stroke:"currentColor"})])}function Qe({size:e=16}){return(0,j.createElement)(xe,{size:e},[(0,j.createElement)("path",{key:"a",d:"M8 2.4L14.4 13.6H1.6L8 2.4Z",stroke:"currentColor"}),(0,j.createElement)("path",{key:"b",d:"M8 6.4V9.6",stroke:"currentColor"}),(0,j.createElement)("path",{key:"c",d:"M8 12.1V12.15",stroke:"currentColor",strokeWidth:1.6})])}function $t({size:e=16}){return(0,j.createElement)(xe,{size:e},(0,j.createElement)("path",{d:"M3 6L8 11L13 6",stroke:"currentColor"}))}function Hn({label:e,children:t}){return typeof Je.Tooltip=="function"?we.createElement(Je.Tooltip,{label:e,side:"top",delayMs:400},t):(0,Le.cloneElement)(t,{title:e})}function Ht({inputActions:e,useInput:t,store:n,t:r,locale:i}){let l=(0,Le.useSyncExternalStore)(n.subscribe,()=>n.getState(e),()=>n.getState(e)),s=typeof t=="function"?t(w=>w):void 0;n.setDraftMirror(e,s);let a=typeof s?.draft=="string"?s.draft:"",c=l.phase==="running"||l.phase==="streaming",x=l.phase!=="idle",v=r(c?"button.running":"button.label"),d=c?r("button.running"):a.trim()===""?r("button.tooltipCompose"):r("button.tooltip");return we.createElement(Hn,{label:d},we.createElement("button",{type:"button",className:"pb-trigger","data-pb-button":"","data-pb-running":c?"true":"false","data-pb-open":x?"true":"false","aria-label":v,"aria-busy":c?"true":void 0,"aria-expanded":x?"true":"false","aria-controls":n.panelId(e),onMouseDown:w=>w.preventDefault(),onClick:()=>n.start(e,{locale:typeof i=="function"?i():"zh"})},we.createElement(Ie,{size:16})))}var ke="promptBoost",Wt={"button.label":"\u589E\u5F3A\u63D0\u793A\u8BCD","button.tooltip":"\u589E\u5F3A\u63D0\u793A\u8BCD\uFF08\u7ED3\u5408\u8BB0\u5FC6 / \u542C\u8BB0 / \u8BFB\u4E66 / \u77AC\u95F4\uFF09","button.tooltipCompose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349\u4E00\u6761\u63D0\u793A\u8BCD","button.running":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD","chip.running":"\u589E\u5F3A\u4E2D\u2026","chip.writing":"\u6B63\u5728\u5199\u2026","chip.ready":"\u5DF2\u751F\u6210","chip.failed":"\u589E\u5F3A\u5931\u8D25","chip.view":"\u67E5\u770B","chip.expand":"\u5C55\u5F00\u63D0\u793A\u8BCD\u9884\u89C8","chip.dismiss":"\u5173\u95ED\u5E76\u505C\u6B62","panel.title":"\u63D0\u793A\u8BCD\u589E\u5F3A","panel.compose":"\u4ECE\u6700\u8FD1\u4E0A\u4E0B\u6587\u8D77\u8349","panel.cached":"\u7F13\u5B58","panel.took":"{seconds} \u79D2","panel.sources":"\u53C2\u8003\u6765\u6E90","panel.noSources":"\u6CA1\u6709\u8BFB\u5230\u4E2A\u4EBA\u4E0A\u4E0B\u6587\uFF0C\u53EA\u6309\u5F53\u524D\u8349\u7A3F\u91CD\u5199","panel.status":"\u6B63\u5728\u8BFB\u53D6\u8BB0\u5FC6\u3001\u542C\u8BB0\u3001\u8BFB\u4E66\u4E0E\u77AC\u95F4\u2026","panel.streaming":"\u6B63\u5728\u91CD\u5199\u2026","panel.placeholder":"\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u4EE5\u5148\u6539\u518D\u66FF\u6362","panel.editLabel":"\u4F18\u5316\u540E\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u7F16\u8F91\u540E\u66FF\u6362\u8F93\u5165\u6846","panel.apply":"\u66FF\u6362\u8F93\u5165\u6846","panel.another":"\u6362\u4E00\u7248","panel.retry":"\u6362\u4E00\u7248","panel.retryError":"\u91CD\u8BD5","panel.close":"\u5173\u95ED","panel.collapse":"\u6536\u8D77","panel.announceRunning":"\u6B63\u5728\u589E\u5F3A\u63D0\u793A\u8BCD\uFF0C\u7ED3\u679C\u4F1A\u663E\u793A\u5728\u8F93\u5165\u6846\u4E0B\u65B9","panel.announceReady":"\u63D0\u793A\u8BCD\u5DF2\u751F\u6210","panel.announceApplied":"\u5DF2\u7528\u589E\u5F3A\u540E\u7684\u63D0\u793A\u8BCD\u66FF\u6362\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u64A4\u9500","panel.announceError":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u53EF\u4EE5\u91CD\u8BD5","panel.error.network":"\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\u670D\u52A1\uFF0C\u8BF7\u786E\u8BA4\u5E94\u7528\u6B63\u5728\u8FD0\u884C","panel.error.host":"\u5BBF\u4E3B\u6CA1\u6709\u63A5\u53D7\u8FD9\u6B21\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","panel.error.timeout":"\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5","panel.error.stream":"\u751F\u6210\u8FC7\u7A0B\u88AB\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.empty":"\u6CA1\u6709\u5F97\u5230\u53EF\u7528\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5","panel.error.apply":"\u65E0\u6CD5\u5199\u5165\u8F93\u5165\u6846\uFF0C\u8BF7\u91CD\u8BD5","panel.error.unknown":"\u63D0\u793A\u8BCD\u589E\u5F3A\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5","undo.done":"\u5DF2\u66FF\u6362\u8F93\u5165\u6846","undo.action":"\u64A4\u9500","undo.label":"\u64A4\u9500\u672C\u6B21\u66FF\u6362\uFF0C\u6062\u590D\u539F\u6765\u7684\u8349\u7A3F","source.memory":"\u8BB0\u5FC6","source.minutes":"\u542C\u8BB0","source.reader":"\u8BFB\u4E66","source.moments":"\u77AC\u95F4","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"},Kt={"button.label":"Prompt boost","button.tooltip":"Boost the prompt (memory / minutes / reader / moments)","button.tooltipCompose":"Draft a prompt from your latest context","button.running":"Boosting the prompt","chip.running":"Boosting\u2026","chip.writing":"writing\u2026","chip.ready":"Ready","chip.failed":"Boost failed","chip.view":"View","chip.expand":"Show the rewritten prompt","chip.dismiss":"Dismiss and stop","panel.title":"Prompt boost","panel.compose":"Drafted from recent context","panel.cached":"cached","panel.took":"{seconds}s","panel.sources":"Context used","panel.noSources":"No personal context found \u2014 rewriting the draft alone","panel.status":"Reading memory, minutes, reader and moments\u2026","panel.streaming":"Rewriting\u2026","panel.placeholder":"The result appears here; edit it before you apply","panel.editLabel":"Rewritten prompt, editable before applying","panel.apply":"Replace draft","panel.another":"Another version","panel.retry":"Another version","panel.retryError":"Retry","panel.close":"Close","panel.collapse":"Collapse","panel.announceRunning":"Boosting the prompt; the result will appear under the composer","panel.announceReady":"The prompt is ready; edit it before replacing the draft","panel.announceError":"The boost failed; you can retry","panel.error.network":"Cannot reach the harness service \u2014 check that the app is running","panel.error.host":"The harness did not accept the request; try again shortly","panel.error.timeout":"The rewrite timed out; try again","panel.error.stream":"The rewrite was interrupted; try again","panel.error.empty":"The model returned nothing usable; try again","panel.error.apply":"Could not write into the composer; try again","panel.error.unknown":"The boost failed; try again","undo.done":"Draft replaced","undo.action":"Undo","undo.label":"Undo the replacement and restore the previous draft","source.memory":"Memory","source.minutes":"Minutes","source.reader":"Reader","source.moments":"Moments","shortcut.mac":"\u2318\u23CE","shortcut.other":"Ctrl+\u23CE"};var b=pe(require("react"),1),V=require("react");var Wn=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/i.test(String(navigator.platform??navigator.userAgent??""));function Kn(){return b.createElement("svg",{className:"pb-spinner",width:"12",height:"12",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false"},b.createElement("circle",{cx:"8",cy:"8",r:"5.6",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"1.6"}),b.createElement("path",{d:"M8 2.4A5.6 5.6 0 0 1 13.6 8",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))}function Vt(e,t){let n=`source.${e.id}`,r=t(n);return r===n?e.label:r}function Vn(e,t){if(e==null)return t("panel.error.unknown");if(typeof e.message=="string"&&e.message!=="")return e.message;switch(e.code){case"network":return t("panel.error.network");case"timeout":return t("panel.error.timeout");case"stream":return t("panel.error.stream");case"empty":return t("panel.error.empty");case"apply":return t("panel.error.apply");case"host":return t("panel.error.host");default:return t("panel.error.unknown")}}function Gn(e,t){if(e.phase!=="ready")return"";let n=[];return e.cached&&n.push(t("panel.cached")),typeof e.elapsedMs=="number"&&e.elapsedMs>0&&n.push(t("panel.took",{seconds:(e.elapsedMs/1e3).toFixed(1)})),n.join(" \xB7 ")}function Qn(e,t){if(e.phase==="running")return t("chip.running");if(e.phase==="streaming"){let n=e.sources.slice(0,2).map(r=>`${Vt(r,t)} ${r.count}`).join(" \xB7 ");return n===""?t("chip.writing"):`${n} \xB7 ${t("chip.writing")}`}return e.phase==="ready"?t("chip.ready"):e.phase==="applied"?t("undo.done"):e.phase==="error"?t("chip.failed"):t("undo.done")}function Jn({state:e,store:t,t:n,inputActions:r,chipRef:i}){let l=e.phase==="applied",s=e.phase==="running"||e.phase==="streaming",a=e.phase==="ready",c=e.phase==="error",x=e.mode==="compose"?n("panel.compose"):n("button.label"),v=Qn(e,n);return l?b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status is-applied","data-pb-collapsed":"","data-pb-state":"applied","data-pb-running":"false","data-pb-expand":"",role:"button",tabIndex:0,"aria-label":n("chip.expand"),onClick:()=>t.expand(r),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),t.expand(r))}},b.createElement("span",{className:"pb-chip-ico is-accent","aria-hidden":"true"},b.createElement(jt,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},n("undo.done")),b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("button",{type:"button",className:"pb-chip-action","data-pb-undo":"","aria-label":n("undo.label"),onClick:()=>t.undo(r)},n("undo.action")))):b.createElement("div",{className:"pb-chip-row"},b.createElement("div",{className:"pb-chip-status","data-pb-collapsed":"","data-pb-state":e.phase,"data-pb-running":s?"true":"false",onClick:()=>t.expand(r)},b.createElement("button",{ref:i,type:"button",className:"pb-chip-main","data-pb-expand":"","aria-expanded":"false","aria-controls":t.panelId(r),"aria-label":`${n("chip.expand")} \xB7 ${x}`,onClick:()=>t.expand(r)},b.createElement("span",{className:s||a?"pb-chip-ico is-accent":"pb-chip-ico is-error","aria-hidden":"true"},s?b.createElement(Kn,null):c?b.createElement(Qe,{size:12}):b.createElement(Ie,{size:12})),b.createElement("span",{className:"pb-chip-text",role:"status","aria-live":"polite"},v),a||c?b.createElement(b.Fragment,null,b.createElement("span",{className:"pb-chip-sep","aria-hidden":"true"},"\xB7"),b.createElement("span",{className:"pb-chip-view"},n("chip.view"))):null),b.createElement("button",{type:"button",className:"pb-chip-dismiss","data-pb-dismiss":"","aria-label":n("chip.dismiss"),onClick:()=>t.dismiss(r)},b.createElement(Ut,{size:10}))))}function Yn({state:e,store:t,t:n,inputActions:r,locale:i,panelRef:l}){let s=(0,V.useRef)(null),a=e.phase,c=a==="running",x=a==="streaming",v=a==="ready",d=a==="applied",w=v||d,k=a==="error",h=e.sources,S=c||x||w||h.length>0,L=d?e.applied:e.prompt,f=Gn(e,n),A=t.panelId(r),R=n(Wn?"shortcut.mac":"shortcut.other"),F=n(c?"panel.announceRunning":x?"panel.streaming":d?"panel.announceApplied":v?"panel.announceReady":"panel.announceError");return(0,V.useEffect)(()=>{let T=s.current;T===null||a!=="streaming"||(T.scrollTop=T.scrollHeight)},[e.prompt,a]),b.createElement("section",{ref:l,id:A,className:"pb-panel","data-pb-panel":"","data-pb-mode":e.mode,"data-pb-state":a,"data-pb-running":c||x?"true":"false",tabIndex:-1,"aria-labelledby":`${A}-title`,"aria-busy":c||x?"true":void 0},b.createElement("header",{className:"pb-head"},b.createElement("div",{className:"pb-head-row"},b.createElement("h2",{className:"pb-title",id:`${A}-title`},n("panel.title")),e.mode==="compose"?b.createElement("span",{className:"pb-mode"},n("panel.compose")):null,b.createElement("span",{className:"pb-meta"},f),b.createElement("button",{type:"button",className:"pb-control-btn","data-pb-collapse":"","aria-label":n("panel.collapse"),title:n("panel.collapse"),onClick:()=>t.collapse(r)},b.createElement($t,{size:14}))),S?b.createElement("div",{className:"pb-sources",role:"list","aria-label":n("panel.sources")},h.length>0?h.map(T=>b.createElement("span",{key:T.id,className:"pb-chip",role:"listitem","data-pb-source":T.id},b.createElement("span",{className:"pb-chip-label"},Vt(T,n)),b.createElement("span",{className:"pb-chip-count"},T.count))):c?[b.createElement("span",{key:"a",className:"pb-skeleton-chip","aria-hidden":"true"}),b.createElement("span",{key:"b",className:"pb-skeleton-chip is-short","aria-hidden":"true"})]:b.createElement("span",{className:"pb-note"},n("panel.noSources"))):null),b.createElement("div",{className:"pb-rule","aria-hidden":"true"}),b.createElement("div",{className:"pb-body"},c?b.createElement(b.Fragment,null,b.createElement("div",{className:"pb-skeleton","aria-hidden":"true"},b.createElement("span",{className:"pb-skeleton-line is-long"}),b.createElement("span",{className:"pb-skeleton-line is-full"}),b.createElement("span",{className:"pb-skeleton-line is-short"})),b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.status"))):null,x||w?b.createElement("textarea",{ref:s,className:"pb-text","data-pb-prompt":"",rows:3,readOnly:x||d,spellCheck:!1,"aria-label":n("panel.editLabel"),placeholder:n("panel.placeholder"),value:L}):null,x?b.createElement("div",{className:"pb-status"},b.createElement("span",{className:"pb-dot","aria-hidden":"true"}),n("panel.streaming")):null,k?b.createElement("div",{className:"pb-error",role:"alert","data-pb-error":""},b.createElement("span",{className:"pb-error-icon","aria-hidden":"true"},b.createElement(Qe,{size:14})),b.createElement("span",{className:"pb-error-text"},Vn(e.error,n))):null,b.createElement("p",{className:"pb-sr",role:"status","aria-live":"polite"},F)),b.createElement("div",{className:"pb-foot"},b.createElement("button",{type:"button",className:"pb-btn","data-pb-close":"",onClick:()=>t.collapse(r)},n("panel.close")),b.createElement("span",{className:"pb-foot-spacer"}),w?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",title:R,onClick:()=>t.retry(r,{locale:i()})},n("panel.another"),b.createElement("span",{className:"pb-kbd","aria-hidden":"true"},R)):null,d?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-undo":"",onClick:()=>t.undo(r)},n("undo.action")):null,c||x?b.createElement("button",{type:"button",className:"pb-btn","data-pb-retry":"",onClick:()=>t.retry(r,{locale:i()})},n("panel.retry")):null,k?b.createElement("button",{type:"button",className:"pb-btn pb-btn-primary","data-pb-retry":"",onClick:()=>t.retry(r,{locale:i()})},n("panel.retryError")):null))}function Gt({inputActions:e,store:t,t:n,locale:r,session:i}){let l=(0,V.useSyncExternalStore)(t.subscribe,()=>t.getState(e),()=>t.getState(e)),s=l.phase,a=s!=="idle"||l.undo!==null,c=l.expanded===!0&&s!=="idle";(0,V.useEffect)(()=>{let h=typeof i?.id=="string"?i.id:"";h!==""&&t.setSessionId(e,h)},[i?.id,e,t]);let x=(0,V.useRef)(null),v=(0,V.useRef)(null),d=(0,V.useRef)(null),w=(0,V.useRef)(!1),k=(0,V.useRef)(!1);return(0,V.useEffect)(()=>{if(!a)return;let h=S=>{if(!(S.defaultPrevented||c===!1)){if(S.key==="Escape"){S.preventDefault(),S.stopPropagation(),t.collapse(e);return}S.key==="Enter"&&(S.metaKey||S.ctrlKey)&&(S.preventDefault(),S.stopPropagation(),s==="applied"||s==="ready"?t.retry(e,{locale:r()}):s==="error"&&t.retry(e,{locale:r()}))}};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[a,c,s,e,t,r]),(0,V.useEffect)(()=>{if(a&&w.current===!1){w.current=!0,d.current=typeof document<"u"&&document.activeElement instanceof HTMLElement?document.activeElement:null;return}if(a===!1&&w.current){w.current=!1;let h=d.current;if(d.current=null,h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[a]),(0,V.useEffect)(()=>{if(c&&k.current===!1){k.current=!0;let h=v.current;if(h!==null&&typeof h.focus=="function")try{h.focus({preventScroll:!0})}catch{}return}if(c===!1&&k.current){k.current=!1;let h=s==="idle"?d.current:x.current;if(h==null||h.isConnected===!1||typeof h.focus!="function")return;try{h.focus({preventScroll:!0})}catch{}}},[c,s]),a?c===!1?b.createElement(Jn,{state:l,store:t,t:n,inputActions:e,chipRef:x}):b.createElement(Yn,{state:l,store:t,t:n,inputActions:e,locale:r,panelRef:v}):null}var Xt="/api/chatbox-pet/boost",Qt=4e3,Zn=12e4,Xn=24,er=8e3,en=25e3;function tn(e){return{set:typeof e?.set=="function"?e.set:(t,n)=>setTimeout(t,n),clear:typeof e?.clear=="function"?e.clear:t=>clearTimeout(t)}}function et(e){let t=typeof e=="string"?e:"";return t.length>Qt?t.slice(0,Qt):t}function Jt(){return{phase:"idle",mode:"improve",prompt:"",seed:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1}}function ve(e){return{text:typeof e?.text=="string"?e.text:"",references:Array.isArray(e?.references)?e.references.map(t=>({...t})):[]}}function Ye(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(n===null||typeof n!="object")continue;let r=typeof n.id=="string"?n.id.trim():"",i=Number(n.count);r===""||!Number.isFinite(i)||i<=0||t.push({id:r,label:typeof n.label=="string"&&n.label.trim()!==""?n.label.trim():r,count:Math.round(i)})}return t}function Se(e){return e!==null&&typeof e=="object"&&e.name==="AbortError"}function G(e,t,n){let r=new Error(typeof t=="string"&&t!==""?t:e);return r.code=e,n!==void 0&&(r.cause=n),r}function Yt(e){let t=typeof e?.code=="string"&&e.code!==""?e.code:"unknown",n=typeof e?.message=="string"&&e.message!==""&&e.message!==t?e.message:void 0;return n===void 0?{code:t}:{code:t,message:n}}function tr(e){let t=[],n=e;for(;;){let r=/(?:\r?\n){2}/.exec(n);if(r===null)break;t.push(n.slice(0,r.index)),n=n.slice(r.index+r[0].length)}return{frames:t,rest:n}}function Zt(e){let t=[];for(let n of e.split(`
`)){let r=n.trim();r===""||r.startsWith(":")||r.startsWith("data:")&&t.push(r.slice(5).trimStart())}if(t.length===0)return null;try{let n=JSON.parse(t.join(`
`));return n!==null&&typeof n=="object"&&Array.isArray(n)===!1?n:null}catch{return null}}async function Ze(e){try{return await e.json()}catch{return null}}function Xe(e,t){if(e===null||typeof e!="object")throw G("host",void 0,t);if(e.ok!==!0){let i=typeof e.error?.message=="string"?e.error.message.trim():"";throw G(typeof e.error?.code=="string"?e.error.code:"host",i===""?void 0:i)}let n=e.result,r=typeof n?.prompt=="string"?n.prompt.trim():"";if(r==="")throw G("empty");return{prompt:r,mode:n.mode==="compose"?"compose":"improve",sources:Ye(n.sources),elapsedMs:Number.isFinite(n.elapsedMs)?Math.max(0,Number(n.elapsedMs)):null,cached:n.cached===!0}}async function nr(e){let{draft:t,mode:n,locale:r,signal:i,onEvent:l,idleMs:s=en,sessionId:a=""}=e,c=a===""?{}:{sessionId:a},x=typeof e.fetch=="function"?e.fetch:globalThis.fetch,v=tn(e.timers),d=new AbortController,w=()=>d.abort();i!==void 0&&(i.aborted?d.abort():i.addEventListener("abort",w,{once:!0}));let k=!1,h=null,S=()=>{h!==null&&v.clear(h),h=v.set(()=>{k=!0,d.abort()},s)},L=!1;try{S();let f;try{f=await x(Xt,{method:"POST",headers:{"content-type":"application/json",accept:"text/event-stream"},body:JSON.stringify({method:"optimize",payload:{draft:et(t),mode:n,locale:r,stream:!0,...c}}),signal:d.signal})}catch(O){throw k?G("timeout",void 0,O):Se(O)?O:G("network",void 0,O)}if(k)throw G("timeout");if(f===null||typeof f!="object")throw G("host");if(f.ok!==!0){let O=await Ze(f);if(f.status>=400)throw G("host",void 0,f.status);let N=Xe(O,f.status);l({type:"replace",text:N.prompt}),l({type:"done",result:N});return}let A=typeof f.headers?.get=="function"?String(f.headers.get("content-type")??""):"";if(f.body===null||f.body===void 0||typeof f.body.getReader!="function"||!A.includes("text/event-stream")){let O=Xe(await Ze(f),f.status);l({type:"replace",text:O.prompt}),l({type:"done",result:O});return}let R=f.body.getReader(),F=new TextDecoder,T="";for(;!L;){let O;try{O=await R.read()}catch(D){throw k?G("timeout",void 0,D):Se(D)?D:G("stream",void 0,D)}if(O.done===!0)break;S(),T+=F.decode(O.value,{stream:!0});let N=tr(T);T=N.rest;for(let D of N.frames){let P=Zt(D);if(P!==null&&l(P)==="stop"){L=!0;break}}}if(!L){let O=T.trim();if(O!==""){let N=Zt(O);N!==null&&l(N)}}if(L)try{await R.cancel()}catch{}}finally{h!==null&&v.clear(h),i!==void 0&&i.removeEventListener("abort",w)}}async function rr(e){let{draft:t,mode:n,locale:r,signal:i,sessionId:l=""}=e,s=typeof e.fetch=="function"?e.fetch:globalThis.fetch,a;try{a=await s(Xt,{method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({method:"optimize",payload:{draft:et(t),mode:n,locale:r,stream:!1,...l===""?{}:{sessionId:l}}}),signal:i})}catch(c){throw Se(c)?c:G("network",void 0,c)}if(a===null||typeof a!="object")throw G("host");if(a.ok!==!0&&a.status>=400)throw G("host",void 0,a.status);return Xe(await Ze(a),a.status)}function or(e={}){let t=typeof e.fetch=="function"?e.fetch:void 0,n=typeof e.now=="function"?e.now:()=>Date.now(),r=tn(e.timers),i=Number.isFinite(e.idleMs)?Number(e.idleMs):en,l=Number.isFinite(e.undoMs)?Number(e.undoMs):er,s=Number.isFinite(e.cacheTtlMs)?Number(e.cacheTtlMs):Zn,a=new WeakMap,c=new WeakMap,x=new WeakMap,v=new WeakMap,d=new WeakMap,w="",k=new Set,h=new Map,S=Jt(),L=ve(null),f=null,A=0,R=0,F=null,T=null,O=()=>{for(let o of[...k])try{o()}catch(p){console.error("[prompt-boost] a store listener failed:",p)}},N=o=>o!=null&&(typeof o=="object"||typeof o=="function");function D(o){let p=N(o)?o:T;if(!N(p))return S;let g=a.get(p);return g===void 0&&(g=Jt(),a.set(p,g)),g}function P(o,p){let g=N(o)?o:T,_={...D(g),...p};return N(g)?a.set(g,_):S=_,O(),_}function E(o){let p=N(o)?o:T;return N(p)?x.get(p)??ve(null):L}function de(o){return N(o)?o:T}function Z(o){let p=N(o)?o:T;if(!N(p))return"default";let g=c.get(p);return g===void 0&&(A+=1,g=`s${A}`,c.set(p,g)),g}function J(o){return`prompt-boost-panel-${Z(o)}`}function Ne(o,p,g){return`${Z(o)}\0${p}\0${g}`}function Ce(o){let p=h.get(o);return p===void 0?null:n()-p.at>s?(h.delete(o),null):(h.delete(o),h.set(o,p),p.result)}function fe(o,p){for(h.delete(o),h.set(o,{at:n(),result:p});h.size>Xn;){let g=h.keys().next();if(g.done===!0)break;h.delete(g.value)}}function ze(){if(F===null)return;let o=F;F=null;try{o.controller.abort()}catch{}}function X(o){let p=N(o)?o:T,g=N(p)?v.get(p):f;g!=null&&r.clear(g),N(p)?v.delete(p):f=null}function se(o){X(o);let p=null;p=r.set(()=>{let z=D(o);z.undo!==null&&P(o,{undo:null,phase:z.phase==="applied"?"idle":z.phase,applied:"",prompt:z.phase==="applied"?"":z.prompt,sources:z.phase==="applied"?[]:z.sources})},l);let g=N(o)?o:T;N(g)?v.set(g,p):f=p}function ee(o,p,g){let z=de(o),_=ve(E(o)),B=!1;if(N(z)&&typeof z.setDraft=="function")try{z.setDraft({text:p.prompt,references:[]}),B=!0}catch{try{z.setDraft(p.prompt),B=!0}catch{B=!1}}if(!B){P(o,{phase:"error",mode:p.mode,prompt:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:{code:"apply"},undo:null,applied:"",expanded:!1});return}P(o,{phase:"applied",mode:p.mode,prompt:p.prompt,applied:p.prompt,sources:p.sources,elapsedMs:p.elapsedMs,cached:p.cached===!0,error:null,undo:{draft:_,at:n()},expanded:!1}),se(o),fe(g,p),K.play("boostDone")}async function be(o,p,g){let{draft:z,mode:_,locale:B,key:Y,sessionId:te}=g,le=!1,oe=!1,ce=()=>F===p&&p.controller.signal.aborted===!1,ln=I=>{if(!ce())return"stop";if(le=!0,I.type==="sources"){let W=D(o);P(o,{sources:Ye(I.sources),mode:I.mode==="compose"?"compose":W.mode});return}if(I.type==="delta"){if(typeof I.text!="string"||I.text==="")return;let W=D(o);P(o,{phase:"streaming",prompt:W.prompt+I.text});return}if(I.type==="replace"){if(typeof I.text!="string")return;let W=D(o),cn=W.phase==="ready"||I.text===""?W.phase:"streaming";P(o,{prompt:I.text,phase:cn});return}if(I.type==="done"){oe=!0;let W={prompt:typeof I.result?.prompt=="string"?I.result.prompt.trim():D(o).prompt.trim(),mode:I.result?.mode==="compose"?"compose":_,sources:Ye(I.result?.sources??D(o).sources),elapsedMs:Number.isFinite(I.result?.elapsedMs)?Math.max(0,Number(I.result.elapsedMs)):null,cached:I.result?.cached===!0};return W.prompt===""?(P(o,{phase:"error",error:{code:"empty"}}),K.play("boostFail"),"stop"):(ee(o,W,Y),"stop")}if(I.type==="error"){oe=!0;let W=typeof I.message=="string"&&I.message.trim()!==""?I.message.trim():void 0;return P(o,{phase:"error",error:W===void 0?{code:"unknown"}:{code:"host",message:W}}),"stop"}};try{if(await nr({draft:z,mode:_,locale:B,sessionId:te,signal:p.controller.signal,onEvent:ln,fetch:t,timers:r,idleMs:i}),oe)return;if(le)throw G("stream");await Me(o,p,{draft:z,mode:_,locale:B,key:Y,sessionId:te})}catch(I){if(p.controller.signal.aborted||Se(I)||!ce())return;if(le){P(o,{phase:"error",error:Yt(I)}),K.play("boostFail");return}try{await Me(o,p,{draft:z,mode:_,locale:B,key:Y,sessionId:te})}catch(W){if(p.controller.signal.aborted||Se(W)||!ce())return;P(o,{phase:"error",error:Yt(W)}),K.play("boostFail")}}finally{F===p&&(F=null)}}async function Me(o,p,g){let z=await rr({draft:g.draft,mode:g.mode,locale:g.locale,signal:p.controller.signal,fetch:t,sessionId:g.sessionId??""});F!==p||p.controller.signal.aborted||ee(o,z,g.key)}function De(o,p){let g=typeof p=="string"?p:"";g!==""&&(w=g,N(o)&&d.set(o,g))}function Ae(o){return N(o)?d.get(o)??w:w}function Re(o,p){let g=typeof p?.draft=="string"?p.draft:"",z=Array.isArray(p?.occurrences)?p.occurrences:[],_=E(o);if(_.text===g&&_.references.length===z.length)return;let B={text:g,references:z.map(te=>({...te}))},Y=N(o)?o:T;N(Y)?x.set(Y,B):L=B}function u(o,p={}){N(o)&&(T=o);let g=p.locale==="en"?"en":"zh",z=p.force===!0,_=E(o),B=et(_.text),Y=B.trim()===""?"compose":"improve",te=Ne(o,Y,B);if(ze(),X(o),!z){let ce=Ce(te);if(ce!==null){ee(o,{...ce,cached:!0},te);return}}R+=1;let le={seq:R,actions:o,controller:new AbortController};F=le;let oe=D(o);P(o,{phase:"running",mode:Y,seed:B,prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,expanded:oe.phase==="idle"&&oe.undo===null?!1:oe.expanded}),K.play("boostStart"),be(o,le,{draft:B,mode:Y,locale:g,key:te,sessionId:Ae(o)})}function y(o,p={}){u(o,{locale:p.locale,force:!0})}function C(o){let p=D(o);if(p.phase!=="ready")return!1;let g=p.prompt.trim();if(g==="")return!1;let z=de(o);if(!N(z)||typeof z.setDraft!="function")return P(o,{phase:"error",error:{code:"apply"}}),!1;let _=ve(E(o)),B=!1;try{z.setDraft({text:g,references:[]}),B=!0}catch{try{z.setDraft(g),B=!0}catch{B=!1}}return B?(X(o),P(o,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:{draft:_,at:n()},expanded:!1}),se(o),!0):(P(o,{phase:"error",error:{code:"apply"}}),!1)}function q(o){let p=D(o);if(p.undo===null)return!1;let g=de(o),z=ve(p.undo.draft),_=!1;if(N(g)&&typeof g.setDraft=="function")try{g.setDraft({text:z.text,references:z.references}),_=!0}catch{try{g.setDraft(z.text),_=!0}catch{_=!1}}return X(o),P(o,{undo:null,phase:"idle",applied:"",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,expanded:!1}),_}function $(o){D(o).expanded!==!1&&P(o,{expanded:!1})}function H(o){let p=D(o);p.phase==="idle"&&p.undo===null||p.expanded===!0||P(o,{expanded:!0})}function he(o){D(o).expanded===!0?$(o):H(o)}function me(o){let p=N(o)?o:T;F!==null&&F.actions===p&&ze(),X(o),P(o,{phase:"idle",prompt:"",sources:[],elapsedMs:null,cached:!1,error:null,undo:null,applied:"",expanded:!1})}function Fe(o,p){let g=D(o);g.phase==="streaming"&&(typeof p!="string"||p===g.prompt||P(o,{prompt:p}))}return{subscribe(o){return typeof o!="function"?()=>{}:(k.add(o),()=>{k.delete(o)})},getState:D,panelId:J,sessionKey:Z,setDraftMirror:Re,setSessionId:De,start:u,retry:y,apply:C,undo:q,expand:H,collapse:$,toggle:he,dismiss:me,edit:Fe}}var Pe=or();var nn=`
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
`;var ar="@local/chatbox-pet",an=["slots","locale"];function rn(){return(0,on.useSyncExternalStore)(Q.subscribe,Q.getSnapshot,Q.getSnapshot)}function sn(e){let t=e.locale.bind(ue),n=e.locale.bind(ke);e.effect(()=>e.locale.register(ue,{zh:it,en:st}),"chatbox-pet: dictionaries"),e.effect(()=>e.locale.register(ke,{zh:Wt,en:Kt}),"chatbox-pet: boost dictionaries"),e.effect(()=>{let s=document.querySelector('style[data-plugin="chatbox-pet"]');s!==null&&s.remove();let a=document.createElement("style");return a.setAttribute("data-plugin","chatbox-pet"),a.textContent=`${Ft}
${nn}
${Bt}`,document.head.appendChild(a),()=>{a.remove()}},"chatbox-pet: stylesheet"),e.effect(()=>{Q.refresh().then(s=>{ot(s?.sound!==!1)})},"chatbox-pet: prefs"),e.effect(()=>{let s=()=>K.unlock();return window.addEventListener("pointerdown",s,{capture:!0}),window.addEventListener("keydown",s,{capture:!0}),()=>{window.removeEventListener("pointerdown",s,{capture:!0}),window.removeEventListener("keydown",s,{capture:!0})}},"chatbox-pet: sound unlock");let r=()=>{try{return(typeof e.locale.getLocale=="function"?e.locale.getLocale():void 0)?.active==="en"?"en":"zh"}catch{return"zh"}};e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:ar,order:1,label:()=>t("label"),locale:ue,inject:s=>({sessionId:s})},s=>{if(rn().pet===!1)return null;let c=typeof s?.sessionId=="string"&&s.sessionId!==""?s.sessionId:typeof s?.session?.id=="string"?s.session.id:"";return c===""?null:re.createElement(At,{sessionId:c,t,useInput:s?.useInput,locale:r})}));let i=s=>a=>rn().boost===!1?null:s(a);e.slots.inject("conversation.input.left",()=>e.slots.register({name:"conversation.input.left",id:"@local/chatbox-pet/boost",order:2,label:()=>n("button.label"),locale:ke},i(s=>re.createElement(Ht,{...s,store:Pe,t:n,locale:r})))),e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/boost",order:10,locale:ke},i(s=>re.createElement(Gt,{...s,store:Pe,t:n,locale:r}))));function l({sessionId:s,session:a}){let c=typeof s=="string"&&s!==""?s:typeof a?.id=="string"?a.id:"";return re.useEffect(()=>{c!==""&&Pe.setSessionId(null,c)},[c]),null}e.slots.inject("conversation.input.dock",()=>e.slots.register({name:"conversation.input.dock",id:"@local/chatbox-pet/session-bridge",order:0,label:()=>t("label"),locale:ue,inject:s=>({sessionId:s})},s=>re.createElement(l,{sessionId:s?.sessionId,session:s?.session}))),e.slots.inject("settings.general.item",()=>e.slots.register({name:"settings.general.item",id:"chatbox-pet",order:30,locale:ue},()=>re.createElement(Ot,{t})))}
		return module.exports;
	}
});
