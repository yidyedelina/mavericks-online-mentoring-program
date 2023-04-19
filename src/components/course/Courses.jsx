import React from 'react'
import CourseCard from './CourseCard'
import img1 from '../../assets/images/frontend.jpg'
import img2 from '../../assets/images/backend.jpg'
import img3 from '../../assets/images/fullstack.jpg'


const Courses = () => {
return(
        <div>
        <div className='flex flex-wrap justify-center'>
                <div className='w-1/4    p-5'>
                        <CourseCard 
                        imgUrl={img1}
                        title="Frontend Web Development"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>
                <div className='w-1/4 p-5'>
                        <CourseCard 
                        imgUrl={img2}
                        title="Backend Web Development"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>
                <div className='w-1/4 p-5'>
                        <CourseCard 
                        imgUrl={img3}
                        title="Fullstack Web Development"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>
                <div className='w-1/4 p-5'>
                        <CourseCard 
                        imgUrl={img3}
                        title="Fullstack Web Development"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>

        
        </div>
        </div>
)
}

export default Courses