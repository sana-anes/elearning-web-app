import React from 'react'
import { NavLink} from "react-router-dom";

function Footer() {
    return (
        
              <>
  <footer id="footer">

<div className="footer-top" id="footer">
  <div className="container">
    <div className="row">

      <div className="col-lg-5 col-md-6 footer-contact">
        <h6>National School of Computer Science</h6>
        <p>
        University of Manouba <br/>
        <div ><img  className="logoo" src="./assets/img/ensi.png" alt="ENSI" /></div>
     
        </p>
      </div>

      <div className="col-lg-4 col-md-6 footer-links">
      <strong id="contact"> Phone:</strong> 71 600 444<br/>
          <strong id="contact"> Email:</strong>direction@ensi-uma.tn<br/>
          <br/>
          <div className="social-links text-center text-md-left pt-3 pt-md-0">
    <a href="https://www.facebook.com/ENSI.tunisie" className="facebook"><i className="bx bxl-facebook"></i></a>
    <a href="https://www.linkedin.com/school/ensitn/" className="linkedin"><i className="bx bxl-linkedin"></i></a>

  </div>
  <div className="col-lg-3 col-md-6 footer-links"></div>
      </div>
      <div className="col-lg-3 col-md-6 footer-newsletter">
      <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay={200}>
          <p>
      
          </p>
          <ul>
          <li>
                  <a className="nav-link scrollto " href="#hero">
                    <NavLink className="scrollto" to="/">
                      Home
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/home#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="/home#portfolio">
                    Courses
                  </a>
                </li>


                <li>
                  <a className="nav-link scrollto" href="/home#contact">
                    Contact
                  </a>
                </li>
          </ul>
          <p className="font-italic">
           
          </p>
        </div>
      </div>

    </div>
  </div>
  </div>

<div className="container d-md-flex py-4">

  
  
</div>
</footer>
</>
       
    )
}

export default Footer
