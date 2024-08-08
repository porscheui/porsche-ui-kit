(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f12eae1"],{cc07:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));const s=999999,i=99999,r=9999,o=99},e67e:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("h1",[t._v("Notifications")]),e("p",[t._v("Notifications are an important method of communicating with users and providing feedback.")]),t._m(0),t._m(1),e("TableOfContents"),e("h2",[t._v("When to use")]),e("p",[t._v("In order to find the right notification type for your use case, we have defined some decision-making rules for you:")]),e("p",[e("p-link",{attrs:{href:"components/notifications/decision-tree",variant:"primary"}},[t._v("Go to the Decision Tree")])],1),e("hr"),e("h2",[t._v("Types/Behavior")]),t._m(2),e("h2",[t._v("z-index in descending order")]),e("table",[t._m(3),e("tbody",[e("tr",[e("td",[t._v("Toast")]),e("td",[t._v(t._s(t.zIndexes.toast))])]),e("tr",[e("td",[t._v("Modal")]),e("td",[t._v(t._s(t.zIndexes.modal))])]),e("tr",[e("td",[t._v("Banner")]),e("td",[t._v(t._s(t.zIndexes.banner))])])])]),e("p",[e("p-button",{on:{click:function(e){return t.startDemo()}}},[t._v("Start Live Demo")])],1),e("p",[e("p-toast",{ref:"toast"})],1),e("div",[e("p-modal",{ref:"modal",attrs:{heading:"Some Heading",open:t.isModalOpen}},[e("p-text",[t._v("Some Content")])],1)],1),e("h2",[t._v("References")]),t._m(4)],1)},i=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Their main aim should be to help users perform a task and not necessarily interfere or get in the way of users while using your product. Ensure your "),e("strong",[t._v("notifications are relevant, timely, and informative.")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("strong",[t._v("Keep in Mind:")]),t._v(" Highly frequented or disruptive Notifications can have a "),e("strong",[t._v("negative impact")]),t._v(" on the user's experience.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("table",[e("thead",[e("tr",[e("th",[t._v("Components")]),e("th",[t._v("Placement")]),e("th",[t._v("Follow-up Action")]),e("th",[t._v("Hide")]),e("th",[t._v("Criticality")]),e("th",[t._v("States")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Form elements (Inline Validation)")])]),e("td",[t._v("Below form element")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved")]),e("td",[t._v("Low")]),e("td",[t._v("Success, Error")])]),e("tr",[e("td",[e("strong",[t._v("Toast")])]),e("td",[t._v("Bottom, Left")]),e("td",[t._v("No")]),e("td",[t._v("Automatically (6s)")]),e("td",[t._v("Low/Medium")]),e("td",[t._v("Neutral, Success")])]),e("tr",[e("td",[e("strong",[t._v("Inline Notification")])]),e("td",[t._v("Before/After Content")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved/Dismiss")]),e("td",[t._v("Medium")]),e("td",[t._v("Neutral, Success, Warning, Error")])]),e("tr",[e("td",[e("strong",[t._v("Banner")])]),e("td",[t._v("Top, Center")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved/Dismiss")]),e("td",[t._v("Medium/High")]),e("td",[t._v("Neutral, Warning, Error")])]),e("tr",[e("td",[e("strong",[t._v("Modal")])]),e("td",[t._v("Center")]),e("td",[t._v("Yes")]),e("td",[t._v("Resolved/Dismiss")]),e("td",[t._v("High")]),e("td",[t._v("Neutral, Warning, Error")])])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th",[t._v("Component")]),e("th",[t._v("z-index")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[t._v("Duncan P. Brumby, Christian P. Janssen, and Gloria Mark, "),e("a",{attrs:{href:"https://link.springer.com/chapter/10.1007/978-1-4842-4221-6_9"}},[t._v("How Do Interruptions Affect Productivity?")]),t._v(" (Rethinking Productivity in Software Engineering, 2019)")]),e("li",[t._v("Kim Flaherty, "),e("a",{attrs:{href:"https://www.nngroup.com/articles/indicators-validations-notifications/"}},[t._v("Indicators, Validations, and Notifications")]),t._v("s (Nielsen Norman Group, 2015)")]),e("li",[t._v("Aurora Harley, "),e("a",{attrs:{href:"https://www.nngroup.com/articles/visibility-system-status/"}},[t._v("Visibility of System Status")]),t._v(" (Nielsen Norman Group, 2018)")]),e("li",[t._v("Jakob Nielsen, "),e("a",{attrs:{href:"https://www.nngroup.com/articles/ten-usability-heuristics/"}},[t._v("10 Usability Heuristics for User Interface Design")]),t._v(" (Nielsen Norman Group, 1994)")]),e("li",[e("a",{attrs:{href:"https://www.w3.org/WAI/standards-guidelines/wcag/"}},[t._v("Web Content Accessibility Guidelines")])])])}],r=n("ade3"),o=n("9ab4"),a=n("2b0e"),d=n("2fe1"),_=n("cc07");let v=class extends a["a"]{constructor(...t){super(...t),Object(r["a"])(this,"isModalOpen",!1),Object(r["a"])(this,"isBannerOpen",!1),Object(r["a"])(this,"toastCounter",1),Object(r["a"])(this,"zIndexes",{toast:_["d"],modal:_["b"],banner:_["a"]})}mounted(){this.$refs.modal.addEventListener("close",()=>this.isModalOpen=!1)}startDemo(){this.$refs.toast.addMessage({text:"Some message "+this.toastCounter}),this.toastCounter++,this.isModalOpen=!0,this.isBannerOpen||this.openBanner()}openBanner(){const t=document.createElement("p-banner");t.innerHTML='\n      <span slot="title">Some banner title</span>\n      <span slot="description">Some banner description.</span>\n    ',document.getElementById("app").append(t),this.isBannerOpen=!0,t.addEventListener("dismiss",()=>{this.isBannerOpen=!1})}};v=Object(o["a"])([d["b"]],v);var c=v,l=c,u=n("2877"),p=Object(u["a"])(l,s,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-6f12eae1.9b08ec91.js.map