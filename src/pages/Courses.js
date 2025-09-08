import React from 'react';
import '../styles/Courses.css';

function Courses() {
  const courses = [
    {
      title: 'Foundation',
      description: 'Learn sounds, letters, and simple words to build confidence.'
    },
    {
      title: 'Essential',
      description: 'Improve grammar and everyday conversation skills.'
    },
    {
      title: 'Evolution',
      description: 'Engage in discussions and advanced reading for fluency.'
    },
    {
      title: 'Mastery',
      description: 'Achieve precision in academic and professional English.'
    }
  ];

  return (
    <div className="courses-container">
      <h2 data-aos="fade-up">Our Courses</h2>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div className="course-card" key={index} data-aos="fade-up">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
