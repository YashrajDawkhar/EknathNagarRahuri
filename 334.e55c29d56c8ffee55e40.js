(self.webpackChunkeknath_nagar_rahuri=self.webpackChunkeknath_nagar_rahuri||[]).push([[334],{1334:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ArtiModule:()=>P});var n=i(8583),o=i(8741),r=i(7716),l=i(254),a=i(3013);function s(e,t){1&e&&r.GkF(0)}function d(e,t){if(1&e&&(r.TgZ(0,"div",8),r.Hsn(1,1),r.YNc(2,s,1,0,"ng-container",6),r.qZA()),2&e){const e=r.oxw();r.xp6(2),r.Q6J("ngTemplateOutlet",e.headerTemplate)}}function c(e,t){1&e&&r.GkF(0)}function p(e,t){if(1&e&&(r.TgZ(0,"div",9),r._uU(1),r.YNc(2,c,1,0,"ng-container",6),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.hij(" ",e.header," "),r.xp6(1),r.Q6J("ngTemplateOutlet",e.titleTemplate)}}function h(e,t){1&e&&r.GkF(0)}function g(e,t){if(1&e&&(r.TgZ(0,"div",10),r._uU(1),r.YNc(2,h,1,0,"ng-container",6),r.qZA()),2&e){const e=r.oxw();r.xp6(1),r.hij(" ",e.subheader," "),r.xp6(1),r.Q6J("ngTemplateOutlet",e.subtitleTemplate)}}function u(e,t){1&e&&r.GkF(0)}function m(e,t){1&e&&r.GkF(0)}function f(e,t){if(1&e&&(r.TgZ(0,"div",11),r.Hsn(1,2),r.YNc(2,m,1,0,"ng-container",6),r.qZA()),2&e){const e=r.oxw();r.xp6(2),r.Q6J("ngTemplateOutlet",e.footerTemplate)}}const y=["*",[["p-header"]],[["p-footer"]]],b=["*","p-header","p-footer"];let w=(()=>{class e{constructor(e){this.el=e}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"title":this.titleTemplate=e.template;break;case"subtitle":this.subtitleTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;default:this.contentTemplate=e.template}})}getBlockableElement(){return this.el.nativeElement.children[0]}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.SBq))},e.\u0275cmp=r.Xpm({type:e,selectors:[["p-card"]],contentQueries:function(e,t,i){if(1&e&&(r.Suo(i,a.h4,5),r.Suo(i,a.$_,5),r.Suo(i,a.jx,4)),2&e){let e;r.iGM(e=r.CRH())&&(t.headerFacet=e.first),r.iGM(e=r.CRH())&&(t.footerFacet=e.first),r.iGM(e=r.CRH())&&(t.templates=e)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:b,decls:9,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(e,t){1&e&&(r.F$t(y),r.TgZ(0,"div",0),r.YNc(1,d,3,1,"div",1),r.TgZ(2,"div",2),r.YNc(3,p,3,2,"div",3),r.YNc(4,g,3,2,"div",4),r.TgZ(5,"div",5),r.Hsn(6),r.YNc(7,u,1,0,"ng-container",6),r.qZA(),r.YNc(8,f,3,1,"div",7),r.qZA(),r.qZA()),2&e&&(r.Tol(t.styleClass),r.Q6J("ngClass","p-card p-component")("ngStyle",t.style),r.xp6(1),r.Q6J("ngIf",t.headerFacet||t.headerTemplate),r.xp6(2),r.Q6J("ngIf",t.header||t.titleTemplate),r.xp6(1),r.Q6J("ngIf",t.subheader||t.subtitleTemplate),r.xp6(3),r.Q6J("ngTemplateOutlet",t.contentTemplate),r.xp6(1),r.Q6J("ngIf",t.footerFacet||t.footerTemplate))},directives:[n.mk,n.PC,n.O5,n.tP],styles:[".p-card-header img{width:100%}"],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.ez],a.m8]}),e})(),C=(()=>{class e{static addClass(e,t){e.classList?e.classList.add(t):e.className+=" "+t}static addMultipleClasses(e,t){if(e.classList){let i=t.trim().split(" ");for(let t=0;t<i.length;t++)e.classList.add(i[t])}else{let i=t.split(" ");for(let t=0;t<i.length;t++)e.className+=" "+i[t]}}static removeClass(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}static hasClass(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return e?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,i=0;for(var n=0;n<t.length;n++){if(t[n]==e)return i;1==t[n].nodeType&&i++}return-1}static indexWithinGroup(e,t){let i=e.parentNode?e.parentNode.childNodes:[],n=0;for(var o=0;o<i.length;o++){if(i[o]==e)return n;i[o].attributes&&i[o].attributes[t]&&1==i[o].nodeType&&n++}return-1}static relativePosition(e,t){let i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e);const n=t.offsetHeight,o=t.getBoundingClientRect(),r=this.getViewport();let l,a;o.top+n+i.height>r.height?(l=-1*i.height,e.style.transformOrigin="bottom",o.top+l<0&&(l=-1*o.top)):(l=n,e.style.transformOrigin="top"),a=i.width>r.width?-1*o.left:o.left+i.width>r.width?-1*(o.left+i.width-r.width):0,e.style.top=l+"px",e.style.left=a+"px"}static absolutePosition(e,t){let i,n,o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=o.height,l=o.width,a=t.offsetHeight,s=t.offsetWidth,d=t.getBoundingClientRect(),c=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport();d.top+a+r>h.height?(i=d.top+c-r,e.style.transformOrigin="bottom",i<0&&(i=c)):(i=a+d.top+c,e.style.transformOrigin="top"),n=d.left+l>h.width?Math.max(0,d.left+p+s-l):d.left+p,e.style.top=i+"px",e.style.left=n+"px"}static getParents(e,t=[]){return null===e.parentNode?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let i=this.getParents(e);const n=/(auto|scroll)/,o=e=>{let t=window.getComputedStyle(e,null);return n.test(t.getPropertyValue("overflow"))||n.test(t.getPropertyValue("overflowX"))||n.test(t.getPropertyValue("overflowY"))};for(let e of i){let i=1===e.nodeType&&e.dataset.scrollselectors;if(i){let n=i.split(",");for(let i of n){let n=this.findSingle(e,i);n&&o(n)&&t.push(n)}}9!==e.nodeType&&o(e)&&t.push(e)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=i?parseFloat(i):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,l=e.getBoundingClientRect(),a=t.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-r,s=e.scrollTop,d=e.clientHeight,c=this.getOuterHeight(t);a<0?e.scrollTop=s+a:a+c>d&&(e.scrollTop=s+a-d+c)}static fadeIn(e,t){e.style.opacity=0;let i=+new Date,n=0,o=function(){n=+e.style.opacity.replace(",",".")+((new Date).getTime()-i)/t,e.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}static fadeOut(e,t){var i=1,n=50/t;let o=setInterval(()=>{(i-=n)<=0&&(i=0,clearInterval(o)),e.style.opacity=i},50)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var i=Element.prototype;return(i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(e){return-1!==[].indexOf.call(document.querySelectorAll(e),this)}).call(e,t)}static getOuterWidth(e,t){let i=e.offsetWidth;if(t){let t=getComputedStyle(e);i+=parseFloat(t.marginLeft)+parseFloat(t.marginRight)}return i}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static width(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),t}static getOuterHeight(e,t){let i=e.offsetHeight;if(t){let t=getComputedStyle(e);i+=parseFloat(t.marginTop)+parseFloat(t.marginBottom)}return i}static getHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}static getViewport(){let e=window,t=document,i=t.documentElement,n=t.getElementsByTagName("body")[0];return{width:e.innerWidth||i.clientWidth||n.clientWidth,height:e.innerHeight||i.clientHeight||n.clientHeight}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(t,e)}static getUserAgent(){return navigator.userAgent}static isIE(){var e=window.navigator.userAgent;return e.indexOf("MSIE ")>0||(e.indexOf("Trident/")>0?(e.indexOf("rv:"),!0):e.indexOf("Edge/")>0)}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else{if(!t.el||!t.el.nativeElement)throw"Cannot append "+t+" to "+e;t.el.nativeElement.appendChild(e)}}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else{if(!t.el||!t.el.nativeElement)throw"Cannot remove "+e+" from "+t;t.el.nativeElement.removeChild(e)}}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}{if(null!==this.calculatedScrollbarWidth)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}}static calculateScrollbarHeight(){if(null!==this.calculatedScrollbarHeight)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,i){e[t].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(e){}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return null===e.offsetParent}static getFocusableElements(t){let i=e.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'),n=[];for(let e of i)"none"!=getComputedStyle(e).display&&"hidden"!=getComputedStyle(e).visibility&&n.push(e);return n}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}}return e.zindex=1e3,e.calculatedScrollbarWidth=null,e.calculatedScrollbarHeight=null,e})(),T=(()=>{class e{constructor(e,t,i){this.el=e,this.zone=t,this.config=i}ngAfterViewInit(){this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.onMouseDown.bind(this),this.el.nativeElement.addEventListener("mousedown",this.mouseDownListener)})}onMouseDown(e){let t=this.getInk();if(!t||"none"===getComputedStyle(t,null).display)return;if(C.removeClass(t,"p-ink-active"),!C.getHeight(t)&&!C.getWidth(t)){let e=Math.max(C.getOuterWidth(this.el.nativeElement),C.getOuterHeight(this.el.nativeElement));t.style.height=e+"px",t.style.width=e+"px"}let i=C.getOffset(this.el.nativeElement),n=e.pageX-i.left+document.body.scrollTop-C.getWidth(t)/2,o=e.pageY-i.top+document.body.scrollLeft-C.getHeight(t)/2;t.style.top=o+"px",t.style.left=n+"px",C.addClass(t,"p-ink-active")}getInk(){for(let e=0;e<this.el.nativeElement.children.length;e++)if(-1!==this.el.nativeElement.children[e].className.indexOf("p-ink"))return this.el.nativeElement.children[e];return null}resetInk(){let e=this.getInk();e&&C.removeClass(e,"p-ink-active")}onAnimationEnd(e){C.removeClass(e.currentTarget,"p-ink-active")}create(){let e=document.createElement("span");e.className="p-ink",this.el.nativeElement.appendChild(e),this.animationListener=this.onAnimationEnd.bind(this),e.addEventListener("animationend",this.animationListener)}remove(){let e=this.getInk();e&&(this.el.nativeElement.removeEventListener("mousedown",this.mouseDownListener),e.removeEventListener("animationend",this.animationListener),C.removeElement(e))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.SBq),r.Y36(r.R0b),r.Y36(a.b4,8))},e.\u0275dir=r.lG2({type:e,selectors:[["","pRipple",""]],hostVars:2,hostBindings:function(e,t){2&e&&r.ekj("p-ripple",!0)}}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.ez]]}),e})();function S(e,t){if(1&e&&r._UZ(0,"img",12),2&e){const e=r.oxw().$implicit;r.Q6J("src",e.img,r.LSH)}}const k=function(){return{width:"95vw","margin-bottom":"2px"}};function A(e,t){if(1&e&&(r.TgZ(0,"p-card",10),r.ALo(1,"titlecase"),r.YNc(2,S,1,1,"ng-template",11),r.qZA()),2&e){const e=t.$implicit;r.Akn(r.DdM(5,k)),r.Q6J("header",r.lcZ(1,3,e.title))}}function O(e,t){if(1&e&&r._UZ(0,"img",12),2&e){const e=r.oxw().$implicit;r.Q6J("src",e.img,r.LSH)}}const E=function(){return{width:"80vw","margin-bottom":"2em"}};function H(e,t){if(1&e&&(r.TgZ(0,"p-card",13),r.ALo(1,"titlecase"),r.YNc(2,O,1,1,"ng-template",14),r.qZA()),2&e){const e=t.$implicit;r.Akn(r.DdM(5,E)),r.Q6J("header",r.lcZ(1,3,e.title))}}function L(e,t){if(1&e&&r._UZ(0,"img",12),2&e){const e=r.oxw().$implicit;r.Q6J("src",e.img,r.LSH)}}const F=function(){return{width:"50vw","margin-bottom":"2em"}};function Z(e,t){if(1&e&&(r.TgZ(0,"p-card",13),r.ALo(1,"titlecase"),r.YNc(2,L,1,1,"ng-template",14),r.qZA()),2&e){const e=t.$implicit;r.Akn(r.DdM(5,F)),r.Q6J("header",r.lcZ(1,3,e.title))}}const W=[{path:"",component:(()=>{class e{constructor(e){this.service=e,this.artiPhoto=[],this.artiPhoto=e.getArtiPhoto()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(l.v))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-arti"]],decls:17,vars:3,consts:[["name","theme-color","content","#520044"],["routerLink","/Home","routerLinkActive","active"],["routerLink","/event","routerLinkActive","active"],["routerLink","/Arti","routerLinkActive","active"],["routerLink","#","routerLinkActive","active"],["id","cardhideMobile"],["class","card","pRipple","","class","purple",3,"header","style",4,"ngFor","ngForOf"],["id","cardhideTab"],["class","card",3,"header","style",4,"ngFor","ngForOf"],["id","cardhideDekstop"],["pRipple","",1,"purple",3,"header"],["pTemplate","header","styleClass","dark-panel"],["alt","Card",3,"src"],[1,"card",3,"header"],["pTemplate","header"]],template:function(e,t){1&e&&(r._UZ(0,"meta",0),r.TgZ(1,"nav"),r.TgZ(2,"span",1),r._uU(3,"Home "),r.qZA(),r.TgZ(4,"span",2),r._uU(5,"Event"),r.qZA(),r.TgZ(6,"span",3),r._uU(7,"Arti "),r.qZA(),r.TgZ(8,"span",4),r._uU(9,"Donation"),r.qZA(),r.qZA(),r._UZ(10,"div"),r.TgZ(11,"div",5),r.YNc(12,A,3,6,"p-card",6),r.qZA(),r.TgZ(13,"div",7),r.YNc(14,H,3,6,"p-card",8),r.qZA(),r.TgZ(15,"div",9),r.YNc(16,Z,3,6,"p-card",8),r.qZA()),2&e&&(r.xp6(12),r.Q6J("ngForOf",t.artiPhoto),r.xp6(2),r.Q6J("ngForOf",t.artiPhoto),r.xp6(2),r.Q6J("ngForOf",t.artiPhoto))},directives:[o.rH,o.Od,n.sg,w,T,a.jx],pipes:[n.rS],styles:["nav[_ngcontent-%COMP%]{background-color:#520044}p-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;border:none;margin-top:25px}[_nghost-%COMP%]     .p-card .p-card-content{padding:0!important}[_nghost-%COMP%]     .p-card .p-card-title{font-family:Mirza,cursive;color:#000;margin-bottom:0;-webkit-user-select:none;user-select:none;text-align:center}[_nghost-%COMP%]     .p-ripple.purple .p-ink{background:#ffbee433}[_nghost-%COMP%]     .p-card .p-card-body{padding:7px 0 0;margin:0}@media only screen and (min-width: 769px){#cardhideMobile[_ngcontent-%COMP%], #cardhideTab[_ngcontent-%COMP%]{display:none}#cardhideDekstop[_ngcontent-%COMP%]{display:block}}@media only screen and (max-width: 769px){#cardhideMobile[_ngcontent-%COMP%]{display:none}#cardhideTab[_ngcontent-%COMP%]{display:block}#cardhideDekstop[_ngcontent-%COMP%]{display:none}}@media only screen and (max-width: 426px){#cardhideMobile[_ngcontent-%COMP%]{display:block}#cardhideDekstop[_ngcontent-%COMP%], #cardhideTab[_ngcontent-%COMP%]{display:none}}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.Bz.forChild(W)],o.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.ez,M,v,x]]}),e})()}}]);