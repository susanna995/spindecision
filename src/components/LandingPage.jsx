
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [highlightedSection, setHighlightedSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setAnimationPlayed(true);
    }

    // Highlight sections when they are in view
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setHighlightedSection(section.id);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="landing-page">
      <section id="hero" className={`hero-section ${highlightedSection === 'hero' ? 'active' : ''}`}>
      <div className="hero-text-box">
  <h1 className="hero-title">Let Fate Decide</h1>
  <p className="hero-description">Ever been unsure? Let our wheel decide your fate!</p>

        <Link to="/form" className="btn-lets-play">Let’s Play</Link>
        </div>
      </section>

      <section id="how-it-works" className={`info-section ${highlightedSection === 'how-it-works' ? 'active' : ''}`}>
        <h2 style={{ color: '#ff5733' }}>How It Works</h2>
        <div className="info-card">
          <h3>Step 1</h3>
          <p>Fill out the form with your options.</p>
        </div>
        <div className="info-card">
          <h3>Step 2</h3>
          <p>Let the wheel spin and decide your fate!</p>
        </div>
        <div className="info-card">
          <h3>Step 3</h3>
          <p>Enjoy the thrill of random choices and fate!</p>
        </div>
      </section>

      <section id="who-should-use" className={`who-should-use-section ${highlightedSection === 'who-should-use' ? 'active' : ''}`}>
        <h2>Who Should Use It?</h2>
        <p>Anyone looking to add a bit of excitement and randomness to their decisions!</p>
      </section>
    </div>
  );
};

export default LandingPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './LandingPage.css';

// const LandingPage = () => {
//   const [animationPlayed, setAnimationPlayed] = useState(false);
//   const [highlightedSection, setHighlightedSection] = useState(null);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition > 100) {
//       setAnimationPlayed(true);
//     }

//     // Highlight sections when they are in view
//     const sections = document.querySelectorAll('section');
//     sections.forEach(section => {
//       const rect = section.getBoundingClientRect();
//       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//         setHighlightedSection(section.id);
//       }
//     });
//   };

//   window.addEventListener('scroll', handleScroll);

//   return (
//     <div className="landing-page">
//       <section id="hero" className={`hero-section ${highlightedSection === 'hero' ? 'active' : ''}`}>
//       <div className="hero-text-box">
//   <h1 className="hero-title">Let Fate Decide</h1>
//   <p className="hero-description">Ever been unsure? Let our wheel decide your fate!</p>

//         <Link to="/form" className="btn-lets-play">Let’s Play</Link>
//         </div>
//       </section>

//       <section id="how-it-works" className={`info-section ${highlightedSection === 'how-it-works' ? 'active' : ''}`}>
//         <h2 style={{ color: '#ff5733' }}>How It Works</h2>
//         <div className="info-card">
//           <h3>Step 1</h3>
//           <p>Fill out the form with your options.</p>
//         </div>
//         <div className="info-card">
//           <h3>Step 2</h3>
//           <p>Let the wheel spin and decide your fate!</p>
//         </div>
//         <div className="info-card">
//           <h3>Step 3</h3>
//           <p>Enjoy the thrill of random choices and fate!</p>
//         </div>
//       </section>

//       <section id="who-should-use" className={`who-should-use-section ${highlightedSection === 'who-should-use' ? 'active' : ''}`}>
//         <h2>Who Should Use It?</h2>
//         <p>Anyone looking to add a bit of excitement and randomness to their decisions!</p>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;
