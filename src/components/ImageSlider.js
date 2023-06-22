import React, { useState } from 'react'
import './ImageSliderStyles.css'

function ImageSlider({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: 'relative',
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        // background-image: image("_MG_2984.jpg"),
        /* background-image: "url(/_MG_2984.jpg)", */

    }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        // zIndex: 1,
        cursor: "pointer",
    }


    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff#9F2B68",
        // zIndex: 1,
        cursor: "pointer",
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

            <button type="button" class="btn btn-primary" onClick={goToPrevious}>Primary</button>
            <button type="button" class="btn btn-success" onClick={goToNext}>Success</button>


            {/* <div style={leftArrowStyles} onClick={goToPrevious}>L</div>
            <div style={rightArrowStyles} onClick={goToNext}>R</div> */}
        </div>
    )
}



export default ImageSlider
