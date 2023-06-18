import React from 'react'
import './TopRowStyles.css'

function TopRow() {
    return (
        <div class="table-responsive">
            {/* <ul class="list-group list-group-top-row bg-transparent" >
                <li class="list-group-item bg-transparent my-list-group-item-1"><img src="./hamburger-menu-icon.png" class="img-fluid" ></img></li>
                <li class="list-group-item bg-transparent my-list-group-item-2"><h1>A Warm Welcome to my homepage!</h1></li>
            </ul> */}
            {/* <span>
                <img src="./hamburger-menu-icon.png" class="img-fluid" ></img>
            </span>
            <span>
                <h1>A Warm Welcome to my homepage!</h1>
            </span> */}
            <table class="table table-hover table-borderless">
                <thead>
                </thead>
                <tbody>
                    <tr class="table-primary">
                        <th scope="row" class="w-25"><span><img src="./hamburger-menu-icon.png" class="img-fluid" alt='hamburger' ></img></span></th>
                        <th class="w-90"><td><span className='welcome-span'><h1>Welcome to my gallery!</h1></span></td></th>
                        <td>
                            <form class="row gy-2 gx-3 align-items-end">
                                <div class="col-auto col-lg-3">
                                    <label class="visually-hidden" for="autoSizingInput">Name</label>
                                    <input type="text" class="form-control" id="species-input" placeholder="Species/sub species of bird/snake/tiger/Forest name etc." />
                                </div>
                                <div class="col-auto col-lg-3">
                                    <label class="visually-hidden" for="autoSizingInput">Name</label>
                                    <input type="text" class="form-control" id="location-input" placeholder="location / name of the forest" />
                                </div>
                                <div class="col-auto">
                                    <label for="autoSizingSelect"><h5>Species Type</h5></label>
                                    <select class="form-select" id="autoSizingSelect">
                                        <option selected>Birds</option>
                                        <option value="1">Birds</option>
                                        <option value="2">Tigers</option>
                                        <option value="3">Snakes</option>
                                        <option value="4">Forest Name</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </td>

                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default TopRow