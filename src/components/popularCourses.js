const PopularCourses = () =>{
   const popularCourses = [{
    h:"Courses",
    p:"Popular Courses",
    Antonio:{
      img1:"assets/img/course-1.jpg",
      h2:"Web Development",
      p2:"$169",
      h3:"Website Design",
      p3:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      img2:"assets/img/trainers/trainer-1.jpg",
      span:"Antonio",
      i1:50,
      i2:65,

        
  },
  Lana:{
    img1:"assets/img/course-2.jpg",
    h2:"Marketing",
    p2:"$250",
    h3:"Search Engine Optimization",
    p3:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    img2:"assets/img/trainers/trainer-2.jpg",
    span:"Lana",
    i1:35,
    i2:42,
    
      
},
Brandon:{
  img1:"assets/img/course-3.jpg",
  h2:"Content",
  p2:"$180",
  h3:"Copywriting",
  p3:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
  img2:"assets/img/trainers/trainer-3.jpg",
  span:"Brandon",
  i1:20,
  i2:85,
  
    
}


   }]
    return(
      <>
      {popularCourses.map((e)=>
         <section id="popular-courses" class="courses">
         <div class="container" data-aos="fade-up">
   
           <div class="section-title">
             <h2>{e.h}</h2>
             <p>{e.p}</p>
           </div>
   
           <div class="row" data-aos="zoom-in" data-aos-delay="100">
   
             <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
               <div class="course-item">
                 <img src={e.Antonio.img1} class="img-fluid" alt="..."/>
                 <div class="course-content">
                   <div class="d-flex justify-content-between align-items-center mb-3">
                     <h4>{e.Antonio.h2}</h4>
                     <p class="price">{e.Antonio.p2}</p>
                   </div>
   
                   <h3><a href="course-details.html">{e.Antonio.h3}</a></h3>
                   <p>{e.Antonio.p3}</p>
                   <div class="trainer d-flex justify-content-between align-items-center">
                     <div class="trainer-profile d-flex align-items-center">
                       <img src={e.Antonio.img2} class="img-fluid" alt=""/>
                       <span>{e.Antonio.span}</span>
                     </div>
                     <div class="trainer-rank d-flex align-items-center">
                       <i class="bx bx-user"></i>&nbsp;{e.Antonio.i1}
                       &nbsp;&nbsp;
                       <i class="bx bx-heart"></i>&nbsp;{e.Antonio.i2}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
               <div class="course-item">
                 <img src={e.Lana.img1} class="img-fluid" alt="..."/>
                 <div class="course-content">
                   <div class="d-flex justify-content-between align-items-center mb-3">
                     <h4>{e.Lana.h2}</h4>
                     <p class="price">{e.Lana.p2}</p>
                   </div>
   
                   <h3><a href="course-details.html">{e.Lana.h3}</a></h3>
                   <p>{e.Lana.p3}</p>
                   <div class="trainer d-flex justify-content-between align-items-center">
                     <div class="trainer-profile d-flex align-items-center">
                       <img src={e.Lana.img2} class="img-fluid" alt=""/>
                       <span>{e.Lana.span}</span>
                     </div>
                     <div class="trainer-rank d-flex align-items-center">
                       <i class="bx bx-user"></i>&nbsp;{e.Lana.i1}
                       &nbsp;&nbsp;
                       <i class="bx bx-heart"></i>&nbsp;{e.Lana.i2}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
               <div class="course-item">
                 <img src={e.Brandon.img1} class="img-fluid" alt="..."/>
                 <div class="course-content">
                   <div class="d-flex justify-content-between align-items-center mb-3">
                     <h4>{e.Brandon.h2}</h4>
                     <p class="price">{e.Brandon.p2}</p>
                   </div>
   
                   <h3><a href="course-details.html">{e.Brandon.h3}</a></h3>
                   <p>{e.Brandon.p3}</p>
                   <div class="trainer d-flex justify-content-between align-items-center">
                     <div class="trainer-profile d-flex align-items-center">
                       <img src={e.Brandon.img2} class="img-fluid" alt=""/>
                       <span>{e.Brandon.span}</span>
                     </div>
                     <div class="trainer-rank d-flex align-items-center">
                       <i class="bx bx-user"></i>&nbsp;{e.Brandon.i1}
                       &nbsp;&nbsp;
                       <i class="bx bx-heart"></i>&nbsp;{e.Brandon.i2}
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

export default PopularCourses;