import{__awaiter,__generator}from"tslib";import{r as registerInstance,e as createEvent,c as writeTask,h,H as Host,i as getElement}from"./index-e806d1f6.js";import{b as getIonMode,c as config}from"./ionic-global-9d5c8ee3.js";import{h as clamp}from"./helpers-90f46169.js";import{c as createAnimation}from"./animation-54fe0237.js";import{e as deepReady}from"./index-1eeeab2e.js";import{g as getTimeGivenProgression}from"./cubic-bezier-eea9a7a9.js";import"./gesture-controller-31cb6bb9.js";import{createGesture}from"./index-f49d994d.js";import"./hardware-back-button-389954a0.js";import{B as BACKDROP,e as prepareOverlay,d as present,h as activeAnimations,f as dismiss,g as eventMethod}from"./overlays-7a1610a2.js";import{g as getClassMap}from"./theme-ff3fc52f.js";import{a as attachComponent,d as detachComponent}from"./framework-delegate-4584ab5a.js";var SwipeToCloseDefaults={MIN_PRESENTING_SCALE:.93};var createSwipeToCloseGesture=function(e,a,o){var t=e.offsetHeight;var r=false;var i=function(e){var a=e.event.target;if(a===null||!a.closest){return true}var o=a.closest("ion-content");if(o===null){return true}return false};var n=function(){a.progressStart(true,r?1:0)};var s=function(e){var o=clamp(1e-4,e.deltaY/t,.9999);a.progressStep(o)};var d=function(e){var i=e.velocityY;var n=clamp(1e-4,e.deltaY/t,.9999);var s=(e.deltaY+i*1e3)/t;var d=s>=.5;var m=d?-.001:.001;if(!d){a.easing("cubic-bezier(1, 0, 0.68, 0.28)");m+=getTimeGivenProgression([0,0],[1,0],[.68,.28],[1,1],n)[0]}else{a.easing("cubic-bezier(0.32, 0.72, 0, 1)");m+=getTimeGivenProgression([0,0],[.32,.72],[0,1],[1,1],n)[0]}var c=d?computeDuration(n*t,i):computeDuration((1-n)*t,i);r=d;l.enable(false);a.onFinish((function(){if(!d){l.enable(true)}})).progressEnd(d?1:0,m,c);if(d){o()}};var l=createGesture({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:i,onStart:n,onMove:s,onEnd:d});return l};var computeDuration=function(e,a){return clamp(400,e/Math.abs(a*1.1),500)};var iosEnterAnimation=function(e,a){var o=createAnimation().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var t=createAnimation().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var r=createAnimation().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(t);if(a){var i=window.innerWidth<768;var n=a.tagName==="ION-MODAL"&&a.presentingElement!==undefined;var s=createAnimation().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var d=document.body;if(i){var l=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var m=n?"-10px":l;var c=SwipeToCloseDefaults.MIN_PRESENTING_SCALE;var p="translateY("+m+") scale("+c+")";s.afterStyles({transform:p}).beforeAddWrite((function(){return d.style.setProperty("background-color","black")})).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:p,borderRadius:"10px 10px 0 0"}]);r.addAnimation(s)}else{r.addAnimation(o);if(!n){t.fromTo("opacity","0","1")}else{var c=n?SwipeToCloseDefaults.MIN_PRESENTING_SCALE:1;var p="translateY(-10px) scale("+c+")";s.afterStyles({transform:p}).addElement(a.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:p}]);var h=createAnimation().afterStyles({transform:p}).addElement(a.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:p}]);r.addAnimation([s,h])}}}else{r.addAnimation(o)}return r};var iosLeaveAnimation=function(e,a,o){if(o===void 0){o=500}var t=createAnimation().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var r=createAnimation().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var i=createAnimation().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(r);if(a){var n=window.innerWidth<768;var s=a.tagName==="ION-MODAL"&&a.presentingElement!==undefined;var d=createAnimation().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}a.style.setProperty("overflow","");var o=Array.from(l.querySelectorAll("ion-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(o<=1){l.style.setProperty("background-color","")}}));var l=document.body;if(n){var m=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var c=s?"-10px":m;var p=SwipeToCloseDefaults.MIN_PRESENTING_SCALE;var h="translateY("+c+") scale("+p+")";d.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);i.addAnimation(d)}else{i.addAnimation(t);if(!s){r.fromTo("opacity","1","0")}else{var p=s?SwipeToCloseDefaults.MIN_PRESENTING_SCALE:1;var h="translateY(-10px) scale("+p+")";d.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:h},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var f=createAnimation().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:h},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([d,f])}}}else{i.addAnimation(t)}return i};var mdEnterAnimation=function(e){var a=createAnimation();var o=createAnimation();var t=createAnimation();o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);t.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return a.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,t])};var mdLeaveAnimation=function(e){var a=createAnimation();var o=createAnimation();var t=createAnimation();var r=e.querySelector(".modal-wrapper");o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);t.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return a.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,t])};var modalIosCss=".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}";var modalMdCss=".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";var Modal=function(){function e(e){var a=this;registerInstance(this,e);this.didPresent=createEvent(this,"ionModalDidPresent",7);this.willPresent=createEvent(this,"ionModalWillPresent",7);this.willDismiss=createEvent(this,"ionModalWillDismiss",7);this.didDismiss=createEvent(this,"ionModalDidDismiss",7);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.swipeToClose=false;this.onBackdropTap=function(){a.dismiss(undefined,BACKDROP)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();a.dismiss()};this.onLifecycle=function(e){var o=a.usersElement;var t=LIFECYCLE_MAP[e.type];if(o&&t){var r=new CustomEvent(t,{bubbles:false,cancelable:false,detail:e.detail});o.dispatchEvent(r)}}}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.connectedCallback=function(){prepareOverlay(this.el)};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,a,o;var t=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}a=Object.assign(Object.assign({},this.componentProps),{modal:this.el});o=this;return[4,attachComponent(this.delegate,e,this.component,["ion-page"],a)];case 1:o.usersElement=r.sent();return[4,deepReady(this.usersElement)];case 2:r.sent();writeTask((function(){return t.el.classList.add("show-modal")}));return[4,present(this,"modalEnter",iosEnterAnimation,mdEnterAnimation,this.presentingElement)];case 3:r.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;if(getIonMode(this)!=="ios"){return}var a=this.leaveAnimation||config.get("modalLeave",iosLeaveAnimation);var o=this.animation=a(this.el,this.presentingElement);this.gesture=createSwipeToCloseGesture(this.el,o,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,a){return __awaiter(this,void 0,void 0,(function(){var o,t;return __generator(this,(function(r){switch(r.label){case 0:if(this.gestureAnimationDismissing&&a!=="gesture"){return[2,false]}o=activeAnimations.get(this)||[];return[4,dismiss(this,e,a,"modalLeave",iosLeaveAnimation,mdLeaveAnimation,this.presentingElement)];case 1:t=r.sent();if(!t)return[3,3];return[4,detachComponent(this.delegate,this.usersElement)];case 2:r.sent();if(this.animation){this.animation.destroy()}o.forEach((function(e){return e.destroy()}));r.label=3;case 3:this.animation=undefined;return[2,t]}}))}))};e.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e;var a=getIonMode(this);return h(Host,{"no-router":true,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e[a]=true,e["modal-card"]=this.presentingElement!==undefined&&a==="ios",e),getClassMap(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},h("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a==="ios"&&h("div",{class:"modal-shadow"}),h("div",{tabindex:"0"}),h("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),h("div",{tabindex:"0"}))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:false,configurable:true});return e}();var LIFECYCLE_MAP={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};Modal.style={ios:modalIosCss,md:modalMdCss};export{Modal as ion_modal};