import React from 'react';
import '../styles/About.css';
import staff1 from '../assets/staff1.jpg';
import staff2 from '../assets/staff2.jpg';

function About() {
  const staff = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & Head Trainer',
      image: staff1,
      description: 'PhD in English Literature with 15+ years of teaching experience. Passionate about transforming lives through effective communication.',
      specialization: 'Advanced Grammar & Pronunciation'
    },
    {
      name: 'Ms. Priya Sharma',
      role: 'Senior English Trainer',
      image: staff2,
      description: 'Masters in English with expertise in conversational English and soft skills development. Dedicated to student success.',
      specialization: 'Conversational English & Soft Skills'
    },
    {
      name: 'Mr. Arjun Patel',
      role: 'Communication Coach',
      image: staff1,
      description: 'Certified communication coach specializing in public speaking and presentation skills. Former corporate trainer.',
      specialization: 'Public Speaking & Presentations'
    },
    {
      name: 'Ms. Kavya Nair',
      role: 'Academic Coordinator',
      image: staff2,
      description: 'Educational psychology background with focus on personalized learning approaches. Ensures quality education delivery.',
      specialization: 'Academic Planning & Student Support'
    }
  ];

  return (
    <div className="about-container">
      <h2 data-aos="fade-up" data-aos-duration="1000">Meet Our Expert Team</h2>
      <div className="staff-cards">
        {staff.map((member, index) => (
          <div 
            className="staff-card" 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={index * 200}
          >
            <div className="card-inner">
              <div className="image-container">
                <img src={member.image} alt={member.name} />
                <div className="golden-overlay"></div>
              </div>
              <div className="card-content">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="specialization">{member.specialization}</p>
                <p className="description">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;