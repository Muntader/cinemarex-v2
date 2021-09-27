"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8963],{6706:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(3645),r=n.n(s)()((function(t){return t[1]}));r.push([t.id,".exit-button[data-v-e48da20a]{transition:.3s;width:20px}.exit-button[data-v-e48da20a]:hover{transform:scale(1.2)}",""]);const a=r},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,s){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(s)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var i=0;i<t.length;i++){var c=[].concat(t[i]);s&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},3379:(t,e,n)=>{var s,r=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function i(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},s=[],r=0;r<t.length;r++){var a=t[r],c=e.base?a[0]+e.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=i(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:d,updater:h(f,e),references:1}),s.push(d)}return s}function l(t){var e=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var r=n.nc;r&&(s.nonce=r)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,s){var r=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var a=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function p(t,e,n){var s=n.css,r=n.media,a=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var v=null,m=0;function h(t,e){var n,s,r;if(e.singleton){var a=m++;n=v||(v=l(e)),s=f.bind(null,n,a,!1),r=f.bind(null,n,a,!0)}else n=l(e),s=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<n.length;s++){var r=i(n[s]);o[r].references--}for(var a=c(t,e),l=0;l<n.length;l++){var d=i(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=a}}}},8963:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const s={data:function(){return{current:"",password:"",confirm:"",success:""}},components:{"exit-button":n(7264).Z},beforeRouteUpdate:function(t,e,n){this.name=t.params.name,n()},methods:{CHANGE_PASSWORD:function(){var t=this;this.$validator.validateAll().then((function(e){e&&t.$store.dispatch("UPDATE_PASSWORD",{password:t.password,password_confirmation:t.confirm,current_password:t.current})}))}}};const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"settings"},[n("div",{staticClass:"row"},[n("div",{staticClass:"exit-icon",on:{click:function(e){return t.$Helper.home()}}},[n("exit-button")],1),t._v(" "),n("div",{staticClass:"col-12 col-sm-8 offset-sm-2 p-sm-3 mt-5 h-100"},[n("div",{staticClass:"title"},[n("p",[t._v(t._s(t.$t("setting.security")))])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"col-sm-10 col-lg-8 offset-sm-2"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-12 control-label"},[t._v(t._s(t.$t("setting.current")))]),t._v(" "),n("div",{staticClass:"col-12"},[n("input",{directives:[{name:"validate",rawName:"v-validate",value:"min:8|required",expression:"'min:8|required'"},{name:"model",rawName:"v-model",value:t.current,expression:"current"}],staticClass:"form-control",class:{input:!0,"input-danger":t.errors.has("current")},attrs:{type:"password",name:"current",placeholder:t.$t("setting.current"),autocomplete:"off"},domProps:{value:t.current},on:{input:function(e){e.target.composing||(t.current=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-12 control-label"},[t._v(t._s(t.$t("setting.password")))]),t._v(" "),n("div",{staticClass:"col-12"},[n("input",{directives:[{name:"validate",rawName:"v-validate",value:"min:8|required",expression:"'min:8|required'"},{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{input:!0,"input-danger":t.errors.has("password")},attrs:{type:"password",name:"confirm-field",placeholder:t.$t("setting.password"),autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-12 control-label"},[t._v(t._s(t.$t("setting.password_confirm")))]),t._v(" "),n("div",{staticClass:"col-12"},[n("input",{directives:[{name:"validate",rawName:"v-validate",value:"min:8|required|confirmed:confirm-field",expression:"'min:8|required|confirmed:confirm-field'"},{name:"model",rawName:"v-model",value:t.confirm,expression:"confirm"}],staticClass:"form-control",class:{input:!0,"input-danger":t.errors.has("password")},attrs:{type:"password",name:"password",placeholder:t.$t("setting.password_confirm"),"data-vv-as":"password",autocomplete:"off"},domProps:{value:t.confirm},on:{input:function(e){e.target.composing||(t.confirm=e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("password"),expression:"errors.has('password')"}],staticClass:"help text-danger"},[t._v(t._s(t.errors.first("password")))])])]),t._v(" "),t.success?n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-12"},[n("span",{staticClass:"text-success"},[t._v(t._s(t.$t("setting.successful_update")))])])]):t._e(),t._v(" "),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-12"},[n("button",{staticClass:"btn btn-warning",on:{click:t.CHANGE_PASSWORD}},[t._v(t._s(t.$t("setting.update")))])])])])])])])])}),[],!1,null,null,null).exports},7264:(t,e,n)=>{n.d(e,{Z:()=>c});const s={methods:{BACK:function(){this.$store.commit("SHOW_SERIES_DETAILS_PAGE",!1)}}};var r=n(3379),a=n.n(r),o=n(6706),i={insert:"head",singleton:!1};a()(o.Z,i);o.Z.locals;const c=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"exit-button"},[e("img",{attrs:{src:"/themes/default/img/exit-icon.svg",alt:"exit icon",width:"100%"}})])}],!1,null,"e48da20a",null).exports},1900:(t,e,n)=>{function s(t,e,n,s,r,a,o,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=i?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>s})}}]);