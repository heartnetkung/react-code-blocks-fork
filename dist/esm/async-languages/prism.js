import createLanguageAsyncLoader from "./create-language-async-loader";
export default {
  javascript: createLanguageAsyncLoader("javascript", function () {
    return import(
    /* webpackChunkName: "react-syntax-highlighter_languages_refractor_javascript" */
    "refractor/lang/javascript.js");
  }),
  json: createLanguageAsyncLoader("json", function () {
    return import(
    /* webpackChunkName: "react-syntax-highlighter_languages_refractor_json" */
    "refractor/lang/json.js");
  }),
  jsx: createLanguageAsyncLoader("jsx", function () {
    return import(
    /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsx" */
    "refractor/lang/jsx.js");
  })
};