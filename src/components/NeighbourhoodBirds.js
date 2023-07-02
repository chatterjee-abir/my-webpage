import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './NeighbourhoodBirdsStyles.css'


function NeighbourhoodBirds() {

    const neighbourhoodBirdsArr = [
        { src: '/Images/AC-Bird-Images/NeighbourhoodBirds/D85_6982.jpg', title: "6982", species: "Thick Billed Green Pigeon" },
        { src: '/Images/AC-Bird-Images/NeighbourhoodBirds/D85_7113-SaltlakeRHCardCover.jpg', title: "7113-SaltlakeRHCardCover", species: "Thick Billed Green Pigeon" },
        { src: '/Images/AC-Bird-Images/NeighbourhoodBirds/D85_7141.jpg', title: "7141", species: "Thick Billed Green Pigeon" },
        { src: '/Images/AC-Bird-Images/NeighbourhoodBirds/D85_7228.jpg', title: "7228", species: "Blue Throated Barbet" },
        { src: '/Images/AC-Bird-Images/NeighbourhoodBirds/D85_8229.jpg', title: "8229", species: "Lineated Barbet" },

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
                {neighbourhoodBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: neighbourhoodBirdsArr, selectedImageIndex: index }} >
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

export default NeighbourhoodBirds