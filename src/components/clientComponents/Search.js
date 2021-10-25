import React from 'react'

function Search() {
    return (
       
        
         
    <>
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container">
      <div className="header-container d-flex align-items-center justify-content-between">
      <div className="row"> 
      <div className="col-lg-6">
        <div className="logo">
          <h1 className="text-light"><a href="index.html"><span>E-learning</span></a></h1>
          </div>
          </div>
         
          <div className="col-lg-5">

        <nav id="navbar" className="navbar">
      
        
      <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
  <div className="col-lg-2">
  <i class="bi bi-search" id="contact"></i></div>
  <div className="col-lg-5"></div>

  </span>
</div>  
       

          <i className="bi bi-list mobile-nav-toggle" />
         
          
        </nav>
        </div>
        </div>
      </div>
    </div>
  </header>
  
      </>  
    )
}

export default Search