"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6683],{59691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=n(85893),o=n(11151);n(67294);const l={devops:{color:"#54ffe0",label:"DevOps",isBright:!0},"cosmos-sdk":{color:"#F69900",label:"Cosmos SDK",isBright:!0},"ibc-go":{color:"#ff1717",label:"IBC-Go"},cosmjs:{color:"#6836D0",label:"CosmJS"},cosmwasm:{color:"#05BDFC",label:"CosmWasm"},cometbft:{color:"#00B067",label:"CometBFT"},"cosmos-hub":{color:"#f7f199",label:"Cosmos Hub",isBright:!0},concepts:{color:"#AABAFF",label:"Concept",isBright:!0},tutorial:{color:"#F46800",label:"Tutorial"},"guided-coding":{color:"#F24CF4",label:"Guided Coding"}},i=e=>{let{type:t,version:n}=e;const o=l[t]||l["ibc-go"];return(0,r.jsxs)("span",{style:{backgroundColor:o.color,borderRadius:"2px",color:o.isBright?"black":"white",padding:"0.3rem",marginBottom:"1rem",marginRight:"0.25rem",display:"inline-block"},children:[o.label,n?` ${n}`:""]})};var c=n(84924);const a={title:"Introduction",sidebar_label:"Introduction",sidebar_position:1,slug:"/fee/intro"},s="Introduction",d={id:"fee/intro",title:"Introduction",description:"This is a tutorial for wiring up the ICS-29 Fee Middleware to a Cosmos SDK blockchain and a React frontend.",source:"@site/tutorials/01-fee/01-intro.md",sourceDirName:"01-fee",slug:"/fee/intro",permalink:"/tutorials/fee/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_label:"Introduction",sidebar_position:1,slug:"/fee/intro"},sidebar:"defaultSidebar",previous:{title:"IBC-Go Tutorials",permalink:"/tutorials/intro"},next:{title:"Set Up Your Work Environment",permalink:"/tutorials/fee/setup-env"}},h={},u=[{value:"Scope",id:"scope",level:2}];function p(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(i,{type:"ibc-go",version:"v7"}),"\n",(0,r.jsx)(i,{type:"cosmos-sdk",version:"v0.47"}),"\n",(0,r.jsx)(i,{type:"cosmjs"}),"\n",(0,r.jsx)(i,{type:"guided-coding"}),"\n",(0,r.jsx)(t.p,{children:"This is a tutorial for wiring up the ICS-29 Fee Middleware to a Cosmos SDK blockchain and a React frontend."}),"\n",(0,r.jsx)(c.Z,{type:"prerequisite",title:"Prerequisites",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Basic Knowledge of ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})]}),"\n",(0,r.jsxs)(t.li,{children:["Basic Knowledge of Cosmos SDK","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If you are new to Cosmos SDK, we recommend you to go through the first two categories of the ",(0,r.jsx)(t.a,{href:"https://tutorials.cosmos.network/academy/1-what-is-cosmos/",children:"Developer Portal"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Basic Knowledge of ",(0,r.jsx)(t.a,{href:"https://ibc.cosmos.network/main/middleware/ics29-fee/overview",children:"the Fee Middleware module"})]}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"scope",children:"Scope"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial will cover creating a Cosmos SDK blockchain with the ICS-29 Fee Middleware wired up to it. It will also cover creating a React frontend that can interact with the blockchain."}),"\n",(0,r.jsxs)(c.Z,{type:"learning",title:"Learning Goals",children:[(0,r.jsx)(t.p,{children:"In this tutorial, you will:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create an IBC enabled blockchain using the Cosmos SDK."}),"\n",(0,r.jsx)(t.li,{children:"Wire up the ICS-29 Fee Middleware to the blockchain."}),"\n",(0,r.jsx)(t.li,{children:"Create a React frontend that can interact with the blockchain."}),"\n",(0,r.jsx)(t.li,{children:"Run two blockchains locally and connect them using the Hermes relayer."}),"\n",(0,r.jsx)(t.li,{children:"Make an incentivized transfer between the two blockchains."}),"\n"]})]})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},84924:(e,t,n)=>{n.d(t,{Z:()=>z});var r,o=n(67294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:21,height:23,fill:"none",viewBox:"0 0 21 23","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{fill:"#fff",d:"M9.302 22.2c-.1 0-.3 0-.4-.1-.4-.2-.6-.6-.6-1l.9-6.9h-7.9q-.6 0-.9-.6c-.2-.4-.1-.8.1-1.1l10-12c.3-.3.8-.5 1.2-.3s.6.6.6 1l-.9 6.9h7.9q.6 0 .9.6c.2.4.1.8-.1 1.1l-10 12c-.2.3-.5.4-.8.4m-5.9-10h6.9c.3 0 .6.1.7.3.2.2.3.5.2.8l-.6 4.6 6.4-7.7h-6.9c-.3 0-.6-.1-.7-.3-.2-.2-.3-.5-.2-.8l.6-4.6z"})))};var c;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:21,height:21,fill:"none",viewBox:"0 0 21 21","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,c||(c=o.createElement("path",{fill:"#200F31",d:"M8.3 9.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5zM19.3 9.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5zM19.3 20.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5zM8.3 20.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5z"})))};var d;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:23,height:23,fill:"none",viewBox:"0 0 23 23","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,d||(d=o.createElement("path",{fill:"#fff",d:"M11.3.2C5.2.2.3 5.1.3 11.2s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11m1 19.9v-2.9c0-.6-.4-1-1-1s-1 .4-1 1v2.9c-4.2-.5-7.5-3.8-7.9-7.9h2.9c.6 0 1-.4 1-1s-.4-1-1-1H2.4c.5-4.2 3.8-7.5 7.9-7.9v2.9c0 .6.4 1 1 1s1-.4 1-1V2.3c4.2.5 7.5 3.8 7.9 7.9h-2.9c-.6 0-1 .4-1 1s.4 1 1 1h2.9c-.4 4.2-3.7 7.5-7.9 7.9"})))};var p;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}const f=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:23,height:22,fill:"none",viewBox:"0 0 23 22","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,p||(p=o.createElement("path",{fill:"#fff",d:"M17.503 21.2c-.2 0-.3 0-.5-.1l-5.7-3-5.7 3c-.3.2-.7.1-1.1-.1-.3-.2-.5-.6-.4-1l1.1-6.4-4.6-4.5c-.3-.3-.4-.7-.3-1 .1-.4.4-.6.8-.7l6.4-.9 2.9-5.8c.3-.7 1.5-.7 1.8 0l2.9 5.8 6.4.9c.4.1.7.3.8.7s0 .8-.3 1l-4.6 4.5 1.1 6.4c.1.4-.1.8-.4 1-.2.1-.4.2-.6.2M3.403 9.1l3.5 3.5c.2.2.3.6.3.9l-.8 4.9 4.4-2.3q.45-.3.9 0l4.4 2.3-.8-4.9c-.1-.3.1-.7.3-.9l3.5-3.5-4.9-.7c-.3 0-.6-.3-.8-.5l-2.2-4.4-2.2 4.4c-.1.3-.4.5-.8.5z"})))};var v;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}const b=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,v||(v=o.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.5 21.2H11m7.7-12.5a6 6 0 0 0-12 0c0 2.3 2.4 4.4 3 5.8 1 1.8 1 3.2 1 3.2h4s0-1.4 1-3.2c.7-1.4 3-3.2 3-5.8"})))};var w;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}const j=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:17,height:21,fill:"none",viewBox:"0 0 17 21","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,w||(w=o.createElement("path",{fill:"#1A1A1A",d:"M5.3 14.5h6c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1m0-4h6c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1m5-10h-8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12zm4 18h-12v-16h7v3c0 1.1.9 2 2 2h3z"})))};var y;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}const M=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:24,height:23,fill:"none",viewBox:"0 0 24 23","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,y||(y=o.createElement("path",{fill:"#fff",d:"M18.203 7.2h-17c-.6 0-1 .4-1 1v9c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5 2.8 0 5-2.2 5-5s-2.3-5-5-5m-2 10c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8h14zm2-2v-6c1.7 0 3 1.3 3 3 0 1.6-1.4 3-3 3M5.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1M9.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1M13.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1"})))};var C;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}const B=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,C||(C=o.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M12 16v-4M12 8h.01"})))};var E;function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}const I=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,E||(E=o.createElement("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0M12 9v4M12 17h.01"})))};var D=n(85893);const S={tip:{color1:"#336667",color2:"#00B067",icon:(0,D.jsx)(b,{}),darkMode:!0},reading:{color1:"#F46800",color2:"#F24CF4",icon:(0,D.jsx)(i,{}),darkMode:!1},info:{color1:"#336667",color2:"#00B067",icon:(0,D.jsx)(B,{}),darkMode:!0},warn:{color1:"#00B067",color2:"#FFD303",icon:(0,D.jsx)(I,{}),darkMode:!1},warning:{color1:"#00B067",color2:"#FFD303",icon:(0,D.jsx)(I,{}),darkMode:!1},synopsis:{color1:"#1c1c1c",color2:"#1c1c1c",icon:null,darkMode:!0},prerequisite:{color1:"lightgray",color2:"lightgray",icon:(0,D.jsx)(s,{}),darkMode:!1},learning:{color1:"#6836D0",color2:"#05BDFC",icon:(0,D.jsx)(u,{}),darkMode:!0},"best-practice":{color1:"#6836D0",color2:"#6836D0",icon:(0,D.jsx)(f,{}),darkMode:!0},remember:{color1:"#6D0000",color2:"#F66800",icon:(0,D.jsx)(b,{}),darkMode:!0},note:{color1:"#F69900",color2:"#FFCE15",icon:(0,D.jsx)(j,{}),darkMode:!1},docs:{color1:"#6836D0",color2:"#F44CF6",icon:(0,D.jsx)(M,{}),darkMode:!0}},P=e=>{let{color1:t,color2:n}=e;return{background:`linear-gradient(78.06deg, ${t} 1.14%, ${n} 98.88%)`,border:0,borderRadius:16,padding:"0 30px",display:"flex",width:"100%",justifyContent:"start",marginBottom:20,fontSize:21,flexWrap:"wrap",flexDirection:"column"}};const z=function(e){let{type:t,title:n,children:r}=e;const l=S[t]||S.info,i={backgroundColor:"var(--docusaurus-highlighted-code-line-bg)"},c={alignSelf:"center",marginTop:"10px",filter:l.darkMode?"brightness(0) invert(1)":"brightness(0)"},a={marginTop:"10px",marginLeft:"10px",color:l.darkMode?"#e6e6e6":"black"},s={color:l.darkMode?"#e6e6e6":"black",marginBottom:"10px"},d=o.Children.map(r,(e=>"a"===e.type?o.cloneElement(e,{style:anchorStyle}):"code"===e.type?o.cloneElement(e,{style:i}):e));return(0,D.jsxs)("div",{style:P(l),className:"highlightBox",children:[(0,D.jsx)("style",{children:`\n          .highlightBox a {\n            color: ${l.darkMode?"blue":"#85c1e9"} !important;\n          }\n        `}),(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[(0,D.jsx)("div",{style:c,children:l.icon}),(0,D.jsx)("h3",{style:a,children:n})]}),(0,D.jsx)("div",{style:s,children:d})]})}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(67294);const o={},l=r.createContext(o);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);