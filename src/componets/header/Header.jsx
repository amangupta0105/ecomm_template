import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link"}
                        to='/home'>
                        HOME
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link"}
                        to='/about'>
                        ABOUT
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link"}
                        to='/products'>
                        PRODUCTS
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link"}
                        to='/contact'>
                        CONTACT
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive, isPending }) => isActive ? "nav-link active" : isPending ? "nav-link pending" : "nav-link"}
                        to='/dashboard'>
                        DASHBOARD
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
