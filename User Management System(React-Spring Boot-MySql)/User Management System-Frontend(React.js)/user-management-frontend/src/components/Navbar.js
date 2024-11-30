import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2> <Link to="/">User Management [<span className='React'>React</span> & <span className='Springboot'>Spring Boot</span>] </Link></h2>
            <div>
                <Link to="/add-user">Add User</Link>
                <Link to="/user-list">User List</Link>
            </div>
        </nav>
    );
};

export default Navbar;
