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
    title: '', // This is intentionally left empty for this section
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
      return (
        <TestHomeComponent
          key={section.key} // Add a unique key for React
          title={section.title}
          description={section.description}
          className={className} // Apply the class name
        />
      );
    } else {
      // Render other sections using TestHomeComponentV2
      return (
        <TestHomeComponentV2
          key={section.key} // Add a unique key for React
          title={section.title}
          description={section.description}
          className={className} // Apply the class name
        />
      );
    }
  };

  // Render the page content
  return (
    <div className="px-8 ml-10">
      {' '}
      {/* Apply Tailwind CSS classes for styling */}
      {data.map((section) => renderData(section))}
      <div className="py-20 flex justify-center items-center">
        {' '}
        {/* Center the image */}
        <img src={OldLyonvilleImage} alt="Old Lyonville Image" />
      </div>
    </div>
  );
};
