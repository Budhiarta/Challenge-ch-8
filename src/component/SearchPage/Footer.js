import React from "react";


function Footer(){
    return( 
    <div>  
    <footer>
          <div className="foot-content">
            <div className="container">
              <div className="row">

                <div className="col-lg-3">
                  <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  <p></p>
                  <p>binarcarrental@gmail.com</p>
                  <p></p>
                  <p>081-233-334-808</p>
                </div> 

                <div className="col-lg-3 foot_2">
                  <p>Our services</p>
                  <p></p>
                  <p>Why Us</p>
                  <p></p>
                  <p>Testimonial</p>
                  <p></p>
                  <p>FAQ</p>
                </div>

                <div className="col-lg-3">
                  <p>Connect with us</p>
                  <img src="./images/icon_facebook.png" alt="fb"/>
                  <img src="./images/icon_instagram.png" alt="ig"/>
                  <img src="./images/icon_twitter.png" alt="twit"/>
                  <img src="./images/icon_mail.png" alt="mail"/>
                  <img src="./images/icon_twitch.png" alt="tw"/>
                </div>
                
                <div className="col-lg-3">
                  <p>Copyright Binar 2022</p>
                  <img src="./images/Rectangle74.png" alt="kotak"/>
                </div>

              </div>
            </div>
          </div>
        </footer>
        </div> 
    );
};

export default Footer;