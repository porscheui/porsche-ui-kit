(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4f6dfac"],{"2cc1":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("ef14");var o=i("53ca"),n=i("f51a"),a=Object(n["d"])((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var c=Object(o["a"])(a);if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===c)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i})()}))},5577:function(e,t,i){"use strict";i.r(t),i.d(t,"p_icon",(function(){return T})),i.d(t,"p_text",(function(){return q}));i("d6de"),i("8d0f"),i("68b8"),i("ef14"),i("cfce"),i("28eb"),i("33ef"),i("868d"),i("9bd2"),i("ef1f"),i("88a1"),i("2aa5"),i("0d9f"),i("f3b8"),i("32f5"),i("62c8"),i("defa"),i("918c");var o=i("f51a"),n=i("2cc1"),a=function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function c(e){try{s(o.next(e))}catch(t){a(t)}}function r(e){try{s(o["throw"](e))}catch(t){a(t)}}function s(e){e.done?i(e.value):n(e.value).then(c,r)}s((o=o.apply(e,t||[])).next())}))},c=function(e,t){var i,o,n,a,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(e){return function(t){return s([e,t])}}function s(a){if(i)throw new TypeError("Generator is already executing.");while(c)try{if(i=1,o&&(n=2&a[0]?o["return"]:a[0]?o["throw"]||((n=o["return"])&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(n=c.trys,!(n=n.length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){c.label=a[1];break}if(6===a[0]&&c.label<n[1]){c.label=n[1],n=a;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(a);break}n[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(r){a=[6,r],o=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},r=function(e){return(null===e||void 0===e?void 0:e.length)>0&&/(\/)/.test(e)},s=function(e){return"string"===typeof e},l=function(e){if(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes.length-1;i>=0;i--)"svg"!==t.childNodes[i].nodeName.toLowerCase()&&t.removeChild(t.childNodes[i]);var o=t.firstElementChild;if(o&&"svg"===o.nodeName.toLowerCase()&&f(o))return t.innerHTML}return""},f=function e(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var i=0;i<t.attributes.length;i++){var o=t.attributes[i].value;if(s(o)&&o.toLowerCase().startsWith("on"))return!1}for(i=0;i<t.childNodes.length;i++)if(!e(t.childNodes[i]))return!1}return!0},d="https://cdn.ui.porsche.com/porsche-design-system/icons",b={360:"360.min.36e182d8ac8e0c10384b679393f63b69.svg",arrowDoubleDown:"arrow-double-down.min.596800021e18153493559081e663ee88.svg",arrowDoubleLeft:"arrow-double-left.min.4e15fa5ed5ede67284450f7bfb1ec451.svg",arrowDoubleRight:"arrow-double-right.min.1f19809f37d01d19cfbb9578c41b6395.svg",arrowDoubleUp:"arrow-double-up.min.1dfdee0293f35663e189028e18a09911.svg",arrowDown:"arrow-down.min.c8aeeeac5077b25177e53b2ace17c1f7.svg",arrowFirst:"arrow-first.min.a507d4cd79a8f0edd5f0b9ae3b2f7bc6.svg",arrowHeadDown:"arrow-head-down.min.fdb5ae2bcbe9e89a4ca462ff709c0ea8.svg",arrowHeadLeft:"arrow-head-left.min.ea16150c4d0fb48adbc092527171962f.svg",arrowHeadRight:"arrow-head-right.min.490cb49eb241569ee5d537730ee9658f.svg",arrowHeadUp:"arrow-head-up.min.3c502817abbea4e2593ff3773ecc470b.svg",arrowLast:"arrow-last.min.e90409d415c7dd4352f888e7dc59ef34.svg",arrowLeft:"arrow-left.min.40f3788a970e42dcd828f3140e5ef7db.svg",arrowRight:"arrow-right.min.0e9d5d854b941542ccede8934e22d22a.svg",arrowUp:"arrow-up.min.b58d1eba1b2ec77686fc3e383b99a983.svg",chat:"chat.min.9a3b604ed40dbb2bcc78fc50d305f424.svg",email:"email.min.4b513e97cb42aea4db45fb30dff3d7b3.svg",exclamation:"exclamation.min.f22d4aade626a58fccc731cf7439d05d.svg",information:"information.min.de80f382aaa5aa3c6dc5fa0d85135b04.svg",phone:"phone.min.d2d999abf71a01da4e7e7b7240e7a323.svg",question:"question.min.cbbd87dfb87449c5a963d6a6e320ff18.svg",warning:"warning.min.9afca66172d660341dfbd4ebde686e41.svg",add:"add.min.d23d39a3685d43ec6dbd3a0335558efd.svg",adjust:"adjust.min.e8172b10131d90f24d3e216a78f00e27.svg",chart:"chart.min.fe1c4df96d842e62d5ac73848d70e067.svg",check:"check.min.7d7dc5323782dd8cd3cbb5716a81595b.svg",close:"close.min.6b6c3f57d0a694ab0d23e2ba52b854ae.svg",compare:"compare.min.861b69e5349e6a4845d860b416d85f17.svg",configurate:"configurate.min.c87179686f825f52b8c4b390e73b7452.svg",delete:"delete.min.1538b6843b13d0bd31f28b59dcbbde49.svg",disable:"disable.min.012e84ef3fb22320fe0b1aca612fa86b.svg",download:"download.min.46357a2fa5acc920a28e7920d607b4ec.svg",edit:"edit.min.8d5c875029b56483d1d985763822b2f6.svg",external:"external.min.a39d626056f818ed0eba855ceae71afe.svg",filter:"filter.min.88e87eed72da8d15773017e1ec3e645e.svg",grid:"grid.min.75cc26f9f44da33e1bad1417430f717c.svg",increase:"increase.min.3421600f54125e983d5570bad938cd7d.svg",list:"list.min.ab36881a07fc9486bb6ecfe16f7a4f72.svg",logout:"logout.min.c9e4f8b9af27da6849c9c1147895a6c6.svg",menuDotsHorizontal:"menu-dots-horizontal.min.ed37b11a6f013819666e39f54646530d.svg",menuLines:"menu-lines.min.1336b797ec9d3db4b88f197cf276d1e4.svg",minus:"minus.min.f6e41865cfb6cd9dd9af041ef914c0ce.svg",plus:"plus.min.3b406279e5d6d27dd2f4a0115e681f8f.svg",refresh:"refresh.min.799d80abfe0daf2533e408442c6bb4df.svg",reset:"reset.min.52ba839599314f03c12148e568349ead.svg",save:"save.min.d963d7071f327a42c9d9e69c7b2824c3.svg",search:"search.min.ee057857b65350597af5e07f15d2f484.svg",sort:"sort.min.385a606b10fac5fd1a7e515a1aa1f3bb.svg",stack:"stack.min.1d650e779dd577903a0388c02c2af5d5.svg",subtract:"subtract.min.c7fad8bc562e7ee9f892beb4eeecc8da.svg",switch:"switch.min.8e99a2a0e92b40c07a59732ad175d87c.svg",upload:"upload.min.bc7c05ef34ec35c27a2779ee34e9ca46.svg",viewOff:"view-off.min.2f9fe59f2a5a721ce311797600a7c0c0.svg",view:"view.min.8f02073d04cb813e2f7a1aba712bbffe.svg",zoomIn:"zoom-in.min.8d6cb3185186300b31c8a5c657dce597.svg",zoomOut:"zoom-out.min.7a5a17a95965e7a5e6d97efe9fad7914.svg",batteryEmpty:"battery-empty.min.6fc99423bfaaf476f6b61504bc05f020.svg",chargingStation:"charging-station.min.a578ab2027c2185237b2b5612400f731.svg",flash:"flash.min.29fe78661e78a57136ac43010cb6b380.svg",plug:"plug.min.e173ff03b456923a7ae3a92ce0520bdb.svg",augmentedReality:"augmented-reality.min.e29e295fe394352de150c9e80a2fa1d4.svg",broadcast:"broadcast.min.1d1c19603354ace294e233dd0c297fae.svg",camera:"camera.min.e82addb91138d97fa73896b05a7996d0.svg",closedCaption:"closed-caption.min.c7392aba9cb6d8aca3b0513f1e123193.svg",document:"document.min.e9d0000022e97c189f9c78fe2ce20016.svg",image:"image.min.4126facf3cb3d99e45f1a37f30e99f34.svg",mobile:"mobile.min.f5548b22b12599952ff0de25fb01671e.svg",pause:"pause.min.e5986452c700aabb3f6f5585c9af0c8c.svg",play:"play.min.52a93696e40445bb04fbfe1205196d1e.svg",printer:"printer.min.50bbdfc8f1ddc81888568624f3754a74.svg",replay:"replay.min.ec95e695888bc41fa69edb7f688464cd.svg",screen:"screen.min.364959f2f1bd377080ca7b7613ea38e8.svg",tablet:"tablet.min.fd14ef85a1720341a11f2148d5cc9207.svg",video:"video.min.b09b4e0279c1d8f614c7fcfa14667609.svg",volumeOff:"volume-off.min.951414124a2ce4987a4cd36e63f5a22e.svg",volumeUp:"volume-up.min.6c017134b33109911e6f6327d4cc1e90.svg",wifi:"wifi.min.e8cfa383e5a6eedffb3eecd44ee5f89b.svg",city:"city.min.b9915939643538d7db0ea353595daec0.svg",countryRoad:"country-road.min.dabfedbea115a45ee1422c04f3a9d51e.svg",globe:"globe.min.ffd891bc3a5a1be3e5a7951c09827621.svg",highway:"highway.min.88ef248f470b6383e5a167b614d2d79a.svg",home:"home.min.74de9da062f400c7665302ee8e2a8219.svg",locate:"locate.min.2f65417a5cc0916a7189d5fa25b64bbb.svg",pin:"pin.min.c24b7edd7366375e3c28c844b1c42a81.svg",route:"route.min.016fcb0fe74da406f708db29a3bd7b91.svg",gift:"gift.min.62f7af2ac6734a0d574d967b6e78aaeb.svg",leaf:"leaf.min.c120ba52cc0f496821e7ef85e2c1781b.svg",leather:"leather.min.3df2738f69be418a3e0b7f1650d22fad.svg",light:"light.min.658b75673a7843d376998093659cb056.svg",lockOpen:"lock-open.min.624561c9b687b0da964875ff9f9255f4.svg",lock:"lock.min.63e55dcdf547e44193c0cb1aaaea78c9.svg",moon:"moon.min.65029347707c8e70385fd1a9e856adb8.svg",racingFlag:"racing-flag.min.833768cc92801a52baedbd440bd0e8b4.svg",snowflake:"snowflake.min.c45044ffb2aa320df0dcbdaeb978e991.svg",star:"star.min.8ab416782295d83b4dd801ef6d6e6ec8.svg",sun:"sun.min.b58311e9b0e6b33f9da8b53e7687bcf4.svg",weight:"weight.min.41380c81f276d2f04d49c1ace8a36ece.svg",work:"work.min.2036de9b3a4152307148bc846e99dcd6.svg",wrench:"wrench.min.a5a221aa17142e2f6449b5744a966cb5.svg",calendar:"calendar.min.393ec1ba5f6266419e968fb90f9a49a3.svg",clock:"clock.min.4c72818993ac750a986bea949e8b2806.svg",duration:"duration.min.f734fad84bb0702a34d3ce008b00d23f.svg",stopwatch:"stopwatch.min.acf3cb35259edda8676bbce9dba41c4d.svg",calculator:"calculator.min.13b7e15a1f262b7c5e35219ae345659e.svg",card:"card.min.aa7c52dec67a081077c37bdc74ff6f7b.svg",purchase:"purchase.min.7a333ad48579912f314fed81eb53a617.svg",shoppingCart:"shopping-cart.min.831bbb130257a56ddcf252cedf2ec57d.svg",logoBaidu:"logo-baidu.min.8fb7eec5f84348a08e9c254e1569804e.svg",logoDelicious:"logo-delicious.min.74e149acb8c83430ea6da1822e5d71e5.svg",logoDigg:"logo-digg.min.eb05007cb50acb1b5321ff641dfbe567.svg",logoFacebook:"logo-facebook.min.8a3d5b2d305c7aefb2b0b4e02d63c53f.svg",logoFoursquare:"logo-foursquare.min.93432ef92edd0e4ea4f7454ba199795b.svg",logoGmail:"logo-gmail.min.4a1fd0a4667e003b4a6aa421b3be817d.svg",logoGoogle:"logo-google.min.593967a455d4c9414d557a4a5e488807.svg",logoHatena:"logo-hatena.min.7b6172046adb034a8632d3c17d02b910.svg",logoInstagram:"logo-instagram.min.479184b41f3feab1da95de81e11dc6ae.svg",logoKaixin:"logo-kaixin.min.6b3ad0783209835f184b12bfd0db449a.svg",logoLinkedin:"logo-linkedin.min.f27cb9ab65fac0f01b9025fd81562790.svg",logoPinterest:"logo-pinterest.min.294b3c40ad9bee556a794c5d1799a0fd.svg",logoQqShare:"logo-qq-share.min.4fa04694e6c44eff9ef45fa2489d5282.svg",logoQq:"logo-qq.min.fd8dc19871866f386126656b3ee9904d.svg",logoSkyrock:"logo-skyrock.min.c30539d5960976625cb2f54ecc357db7.svg",logoSohu:"logo-sohu.min.66f10ef41eb6beda54e86585302512a5.svg",logoTecent:"logo-tecent.min.ef82131597d0c53f047656a879e4f860.svg",logoTelegram:"logo-telegram.min.55dc592b84c665643a159422ed54ff50.svg",logoTumblr:"logo-tumblr.min.d3a7fd333e57d5ce11194e7f294fd940.svg",logoTwitter:"logo-twitter.min.cfb78b3c906847db1a14388d7c2de8a5.svg",logoViber:"logo-viber.min.839423c4576dde70fd32ca9b38bbd595.svg",logoVk:"logo-vk.min.252858e66ac9a449a79c567e74d85906.svg",logoWechat:"logo-wechat.min.9c7a9a3c24b166878e4e8f9b0d63fa5b.svg",logoWeibo:"logo-weibo.min.8f4405a72d30ce6c4d37b6cc4f2d3df5.svg",logoWhatsapp:"logo-whatsapp.min.399d91ef024514790748242192dbad24.svg",logoXing:"logo-xing.min.dbb964c9c15c3d34d98ff116da281705.svg",logoYahoo:"logo-yahoo.min.41d8b14ca14a9dc9bb414a3caca71ab9.svg",logoYouku:"logo-youku.min.55160948572d233bc6098a5f44bf9216.svg",logoYoutube:"logo-youtube.min.47d3a1e7eb13056f8f0fecdd46b1e32f.svg",rss:"rss.min.bec948aabe336d7690e9274f757464da.svg",share:"share.min.8424917f4c64dc71e2f3e8048cd31fda.svg",userGroup:"user-group.min.2b26b0e6cc2b584427746e6e6378af1d.svg",user:"user.min.ab0f36161a4941069718c4bb0218720a.svg",car:"car.min.cfc20c66544b8967c4f6cfe174e32539.svg",co2Emission:"co2-emission.min.2bfd1a9eb3e582ee43ae1ad149c4f491.svg",cubicCapacity:"cubic-capacity.min.9ad1a643ecbbdf1c25e3d19c9b1b7a67.svg",fuelStation:"fuel-station.min.26b511126522568f0bd5c8ca56ff2f76.svg",oilCan:"oil-can.min.0706d6654b025a10b1470823df00ceeb.svg",steeringWheel:"steering-wheel.min.7e732be187e55b43b1d4bfe7682c8be0.svg",tachometer:"tachometer.min.75245f7775bac32604d23d94d706b093.svg",truck:"truck.min.f50a553807e221027cc418d52898db33.svg"},g=function(){return g=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},g.apply(this,arguments)};function h(e){return e.toLowerCase()}var m=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],u=/[^A-Z0-9]+/gi;function p(e,t){void 0===t&&(t={});var i=t.splitRegexp,o=void 0===i?m:i,n=t.stripRegexp,a=void 0===n?u:n,c=t.transform,r=void 0===c?h:c,s=t.delimiter,l=void 0===s?" ":s,f=v(v(e,o,"$1\0$2"),a,"\0"),d=0,b=f.length;while("\0"===f.charAt(d))d++;while("\0"===f.charAt(b-1))b--;return f.slice(d,b).split("\0").map(r).join(l)}function v(e,t,i){return t instanceof RegExp?e.replace(t,i):t.reduce((function(e,t){return e.replace(t,i)}),e)}function x(e,t){var i=e.charAt(0),o=e.substr(1).toLowerCase();return t>0&&i>="0"&&i<="9"?"_"+i+o:""+i.toUpperCase()+o}function w(e,t){return void 0===t&&(t={}),p(e,g({delimiter:"",transform:x},t))}function z(e,t){return 0===t?e.toLowerCase():x(e,t)}function y(e,t){return void 0===t&&(t={}),w(e,g({transform:z},t))}var k="arrow-head-right",O=new Map,j=function(e){return a(void 0,void 0,void 0,(function(){var t;return c(this,(function(i){return t=O.get(e),void 0===t&&(t=fetch(e).then((function(e){return e.ok?e.text().then(l):""}),(function(){return""})),O.set(e,t)),[2,t]}))}))},C=function e(t){return void 0===t&&(t=k),null===t?e(k):r(t)?t:b[y(t)]?d+"/"+b[y(t)]:(console.warn("Please provide either an name property or a source property!"),e(k))},L=":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-icon{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:1.5rem;height:1.5rem}.p-icon--size-small{width:1.5rem;height:1.5rem}.p-icon--size-medium{width:2.25rem;height:2.25rem}.p-icon--size-large{width:3rem;height:3rem}.p-icon--size-inherit{width:inherit;height:inherit}.p-icon--color-brand.p-icon--theme-light{fill:#d5001c}.p-icon--color-brand.p-icon--theme-dark{fill:#d5001c}.p-icon--color-default.p-icon--theme-light{fill:#000}.p-icon--color-default.p-icon--theme-dark{fill:#fff}.p-icon--color-neutral-contrast-high.p-icon--theme-light{fill:#323639}.p-icon--color-neutral-contrast-high.p-icon--theme-dark{fill:#e3e4e5}.p-icon--color-neutral-contrast-medium.p-icon--theme-light{fill:#626669}.p-icon--color-neutral-contrast-medium.p-icon--theme-dark{fill:#b0b1b2}.p-icon--color-neutral-contrast-low.p-icon--theme-light{fill:#c9cacb}.p-icon--color-neutral-contrast-low.p-icon--theme-dark{fill:#4a4e51}.p-icon--color-notification-success.p-icon--theme-light{fill:#018a16}.p-icon--color-notification-success.p-icon--theme-dark{fill:#01ba1d}.p-icon--color-notification-warning.p-icon--theme-light{fill:#ff9b00}.p-icon--color-notification-warning.p-icon--theme-dark{fill:#ff9b00}.p-icon--color-notification-error.p-icon--theme-light{fill:#e00000}.p-icon--color-notification-error.p-icon--theme-dark{fill:#fc1717}.p-icon--color-inherit{fill:currentColor}",T=function(){function e(e){Object(o["q"])(this,e),this.name=k,this.variant="outline",this.color="default",this.size="small",this.lazy=!1,this.theme="light",this.isVisible=!1}return e.prototype.loadIcon=function(){var e,t=this;if(this.isVisible){this.svgContent=void 0;var i=C(null!==(e=this.source)&&void 0!==e?e:this.name);j(i).then((function(e){var o;i===C(null!==(o=t.source)&&void 0!==o?o:t.name)&&(t.svgContent=e)}))}},e.prototype.connectedCallback=function(){var e=this;this.waitUntilVisible(this.el,"50px",(function(){e.isVisible=!0,e.loadIcon()}))},e.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.render=function(){var e=Object(n["a"])(Object(o["e"])("icon"),Object(o["e"])("icon--size-"+this.size),Object(o["e"])("icon--color-"+this.color),"inherit"!==this.color&&Object(o["e"])("icon--theme-"+this.theme));return Object(o["i"])(o["a"],null,Object(o["i"])("i",{class:e,innerHTML:this.svgContent}))},e.prototype.waitUntilVisible=function(e,t,i){var o=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(e){e[0].isIntersecting&&(n.disconnect(),o.io=void 0,i())}),{rootMargin:t});n.observe(e)}else i()},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o["h"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{source:["loadIcon"],name:["loadIcon"]}},enumerable:!0,configurable:!0}),e}();T.style=L;var S=':host{display:block}::slotted(p),::slotted(address),::slotted(blockquote),::slotted(figcaption),::slotted(cite),::slotted(time),::slotted(legend){margin:0 !important;padding:0 !important;font-style:normal !important;font-size:inherit !important}.p-text{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:400;padding:0;margin:0;list-style-type:none;display:inherit;-webkit-transition:font-size 1ms linear;transition:font-size 1ms linear}.p-text--size-x-small{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small{font-size:1rem;line-height:1.5}.p-text--size-medium{font-size:1.5rem;line-height:1.5}.p-text--size-large{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit{font-size:inherit;line-height:inherit}@media (min-width: 480px){.p-text--size-x-small-xs{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xs{font-size:1rem;line-height:1.5}.p-text--size-medium-xs{font-size:1.5rem;line-height:1.5}.p-text--size-large-xs{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xs{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xs{font-size:inherit;line-height:inherit}}@media (min-width: 760px){.p-text--size-x-small-s{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-s{font-size:1rem;line-height:1.5}.p-text--size-medium-s{font-size:1.5rem;line-height:1.5}.p-text--size-large-s{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-s{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-s{font-size:inherit;line-height:inherit}}@media (min-width: 1000px){.p-text--size-x-small-m{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-m{font-size:1rem;line-height:1.5}.p-text--size-medium-m{font-size:1.5rem;line-height:1.5}.p-text--size-large-m{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-m{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-m{font-size:inherit;line-height:inherit}}@media (min-width: 1300px){.p-text--size-x-small-l{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-l{font-size:1rem;line-height:1.5}.p-text--size-medium-l{font-size:1.5rem;line-height:1.5}.p-text--size-large-l{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-l{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-l{font-size:inherit;line-height:inherit}}@media (min-width: 1760px){.p-text--size-x-small-xl{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xl{font-size:1rem;line-height:1.5}.p-text--size-medium-xl{font-size:1.5rem;line-height:1.5}.p-text--size-large-xl{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xl{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xl{font-size:inherit;line-height:inherit}}.p-text--weight-thin{font-weight:100}.p-text--weight-regular{font-weight:400}.p-text--weight-bold{font-weight:700}.p-text--align-left{text-align:left}.p-text--align-center{text-align:center}.p-text--align-right{text-align:right}.p-text--color-brand.p-text--theme-light{color:#d5001c}.p-text--color-brand.p-text--theme-dark{color:#d5001c}.p-text--color-default.p-text--theme-light{color:#000}.p-text--color-default.p-text--theme-dark{color:#fff}.p-text--color-neutral-contrast-high.p-text--theme-light{color:#323639}.p-text--color-neutral-contrast-high.p-text--theme-dark{color:#e3e4e5}.p-text--color-neutral-contrast-medium.p-text--theme-light{color:#626669}.p-text--color-neutral-contrast-medium.p-text--theme-dark{color:#b0b1b2}.p-text--color-neutral-contrast-low.p-text--theme-light{color:#c9cacb}.p-text--color-neutral-contrast-low.p-text--theme-dark{color:#4a4e51}.p-text--color-notification-success.p-text--theme-light{color:#018a16}.p-text--color-notification-success.p-text--theme-dark{color:#01ba1d}.p-text--color-notification-warning.p-text--theme-light{color:#ff9b00}.p-text--color-notification-warning.p-text--theme-dark{color:#ff9b00}.p-text--color-notification-error.p-text--theme-light{color:#e00000}.p-text--color-notification-error.p-text--theme-dark{color:#fc1717}.p-text--color-inherit{color:inherit}.p-text--ellipsis{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',q=function(){function e(e){Object(o["q"])(this,e),this.tag="p",this.size="small",this.weight="regular",this.align="left",this.color="default",this.ellipsis=!1,this.theme="light"}return e.prototype.componentWillLoad=function(){this.addSlottedStyles()},e.prototype.componentDidLoad=function(){this.bindFontSizeListener()},e.prototype.render=function(){var e=this,t=this.hasSlottedTextTag?"div":this.tag,i=Object(n["a"])(Object(o["e"])("text"),Object(o["n"])("text--size",this.size),Object(o["e"])("text--weight-"+this.weight),Object(o["e"])("text--align-"+this.align),Object(o["e"])("text--color-"+this.color),this.ellipsis&&Object(o["e"])("text--ellipsis"),"inherit"!==this.color&&Object(o["e"])("text--theme-"+this.theme));return Object(o["i"])(t,{class:i,ref:function(t){return e.textTag=t}},Object(o["i"])("slot",null))},Object.defineProperty(e.prototype,"hasSlottedTextTag",{get:function(){var e=this.host.querySelector(":first-child");return null===e||void 0===e?void 0:e.matches("p, span, div, address, blockquote, figcaption, cite, time, legend")},enumerable:!0,configurable:!0}),e.prototype.bindFontSizeListener=function(){var e=this;Object(o["f"])(this.textTag,"font-size",(function(){e.textTag.style.lineHeight=""+Object(o["g"])(e.textTag)}))},e.prototype.addSlottedStyles=function(){var e=this.host.tagName.toLowerCase(),t=e+" a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    "+e+" a:hover {\n      color: #d5001c;\n    }\n\n    "+e+" a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";Object(o["k"])(this.host,t)},Object.defineProperty(e.prototype,"host",{get:function(){return Object(o["h"])(this)},enumerable:!0,configurable:!0}),e}();q.style=S}}]);
//# sourceMappingURL=chunk-e4f6dfac.93100375.js.map