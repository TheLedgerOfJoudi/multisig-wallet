(this["webpackJsonpmultisig-wallet"]=this["webpackJsonpmultisig-wallet"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},66:function(e,t){},75:function(e,t){},82:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(47),s=n.n(i),u=(n(62),n(55)),c=(n(63),n(2)),o=n.n(c),l=n(25),d=n(3),p=n(4),b=n(6),y=n(5),h=n(22),j=n(10),m=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={network:""},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.loadNetwork()}},{key:"loadNetwork",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.a.providers.Web3Provider(window.ethereum),e.next=3,t.getNetwork();case 3:n=(n=e.sent).name,this.setState({network:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)("div",{children:["You are on network : ",this.state.network]})}}]),n}(r.a.Component),w=m,O=n(52),f=n(7),v=[{inputs:[{internalType:"address",name:"_owner1",type:"address"},{internalType:"address",name:"_owner2",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"wallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"}],x=[{inputs:[{internalType:"address",name:"_owner1",type:"address"},{internalType:"address",name:"_owner2",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{stateMutability:"payable",type:"fallback"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"approveTransaction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactions",outputs:[{components:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bool",name:"signedByOwnerOne",type:"bool"},{internalType:"bool",name:"signedByOwnerTwo",type:"bool"}],internalType:"struct MultiSig.Transaction[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address payable",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"initiateTransaction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner1",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner2",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"transactions",outputs:[{internalType:"address payable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bool",name:"signedByOwnerOne",type:"bool"},{internalType:"bool",name:"signedByOwnerTwo",type:"bool"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],T=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={balance:""},e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(p.a)(n,[{key:"handleSubmit",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new h.a.providers.Web3Provider(window.ethereum),a=new h.a.Contract(this.props.walletAddress,x,n),e.next=5,a.getBalance();case 5:r=e.sent,r=h.a.utils.formatEther(r),this.setState({balance:r});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.balance?Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",children:"get wallet Balance"}),Object(j.jsxs)("h2",{children:["Your balance is ",this.state.balance]})]}):Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsx)("button",{type:"submit",children:"get wallet Balance"})})}}]),n}(r.a.Component),g=T,k=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={firstOwner:"",secondOwner:"",walletAddress:""},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(p.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(O.a)({},n,a))}},{key:"handleSubmit",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new h.a.providers.Web3Provider(window.ethereum),a=new h.a.Contract("0x7c3A6689Ec6905832c5AF5AF281d8eD7Db370764",v,n),e.next=5,a.wallet();case 5:r=e.sent,this.setState({walletAddress:r});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.walletAddress?Object(j.jsx)("div",{children:Object(j.jsx)(g,{walletAddress:this.state.walletAddress})}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Don't have a wallet yet? Create one! "}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",placeholder:"first owner",name:"firstOwner",value:this.state.firstOwner,onChange:this.handleChange}),Object(j.jsx)("input",{type:"text",placeholder:"second owner",name:"secondOwner",value:this.state.secondOwner,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",children:"Create Wallet"})]})]})}}]),n}(r.a.Component),S=k,C=n(12);var M=function(){return Object(j.jsx)("div",{children:"Hi "})};var A=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2);return t[0],t[1],Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(w,{}),Object(j.jsxs)(C.c,{children:[Object(j.jsx)(C.a,{path:"/createwallet",children:Object(j.jsx)(S,{})}),Object(j.jsx)(C.a,{path:"/dashboard",children:Object(j.jsx)(M,{})}),Object(j.jsx)(C.a,{path:"/",children:Object(j.jsx)(M,{})})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))},D=n(37);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(D.a,{children:Object(j.jsx)(A,{})})}),document.getElementById("root")),B()}},[[82,1,2]]]);
//# sourceMappingURL=main.867f65a4.chunk.js.map