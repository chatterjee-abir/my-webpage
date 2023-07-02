import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './SikkimBirdsStyles.css'


function SikkimBirds() {

    const sikkimBirdsArr = [
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_0396.jpg', title: "0396", species: "Rufous Capped Babbler" },
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_0671.jpg', title: "0671", species: "Golden Bush Robin (Female)" },
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_0897.jpg', title: "0897", species: "Golden Bush Robin" },
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_7808.jpg', title: "7808", species: "Sultan Tit" },
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_8751.jpg', title: "8751", species: "Himalayan White-Browed Rose Finch" },
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_9648.jpg', title: "9648", species: "Green Tailed Sunbird" },
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_9813-SikkimCardCover.jpg', title: "9813-SikkimCardCover", species: "Green Tailed Sunbird" },
        { src: '/Images/AC-Bird-Images/SikkimBirds/D85_8901.jpg', title: "8901", species: "Fire Tailed Sunbird" },
    ];

    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);


    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <>
            <Row>
                {sikkimBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: sikkimBirdsArr, selectedImageIndex: index }} >
                                    <Card.Img variant="top" key={index} src={myArr.src} alt={myArr.species} onClick={() => handleImageClick(index)} />
                                    <Card.Text>{myArr.species}</Card.Text>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row >
        </>
    )
}

export default SikkimBirds