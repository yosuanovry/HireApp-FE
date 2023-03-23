/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavbarCorporate from "../../Component/Navbar/navbarCorporate";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import IconMap from "../../Assets/Profile/mappin.png";
// import { Button } from "bootstrap";
export default function EditProfileWorkers() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <NavbarCorporate />
      <div className="">
        <div
          className="container-fluid border-0 z-index-1 position-absolute"
          style={{
            height: "35vh",
            backgroundColor: "#5E50A1",
          }}
        ></div>
        <div
          className="container z-index-2 position-absolute top-50 start-50 translate-middle"
          style={{ height: "70vh", marginTop: "10vh" }}
        >
          <div
            className="container"
            style={{ position: "relative", height: "" }}
          >
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div
                    className="border-0 rounded-4 "
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="d-flex align-items-center justify-content-center p-5">
                      <div className="row">
                        <div className="mb-0 text-center">
                          <h6>Edit</h6>
                        </div>
                        <div className=" mx-auto text-center">
                          <img
                            src={IconProfile}
                            className="rounded-circle"
                            alt={IconProfile}
                            style={{ minWidth: "10vh", maxWidth: "12vh" }}
                          />
                        </div>
                        <div className="mt-5">
                          <h4 className="mt-1">Louis Tomlinson</h4>
                          <h6 className="mt-2">Web Developer</h6>
                          <h6 className="mt-2 mb-3">
                            <img className="img me-1" src={IconMap}></img>
                            Purwokerto, Jawa Tengah
                          </h6>
                          <h6 className="mt-2">Freelancer</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn text-white mt-5 p-3"
                    style={{ background: "#5E50A1" }}
                  >
                    Simpan
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger mt-4 p-3"
                    style={{ borderColor: "#5E50A1", color: "#5E50A1" }}
                  >
                    Batal
                  </button>
                </div>
              </div>
              <div className="col-8">
                <div
                  className="border-0 rounded-4 "
                  style={{
                    backgroundColor: "white",
                    minHeight: "15vh",
                  }}
                >
                  <div className="row">
                    <div className="p-5">
                      <div className="border-bottom border-2 ">
                        <h4 className="">Data diri</h4>
                      </div>
                      <form>
                        <div className="mt-3 mb-3">
                          <label className="form-label ms-2">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan nama lengkap"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Job desk</label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan job desk"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Domisili</label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan domisili"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">
                            Tempat kerja
                          </label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan tempat kerja"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">
                            Deskripsi singkat
                          </label>
                          <textarea
                            type="text"
                            className="form-control p-3 mt-0"
                            placeholder="Tuliskan deskripsi singkat"
                            style={{ minHeight: "15vh" }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="border-0 rounded-4 mt-5"
                  style={{
                    backgroundColor: "white",
                    minHeight: "15vh",
                  }}
                >
                  <div className="row">
                    <div className="p-5">
                      <div className="border-bottom border-2 ">
                        <h4 className="">Data diri</h4>
                      </div>
                      <form>
                        <div className="mt-3 mb-3">
                          <label className="form-label ms-2">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan nama lengkap"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
