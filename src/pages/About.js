import React from 'react';
import '../styles/About.css';
import staff1 from '../assets/staff1.jpg';
import staff2 from '../assets/staff2.jpg';

function About() {
  const staff = [
    {
      name: 'John Doe',
      role: 'Founder & Trainer',
      image: staff1,
      description: 'Passionate about teaching and empowering students to communicate effectively.'
    },
    {
      name: 'Jane Doe',
      role: 'Manager',
      image: staff2,
      description: 'Committed to providing a supportive environment for learners.'
    }
  ];

  return (
    <div className="about-container">
      <h2 data-aos="fade-up">Meet Our Team</h2>
      <div className="staff-cards">
        {staff.map((member, index) => (
          <div className="card" key={index} data-aos="fade-up">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p><em>{member.role}</em></p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
