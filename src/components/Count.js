export default function Count(){
  const count = [{
    span1: 1232,
    p1:"Students",
    span2:64,
    p2:"Courses",
    span3: 42 ,
    p3: "Events" , 
    span4: 15 ,
    p4: "Trainers" ,



  }]
    return(
      <>
      {count.map((e)=>
        <section id="counts" className="counts section-bg">
        <div className="container">
  
          <div className="row counters">
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter">{e.span1}</span>
              <p>{e.p1}</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter">{e.span2}</span>
              <p>{e.p2}</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter">{e.span3}</span>
              <p>{e.p3}</p>
            </div>
  
            <div className="col-lg-3 col-6 text-center">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">{e.span4}</span>
              <p>{e.p4}</p>
            </div>
  
          </div>
  
        </div>
      </section>
        )}



      </>
    )
}