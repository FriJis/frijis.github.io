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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nwindow.addEventListener('load', () => {\r\n    document.querySelector('.loader').classList.add('disable')\r\n})\r\n\r\nwindow.curSection = 1\r\nconst sections = document.querySelectorAll('section')\r\nwindow.countSections = sections.length\r\n\r\nconst draw = () => {\r\n    sections.forEach(i => {\r\n        i.classList.remove('active')\r\n    })\r\n    document.querySelectorAll('.dots .dot').forEach(i => {\r\n        i.classList.remove('active')\r\n    })\r\n\r\n    document.querySelector(`section.el_${curSection}`).classList.add('active')\r\n    document.querySelector(`.dots .dot[page=\"${curSection}\"]`).classList.add('active')\r\n}\r\n\r\nconst drawDots = () => {\r\n    //creator\r\n    let dots = document.createElement('div')\r\n    dots.classList.add('dots')\r\n    for (let i = 1; i <= countSections; i++) {\r\n        let dot = document.createElement('div')\r\n        dot.classList.add('dot')\r\n        dot.setAttribute('page', i)\r\n        dots.append(dot)\r\n    }\r\n    document.body.append(dots)\r\n    //creator\r\n\r\n    document.querySelectorAll('.dots .dot').forEach(item => { //add event dots\r\n        item.addEventListener('click', e => {\r\n            curSection = parseInt(e.target.getAttribute('page'))\r\n            draw()\r\n        })\r\n    })\r\n}\r\n\r\nwindow.deltaTime = {\r\n    minTime: 400,\r\n    setTime() {\r\n        this.cur = new Date()\r\n    },\r\n    delta() {\r\n        if (new Date() - this.cur > this.minTime) {\r\n            this.setTime()\r\n            return true\r\n        } else {\r\n            return false\r\n        }\r\n    }\r\n}\r\n\r\ndocument.addEventListener('wheel', e => { // scrolling\r\n    if (e.deltaY < 0 && curSection > 1 && deltaTime.delta()) {\r\n        curSection -= 1\r\n    }\r\n    if (e.deltaY > 0 && curSection < countSections && deltaTime.delta()) {\r\n        curSection += 1\r\n    }\r\n    draw()\r\n})\r\n\r\ndocument.addEventListener('keydown', e => {\r\n    if (e.code == 'ArrowUp' && curSection > 1) {\r\n        curSection -= 1\r\n    }\r\n    if (e.code == 'ArrowDown' && curSection < countSections) {\r\n        curSection += 1\r\n    }\r\n    draw()\r\n})\r\n\r\nconst warning = () => {\r\n    if(innerWidth < 750 || innerHeight < 770) {\r\n        document.querySelector('.warning').classList.remove('disable')\r\n    }\r\n}\r\nwarning()\r\ndrawDots()\r\ndraw()\r\ndeltaTime.setTime()\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });