import{s as Un,m as Gn,b as z,d as nr,e as B,a as v,f as j,h as Z,S as K,c as M,i as xe,u as we,j as N,k as I,l as Ke,o as ct,P as _o,n as U,D as ys,t as _,p as It,q as an,r as k,v as A,w as bs,x as zt,y as xs,z as ws,A as xn,F as $s,B as Cs,C as Ss,E as Rt,G as ks,H as Es,I as Ms,J as rr,K as Rr,L as Ts,M as qt,$ as zo,N as Kr,O as Is,Q as As,R as _n,T as Ps,U as Ds,V as Ls}from"./production-mh5l3dac.js";var Os=e=>e!=null,qs=e=>e.filter(Os);function Fs(e){return(...t)=>{for(const n of e)n&&n(...t)}}var E=e=>typeof e=="function"&&!e.length?e():e,Vn=e=>Array.isArray(e)?e:e?[e]:[];function _s(e,...t){return typeof e=="function"?e(...t):e}var zs=U;function Rs(e,t,n,r){const o=e.length,s=t.length;let a=0;if(!s){for(;a<o;a++)n(e[a]);return}if(!o){for(;a<s;a++)r(t[a]);return}for(;a<s&&t[a]===e[a];a++);let l,i;t=t.slice(a),e=e.slice(a);for(l of t)e.includes(l)||r(l);for(i of e)t.includes(i)||n(i)}function Ks(e){const[t,n]=z(),r=e?.throw?(g,f)=>{throw n(g instanceof Error?g:new Error(f)),g}:(g,f)=>{n(g instanceof Error?g:new Error(f))},o=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),s=e?.prefix?`${e.prefix}.`:"",a=new Map,l=new Proxy({},{get(g,f){let h=a.get(f);h||(h=z(void 0,{equals:!1}),a.set(f,h)),h[0]();const p=o.reduce((m,y)=>{if(m!==null||!y)return m;try{return y.getItem(`${s}${f}`)}catch(b){return r(b,`Error reading ${s}${f} from ${y.name}`),null}},null);return p!==null&&e?.deserializer?e.deserializer(p,f,e.options):p}}),i=(g,f,h)=>{const p=e?.serializer?e.serializer(f,g,h??e.options):f,m=`${s}${g}`;o.forEach(b=>{try{b.getItem(m)!==p&&b.setItem(m,p)}catch(x){r(x,`Error setting ${s}${g} to ${p} in ${b.name}`)}});const y=a.get(g);y&&y[1]()},c=g=>o.forEach(f=>{try{f.removeItem(`${s}${g}`)}catch(h){r(h,`Error removing ${s}${g} from ${f.name}`)}}),u=()=>o.forEach(g=>{try{g.clear()}catch(f){r(f,`Error clearing ${g.name}`)}}),d=()=>{const g={},f=(h,p)=>{if(!g.hasOwnProperty(h)){const m=p&&e?.deserializer?e.deserializer(p,h,e.options):p;m&&(g[h]=m)}};return o.forEach(h=>{if(typeof h.getAll=="function"){let p;try{p=h.getAll()}catch(m){r(m,`Error getting all values from in ${h.name}`)}for(const m of p)f(m,p[m])}else{let p=0,m;try{for(;m=h.key(p++);)g.hasOwnProperty(m)||f(m,h.getItem(m))}catch(y){r(y,`Error getting all values from ${h.name}`)}}}),g};return e?.sync!==!1&&It(()=>{const g=f=>{let h=!1;o.forEach(p=>{try{p!==f.storageArea&&f.key&&f.newValue!==p.getItem(f.key)&&(f.newValue?p.setItem(f.key,f.newValue):p.removeItem(f.key),h=!0)}catch(m){r(m,`Error synching api ${p.name} from storage event (${f.key}=${f.newValue})`)}}),h&&f.key&&a.get(f.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",g),U(()=>globalThis.removeEventListener("storage",g))):(o.forEach(f=>f.addEventListener?.("storage",g)),U(()=>o.forEach(f=>f.removeEventListener?.("storage",g))))}),[l,i,{clear:u,error:t,remove:c,toJSON:d}]}var Jd=Ks,Bs=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),Br=e=>{if(!e)return"";let t="";for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r=="boolean"?`; ${n}`:`; ${n}=${r}`}return t},qe=Bs({_cookies:[globalThis.document,"cookie"],getItem:e=>qe._cookies[0][qe._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,t,n)=>{const r=qe.getItem(e);qe._cookies[0][qe._cookies[1]]=`${e}=${t}${Br(n)}`;const o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:qe});window.dispatchEvent(o)},removeItem:e=>{qe._cookies[0][qe._cookies[1]]=`${e}=deleted${Br({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return qe._cookies[0][qe._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,o)=>(!t&&o&&n++===e&&(t=o),"")),t},get length(){let e=0;return qe._cookies[0][qe._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,"")),e}}),Ns=1024,Et=796,or=700,Us="bottom-right",Hn="bottom",ef="system",Gs=!1,Ro=500,Vs=500,Ko=500,Hs=Object.keys(Un)[0],Nr=1,js=Object.keys(Gn)[0],Ws=xe({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function R(){return we(Ws)}var Bo=xe(void 0),tf=e=>{const[t,n]=z(null),r=()=>{const a=t();a!=null&&(a.close(),n(null))},o=(a,l)=>{if(t()!=null)return;const i=window.open("","TSQD-Devtools-Panel",`width=${a},height=${l},popup`);if(!i)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");i.document.head.innerHTML="",i.document.body.innerHTML="",Ss(i.document),i.document.title="TanStack Query Devtools",i.document.body.style.margin="0",i.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),n(null)}),[...(R().shadowDOMTarget||document).styleSheets].forEach(c=>{try{const u=[...c.cssRules].map(h=>h.cssText).join(""),d=document.createElement("style"),g=c.ownerNode;let f="";g&&"id"in g&&(f=g.id),f&&d.setAttribute("id",f),d.textContent=u,i.document.head.appendChild(d)}catch{const d=document.createElement("link");if(c.href==null)return;d.rel="stylesheet",d.type=c.type,d.media=c.media.toString(),d.href=c.href,i.document.head.appendChild(d)}}),nr(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],i.document),e.setLocalStore("pip_open","true"),n(i)};B(()=>{(e.localStore.pip_open??"false")==="true"&&!e.disabled&&o(Number(window.innerWidth),Number(e.localStore.height||Vs))}),B(()=>{const a=(R().shadowDOMTarget||document).querySelector("#_goober"),l=t();if(a&&l){const i=new MutationObserver(()=>{const c=(R().shadowDOMTarget||l.document).querySelector("#_goober");c&&(c.textContent=a.textContent)});i.observe(a,{childList:!0,subtree:!0,characterDataOldValue:!0}),U(()=>{i.disconnect()})}});const s=M(()=>({pipWindow:t(),requestPipWindow:o,closePipWindow:r,disabled:e.disabled??!1}));return v(Bo.Provider,{value:s,get children(){return e.children}})},ir=()=>M(()=>{const t=we(Bo);if(!t)throw new Error("usePiPWindow must be used within a PiPProvider");return t()}),Qs=xe(()=>"dark");function ye(){return we(Qs)}var No={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Ys=Object.keys(No).join("|"),Xs=new RegExp(Ys,"g");function Zs(e){return e.replace(Xs,t=>No[t])}var Ie={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Ur(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:Ie.MATCHES,!n.accessors){const a=Gr(e,t,n);return{rankedValue:e,rank:a,accessorIndex:-1,accessorThreshold:n.threshold,passed:a>=n.threshold}}const o=na(e,n.accessors),s={rankedValue:e,rank:Ie.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let a=0;a<o.length;a++){const l=o[a];let i=Gr(l.itemValue,t,n);const{minRanking:c,maxRanking:u,threshold:d=n.threshold}=l.attributes;i<c&&i>=Ie.MATCHES?i=c:i>u&&(i=u),i=Math.min(i,u),i>=d&&i>s.rank&&(s.rank=i,s.passed=!0,s.accessorIndex=a,s.accessorThreshold=d,s.rankedValue=l.itemValue)}return s}function Gr(e,t,n){return e=Vr(e,n),t=Vr(t,n),t.length>e.length?Ie.NO_MATCH:e===t?Ie.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Ie.EQUAL:e.startsWith(t)?Ie.STARTS_WITH:e.includes(` ${t}`)?Ie.WORD_STARTS_WITH:e.includes(t)?Ie.CONTAINS:t.length===1?Ie.NO_MATCH:Js(e).includes(t)?Ie.ACRONYM:ea(e,t))}function Js(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(s=>{t+=s.substr(0,1)})}),t}function ea(e,t){let n=0,r=0;function o(i,c,u){for(let d=u,g=c.length;d<g;d++)if(c[d]===i)return n+=1,d+1;return-1}function s(i){const c=1/i,u=n/t.length;return Ie.MATCHES+u*c}const a=o(t[0],e,0);if(a<0)return Ie.NO_MATCH;r=a;for(let i=1,c=t.length;i<c;i++){const u=t[i];if(r=o(u,e,r),!(r>-1))return Ie.NO_MATCH}const l=r-a;return s(l)}function Vr(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=Zs(e)),e}function ta(e,t){let n=t;typeof t=="object"&&(n=t.accessor);const r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function na(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const s=t[r],a=ra(s),l=ta(e,s);for(let i=0,c=l.length;i<c;i++)n.push({itemValue:l[i],attributes:a})}return n}var Hr={maxRanking:1/0,minRanking:-1/0};function ra(e){return typeof e=="function"?Hr:{...Hr,...e}}var oa={data:""},ia=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||oa,sa=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,aa=/\/\*[^]*?\*\/|  +/g,jr=/\n+/g,kt=(e,t)=>{let n="",r="",o="";for(let s in e){let a=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+a+";":r+=s[1]=="f"?kt(a,s):s+"{"+kt(a,s[1]=="k"?"":t)+"}":typeof a=="object"?r+=kt(a,t?t.replace(/([^,])+/g,l=>s.replace(/(^:.*)|([^,])+/g,i=>/&/.test(i)?i.replace(/&/g,l):l?l+" "+i:i)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=kt.p?kt.p(s,a):s+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+r},st={},Uo=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Uo(e[n]);return t}return e},la=(e,t,n,r,o)=>{let s=Uo(e),a=st[s]||(st[s]=(i=>{let c=0,u=11;for(;c<i.length;)u=101*u+i.charCodeAt(c++)>>>0;return"go"+u})(s));if(!st[a]){let i=s!==e?e:(c=>{let u,d,g=[{}];for(;u=sa.exec(c.replace(aa,""));)u[4]?g.shift():u[3]?(d=u[3].replace(jr," ").trim(),g.unshift(g[0][d]=g[0][d]||{})):g[0][u[1]]=u[2].replace(jr," ").trim();return g[0]})(e);st[a]=kt(o?{["@keyframes "+a]:i}:i,n?"":"."+a)}let l=n&&st.g?st.g:null;return n&&(st.g=st[a]),((i,c,u,d)=>{d?c.data=c.data.replace(d,i):c.data.indexOf(i)===-1&&(c.data=u?i+c.data:c.data+i)})(st[a],t,r,l),a},ca=(e,t,n)=>e.reduce((r,o,s)=>{let a=t[s];if(a&&a.call){let l=a(n),i=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=i?"."+i:l&&typeof l=="object"?l.props?"":kt(l,""):l===!1?"":l}return r+o+(a??"")},"");function W(e){let t=this||{},n=e.call?e(t.p):e;return la(n.unshift?n.raw?ca(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,ia(t.target),t.g,t.o,t.k)}W.bind({g:1});W.bind({k:1});function Go(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Go(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function q(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Go(e))&&(r&&(r+=" "),r+=t);return r}var Wr=()=>{};function ua(e,t){const n=Rt(e),{onChange:r}=t;let o=new Set(t.appear?void 0:n);const s=new WeakSet,[a,l]=z([],{equals:!1}),[i]=Ls(),c=t.exitMethod==="remove"?Wr:d=>{l(g=>(g.push.apply(g,d),g));for(const g of d)s.delete(g)},u=t.exitMethod==="remove"?Wr:t.exitMethod==="keep-index"?(d,g,f)=>d.splice(f,0,g):(d,g)=>d.push(g);return M(d=>{const g=a(),f=e();if(f[zo],Rt(i))return i(),d;if(g.length){const h=d.filter(p=>!g.includes(p));return g.length=0,r({list:h,added:[],removed:[],unchanged:h,finishRemoved:c}),h}return Rt(()=>{const h=new Set(f),p=f.slice(),m=[],y=[],b=[];for(const w of f)(o.has(w)?b:m).push(w);let x=!m.length;for(let w=0;w<d.length;w++){const $=d[w];h.has($)||(s.has($)||(y.push($),s.add($)),u(p,$,w)),x&&$!==p[w]&&(x=!1)}return!y.length&&x?d:(r({list:p,added:m,removed:y,unchanged:b,finishRemoved:c}),o=h,p)})},t.appear?[]:n.slice())}function Me(...e){return Fs(e)}var Qr=e=>e instanceof Element;function jn(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return jn(e(),t);if(Array.isArray(e)){const n=[];for(const r of e){const o=jn(r,t);o&&(Array.isArray(o)?n.push.apply(n,o):n.push(o))}return n.length?n:null}return null}function da(e,t=Qr,n=Qr){const r=M(e),o=M(()=>jn(r(),t));return o.toArray=()=>{const s=o();return Array.isArray(s)?s:s?[s]:[]},o}function fa(e){return M(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Vo(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function ga(e,t,n,r){const{onBeforeEnter:o,onEnter:s,onAfterEnter:a}=t;o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();s?.(n,()=>l())}),Vo(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!s||s.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))});function l(i){(!i||i.target===n)&&(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),a?.(n))}}function ha(e,t,n,r){const{onBeforeExit:o,onExit:s,onAfterExit:a}=t;if(!n.parentNode)return r?.();o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),s?.(n,()=>l()),Vo(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!s||s.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))});function l(i){(!i||i.target===n)&&(r?.(),n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),a?.(n))}}var Yr=e=>{const t=fa(e);return ua(da(()=>e.children).toArray,{appear:e.appear,exitMethod:"keep-index",onChange({added:n,removed:r,finishRemoved:o,list:s}){const a=t();for(const i of n)ga(a,e,i);const l=[];for(const i of s)i.isConnected&&(i instanceof HTMLElement||i instanceof SVGElement)&&l.push({el:i,rect:i.getBoundingClientRect()});queueMicrotask(()=>{const i=[];for(const{el:c,rect:u}of l)if(c.isConnected){const d=c.getBoundingClientRect(),g=u.left-d.left,f=u.top-d.top;(g||f)&&(c.style.transform=`translate(${g}px, ${f}px)`,c.style.transitionDuration="0s",i.push(c))}document.body.offsetHeight;for(const c of i){let u=function(d){(d.target===c||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",u),c.classList.remove(...a.move))};c.classList.add(...a.move),c.style.transform=c.style.transitionDuration="",c.addEventListener("transitionend",u)}});for(const i of r)ha(a,e,i,()=>o([i]))}})},zn=Symbol("fallback");function Xr(e){for(const t of e)t.dispose()}function va(e,t,n,r={}){const o=new Map;return U(()=>Xr(o.values())),()=>{const a=e()||[];return a[zo],Rt(()=>{if(!a.length)return Xr(o.values()),o.clear(),r.fallback?[Kr(d=>(o.set(zn,{dispose:d}),r.fallback()))]:[];const l=new Array(a.length),i=o.get(zn);if(!o.size||i){i?.dispose(),o.delete(zn);for(let u=0;u<a.length;u++){const d=a[u],g=t(d,u);s(l,d,u,g)}return l}const c=new Set(o.keys());for(let u=0;u<a.length;u++){const d=a[u],g=t(d,u);c.delete(g);const f=o.get(g);f?(l[u]=f.mapped,f.setIndex?.(u),f.setItem(()=>d)):s(l,d,u,g)}for(const u of c)o.get(u)?.dispose(),o.delete(u);return l})};function s(a,l,i,c){Kr(u=>{const[d,g]=z(l),f={setItem:g,dispose:u};if(n.length>1){const[h,p]=z(i);f.setIndex=p,f.mapped=n(d,h)}else f.mapped=n(d);o.set(c,f),a[i]=f.mapped})}}function wn(e){const{by:t}=e;return M(va(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function pa(e,t,n,r){return e.addEventListener(t,n,r),zs(e.removeEventListener.bind(e,t,n,r))}function ma(e,t,n,r){const o=()=>{Vn(E(e)).forEach(s=>{s&&Vn(E(t)).forEach(a=>pa(s,a,n,r))})};typeof e=="function"?B(o):N(o)}function ya(e,t){const n=new ResizeObserver(e);return U(n.disconnect.bind(n)),{observe:r=>n.observe(r,t),unobserve:n.unobserve.bind(n)}}function Ho(e,t,n){const r=new WeakMap,{observe:o,unobserve:s}=ya(a=>{for(const l of a){const{contentRect:i,target:c}=l,u=Math.round(i.width),d=Math.round(i.height),g=r.get(c);(!g||g.width!==u||g.height!==d)&&(t(i,c,l),r.set(c,{width:u,height:d}))}},n);B(a=>{const l=qs(Vn(E(e)));return Rs(l,a,o,s),l},[])}var ba=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Zr(e){const t={};let n;for(;n=ba.exec(e);)t[n[1]]=n[2];return t}function Tn(e,t){if(typeof e=="string"){if(typeof t=="string")return`${e};${t}`;e=Zr(e)}else typeof t=="string"&&(t=Zr(t));return{...e,...t}}function xa(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function Wn(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function wa(e){return typeof e=="number"}function Ft(e){return Object.prototype.toString.call(e)==="[object String]"}function $a(e){return typeof e=="function"}function ln(e){return t=>`${e()}-${t}`}function ze(e,t){return e?e===t||e.contains(t):!1}function Jt(e,t=!1){const{activeElement:n}=Xe(e);if(!n?.nodeName)return null;if(jo(n)&&n.contentDocument)return Jt(n.contentDocument.body,t);if(t){const r=n.getAttribute("aria-activedescendant");if(r){const o=Xe(n).getElementById(r);if(o)return o}}return n}function Ca(e){return Xe(e).defaultView||window}function Xe(e){return e?e.ownerDocument||e:document}function jo(e){return e.tagName==="IFRAME"}var sr=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(sr||{});function ar(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function In(){return ar(/^Mac/i)}function Sa(){return ar(/^iPhone/i)}function ka(){return ar(/^iPad/i)||In()&&navigator.maxTouchPoints>1}function Ea(){return Sa()||ka()}function Ma(){return In()||Ea()}function ue(e,t){return t&&($a(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function me(e){return t=>{for(const n of e)ue(t,n)}}function Ta(e){return In()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function Se(e){if(e)if(Ia())e.focus({preventScroll:!0});else{const t=Aa(e);e.focus(),Pa(t)}}var mn=null;function Ia(){if(mn==null){mn=!1;try{document.createElement("div").focus({get preventScroll(){return mn=!0,!0}})}catch{}}return mn}function Aa(e){let t=e.parentNode;const n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function Pa(e){for(const{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var Wo=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Da=[...Wo,'[tabindex]:not([tabindex="-1"]):not([disabled])'],lr=Wo.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",La=Da.join(':not([hidden]):not([tabindex="-1"]),');function Qo(e,t){const r=Array.from(e.querySelectorAll(lr)).filter(Jr);return t&&Jr(e)&&r.unshift(e),r.forEach((o,s)=>{if(jo(o)&&o.contentDocument){const a=o.contentDocument.body,l=Qo(a,!1);r.splice(s,1,...l)}}),r}function Jr(e){return Yo(e)&&!Oa(e)}function Yo(e){return e.matches(lr)&&cr(e)}function Oa(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function cr(e,t){return e.nodeName!=="#comment"&&qa(e)&&Fa(e,t)&&(!e.parentElement||cr(e.parentElement,e))}function qa(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;const{display:t,visibility:n}=e.style;let r=t!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!e.ownerDocument.defaultView)return r;const{getComputedStyle:o}=e.ownerDocument.defaultView,{display:s,visibility:a}=o(e);r=s!=="none"&&a!=="hidden"&&a!=="collapse"}return r}function Fa(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function _a(e,t,n){const r=t?.tabbable?La:lr,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(s){return t?.from?.contains(s)?NodeFilter.FILTER_REJECT:s.matches(r)&&cr(s)&&!n&&(!t?.accept||t.accept(s))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(o.currentNode=t.from),o}function eo(e){for(;e&&!za(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function za(e){const t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function Ra(){}function Ka(e,t){const[n,r]=e;let o=!1;const s=t.length;for(let a=s,l=0,i=a-1;l<a;i=l++){const[c,u]=t[l],[d,g]=t[i],[,f]=t[i===0?a-1:i-1]||[0,0],h=(u-g)*(n-c)-(c-d)*(r-u);if(g<u){if(r>=g&&r<u){if(h===0)return!0;h>0&&(r===g?r>f&&(o=!o):o=!o)}}else if(u<g){if(r>u&&r<=g){if(h===0)return!0;h<0&&(r===g?r<f&&(o=!o):o=!o)}}else if(r==u&&(n>=d&&n<=c||n>=c&&n<=d))return!0}return o}function Q(e,t){return j(e,t)}var Yt=new Map,to=new Set;function no(){if(typeof window>"u")return;const e=n=>{if(!n.target)return;let r=Yt.get(n.target);r||(r=new Set,Yt.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{if(!n.target)return;const r=Yt.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),Yt.delete(n.target)),Yt.size===0)){for(const o of to)o();to.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?no():document.addEventListener("DOMContentLoaded",no));function Qn(e,t){const n=ro(e,t,"left"),r=ro(e,t,"top"),o=t.offsetWidth,s=t.offsetHeight;let a=e.scrollLeft,l=e.scrollTop;const i=a+e.offsetWidth,c=l+e.offsetHeight;n<=a?a=n:n+o>i&&(a+=n+o-i),r<=l?l=r:r+s>c&&(l+=r+s-c),e.scrollLeft=a,e.scrollTop=l}function ro(e,t,n){const r=n==="left"?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Ba(e,t){if(document.contains(e)){const n=document.scrollingElement||document.documentElement;if(window.getComputedStyle(n).overflow==="hidden"){let o=eo(e);for(;e&&o&&e!==n&&o!==n;)Qn(o,e),e=o,o=eo(e)}else{const{left:o,top:s}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});const{left:a,top:l}=e.getBoundingClientRect();(Math.abs(o-a)>1||Math.abs(s-l)>1)&&e.scrollIntoView?.({block:"nearest"})}}}var Xo={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Re(e){return t=>(e(t),()=>e(void 0))}function An(e,t){const[n,r]=z(oo(t?.()));return B(()=>{r(e()?.tagName.toLowerCase()||oo(t?.()))}),n}function oo(e){return Ft(e)?e:void 0}function de(e){const[t,n]=Z(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return v(ys,j(n,{get component(){return t.as}}))}var Na=["id","name","validationState","required","disabled","readOnly"];function Ua(e){const t=`form-control-${Ke()}`,n=Q({id:t},e),[r,o]=z(),[s,a]=z(),[l,i]=z(),[c,u]=z(),d=(p,m,y)=>{const b=y!=null||r()!=null;return[y,r(),b&&m!=null?p:void 0].filter(Boolean).join(" ")||void 0},g=p=>[l(),c(),p].filter(Boolean).join(" ")||void 0,f=M(()=>({"data-valid":E(n.validationState)==="valid"?"":void 0,"data-invalid":E(n.validationState)==="invalid"?"":void 0,"data-required":E(n.required)?"":void 0,"data-disabled":E(n.disabled)?"":void 0,"data-readonly":E(n.readOnly)?"":void 0}));return{formControlContext:{name:()=>E(n.name)??E(n.id),dataset:f,validationState:()=>E(n.validationState),isRequired:()=>E(n.required),isDisabled:()=>E(n.disabled),isReadOnly:()=>E(n.readOnly),labelId:r,fieldId:s,descriptionId:l,errorMessageId:c,getAriaLabelledBy:d,getAriaDescribedBy:g,generateId:ln(()=>E(n.id)),registerLabel:Re(o),registerField:Re(a),registerDescription:Re(i),registerErrorMessage:Re(u)}}}var Zo=xe();function cn(){const e=we(Zo);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function Jo(e){const t=cn(),n=Q({id:t.generateId("description")},e);return B(()=>U(t.registerDescription(n.id))),v(de,j({as:"div"},()=>t.dataset(),n))}function ei(e){const t=cn(),n=Q({id:t.generateId("error-message")},e),[r,o]=Z(n,["forceMount"]),s=()=>t.validationState()==="invalid";return B(()=>{s()&&U(t.registerErrorMessage(o.id))}),v(K,{get when(){return r.forceMount||s()},get children(){return v(de,j({as:"div"},()=>t.dataset(),o))}})}function Ga(e){let t;const n=cn(),r=Q({id:n.generateId("label")},e),[o,s]=Z(r,["ref"]),a=An(()=>t,()=>"label");return B(()=>U(n.registerLabel(s.id))),v(de,j({as:"label",ref(l){const i=Me(c=>t=c,o.ref);typeof i=="function"&&i(l)},get for(){return M(()=>a()==="label")()?n.fieldId():void 0}},()=>n.dataset(),s))}function Va(e,t){B(ct(e,n=>{if(n==null)return;const r=Ha(n);r!=null&&(r.addEventListener("reset",t,{passive:!0}),U(()=>{r.removeEventListener("reset",t)}))}))}function Ha(e){return ja(e)?e.form:e.closest("form")}function ja(e){return e.matches("textarea, input, select, button")}function un(e){const[t,n]=z(e.defaultValue?.()),r=M(()=>e.value?.()!==void 0),o=M(()=>r()?e.value?.():t());return[o,a=>{Rt(()=>{const l=_s(a,o());return Object.is(l,o())||(r()||n(l),e.onChange?.(l)),l})}]}function ti(e){const[t,n]=un(e);return[()=>t()??!1,n]}function Wa(e){const[t,n]=un(e);return[()=>t()??[],n]}function Qa(e={}){const[t,n]=ti({value:()=>E(e.isSelected),defaultValue:()=>!!E(e.defaultIsSelected),onChange:s=>e.onSelectedChange?.(s)});return{isSelected:t,setIsSelected:s=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(s)},toggle:()=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(!t())}}}var Ya=Object.defineProperty,Pn=(e,t)=>{for(var n in t)Ya(e,n,{get:t[n],enumerable:!0})},ni=xe();function ri(){return we(ni)}function Xa(){const e=ri();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function oi(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function Za(e,t){const n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){const o=e[r]?.ref();if(o&&oi(o,n))return r+1}return 0}function Ja(e){const t=e.map((r,o)=>[o,r]);let n=!1;return t.sort(([r,o],[s,a])=>{const l=o.ref(),i=a.ref();return l===i||!l||!i?0:oi(l,i)?(r>s&&(n=!0),-1):(r<s&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function ii(e,t){const n=Ja(e);e!==n&&t(n)}function el(e){const t=e[0],n=e[e.length-1]?.ref();let r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return Xe(r).body}function tl(e,t){B(()=>{const n=setTimeout(()=>{ii(e(),t)});U(()=>clearTimeout(n))})}function nl(e,t){if(typeof IntersectionObserver!="function"){tl(e,t);return}let n=[];B(()=>{const r=()=>{const a=!!n.length;n=e(),a&&ii(e(),t)},o=el(e()),s=new IntersectionObserver(r,{root:o});for(const a of e()){const l=a.ref();l&&s.observe(l)}U(()=>s.disconnect())})}function rl(e={}){const[t,n]=Wa({value:()=>E(e.items),onChange:s=>e.onItemsChange?.(s)});nl(t,n);const r=s=>(n(a=>{const l=Za(a,s);return xa(a,s,l)}),()=>{n(a=>{const l=a.filter(i=>i.ref()!==s.ref());return a.length===l.length?a:l})});return{DomCollectionProvider:s=>v(ni.Provider,{value:{registerItem:r},get children(){return s.children}})}}function ol(e){const t=Xa(),n=Q({shouldRegisterItem:!0},e);B(()=>{if(!n.shouldRegisterItem)return;const r=t.registerItem(n.getItem());U(r)})}function si(e){let t=e.startIndex??0;const n=e.startLevel??0,r=[],o=i=>{if(i==null)return"";const c=e.getKey??"key",u=Ft(c)?i[c]:c(i);return u!=null?String(u):""},s=i=>{if(i==null)return"";const c=e.getTextValue??"textValue",u=Ft(c)?i[c]:c(i);return u!=null?String(u):""},a=i=>{if(i==null)return!1;const c=e.getDisabled??"disabled";return(Ft(c)?i[c]:c(i))??!1},l=i=>{if(i!=null)return Ft(e.getSectionChildren)?i[e.getSectionChildren]:e.getSectionChildren?.(i)};for(const i of e.dataSource){if(Ft(i)||wa(i)){r.push({type:"item",rawValue:i,key:String(i),textValue:String(i),disabled:a(i),level:n,index:t}),t++;continue}if(l(i)!=null){r.push({type:"section",rawValue:i,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;const c=l(i)??[];if(c.length>0){const u=si({dataSource:c,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...u),t+=u.length}}else r.push({type:"item",rawValue:i,key:o(i),textValue:s(i),disabled:a(i),level:n,index:t}),t++}return r}function il(e,t=[]){return M(()=>{const n=si({dataSource:E(e.dataSource),getKey:E(e.getKey),getTextValue:E(e.getTextValue),getDisabled:E(e.getDisabled),getSectionChildren:E(e.getSectionChildren)});for(let r=0;r<t.length;r++)t[r]();return e.factory(n)})}var sl=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),al=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function ll(e){if(Intl.Locale){const n=new Intl.Locale(e).maximize().script??"";return sl.has(n)}const t=e.split("-")[0];return al.has(t)}function cl(e){return ll(e)?"rtl":"ltr"}function ai(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:cl(e)}}var Yn=ai(),en=new Set;function io(){Yn=ai();for(const e of en)e(Yn)}function ul(){const[e,t]=z(Yn),n=M(()=>e());return It(()=>{en.size===0&&window.addEventListener("languagechange",io),en.add(t),U(()=>{en.delete(t),en.size===0&&window.removeEventListener("languagechange",io)})}),{locale:()=>n().locale,direction:()=>n().direction}}var dl=xe();function wt(){const e=ul();return we(dl)||e}var Rn=new Map;function fl(e){const{locale:t}=wt(),n=M(()=>t()+(e?Object.entries(e).sort((r,o)=>r[0]<o[0]?-1:1).join():""));return M(()=>{const r=n();let o;return Rn.has(r)&&(o=Rn.get(r)),o||(o=new Intl.Collator(t(),e),Rn.set(r,o)),o})}var at=class li extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof li?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function gl(e){const[t,n]=un(e);return[()=>t()??new at,n]}function ci(e){return Ma()?e.altKey:e.ctrlKey}function _t(e){return In()?e.metaKey:e.ctrlKey}function so(e){return new at(e)}function hl(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function vl(e){const t=Q({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=z(!1),[o,s]=z(),a=M(()=>{const p=E(t.selectedKeys);return p!=null?so(p):p}),l=M(()=>{const p=E(t.defaultSelectedKeys);return p!=null?so(p):new at}),[i,c]=gl({value:a,defaultValue:l,onChange:p=>t.onSelectionChange?.(p)}),[u,d]=z(E(t.selectionBehavior)),g=()=>E(t.selectionMode),f=()=>E(t.disallowEmptySelection)??!1,h=p=>{(E(t.allowDuplicateSelectionEvents)||!hl(p,i()))&&c(p)};return B(()=>{const p=i();E(t.selectionBehavior)==="replace"&&u()==="toggle"&&typeof p=="object"&&p.size===0&&d("replace")}),B(()=>{d(E(t.selectionBehavior)??"toggle")}),{selectionMode:g,disallowEmptySelection:f,selectionBehavior:u,setSelectionBehavior:d,isFocused:n,setFocused:r,focusedKey:o,setFocusedKey:s,selectedKeys:i,setSelectedKeys:h}}function pl(e){const[t,n]=z(""),[r,o]=z(-1);return{typeSelectHandlers:{onKeyDown:a=>{if(E(e.isDisabled))return;const l=E(e.keyboardDelegate),i=E(e.selectionManager);if(!l.getKeyForSearch)return;const c=ml(a.key);if(!c||a.ctrlKey||a.metaKey)return;c===" "&&t().trim().length>0&&(a.preventDefault(),a.stopPropagation());let u=n(g=>g+c),d=l.getKeyForSearch(u,i.focusedKey())??l.getKeyForSearch(u);d==null&&yl(u)&&(u=u[0],d=l.getKeyForSearch(u,i.focusedKey())??l.getKeyForSearch(u)),d!=null&&(i.setFocusedKey(d),e.onTypeSelect?.(d)),clearTimeout(r()),o(window.setTimeout(()=>n(""),500))}}}}function ml(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function yl(e){return e.split("").every(t=>t===e[0])}function bl(e,t,n){const o=j({selectOnFocus:()=>E(e.selectionManager).selectionBehavior()==="replace"},e),s=()=>t(),{direction:a}=wt();let l={top:0,left:0};ma(()=>E(o.isVirtualized)?void 0:s(),"scroll",()=>{const m=s();m&&(l={top:m.scrollTop,left:m.scrollLeft})});const{typeSelectHandlers:i}=pl({isDisabled:()=>E(o.disallowTypeAhead),keyboardDelegate:()=>E(o.keyboardDelegate),selectionManager:()=>E(o.selectionManager)}),c=()=>E(o.orientation)??"vertical",u=m=>{ue(m,i.onKeyDown),m.altKey&&m.key==="Tab"&&m.preventDefault();const y=t();if(!y?.contains(m.target))return;const b=E(o.selectionManager),x=E(o.selectOnFocus),w=L=>{L!=null&&(b.setFocusedKey(L),m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):x&&!ci(m)&&b.replaceSelection(L))},$=E(o.keyboardDelegate),O=E(o.shouldFocusWrap),P=b.focusedKey();switch(m.key){case(c()==="vertical"?"ArrowDown":"ArrowRight"):{if($.getKeyBelow){m.preventDefault();let L;P!=null?L=$.getKeyBelow(P):L=$.getFirstKey?.(),L==null&&O&&(L=$.getFirstKey?.(P)),w(L)}break}case(c()==="vertical"?"ArrowUp":"ArrowLeft"):{if($.getKeyAbove){m.preventDefault();let L;P!=null?L=$.getKeyAbove(P):L=$.getLastKey?.(),L==null&&O&&(L=$.getLastKey?.(P)),w(L)}break}case(c()==="vertical"?"ArrowLeft":"ArrowUp"):{if($.getKeyLeftOf){m.preventDefault();const L=a()==="rtl";let S;P!=null?S=$.getKeyLeftOf(P):S=L?$.getFirstKey?.():$.getLastKey?.(),w(S)}break}case(c()==="vertical"?"ArrowRight":"ArrowDown"):{if($.getKeyRightOf){m.preventDefault();const L=a()==="rtl";let S;P!=null?S=$.getKeyRightOf(P):S=L?$.getLastKey?.():$.getFirstKey?.(),w(S)}break}case"Home":if($.getFirstKey){m.preventDefault();const L=$.getFirstKey(P,_t(m));L!=null&&(b.setFocusedKey(L),_t(m)&&m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):x&&b.replaceSelection(L))}break;case"End":if($.getLastKey){m.preventDefault();const L=$.getLastKey(P,_t(m));L!=null&&(b.setFocusedKey(L),_t(m)&&m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):x&&b.replaceSelection(L))}break;case"PageDown":if($.getKeyPageBelow&&P!=null){m.preventDefault();const L=$.getKeyPageBelow(P);w(L)}break;case"PageUp":if($.getKeyPageAbove&&P!=null){m.preventDefault();const L=$.getKeyPageAbove(P);w(L)}break;case"a":_t(m)&&b.selectionMode()==="multiple"&&E(o.disallowSelectAll)!==!0&&(m.preventDefault(),b.selectAll());break;case"Escape":m.defaultPrevented||(m.preventDefault(),E(o.disallowEmptySelection)||b.clearSelection());break;case"Tab":if(!E(o.allowsTabNavigation)){if(m.shiftKey)y.focus();else{const L=_a(y,{tabbable:!0});let S,F;do F=L.lastChild(),F&&(S=F);while(F);S&&!S.contains(document.activeElement)&&Se(S)}break}}},d=m=>{const y=E(o.selectionManager),b=E(o.keyboardDelegate),x=E(o.selectOnFocus);if(y.isFocused()){m.currentTarget.contains(m.target)||y.setFocused(!1);return}if(m.currentTarget.contains(m.target)){if(y.setFocused(!0),y.focusedKey()==null){const w=O=>{O!=null&&(y.setFocusedKey(O),x&&y.replaceSelection(O))},$=m.relatedTarget;$&&m.currentTarget.compareDocumentPosition($)&Node.DOCUMENT_POSITION_FOLLOWING?w(y.lastSelectedKey()??b.getLastKey?.()):w(y.firstSelectedKey()??b.getFirstKey?.())}else if(!E(o.isVirtualized)){const w=s();if(w){w.scrollTop=l.top,w.scrollLeft=l.left;const $=w.querySelector(`[data-key="${y.focusedKey()}"]`);$&&(Se($),Qn(w,$))}}}},g=m=>{const y=E(o.selectionManager);m.currentTarget.contains(m.relatedTarget)||y.setFocused(!1)},f=m=>{s()===m.target&&m.preventDefault()},h=()=>{const m=E(o.autoFocus);if(!m)return;const y=E(o.selectionManager),b=E(o.keyboardDelegate);let x;m==="first"&&(x=b.getFirstKey?.()),m==="last"&&(x=b.getLastKey?.());const w=y.selectedKeys();w.size&&(x=w.values().next().value),y.setFocused(!0),y.setFocusedKey(x);const $=t();$&&x==null&&!E(o.shouldUseVirtualFocus)&&Se($)};return It(()=>{o.deferAutoFocus?setTimeout(h,0):h()}),B(ct([s,()=>E(o.isVirtualized),()=>E(o.selectionManager).focusedKey()],m=>{const[y,b,x]=m;if(b)x&&o.scrollToKey?.(x);else if(x&&y){const w=y.querySelector(`[data-key="${x}"]`);w&&Qn(y,w)}})),{tabIndex:M(()=>{if(!E(o.shouldUseVirtualFocus))return E(o.selectionManager).focusedKey()==null?0:-1}),onKeyDown:u,onMouseDown:f,onFocusIn:d,onFocusOut:g}}function ui(e,t){const n=()=>E(e.selectionManager),r=()=>E(e.key),o=()=>E(e.shouldUseVirtualFocus),s=b=>{n().selectionMode()!=="none"&&(n().selectionMode()==="single"?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):b?.shiftKey?n().extendSelection(r()):n().selectionBehavior()==="toggle"||_t(b)||"pointerType"in b&&b.pointerType==="touch"?n().toggleSelection(r()):n().replaceSelection(r()))},a=()=>n().isSelected(r()),l=()=>E(e.disabled)||n().isDisabled(r()),i=()=>!l()&&n().canSelectItem(r());let c=null;const u=b=>{i()&&(c=b.pointerType,b.pointerType==="mouse"&&b.button===0&&!E(e.shouldSelectOnPressUp)&&s(b))},d=b=>{i()&&b.pointerType==="mouse"&&b.button===0&&E(e.shouldSelectOnPressUp)&&E(e.allowsDifferentPressOrigin)&&s(b)},g=b=>{i()&&(E(e.shouldSelectOnPressUp)&&!E(e.allowsDifferentPressOrigin)||c!=="mouse")&&s(b)},f=b=>{!i()||!["Enter"," "].includes(b.key)||(ci(b)?n().toggleSelection(r()):s(b))},h=b=>{l()&&b.preventDefault()},p=b=>{const x=t();o()||l()||!x||b.target===x&&n().setFocusedKey(r())},m=M(()=>{if(!(o()||l()))return r()===n().focusedKey()?0:-1}),y=M(()=>E(e.virtualized)?void 0:r());return B(ct([t,r,o,()=>n().focusedKey(),()=>n().isFocused()],([b,x,w,$,O])=>{b&&x===$&&O&&!w&&document.activeElement!==b&&(e.focus?e.focus():Se(b))})),{isSelected:a,isDisabled:l,allowsSelection:i,tabIndex:m,dataKey:y,onPointerDown:u,onPointerUp:d,onClick:g,onKeyDown:f,onMouseDown:h,onFocus:p}}var xl=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;const t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=this.state.selectedKeys(),r=n.anchorKey||t,o=new at(n,r,t);for(const s of this.getKeyRange(r,n.currentKey||t))o.delete(s);for(const s of this.getKeyRange(t,r))this.canSelectItem(s)&&o.add(s);this.state.setSelectedKeys(o)}getKeyRange(e,t){const n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){const n=[];let r=e;for(;r!=null;){const o=this.collection().getItem(r);if(o&&o.type==="item"&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){const t=this.collection().getItem(e);return t?!t||t.type!=="item"?null:t.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=new at(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()==="none")return;const t=this.getKey(e);if(t==null)return;const n=this.canSelectItem(t)?new at([t],t,t):new at;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()==="none")return;const t=new at;for(const n of e){const r=this.getKey(n);if(r!=null&&(t.add(r),this.selectionMode()==="single"))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new at)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||t&&t.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const t=this.selectedKeys();if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;for(const n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;const t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){const t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){const e=[];return(n=>{for(;n!=null;){if(this.canSelectItem(n)){const r=this.collection().getItem(n);if(!r)continue;r.type==="item"&&e.push(n)}n=this.collection().getKeyAfter(n)}})(this.collection().getFirstKey()),e}},ao=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(const r of e)this.keyMap.set(r.key,r);if(this.keyMap.size===0)return;let t,n=0;for(const[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),o.type==="item"&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}};function wl(e){const t=vl(e),r=il({dataSource:()=>E(e.dataSource),getKey:()=>E(e.getKey),getTextValue:()=>E(e.getTextValue),getDisabled:()=>E(e.getDisabled),getSectionChildren:()=>E(e.getSectionChildren),factory:s=>e.filter?new ao(e.filter(s)):new ao(s)},[()=>e.filter]),o=new xl(r,t);return ks(()=>{const s=t.focusedKey();s!=null&&!r().getItem(s)&&t.setFocusedKey(void 0)}),{collection:r,selectionManager:()=>o}}var Ce=e=>typeof e=="function"?e():e,$l=e=>{const t=M(()=>{const a=Ce(e.element);if(a)return getComputedStyle(a)}),n=()=>t()?.animationName??"none",[r,o]=z(Ce(e.show)?"present":"hidden");let s="none";return B(a=>{const l=Ce(e.show);return Rt(()=>{if(a===l)return l;const i=s,c=n();l?o("present"):c==="none"||t()?.display==="none"?o("hidden"):o(a===!0&&i!==c?"hiding":"hidden")}),l}),B(()=>{const a=Ce(e.element);if(!a)return;const l=c=>{c.target===a&&(s=n())},i=c=>{const d=n().includes(c.animationName);c.target===a&&d&&r()==="hiding"&&o("hidden")};a.addEventListener("animationstart",l),a.addEventListener("animationcancel",i),a.addEventListener("animationend",i),U(()=>{a.removeEventListener("animationstart",l),a.removeEventListener("animationcancel",i),a.removeEventListener("animationend",i)})}),{present:()=>r()==="present"||r()==="hiding",state:r}},Cl=$l,di=Cl,$n="data-kb-top-layer",fi,Xn=!1,ut=[];function nn(e){return ut.findIndex(t=>t.node===e)}function Sl(e){return ut[nn(e)]}function kl(e){return ut[ut.length-1].node===e}function gi(){return ut.filter(e=>e.isPointerBlocking)}function El(){return[...gi()].slice(-1)[0]}function ur(){return gi().length>0}function hi(e){const t=nn(El()?.node);return nn(e)<t}function Ml(e){ut.push(e)}function Tl(e){const t=nn(e);t<0||ut.splice(t,1)}function Il(){for(const{node:e}of ut)e.style.pointerEvents=hi(e)?"none":"auto"}function Al(e){if(ur()&&!Xn){const t=Xe(e);fi=document.body.style.pointerEvents,t.body.style.pointerEvents="none",Xn=!0}}function Pl(e){if(ur())return;const t=Xe(e);t.body.style.pointerEvents=fi,t.body.style.length===0&&t.body.removeAttribute("style"),Xn=!1}var Ae={layers:ut,isTopMostLayer:kl,hasPointerBlockingLayer:ur,isBelowPointerBlockingLayer:hi,addLayer:Ml,removeLayer:Tl,indexOf:nn,find:Sl,assignPointerEventToLayers:Il,disableBodyPointerEvents:Al,restoreBodyPointerEvents:Pl},Dl={};Pn(Dl,{Button:()=>ql,Root:()=>dr});var Ll=["button","color","file","image","reset","submit"];function Ol(e){const t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Ll.indexOf(e.type)!==-1:!1}function dr(e){let t;const n=Q({type:"button"},e),[r,o]=Z(n,["ref","type","disabled"]),s=An(()=>t,()=>"button"),a=M(()=>{const c=s();return c==null?!1:Ol({tagName:c,type:r.type})}),l=M(()=>s()==="input"),i=M(()=>s()==="a"&&t?.getAttribute("href")!=null);return v(de,j({as:"button",ref(c){const u=Me(d=>t=d,r.ref);typeof u=="function"&&u(c)},get type(){return a()||l()?r.type:void 0},get role(){return!a()&&!i()?"button":void 0},get tabIndex(){return!a()&&!i()&&!r.disabled?0:void 0},get disabled(){return a()||l()?r.disabled:void 0},get"aria-disabled"(){return!a()&&!l()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var ql=dr,Fl=["top","right","bottom","left"],Ye=Math.min,De=Math.max,Cn=Math.round,yn=Math.floor,yt=e=>({x:e,y:e}),_l={left:"right",right:"left",bottom:"top",top:"bottom"},zl={start:"end",end:"start"};function Zn(e,t,n){return De(e,Ye(t,n))}function At(e,t){return typeof e=="function"?e(t):e}function bt(e){return e.split("-")[0]}function Nt(e){return e.split("-")[1]}function vi(e){return e==="x"?"y":"x"}function fr(e){return e==="y"?"height":"width"}function Mt(e){return["top","bottom"].includes(bt(e))?"y":"x"}function gr(e){return vi(Mt(e))}function Rl(e,t,n){n===void 0&&(n=!1);const r=Nt(e),o=gr(e),s=fr(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=Sn(a)),[a,Sn(a)]}function Kl(e){const t=Sn(e);return[Jn(e),t,Jn(t)]}function Jn(e){return e.replace(/start|end/g,t=>zl[t])}function Bl(e,t,n){const r=["left","right"],o=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?s:a;default:return[]}}function Nl(e,t,n,r){const o=Nt(e);let s=Bl(bt(e),n==="start",r);return o&&(s=s.map(a=>a+"-"+o),t&&(s=s.concat(s.map(Jn)))),s}function Sn(e){return e.replace(/left|right|bottom|top/g,t=>_l[t])}function Ul(e){return{top:0,right:0,bottom:0,left:0,...e}}function pi(e){return typeof e!="number"?Ul(e):{top:e,right:e,bottom:e,left:e}}function kn(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function lo(e,t,n){let{reference:r,floating:o}=e;const s=Mt(t),a=gr(t),l=fr(a),i=bt(t),c=s==="y",u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,g=r[l]/2-o[l]/2;let f;switch(i){case"top":f={x:u,y:r.y-o.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Nt(t)){case"start":f[a]-=g*(n&&c?-1:1);break;case"end":f[a]+=g*(n&&c?-1:1);break}return f}var Gl=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=n,l=s.filter(Boolean),i=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=lo(c,r,i),g=r,f={},h=0;for(let p=0;p<l.length;p++){const{name:m,fn:y}=l[p],{x:b,y:x,data:w,reset:$}=await y({x:u,y:d,initialPlacement:r,placement:g,strategy:o,middlewareData:f,rects:c,platform:a,elements:{reference:e,floating:t}});u=b??u,d=x??d,f={...f,[m]:{...f[m],...w}},$&&h<=50&&(h++,typeof $=="object"&&($.placement&&(g=$.placement),$.rects&&(c=$.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:u,y:d}=lo(c,g,i)),p=-1)}return{x:u,y:d,placement:g,strategy:o,middlewareData:f}};async function rn(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:a,elements:l,strategy:i}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:f=0}=At(t,e),h=pi(f),m=l[g?d==="floating"?"reference":"floating":d],y=kn(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:i})),b=d==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),w=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},$=kn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:x,strategy:i}):b);return{top:(y.top-$.top+h.top)/w.y,bottom:($.bottom-y.bottom+h.bottom)/w.y,left:(y.left-$.left+h.left)/w.x,right:($.right-y.right+h.right)/w.x}}var Vl=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:a,elements:l,middlewareData:i}=t,{element:c,padding:u=0}=At(e,t)||{};if(c==null)return{};const d=pi(u),g={x:n,y:r},f=gr(o),h=fr(f),p=await a.getDimensions(c),m=f==="y",y=m?"top":"left",b=m?"bottom":"right",x=m?"clientHeight":"clientWidth",w=s.reference[h]+s.reference[f]-g[f]-s.floating[h],$=g[f]-s.reference[f],O=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let P=O?O[x]:0;(!P||!await(a.isElement==null?void 0:a.isElement(O)))&&(P=l.floating[x]||s.floating[h]);const L=w/2-$/2,S=P/2-p[h]/2-1,F=Ye(d[y],S),H=Ye(d[b],S),G=F,te=P-p[h]-H,J=P/2-p[h]/2+L,ae=Zn(G,J,te),oe=!i.arrow&&Nt(o)!=null&&J!==ae&&s.reference[h]/2-(J<G?F:H)-p[h]/2<0,ne=oe?J<G?J-G:J-te:0;return{[f]:g[f]+ne,data:{[f]:ae,centerOffset:J-ae-ne,...oe&&{alignmentOffset:ne}},reset:oe}}}),Hl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:a,initialPlacement:l,platform:i,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...m}=At(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const y=bt(o),b=Mt(l),x=bt(l)===l,w=await(i.isRTL==null?void 0:i.isRTL(c.floating)),$=g||(x||!p?[Sn(l)]:Kl(l)),O=h!=="none";!g&&O&&$.push(...Nl(l,p,h,w));const P=[l,...$],L=await rn(t,m),S=[];let F=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&S.push(L[y]),d){const J=Rl(o,a,w);S.push(L[J[0]],L[J[1]])}if(F=[...F,{placement:o,overflows:S}],!S.every(J=>J<=0)){var H,G;const J=(((H=s.flip)==null?void 0:H.index)||0)+1,ae=P[J];if(ae)return{data:{index:J,overflows:F},reset:{placement:ae}};let oe=(G=F.filter(ne=>ne.overflows[0]<=0).sort((ne,ie)=>ne.overflows[1]-ie.overflows[1])[0])==null?void 0:G.placement;if(!oe)switch(f){case"bestFit":{var te;const ne=(te=F.filter(ie=>{if(O){const le=Mt(ie.placement);return le===b||le==="y"}return!0}).map(ie=>[ie.placement,ie.overflows.filter(le=>le>0).reduce((le,ve)=>le+ve,0)]).sort((ie,le)=>ie[1]-le[1])[0])==null?void 0:te[0];ne&&(oe=ne);break}case"initialPlacement":oe=l;break}if(o!==oe)return{reset:{placement:oe}}}return{}}}};function co(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function uo(e){return Fl.some(t=>e[t]>=0)}var jl=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=At(e,t);switch(r){case"referenceHidden":{const s=await rn(t,{...o,elementContext:"reference"}),a=co(s,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:uo(a)}}}case"escaped":{const s=await rn(t,{...o,altBoundary:!0}),a=co(s,n.floating);return{data:{escapedOffsets:a,escaped:uo(a)}}}default:return{}}}}};async function Wl(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=bt(n),l=Nt(n),i=Mt(n)==="y",c=["left","top"].includes(a)?-1:1,u=s&&i?-1:1,d=At(t,e);let{mainAxis:g,crossAxis:f,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof h=="number"&&(f=l==="end"?h*-1:h),i?{x:f*u,y:g*c}:{x:g*c,y:f*u}}var Ql=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:a,middlewareData:l}=t,i=await Wl(t,e);return a===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+i.x,y:s+i.y,data:{...i,placement:a}}}}},Yl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:m=>{let{x:y,y:b}=m;return{x:y,y:b}}},...i}=At(e,t),c={x:n,y:r},u=await rn(t,i),d=Mt(bt(o)),g=vi(d);let f=c[g],h=c[d];if(s){const m=g==="y"?"top":"left",y=g==="y"?"bottom":"right",b=f+u[m],x=f-u[y];f=Zn(b,f,x)}if(a){const m=d==="y"?"top":"left",y=d==="y"?"bottom":"right",b=h+u[m],x=h-u[y];h=Zn(b,h,x)}const p=l.fn({...t,[g]:f,[d]:h});return{...p,data:{x:p.x-n,y:p.y-r}}}}},Xl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:s}=t,{apply:a=()=>{},...l}=At(e,t),i=await rn(t,l),c=bt(n),u=Nt(n),d=Mt(n)==="y",{width:g,height:f}=r.floating;let h,p;c==="top"||c==="bottom"?(h=c,p=u===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(p=c,h=u==="end"?"top":"bottom");const m=f-i.top-i.bottom,y=g-i.left-i.right,b=Ye(f-i[h],m),x=Ye(g-i[p],y),w=!t.middlewareData.shift;let $=b,O=x;if(d?O=u||w?Ye(x,y):y:$=u||w?Ye(b,m):m,w&&!u){const L=De(i.left,0),S=De(i.right,0),F=De(i.top,0),H=De(i.bottom,0);d?O=g-2*(L!==0||S!==0?L+S:De(i.left,i.right)):$=f-2*(F!==0||H!==0?F+H:De(i.top,i.bottom))}await a({...t,availableWidth:O,availableHeight:$});const P=await o.getDimensions(s.floating);return g!==P.width||f!==P.height?{reset:{rects:!0}}:{}}}};function Ut(e){return mi(e)?(e.nodeName||"").toLowerCase():"#document"}function Le(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function dt(e){var t;return(t=(mi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mi(e){return e instanceof Node||e instanceof Le(e).Node}function je(e){return e instanceof Element||e instanceof Le(e).Element}function Ze(e){return e instanceof HTMLElement||e instanceof Le(e).HTMLElement}function fo(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Le(e).ShadowRoot}function dn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=We(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Zl(e){return["table","td","th"].includes(Ut(e))}function Dn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function hr(e){const t=vr(),n=je(e)?We(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Jl(e){let t=xt(e);for(;Ze(t)&&!Bt(t);){if(hr(t))return t;if(Dn(t))return null;t=xt(t)}return null}function vr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bt(e){return["html","body","#document"].includes(Ut(e))}function We(e){return Le(e).getComputedStyle(e)}function Ln(e){return je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function xt(e){if(Ut(e)==="html")return e;const t=e.assignedSlot||e.parentNode||fo(e)&&e.host||dt(e);return fo(t)?t.host:t}function yi(e){const t=xt(e);return Bt(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ze(t)&&dn(t)?t:yi(t)}function on(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=yi(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),a=Le(o);return s?t.concat(a,a.visualViewport||[],dn(o)?o:[],a.frameElement&&n?on(a.frameElement):[]):t.concat(o,on(o,[],n))}function bi(e){const t=We(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Ze(e),s=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Cn(n)!==s||Cn(r)!==a;return l&&(n=s,r=a),{width:n,height:r,$:l}}function pr(e){return je(e)?e:e.contextElement}function Kt(e){const t=pr(e);if(!Ze(t))return yt(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=bi(t);let a=(s?Cn(n.width):n.width)/r,l=(s?Cn(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}var ec=yt(0);function xi(e){const t=Le(e);return!vr()||!t.visualViewport?ec:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function tc(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Le(e)?!1:t}function Tt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=pr(e);let a=yt(1);t&&(r?je(r)&&(a=Kt(r)):a=Kt(e));const l=tc(s,n,r)?xi(s):yt(0);let i=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(s){const g=Le(s),f=r&&je(r)?Le(r):r;let h=g,p=h.frameElement;for(;p&&r&&f!==h;){const m=Kt(p),y=p.getBoundingClientRect(),b=We(p),x=y.left+(p.clientLeft+parseFloat(b.paddingLeft))*m.x,w=y.top+(p.clientTop+parseFloat(b.paddingTop))*m.y;i*=m.x,c*=m.y,u*=m.x,d*=m.y,i+=x,c+=w,h=Le(p),p=h.frameElement}}return kn({width:u,height:d,x:i,y:c})}function nc(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",a=dt(r),l=t?Dn(t.floating):!1;if(r===a||l&&s)return n;let i={scrollLeft:0,scrollTop:0},c=yt(1);const u=yt(0),d=Ze(r);if((d||!d&&!s)&&((Ut(r)!=="body"||dn(a))&&(i=Ln(r)),Ze(r))){const g=Tt(r);c=Kt(r),u.x=g.x+r.clientLeft,u.y=g.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-i.scrollLeft*c.x+u.x,y:n.y*c.y-i.scrollTop*c.y+u.y}}function rc(e){return Array.from(e.getClientRects())}function wi(e){return Tt(dt(e)).left+Ln(e).scrollLeft}function oc(e){const t=dt(e),n=Ln(e),r=e.ownerDocument.body,o=De(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=De(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+wi(e);const l=-n.scrollTop;return We(r).direction==="rtl"&&(a+=De(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:a,y:l}}function ic(e,t){const n=Le(e),r=dt(e),o=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,i=0;if(o){s=o.width,a=o.height;const c=vr();(!c||c&&t==="fixed")&&(l=o.offsetLeft,i=o.offsetTop)}return{width:s,height:a,x:l,y:i}}function sc(e,t){const n=Tt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=Ze(e)?Kt(e):yt(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y,i=o*s.x,c=r*s.y;return{width:a,height:l,x:i,y:c}}function go(e,t,n){let r;if(t==="viewport")r=ic(e,n);else if(t==="document")r=oc(dt(e));else if(je(t))r=sc(t,n);else{const o=xi(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return kn(r)}function $i(e,t){const n=xt(e);return n===t||!je(n)||Bt(n)?!1:We(n).position==="fixed"||$i(n,t)}function ac(e,t){const n=t.get(e);if(n)return n;let r=on(e,[],!1).filter(l=>je(l)&&Ut(l)!=="body"),o=null;const s=We(e).position==="fixed";let a=s?xt(e):e;for(;je(a)&&!Bt(a);){const l=We(a),i=hr(a);!i&&l.position==="fixed"&&(o=null),(s?!i&&!o:!i&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||dn(a)&&!i&&$i(e,a))?r=r.filter(u=>u!==a):o=l,a=xt(a)}return t.set(e,r),r}function lc(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?Dn(t)?[]:ac(t,this._c):[].concat(n),r],l=a[0],i=a.reduce((c,u)=>{const d=go(t,u,o);return c.top=De(d.top,c.top),c.right=Ye(d.right,c.right),c.bottom=Ye(d.bottom,c.bottom),c.left=De(d.left,c.left),c},go(t,l,o));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}}function cc(e){const{width:t,height:n}=bi(e);return{width:t,height:n}}function uc(e,t,n){const r=Ze(t),o=dt(t),s=n==="fixed",a=Tt(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const i=yt(0);if(r||!r&&!s)if((Ut(t)!=="body"||dn(o))&&(l=Ln(t)),r){const d=Tt(t,!0,s,t);i.x=d.x+t.clientLeft,i.y=d.y+t.clientTop}else o&&(i.x=wi(o));const c=a.left+l.scrollLeft-i.x,u=a.top+l.scrollTop-i.y;return{x:c,y:u,width:a.width,height:a.height}}function Kn(e){return We(e).position==="static"}function ho(e,t){return!Ze(e)||We(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ci(e,t){const n=Le(e);if(Dn(e))return n;if(!Ze(e)){let o=xt(e);for(;o&&!Bt(o);){if(je(o)&&!Kn(o))return o;o=xt(o)}return n}let r=ho(e,t);for(;r&&Zl(r)&&Kn(r);)r=ho(r,t);return r&&Bt(r)&&Kn(r)&&!hr(r)?n:r||Jl(e)||n}var dc=async function(e){const t=this.getOffsetParent||Ci,n=this.getDimensions,r=await n(e.floating);return{reference:uc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function fc(e){return We(e).direction==="rtl"}var Si={convertOffsetParentRelativeRectToViewportRelativeRect:nc,getDocumentElement:dt,getClippingRect:lc,getOffsetParent:Ci,getElementRects:dc,getClientRects:rc,getDimensions:cc,getScale:Kt,isElement:je,isRTL:fc};function gc(e,t){let n=null,r;const o=dt(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,i){l===void 0&&(l=!1),i===void 0&&(i=1),s();const{left:c,top:u,width:d,height:g}=e.getBoundingClientRect();if(l||t(),!d||!g)return;const f=yn(u),h=yn(o.clientWidth-(c+d)),p=yn(o.clientHeight-(u+g)),m=yn(c),b={rootMargin:-f+"px "+-h+"px "+-p+"px "+-m+"px",threshold:De(0,Ye(1,i))||1};let x=!0;function w($){const O=$[0].intersectionRatio;if(O!==i){if(!x)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(w,{...b,root:o.ownerDocument})}catch{n=new IntersectionObserver(w,b)}n.observe(e)}return a(!0),s}function hc(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=r,c=pr(e),u=o||s?[...c?on(c):[],...on(t)]:[];u.forEach(y=>{o&&y.addEventListener("scroll",n,{passive:!0}),s&&y.addEventListener("resize",n)});const d=c&&l?gc(c,n):null;let g=-1,f=null;a&&(f=new ResizeObserver(y=>{let[b]=y;b&&b.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),c&&!i&&f.observe(c),f.observe(t));let h,p=i?Tt(e):null;i&&m();function m(){const y=Tt(e);p&&(y.x!==p.x||y.y!==p.y||y.width!==p.width||y.height!==p.height)&&n(),p=y,h=requestAnimationFrame(m)}return n(),()=>{var y;u.forEach(b=>{o&&b.removeEventListener("scroll",n),s&&b.removeEventListener("resize",n)}),d?.(),(y=f)==null||y.disconnect(),f=null,i&&cancelAnimationFrame(h)}}var vc=Ql,pc=Yl,mc=Hl,yc=Xl,bc=jl,xc=Vl,wc=(e,t,n)=>{const r=new Map,o={platform:Si,...n},s={...o.platform,_c:r};return Gl(e,t,{...o,platform:s})},mr=xe();function yr(){const e=we(mr);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var $c=_('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),er=30,vo=er/2,Cc={top:180,right:-90,bottom:0,left:90};function br(e){const t=yr(),n=Q({size:er},e),[r,o]=Z(n,["ref","style","size"]),s=()=>t.currentPlacement().split("-")[0],a=Sc(t.contentRef),l=()=>a()?.getPropertyValue("background-color")||"none",i=()=>a()?.getPropertyValue(`border-${s()}-color`)||"none",c=()=>a()?.getPropertyValue(`border-${s()}-width`)||"0px",u=()=>Number.parseInt(c())*2*(er/r.size),d=()=>`rotate(${Cc[s()]} ${vo} ${vo}) translate(0 2)`;return v(de,j({as:"div",ref(g){const f=Me(t.setArrowRef,r.ref);typeof f=="function"&&f(g)},"aria-hidden":"true",get style(){return Tn({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:l(),stroke:i(),"stroke-width":u()},r.style)}},o,{get children(){const g=$c(),f=g.firstChild;return N(()=>I(f,"transform",d())),g}}))}function Sc(e){const[t,n]=z();return B(()=>{const r=e();r&&n(Ca(r).getComputedStyle(r))}),t}function kc(e){const t=yr(),[n,r]=Z(e,["ref","style"]);return v(de,j({as:"div",ref(o){const s=Me(t.setPositionerRef,n.ref);typeof s=="function"&&s(o)},"data-popper-positioner":"",get style(){return Tn({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}function po(e){const{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(t,n,r,o);const s={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...s,toJSON:()=>s}}function Ec(e,t){return{contextElement:e,getBoundingClientRect:()=>{const r=t(e);return r?po(r):e?e.getBoundingClientRect():po()}}}function Mc(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Tc={top:"bottom",right:"left",bottom:"top",left:"right"};function Ic(e,t){const[n,r]=e.split("-"),o=Tc[n];return r?n==="left"||n==="right"?`${o} ${r==="start"?"top":"bottom"}`:r==="start"?`${o} ${t==="rtl"?"right":"left"}`:`${o} ${t==="rtl"?"left":"right"}`:`${o} center`}function Ac(e){const t=Q({getAnchorRect:g=>g?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=z(),[o,s]=z(),[a,l]=z(t.placement),i=()=>Ec(t.anchorRef?.(),t.getAnchorRect),{direction:c}=wt();async function u(){const g=i(),f=n(),h=o();if(!g||!f)return;const p=(h?.clientHeight||0)/2,m=typeof t.gutter=="number"?t.gutter+p:t.gutter??p;f.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),g.getBoundingClientRect();const y=[vc(({placement:O})=>{const P=!!O.split("-")[1];return{mainAxis:m,crossAxis:P?void 0:t.shift,alignmentAxis:t.shift}})];if(t.flip!==!1){const O=typeof t.flip=="string"?t.flip.split(" "):void 0;if(O!==void 0&&!O.every(Mc))throw new Error("`flip` expects a spaced-delimited list of placements");y.push(mc({padding:t.overflowPadding,fallbackPlacements:O}))}(t.slide||t.overlap)&&y.push(pc({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),y.push(yc({padding:t.overflowPadding,apply({availableWidth:O,availableHeight:P,rects:L}){const S=Math.round(L.reference.width);O=Math.floor(O),P=Math.floor(P),f.style.setProperty("--kb-popper-anchor-width",`${S}px`),f.style.setProperty("--kb-popper-content-available-width",`${O}px`),f.style.setProperty("--kb-popper-content-available-height",`${P}px`),t.sameWidth&&(f.style.width=`${S}px`),t.fitViewport&&(f.style.maxWidth=`${O}px`,f.style.maxHeight=`${P}px`)}})),t.hideWhenDetached&&y.push(bc({padding:t.detachedPadding})),h&&y.push(xc({element:h,padding:t.arrowPadding}));const b=await wc(g,f,{placement:t.placement,strategy:"absolute",middleware:y,platform:{...Si,isRTL:()=>c()==="rtl"}});if(l(b.placement),t.onCurrentPlacementChange?.(b.placement),!f)return;f.style.setProperty("--kb-popper-content-transform-origin",Ic(b.placement,c()));const x=Math.round(b.x),w=Math.round(b.y);let $;if(t.hideWhenDetached&&($=b.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(f.style,{top:"0",left:"0",transform:`translate3d(${x}px, ${w}px, 0)`,visibility:$}),h&&b.middlewareData.arrow){const{x:O,y:P}=b.middlewareData.arrow,L=b.placement.split("-")[0];Object.assign(h.style,{left:O!=null?`${O}px`:"",top:P!=null?`${P}px`:"",[L]:"100%"})}}B(()=>{const g=i(),f=n();if(!g||!f)return;const h=hc(g,f,u,{elementResize:typeof ResizeObserver=="function"});U(h)}),B(()=>{const g=n(),f=t.contentRef?.();!g||!f||queueMicrotask(()=>{g.style.zIndex=getComputedStyle(f).zIndex})});const d={currentPlacement:a,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:s};return v(mr.Provider,{value:d,get children(){return t.children}})}var ki=Object.assign(Ac,{Arrow:br,Context:mr,usePopperContext:yr,Positioner:kc});function Pc(e){const t=n=>{n.key===sr.Escape&&e.onEscapeKeyDown?.(n)};B(()=>{if(E(e.isDisabled))return;const n=e.ownerDocument?.()??Xe();n.addEventListener("keydown",t),U(()=>{n.removeEventListener("keydown",t)})})}var mo="interactOutside.pointerDownOutside",yo="interactOutside.focusOutside";function Dc(e,t){let n,r=Ra;const o=()=>Xe(t()),s=d=>e.onPointerDownOutside?.(d),a=d=>e.onFocusOutside?.(d),l=d=>e.onInteractOutside?.(d),i=d=>{const g=d.target;return!(g instanceof HTMLElement)||g.closest(`[${$n}]`)||!ze(o(),g)||ze(t(),g)?!1:!e.shouldExcludeElement?.(g)},c=d=>{function g(){const f=t(),h=d.target;if(!f||!h||!i(d))return;const p=me([s,l]);h.addEventListener(mo,p,{once:!0});const m=new CustomEvent(mo,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:d.button===2||Ta(d)&&d.button===0}});h.dispatchEvent(m)}d.pointerType==="touch"?(o().removeEventListener("click",g),r=g,o().addEventListener("click",g,{once:!0})):g()},u=d=>{const g=t(),f=d.target;if(!g||!f||!i(d))return;const h=me([a,l]);f.addEventListener(yo,h,{once:!0});const p=new CustomEvent(yo,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:!1}});f.dispatchEvent(p)};B(()=>{E(e.isDisabled)||(n=window.setTimeout(()=>{o().addEventListener("pointerdown",c,!0)},0),o().addEventListener("focusin",u,!0),U(()=>{window.clearTimeout(n),o().removeEventListener("click",r),o().removeEventListener("pointerdown",c,!0),o().removeEventListener("focusin",u,!0)}))})}var Ei=xe();function Lc(){return we(Ei)}function Oc(e){let t;const n=Lc(),[r,o]=Z(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),s=new Set([]),a=d=>{s.add(d);const g=n?.registerNestedLayer(d);return()=>{s.delete(d),g?.()}};Dc({shouldExcludeElement:d=>t?r.excludedElements?.some(g=>ze(g(),d))||[...s].some(g=>ze(g,d)):!1,onPointerDownOutside:d=>{!t||Ae.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!Ae.isTopMostLayer(t)||(r.onPointerDownOutside?.(d),r.onInteractOutside?.(d),d.defaultPrevented||r.onDismiss?.())},onFocusOutside:d=>{r.onFocusOutside?.(d),r.onInteractOutside?.(d),d.defaultPrevented||r.onDismiss?.()}},()=>t),Pc({ownerDocument:()=>Xe(t),onEscapeKeyDown:d=>{!t||!Ae.isTopMostLayer(t)||(r.onEscapeKeyDown?.(d),!d.defaultPrevented&&r.onDismiss&&(d.preventDefault(),r.onDismiss()))}}),It(()=>{if(!t)return;Ae.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});const d=n?.registerNestedLayer(t);Ae.assignPointerEventToLayers(),Ae.disableBodyPointerEvents(t),U(()=>{t&&(Ae.removeLayer(t),d?.(),Ae.assignPointerEventToLayers(),Ae.restoreBodyPointerEvents(t))})}),B(ct([()=>t,()=>r.disableOutsidePointerEvents],([d,g])=>{if(!d)return;const f=Ae.find(d);f&&f.isPointerBlocking!==g&&(f.isPointerBlocking=g,Ae.assignPointerEventToLayers()),g&&Ae.disableBodyPointerEvents(d),U(()=>{Ae.restoreBodyPointerEvents(d)})},{defer:!0}));const u={registerNestedLayer:a};return v(Ei.Provider,{value:u,get children(){return v(de,j({as:"div",ref(d){const g=Me(f=>t=f,r.ref);typeof g=="function"&&g(d)}},o))}})}function Mi(e={}){const[t,n]=ti({value:()=>E(e.open),defaultValue:()=>!!E(e.defaultOpen),onChange:a=>e.onOpenChange?.(a)}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var _e={};Pn(_e,{Description:()=>Jo,ErrorMessage:()=>ei,Item:()=>Pi,ItemControl:()=>Di,ItemDescription:()=>Li,ItemIndicator:()=>Oi,ItemInput:()=>qi,ItemLabel:()=>Fi,Label:()=>_i,RadioGroup:()=>qc,Root:()=>zi});var Ti=xe();function Ii(){const e=we(Ti);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Ai=xe();function fn(){const e=we(Ai);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Pi(e){const t=cn(),n=Ii(),r=`${t.generateId("item")}-${Ke()}`,o=Q({id:r},e),[s,a]=Z(o,["value","disabled","onPointerDown"]),[l,i]=z(),[c,u]=z(),[d,g]=z(),[f,h]=z(),[p,m]=z(!1),y=M(()=>n.isSelectedValue(s.value)),b=M(()=>s.disabled||t.isDisabled()||!1),x=O=>{ue(O,s.onPointerDown),p()&&O.preventDefault()},w=M(()=>({...t.dataset(),"data-disabled":b()?"":void 0,"data-checked":y()?"":void 0})),$={value:()=>s.value,dataset:w,isSelected:y,isDisabled:b,inputId:l,labelId:c,descriptionId:d,inputRef:f,select:()=>n.setSelectedValue(s.value),generateId:ln(()=>a.id),registerInput:Re(i),registerLabel:Re(u),registerDescription:Re(g),setIsFocused:m,setInputRef:h};return v(Ai.Provider,{value:$,get children(){return v(de,j({as:"div",role:"group",onPointerDown:x},w,a))}})}function Di(e){const t=fn(),n=Q({id:t.generateId("control")},e),[r,o]=Z(n,["onClick","onKeyDown"]);return v(de,j({as:"div",onClick:l=>{ue(l,r.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:l=>{ue(l,r.onKeyDown),l.key===sr.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),o))}function Li(e){const t=fn(),n=Q({id:t.generateId("description")},e);return B(()=>U(t.registerDescription(n.id))),v(de,j({as:"div"},()=>t.dataset(),n))}function Oi(e){const t=fn(),n=Q({id:t.generateId("indicator")},e),[r,o]=Z(n,["ref","forceMount"]),[s,a]=z(),{present:l}=di({show:()=>r.forceMount||t.isSelected(),element:()=>s()??null});return v(K,{get when(){return l()},get children(){return v(de,j({as:"div",ref(i){const c=Me(a,r.ref);typeof c=="function"&&c(i)}},()=>t.dataset(),o))}})}function qi(e){const t=cn(),n=Ii(),r=fn(),o=Q({id:r.generateId("input")},e),[s,a]=Z(o,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),l=()=>[s["aria-labelledby"],r.labelId(),s["aria-labelledby"]!=null&&a["aria-label"]!=null?a.id:void 0].filter(Boolean).join(" ")||void 0,i=()=>[s["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[c,u]=z(!1),d=h=>{if(ue(h,s.onChange),h.stopPropagation(),!c()){n.setSelectedValue(r.value());const p=h.target;p.checked=r.isSelected()}u(!1)},g=h=>{ue(h,s.onFocus),r.setIsFocused(!0)},f=h=>{ue(h,s.onBlur),r.setIsFocused(!1)};return B(ct([()=>r.isSelected(),()=>r.value()],h=>{if(!h[0]&&h[1]===r.value())return;u(!0);const p=r.inputRef();p?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),p?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),B(()=>U(r.registerInput(a.id))),v(de,j({as:"input",ref(h){const p=Me(r.setInputRef,s.ref);typeof p=="function"&&p(h)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return Tn({...Xo},s.style)},get"aria-labelledby"(){return l()},get"aria-describedby"(){return i()},onChange:d,onFocus:g,onBlur:f},()=>r.dataset(),a))}function Fi(e){const t=fn(),n=Q({id:t.generateId("label")},e);return B(()=>U(t.registerLabel(n.id))),v(de,j({as:"label",get for(){return t.inputId()}},()=>t.dataset(),n))}function _i(e){return v(Ga,j({as:"span"},e))}function zi(e){let t;const n=`radiogroup-${Ke()}`,r=Q({id:n,orientation:"vertical"},e),[o,s,a]=Z(r,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Na),[l,i]=un({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:h=>o.onChange?.(h)}),{formControlContext:c}=Ua(s);Va(()=>t,()=>i(o.defaultValue??""));const u=()=>c.getAriaLabelledBy(E(s.id),a["aria-label"],o["aria-labelledby"]),d=()=>c.getAriaDescribedBy(o["aria-describedby"]),g=h=>h===l(),f={ariaDescribedBy:d,isSelectedValue:g,setSelectedValue:h=>{if(!(c.isReadOnly()||c.isDisabled())&&(i(h),t))for(const p of t.querySelectorAll("[type='radio']")){const m=p;m.checked=g(m.value)}}};return v(Zo.Provider,{value:c,get children(){return v(Ti.Provider,{value:f,get children(){return v(de,j({as:"div",ref(h){const p=Me(m=>t=m,o.ref);typeof p=="function"&&p(h)},role:"radiogroup",get id(){return E(s.id)},get"aria-invalid"(){return c.validationState()==="invalid"||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return u()},get"aria-describedby"(){return d()}},()=>c.dataset(),a))}})}})}var qc=Object.assign(zi,{Description:Jo,ErrorMessage:ei,Item:Pi,ItemControl:Di,ItemDescription:Li,ItemIndicator:Oi,ItemInput:qi,ItemLabel:Fi,Label:_i}),Fc=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){const t=this.ref?.();let n=this.getItem(e);if(!t||!n)return;const r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop>r;)o=this.getKeyAbove(o),n=o!=null?this.getItem(o):null;return o}getKeyPageBelow(e){const t=this.ref?.();let n=this.getItem(e);if(!t||!n)return;const r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop<r;)o=this.getKeyBelow(o),n=o!=null?this.getItem(o):null;return o}getKeyForSearch(e,t){const n=this.collator?.();if(!n)return;let r=t!=null?this.getKeyBelow(t):this.getFirstKey();for(;r!=null;){const o=this.collection().getItem(r);if(o){const s=o.textValue.slice(0,e.length);if(o.textValue&&n.compare(s,e)===0)return r}r=this.getKeyBelow(r)}}};function _c(e,t,n){const r=fl({usage:"search",sensitivity:"base"}),o=M(()=>{const s=E(e.keyboardDelegate);return s||new Fc(e.collection,t,r)});return bl({selectionManager:()=>E(e.selectionManager),keyboardDelegate:o,autoFocus:()=>E(e.autoFocus),deferAutoFocus:()=>E(e.deferAutoFocus),shouldFocusWrap:()=>E(e.shouldFocusWrap),disallowEmptySelection:()=>E(e.disallowEmptySelection),selectOnFocus:()=>E(e.selectOnFocus),disallowTypeAhead:()=>E(e.disallowTypeAhead),shouldUseVirtualFocus:()=>E(e.shouldUseVirtualFocus),allowsTabNavigation:()=>E(e.allowsTabNavigation),isVirtualized:()=>E(e.isVirtualized),scrollToKey:s=>E(e.scrollToKey)?.(s),orientation:()=>E(e.orientation)},t)}var Bn="focusScope.autoFocusOnMount",Nn="focusScope.autoFocusOnUnmount",bo={bubbles:!1,cancelable:!0},xo={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=Wn(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=Wn(this.stack,e),this.active()?.resume()}};function zc(e,t){const[n,r]=z(!1),o={pause(){r(!0)},resume(){r(!1)}};let s=null;const a=h=>e.onMountAutoFocus?.(h),l=h=>e.onUnmountAutoFocus?.(h),i=()=>Xe(t()),c=()=>{const h=i().createElement("span");return h.setAttribute("data-focus-trap",""),h.tabIndex=0,Object.assign(h.style,Xo),h},u=()=>{const h=t();return h?Qo(h,!0).filter(p=>!p.hasAttribute("data-focus-trap")):[]},d=()=>{const h=u();return h.length>0?h[0]:null},g=()=>{const h=u();return h.length>0?h[h.length-1]:null},f=()=>{const h=t();if(!h)return!1;const p=Jt(h);return!p||ze(h,p)?!1:Yo(p)};B(()=>{const h=t();if(!h)return;xo.add(o);const p=Jt(h);if(!ze(h,p)){const y=new CustomEvent(Bn,bo);h.addEventListener(Bn,a),h.dispatchEvent(y),y.defaultPrevented||setTimeout(()=>{Se(d()),Jt(h)===p&&Se(h)},0)}U(()=>{h.removeEventListener(Bn,a),setTimeout(()=>{const y=new CustomEvent(Nn,bo);f()&&y.preventDefault(),h.addEventListener(Nn,l),h.dispatchEvent(y),y.defaultPrevented||Se(p??i().body),h.removeEventListener(Nn,l),xo.remove(o)},0)})}),B(()=>{const h=t();if(!h||!E(e.trapFocus)||n())return;const p=y=>{const b=y.target;b?.closest(`[${$n}]`)||(ze(h,b)?s=b:Se(s))},m=y=>{const x=y.relatedTarget??Jt(h);x?.closest(`[${$n}]`)||ze(h,x)||Se(s)};i().addEventListener("focusin",p),i().addEventListener("focusout",m),U(()=>{i().removeEventListener("focusin",p),i().removeEventListener("focusout",m)})}),B(()=>{const h=t();if(!h||!E(e.trapFocus)||n())return;const p=c();h.insertAdjacentElement("afterbegin",p);const m=c();h.insertAdjacentElement("beforeend",m);function y(x){const w=d(),$=g();x.relatedTarget===w?Se($):Se(w)}p.addEventListener("focusin",y),m.addEventListener("focusin",y);const b=new MutationObserver(x=>{for(const w of x)w.previousSibling===m&&(m.remove(),h.insertAdjacentElement("beforeend",m)),w.nextSibling===p&&(p.remove(),h.insertAdjacentElement("afterbegin",p))});b.observe(h,{childList:!0,subtree:!1}),U(()=>{p.removeEventListener("focusin",y),m.removeEventListener("focusin",y),p.remove(),m.remove(),b.disconnect()})})}var Rc="data-live-announcer";function Kc(e){B(()=>{E(e.isDisabled)||U(Bc(E(e.targets),E(e.root)))})}var Xt=new WeakMap,Fe=[];function Bc(e,t=document.body){const n=new Set(e),r=new Set,o=i=>{for(const g of i.querySelectorAll(`[${Rc}], [${$n}]`))n.add(g);const c=g=>{if(n.has(g)||g.parentElement&&r.has(g.parentElement)&&g.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const f of n)if(g.contains(f))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},u=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),d=c(i);if(d===NodeFilter.FILTER_ACCEPT&&s(i),d!==NodeFilter.FILTER_REJECT){let g=u.nextNode();for(;g!=null;)s(g),g=u.nextNode()}},s=i=>{const c=Xt.get(i)??0;i.getAttribute("aria-hidden")==="true"&&c===0||(c===0&&i.setAttribute("aria-hidden","true"),r.add(i),Xt.set(i,c+1))};Fe.length&&Fe[Fe.length-1].disconnect(),o(t);const a=new MutationObserver(i=>{for(const c of i)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...n,...r].some(u=>u.contains(c.target))){for(const u of c.removedNodes)u instanceof Element&&(n.delete(u),r.delete(u));for(const u of c.addedNodes)(u instanceof HTMLElement||u instanceof SVGElement)&&(u.dataset.liveAnnouncer==="true"||u.dataset.reactAriaTopLayer==="true")?n.add(u):u instanceof Element&&o(u)}});a.observe(t,{childList:!0,subtree:!0});const l={observe(){a.observe(t,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return Fe.push(l),()=>{a.disconnect();for(const i of r){const c=Xt.get(i);if(c==null)return;c===1?(i.removeAttribute("aria-hidden"),Xt.delete(i)):Xt.set(i,c-1)}l===Fe[Fe.length-1]?(Fe.pop(),Fe.length&&Fe[Fe.length-1].observe()):Fe.splice(Fe.indexOf(l),1)}}var bn=new Map,Nc=e=>{B(()=>{const t=Ce(e.style)??{},n=Ce(e.properties)??[],r={};for(const s in t)r[s]=e.element.style[s];const o=bn.get(e.key);o?o.activeCount++:bn.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(s=>s.key)}),Object.assign(e.element.style,e.style);for(const s of n)e.element.style.setProperty(s.key,s.value);U(()=>{const s=bn.get(e.key);if(s){if(s.activeCount!==1){s.activeCount--;return}bn.delete(e.key);for(const[a,l]of Object.entries(s.originalStyles))e.element.style[a]=l;for(const a of s.properties)e.element.style.removeProperty(a);e.element.style.length===0&&e.element.removeAttribute("style"),e.cleanup?.()}})})},wo=Nc,Uc=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Gc=(e,t)=>{const n=getComputedStyle(e),r=t==="x"?n.overflowX:n.overflowY;return r==="auto"||r==="scroll"||e.tagName==="HTML"&&r==="visible"},Vc=(e,t,n)=>{const r=t==="x"&&window.getComputedStyle(e).direction==="rtl"?-1:1;let o=e,s=0,a=0,l=!1;do{const[i,c,u]=Uc(o,t),d=u-i-r*c;(c!==0||d!==0)&&Gc(o,t)&&(s+=d,a+=c),o===(n??document.documentElement)?l=!0:o=o._$host??o.parentElement}while(o&&!l);return[s,a]},[$o,Co]=z([]),Hc=e=>$o().indexOf(e)===$o().length-1,jc=e=>{const t=j({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=Ke();let r=[0,0],o=null,s=null;B(()=>{Ce(t.enabled)&&(Co(c=>[...c,n]),U(()=>{Co(c=>c.filter(u=>u!==n))}))}),B(()=>{if(!Ce(t.enabled)||!Ce(t.hideScrollbar))return;const{body:c}=document,u=window.innerWidth-c.offsetWidth;if(Ce(t.preventScrollbarShift)){const d={overflow:"hidden"},g=[];u>0&&(Ce(t.preventScrollbarShiftMode)==="padding"?d.paddingRight=`calc(${window.getComputedStyle(c).paddingRight} + ${u}px)`:d.marginRight=`calc(${window.getComputedStyle(c).marginRight} + ${u}px)`,g.push({key:"--scrollbar-width",value:`${u}px`}));const f=window.scrollY,h=window.scrollX;wo({key:"prevent-scroll",element:c,style:d,properties:g,cleanup:()=>{Ce(t.restoreScrollPosition)&&u>0&&window.scrollTo(h,f)}})}else wo({key:"prevent-scroll",element:c,style:{overflow:"hidden"}})}),B(()=>{!Hc(n)||!Ce(t.enabled)||(document.addEventListener("wheel",l,{passive:!1}),document.addEventListener("touchstart",a,{passive:!1}),document.addEventListener("touchmove",i,{passive:!1}),U(()=>{document.removeEventListener("wheel",l),document.removeEventListener("touchstart",a),document.removeEventListener("touchmove",i)}))});const a=c=>{r=So(c),o=null,s=null},l=c=>{const u=c.target,d=Ce(t.element),g=Wc(c),f=Math.abs(g[0])>Math.abs(g[1])?"x":"y",h=f==="x"?g[0]:g[1],p=ko(u,f,h,d);let m;d&&tr(d,u)?m=!p:m=!0,m&&c.cancelable&&c.preventDefault()},i=c=>{const u=Ce(t.element),d=c.target;let g;if(c.touches.length===2)g=!Ce(t.allowPinchZoom);else{if(o==null||s===null){const f=So(c).map((p,m)=>r[m]-p),h=Math.abs(f[0])>Math.abs(f[1])?"x":"y";o=h,s=h==="x"?f[0]:f[1]}if(d.type==="range")g=!1;else{const f=ko(d,o,s,u);u&&tr(u,d)?g=!f:g=!0}}g&&c.cancelable&&c.preventDefault()}},Wc=e=>[e.deltaX,e.deltaY],So=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],ko=(e,t,n,r)=>{const o=r!==null&&tr(r,e),[s,a]=Vc(e,t,o?r:void 0);return!(n>0&&Math.abs(s)<=1||n<0&&Math.abs(a)<1)},tr=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},Qc=jc,Yc=Qc,Ri=xe();function Ki(){return we(Ri)}function ft(){const e=Ki();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Bi=xe();function xr(){const e=we(Bi);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Ni=xe();function Je(){const e=we(Ni);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function wr(e){let t;const n=Je(),r=ft(),o=Q({id:n.generateId(`item-${Ke()}`)},e),[s,a]=Z(o,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[l,i]=z(),[c,u]=z(),[d,g]=z(),f=()=>r.listState().selectionManager(),h=()=>a.id,p=()=>f().focusedKey()===h(),m=()=>{s.onSelect?.(),s.closeOnSelect&&setTimeout(()=>{r.close(!0)})};ol({getItem:()=>({ref:()=>t,type:"item",key:h(),textValue:s.textValue??d()?.textContent??t?.textContent??"",disabled:s.disabled??!1})});const y=ui({key:h,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),b=S=>{ue(S,s.onPointerMove),S.pointerType==="mouse"&&(s.disabled?r.onItemLeave(S):(r.onItemEnter(S),S.defaultPrevented||(Se(S.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(h()))))},x=S=>{ue(S,s.onPointerLeave),S.pointerType==="mouse"&&r.onItemLeave(S)},w=S=>{ue(S,s.onPointerUp),!s.disabled&&S.button===0&&m()},$=S=>{if(ue(S,s.onKeyDown),!S.repeat&&!s.disabled)switch(S.key){case"Enter":case" ":m();break}},O=M(()=>{if(s.indeterminate)return"mixed";if(s.checked!=null)return s.checked}),P=M(()=>({"data-indeterminate":s.indeterminate?"":void 0,"data-checked":s.checked&&!s.indeterminate?"":void 0,"data-disabled":s.disabled?"":void 0,"data-highlighted":p()?"":void 0})),L={isChecked:()=>s.checked,dataset:P,setLabelRef:g,generateId:ln(()=>a.id),registerLabel:Re(i),registerDescription:Re(u)};return v(Bi.Provider,{value:L,get children(){return v(de,j({as:"div",ref(S){const F=Me(H=>t=H,s.ref);typeof F=="function"&&F(S)},get tabIndex(){return y.tabIndex()},get"aria-checked"(){return O()},get"aria-disabled"(){return s.disabled},get"aria-labelledby"(){return l()},get"aria-describedby"(){return c()},get"data-key"(){return y.dataKey()},get onPointerDown(){return me([s.onPointerDown,y.onPointerDown])},get onPointerUp(){return me([w,y.onPointerUp])},get onClick(){return me([s.onClick,y.onClick])},get onKeyDown(){return me([$,y.onKeyDown])},get onMouseDown(){return me([s.onMouseDown,y.onMouseDown])},get onFocus(){return me([s.onFocus,y.onFocus])},onPointerMove:b,onPointerLeave:x},P,a))}})}function Ui(e){const t=Q({closeOnSelect:!1},e),[n,r]=Z(t,["checked","defaultChecked","onChange","onSelect"]),o=Qa({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:a=>n.onChange?.(a),isDisabled:()=>r.disabled});return v(wr,j({role:"menuitemcheckbox",get checked(){return o.isSelected()},onSelect:()=>{n.onSelect?.(),o.toggle()}},r))}var Xc=xe();function On(){return we(Xc)}var sn={next:(e,t)=>e==="ltr"?t==="horizontal"?"ArrowRight":"ArrowDown":t==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,t)=>sn.next(e==="ltr"?"rtl":"ltr",t)},Eo={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function Gi(e){const t=Je(),n=ft(),r=On(),{direction:o}=wt(),s=Q({id:t.generateId("trigger")},e),[a,l]=Z(s,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let i=()=>t.value();r!==void 0&&(i=()=>t.value()??a.id,r.lastValue()===void 0&&r.setLastValue(i));const c=An(()=>n.triggerRef(),()=>"button"),u=M(()=>c()==="a"&&n.triggerRef()?.getAttribute("href")!=null);B(ct(()=>r?.value(),y=>{u()&&y===i()&&n.triggerRef()?.focus()}));const d=()=>{r!==void 0?n.isOpen()?r.value()===i()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)},g=y=>{ue(y,a.onPointerDown),y.currentTarget.dataset.pointerType=y.pointerType,!a.disabled&&y.pointerType!=="touch"&&y.button===0&&d()},f=y=>{ue(y,a.onClick),a.disabled||y.currentTarget.dataset.pointerType==="touch"&&d()},h=y=>{if(ue(y,a.onKeyDown),!a.disabled){if(u())switch(y.key){case"Enter":case" ":return}switch(y.key){case"Enter":case" ":case Eo.first(t.orientation()):y.stopPropagation(),y.preventDefault(),Ba(y.currentTarget),n.open("first"),r?.setAutoFocusMenu(!0),r?.setValue(i);break;case Eo.last(t.orientation()):y.stopPropagation(),y.preventDefault(),n.open("last");break;case sn.next(o(),t.orientation()):if(r===void 0)break;y.stopPropagation(),y.preventDefault(),r.nextMenu();break;case sn.previous(o(),t.orientation()):if(r===void 0)break;y.stopPropagation(),y.preventDefault(),r.previousMenu();break}}},p=y=>{ue(y,a.onMouseOver),n.triggerRef()?.dataset.pointerType!=="touch"&&!a.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(i)},m=y=>{ue(y,a.onFocus),r!==void 0&&y.currentTarget.dataset.pointerType!=="touch"&&r.setValue(i)};return B(()=>U(n.registerTriggerId(a.id))),v(dr,j({ref(y){const b=Me(n.setTriggerRef,a.ref);typeof b=="function"&&b(y)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return a.id},get disabled(){return a.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return M(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return i()!==void 0&&r?.value()===i()?!0:void 0},get tabIndex(){return r!==void 0?r.value()===i()||r.lastValue()===i()?0:-1:void 0},onPointerDown:g,onMouseOver:p,onClick:f,onKeyDown:h,onFocus:m,role:r!==void 0?"menuitem":void 0},()=>n.dataset(),l))}var Zc=xe();function Vi(){return we(Zc)}function Hi(e){let t;const n=Je(),r=ft(),o=On(),s=Vi(),{direction:a}=wt(),l=Q({id:n.generateId(`content-${Ke()}`)},e),[i,c]=Z(l,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let u=0;const d=()=>r.parentMenuContext()==null&&o===void 0&&n.isModal(),g=_c({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()==="horizontal"?"vertical":"horizontal"},()=>t);zc({trapFocus:()=>d()&&r.isOpen(),onMountAutoFocus:x=>{o===void 0&&i.onOpenAutoFocus?.(x)},onUnmountAutoFocus:i.onCloseAutoFocus},()=>t);const f=x=>{if(ze(x.currentTarget,x.target)&&(x.key==="Tab"&&r.isOpen()&&x.preventDefault(),o!==void 0&&x.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(x.key){case sn.next(a(),n.orientation()):x.stopPropagation(),x.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.nextMenu();break;case sn.previous(a(),n.orientation()):if(x.currentTarget.hasAttribute("data-closed"))break;x.stopPropagation(),x.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.previousMenu();break}},h=x=>{i.onEscapeKeyDown?.(x),o?.setAutoFocusMenu(!1),r.close(!0)},p=x=>{i.onFocusOutside?.(x),n.isModal()&&x.preventDefault()},m=x=>{ue(x,i.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},y=x=>{if(ue(x,i.onPointerMove),x.pointerType!=="mouse")return;const w=x.target,$=u!==x.clientX;ze(x.currentTarget,w)&&$&&(r.setPointerDir(x.clientX>u?"right":"left"),u=x.clientX)};B(()=>U(r.registerContentId(i.id)));const b={ref:Me(x=>{r.setContentRef(x),t=x},i.ref),role:"menu",get id(){return i.id},get tabIndex(){return g.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:me([i.onKeyDown,g.onKeyDown,f]),onMouseDown:me([i.onMouseDown,g.onMouseDown]),onFocusIn:me([i.onFocusIn,g.onFocusIn]),onFocusOut:me([i.onFocusOut,g.onFocusOut]),onPointerEnter:m,onPointerMove:y,get"data-orientation"(){return n.orientation()}};return v(K,{get when(){return r.contentPresent()},get children(){return v(K,{get when(){return s===void 0||r.parentMenuContext()!=null},get fallback(){return v(de,j({as:"div"},()=>r.dataset(),b,c))},get children(){return v(ki.Positioner,{get children(){return v(Oc,j({get disableOutsidePointerEvents(){return M(()=>!!d())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return Tn({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},i.style)},onEscapeKeyDown:h,onFocusOutside:p,get onDismiss(){return r.close}},()=>r.dataset(),b,c))}})}})}})}function Jc(e){let t;const n=Je(),r=ft(),[o,s]=Z(e,["ref"]);return Yc({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),v(Hi,j({ref(a){const l=Me(i=>{t=i},o.ref);typeof l=="function"&&l(a)}},s))}var ji=xe();function eu(){const e=we(ji);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function $r(e){const t=Je(),n=Q({id:t.generateId(`group-${Ke()}`)},e),[r,o]=z(),s={generateId:ln(()=>n.id),registerLabelId:Re(o)};return v(ji.Provider,{value:s,get children(){return v(de,j({as:"div",role:"group",get"aria-labelledby"(){return r()}},n))}})}function Wi(e){const t=eu(),n=Q({id:t.generateId("label")},e),[r,o]=Z(n,["id"]);return B(()=>U(t.registerLabelId(r.id))),v(de,j({as:"span",get id(){return r.id},"aria-hidden":"true"},o))}function Qi(e){const t=ft(),n=Q({children:"▼"},e);return v(de,j({as:"span","aria-hidden":"true"},()=>t.dataset(),n))}function Yi(e){return v(wr,j({role:"menuitem",closeOnSelect:!0},e))}function Xi(e){const t=xr(),n=Q({id:t.generateId("description")},e),[r,o]=Z(n,["id"]);return B(()=>U(t.registerDescription(r.id))),v(de,j({as:"div",get id(){return r.id}},()=>t.dataset(),o))}function Zi(e){const t=xr(),n=Q({id:t.generateId("indicator")},e),[r,o]=Z(n,["forceMount"]);return v(K,{get when(){return r.forceMount||t.isChecked()},get children(){return v(de,j({as:"div"},()=>t.dataset(),o))}})}function Ji(e){const t=xr(),n=Q({id:t.generateId("label")},e),[r,o]=Z(n,["ref","id"]);return B(()=>U(t.registerLabel(r.id))),v(de,j({as:"div",ref(s){const a=Me(t.setLabelRef,r.ref);typeof a=="function"&&a(s)},get id(){return r.id}},()=>t.dataset(),o))}function es(e){const t=ft();return v(K,{get when(){return t.contentPresent()},get children(){return v(_o,e)}})}var ts=xe();function tu(){const e=we(ts);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function ns(e){const n=Je().generateId(`radiogroup-${Ke()}`),r=Q({id:n},e),[o,s]=Z(r,["value","defaultValue","onChange","disabled"]),[a,l]=un({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:c=>o.onChange?.(c)}),i={isDisabled:()=>o.disabled,isSelectedValue:c=>c===a(),setSelectedValue:l};return v(ts.Provider,{value:i,get children(){return v($r,s)}})}function rs(e){const t=tu(),n=Q({closeOnSelect:!1},e),[r,o]=Z(n,["value","onSelect"]);return v(wr,j({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{r.onSelect?.(),t.setSelectedValue(r.value)}},o))}function nu(e,t,n){const r=e.split("-")[0],o=n.getBoundingClientRect(),s=[],a=t.clientX,l=t.clientY;switch(r){case"top":s.push([a,l+5]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]);break;case"right":s.push([a-5,l]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]);break;case"bottom":s.push([a,l-5]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]);break;case"left":s.push([a+5,l]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]);break}return s}function ru(e,t){return t?Ka([e.clientX,e.clientY],t):!1}function os(e){const t=Je(),n=ri(),r=Ki(),o=On(),s=Vi(),a=Q({placement:t.orientation()==="horizontal"?"bottom-start":"right-start"},e),[l,i]=Z(a,["open","defaultOpen","onOpenChange"]);let c=0,u=null,d="right";const[g,f]=z(),[h,p]=z(),[m,y]=z(),[b,x]=z(),[w,$]=z(!0),[O,P]=z(i.placement),[L,S]=z([]),[F,H]=z([]),{DomCollectionProvider:G}=rl({items:F,onItemsChange:H}),te=Mi({open:()=>l.open,defaultOpen:()=>l.defaultOpen,onOpenChange:V=>l.onOpenChange?.(V)}),{present:J}=di({show:()=>t.forceMount()||te.isOpen(),element:()=>b()??null}),ae=wl({selectionMode:"none",dataSource:F}),oe=V=>{$(V),te.open()},ne=(V=!1)=>{te.close(),V&&r&&r.close(!0)},ie=V=>{$(V),te.toggle()},le=()=>{const V=b();V&&(Se(V),ae.selectionManager().setFocused(!0),ae.selectionManager().setFocusedKey(void 0))},ve=()=>{s!=null?setTimeout(()=>le()):le()},Te=V=>{S($e=>[...$e,V]);const Ue=r?.registerNestedMenu(V);return()=>{S($e=>Wn($e,V)),Ue?.()}},ge=V=>d===u?.side&&ru(V,u?.area),ke=V=>{ge(V)&&V.preventDefault()},T=V=>{ge(V)||ve()},fe=V=>{ge(V)&&V.preventDefault()};Kc({isDisabled:()=>!(r==null&&te.isOpen()&&t.isModal()),targets:()=>[b(),...L()].filter(Boolean)}),B(()=>{const V=b();if(!V||!r)return;const Ue=r.registerNestedMenu(V);U(()=>{Ue()})}),B(()=>{r===void 0&&o?.registerMenu(t.value(),[b(),...L()])}),B(()=>{r!==void 0||o===void 0||(o.value()===t.value()?(m()?.focus(),o.autoFocusMenu()&&oe(!0)):ne())}),B(()=>{r!==void 0||o===void 0||te.isOpen()&&o.setValue(t.value())}),U(()=>{r===void 0&&o?.unregisterMenu(t.value())});const gt={dataset:M(()=>({"data-expanded":te.isOpen()?"":void 0,"data-closed":te.isOpen()?void 0:""})),isOpen:te.isOpen,contentPresent:J,nestedMenus:L,currentPlacement:O,pointerGraceTimeoutId:()=>c,autoFocus:w,listState:()=>ae,parentMenuContext:()=>r,triggerRef:m,contentRef:b,triggerId:g,contentId:h,setTriggerRef:y,setContentRef:x,open:oe,close:ne,toggle:ie,focusContent:ve,onItemEnter:ke,onItemLeave:T,onTriggerLeave:fe,setPointerDir:V=>d=V,setPointerGraceTimeoutId:V=>c=V,setPointerGraceIntent:V=>u=V,registerNestedMenu:Te,registerItemToParentDomCollection:n?.registerItem,registerTriggerId:Re(f),registerContentId:Re(p)};return v(G,{get children(){return v(Ri.Provider,{value:gt,get children(){return v(K,{when:s===void 0,get fallback(){return i.children},get children(){return v(ki,j({anchorRef:m,contentRef:b,onCurrentPlacementChange:P},i))}})}})}})}function is(e){const{direction:t}=wt();return v(os,j({get placement(){return t()==="rtl"?"left-start":"right-start"},flip:!0},e))}var ou={close:(e,t)=>e==="ltr"?[t==="horizontal"?"ArrowLeft":"ArrowUp"]:[t==="horizontal"?"ArrowRight":"ArrowDown"]};function ss(e){const t=ft(),n=Je(),[r,o]=Z(e,["onFocusOutside","onKeyDown"]),{direction:s}=wt();return v(Hi,j({onOpenAutoFocus:u=>{u.preventDefault()},onCloseAutoFocus:u=>{u.preventDefault()},onFocusOutside:u=>{r.onFocusOutside?.(u);const d=u.target;ze(t.triggerRef(),d)||t.close()},onKeyDown:u=>{ue(u,r.onKeyDown);const d=ze(u.currentTarget,u.target),g=ou.close(s(),n.orientation()).includes(u.key),f=t.parentMenuContext()!=null;d&&g&&f&&(t.close(),Se(t.triggerRef()))}},o))}var Mo=["Enter"," "],iu={open:(e,t)=>e==="ltr"?[...Mo,t==="horizontal"?"ArrowRight":"ArrowDown"]:[...Mo,t==="horizontal"?"ArrowLeft":"ArrowUp"]};function as(e){let t;const n=Je(),r=ft(),o=Q({id:n.generateId(`sub-trigger-${Ke()}`)},e),[s,a]=Z(o,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let l=null;const i=()=>{l&&window.clearTimeout(l),l=null},{direction:c}=wt(),u=()=>s.id,d=()=>{const x=r.parentMenuContext();if(x==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return x.listState().selectionManager()},g=()=>r.listState().collection(),f=()=>d().focusedKey()===u(),h=ui({key:u,selectionManager:d,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),p=x=>{ue(x,s.onClick),!r.isOpen()&&!s.disabled&&r.open(!0)},m=x=>{if(ue(x,s.onPointerMove),x.pointerType!=="mouse")return;const w=r.parentMenuContext();if(w?.onItemEnter(x),!x.defaultPrevented){if(s.disabled){w?.onItemLeave(x);return}!r.isOpen()&&!l&&(r.parentMenuContext()?.setPointerGraceIntent(null),l=window.setTimeout(()=>{r.open(!1),i()},100)),w?.onItemEnter(x),x.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),Se(x.currentTarget),w?.listState().selectionManager().setFocused(!0),w?.listState().selectionManager().setFocusedKey(u()))}},y=x=>{if(ue(x,s.onPointerLeave),x.pointerType!=="mouse")return;i();const w=r.parentMenuContext(),$=r.contentRef();if($){w?.setPointerGraceIntent({area:nu(r.currentPlacement(),x,$),side:r.currentPlacement().split("-")[0]}),window.clearTimeout(w?.pointerGraceTimeoutId());const O=window.setTimeout(()=>{w?.setPointerGraceIntent(null)},300);w?.setPointerGraceTimeoutId(O)}else{if(w?.onTriggerLeave(x),x.defaultPrevented)return;w?.setPointerGraceIntent(null)}w?.onItemLeave(x)},b=x=>{ue(x,s.onKeyDown),!x.repeat&&(s.disabled||iu.open(c(),n.orientation()).includes(x.key)&&(x.stopPropagation(),x.preventDefault(),d().setFocused(!1),d().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(g().getFirstKey())))};return B(()=>{if(r.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const x=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:u(),textValue:s.textValue??t?.textContent??"",disabled:s.disabled??!1});U(x)}),B(ct(()=>r.parentMenuContext()?.pointerGraceTimeoutId(),x=>{U(()=>{window.clearTimeout(x),r.parentMenuContext()?.setPointerGraceIntent(null)})})),B(()=>U(r.registerTriggerId(s.id))),U(()=>{i()}),v(de,j({as:"div",ref(x){const w=Me($=>{r.setTriggerRef($),t=$},s.ref);typeof w=="function"&&w(x)},get id(){return s.id},role:"menuitem",get tabIndex(){return h.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return M(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return s.disabled},get"data-key"(){return h.dataKey()},get"data-highlighted"(){return f()?"":void 0},get"data-disabled"(){return s.disabled?"":void 0},get onPointerDown(){return me([s.onPointerDown,h.onPointerDown])},get onPointerUp(){return me([s.onPointerUp,h.onPointerUp])},get onClick(){return me([p,h.onClick])},get onKeyDown(){return me([b,h.onKeyDown])},get onMouseDown(){return me([s.onMouseDown,h.onMouseDown])},get onFocus(){return me([s.onFocus,h.onFocus])},onPointerMove:m,onPointerLeave:y},()=>r.dataset(),a))}function su(e){const t=On(),n=`menu-${Ke()}`,r=Q({id:n,modal:!0},e),[o,s]=Z(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),a=Mi({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:i=>o.onOpenChange?.(i)}),l={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??l.isModal(),forceMount:()=>o.forceMount??!1,generateId:ln(()=>o.id),value:()=>o.value,orientation:()=>o.orientation??t?.orientation()??"horizontal"};return v(Ni.Provider,{value:l,get children(){return v(os,j({get open(){return a.isOpen()},get onOpenChange(){return a.setIsOpen}},s))}})}var au={};Pn(au,{Root:()=>qn,Separator:()=>lu});function qn(e){let t;const n=Q({orientation:"horizontal"},e),[r,o]=Z(n,["ref","orientation"]),s=An(()=>t,()=>"hr");return v(de,j({as:"hr",ref(a){const l=Me(i=>t=i,r.ref);typeof l=="function"&&l(a)},get role(){return s()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},o))}var lu=qn,he={};Pn(he,{Arrow:()=>br,CheckboxItem:()=>Ui,Content:()=>ls,DropdownMenu:()=>cu,Group:()=>$r,GroupLabel:()=>Wi,Icon:()=>Qi,Item:()=>Yi,ItemDescription:()=>Xi,ItemIndicator:()=>Zi,ItemLabel:()=>Ji,Portal:()=>es,RadioGroup:()=>ns,RadioItem:()=>rs,Root:()=>cs,Separator:()=>qn,Sub:()=>is,SubContent:()=>ss,SubTrigger:()=>as,Trigger:()=>Gi});function ls(e){const t=Je(),n=ft(),[r,o]=Z(e,["onCloseAutoFocus","onInteractOutside"]);let s=!1;return v(Jc,j({onCloseAutoFocus:i=>{r.onCloseAutoFocus?.(i),s||Se(n.triggerRef()),s=!1,i.preventDefault()},onInteractOutside:i=>{r.onInteractOutside?.(i),(!t.isModal()||i.detail.isContextMenu)&&(s=!0)}},o))}function cs(e){const t=`dropdownmenu-${Ke()}`,n=Q({id:t},e);return v(su,n)}var cu=Object.assign(cs,{Arrow:br,CheckboxItem:Ui,Content:ls,Group:$r,GroupLabel:Wi,Icon:Qi,Item:Yi,ItemDescription:Xi,ItemIndicator:Zi,ItemLabel:Ji,Portal:es,RadioGroup:ns,RadioItem:rs,Separator:qn,Sub:is,SubContent:ss,SubTrigger:as,Trigger:Gi}),C={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},uu=_('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),du=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),fu=_('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),gu=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Cr=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),hu=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),vu=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),pu=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),mu=_('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),yu=_('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),bu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),xu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),wu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),$u=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),us=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Cu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Su=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),ku=_('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Eu=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Mu=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Tu=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Iu=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Au=_('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function Pu(){return uu()}function ds(){return du()}function tn(){return fu()}function To(){return gu()}function Io(){return Cr()}function Du(){return(()=>{var e=Cr();return e.style.setProperty("transform","rotate(90deg)"),e})()}function Lu(){return(()=>{var e=Cr();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function Ou(){return hu()}function qu(){return vu()}function Fu(){return pu()}function _u(){return mu()}function zu(){return yu()}function Ru(){return bu()}function Ku(){return xu()}function Bu(){return wu()}function Nu(){return $u()}function Uu(e){return(()=>{var t=us(),n=t.firstChild;return N(()=>I(n,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),t})()}function Gu(){return Cu()}function Vu(){return Su()}function Hu(e){return[v(K,{get when(){return e.checked},get children(){var t=us(),n=t.firstChild;return N(()=>I(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}}),v(K,{get when(){return!e.checked},get children(){var t=ku(),n=t.firstChild;return N(()=>I(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}})]}function ju(){return Eu()}function Wu(){return Mu()}function Qu(){return Tu()}function Yu(){return Iu()}function Ao(){const e=Ke();return(()=>{var t=Au(),n=t.firstChild,r=n.nextSibling,o=r.nextSibling,s=o.firstChild,a=o.nextSibling,l=a.firstChild,i=a.nextSibling,c=i.nextSibling,u=c.firstChild,d=c.nextSibling,g=d.firstChild,f=d.nextSibling,h=f.nextSibling,p=h.firstChild,m=h.nextSibling,y=m.firstChild,b=m.nextSibling,x=b.nextSibling,w=x.firstChild,$=x.nextSibling,O=$.firstChild,P=$.nextSibling,L=P.nextSibling,S=L.firstChild,F=L.nextSibling,H=F.firstChild,G=F.nextSibling,te=G.nextSibling,J=te.firstChild,ae=te.nextSibling,oe=ae.firstChild,ne=ae.nextSibling,ie=ne.nextSibling,le=ie.firstChild,ve=ie.nextSibling,Te=ve.firstChild,ge=ve.nextSibling,ke=ge.firstChild,T=ke.nextSibling,fe=T.nextSibling,Y=fe.nextSibling,gt=Y.nextSibling,V=ge.nextSibling,Ue=V.firstChild,$e=V.nextSibling,Pt=$e.firstChild,Oe=$e.nextSibling,ht=Oe.firstChild,$t=ht.nextSibling,et=$t.nextSibling,Qe=et.firstChild,tt=Qe.nextSibling,D=tt.nextSibling,re=D.nextSibling,Ee=re.nextSibling,se=Ee.nextSibling,ee=se.nextSibling,ce=ee.nextSibling,pe=ce.nextSibling,X=pe.nextSibling,nt=X.nextSibling,rt=nt.nextSibling,Ge=Oe.nextSibling,Ct=Ge.firstChild,ot=Ge.nextSibling,St=ot.firstChild,it=ot.nextSibling,vt=it.firstChild,hn=vt.nextSibling,Ht=it.nextSibling,vn=Ht.firstChild,Dt=Ht.nextSibling,pn=Dt.firstChild,jt=Dt.nextSibling,Wt=jt.firstChild,Qt=Wt.nextSibling,Lt=Qt.nextSibling,kr=Lt.nextSibling,Er=kr.nextSibling,Mr=Er.nextSibling,Tr=Mr.nextSibling,Ir=Tr.nextSibling,Ar=Ir.nextSibling,Pr=Ar.nextSibling,Dr=Pr.nextSibling,Lr=Dr.nextSibling,Or=Lr.nextSibling,qr=Or.nextSibling,Fr=qr.nextSibling,_r=Fr.nextSibling,zr=_r.nextSibling,ms=zr.nextSibling;return I(n,"id",`a-${e}`),I(r,"fill",`url(#a-${e})`),I(s,"id",`am-${e}`),I(a,"id",`b-${e}`),I(l,"filter",`url(#am-${e})`),I(i,"mask",`url(#b-${e})`),I(u,"id",`ah-${e}`),I(d,"id",`k-${e}`),I(g,"filter",`url(#ah-${e})`),I(f,"mask",`url(#k-${e})`),I(p,"id",`ae-${e}`),I(m,"id",`j-${e}`),I(y,"filter",`url(#ae-${e})`),I(b,"mask",`url(#j-${e})`),I(w,"id",`ai-${e}`),I($,"id",`i-${e}`),I(O,"filter",`url(#ai-${e})`),I(P,"mask",`url(#i-${e})`),I(S,"id",`aj-${e}`),I(F,"id",`h-${e}`),I(H,"filter",`url(#aj-${e})`),I(G,"mask",`url(#h-${e})`),I(J,"id",`ag-${e}`),I(ae,"id",`g-${e}`),I(oe,"filter",`url(#ag-${e})`),I(ne,"mask",`url(#g-${e})`),I(le,"id",`af-${e}`),I(ve,"id",`f-${e}`),I(Te,"filter",`url(#af-${e})`),I(ge,"mask",`url(#f-${e})`),I(Y,"id",`m-${e}`),I(gt,"fill",`url(#m-${e})`),I(Ue,"id",`ak-${e}`),I($e,"id",`e-${e}`),I(Pt,"filter",`url(#ak-${e})`),I(Oe,"mask",`url(#e-${e})`),I(ht,"id",`n-${e}`),I($t,"fill",`url(#n-${e})`),I(Qe,"id",`r-${e}`),I(tt,"fill",`url(#r-${e})`),I(D,"id",`s-${e}`),I(re,"fill",`url(#s-${e})`),I(Ee,"id",`q-${e}`),I(se,"fill",`url(#q-${e})`),I(ee,"id",`p-${e}`),I(ce,"fill",`url(#p-${e})`),I(pe,"id",`o-${e}`),I(X,"fill",`url(#o-${e})`),I(nt,"id",`l-${e}`),I(rt,"fill",`url(#l-${e})`),I(Ct,"id",`al-${e}`),I(ot,"id",`d-${e}`),I(St,"filter",`url(#al-${e})`),I(it,"mask",`url(#d-${e})`),I(vt,"id",`u-${e}`),I(hn,"fill",`url(#u-${e})`),I(vn,"id",`ad-${e}`),I(Dt,"id",`c-${e}`),I(pn,"filter",`url(#ad-${e})`),I(jt,"mask",`url(#c-${e})`),I(Wt,"id",`t-${e}`),I(Qt,"fill",`url(#t-${e})`),I(Lt,"id",`v-${e}`),I(kr,"stroke",`url(#v-${e})`),I(Er,"id",`aa-${e}`),I(Mr,"stroke",`url(#aa-${e})`),I(Tr,"id",`w-${e}`),I(Ir,"stroke",`url(#w-${e})`),I(Ar,"id",`ac-${e}`),I(Pr,"stroke",`url(#ac-${e})`),I(Dr,"id",`ab-${e}`),I(Lr,"stroke",`url(#ab-${e})`),I(Or,"id",`y-${e}`),I(qr,"stroke",`url(#y-${e})`),I(Fr,"id",`x-${e}`),I(_r,"stroke",`url(#x-${e})`),I(zr,"id",`z-${e}`),I(ms,"stroke",`url(#z-${e})`),t})()}var Xu=_('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Zu=_('<button title="Copy object to clipboard">'),Ju=_('<button title="Remove all items"aria-label="Remove all items">'),ed=_('<button title="Delete item"aria-label="Delete item">'),td=_('<button title="Toggle value"aria-label="Toggle value">'),nd=_('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),Zt=_("<div>"),rd=_("<div><button> <span></span> <span> "),od=_("<input>"),Po=_("<span>"),id=_("<div><span>:"),sd=_("<div><div><button> [<!>...<!>]");function ad(e,t){let n=0;const r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n=n+t;return r}var Do=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Vt(n):Gt(n));return(()=>{var o=Xu();return N(()=>A(o,q(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),o})()},ld=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Vt(n):Gt(n)),[o,s]=z("NoCopy");return(()=>{var a=Zu();return Is(a,"click",o()==="NoCopy"?()=>{navigator.clipboard.writeText(As(e.value)).then(()=>{s("SuccessCopy"),setTimeout(()=>{s("NoCopy")},1500)},l=>{s("ErrorCopy"),setTimeout(()=>{s("NoCopy")},1500)})}:void 0,!0),k(a,v(Ps,{get children(){return[v(_n,{get when(){return o()==="NoCopy"},get children(){return v(Bu,{})}}),v(_n,{get when(){return o()==="SuccessCopy"},get children(){return v(Uu,{get theme(){return t()}})}}),v(_n,{get when(){return o()==="ErrorCopy"},get children(){return v(Gu,{})}})]}})),N(l=>{var i=r().actionButton,c=`${o()==="NoCopy"?"Copy object to clipboard":o()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return i!==l.e&&A(a,l.e=i),c!==l.t&&I(a,"aria-label",l.t=c),l},{e:void 0,t:void 0}),a})()},cd=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Vt(n):Gt(n)),o=R().client;return(()=>{var s=Ju();return s.$$click=()=>{const a=e.activeQuery.state.data,l=rr(a,e.dataPath,[]);o.setQueryData(e.activeQuery.queryKey,l)},k(s,v(Vu,{})),N(()=>A(s,r().actionButton)),s})()},Lo=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Vt(n):Gt(n)),o=R().client;return(()=>{var s=ed();return s.$$click=()=>{const a=e.activeQuery.state.data,l=Ds(a,e.dataPath);o.setQueryData(e.activeQuery.queryKey,l)},k(s,v(ds,{})),N(()=>A(s,q(r().actionButton))),s})()},ud=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Vt(n):Gt(n)),o=R().client;return(()=>{var s=td();return s.$$click=()=>{const a=e.activeQuery.state.data,l=rr(a,e.dataPath,!e.value);o.setQueryData(e.activeQuery.queryKey,l)},k(s,v(Hu,{get theme(){return t()},get checked(){return e.value}})),N(()=>A(s,q(r().actionButton,n`
          width: ${C.size[3.5]};
          height: ${C.size[3.5]};
        `))),s})()};function Oo(e){return Symbol.iterator in e}function pt(e){const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Vt(n):Gt(n)),o=R().client,[s,a]=z((e.defaultExpanded||[]).includes(e.label)),l=()=>a(h=>!h),[i,c]=z([]),u=M(()=>Array.isArray(e.value)?e.value.map((h,p)=>({label:p.toString(),value:h})):e.value!==null&&typeof e.value=="object"&&Oo(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([h,p])=>({label:h,value:p})):Array.from(e.value,(h,p)=>({label:p.toString(),value:h})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([h,p])=>({label:h,value:p})):[]),d=M(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&Oo(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),g=M(()=>ad(u(),100)),f=e.dataPath??[];return(()=>{var h=Zt();return k(h,v(K,{get when(){return g().length},get children(){return[(()=>{var p=rd(),m=p.firstChild,y=m.firstChild,b=y.nextSibling,x=b.nextSibling,w=x.nextSibling,$=w.firstChild;return m.$$click=()=>l(),k(m,v(Do,{get expanded(){return s()}}),y),k(b,()=>e.label),k(w,()=>String(d()).toLowerCase()==="iterable"?"(Iterable) ":"",$),k(w,()=>u().length,$),k(w,()=>u().length>1?"items":"item",null),k(p,v(K,{get when(){return e.editable},get children(){var O=Zt();return k(O,v(ld,{get value(){return e.value}}),null),k(O,v(K,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return v(Lo,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),k(O,v(K,{get when(){return d()==="array"&&e.activeQuery!==void 0},get children(){return v(cd,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),k(O,v(K,{get when(){return M(()=>!!e.onEdit)()&&!Es(e.value).meta},get children(){var P=nd();return P.$$click=()=>{e.onEdit?.()},k(P,v(Nu,{})),N(()=>A(P,r().actionButton)),P}}),null),N(()=>A(O,r().actions)),O}}),null),N(O=>{var P=r().expanderButtonContainer,L=r().expanderButton,S=r().info;return P!==O.e&&A(p,O.e=P),L!==O.t&&A(m,O.t=L),S!==O.a&&A(w,O.a=S),O},{e:void 0,t:void 0,a:void 0}),p})(),v(K,{get when(){return s()},get children(){return[v(K,{get when(){return g().length===1},get children(){var p=Zt();return k(p,v(wn,{get each(){return u()},by:m=>m.label,children:m=>v(pt,{get defaultExpanded(){return e.defaultExpanded},get label(){return m().label},get value(){return m().value},get editable(){return e.editable},get dataPath(){return[...f,m().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return d()==="array"||d()==="Iterable"||d()==="object"}})})),N(()=>A(p,r().subEntry)),p}}),v(K,{get when(){return g().length>1},get children(){var p=Zt();return k(p,v(Ms,{get each(){return g()},children:(m,y)=>(()=>{var b=sd(),x=b.firstChild,w=x.firstChild,$=w.firstChild,O=$.nextSibling,P=O.nextSibling,L=P.nextSibling;return L.nextSibling,w.$$click=()=>c(S=>S.includes(y)?S.filter(F=>F!==y):[...S,y]),k(w,v(Do,{get expanded(){return i().includes(y)}}),$),k(w,y*100,O),k(w,y*100+100-1,L),k(x,v(K,{get when(){return i().includes(y)},get children(){var S=Zt();return k(S,v(wn,{get each(){return m()},by:F=>F.label,children:F=>v(pt,{get defaultExpanded(){return e.defaultExpanded},get label(){return F().label},get value(){return F().value},get editable(){return e.editable},get dataPath(){return[...f,F().label]},get activeQuery(){return e.activeQuery}})})),N(()=>A(S,r().subEntry)),S}}),null),N(S=>{var F=r().entry,H=r().expanderButton;return F!==S.e&&A(x,S.e=F),H!==S.t&&A(w,S.t=H),S},{e:void 0,t:void 0}),b})()})),N(()=>A(p,r().subEntry)),p}})]}})]}}),null),k(h,v(K,{get when(){return g().length===0},get children(){var p=id(),m=p.firstChild,y=m.firstChild;return k(m,()=>e.label,y),k(p,v(K,{get when(){return M(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(d()==="string"||d()==="number"||d()==="boolean")},get fallback(){return(()=>{var b=Po();return k(b,()=>xn(e.value)),N(()=>A(b,r().value)),b})()},get children(){return[v(K,{get when(){return M(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(d()==="string"||d()==="number")},get children(){var b=od();return b.addEventListener("change",x=>{const w=e.activeQuery.state.data,$=rr(w,f,d()==="number"?x.target.valueAsNumber:x.target.value);o.setQueryData(e.activeQuery.queryKey,$)}),N(x=>{var w=d()==="number"?"number":"text",$=q(r().value,r().editableInput);return w!==x.e&&I(b,"type",x.e=w),$!==x.t&&A(b,x.t=$),x},{e:void 0,t:void 0}),N(()=>b.value=e.value),b}}),v(K,{get when(){return d()==="boolean"},get children(){var b=Po();return k(b,v(ud,{get activeQuery(){return e.activeQuery},dataPath:f,get value(){return e.value}}),null),k(b,()=>xn(e.value),null),N(()=>A(b,q(r().value,r().actions,r().editableInput))),b}})]}}),null),k(p,v(K,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return v(Lo,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),N(b=>{var x=r().row,w=r().label;return x!==b.e&&A(p,b.e=x),w!==b.t&&A(m,b.t=w),b},{e:void 0,t:void 0}),p}}),null),N(()=>A(h,r().entry)),h})()}var fs=(e,t)=>{const{colors:n,font:r,size:o,border:s}=C,a=(l,i)=>e==="light"?l:i;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${a(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${a(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${a(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${a(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${s.radius.xs};
      background-color: ${a(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${a(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${a(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${a(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},Gt=e=>fs("light",e),Vt=e=>fs("dark",e);nr(["click"]);var dd=_('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),gn=_("<div>"),fd=_('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),gd=_("<select name=tsqd-queries-filter-sort>"),hd=_("<select name=tsqd-mutations-filter-sort>"),vd=_("<span>Asc"),pd=_("<span>Desc"),md=_('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),yd=_("<div>Settings"),bd=_("<span>Position"),xd=_("<span>Top"),wd=_("<span>Bottom"),$d=_("<span>Left"),Cd=_("<span>Right"),Sd=_("<span>Theme"),kd=_("<span>Light"),Ed=_("<span>Dark"),Md=_("<span>System"),Td=_("<div><div class=tsqd-queries-container>"),Id=_("<div><div class=tsqd-mutations-container>"),Ad=_('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),qo=_("<option>Sort by "),Pd=_("<div class=tsqd-query-disabled-indicator>disabled"),gs=_("<button><div></div><code class=tsqd-query-hash>"),Dd=_("<div role=tooltip id=tsqd-status-tooltip>"),Ld=_("<span>"),Od=_("<button><span></span><span>"),qd=_("<button><span></span> Error"),Fd=_('<div><span></span>Trigger Error<select><option value=""disabled selected>'),_d=_('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),zd=_("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),Rd=_('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Kd=_("<option>"),Bd=_('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[Pe,Fn]=z(null),[mt,hs]=z(null),[He,Sr]=z(0),[Ot,Fo]=z(!1),nf=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ne(n):Be(n)),o=ir(),s=M(()=>R().buttonPosition||Us),a=M(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:R().initialIsOpen||Gs),l=M(()=>e.localStore.position||R().position||Hn);let i;B(()=>{const u=i.parentElement,d=e.localStore.height||Ro,g=e.localStore.width||Ko,f=l();u.style.setProperty("--tsqd-panel-height",`${f==="top"?"-":""}${d}px`),u.style.setProperty("--tsqd-panel-width",`${f==="left"?"-":""}${g}px`)}),It(()=>{const u=()=>{const d=i.parentElement,g=getComputedStyle(d).fontSize;d.style.setProperty("--tsqd-font-size",g)};u(),window.addEventListener("focus",u),U(()=>{window.removeEventListener("focus",u)})});const c=M(()=>e.localStore.pip_open??"false");return[v(K,{get when(){return M(()=>!!o().pipWindow)()&&c()=="true"},get children(){return v(_o,{get mount(){return o().pipWindow?.document.body},get children(){return v(Nd,{get children(){return v(vs,e)}})}})}}),(()=>{var u=gn(),d=i;return typeof d=="function"?an(d,u):i=u,k(u,v(Yr,{name:"tsqd-panel-transition",get children(){return v(K,{get when(){return M(()=>!!(a()&&!o().pipWindow))()&&c()=="false"},get children(){return v(Ud,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),k(u,v(Yr,{name:"tsqd-button-transition",get children(){return v(K,{get when(){return!a()},get children(){var g=dd(),f=g.firstChild,h=f.nextSibling;return k(f,v(Ao,{})),h.$$click=()=>e.setLocalStore("open","true"),k(h,v(Ao,{})),N(()=>A(g,q(r().devtoolsBtn,r()[`devtoolsBtn-position-${s()}`],"tsqd-open-btn-container"))),g}})}}),null),N(()=>A(u,q(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${l()==="top"||l()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${s()==="relative"?"none;":s()==="top-left"?"translateX(-72px);":s()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),u})()]},Nd=e=>{const t=ir(),n=ye(),r=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,o=M(()=>n()==="dark"?Ne(r):Be(r)),s=()=>{const{colors:a}=C,l=(i,c)=>n()==="dark"?c:i;return He()<Et?r`
        flex-direction: column;
        background-color: ${l(a.gray[300],a.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${l(a.gray[200],a.darkGray[900])};
    `};return B(()=>{const a=t().pipWindow,l=()=>{a&&Sr(a.innerWidth)};a&&(a.addEventListener("resize",l),l()),U(()=>{a&&a.removeEventListener("resize",l)})}),(()=>{var a=gn();return a.style.setProperty("--tsqd-font-size","16px"),a.style.setProperty("max-height","100vh"),a.style.setProperty("height","100vh"),a.style.setProperty("width","100vw"),k(a,()=>e.children),N(()=>A(a,q(o().panel,s(),{[r`
            min-width: min-content;
          `]:He()<or},"tsqd-main-panel"))),a})()},rf=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ne(n):Be(n));let o;It(()=>{Ho(o,({width:a},l)=>{l===o&&Sr(a)})});const s=()=>{const{colors:a}=C,l=(i,c)=>t()==="dark"?c:i;return He()<Et?n`
        flex-direction: column;
        background-color: ${l(a.gray[300],a.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${l(a.gray[200],a.darkGray[900])};
    `};return(()=>{var a=gn(),l=o;return typeof l=="function"?an(l,a):o=a,a.style.setProperty("--tsqd-font-size","16px"),k(a,()=>e.children),N(()=>A(a,q(r().parentPanel,s(),{[n`
            min-width: min-content;
          `]:He()<or},"tsqd-main-panel"))),a})()},Ud=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ne(n):Be(n)),[o,s]=z(!1),a=M(()=>e.localStore.position||R().position||Hn),l=u=>{const d=u.currentTarget.parentElement;if(!d)return;s(!0);const{height:g,width:f}=d.getBoundingClientRect(),h=u.clientX,p=u.clientY;let m=0;const y=Rr(3.5),b=Rr(12),x=$=>{if($.preventDefault(),a()==="left"||a()==="right"){const O=a()==="right"?h-$.clientX:$.clientX-h;m=Math.round(f+O),m<b&&(m=b),e.setLocalStore("width",String(Math.round(m)));const P=d.getBoundingClientRect().width;Number(e.localStore.width)<P&&e.setLocalStore("width",String(P))}else{const O=a()==="bottom"?p-$.clientY:$.clientY-p;m=Math.round(g+O),m<y&&(m=y,Fn(null)),e.setLocalStore("height",String(Math.round(m)))}},w=()=>{o()&&s(!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("mouseUp",w,!1)};document.addEventListener("mousemove",x,!1),document.addEventListener("mouseup",w,!1)};let i;It(()=>{Ho(i,({width:u},d)=>{d===i&&Sr(u)})}),B(()=>{const u=i.parentElement?.parentElement?.parentElement;if(!u)return;const d=e.localStore.position||Hn,g=Ts("padding",d),f=e.localStore.position==="left"||e.localStore.position==="right",h=(({padding:p,paddingTop:m,paddingBottom:y,paddingLeft:b,paddingRight:x})=>({padding:p,paddingTop:m,paddingBottom:y,paddingLeft:b,paddingRight:x}))(u.style);u.style[g]=`${f?e.localStore.width:e.localStore.height}px`,U(()=>{Object.entries(h).forEach(([p,m])=>{u.style[p]=m})})});const c=()=>{const{colors:u}=C,d=(g,f)=>t()==="dark"?f:g;return He()<Et?n`
        flex-direction: column;
        background-color: ${d(u.gray[300],u.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${d(u.gray[200],u.darkGray[900])};
    `};return(()=>{var u=fd(),d=u.firstChild,g=d.nextSibling,f=i;return typeof f=="function"?an(f,u):i=u,d.$$mousedown=l,g.$$click=()=>e.setLocalStore("open","false"),k(g,v(tn,{})),k(u,v(vs,e),null),N(h=>{var p=q(r().panel,r()[`panel-position-${a()}`],c(),{[n`
            min-width: min-content;
          `]:He()<or&&(a()==="right"||a()==="left")},"tsqd-main-panel"),m=a()==="bottom"||a()==="top"?`${e.localStore.height||Ro}px`:"auto",y=a()==="right"||a()==="left"?`${e.localStore.width||Ko}px`:"auto",b=q(r().dragHandle,r()[`dragHandle-position-${a()}`],"tsqd-drag-handle"),x=q(r().closeBtn,r()[`closeBtn-position-${a()}`],"tsqd-minimize-btn");return p!==h.e&&A(u,h.e=p),m!==h.t&&((h.t=m)!=null?u.style.setProperty("height",m):u.style.removeProperty("height")),y!==h.a&&((h.a=y)!=null?u.style.setProperty("width",y):u.style.removeProperty("width")),b!==h.o&&A(d,h.o=b),x!==h.i&&A(g,h.i=x),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),u})()},vs=e=>{Yd(),Xd();let t;const n=ye(),r=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,o=M(()=>n()==="dark"?Ne(r):Be(r)),s=ir(),[a,l]=z("queries"),i=M(()=>e.localStore.sort||Hs),c=M(()=>Number(e.localStore.sortOrder)||Nr),u=M(()=>e.localStore.mutationSort||js),d=M(()=>Number(e.localStore.mutationSortOrder)||Nr),g=M(()=>Un[i()]),f=M(()=>Gn[u()]),h=M(()=>R().onlineManager),p=M(()=>R().client.getQueryCache()),m=M(()=>R().client.getMutationCache()),y=be(P=>P().getAll().length,!1),b=M(ct(()=>[y(),e.localStore.filter,i(),c()],()=>{const P=p().getAll(),L=e.localStore.filter?P.filter(F=>Ur(F.queryHash,e.localStore.filter||"").passed):[...P];return g()?L.sort((F,H)=>g()(F,H)*c()):L})),x=Ve(P=>P().getAll().length,!1),w=M(ct(()=>[x(),e.localStore.mutationFilter,u(),d()],()=>{const P=m().getAll(),L=e.localStore.mutationFilter?P.filter(F=>{const H=`${F.options.mutationKey?JSON.stringify(F.options.mutationKey)+" - ":""}${new Date(F.state.submittedAt).toLocaleString()}`;return Ur(H,e.localStore.mutationFilter||"").passed}):[...P];return f()?L.sort((F,H)=>f()(F,H)*d()):L})),$=P=>{e.setLocalStore("position",P)},O=P=>{const S=getComputedStyle(t).getPropertyValue("--tsqd-font-size");P.style.setProperty("--tsqd-font-size",S)};return[(()=>{var P=Ad(),L=P.firstChild,S=L.firstChild,F=S.firstChild,H=F.firstChild,G=H.nextSibling,te=G.firstChild,J=L.nextSibling,ae=J.firstChild,oe=ae.firstChild,ne=oe.firstChild,ie=oe.nextSibling,le=ie.nextSibling,ve=ae.nextSibling,Te=ve.firstChild,ge=Te.nextSibling,ke=t;return typeof ke=="function"?an(ke,P):t=P,F.$$click=()=>{if(!s().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},k(G,()=>R().queryFlavor,te),k(G,()=>R().version,null),k(S,v(_e.Root,{get class(){return q(o().viewToggle)},get value(){return a()},onChange:T=>{l(T),Fn(null),hs(null)},get children(){return[v(_e.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[v(_e.ItemInput,{}),v(_e.ItemControl,{get children(){return v(_e.ItemIndicator,{})}}),v(_e.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),v(_e.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[v(_e.ItemInput,{}),v(_e.ItemControl,{get children(){return v(_e.ItemIndicator,{})}}),v(_e.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),k(L,v(K,{get when(){return a()==="queries"},get children(){return v(Hd,{})}}),null),k(L,v(K,{get when(){return a()==="mutations"},get children(){return v(jd,{})}}),null),k(oe,v(Pu,{}),ne),ne.$$input=T=>{a()==="queries"?e.setLocalStore("filter",T.currentTarget.value):e.setLocalStore("mutationFilter",T.currentTarget.value)},k(ie,v(K,{get when(){return a()==="queries"},get children(){var T=gd();return T.addEventListener("change",fe=>{e.setLocalStore("sort",fe.currentTarget.value)}),k(T,()=>Object.keys(Un).map(fe=>(()=>{var Y=qo();return Y.firstChild,Y.value=fe,k(Y,fe,null),Y})())),N(()=>T.value=i()),T}}),null),k(ie,v(K,{get when(){return a()==="mutations"},get children(){var T=hd();return T.addEventListener("change",fe=>{e.setLocalStore("mutationSort",fe.currentTarget.value)}),k(T,()=>Object.keys(Gn).map(fe=>(()=>{var Y=qo();return Y.firstChild,Y.value=fe,k(Y,fe,null),Y})())),N(()=>T.value=u()),T}}),null),k(ie,v(tn,{}),null),le.$$click=()=>{a()==="queries"?e.setLocalStore("sortOrder",String(c()*-1)):e.setLocalStore("mutationSortOrder",String(d()*-1))},k(le,v(K,{get when(){return(a()==="queries"?c():d())===1},get children(){return[vd(),v(To,{})]}}),null),k(le,v(K,{get when(){return(a()==="queries"?c():d())===-1},get children(){return[pd(),v(Io,{})]}}),null),Te.$$click=()=>{a()==="queries"?p().clear():m().clear()},k(Te,v(ds,{})),ge.$$click=()=>{Ot()?(h().setOnline(!0),Fo(!1)):(h().setOnline(!1),Fo(!0))},k(ge,(()=>{var T=M(()=>!!Ot());return()=>T()?v(zu,{}):v(_u,{})})()),k(ve,v(K,{get when(){return M(()=>!s().pipWindow)()&&!s().disabled},get children(){var T=md();return T.$$click=()=>{s().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},k(T,v(Ku,{})),N(()=>A(T,q(o().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),T}}),null),k(ve,v(he.Root,{gutter:4,get children(){return[v(he.Trigger,{get class(){return q(o().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return v(Ru,{})}}),v(he.Portal,{ref:T=>O(T),get mount(){return M(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return v(he.Content,{get class(){return q(o().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var T=yd();return N(()=>A(T,q(o().settingsMenuHeader,"tsqd-settings-menu-header"))),T})(),v(K,{get when(){return!e.showPanelViewOnly},get children(){return v(he.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[v(he.SubTrigger,{get class(){return q(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[bd(),v(tn,{})]}}),v(he.Portal,{ref:T=>O(T),get mount(){return M(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return v(he.SubContent,{get class(){return q(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[v(he.Item,{onSelect:()=>{$("top")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[xd(),v(To,{})]}}),v(he.Item,{onSelect:()=>{$("bottom")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[wd(),v(Io,{})]}}),v(he.Item,{onSelect:()=>{$("left")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[$d(),v(Du,{})]}}),v(he.Item,{onSelect:()=>{$("right")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Cd(),v(Lu,{})]}})]}})}})]}})}}),v(he.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[v(he.SubTrigger,{get class(){return q(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Sd(),v(tn,{})]}}),v(he.Portal,{ref:T=>O(T),get mount(){return M(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return v(he.SubContent,{get class(){return q(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[v(he.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return q(o().settingsSubButton,e.localStore.theme_preference==="light"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[kd(),v(Ou,{})]}}),v(he.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return q(o().settingsSubButton,e.localStore.theme_preference==="dark"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Ed(),v(qu,{})]}}),v(he.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return q(o().settingsSubButton,e.localStore.theme_preference==="system"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Md(),v(Fu,{})]}})]}})}})]}})]}})}})]}}),null),k(P,v(K,{get when(){return a()==="queries"},get children(){var T=Td(),fe=T.firstChild;return k(fe,v(wn,{by:Y=>Y.queryHash,get each(){return b()},children:Y=>v(Gd,{get query(){return Y()}})})),N(()=>A(T,q(o().overflowQueryContainer,"tsqd-queries-overflow-container"))),T}}),null),k(P,v(K,{get when(){return a()==="mutations"},get children(){var T=Id(),fe=T.firstChild;return k(fe,v(wn,{by:Y=>Y.mutationId,get each(){return w()},children:Y=>v(Vd,{get mutation(){return Y()}})})),N(()=>A(T,q(o().overflowQueryContainer,"tsqd-mutations-overflow-container"))),T}}),null),N(T=>{var fe=q(o().queriesContainer,He()<Et&&(Pe()||mt())&&r`
              height: 50%;
              max-height: 50%;
            `,He()<Et&&!(Pe()||mt())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),Y=q(o().row,"tsqd-header"),gt=o().logoAndToggleContainer,V=q(o().logo,"tsqd-text-logo-container"),Ue=q(o().tanstackLogo,"tsqd-text-logo-tanstack"),$e=q(o().queryFlavorLogo,"tsqd-text-logo-query-flavor"),Pt=q(o().row,"tsqd-filters-actions-container"),Oe=q(o().filtersContainer,"tsqd-filters-container"),ht=q(o().filterInput,"tsqd-query-filter-textfield-container"),$t=q("tsqd-query-filter-textfield"),et=q(o().filterSelect,"tsqd-query-filter-sort-container"),Qe=`Sort order ${(a()==="queries"?c():d())===-1?"descending":"ascending"}`,tt=(a()==="queries"?c():d())===-1,D=q(o().actionsContainer,"tsqd-actions-container"),re=q(o().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),Ee=`Clear ${a()} cache`,se=q(o().actionsBtn,Ot()&&o().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),ee=`${Ot()?"Unset offline mocking behavior":"Mock offline behavior"}`,ce=Ot(),pe=`${Ot()?"Unset offline mocking behavior":"Mock offline behavior"}`;return fe!==T.e&&A(P,T.e=fe),Y!==T.t&&A(L,T.t=Y),gt!==T.a&&A(S,T.a=gt),V!==T.o&&A(F,T.o=V),Ue!==T.i&&A(H,T.i=Ue),$e!==T.n&&A(G,T.n=$e),Pt!==T.s&&A(J,T.s=Pt),Oe!==T.h&&A(ae,T.h=Oe),ht!==T.r&&A(oe,T.r=ht),$t!==T.d&&A(ne,T.d=$t),et!==T.l&&A(ie,T.l=et),Qe!==T.u&&I(le,"aria-label",T.u=Qe),tt!==T.c&&I(le,"aria-pressed",T.c=tt),D!==T.w&&A(ve,T.w=D),re!==T.m&&A(Te,T.m=re),Ee!==T.f&&I(Te,"title",T.f=Ee),se!==T.y&&A(ge,T.y=se),ee!==T.g&&I(ge,"aria-label",T.g=ee),ce!==T.p&&I(ge,"aria-pressed",T.p=ce),pe!==T.b&&I(ge,"title",T.b=pe),T},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),N(()=>ne.value=a()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),P})(),v(K,{get when(){return M(()=>a()==="queries")()&&Pe()},get children(){return v(Wd,{})}}),v(K,{get when(){return M(()=>a()==="mutations")()&&mt()},get children(){return v(Qd,{})}})]},Gd=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ne(n):Be(n)),{colors:o,alpha:s}=C,a=(f,h)=>t()==="dark"?h:f,l=be(f=>f().find({queryKey:e.query.queryKey})?.state,!0,f=>f.query.queryHash===e.query.queryHash),i=be(f=>f().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,f=>f.query.queryHash===e.query.queryHash),c=be(f=>f().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,f=>f.query.queryHash===e.query.queryHash),u=be(f=>f().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,f=>f.query.queryHash===e.query.queryHash),d=M(()=>bs({queryState:l(),observerCount:u(),isStale:c()})),g=()=>d()==="gray"?n`
        background-color: ${a(o[d()][200],o[d()][700])};
        color: ${a(o[d()][700],o[d()][300])};
      `:n`
      background-color: ${a(o[d()][200]+s[80],o[d()][900])};
      color: ${a(o[d()][800],o[d()][300])};
    `;return v(K,{get when(){return l()},get children(){var f=gs(),h=f.firstChild,p=h.nextSibling;return f.$$click=()=>Fn(e.query.queryHash===Pe()?null:e.query.queryHash),k(h,u),k(p,()=>e.query.queryHash),k(f,v(K,{get when(){return i()},get children(){return Pd()}}),null),N(m=>{var y=q(r().queryRow,Pe()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),b=`Query key ${e.query.queryHash}`,x=q(g(),"tsqd-query-observer-count");return y!==m.e&&A(f,m.e=y),b!==m.t&&I(f,"aria-label",m.t=b),x!==m.a&&A(h,m.a=x),m},{e:void 0,t:void 0,a:void 0}),f}})},Vd=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ne(n):Be(n)),{colors:o,alpha:s}=C,a=(g,f)=>t()==="dark"?f:g,l=Ve(g=>g().getAll().find(p=>p.mutationId===e.mutation.mutationId)?.state),i=Ve(g=>{const h=g().getAll().find(p=>p.mutationId===e.mutation.mutationId);return h?h.state.isPaused:!1}),c=Ve(g=>{const h=g().getAll().find(p=>p.mutationId===e.mutation.mutationId);return h?h.state.status:"idle"}),u=M(()=>zt({isPaused:i(),status:c()})),d=()=>u()==="gray"?n`
        background-color: ${a(o[u()][200],o[u()][700])};
        color: ${a(o[u()][700],o[u()][300])};
      `:n`
      background-color: ${a(o[u()][200]+s[80],o[u()][900])};
      color: ${a(o[u()][800],o[u()][300])};
    `;return v(K,{get when(){return l()},get children(){var g=gs(),f=g.firstChild,h=f.nextSibling;return g.$$click=()=>{hs(e.mutation.mutationId===mt()?null:e.mutation.mutationId)},k(f,v(K,{get when(){return u()==="purple"},get children(){return v(Yu,{})}}),null),k(f,v(K,{get when(){return u()==="green"},get children(){return v(ju,{})}}),null),k(f,v(K,{get when(){return u()==="red"},get children(){return v(Qu,{})}}),null),k(f,v(K,{get when(){return u()==="yellow"},get children(){return v(Wu,{})}}),null),k(h,v(K,{get when(){return e.mutation.options.mutationKey},get children(){return[M(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),k(h,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),N(p=>{var m=q(r().queryRow,mt()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),y=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,b=q(d(),"tsqd-query-observer-count");return m!==p.e&&A(g,p.e=m),y!==p.t&&I(g,"aria-label",p.t=y),b!==p.a&&A(f,p.a=b),p},{e:void 0,t:void 0,a:void 0}),g}})},Hd=()=>{const e=be(i=>i().getAll().filter(c=>qt(c)==="stale").length),t=be(i=>i().getAll().filter(c=>qt(c)==="fresh").length),n=be(i=>i().getAll().filter(c=>qt(c)==="fetching").length),r=be(i=>i().getAll().filter(c=>qt(c)==="paused").length),o=be(i=>i().getAll().filter(c=>qt(c)==="inactive").length),s=ye(),a=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,l=M(()=>s()==="dark"?Ne(a):Be(a));return(()=>{var i=gn();return k(i,v(lt,{label:"Fresh",color:"green",get count(){return t()}}),null),k(i,v(lt,{label:"Fetching",color:"blue",get count(){return n()}}),null),k(i,v(lt,{label:"Paused",color:"purple",get count(){return r()}}),null),k(i,v(lt,{label:"Stale",color:"yellow",get count(){return e()}}),null),k(i,v(lt,{label:"Inactive",color:"gray",get count(){return o()}}),null),N(()=>A(i,q(l().queryStatusContainer,"tsqd-query-status-container"))),i})()},jd=()=>{const e=Ve(l=>l().getAll().filter(i=>zt({isPaused:i.state.isPaused,status:i.state.status})==="green").length),t=Ve(l=>l().getAll().filter(i=>zt({isPaused:i.state.isPaused,status:i.state.status})==="yellow").length),n=Ve(l=>l().getAll().filter(i=>zt({isPaused:i.state.isPaused,status:i.state.status})==="purple").length),r=Ve(l=>l().getAll().filter(i=>zt({isPaused:i.state.isPaused,status:i.state.status})==="red").length),o=ye(),s=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,a=M(()=>o()==="dark"?Ne(s):Be(s));return(()=>{var l=gn();return k(l,v(lt,{label:"Paused",color:"purple",get count(){return n()}}),null),k(l,v(lt,{label:"Pending",color:"yellow",get count(){return t()}}),null),k(l,v(lt,{label:"Success",color:"green",get count(){return e()}}),null),k(l,v(lt,{label:"Error",color:"red",get count(){return r()}}),null),N(()=>A(l,q(a().queryStatusContainer,"tsqd-query-status-container"))),l})()},lt=e=>{const t=ye(),n=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ne(n):Be(n)),{colors:o,alpha:s}=C,a=(f,h)=>t()==="dark"?h:f;let l;const[i,c]=z(!1),[u,d]=z(!1),g=M(()=>!(Pe()&&He()<Ns&&He()>Et||He()<Et));return(()=>{var f=Od(),h=f.firstChild,p=h.nextSibling,m=l;return typeof m=="function"?an(m,f):l=f,f.addEventListener("mouseleave",()=>{c(!1),d(!1)}),f.addEventListener("mouseenter",()=>c(!0)),f.addEventListener("blur",()=>d(!1)),f.addEventListener("focus",()=>d(!0)),xs(f,j({get disabled(){return g()},get class(){return q(r().queryStatusTag,!g()&&n`
            cursor: pointer;
            &:hover {
              background: ${a(o.gray[200],o.darkGray[400])}${s[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>i()||u()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),k(f,v(K,{get when(){return M(()=>!g())()&&(i()||u())},get children(){var y=Dd();return k(y,()=>e.label),N(()=>A(y,q(r().statusTooltip,"tsqd-query-status-tooltip"))),y}}),h),k(f,v(K,{get when(){return g()},get children(){var y=Ld();return k(y,()=>e.label),N(()=>A(y,q(r().queryStatusTagLabel,"tsqd-query-status-tag-label"))),y}}),p),k(p,()=>e.count),N(y=>{var b=q(n`
            width: ${C.size[1.5]};
            height: ${C.size[1.5]};
            border-radius: ${C.border.radius.full};
            background-color: ${C.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),x=q(r().queryStatusCount,e.count>0&&e.color!=="gray"&&n`
              background-color: ${a(o[e.color][100],o[e.color][900])};
              color: ${a(o[e.color][700],o[e.color][300])};
            `,"tsqd-query-status-tag-count");return b!==y.e&&A(h,y.e=b),x!==y.t&&A(p,y.t=x),y},{e:void 0,t:void 0}),f})()},Wd=()=>{const e=ye(),t=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,n=M(()=>e()==="dark"?Ne(t):Be(t)),{colors:r}=C,o=(S,F)=>e()==="dark"?F:S,s=R().client,[a,l]=z(!1),[i,c]=z("view"),[u,d]=z(!1),g=M(()=>R().errorTypes||[]),f=be(S=>S().getAll().find(F=>F.queryHash===Pe()),!1),h=be(S=>S().getAll().find(F=>F.queryHash===Pe()),!1),p=be(S=>S().getAll().find(F=>F.queryHash===Pe())?.state,!1),m=be(S=>S().getAll().find(F=>F.queryHash===Pe())?.state.data,!1),y=be(S=>{const F=S().getAll().find(H=>H.queryHash===Pe());return F?qt(F):"inactive"}),b=be(S=>{const F=S().getAll().find(H=>H.queryHash===Pe());return F?F.state.status:"pending"}),x=be(S=>S().getAll().find(F=>F.queryHash===Pe())?.getObserversCount()??0),w=M(()=>ws(y())),$=()=>{f()?.fetch()?.catch(()=>{})},O=S=>{const F=S?.initializer(f())??new Error("Unknown error from devtools"),H=f().options;f().setState({status:"error",error:F,fetchMeta:{...f().state.fetchMeta,__previousQueryOptions:H}})},P=()=>{const S=f(),F=S.state,H=S.state.fetchMeta?S.state.fetchMeta.__previousQueryOptions:null;S.cancel({silent:!0}),S.setState({...F,fetchStatus:"idle",fetchMeta:null}),H&&S.fetch(H)};B(()=>{y()!=="fetching"&&l(!1)});const L=()=>w()==="gray"?t`
        background-color: ${o(r[w()][200],r[w()][700])};
        color: ${o(r[w()][700],r[w()][300])};
        border-color: ${o(r[w()][400],r[w()][600])};
      `:t`
      background-color: ${o(r[w()][100],r[w()][900])};
      color: ${o(r[w()][700],r[w()][300])};
      border-color: ${o(r[w()][400],r[w()][600])};
    `;return v(K,{get when(){return M(()=>!!f())()&&p()},get children(){var S=Rd(),F=S.firstChild,H=F.nextSibling,G=H.firstChild,te=G.firstChild,J=te.firstChild,ae=te.nextSibling,oe=G.nextSibling,ne=oe.firstChild,ie=ne.nextSibling,le=oe.nextSibling,ve=le.firstChild,Te=ve.nextSibling,ge=H.nextSibling,ke=ge.nextSibling,T=ke.firstChild,fe=T.firstChild,Y=T.nextSibling,gt=Y.firstChild,V=Y.nextSibling,Ue=V.firstChild,$e=V.nextSibling,Pt=$e.firstChild,Oe=$e.nextSibling,ht=Oe.firstChild,$t=ht.nextSibling,et=ke.nextSibling;et.firstChild;var Qe=et.nextSibling,tt=Qe.nextSibling;return k(J,()=>xn(f().queryKey,!0)),k(ae,y),k(ie,x),k(Te,()=>new Date(p().dataUpdatedAt).toLocaleTimeString()),T.$$click=$,Y.$$click=()=>s.invalidateQueries(f()),V.$$click=()=>s.resetQueries(f()),$e.$$click=()=>{s.removeQueries(f()),Fn(null)},Oe.$$click=()=>{if(f()?.state.data===void 0)l(!0),P();else{const D=f();if(!D)return;const re=D.options;D.fetch({...re,queryFn:()=>new Promise(()=>{}),gcTime:-1}),D.setState({data:void 0,status:"pending",fetchMeta:{...D.state.fetchMeta,__previousQueryOptions:re}})}},k(Oe,()=>b()==="pending"?"Restore":"Trigger",$t),k(ke,v(K,{get when(){return g().length===0||b()==="error"},get children(){var D=qd(),re=D.firstChild,Ee=re.nextSibling;return D.$$click=()=>{f().state.error?s.resetQueries(f()):O()},k(D,()=>b()==="error"?"Restore":"Trigger",Ee),N(se=>{var ee=q(t`
                  color: ${o(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),ce=b()==="pending",pe=t`
                  background-color: ${o(r.red[500],r.red[400])};
                `;return ee!==se.e&&A(D,se.e=ee),ce!==se.t&&(D.disabled=se.t=ce),pe!==se.a&&A(re,se.a=pe),se},{e:void 0,t:void 0,a:void 0}),D}}),null),k(ke,v(K,{get when(){return!(g().length===0||b()==="error")},get children(){var D=Fd(),re=D.firstChild,Ee=re.nextSibling,se=Ee.nextSibling;return se.firstChild,se.addEventListener("change",ee=>{const ce=g().find(pe=>pe.name===ee.currentTarget.value);O(ce)}),k(se,v($s,{get each(){return g()},children:ee=>(()=>{var ce=Kd();return k(ce,()=>ee.name),N(()=>ce.value=ee.name),ce})()}),null),k(D,v(tn,{}),null),N(ee=>{var ce=q(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),pe=t`
                  background-color: ${C.colors.red[400]};
                `,X=b()==="pending";return ce!==ee.e&&A(D,ee.e=ce),pe!==ee.t&&A(re,ee.t=pe),X!==ee.a&&(se.disabled=ee.a=X),ee},{e:void 0,t:void 0,a:void 0}),D}}),null),k(et,()=>i()==="view"?"Explorer":"Editor",null),k(S,v(K,{get when(){return i()==="view"},get children(){var D=_d();return k(D,v(pt,{label:"Data",defaultExpanded:["Data"],get value(){return m()},editable:!0,onEdit:()=>c("edit"),get activeQuery(){return f()}})),N(re=>(re=C.size[2])!=null?D.style.setProperty("padding",re):D.style.removeProperty("padding")),D}}),Qe),k(S,v(K,{get when(){return i()==="edit"},get children(){var D=zd(),re=D.firstChild,Ee=re.nextSibling,se=Ee.firstChild,ee=se.nextSibling,ce=ee.firstChild,pe=ce.nextSibling;return D.addEventListener("submit",X=>{X.preventDefault();const rt=new FormData(X.currentTarget).get("data");try{const Ge=JSON.parse(rt);f().setState({...f().state,data:Ge}),c("view")}catch{d(!0)}}),re.addEventListener("focus",()=>d(!1)),k(se,()=>u()?"Invalid Value":""),ce.$$click=()=>c("view"),N(X=>{var nt=q(n().devtoolsEditForm,"tsqd-query-details-data-editor"),rt=n().devtoolsEditTextarea,Ge=u(),Ct=n().devtoolsEditFormActions,ot=n().devtoolsEditFormError,St=n().devtoolsEditFormActionContainer,it=q(n().devtoolsEditFormAction,t`
                      color: ${o(r.gray[600],r.gray[300])};
                    `),vt=q(n().devtoolsEditFormAction,t`
                      color: ${o(r.blue[600],r.blue[400])};
                    `);return nt!==X.e&&A(D,X.e=nt),rt!==X.t&&A(re,X.t=rt),Ge!==X.a&&I(re,"data-error",X.a=Ge),Ct!==X.o&&A(Ee,X.o=Ct),ot!==X.i&&A(se,X.i=ot),St!==X.n&&A(ee,X.n=St),it!==X.s&&A(ce,X.s=it),vt!==X.h&&A(pe,X.h=vt),X},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),N(()=>re.value=JSON.stringify(m(),null,2)),D}}),Qe),k(tt,v(pt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),N(D=>{var re=q(n().detailsContainer,"tsqd-query-details-container"),Ee=q(n().detailsHeader,"tsqd-query-details-header"),se=q(n().detailsBody,"tsqd-query-details-summary-container"),ee=q(n().queryDetailsStatus,L()),ce=q(n().detailsHeader,"tsqd-query-details-header"),pe=q(n().actionsBody,"tsqd-query-details-actions-container"),X=q(t`
                color: ${o(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),nt=y()==="fetching",rt=t`
                background-color: ${o(r.blue[600],r.blue[400])};
              `,Ge=q(t`
                color: ${o(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),Ct=b()==="pending",ot=t`
                background-color: ${o(r.yellow[600],r.yellow[400])};
              `,St=q(t`
                color: ${o(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),it=b()==="pending",vt=t`
                background-color: ${o(r.gray[600],r.gray[400])};
              `,hn=q(t`
                color: ${o(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),Ht=y()==="fetching",vn=t`
                background-color: ${o(r.pink[500],r.pink[400])};
              `,Dt=q(t`
                color: ${o(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),pn=a(),jt=t`
                background-color: ${o(r.cyan[500],r.cyan[400])};
              `,Wt=q(n().detailsHeader,"tsqd-query-details-header"),Qt=q(n().detailsHeader,"tsqd-query-details-header"),Lt=C.size[2];return re!==D.e&&A(S,D.e=re),Ee!==D.t&&A(F,D.t=Ee),se!==D.a&&A(H,D.a=se),ee!==D.o&&A(ae,D.o=ee),ce!==D.i&&A(ge,D.i=ce),pe!==D.n&&A(ke,D.n=pe),X!==D.s&&A(T,D.s=X),nt!==D.h&&(T.disabled=D.h=nt),rt!==D.r&&A(fe,D.r=rt),Ge!==D.d&&A(Y,D.d=Ge),Ct!==D.l&&(Y.disabled=D.l=Ct),ot!==D.u&&A(gt,D.u=ot),St!==D.c&&A(V,D.c=St),it!==D.w&&(V.disabled=D.w=it),vt!==D.m&&A(Ue,D.m=vt),hn!==D.f&&A($e,D.f=hn),Ht!==D.y&&($e.disabled=D.y=Ht),vn!==D.g&&A(Pt,D.g=vn),Dt!==D.p&&A(Oe,D.p=Dt),pn!==D.b&&(Oe.disabled=D.b=pn),jt!==D.T&&A(ht,D.T=jt),Wt!==D.A&&A(et,D.A=Wt),Qt!==D.O&&A(Qe,D.O=Qt),Lt!==D.I&&((D.I=Lt)!=null?tt.style.setProperty("padding",Lt):tt.style.removeProperty("padding")),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),S}})},Qd=()=>{const e=ye(),t=R().shadowDOMTarget?W.bind({target:R().shadowDOMTarget}):W,n=M(()=>e()==="dark"?Ne(t):Be(t)),{colors:r}=C,o=(u,d)=>e()==="dark"?d:u,s=Ve(u=>{const g=u().getAll().find(f=>f.mutationId===mt());return g?g.state.isPaused:!1}),a=Ve(u=>{const g=u().getAll().find(f=>f.mutationId===mt());return g?g.state.status:"idle"}),l=M(()=>zt({isPaused:s(),status:a()})),i=Ve(u=>u().getAll().find(d=>d.mutationId===mt()),!1),c=()=>l()==="gray"?t`
        background-color: ${o(r[l()][200],r[l()][700])};
        color: ${o(r[l()][700],r[l()][300])};
        border-color: ${o(r[l()][400],r[l()][600])};
      `:t`
      background-color: ${o(r[l()][100],r[l()][900])};
      color: ${o(r[l()][700],r[l()][300])};
      border-color: ${o(r[l()][400],r[l()][600])};
    `;return v(K,{get when(){return i()},get children(){var u=Bd(),d=u.firstChild,g=d.nextSibling,f=g.firstChild,h=f.firstChild,p=h.firstChild,m=h.nextSibling,y=f.nextSibling,b=y.firstChild,x=b.nextSibling,w=g.nextSibling,$=w.nextSibling,O=$.nextSibling,P=O.nextSibling,L=P.nextSibling,S=L.nextSibling,F=S.nextSibling,H=F.nextSibling;return k(p,v(K,{get when(){return i().options.mutationKey},fallback:"No mutationKey found",get children(){return xn(i().options.mutationKey,!0)}})),k(m,v(K,{get when(){return l()==="purple"},children:"pending"}),null),k(m,v(K,{get when(){return l()!=="purple"},get children(){return a()}}),null),k(x,()=>new Date(i().state.submittedAt).toLocaleTimeString()),k($,v(pt,{label:"Variables",defaultExpanded:["Variables"],get value(){return i().state.variables}})),k(P,v(pt,{label:"Context",defaultExpanded:["Context"],get value(){return i().state.context}})),k(S,v(pt,{label:"Data",defaultExpanded:["Data"],get value(){return i().state.data}})),k(H,v(pt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return i()}})),N(G=>{var te=q(n().detailsContainer,"tsqd-query-details-container"),J=q(n().detailsHeader,"tsqd-query-details-header"),ae=q(n().detailsBody,"tsqd-query-details-summary-container"),oe=q(n().queryDetailsStatus,c()),ne=q(n().detailsHeader,"tsqd-query-details-header"),ie=C.size[2],le=q(n().detailsHeader,"tsqd-query-details-header"),ve=C.size[2],Te=q(n().detailsHeader,"tsqd-query-details-header"),ge=C.size[2],ke=q(n().detailsHeader,"tsqd-query-details-header"),T=C.size[2];return te!==G.e&&A(u,G.e=te),J!==G.t&&A(d,G.t=J),ae!==G.a&&A(g,G.a=ae),oe!==G.o&&A(m,G.o=oe),ne!==G.i&&A(w,G.i=ne),ie!==G.n&&((G.n=ie)!=null?$.style.setProperty("padding",ie):$.style.removeProperty("padding")),le!==G.s&&A(O,G.s=le),ve!==G.h&&((G.h=ve)!=null?P.style.setProperty("padding",ve):P.style.removeProperty("padding")),Te!==G.r&&A(L,G.r=Te),ge!==G.d&&((G.d=ge)!=null?S.style.setProperty("padding",ge):S.style.removeProperty("padding")),ke!==G.l&&A(F,G.l=ke),T!==G.u&&((G.u=T)!=null?H.style.setProperty("padding",T):H.style.removeProperty("padding")),G},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),u}})},En=new Map,Yd=()=>{const e=M(()=>R().client.getQueryCache()),t=e().subscribe(n=>{Cs(()=>{for(const[r,o]of En.entries())o.shouldUpdate(n)&&o.setter(r(e))})});return U(()=>{En.clear(),t()}),t},be=(e,t=!0,n=()=>!0)=>{const r=M(()=>R().client.getQueryCache()),[o,s]=z(e(r),t?void 0:{equals:!1});return B(()=>{s(e(r))}),En.set(e,{setter:s,shouldUpdate:n}),U(()=>{En.delete(e)}),o},Mn=new Map,Xd=()=>{const e=M(()=>R().client.getMutationCache()),t=e().subscribe(()=>{for(const[n,r]of Mn.entries())queueMicrotask(()=>{r(n(e))})});return U(()=>{Mn.clear(),t()}),t},Ve=(e,t=!0)=>{const n=M(()=>R().client.getMutationCache()),[r,o]=z(e(n),t?void 0:{equals:!1});return B(()=>{o(e(n))}),Mn.set(e,o),U(()=>{Mn.delete(e)}),r},ps=(e,t)=>{const{colors:n,font:r,size:o,alpha:s,shadow:a,border:l}=C,i=(c,u)=>e==="light"?c:u;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${a.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${C.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${C.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${l.radius.sm} ${l.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${l.radius.sm} 0px 0px ${l.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${l.radius.sm} ${l.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${i("",s[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${C.size[2]} ${C.size[2.5]};
      gap: ${C.size[2.5]};
      border-bottom: ${i(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${C.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${C.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${i(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${i("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${C.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${C.size[1.5]};
      box-sizing: border-box;
      height: ${C.size[6.5]};
      background: ${i(n.gray[50],n.darkGray[500])};
      color: ${i(n.gray[700],n.gray[300])};
      border-radius: ${C.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${C.size[1]};
      padding-left: ${C.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${i("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${i(n.gray[500],n.gray[400])};
      background-color: ${i(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${C.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${i(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${C.size[2]}));
      padding: ${C.size[.5]} ${C.size[2]};
      border-radius: ${C.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${i(n.gray[400],n.gray[600])};
      color: ${i(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${C.size[2]};
      & > button {
        cursor: pointer;
        padding: ${C.size[.5]} ${C.size[1.5]} ${C.size[.5]}
          ${C.size[2]};
        border-radius: ${C.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: 1px solid ${i(n.gray[300],n.darkGray[200])};
        color: ${i(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${C.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${C.size[3]};
          height: ${C.size[3]};
          color: ${i(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${C.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${i(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${i(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${i(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${C.size[.5]} ${C.size[2]};
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${C.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
      & > select {
        appearance: none;
        color: ${i(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${C.size[2]};
    `,actionsBtn:t`
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      width: ${C.size[6.5]};
      height: ${C.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${C.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${i(n.gray[700],n.gray[300])};
        width: ${C.size[3]};
        height: ${C.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${i(n.yellow[700],n.yellow[500])};
        fill: ${i(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${i(n.gray[700],n.gray[300])};
      background-color: ${i(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${i(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${C.size[1]};
        user-select: none;
        min-width: ${C.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${C.size[6]};
        flex: 1;
        padding: ${C.size[1]} ${C.size[2]};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${C.size[2]};
        color: ${i(n.gray[800],n.gray[300])};
        background-color: ${i(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${i(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      color: ${i(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${i(n.gray[200],n.darkGray[600])};
      padding: ${C.size[1.5]} ${C.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${C.size[1.5]} 0px ${C.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${C.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${C.size[1.5]};
      }

      & code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${C.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${C.size[1]} ${C.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${C.size[2]} 0px ${C.size[2]} 0px;
      display: flex;
      gap: ${C.size[2]};
      padding: 0px ${C.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${C.size[1]} ${C.size[2]};
        display: flex;
        border-radius: ${C.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[600])};
        border: 1px solid ${i(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${C.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${i(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${C.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${C.size[.5]} ${C.size[2]};
      display: flex;
      border-radius: ${C.border.radius.sm};
      overflow: hidden;
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${C.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${i(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${C.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${C.colors.red[400]};
      }
      & svg {
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${C.border.radius.sm};
      border: 1px solid ${i(n.gray[300],n.gray[700])};
      background-color: ${i(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${C.border.radius.xs};
      padding: ${C.size[1]} ${C.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${i(n.gray[700],n.gray[300])};
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${C.size[1]} ${C.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
      color: ${i(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${i(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${C.border.radius.xs};
      padding: ${C.size[1]} ${C.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${i(n.purple[100],n.purple[900])};
      color: ${i(n.purple[700],n.purple[300])};
      & svg {
        color: ${i(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${i(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[200],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${C.size[1.5]} 0 ${C.size[2]};
        }
        border-right: 1px solid ${i(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${C.size[2]} 0 ${C.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${i(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${l.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${i(n.gray[100],n.darkGray[800])};
      color: ${i(n.gray[900],n.gray[100])};
      border: 1px solid ${i(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${i(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${i(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${C.size[2]};
      display: flex;
      border-radius: ${l.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Be=e=>ps("light",e),Ne=e=>ps("dark",e);nr(["click","mousedown","input"]);export{vs as C,nf as D,tf as P,Ws as Q,ef as T,Qs as a,rf as b,Jd as c};
