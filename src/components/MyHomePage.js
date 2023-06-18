import React from 'react'
import TopRow from './TopRow'
import Sidebar from './Sidebar'



function MyHomePage() {
    return (
        <div>
            <div className="row top-row">
                <div className="col-md-12 bg-info col-top-row ">
                    <TopRow />
                </div>
            </div>
            <div className="row third-row flex-nowrap">
                <div className="col-md-2 left-sidenav">
                    <Sidebar />
                </div>
                <div className="col-md-10 bg-info middle-body">
                    <h1>Blank middle</h1>
                </div>
            </div>
        </div>
    )
}

export default MyHomePage