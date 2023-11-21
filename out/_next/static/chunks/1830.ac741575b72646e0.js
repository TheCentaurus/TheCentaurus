"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1830],{11830:function(t,e,r){r.r(e),r.d(e,{EditionDrop:function(){return h}});var a=r(9279),n=r(47454),c=r(2593);class s{constructor(t){this.events=t}async getAllClaimerAddresses(t){const e=(await this.events.getEvents("TokensClaimed")).filter((e=>!(!e.data||!c.O$.isBigNumber(e.data.tokenId))&&e.data.tokenId.eq(t)));return Array.from(new Set(e.filter((t=>"string"===typeof t.data?.claimer)).map((t=>t.data.claimer))))}}var i=r(29673),o=r(54693);r(13550),r(64063),r(2162),r(77191),r(54098),r(71770);class h extends i.S{static contractRoles=n.dK;constructor(t,e,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.dw(t,e,c,a,r),r,i),this.abi=n.e.parse(c),this.metadata=new n.ah(this.contractWrapper,n.dL,this.storage),this.app=new n.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new n.ai(this.contractWrapper,h.contractRoles),this.royalties=new n.aj(this.contractWrapper,this.metadata),this.sales=new n.ak(this.contractWrapper),this.claimConditions=new n.an(this.contractWrapper,this.metadata,this.storage),this.events=new n.aR(this.contractWrapper),this.history=new s(this.events),this.encoder=new n.ag(this.contractWrapper),this.estimator=new n.aQ(this.contractWrapper),this.platformFees=new n.aT(this.contractWrapper),this.interceptor=new n.aS(this.contractWrapper),this.checkout=new o.a(this.contractWrapper),this.owner=new n.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!(await this.contractWrapper.read("hasRole",[(0,n.bI)("transfer"),a.d]))}createBatch=(0,n.dx)((async(t,e)=>this.erc1155.lazyMint.prepare(t,e)));async getClaimTransaction(t,e,r){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.erc1155.getClaimTransaction(t,e,r,{checkERC20Allowance:a})}claimTo=(0,n.dx)((()=>{var t=this;return async function(e,r,a){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return t.erc1155.claimTo.prepare(e,r,a,{checkERC20Allowance:n})}})());claim=(0,n.dx)((()=>{var t=this;return async function(e,r){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(n,e,r,a)}})());burnTokens=(0,n.dx)((async(t,e)=>this.erc1155.burn.prepare(t,e)));async prepare(t,e,r){return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}}},29673:function(t,e,r){r.d(e,{S:function(){return n}});var a=r(47454);class n{get chainId(){return this._chainId}constructor(t,e,r){this.contractWrapper=t,this.storage=e,this.erc1155=new a.aL(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,e){return this.erc1155.balanceOf(t,e)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,e){return this.erc1155.isApproved(t,e)}transfer=(0,a.dx)((()=>{var t=this;return async function(e,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(e,r,a,n)}})());setApprovalForAll=(0,a.dx)((async(t,e)=>this.erc1155.setApprovalForAll.prepare(t,e)));airdrop=(0,a.dx)((()=>{var t=this;return async function(e,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.airdrop.prepare(e,r,a,n)}})())}},54693:function(t,e,r){r.d(e,{a:function(){return h}});var a=r(47454),n=r(2177);const c="https://paper.xyz/api/2022-08-12/platform/thirdweb",s={[a.cR.Mainnet]:"Ethereum",[a.cR.Goerli]:"Goerli",[a.cR.Polygon]:"Polygon",[a.cR.Mumbai]:"Mumbai",[a.cR.Avalanche]:"Avalanche"};async function i(t,e){const r=function(t){return(0,n.Z)(t in s,`chainId not supported by paper: ${t}`),s[t]}(e),a=await fetch(`${c}/register-contract?contractAddress=${t}&chain=${r}`),i=await a.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}const o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};class h{constructor(t){this.contractWrapper=t}async getCheckoutId(){return i(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!(await this.getCheckoutId())}catch(t){return!1}}async createLinkIntent(t){return await async function(t,e){const r=await fetch(`${c}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...e,metadata:{...e.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!e.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await r.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}(await this.getCheckoutId(),t)}}}}]);