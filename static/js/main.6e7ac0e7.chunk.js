(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(8),o=n.n(s),i=n(2),r=n(3),a=n(5),c=n(4),l=n(1),h=n.n(l),b=(n(13),n(7)),u=(n(14),n(0)),d=function(t){Object(a.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={goods:Object(b.a)(t.props.goodsFromServer),sortBy:"initial",listOfLength:["1","2","3","4","5","6","7","8","9","10"],goodLength:"1"},t.sortByAbc=function(){t.setState({sortBy:"alphabetically"})},t.sortByLength=function(){t.setState({sortBy:"sortByLength"})},t.resetSort=function(){t.setState({goods:Object(b.a)(t.props.goodsFromServer),sortBy:"initial",goodLength:"1"})},t.handleChange=function(e){t.setState({goodLength:e.target.value})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.sortBy,s=t.listOfLength,o=t.goodLength;return e.sort((function(t,e){switch(n){case"alphabetically":return t.localeCompare(e);case"sortByLength":return t.length-e.length;case"initial":default:return 0}})),e.filter((function(t){return t.length>=Number(o)})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("select",{className:"form-select Select","aria-label":"Default select example",name:"goodsLength",value:o,onChange:this.handleChange,children:s.map((function(t){return Object(u.jsx)("option",{value:t,children:t})}))}),Object(u.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-success",onClick:this.sortByAbc,children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-info",onClick:this.sortByLength,children:"Sort by length"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.resetSort,children:"Reset"})]}),Object(u.jsx)("ul",{children:e.filter((function(t){return t.length>=Number(o)})).map((function(t){return Object(u.jsx)("li",{children:t},t)}))})]})}}]),n}(h.a.Component),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(t){Object(a.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={visibilityStyleGoodsList:"hide",visibilityStyleButton:"show"},t.showGoodList=function(){t.setState({visibilityStyleGoodsList:"show",visibilityStyleButton:"hide"})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.visibilityStyleGoodsList,n=t.visibilityStyleButton;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Goods"}),Object(u.jsx)("button",{className:"btn btn-info ".concat(n),type:"submit",onClick:this.showGoodList,children:"Start"}),Object(u.jsx)("div",{className:e,children:Object(u.jsx)(d,{goodsFromServer:g})})]})}}]),n}(h.a.Component);o.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6e7ac0e7.chunk.js.map