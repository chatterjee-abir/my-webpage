import React from 'react'
import ImageSlider from './ImageSlider';
import MyTopRow from './MyTopRow';
import './BirdsStyles.css';

function Birds() {

    const slides = [
        { src: './Images/AC-Bird-Images/D85_0396.jpg', title: "0396" },
        { src: './Images/AC-Bird-Images/D85_8751-WWM.jpg', title: "8751" },
        { src: './Images/AC-Bird-Images/D85_9648-WWM.jpg', title: "9648" },
        { src: './Images/AC-Bird-Images/D85_1299.jpg', title: "1299" },
    ];




    return (
        <div>
            <MyTopRow />
            <div className="container-fluid bird-container" data-bs-interval="2000">
                <div className="row bird-mid-row">
                    <div className="col-md-10 col-main-img-bird">
                        <ImageSlider slides={slides} />
                    </div>
                    <div className='col-md-2 img-info'>
                        <h2>Bird Image Info</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Birds