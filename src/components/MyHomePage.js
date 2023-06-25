import React from 'react'
import MyTopRow from './MyTopRow'
import './MyHomePageStyles.css'

function MyHomePage() {
    return (
        <div>
            <MyTopRow />
            <div class="container-fluid">
                <div className="row mid-row">
                    <div className="col-md-10 col-main-img">
                        <img class="my-img img-fluid" src='./Images/D85_1364.jpg'></img>
                    </div>
                    <div className='col-md-2 img-info'>
                        <h2>Image Info</h2>
                    </div>
                </div>
                {/* <div className='row my-footer'>
                    <div className="col-md-12 col-my-footer">
                        <h1>Hello World</h1>
                    </div>
                </div> */}


            </div>
        </div>
    )
}

export default MyHomePage