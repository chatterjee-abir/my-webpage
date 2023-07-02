import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './SoleBirdImageStyles.css'



const SoleBirdImage = () => {


    const location = useLocation();
    const { myArr, selectedImageIndex } = location.state;
    const [activeIndex, setActiveIndex] = useState(selectedImageIndex);


    const handleSelect = (selectedImageIndex) => {
        setActiveIndex(selectedImageIndex);
    };

    const handlePrevClick = () => {
        const prevIndex = (activeIndex - 1 + myArr.length) % myArr.length;
        setActiveIndex(prevIndex);
    };

    const handleNextClick = () => {
        const nextIndex = (activeIndex + 1) % myArr.length;
        setActiveIndex(nextIndex);
    };

    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);


    return (
        // <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 soleBirdImageCol align-items-stretch">
                    {/* Insert Carousel code start */}
                    <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel" onSelect={handleSelect} >
                        {myArr.map((myVar, index) => (
                            <div class="carousel-inner" data-bs-wrap="true" >
                                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} data-bs-interval="1000">
                                    <img src={myVar.src} class="img-fluid" alt="..." />
                                </div>
                            </div>
                        ))}
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrevClick}>
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNextClick}>
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Carousel code end */}
                </div>
                <div className="col-md-2 image-info">
                    <h1>Image Info</h1>
                </div>
            </div>
            <div className="row footer-row">
                <div className="col-md-12 footer-col">
                    {/* <h1>Footer here</h1> */}
                </div>
            </div>
        </div>
        // </div >
    )
}

export default SoleBirdImage