import React from 'react'
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom'
import MyTopRow from './MyTopRow';
import './MammalsStyles.css';

function Birds() {

    const slides = [
        { src: './Images/AC-Tiger-Images/_MG_2984.jpg', title: "2984" },
        { src: './Images/AC-Tiger-Images/_MG_3022.jpg', title: "3022" },
        { src: './Images/AC-Tiger-Images/_MG_3021.jpg', title: "3021" },
        { src: './Images/AC-Tiger-Images/_MG_2985.jpg', title: "2985" },
        { src: './Images/AC-Tiger-Images/_MG_2402.jpg', title: "2402" },
        { src: './Images/AC-Tiger-Images/_MG_2401.jpg', title: "2401" },
        { src: './Images/AC-Tiger-Images/_MG_2399.jpg', title: "2399" },
        { src: './Images/AC-Tiger-Images/_MG_2390.jpg', title: "2390" },
        { src: './Images/AC-Tiger-Images/_MG_7685.jpg', title: "7685" },
        { src: './Images/AC-Tiger-Images/_MG_7669.jpg', title: "7669" },
        { src: './Images/AC-Tiger-Images/_MG_3130.jpg', title: "3130" },
        { src: './Images/AC-Tiger-Images/_MG_3124.jpg', title: "3124" },
        { src: './Images/AC-Tiger-Images/_MG_3117.jpg', title: "3117" },
        { src: './Images/AC-Tiger-Images/_MG_3113.jpg', title: "3113" },
        { src: './Images/AC-Tiger-Images/_MG_3103.jpg', title: "3103" },
    ];


    return (
        <div>
            <MyTopRow />

            <div className="container-fluid mammals-container">
                <div className="row mammals-mid-row">
                    <div className="col-md-10 col-main-img-mammals">
                        <ImageSlider slides={slides} />
                    </div>
                    <div className='col-md-2 img-info-mammals'>
                        <h2>Mammals Image Info</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Birds