import React from "react";


function Navbar (){
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container con_nav">
            <a className="navbar-brand" href="#"><img className="kotak" src="./images/logo.png" alt=""/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"/>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"/>
            <li className="nav-item">
              <a className="nav-link" href="#">Our service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Why Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-success" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                register
              </a>
            </li>
        </div>
    </nav>
    
 

  
        <div className="offcanvas offcanvas-end" tabindex="1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">BCR</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul>
          <li><a href="#"></a>Our service</li>
          <li><a href="#"></a>Why Us</li>
          <li><a href="#"></a>Testimonial</li>
          <li><a href="#"></a>FAQ</li>
          <li className="nav-item">
            <a className="btn btn-success btn_can" href="#">Register
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
    );
};

export default Navbar;