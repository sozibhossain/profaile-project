import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../image/logo.png';
import profail from '../../../image/profail.jpg';
import { faSearch, faMessage, faBell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
    return (
        <div>
            <header className='header'>
                <img src={logo} alt="profail logo" className='logo'/>

                <input type="checkbox" id="nav-check"/>
                <label for="nav-check" class="nav-toggler">
                    <span></span>
                </label>
            
                    <form action="#" className='search'>
                        <input type="text" className='search_input' placeholder='Search'/>
                        <button className='search_button'>
                        <FontAwesomeIcon icon={faSearch}  className='search_icon'/>
                        </button>
                    </form>
              


                <nav className='user_nav'>
                    <div className='user-nav-user'>
                        <img src={profail} alt="profail img" className='user-nav_user-photo'/>
                        <span className='user-nav_user-name'>sozib &nu;</span>
                    </div>
                        <div className='user-nav_icon-box'>
                        <FontAwesomeIcon icon={faMessage}  className='user-nav_icon-message'/>
                    </div>
                        <div className='user-nav_icon-box'>
                        <FontAwesomeIcon icon={faBell}  className='user-nav_icon-bell'/>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;