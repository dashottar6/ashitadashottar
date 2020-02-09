import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link, NavLink} from "react-router-dom";
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar className="sticky-top" fluid="true" expand="lg" default collapseOnSelect>
                    <Navbar.Brand >
                        <Link id="link_about" to="/ashitadashottar">Ashita Dashottar</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link id="link_about" className="nav-link" to="/about">About</Link>
                        <Link id="link_about" className="nav-link" to="/projects">Projects</Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;