import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {
    FaPlaneDeparture,
    FaHeart,
    FaUserCircle
} from "react-icons/fa";
import "../styles/Navbar.css";

function NavigationBar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Logged out successfully");

        navigate("/login");
    };

    return (

        <Navbar bg="white" expand="lg" className="shadow-sm py-3">

            <Container>

                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    className="brand-logo"
                >
                    <FaPlaneDeparture className="me-2" />
                    PlanMyTrip
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">

                    <Nav className="mx-auto">

                        <Nav.Link as={NavLink} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/packages">
                            Packages
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/guides">
                            Guides
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/my-bookings">
                            My Bookings
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/support">
                            Support
                        </Nav.Link>

                    </Nav>

                    <div className="d-flex align-items-center">

                        <Button
                            variant="light"
                            className="wishlist-btn me-3"
                            onClick={() => navigate("/wishlist")}
                        >
                            <FaHeart size={20} />
                        </Button>

                        {token ? (

                            <>

                                <span className="fw-bold me-3">
                                    Hi, {user?.name || "User"}
                                </span>

                                <Button
                                    variant="light"
                                    className="me-2"
                                    onClick={() => navigate("/profile")}
                                >
                                    <FaUserCircle size={22} />
                                </Button>

                                <Button
                                    variant="danger"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>

                            </>

                        ) : (

                            <>

                                <Button
                                    variant="outline-primary"
                                    className="me-2"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </Button>

                                <Button
                                    variant="primary"
                                    onClick={() => navigate("/register")}
                                >
                                    Register
                                </Button>

                            </>

                        )}

                    </div>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );
}

export default NavigationBar;