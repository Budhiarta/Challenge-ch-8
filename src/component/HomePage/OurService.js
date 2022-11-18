import React from "react";




function OurService(){
    return(
        <section className="our-service">
        <div className="container-fluid">
          <div className="row">
        <div className="col-sm-6">
          <img className="cewek" src="./images/img_service.png" alt="cewek"/>
        </div>
        <div className="col-sm-6">
          <h2 className="os-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
          <p className="os-p">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih 
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas 
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <ul className="ul-os">
            <li className="li-os">
            <img className="ceklis me-3" src="./images/Group_53.png" alt="group"/> <p className="li-os-txt ml-3">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </li>
            <br/>
            <li className="li-os">
              <img className="ceklis me-3" src="./images/Group_53.png" alt="group"/> <p className="li-os-txt">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </li>
            <br/>
            <li className="li-os">
              <img className="ceklis me-3" src="./images/Group_53.png" alt="group"/> <p className="li-os-txt">Sewa Mobil Jangka Panjang Bulanan</p>
            </li>
            <br/>
            <li className="li-os">
              <img className="ceklis me-3" src="./images/Group_53.png" alt="group"/> <p className="li-os-txt">Gratis Antar - Jemput Mobil di Bandara</p>
            </li>
            <br/>
            <li className="li-os">
              <img className="ceklis me-3" src="./images/Group_53.png" alt="group"/> <p className="ms-2 li-os-txt">Layanan Airport Transfer / Drop In Out</p>
            </li>
            <br/>
          </ul>
        </div>
      </div>
      </div>
      </section>
    );
}

export default OurService;