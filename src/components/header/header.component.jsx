import React from  'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/icon.svg'
import './header.style.scss'

const Header = () => (
    <div className='header'>
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className='options'>
            <Link to="/shop">Shop</Link>
        </div>
    </div>
);

const mapsStateToProps = () => {
    currentUser: state
}
export default Header;