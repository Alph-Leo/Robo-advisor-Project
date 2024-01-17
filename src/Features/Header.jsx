import React, { useState } from 'react';
import './header.css'
const Header = () =>{

    const [isDropDown, setDropDown] = useState(false)
    const [dropDown, setIsDropDown] = useState(false)

    const toggleDropDown = (e) =>{
        e.preventDefault();
        setDropDown(!isDropDown)
    }
    const handleToggle = (e) =>{
        e.preventDefault();
        setIsDropDown(!dropDown)
    }
    
    return(
        <div className='main-container'>
            <div className='head-container'>
                <div className='first-header'>
                    <img src={require('../assets/icons/global.png')} alt=""/>
                    <h1>Wealthfront</h1>
                </div>
                <div className='sub-header'>
                    <ul>
                        <li><a href="https//:">Cash</a></li>
                        <li><a href="https//:">Bond</a></li>
                        <li className='drop-arrow'>
                            <a href="" onClick={toggleDropDown}>Automated Investing
                                <img src={require('../assets/icons/down-arrow.png')} alt="" />
                            </a>
                            {isDropDown && (
                                <div className='dropdown-content'>
                                  <ul>
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                  </ul>

                                </div>

                            )}
                        </li>
                        <li><a href="https//:">Stocks</a></li>
                        <li className='drop-arrow'>
                            <a href="" onClick={handleToggle}>Learn
                                <img src={require('../assets/icons/down-arrow.png')} alt="" />
                            </a>
                            {dropDown && (
                                <div className='dropdown-content'>
                                  <ul>
                                    <li><a href="#">Option 4</a></li>
                                    <li><a href="#">Option 5</a></li>
                                    <li><a href="#">Option 6</a></li>
                                  </ul>

                                </div>

                            )}
                        </li>
                    </ul>
                </div>
                <div className='buttonTag'>
                    <button id='button1'><a href="">Log in</a></button>
                    <button id='button2'><a href="">Get started</a></button>
                </div>

            </div>
            <div className='second-container'>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Header;