import React from 'react'
import { NavLink } from "react-router-dom";

function Classement() {
    return (
        <>
            <section id="CourseTitle" className="d-flex align-items-center">
        <div className="container  position-relative" data-aos="fade-in" data-aos-delay="200">
          
        <main id="main">
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-left">
          <h2>My Profile</h2>
        </div>
       </div>
    </section> </main>

        </div>
        </section>
      <div className="container mt-5">
  <div className="row">
    <div className="col-lg-4 pb-5">
      {/* Account Sidebar*/}
      <div className="author-card pb-3">
        <div className="author-card-cover" style={{backgroundImage: 'url(https://demo.createx.studio/createx-html/img/widgets/author/cover.jpg)'}}><a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title data-original-title="You currently have 290 Reward points to spend"><i className="fa fa-award text-md" />&nbsp;290 points</a></div>
        <div className="author-card-profile">
          <div className="author-card-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams" />
          </div>
          <div className="author-card-details">
            <h5 className="author-card-name text-lg">Daniel Adams</h5><span className="author-card-position">Joined February 06, 2017</span>
          </div>
        </div>
      </div>
      <div className="wizard">
        <nav className="list-group list-group-flush">
        <a className="list-group-item " href="#"><i className="fe-icon-user text-muted" /><NavLink className="nav-link" to="/student/myprofile">Profile Settings</NavLink></a>
        <a className="list-group-item active" href="#"><i className="fe-icon-map-pin text-muted" /><NavLink className="nav-link" to="/student/myclassement">Classement</NavLink></a>
          
        
        </nav>
      </div>
    </div>
    {/* Profile Settings*/}
    <div className="col-lg-8 pb-5">
      Your classment is ...
    </div>
  </div>
</div>
        </>
    )
}

export default Classement
