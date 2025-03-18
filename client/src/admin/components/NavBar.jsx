import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    const logout = async() => {
        localStorage.removeItem("admin");
        window.location.href = "/admin/login"
    }
    return (
        <div>
            <Navbar style={{ position: "fixed", width: "100%", zIndex: "1", top: "0" }} expand="lg" className="bg-primary">
                <Container fluid>
                    <h4 style={{ fontSize: "20px", marginLeft: "-20px" }} className="display-4 mt-2 ls-3"><img src="img/logo_2.png" width={25} alt="logo" /> ForexPluse</h4>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/dashboard"><i className="fas fa-user-circle text-white p-1"></i>Account</Nav.Link>
                            <Nav.Link href="/deposite"><i className="fas fa-money-bill-wave text-white p-1"></i>Deposite</Nav.Link>
                            <Nav.Link href="/withdraw"><i className="fas fa-hand-holding-usd text-white p-1"></i>Withdraw</Nav.Link>
                            <Nav.Link href="/settings"><i class="fas fa-cog text-white p-1"></i>Account Settings</Nav.Link>
                            <Nav.Link href="/contact"><i className="fas fa-question-circle text-white p-1"></i>Contact Support</Nav.Link>
                            <Nav.Link onClick={logout} href="#"><i className="fas fa-sign-out-alt text-danger p-1"></i>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
