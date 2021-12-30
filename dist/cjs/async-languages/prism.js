"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createLanguageAsyncLoader = _interopRequireDefault(require("./create-language-async-loader"));

var _default = {
  javascript: (0, _createLanguageAsyncLoader.default)("javascript", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/javascript.js");
    });
  }),
  json: (0, _createLanguageAsyncLoader.default)("json", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/json.js");
    });
  }),
  jsx: (0, _createLanguageAsyncLoader.default)("jsx", function () {
    return Promise.resolve().then(function () {
      return require("refractor/lang/jsx.js");
    });
  })
};
exports.default = _default;