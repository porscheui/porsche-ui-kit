(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfbbf9a8"],{"84d04":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.component?t(e.component,{tag:"component"}):e._e()},c=[],o=a("ade3"),r=a("9ab4"),u=a("2b0e"),s=a("2fe1"),i=a("1b40"),p=a("963d");let l=class extends u["a"]{constructor(...e){super(...e),Object(o["a"])(this,"component",null)}get category(){return Object(p["a"])(this.$route.params.category)}get pattern(){return Object(p["a"])(this.$route.params.pattern)}async onRouteChange(){await this.loadComponent()}async mounted(){await this.loadComponent()}async loadComponent(){this.component=null,await this.$store.dispatch("toggleLoadingAsync",!0);try{this.component=(await(()=>a("99ad")(`./${this.category}/example-${this.pattern}.vue`))()).default}catch(e){await this.redirect()}await this.$store.dispatch("toggleLoadingAsync",!1)}async redirect(){await this.$router.replace({name:"404"})}};Object(r["a"])([Object(i["b"])("$route")],l.prototype,"onRouteChange",null),l=Object(r["a"])([s["b"]],l);var h=l,d=h,m=a("2877"),b=Object(m["a"])(d,n,c,!1,null,null,null);t["default"]=b.exports},"99ad":function(e,t,a){var n={"./apps/example-carousel.vue":["56d7","chunk-26b1ee66"],"./apps/example-porsche-com.vue":["7ba0","chunk-217e279c"],"./forms/example-contact.vue":["8a97","chunk-6c46ac3a","chunk-2d0e88fd"],"./forms/example-create-account.vue":["609e","chunk-6c46ac3a","chunk-2d0ce87c"],"./forms/example-login.vue":["eabe","chunk-6c46ac3a","chunk-2d2302d5"],"./forms/example-various.vue":["33fb","chunk-6c46ac3a","chunk-2d0b9c12"],"./typography/example-type-scale.vue":["6a4e","chunk-363c4aaa"]};function c(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id="99ad",e.exports=c}}]);
//# sourceMappingURL=chunk-dfbbf9a8.2d2b86d6.js.map