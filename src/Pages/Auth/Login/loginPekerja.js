import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import imgBgLogin from "../../../Assets/Auth/img-bg-login.png";
import bgLogin from "../../../Assets/Auth/bg-login.png";
import logoLogin from "../../../Assets/Auth/logo-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginUserPekerja } from "../../../Storages/Actions/AuthPekerja";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const Login = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUserPekerja(data));
  };

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
                <div className="p-5">
                  <h1>Halo, Pewpepole</h1>
                  <h5 className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h5>
                  <form className="mt-5" onSubmit={Login}>
                    <div className="mb-4">
                      <label className="form-label">Email</label>
                      <input onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control p-3" placeholder="Masukan alamat email" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Kata Sandi</label>
                      <input onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control p-3" placeholder="Masukan kata sandi" />
                    </div>
                    <div className="mb-3 d-flex justify-content-end">
                      <Link className="text-center" to={"/auth/send-email"}>
                        Lupa kata sandi?
                      </Link>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-warning text-white shadow-none p-3 w-100">Masuk</button>
                    </div>
                  </form>
                  <div className="mt-5 d-flex justify-content-center">
                    <p>
                      Anda belum punya akun?
<<<<<<< HEAD:src/Pages/Auth/Login/Login.js
                      <Link to={"/auth/register-pekerja"}>
                        {" "}
                        Daftar sebagai pekerja
                      </Link>
                      <Link to={"/auth/register-perekrut"}>
                        {" "}
                        / Daftar sebagai perekrut
                      </Link>
=======
                      <Link to={"/auth/register-pekerja"}> Daftar sebagai pekerja</Link>
>>>>>>> 172106a1b9c04c75968e8d3df83fe6bcc130b039:src/Pages/Auth/Login/loginPekerja.js
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
