import React from 'react';
import '../styles/Courses.css';

function Courses() {
  const courses = [
    {
      title: 'Foundation',
      tagline: 'Lay the first stone of your English journey.',
      description: 'The entry stage where learners gain familiarity with English sounds, letters, and simple words. Focus is on listening carefully, speaking clearly, and developing correct pronunciation while building confidence.',
      icon: '🏗️',
      color: '#E8F5E8'
    },
    {
      title: 'Essential',
      tagline: 'Build the skills that matter every day.',
      description: 'Learners progress to practical communication through short readings, simple writing tasks, and everyday conversations. Special attention is given to grammar, vocabulary, and shaping accurate pronunciation for daily use.',
      icon: '⚡',
      color: '#FFF3E0'
    },
    {
      title: 'Evolution',
      tagline: 'Grow from learner to communicator.',
      description: 'A stage of growth where learners move towards fluency by engaging in discussions, reading longer texts, and writing with clarity. They also refine their pronunciation, tone, and expression to communicate naturally and confidently.',
      icon: '🚀',
      color: '#F3E5F5'
    },
    {
      title: 'Mastery',
      tagline: 'Speak, write, and think like a master.',
      description: 'The advanced stage where learners achieve precision and sophistication in English. They can handle academic, creative, and professional contexts through strong reading, writing, and speaking skills, complemented by polished pronunciation.',
      icon: '👑',
      color: '#E3F2FD'
    }
  ];

  const softSkills = {
    title: 'Soft Skills Development',
    tagline: 'Beyond English—Be confident, be professional.',
    description: 'A standalone course designed to build confidence, communication, and personality. Learners sharpen their speaking, presentation, teamwork, problem-solving, and professional etiquette—skills that prepare them for success in academics, careers, and life.',
    icon: '💼',
    color: '#FFF8E1'
  };

  return (
    <div className="courses-container">
      <h2 data-aos="fade-up" data-aos-duration="1000">Our Premium Courses</h2>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div 
            className="course-card" 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={index * 200}
            style={{'--card-bg': course.color}}
          >
            <div className="course-icon">{course.icon}</div>
            <h3>{course.title}</h3>
            <p className="tagline">"{course.tagline}"</p>
            <p className="description">{course.description}</p>
            <button onClick={() => window.open('https://wa.me/919789547717', '_blank')}>Enroll Now</button>
          </div>
        ))}
      </div>
      
      <div className="soft-skills-section" data-aos="fade-up" data-aos-delay="800">
        <div className="soft-skills-card" style={{'--card-bg': softSkills.color}}>
          <div className="course-icon">{softSkills.icon}</div>
          <h3>{softSkills.title}</h3>
          <p className="tagline">"{softSkills.tagline}"</p>
          <p className="description">{softSkills.description}</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;