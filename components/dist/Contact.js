'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var hooks_1 = require("@/lib/hooks");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var SectionHeading_1 = require("./SectionHeading");
var sendEmail_1 = require("@/actions/sendEmail");
var SubmitBtn_1 = require("./SubmitBtn");
var react_hot_toast_1 = require("react-hot-toast");
function Contact() {
    var _this = this;
    var ref = hooks_1.useSectionInView('Contact').ref;
    var _a = react_1.useState({
        senderEmail: '',
        senderMessage: ''
    }), inputValue = _a[0], setInputValue = _a[1];
    return (react_1["default"].createElement(framer_motion_1.motion.section, { id: "contact", ref: ref, className: "mb-20 sm:mb-28 w-[min(100%,38rem)] text-center", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1 }, viewport: { once: true } },
        react_1["default"].createElement(SectionHeading_1["default"], null, " Contact Me"),
        react_1["default"].createElement("p", { className: "text-gray-700 -mt-6 dark:text-white/80" },
            ' ',
            "Please contact me directly at",
            ' ',
            react_1["default"].createElement("a", { className: "underline text-cyan-800", href: "mailto:stephn2027@gmail.com", target: "_blank" }, "stephen2027@gmail.com"),
            ' ',
            "or through this form."),
        react_1["default"].createElement("form", { className: "mt-10 flex flex-col", action: function (formData) { return __awaiter(_this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, sendEmail_1.sendEmail(formData)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                react_hot_toast_1["default"].error(error);
                                return [2 /*return*/];
                            }
                            react_hot_toast_1["default"].success('Email sent successfully!');
                            setInputValue({ senderMessage: '', senderEmail: '' });
                            return [2 /*return*/];
                    }
                });
            }); } },
            react_1["default"].createElement("input", { type: "email", name: "senderEmail", placeholder: "Enter your email", required: true, maxLength: 500, className: "h-14 px-4 rounded-lg borderBlack dark:text-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none", value: inputValue.senderEmail, onChange: function (e) {
                    return setInputValue(__assign(__assign({}, inputValue), { senderEmail: e.target.value }));
                } }),
            react_1["default"].createElement("textarea", { placeholder: "Enter your message", name: "senderMessage", className: "h-52 rounded-lg borderBlack p-4 my-3\n          dark:bg-white dark:bg-opacity-80 dark:text-gray-800 dark:focus:bg-opacity-100 transition-all dark:outline-none", required: true, maxLength: 5000, value: inputValue.senderMessage, onChange: function (e) {
                    return setInputValue(__assign(__assign({}, inputValue), { senderMessage: e.target.value }));
                } }),
            react_1["default"].createElement(SubmitBtn_1["default"], null))));
}
exports["default"] = Contact;
