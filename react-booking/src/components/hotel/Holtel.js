import React, { useState } from 'react'
// Bootstrap CSS
import { Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './Hotel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTv, faBuilding, faWind } from '@fortawesome/free-solid-svg-icons'

import Cookies from 'js-cookie';

function Holtel() {
    const [showDropdown, setShowDropdown] = useState(false);

    console.log("cookie", Cookies.get('jwt_token'));
  return (
    <>
        <div className='container-fluid'>
            <div className='banner position-relative'>
                <FontAwesomeIcon
                    icon={faUser}
                    className='icon-user'
                    onClick={() => setShowDropdown(!showDropdown)}
                />
                <Dropdown.Menu show={showDropdown} onClose={() => setShowDropdown(false)} className='data-drop-down'>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
                <div className='square-content'></div>
                <h1 className='text-banner'>BANNER</h1>
                <h1 className='text-start position-absolute'>
                    Hotel Booking
                </h1>
                <div className='search-data position-absolute custom-position'>
                        <ul className='d-flex justify-content-center list-style-none'>
                            <li><input type="text" placeholder='Room name' /></li>
                            <li><input type="text" placeholder='Room type'/></li>
                            {/* <li><input type="text" placeholder='Wed, 10 Jan - Thu, 11 Jan'/></li> */}
                            <li><input type="text" placeholder='Price'/></li>
                            <li><button>FIND</button></li>
                        </ul>
                </div>
            </div>
            <div className='content'>
                <div className='page d-flex card-body p-4 ps-3 pe-3 gap-4'>
                    <div className='item-room position-relative'>
                        <div className='item-content'>
                            <div className='thumnail'>
                                <img className='position-absolute' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg?w=144" alt="" />
                            </div>
                            <div className='content-data'>
                                <h4 className='room-name'>Room name</h4>
                                <p className='room-no'>P202</p>
                                <p className='ocean-view'>Ocean view, 60m2,...</p>
                            </div>
                        </div>
                        <div className='device-room d-flex gap-1'>
                            <div className='d-flex align-items-center gap-2'>
                                <FontAwesomeIcon icon={faBuilding}/>
                                Balcony
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <FontAwesomeIcon icon={faWind}/>
                                AC
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <FontAwesomeIcon icon={faTv}/>
                                TV
                            </div>
                        </div>
                    </div>
                    {/* <div className='item-room position-relative'>
                        <div className='item-content'>
                            <div className='thumnail'>
                                <img className='position-absolute' src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg?w=144" alt="" />
                            </div>
                            <div className='content-data'>
                                <h4 className='room-name'>Room name</h4>
                                <p className='room-no'>P202</p>
                                <p className='ocean-view'>Ocean view, 60m2,...</p>
                            </div>
                        </div>
                        <div className='device-room d-flex gap-1'>
                            <div className='d-flex align-items-center gap-2'>
                                <FontAwesomeIcon icon={faBuilding}/>
                                Balcony
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <FontAwesomeIcon icon={faWind}/>
                                AC
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <FontAwesomeIcon icon={faTv}/>
                                TV
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Holtel