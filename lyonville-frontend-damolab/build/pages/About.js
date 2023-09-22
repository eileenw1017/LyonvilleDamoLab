import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Import necessary styles, components, and assets
import '../index.css';
import { TestHomeComponent } from '../components/home/TestHomeComponent.jsx';
import { TestHomeComponentV2 } from '../components/home/TestHomeComponentV2.jsx';
// @ts-ignore
import OldLyonvilleImage from '../assets/old-lyonville.svg'; // Import the image using 'import ... from ...'
// Data containing sections for the page
const data = [
    {
        key: 'Title',
        title: 'About Lyonville',
        description: '', // This is intentionally left empty for this section
    },
    {
        key: 'Subtitle',
        title: 'Getting to Know Lyonville',
        description: '', // This is intentionally left empty for this section
    },
    {
        key: 'Body',
        title: '',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit enim a ante
      pellentesque venenatis. Etiam sodales nisi sed magna accumsan, quis scelerisque augue feugiat. 
      Vivamus bibendum pharetra eleifend. Pellentesque in tortor vel risus auctor pharetra. Suspendisse 
      non gravida ligula, in condimentum dui. Donec ac nulla ac sem varius ornare quis tempus nibh. 
      Proin magna risus, ornare non tincidunt a, tincidunt eleifend ligula. Proin aliquam fringilla 
      lorem, eu tristique purus rhoncus sed. Proin mattis, ante et finibus euismod, dolor risus 
      consectetur leo, eu consequat nisl nisi vel nisl. Quisque in sollicitudin nisi, et auctor odio. 
      Nulla eu felis at nisi. `,
    },
    {
        key: 'Source',
        title: '',
        description: 'From Australian Handbook 1903',
    },
];
// React functional component
export const About = () => {
    // Function to render individual sections based on the data
    const renderData = (section) => {
        // Convert section key to lowercase for className
        const className = section.key.toLowerCase();
        if (section.key === 'Title' || section.key === 'Subtitle') {
            // Render Title and Subtitle sections using TestHomeComponent
            return (_jsx(TestHomeComponent, { title: section.title, description: section.description, className: className }, section.key));
        }
        else {
            // Render other sections using TestHomeComponentV2
            return (_jsx(TestHomeComponentV2, { title: section.title, description: section.description, className: className }, section.key));
        }
    };
    // Render the page content
    return (_jsxs("div", Object.assign({ className: "px-8 ml-10" }, { children: [' ', data.map((section) => renderData(section)), _jsxs("div", Object.assign({ className: "py-20 flex justify-center items-center" }, { children: [' ', _jsx("img", { src: OldLyonvilleImage, alt: "Old Lyonville Image" })] }))] })));
};
