import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { AdminPanel } from '../components/AdminPanel.jsx';
import { Footer } from '../components/footer/Footer.jsx';
import { NavBar } from '../components/NavBar.jsx';
const adminAccess = false;
export const SharedLayout = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", Object.assign({ className: "flex w-full" }, { children: [_jsxs("section", Object.assign({ className: "flex-1" }, { children: [_jsx(NavBar, {}), _jsx(Outlet, {})] })), adminAccess && _jsx(AdminPanel, {})] })), _jsx(Footer, {})] }));
};
