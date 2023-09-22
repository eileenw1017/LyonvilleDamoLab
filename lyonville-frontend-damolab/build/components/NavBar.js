import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const NavBar = () => {
    const dropdownData = [
        {
            label: 'About Lyonville',
            labelLink: '/about',
            items: [
                { name: 'Feedback and Ideas', link: '/feedback' },
                { name: 'Facebook', link: 'https://www.facebook.com/lyonville' },
            ],
        },
        {
            label: 'Getting There',
            labelLink: '/getting-there',
            items: [
                { name: 'Real Estate', link: '/real-estate' },
                { name: 'Flora and Fauna', link: '/flora-and-fauna' },
            ],
        },
        {
            label: 'History',
            labelLink: '/history',
            items: [
                { name: 'Gardens', link: '/gardens' },
                { name: 'Weather', link: '/weather' },
            ],
        },
        {
            label: 'Things to Do',
            labelLink: '/things-to-do',
            items: [
                { name: 'Woodchop', link: '/woodchop' },
                { name: 'Bakeoff', link: '/bakeoff' },
            ],
        },
        {
            label: 'Community Page',
            labelLink: '/community-page',
            items: [
                { name: 'Hepburn Shire', link: '/hepburn-shire' },
                { name: 'Community Newsletter', link: '/community-newsletter' },
                { name: 'Committees and Working Group', link: '/committees' },
            ],
        },
    ];
    return (_jsxs("div", Object.assign({ className: "navbar bg-base-300 rounded-box flex justify-between items-center h-16" }, { children: [_jsx("ul", Object.assign({ className: "flex space-x-4" }, { children: dropdownData.map((dropdown, index) => (_jsx("li", Object.assign({ className: "relative" }, { children: _jsxs("div", Object.assign({ className: "dropdown dropdown-hover" }, { children: [_jsxs("label", Object.assign({ tabIndex: 0, className: "btn btn-ghost rounded-btn" }, { children: [_jsx("a", Object.assign({ href: dropdown.labelLink }, { children: dropdown.label })), ' '] })), _jsx("ul", Object.assign({ tabIndex: 0, className: "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52" }, { children: dropdown.items.map((item, itemIndex) => (_jsx("li", { children: _jsx("a", Object.assign({ href: item.link }, { children: item.name })) }, itemIndex))) }))] })) }), index))) })), _jsx("a", Object.assign({ className: "text-lg font-bold px-6", href: "/" }, { children: "Lyonville" }))] })));
};
