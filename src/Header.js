import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./components/Header.css";


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" >
                    <NavbarBrand href="/">Credit Check - Approval system</NavbarBrand>
                    <Nav className="Nav" navbar>
                        <NavItem style={{marginLeft: "20px"}}>
                        <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem style={{marginLeft: "20px"}}>
                        <Link to="/userList">User Lists</Link>
                        </NavItem>
                        <NavItem style={{marginLeft: "20px"}}>
                            <Link to="/api/addCustomer">Check Credit Score</Link>
                        </NavItem>
                    </Nav>
                </Navbar>

            </div>
        );

    }

}


export default Header;
