"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3970],{72023:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=o(85893),s=o(11151);const c={title:"Transaction Encoding",sidebar_label:"Transaction Encoding",sidebar_position:7,slug:"/apps/interchain-accounts/tx-encoding"},i="Transaction Encoding",a={id:"apps/interchain-accounts/tx-encoding",title:"Transaction Encoding",description:"When orchestrating an interchain account transaction, which comprises multiple sdk.Msg objects represented as Any types, the transactions must be encoded as bytes within InterchainAccountPacketData.",source:"@site/versioned_docs/version-v7.5.x/02-apps/02-interchain-accounts/07-tx-encoding.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/tx-encoding",permalink:"/v7/apps/interchain-accounts/tx-encoding",draft:!1,unlisted:!1,tags:[],version:"v7.5.x",sidebarPosition:7,frontMatter:{title:"Transaction Encoding",sidebar_label:"Transaction Encoding",sidebar_position:7,slug:"/apps/interchain-accounts/tx-encoding"},sidebar:"defaultSidebar",previous:{title:"Parameters",permalink:"/v7/apps/interchain-accounts/parameters"},next:{title:"Client",permalink:"/v7/apps/interchain-accounts/client"}},r={},d=[{value:"Protobuf Encoding",id:"protobuf-encoding",level:2},{value:"(Protobuf) JSON Encoding",id:"protobuf-json-encoding",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"transaction-encoding",children:"Transaction Encoding"}),"\n",(0,t.jsxs)(n.p,{children:["When orchestrating an interchain account transaction, which comprises multiple ",(0,t.jsx)(n.code,{children:"sdk.Msg"})," objects represented as ",(0,t.jsx)(n.code,{children:"Any"})," types, the transactions must be encoded as bytes within ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/proto/ibc/applications/interchain_accounts/v1/packet.proto#L21-L26",children:(0,t.jsx)(n.code,{children:"InterchainAccountPacketData"})}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"// InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field.\nmessage InterchainAccountPacketData {\n  Type   type = 1;\n  bytes  data = 2;\n  string memo = 3;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"data"})," field must be encoded as a ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/proto/ibc/applications/interchain_accounts/v1/packet.proto#L28-L31",children:(0,t.jsx)(n.code,{children:"CosmosTx"})}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-protobuf",children:"// CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain.\nmessage CosmosTx {\n  repeated google.protobuf.Any messages = 1;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The encoding method for ",(0,t.jsx)(n.code,{children:"CosmosTx"})," is determined during the channel handshake process. If the channel version ",(0,t.jsxs)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.2.0/proto/ibc/applications/interchain_accounts/v1/metadata.proto#L22",children:["metadata's ",(0,t.jsx)(n.code,{children:"encoding"})," field"]})," is marked as ",(0,t.jsx)(n.code,{children:"proto3"}),", then ",(0,t.jsx)(n.code,{children:"CosmosTx"})," undergoes protobuf encoding. Conversely, if the field is set to ",(0,t.jsx)(n.code,{children:"proto3json"}),", then ",(0,t.jsx)(n.a,{href:"https://protobuf.dev/programming-guides/proto3/#json",children:"proto3 json"})," encoding takes place, which generates a JSON representation of the protobuf message."]}),"\n",(0,t.jsx)(n.h2,{id:"protobuf-encoding",children:"Protobuf Encoding"}),"\n",(0,t.jsxs)(n.p,{children:["Protobuf encoding serves as the standard encoding process for ",(0,t.jsx)(n.code,{children:"CosmosTx"}),". This occurs if the channel handshake initiates with an empty channel version metadata or if the ",(0,t.jsx)(n.code,{children:"encoding"})," field explicitly denotes ",(0,t.jsx)(n.code,{children:"proto3"}),". In Golang, the protobuf encoding procedure utilizes the ",(0,t.jsx)(n.code,{children:"proto.Marshal"})," function. Every protobuf autogenerated Golang type comes equipped with a ",(0,t.jsx)(n.code,{children:"Marshal"})," method that can be employed to encode the message."]}),"\n",(0,t.jsx)(n.h2,{id:"protobuf-json-encoding",children:"(Protobuf) JSON Encoding"}),"\n",(0,t.jsxs)(n.p,{children:["The proto3 JSON encoding presents an alternative encoding technique for ",(0,t.jsx)(n.code,{children:"CosmosTx"}),". It is selected if the channel handshake begins with the channel version metadata ",(0,t.jsx)(n.code,{children:"encoding"})," field labeled as ",(0,t.jsx)(n.code,{children:"proto3json"}),". In Golang, the Proto3 canonical encoding in JSON is implemented by the ",(0,t.jsx)(n.code,{children:'"github.com/cosmos/gogoproto/jsonpb"'})," package. Within Cosmos SDK, the ",(0,t.jsx)(n.code,{children:"ProtoCodec"})," structure implements the ",(0,t.jsx)(n.code,{children:"JSONCodec"})," interface, leveraging the ",(0,t.jsx)(n.code,{children:"jsonpb"})," package. This method generates a JSON format as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "messages": [\n    {\n      "@type": "/cosmos.bank.v1beta1.MsgSend",\n      "from_address": "cosmos1...",\n      "to_address": "cosmos1...",\n      "amount": [\n        {\n          "denom": "uatom",\n          "amount": "1000000"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here, the ",(0,t.jsx)(n.code,{children:'"messages"'})," array is populated with transactions. Each transaction is represented as a JSON object with the ",(0,t.jsx)(n.code,{children:"@type"})," field denoting the transaction type and the remaining fields representing the transaction's attributes."]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var t=o(67294);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);