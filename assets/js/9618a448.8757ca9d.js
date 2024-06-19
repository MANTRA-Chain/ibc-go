"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7694],{35166:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(85893),s=n(11151);const o={},r="ADR 026: IBC Client Recovery Mechanisms",l={id:"adr-026-ibc-client-recovery-mechanisms",title:"ADR 026: IBC Client Recovery Mechanisms",description:"Changelog",source:"@site/architecture/adr-026-ibc-client-recovery-mechanisms.md",sourceDirName:".",slug:"/adr-026-ibc-client-recovery-mechanisms",permalink:"/architecture/adr-026-ibc-client-recovery-mechanisms",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 025: IBC Passive Channels",permalink:"/architecture/adr-025-ibc-passive-channels"},next:{title:"ADR 27: Add support for Wasm based light client",permalink:"/architecture/adr-027-ibc-wasm"}},a={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Summary",id:"summary",level:3},{value:"Exceptional cases",id:"exceptional-cases",level:3},{value:"Security model",id:"security-model",level:3},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"adr-026-ibc-client-recovery-mechanisms",children:"ADR 026: IBC Client Recovery Mechanisms"}),"\n",(0,t.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"2020/06/23: Initial version"}),"\n",(0,t.jsx)(i.li,{children:"2020/08/06: Revisions per review & to reference version"}),"\n",(0,t.jsx)(i.li,{children:"2021/01/15: Revision to support substitute clients for unfreezing"}),"\n",(0,t.jsx)(i.li,{children:"2021/05/20: Revision to simplify consensus state copying, remove initial height"}),"\n",(0,t.jsx)(i.li,{children:"2022/04/08: Revision to deprecate AllowUpdateAfterExpiry and AllowUpdateAfterMisbehaviour"}),"\n",(0,t.jsx)(i.li,{children:"2022/07/15: Revision to allow updating of TrustingPeriod"}),"\n",(0,t.jsx)(i.li,{children:"2023/09/05: Revision to migrate from gov v1beta1 to gov v1"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"status",children:"Status"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"Accepted"})}),"\n",(0,t.jsx)(i.h2,{id:"context",children:"Context"}),"\n",(0,t.jsx)(i.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(i.p,{children:"At launch, IBC will be a novel protocol, without an experienced user-base. At the protocol layer, it is not possible to distinguish between client expiry or misbehaviour due to genuine faults (Byzantine behavior) and client expiry or misbehaviour due to user mistakes (failing to update a client, or accidentally double-signing). In the base IBC protocol and ICS 20 fungible token transfer implementation, if a client can no longer be updated, funds in that channel will be permanently locked and can no longer be transferred. To the degree that it is safe to do so, it would be preferable to provide users with a recovery mechanism which can be utilised in these exceptional cases."}),"\n",(0,t.jsx)(i.h3,{id:"exceptional-cases",children:"Exceptional cases"}),"\n",(0,t.jsx)(i.p,{children:"The state of concern is where a client associated with connection(s) and channel(s) can no longer be updated. This can happen for several reasons:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"The chain which the client is following has halted and is no longer producing blocks/headers, so no updates can be made to the client"}),"\n",(0,t.jsxs)(i.li,{children:["The chain which the client is following has continued to operate, but no relayer has submitted a new header within the unbonding period, and the client has expired","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"This could be due to real misbehaviour (intentional Byzantine behaviour) or merely a mistake by validators, but the client cannot distinguish these two cases"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"The chain which the client is following has experienced a misbehaviour event, and the client has been frozen & thus can no longer be updated"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"security-model",children:"Security model"}),"\n",(0,t.jsx)(i.p,{children:"Two-thirds of the validator set (the quorum for governance, module participation) can already sign arbitrary data, so allowing governance to manually force-update a client with a new header after a delay period does not substantially alter the security model."}),"\n",(0,t.jsx)(i.h2,{id:"decision",children:"Decision"}),"\n",(0,t.jsx)(i.p,{children:"We elect not to deal with chains which have actually halted, which is necessarily Byzantine behaviour and in which case token recovery is not likely possible anyways (in-flight packets cannot be timed-out, but the relative impact of that is minor)."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Require Tendermint light clients (ICS 07) to be created with the following additional flags"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"allow_update_after_expiry"})," (boolean, default true). Note that this flag has been deprecated, it remains to signal intent but checks against this value will not be enforced."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Require Tendermint light clients (ICS 07) to expose the following additional internal query functions"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Expired() boolean"}),", which returns whether or not the client has passed the trusting period since the last update (in which case no headers can be validated)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Require Tendermint light clients (ICS 07) & solo machine clients (ICS 06) to be created with the following additional flags"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"allow_update_after_misbehaviour"})," (boolean, default true). Note that this flag has been deprecated, it remains to signal intent but checks against this value will not be enforced."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Require Tendermint light clients (ICS 07) to expose the following additional state mutation functions"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Unfreeze()"}),", which unfreezes a light client after misbehaviour and clears any frozen height previously set"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Add a new governance proposal with ",(0,t.jsx)(i.code,{children:"MsgRecoverClient"}),"."]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Create a new Msg with two client identifiers (",(0,t.jsx)(i.code,{children:"string"}),") and a signer."]}),"\n",(0,t.jsx)(i.li,{children:"The first client identifier is the proposed client to be updated. This client must be either frozen or expired."}),"\n",(0,t.jsx)(i.li,{children:"The second client is a substitute client. It carries all the state for the client which may be updated. It must have identical client and chain parameters to the client which may be updated (except for latest height, frozen height, and chain-id). It should be continually updated during the voting period."}),"\n",(0,t.jsx)(i.li,{children:"If this governance proposal passes, the client on trial will be updated to the latest state of the substitute."}),"\n",(0,t.jsx)(i.li,{children:"The signer must be the authority set for the ibc module."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Previously, ",(0,t.jsx)(i.code,{children:"AllowUpdateAfterExpiry"})," and ",(0,t.jsx)(i.code,{children:"AllowUpdateAfterMisbehaviour"})," were used to signal the recovery options for an expired or frozen client, and governance proposals were not allowed to overwrite the client if these parameters were set to false. However, this has now been deprecated because a code migration can overwrite the client and consensus states regardless of the value of these parameters. If governance would vote to overwrite a client or consensus state, it is likely that governance would also be willing to perform a code migration to do the same."]}),"\n",(0,t.jsxs)(i.p,{children:["In addition, ",(0,t.jsx)(i.code,{children:"TrustingPeriod"})," was initially not allowed to be updated by a client upgrade proposal. However, due to the number of situations experienced in production where the ",(0,t.jsx)(i.code,{children:"TrustingPeriod"})," of a client should be allowed to be updated because of ie: initial misconfiguration for a canonical channel, governance should be allowed to update this client parameter."]}),"\n",(0,t.jsxs)(i.p,{children:["In versions older than ibc-go v8, ",(0,t.jsx)(i.code,{children:"MsgRecoverClient"})," was a governance proposal type ",(0,t.jsx)(i.code,{children:"ClientUpdateProposal"}),". It has been removed and replaced by ",(0,t.jsx)(i.code,{children:"MsgRecoverClient"})," in the migration from governance v1beta1 to governance v1."]}),"\n",(0,t.jsxs)(i.p,{children:["Note that this should NOT be lightly updated, as there may be a gap in time between when misbehaviour has occurred and when the evidence of misbehaviour is submitted. For example, if the ",(0,t.jsx)(i.code,{children:"UnbondingPeriod"})," is 2 weeks and the ",(0,t.jsx)(i.code,{children:"TrustingPeriod"})," has also been set to two weeks, a validator could wait until right before ",(0,t.jsx)(i.code,{children:"UnbondingPeriod"})," finishes, submit false information, then unbond and exit without being slashed for misbehaviour. Therefore, we recommend that the trusting period for the 07-tendermint client be set to 2/3 of the ",(0,t.jsx)(i.code,{children:"UnbondingPeriod"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Note that clients frozen due to misbehaviour must wait for the evidence to expire to avoid becoming refrozen."}),"\n",(0,t.jsxs)(i.p,{children:["This ADR does not address planned upgrades, which are handled separately as per the ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-007-tendermint-client#upgrades",children:"specification"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"consequences",children:"Consequences"}),"\n",(0,t.jsx)(i.h3,{id:"positive",children:"Positive"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Establishes a mechanism for client recovery in the case of expiry"}),"\n",(0,t.jsx)(i.li,{children:"Establishes a mechanism for client recovery in the case of misbehaviour"}),"\n",(0,t.jsx)(i.li,{children:"Constructing an ClientUpdate Proposal is as difficult as creating a new client"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"negative",children:"Negative"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Additional complexity in client creation which must be understood by the user"}),"\n",(0,t.jsx)(i.li,{children:"Coping state of the substitute adds complexity"}),"\n",(0,t.jsx)(i.li,{children:"Governance participants must vote on a substitute client"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"neutral",children:"Neutral"}),"\n",(0,t.jsx)(i.p,{children:"No neutral consequences."}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ics/issues/421",children:"Prior discussion"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ics/issues/439",children:"Epoch number discussion"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ics/issues/445",children:"Upgrade plan discussion"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/issues/3672",children:"Migration from gov v1beta1 to gov v1"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var t=n(67294);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);