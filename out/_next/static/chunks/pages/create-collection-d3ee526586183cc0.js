(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7477],{82871:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-collection",function(){return t(63036)}])},84051:function(e,s,t){"use strict";var a=t(9669),l=t.n(a),r="https://www.api.thecentaurus.io/api",n={createCollection:function(e){return l().post(r+"/create-collection",e)},registerUser:function(e){var s={userAddress:e,secret:"HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb"};return l().post(r+"/register",s)},storeNft:function(e){return l().post(r+"/create-nft",e)},userProfile:function(e){return l().post(r+"/update-user",e)}};s.Z=n},63036:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return x}});var a=t(85893),l=t(2067),r=t(11332),n=t(67294),i=t(97193),d=t(84051);var o=t(55678),c=t(33459),m=(t(40993),[{id:1,title:"Unlockable Content",description:"Last message sent an hour ago"},{id:2,title:"Explicit & Sensitive Content",description:"Last message sent 2 weeks ago"}]);function u(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return s.filter(Boolean).join(" ")}function x(){var e=(0,n.useState)(m[0]),s=e[0],t=e[1],x=(0,c.SFn)(),p=(0,n.useState)(!1),h=(p[0],p[1]),f=(0,n.useState)(null),g=f[0],v=f[1],j=(0,n.useState)(null),b=j[0],w=j[1],N=(0,n.useState)(null),y=N[0],k=N[1],E=(0,n.useState)(""),S=E[0],C=E[1],A=(0,n.useState)(""),L=A[0],T=A[1],I=(0,n.useState)(""),R=I[0],F=I[1],D=(0,n.useState)(""),P=D[0],G=D[1],M=(0,n.useState)(""),U=M[0],B=M[1],H=(0,n.useState)("eth"),O=H[0],_=(H[1],(0,n.useState)("1")),V=_[0];_[1];return(0,a.jsx)(i.A,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(o.Ix,{}),(0,a.jsx)("div",{className:"flex justify-center ",children:(0,a.jsxs)("div",{className:"z-20 max-w-screen-lg px-8 pt-10 my-16 md:px-15 lg:px-20 lg:pt-32",children:[(0,a.jsx)("div",{className:"py-2",children:(0,a.jsx)("h1",{className:"text-3xl font-bold text-yellow-300",children:"Create Collection"})}),(0,a.jsxs)("p",{className:"py-2 text-black dark:text-white ",children:[(0,a.jsx)("span",{className:"text-red-500",children:" *"})," Required fields"]}),(0,a.jsxs)("form",{className:"space-y-6",action:"#",onSubmit:function(e){e.preventDefault();var s=new FormData;s.append("logo",null!==g&&void 0!==g?g:""),s.append("banner",null!==b&&void 0!==b?b:""),s.append("featured",null!==y&&void 0!==y?y:""),s.append("name",S),s.append("url",L),s.append("description",R),s.append("category",P),s.append("supply",U),s.append("blockchain",O),s.append("explicit",V),s.append("unlockable","0"),s.append("secret","HwgGvrRwdTYUJuytr567jbHGftyI7TfvbnjUYTFVBNbvcGBHNhgdxcvbn985gb"),s.append("userAddress",x),d.Z.createCollection(s).then((function(e){"Upload successful"===e.data.message?o.Am.success(e.data.message,{onClose:function(){window.location.reload()}}):o.Am.error(e.data.message)}),(function(e){h(!1)}))},method:"POST",children:[(0,a.jsxs)("div",{className:"px-4 py-5 dark:bg-[#1b1324] bg-[#fff] shadow sm:rounded-lg sm:p-6",children:[(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsxs)("div",{className:"md:col-span-1",children:[(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-black dark:text-white",children:"Logo Image*"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"This image will also be used for navigation. 350 x 350 recommended."})]}),(0,a.jsx)("div",{className:"md:col-span-2",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex justify-center w-full px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"file-upload",className:"relative font-medium text-yellow-400 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:text-yellow-500",children:[(0,a.jsx)("span",{children:"Upload a file"}),(0,a.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",required:!0,onChange:function(e){return v(e.target.files?e.target.files[0]:null)},className:"sr-only"})]}),g&&(0,a.jsxs)("p",{className:" pl-4",children:["Filename: ",null===g||void 0===g?void 0:g.name]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})})})]}),(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsxs)("div",{className:"md:col-span-1",children:[(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-black dark:text-white",children:"Banner Image"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"This image will appear top of your collection page. 1400 x 350 recommended."})]}),(0,a.jsx)("div",{className:"md:col-span-2",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex justify-center w-full px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"file-upload1",className:"relative font-medium text-yellow-400 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:text-yellow-500",children:[(0,a.jsx)("span",{children:"Upload a file"}),(0,a.jsx)("input",{id:"file-upload1",name:"file-upload1",type:"file",required:!0,onChange:function(e){return w(e.target.files?e.target.files[0]:null)},className:"sr-only"})]}),b&&(0,a.jsxs)("p",{className:" pl-4",children:["Filename: ",null===b||void 0===b?void 0:b.name]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})})})]}),(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsxs)("div",{className:"md:col-span-1",children:[(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-black dark:text-white",children:"Featured Image"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"This image will be used for the featured image on the home page.600 x 400 recommended."})]}),(0,a.jsx)("div",{className:"md:col-span-2",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex justify-center w-full px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"file-upload2",className:"relative font-medium text-yellow-400 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:text-yellow-500",children:[(0,a.jsx)("span",{children:"Upload a file"}),(0,a.jsx)("input",{id:"file-upload2",name:"file-upload2",type:"file",required:!0,onChange:function(e){return k(e.target.files?e.target.files[0]:null)},className:"sr-only"})]}),y&&(0,a.jsxs)("p",{className:" pl-4",children:["Filename: ",null===y||void 0===y?void 0:y.name]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})})})]})]}),(0,a.jsxs)("div",{className:"px-4 py-5 dark:bg-[#1b1324] bg-[#fff] shadow sm:rounded-lg sm:p-6",children:[(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsx)("div",{className:"md:col-span-1",children:(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-black dark:text-white",children:"Information"})}),(0,a.jsx)("div",{className:"mt-5 md:col-span-2 md:mt-0",children:(0,a.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"first-name",className:"block text-sm font-medium text-black dark:text-white",children:"Name"}),(0,a.jsx)("input",{type:"text",name:"first-name",id:"first-name",required:!0,value:S,onChange:function(e){return C(e.target.value)},autoComplete:"given-name",className:"block w-full mt-1 border-gray-300 dark:bg-[#2A243D] text-white dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"})]}),(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"last-name",className:"block text-sm font-medium text-black dark:text-white",children:"URL (optional)"}),(0,a.jsx)("input",{type:"text",name:"url",id:"url",autoComplete:"https//:",required:!0,value:L,onChange:function(e){return T(e.target.value)},className:"block w-full mt-1 border-gray-300 text-white dark:bg-[#2A243D] dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"})]}),(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-4",children:[(0,a.jsx)("label",{htmlFor:"email-address",className:"block text-sm font-medium text-black dark:text-white",children:"Description"}),(0,a.jsx)("textarea",{name:"description",id:"description",value:R,onChange:function(e){return F(e.target.value)},autoComplete:"gg",className:"block w-full mt-1 border-gray-300 text-white dark:bg-[#2A243D] dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"})]}),(0,a.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"country",className:"block text-sm font-medium text-black dark:text-white",children:"Category and tags"}),(0,a.jsxs)("select",{id:"Category",name:"Category",autoComplete:"country-name",required:!0,value:P,onChange:function(e){return G(e.target.value)},className:"block w-full px-3 py-2 mt-1 dark:text-white bg-white dark:bg-[#2A243D] dark:border-transparent border border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm",children:[(0,a.jsx)("option",{children:"Select a category"}),(0,a.jsx)("option",{value:"DIGITAL ART",children:"DIGITAL ART"},1),(0,a.jsx)("option",{value:"PHISICAL ART",children:"PHISICAL ART"},2),(0,a.jsx)("option",{value:"MUSIC",children:"MUSIC"},3),(0,a.jsx)("option",{value:"VIDEO",children:"VIDEO"},4),(0,a.jsx)("option",{value:"GAMES",children:"GAMES"},5),(0,a.jsx)("option",{value:"COLLECTABLE",children:"COLLECTABLE"},6),(0,a.jsx)("option",{value:"PFPS",children:"PFPS"},7),(0,a.jsx)("option",{value:"DOCCUMENTS",children:"DOCCUMENTS"},8),(0,a.jsx)("option",{value:"RECORDS",children:"RECORDS"},9),(0,a.jsx)("option",{value:"DEEDS",children:"DEEDS"},10),(0,a.jsx)("option",{value:"REALESTATE PHISICAL",children:"REALESTATE PHISICAL"},11),(0,a.jsx)("option",{value:"REAL ESTATE FLORE PLANS",children:"REAL ESTATE FLORE PLANS"},12),(0,a.jsx)("option",{value:"REAL ESTATE METAVERSE",children:"REAL ESTATE METAVERSE"},13),(0,a.jsx)("option",{value:"SUBSCRIPTIONS",children:"SUBSCRIPTIONS"},14),(0,a.jsx)("option",{value:"SERVICESS",children:"SERVICESS"},15)]})]}),(0,a.jsxs)("div",{className:"col-span-6",children:[(0,a.jsx)("label",{htmlFor:"street-address",className:"block text-sm font-medium text-black dark:text-white",children:"Supply"}),(0,a.jsx)("input",{type:"number",name:"street-address",id:"street-address",value:U,onChange:function(e){return B(e.target.value)},autoComplete:"street-address",className:"block w-full mt-1 border-gray-300 text-white dark:bg-[#2A243D] dark:border-transparent rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"})]})]})})]}),(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsx)("div",{className:"md:col-span-1"}),(0,a.jsx)("div",{className:"mt-5 md:col-span-2 md:mt-0",children:(0,a.jsx)(l.E,{value:s,onChange:t,children:(0,a.jsx)("div",{className:"grid grid-cols-2 mt-4 dark:text-white gap-y-6 sm:gap-x-4",children:m.map((function(e){return(0,a.jsx)(l.E.Option,{value:e,className:function(e){return u(e.checked?"border-transparent":"border-gray-300",e.active?"border-yellow-500 ring-2 ring-yellow-500":"","relative flex cursor-pointer rounded-lg border dark:text-white dark:bg-[#2A243D] dark:border-transparent bg-white p-4 shadow-sm focus:outline-none")},children:function(s){var t=s.checked,n=s.active;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"flex flex-1",children:(0,a.jsxs)("span",{className:"flex flex-col",children:[(0,a.jsx)(l.E.Label,{as:"span",className:"block text-sm font-medium text-black dark:text-white ",children:e.title}),(0,a.jsx)(l.E.Description,{as:"span",className:"flex items-center mt-1 text-sm text-gray-500",children:e.description})]})}),(0,a.jsx)(r.Z,{className:u(t?"":"invisible","h-5 w-5 text-yellow-400"),"aria-hidden":"true"}),(0,a.jsx)("span",{className:u(n?"border":"border-2",t?"border-yellow-500":"border-transparent","pointer-events-none absolute -inset-px rounded-lg"),"aria-hidden":"true"})]})}},e.id)}))})})})]})]}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{type:"submit",className:"inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2",children:"Create"})})]})]})})]})})}}},function(e){e.O(0,[5445,8907,2013,260,4617,8982,3100,6167,7193,9774,2888,179],(function(){return s=82871,e(e.s=s);var s}));var s=e.O();_N_E=s}]);