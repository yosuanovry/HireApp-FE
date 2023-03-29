/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addSkill,
  addExperience,
  putProfileWorkers,
  addPortofolio,
} from "../../Storages/Actions/ProfileWorkers";
import NavbarUser from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import IconMap from "../../Assets/Profile/mappin.png";
import IconEdit from "../../Assets/Profile/edit.png";

export default function EditProfileWorkers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getName = localStorage.getItem("nama")

  

  const coursesPage = () => {
    navigate("/edit/detail-profile-workers");
  };
  //update data diri
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [tempatkerja, setTempatKerja] = useState("");
  const [nama, setNama] = useState("");
  const [job, setJob] = useState("");
  const updateProfileWorkers = (e) => {
    e.preventDefault();
    const data = {
      provinsi,
      kota,
      tempatkerja,
      deskripsi,
      nama,
      job,
    };
    console.log(data);
    dispatch(putProfileWorkers(data, navigate));
  };

  useEffect(() => {
    localStorage.setItem('nama', nama);
  },[nama])
  
  //add skill pekerja
  const [nama_skill, setNamaSkill] = useState("");
  const addSkillWorkers = (e) => {
    e.preventDefault();
    const data = {
      nama_skill,
    };
    console.log(data);
    dispatch(addSkill(data, navigate));
  };
  //add experience
  const [posisi, setPosisi] = useState("");
  const [nama_perusahaan, setNamaPerusahaan] = useState("");
  const [start_at, setStartAt] = useState("");
  const [end_at, setEndAt] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const addExperienceWorkers = (e) => {
    e.preventDefault();
    const data = {
      posisi,
      nama_perusahaan,
      start_at,
      end_at,
      deskripsi,
    };
    console.log(data);
    dispatch(addExperience(data, navigate));
  };
  //add portofolio link_repo,nama_perusahaan,tipe,photo
  const [inputDataPortofolio, setDataPortofolio] = useState({
    nama_perusahaan: "",
    link_repo: "",
    tipe: "",
  });
  const [photo, setPhoto] = useState();
  const handleChangeAddPorto = (e) => {
    setDataPortofolio({
      ...inputDataPortofolio,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const postFormPortofolio = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_perusahaan", inputDataPortofolio.nama_perusahaan);
    formData.append("link_repo", inputDataPortofolio.link_repo);
    formData.append("tipe", inputDataPortofolio.tipe);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(addPortofolio(formData, navigate));
  };
  
  return (
    <div style={{ background: "#E5E5E5" }}>
      <NavbarUser />
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
            {/* Data Diri */}
            <form onSubmit={updateProfileWorkers}>
              <div className="row mt-3">
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
                            <h4 className="mt-1">{getName}</h4>
                            <h6 className="mt-2" >{"Web Developer"}</h6>
                            <h6 className="mt-2 mb-3">
                              <img className="img me-1" src={IconMap}></img>
                              {"Purwokerto, Jawa Tengah"}
                            </h6>
                            <h6 className="mt-2">{"Freelancer"}</h6>
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
                      onClick={coursesPage}
                      className="btn btn-outline-success mt-4 p-3"
                      style={{ borderColor: "#5E50A1", color: "#5E50A1" }}
                    >
                      Detail Profile
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
                            name="nama"
                            required
                            onChange={(e) => setNama(e.target.value)}
                            className="form-control p-3"
                            placeholder={getName}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Job desk</label>
                          <input
                            type="text"
                            name="job"
                            required
                            onChange={(e) => setJob(e.target.value)}
                            className="form-control p-3"
                            placeholder={"Masukan job desk"}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Domisili</label>
                          <input
                            type="text"
                            name="kota"
                            required
                            onChange={(e) => setKota(e.target.value)}
                            className="form-control p-3"
                            placeholder={"Masukan domisili"}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">Provinsi</label>
                          <input
                            type="text"
                            name="provinsi"
                            required
                            onChange={(e) => setProvinsi(e.target.value)}
                            className="form-control p-3"
                            placeholder={"Masukan provinsi"}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">
                            Tempat kerja
                          </label>
                          <input
                            type="text"
                            name="tempatkerja"
                            required
                            onChange={(e) => setTempatKerja(e.target.value)}
                            className="form-control p-3"
                            placeholder={"Masukan tempat kerja"}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label ms-2">
                            Deskripsi singkat
                          </label>
                          <textarea
                            type="text"
                            name="deskripsi"
                            required
                            onChange={(e) => setDeskripsi(e.target.value)}
                            className="form-control p-3 mt-0"
                            placeholder={"Tuliskan deskripsi singkat"}
                            style={{ minHeight: "15vh" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* Skill */}
            <form onSubmit={addSkillWorkers}>
              <div className="row mt-3">
                <div className="col-4"></div>
                <div className="col-8">
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
                                name="nama_skill"
                                required
                                onChange={(e) => setNamaSkill(e.target.value)}
                                className="form-control p-3"
                                placeholder={"Javascript, Html, css"}
                              />
                            </div>
                          </div>
                          <div className="col-2">
                            <div className="mt-3 mb-3">
                              <button
                                type="submit"
                                required
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
                </div>
              </div>
            </form>
            {/* Detail Data Diri */}
            <div>
              <form onSubmit={addExperienceWorkers}>
                <div className="row mt-3">
                  <div className="col-4"></div>
                  <div className="col-8">
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
                              name="posisi"
                              required
                              onChange={(e) => setPosisi(e.target.value)}
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
                                  name="nama_perusahaan"
                                  onChange={(e) =>
                                    setNamaPerusahaan(e.target.value)
                                  }
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
                                  name="start_at"
                                  required
                                  onChange={(e) => setStartAt(e.target.value)}
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
                                  name="end_at"
                                  required
                                  onChange={(e) => setEndAt(e.target.value)}
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
                              name="deskripsi"
                              required
                              onChange={(e) => setDeskripsi(e.target.value)}
                              className="form-control p-3 mt-0"
                              placeholder="Deskripsikan pekerjaan anda"
                              style={{ minHeight: "15vh" }}
                            />
                          </div>

                          <div className="mb-3 mt-5 border-top border-2 ">
                            <button
                              type="submit"
                              className="btn btn-outline-warning w-100 p-3 mt-5"
                            >
                              Tambah Pengalaman Kerja
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* Portofolio */}
              <form onSubmit={postFormPortofolio}>
                <div className="row mt-3">
                  <div className="col-4"></div>
                  <div className="col-8">
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
                              value={inputDataPortofolio.nama_perusahaan}
                              name="nama_perusahaan"
                              required
                              onChange={handleChangeAddPorto}
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
                              value={inputDataPortofolio.link_repo}
                              name="link_repo"
                              required
                              onChange={handleChangeAddPorto}
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
                                  value="Aplikasi mobile"
                                  name="tipe"
                                  required
                                  onChange={handleChangeAddPorto}
                                  id="tipe1"
                                />
                                <label className="form-check-label">
                                  Aplikasi mobile
                                </label>
                              </div>
                              <div className="col-4 form-check">
                                <input
                                  className="form-check-input"
                                  value="Aplikasi web"
                                  name="tipe"
                                  required
                                  onChange={handleChangeAddPorto}
                                  id="tipe2"
                                  type="radio"
                                />
                                <label className="form-check-label">
                                  Aplikasi web
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
                                    required
                                    onChange={handlePhoto}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-3 mt-5 border-top border-2 ">
                            <button
                              type="submit"
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
      </div>
      <div
        className="container-fluid z-index-2 position-absolute top-50 start-50 translate-middle"
        style={{
          marginTop: "4000px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
