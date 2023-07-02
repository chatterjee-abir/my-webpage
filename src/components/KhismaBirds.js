import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './KhismaBirdsStyles.css'


function KhismaBirds() {

    const khismaBirdsArr = [
        { src: '/Images/AC-Bird-Images/KhismaBirds/D85_0731.jpg', title: "0731", species: "Blue Tailed Bee Eater" },
        { src: '/Images/AC-Bird-Images/KhismaBirds/D85_0812.jpg', title: "0812", species: "Blue Tailed Bee Eater" },
        { src: '/Images/AC-Bird-Images/KhismaBirds/D85_1255.jpg', title: "1255", species: "Chestnut Headed Bee Eater" },
        { src: '/Images/AC-Bird-Images/KhismaBirds/D85_1275.jpg', title: "1275", species: "White Throated Kingfisher" },
        { src: '/Images/AC-Bird-Images/KhismaBirds/D85_1299-KhismaCardCover.jpg', title: "1299-KhismaCardCover", species: "Chestnut Headed Bee Eater" },
        { src: '/Images/AC-Bird-Images/KhismaBirds/D85_1300.jpg', title: "1300", species: "Chestnut Headed Bee Eater" },
        { src: '/Images/AC-Bird-Images/KhismaBirds/D85_1302.jpg', title: "1302", species: "Chestnut Headed Bee Eater" },
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
                {khismaBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: khismaBirdsArr, selectedImageIndex: index }} >
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

export default KhismaBirds