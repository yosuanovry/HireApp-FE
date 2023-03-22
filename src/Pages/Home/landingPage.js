import React from "react";
import Navbar from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footer";
import CardSwiper from "../../Component/CardSwiper/cardswiper"
import lp1 from "../../Assets/lp1.PNG";
import lp2 from "../../Assets/lp2.PNG";
import lp3 from "../../Assets/lp3.PNG"
import iconch from "../../Assets/iconch.PNG"
import iconch2 from "../../Assets/iconch2.PNG"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-start">
            <h1 className="p-2" style={{ width: "500px" }}>
              Talenta terbaik negeri untuk perubahan revolusi 4.0
            </h1>
            <p className="p-2" style={{ width: "510px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
            <Link type="button" className="btn-2 btn p-3 mt-5 ms-2" style={{ fontSize: "15px" }}>
              Mulai Dari Sekarang
            </Link>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={lp1} alt="" style={{ maxWidth: "650px" }} />
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-start">
            <img src={lp2} alt="" style={{ maxWidth: "650px" }} />
          </div>
          <div className="col d-flex flex-column">
            <h1 className="p-2 mt-5" style={{ width: "600px" }}>
              Kenapa harus mencari talent di Peworld?
            </h1>
            <div class="p-2">
              <img src={iconch} alt="" style={{width:'30px'}} className="me-3"/>
              Lorem ipsum dolor sit amet.</div>
            <div class="p-2">
            <img src={iconch} alt="" style={{width:'30px'}} className="me-3"/>
            Lorem ipsum dolor sit amet.</div>
            <div class="p-2">
            <img src={iconch} alt="" style={{width:'30px'}} className="me-3"/>
            Lorem ipsum dolor sit amet.</div>
            <div class="p-2">
            <img src={iconch} alt="" style={{width:'30px'}} className="me-3"/>
            Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col d-flex flex-column align-items-start">
          <h1 className="p-2 mt-5" style={{ width: "500px" }}>
              Skill Talent
            </h1>
            <p className="p-2" style={{ width: "560px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="row d-flex">
              <div className="col d-flex">
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              Java
              </div>
              <div className="col d-flex" style={{marginLeft:'150px'}}>
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              Golang
              </div>
            </div>
            <div className="row d-flex mt-4">
              <div className="col d-flex">
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              Kotlin
              </div>
              <div className="col d-flex" style={{marginLeft:'137px'}}>
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              C++
              </div>
            </div>
            <div className="row d-flex mt-4">
              <div className="col d-flex">
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              PHP
              </div>
              <div className="col d-flex" style={{marginLeft:'150px'}}>
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              Ruby
              </div>
            </div>
            <div className="row d-flex mt-4">
              <div className="col d-flex">
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              Javascript
              </div>
              <div className="col d-flex" style={{marginLeft:'31px', width:'300px'}}>
              <img src={iconch2} alt="" style={{width:'30px'}} className="me-3"/>
              10+ Bahasa lainnya
              </div>
            </div>
          </div>
          <div className="col d-flex flex-column">
          <img src={lp3} alt="" style={{ maxWidth: "650px" }} />
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="col d-flex justify-content-center">
          <h1>Their opinion about peworld</h1>
        </div>
        <div className="col">
            <CardSwiper />
        </div>
      </div>

      <div className="container-fluid mt-5 pt-5">
        <div className="cont-1 container d-flex align-items-center" style={{height:'250px',backgroundColor:'#5E50A1', color:'white', borderTopRightRadius:'10px',borderTopLeftRadius:'60px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'60px'}}>
            <div className="col d-flex align-items-center justify-content-start ms-5">
            <h1 style={{width:'350px'}}>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="col d-flex align-items-center justify-content-end me-5">
            <Link type="button" className="btn-3 btn p-4" style={{ fontSize: "20px" }}>
              Mulai Dari Sekarang
            </Link>
            </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
