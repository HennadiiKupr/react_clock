(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={date:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName,n=e.clockName;t!==n&&console.log("Renamed from ".concat(n," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),console.clear()}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.date;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t.toLocaleTimeString()})]})}}]),n}(s.Component);function d(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={clockName:d(),hasClock:!0},e.timerId=0,e.handleDocumentClick=function(){e.setState({hasClock:!0})},e.handleDocumentContextMenu=function(){e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:d()})}),3300),document.addEventListener("contextmenu",this.handleDocumentContextMenu),document.addEventListener("click",this.handleDocumentClick),document.addEventListener("contextmenu",(function(e){e.preventDefault()}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleDocumentContextMenu),document.removeEventListener("click",this.handleDocumentClick)}},{key:"render",value:function(){var e=this.state.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(m,{clockName:this.state.clockName})]})}}]),n}(s.Component);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4096f692.chunk.js.map