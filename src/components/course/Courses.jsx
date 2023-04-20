import React from 'react'
import CourseCard from './CourseCard'


const Courses = () => {
return(
        <div className="py-8 mt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
                <CourseCard 
                title="Frontend Development"
                description="Frontend Web Development is the process of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript."
                />
                <CourseCard 
                title="Backend Development"
                description="Backend Web Development is the process of building and maintaining the technology that powers the front end of a website or application."
                />

                <CourseCard 
                title="Fullstack Development"
                description="Fullstack Web Development is the process of building and maintaining the technology that powers the front end of a website or application."
                />

                <CourseCard 
                title="Ui/Ux Design"
                description="UI/UX Design is the process of building and maintaining the technology that powers the front end of a website or application."
                />
                <CourseCard 
                title="Frontend Development"
                description="Frontend Web Development is the process of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript."
                />
                <CourseCard 
                title="iOS App Development with Swift"
                description="This course teaches the basics of developing iOS apps using the Swift programming language, including user interfaces, data storage, and networking."
                />

                <CourseCard 
                title="Data Analytics"
                description=" This course teaches data analysis techniques using Excel and Tableau, and covers topics such as data visualization, regression analysis, and forecasting."
                />

                <CourseCard 
                title="Machine Learning"
                description="This course covers the basics of machine learning, including regression, classification, clustering, and neural networks."
                />
          </div>
        </div>
      </div>

)
}

export default Courses



// <div>
// <div className='flex flex-wrap justify-center'>
//         <div className='w-1/4    p-5'>
//                 <CourseCard 
//                 title="Frontend Development"
//                 description="Frontend Web Development is the process of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript."
//                 />
//         </div>
//         <div className='w-1/4 p-5'>
//                 <CourseCard 
//                 title="Backend Development"
//                 description="Backend Web Development is the process of building and maintaining the technology that powers the front end of a website or application."
//                 />
//         </div>
//         <div className='w-1/4 p-5'>
//                 <CourseCard 
//                 title="Fullstack Development"
//                 description="Fullstack Web Development is the process of building and maintaining the technology that powers the front end of a website or application."
//                 />
//         </div>
//         <div className='w-1/4 p-5'>
//                 <CourseCard 
//                 title="Ui/Ux Design"
//                 description="UI/UX Design is the process of building and maintaining the technology that powers the front end of a website or application."
//                 />
//         </div>


// </div>
// </div>