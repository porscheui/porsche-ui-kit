(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6869b32b"],{"2b87":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i("2aa5"),i("58d3"),i("c5b4");var n=/^(\d+\.?\d*)(rem|px)$/,o=16,a=function(e){var t,i=null!==(t=null===e||void 0===e?void 0:e.match(n))&&void 0!==t?t:[],a=i[1],c=i[2];if("rem"!==c||"0"===a)throw new Error("function only accepts value in rem and not 0, e.g. 1.5rem");return parseFloat(""+a)*o+"px"},c=function(e){var t,i=null!==(t=null===e||void 0===e?void 0:e.match(n))&&void 0!==t?t:[],o=i[1],c=i[2];if(void 0===c||void 0===o||"0"===o)throw new Error("font size needs to be value + px or rem and not 0, e.g. 15rem or 16px, received: '"+e+"'");var r="rem"===c?a(e):o,s=parseFloat(r),l=2.71828,d=.911/(2.97+.005*Math.pow(l,.2*s))+1.2,f=s*d,g=f%4;g>2&&(g-=4);var b=1e5,h=f-g,m=h/s;return Math.round(m*b)/b},r=function(e){var t=window.getComputedStyle(e).fontSize;return t&&c(t)}},5577:function(e,t,i){"use strict";i.r(t),i.d(t,"p_icon",(function(){return q})),i.d(t,"p_text",(function(){return A}));i("d6de"),i("8d0f"),i("68b8"),i("ef14"),i("cfce"),i("28eb"),i("33ef"),i("868d"),i("9bd2"),i("ef1f"),i("88a1"),i("2aa5"),i("0d9f"),i("f3b8"),i("32f5"),i("62c8"),i("defa"),i("918c");var n=i("c5b4"),o=i("2b87"),a=i("6579"),c=(i("9040"),i("c0ac")),r=i("d245"),s=function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function c(e){try{s(n.next(e))}catch(t){a(t)}}function r(e){try{s(n["throw"](e))}catch(t){a(t)}}function s(e){e.done?i(e.value):o(e.value).then(c,r)}s((n=n.apply(e,t||[])).next())}))},l=function(e,t){var i,n,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(e){return function(t){return s([e,t])}}function s(a){if(i)throw new TypeError("Generator is already executing.");while(c)try{if(i=1,n&&(o=2&a[0]?n["return"]:a[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(r){a=[6,r],n=0}finally{i=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},d=function(e){return(null===e||void 0===e?void 0:e.length)>0&&/(\/)/.test(e)},f=function(e){return"string"===typeof e},g=function(e){if(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes.length-1;i>=0;i--)"svg"!==t.childNodes[i].nodeName.toLowerCase()&&t.removeChild(t.childNodes[i]);var n=t.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()&&b(n))return t.innerHTML}return""},b=function e(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var i=0;i<t.attributes.length;i++){var n=t.attributes[i].value;if(f(n)&&n.toLowerCase().startsWith("on"))return!1}for(i=0;i<t.childNodes.length;i++)if(!e(t.childNodes[i]))return!1}return!0},h="https://cdn.ui.porsche.com/porsche-design-system/icons",m={360:"360.min.e211bf5c900d662b4dccb9fa666414aa.svg",arrowDoubleDown:"arrow-double-down.min.596800021e18153493559081e663ee88.svg",arrowDoubleLeft:"arrow-double-left.min.4e15fa5ed5ede67284450f7bfb1ec451.svg",arrowDoubleRight:"arrow-double-right.min.1f19809f37d01d19cfbb9578c41b6395.svg",arrowDoubleUp:"arrow-double-up.min.1dfdee0293f35663e189028e18a09911.svg",arrowDown:"arrow-down.min.c8aeeeac5077b25177e53b2ace17c1f7.svg",arrowFirst:"arrow-first.min.a507d4cd79a8f0edd5f0b9ae3b2f7bc6.svg",arrowHeadDown:"arrow-head-down.min.fdb5ae2bcbe9e89a4ca462ff709c0ea8.svg",arrowHeadLeft:"arrow-head-left.min.ea16150c4d0fb48adbc092527171962f.svg",arrowHeadRight:"arrow-head-right.min.490cb49eb241569ee5d537730ee9658f.svg",arrowHeadUp:"arrow-head-up.min.3c502817abbea4e2593ff3773ecc470b.svg",arrowLast:"arrow-last.min.e90409d415c7dd4352f888e7dc59ef34.svg",arrowLeft:"arrow-left.min.40f3788a970e42dcd828f3140e5ef7db.svg",arrowRight:"arrow-right.min.0e9d5d854b941542ccede8934e22d22a.svg",arrowUp:"arrow-up.min.b58d1eba1b2ec77686fc3e383b99a983.svg",chat:"chat.min.0a706db0c941b41eac3f426e18aef9e8.svg",email:"email.min.4b513e97cb42aea4db45fb30dff3d7b3.svg",exclamation:"exclamation.min.e8ba9bb613a66d3e373f2ce9ca0692ff.svg",information:"information.min.42c7d2f03a076eeda8e8a0375808af96.svg",phone:"phone.min.d7f7f492060bc58ddff4dc2bf6d395eb.svg",question:"question.min.36649505c854566bb860aa9e43aab6b7.svg",warning:"warning.min.9afca66172d660341dfbd4ebde686e41.svg",add:"add.min.a6b936c7bd5da6e09ac857a1b9052a2e.svg",adjust:"adjust.min.c0175217a14c0da761746c8e69e15a52.svg",chart:"chart.min.fe1c4df96d842e62d5ac73848d70e067.svg",check:"check.min.7d7dc5323782dd8cd3cbb5716a81595b.svg",close:"close.min.6b6c3f57d0a694ab0d23e2ba52b854ae.svg",compare:"compare.min.861b69e5349e6a4845d860b416d85f17.svg",configurate:"configurate.min.54a3f217a03f1fcd65b9c6c42f511cdc.svg",delete:"delete.min.1538b6843b13d0bd31f28b59dcbbde49.svg",disable:"disable.min.146c508bc9b1d4cc482cf42ed9cb7f66.svg",download:"download.min.46357a2fa5acc920a28e7920d607b4ec.svg",edit:"edit.min.2c0873fe0396f75d4cbdd566428f55fc.svg",external:"external.min.a39d626056f818ed0eba855ceae71afe.svg",filter:"filter.min.88e87eed72da8d15773017e1ec3e645e.svg",grid:"grid.min.75cc26f9f44da33e1bad1417430f717c.svg",increase:"increase.min.3421600f54125e983d5570bad938cd7d.svg",list:"list.min.ab36881a07fc9486bb6ecfe16f7a4f72.svg",logout:"logout.min.f2a05c5b27e13024b61c1f439a200018.svg",menuDotsHorizontal:"menu-dots-horizontal.min.ed37b11a6f013819666e39f54646530d.svg",menuLines:"menu-lines.min.1336b797ec9d3db4b88f197cf276d1e4.svg",minus:"minus.min.f6e41865cfb6cd9dd9af041ef914c0ce.svg",plus:"plus.min.3b406279e5d6d27dd2f4a0115e681f8f.svg",refresh:"refresh.min.cf61dc9825290f7729da0d0a4701c0ae.svg",reset:"reset.min.9c1c1a3e6090b6be44efb4cdd4f89f7c.svg",save:"save.min.d963d7071f327a42c9d9e69c7b2824c3.svg",search:"search.min.bde919eab490e8fd1efb3c19b555f72c.svg",sort:"sort.min.385a606b10fac5fd1a7e515a1aa1f3bb.svg",stack:"stack.min.1d650e779dd577903a0388c02c2af5d5.svg",subtract:"subtract.min.2d6c64291d2afa82d2e369c29ace7293.svg",switch:"switch.min.8e99a2a0e92b40c07a59732ad175d87c.svg",upload:"upload.min.bc7c05ef34ec35c27a2779ee34e9ca46.svg",viewOff:"view-off.min.a65ede5bff8e0bdec76d9b0633a7aac2.svg",view:"view.min.9a9c212c8227f0c24bd474c47791ae5a.svg",zoomIn:"zoom-in.min.8d6cb3185186300b31c8a5c657dce597.svg",zoomOut:"zoom-out.min.7a5a17a95965e7a5e6d97efe9fad7914.svg",batteryEmpty:"battery-empty.min.6fc99423bfaaf476f6b61504bc05f020.svg",chargingStation:"charging-station.min.d6d6e663f81306e261dcdae08ca72b97.svg",flash:"flash.min.29fe78661e78a57136ac43010cb6b380.svg",plug:"plug.min.80b4e3510753c4b059c72d56e375a11e.svg",augmentedReality:"augmented-reality.min.e29e295fe394352de150c9e80a2fa1d4.svg",broadcast:"broadcast.min.88e7adc3a6423103644434ad7247b03d.svg",camera:"camera.min.103cbdac9653cfa0954aafd3f22b32e6.svg",closedCaption:"closed-caption.min.c7392aba9cb6d8aca3b0513f1e123193.svg",document:"document.min.e9d0000022e97c189f9c78fe2ce20016.svg",image:"image.min.4126facf3cb3d99e45f1a37f30e99f34.svg",mobile:"mobile.min.dde79c0c85f7163c99c7c3a1591faf92.svg",pause:"pause.min.e5986452c700aabb3f6f5585c9af0c8c.svg",play:"play.min.52a93696e40445bb04fbfe1205196d1e.svg",printer:"printer.min.f2bed64422ede9248ba878ced7c01fc4.svg",replay:"replay.min.3f1225604781bf0b9431a0727f2aca34.svg",screen:"screen.min.364959f2f1bd377080ca7b7613ea38e8.svg",tablet:"tablet.min.b957679112a2a85e868b5a258ce8eee6.svg",video:"video.min.b09b4e0279c1d8f614c7fcfa14667609.svg",volumeOff:"volume-off.min.951414124a2ce4987a4cd36e63f5a22e.svg",volumeUp:"volume-up.min.02634c14afe8eafe68342c218dd4b18e.svg",wifi:"wifi.min.c85f1d71482a30e1e7a245aedaa87262.svg",city:"city.min.b9915939643538d7db0ea353595daec0.svg",countryRoad:"country-road.min.a68e78385a06baf1fd6f2c4dd100c2da.svg",globe:"globe.min.66cfa22d1d944dcddf5f2281dfca75ca.svg",highway:"highway.min.88ef248f470b6383e5a167b614d2d79a.svg",home:"home.min.74de9da062f400c7665302ee8e2a8219.svg",locate:"locate.min.5c3072a51cce147566d298032dd357d6.svg",pin:"pin.min.1d81e348f4545ee069ccb84d7f98e630.svg",route:"route.min.9f4650752de24021048549d6b8dc659c.svg",gift:"gift.min.62f7af2ac6734a0d574d967b6e78aaeb.svg",leaf:"leaf.min.c517648f095c2b41a3d648cb50c0503f.svg",leather:"leather.min.957c06d2d7ca1e9fe8fa58a200154cf1.svg",light:"light.min.d09fa96b3dfd471326c8456bd8a49a77.svg",lockOpen:"lock-open.min.8ddd2a836854afc22895eb2aacad3417.svg",lock:"lock.min.63e55dcdf547e44193c0cb1aaaea78c9.svg",moon:"moon.min.2ba8b73cb55c704ce5a9e4801331a2de.svg",racingFlag:"racing-flag.min.5893e900252dfb0d04429e7ac31949b1.svg",snowflake:"snowflake.min.c45044ffb2aa320df0dcbdaeb978e991.svg",star:"star.min.4208fcf8b11ec31c78bf8c2a163ce42c.svg",sun:"sun.min.60212b1e4604cd32fda6975fd877bbed.svg",weight:"weight.min.25aad8e2d2e2dc7cd9e3be1463c902ce.svg",work:"work.min.9d9de3ed8774bf43d6421951db8a4cf9.svg",wrench:"wrench.min.8d58e7b5c89e1377308959ec69757ee9.svg",calendar:"calendar.min.393ec1ba5f6266419e968fb90f9a49a3.svg",clock:"clock.min.4c056dfaaa1ecec4047d68cc838490d3.svg",duration:"duration.min.0239582c7f7ade35bb874f27003ffad0.svg",stopwatch:"stopwatch.min.78f10ebf7f7f7c8b61c3b59d0922cc80.svg",calculator:"calculator.min.13b7e15a1f262b7c5e35219ae345659e.svg",card:"card.min.aa7c52dec67a081077c37bdc74ff6f7b.svg",purchase:"purchase.min.eb75cfd9a49430fbffc28bf0735f7864.svg",shoppingCart:"shopping-cart.min.831bbb130257a56ddcf252cedf2ec57d.svg",logoBaidu:"logo-baidu.min.90d44753ba61e72cfa19b87f0588eb61.svg",logoDelicious:"logo-delicious.min.74e149acb8c83430ea6da1822e5d71e5.svg",logoDigg:"logo-digg.min.eb05007cb50acb1b5321ff641dfbe567.svg",logoFacebook:"logo-facebook.min.b14939da010e83e61a05627af0a217fb.svg",logoFoursquare:"logo-foursquare.min.7c43be4ed412f76124a9d97993ce587a.svg",logoGmail:"logo-gmail.min.4a1fd0a4667e003b4a6aa421b3be817d.svg",logoGoogle:"logo-google.min.3f7f5fe4b15abf3f0bd81130c1507268.svg",logoHatena:"logo-hatena.min.426df3e9943e5abb6066a57ffd6b0cc5.svg",logoInstagram:"logo-instagram.min.0482fc6ba0c7f8fec6e18a4fa124d702.svg",logoKaixin:"logo-kaixin.min.1015ba404b7dd4f5631552ac5feaf0a9.svg",logoLinkedin:"logo-linkedin.min.a577281e27462ad32e7288e7a8507f4b.svg",logoPinterest:"logo-pinterest.min.6bf0506dd47de7fb16484ceddb42cac4.svg",logoQqShare:"logo-qq-share.min.a18e02bcec2febdf6679f9639ebd4311.svg",logoQq:"logo-qq.min.ce68ae21eacfb850d7671cc27bcf7935.svg",logoSkyrock:"logo-skyrock.min.51978a61a87ba7da153ecc55936fe649.svg",logoSohu:"logo-sohu.min.cb9f4d61a54a47341a83a1b3ddb58c9b.svg",logoTecent:"logo-tecent.min.b6249ec5deb9435358c34ad6ee9c47db.svg",logoTelegram:"logo-telegram.min.ee78ffd7530e96b2837ab6030dded75e.svg",logoTumblr:"logo-tumblr.min.6f5acc1a391cd65e1d966de41326c7f4.svg",logoTwitter:"logo-twitter.min.05f5485ed484939378b399371ef065c2.svg",logoViber:"logo-viber.min.9b0a75bbc5c108a941808e2490023b4c.svg",logoVk:"logo-vk.min.7660c71589b1e1d692525fe80d161f73.svg",logoWechat:"logo-wechat.min.6a0e733a9714092dc8a7bfdce28cf1c9.svg",logoWeibo:"logo-weibo.min.9ee0664bb488dec2d0de6cf820ff42e6.svg",logoWhatsapp:"logo-whatsapp.min.4532d75e3f805bf1fb83692818bc6d66.svg",logoXing:"logo-xing.min.ac9116e702444a696f4ba9fb18bdeb75.svg",logoYahoo:"logo-yahoo.min.07bf0f778d1acc723fcdd3c81b490245.svg",logoYouku:"logo-youku.min.a94c208665c788b5eed041ba4ee1c565.svg",logoYoutube:"logo-youtube.min.badfd7df263b50c5c2f2e7416b4e82f2.svg",rss:"rss.min.36713d4c5b12efe16ed408f8c5e238cf.svg",share:"share.min.1139a9f42f7164d3449c89a99efe831e.svg",userGroup:"user-group.min.7e6da54dc139ac1fef6d3519ef97782b.svg",user:"user.min.1275130477bf3fe06988a8647294eada.svg",car:"car.min.39ebb87c4242d68a6771b81b7f43e066.svg",co2Emission:"co2-emission.min.547ab46d103f1bb94d8a1d9834122b6a.svg",cubicCapacity:"cubic-capacity.min.b00fd095934bb4af0ef4248c4e052bac.svg",fuelStation:"fuel-station.min.072ac61c3a48d08d687f320ff8209899.svg",oilCan:"oil-can.min.0ced54bd78e6638ff9ee218aaedb3eb9.svg",steeringWheel:"steering-wheel.min.c646a8858d99a3dd3289504d0ca4c2d1.svg",tachometer:"tachometer.min.aa6e3cf532ecafc3a1f27eda81bb28e4.svg",truck:"truck.min.eb68593ab679bdc0ea78d0b545dcf949.svg"},u=function(){return u=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};function p(e){return e.toLowerCase()}var v=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],x=/[^A-Z0-9]+/gi;function w(e,t){void 0===t&&(t={});var i=t.splitRegexp,n=void 0===i?v:i,o=t.stripRegexp,a=void 0===o?x:o,c=t.transform,r=void 0===c?p:c,s=t.delimiter,l=void 0===s?" ":s,d=z(z(e,n,"$1\0$2"),a,"\0"),f=0,g=d.length;while("\0"===d.charAt(f))f++;while("\0"===d.charAt(g-1))g--;return d.slice(f,g).split("\0").map(r).join(l)}function z(e,t,i){return t instanceof RegExp?e.replace(t,i):t.reduce((function(e,t){return e.replace(t,i)}),e)}function y(e,t){var i=e.charAt(0),n=e.substr(1).toLowerCase();return t>0&&i>="0"&&i<="9"?"_"+i+n:""+i.toUpperCase()+n}function k(e,t){return void 0===t&&(t={}),w(e,u({delimiter:"",transform:y},t))}function O(e,t){return 0===t?e.toLowerCase():y(e,t)}function j(e,t){return void 0===t&&(t={}),k(e,u({transform:O},t))}var C="arrow-head-right",S=new Map,L=function(e){return s(void 0,void 0,void 0,(function(){var t;return l(this,(function(i){return t=S.get(e),void 0===t&&(t=fetch(e).then((function(e){return e.ok?e.text().then(g):""}),(function(){return""})),S.set(e,t)),[2,t]}))}))},T=function e(t){void 0===t&&(t=C);var i=h;return null===t?e(C):d(t)?t:m[j(t)]?i+"/"+m[j(t)]:(console.warn("Please provide either an name property or a source property!"),e(C))},N=":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-icon{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:1.5rem;height:1.5rem}.p-icon--size-small{width:1.5rem;height:1.5rem}.p-icon--size-medium{width:2.25rem;height:2.25rem}.p-icon--size-large{width:3rem;height:3rem}.p-icon--size-inherit{width:inherit;height:inherit}.p-icon--color-brand.p-icon--theme-light{fill:#d5001c}.p-icon--color-brand.p-icon--theme-dark{fill:#d5001c}.p-icon--color-default.p-icon--theme-light{fill:#000}.p-icon--color-default.p-icon--theme-dark{fill:#fff}.p-icon--color-neutral-contrast-high.p-icon--theme-light{fill:#323639}.p-icon--color-neutral-contrast-high.p-icon--theme-dark{fill:#e3e4e5}.p-icon--color-neutral-contrast-medium.p-icon--theme-light{fill:#626669}.p-icon--color-neutral-contrast-medium.p-icon--theme-dark{fill:#b0b1b2}.p-icon--color-neutral-contrast-low.p-icon--theme-light{fill:#c9cacb}.p-icon--color-neutral-contrast-low.p-icon--theme-dark{fill:#4a4e51}.p-icon--color-notification-success.p-icon--theme-light{fill:#018a16}.p-icon--color-notification-success.p-icon--theme-dark{fill:#01ba1d}.p-icon--color-notification-warning.p-icon--theme-light{fill:#ff9b00}.p-icon--color-notification-warning.p-icon--theme-dark{fill:#ff9b00}.p-icon--color-notification-error.p-icon--theme-light{fill:#e00000}.p-icon--color-notification-error.p-icon--theme-dark{fill:#fc1717}.p-icon--color-notification-neutral.p-icon--theme-light{fill:#0061BD}.p-icon--color-notification-neutral.p-icon--theme-dark{fill:#2193FF}.p-icon--color-inherit{fill:currentColor}",q=function(){function e(e){Object(n["j"])(this,e),this.name=C,this.variant="outline",this.color="default",this.size="small",this.lazy=!1,this.theme="light",this.isVisible=!1}return e.prototype.loadIcon=function(){var e,t=this;if(this.isVisible){this.svgContent=void 0;var i=T(null!==(e=this.source)&&void 0!==e?e:this.name);L(i).then((function(e){var n;i===T(null!==(n=t.source)&&void 0!==n?n:t.name)&&(t.svgContent=e)}))}},e.prototype.connectedCallback=function(){var e=this;this.waitUntilVisible(this.el,"50px",(function(){e.isVisible=!0,e.loadIcon()}))},e.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},e.prototype.render=function(){var e=Object(r["a"])(Object(n["d"])("icon"),Object(n["d"])("icon--size-"+this.size),Object(n["d"])("icon--color-"+this.color),"inherit"!==this.color&&Object(n["d"])("icon--theme-"+this.theme));return Object(n["h"])(n["a"],null,Object(n["h"])("i",{class:e,innerHTML:this.svgContent}))},e.prototype.waitUntilVisible=function(e,t,i){var n=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var o=this.io=new window.IntersectionObserver((function(e){e[0].isIntersecting&&(o.disconnect(),n.io=void 0,i())}),{rootMargin:t});o.observe(e)}else i()},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n["g"])(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{source:["loadIcon"],name:["loadIcon"]}},enumerable:!1,configurable:!0}),e}();q.style=N;var D=':host{display:block}::slotted(p),::slotted(address),::slotted(blockquote),::slotted(figcaption),::slotted(cite),::slotted(time),::slotted(legend){margin:0 !important;padding:0 !important;font-style:normal !important;font-size:inherit !important}.p-text{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:400;padding:0;margin:0;list-style-type:none;display:inherit;-webkit-transition:font-size 1ms linear;transition:font-size 1ms linear}.p-text--size-x-small{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small{font-size:1rem;line-height:1.5}.p-text--size-medium{font-size:1.5rem;line-height:1.5}.p-text--size-large{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit{font-size:inherit;line-height:inherit}@media (min-width: 480px){.p-text--size-x-small-xs{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xs{font-size:1rem;line-height:1.5}.p-text--size-medium-xs{font-size:1.5rem;line-height:1.5}.p-text--size-large-xs{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xs{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xs{font-size:inherit;line-height:inherit}}@media (min-width: 760px){.p-text--size-x-small-s{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-s{font-size:1rem;line-height:1.5}.p-text--size-medium-s{font-size:1.5rem;line-height:1.5}.p-text--size-large-s{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-s{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-s{font-size:inherit;line-height:inherit}}@media (min-width: 1000px){.p-text--size-x-small-m{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-m{font-size:1rem;line-height:1.5}.p-text--size-medium-m{font-size:1.5rem;line-height:1.5}.p-text--size-large-m{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-m{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-m{font-size:inherit;line-height:inherit}}@media (min-width: 1300px){.p-text--size-x-small-l{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-l{font-size:1rem;line-height:1.5}.p-text--size-medium-l{font-size:1.5rem;line-height:1.5}.p-text--size-large-l{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-l{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-l{font-size:inherit;line-height:inherit}}@media (min-width: 1760px){.p-text--size-x-small-xl{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xl{font-size:1rem;line-height:1.5}.p-text--size-medium-xl{font-size:1.5rem;line-height:1.5}.p-text--size-large-xl{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xl{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xl{font-size:inherit;line-height:inherit}}.p-text--weight-thin{font-weight:100}.p-text--weight-regular{font-weight:400}.p-text--weight-semibold{font-weight:600}.p-text--weight-bold{font-weight:700}.p-text--align-left{text-align:left}.p-text--align-center{text-align:center}.p-text--align-right{text-align:right}.p-text--color-brand.p-text--theme-light{color:#d5001c}.p-text--color-brand.p-text--theme-dark{color:#d5001c}.p-text--color-default.p-text--theme-light{color:#000}.p-text--color-default.p-text--theme-dark{color:#fff}.p-text--color-neutral-contrast-high.p-text--theme-light{color:#323639}.p-text--color-neutral-contrast-high.p-text--theme-dark{color:#e3e4e5}.p-text--color-neutral-contrast-medium.p-text--theme-light{color:#626669}.p-text--color-neutral-contrast-medium.p-text--theme-dark{color:#b0b1b2}.p-text--color-neutral-contrast-low.p-text--theme-light{color:#c9cacb}.p-text--color-neutral-contrast-low.p-text--theme-dark{color:#4a4e51}.p-text--color-notification-success.p-text--theme-light{color:#018a16}.p-text--color-notification-success.p-text--theme-dark{color:#01ba1d}.p-text--color-notification-warning.p-text--theme-light{color:#ff9b00}.p-text--color-notification-warning.p-text--theme-dark{color:#ff9b00}.p-text--color-notification-error.p-text--theme-light{color:#e00000}.p-text--color-notification-error.p-text--theme-dark{color:#fc1717}.p-text--color-notification-neutral.p-text--theme-light{color:#0061BD}.p-text--color-notification-neutral.p-text--theme-dark{color:#2193FF}.p-text--color-inherit{color:inherit}.p-text--ellipsis{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',A=function(){function e(e){Object(n["j"])(this,e),this.tag="p",this.size="small",this.weight="regular",this.align="left",this.color="default",this.ellipsis=!1,this.theme="light"}return e.prototype.componentWillLoad=function(){this.addSlottedStyles()},e.prototype.componentDidLoad=function(){this.bindFontSizeListener()},e.prototype.render=function(){var e=this,t=this.hasSlottedTextTag?"div":this.tag,i=Object(r["a"])(Object(n["d"])("text"),Object(n["i"])("text--size",this.size),Object(n["d"])("text--weight-"+this.weight),Object(n["d"])("text--align-"+this.align),Object(n["d"])("text--color-"+this.color),this.ellipsis&&Object(n["d"])("text--ellipsis"),"inherit"!==this.color&&Object(n["d"])("text--theme-"+this.theme));return Object(n["h"])(t,{class:i,ref:function(t){return e.textTag=t}},Object(n["h"])("slot",null))},Object.defineProperty(e.prototype,"hasSlottedTextTag",{get:function(){var e=this.host.querySelector(":first-child");return null===e||void 0===e?void 0:e.matches("p, span, div, address, blockquote, figcaption, cite, time, legend")},enumerable:!1,configurable:!0}),e.prototype.bindFontSizeListener=function(){var e=this;Object(c["a"])(this.textTag,"font-size",(function(){e.textTag.style.lineHeight=""+Object(o["a"])(e.textTag)}))},e.prototype.addSlottedStyles=function(){var e=this.host.tagName.toLowerCase(),t=e+" a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    "+e+" a:hover {\n      color: #d5001c;\n    }\n\n    "+e+" a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";Object(a["a"])(this.host,t)},Object.defineProperty(e.prototype,"host",{get:function(){return Object(n["g"])(this)},enumerable:!1,configurable:!0}),e}();A.style=D},"58d3":function(e,t,i){"use strict";var n=i("95b2"),o=i("157c"),a=i("b495"),c=i("730c"),r=i("e3f6"),s=i("df8c");n("match",1,(function(e,t,i){return[function(t){var i=c(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,i):new RegExp(t)[e](String(i))},function(e){var n=i(t,e,this);if(n.done)return n.value;var c=o(e),l=String(this);if(!c.global)return s(c,l);var d=c.unicode;c.lastIndex=0;var f,g=[],b=0;while(null!==(f=s(c,l))){var h=String(f[0]);g[b]=h,""===h&&(c.lastIndex=r(l,a(c.lastIndex),d)),b++}return 0===b?null:g}]}))},6579:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i("9bd2"),i("ef1f"),i("2aa5"),i("f3b8"),i("32f5"),i("918c");var n=new Map,o=function(e){var t=e.tagName,i=n.get(t);if(void 0!==i)return i;var o=new Map;return n.set(t,o),o},a=function(e){return e===document?e.head:e},c=function(e,t){var i=e.getRootNode(),n=o(e);if(void 0===n.get(i)){n.set(i,!0);var c=document.createElement("style");c.appendChild(document.createTextNode(r(t)));var s=a(i),l=s.querySelector("meta[charset]");null!==l?s.insertBefore(c,l.nextSibling):s.childNodes.length>0?s.insertBefore(c,s.firstChild):s.appendChild(c)}},r=function(e){return e.replace(/\s{2,}|(\/\*.*\*\/)/g,"").replace(/(:|;)\s/g,"$1").replace(/[\s;]({|})\s?/g,"$1")}},9040:function(e,t,i){"use strict";function n(e,t,i,n){var o,a=!1,c=0;function r(){o&&clearTimeout(o)}function s(){r(),a=!0}function l(){for(var s=arguments.length,l=new Array(s),d=0;d<s;d++)l[d]=arguments[d];var f=this,g=Date.now()-c;function b(){c=Date.now(),i.apply(f,l)}function h(){o=void 0}a||(n&&!o&&b(),r(),void 0===n&&g>e?b():!0!==t&&(o=setTimeout(n?h:b,void 0===n?e-g:e)))}return"boolean"!==typeof t&&(n=i,i=t,t=void 0),l.cancel=s,l}i.d(t,"a",(function(){return n}))},c0ac:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("9040"),o=function(e,t,i){window.requestAnimationFrame((function(){e.addEventListener("transitionend",Object(n["a"])(50,(function(e){e.propertyName===t&&i()}))),i()}))}},d245:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("ef14");var n=i("53ca"),o=i("c5b4"),a=Object(o["e"])((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var c=Object(n["a"])(a);if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===c)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i})()}))}}]);
//# sourceMappingURL=chunk-6869b32b.8d0bd0b4.js.map