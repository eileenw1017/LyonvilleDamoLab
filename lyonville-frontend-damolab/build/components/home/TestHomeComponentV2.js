import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TestHomeComponentV2 = ({ title, description, className }) => {
    return (_jsx("div", { children: _jsx("div", { children: _jsxs("div", Object.assign({ className: "max-w-md" }, { children: [_jsx("h1", Object.assign({ className: className }, { children: title })), _jsx("p", Object.assign({ className: className }, { children: description }))] })) }) }));
};
