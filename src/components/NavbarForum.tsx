import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  onOpen: () => void
}

const Navbar = ({ onOpen }: Props) => {
  const Avatar = () => {
    return (
      <div className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-cyan-100 dark:bg-cyan-600">
        <span className="font-medium text-cyan-600 dark:text-cyan-300">JL</span>
      </div>
    )
  }
  const Serach = () => {
    return (
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="w-5- h-5 text-cyan-500 dark:text-cyan-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="block w-full rounded-lg border border-cyan-300 bg-cyan-50 p-2.5 pl-10 text-sm text-cyan-900 focus:border-cyan-500 focus:ring-cyan-500  dark:border-cyan-600 dark:bg-cyan-700 dark:text-white dark:placeholder-cyan-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
            placeholder="Search"
          />
        </div>
        <button
          type="submit"
          className="ml-2 rounded-lg border border-cyan-700 bg-cyan-700 p-2.5 text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    )
  }
  const AddQuestion = () => {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="mr-3 rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 md:mr-0"
      >
        Add Question
      </button>
    )
  }
  const Title = () => {
    return (
      <a href="#" className="flex items-center">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          AskForum
        </span>
      </a>
    )
  }
  return (
    <nav className="border-cyan-200 bg-cyan-50 shadow-md dark:bg-cyan-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
        <Title />
        <div className="flex gap-3 md:order-2">
          <AddQuestion />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-cyan-500 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-cyan-600 md:hidden"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-cyan-100 bg-cyan-50 p-4 font-medium dark:border-cyan-700 dark:bg-cyan-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-cyan-50 md:p-0 md:dark:bg-cyan-900">
            <li className="pt-2.5">
              <a
                href="#"
                className="block rounded bg-cyan-700 pl-3 pr-4  text-white md:bg-transparent md:p-0 md:text-cyan-700 md:dark:text-cyan-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Serach />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
