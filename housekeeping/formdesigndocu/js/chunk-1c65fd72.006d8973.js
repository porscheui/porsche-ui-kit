(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c65fd72"],{"002a":function(t,e,r){"use strict";var n=r("d4e7"),a=r.n(n);a.a},"095a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.hasTabs?r("nav",{staticClass:"tabs"},t._l(t.tabs,(function(e,n){return r("p-text",{key:n,staticClass:"tab",attrs:{size:"inherit",tag:"div",weight:"thin"}},[r("router-link",{attrs:{to:t.getTabLink(e)}},[t._v(t._s(e))])],1)})),1):t._e(),r("Markdown",t._l(t.components,(function(t,e){return r(t,{key:e,tag:"component"})})),1)],1)},a=[],s=(r("a4d3"),r("e01a"),r("d28b"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("ddb0"),r("96cf"),r("1da1")),i=r("d4ec"),c=r("bee2"),o=r("99de"),u=r("7e84"),h=r("262e"),p=r("9ab4"),b=r("60a3"),f=r("a3ca"),g=r("9217"),l=r("7e4c"),y=r("e6e0"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.components=[],t}return Object(h["a"])(e,t),Object(c["a"])(e,[{key:"getTabLink",value:function(t){return"#".concat(Object(l["b"])(t))}},{key:"getFirstTabName",value:function(){return this.tabs[0]}},{key:"onRouteChange",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadComponents();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadComponents();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadComponents",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.components=[],t.next=3,this.$store.dispatch("toggleLoadingAsync",!0);case 3:t.prev=3,e=!0,r=!1,n=void 0,t.prev=7,a=this.stories[Symbol.iterator]();case 9:if(e=(s=a.next()).done){t.next=19;break}return i=s.value,t.t0=this.components,t.next=14,i();case 14:t.t1=t.sent.default,t.t0.push.call(t.t0,t.t1);case 16:e=!0,t.next=9;break;case 19:t.next=25;break;case 21:t.prev=21,t.t2=t["catch"](7),r=!0,n=t.t2;case 25:t.prev=25,t.prev=26,e||null==a.return||a.return();case 28:if(t.prev=28,!r){t.next=31;break}throw n;case 31:return t.finish(28);case 32:return t.finish(25);case 33:t.next=38;break;case 35:t.prev=35,t.t3=t["catch"](3),this.redirect();case 38:return t.next=40,this.$store.dispatch("toggleLoadingAsync",!1);case 40:case"end":return t.stop()}}),t,this,[[3,35],[7,21,25,33],[26,,28,32]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"redirect",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.hasTabs){t.next=5;break}return t.next=3,this.$router.replace(this.getTabLink(this.getFirstTabName()));case 3:t.next=7;break;case 5:return t.next=7,this.$router.replace({name:"404-".concat(this.area)});case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"hasTabs",get:function(){return this.tabs.length>0}},{key:"tabs",get:function(){var t=this.config&&this.config[this.category]&&this.config[this.category][this.story];return!t||Array.isArray(t)?[]:Object.keys(t)}},{key:"area",get:function(){return this.$route.meta.area}},{key:"category",get:function(){return Object(l["a"])(this.$route.params.category)}},{key:"story",get:function(){return Object(l["a"])(this.$route.params.story)}},{key:"tab",get:function(){return Object(l["a"])(this.$route.hash.substring(1))}},{key:"config",get:function(){switch(this.area){case"app":return g["a"].stories;case"web":return f["a"].stories;default:return f["a"].stories}}},{key:"stories",get:function(){var t=this.config&&this.config[this.category]&&this.config[this.category][this.story];return!t||Array.isArray(t)?t:t[this.tab]}}]),e}(b["c"]);Object(p["a"])([Object(b["d"])("$route")],d.prototype,"onRouteChange",null),d=Object(p["a"])([Object(b["a"])({components:{Markdown:y["a"]}})],d);var k=d,v=k,m=(r("002a"),r("2877")),w=Object(m["a"])(v,n,a,!1,null,"efa9860c",null);e["default"]=w.exports},d4e7:function(t,e,r){}}]);
//# sourceMappingURL=chunk-1c65fd72.006d8973.js.map