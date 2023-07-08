import React from 'react'
import './MyTopRowStyles.css';
import { Link } from 'react-router-dom'

function MyTopRow() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Welcome to my homepage!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                {/* <Link to='/'>Home</Link> */}
                                <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}><Link to='/'>Home</Link> </a>
                            </li>
                            <li className="nav-item">
                                {/* <Link to='/Birds'>Birds</Link> */}
                                <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}><Link to='/Birds'>Birds</Link></a>
                            </li>
                            <li className="nav-item">
                                {/* <Link to='/Mammals'>Mammals</Link> */}
                                <a className="nav-link" href="#" style={{ color: 'white', textDecoration: 'none' }}><Link to='/Mammals'>Mammals</Link></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">Reptiles</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">Feedback</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu">
                                    <li><a href="" className="dropdown-item">Item1</a></li>
                                    <li><a href="" className="dropdown-item">Item2</a></li>
                                    <li><a href="" className="dropdown-item">Item3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default MyTopRow