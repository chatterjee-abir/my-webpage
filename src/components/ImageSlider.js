import React, { useState, useEffect } from 'react'
import './ImageSliderStyles.css'
import { Link } from 'react-router-dom'


function ImageSlider({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: 'relative',
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].src})`,
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }



    return (
        <div style={sliderStyles}>
            <div style={slideStyles}></div>
            <button type="button" class="btn btn-primary" onClick={goToPrevious}>Previous</button>
            <button type="button" class="btn btn-success" onClick={goToNext}>Next</button>
            <Link to='/'><button type="button" class="btn btn-info">Back to Home</button></Link>

        </div>
    )
}



export default ImageSlider
