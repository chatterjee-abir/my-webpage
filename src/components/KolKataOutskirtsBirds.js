import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './KolkataOutskirtsBirdsStyles.css'


function KolkataOutskirtsBirds() {

    const kolkataOutskirtsBirdsArr = [
        { src: '/Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_5814.jpg', title: "5814", species: "Honey Bee" },
        { src: '/Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_5815.jpg', title: "5815", species: "Honey Bee" },
        { src: '/Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_7876.jpg', title: "7876", species: "Oriental White Eye" },
        { src: '/Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_7967.jpg', title: "7967", species: "Oriental White Eye" },
        { src: '/Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_8007.jpg', title: "8007", species: "Oriental White Eye" },
        { src: '/Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_8300.jpg', title: "8300", species: "Oriental White Eye" },
        { src: '/Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_8165-KolkataOutskirtsCardCover.jpg', title: "8165-KolkataOutskirtsCardCover", species: "Oriental White Eye" },

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
                {kolkataOutskirtsBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: kolkataOutskirtsBirdsArr, selectedImageIndex: index }} >
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

export default KolkataOutskirtsBirds