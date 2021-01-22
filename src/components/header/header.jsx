import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './header.css';
import brandLogo from '../../images/logo-ether.png';

class Header extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" className='bg-light'>
                    <Navbar.Brand href="#home"><img src={brandLogo} alt="" width="120" height="24" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link active={true} href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Blockchain</Nav.Link>
                            <Nav.Link href="#link">Token</Nav.Link>
                            <Nav.Link href="#link">Resources</Nav.Link>
                            <Nav.Link href="#link">More</Nav.Link>
                            <Nav.Link href="#link">Sign Up</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;
