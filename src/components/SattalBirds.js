import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './SattalBirdsStyles.css'


function SattalBirds() {

    const sattalBirdsArr = [
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_8365.jpg', title: "8365", species: "Blue Throated Barbet" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_0071.jpg', title: "0071", species: "Red Billed Leiothrix" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_0368.jpg', title: "0368", species: "White Throated Laughingthrush" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_0383.jpg', title: "0383", species: "Himalayan Bulbul" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_0456.jpg', title: "0456", species: "White Throated Laughingthrush" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_1624.jpg', title: "1624", species: "Ultramarine Flycatcher" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_2042.jpg', title: "2042", species: "Indian Paradise Flycatcher" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_3984.jpg', title: "3984", species: "Blue Throated Flycatcher" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_9437-SattalCardCover.jpg', title: "9437-SattalCardCover", species: "Khalij Pheasant" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_9860.jpg', title: "9860", species: "Great Barbet" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_3873.jpg', title: "3873", species: "Indian Paradise Flycatcher" },
        { src: '/Images/AC-Bird-Images/SattalBirds/D85_1508.jpg', title: "1508", species: "Great Barbet" },
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
                {sattalBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: sattalBirdsArr, selectedImageIndex: index }} >
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

export default SattalBirds