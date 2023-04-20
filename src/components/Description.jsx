import React from 'react'

const Description = () => {
  return (
    <div>
    <div className="bg-gray-100 px-4 py-16">
      <div className="container max-w-6xl mx-auto my-5">
        <h2 className="text-3xl font-bold text-center">FAQs</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8">
            <div className="relative bg-green-100 pt-5 rounded-lg shadow-lg ">
              <dt className="absolute w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                Q. 
              </dt>
              <dd className="ml-40 mb-10">
                <p className="text-lg font-semibold">What is the purpose of this website?</p>
                <p className="mt-2">The purpose of this website is to provide high-quality virtual mentoring for people of all ages and backgrounds. We aim to connect mentees with experienced mentors in small group programs so they can get guidance, support, and advice for their goals and challenges.</p>
              </dd>
            </div>
            <div className="relative bg-yellow-100 pt-5 rounded-lg shadow-lg ">
              <dt className="absolute w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                Q.
              </dt>   
              <dd className="ml-40">
                <p className="text-lg font-semibold">Who are the mentors?</p>
                <p className="mt-2">Our mentors are volunteers who have life and career experience they want to share with others. They go through an application and screening process to ensure they are qualified to mentor in their areas of expertise. Mentors are motivated by the opportunity to give back and help others in a meaningful way.</p>
              </dd>
            </div>
            <div className="relative bg-pink-100 pt-5 rounded-lg shadow-lg ">
              <dt className="absolute w-32 h-32 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                Q.
              </dt>   
              <dd className="ml-40">
                <p className="text-lg font-semibold">Who can benefit from this website?</p>
                <p className="mt-2">Our mentoring programs are designed for people of all backgrounds, ages, and experience levels. Whether you are looking to advance in your career, develop new skills, navigate a transition, overcome a setback, or achieve an important life goal, our mentors can provide support and advice tailored to your unique situation. All programs are virtual, so you can participate from anywhere.</p>
              </dd>
            </div>
            <div className="relative bg-cyan-100 pt-5 rounded-lg shadow-lg ">
              <dt className="absolute w-32 h-32 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                Q.
              </dt>   
              <dd className="ml-40">
                <p className="text-lg font-semibold">How do I get started?</p>
                <p className="mt-2">Simply create an account as a mentee and fill out your profile and enroll in one of our courses to help us match you with a mentor who can best support your goals and interests. From there, you'll have access to a range of resources and opportunities to connect with other members of the community.</p>
              </dd>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Description