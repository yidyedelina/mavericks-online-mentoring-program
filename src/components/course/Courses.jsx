import React from 'react'
import CourseCard from './CourseCard'
import img1 from '../../assets/images/frontend.jpg'
import img2 from '../../assets/images/backend.jpg'
import img3 from '../../assets/images/fullstack.jpg'
import img4 from '../../assets/images/bg.jpg'

const Courses = () => {
        return (
        <div className="flex flex-row mt-5">
        <CourseCard 
                img = {img1}
                title="Frontend Development"
                description="Focuses on creating the visual and interactive elements of a website or application"

        />
        <CourseCard
                img = {img2}
                title="Backend Development"
                description="Involves building and maintaining the behind-the-scenes functionality"
        />
        <CourseCard 
                img = {img3}
                title="Fullstack Development"
                description="Encompasses both front end and backend development"

        />
        <CourseCard
                img = {img4}
                title="UI/UX Design"
                description="Designing the overall user experience and interface"
        />
        </div>
)
}
export default Courses