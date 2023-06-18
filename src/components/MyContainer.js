//import React, { useState } from "react";
import React from "react";
import './MyContainerStyles.css'
// import Birds from "./Birds";
// import Mammals from "./Mammals";
// import Reptiles from "./Reptiles";
import TopRow from "./TopRow";
import Sidebar from "./Sidebar";
import MiddleBody from "./MiddleBody";
import RightSidebar from "./RightSidebar";
import MyFooter from "./MyFooter";
//import SearchForm from "./SearchForm";






function MyContainer() {

    return (

        // <div className="container-fluid">
        //     <div className="row top-row">
        //         <div className="col-md-12 bg-info col-top-row ">
        //             <TopRow />
        //         </div>
        //     </div>
        //     <div className="row third-row flex-nowrap">
        //         <div className="col-md-2 left-sidenav">
        //             <Sidebar />
        //         </div>
        //         <div className="col-md-9 bg-info middle-body">
        //             <MiddleBody />
        //         </div>
        //         <div className="col-md-1 right-sidenav bg-danger">
        //             <RightSidebar />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-12 my-footer bg-primary">
        //             <MyFooter />
        //         </div>
        //     </div>
        // </div >
        <div className="container-fluid">
            <div className="row top-row">
                <div className="col-md-12 bg-info col-top-row ">
                    <TopRow />
                </div>
            </div>
            <div className="row third-row flex-nowrap">
                <div className="col-md-2 left-sidenav">
                    <Sidebar />
                </div>
                <div className="col-md-9 bg-info middle-body">
                    <MiddleBody />
                </div>
                <div className="col-md-1 right-sidenav bg-danger">
                    <RightSidebar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 my-footer bg-primary">
                    <MyFooter />
                </div>
            </div>
        </div >
    )

}

export default MyContainer