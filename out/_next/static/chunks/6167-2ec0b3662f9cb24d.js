(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6167,9339],{86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{clsx:function(){return o}}),t.default=o},40993:function(){},61363:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},2067:function(e,t,n){"use strict";n.d(t,{E:function(){return Y}});var r=n(67294),o=n(12351),a=n(54203),i=n(32984),s=n(16723),l=n(61363);let u=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var c,d,f,p=((f=p||{})[f.First=1]="First",f[f.Previous=2]="Previous",f[f.Next=4]="Next",f[f.Last=8]="Last",f[f.WrapAround=16]="WrapAround",f[f.NoScroll=32]="NoScroll",f),m=((d=m||{})[d.Error=0]="Error",d[d.Overflow=1]="Overflow",d[d.Success=2]="Success",d[d.Underflow=3]="Underflow",d),g=((c=g||{})[c.Previous=-1]="Previous",c[c.Next=1]="Next",c);function v(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(u))}var h=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(h||{});let y=["textarea","input"].join(",");function E(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function b(e,t,n=!0,r=null){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?E(e):e:v(e);r=null!=r?r:o.activeElement;let i,s=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=32&t?{preventScroll:!0}:{},c=0,d=a.length;do{if(c>=d||c+d<=0)return 0;let e=l+c;if(16&t)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}i=a[e],null==i||i.focus(u),c+=s}while(i!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,y))&&n}(i)&&i.select(),i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}var T=n(23784),w=n(14908);let O=(0,r.createContext)(null);function C(){let e=(0,r.useContext)(O);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,C),e}return e}function R(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,w.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(O.Provider,{value:o},e.children)}),[t])]}let N=(0,o.yV)((function(e,t){let{passive:n=!1,...r}=e,i=C(),l=`headlessui-label-${(0,a.M)()}`,u=(0,T.T)(t);(0,s.e)((()=>i.register(l)),[l,i.register]);let c={ref:u,...i.props,id:l};return n&&("onClick"in c&&delete c.onClick,"onClick"in r&&delete r.onClick),(0,o.sY)({ourProps:c,theirProps:r,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})})),I=(0,r.createContext)(null);function L(){let e=(0,r.useContext)(I);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,L),e}return e}function P(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,w.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(I.Provider,{value:o},e.children)}),[t])]}let k=(0,o.yV)((function(e,t){let n=L(),r=`headlessui-description-${(0,a.M)()}`,i=(0,T.T)(t);(0,s.e)((()=>n.register(r)),[r,n.register]);let l=e,u={ref:i,...n.props,id:r};return(0,o.sY)({ourProps:u,theirProps:l,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}));var _=n(15466);var A=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(A||{});let x=(0,o.yV)((function(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":2===(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&n)&&2!==(2&n)&&{display:"none"}}};return(0,o.sY)({ourProps:a,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function S(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))F(n,M(t,r),o);return n}function M(e,t){return e?e+"["+t+"]":t}function F(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())F(e,M(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):S(n,t,e)}var D,$=n(64103),z=((D=z||{})[D.RegisterOption=0]="RegisterOption",D[D.UnregisterOption=1]="UnregisterOption",D);let j={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:E(n,(e=>e.element.current))}},1(e,t){let n=e.options.slice(),r=e.options.findIndex((e=>e.id===t.id));return-1===r?e:(n.splice(r,1),{...e,options:n})}},B=(0,r.createContext)(null);function H(e){let t=(0,r.useContext)(B);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,H),t}return t}function U(e,t){return(0,i.E)(t.type,j,e,t)}B.displayName="RadioGroupContext";let G=(0,o.yV)((function(e,t){let{value:n,defaultValue:i,name:u,onChange:c,by:d=((e,t)=>e===t),disabled:f=!1,...g}=e,v=(0,w.z)("string"==typeof d?(e,t)=>{let n=d;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:d),[h,y]=(0,r.useReducer)(U,{options:[]}),E=h.options,[O,C]=R(),[N,I]=P(),L=`headlessui-radiogroup-${(0,a.M)()}`,k=(0,r.useRef)(null),M=(0,T.T)(k,t),[F,D]=function(e,t,n){let[o,a]=(0,r.useState)(n),i=void 0!==e;return[i?e:o,(0,w.z)((e=>(i||a(e),null==t?void 0:t(e))))]}(n,c,i),$=(0,r.useMemo)((()=>E.find((e=>!e.propsRef.current.disabled))),[E]),z=(0,r.useMemo)((()=>E.some((e=>v(e.propsRef.current.value,F)))),[E,F]),j=(0,w.z)((e=>{var t;if(f||v(e,F))return!1;let n=null==(t=E.find((t=>v(t.propsRef.current.value,e))))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(null==D||D(e),!0)}));!function({container:e,accept:t,walk:n,enabled:o=!0}){let a=(0,r.useRef)(t),i=(0,r.useRef)(n);(0,r.useEffect)((()=>{a.current=t,i.current=n}),[t,n]),(0,s.e)((()=>{if(!e||!o)return;let t=(0,_.r)(e);if(!t)return;let n=a.current,r=i.current,s=Object.assign((e=>n(e)),{acceptNode:n}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;l.nextNode();)r(l.currentNode)}),[e,o,a,i])}({container:k.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let H=(0,w.z)((e=>{let t=k.current;if(!t)return;let n=(0,_.r)(t),r=E.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case l.R.Enter:!function(e){var t;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n)for(let r of n.elements)if("INPUT"===r.tagName&&"submit"===r.type||"BUTTON"===r.tagName&&"submit"===r.type||"INPUT"===r.nodeName&&"image"===r.type)return void r.click()}(e.currentTarget);break;case l.R.ArrowLeft:case l.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),b(r,p.Previous|p.WrapAround)===m.Success){let e=E.find((e=>e.element.current===(null==n?void 0:n.activeElement)));e&&j(e.propsRef.current.value)}break;case l.R.ArrowRight:case l.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),b(r,p.Next|p.WrapAround)===m.Success){let e=E.find((e=>e.element.current===(null==n?void 0:n.activeElement)));e&&j(e.propsRef.current.value)}break;case l.R.Space:{e.preventDefault(),e.stopPropagation();let t=E.find((e=>e.element.current===(null==n?void 0:n.activeElement)));t&&j(t.propsRef.current.value)}}})),G=(0,w.z)((e=>(y({type:0,...e}),()=>y({type:1,id:e.id})))),V=(0,r.useMemo)((()=>({registerOption:G,firstOption:$,containsCheckedOption:z,change:j,disabled:f,value:F,compare:v})),[G,$,z,j,f,F,v]),W={ref:M,id:L,role:"radiogroup","aria-labelledby":O,"aria-describedby":N,onKeyDown:H},Y=(0,r.useMemo)((()=>({value:F})),[F]);return r.createElement(I,{name:"RadioGroup.Description"},r.createElement(C,{name:"RadioGroup.Label"},r.createElement(B.Provider,{value:V},null!=u&&null!=F&&S({[u]:F}).map((([e,t])=>r.createElement(x,{features:A.Hidden,...(0,o.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})}))),(0,o.sY)({ourProps:W,theirProps:g,slot:Y,defaultTag:"div",name:"RadioGroup"}))))}));var V=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(V||{});let W=(0,o.yV)((function(e,t){let n=(0,r.useRef)(null),i=(0,T.T)(n,t),l=`headlessui-radiogroup-option-${(0,a.M)()}`,[u,c]=R(),[d,f]=P(),{addFlag:p,removeFlag:m,hasFlag:g}=function(e=0){let[t,n]=(0,r.useState)(e),o=(0,r.useCallback)((e=>n((t=>t|e))),[t]),a=(0,r.useCallback)((e=>Boolean(t&e)),[t]),i=(0,r.useCallback)((e=>n((t=>t&~e))),[n]),s=(0,r.useCallback)((e=>n((t=>t^e))),[n]);return{addFlag:o,hasFlag:a,removeFlag:i,toggleFlag:s}}(1),{value:v,disabled:h=!1,...y}=e,E=(0,r.useRef)({value:v,disabled:h});(0,s.e)((()=>{E.current.value=v}),[v,E]),(0,s.e)((()=>{E.current.disabled=h}),[h,E]);let{registerOption:b,disabled:O,change:C,firstOption:N,containsCheckedOption:I,value:L,compare:k}=H("RadioGroup.Option");(0,s.e)((()=>b({id:l,element:n,propsRef:E})),[l,b,n,e]);let _=(0,w.z)((e=>{var t;if((0,$.P)(e.currentTarget))return e.preventDefault();!C(v)||(p(2),null==(t=n.current)||t.focus())})),A=(0,w.z)((e=>{if((0,$.P)(e.currentTarget))return e.preventDefault();p(2)})),x=(0,w.z)((()=>m(2))),S=(null==N?void 0:N.id)===l,M=O||h,F=k(L,v),D={ref:i,id:l,role:"radio","aria-checked":F?"true":"false","aria-labelledby":u,"aria-describedby":d,"aria-disabled":!!M||void 0,tabIndex:M?-1:F||!I&&S?0:-1,onClick:M?void 0:_,onFocus:M?void 0:A,onBlur:M?void 0:x},z=(0,r.useMemo)((()=>({checked:F,disabled:M,active:g(2)})),[F,M,g]);return r.createElement(f,{name:"RadioGroup.Description"},r.createElement(c,{name:"RadioGroup.Label"},(0,o.sY)({ourProps:D,theirProps:y,slot:z,defaultTag:"div",name:"RadioGroup.Option"})))})),Y=Object.assign(G,{Option:W,Label:N,Description:k})},14908:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(67294),o=n(16723);let a=function(e){let t=function(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},54203:function(e,t,n){"use strict";n.d(t,{M:function(){return u}});var r=n(67294),o=n(16723);let a={serverHandoffComplete:!1};var i;let s=0;function l(){return++s}let u=null!=(i=r.useId)?i:function(){let e=function(){let[e,t]=(0,r.useState)(a.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===a.serverHandoffComplete&&(a.serverHandoffComplete=!0)}),[]),e}(),[t,n]=r.useState(e?l:null);return(0,o.e)((()=>{null===t&&n(l())}),[t]),null!=t?""+t:void 0}},16723:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(67294);let o=n(43393).s?r.useEffect:r.useLayoutEffect},23784:function(e,t,n){"use strict";n.d(t,{T:function(){return s},h:function(){return i}});var r=n(67294),o=n(14908);let a=Symbol();function i(e,t=!0){return Object.assign(e,{[a]:t})}function s(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[a])))?void 0:n}},64103:function(e,t,n){"use strict";function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},32984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},15466:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(43393);function o(e){return r.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},12351:function(e,t,n){"use strict";n.d(t,{AN:function(){return s},oA:function(){return p},sY:function(){return u},yV:function(){return f}});var r,o,a=n(67294),i=n(32984),s=((o=s||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),l=((r=l||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function u({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:s}){let l=d(t,e);if(a)return c(l,n,r,s);let u=null!=o?o:0;if(2&u){let{static:e=!1,...t}=l;if(e)return c(t,n,r,s)}if(1&u){let{unmount:e=!0,...t}=l;return(0,i.E)(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,s)})}return c(l,n,r,s)}function c(e,t={},n,r){let{as:o=n,children:i,refName:s="ref",...l}=m(e,["unmount","static"]),u=void 0!==e.ref?{[s]:e.ref}:{},c="function"==typeof i?i(t):i;l.className&&"function"==typeof l.className&&(l.className=l.className(t));let f={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(f["data-headlessui-state"]=n.join(" "))}if(o===a.Fragment&&Object.keys(p(l)).length>0){if(!(0,a.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,a.cloneElement)(c,Object.assign({},d(c.props,p(m(l,["ref"]))),f,u,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,u.ref)))}return(0,a.createElement)(o,Object.assign({},m(l,["ref"]),o!==a.Fragment&&u,o!==a.Fragment&&f),c)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function f(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},43393:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});const r="undefined"==typeof window||"undefined"==typeof document},11332:function(e,t,n){"use strict";var r=n(67294);const o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"}))}));t.Z=o},55678:function(e,t,n){"use strict";n.d(t,{Am:function(){return S},Ix:function(){return C}});var r=n(67294),o=n(86010);const a=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e,s=e=>"function"==typeof e,l=e=>i(e)||s(e)?e:null,u=e=>(0,r.isValidElement)(e)||i(e)||s(e)||a(e);function c(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:a=!0,collapseDuration:i=300}=e;return function(e){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f}=e;const p=o?`${t}--${l}`:t,m=o?`${n}--${l}`:n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((()=>{const e=d.current,t=p.split(" "),n=r=>{r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,r.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,c,i):c()};f||(u?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,s)}}function d(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const f={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},p=e=>{let{theme:t,type:n,...o}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},m={info:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(p,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function g(e){const[,t]=(0,r.useReducer)((e=>e+1),0),[n,o]=(0,r.useState)([]),c=(0,r.useRef)(null),p=(0,r.useRef)(new Map).current,g=e=>-1!==n.indexOf(e),v=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:g,getToast:e=>p.get(e)}).current;function h(e){let{containerId:t}=e;const{limit:n}=v.props;!n||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function y(e){o((t=>null==e?[]:t.filter((t=>t!==e))))}function E(){const{toastContent:e,toastProps:t,staleId:n}=v.queue.shift();T(e,t,n)}function b(e,n){let{delay:o,staleId:g,...h}=n;if(!u(e)||function(e){return!c.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||p.has(e.toastId)&&null==e.updateId}(h))return;const{toastId:b,updateId:w,data:O}=h,{props:C}=v,R=()=>y(b),N=null==w;N&&v.count++;const I={...C,style:C.toastStyle,key:v.toastKey++,...Object.fromEntries(Object.entries(h).filter((e=>{let[t,n]=e;return null!=n}))),toastId:b,updateId:w,data:O,closeToast:R,isIn:!1,className:l(h.className||C.toastClassName),bodyClassName:l(h.bodyClassName||C.bodyClassName),progressClassName:l(h.progressClassName||C.progressClassName),autoClose:!h.isLoading&&(L=h.autoClose,P=C.autoClose,!1===L||a(L)&&L>0?L:P),deleteToast(){const e=d(p.get(b),"removed");p.delete(b),f.emit(4,e);const n=v.queue.length;if(v.count=null==b?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),n>0){const e=null==b?v.props.limit:1;if(1===n||1===e)v.displayedToast++,E();else{const t=e>n?n:e;v.displayedToast=t;for(let e=0;e<t;e++)E()}}else t()}};var L,P;I.iconOut=function(e){let{theme:t,type:n,isLoading:o,icon:l}=e,u=null;const c={theme:t,type:n};return!1===l||(s(l)?u=l(c):(0,r.isValidElement)(l)?u=(0,r.cloneElement)(l,c):i(l)||a(l)?u=l:o?u=m.spinner():(e=>e in m)(n)&&(u=m[n](c))),u}(I),s(h.onOpen)&&(I.onOpen=h.onOpen),s(h.onClose)&&(I.onClose=h.onClose),I.closeButton=C.closeButton,!1===h.closeButton||u(h.closeButton)?I.closeButton=h.closeButton:!0===h.closeButton&&(I.closeButton=!u(C.closeButton)||C.closeButton);let k=e;(0,r.isValidElement)(e)&&!i(e.type)?k=(0,r.cloneElement)(e,{closeToast:R,toastProps:I,data:O}):s(e)&&(k=e({closeToast:R,toastProps:I,data:O})),C.limit&&C.limit>0&&v.count>C.limit&&N?v.queue.push({toastContent:k,toastProps:I,staleId:g}):a(o)?setTimeout((()=>{T(k,I,g)}),o):T(k,I,g)}function T(e,t,n){const{toastId:r}=t;n&&p.delete(n);const a={content:e,props:t};p.set(r,a),o((e=>[...e,r].filter((e=>e!==n)))),f.emit(4,d(a,null==a.props.updateId?"added":"updated"))}return(0,r.useEffect)((()=>(v.containerId=e.containerId,f.cancelEmit(3).on(0,b).on(1,(e=>c.current&&y(e))).on(5,h).emit(2,v),()=>{p.clear(),f.emit(3,v)})),[]),(0,r.useEffect)((()=>{v.props=e,v.isToastActive=g,v.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,r=Array.from(p.values());return e.newestOnTop&&r.reverse(),r.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:c,isToastActive:g}}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){const[t,n]=(0,r.useState)(!1),[o,a]=(0,r.useState)(!1),i=(0,r.useRef)(null),l=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,r.useRef)(e),{autoClose:c,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function g(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",w),document.addEventListener("touchmove",T),document.addEventListener("touchend",w);const n=i.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=v(t.nativeEvent),l.y=h(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(l.boundingRect){const{top:n,bottom:r,left:o,right:a}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=o&&l.x<=a&&l.y>=n&&l.y<=r?b():E()}}function E(){n(!0)}function b(){n(!1)}function T(n){const r=i.current;l.canDrag&&r&&(l.didMove=!0,t&&b(),l.x=v(n),l.y=h(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,r.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function w(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",w);const t=i.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,r.useEffect)((()=>{u.current=e})),(0,r.useEffect)((()=>(i.current&&i.current.addEventListener("d",E,{once:!0}),s(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),()=>{const e=u.current;s(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)})),[]),(0,r.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",E),window.addEventListener("blur",b)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",b))})),[e.pauseOnFocusLoss]);const O={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return c&&d&&(O.onMouseEnter=b,O.onMouseLeave=E),m&&(O.onClick=e=>{p&&p(e),l.canCloseOnClick&&f()}),{playToast:E,pauseToast:b,isRunning:t,preventExitTransition:o,toastRef:i,eventHandlers:O}}function E(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function b(e){let{delay:t,isRunning:n,closeToast:a,type:i="default",hide:l,className:u,style:c,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:g}=e;const v=l||d&&0===f,h={...c,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};d&&(h.transform=`scaleX(${f})`);const y=(0,o.default)("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":p}),E=s(u)?u({rtl:p,type:i,defaultClassName:y}):(0,o.default)(y,u);return r.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:E,style:h,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&a()}})}const T=e=>{const{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:i}=y(e),{closeButton:l,children:u,autoClose:c,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:g,position:v,className:h,style:T,bodyClassName:w,bodyStyle:O,progressClassName:C,progressStyle:R,updateId:N,role:I,progress:L,rtl:P,toastId:k,deleteToast:_,isIn:A,isLoading:x,iconOut:S,closeOnClick:M,theme:F}=e,D=(0,o.default)("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":M}),$=s(h)?h({rtl:P,position:v,type:f,defaultClassName:D}):(0,o.default)(D,h),z=!!L||!c,j={closeToast:m,type:f,theme:F};let B=null;return!1===l||(B=s(l)?l(j):(0,r.isValidElement)(l)?(0,r.cloneElement)(l,j):E(j)),r.createElement(g,{isIn:A,done:_,position:v,preventExitTransition:n,nodeRef:a},r.createElement("div",{id:k,onClick:d,className:$,...i,style:T,ref:a},r.createElement("div",{...A&&{role:I},className:s(w)?w({type:f}):(0,o.default)("Toastify__toast-body",w),style:O},null!=S&&r.createElement("div",{className:(0,o.default)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!x})},S),r.createElement("div",null,u)),B,r.createElement(b,{...N&&!z?{key:`pb-${N}`}:{},rtl:P,theme:F,delay:c,isRunning:t,isIn:A,closeToast:m,hide:p,type:f,style:R,className:C,controlledProgress:z,progress:L||0})))},w=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},O=c(w("bounce",!0)),C=(c(w("slide",!0)),c(w("zoom")),c(w("flip")),(0,r.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:a,isToastActive:i}=g(e),{className:u,style:c,rtl:d,containerId:f}=e;function p(e){const t=(0,o.default)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return s(u)?u({position:e,rtl:d,defaultClassName:t}):(0,o.default)(t,l(u))}return(0,r.useEffect)((()=>{t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:f},n(((e,t)=>{const n=t.length?{...c}:{...c,pointerEvents:"none"};return r.createElement("div",{className:p(e),style:n,key:`container-${e}`},t.map(((e,n)=>{let{content:o,props:a}=e;return r.createElement(T,{...a,isIn:i(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},o)})))})))})));C.displayName="ToastContainer",C.defaultProps={position:"top-right",transition:O,autoClose:5e3,closeButton:E,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let R,N=new Map,I=[],L=1;function P(){return""+L++}function k(e){return e&&(i(e.toastId)||a(e.toastId))?e.toastId:P()}function _(e,t){return N.size>0?f.emit(0,e,t):I.push({content:e,options:t}),t.toastId}function A(e,t){return{...t,type:t&&t.type||e,toastId:k(t)}}function x(e){return(t,n)=>_(t,A(e,n))}function S(e,t){return _(e,A("default",t))}S.loading=(e,t)=>_(e,A("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),S.promise=function(e,t,n){let r,{pending:o,error:a,success:l}=t;o&&(r=i(o)?S.loading(o,n):S.loading(o.render,{...n,...o}));const u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(e,t,o)=>{if(null==t)return void S.dismiss(r);const a={type:e,...u,...n,data:o},s=i(t)?{render:t}:t;return r?S.update(r,{...a,...s}):S(s.render,{...a,...s}),o},d=s(e)?e():e;return d.then((e=>c("success",l,e))).catch((e=>c("error",a,e))),d},S.success=x("success"),S.info=x("info"),S.error=x("error"),S.warning=x("warning"),S.warn=S.warning,S.dark=(e,t)=>_(e,A("default",{theme:"dark",...t})),S.dismiss=e=>{N.size>0?f.emit(1,e):I=I.filter((t=>null!=e&&t.options.toastId!==e))},S.clearWaitingQueue=function(e){return void 0===e&&(e={}),f.emit(5,e)},S.isActive=e=>{let t=!1;return N.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},S.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const r=N.get(n||R);return r&&r.getToast(e)}(e,t);if(n){const{props:r,content:o}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:P()};a.toastId!==e&&(a.staleId=e);const i=a.render||o;delete a.render,_(i,a)}}),0)},S.done=e=>{S.update(e,{progress:1})},S.onChange=e=>(f.on(4,e),()=>{f.off(4,e)}),S.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},S.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},f.on(2,(e=>{R=e.containerId||e,N.set(R,e),I.forEach((e=>{f.emit(0,e.content,e.options)})),I=[]})).on(3,(e=>{N.delete(e.containerId||e),0===N.size&&f.off(0).off(1).off(5)}))}}]);