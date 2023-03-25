/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavbarCorporate from "../../Component/Navbar/navbarCorporate";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import IconMap from "../../Assets/Profile/mappin.png";
import IconEdit from "../../Assets/Profile/edit.png";
import IconExp from "../../Assets/Profile/tokpet.png"
// import { Button } from "bootstrap";
export default function EditDetailProfile() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <NavbarCorporate />
      <div className="">
        <div
          className="container-fluid z-index-1 position-absolute"
          style={{
            height: "35vh",
            backgroundColor: "#5E50A1",
          }}
        ></div>
        <div
          className="container-fluid z-index-2 position-absolute top-50 start-50 translate-middle"
          style={{ height: "80vh", marginTop: "7vh" }}
        >
          <div
            className="container "
            style={{ position: "relative", height: "" }}
          >
            <div className="row">
              <div className="col-4">
                <div className="row border border-light-subtle rounded-4">
                  <div
                    className="border-0 rounded-4 "
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="d-flex align-items-center justify-content-center p-5 ">
                      <div className="row">
                        <div className=" mx-auto text-center">
                          <img
                            src={IconProfile}
                            className="img img-fluid rounded-circle"
                            alt={IconProfile}
                            style={{ minWidth: "10vh", maxWidth: "12vh" }}
                          />
                        </div>
                        <div className="mb-0 mt-3 text-center">
                          <h6>
                            <img className="img me-1" src={IconEdit}></img>Edit
                          </h6>
                        </div>
                        <div className="mt-3">
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
                {/* Data Diri */}
                <div
                  className="container border border-light-subtle rounded-4 "
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

                {/* Skill */}
                <div
                  className="container border border-light-subtle rounded-4 mt-4"
                  style={{
                    backgroundColor: "white",
                    minHeight: "15vh",
                  }}
                >
                  <div className="row">
                    <div className="p-5">
                      <div className="border-bottom border-2 ">
                        <h4 className="">Skill</h4>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-10">
                            <div className="mt-3 mb-3">
                              <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Javascript, Html, css"
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="mt-3 mb-3">
                              <button
                                type="button"
                                className="btn btn-warning text-white p-3"
                              >
                                Simpan
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Pengalaman */}
                <div
                  className="container border border-light-subtle rounded-4 mt-4"
                  style={{
                    backgroundColor: "white",
                    minHeight: "15vh",
                  }}
                >
                  <div className="row">
                    <div className="p-5">
                      <div className="border-bottom border-2 ">
                        <h4 className="">Pengalaman kerja</h4>
                      </div>
                      <div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                          <button
                            className="btn btn-warning text-white me-md-2 p-3"
                            type="button"
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger p-3" type="button">
                            X
                          </button>
                        </div>
                        <div>
                          <div className="row d-flex align-items-start">
                            <div className="col-3 d-flex justify-content-center ">
                              <img src={IconExp} className="" />
                            </div>
                            <div className="col-8 border-bottom border-2">
                              <h4>Web Developer</h4>
                              <h6>Tokopedia</h6>
                              <p>July 2019 - January 2020 6 months</p>
                              <h6 className="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum erat orci, mollis
                                nec gravida sed, ornare quis urna. Curabitur eu
                                lacus fringilla, vestibulum risus at.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <form>
                        <div className="mt-3 mb-3">
                          <label className="form-label ms-2">Posisi</label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="web developer"
                          />
                        </div>

                        <div className="row">
                          <div className="col-6">
                            <div className="mt-3 mb-3">
                              <label className="form-label ms-2">
                                Nama perusahaan
                              </label>
                              <input
                                type="text"
                                className="form-control p-3"
                                placeholder="PT Harus bisa"
                              />
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="mt-3 mb-3">
                              <label className="form-label ms-2">
                                Dari Bulan/tahun
                              </label>
                              <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Januari 2018"
                              />
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="mt-3 mb-3">
                              <label className="form-label ms-2">
                                Sampai Bulan/tahun
                              </label>
                              <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Januari 2019"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label ms-2">
                            Deskripsi singkat
                          </label>
                          <textarea
                            type="text"
                            className="form-control p-3 mt-0"
                            placeholder="Deskripsikan pekerjaan anda"
                            style={{ minHeight: "15vh" }}
                          />
                        </div>

                        <div className="mb-3 mt-5 border-top border-2 ">
                          <button
                            type="button"
                            className="btn btn-outline-warning w-100 p-3 mt-5"
                          >
                            Tambah Pengalaman Kerja
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="container border border-light-subtle rounded-4 mt-4"
                  style={{
                    backgroundColor: "white",
                    minHeight: "15vh",
                  }}
                >
                  <div className="row">
                    <div className="p-5">
                      <div className="border-bottom border-2 ">
                        <h4 className="">Pengalaman kerja</h4>
                      </div>
                      <div>
                        <div className="d-grid gap-4 d-md-flex justify-content-md-end mt-4">
                          <div className="col-2 d-flex justify-content-center ">
                            <img src={IconExp} className="" />
                          </div>
                          <div className=" col-6">
                            <h6>Tokopedia</h6>
                            <h6>Tokopedia</h6>
                          </div>
                          <button
                            className="btn btn-warning text-white me-md-2 p-3"
                            type="button"
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger p-3" type="button">
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Portofolio */}
                <div
                  className="container border border-light-subtle rounded-4 mt-4"
                  style={{
                    backgroundColor: "white",
                    minHeight: "15vh",
                  }}
                >
                  <div className="row">
                    <div className="p-5">
                      <div className="border-bottom border-2 ">
                        <h4 className="">Portofolio</h4>
                      </div>
                      <form>
                        <div className="mt-3 mb-3">
                          <label className="form-label ms-2">
                            Nama aplikasi
                          </label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukkan nama aplikasi"
                          />
                        </div>
                        <div className="mt-3 mb-3">
                          <label className="form-label ms-2">
                            Link repository
                          </label>
                          <input
                            type="text"
                            className="form-control p-3"
                            placeholder="Masukkan link repository"
                          />
                        </div>

                        <div className="mt-3 mb-3 p-2">
                          <label className="form-label ms-2">
                            Type portofolio
                          </label>
                          <div className="row row-cols-2 p-3">
                            <div className="col-3 form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label className="form-check-label">
                                Default radio
                              </label>
                            </div>
                            <div className="col-4 form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                              />
                              <label className="form-check-label">
                                Default checked radio
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="container mt-3">
                          <label className="form-label ms-2">
                            Type portofolio
                          </label>
                          <div className="card border-0 position-relative">
                            <div
                              className="card rounded w-100 bg-light"
                              style={{ height: "350px" }}
                            ></div>
                            <div
                              action="/file-upload"
                              className="dropzone position-absolute top-50 start-50 translate-middle text-center ms-5 text-black"
                            >
                              <div className="fallback">
                                <input
                                  className="file"
                                  type="file"
                                  name="photo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 mt-5 border-top border-2 ">
                          <button
                            type="button"
                            className="btn btn-outline-warning w-100 p-3 mt-5"
                          >
                            Tambah Portofolio
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
      </div>
      <div
        className="container-fluid z-index-2 position-absolute top-50 start-50 translate-middle"
        style={{
          marginTop: "4200px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
