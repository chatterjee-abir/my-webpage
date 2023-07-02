import React, { useEffect } from 'react'
import './MammalsJungleSelectorStyles.css';
import { Link } from 'react-router-dom'

function MammalsJungleSelector() {

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
                            <img src="./Images/AC-Tiger-Images/Bandhavgardh-Images/_MG_6385-BandhavgarhCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Bandhavgardh Images</h5>
                                <p class="card-text">One of the best Tiger Reserve in India to see wild tigers. Its main zones are Magadhi, Khitouli and Tala. Chief attractions are Dotty and its sub adult cubs, Chota Bheem, Tara, Bajrang etc.</p>
                                <Link to='/Bandhavgardh'><a href="" class="btn btn-primary">Explore Bandhavgarh Images</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Tiger-Images/Umred-Tadoba-Images/_MG_2984-UmredTadobaCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Umred-Tadoba Images</h5>
                                <p class="card-text">Both Umred and Tadoba have very good chances of seeing tigers compared to other jungles, mainly because of the good tiger density. Chief attractions are Paras, Surya, Rudra, Maya, Mowgli, Sonam etc.</p>
                                <Link to='/UmredTadoba'><a href="" class="btn btn-primary">Explore Umred-Tadoba Images</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Tiger-Images/Tadoba-Images/_MG_2443-TadobaCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Tadoba Images</h5>
                                <p class="card-text">Tadoba has very good density of tigers and typically gives plenty of sightings. Howver except one buffer, the jungle is quite flat and the pitch road through the jungle spoils its beauty</p>
                                <Link to='/Tadoba'><a href="" class="btn btn-primary">Explore Tadoba Images</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Tiger-Images/Kanha-Images/D85_8886-KanhaCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Kanha Images</h5>
                                <p class="card-text">Perhaps the most beautiful of all forests in India. It's a huge forest. Chief attractions are Barasingha and DJ,Neelam, Naina etc. Main zones are Kanha, Mukki, Kisli etc. </p>
                                <Link to='/Kanha'><a href="" class="btn btn-primary">Explore Kanha Images</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-bjs-main-img">
                        <div class="card h-100" >
                            <img src="./Images/AC-Tiger-Images/Sundarban-Images/D85_1509-SundarbanCardCover.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-grid">
                                <h5 class="card-title">Sundarban Images</h5>
                                <p class="card-text">Sundarban is world's largest mangrove forest and hosts one of the most adaptable of Royal Bengal Tigers. It's very difficult to spot a tiger in Sundarban.</p>
                                <Link to='/Sundarban'><a href="" class="btn btn-primary">Explore Sundarban Images</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MammalsJungleSelector