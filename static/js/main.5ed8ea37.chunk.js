(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(7),i=s.n(n),r=s(2),o=s(3),a=s(5),c=s(4),l=s(1),h=s.n(l),b=(s(12),s(13),s(0)),u=function(t){Object(a.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={sortBy:"initial",listOfLength:["1","2","3","4","5","6","7","8","9","10"],goodLength:"1",isReversed:!1},t.sortByAbc=function(){t.setState({sortBy:"alphabetically"})},t.sortByLength=function(){t.setState({sortBy:"sortByLength"})},t.resetSort=function(){t.setState({sortBy:"initial",goodLength:"1",isReversed:!1})},t.handleChange=function(e){t.setState({goodLength:e.target.value})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.props.goodsFromServer,e=this.state,s=e.sortBy,n=e.listOfLength,i=e.goodLength,r=e.isReversed,o=t.filter((function(t){return t.length>=Number(i)}));return o.sort((function(t,e){switch(s){case"alphabetically":return t.localeCompare(e);case"sortByLength":return t.length-e.length;default:return 0}})),r&&o.reverse(),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("select",{className:"form-select Select","aria-label":"Default select example",name:"goodsLength",value:i,onChange:this.handleChange,children:n.map((function(t){return Object(b.jsx)("option",{value:t,children:t},t)}))}),Object(b.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-success",onClick:this.sortByAbc,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-info",onClick:this.sortByLength,children:"Sort by length"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.resetSort,children:"Reset"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-warning",onClick:this.reverse,children:"Reverse"})]}),Object(b.jsx)("ul",{children:o.map((function(t){return Object(b.jsx)("li",{children:t},t)}))})]})}}]),s}(h.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(t){Object(a.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={visibilityStyleGoodsList:"hide",visibilityStyleButton:"show"},t.showGoodList=function(){t.setState({visibilityStyleGoodsList:"show",visibilityStyleButton:"hide"})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.state,e=t.visibilityStyleGoodsList,s=t.visibilityStyleButton;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Goods"}),Object(b.jsx)("button",{className:"btn btn-info ".concat(s),type:"submit",onClick:this.showGoodList,children:"Start"}),Object(b.jsx)("div",{className:e,children:Object(b.jsx)(u,{goodsFromServer:d})})]})}}]),s}(h.a.Component);i.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5ed8ea37.chunk.js.map