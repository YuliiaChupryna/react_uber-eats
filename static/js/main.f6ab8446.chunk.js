(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(4),u=a.n(s),c=a(5),i=a(14),o=a(3),l=a(12),d=a(9),m=a.n(d),f=function(e){return fetch(e).then(function(e){return e.json()})},p="SAVE_RESTAURANTS",v=function(e){return{type:p,payload:e}},E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,g=[l.a],_={restaurantsListData:null},h=Object(o.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var a=t.payload;return Object(i.a)({},e,{restaurantsListData:a});default:return e}},E(o.a.apply(void 0,g))),w=(a(26),function(e){var t=e.imageUrl,a=e.title,r=e.categories,s=e.etaRange;return n.a.createElement("div",{className:"restaurant-card"},n.a.createElement("img",{src:t,alt:a,className:"restaurant-card__img"}),n.a.createElement("h2",{className:"restaurant-card__title"},a),n.a.createElement("div",{className:"restaurant-card__categories"},r.join(" \u2022 ")),n.a.createElement("div",{className:"restaurant-card__eta"},s))});w.defaultProps={categories:[],etaRange:""};a(27);var N=function(e){var t=e.restaurantsData,a=e.loadRestaurants;return Object(r.useEffect)(function(){a()}),n.a.createElement("div",{className:"restaurants-list"},t.map(function(e){var t=e.uuid,a=e.title,r=e.heroImageUrl,s=e.categories,u=e.etaRange;return n.a.createElement(w,{key:t,uuid:t,imageUrl:r,title:a,categories:s,etaRange:u?u.text:"20 - 30 min"})}))};N.defaultProps={restaurantsData:[]};var O=a(13),b=Object(O.a)(function(e){return e},function(e){var t=e.restaurantsListData;if(!t)return[];var a=t.feedItems,r=t.storesMap;return a.map(function(e){var t=e.uuid;return r[t]})});var R={loadRestaurants:function(){return function(e){var t,a;return m.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.awrap(f("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants"));case 2:t=r.sent,a=t.data,e(v(a));case 5:case"end":return r.stop()}})}}},y=Object(c.b)(function(e){return{restaurantsData:b(e)}},R)(N),D=(a(28),function(){return n.a.createElement(c.a,{store:h},n.a.createElement("div",{className:"page"},n.a.createElement(y,null)))});u.a.render(n.a.createElement(D,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f6ab8446.chunk.js.map