(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Mz5C:function(e,t,n){e.exports={container:"index-module--container--3rofJ"}},NBEx:function(e,t,n){var r=n("ydnR");t.filterPosts=function(e){return e.filter((function(e){return e.node.fields.slug.includes(r.blogBasePath)}))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("JX7q"),o=n("dI71"),a=n("q1tI"),i=n.n(a),l=n("Wbzz"),c=n("TSYQ"),s=n.n(c),u=n("foW8"),f=n.n(u),p=n("H84U");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},k=f()({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function x(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){var o;return(o=function(r){w(i,r);var o=E(i);function i(){var r;return y(this,i),(r=o.apply(this,arguments)).renderComponent=function(o){var i=o.getPrefixCls,l=r.props.prefixCls,c=i(t,l);return a.createElement(e,h({prefixCls:c,tagName:n},r.props))},r}return v(i,[{key:"render",value:function(){return a.createElement(p.a,null,this.renderComponent)}}]),i}(a.Component)).displayName=r,o}}var P=function(e){var t=e.prefixCls,n=e.className,r=e.children,o=e.tagName,i=S(e,["prefixCls","className","children","tagName"]),l=s()(n,t);return a.createElement(o,h({className:l},i),r)},R=function(e){w(n,e);var t=E(n);function n(){var e;return y(this,n),(e=t.apply(this,arguments)).state={siders:[]},e}return v(n,[{key:"getSiderHook",value:function(){var e=this;return{addSider:function(t){e.setState((function(e){return{siders:[].concat(m(e.siders),[t])}}))},removeSider:function(t){e.setState((function(e){return{siders:e.siders.filter((function(e){return e!==t}))}}))}}}},{key:"render",value:function(){var e,t,n,r=this.props,o=r.prefixCls,i=r.className,l=r.children,c=r.hasSider,u=r.tagName,f=S(r,["prefixCls","className","children","hasSider","tagName"]),p=s()(i,o,(e={},t="".concat(o,"-has-sider"),n="boolean"==typeof c?c:this.state.siders.length>0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return a.createElement(k.Provider,{value:{siderHook:this.getSiderHook()}},a.createElement(u,h({className:p},f),l))}}]),n}(a.Component),N=x({suffixCls:"layout",tagName:"section",displayName:"Layout"})(R),M=x({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(P),T=x({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(P),_=x({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(P);N.Header=M,N.Footer=T,N.Content=_;var H=N,L=n("94VI"),I=n("BGR+"),W=n("CtXQ"),B=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t,n){return t&&D(e.prototype,t),n&&D(e,n),e}function X(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};if("undefined"!=typeof window){window.matchMedia||(window.matchMedia=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}})}var G,V={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},$=f()({}),ee=(G=0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return G+=1,"".concat(e).concat(G)}),te=function(e){X(n,e);var t=K(n);function n(e){var r,o,i;return F(this,n),(r=t.call(this,e)).responsiveHandler=function(e){r.setState({below:e.matches});var t=r.props.onBreakpoint;t&&t(e.matches),r.state.collapsed!==e.matches&&r.setCollapsed(e.matches,"responsive")},r.setCollapsed=function(e,t){"collapsed"in r.props||r.setState({collapsed:e});var n=r.props.onCollapse;n&&n(e,t)},r.toggle=function(){var e=!r.state.collapsed;r.setCollapsed(e,"clickTrigger")},r.belowShowChange=function(){r.setState((function(e){return{belowShow:!e.belowShow}}))},r.renderSider=function(e){var t,n=e.getPrefixCls,o=r.props,i=o.prefixCls,l=o.className,c=o.theme,u=o.collapsible,f=o.reverseArrow,p=o.trigger,d=o.style,m=o.width,b=o.collapsedWidth,h=o.zeroWidthTriggerStyle,y=Z(o,["prefixCls","className","theme","collapsible","reverseArrow","trigger","style","width","collapsedWidth","zeroWidthTriggerStyle"]),g=n("layout-sider",i),v=Object(I.a)(y,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook","zeroWidthTriggerStyle"]),w=r.state.collapsed?b:m,j=B(w)?"".concat(w,"px"):String(w),E=0===parseFloat(String(b||0))?a.createElement("span",{onClick:r.toggle,className:"".concat(g,"-zero-width-trigger ").concat(g,"-zero-width-trigger-").concat(f?"right":"left"),style:h},a.createElement(W.a,{type:"bars"})):null,O={expanded:f?a.createElement(W.a,{type:"right"}):a.createElement(W.a,{type:"left"}),collapsed:f?a.createElement(W.a,{type:"left"}):a.createElement(W.a,{type:"right"})}[r.state.collapsed?"collapsed":"expanded"],C=null!==p?E||a.createElement("div",{className:"".concat(g,"-trigger"),onClick:r.toggle,style:{width:j}},p||O):null,S=z(z({},d),{flex:"0 0 ".concat(j),maxWidth:j,minWidth:j,width:j}),k=s()(l,g,"".concat(g,"-").concat(c),(q(t={},"".concat(g,"-collapsed"),!!r.state.collapsed),q(t,"".concat(g,"-has-trigger"),u&&null!==p&&!E),q(t,"".concat(g,"-below"),!!r.state.below),q(t,"".concat(g,"-zero-width"),0===parseFloat(j)),t));return a.createElement("aside",z({className:k},v,{style:S}),a.createElement("div",{className:"".concat(g,"-children")},r.props.children),u||r.state.below&&E?C:null)},r.uniqueId=ee("ant-sider-"),"undefined"!=typeof window&&(o=window.matchMedia),o&&e.breakpoint&&e.breakpoint in V&&(r.mql=o("(max-width: ".concat(V[e.breakpoint],")"))),i="collapsed"in e?e.collapsed:e.defaultCollapsed,r.state={collapsed:i,below:!1},r}return Q(n,[{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql)),this.props.siderHook&&this.props.siderHook.addSider(this.uniqueId)}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.props.siderHook&&this.props.siderHook.removeSider(this.uniqueId)}},{key:"render",value:function(){var e=this.state.collapsed,t=this.props.collapsedWidth;return a.createElement($.Provider,{value:{siderCollapsed:e,collapsedWidth:t}},a.createElement(p.a,null,this.renderSider))}}],[{key:"getDerivedStateFromProps",value:function(e){return"collapsed"in e?{collapsed:e.collapsed}:null}}]),n}(a.Component);te.defaultProps={collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80,style:{},theme:"dark"},Object(L.polyfill)(te);var ne=function(e){X(n,e);var t=K(n);function n(){return F(this,n),t.apply(this,arguments)}return Q(n,[{key:"render",value:function(){var e=this;return a.createElement(k.Consumer,null,(function(t){return a.createElement(te,z({},t,e.props))}))}}]),n}(a.Component);H.Sider=ne;var re=H,oe=n("MxaW"),ae=n("BMrR"),ie=n("2/Rp"),le=n("kPKH"),ce=n("u1gX"),se=n.n(ce),ue=n("p3AD"),fe=n("+CVY"),pe=n("1iFT"),de=n("ydnR"),me=n.n(de),be=me.a.jumbotron.lines,he=function(e){var t=e.topMessage,n=e.bottomMessage,r=e.bottomMessagePrefix;return i.a.createElement("div",{style:{paddingTop:Object(ue.a)(2),width:"100%"},className:pe.a?se.a.jumbotronMobile:se.a.jumbotron},i.a.createElement(ae.a,null,i.a.createElement("h1",{style:Object.assign({},Object(ue.b)(2.1))},t)),i.a.createElement(ae.a,{style:{height:"270px"}},i.a.createElement("h1",{id:"element",style:Object.assign({},Object(ue.b)(2.1))},r,i.a.createElement("span",{style:{color:me.a.theme.jumbotronTypingColor}},n),i.a.createElement("span",{className:se.a.blinker}))),i.a.createElement(ae.a,{type:"flex",justify:"end"},i.a.createElement(ie.a,{href:"mailto:"+me.a.contactEmail,type:"primary"},me.a.jumbotron.buttonText)))},ye=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={message:be[0],deleted:!1},o.deleteChar=o.deleteChar.bind(Object(r.a)(o)),o.addChar=o.addChar.bind(Object(r.a)(o)),o}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){for(var e=this,t=Promise.resolve(),n=function(n){t=(t=(t=(t=t.then((function(){return Object(fe.b)(1e3)}))).then((function(){return e.deleteString(be[n])}))).then((function(){return Object(fe.b)(1e3)}))).then((function(){return e.typeString(be[n+1])}))},r=0;r<be.length-1;r++)n(r)},n.deleteString=function(e){var t=this;return new Promise((function(n){Object(fe.a)(t.deleteChar,e.length).then(n)}))},n.typeString=function(e){var t=this;return new Promise((function(n){for(var r=Promise.resolve(),o=function(n){r=r.then((function(){return t.addChar(e.substring(n,n+1))}))},a=0;a<e.length;a++)o(a);r=r.then(n)}))},n.deleteChar=function(){var e=this;return new Promise((function(t){Object(fe.b)(100).then((function(){e.setState({message:e.state.message.substring(0,e.state.message.length-1)}),t()}))}))},n.addChar=function(e){var t=this;return new Promise((function(n){Object(fe.b)(100).then((function(){t.setState({message:t.state.message+e}),n()}))}))},n.render=function(){return i.a.createElement(he,{topMessage:me.a.jumbotron.topMessage,bottomMessagePrefix:me.a.jumbotron.bottomMessagePrefix,bottomMessage:this.state.message})},t}(i.a.Component),ge=function(){return i.a.createElement(ae.a,{type:"flex",justify:"start"},i.a.createElement(le.a,{style:{width:"100%"}},i.a.createElement(ye,null)))},ve=function(e){var t=e.number;return i.a.createElement("h1",{style:{color:de.theme.numberColor,marginRight:Object(ue.a)(1)}},"0"+t+".")},we=function(e){var t=e.refCallback,n=Object(l.useStaticQuery)("361412102");return i.a.createElement("div",{ref:t,style:{marginTop:Object(ue.a)(7)},className:pe.a?se.a.jumbotronMobile:se.a.jumbotron},i.a.createElement(ae.a,null,i.a.createElement(ve,{number:2})),i.a.createElement(ae.a,null,i.a.createElement("section",{dangerouslySetInnerHTML:{__html:n.markdownRemark.html}})))},je=n("NBEx"),Ee=function(e){var t=e.refCallback,n=Object(l.useStaticQuery)("2312261200"),r=Object(je.filterPosts)(n.allMarkdownRemark.edges);return i.a.createElement("div",{ref:t,style:{marginTop:Object(ue.a)(7)},className:pe.a?se.a.jumbotronMobile:se.a.jumbotron},i.a.createElement(ae.a,null,i.a.createElement(ve,{number:1})),i.a.createElement(ae.a,null,i.a.createElement("h1",null,"Blogs"),r.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return i.a.createElement("article",{key:t.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",{style:{marginBottom:Object(ue.a)(1/4)}},i.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))))},Oe=function(e){var t=e.refCallback,n=Object(l.useStaticQuery)("1303596396");return i.a.createElement("div",{ref:t,style:{marginTop:Object(ue.a)(7)},className:pe.a?se.a.jumbotronMobile:se.a.jumbotron},i.a.createElement(ae.a,null,i.a.createElement(ve,{number:3})),i.a.createElement(ae.a,null,i.a.createElement("section",{dangerouslySetInnerHTML:{__html:n.markdownRemark.html}})))},Ce=n("TJpk"),Se=n.n(Ce);function ke(e){var t=e.description,n=e.lang,r=e.meta,o=e.title;return i.a.createElement(Se.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s",meta:[{name:"description",content:t},{property:"og:title",content:o},{property:"og:description",content:t},{property:"og:type",content:"website"}].concat(r)})}ke.defaultProps={lang:"en",meta:[],description:""};var xe=ke,Pe=n("Mz5C"),Re=n.n(Pe),Ne=re.Header,Me=re.Footer,Te=re.Content,_e=de.theme.shiftingColors,He=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={width:null,currentIndex:0,backgroundColor:_e[0]},o.aboutRef=null,o.experienceRef=null,o.blogsRef=null,o.rotateBackgroundColor=o.rotateBackgroundColor.bind(Object(r.a)(o)),o.oneRotation=o.oneRotation.bind(Object(r.a)(o)),o.startRotations=o.startRotations.bind(Object(r.a)(o)),o.initKeyPressLogic=o.initKeyPressLogic.bind(Object(r.a)(o)),o}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.addEventListener("resize",(function(){return e.setState({width:window.innerWidth})})),Object(fe.a)(this.startRotations,500).then((function(){return console.log("no more repeating")})),this.initKeyPressLogic()},n.componentWillUnmount=function(){var e=this;window.removeEventListener("resize",(function(){return e.setState({width:window.innerWidth})})),document.removeEventListener("keypress",this.func)},n.rotateBackgroundColor=function(){var e=this;return new Promise((function(t){var n=e.state.currentIndex+1>=_e.length?0:e.state.currentIndex+1;e.setState({currentIndex:n,backgroundColor:_e[n]}),Object(fe.b)(6e3).then(t)}))},n.oneRotation=function(){var e=this,t=Promise.resolve();return t=(t=t.then((function(){return Object(fe.b)(1e3)}))).then((function(){return e.rotateBackgroundColor()}))},n.startRotations=function(){for(var e=this,t=Promise.resolve(),n=0;n<_e.length;n++)t=t.then((function(){return e.oneRotation()}));return t},n.initKeyPressLogic=function(){var e=this;this.func=function(t){t.keyCode=="1".charCodeAt(0)?window.scrollTo(0,e.blogsRef.offsetTop+oe.b):t.keyCode=="2".charCodeAt(0)?window.scrollTo(0,e.aboutRef.offsetTop+oe.b):t.keyCode=="3".charCodeAt(0)&&window.scrollTo(0,e.experienceRef.offsetTop+oe.b)},document.addEventListener("keypress",this.func)},n.render=function(){var e=this,t=this.props.data;t.site.siteMetadata.title,t.allMarkdownRemark.edges;return i.a.createElement(re,{style:{background:this.state.backgroundColor},className:Re.a.container},i.a.createElement(xe,{title:de.author,description:de.description,meta:[{name:"google-site-verification",content:"SkuXj_g_uDvvxdLmSZ32ZSEFYFwZ0Yqv5t7pcPak8hg"}]}),i.a.createElement(Ne,{style:{position:"fixed",zIndex:1,width:"99vw",paddingLeft:Object(ue.a)(.5),paddingRight:Object(ue.a)(.5),background:"inherit"}},i.a.createElement(oe.c,{refs:[this.aboutRef,this.experienceRef,this.blogsRef]})),i.a.createElement(re,{style:{background:"inherit"}},i.a.createElement(Te,{style:{marginTop:Object(ue.a)(3),marginLeft:"auto",marginRight:"auto",maxWidth:Object(ue.a)(32)}},i.a.createElement(ge,null),i.a.createElement(Ee,{refCallback:function(t){return e.blogsRef=t}}),i.a.createElement(we,{refCallback:function(t){return e.aboutRef=t}}),i.a.createElement(Oe,{refCallback:function(t){return e.experienceRef=t}}),i.a.createElement(Me,{style:{background:"inherit"}},i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," and ❤️")))))},t}(i.a.Component);t.default=He},u1gX:function(e,t,n){e.exports={jumbotron:"jumbotron-module--jumbotron--3zHva",jumbotronMobile:"jumbotron-module--jumbotronMobile--3Qq__",blinker:"jumbotron-module--blinker--1SxqB"}}}]);
//# sourceMappingURL=component---src-pages-index-js-1507de7d091d42d437ff.js.map