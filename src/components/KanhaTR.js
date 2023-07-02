import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './KanhaTRStyles.css'


function KanhaTR() {

    const kanhaTRArr = [
        { src: '/Images/AC-Tiger-Images/Kanha-Images/D85_8886-KanhaCardCover.jpg', title: "8886-KanhaCardCover", species: "DJ Sub Adult" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/D85_8793.jpg', title: "8793", species: "DJ Sub Adult" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/D85_8928.jpg', title: "8928", species: "DJ Sub Adult" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/D85_8240.jpg', title: "8240", species: "Indian Golden Jackal" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/D85_6891a.jpg', title: "6891a", species: "Indian Golden Jackal" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/D85_6907.jpg', title: "6907", species: "Indian Golden Jackal" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/_MG_4514.jpg', title: "4514", species: "Neelam" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/_MG_3743.jpg', title: "3743", species: "Dhawajhandi (DJ)" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/_MG_4083.jpg', title: "4083", species: "Sloth Bear" },
        { src: '/Images/AC-Tiger-Images/Kanha-Images/D85_1534.jpg', title: "1534", species: "Sloth Bear" },
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
                {kanhaTRArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: kanhaTRArr, selectedImageIndex: index }} >
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

export default KanhaTR