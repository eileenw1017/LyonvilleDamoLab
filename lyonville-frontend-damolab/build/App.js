import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @flow
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Error } from './pages/Error.jsx';
function App() {
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, Object.assign({ path: "/", element: _jsx(SharedLayout, {}) }, { children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "*", element: _jsx(Error, {}) })] })) }) }) }, "main-div") }));
}
export default App;
