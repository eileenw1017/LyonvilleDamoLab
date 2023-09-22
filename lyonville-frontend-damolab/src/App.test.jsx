import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders app link', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('cannot find link', () => {
  render(<App />);
  expect(screen.queryByText(/learn react/i)).toBeNull();
});

/**
 * @param {string} name
 */
function greet(name) {
  console.log("Hello, " + name);
}

greet("Lyonville")
// greet(42)        // error when run tsc
