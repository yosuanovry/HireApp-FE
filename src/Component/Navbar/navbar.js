import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import peworld from "../../Assets/LandingPage/hireapp_logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import iconBell from "../../Assets/NavCorporate/bell.png";
import iconMail from "../../Assets/NavCorporate/mail.png";

export default function NavbarUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const photos = localStorage.getItem("photo");

  const confirmLogout = () => {
    handleShow();
  };

  const Logout = () => {
    localStorage.clear();
    navigate("/home");
  };

  if (!photos) {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="mt-5">
            <div className="row">
              <div className="col-sm-4 d-flex justify-content-center">
                <img src={peworld} alt="" style={{ minWidth: "10vw" }} />
              </div>
              <div className="col-sm-3"></div>
              <div className="col-sm-4 ms-4">
                <div className="row">
                  <div className="col d-flex justify-content-end align-items-center">
                    <Link
                      to="/auth/login-pekerja"
                      type="button"
                      className="btn-1 btn p-3"
                      style={{
                        borderColor: "#5E50A1",
                        borderWidth: "2px",
                        color: "#5E50A1",
                        fontWeight: "700",
                        fontSize: "1vw",
                      }}
                    >
                      Masuk Untuk Pekerja
                    </Link>
                  </div>
                  <div className="col d-flex justify-content-start align-items-center">
                    <Link
                      to="/auth/login-perekrut"
                      type="button"
                      className="btn-2 btn p-3"
                      style={{
                        borderColor: "#5E50A1",
                        backgroundColor: "#5E50A1",
                        borderWidth: "2px",
                        color: "white",
                        fontWeight: "700",
                        fontSize: "1vw",
                      }}
                    >
                      Masuk Untuk Perekrut
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container className="container p-3">
        <Navbar.Brand href="#">
          <img className="img" src={peworld} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex">
            <Link className="me-5" to={"/auth/login"}>
              {" "}
              <img src={iconBell} className="rounded-circle" alt={iconBell} style={{ maxWidth: "5vh" }} />
            </Link>
            <Link className="me-5" to={"/chat-workers"}>
              {" "}
              <img src={iconMail} className="rounded-circle" alt={iconMail} style={{ maxWidth: "5vh" }} />
            </Link>
            <Link onClick={confirmLogout}>
              {" "}
              <img src={photos} className="rounded-circle" alt={photos} style={{ maxWidth: "3vh" }} />
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Kamu yakin ingin logout?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="danger" onClick={() => Logout()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}
