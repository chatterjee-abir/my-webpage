import React, { useEffect } from 'react'
import './BirdJungleSelectorStyles.css';
import { Link } from 'react-router-dom'

function BirdJungleSelector() {

    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);


    return (
        <div>
            <div className="container-fluid bjs-container">
                <div className="row bjs-top-row">
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/KhismaBirds/D85_1299-KhismaCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Khisma Birds</h5>
                                <p class="card-text">Best place to click Blue Tailed Bee Eaters and Chestnut headed bee eaters and to snap them with catch as well as see their fight/mating</p>
                                <Link to='/KhismaBirds'><a href="" class="btn btn-primary">Explore Khisma Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/NorthBengalBirds/D85_2704-NBCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">North Bengal Birds</h5>
                                <p class="card-text">Perhaps the goldmine of birding hotspots in India housing most colourful hill birds. It is also one of the challenging place to shoot birds</p>
                                <Link to='/NorthBengalBirds'><a href="" class="btn btn-primary">Explore North Bengal Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/SikkimBirds/D85_9813-SikkimCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Sikkim Birds</h5>
                                <p class="card-text">Another great place for birding. The varieties are plenty and the birds are so colourful that one can't help but fall in love with them</p>
                                <Link to='/SikkimBirds'><a href="" class="btn btn-primary">Explore Sikkim Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/PuneBirds/D85_4461-PuneCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Pune Birds</h5>
                                <p class="card-text">During rainy season surrounding hills become lush green giving beautiful background which makes the picture even more beautiful</p>
                                <Link to='/PuneBirds'><a href="" class="btn btn-primary">Explore Pune Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/SattalBirds/D85_9437-SattalCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Sattal Birds</h5>
                                <p class="card-text">My most favourite birding hotspots. Birds are plenty and so colourful and good light</p>
                                <Link to='/SattalBirds'><a href="" class="btn btn-primary">Explore Sattal Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/ThattekadBirds/PBS_3895-ThattekadCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Thattekad Birds</h5>
                                <p class="card-text">An amazing place to snap some of the beautiful and magnificient species of southern India</p>
                                <Link to='/ThattekadBirds'><a href="" class="btn btn-primary">Explore Thattekad Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/MangalajodiBirds/D85_2543-MangalajodiCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Mangalajodi Birds</h5>
                                <p class="card-text">Perhaps the best birding spot in India to click action shots. Leisure birding from boats</p>
                                <Link to='/MangalajodiBirds'><a href="" class="btn btn-primary">Explore Mangalajodi Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/NeighbourhoodBirds/D85_7113-SaltlakeRHCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Neighbourhood Birds</h5>
                                <p class="card-text">Central Park in Salt Lake and Rajarhat wetland offers plenty of avian varieties</p>
                                <Link to='/NeighbourhoodBirds'><a href="" class="btn btn-primary">Explore Neighbourhood Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/KolkataOutskirtsBirds/D85_8165-KolkataOutskirtsCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Kolkata Outskirts Birds</h5>
                                <p class="card-text">There are plenty of birding options around kolkata and suburban and rural bengal</p>
                                <Link to='/KolkataOutskirtsBirds'><a href="" class="btn btn-primary">Explore Kolkata Outskirts Birds</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Bird-Images/GaneshgudiBirds/D85_5683-OMHCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Ganeshgudi Birds</h5>
                                <p class="card-text">One of the best place for armchair birding. Just sit back, relax, sip coffee and get up to click birds when they come to drink water</p>
                                <Link to='/GaneshgudiBirds'><a href="" class="btn btn-primary">Explore Ganeshgudi Birds</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BirdJungleSelector