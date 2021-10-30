import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="background">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <div className="l-section">
                            <Nav>
                                <Link to="/home">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/gift">Gift an experience</Link>
                            </Nav>
                        </div>
                        <h4>Hey welcome here</h4>
                        <Navbar className="nav">
                            <span className="text-white"> Signed in as:</span> <a className="mx-5 text-white" href="#login">Mark Otto</a>

                            <Link to="/login" className="text-white">Login</Link>
                        </Navbar>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;