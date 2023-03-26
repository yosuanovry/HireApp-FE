/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getProfileWorkers } from "../../Storages/Actions/ProfileWorkers";
import { addSkill,addExperience } from "../../Storages/Actions/ProfileWorkers";
import NavbarCorporate from "../../Component/Navbar/navbarCorporate";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import IconMap from "../../Assets/Profile/mappin.png";
import IconEdit from "../../Assets/Profile/edit.png";

export default function EditProfileWorkers() {
  // const getProfile = useSelector((state) => state.get_profileWork);
  const [inputSkill, setInputSkill] = useState({
    nama_skill: "",
  });

  const [inputExperience, setInputExperience] = useState({
    posisi: "",
    nama_perusahaan: "",
    start_at: "",
    end_at: "",
    deskripsi: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const add_skill = useSelector((state) => state.add_skill);

  const handleChangeSkill = (e) => {
    setInputSkill({
      ...inputSkill,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeExperience = (e) => {
    setInputExperience({
      ...inputExperience,
      [e.target.name]: e.target.value,
    });
  };
  // useEffect(() => {
  //   dispatch(getProfileWorkers(navigate));
  // }, [dispatch, navigate]);

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("nama_skill", inputSkill.nama_skill);
    formData.append("posisi", inputExperience.posisi);
    formData.append("nama_perusahaan", inputExperience.nama_perusahaan);
    formData.append("start_at", inputExperience.start_at);
    formData.append("end_at", inputExperience.end_at);
    formData.append("deskripsi", inputExperience.deskripsi);

    console.log(formData);
    dispatch(addSkill(formData, navigate));
    dispatch(addExperience(formData, navigate));
  };

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
          className="container-fluid z-index-2 position-absolute top-50 start-50 translate-middle"
          style={{ height: "80vh", marginTop: "7vh" }}
        >
          <div
            className="container"
            style={{ position: "relative", height: "" }}
          >
            <form onSubmit={postForm}>
              <div className="row">
                <div className="col-4">
                  <div className="row border border-light-subtle rounded-4">
                    <div
                      className="border-0 rounded-4 "
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="d-flex align-items-center justify-content-center p-5">
                        <div className="row">
                          <div className=" mx-auto text-center">
                            <img
                              src={IconProfile}
                              className="rounded-circle"
                              alt={IconProfile}
                              style={{ minWidth: "10vh", maxWidth: "12vh" }}
                            />
                          </div>
                          <div className="mb-0 mt-3 text-center">
                            <h6>
                              <img className="img me-1" src={IconEdit}></img>
                              Edit
                            </h6>
                          </div>
                          <div className="mt-3">
                            <h4 className="mt-1">nama</h4>
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
                      type="submit"
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
                    className="border border-light-subtle rounded-4 "
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
                        <div className="row">
                          <div className="col-10">
                            <div className="mt-3 mb-3">
                              <input
                                type="text"
                                value={inputSkill.nama_skill}
                                name="nama_skill"
                                required
                                onChange={handleChangeSkill}
                                className="form-control p-3"
                                placeholder="Javascript, Html, css"
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="mt-3 mb-3">
                              <button
                                onClick={handleChangeSkill}
                                type="submit"
                                className="btn btn-warning text-white p-3"
                              >
                                Simpan
                              </button>
                            </div>
                          </div>
                        </div>
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
                        <div className="mt-3 mb-3">
                          <label className="form-label ms-2">Posisi</label>
                          <input
                            type="text"
                            value={inputExperience.posisi}
                            name="posisi"
                            required
                            onChange={handleChangeExperience}
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
                                value={inputExperience.nama_perusahaan}
                                name="nama_perusahaan"
                                required
                                onChange={handleChangeExperience}
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
                                value={inputExperience.start_at}
                                name="start_at"
                                required
                                onChange={handleChangeExperience}
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
                                value={inputExperience.end_at}
                                name="end_at"
                                required
                                onChange={handleChangeExperience}
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
                            value={inputExperience.deskripsi}
                            name="deskripsi"
                            required
                            onChange={handleChangeExperience}
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

                        <div className="container">
                          <label className="form-label ms-2">
                            Upload gambar
                          </label>
                          <div className="border border-2 position-relative">
                            <div
                              className="rounded w-100"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="container-fluid z-index-2 position-absolute top-50 start-50 translate-middle"
        style={{
          marginTop: "3200px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
