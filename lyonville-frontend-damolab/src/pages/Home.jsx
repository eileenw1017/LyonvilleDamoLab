import { TestHomeComponent } from '../components/home/TestHomeComponent.jsx'
import { TestHomeComponentV2 } from '../components/home/TestHomeComponentV2.jsx'

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
]

export const Home = () => {
  const renderData = (section) => {
    if (section.key === 'SectionA' || section.key === 'SectionC') {
      return (
        <TestHomeComponent
          title={section.title}
          description={section.description}
          className={section.className}
        />
      )
    } else {
      return (
        <TestHomeComponentV2
          title={section.title}
          description={section.description}
          className={section.className}
        />
      )
    }
  }

  return (
    <div className="p-8 h-screen" key="p8-screen">
      <h1 className="text-center text-3xl">This is the home page</h1>
      {data.map((section) => renderData(section))}
    </div>
  )
}
