import React from 'react'
import peworld2 from "../../Assets/LandingPage/peworld2.png"

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid footer.fixed-bottom p-5"
        style={{
          minHeight: "500px",
          backgroundColor: "#5E50A1",
          marginTop: "60px",
          position: "relative",
        }}
      >
        <div className="container" style={{ color: "white" }}>
          <div className="col mt-5">
            <img src={peworld2} alt="" style={{ minWidth: "250px" }} />
          </div>
          <div className="col mt-5">
            <h4 style={{ width: "550px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </h4>
          </div>
        </div>
        <div
          className="container pt-5 border-top"
          style={{ marginTop: "80px", color: "white" }}
        >
          <div className="row">
            <div
              className="col"
              style={{ fontWeight: "300", fontSize: "22px" }}
            >
              2020 Peworld. All right reserved
            </div>
            <div
              className="col d-flex justify-content-end"
              style={{ fontWeight: "300", fontSize: "22px" }}
            >
              <p style={{ marginRight: "100px" }}>Telepon</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
