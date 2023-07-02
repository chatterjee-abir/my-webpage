import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './TadobaTRStyles.css'


function TadobaTR() {

    const tadobaTRArr = [
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2443-TadobaCardCover.jpg', title: "2443-TadobaCardCover", species: "Mowgli" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2598.jpg', title: "2598", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2599.jpg', title: "2599", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2608.jpg', title: "2608", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2639.jpg', title: "2639", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/D85_1945.jpg', title: "1945", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_4584.jpg', title: "4584", species: "Tadoba Lake" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/D85_2374.jpg', title: "2374", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_3190.jpg', title: "3190", species: "Junabai Cub" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_3260.jpg', title: "3260", species: "Junabai Cub" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_3588.jpg', title: "3588", species: "Junabai" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_3625.jpg', title: "3625", species: "Junabai And Family" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_3401.jpg', title: "3401", species: "Junabai With Cub" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2667.jpg', title: "2667", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2670.jpg', title: "2670", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2672.jpg', title: "2672", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2700.jpg', title: "2700", species: "Rudra" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_3666.jpg', title: "3666", species: "Junabai Cub" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_2855.jpg', title: "2855", species: "Sambar Fight" },
        { src: '/Images/AC-Tiger-Images/Tadoba-Images/_MG_4646.jpg', title: "4646", species: "Spotted Deer Fight" },

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
                {tadobaTRArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: tadobaTRArr, selectedImageIndex: index }} >
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

export default TadobaTR