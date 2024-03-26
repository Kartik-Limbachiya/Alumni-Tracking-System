import React, { useEffect, useState } from 'react';
import Typewriter from 'react-typewriter-effect';
import Developer1Photo from '../images/Kartik1.jpeg';
import Developer2Photo from '../images/Anugrah.jpg';
import Developer3Photo from '../images/Ashaaf.jpg';
import Developer4Photo from '../images/Suyash1.jpeg';
import './About.css'; // Import your CSS file


const developers = [
  {
    id: 1,
    name: 'Kartik',
    photo: Developer1Photo,
    points: [
      'Skilled in React development',
      'Strong problem-solving skills',
      'Experience with front-end technologies',
    ],
  },
  {
    id: 2,
    name: 'Anugrah',
    photo: Developer2Photo,
    points: [
      'Expertise in JavaScript',
      'Knowledgeable in UI/UX design',
      'Effective team player',
    ],
  },
  {
    id: 3,
    name: 'Ashaaf',
    photo: Developer3Photo,
    points: [
      'Proficient in HTML/CSS',
      'Attention to detail',
      'Good communication skills',
    ],
  },
  {
    id: 4,
    name: 'Suyash',
    photo: Developer4Photo,
    points: [
      'Experience with backend technologies',
      'Ability to work under pressure',
      'Dedicated and motivated',
    ],
  },
  // Add other developers here
];

const About = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const text = 'Meet Our Developers';

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypewriterText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <h1>{typewriterText}</h1>
      <div className="developers-grid">
        {developers.map(developer => (
          <div key={developer.id} className="developer-card">
            <img src={developer.photo} alt={developer.name} className="developer-photo" />
            <h2>{developer.name}</h2>
            <ul className="points-list">
              {developer.points.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
