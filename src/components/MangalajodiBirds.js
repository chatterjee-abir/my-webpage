import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './MangalajodiBirdsStyles.css'


function MangalajodiBirds() {

    const mangalajodiBirdsArr = [
        { src: '/Images/AC-Bird-Images/MangalajodiBirds/D85_0489.jpg', title: "0489", species: "Blue Tailed Bee Eater" },
        { src: '/Images/AC-Bird-Images/MangalajodiBirds/D85_0600.jpg', title: "0600", species: "Brahminy Kite" },
        { src: '/Images/AC-Bird-Images/MangalajodiBirds/D85_2543-MangalajodiCardCover.jpg', title: "2543-MangalajodiCardCover", species: "Northern Shoveler" },
        { src: '/Images/AC-Bird-Images/MangalajodiBirds/D85_2604.jpg', title: "2604", species: "Northern Shoveler Pair" },
        { src: '/Images/AC-Bird-Images/MangalajodiBirds/D85_2751.jpg', title: "2751", species: "Common Teal" },
        { src: '/Images/AC-Bird-Images/MangalajodiBirds/D85_3356.jpg', title: "3356", species: "Black Headed Ibis" },
        { src: '/Images/AC-Bird-Images/MangalajodiBirds/D85_3413.jpg', title: "3413", species: "Black Headed Ibis" },
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
                {mangalajodiBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: mangalajodiBirdsArr, selectedImageIndex: index }} >
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

export default MangalajodiBirds