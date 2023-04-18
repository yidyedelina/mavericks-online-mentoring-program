import React from 'react'

const CourseCard = ({imgUrl, title, description }) => {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl image-full shadow-lg">
        <figure><img src={imgUrl} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Enroll Now</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CourseCard