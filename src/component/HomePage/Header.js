import React from "react";


function Header(){
    return(
    <section className="home">
    <br/>
  <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="h1-home h1-home-mobile">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="p-home">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas 
                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu 
                untuk sewa mobil selama 24 jam.</p>
            <br/>
            <a href="/search" type="button" className="btn btn-success btn-home">Mulai Sewa Mobil</a>
          </div>

          <div className="col-lg-6">
            <img  className="mobil" src="./images/img_car.png" alt="car"/>
          </div>
        </div>
        </div>
      </section>
    );
}

export default Header;