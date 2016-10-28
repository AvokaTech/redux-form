"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultShouldValidate = function defaultShouldValidate(_ref) {
  var values = _ref.values;
  var nextProps = _ref.nextProps;
  var initialRender = _ref.initialRender;
  var structure = _ref.structure;

  if (initialRender) {
    return true;
  }
  return !structure.deepEqual(values, nextProps.values);
};

exports.default = defaultShouldValidate;