/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavbarUser from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footerCorporate";
import IconChat from "../../Assets/Profile/iconchat.png";
import IconSend from "../../Assets/Profile/send.png"

export default function ChatWorkers() {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <NavbarUser />
      <div className="container mb-5">
        <div class="row mt-5 mb-5">
          <div class="col-4 ">
            <div
              className="p-4 w-100 bg-white border-0 border-light-subtle rounded-3"
              style={{ minHeight: "800px" }}
            >
              <div className="border-bottom border-2">
                <h5 className="fw-bold p-2">Messages</h5>
              </div>
              <div className="p-2 mt-5 bg-warning">
                <div className="row">
                  <div className="col-2 align-self-center">
                    <img className="img me-3" src={IconChat} />
                  </div>
                  <div className="col-10 align-self-center">
                    <h6 className="fw-bold">PT Softhouse</h6>
                    <p className="fs-6">Fulltime Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="row">
                  <div className="col-2 align-self-center">
                    <img className="img me-3" src={IconChat} />
                  </div>
                  <div className="col-10 align-self-center">
                    <h6 className="fw-bold">PT Softhouse</h6>
                    <p className="fs-6">Fulltime Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-8">
            <div
              className="p-4 w-100 bg-white border-0 border-light-subtle rounded-3"
              style={{ minHeight: "800px" }}
            >
              <div className="row border-bottom border-2">
                <h5 className="col-4 fw-bold align-self-center">
                  <img className="img me-3" src={IconChat} />
                  PT Softhouse
                </h5>
                <h5 className="col-5 fs-6 align-self-center">
                  Fulltime Frontend Developer
                </h5>
                <h5 className="col-3 align-self-center text-end">
                  Detail Profile
                </h5>
              </div>
              <div className="p-2 mt-5 align-self-center">
                <div className="text-start">
                  <p className="fs-6">
                    Membuat fitur dan maintenance untuk dashrboard admin dan
                    posisi remote
                  </p>
                </div>
                <div className="text-end">
                  <p className="fs-6">
                    Membuat fitur dan maintenance untuk dashrboard admin dan
                    siang, saya tertarik
                  </p>
                </div>
                <div className="text-start">
                  <p className="fs-6">
                    Akan saya hubungi besok untuk interview
                  </p>
                </div>
              </div>

              {/* send chat */}
              <div className="row" style={{ marginTop: "400px" }}>
                <div className="col-10">
                  <div className="mt-3 mb-3">
                    <input
                      type="text"
                      className="form-control p-3 rounded-pill"
                      placeholder="type message..."
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="mt-3 text-center">
                    <button
                      type="button"
                      className="btn text-white p-3 rounded-circle"
                      style={{ backgroundColor: "#5E50A1" }}
                    >
                      <img className="" src={IconSend} />
                    </button>
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
