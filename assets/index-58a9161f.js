(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const Ie=(e,t)=>e===t,X=Symbol("solid-proxy"),J={equals:Ie};let ke=oe;const v=1,_=2,Me={owned:null,cleanups:null,context:null,owner:null};var P=null;let W=null,C=null,N=null,T=null,R=0;function j(e,t,s){const n=fe(e,t,!1,v);U(n)}function De(e,t,s){s=s?Object.assign({},J,s):J;const n=fe(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,U(n),_e.bind(n)}function Z(e){if(C===null)return e();const t=C;C=null;try{return e()}finally{C=t}}function _e(){if(this.sources&&this.state)if(this.state===v)U(this);else{const e=N;N=null,F(()=>B(this),!1),N=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function Be(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],u=W&&W.running;u&&W.disposed.has(l),(u?!l.tState:!l.state)&&(l.pure?N.push(l):T.push(l),l.observers&&ae(l)),u||(l.state=v)}if(N.length>1e6)throw N=[],new Error},!1)),t}function U(e){if(!e.fn)return;Q(e);const t=P,s=C,n=R;C=P=e,Ge(e,e.value,n),C=s,P=t}function Ge(e,t,s){let n;try{n=e.fn(t)}catch(r){return e.pure&&(e.state=v,e.owned&&e.owned.forEach(Q),e.owned=null),e.updatedAt=s+1,he(r)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?Be(e,n):e.value=n,e.updatedAt=s)}function fe(e,t,s,n=v,r){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:P,context:null,pure:s};return P===null||P!==Me&&(P.owned?P.owned.push(l):P.owned=[l]),l}function ue(e){if(e.state===0)return;if(e.state===_)return B(e);if(e.suspense&&Z(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===v)U(e);else if(e.state===_){const n=N;N=null,F(()=>B(e,t[0]),!1),N=n}}function F(e,t){if(N)return e();let s=!1;t||(N=[]),T?s=!0:T=[],R++;try{const n=e();return Re(s),n}catch(n){s||(T=null),N=null,he(n)}}function Re(e){if(N&&(oe(N),N=null),e)return;const t=T;T=null,t.length&&F(()=>ke(t),!1)}function oe(e){for(let t=0;t<e.length;t++)ue(e[t])}function B(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const n=e.sources[s];if(n.sources){const r=n.state;r===v?n!==t&&(!n.updatedAt||n.updatedAt<R)&&ue(n):r===_&&B(n,t)}}}function ae(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=_,s.pure?N.push(s):T.push(s),s.observers&&ae(s))}}function Q(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),r=s.observers;if(r&&r.length){const l=r.pop(),u=s.observerSlots.pop();n<r.length&&(l.sourceSlots[u]=n,r[n]=l,s.observerSlots[n]=u)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function he(e){throw e}function Ue(e,t){return Z(()=>e(t||{}))}function D(){return!0}const Fe={get(e,t,s){return t===X?s:e.get(t)},has(e,t){return t===X?!0:e.has(t)},set:D,deleteProperty:D,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:D,deleteProperty:D}},ownKeys(e){return e.keys()}};function K(e){return(e=typeof e=="function"?e():e)?e:{}}function Ve(...e){let t=!1;for(let n=0;n<e.length;n++){const r=e[n];t=t||!!r&&X in r,e[n]=typeof r=="function"?(t=!0,De(r)):r}if(t)return new Proxy({get(n){for(let r=e.length-1;r>=0;r--){const l=K(e[r])[n];if(l!==void 0)return l}},has(n){for(let r=e.length-1;r>=0;r--)if(n in K(e[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<e.length;r++)n.push(...Object.keys(K(e[r])));return[...new Set(n)]}},Fe);const s={};for(let n=e.length-1;n>=0;n--)if(e[n]){const r=Object.getOwnPropertyDescriptors(e[n]);for(const l in r)l in s||Object.defineProperty(s,l,{enumerable:!0,get(){for(let u=e.length-1;u>=0;u--){const f=(e[u]||{})[l];if(f!==void 0)return f}}})}return s}const qe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],pe=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...qe]),de=new Set(["innerHTML","textContent","innerText","children"]),me=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),We=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ge(e,t){const s=We[e];return typeof s=="object"?s[t]?s.$:void 0:s}const ye=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ke=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),$e={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function He(e,t,s){let n=s.length,r=t.length,l=n,u=0,f=0,y=t[r-1].nextSibling,w=null;for(;u<r||f<l;){if(t[u]===s[f]){u++,f++;continue}for(;t[r-1]===s[l-1];)r--,l--;if(r===u){const b=l<n?f?s[f-1].nextSibling:s[l-f]:y;for(;f<l;)e.insertBefore(s[f++],b)}else if(l===f)for(;u<r;)(!w||!w.has(t[u]))&&t[u].remove(),u++;else if(t[u]===s[l-1]&&s[f]===t[r-1]){const b=t[--r].nextSibling;e.insertBefore(s[f++],t[u++].nextSibling),e.insertBefore(s[--l],b),t[r]=s[l]}else{if(!w){w=new Map;let $=f;for(;$<l;)w.set(s[$],$++)}const b=w.get(t[u]);if(b!=null)if(f<b&&b<l){let $=u,S=1,o;for(;++$<r&&$<l&&!((o=w.get(t[$]))==null||o!==b+S);)S++;if(S>b-f){const i=t[u];for(;f<b;)e.insertBefore(s[f++],i)}else e.replaceChild(s[f++],t[u++])}else u++;else t[u++].remove()}}}const ee="_$DX_DELEGATE";function xe(e,t=window.document){const s=t[ee]||(t[ee]=new Set);for(let n=0,r=e.length;n<r;n++){const l=e[n];s.has(l)||(s.add(l),t.addEventListener(l,et))}}function G(e,t,s){s==null?e.removeAttribute(t):e.setAttribute(t,s)}function be(e,t,s,n){n==null?e.removeAttributeNS(t,s):e.setAttributeNS(t,s,n)}function Xe(e,t){t==null?e.removeAttribute("class"):e.className=t}function we(e,t,s,n){if(n)Array.isArray(s)?(e[`$$${t}`]=s[0],e[`$$${t}Data`]=s[1]):e[`$$${t}`]=s;else if(Array.isArray(s)){const r=s[0];e.addEventListener(t,s[0]=l=>r.call(e,s[1],l))}else e.addEventListener(t,s)}function Ae(e,t,s={}){const n=Object.keys(t||{}),r=Object.keys(s);let l,u;for(l=0,u=r.length;l<u;l++){const f=r[l];!f||f==="undefined"||t[f]||(te(e,f,!1),delete s[f])}for(l=0,u=n.length;l<u;l++){const f=n[l],y=!!t[f];!f||f==="undefined"||s[f]===y||!y||(te(e,f,!0),s[f]=y)}return s}function Ee(e,t,s){if(!t)return s?G(e,"style"):t;const n=e.style;if(typeof t=="string")return n.cssText=t;typeof s=="string"&&(n.cssText=s=void 0),s||(s={}),t||(t={});let r,l;for(l in s)t[l]==null&&n.removeProperty(l),delete s[l];for(l in t)r=t[l],r!==s[l]&&(n.setProperty(l,r),s[l]=r);return s}function ze(e,t={},s,n){const r={};return n||j(()=>r.children=k(e,t.children,r.children)),j(()=>t.ref&&t.ref(e)),j(()=>Ye(e,t,s,!0,r,!0)),r}function Ze(e,t){const s=e[t];return Object.defineProperty(e,t,{get(){return s()},enumerable:!0}),e}function Qe(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return k(e,t,n,s);j(r=>k(e,t(),r,s),n)}function Ye(e,t,s,n,r={},l=!1){t||(t={});for(const u in r)if(!(u in t)){if(u==="children")continue;r[u]=se(e,u,null,r[u],s,l)}for(const u in t){if(u==="children"){n||k(e,t.children);continue}const f=t[u];r[u]=se(e,u,f,r[u],s,l)}}function Je(e){return e.toLowerCase().replace(/-([a-z])/g,(t,s)=>s.toUpperCase())}function te(e,t,s){const n=t.trim().split(/\s+/);for(let r=0,l=n.length;r<l;r++)e.classList.toggle(n[r],s)}function se(e,t,s,n,r,l){let u,f,y,w,b;if(t==="style")return Ee(e,s,n);if(t==="classList")return Ae(e,s,n);if(s===n)return n;if(t==="ref")l||s(e);else if(t.slice(0,3)==="on:"){const $=t.slice(3);n&&e.removeEventListener($,n),s&&e.addEventListener($,s)}else if(t.slice(0,10)==="oncapture:"){const $=t.slice(10);n&&e.removeEventListener($,n,!0),s&&e.addEventListener($,s,!0)}else if(t.slice(0,2)==="on"){const $=t.slice(2).toLowerCase(),S=ye.has($);if(!S&&n){const o=Array.isArray(n)?n[0]:n;e.removeEventListener($,o)}(S||s)&&(we(e,$,s,S),S&&xe([$]))}else if(t.slice(0,5)==="attr:")G(e,t.slice(5),s);else if((b=t.slice(0,5)==="prop:")||(y=de.has(t))||!r&&((w=ge(t,e.tagName))||(f=pe.has(t)))||(u=e.nodeName.includes("-")))b&&(t=t.slice(5),f=!0),t==="class"||t==="className"?Xe(e,s):u&&!f&&!y?e[Je(t)]=s:e[w||t]=s;else{const $=r&&t.indexOf(":")>-1&&$e[t.split(":")[0]];$?be(e,$,t,s):G(e,me[t]||t,s)}return s}function et(e){const t=`$$${e.type}`;let s=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==s&&Object.defineProperty(e,"target",{configurable:!0,value:s}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return s||document}});s;){const n=s[t];if(n&&!s.disabled){const r=s[`${t}Data`];if(r!==void 0?n.call(s,r,e):n.call(s,e),e.cancelBubble)return}s=s._$host||s.parentNode||s.host}}function k(e,t,s,n,r){for(;typeof s=="function";)s=s();if(t===s)return s;const l=typeof t,u=n!==void 0;if(e=u&&s[0]&&s[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),u){let f=s[0];f&&f.nodeType===3?f.data=t:f=document.createTextNode(t),s=I(e,s,n,f)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t;else if(t==null||l==="boolean")s=I(e,s,n);else{if(l==="function")return j(()=>{let f=t();for(;typeof f=="function";)f=f();s=k(e,f,s,n)}),()=>s;if(Array.isArray(t)){const f=[],y=s&&Array.isArray(s);if(z(f,t,s,r))return j(()=>s=k(e,f,s,n,!0)),()=>s;if(f.length===0){if(s=I(e,s,n),u)return s}else y?s.length===0?ne(e,f,n):He(e,s,f):(s&&I(e),ne(e,f));s=f}else if(t.nodeType){if(Array.isArray(s)){if(u)return s=I(e,s,n,t);I(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}else console.warn("Unrecognized value. Skipped inserting",t)}return s}function z(e,t,s,n){let r=!1;for(let l=0,u=t.length;l<u;l++){let f=t[l],y=s&&s[l],w;if(!(f==null||f===!0||f===!1))if((w=typeof f)=="object"&&f.nodeType)e.push(f);else if(Array.isArray(f))r=z(e,f,y)||r;else if(w==="function")if(n){for(;typeof f=="function";)f=f();r=z(e,Array.isArray(f)?f:[f],Array.isArray(y)?y:[y])||r}else e.push(f),r=!0;else{const b=String(f);y&&y.nodeType===3&&y.data===b?e.push(y):e.push(document.createTextNode(b))}}return r}function ne(e,t,s=null){for(let n=0,r=t.length;n<r;n++)e.insertBefore(t[n],s)}function I(e,t,s,n){if(s===void 0)return e.textContent="";const r=n||document.createTextNode("");if(t.length){let l=!1;for(let u=t.length-1;u>=0;u--){const f=t[u];if(r!==f){const y=f.parentNode===e;!l&&!u?y?e.replaceChild(r,f):e.insertBefore(r,s):y&&f.remove()}else l=!0}}else e.insertBefore(r,s);return[r]}const tt=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,st=/(?:\s(?<boolean>[^/\s><=]+?)(?=[\s/>]))|(?:(?<name>\S+?)(?:\s*=\s*(?:(['"])(?<quotedValue>[\s\S]*?)\3|(?<unquotedValue>[^\s>]+))))/g,nt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function rt(e){const t={type:"tag",name:"",voidElement:!1,attrs:[],children:[]},s=e.match(/<\/?([^\s]+?)[/\s>]/);if(s&&(t.name=s[1],(nt[s[1].toLowerCase()]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){const r=e.indexOf("-->");return{type:"comment",comment:r!==-1?e.slice(4,r):""}}const n=new RegExp(st);for(const r of e.matchAll(n))(r[1]||r[2]).startsWith("use:")?t.attrs.push({type:"directive",name:r[1]||r[2],value:r[4]||r[5]||""}):t.attrs.push({type:"attr",name:r[1]||r[2],value:r[4]||r[5]||""});return t}function re(e,t,s){const n=t.indexOf("<",s),r=t.slice(s,n===-1?void 0:n);/^\s*$/.test(r)||e.push({type:"text",content:r})}function ie(e,t){const s=t.replace("<!--","").replace("-->","");/^\s*$/.test(s)||e.push({type:"comment",content:s})}function it(e){const t=[];let s,n=-1;const r=[],l={};return e.replace(tt,(u,f)=>{const y=u.charAt(1)!=="/",w=u.slice(0,4)==="<!--",b=f+u.length,$=e.charAt(b);let S;y&&!w&&(n++,s=rt(u),!s.voidElement&&$&&$!=="<"&&re(s.children,e,b),l[s.tagName]=s,n===0&&t.push(s),S=r[n-1],S&&S.children.push(s),r[n]=s),w&&(n<0?ie(t,u):ie(r[n].children,u)),(w||!y||s.voidElement)&&(w||n--,$!=="<"&&$&&(S=n===-1?t:r[n].children,re(S,e,b)))}),t}function lt(e){const t=[];for(const s of e)t.push(s.name+'="'+s.value.replace(/"/g,"&quot;")+'"');return t.length?" "+t.join(" "):""}function Ce(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?lt(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(Ce,"")+"</"+t.name+">";case"comment":return e+="<!--"+t.content+"-->"}}function ct(e){return e.reduce(function(t,s){return t+Ce("",s)},"")}const le=new Map,ft=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,V=" \\f\\n\\r\\t",Se="[^"+V+`\\/>"'=]+`,Y="[ "+V+"]+(?:use:<!--#-->|"+Se+")",Ne="<([A-Za-z$#]+[A-Za-z0-9:_-]*)((?:",Oe=`(?:\\s*=\\s*(?:'[^']*?'|"[^"]*?"|\\([^)]*?\\)|<[^>]*?>|`+Se+"))?)",ut=new RegExp(Ne+Y+Oe+"+)([ "+V+"]*/?>)","g"),ot=new RegExp("("+Y+`\\s*=\\s*)(<!--#-->|['"(]([\\w\\s]*<!--#-->[\\w\\s]*)*['")])`,"gi"),at=new RegExp(Ne+Y+Oe+"*)([ "+V+"]*/>)","g"),ce="<!--#-->",ht=new Set(["class","on","oncapture","style","use","prop","attr"]);function pt(e,t,s,n){return"<"+t+s.replace(ot,dt)+n}function dt(e,t,s){return t.replace(/<!--#-->/g,"###")+(s[0]==='"'||s[0]==="'"?s.replace(/<!--#-->/g,"###"):'"###"')}function mt(e,t,s){return ft.test(t)?e:"<"+t+s+"></"+t+">"}function gt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,s)=>s.toUpperCase())}function H(e,t,s,n){if(e==="use:###"&&t==="###"){const r=n.counter++;n.exprs.push(`typeof exprs[${r}] === "function" ? r.use(exprs[${r}], ${s}, exprs[${n.counter++}]) : (()=>{throw new Error("use:### must be a function")})()`)}else throw new Error(`Not support syntax ${e} must be use:{function}`)}function yt(e,{delegateEvents:t=!0,functionBuilder:s=(...n)=>new Function(...n)}={}){let n=1;e.wrapProps=o=>{const i=Object.getOwnPropertyDescriptors(o);for(const c in i)typeof i[c].value=="function"&&!i[c].value.length&&e.dynamicProperty(o,c);return o};function r(o,i){var A;let c=0,d="";for(;c<o.length-1;c++)d=d+o[c]+"<!--#-->";d=d+o[c],d=[[at,mt],[/<(<!--#-->)/g,"<###"],[/\.\.\.(<!--#-->)/g,"###"],[ut,pt],[/>\n+\s*/g,">"],[/\n+\s*</g,"<"],[/\s+</g," <"],[/>\s+/g,"> "]].reduce((g,O)=>g.replace(O[0],O[1]),d);const x=it(d),[h,a]=$(x,i.funcBuilder),p=[];for(let g=0;g<h.length;g++){p.push(document.createElement("template")),p[g].innerHTML=h[g];const O=p[g].content.querySelectorAll("script,style");for(let E=0;E<O.length;E++){const L=((A=O[E].firstChild)==null?void 0:A.data)||"";if(L.indexOf(ce)>-1){const M=L.split(ce).reduce((q,je,ve)=>(ve&&q.push(""),q.push(je),q),[]);O[g].firstChild.replaceWith(...M)}}}return p[0].create=a,le.set(o,p),p}function l(o,i,c,d,m,x,h){let a=d==="###"?`!doNotWrap ? exprs[${h.counter}]() : exprs[${h.counter++}]`:d.split("###").map((E,L)=>L?` + (typeof exprs[${h.counter}] === "function" ? exprs[${h.counter}]() : exprs[${h.counter++}]) + "${E}"`:`"${E}"`).join(""),p,A;(p=c.split(":"))&&p[1]&&ht.has(p[0])&&(c=p[1],A=p[0]);const g=e.ChildProperties.has(c),O=e.Properties.has(c);if(c==="style"){const E=`_$v${n++}`;h.decl.push(`${E}={}`),h.exprs.push(`r.style(${i},${a},${E})`)}else if(c==="classList"){const E=`_$v${n++}`;h.decl.push(`${E}={}`),h.exprs.push(`r.classList(${i},${a},${E})`)}else if(A!=="attr"&&(g||!m&&(e.getPropAlias(c,o.name.toUpperCase())||O)||x||A==="prop"))x&&!g&&!O&&A!=="prop"&&(c=gt(c)),h.exprs.push(`${i}.${e.getPropAlias(c,o.name.toUpperCase())||c} = ${a}`);else{const E=m&&c.indexOf(":")>-1&&e.SVGNamespace[c.split(":")[0]];E?h.exprs.push(`r.setAttributeNS(${i},"${E}","${c}",${a})`):h.exprs.push(`r.setAttribute(${i},"${e.Aliases[c]||c}",${a})`)}}function u(o,i,c,d,m,x,h){if(c.slice(0,2)==="on")if(c.includes(":")){let a=c.startsWith("oncapture:");h.exprs.push(`${i}.addEventListener("${c.slice(a?10:3)}",exprs[${h.counter++}]${a?",true":""})`)}else{const a=c.slice(2).toLowerCase(),p=t&&e.DelegatedEvents.has(a);h.exprs.push(`r.addEventListener(${i},"${a}",exprs[${h.counter++}],${p})`),p&&h.delegatedEvents.add(a)}else if(c==="ref")h.exprs.push(`exprs[${h.counter++}](${i})`);else{const a=Object.assign({},h,{exprs:[]}),p=h.counter;if(l(o,i,c,d,m,x,a),h.decl.push(`_fn${p} = (${d==="###"?"doNotWrap":""}) => {
${a.exprs.join(`;
`)};
}`),d==="###")h.exprs.push(`typeof exprs[${p}] === "function" ? r.effect(_fn${p}) : _fn${p}(true)`);else{let A="";for(let g=p;g<a.counter;g++)g!==p&&(A+=" || "),A+=`typeof exprs[${g}] === "function"`;h.exprs.push(A+` ? r.effect(_fn${p}) : _fn${p}()`)}h.counter=a.counter,h.wrap=!1}}function f(o,i){const c=Object.assign({},i,{first:!0,multi:!1,parent:i.path});if(o.children.length>1)for(let m=0;m<o.children.length;m++){const x=o.children[m];if(x.type==="comment"&&x.content==="#"||x.type==="tag"&&x.name==="###"){c.multi=!0;break}}let d=0;for(;d<o.children.length;){const m=o.children[d];if(m.name==="###"){c.multi?(o.children[d]={type:"comment",content:"#"},d++):o.children.splice(d,1),w(m,c);continue}b(m,c),!c.multi&&m.type==="comment"&&m.content==="#"?o.children.splice(d,1):d++}i.counter=c.counter,i.templateId=c.templateId,i.hasCustomElement=i.hasCustomElement||c.hasCustomElement}function y(o){let i=[];for(const c of o)if(Array.isArray(c)){if(!c.length)continue;i.push(`r.wrapProps({${c.join(",")||""}})`)}else i.push(c);return i.length>1?`r.mergeProps(${i.join(",")})`:i[0]}function w(o,i){let c=[];const d=Object.keys(o.attrs),m=[c],x=i.counter++;for(let a=0;a<d.length;a++){const{type:p,name:A,value:g}=o.attrs[a];if(p==="attr")A==="###"?(m.push(`exprs[${i.counter++}]`),m.push(c=[])):g==="###"?c.push(`${A}: exprs[${i.counter++}]`):c.push(`${A}: "${g}"`);else if(p==="directive"){const O=`_$el${n++}`,E=!i.decl.length;i.decl.push(E?"":`${O} = ${i.path}.${i.first?"firstChild":"nextSibling"}`),H(A,g,O,i)}}if(o.children.length===1&&o.children[0].type==="comment"&&o.children[0].content==="#")c.push(`children: () => exprs[${i.counter++}]`);else if(o.children.length){const a={type:"fragment",children:o.children},p=Object.assign({},i,{first:!0,decl:[],exprs:[],parent:!1});b(a,p),c.push(`children: () => { ${p.exprs.join(`;
`)}}`),i.templateId=p.templateId,i.counter=p.counter}let h;i.multi&&(h=`_$el${n++}`,i.decl.push(`${h} = ${i.path}.${i.first?"firstChild":"nextSibling"}`)),i.parent?i.exprs.push(`r.insert(${i.parent}, r.createComponent(exprs[${x}],${y(m)})${h?`, ${h}`:""})`):i.exprs.push(`${i.fragment?"":"return "}r.createComponent(exprs[${x}],${y(m)})`),i.path=h,i.first=!1}function b(o,i){if(o.type==="fragment"){const c=[];o.children.forEach(d=>{if(d.type==="tag"){if(d.name==="###"){const h=Object.assign({},i,{first:!0,fragment:!0,decl:[],exprs:[]});w(d,h),c.push(h.exprs[0]),i.counter=h.counter,i.templateId=h.templateId;return}i.templateId++;const m=n,x=Object.assign({},i,{first:!0,decl:[],exprs:[]});i.templateNodes.push([d]),b(d,x),c.push(`function() { ${x.decl.join(`,
`)+`;
`+x.exprs.join(`;
`)+`;
return _$el${m};
`}}()`),i.counter=x.counter,i.templateId=x.templateId}else if(d.type==="text")c.push(`"${d.content}"`);else if(d.type==="comment"){if(d.content==="#")c.push(`exprs[${i.counter++}]`);else if(d.content)for(let m=0;m<d.content.split("###").length-1;m++)c.push(`exprs[${i.counter++}]`)}}),i.exprs.push(`return [${c.join(`, 
`)}]`)}else if(o.type==="tag"){const c=`_$el${n++}`,d=!i.decl.length,m=i.templateId;i.decl.push(d?"":`${c} = ${i.path}.${i.first?"firstChild":"nextSibling"}`);const x=e.SVGElements.has(o.name),h=o.name.includes("-");if(i.hasCustomElement=h,o.attrs.some(a=>a.name==="###")){const a=[];let p="";const A=[];for(let g=0;g<o.attrs.length;g++){const{type:O,name:E,value:L}=o.attrs[g];if(O==="attr")if(L.includes("###")){let M=i.counter++;p+=`${E}: ${E!=="ref"?`typeof exprs[${M}] === "function" ? exprs[${M}]() : `:""}exprs[${M}],`}else E==="###"?(p.length&&(a.push(`()=>({${p}})`),p=""),a.push(`exprs[${i.counter++}]`)):A.push(o.attrs[g]);else O==="directive"&&H(E,L,c,i)}o.attrs=A,p.length&&a.push(`()=>({${p}})`),i.exprs.push(`r.spread(${c},${a.length===1?`typeof ${a[0]} === "function" ? r.mergeProps(${a[0]}) : ${a[0]}`:`r.mergeProps(${a.join(",")})`},${x},${!!o.children.length})`)}else for(let a=0;a<o.attrs.length;a++){const{type:p,name:A,value:g}=o.attrs[a];p==="directive"?(H(A,g,c,i),o.attrs.splice(a,1),a--):p==="attr"&&g.includes("###")&&(o.attrs.splice(a,1),a--,u(o,c,A,g,x,h,i))}i.path=c,i.first=!1,f(o,i),d&&(i.decl[0]=i.hasCustomElement?`const ${c} = r.untrack(() => document.importNode(tmpls[${m}].content.firstChild, true))`:`const ${c} = tmpls[${m}].content.firstChild.cloneNode(true)`)}else if(o.type==="text"){const c=`_$el${n++}`;i.decl.push(`${c} = ${i.path}.${i.first?"firstChild":"nextSibling"}`),i.path=c,i.first=!1}else if(o.type==="comment"){const c=`_$el${n++}`;i.decl.push(`${c} = ${i.path}.${i.first?"firstChild":"nextSibling"}`),o.content==="#"&&(i.multi?i.exprs.push(`r.insert(${i.parent}, exprs[${i.counter++}], ${c})`):i.exprs.push(`r.insert(${i.parent}, exprs[${i.counter++}])`)),i.path=c,i.first=!1}}function $(o,i){const c={path:"",decl:[],exprs:[],delegatedEvents:new Set,counter:0,first:!0,multi:!1,templateId:0,templateNodes:[]},d=n,m=o;let x;return o.length>1&&(o=[{type:"fragment",children:o}]),o[0].name==="###"?(x=!0,w(o[0],c)):b(o[0],c),e.delegateEvents(Array.from(c.delegatedEvents)),[[m].concat(c.templateNodes).map(a=>ct(a)),i("tmpls","exprs","r",c.decl.join(`,
`)+`;
`+c.exprs.join(`;
`)+(x?"":`;
return _$el${d};
`))]}function S(o,...i){const c=le.get(o)||r(o,{funcBuilder:s});return c[0].create(c,i,e)}return S}var Pe=yt({effect:j,style:Ee,insert:Qe,untrack:Z,spread:ze,createComponent:Ue,delegateEvents:xe,classList:Ae,mergeProps:Ve,dynamicProperty:Ze,setAttribute:G,setAttributeNS:be,addEventListener:we,Aliases:me,getPropAlias:ge,Properties:pe,ChildProperties:de,DelegatedEvents:ye,SVGElements:Ke,SVGNamespace:$e});const Le=document.querySelector("#app"),$t=Pe`<h1>Adam Bartonicek</h1>`;Le.appendChild($t);const Te=Pe`<p />`;Te.innerText="Hi, my name is Adam. I am interested in data science and visualization";Le.appendChild(Te);
