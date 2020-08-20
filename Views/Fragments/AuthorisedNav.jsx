const React = require('react');
const NavBar = require('react-bootstrap').Navbar;
const NavBarBrand = require('react-bootstrap').NavbarBrand;
const Nav = require('react-bootstrap').Nav;

class AuthorisedNav extends React.Component {
    render() {
        return (
            <NavBar bg='dark' variant='dark'>
                <NavBarBrand>
                    SSH Key Service
                </NavBarBrand>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/auth">Home</Nav.Link>
                        <Nav.Link href="/auth/generate">Generate</Nav.Link>
                        <Nav.Link href="/auth/download">Download</Nav.Link>
                        <Nav.Link href="/auth/delete">Delete</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        );
    }
}

module.exports = AuthorisedNav;
