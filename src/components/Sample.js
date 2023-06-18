import React from 'react'
import { Link } from "react-router-dom"
//import MyHomePage from './MyHomePage'
import Birds from './Birds';
import Mammals from './Mammals';

function Sample() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/Birds">Birds</Link>
                </li>
                <li>
                    <Link to="/Mammals">Mammals</Link>
                </li>

                {/* <li>One</li>
                <li>Two</li> */}
            </ul>
        </div>
    )
}

export default Sample