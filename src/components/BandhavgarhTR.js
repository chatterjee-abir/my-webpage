import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './BandhavgarhTRStyles.css'


function BandhavgarhTR() {

    const bandhavgarhTRArr = [
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/_MG_4849.jpg', title: "4849", species: "Dotty" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/_MG_4850.jpg', title: "4850", species: "Dotty" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/_MG_4880.jpg', title: "4880", species: "Dotty" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/_MG_6385-BandhavgarhCardCover.jpg', title: "6385-BandhavgarhCardCover", species: "Tara" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/_MG_6580.jpg', title: "6580", species: "Tara" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/_MG_6584.jpg', title: "6584", species: "Tara" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2472.jpg', title: "2472", species: "Dotty" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2644.jpg', title: "2644", species: "Dotty" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2652.jpg', title: "2652", species: "Dotty" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2670.jpg', title: "2670", species: "Dotty" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2696.jpg', title: "2696", species: "Dotty Sub Adult" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2772.jpg', title: "2772", species: "Tara" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2913.jpg', title: "2913", species: "Chota Bheem" },
        { src: '/Images/AC-Tiger-Images/Bandhavgardh-Images/D85_2971.jpg', title: "2971", species: "Chota Bheem" },
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
                {bandhavgarhTRArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: bandhavgarhTRArr, selectedImageIndex: index }} >
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

export default BandhavgarhTR