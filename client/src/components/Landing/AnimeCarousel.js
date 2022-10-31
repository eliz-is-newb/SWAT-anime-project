import {Carousel, Button } from "react-daisyui"

function AnimeCarousel() {
       
   
  

 

  return (
    <Carousel className="rounded-box  mx-32 -p-2" style={{border: "solid 5px black",borderRadius:"1px"}}>
  
      <Carousel.Item
        src="/assets/img/sample-anime-2.jpg"
        alt="demo anime image 2"
      />
      <Carousel.Item
        src="/assets/img/sample-anime-3.jpg"
        alt="demo anime image 3"
      />
      <Carousel.Item
        src="/assets/img/sample-anime-5.png"
        alt="demo anime image 5"
      />
   
    </Carousel>
  )
  }

  


export default AnimeCarousel;