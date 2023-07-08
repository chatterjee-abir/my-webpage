import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './SoleBirdImageStyles.css'
import EXIF from 'exif-js';



const SoleBirdImage = () => {


    const location = useLocation();
    const { myArr, selectedImageIndex } = location.state;
    const [activeIndex, setActiveIndex] = useState(selectedImageIndex);
    const [exifData, setExifData] = useState(null);



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
        // window.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            // window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    const loadImage = (imageSrc) => {
        const image = new Image();
        image.src = imageSrc;
        // image.src = imageSrc + '?' + new Date().getTime();
        console.log(image.src);
        image.onload = () => {
            EXIF.getData(image, function () {
                const exifData = EXIF.getAllTags(this);
                setExifData(exifData); // Update the exifData state variable
            });
        };
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 soleBirdImageCol align-items-stretch">
                    {/* Insert Carousel code start */}
                    <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel" onSelect={handleSelect} >
                        <div class="carousel-inner" data-bs-wrap="true" >
                            {myArr.map((myVar, index) => (
                                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} data-bs-interval="3000" >
                                    <img src={myVar.src} class="img-fluid" alt="..." />
                                </div>
                            ))}
                        </div>
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
                    <h1>Image Information</h1>
                    {exifData && Object.entries(exifData).map(([key, value]) => (
                        <h5 key={key}>
                            <strong>{key}:</strong> {String(value)}
                        </h5>
                    ))}
                </div>
            </div>
            <div className="row footer-row">
                <div className="col-md-12 footer-col">
                    <h1>Footer here</h1>
                </div>
            </div>
        </div>
    )
}

export default SoleBirdImage