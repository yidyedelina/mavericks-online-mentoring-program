import React from 'react'
import TestimonyCard from './TestimonyCard'
import imgg from '../../assets/images/blackgirl.jpg'
const Testimonies = () => {
  return (
    <div>
        <h1 className='p-5 text-3xl text-center bg-gradient-to-r to-cyan-300 my-24'>Testimonies</h1>
        <div className='flex flex-wrap justify-center'>
                <div className='w-1/2 p-5'>
                        <TestimonyCard
                        img = {imgg}
                        name="John Doe"
                        profession='Software Engineer'
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>
                <div className='w-1/2 p-5'>
                        <TestimonyCard
                        img = {imgg}
                        name="Jane Doe"
                        profession='Software Engineer'
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>
                <div className='w-1/2 p-5'>
                        <TestimonyCard
                        img = {imgg}
                        name="John Doe"
                        profession='Software Engineer'
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>
                <div className='w-1/2 p-5'>
                        <TestimonyCard
                        img = {imgg}
                        name="Jane Doe"
                        profession='Software Engineer'
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        />
                </div>
            </div>



    </div>
  )
}

export default Testimonies