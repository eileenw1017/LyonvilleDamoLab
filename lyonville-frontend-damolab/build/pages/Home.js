import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TestHomeComponent } from '../components/home/TestHomeComponent.jsx';
import { TestHomeComponentV2 } from '../components/home/TestHomeComponentV2.jsx';
// this will be a response body from an API endpoint
const data = [
    {
        key: 'SectionA',
        title: 'SectionA',
        description: 'SectionA description',
    },
    {
        key: 'SectionB',
        title: 'SectionB',
        description: 'SectionB description',
    },
    {
        key: 'SectionC',
        title: 'SectionC',
        description: 'SectionC description',
    },
];
export const Home = () => {
    const renderData = (section) => {
        if (section.key === 'SectionA' || section.key === 'SectionC') {
            return (_jsx(TestHomeComponent, { title: section.title, description: section.description, className: section.className }));
        }
        else {
            return (_jsx(TestHomeComponentV2, { title: section.title, description: section.description, className: section.className }));
        }
    };
    return (_jsxs("div", Object.assign({ className: "p-8 h-screen" }, { children: [_jsx("h1", Object.assign({ className: "text-center text-3xl" }, { children: "This is the home page" })), data.map((section) => renderData(section))] }), "p8-screen"));
};
