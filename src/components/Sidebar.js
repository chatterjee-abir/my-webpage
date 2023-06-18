import React from 'react'
import './SidebarStyles.css'

function Sidebar() {
    return (
        <div className="sidebar_content">
            <div className="sidebar-container">
                <div className="nav-option option1">
                    <img src="./bird-icon.png" class="img-thumbnail bg-transparent" alt='birds'></img>
                    <h3>
                        Birds
                    </h3>
                </div>
                <div className="nav-option option1">
                    <img src="./tiger-icon.png" class="img-thumbnail bg-transparent" alt='tiger'></img>
                    <h3>Mammals</h3>
                </div>
                <div className="nav-option option1">
                    <img src="./snake-icon.png" class="img-thumbnail bg-transparent" alt='snake'></img>
                    <h3>Reptiles</h3>
                </div>
                <div className="nav-option option1">
                    <img src="./blogs-icon.png" class="img-thumbnail bg-transparent" alt='blogs'></img>
                    <h3>Blogs</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar