/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarCorporate from "../../Component/Navbar/navbarCorporate";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import IconEdit from "../../Assets/Profile/edit.png";
import IconMap from "../../Assets/Profile/mappin.png";
import { useNavigate } from "react-router-dom";
import {
  getProfileCorporate,
  putProfileCorporate,
} from "../../Storages/Actions/ProfileCorporate";

export default function EditProfileCorporate() {
  const corporate = useSelector((state) => state.get_profileCorp);
  const updateProfile = useSelector((state) => state.update_profileCorp);

  const [nama_perusahaan, setNamaPerusahaan] = useState("");
  const [bidang_perusahaan, setBidangPerusahaan] = useState("");
  const [kota, setKota] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [email, setEmail] = useState("");
  const [email_perusahaan, setEmailPerusahaan] = useState("");
  const [phone, setPhone] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coursesPage = () => {
    navigate("/home-perekrut");
  };
  useEffect(() => {
    dispatch(getProfileCorporate(navigate));
  }, [dispatch, navigate]);

  const UpdateProfileCorporate = (e) => {
    e.preventDefault();
    const data = {
      nama_perusahaan,
      bidang_perusahaan,
      kota,
      deskripsi,
      email,
      email_perusahaan,
      phone,
      provinsi,
    };
    console.log(data);
    dispatch(putProfileCorporate(data,navigate));
  };

  return (
    <div style={{ background: "#E5E5E5" }}>
      {/* navbar component */}
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
            className="container"
            style={{ position: "relative", height: "" }}
          >
            {(corporate || updateProfile).data?.map((item, index) => (
              <form key={index} onSubmit={UpdateProfileCorporate}>
                <div className="row">
                  <div className="col-4">
                    <div className="row border border-light-subtle rounded-4">
                      <div
                        className="border-0 rounded-4 "
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="d-flex align-items-center justify-content-center p-5">
                          <div className="row">
                            <div className="mb-0 text-center">
                              <h6>
                                <img className="img me-1" src={IconEdit}></img>
                                Edit
                              </h6>
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
                              <h4 className="mt-1">{item.nama_perusahaan}</h4>
                              <h6 className="mt-2">{item.bidang_perusahaan}</h6>
                              <h6 className="mt-2 mb-3">
                                <img className="img me-1" src={IconMap} />
                                {item.kota}, {item.provinsi}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn text-white mt-3 p-3"
                        style={{ background: "#5E50A1" }}
                      >
                        Simpan
                      </button>
                      <button
                        type="button"
                        onClick={coursesPage}
                        className="btn btn-outline-info mt-4 p-3"
                        style={{ borderColor: "#5E50A1", color: "#5E50A1" }}
                      >
                        Home Perekrut
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger mt-4 p-3"
                        style={{ borderColor: "#5E50A1", color: "#5E50A1" }}
                      >
                        Batal
                      </button>
                      {updateProfile.isLoading && <p>Loading......</p>}
                      {updateProfile.errorMessage}
                    </div>
                  </div>
                  {/* Form Input data */}
                  <div className="col-8">
                    <div
                      className="border border-light-subtle rounded-4"
                      style={{
                        backgroundColor: "white",
                        minHeight: "1000px",
                        maxHeight: "135vh",
                      }}
                    >
                      <div className="row">
                        <div className="p-5">
                          <div className="border-bottom border-2 ">
                            <h4 className="">Data diri</h4>
                          </div>

                          <div className="mt-3 mb-3">
                            <label className="form-label ms-2">
                              Nama Perusahaan
                            </label>
                            <input
                              type="text"
                              name="nama_perusahaan"
                              required
                              onChange={(e) =>
                                setNamaPerusahaan(e.target.value)
                              }
                              className="form-control p-3"
                              placeholder={item.nama_perusahaan}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label ms-2">Bidang</label>
                            <input
                              type="text"
                              name="bidang_perusahaan"
                              required
                              onChange={(e) =>
                                setBidangPerusahaan(e.target.value)
                              }
                              className="form-control p-3"
                              placeholder={item.bidang_perusahaan}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label ms-2">Kota</label>
                            <input
                              name="kota"
                              required
                              onChange={(e) => setKota(e.target.value)}
                              type="text"
                              className="form-control p-3"
                              placeholder={item.kota || "Masukan kota"}
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
                              style={{ minHeight: "15vh" }}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label ms-2">Email</label>
                            <input
                              type="email"
                              name="email"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control p-3"
                              placeholder={item.email || "Masukkan Email "}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label ms-2">
                              Email Perusahaan
                            </label>
                            <input
                              type="email"
                              name="email_perusahaan"
                              required
                              onChange={(e) =>
                                setEmailPerusahaan(e.target.value)
                              }
                              className="form-control p-3"
                              placeholder={
                                item.email_perusahaan ||
                                "Masukan email Perusahaan "
                              }
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label ms-2">
                              Nomor Telepon
                            </label>
                            <input
                              type="text"
                              name="phone"
                              required
                              onChange={(e) => setPhone(e.target.value)}
                              className="form-control p-3"
                              placeholder={
                                item.phone_perusahaan ||
                                "Masukan nomor telepon "
                              }
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
                              placeholder={
                                item.provinsi || "Masukan nama Provinsi "
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <div
        className="container-fluid z-index-2 position-absolute top-50 start-50 translate-middle"
        style={{
          marginTop: "1700px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
