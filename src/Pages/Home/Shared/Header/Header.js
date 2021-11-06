import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const element = <FontAwesomeIcon icon={faMountain} />

    const { user, logOut } = useAuth();

    return (
        <>
            <div className="background">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <div className="l-section">
                            <Nav>
                                <Link to="/home">Home</Link>
                                <Link to="/activity">Activities</Link>
                                <Link to="/gift">Gift an experience</Link>

                            </Nav>
                        </div>
                        <h4 className="text-info">Hey Welcome Here !!<span>{element}</span></h4>
                        <Navbar className="nav">
                            {user.email ? <button onClick={logOut}>Logout</button>
                                :
                                <Nav.Link as={Link} className="text-white" to="/login">Login</Nav.Link>}
                            <Nav.Link as={Link} className="text-white" to="/register">Register</Nav.Link>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    Signed in as: <a className="text-white" href="#login">{user.email}</a>

                                </Navbar.Text>
                                <p>Name: {user?.displayName}</p>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </nav>
            </div >
        </>
    );
};

export default Header;