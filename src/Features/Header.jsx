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
                <div className='first-inner'>
                    <h1>There's no secret to<br/>to long-term 
                        <br/>wealth, but if <br/> there were it
                        <br/> would be this:
                    </h1>
                    <span><h1>automated<br/>index<br/>investing</h1></span>
                    <h5>Even with the inevitable ups and downs of the<br/>
                        market, our exper-built, globally-diversified<br/>
                        Automated Investing Account makes it easy to<br/>
                        start building long term wealth by managing your<br/>
                        risk, maximizing returns, and minimizing taxes.<br/>
                    </h5>
                                    
                    <div className='get-started'>
                        <a href="https//:"><button>Get started</button></a>
                    </div>

                </div>
                <div className='second-inner'>
                    <img src={require('../assets/images/jpg/focus.jpeg')} alt="" />
                </div>
            </div>
            <div className='head-container2'>
                <div className='box1'>
                    <div className='inner-box1'>           
                        <img src={require('../assets/icons/smartphone-call.png')} alt="" />
                        <h2>nerwallet</h2>
                    </div>
                        <h4>
                            Best Robo-Advisor, Portfolio Options, 2023<br/>
                            Best Robo-Advisor, IRA, 2022
                        </h4>
                    
                </div>
                <div className='box2'>
                    <div className='inner-box2'>                                    
                        <img src={require('../assets/icons/info.png')} alt="" />
                        <h2>Investopedia</h2>
                    </div>
                    
                        <h4>Best Robo-Advisor 2022<br/>
                            Best Robo-Advisor 2020
                        </h4>                    
                </div>
                <div className='box3'>
                    <h2>700K+</h2>
                    <h4>Trusted clients</h4>
                </div>
                <div className='box4'>
                    <h2>$50B+</h2>
                    <h4>In assets managed</h4>
                </div>
                <div className='box5'>
                    <h2>4.8*</h2>
                    <h4>Apple App Store</h4>
                </div>
                <div className='box3'>
                    <h2>4.9*</h2>
                    <h4>Google Play Store</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;