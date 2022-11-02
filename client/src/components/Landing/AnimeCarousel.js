import {Carousel, Button } from "react-daisyui"

function AnimeCarousel() {
       
   
  

 

  return (
    <Carousel className="rounded-box  mx-32 -p-2" style={{border: "solid 0px black",
    marginLeft:"200px", 
    height:"400px",borderRadius:"1px"}}>
  
      <Carousel.Item
      style={{ border:"1px solid black",height:"380px", margin:"2px", marginRight:"20px"}}
        src="/assets/img/sample-anime-2.jpg"
        alt="demo anime image 2"
      />
      <Carousel.Item
       style={{border: "solid 1px black", height:"380px" , margin:"2px",  marginRight:"20px"}}
        src="/assets/img/sample-anime-3.jpg"
        alt="demo anime image 3"
      />
      <Carousel.Item
       style={{border: "solid 1px black", height:"380px", margin:"2px", marginRight:"20px"}}
        src="/assets/img/sample-anime-5.png"
        alt="demo anime image 5"
      />
   
    </Carousel>
  )
  }

  


export default AnimeCarousel;