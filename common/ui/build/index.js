"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonShare = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react';
const utils_1 = require("@my-package/utils");
const ButtonShare = () => {
    console.log((0, utils_1.isEven)(4));
    return ((0, jsx_runtime_1.jsx)("button", { children: (0, jsx_runtime_1.jsx)("h2", { children: "Button Share" }) }));
};
exports.ButtonShare = ButtonShare;
