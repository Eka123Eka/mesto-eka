(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,r=[{key:"getUserInfoServer",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return t._checkResponse(e,"getUserInfo - ")}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return t._checkResponse(e,"getInitialCards - ")}))}},{key:"sendUserInfo",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(t)}).then((function(n){return e._checkResponse(n,"PATCH ".concat(t.name,", ").concat(t.about," - "))}))}},{key:"addNewCardServer",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(t)}).then((function(n){return e._checkResponse(n,"POST ".concat(t.link," - "))}))}},{key:"deleteCardServer",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(n){return e._checkResponse(n,"DELETE ".concat(t," - "))}))}},{key:"toogleLikeServer",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{headers:this._headers,method:e?"DELETE":"PUT"}).then((function(r){return n._checkResponse(r,"TOGGLE like ".concat(t," isLike = ").concat(e," - "))}))}},{key:"sendAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then((function(n){return e._checkResponse(n,"PATCH Avatar ".concat(t," - "))}))}},{key:"_checkResponse",value:function(t,e){return t.ok?t.json():Promise.reject("".concat(e).concat(t.status,"(").concat(t.statusText,")"))}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"78fa951e-0cae-4fbe-aca5-f0de42ec035a","Content-Type":"application/json"}});function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n,r,o){var i=e.name,u=e.link,a=e.likes,c=void 0===a?[]:a,s=e._id,l=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.idCard=s,this.likes=c,this._name=i,this._link=u,this._idUser=o,this._ownerCard=l,this._isLiked=null,this._selectors=n,this._elementCard=this._getElement(),this._titleCard=this._elementCard.querySelector(".card__title"),this._imgCard=this._elementCard.querySelector(".card__image"),this._counterLikeCard=this._elementCard.querySelector(".card__like-counter"),this._btnLikeCard=this._elementCard.querySelector(".card__like-button"),this._btnTrashCard=this._elementCard.querySelector(".card__trash-button"),this._handleResizePhoto=r.handleResizePhoto,this._handleBtnLikeCard=r.handleBtnLikeCard,this._handleRemoveCard=r.handleRemoveCard,this.checkIsLiked=this.checkIsLiked.bind(this)}var e,n;return e=t,(n=[{key:"makeCard",value:function(){return this._imgCard.alt=this._name,this._imgCard.src=this._link,this._titleCard.textContent=this._name,this.setLikesCard(),this._setEventListeners(),this._elementCard}},{key:"setLikesCard",value:function(){this._counterLikeCard.textContent=this.likes.length,this._isLiked=this.checkIsLiked(),this._isLiked?this._btnLikeCard.classList.add("card__like-button_active"):this._btnLikeCard.classList.remove("card__like-button_active")}},{key:"removeElementCard",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"_setEventListeners",value:function(){var t=this;this._btnTrashCard&&(this._ownerCard._id!==this._idUser?(this._btnTrashCard.remove(),this._btnTrashCard=null):this._btnTrashCard.addEventListener("click",(function(){return t._handleRemoveCard(t)}))),this._imgCard&&this._imgCard.addEventListener("click",(function(e){return t._handleResizePhoto({name:e.target.alt,link:e.target.src})})),this._btnLikeCard&&this._btnLikeCard.addEventListener("click",(function(){return t._handleBtnLikeCard(t)}))}},{key:"checkIsLiked",value:function(){var t=this;return this.likes.some((function(e){return e._id===t._idUser}))}},{key:"_getElement",value:function(){return document.querySelector(this._selectors).content.querySelector(".card").cloneNode(!0)}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectors=e,this._elements=n,this._inputList=Array.from(this._elements.querySelectorAll(this._selectors.inputSelector)),this._buttonElement=this._elements.querySelector(this._selectors.submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_setEventListeners",value:function(){var t=this;this._elements.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._selectors.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){t.classList.add(this._selectors.inputErrorClass),t.parentElement.querySelector(this._selectors.errorClass).textContent=e}},{key:"_hideInputError",value:function(t){t.classList.remove(this._selectors.inputErrorClass),t.parentElement.querySelector(this._selectors.errorClass).textContent=""}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=n}var e,n;return e=t,n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this._container.append(t):this._container.prepend(t)}}],n&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.popup=document.querySelector(e),this._closeButton=this.popup.querySelector(".popup__button-close"),this._handlePopupEscBtn=this._handlePopupEscBtn.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handlePopupEscBtn)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handlePopupEscBtn)}},{key:"setEventListeners",value:function(){var t=this;this.popup.addEventListener("mousedown",this._handlePopupClickOverlay.bind(this)),this._closeButton.addEventListener("click",(function(){return t.close()}))}},{key:"_handlePopupClickOverlay",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"_handlePopupEscBtn",value:function(t){"Escape"===t.key&&this.close()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imgBigPhoto=e.popup.querySelector(".popup__big-size-photo"),e._txtBigPhoto=e.popup.querySelector(".popup__big-size-title"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._imgBigPhoto.alt=e,this._imgBigPhoto.src=n,this._txtBigPhoto.textContent=e,m(S(u.prototype),"open",this).call(this)}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFormFunction=e,n._inputList=n.popup.querySelectorAll(".popup__input-field"),n._popupForm=n.popup.querySelector(".popup__form"),n._btnSubmit=n.popup.querySelector(".popup__submit"),n._btnSubmitText=n._btnSubmit.textContent,n}return e=u,(n=[{key:"close",value:function(){C(P(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name.split("-")[0]]}))}},{key:"setEventListeners",value:function(){var t=this;C(P(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault();var n=t._btnSubmit.textContent;t._btnSubmit.textContent="Сохранение...",t._submitFormFunction(t._getInputValues()).then((function(){return t.close()})).finally((function(){return t._btnSubmit.textContent=n}))}))}},{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name.split("-")[0]]=e.value})),this._inputValues}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._popupForm=n.popup.querySelector(".popup__form"),n._btnSubmit=n.popup.querySelector(".popup__submit"),n._btnSubmitText=n._btnSubmit.textContent,n}return e=u,(n=[{key:"open",value:function(t){this._card=t,T(R(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;T(R(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._card)}))}},{key:"changeSubmitText",value:function(){"Сохранить"===this._btnSubmit.textContent||"Создать"===this._btnSubmit.textContent||"Да"===this._btnSubmit.textContent?this._btnSubmit.textContent="Сохранение...":""!==this._btnSubmitText&&(this._btnSubmit.textContent=this._btnSubmitText)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=document.querySelector(e.name),this.career=document.querySelector(e.career),this.avatar=document.querySelector(e.avatar),this._idUser=null}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,career:this.career.textContent,avatar:this.avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this.name.textContent=e,this.career.textContent=n,this.avatar.src=r,this._idUser=o}},{key:"getUserId",value:function(){return this._idUser}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),V={formSelector:".popup__form",inputSelector:".popup__input-field",inputSet:".popup__set",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input-field_type_error",errorClass:".popup__input-error"},A=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__add-button"),F=document.querySelector(".profile__avatar-button"),z=document.querySelector(".cards");function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H=new q({name:".profile__name",career:".profile__career",avatar:".profile__avatar-photo"});function J(t){return new u(t,".template-card",{handleResizePhoto:function(t){return function(t){M.open(t)}(t)},handleBtnLikeCard:function(t){return function(t){r.toogleLikeServer(t.idCard,t.checkIsLiked()).then((function(e){t.likes=e.likes,t.setLikesCard()})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}(t)},handleRemoveCard:function(t){return function(t){W.open(t)}(t)}},H.getUserId()).makeCard()}var G=new p((function(t){return G.addItem(J(t),!0)}),z);Promise.all([r.getUserInfoServer(),r.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H.setUserInfo(o),G.renderItems(i)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var M=new g(".popup_type_big-photo");M.setEventListeners();var $=new O(".popup_type_add-photo",(function(t){return r.addNewCardServer({name:t.place,link:t.urlImage}).then((function(t){G.addItem(J(t))})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}));$.setEventListeners();var K=new O(".popup_type_edit-profile",(function(t){return r.sendUserInfo({name:t.name,about:t.career}).then((function(t){return H.setUserInfo(t)})).then(K.setInputValues(H.getUserInfo())).catch((function(t){return console.log("Ошибка: ".concat(t))}))}));K.setEventListeners();var Q=new O(".popup_type_change-avatar",(function(t){return r.sendAvatar(t.urlAvatar).then((function(t){return H.setUserInfo(t)})).catch((function(t){return console.log("Ошибка: ".concat(t))}))}));Q.setEventListeners();var W=new x(".popup_type_remove-card",(function(t){var e=this;W.changeSubmitText(),r.deleteCardServer(t.idCard).then(t.removeElementCard()).then((function(){return e.close()})).catch((function(t){return console.log("Ошибка: ".concat(t))})).finally((function(){return W.changeSubmitText()}))}));W.setEventListeners();var X=new s(V,$.popup);X.enableValidation();var Y=new s(V,K.popup);Y.enableValidation();var Z=new s(V,Q.popup);Z.enableValidation(),A.addEventListener("click",(function(){K.setInputValues(H.getUserInfo()),K.open(),Y.resetValidation()})),D.addEventListener("click",(function(){$.open(),X.resetValidation()})),F.addEventListener("click",(function(){Q.open(),Z.resetValidation()}))})();