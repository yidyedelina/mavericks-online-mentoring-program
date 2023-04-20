import React, { Children, useState } from 'react'
import ToAnswer from './ToAnswer'
interface Props {
  children: React.ReactNode
  ToAnswer: () => void
}

function Accordion({ children, ToAnswer }: Props) {
  const Answer = () => {
    return (
      <button
        onClick={ToAnswer}
        className="flex gap-2 rounded-md bg-cyan-600 px-4 py-1 font-bold text-black"
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 11.75C20.09 11.75 19.75 12.09 19.75 12.5V19.75H12.5C12.09 19.75 11.75 20.09 11.75 20.5C11.75 20.91 12.09 21.25 12.5 21.25H20.5C20.91 21.25 21.25 20.91 21.25 20.5V12.5C21.25 12.09 20.91 11.75 20.5 11.75Z"
            fill="#636466"
            className="icon_svg-fill_as_stroke"
          />
          <path
            d="M4.25 11.5V4.25H11.5C11.91 4.25 12.25 3.91 12.25 3.5C12.25 3.09 11.91 2.75 11.5 2.75H3.5C3.09 2.75 2.75 3.09 2.75 3.5V11.5C2.75 11.91 3.09 12.25 3.5 12.25C3.91 12.25 4.25 11.91 4.25 11.5Z"
            fill="#636466"
            className="icon_svg-fill_as_stroke"
          />
          <path
            d="M4.05 18.11L3.6 19.46C3.51 19.73 3.58 20.03 3.78 20.23C3.92 20.37 4.11 20.45 4.31 20.45C4.39 20.45 4.47 20.44 4.55 20.41L5.9 19.96L4.05 18.11Z"
            fill="#636466"
            className="icon_svg-fill_as_stroke"
          />
          <path
            d="M19.65 4.35001C18.62 3.32001 16.83 3.32001 15.8 4.35001L5.17002 14.98C5.09002 15.06 5.03002 15.16 4.99002 15.27L4.58002 16.51L7.49002 19.42L8.74002 19C8.85002 18.96 8.95002 18.9 9.03002 18.82L19.65 8.21001C20.16 7.70002 20.45 7.01002 20.45 6.28001C20.45 5.55001 20.16 4.87001 19.65 4.35001Z"
            fill="#636466"
            className="icon_svg-fill_as_stroke"
          />
        </svg>
        <span>Answer</span>
      </button>
    )
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left font-medium  hover:bg-cyan-300  "
        onClick={handleClick}
      >
        <span>Answers</span>
        {isOpen ? (
          <svg
            data-accordion-icon=""
            className="h-6 w-6 shrink-0 rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            data-accordion-icon=""
            className="h-6 w-6 shrink-0 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="pt-2">
          <div>{children}</div>
          <br />
          <div>
            <Answer />
          </div>
        </div>
      )}
    </div>
  )
}

export default Accordion
