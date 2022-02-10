import React, {Component} from "react";
import {Button} from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/">React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/form">Form</Link>
                            <Link className="nav-link" to="/todo">To Do </Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
        
    }
}

export default Header;