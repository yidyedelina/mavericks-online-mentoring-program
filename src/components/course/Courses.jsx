import React from 'react'
import CourseCard from './CourseCard'


const Courses = () => {
return(
        <div>
        <div className='flex flex-wrap justify-center'>
                <div className='w-1/4    p-5'>
                        <CourseCard 
                        title="Frontend Development"
                        description="Frontend Web Development is the process of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript."
                        />
                </div>
                <div className='w-1/4 p-5'>
                        <CourseCard 
                        title="Backend Development"
                        description="Backend Web Development is the process of building and maintaining the technology that powers the front end of a website or application."
                        />
                </div>
                <div className='w-1/4 p-5'>
                        <CourseCard 
                        title="Fullstack Development"
                        description="Fullstack Web Development is the process of building and maintaining the technology that powers the front end of a website or application."
                        />
                </div>
                <div className='w-1/4 p-5'>
                        <CourseCard 
                        title="Ui/Ux Design"
                        description="UI/UX Design is the process of building and maintaining the technology that powers the front end of a website or application."
                        />
                </div>

        
        </div>
        </div>
)
}

export default Courses