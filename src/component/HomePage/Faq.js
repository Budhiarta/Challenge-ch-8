import React from "react";

function Faq(){
    return( 
        <section className="FAQ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="h2-faq">Frequently Asked Question</h2>
              <p className="p-faq">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="col-md-6 faq2">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item mb-2" style={{border: '2px solid rgba(212, 212, 212, 1)', borderradius: '4px;'}}>
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first items accordion body.</div>
                  </div>
                </div>

                <div className="accordion-item mb-2" style={{border: '2px solid rgba(212, 212, 212, 1)', borderradius: '4px;'}}>
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                  </div>
                </div>

                <div className="accordion-item mb-2" style={{border: '2px solid rgba(212, 212, 212, 1)', borderradius: '4px;'}}>
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third items accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
                </div>

                  <div className="accordion-item " style={{border: '2px solid rgba(212, 212, 212, 1)', borderradius: '4px;'}}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Bagaimana jika terjadi kecelakaan?
                      </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Faq;