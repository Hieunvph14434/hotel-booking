import React, { useEffect, useState } from 'react'
// Bootstrap CSS
import { Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './Hotel.css';

import Cookies from 'js-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTv, faBuilding, faWind } from '@fortawesome/free-solid-svg-icons'

import cloudinary from 'cloudinary-core';
import { roomListApi } from '../../api/room.js'
import { Link, useNavigate } from 'react-router-dom';
import { logoutApi } from '../../api/auth.js';


function Holtel() {
    const cloudinaryInstance = new cloudinary.Cloudinary({ cloud_name: process.env.REACT_APP_API_CLOUD_NAME });
    // Tạo URL từ publicId
    const imageUrl = (publicId) => {
       return cloudinaryInstance.url(publicId, { secure: true });
    }    

    const [showDropdown, setShowDropdown] = useState(false);
    const [roomList, setRoomList] = useState([]);
    const [userName, setUserName] = useState('');
    const [token, setToken] = useState('');

    const nav = useNavigate();
    
    useEffect(() => {
        if(Cookies.get('token')) {
            setToken(Cookies.get('token'));
        }
        if(Cookies.get('user')) {
            const user = JSON.parse(Cookies.get('user'));
            setUserName(user.data.name);
        }
        roomListApi(null).then((res) => {
            setRoomList(res.data.data.data);
        }).catch((err) => {
            console.log("err", err);
        });
    }, []);

    // logout 
    const handleLogout = async() => {
        const res = await logoutApi(token);
        if(res.data.status) {
            Cookies.remove('token');
            Cookies.remove('user');
        }
        window.location.reload();
    }
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
                    {userName ? (
                        <>
                            <Dropdown.Item href="#">Profile</Dropdown.Item>
                            <Dropdown.Item> <Link onClick={handleLogout}>Logout</Link></Dropdown.Item>
                        </>
                    ) : (
                        <>
                            <Dropdown.Item>
                                <Link to={'/register'}>Register</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={'/login'}>Login</Link>
                            </Dropdown.Item>
                        </>
                    )}
                </Dropdown.Menu>
                <div className='square-content'></div>
                <h1 className='text-banner'>BANNER</h1>
                <h1 className='text-start position-absolute'>
                    Hotel Booking
                </h1>
                <div className='search-data position-absolute custom-position'>
                        <ul className='d-flex justify-content-center list-style-none'>
                            <li><input type="text" name='type' placeholder='Room type'/></li>
                            <li><input type="text" name='priceFrom' placeholder='Price from' /></li>
                            {/* <li><input type="text" placeholder='Wed, 10 Jan - Thu, 11 Jan'/></li> */}
                            <li><input type="text" name='priceTo' placeholder='Price to'/></li>
                            <li><button>FIND</button></li>
                        </ul>
                </div>
            </div>
            <div className='content'>
                <div className='page d-flex card-body p-4 ps-3 pe-3 gap-4'>
                {roomList && roomList.length > 0 && roomList.map((item) => (
                    <div className='item-room position-relative' key={item.id}>
                        <div className='item-content'>
                            <div className='thumnail'>
                            {imageUrl(item.image) ? (
                                <img className='position-absolute' src={imageUrl(item.image)} alt={item.name} />
                            ) : (
                                <img className='position-absolute square-item' src={item.name} alt={item.name} />
                            )}
                            </div>
                            <div className='content-data'>
                                <h4 className='room-name'>{item.name}</h4>
                                <p className='room-no'>{item.price}</p>
                                <p className='ocean-view'>Ocean view: {item.acreage},...</p>
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
                ))}
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