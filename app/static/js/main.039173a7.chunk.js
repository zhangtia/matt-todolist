(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),l=n.n(o),i=(n(23),n(14)),u=n(15),c=n(2),s=n(16),d=n(17),h=n(3),m=n.n(h),p=(n(41),function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={url:"",todos:[]},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e.handleChange=e.handleChange.bind(Object(c.a)(e)),e.deleteEntry=e.deleteEntry.bind(Object(c.a)(e)),m.a.get("/myapi/").then((function(t){e.setState({todos:t.data.listt})})),e}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;""==this.state.url?alert("Cannot Be empty"):m.a.post("/myapi/new",this.state.url).then((function(e){t.setState({todos:e.data.listt})})),e.preventDefault()}},{key:"deleteEntry",value:function(e,t){var n=this;m.a.post("/myapi/del",e).then((function(e){n.setState({todos:e.data.listt})})),t.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state,n=(t.url,t.todos);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Create New TODO:",r.a.createElement("input",{type:"text",name:"url",value:this.state.url,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"New TODO"})),r.a.createElement("div",null,n.map((function(t){return r.a.createElement("p",{key:t[0]},t[1]," ",r.a.createElement("button",{onClick:function(n){return e.deleteEntry(t[0],n)}},"Completed!"))})))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.039173a7.chunk.js.map