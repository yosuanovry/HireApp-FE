/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  addSkill,
  addExperience,
  putProfileWorkers,
  getProfileWorkers,
  getSkillWorkers,
  getExperienceWorkers,
  deleteExperience,
  editExperience,
  addPortofolio,
  getPortofolioWorkers,
  deletePortofolio,
  editPortofolio,
} from "../../Storages/Actions/ProfileWorkers";
import NavbarUser from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import IconMap from "../../Assets/Profile/mappin.png";
import IconEdit from "../../Assets/Profile/edit.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ImgDef from "../../Assets/Profile/pengalamanKerja.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditDetailProfile() {
  const get_ProfileWorkers = useSelector((state) => state.get_profileWorkers);
  const get_SkillWorkers = useSelector((state) => state.get_skillWorkers);
  const get_ExperienceWorkers = useSelector(
    (state) => state.get_experienceWorkers
  );
  const get_PortofolioWorkers = useSelector(
    (state) => state.get_portofolioWorkers
  );
  const delete_ExperienceWorkers = useSelector(
    (state) => state.delete_experience
  );
  const delete_PortofolioceWorkers = useSelector(
    (state) => state.delete_portofolio
  );
  const update_ExperienceWorkers = useSelector((state) => state.put_experience);
  const update_PortofolioWorkers = useSelector((state) => state.put_portofolio);

  const put_profileWorkers = useSelector((state) => state.put_profileWorkers);
  const add_skill = useSelector((state) => state.add_skill);
  const add_experiences = useSelector((state) => state.add_experiences);
  const add_portofolio = useSelector((state) => state.add_portofolio);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toastLoading = () =>
    toast.success("Please wait...", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showEditPorto, setShowEditPorto] = useState(false);
  const [showDeletPorto, setShowDeletePorto] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEditPorto = () => setShowEditPorto(true);
  const handleCloseEditPorto = () => setShowEditPorto(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseDeletePorto = () => setShowDeletePorto(false);
  const handleShowDeletePorto = () => setShowDeletePorto(true);
  const [selected, setSelected] = useState();

  ///////Get Data form///////
  //get profile
  useEffect(() => {
    dispatch(getProfileWorkers(navigate));
  }, [dispatch, navigate]);
  //get skill workers
  useEffect(() => {
    dispatch(getSkillWorkers(navigate));
  }, [dispatch, navigate]);
  //get experience workers
  useEffect(() => {
    dispatch(getExperienceWorkers(navigate));
  }, [dispatch, navigate]);
  useEffect(() => {
    dispatch(getPortofolioWorkers(navigate));
  }, [dispatch, navigate]);

  ///////Delete Data form///////
  //delete experience
  const confirmDelete = (id) => {
    setSelected(id);
    handleShow();
  };
  const deleteData = (id) => {
    dispatch(deleteExperience(id));
  };
  useEffect(() => {
    dispatch(getProfileWorkers(navigate));
    handleClose();
  }, [delete_ExperienceWorkers, dispatch, navigate]);
  //delete portofolio
  const confirmDeletePorto = (id) => {
    setSelected(id);
    handleShowDeletePorto();
  };
  const deleteDataPortofolio = (id) => {
    dispatch(deletePortofolio(id));
    navigate("/edit/detail-profile-workers");
  };
  useEffect(() => {
    dispatch(getProfileWorkers(navigate));
    handleCloseDeletePorto();
  }, [delete_PortofolioceWorkers, dispatch, navigate]);
  ///////Update Data form///////
  //update experience
  const UpdateExperienceWorkers = (id) => {
    const data = {
      posisi,
      nama_perusahaan,
      start_at,
      end_at,
      deskripsi,
    };
    console.log(data);
    dispatch(editExperience(id, data, navigate));
  };
  const confirmEditExperience = (id) => {
    setSelected(id);
    handleShowEdit();
  };
  //update Portofolio
  const [tipe, setTipePorto] = useState("");
  const [link_repo, setLinkRepo] = useState("");
  const UpdatePortofolioWorkers = (id) => {
    const formData = new FormData();
    formData.append("nama_perusahaan", nama_perusahaan);
    formData.append("link_repo", link_repo);
    formData.append("tipe", tipe);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(editPortofolio(id, formData, navigate));
  };
  const confirmEditPortofolio = (id) => {
    setSelected(id);
    handleShowEditPorto();
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
  ///////add Data form///////
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
  //add Portofolio
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
      <ToastContainer />
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
            {get_ProfileWorkers.data?.map((item, index) => (
              <form key={index} onSubmit={updateProfileWorkers}>
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
                                src={item.photo || IconProfile}
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
                              <h4 className="mt-1">{item.nama || "nama"}</h4>
                              <h6 className="mt-2">{item.job || "job"}</h6>
                              <h6 className="mt-2 mb-3">
                                <img className="img me-1" src={IconMap}></img>
                                {item.kota || "kota"},
                                {item.provinsi || "provinsi"}
                              </h6>
                              <h6 className="mt-2">
                                {item.deskripsi || "deskripsi"}
                              </h6>
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
                      {put_profileWorkers.isLoading && toastLoading()}
                      {put_profileWorkers.errorMessage}
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
                              placeholder={item.nama || "Masukan nama lengkap"}
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
                              placeholder={item.job || "Masukan job desk"}
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
                              placeholder={item.kota || "Masukan domisili"}
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
                              placeholder={item.provinsi || "Masukan provinsi"}
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
                              placeholder={
                                item.tempat_kerja || "Masukan tempat kerja"
                              }
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
                              placeholder={
                                item.deskripsi || "Tuliskan deskripsi singkat"
                              }
                              style={{ minHeight: "15vh", resize: "none" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ))}
            {/* Skill */}
            {get_SkillWorkers.data?.map((item, index) => (
              <form key={index} onSubmit={addSkillWorkers}>
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
                                  placeholder={
                                    item.nama_skill || "Javascript, Html, css"
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="mt-3 mb-3">
                                <button
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
                    {add_skill.isLoading && toastLoading()}
                    {add_skill.errorMessage}
                  </div>
                </div>
              </form>
            ))}
            {/* Pengalaman */}
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
                          {/* get pengalaman kerja */}
                          {get_ExperienceWorkers.data?.map((item, index) => (
                            <div key={index}>
                              <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                <button
                                  onClick={() => confirmEditExperience(item.id)}
                                  className="btn btn-warning text-white me-md-2 p-3"
                                  type="button"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => confirmDelete(item.id)}
                                  className="btn btn-danger p-3"
                                  type="button"
                                >
                                  X
                                </button>
                              </div>
                              <div>
                                <div className="row d-flex align-items-start">
                                  <div className="col-3 d-flex justify-content-center ">
                                    <img
                                      src={ImgDef}
                                      className=""
                                      style={{ maxWidth: "200px" }}
                                    />
                                  </div>
                                  <div className="col-8 border-bottom border-3">
                                    <h4>{item.posisi}</h4>
                                    <h6>{item.nama_perusahaan}</h6>
                                    <p>
                                      {item.start_at} - {item.end_at}
                                    </p>
                                    <h6 className="">{item.deskripsi}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

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
                            {add_experiences.isLoading && toastLoading()}
                            {add_experiences.errorMessage}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <form></form>
              <Modal show={showEdit} onHide={() => handleCloseEdit()}>
                {update_ExperienceWorkers.isLoading ? (
                  toastLoading()
                ) : (
                  <>
                    <form onSubmit={UpdateExperienceWorkers}>
                      <Modal.Header closeButton className="bg-white">
                        <Modal.Title>Update Pengalaman Kerja</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <label className="form-label ms-2">Posisi</label>
                          <input
                            type="text"
                            name="posisi"
                            required
                            onChange={(e) => setPosisi(e.target.value)}
                            className="form-control p-2"
                            placeholder="web developer"
                          />
                        </div>
                        <div>
                          <label className="form-label ms-2">
                            Nama perusahaan
                          </label>
                          <input
                            type="text"
                            name="nama_perusahaan"
                            onChange={(e) => setNamaPerusahaan(e.target.value)}
                            className="form-control p-2"
                            placeholder="PT Harus bisa"
                          />
                        </div>
                        <div>
                          <label className="form-label ms-2">
                            Dari Bulan/tahun
                          </label>
                          <input
                            type="text"
                            name="start_at"
                            required
                            onChange={(e) => setStartAt(e.target.value)}
                            className="form-control p-2"
                            placeholder="Januari 2018"
                          />
                        </div>
                        <div>
                          <label className="form-label ms-2">
                            Sampai Bulan/tahun
                          </label>
                          <input
                            type="text"
                            name="end_at"
                            required
                            onChange={(e) => setEndAt(e.target.value)}
                            className="form-control p-2"
                            placeholder="Januari 2019"
                          />
                        </div>
                        <div>
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
                      </Modal.Body>
                      <Modal.Footer className="bg-white">
                        <Button
                          variant="secondary"
                          onClick={() => handleCloseEdit()}
                        >
                          Close
                        </Button>
                        <Button
                          type="submit"
                          variant="success"
                          onClick={() => UpdateExperienceWorkers(selected)}
                        >
                          Update
                        </Button>
                      </Modal.Footer>
                    </form>
                  </>
                )}
              </Modal>
              <Modal show={show} onHide={() => handleClose()}>
                {delete_ExperienceWorkers.isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <Modal.Header closeButton className="bg-white">
                      <Modal.Title>Kamu yakin hapus data ini</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer className="bg-white">
                      <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteData(selected)}
                      >
                        Delete data
                      </Button>
                    </Modal.Footer>
                  </>
                )}
              </Modal>
            </div>
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
                        {get_PortofolioWorkers.data?.map((item, index) => (
                          <div key={index}>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                              <button
                                onClick={() => confirmEditPortofolio(item.id)}
                                className="btn btn-warning text-white me-md-2 p-3"
                                type="button"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => confirmDeletePorto(item.id)}
                                className="btn btn-danger p-3"
                                type="button"
                              >
                                X
                              </button>
                            </div>
                            <div>
                              <div className="row d-flex align-items-start">
                                <div className="col-3 d-flex justify-content-center ">
                                  <img
                                    src={item.photo}
                                    className=""
                                    style={{ maxWidth: "150px" }}
                                  />
                                </div>
                                <div className="col-8 border-bottom border-3">
                                  <h4>{item.nama_perusahaan}</h4>
                                  <Link to={item.link_repo}>{item.link_repo}</Link>
                                  <h6>{item.tipe}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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
                          {add_portofolio.isLoading && toastLoading()}
                          {add_portofolio.errorMessage}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <Modal show={showEditPorto} onHide={() => handleCloseEditPorto()}>
              {update_PortofolioWorkers.isLoading ? (
                toastLoading()
              ) : (
                <>
                  <form onSubmit={UpdatePortofolioWorkers}>
                    <Modal.Header closeButton className="bg-white">
                      <Modal.Title>Update Pengalaman Kerja</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="mt-3 mb-3">
                        <label className="form-label ms-2">Nama aplikasi</label>
                        <input
                          type="text"
                          name="nama_perusahaan"
                          required
                          onChange={(e) => setNamaPerusahaan(e.target.value)}
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
                          name="link_repo"
                          required
                          onChange={(e) => setLinkRepo(e.target.value)}
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
                              onChange={(e) => setTipePorto(e.target.value)}
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
                              onChange={(e) => setTipePorto(e.target.value)}
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
                        <label className="form-label ms-2">Upload gambar</label>
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
                    </Modal.Body>
                    <Modal.Footer className="bg-white">
                      <Button
                        variant="secondary"
                        onClick={() => handleCloseEditPorto()}
                      >
                        Close
                      </Button>
                      <Button
                        type="submit"
                        variant="success"
                        onClick={() => UpdatePortofolioWorkers(selected)}
                      >
                        Update
                      </Button>
                    </Modal.Footer>
                  </form>
                </>
              )}
            </Modal>
            <Modal
              show={showDeletPorto}
              onHide={() => handleCloseDeletePorto()}
            >
              {delete_PortofolioceWorkers.isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <Modal.Header closeButton className="bg-white">
                    <Modal.Title>Kamu yakin hapus portofolio ini?</Modal.Title>
                  </Modal.Header>
                  <Modal.Footer className="bg-white">
                    <Button
                      variant="secondary"
                      onClick={() => handleCloseDeletePorto()}
                    >
                      Close
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteDataPortofolio(selected)}
                    >
                      Delete data
                    </Button>
                  </Modal.Footer>
                </>
              )}
            </Modal>
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