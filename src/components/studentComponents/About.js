import React from 'react'

function About() {
    return (
      <>
  <section id="about" className="about">
    <div className="container">
      <div className="row content">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
          <h2>Platfom e-learning</h2>
          <h3>    Get the skills of tomorrow.<br/>
                    Learn to learn efficiently.<br/>
                    Take control of your career for good.</h3>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
          <p>
      
          </p>
          <ul>
            <li><i className="ri-check-double-line" />Healthcare</li> 
            <li><i className="ri-check-double-line" />Professional Development</li>
            <li><i className="ri-check-double-line" /> Technology</li>
            <li><i className="ri-check-double-line" /> Cloud and IT</li>
            <li><i className="ri-check-double-line" /> Computer Science</li>
            <li><i className="ri-check-double-line" /> Data science</li>
            <li><i className="ri-check-double-line" />Engineering & Physical Sciences</li>

          </ul>
          <p className="font-italic">
           
          </p>
        </div>
      </div>
    </div>
  </section>
</>

    )
}

export default About
