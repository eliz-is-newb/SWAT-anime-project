import {Carousel, Button } from "react-daisyui"

function AnimeCarousel() {
       
   
  

 

  return (
    <Carousel className="rounded-box  mx-20 h-2/6">
  
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