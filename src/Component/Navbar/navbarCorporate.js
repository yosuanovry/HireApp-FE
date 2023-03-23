/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoNav from "../../Assets/NavCorporate/logo-nav-corporate.png";
import iconBell from "../../Assets/NavCorporate/bell.png";
import iconMail from "../../Assets/NavCorporate/mail.png";
import profileNav from "../../Assets/NavCorporate/louisth.png";
function NavbarCorporate() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="container p-3">
        <Navbar.Brand href="#">
          <img className="img" src={logoNav} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Link className="me-5" to={"/auth/login"}>
              {" "}
              <img
                src={iconBell}
                className="rounded-circle"
                alt={iconBell}
                style={{ maxWidth: "5vh" }}
              />
            </Link>
            <Link className="me-5" to={"/auth/login"}>
              {" "}
              <img
                src={iconMail}
                className="rounded-circle"
                alt={iconMail}
                style={{ maxWidth: "5vh" }}
              />
            </Link>
            <Link className="" to={"/auth/login"}>
              {" "}
              <img
                src={profileNav}
                className="rounded-circle"
                alt={profileNav}
                style={{ maxWidth: "3vh" }}
              />
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCorporate;
