(this.webpackJsonpmyApp=this.webpackJsonpmyApp||[]).push([[1],{106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(31),c=n.n(i),o=n(23),s=n(2),u=n(62),l=n(15),m=function(e){var t=e._id,n=e.text,r=e.onEdit;return a.a.createElement(s.j,{onClick:function(){return r(t)}},a.a.createElement(s.k,null,n))},d="localhost:3000",f=function(e){return function(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=console).log.apply(t,[e].concat(r))}},p=f("api");function E(e,t){return p("".concat(t," - started")),e.then((function(e){return p("".concat(t," - succeeded")),Promise.resolve(e.data)})).catch((function(e){return p("".concat(t," - failed")),Promise.reject(e)}))}var h={headers:{"Content-Type":"application/json"}},j=function(e){return{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}},v=n(9),b=n.n(v),y=n(14),g=n(20),O=n(38),_=n(7),k=n(28),A=n.n(k),x="http://".concat(d,"/api/item"),I=function(e){return E(A.a.get(x,j(e)),"getItems")},w=function(e,t){return E(A.a.post(x,t,j(e)),"createItem")},C=function(e,t){return E(A.a.put("".concat(x,"/").concat(t._id),t,j(e)),"updateItem")},T=f("ws"),S="http://".concat(d,"/api/auth/login"),D=function(e,t){return E(A.a.post(S,{username:e,password:t},h),"login")},F=f("AuthProvider"),M={isAuthenticated:!1,isAuthenticating:!1,authenticationError:null,pendingAuthentication:!1,token:""},L=a.a.createContext(M),U=function(e){var t=e.children,n=Object(r.useState)(M),i=Object(g.a)(n,2),c=i[0],o=i[1],s=c.isAuthenticated,u=c.isAuthenticating,l=c.authenticationError,m=c.pendingAuthentication,d=c.token,f=Object(r.useCallback)((function(e,t){F("login"),o(Object(_.a)(Object(_.a)({},c),{},{pendingAuthentication:!0,username:e,password:t}))}),[]);Object(r.useEffect)((function(){var e=!1;return function(){t.apply(this,arguments)}(),function(){e=!0};function t(){return(t=Object(y.a)(b.a.mark((function t(){var n,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m){t.next=3;break}return F("authenticate, !pendingAuthentication, return"),t.abrupt("return");case 3:return t.prev=3,F("authenticate..."),o(Object(_.a)(Object(_.a)({},c),{},{isAuthenticating:!0})),n=c.username,r=c.password,t.next=9,D(n,r);case 9:if(a=t.sent,i=a.access_token,!e){t.next=13;break}return t.abrupt("return");case 13:F("authenticate succeeded"),o(Object(_.a)(Object(_.a)({},c),{},{token:i,pendingAuthentication:!1,isAuthenticated:!0,isAuthenticating:!1})),t.next=23;break;case 17:if(t.prev=17,t.t0=t.catch(3),!e){t.next=21;break}return t.abrupt("return");case 21:F("authenticate failed"),o(Object(_.a)(Object(_.a)({},c),{},{authenticationError:t.t0,pendingAuthentication:!1,isAuthenticating:!1}));case 23:case"end":return t.stop()}}),t,null,[[3,17]])})))).apply(this,arguments)}}),[m]);var p={isAuthenticated:s,login:f,isAuthenticating:u,authenticationError:l,token:d};return F("render"),a.a.createElement(L.Provider,{value:p},t)},P=n(66),V=f("Login"),H=function(e){var t=e.component,n=Object(P.a)(e,["component"]),i=Object(r.useContext)(L).isAuthenticated;return V("render, isAuthenticated",i),a.a.createElement(o.b,Object.assign({},n,{render:function(e){return i?a.a.createElement(t,e):a.a.createElement(o.a,{to:{pathname:"/login"}})}}))},N=f("Login"),R=function(e){e.history;var t=Object(r.useContext)(L),n=t.isAuthenticated,i=t.isAuthenticating,c=t.login,u=t.authenticationError,l=Object(r.useState)({}),m=Object(g.a)(l,2),d=m[0],f=m[1],p=d.username,E=d.password;return N("render"),n?a.a.createElement(o.a,{to:{pathname:"/"}}):a.a.createElement(s.n,null,a.a.createElement(s.g,null,a.a.createElement(s.r,null,a.a.createElement(s.q,null,"Login"))),a.a.createElement(s.d,null,a.a.createElement(s.i,{placeholder:"Username",value:p,onIonChange:function(e){return f(Object(_.a)(Object(_.a)({},d),{},{username:e.detail.value||""}))}}),a.a.createElement(s.i,{placeholder:"Password",value:E,onIonChange:function(e){return f(Object(_.a)(Object(_.a)({},d),{},{password:e.detail.value||""}))}}),a.a.createElement(s.m,{isOpen:i}),u&&a.a.createElement("div",null,u.message||"Failed to authenticate"),a.a.createElement(s.b,{onClick:function(){N("handleLogin..."),null===c||void 0===c||c(p,E)}},"Login")))},B=f("ItemProvider"),J={fetching:!1,saving:!1},q=function(e,t){var n=t.type,r=t.payload;switch(n){case"FETCH_ITEMS_STARTED":return Object(_.a)(Object(_.a)({},e),{},{fetching:!0,fetchingError:null});case"FETCH_ITEMS_SUCCEEDED":return Object(_.a)(Object(_.a)({},e),{},{items:r.items,fetching:!1});case"FETCH_ITEMS_FAILED":return Object(_.a)(Object(_.a)({},e),{},{fetchingError:r.error,fetching:!1});case"SAVE_ITEM_STARTED":return Object(_.a)(Object(_.a)({},e),{},{savingError:null,saving:!0});case"SAVE_ITEM_SUCCEEDED":var a=Object(O.a)(e.items||[]),i=r.item,c=a.findIndex((function(e){return e._id===i._id}));return-1===c?a.splice(0,0,i):a[c]=i,Object(_.a)(Object(_.a)({},e),{},{items:a,saving:!1});case"SAVE_ITEM_FAILED":return Object(_.a)(Object(_.a)({},e),{},{savingError:r.error,saving:!1});default:return e}},z=a.a.createContext(J),W=function(e){var t=e.children,n=Object(r.useContext)(L).token,i=Object(r.useReducer)(q,J),c=Object(g.a)(i,2),o=c[0],s=c[1],u=o.items,l=o.fetching,m=o.fetchingError,f=o.saving,p=o.savingError;Object(r.useEffect)((function(){var e=!1;return function(){t.apply(this,arguments)}(),function(){e=!0};function t(){return(t=Object(y.a)(b.a.mark((function t(){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===n||void 0===n?void 0:n.trim()){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,B("fetchItems started"),s({type:"FETCH_ITEMS_STARTED"}),t.next=7,I(n);case 7:r=t.sent,B("fetchItems succeeded"),e||s({type:"FETCH_ITEMS_SUCCEEDED",payload:{items:r}}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),B("fetchItems failed"),s({type:"FETCH_ITEMS_FAILED",payload:{error:t.t0}});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}}),[n]),Object(r.useEffect)((function(){var e,t=!1;B("wsEffect - connecting"),(null===n||void 0===n?void 0:n.trim())&&(e=function(e,t){var n=new WebSocket("ws://".concat(d));return n.onopen=function(){T("web socket onopen"),n.send(JSON.stringify({type:"authorization",payload:{token:e}}))},n.onclose=function(){T("web socket onclose")},n.onerror=function(e){T("web socket onerror",e)},n.onmessage=function(e){T("web socket onmessage"),t(JSON.parse(e.data))},function(){n.close()}}(n,(function(e){if(!t){var n=e.type,r=e.payload;B("ws message, item ".concat(n)),"created"!==n&&"updated"!==n||s({type:"SAVE_ITEM_SUCCEEDED",payload:{item:r}})}})));return function(){var n;B("wsEffect - disconnecting"),t=!0,null===(n=e)||void 0===n||n()}}),[n]);var E={items:u,fetching:l,fetchingError:m,saving:f,savingError:p,saveItem:Object(r.useCallback)((function(e){return h.apply(this,arguments)}),[n])};return B("returns"),a.a.createElement(z.Provider,{value:E},t);function h(){return(h=Object(y.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B("saveItem started"),s({type:"SAVE_ITEM_STARTED"}),e.next=5,t._id?C(n,t):w(n,t);case 5:r=e.sent,B("saveItem succeeded"),s({type:"SAVE_ITEM_SUCCEEDED",payload:{item:r}}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),B("saveItem failed"),s({type:"SAVE_ITEM_FAILED",payload:{error:e.t0}});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},$=f("ItemList"),G=function(e){var t=e.history,n=Object(r.useContext)(z),i=n.items,c=n.fetching,o=n.fetchingError;return $("render"),a.a.createElement(s.n,null,a.a.createElement(s.g,null,a.a.createElement(s.r,null,a.a.createElement(s.q,null,"Item List"))),a.a.createElement(s.d,null,a.a.createElement(s.m,{isOpen:c,message:"Fetching items"}),i&&a.a.createElement(s.l,null,i.map((function(e){var n=e._id,r=e.text;return a.a.createElement(m,{key:n,_id:n,text:r,onEdit:function(e){return t.push("/item/".concat(e))}})}))),o&&a.a.createElement("div",null,o.message||"Failed to fetch items"),a.a.createElement(s.e,{vertical:"bottom",horizontal:"end",slot:"fixed"},a.a.createElement(s.f,{onClick:function(){return t.push("/item")}},a.a.createElement(s.h,{icon:l.a})))))},K=f("ItemEdit"),Q=function(e){var t=e.history,n=e.match,i=Object(r.useContext)(z),c=i.items,o=i.saving,u=i.savingError,l=i.saveItem,m=Object(r.useState)(""),d=Object(g.a)(m,2),f=d[0],p=d[1],E=Object(r.useState)(),h=Object(g.a)(E,2),j=h[0],v=h[1];Object(r.useEffect)((function(){K("useEffect");var e=n.params.id||"",t=null===c||void 0===c?void 0:c.find((function(t){return t._id===e}));v(t),t&&p(t.text)}),[n.params.id,c]);return K("render"),a.a.createElement(s.n,null,a.a.createElement(s.g,null,a.a.createElement(s.r,null,a.a.createElement(s.q,null,"Edit"),a.a.createElement(s.c,{slot:"end"},a.a.createElement(s.b,{onClick:function(){var e=j?Object(_.a)(Object(_.a)({},j),{},{text:f}):{text:f};l&&l(e).then((function(){return t.goBack()}))}},"Save")))),a.a.createElement(s.d,null,a.a.createElement(s.i,{value:f,onIonChange:function(e){return p(e.detail.value||"")}}),a.a.createElement(s.m,{isOpen:o}),u&&a.a.createElement("div",null,u.message||"Failed to save item")))},X=(n(96),n(97),n(98),n(99),n(100),n(101),n(102),n(103),n(104),n(105),n(106),function(){return a.a.createElement(s.a,null,a.a.createElement(u.a,null,a.a.createElement(s.p,null,a.a.createElement(U,null,a.a.createElement(o.b,{path:"/login",component:R,exact:!0}),a.a.createElement(W,null,a.a.createElement(H,{path:"/items",component:G,exact:!0}),a.a.createElement(H,{path:"/item",component:Q,exact:!0}),a.a.createElement(H,{path:"/item/:id",component:Q,exact:!0})),a.a.createElement(o.b,{exact:!0,path:"/",render:function(){return a.a.createElement(o.a,{to:"/items"})}})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,n){e.exports=n(107)},73:function(e,t,n){var r={"./ion-action-sheet.entry.js":[109,5],"./ion-alert.entry.js":[110,6],"./ion-app_8.entry.js":[111,7],"./ion-avatar_3.entry.js":[112,18],"./ion-back-button.entry.js":[113,19],"./ion-backdrop.entry.js":[114,43],"./ion-button_2.entry.js":[115,20],"./ion-card_5.entry.js":[116,21],"./ion-checkbox.entry.js":[117,22],"./ion-chip.entry.js":[118,23],"./ion-col_3.entry.js":[119,44],"./ion-datetime_3.entry.js":[120,10],"./ion-fab_3.entry.js":[121,24],"./ion-img.entry.js":[122,45],"./ion-infinite-scroll_2.entry.js":[123,46],"./ion-input.entry.js":[124,25],"./ion-item-option_3.entry.js":[125,26],"./ion-item_8.entry.js":[126,27],"./ion-loading.entry.js":[127,28],"./ion-menu_3.entry.js":[128,29],"./ion-modal.entry.js":[129,8],"./ion-nav_2.entry.js":[130,15],"./ion-popover.entry.js":[131,9],"./ion-progress-bar.entry.js":[132,30],"./ion-radio_2.entry.js":[133,31],"./ion-range.entry.js":[134,32],"./ion-refresher_2.entry.js":[135,11],"./ion-reorder_2.entry.js":[136,17],"./ion-ripple-effect.entry.js":[137,47],"./ion-route_4.entry.js":[138,33],"./ion-searchbar.entry.js":[139,34],"./ion-segment_2.entry.js":[140,35],"./ion-select_3.entry.js":[141,36],"./ion-slide_2.entry.js":[142,48],"./ion-spinner.entry.js":[143,13],"./ion-split-pane.entry.js":[144,49],"./ion-tab-bar_2.entry.js":[145,37],"./ion-tab_2.entry.js":[146,16],"./ion-text.entry.js":[147,38],"./ion-textarea.entry.js":[148,39],"./ion-toast.entry.js":[149,40],"./ion-toggle.entry.js":[150,12],"./ion-virtual-scroll.entry.js":[151,50]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=73,e.exports=a},75:function(e,t,n){var r={"./ion-icon.entry.js":[155,57]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=75,e.exports=a}},[[67,3,4]]]);
//# sourceMappingURL=main.eb52f939.chunk.js.map