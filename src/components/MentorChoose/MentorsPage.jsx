import React from 'react';
import MentorrCard from './MentorrCard';
import mentor1 from '../../assets/images/mentor1.jpg'
import mentor2 from '../../assets/images/mentor2.jpg'
import mentor3 from '../../assets/images/mentor3.jpg'
import mentor4 from '../../assets/images/mentor4.jpg'
import mentor5 from '../../assets/images/mentor5.jpeg'
import mentor6 from '../../assets/images/mentor6.jpg'
import mentor7 from '../../assets/images/mentor7.jpg'
import mentor8 from '../../assets/images/mentor8.jpg'



const mentors = [
  {
    image: {mentor1},
    name: 'John Doe',
    profession: 'Software Engineer',
    projects: ['React', 'Node.Js'],
    description: 'John is a software engineer with experience in web development and machine learning.',
  },
  {
    image: {mentor2},
    name: 'Jane Smith',
    profession: 'Data Scientist',
    projects: ['React', 'Node.Js'],
    description: 'Jane is a data scientist with expertise in data visualization and statistical analysis.',
  },
  {
    image: {mentor3},
    name: 'Ruth Wossen',
    profession: 'Software Engineer',
    projects:['React', 'Node.Js'],
    description: 'John is a software engineer with experience in web development and machine learning.',
  },
  {
    image: {mentor4},
    name: 'Yid Tebeje',
    profession: 'Data Scientist',
    projects: ['React', 'Node.Js'],
    description: 'Jane is a data scientist with expertise in data visualization and statistical analysis.',
  },
  {
    image: {mentor5},
    name: 'Daniel Wossen',
    profession: 'Software Engineer',
    projects: ['React', 'Node.Js'],
    description: 'John is a software engineer with experience in web development and machine learning.',
  },
  {
    image: {mentor6},
    name: 'Yosef Shimels',
    profession: 'Data Scientist',
    projects: ['React', 'Node.Js'],
    description: 'Jane is a data scientist with expertise in data visualization and statistical analysis.',
  },
  {
    image: {mentor7},
    name: 'Eden Shimels',
    profession: 'Software Engineer',
    projects: ['React', 'Node.Js'],
    description: 'John is a software engineer with experience in web development and machine learning.',
  },
  {
    image: {mentor8},
    name: 'Abel Tadele',
    profession: 'Data Scientist',
    projects: ['React', 'Node.Js'],
    description: 'Jane is a data scientist with expertise in data visualization and statistical analysis.',
  },
];

function MentorsPage() {
  return (
    <div className="bg-cyan-500 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4">Meet Our Mentors</h1>
        <p className="text-white mb-8">Browse our list of mentors and find the right one for you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mentors.map((mentor) => (
            <MentorrCard key={mentor.name} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MentorsPage;