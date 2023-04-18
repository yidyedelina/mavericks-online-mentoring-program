import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const Avatar = () => {
    return (
      <div className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </div>
    )
  }
  const Notification = () => {
    const buttonStyle = {
      backgroundColor: 'blue',
      border: 'none',
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      padding: '10px',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <button style={buttonStyle}>
        <FontAwesomeIcon icon={faComment} />
      </button>
    )
  }
  const HomeButton = () => {
    const buttonStyle = {
      backgroundColor: 'blue',
      border: 'none',
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      padding: '10px',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return (
      <button style={buttonStyle}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
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
              className="w-5- h-5 text-gray-500 dark:text-gray-400"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search"
          />
        </div>
        <button
          type="submit"
          className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        className="mb-2 mr-2 rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Ask Question
      </button>
    )
  }
  const Title = () => {
    return (
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          PeerLink
        </h1>
      </div>
    )
  }
  return (
    <div>
      <nav className="border-gray-200 bg-white p-3 shadow-md dark:bg-gray-900">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Title />
            <Serach />
          </div>
          <div className="flex gap-3">
            <div className="pt-1">
              <HomeButton />
            </div>
            <div className="pt-1">
              <Notification />
            </div>
            <Avatar />
            <AddQuestion />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
