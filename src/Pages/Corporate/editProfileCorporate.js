/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavbarCorporate from "../../Component/Navbar/navbarCorporate";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
// import { Button } from "bootstrap";
export default function EditProfileCorporate() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <NavbarCorporate />
      <div className="">
        <div
          className="container-fluid card border-0 z-index-1 position-absolute"
          style={{
            height: "35vh",
            backgroundColor: "#5E50A1",
          }}
        ></div>
        <div
          className="container z-index-2 position-absolute top-50 start-50 translate-middle"
          style={{ height: "70vh", marginTop: "7vh" }}
        >
          <div
            className="container"
            style={{ position: "relative", height: "" }}
          >
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div
                    className="card border-0 rounded-4 "
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
                          <h4 className="mt-1">PT. Martabat Jaya Abadi</h4>
                          <h6 className="mt-2">Financial</h6>
                          <h6 className="mt-2 mb-3">Purwokerto, Jawa Tengah</h6>
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
                  className="card border-0 rounded-4 "
                  style={{
                    backgroundColor: "white",
                    minHeight: "155vh",
                    maxHeight: "155vh",
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
                            Nama Perusahaan
                          </label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan nama perusahaan"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Bidang</label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan bidang perusahaan ex : Financial"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Kota</label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan kota"
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
                        <div className="mb-3">
                          <label className="form-label ms-2">Email</label>
                          <input
                            type="email"
                            className="form-control p-3"
                            placeholder="Masukkan Email "
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">
                            Email Perusahaan
                          </label>
                          <input
                            type="email"
                            className="form-control p-3"
                            placeholder="Masukan email Perusahaan "
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">
                            Nomor Telepon
                          </label>
                          <input
                            type="number"
                            className="form-control p-3"
                            placeholder="Masukan nomor telepon "
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Linkedin</label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukan nama Linkedin "
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
