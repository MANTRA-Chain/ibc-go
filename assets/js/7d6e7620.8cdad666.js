"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2015],{13817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=t(85893),o=t(11151);const c={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/interchain-accounts/overview"},a="Overview",s={id:"apps/interchain-accounts/overview",title:"Overview",description:"Learn about what the Interchain Accounts module is",source:"@site/versioned_docs/version-v7.5.x/02-apps/02-interchain-accounts/01-overview.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/overview",permalink:"/v7/apps/interchain-accounts/overview",draft:!1,unlisted:!1,tags:[],version:"v7.5.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/apps/interchain-accounts/overview"},sidebar:"defaultSidebar",previous:{title:"Client",permalink:"/v7/apps/transfer/client"},next:{title:"Development Use Cases",permalink:"/v7/apps/interchain-accounts/development"}},r={},l=[{value:"What is the Interchain Accounts module?",id:"what-is-the-interchain-accounts-module",level:2},{value:"Concepts",id:"concepts",level:2},{value:"SDK security model",id:"sdk-security-model",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,i.jsx)(n.p,{children:"Learn about what the Interchain Accounts module is"})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-the-interchain-accounts-module",children:"What is the Interchain Accounts module?"}),"\n",(0,i.jsx)(n.p,{children:"Interchain Accounts is the Cosmos SDK implementation of the ICS-27 protocol, which enables cross-chain account management built upon IBC."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"How does an interchain account differ from a regular account?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Regular accounts use a private key to sign transactions. Interchain Accounts are instead controlled programmatically by counterparty chains via IBC packets."}),"\n",(0,i.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Host Chain"}),": The chain where the interchain account is registered. The host chain listens for IBC packets from a controller chain which should contain instructions (e.g. Cosmos SDK messages) for which the interchain account will execute."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Controller Chain"}),": The chain registering and controlling an account on a host chain. The controller chain sends IBC packets to the host chain to control the account."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Interchain Account"}),": An account on a host chain created using the ICS-27 protocol. An interchain account has all the capabilities of a normal account. However, rather than signing transactions with a private key, a controller chain will send IBC packets to the host chain which signals what transactions the interchain account should execute."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Authentication Module"}),": A custom application module on the controller chain that uses the Interchain Accounts module to build custom logic for the creation & management of interchain accounts. It can be either an IBC application module using the ",(0,i.jsx)(n.a,{href:"/v7/apps/interchain-accounts/legacy/keeper-api",children:"legacy API"}),", or a regular Cosmos SDK application module sending messages to the controller submodule's ",(0,i.jsx)(n.code,{children:"MsgServer"})," (this is the recommended approach from ibc-go v6 if access to packet callbacks is not needed). Please note that the legacy API will eventually be removed and IBC applications will not be able to use them in later releases."]}),"\n",(0,i.jsx)(n.h2,{id:"sdk-security-model",children:"SDK security model"}),"\n",(0,i.jsx)(n.p,{children:"SDK modules on a chain are assumed to be trustworthy. For example, there are no checks to prevent an untrustworthy module from accessing the bank keeper."}),"\n",(0,i.jsx)(n.p,{children:"The implementation of ICS-27 in ibc-go uses this assumption in its security considerations."}),"\n",(0,i.jsx)(n.p,{children:"The implementation assumes other IBC application modules will not bind to ports within the ICS-27 namespace."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const o={},c=i.createContext(o);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);