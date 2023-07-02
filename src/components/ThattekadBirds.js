import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './ThattekadBirdsStyles.css'


function ThattekadBirds() {

    const thattekadBirdsArr = [
        { src: '/Images/AC-Bird-Images/ThattekadBirds/PBS_2606.jpg', title: "2606", species: "Rufous Treepie" },
        { src: '/Images/AC-Bird-Images/ThattekadBirds/PBS_3012.jpg', title: "3012", species: "Crimson backed Sunbird" },
        { src: '/Images/AC-Bird-Images/ThattekadBirds/PBS_3100.jpg', title: "3100", species: "Little Spiderhunter" },
        { src: '/Images/AC-Bird-Images/ThattekadBirds/PBS_3895-ThattekadCardCover.jpg', title: "3895-ThattekadCardCover", species: "Vernal Hanging Parrot" },
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
                {thattekadBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: thattekadBirdsArr, selectedImageIndex: index }} >
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

export default ThattekadBirds