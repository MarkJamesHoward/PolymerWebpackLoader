/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bower_components_paper_button_paper_button_html__ = __webpack_require__(1);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
throw new Error("Cannot find module \"C:dev\testpolymerwebpack\bower_componentspolymerpolymer.html\"");
throw new Error("Cannot find module \"C:dev\testpolymerwebpack\bower_componentsiron-flex-layoutiron-flex-layout.html\"");
throw new Error("Cannot find module \"C:dev\testpolymerwebpack\bower_componentspaper-behaviorspaper-button-behavior.html\"");
throw new Error("Cannot find module \"C:dev\testpolymerwebpack\bower_componentspaper-styleselement-stylespaper-material-styles.html\"");









const RegisterHtmlTemplate = __webpack_require__(2);
RegisterHtmlTemplate.register(' <dom-module id="paper-button"> <template strip-whitespace=""> <style include="paper-material-styles">:host{@apply --layout-inline;@apply --layout-center-center;position:relative;box-sizing:border-box;min-width:5.14em;margin:0 .29em;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;font:inherit;text-transform:uppercase;outline-width:0;border-radius:3px;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:pointer;z-index:0;padding:.7em .57em;@apply --paper-font-common-base;@apply --paper-button;}:host([elevation="1"]){@apply --paper-material-elevation-1;}:host([elevation="2"]){@apply --paper-material-elevation-2;}:host([elevation="3"]){@apply --paper-material-elevation-3;}:host([elevation="4"]){@apply --paper-material-elevation-4;}:host([elevation="5"]){@apply --paper-material-elevation-5;}:host([hidden]){display:none!important}:host([raised].keyboard-focus){font-weight:700;@apply --paper-button-raised-keyboard-focus;}:host(:not([raised]).keyboard-focus){font-weight:700;@apply --paper-button-flat-keyboard-focus;}:host([disabled]){background:#eaeaea;color:#a8a8a8;cursor:auto;pointer-events:none;@apply --paper-button-disabled;}:host([animated]){@apply --shadow-transition;}paper-ripple{color:var(--paper-button-ink-color)}</style> <slot></slot> </template> </dom-module> ');


    Polymer({
      is: 'paper-button',

      behaviors: [
        Polymer.PaperButtonBehavior
      ],

      properties: {
        /**
         * If true, the button should be styled with a shadow.
         */
        raised: {
          type: Boolean,
          reflectToAttribute: true,
          value: false,
          observer: '_calculateElevation'
        }
      },

      _calculateElevation: function() {
        if (!this.raised) {
          this._setElevation(0);
        } else {
          Polymer.PaperButtonBehaviorImpl._calculateElevation.apply(this);
        }
      }

      /**
      Fired when the animation finishes.
      This is useful if you want to wait until
      the ripple animation finishes to perform some action.

      @event transitionend
      Event param: {{node: Object}} detail Contains the animated node.
      */
    });
  


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* eslint-env browser */

class RegisterHtmlTemplate {
  /**
   * Create a `<template>` element to hold `<dom-module>` content.
   * This bit of code will execute in the context of the main document,
   * calling `importNode` on the `<template>`, which in turn triggers
   * the lifecycle of the `<dom-module>` and allows it to insert its
   * content into Polymer's global module map. When a Polymer element
   * boots up it will fetch its template from this module map.
   * https://github.com/Polymer/polymer/blob/master/lib/mixins/element-mixin.html#L501-L538
   * @param {string} val A `<dom-module>` as an HTML string
   */
  static register(val) {
    let content;
    const template = document.createElement('template');
    template.innerHTML = val;
    if (template.content) {
      content = template.content; // eslint-disable-line prefer-destructuring
    } else {
      content = document.createDocumentFragment();
      while (template.firstChild) {
        content.appendChild(template.firstChild);
      }
    }
    document.importNode(content, true);
  }
  /**
   * Content that will be injected into the main document. This is primarily
   * for things like `<iron-iconset>` and `<custom-style>` which do not have
   * templates but rely on HTML Imports ability to apply content to the main
   * document.
   * @param {string} val An HTML string
   */
  static toBody(val) {
    const trimmedVal = val.trim();
    if (trimmedVal) {
      const div = document.createElement('div');
      div.innerHTML = trimmedVal;
      if (div.firstChild) {
        if (document.body) {
          document.body.insertBefore(div.firstChild, document.body.firstChild);
        } else {
          document.addEventListener('DOMContentLoaded', () => {
            document.body.insertBefore(div.firstChild, document.body.firstChild);
          });
        }
      }
    }
  }
}

module.exports = RegisterHtmlTemplate;


/***/ })
/******/ ]);