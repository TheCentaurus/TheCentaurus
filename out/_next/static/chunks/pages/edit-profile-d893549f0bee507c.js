(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9046],{86010:function(e,t,n){"use strict";function s(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{clsx:function(){return a}}),t.default=a},37944:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-profile",function(){return n(1798)}])},94926:function(e,t,n){"use strict";var s=n(9669),a=n.n(s),o="https://www.api.thecentaurus.io/api",r="HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb",i={getNft:function(){return a().get(o+"/all-nfts?secret=".concat(r))},getUserCollection:function(e){return a().get(o+"/user-collections?userAddress=".concat(e,"&secret=").concat(r))},getAllCollection:function(){return a().get(o+"/all-collections?secret=".concat(r))},getUserProfile:function(e){return a().get(o+"/user-details?secret=".concat(r,"&userAddress=").concat(e))}};t.Z=i},84051:function(e,t,n){"use strict";var s=n(9669),a=n.n(s),o="https://www.api.thecentaurus.io/api",r={createCollection:function(e){return a().post(o+"/create-collection",e)},registerUser:function(e){var t={userAddress:e,secret:"HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb"};return a().post(o+"/register",t)},storeNft:function(e){return a().post(o+"/create-nft",e)},userProfile:function(e){return a().post(o+"/update-user",e)}};t.Z=r},1798:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(85893),a=n(84051),o=n(97193),r=n(49609),i=n(33459),l=n(67294),c=n(55678),d=(n(40993),n(94926));function u(){var e=(0,l.useState)(!1),t=e[0],n=e[1],u=(0,l.useState)(""),m=u[0],f=u[1],p=(0,l.useState)(""),h=p[0],g=p[1],v=(0,l.useState)(""),y=v[0],b=v[1],x=(0,l.useState)(""),w=x[0],T=x[1],E=(0,l.useState)(""),N=E[0],k=E[1],C=(0,l.useState)(""),_=C[0],j=C[1],A=(0,l.useState)(""),I=(A[0],A[1],(0,l.useState)("")),L=I[0],O=I[1],R=(0,l.useState)(""),P=R[0],B=R[1],F=(0,i.SFn)(),M=(0,l.useState)([]),S=(M[0],M[1]);return(0,l.useEffect)((function(){d.Z.getUserProfile(F).then((function(e){var t,s,a,o,r,i;(n(!1),e.data.data.length>=0)?(S(e.data.data),b(null!==(t=e.data.data[0].username)&&void 0!==t?t:""),g(null!==(s=e.data.data[0].about)&&void 0!==s?s:""),j(null!==(a=e.data.data[0].twitter)&&void 0!==a?a:""),f(null!==(o=e.data.data[0].email)&&void 0!==o?o:""),B(null!==(r=e.data.data[0].discord)&&void 0!==r?r:""),O(null!==(i=e.data.data[0].website_url)&&void 0!==i?i:"")):S([]);console.log(e.data.data)}),(function(e){n(!1)}))}),[F]),(0,s.jsx)(o.A,{children:(0,s.jsx)("main",{className:"relative pt-32",children:(0,s.jsxs)("div",{className:"max-w-screen-md px-4 pb-6 mx-auto sm:px-6 lg:px-8 lg:pb-16",children:[(0,s.jsx)(c.Ix,{}),(0,s.jsx)("div",{className:"overflow-hidden rounded-lg dark:bg-[#1b1324] bg-[#fff] shadow",children:(0,s.jsx)("div",{className:"divide-y divide-gray-200 lg:divide-y-0 lg:divide-x",children:(0,s.jsx)("div",{className:"divide-y divide-gray-200 lg:col-span-9",children:(0,s.jsxs)("div",{className:"px-4 py-6 sm:p-6 lg:pb-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-lg font-medium leading-6 dark:text-white text-[#413A5A]",children:"Profile"}),(0,s.jsx)("p",{className:"mt-1 text-sm dark:text-white text-[#413A5A]",children:"This information will be displayed publicly so be careful what you share."})]}),(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("userAddress",null!==F&&void 0!==F?F:""),t.append("username",null!==y&&void 0!==y?y:""),t.append("about",null!==h&&void 0!==h?h:""),t.append("secret","HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb"),t.append("avatar",null!==w&&void 0!==w?w:""),t.append("banner",null!==N&&void 0!==N?N:""),t.append("twitter",null!==_&&void 0!==_?_:""),t.append("website_url",null!==L&&void 0!==L?L:""),t.append("discord",null!==P&&void 0!==P?P:""),t.append("email",null!==m&&void 0!==m?m:""),n(!0),a.Z.userProfile(t).then((function(e){n(!1),"Update successful"===e.data.message?c.Am.success(e.data.message,{onClose:function(){window.location.reload()}}):c.Am.error(e.data.message)}),(function(e){n(!1)}))},children:[(0,s.jsx)("div",{className:"flex flex-col mt-6 lg:flex-row",children:(0,s.jsxs)("div",{className:"flex-grow space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Username"}),(0,s.jsx)("div",{className:"flex mt-1 rounded-md shadow-sm",children:(0,s.jsx)("input",{type:"text",name:"username",id:"username",autoComplete:"username",value:y,onChange:function(e){return b(e.target.value)},className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"about",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"About"}),(0,s.jsx)("div",{className:"mt-1",children:(0,s.jsx)("textarea",{id:"bio",value:h,onChange:function(e){return g(e.target.value)},name:"bio",rows:3,className:"block p-2 dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]",defaultValue:""})}),(0,s.jsx)("p",{className:"mt-2 text-sm dark:text-white text-[#413A5A]",children:"Brief description for your profile. URLs are hyperlinked."})]})]})}),(0,s.jsxs)("div",{className:"grid grid-cols-12 gap-6 mt-6",children:[(0,s.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,s.jsx)("label",{htmlFor:"twitter",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Avatar"}),(0,s.jsx)("input",{type:"file",name:"avatar",onChange:function(e){return T(e.target.files?e.target.files[0]:null)},id:"avatar",className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})]}),(0,s.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,s.jsx)("label",{htmlFor:"twitter",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Banner"}),(0,s.jsx)("input",{onChange:function(e){return k(e.target.files?e.target.files[0]:null)},type:"file",name:"banner",id:"banner",className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-12 gap-6 mt-6",children:[(0,s.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,s.jsx)("label",{htmlFor:"twitter",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Twitter"}),(0,s.jsx)("input",{value:_,onChange:function(e){return j(e.target.value)},type:"text",name:"twitter",id:"twitter",className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})]}),(0,s.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,s.jsx)("label",{htmlFor:"discord",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Discord"}),(0,s.jsx)("input",{value:P,onChange:function(e){return B(e.target.value)},type:"text",name:"discord",id:"discord",className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})]}),(0,s.jsxs)("div",{className:"col-span-6",children:[(0,s.jsx)("label",{htmlFor:"links",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Website Url"}),(0,s.jsx)("input",{value:L,onChange:function(e){return O(e.target.value)},type:"text",name:"links",id:"links",className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})]}),(0,s.jsxs)("div",{className:"col-span-12 sm:col-span-6",children:[(0,s.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Email"}),(0,s.jsx)("input",{value:m,onChange:function(e){return f(e.target.value)},type:"email",name:"email",id:"email",autoComplete:"email",className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})]}),(0,s.jsxs)("div",{className:"col-span-12",children:[(0,s.jsx)("label",{htmlFor:"walletAddress",className:"block text-sm font-medium dark:text-white text-[#413A5A]",children:"Wallet Address"}),(0,s.jsx)("input",{value:F,readOnly:!0,type:"text",name:"walletAddress",id:"walletAddress",className:"block dark:text-white w-full mt-1 bg-white border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm dark:bg-[#1b1324]"})]})]}),(0,s.jsx)("div",{className:"py-6 ",children:(0,s.jsx)("button",{className:"float-right px-4 py-2 text-white bg-yellow-400 rounded-md ",children:t?(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{children:(0,s.jsx)(r.$,{size:"sm"})})}):"Save Profile"})})]})]})})})})]})})})}},40993:function(){},55678:function(e,t,n){"use strict";n.d(t,{Am:function(){return P},Ix:function(){return N}});var s=n(67294),a=n(86010);const o=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,s.isValidElement)(e)||r(e)||i(e)||o(e);function d(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:o=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:d,nodeRef:u,isIn:m}=e;const f=a?`${t}--${l}`:t,p=a?`${n}--${l}`:n,h=(0,s.useRef)(0);return(0,s.useLayoutEffect)((()=>{const e=u.current,t=f.split(" "),n=s=>{s.target===u.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==s.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,s.useEffect)((()=>{const e=u.current,t=()=>{e.removeEventListener("animationend",t),o?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:s,style:a}=e;requestAnimationFrame((()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${n}ms`,requestAnimationFrame((()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,d,r):d()};m||(c?t():(h.current=1,e.className+=` ${p}`,e.addEventListener("animationend",t)))}),[m]),s.createElement(s.Fragment,null,i)}}function u(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const m={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},f=e=>{let{theme:t,type:n,...a}=e;return s.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...a})},p={info:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(f,{...e},s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function h(e){const[,t]=(0,s.useReducer)((e=>e+1),0),[n,a]=(0,s.useState)([]),d=(0,s.useRef)(null),f=(0,s.useRef)(new Map).current,h=e=>-1!==n.indexOf(e),g=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:h,getToast:e=>f.get(e)}).current;function v(e){let{containerId:t}=e;const{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function y(e){a((t=>null==e?[]:t.filter((t=>t!==e))))}function b(){const{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();w(e,t,n)}function x(e,n){let{delay:a,staleId:h,...v}=n;if(!c(e)||function(e){return!d.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||f.has(e.toastId)&&null==e.updateId}(v))return;const{toastId:x,updateId:T,data:E}=v,{props:N}=g,k=()=>y(x),C=null==T;C&&g.count++;const _={...N,style:N.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(v).filter((e=>{let[t,n]=e;return null!=n}))),toastId:x,updateId:T,data:E,closeToast:k,isIn:!1,className:l(v.className||N.toastClassName),bodyClassName:l(v.bodyClassName||N.bodyClassName),progressClassName:l(v.progressClassName||N.progressClassName),autoClose:!v.isLoading&&(j=v.autoClose,A=N.autoClose,!1===j||o(j)&&j>0?j:A),deleteToast(){const e=u(f.get(x),"removed");f.delete(x),m.emit(4,e);const n=g.queue.length;if(g.count=null==x?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){const e=null==x?g.props.limit:1;if(1===n||1===e)g.displayedToast++,b();else{const t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};var j,A;_.iconOut=function(e){let{theme:t,type:n,isLoading:a,icon:l}=e,c=null;const d={theme:t,type:n};return!1===l||(i(l)?c=l(d):(0,s.isValidElement)(l)?c=(0,s.cloneElement)(l,d):r(l)||o(l)?c=l:a?c=p.spinner():(e=>e in p)(n)&&(c=p[n](d))),c}(_),i(v.onOpen)&&(_.onOpen=v.onOpen),i(v.onClose)&&(_.onClose=v.onClose),_.closeButton=N.closeButton,!1===v.closeButton||c(v.closeButton)?_.closeButton=v.closeButton:!0===v.closeButton&&(_.closeButton=!c(N.closeButton)||N.closeButton);let I=e;(0,s.isValidElement)(e)&&!r(e.type)?I=(0,s.cloneElement)(e,{closeToast:k,toastProps:_,data:E}):i(e)&&(I=e({closeToast:k,toastProps:_,data:E})),N.limit&&N.limit>0&&g.count>N.limit&&C?g.queue.push({toastContent:I,toastProps:_,staleId:h}):o(a)?setTimeout((()=>{w(I,_,h)}),a):w(I,_,h)}function w(e,t,n){const{toastId:s}=t;n&&f.delete(n);const o={content:e,props:t};f.set(s,o),a((e=>[...e,s].filter((e=>e!==n)))),m.emit(4,u(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((()=>(g.containerId=e.containerId,m.cancelEmit(3).on(0,x).on(1,(e=>d.current&&y(e))).on(5,v).emit(2,g),()=>{f.clear(),m.emit(3,g)})),[]),(0,s.useEffect)((()=>{g.props=e,g.isToastActive=h,g.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,s=Array.from(f.values());return e.newestOnTop&&s.reverse(),s.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:d,isToastActive:h}}function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){const[t,n]=(0,s.useState)(!1),[a,o]=(0,s.useState)(!1),r=(0,s.useRef)(null),l=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,s.useRef)(e),{autoClose:d,pauseOnHover:u,closeToast:m,onClick:f,closeOnClick:p}=e;function h(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",T),document.addEventListener("touchmove",w),document.addEventListener("touchend",T);const n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=g(t.nativeEvent),l.y=v(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(l.boundingRect){const{top:n,bottom:s,left:a,right:o}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=a&&l.x<=o&&l.y>=n&&l.y<=s?x():b()}}function b(){n(!0)}function x(){n(!1)}function w(n){const s=r.current;l.canDrag&&s&&(l.didMove=!0,t&&x(),l.x=g(n),l.y=v(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),s.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,s.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function T(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",T);const t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,s.useEffect)((()=>{c.current=e})),(0,s.useEffect)((()=>(r.current&&r.current.addEventListener("d",b,{once:!0}),i(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),()=>{const e=c.current;i(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)})),[]),(0,s.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",b),window.addEventListener("blur",x)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",x))})),[e.pauseOnFocusLoss]);const E={onMouseDown:h,onTouchStart:h,onMouseUp:y,onTouchEnd:y};return d&&u&&(E.onMouseEnter=x,E.onMouseLeave=b),p&&(E.onClick=e=>{f&&f(e),l.canCloseOnClick&&m()}),{playToast:b,pauseToast:x,isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:E}}function b(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return s.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function x(e){let{delay:t,isRunning:n,closeToast:o,type:r="default",hide:l,className:c,style:d,controlledProgress:u,progress:m,rtl:f,isIn:p,theme:h}=e;const g=l||u&&0===m,v={...d,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};u&&(v.transform=`scaleX(${m})`);const y=(0,a.default)("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":f}),b=i(c)?c({rtl:f,type:r,defaultClassName:y}):(0,a.default)(y,c);return s.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:b,style:v,[u&&m>=1?"onTransitionEnd":"onAnimationEnd"]:u&&m<1?null:()=>{p&&o()}})}const w=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:r}=y(e),{closeButton:l,children:c,autoClose:d,onClick:u,type:m,hideProgressBar:f,closeToast:p,transition:h,position:g,className:v,style:w,bodyClassName:T,bodyStyle:E,progressClassName:N,progressStyle:k,updateId:C,role:_,progress:j,rtl:A,toastId:I,deleteToast:L,isIn:O,isLoading:R,iconOut:P,closeOnClick:B,theme:F}=e,M=(0,a.default)("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":B}),S=i(v)?v({rtl:A,position:g,type:m,defaultClassName:M}):(0,a.default)(M,v),$=!!j||!d,D={closeToast:p,type:m,theme:F};let H=null;return!1===l||(H=i(l)?l(D):(0,s.isValidElement)(l)?(0,s.cloneElement)(l,D):b(D)),s.createElement(h,{isIn:O,done:L,position:g,preventExitTransition:n,nodeRef:o},s.createElement("div",{id:I,onClick:u,className:S,...r,style:w,ref:o},s.createElement("div",{...O&&{role:_},className:i(T)?T({type:m}):(0,a.default)("Toastify__toast-body",T),style:E},null!=P&&s.createElement("div",{className:(0,a.default)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},P),s.createElement("div",null,c)),H,s.createElement(x,{...C&&!$?{key:`pb-${C}`}:{},rtl:A,theme:F,delay:d,isRunning:t,isIn:O,closeToast:p,hide:f,type:m,style:k,className:N,controlledProgress:$,progress:j||0})))},T=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},E=d(T("bounce",!0)),N=(d(T("slide",!0)),d(T("zoom")),d(T("flip")),(0,s.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:r}=h(e),{className:c,style:d,rtl:u,containerId:m}=e;function f(e){const t=(0,a.default)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":u});return i(c)?c({position:e,rtl:u,defaultClassName:t}):(0,a.default)(t,l(c))}return(0,s.useEffect)((()=>{t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:m},n(((e,t)=>{const n=t.length?{...d}:{...d,pointerEvents:"none"};return s.createElement("div",{className:f(e),style:n,key:`container-${e}`},t.map(((e,n)=>{let{content:a,props:o}=e;return s.createElement(w,{...o,isIn:r(o.toastId),style:{...o.style,"--nth":n+1,"--len":t.length},key:`toast-${o.key}`},a)})))})))})));N.displayName="ToastContainer",N.defaultProps={position:"top-right",transition:E,autoClose:5e3,closeButton:b,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let k,C=new Map,_=[],j=1;function A(){return""+j++}function I(e){return e&&(r(e.toastId)||o(e.toastId))?e.toastId:A()}function L(e,t){return C.size>0?m.emit(0,e,t):_.push({content:e,options:t}),t.toastId}function O(e,t){return{...t,type:t&&t.type||e,toastId:I(t)}}function R(e){return(t,n)=>L(t,O(e,n))}function P(e,t){return L(e,O("default",t))}P.loading=(e,t)=>L(e,O("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),P.promise=function(e,t,n){let s,{pending:a,error:o,success:l}=t;a&&(s=r(a)?P.loading(a,n):P.loading(a.render,{...n,...a}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,a)=>{if(null==t)return void P.dismiss(s);const o={type:e,...c,...n,data:a},i=r(t)?{render:t}:t;return s?P.update(s,{...o,...i}):P(i.render,{...o,...i}),a},u=i(e)?e():e;return u.then((e=>d("success",l,e))).catch((e=>d("error",o,e))),u},P.success=R("success"),P.info=R("info"),P.error=R("error"),P.warning=R("warning"),P.warn=P.warning,P.dark=(e,t)=>L(e,O("default",{theme:"dark",...t})),P.dismiss=e=>{C.size>0?m.emit(1,e):_=_.filter((t=>null!=e&&t.options.toastId!==e))},P.clearWaitingQueue=function(e){return void 0===e&&(e={}),m.emit(5,e)},P.isActive=e=>{let t=!1;return C.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},P.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const s=C.get(n||k);return s&&s.getToast(e)}(e,t);if(n){const{props:s,content:a}=n,o={delay:100,...s,...t,toastId:t.toastId||e,updateId:A()};o.toastId!==e&&(o.staleId=e);const r=o.render||a;delete o.render,L(r,o)}}),0)},P.done=e=>{P.update(e,{progress:1})},P.onChange=e=>(m.on(4,e),()=>{m.off(4,e)}),P.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},P.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},m.on(2,(e=>{k=e.containerId||e,C.set(k,e),_.forEach((e=>{m.emit(0,e.content,e.options)})),_=[]})).on(3,(e=>{C.delete(e.containerId||e),0===C.size&&m.off(0).off(1).off(5)}))}},function(e){e.O(0,[5445,8907,2013,260,4617,8982,3100,7193,9774,2888,179],(function(){return t=37944,e(e.s=t);var t}));var t=e.O();_N_E=t}]);