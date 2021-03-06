import React from 'react';
import image1 from  './image/image1.jpg';
import image2 from  './image/image2.jpg';
import image3 from  './image/image3.jpg';
import image4 from  './image/image4.jpg';
import image5 from  './image/image5.jpg';
import '../App.css';


const Carousel = () => {
    return (

        // <div className = "container">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src = {image1} width= 'auto' height= '500px' alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={image2} width= 'auto' height= '500px' alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src= {image3} width= 'auto' height= '500px'alt="Third slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src= {image4} width= 'auto' height= '500px' alt="Fourth slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src= {image5} width= 'auto' height= '500px' alt="Fifth slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
        // </div>        
    )
}

export default Carousel
