import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './UmredTadobaTRStyles.css'


function UmredTadobaTR() {

    const umredTadobaTRArr = [
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_2984-UmredTadobaCardCover.jpg', title: "2984-UmredTadobaCardCover", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_0930.jpg', title: "0930", species: "Fairy Sub-Adults" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_2390.jpg', title: "2390", species: "Sonam with cub" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_2399.jpg', title: "2399", species: "Sonam with cub" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_2401.jpg', title: "2401", species: "Sonam-Cub" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_2402.jpg', title: "2402", species: "Sonam with cub" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_2985.jpg', title: "2985", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3021.jpg', title: "3021", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3022.jpg', title: "3022", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3075.jpg', title: "3075", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3077.jpg', title: "3077", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3102.jpg', title: "3102", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3103.jpg', title: "3103", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3113.jpg', title: "3113", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3117.jpg', title: "3117", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3124.jpg', title: "3124", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_3130.jpg', title: "3130", species: "Paras aka Taaru" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_7669.jpg', title: "7669", species: "Fairy Sub Adult" },
        { src: '/Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_7685.jpg', title: "7685", species: "Fairy Sub Adult" },

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
                {umredTadobaTRArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: umredTadobaTRArr, selectedImageIndex: index }} >
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

export default UmredTadobaTR