import React, { useState } from 'react'


import WeekBox from './WeekBox'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleAccordionClick = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="mx-auto w-full max-w-lg">
      <Test />
      <div className="overflow-hidden rounded-lg border border-gray-300">
        {data.map((item, index) => (
          <div key={index}>
            <button
              className={`flex w-full items-center justify-between p-4 focus:outline-none ${
                activeIndex === index ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              <span className="font-medium">{item.title}</span>
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 transform' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14.293l-6.146-6.147a.999.999 0 111.414-1.414L10 11.464l4.732-4.732a.999.999 0 111.414 1.414L10 14.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="bg-gray-100 px-4 py-2">
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    content: 'djkfs',
    title: 'Accordion Item 1',
  },
  {
    content:
      'Praesent vitae magna eget nisl malesuada pellentesque. Ut euismod leo vitae nunc ornare, ac cursus eros accumsan. Integer nec laoreet sapien. Sed nulla velit, varius vel ullamcorper sed, tincidunt a turpis.',
    title: 'Accordion Item 2',
  },
  {
    content: <WeekBox />,
    title: 'Accordion Item 3',
  },
]
export default Accordion
