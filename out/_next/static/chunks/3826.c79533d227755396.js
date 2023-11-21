"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3826],{38168:function(t,e,n){n.d(e,{W:function(){return a}});var i=n(75792),s=n(68457);class a extends s.Z{constructor(t){let{chains:e=i.gL9,options:n}=t;super(),this.chains=e,this.options=n}getBlockExplorerUrls(t){const e=t.explorers?.map((t=>t.url))??[];return e.length>0?e:void 0}isChainUnsupported(t){return!this.chains.some((e=>e.chainId===t))}updateChains(t){this.chains=t}}},74229:function(t,e,n){n.d(e,{A:function(){return r},C:function(){return o},R:function(){return h},S:function(){return d},U:function(){return u},a:function(){return c}});var i=n(25634);class s extends Error{constructor(t,e){const{cause:n,code:i,data:s}=e;if(!Number.isInteger(i))throw new Error('"code" must be an integer.');if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string.');super(`${t}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=i,this.data=s}}class a extends s{constructor(t,e){const{cause:n,code:i,data:s}=e;if(!(Number.isInteger(i)&&i>=1e3&&i<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:n,code:i,data:s})}}class r extends Error{constructor(){super(...arguments),(0,i._)(this,"name","AddChainError"),(0,i._)(this,"message","Error adding chain")}}class o extends Error{constructor(t){let{chainId:e,connectorId:n}=t;super(`Chain "${e}" not configured for connector "${n}".`),(0,i._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,i._)(this,"name","ConnectorNotFoundError"),(0,i._)(this,"message","Connector not found")}}class h extends s{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,i._)(this,"name","ResourceUnavailable")}}class d extends a{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,i._)(this,"name","SwitchChainError")}}class u extends a{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,i._)(this,"name","UserRejectedRequestError")}}},33946:function(t,e,n){n.d(e,{g:function(){return a},i:function(){return s}});var i=n(75792);function s(t){const e=new URL(t).hostname;return e.endsWith(".thirdweb.com")||"localhost"===e||"0.0.0.0"===e}function a(t){return(0,i.OZ$)(t).map((t=>{try{const e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return t}}))}},43826:function(t,e,n){n.r(e),n.d(e,{WalletConnectConnector:function(){return k}});var i=n(49459),s=n(9525),a=n(25634),r=n(19485),o=n(241),c=n(16441),h=n(34130),d=n(33946),u=n(38168),l=n(74229);n(68457);const p=new Set([1,137,10,42161,56]),w="wagmi.requestedChains",g="wallet_addEthereumChain",m="last-used-chain-id";var f=new WeakMap,C=new WeakMap,b=new WeakMap,v=new WeakSet,y=new WeakSet,_=new WeakSet,I=new WeakSet,E=new WeakSet,S=new WeakSet,N=new WeakSet,U=new WeakSet;class k extends u.W{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,i._)(this,U),(0,i._)(this,N),(0,i._)(this,S),(0,i._)(this,E),(0,i._)(this,I),(0,i._)(this,_),(0,i._)(this,y),(0,i._)(this,v),(0,a._)(this,"id",h.w.walletConnect),(0,a._)(this,"name","WalletConnect"),(0,a._)(this,"ready",!0),(0,s._)(this,f,{writable:!0,value:void 0}),(0,s._)(this,C,{writable:!0,value:void 0}),(0,s._)(this,b,{writable:!0,value:void 0}),(0,a._)(this,"onAccountsChanged",(t=>{0===t.length?this.emit("disconnect"):t[0]&&this.emit("change",{account:r.getAddress(t[0])})})),(0,a._)(this,"onChainChanged",(async t=>{const e=Number(t),n=this.isChainUnsupported(e);await(0,s.b)(this,b).setItem(m,String(t)),this.emit("change",{chain:{id:e,unsupported:n}})})),(0,a._)(this,"onDisconnect",(async()=>{await(0,i.a)(this,E,M).call(this,[]),await(0,s.b)(this,b).removeItem(m),this.emit("disconnect")})),(0,a._)(this,"onDisplayUri",(t=>{this.emit("message",{type:"display_uri",data:t})})),(0,a._)(this,"onConnect",(()=>{this.emit("connect",{provider:(0,s.b)(this,f)})})),(0,s.a)(this,b,t.options.storage),(0,i.a)(this,v,W).call(this),this.filteredChains=this.chains.length>50?this.chains.filter((t=>p.has(t.chainId))):this.chains}async connect(){let{chainId:t,pairingTopic:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let n=t;if(!n){const t=await(0,s.b)(this,b).getItem(m),e=t?parseInt(t):void 0;n=e&&!this.isChainUnsupported(e)?e:this.filteredChains[0]?.chainId}if(!n)throw new Error("No chains found on connector.");const a=await this.getProvider();this.setupListeners();const c=await(0,i.a)(this,_,A).call(this);if(a.session&&c&&await a.disconnect(),!a.session||c){const t=this.filteredChains.filter((t=>t.chainId!==n)).map((t=>t.chainId));this.emit("message",{type:"connecting"}),await a.connect({pairingTopic:e,chains:[n],optionalChains:t.length>0?t:[n]}),await(0,i.a)(this,E,M).call(this,this.filteredChains.map((t=>{let{chainId:e}=t;return e})))}const h=await a.enable();if(!h[0])throw new Error("No accounts found on provider.");const d=r.getAddress(h[0]),u=await this.getChainId();return{account:d,chain:{id:u,unsupported:this.isChainUnsupported(u)},provider:new o.Q(a)}}catch(n){if(/user rejected/i.test(n?.message))throw new l.U(n);throw n}}async disconnect(){const t=()=>{if("undefined"!==typeof localStorage)for(const t in localStorage)t.startsWith("wc@2")&&localStorage.removeItem(t)};t();const e=await this.getProvider();(async()=>{try{await e.disconnect()}catch(n){if(!/No matching key/i.test(n.message))throw n}finally{(0,i.a)(this,I,L).call(this),await(0,i.a)(this,E,M).call(this,[]),t()}})()}async getAccount(){const{accounts:t}=await this.getProvider();if(!t[0])throw new Error("No accounts found on provider.");return r.getAddress(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,s.b)(this,f)||await(0,i.a)(this,v,W).call(this),t&&await this.switchChain(t),!(0,s.b)(this,f))throw new Error("No provider found.");return(0,s.b)(this,f)}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[e,n]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]);return new o.Q(e,t).getSigner(n)}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),n=await(0,i.a)(this,_,A).call(this);if(!t)return!1;if(n&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){const e=this.chains.find((e=>e.chainId===t));if(!e)throw new l.S(`Chain with ID: ${t}, not found on connector.`);try{const n=await this.getProvider(),s=(0,i.a)(this,N,P).call(this),a=(0,i.a)(this,U,D).call(this);if(!s.includes(t)&&a.includes(g)){const s=e.explorers&&e.explorers[0],a=s?{blockExplorerUrls:[s.url]}:{};await n.request({method:g,params:[{chainId:c.hexValue(e.chainId),chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:(0,d.g)(e),...a}]});const r=await(0,i.a)(this,S,O).call(this);r.push(t),await(0,i.a)(this,E,M).call(this,r)}return await n.request({method:"wallet_switchEthereumChain",params:[{chainId:c.hexValue(t)}]}),e}catch(n){if(/user rejected request/i.test("string"===typeof n?n:n?.message))throw new l.U(n);throw new l.S(n)}}async setupListeners(){(0,s.b)(this,f)&&((0,i.a)(this,I,L).call(this),(0,s.b)(this,f).on("accountsChanged",this.onAccountsChanged),(0,s.b)(this,f).on("chainChanged",this.onChainChanged),(0,s.b)(this,f).on("disconnect",this.onDisconnect),(0,s.b)(this,f).on("session_delete",this.onDisconnect),(0,s.b)(this,f).on("display_uri",this.onDisplayUri),(0,s.b)(this,f).on("connect",this.onConnect))}}async function W(){return(0,s.b)(this,C)||(0,s.a)(this,C,(0,i.a)(this,y,x).call(this)),(0,s.b)(this,C)}async function x(){const{default:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:i}=await n.e(3558).then(n.bind(n,3558)),[a,...r]=this.filteredChains.map((t=>{let{chainId:e}=t;return e}));a&&(0,s.a)(this,f,await t.init({showQrModal:!1!==this.options.qrcode,projectId:this.options.projectId,optionalMethods:i,optionalEvents:e,chains:[a],optionalChains:r,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map((t=>[t.chainId,t.rpc[0]||""]))),qrModalOptions:this.options.qrModalOptions}))}async function A(){if((0,i.a)(this,U,D).call(this).includes(g))return!1;if(!this.options.isNewChainsStale)return!1;const t=await(0,i.a)(this,S,O).call(this),e=this.filteredChains.map((t=>{let{chainId:e}=t;return e})),n=(0,i.a)(this,N,P).call(this);return!(n.length&&!n.some((t=>e.includes(t))))&&!e.every((e=>t.includes(e)))}function L(){(0,s.b)(this,f)&&((0,s.b)(this,f).removeListener("accountsChanged",this.onAccountsChanged),(0,s.b)(this,f).removeListener("chainChanged",this.onChainChanged),(0,s.b)(this,f).removeListener("disconnect",this.onDisconnect),(0,s.b)(this,f).removeListener("session_delete",this.onDisconnect),(0,s.b)(this,f).removeListener("display_uri",this.onDisplayUri),(0,s.b)(this,f).removeListener("connect",this.onConnect))}async function M(t){await(0,s.b)(this,b).setItem(w,JSON.stringify(t))}async function O(){const t=await(0,s.b)(this,b).getItem(w);return t?JSON.parse(t):[]}function P(){if(!(0,s.b)(this,f))return[];const t=(0,s.b)(this,f).session?.namespaces.eip155?.chains?.map((t=>parseInt(t.split(":")[1]||"")));return t??[]}function D(){if(!(0,s.b)(this,f))return[];const t=(0,s.b)(this,f).session?.namespaces.eip155?.methods;return t??[]}}}]);