import React from  'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/icon.jpg'
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
)
export default Header;