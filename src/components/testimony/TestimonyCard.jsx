import React from 'react'

const TestimonyCard = ({img, name, profession, description }) => {
  return (
    <div className="w-2/3 bg-white shadow-lg rounded-lg p-8 m-3">
    <div className="flex items-center">
    <img className="w-16 h-16 rounded-full mr-4" src={img} alt="Person avatar" />
    <div>
    <blockquote className="text-md italic font-semibold text-gray-900 dark:text-white">
    <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <p>{description}</p>
</blockquote>
    </div>
    </div>
    <div className="mt-4">
    <span className="text-sm text-gray-500">{name},{profession}</span>
    </div>
    </div>
  )
}

export default TestimonyCard


// {img, name, profession, description }
// <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
// <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512" />
// <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//   <blockquote>
//     <p className="text-lg font-medium">
//       {description}
//     </p>
//   </blockquote>
//   <figcaption className="font-medium">
//     <div className="text-sky-500 dark:text-sky-400">
//       {name}
//     </div>
//     <div className="text-slate-700 dark:text-slate-500">
//       {profession}
//     </div>
//   </figcaption>
// </div>
// </figure>