const Section2 = () =>{
  const section2 = [{
    h1: "Why Choose Mentor?",
    p1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit  Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.',
    h2: "Corporis voluptates sit",
    p2: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    h3:"Ullamco laboris ladore pan",
    p3: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    h4: "Labore consequatur",
    p4: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
  }]
    return(
      <>
      {section2.map((e)=>
        <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
  
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>{e.h1}</h3>
                <p>
                {e.p1}
                </p>
                <div className="text-center">
                  <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4>{e.h2}</h4>
                      <p>{e.p2}</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>{e.h3}</h4>
                      <p>{e.p3}</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>{e.h4}</h4>
                      <p>{e.p4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
        )}
        </>
        
    )
}

export default Section2;