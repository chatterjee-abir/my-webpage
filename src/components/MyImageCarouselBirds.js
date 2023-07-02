import React from 'react'
import './MyImageCarouselStyles.css';


function MyImageCarouselBirds() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner" data-bs-wrap="true" data-bs-interval="500">
                    <div class="carousel-item active">
                        <img src="./Images/AC-Bird-Images/D85_8751-WWM.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./Images/AC-Bird-Images/D85_9648-WWM.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" >
                        <img src="./Images/AC-Bird-Images/D85_1299.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" >
                        <img src="./Images/AC-Bird-Images/D85_1275.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" >
                        <img src="./Images/AC-Bird-Images/D85_7808.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" >
                        <img src="./Images/AC-Bird-Images/D85_1255.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" >
                        <img src="./Images/AC-Bird-Images/D85_0731.jpg" class="d-block w-100" alt="..." />
                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default MyImageCarouselBirds