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
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("/**\n * BLOCK: bs-authors-extract\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar withSelect = wp.data.withSelect;\n\n\nregisterBlockType('bonseo/block-bs-authors-extract', {\n\ttitle: __('Authors Extract'),\n\ticon: 'editor-quote',\n\tcategory: 'bonseo-blocks',\n\tkeywords: [__('bs-banner-authors-extract'), __('BonSeo'), __('BonSeo Block')],\n\tedit: withSelect(function (select) {\n\t\tvar _select = select('core'),\n\t\t    getEntityRecords = _select.getEntityRecords,\n\t\t    getPostTypes = _select.getPostTypes;\n\n\t\tvar query = { per_page: -1, hide_empty: true };\n\t\treturn {\n\t\t\ttypes: getPostTypes()\n\t\t};\n\t})(function (props) {\n\t\tvar attributes = props.attributes,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    isSelected = props.isSelected;\n\n\t\tvar types = props.types;\n\t\tif (!props.types) {\n\t\t\treturn \"Loading...\";\n\t\t}\n\t\tconsole.log(props.types);\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t'Extracto de Autores:'\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Elige título:'),\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tonChange: function onChange(title) {\n\t\t\t\t\treturn setAttributes({ title: title });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__max_entries',\n\t\t\t\tlabel: __('Cuántas entradas:'),\n\t\t\t\ttype: 'number',\n\t\t\t\tvalue: attributes.max_entries,\n\t\t\t\tonChange: function onChange(max_entries) {\n\t\t\t\t\treturn setAttributes({ max_entries: max_entries });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\tlabel: 'Tipo de Post',\n\t\t\t\tclassName: className + '__type',\n\t\t\t\tvalue: attributes.type,\n\t\t\t\toptions: types.map(function (type) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tlabel: type.name,\n\t\t\t\t\t\tvalue: type.slug\n\t\t\t\t\t};\n\t\t\t\t}),\n\t\t\t\tonChange: function onChange(type) {\n\t\t\t\t\treturn setAttributes({ type: type });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t}),\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGJzLWF1dGhvcnMtZXh0cmFjdFxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbCxcbiAgICBUZXh0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlRleHRDb250cm9sO1xudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2JvbnNlby9ibG9jay1icy1hdXRob3JzLWV4dHJhY3QnLCB7XG5cdHRpdGxlOiBfXygnQXV0aG9ycyBFeHRyYWN0JyksXG5cdGljb246ICdlZGl0b3ItcXVvdGUnLFxuXHRjYXRlZ29yeTogJ2JvbnNlby1ibG9ja3MnLFxuXHRrZXl3b3JkczogW19fKCdicy1iYW5uZXItYXV0aG9ycy1leHRyYWN0JyksIF9fKCdCb25TZW8nKSwgX18oJ0JvblNlbyBCbG9jaycpXSxcblx0ZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG5cdFx0dmFyIF9zZWxlY3QgPSBzZWxlY3QoJ2NvcmUnKSxcblx0XHQgICAgZ2V0RW50aXR5UmVjb3JkcyA9IF9zZWxlY3QuZ2V0RW50aXR5UmVjb3Jkcyxcblx0XHQgICAgZ2V0UG9zdFR5cGVzID0gX3NlbGVjdC5nZXRQb3N0VHlwZXM7XG5cblx0XHR2YXIgcXVlcnkgPSB7IHBlcl9wYWdlOiAtMSwgaGlkZV9lbXB0eTogdHJ1ZSB9O1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlczogZ2V0UG9zdFR5cGVzKClcblx0XHR9O1xuXHR9KShmdW5jdGlvbiAocHJvcHMpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkO1xuXG5cdFx0dmFyIHR5cGVzID0gcHJvcHMudHlwZXM7XG5cdFx0aWYgKCFwcm9wcy50eXBlcykge1xuXHRcdFx0cmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhwcm9wcy50eXBlcyk7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2gyJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0V4dHJhY3RvIGRlIEF1dG9yZXM6J1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3RpdGxlJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdFbGlnZSB0w610dWxvOicpLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy50aXRsZSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHRpdGxlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogdGl0bGUgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fbWF4X2VudHJpZXMnLFxuXHRcdFx0XHRsYWJlbDogX18oJ0N1w6FudGFzIGVudHJhZGFzOicpLFxuXHRcdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMubWF4X2VudHJpZXMsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShtYXhfZW50cmllcykge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgbWF4X2VudHJpZXM6IG1heF9lbnRyaWVzIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdGxhYmVsOiAnVGlwbyBkZSBQb3N0Jyxcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX190eXBlJyxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudHlwZSxcblx0XHRcdFx0b3B0aW9uczogdHlwZXMubWFwKGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGxhYmVsOiB0eXBlLm5hbWUsXG5cdFx0XHRcdFx0XHR2YWx1ZTogdHlwZS5zbHVnXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0eXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0eXBlOiB0eXBlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0pLFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);