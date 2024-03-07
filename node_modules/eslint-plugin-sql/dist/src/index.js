"use strict";
// @flow
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const format_1 = __importDefault(require("./rules/format"));
const noUnsafeQuery_1 = __importDefault(require("./rules/noUnsafeQuery"));
const rules = {
    format: format_1.default,
    'no-unsafe-query': noUnsafeQuery_1.default,
};
module.exports = {
    rules,
    rulesConfig: {
        format: 0,
        'no-unsafe-query': 0,
    },
};
