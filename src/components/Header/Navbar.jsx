import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {authService} from "../../services/auth";
import {Book} from "@material-ui/icons";

function NavigationBar(props) {
    function logout(){
        authService.logout();
    }

    function navLinks(){
        if(props.isAuth){
            return(
                <Nav className="ms-auto">
                    <Button onClick={logout} variant="outline-light">Çıkış Yap</Button>
                </Nav>
            )
        }

        return (
            <Nav className="ms-auto">
                <Link to="/register" className="me-2"><Button variant="outline-light">Kayıt Ol</Button></Link>
                <Link to="/login"><Button variant="outline-light">Giriş Yap</Button></Link>
            </Nav>
        )
    }
    return (
        <Navbar className="header" collapseOnSelect expand="lg" variant="dark">
            <Link to="/"><Navbar.Brand><h1 className="brand"><Book/>Notebook</h1></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                {navLinks()}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;