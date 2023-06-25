import React from 'react'
import { Link } from 'react-router-dom'

function Sample() {
    return (
        <div>


            <div>
                <Link to='/Birds'> <button type="button" class="btn btn-primary">Birds</button> </Link>
                <Link to='/Mammals'> <button type="button" class="btn btn-success">Mammals</button> </Link>

            </div>




        </div>
    )
}

export default Sample