import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './NorthBengalBirdsStyles.css'


function NorthBengalBirds() {

    const northBengalBirdsArr = [
        { src: '/Images/AC-Bird-Images/NorthBengalBirds/D85_2412.jpg', title: "2412", species: "Yellow Throated Bulbul" },
        { src: '/Images/AC-Bird-Images/NorthBengalBirds/D85_2704-NBCardCover.jpg', title: "2704-NBCardCover", species: "Rufous Bellied Niltava" },
        { src: '/Images/AC-Bird-Images/NorthBengalBirds/D85_2911.jpg', title: "2911", species: "Rufous Bellied Niltava" },
        { src: '/Images/AC-Bird-Images/NorthBengalBirds/D85_3150.jpg', title: "3150", species: "Rufous Bellied Niltava" },
        { src: '/Images/AC-Bird-Images/NorthBengalBirds/D85_3162.jpg', title: "3162", species: "Rufous Bellied Niltava" },
        { src: '/Images/AC-Bird-Images/NorthBengalBirds/D85_3213.jpg', title: "3213", species: "Rufous Bellied Niltava" },
        { src: '/Images/AC-Bird-Images/NorthBengalBirds/D85_3254.jpg', title: "3254", species: "Rufous Bellied Niltava" },
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
                {northBengalBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: northBengalBirdsArr, selectedImageIndex: index }} >
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

export default NorthBengalBirds