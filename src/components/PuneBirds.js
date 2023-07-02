import React, { useState, useEffect } from 'react'
import './PuneBirdsStyles.css'
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'






function PuneBirds() {


    const puneBirdsArr = [
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_0015.jpg', title: "0015", species: "Red Necked Falcon" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_0183.jpg', title: "0183", species: "Crested Bunting" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_0191.jpg', title: "0191", species: "Crested Bunting" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_0305.jpg', title: "0305", species: "Yellow Eyed Babbler" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_0365.jpg', title: "0365", species: "Yellow Eyed Babbler" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_0410.jpg', title: "0410", species: "Yellow Eyed Babbler" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_0880.jpg', title: "0880", species: "White Bellied Minivet" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_1078.jpg', title: "1078", species: "Baya Weaver" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_3935a.jpg', title: "3935a", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_4102.jpg', title: "4102", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_4338.jpg', title: "4338", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_4384.jpg', title: "4384", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_4411.jpg', title: "4411", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_4443.jpg', title: "4443", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_4461-PuneCardCover.jpg', title: "4461-PuneCardCover", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_4507.jpg', title: "4507", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_7536.jpg', title: "7536", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_7655.jpg', title: "7655", species: "Oriental Dwarf Kingfisher" },
        { src: '/Images/AC-Bird-Images/PuneBirds/D85_7770.jpg', title: "7770", species: "Oriental Dwarf Kingfisher" },


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
                {puneBirdsArr.map((myArr, index) => (
                    < Col className='col-location-card'>
                        <Card>
                            <Card.Body>
                                <Link to='/SoleBirdImage' state={{ myArr: puneBirdsArr, selectedImageIndex: index }} >
                                    <Card.Img variant="top" src={myArr.src} alt={myArr.species} onClick={() => handleImageClick(index)} />
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

export default PuneBirds