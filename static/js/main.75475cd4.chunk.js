(this.webpackJsonpwortschatz=this.webpackJsonpwortschatz||[]).push([[0],{141:function(e,t,n){e.exports=n(298)},146:function(e,t,n){},147:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),c=n.n(r),i=(n(146),n(306)),l=(n(147),n(78)),s=n(308),m=n(304),d=n(305),u=n(33),h=n(307),p=n(75),E=n.n(p),f=function(e){var t={textAlign:"center"};return e.map((function(e){return o.a.createElement(s.a.Column,{style:{minWidth:"25%"},key:"word-"+e.id},o.a.createElement(m.a,{style:{maxWidth:"fit-content",minWidth:"100%"}},o.a.createElement(m.a.Header,{as:"h2",style:t},e.word),o.a.createElement(m.a.Description,{style:t},e.translation)))}))},w=function(e){var t=e.words,n=t.slice(0,t.length/2),a=t.slice(t.length/2),r=f(n),c=f(a);return o.a.createElement(s.a,{columns:5},o.a.createElement(s.a.Row,null,r),o.a.createElement(s.a.Row,null,c))};var v=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([{id:1,word:"eins",translation:"one"}]),i=Object(l.a)(c,2),s=i[0],m=i[1];return Object(a.useEffect)((function(){E.a.get("http://localhost:5000/topWords").then((function(e){m(e.data)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(d.a,{style:{maxWidth:"80%",margin:"auto"}},o.a.createElement(d.a.Title,{active:n,index:0,onClick:function(){return r(!n)}},o.a.createElement(u.a,{name:"dropdown"}),"Top 8 Words"),o.a.createElement(d.a.Content,{active:n},o.a.createElement("div",{style:{padding:"10px"}},o.a.createElement(h.a,{primary:!0,onClick:function(){var e;e=m,E.a.get("https://wortschatz-me.herokuapp.com/topWords").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},"Generate")),o.a.createElement(w,{words:s})))},g=function(){return o.a.createElement("div",{id:"main"},"\\",o.a.createElement("div",{style:{paddingBottom:"10mm"}},o.a.createElement(i.a,{fixed:"top",inverted:!0},o.a.createElement(i.a.Item,{header:!0},"Wortschatz"))),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=document.createElement("link");y.rel="stylesheet",y.href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css",document.head.appendChild(y),c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[141,1,2]]]);
//# sourceMappingURL=main.75475cd4.chunk.js.map