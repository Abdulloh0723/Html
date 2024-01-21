const Features = () =>{
  const features = [{
    h1: "Lorem Ipsum",
    h2:"Dolor Sitema",
    h3:"Sed perspiciatis",
    h4:"Magni Dolores",
    h5: "Nemo Enim",
    h6: "Eiusmod Tempor",
    h7: "Midela Teren",
    h8: "Pira Neve",
    h9: "Dirada Pack",
    h10:"Moton Ideal",
    h11:"Verdo Park",
    h12: "Flavor Nivelanda"

  }]
    return(
      <>
      {features.map((e)=>
        <section id="features" class="features">
        <div class="container" data-aos="fade-up">
  
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-lg-3 col-md-4">
              <div class="icon-box">
                <i class="ri-store-line" style={{color: '#ffbb2c'}}></i>
                <h3><a href="">{e.h1}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
                <h3><a href="">{e.h2}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
                <h3><a href="">{e.h3}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div class="icon-box">
                <i class="ri-paint-brush-line" style={{color: '#e361ff'}}></i>
                <h3><a href="">{e.h4}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-database-2-line" style={{color: '#47aeff'}}></i>
                <h3><a href="">{e.h5}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-gradienter-line" style={{color: '#ffa76e'}}></i>
                <h3><a href="">{e.h6}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
                <h3><a href="">{e.h7}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-price-tag-2-line" style={{color: '#4233ff'}}></i>
                <h3><a href="">{e.h8}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-anchor-line" style={{color: '#b2904f'}}></i>
                <h3><a href="">{e.h9}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-disc-line" style={{color: '#b20969'}}></i>
                <h3><a href="">{e.h10}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-base-station-line" style={{color: '#ff5828'}}></i>
                <h3><a href="">{e.h11}</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-fingerprint-line" style={{color: '#29cc61'}}></i>
                <h3><a href="">{e.h12}</a></h3>
              </div>
            </div>
          </div>
  
        </div>
      </section>
        )}
       </>
    )
}

export default Features;