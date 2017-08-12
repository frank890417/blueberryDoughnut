webpackJsonp([1],Array(49).concat([function(e,t,s){"use strict";function n(e,t){var s=e,i=e.toUpperCase(),a=t,c=[],o="",l=!1,u=function(){return o=new Date,new Promise(function(e){localStorage.setItem(i,JSON.stringify(c)),localStorage.setItem(i+"_LASTUPDATED",String(o)),e(d())})},d=function(){l=!0},v=function(){return new Promise(function(e){var t=localStorage.getItem(i+"_LASTUPDATED");if(o=t,t){var s=Number(new Date(t));r.default.CustomServices.invoke("FilmService","hasNewData",s).then(function(t){if(t)e(f());else{var s=localStorage.getItem(i);c=JSON.parse(s),e(d())}})}else e(f())})},f=function(){var e=r.default.DataQueryBuilder.create();return a&&e.setWhereClause("ownerId = '"+r.default.UserService.loggedInUser()+"'"),new Promise(function(t){r.default.Data.of(s).find(e).then(function(e){c=e,t(u())})})};Object.defineProperty(this,e,{get:function(){return l?c:null},set:function(){return null}}),n.prototype.manualUpdate=function(){return f()},function(){return new Promise(function(e,t){e(localStorage.getItem(i)?v():f())})}().then(function(){l=!0}).catch(function(e){console.error(e)})}Object.defineProperty(t,"__esModule",{value:!0});var i=s(24),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=n},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Lang=void 0;var r=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),a=s(65),c=n(a),o=s(67),l=n(o),u=s(66),d=(n(u),function e(t,s,n,r){i(this,e),this.defined="",this.fits=[],this.resource={},this.default=!1,this.defined=t,this.fits=s,this.resource=n,this.default=r}),v=t.Lang=function(){function e(){i(this,e),this.userLang="",this.selectedLang="",this.definedLanguages=[],this.resource=!1,this.userLang=navigator.language,this.definedLanguages.push(new d("zh-TW",["zh-TW","zh-CN","zh-HK","zh-SG"],l.default,!1)),this.definedLanguages.push(new d("en-US",[],c.default,!0)),console.log(this.definedLanguages),this.loadDef(),window.LANGDEF=this}return r(e,[{key:"selectLang",value:function(e){if("EN"===e)this.userLang="en-US";else{if("ZH"!==e)throw new Error("[LANG] Desired language not supported: "+e);this.userLang="zh-TW"}this.loadDef()}},{key:"loadDef",value:function(){for(var e,t=0;t<this.definedLanguages.length;t++){this.definedLanguages[t].default&&(e=this.definedLanguages[t]);for(var s=0;s<this.definedLanguages[t].fits.length;s++)if(console.log("matching language: "+this.userLang+" v.s. "+this.definedLanguages[t].fits[s]),this.userLang===this.definedLanguages[t].fits[s])return this.resource=this.definedLanguages[t].resource,this.selectedLang=this.definedLanguages[t].defined,console.log("[LANG] Using language: "+this.selectedLang),window.LANG=this.resource,void(window.LANG.CURRENT_LANG=this.selectedLang)}this.resource=e.resource,console.log("[LANG] Using default language"),this.selectedLang=e.defined,window.LANG=this.resource,window.LANG.CURRENT_LANG=this.selectedLang}}]),e}();t.default=v},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(25),r=n(i),a=s(140),c=n(a),o=s(124),l=n(o);r.default.use(c.default),t.default=new c.default({routes:[{path:"/",component:l.default,props:function(e){return{contents:e}}}]})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(26),i=function(e){return e&&e.__esModule?e:{default:e}}(n),r=new i.default.store({state:{count:0},mutations:{increment:function(e){e.count++}}});t.default=r},,,function(e,t,s){s(72);var n=s(4)(s(56),s(131),null,null);e.exports=n.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"App",components:{},props:{showToolbar:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!1}},watch:{$route:function(e,t){console.warn("[App] Route changed:"),this.handleRouteChange(e)}},created:function(){window.app=this},mounted:function(){this.handleRouteChange(this.$route)},methods:{handleRouteChange:function(e){-1!=e.path.indexOf("player")?this.showToolbar=!1:this.showToolbar=!0}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HomeMenu",data:function(){return{}},props:{contents:{required:!1,type:Object}},methods:{getTranslation:function(e){if(-1!=e.indexOf(".")){for(var t=e.split("."),s=LANG[t[0]],n=1;n<t.length;++n)s=s[t[n]];return s}return LANG[e]},closeMenu:function(){this.$emit("closeMenu","noAction")},handleMouseMove:function(e){var t=this,s=e.clientX/window.innerWidth,n=e.clientY/window.innerHeight;requestAnimationFrame(function(){t.$refs.menuDisplay.style.transform="translate3d("+20*s+"px,"+28*n+"px, 0)",t.$refs.menuShadow.style.transform="translate3d("+10*s+"px,"+15*n+"px, 0)"})},selectEN:function(){this.$emit("selectLang","EN"),this.$forceUpdate()},selectZH:function(){this.$emit("selectLang","ZH"),this.$forceUpdate()}},mounted:function(){window.addEventListener("mousemove",this.handleMouseMove),window.HomeMenu=this},beforeDestroy:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.HomeMenu=null}}},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(125),r=n(i),a=s(126),c=n(a),o=s(127),l=n(o),u=s(128),d=n(u),v=s(129),f=n(v),h=s(130),_=n(h),C=s(123),m=n(C);t.default={props:{contents:{required:!1,type:Object},hidingToolbar:{type:Boolean,default:!1}},data:function(){for(var e={currentSection:1,allowScrolling:!0,rightNavItems:[],menuOpened:!1},t=0;t<36;++t){e.rightNavItems.push({x1:"56",y1:26*t,x2:"64",y2:26*t})}return e},components:{HomeMenu:m.default,Circle1:r.default,HomeSection1:c.default,HomeSection2:l.default,HomeSection3:d.default,HomeSection4:f.default,HomeSection5:_.default},computed:{pageLogoClass:function(){switch(this.currentSection){case 1:return"pageLogo";case 4:return"pageLogo up inverted";default:return"pageLogo up"}},heroTitleClass:function(){return 1===this.currentSection?"heroTitle":"heroTitle hide"},menuButtonClass:function(){return 1===this.currentSection?"onCorners topRight menuButton hideNoPointer":"onCorners topRight menuButton"},menuDisplayClass:function(){return this.menuOpened?"persistent menuDisplay":"persistent menuDisplay hideNoPointer"},langSelectClass:function(){return 1===this.currentSection?"onCorners bottomLeft langSelect":"onCorners bottomLeft langSelect hideNoPointer"},tagline1Class:function(){return 1===this.currentSection?"onCorners bottomLeft tagline1":"onCorners bottomLeft tagline1 hideNoPointer"},indicatorClass:function(){return this.currentSection,"indicator"},centredInfoClass:function(){return 3===this.currentSection?"centredInfo":"centredInfo hideNoPointer"},newsInfoClass:function(){return 4===this.currentSection?"newsInfo":"newsInfo hideNoPointer"},aboutSectionClass:function(){return 5===this.currentSection?"aboutSection":"aboutSection hideNoPointer"},titularBannerClass:function(){return 1===this.currentSection?"titularBanner":"titularBanner hide"},giantQuoteClass:function(){return 2===this.currentSection?"onCorners bottomLeft giantQuote":"onCorners bottomLeft giantQuote hideNoPointer"},centreLineWrapperClass:function(){return 1===this.currentSection||2===this.currentSection?"centreLineWrapper":"centreLineWrapper hideNoPointer"},bottomNavMouseClass:function(){return 1===this.currentSection?"bottomNavMouse":"bottomNavMouse hide"},rightNavMetreClass:function(){return 1===this.currentSection?"rightNavMetre":"rightNavMetre hide"},centredCircleClass1:function(){switch(this.currentSection){case 1:return"circles";case 2:default:return"circles toLeft"}},centredCircleClass2:function(){switch(this.currentSection){case 1:return"circles";case 2:default:return"circles mergeLeft"}},centredCircleClass3:function(){switch(this.currentSection){case 1:return"circles";case 2:default:return"circles scaleOut"}},centredCircleClass4:function(){switch(this.currentSection){case 1:return"circles";case 2:default:return"circles mergeRight"}},centredCircleClass5:function(){switch(this.currentSection){case 1:return"circles";case 2:default:return"circles toRight"}},motionCircleMainClass:function(){switch(this.currentSection){case 1:return"motionCircleMain one";case 2:return"motionCircleMain two";case 3:return"motionCircleMain three";case 4:return"motionCircleMain four";case 5:return"motionCircleMain five"}},motionCircle2Class:function(){switch(this.currentSection){case 1:return"motionCircle2 hide";case 2:return"motionCircle2 shown";case 3:return"motionCircle2 expand";case 4:return"motionCircle2 four";case 5:return"motionCircle2 five"}},motionCircle3Class:function(){switch(this.currentSection){case 1:return"motionCircle3 hide";case 2:return"motionCircle3 shown";case 3:return"motionCircle3 expand";case 4:return"motionCircle3 four";case 5:return"motionCircle3 five"}},motionCircle4Class:function(){switch(this.currentSection){case 1:return"motionCircle4 hide";case 2:return"motionCircle4 shown";case 3:return"motionCircle4 expand";case 4:return"motionCircle4 four";case 5:return"motionCircle4 five"}},motionCircle5Class:function(){switch(this.currentSection){case 1:case 2:case 3:case 4:case 5:return""}},leftSmallCircleClass:function(){switch(this.currentSection){case 1:return"smallCircle left hide";case 2:return"smallCircle left";case 3:case 4:return"smallCircle left three";case 5:return"smallCircle left three hide"}},rightSmallCircleClass:function(){switch(this.currentSection){case 1:return"smallCircle right hide";case 2:return"smallCircle right";case 3:case 4:return"smallCircle right three";case 5:return"smallCircle right three hide"}}},methods:{getTranslation:function(e){if(-1!=e.indexOf(".")){for(var t=e.split("."),s=LANG[t[0]],n=1;n<t.length;++n)s=s[t[n]];return s}return LANG[e]},handleScroll:function(e){},handleMouseWheel:function(e){var t=this;if(e.preventDefault(),this.allowScrolling)if(e.deltaY>0){if(!(this.currentSection<5))return;++this.currentSection,this.allowScrolling=!1;var s=this.$refs["section"+this.currentSection].$el.offsetTop;$("body").velocity("scroll",{duration:800,easing:"easeInOutCirc",offset:s+"px",complete:function(){setTimeout(function(){t.allowScrolling=!0},500)}})}else{if(!(this.currentSection>1))return;--this.currentSection,this.allowScrolling=!1;var n=this.$refs["section"+this.currentSection].$el.offsetTop;$("body").velocity("scroll",{duration:800,easing:"easeInOutCirc",offset:n+"px",complete:function(){setTimeout(function(){t.allowScrolling=!0},500)}})}},selectEN:function(){console.log("selectEN() called")},selectZH:function(){console.log("selectZH() called")},indicatorCircleClass:function(e){switch(e){case 1:return 1===this.currentSection?"circle one default":"circle one";case 2:return 1===this.currentSection?"circle two hide":2===this.currentSection?"circle two focus":"circle two";case 3:return 1===this.currentSection?"circle three hide":3===this.currentSection?"circle three focus":"circle three";case 4:return 1===this.currentSection?"circle four hide":4===this.currentSection?"circle four focus":"circle four";case 5:return 1===this.currentSection?"circle five hide":5===this.currentSection?"circle five focus":"circle five"}},closeMenuHandler:function(e){console.log("closeMenuHandler() called: "+e),this.menuOpened=!1},selectLangHandler:function(e){LANGDEF.selectLang(e),this.$forceUpdate()}},mounted:function(){document.body.scrollTop=0,window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousewheel",this.handleMouseWheel),window.scrollTo(0,0),window.home=this},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousewheel",this.handleMouseWheel)},watch:{currentSection:function(e,t){console.log("[HomePage] Scrolling to Section #"+e)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Circle1",data:function(){return{}},props:{currentSection:{required:!1,type:Object},CSSclass:{type:String}},methods:{}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"default",data:function(){return{}},props:{contents:{required:!1,type:Object}},methods:{getTranslation:function(e){if(-1!=e.indexOf(".")){for(var t=e.split("."),s=LANG[t[0]],n=1;n<t.length;++n)s=s[t[n]];return s}return LANG[e]},getRandom:function(){return"Original passed contents: "+this.$props.contents+"random number "+100*Math.random()}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HomeSection2",data:function(){return{}},props:{contents:{required:!1,type:Object}},methods:{getTranslation:function(e){if(-1!=e.indexOf(".")){for(var t=e.split("."),s=LANG[t[0]],n=1;n<t.length;++n)s=s[t[n]];return s}return LANG[e]},getRandom:function(){return"Original passed contents: "+this.$props.contents+"random number "+100*Math.random()}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HomeSection3",data:function(){return{}},props:{contents:{required:!1,type:Object}},methods:{getTranslation:function(e){if(-1!=e.indexOf(".")){for(var t=e.split("."),s=LANG[t[0]],n=1;n<t.length;++n)s=s[t[n]];return s}return LANG[e]},getRandom:function(){return"Original passed contents: "+this.$props.contents+"random number "+100*Math.random()}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HomeSection4",data:function(){return{}},props:{contents:{required:!1,type:Object}},methods:{getTranslation:function(e){if(-1!=e.indexOf(".")){for(var t=e.split("."),s=LANG[t[0]],n=1;n<t.length;++n)s=s[t[n]];return s}return LANG[e]},getRandom:function(){return"Original passed contents: "+this.$props.contents+"random number "+100*Math.random()}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HomeSection5",data:function(){return{}},props:{contents:{required:!1,type:Object}},methods:{getTranslation:function(e){if(-1!=e.indexOf(".")){for(var t=e.split("."),s=LANG[t[0]],n=1;n<t.length;++n)s=s[t[n]];return s}return LANG[e]}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.Strings={ID:"en_US",MENU:{INTRO:"Intro",CENTRE:"Labs",COURSES:"Courses",SERVICES:"Services",NEWS:"News",QA:"Q&A"}};t.default=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["af","sq","ar-SA","ar-IQ","ar-EG","ar-LY","ar-DZ","ar-MA","ar-TN","ar-OM","ar-YE","ar-SY","ar-JO","ar-LB","ar-KW","ar-AE","ar-BH","ar-QA","eu","bg","be","ca","zh-TW","zh-CN","zh-HK","zh-SG","hr","cs","da","nl","nl-BE","en","en-US","en-EG","en-AU","en-GB","en-CA","en-NZ","en-IE","en-ZA","en-JM","en-BZ","en-TT","et","fo","fa","fi","fr","fr-BE","fr-CA","fr-CH","fr-LU","gd","gd-IE","de","de-CH","de-AT","de-LU","de-LI","el","he","hi","hu","is","id","it","it-CH","ja","ko","lv","lt","mk","mt","no","pl","pt-BR","pt","rm","ro","ro-MO","ru","ru-MI","sz","sr","sk","sl","sb","es","es-AR","es-GT","es-CR","es-PA","es-DO","es-MX","es-VE","es-CO","es-PE","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR","sx","sv","sv-FI","th","ts","tn","tr","uk","ur","ve","vi","xh","ji","zu"];t.default=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.Strings={ID:"zh_TW",MENU:{INTRO:"簡介",CENTRE:"實作中心",COURSES:"課程",SERVICES:"服務",NEWS:"消息",QA:"問答"}};t.default=n},function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=s(25),r=n(i),a=s(54),c=n(a),o=s(26),l=n(o),u=s(55),d=n(u),v=s(24),f=n(v),h=s(53),_=n(h),C=s(51),m=n(C),p=s(52),g=n(p),S=s(50),w=s(49),x=n(w);r.default.config.productionTip=!1,r.default.use(c.default),r.default.use(l.default),window.addEventListener("load",function(){new S.Lang,new r.default({el:"#app",store:g.default,router:m.default,template:"<App/>",components:{App:d.default}}),console.log("Vue initialised"),f.default.initApp("FF01D8BC-F950-E491-FF67-D30C3CA26800","95C6FA43-5B67-1E67-FF96-65B4DB73E000"),console.log("Backendless initialised");var e={apiKey:"AIzaSyBK4ltMPzMemFXT8qB-aN651xPpDr4pLW4",messagingSenderId:"639638102085"},t=_.default.initializeApp(e);window.fbApp=t,window.apiReady=!0,window.CacheMachine=x.default})},,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,s){s(73);var n=s(4)(s(57),s(132),"data-v-1ba6b177",null);e.exports=n.exports},function(e,t,s){s(80);var n=s(4)(s(58),s(139),"data-v-72dde6a7",null);e.exports=n.exports},function(e,t,s){s(79);var n=s(4)(s(59),s(138),"data-v-2f505aec",null);e.exports=n.exports},function(e,t,s){s(74);var n=s(4)(s(60),s(133),"data-v-2e7fcdc7",null);e.exports=n.exports},function(e,t,s){s(75);var n=s(4)(s(61),s(134),"data-v-2e8de548",null);e.exports=n.exports},function(e,t,s){s(76);var n=s(4)(s(62),s(135),"data-v-2e9bfcc9",null);e.exports=n.exports},function(e,t,s){s(77);var n=s(4)(s(63),s(136),"data-v-2eaa144a",null);e.exports=n.exports},function(e,t,s){s(78);var n=s(4)(s(64),s(137),"data-v-2eb82bcb",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"page-fade",mode:"out-in"}},[s("router-view")],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"float"},[s("div",{staticClass:"onCorners topRight",on:{click:e.closeMenu}},[s("svg",{staticClass:"menuIcon",style:{width:"40px",height:"60px"}},[s("line",{staticClass:"iconLine",attrs:{x1:"0",y1:"10",x2:"28",y2:"38"}}),e._v(" "),s("line",{staticClass:"iconLine",attrs:{x1:"0",y1:"38",x2:"28",y2:"10"}})])]),e._v(" "),s("div",{ref:"menuShadow",staticClass:"menuShadow"},[s("div",{staticClass:"item"},[e._v(e._s(e.getTranslation("MENU.INTRO")))]),e._v(" "),s("div",{staticClass:"item"},[e._v(e._s(e.getTranslation("MENU.CENTRE")))]),e._v(" "),s("div",{staticClass:"item"},[e._v(e._s(e.getTranslation("MENU.COURSES")))]),e._v(" "),s("div",{staticClass:"item"},[e._v(e._s(e.getTranslation("MENU.SERVICES")))]),e._v(" "),s("div",{staticClass:"item"},[e._v(e._s(e.getTranslation("MENU.NEWS")))]),e._v(" "),s("div",{staticClass:"item"},[e._v(e._s(e.getTranslation("MENU.QA")))])]),e._v(" "),s("div",{ref:"menuDisplay",staticClass:"menuDisplay"},[s("div",{staticClass:"item"},[e._v("_"+e._s(e.getTranslation("MENU.INTRO")))]),e._v(" "),s("div",{staticClass:"item"},[e._v("_"+e._s(e.getTranslation("MENU.CENTRE")))]),e._v(" "),s("div",{staticClass:"item"},[e._v("_"+e._s(e.getTranslation("MENU.COURSES")))]),e._v(" "),s("div",{staticClass:"item"},[e._v("_"+e._s(e.getTranslation("MENU.SERVICES")))]),e._v(" "),s("div",{staticClass:"item"},[e._v("_"+e._s(e.getTranslation("MENU.NEWS")))]),e._v(" "),s("div",{staticClass:"item"},[e._v("_"+e._s(e.getTranslation("MENU.QA")))])]),e._v(" "),s("div",{staticClass:"onCorners bottomLeft langSelect"},[s("span",{staticClass:"label"},[s("span",{staticClass:"selector",on:{click:e.selectEN}},[e._v("EN")]),e._v(" / "),s("span",{staticClass:"selector",on:{click:e.selectZH}},[e._v("中文")])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-section"},[s("div",{staticClass:"content"},[s("div",{staticClass:"onCorners topLeft"}),e._v(" "),s("div",{staticClass:"onCorners topRight"},[s("img",{style:{width:"200px"},attrs:{src:"assets/index__sectionHeroText.svg"}})]),e._v(" "),s("div",{staticClass:"onCorners bottomLeft"}),e._v(" "),s("div",{staticClass:"onCorners bottomRight"})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"page-section"})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"page-section"})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"page-section"})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"page-section"})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("svg",{class:e.CSSclass,attrs:{id:"d6d778f5-c6c8-464d-8851-a5082b38f55d"}},[s("title",[e._v("index_")]),e._v(" "),s("circle",{staticClass:"8ad1eef0-e742-4ab8-9e88-95e5368ec3db",attrs:{cx:"142.5",cy:"142.5",r:"136.5"}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"home",staticClass:"page",attrs:{id:"homePage"}},[s("HomeSection1",{ref:"section1"}),e._v(" "),s("HomeSection2",{ref:"section2"}),e._v(" "),s("HomeSection3",{ref:"section3"}),e._v(" "),s("HomeSection4",{ref:"section4"}),e._v(" "),s("HomeSection5",{ref:"section5"}),e._v(" "),s("div",{staticClass:"persistent"},[s("div",{staticClass:"float"},[s("div",{staticClass:"motionCircleWrapper"},[s("svg",{staticClass:"motionCircle"},[s("circle",{class:e.motionCircleMainClass,style:{stroke:"#FFF",strokeWidth:"1px"},attrs:{"stroke-dasharray":"6,5"}}),e._v(" "),s("circle",{class:e.motionCircle2Class,style:{stroke:"#FFF",strokeWidth:"1px"},attrs:{"stroke-dasharray":"6,5"}}),e._v(" "),s("circle",{class:e.motionCircle3Class}),e._v(" "),s("circle",{class:e.motionCircle4Class}),e._v(" "),s("circle",{class:e.motionCircle5Class})])]),e._v(" "),s("div",{staticClass:"onCorners topLeft"},[s("img",{class:e.heroTitleClass,attrs:{src:"assets/index__heroTitle.svg"}}),e._v(" "),s("div",{class:e.titularBannerClass},[s("div",{staticClass:"main"},[e._v("REACTION")]),e._v(" "),s("div",{staticClass:"secondary"},[e._v("OF CREATIVITY")])])]),e._v(" "),s("div",{staticClass:"onCorners topLeft"},[s("img",{class:e.pageLogoClass,attrs:{src:"assets/index__pageLogo.svg"}})]),e._v(" "),s("div",{class:e.tagline1Class},[s("span",[e._v("創意，是永無止境探究世界的真實面貌")]),e._v(" "),s("div",{staticClass:"decor"})]),e._v(" "),s("div",{class:e.giantQuoteClass},[s("img",{style:{width:"60px"},attrs:{src:"assets/index__iconQuoteStart.svg"}}),e._v(" "),s("div",{staticClass:"text"},[s("span",{staticClass:"header"},[e._v("全台灣第一個虛擬學院")]),s("br"),e._v(" "),s("span",{staticClass:"header"},[e._v("創造跨領域教學環境")]),e._v(" "),s("div",{style:{margin:"15px 0 15px 0",width:"90px",borderBottom:"4px solid #FF5559"}}),e._v(" "),s("span",[e._v("在創新創業風氣興盛後，臺大覺察學校創新教育的不足，")]),s("br"),e._v(" "),s("span",[e._v("遂於2014年成立創新設計學院，並於2015年秋季正式授課。")])]),e._v(" "),s("img",{style:{width:"60px"},attrs:{src:"assets/index__iconQouteEnd.svg"}})]),e._v(" "),s("div",{class:e.langSelectClass},[s("img",{staticClass:"icon",attrs:{src:"assets/index__heroDoubleCircle.svg"}}),e._v(" "),s("span",{staticClass:"label"},[s("span",{staticClass:"selector",on:{click:e.selectEN}},[e._v("EN")]),e._v(" / "),s("span",{staticClass:"selector",on:{click:e.selectZH}},[e._v("中文")])])]),e._v(" "),s("div",{class:e.menuButtonClass,on:{click:function(t){e.menuOpened=!e.menuOpened}}},[s("svg",{staticClass:"menuIcon",style:{width:"40px",height:"60px"}},[s("line",{style:{stroke:"#FFF",strokeWidth:"3px"},attrs:{x1:"0",y1:"10",x2:"28",y2:"10"}}),e._v(" "),s("line",{style:{stroke:"#FFF",strokeWidth:"3px"},attrs:{x1:"0",y1:"22",x2:"28",y2:"22"}}),e._v(" "),s("line",{style:{stroke:"#FFF",strokeWidth:"3px"},attrs:{x1:"0",y1:"34",x2:"28",y2:"34"}})])]),e._v(" "),s("div",{staticClass:"centred",style:{pointerEvents:"none"}},[s("div",{class:e.centreLineWrapperClass},[s("svg",{ref:"centreLine",staticClass:"centreLine"},[s("line",{style:{stroke:"#FFF",strokeWidth:"2px"},attrs:{"stroke-dasharray":"6,5",x1:"0",y1:"0",x2:"100%",y2:"0"}}),e._v("/>\n                  ")])]),e._v(" "),s("img",{class:e.centredCircleClass1,attrs:{src:"assets/index__heroCir1.svg"}}),e._v(" "),s("img",{class:e.centredCircleClass2,attrs:{src:"assets/index__heroCir2.svg"}}),e._v(" "),s("img",{class:e.centredCircleClass3,attrs:{src:"assets/index__heroCir3.svg"}}),e._v(" "),s("img",{class:e.centredCircleClass4,attrs:{src:"assets/index__heroCir4.svg"}}),e._v(" "),s("img",{class:e.centredCircleClass5,attrs:{src:"assets/index__heroCir5.svg"}}),e._v(" "),s("div",{staticClass:"centredCircles"},[s("svg",{class:e.leftSmallCircleClass},[s("circle",{attrs:{cx:"27",cy:"27",fill:"#FF5559",r:"27"}})]),e._v(" "),s("svg",{class:e.rightSmallCircleClass},[s("circle",{attrs:{cx:"27",cy:"27",fill:"#FF5559",r:"27"}})])])]),e._v(" "),s("div",{class:e.bottomNavMouseClass},[s("img",{staticClass:"mouseIcon",attrs:{src:"assets/index__iconMouse.svg"}}),e._v(" "),s("div",{staticClass:"caption"},[e._v("EXPLORE")]),e._v(" "),s("img",{staticClass:"arrowDown",attrs:{src:"assets/index__iconArrowDown.svg"}})]),e._v(" "),s("div",{class:e.rightNavMetreClass},[s("svg",e._l(e.rightNavItems,function(e){return s("line",{attrs:{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"white"}})}))]),e._v(" "),s("div",{class:e.indicatorClass},[s("svg",[s("circle",{class:e.indicatorCircleClass(1)}),e._v(" "),s("circle",{class:e.indicatorCircleClass(2)}),e._v(" "),s("circle",{class:e.indicatorCircleClass(3)}),e._v(" "),s("circle",{class:e.indicatorCircleClass(4)}),e._v(" "),s("circle",{class:e.indicatorCircleClass(5)})])]),e._v(" "),s("div",{class:e.centredInfoClass},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2)]),e._v(" "),s("div",{class:e.newsInfoClass},[s("div",{staticClass:"onCorners topRight infoWrapper"},[s("div",{staticClass:"topRow"},[s("div",{staticClass:"newsItem top",style:{order:1}},[e._m(3),e._v(" "),e._m(4)])]),e._v(" "),s("div",{staticClass:"bottomRow"},[s("div",{staticClass:"newsItem",style:{order:2}},[e._m(5),e._v(" "),e._m(6)]),e._v(" "),s("div",{staticClass:"newsItem",style:{order:3}},[e._m(7),e._v(" "),e._m(8)]),e._v(" "),s("div",{staticClass:"newsItem more",style:{order:4}},[e._m(9)])])]),e._v(" "),e._m(10)]),e._v(" "),s("div",{class:e.aboutSectionClass},[e._m(11)])])]),e._v(" "),s("div",{class:e.menuDisplayClass},[s("HomeMenu",{on:{closeMenu:e.closeMenuHandler,selectLang:e.selectLangHandler}})],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"introWrapper"},[s("div",{staticClass:"contentLimiter"},[s("div",{staticClass:"upper"},[s("img",{attrs:{width:"90",src:"assets/index__iconFeature1.svg"}}),e._v(" "),s("div",{staticClass:"header"},[e._v("D-Act")]),e._v(" "),s("div",{staticClass:"sub"},[e._v("Sky is the limit to what the D-Act can offer.")]),e._v(" "),s("div",{staticClass:"text"},[e._v("以不同的形式，不同的議題，創造更多生活化的交流，帶動人潮與帶動人潮與溫度的匯聚，沖刷認知的堡壘。並在向前衝刺後留下寶貴的經驗。")])]),e._v(" "),s("div",{staticClass:"button"},[e._v("學院簡介")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"introWrapper"},[s("div",{staticClass:"contentLimiter"},[s("div",{staticClass:"upper"},[s("img",{attrs:{width:"90",src:"assets/index__iconFeature2.svg"}}),e._v(" "),s("div",{staticClass:"header"},[e._v("D-Course")]),e._v(" "),s("div",{staticClass:"sub"},[e._v("We have no answer. Find your own one.")]),e._v(" "),s("div",{staticClass:"text"},[e._v("洞悉真正的問題洞悉真正的問題，才能真的一勞永逸。而這份才能誰也不能給你，請自己來培養吧！")])]),e._v(" "),s("div",{staticClass:"button"},[e._v("學院課程")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"introWrapper"},[s("div",{staticClass:"contentLimiter"},[s("div",{staticClass:"upper"},[s("img",{attrs:{width:"90",src:"assets/index__iconFeature3.svg"}}),e._v(" "),s("div",{staticClass:"header"},[e._v("MakerSpace")]),e._v(" "),s("div",{staticClass:"sub"},[e._v('"Never Stop Trying"')]),e._v(" "),s("div",{staticClass:"text"},[e._v("親自動手實作，驗證設計，大師級的實作技術學習，以手作激發創意、從技藝汲取創新。")])]),e._v(" "),s("div",{staticClass:"button"},[e._v("實作中心")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"thumbnail"},[s("div",{staticClass:"imgWrapper"},[s("img",{attrs:{src:"http://dschool.ntu.edu.tw/assets/images/2017/07/01.jpg"}})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text"},[s("div",{staticClass:"time"},[e._v("2017-07-15")]),e._v(" "),s("div",{staticClass:"header"},[e._v("用一週的時間刨開心中對木工藝的愛")]),e._v(" "),s("div",{staticClass:"sub"}),e._v(" "),s("p",{staticClass:"intro"},[e._v("「動手做」，在台灣教育裡的缺席造成許多創新創意的空洞化，有鑑於此，帶領台大學生投入木工藝的領域，是D-School開課以來努力的方向。這一次非常感謝北科大W.School全心、全力的投入！由陳殿禮老師所帶領的團隊，從最初的課程設計，到全程課程的陪同與協助，到最後完美的成果發表。不僅提供完整的機械設備和環境，創造48小時的深刻體驗課程。")]),e._v(" "),s("div",{staticClass:"actions"},[s("div",{staticClass:"button"},[e._v("了解故事")]),e._v(" "),s("div",{staticClass:"button"},[e._v("報名活動")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"thumbnail"},[s("div",{staticClass:"imgWrapper"},[s("img",{attrs:{src:"http://dschool.ntu.edu.tw/assets/images/2017/06/052801.jpg"}})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text"},[s("div",{staticClass:"header"},[e._v("茶香之中人情更濃")]),e._v(" "),s("div",{staticClass:"sub"},[e._v("用樂音傳唱世代的記憶"),s("span",{staticClass:"time"},[e._v("2017-05-28")])]),e._v(" "),s("p",{staticClass:"intro"},[e._v("舞臺上 蔡佳芬老師悠悠長笛聲與吉他樂音中能夠聽見「殺青」時機械運作的聲響。彷彿坪林的茶農日常，透過聲音已描繪成形。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"thumbnail"},[s("div",{staticClass:"imgWrapper"},[s("img",{attrs:{src:"http://dschool.ntu.edu.tw/assets/images/2017/06/052801.jpg"}})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text"},[s("div",{staticClass:"header"},[e._v("茶香之中人情更濃")]),e._v(" "),s("div",{staticClass:"sub"},[e._v("用樂音傳唱世代的記憶"),s("span",{staticClass:"time"},[e._v("2017-05-28")])]),e._v(" "),s("p",{staticClass:"intro"},[e._v("舞臺上 蔡佳芬老師悠悠長笛聲與吉他樂音中能夠聽見「殺青」時機械運作的聲響。彷彿坪林的茶農日常，透過聲音已描繪成形。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("更多消息"),s("img",{attrs:{src:"assets/index__iconArrowRight.svg"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"onCorners topLeft"},[s("div",{staticClass:"header1"},[e._v("焦點碰撞")]),e._v(" "),s("div",{staticClass:"header2"},[e._v("INSPIRATION")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aboutWrapper"},[s("div",{staticClass:"left"},[s("img",{staticClass:"logo",attrs:{src:"assets/index__heroTitle.svg"}}),e._v(" "),s("div",{staticClass:"buttonSection"},[s("div",{staticClass:"button"},[e._v("探索學院")]),e._v(" "),s("div",{staticClass:"button"},[e._v("聯繫我們")])]),e._v(" "),s("div",{staticClass:"contactWrapper"},[s("div",{staticClass:"contactItem"},[s("div",{staticClass:"contactHeader"},[e._v("地址 Address")]),e._v(" "),s("div",{staticClass:"contactContent"},[e._v("10087 台北市中正區思源街18號卓越研究大樓四樓")])]),e._v(" "),s("div",{staticClass:"contactItem"},[s("div",{staticClass:"contactHeader"},[e._v("電話 Tel")]),e._v(" "),s("div",{staticClass:"contactContent"},[e._v("+886-2-3366-1869")])]),e._v(" "),s("div",{staticClass:"contactItem"},[s("div",{staticClass:"contactHeader"},[e._v("信箱 Email")]),e._v(" "),s("div",{staticClass:"contactContent"},[e._v("ntudschool@ntu.edu.tw")])])])]),e._v(" "),s("div",{staticClass:"right"},[s("img",{attrs:{src:"assets/index__iconFooter1.svg"}}),e._v(" "),s("img",{attrs:{src:"assets/index__iconFooter2.svg"}})])])}]}},,,,,function(e,t){}]),[68]);
//# sourceMappingURL=app.099acee4a9bedcd2606e.js.map