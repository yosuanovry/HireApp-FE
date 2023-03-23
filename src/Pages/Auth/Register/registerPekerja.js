import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserPekerja } from "../../../Storages/Actions/AuthPekerja";
import imgBgLogin from "../../../Assets/Auth/img-bg-login.png";
import bgLogin from "../../../Assets/Auth/bg-login.png";
import logoLogin from "../../../Assets/Auth/logo-icon.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function RegisterPekerja() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmRegister = (data) => {
    Register(data);
    handleShow();
  };

  const Register = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      password,
      phone,
    };
    dispatch(registerUserPekerja(data));
  };

  console.log(name);
  console.log(email);
  console.log(password);
  console.log(phone);

  return (
    <div className="container-fluid">
      <div className="p-5 ms-5 me-5">
        <div className="row row-cols-1 d-flex align-items-center">
          <div className="col-xl-6">
            <div className="row row-cols-xl-1">
              <div className="col position-relative">
                <div className="">
                  <img src={imgBgLogin} className="img-fluid w-100" alt="" style={{ height: "100vh" }} />
                </div>
                <div className="">
                  <img src={bgLogin} className="img-fluid position-absolute top-50 start-50 translate-middle text-white w-100" alt="" style={{ height: "100vh" }} />
                  <h1 className="position-absolute top-50 start-50 translate-middle text-white w-75">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                  <div className="position-absolute top-0 start-0 p-5">
                    <img src={logoLogin} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 d-flex align-items-center justify-content-center">
            <div className="row row-cols-xl-1">
              <div className="col" style={{ height: "40rem" }}>
                <div className="p-5 mt-5">
                  <h1>Halo, Pewpepole</h1>
                  <h5 className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h5>
                  <form className="mt-5" onSubmit={confirmRegister}>
                    <div className="mb-4">
                      <label className="form-label">Nama</label>
                      <input name="nama" onChange={(e) => setName(e.target.value)} required type="text" className="form-control p-3" placeholder="Masukan nama panjang" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Email</label>
                      <input name="email" onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control p-3" placeholder="Masukan alamat email" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">No handphone</label>
                      <input name="phone" onChange={(e) => setPhone(e.target.value)} required type="text" className="form-control p-3" placeholder="Masukan no handphone" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Kata Sandi</label>
                      <input name="password" onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control p-3" placeholder="Masukan kata sandi" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Konfirmasi Kata Sandi</label>
                      <input name="password" onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control p-3" placeholder="Masukan Konfirmasi kata sandi" />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-warning text-white shadow-none p-3 w-100">Daftar</button>
                    </div>
                  </form>
                  <div className="my-2 mt-5 d-flex justify-content-center">
                    <p>
                      Anda sudah punya akun?<Link to={"/auth/login"}> Masuk disini</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">Register Berhasil</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <p>Please check your email for verification</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="btn-warning text-white shadow-none" variant="secondary" style={{ width: "200px" }} onClick={() => navigate("/auth/login-pekerja")}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
