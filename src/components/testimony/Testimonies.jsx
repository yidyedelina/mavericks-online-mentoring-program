import React from 'react'
import TestimonyCard from './TestimonyCard'
import imgg from '../../assets/images/blackgirl.jpg'
const Testimonies = () => {
  return (
    <div className='mb-24'>
        <h1 className='p-5 text-3xl text-center bg-gradient-to-r to-cyan-300 my-10'>Testimonies</h1>
        <div className='flex flex-wrap justify-center'>
                        <TestimonyCard
                        img = {imgg}
                        name="John Doe"
                        profession='Software Engineer'
                        description="Having a mentor has been incredibly helpful in my journey of learning software engineering. My mentor has provided me with guidance, support, and feedback on my projects and assignments, and has helped me navigate the complexities of the field. They have also helped me set goals and create a roadmap for my learning, and have provided motivation and accountability to keep me on track. Through my experience with my mentor, I have learned the value of mentorship and how it can help others achieve more in their learning journey. As a result, I am interested in volunteering my time and knowledge to help others in the field of software engineering, whether it's through mentoring, teaching, or contributing to open source projects."
                        />
                        <TestimonyCard
                        img = {imgg}
                        name="Jane Doe"
                        profession='Software Engineer'
                        description="As a teacher, I can say that having a mentor can be incredibly helpful in one's learning journey, especially in a complex field like software engineering. A mentor can provide guidance, support, and feedback, and can help the mentee set goals and create a roadmap for their learning. Mentors can also provide motivation and accountability, which can be important factors in achieving success. Through my own experiences with mentorship, I have learned the value of helping others achieve their goals and reach their potential. As a result, I am interested in volunteering my time and knowledge to help others in the field of software engineering, whether it's through mentoring, teaching, or contributing to open source projects."
                        />

            </div>



    </div>
  )
}

export default Testimonies