import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './GaneshgudiBirdsStyles.css'


function GaneshgudiBirds() {

    const ganeshgudiBirdsArr = [
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_0319.jpg', title: "0319", species: "Dark Fronted Babbler" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_0914.jpg', title: "0914", species: "Oriental White Eye" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_1160.jpg', title: "1160", species: "Black Lored Tit" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_2331.jpg', title: "2331", species: "White Bellied Blue Flycatcher" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_3962.jpg', title: "3962", species: "Black Naped Monarch" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_5533.jpg', title: "5533", species: "White Bellied Blue Flycatcher Female" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_5623.jpg', title: "5623", species: "Black Naped Monarch" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_5683-OMHCardCover.jpg', title: "5683-OMHCardCover", species: "Flame Throated Bulbul" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_6619.jpg', title: "6619", species: "Indian Paradise Flycatcher" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_6640.jpg', title: "6640", species: "Indian Paradise Flycatcher" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_6858.jpg', title: "6858", species: "Tickell's Blue Flycatcher" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_7018.jpg', title: "7018", species: "Oriental White Eye" },
        { src: '/Images/AC-Bird-Images/GaneshgudiBirds/D85_9892.jpg', title: "9892", species: "Grey Headed Canary Flycatcher" },
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
                {ganeshgudiBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: ganeshgudiBirdsArr, selectedImageIndex: index }} >
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

export default GaneshgudiBirds