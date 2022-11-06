import React from "react";


function WhyUs(){
    return( 
        <section className="wu">
      <div className="container">
      <h2>Why Us?</h2>
      <p>mengapa harus pilih Binar Car Rental</p>
      <div className="container text-center wu-col">
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted"><img src="./images/icon_complete.png" alt="tumbsup"/></h6>
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, 
                  kondisi masih baru, bersih dan 
                  terawat</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted"><img src="./images/icon_price.png" alt="price"/></h6>
                <h5 className="card-title">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa 
                  bandingkan harga kami dengan
                  rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted"><img src="./images/icon_24hrs.png" alt="hrs"/></h6>
                <h5 className="card-title no-3">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda 
                  selama 24 jam nonstop. Kami juga 
                  tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted"><img src="./images/icon_professional.png" alt="pro"/></h6>
                <h5 className="card-title no-4">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, 
                  berpengalaman, jujur, ramah dan 
                  selalu tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
        </section>
    );
};

export default WhyUs