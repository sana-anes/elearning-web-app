import React from 'react'

function About() {
    return (
      <>
  <section id="about" className="about">
    <div className="container">
      <div className="row content">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
          <h2>Platfom e-learning</h2>
          {/* <h3>    Get the skills of tomorrow.<br/>
                    Learn to learn efficiently.<br/>
                    Take control of your career for good.</h3> */}
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
          <p>
      
          </p>
          <ul>
            <li><i className="ri-check-double-line" />Get the skills of tomorrow.</li> 
            <li><i className="ri-check-double-line" />Learn to learn efficiently.</li>
            <li><i className="ri-check-double-line" />Take control of your career for good.</li>
            {/* <li><i className="ri-check-double-line" /> Cloud and IT</li>
            <li><i className="ri-check-double-line" /> Computer Science</li>
            <li><i className="ri-check-double-line" /> Data science</li>
            <li><i className="ri-check-double-line" />Engineering & Physical Sciences</li> */}
<li></li>
          </ul>
          <p className="font-italic">
           
          </p>
        </div>
        
      </div>
      <div  className="row content"><h5> ENSI is a regional class engineering college where teaching and research - with practical relevance as a guiding principle - continues to be its primary focus.

 <br/>

ENSI's mission is to advance knowledge and educate students in science, technology and other fields of study that will best serve Tunisia in the 21st century. </h5></div>
    </div>
  </section>
</>

    )
}

export default About
