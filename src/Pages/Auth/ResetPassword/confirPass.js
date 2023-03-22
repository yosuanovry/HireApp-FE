import React from "react";
import imgBgLogin from "../../../Images/img-bg-login.png";
import bgLogin from "../../../Images/bg-login.png";
import logoLogin from "../../../Images/logo-icon.png";

export default function ConfirPass() {
  return (
    <div className="container-fluid">
      <div className="p-5 ms-5 me-5">
        <div className="row row-cols-1 d-flex align-items-center">
          <div className="col-xl-6">
            <div className="row row-cols-xl-1">
              <div className="col position-relative">
                <div className="">
                  <img
                    src={imgBgLogin}
                    className="img-fluid w-100"
                    alt=""
                    style={{ height: "100vh" }}
                  />
                </div>
                <div className="">
                  <img
                    src={bgLogin}
                    className="img-fluid position-absolute top-50 start-50 translate-middle text-white w-100"
                    alt=""
                    style={{ height: "100vh" }}
                  />
                  <h1 className="position-absolute top-50 start-50 translate-middle text-white w-75">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </h1>
                  <div className="position-absolute top-0 start-0 p-5">
                    <img src={logoLogin} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 d-flex align-items-start justify-content-start">
            <div className="row row-cols-xl-1">
              <div className="col" style={{ height: "40rem", width: "50rem" }}>
                <div className="p-5 mt-5">
                  <h1>Reset Password</h1>
                  <h5 className="mb-5">
                    Enter your user account's verified email address and we will
                    send you a password reset link.
                  </h5>
                  <form className="mt-5">
                    <div className="mb-3">
                      <label className="form-label">Kata Sandi</label>
                      <input
                        type="password"
                        className="form-control p-3"
                        placeholder="Masukan kata sandi"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Konfirmasi Kata Sandi
                      </label>
                      <input
                        type="password"
                        className="form-control p-3"
                        placeholder="Masukan Konfirmasi kata sandi"
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-warning text-white shadow-none p-3 w-100">
                        Reset password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
