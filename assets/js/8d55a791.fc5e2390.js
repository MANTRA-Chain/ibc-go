"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9189],{2164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(85893),s=n(11151);const r={title:"Relayer",sidebar_label:"Relayer",sidebar_position:7,slug:"/ibc/relayer"},a="Relayer",o={id:"ibc/relayer",title:"Relayer",description:"Pre-requisite readings",source:"@site/versioned_docs/version-v7.5.x/01-ibc/07-relayer.md",sourceDirName:"01-ibc",slug:"/ibc/relayer",permalink:"/v7/ibc/relayer",draft:!1,unlisted:!1,tags:[],version:"v7.5.x",sidebarPosition:7,frontMatter:{title:"Relayer",sidebar_label:"Relayer",sidebar_position:7,slug:"/ibc/relayer"},sidebar:"defaultSidebar",previous:{title:"Governance Proposals",permalink:"/v7/ibc/proposals"},next:{title:"Protobuf Documentation",permalink:"/v7/ibc/proto-docs"}},l={},c=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Events",id:"events",level:2},{value:"Subscribing with Tendermint",id:"subscribing-with-tendermint",level:3},{value:"Example Implementations",id:"example-implementations",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"relayer",children:"Relayer"}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/v7/ibc/overview",children:"IBC Overview"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/advanced/08-events.md",children:"Events"})}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(t.p,{children:["Events are emitted for every transaction processed by the base application to indicate the execution\nof some logic clients may want to be aware of. This is extremely useful when relaying IBC packets.\nAny message that uses IBC will emit events for the corresponding TAO logic executed as defined in\nthe ",(0,i.jsx)(t.a,{href:"/events/events",children:"IBC events document"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In the SDK, it can be assumed that for every message there is an event emitted with the type ",(0,i.jsx)(t.code,{children:"message"}),",\nattribute key ",(0,i.jsx)(t.code,{children:"action"}),", and an attribute value representing the type of message sent\n(",(0,i.jsx)(t.code,{children:"channel_open_init"})," would be the attribute value for ",(0,i.jsx)(t.code,{children:"MsgChannelOpenInit"}),"). If a relayer queries\nfor transaction events, it can split message events using this event Type/Attribute Key pair."]}),"\n",(0,i.jsxs)(t.p,{children:["The Event Type ",(0,i.jsx)(t.code,{children:"message"})," with the Attribute Key ",(0,i.jsx)(t.code,{children:"module"})," may be emitted multiple times for a single\nmessage due to application callbacks. It can be assumed that any TAO logic executed will result in\na module event emission with the attribute value ",(0,i.jsx)(t.code,{children:"ibc_<submodulename>"})," (02-client emits ",(0,i.jsx)(t.code,{children:"ibc_client"}),")."]}),"\n",(0,i.jsx)(t.h3,{id:"subscribing-with-tendermint",children:"Subscribing with Tendermint"}),"\n",(0,i.jsxs)(t.p,{children:["Calling the Tendermint RPC method ",(0,i.jsx)(t.code,{children:"Subscribe"})," via ",(0,i.jsx)(t.a,{href:"https://docs.tendermint.com/main/rpc/",children:"Tendermint's Websocket"})," will return events using\nTendermint's internal representation of them. Instead of receiving back a list of events as they\nwere emitted, Tendermint will return the type ",(0,i.jsx)(t.code,{children:"map[string][]string"})," which maps a string in the\nform ",(0,i.jsx)(t.code,{children:"<event_type>.<attribute_key>"})," to ",(0,i.jsx)(t.code,{children:"attribute_value"}),". This causes extraction of the event\nordering to be non-trivial, but still possible."]}),"\n",(0,i.jsxs)(t.p,{children:["A relayer should use the ",(0,i.jsx)(t.code,{children:"message.action"})," key to extract the number of messages in the transaction\nand the type of IBC transactions sent. For every IBC transaction within the string array for\n",(0,i.jsx)(t.code,{children:"message.action"}),", the necessary information should be extracted from the other event fields. If\n",(0,i.jsx)(t.code,{children:"send_packet"})," appears at index 2 in the value for ",(0,i.jsx)(t.code,{children:"message.action"}),", a relayer will need to use the\nvalue at index 2 of the key ",(0,i.jsx)(t.code,{children:"send_packet.packet_sequence"}),". This process should be repeated for each\npiece of information needed to relay a packet."]}),"\n",(0,i.jsx)(t.h2,{id:"example-implementations",children:"Example Implementations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/cosmos/relayer",children:"Golang Relayer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/informalsystems/ibc-rs/tree/master/crates/relayer",children:"Hermes"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);