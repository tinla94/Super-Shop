(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{485:function(e,t,n){__NEXT_REGISTER_PAGE("/update",function(){return e.exports=n(502),{page:e.exports.default}})},502:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),o=n.n(i),c=n(12),u=n(19),l=n(16),p=(n(121),n(5)),f=n(7),s=n.n(f),d=n(18),m=n(15),b=(n(32),n(14));function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){S(e,t,n[t])})}return e}function v(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){var e=j(["\n  mutation UPDATE_ITEM_MUTATION($id: ID!, $title: String, $description: String, $price: Int) {\n    updateItem(id: $id, title: $title, description: $description, price: $price) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);return P=function(){return e},e}function _(){var e=j(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);return _=function(){return e},e}function j(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var I=s()(_()),T=s()(P()),C=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return r=this,a=(e=g(t)).call.apply(e,[this].concat(c)),n=!a||"object"!==y(a)&&"function"!=typeof a?w(r):a,S(w(n),"state",{}),S(w(n),"handleChange",function(e){var t=e.target,r=t.name,a=t.type,i=t.value,o="number"===a?parseFloat(i):i;n.setState(S({},r,o))}),S(w(n),"updateItem",function(){var e,t=(e=o.a.mark(function e(t,r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Updating Item!!"),e.next=4,r({variables:h({id:n.props.id},n.state)});case 4:e.sent,console.log("Updated!!");case 6:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){v(i,r,a,o,c,"next",e)}function c(e){v(i,r,a,o,c,"throw",e)}o(void 0)})});return function(e,n){return t.apply(this,arguments)}}()),n}var n,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null),a.a.createElement(l.a,{text:'"New Shoes. New Style = Great Day!"'}),a.a.createElement(p.Query,{query:I,variables:{id:this.props.id}},function(t){var n=t.data;return t.loading?a.a.createElement("p",null,"Loading..."):n.item?a.a.createElement(p.Mutation,{mutation:T,variables:e.state},function(t,r){var i=r.loading,o=r.error;return a.a.createElement(d.a,{onSubmit:function(n){return e.updateItem(n,t)}},a.a.createElement(b.a,{error:o}),a.a.createElement("h2",null,"Edit Item"),a.a.createElement("fieldset",{disabled:i,"aria-busy":i},a.a.createElement("label",{htmlFor:"title"},"Title",a.a.createElement("input",{type:"text",id:"title",name:"title",placeholder:"Title",required:!0,defaultValue:n.item.title,onChange:e.handleChange})),a.a.createElement("label",{htmlFor:"price"},"Price",a.a.createElement("input",{type:"number",id:"price",name:"price",placeholder:"Price",required:!0,defaultValue:n.item.price,onChange:e.handleChange})),a.a.createElement("label",{htmlFor:"description"},"Description",a.a.createElement("textarea",{id:"description",name:"description",placeholder:"Enter A Description",required:!0,defaultValue:n.item.description,onChange:e.handleChange})),a.a.createElement(m.b,{type:"submit"},i?"Saving...":"Save Changes")))}):a.a.createElement("p",null,"No Item Found for ID ",e.props.id)}),a.a.createElement(u.a,null))}}])&&E(n.prototype,i),f&&E(n,f),t}();t.default=function(e){var t=e.query;return a.a.createElement("div",null,a.a.createElement(C,{id:t.id}))}}},[[485,1,0]]]);