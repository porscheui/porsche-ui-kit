(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55819a24"],{"041e":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{attrs:{width:"250",height:"250",viewbox:"0 0 250 250"}},[t("rect",{attrs:{x:"25",y:"25",width:"200",height:"200",fill:this.isThemeDark?e.themeDarkBackgroundBase:e.themeLightBackgroundBase}}),t("path",{class:{"motion-path":!0,"motion-path--dark":this.isThemeDark,"motion-path--light":!this.isThemeDark},attrs:{id:e.path,d:this.easingPath}}),t("circle",{class:{circle:!0,"circle circle--dark":this.isThemeDark,"circle circle--light":!this.isThemeDark},attrs:{r:"10"}},[t("animateMotion",{attrs:{repeatCount:"indefinite",dur:e.motionDurationVeryLong,keyPoints:"0;1",keyTimes:"0;1",calcMode:"spline",keySplines:this.keySplines}},[t("mpath",{attrs:{href:"#"+e.path}})],1)],1)])},r=[],i=a("ade3"),n=(a("f8c9"),a("2b0e")),c=a("2fe1");const h="1.2s";var o=a("1ebc"),u=a("a7ce");const l="cubic-bezier(0.25,0.1,0.25,1)",g="cubic-bezier(0,0,0.2,1)",p="cubic-bezier(0.4,0,0.5,1)";var b=a("d257"),f=a("1b40"),d=function(e,t,a,s){var r,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(n=(i<3?r(n):i>3?r(t,a,n):r(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n};let k=class extends n["a"]{constructor(...e){super(...e),Object(i["a"])(this,"path",void 0),Object(i["a"])(this,"motionDurationVeryLong",h),Object(i["a"])(this,"themeDarkBackgroundBase",o["a"]),Object(i["a"])(this,"themeLightBackgroundBase",u["a"]),Object(i["a"])(this,"extractEasingValues",e=>e.replace(/.+\((.+)\)/g,"$1"))}get easingPath(){switch(this.path){case"easing-base":return"M25,225 C65,115 185,115 225,25";case"easing-in":return"M25,225 C25,225 65,25 225,25";case"easing-out":return"M25,225 C65,225 185,25 225,25";default:return"M25,225 C65,115 185,115 225,25"}}get keySplines(){switch(this.path){case"easing-base":return this.extractEasingValues(l);case"easing-in":return this.extractEasingValues(g);case"easing-out":return this.extractEasingValues(p);default:return this.extractEasingValues(l)}}get storefrontTheme(){return this.$store.getters.storefrontTheme}get isThemeDark(){return"auto"===this.storefrontTheme&&Object(b["m"])()||"dark"===this.storefrontTheme}};d([Object(f["a"])({default:"easing-base"})],k.prototype,"path",void 0),k=d([c["b"]],k);var m=k,y=m,w=(a("9b26"),a("2877")),j=Object(w["a"])(y,s,r,!1,null,"71f4ba3a",null);t["default"]=j.exports},1683:function(e,t,a){},"9b26":function(e,t,a){"use strict";a("1683")}}]);
//# sourceMappingURL=chunk-55819a24.c04b334f.js.map