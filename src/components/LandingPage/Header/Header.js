import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/photograpy-logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <Container className="header">
            <Navbar bg="***" variant="light" className="py-4">
                <Link to="/home">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <Nav className="ml-auto customNav">
                    <Link to="/home" className="customLink" >Home</Link>
                    <Link to="/portfolio" className="customLink" >Our Portfolio</Link>
                    <Link to="/team" className="customLink">Our Team</Link>   
                    <Link to="/contact" className="customLink">Contact Us</Link>  
                    <Link to="#" className="customLink">{loggedInUser.displayName}</Link>  
                    {
                        loggedInUser.email ? 
                        <Button variant="primary" className="customButton" onClick={() => setLoggedInUser({})}>Logout</Button>
                         :
                        <Link to="/adminPage">
                            <Button variant="dark" className="customButton">Login</Button>
                        </Link>
                    }                
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;