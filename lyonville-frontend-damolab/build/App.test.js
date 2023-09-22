import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App.jsx';
test('renders app link', () => {
    render(_jsx(App, {}));
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
});
test('cannot find link', () => {
    render(_jsx(App, {}));
    expect(screen.queryByText(/learn react/i)).toBeNull();
});
/**
 * @param {string} name
 */
function greet(name) {
    console.log("Hello, " + name);
}
greet("Lyonville");
