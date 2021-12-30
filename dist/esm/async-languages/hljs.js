import createLanguageAsyncLoader from "./create-language-async-loader";
export default {
  javascript: createLanguageAsyncLoader("javascript", function () {
    return import(
    /* webpackChunkName: "react-syntax-highlighter_languages_highlight_javascript" */
    "highlight.js/lib/languages/javascript");
  }),
  json: createLanguageAsyncLoader("json", function () {
    return import(
    /* webpackChunkName: "react-syntax-highlighter_languages_highlight_json" */
    "highlight.js/lib/languages/json");
  })
};