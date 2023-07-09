import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SoleBirdImageStyles.css';
import EXIF from 'exif-js';

const loadImage = (imageSrc) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            EXIF.getData(image, function () {
                const exifData = EXIF.getAllTags(this);
                resolve(exifData);
            });
        };
        image.onerror = (error) => {
            reject(error);
        };
    });
};

const SoleBirdImage = () => {
    const location = useLocation();
    const { myArr, selectedImageIndex } = location.state;
    const [activeIndex, setActiveIndex] = useState(selectedImageIndex);
    const [exifData, setExifData] = useState([]);

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

        // window.addEventListener('contextmenu', function (e) {
        //     e.preventDefault();
        // }, false);

        const fetchExifData = async () => {
            const exifDataPromises = myArr.map((myVar) => loadImage(myVar.src));
            try {
                const exifDataResults = await Promise.all(exifDataPromises);
                setExifData(exifDataResults);
            } catch (error) {
                console.error('Error loading EXIF data:', error);
            }
        };

        fetchExifData();



        return () => {
            // Cleanup if needed
        };
    }, [myArr]);




    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 soleBirdImageCol align-items-stretch">
                    {/* Insert Carousel code start */}
                    <div
                        id="carouselExample"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                        onSelect={handleSelect}
                    >
                        <div className="carousel-inner" data-bs-wrap="true">
                            {myArr.map((myVar, index) => (
                                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} data-bs-interval="3000" >
                                    <img src={myVar.src} className="img-fluid" alt="..." />
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                            onClick={handlePrevClick}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                            onClick={handleNextClick}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Carousel code end */}
                </div>
                <div className="col-md-2 image-info">
                    <h1>Image Information</h1>
                    {exifData[activeIndex] && (
                        <ul>
                            {Object.entries(exifData[activeIndex]).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}:</strong> {String(value)}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="row footer-row">
                <div className="col-md-12 footer-col">
                    <h1>Footer here</h1>
                </div>
            </div>
        </div>
    );
};

export default SoleBirdImage;
