export default function About(){
  const about = [{
    img:"assets/img/about.jpg",
    h3:"Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
    p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ul:{
      li1:"Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      li2:"Duis aute irure dolor in reprehenderit in voluptate velit.",
      li3:"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",

    },
    p2:" Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
    
  }]
    return(
      <>
      {about.map((e)=>
      <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={e.img} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>{e.h3}</h3>
            <p class="fst-italic">
              {e.p}
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i>{e.ul.li1}</li>
              <li><i class="bi bi-check-circle"></i>{e.ul.li2}</li>
              <li><i class="bi bi-check-circle"></i>{e.ul.li3}</li>
            </ul>
            <p>
             {e.p2}
            </p>

          </div>
        </div>

      </div>
    </section>
        )}
        
      </>
    )
}