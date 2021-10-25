import React from 'react'

function Cover() {
    return (
        <>
             <section id="hero" className="d-flex align-items-center">
        <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
      <h1>Your New Online Presence with Bethany</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <div className="row"> 
      <div className="col-lg-5"></div>
      <div className="col-lg-2">
      <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
  <i class="bi bi-search" id="contact"></i>
  </span>
</div>  </div>  </div>  
</div>

  </section> 
        </>
    )
}

export default Cover