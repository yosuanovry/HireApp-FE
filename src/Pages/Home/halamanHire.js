import React from 'react'
import NavbarCorporate from "../../Component/Navbar/navbarCorporate";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import iconloc from "../../Assets/Profile/mappin.png";

export default function HalamanHire() {
  return (
    <>
    <div style={{ background: "#f5f4f4" }}>
      <NavbarCorporate />
      <div>
        <div className="container z-index-2 position-absolute top-50 start-50 translate-middle" style={{ height: "70vh", marginTop: "5vh" }}>
          <div className="container" style={{ position: "relative", height: "" }}>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="border-0 rounded-4 " style={{ backgroundColor: "white" }}>
                    <div className="d-flex align-items-center justify-content-center p-5">
                      <div className="row">
                        <div className="text-center">
                          <img src={IconProfile} className="rounded-circle" alt={IconProfile} style={{ width: "280px" }} />
                        </div>
                        <div className=" mx-auto text-center"></div>
                        <div className="mt-4">
                          <h4 className="mt-3" style={{ fontWeight: "700", fontSize: "30px" }}>
                            Louis Tomlinson
                          </h4>
                          <h5 className="mt-3" style={{ fontWeight: "600" }}>
                            Web Developer
                          </h5>
                          <div className="d-flex">
                            <img className="mt-2" src={iconloc} alt="" style={{ height: "30px" }} />
                            <h6 className="mt-3 ms-2" style={{ color: "#9EA0A5" }}>
                              Purwokerto, Jawa Tengah
                            </h6>
                          </div>
                          <h5 className="mt-4" style={{ color: "#9EA0A5", fontWeight: "400" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                          </h5>
                          <h4 style={{ fontWeight: "700", fontSize: "28px", marginTop: "120px" }}>Skill</h4>
                          <div className="mt-4">
                            <button className="btn btn-warning text-white" style={{ backgroundColor: "#FBB017" }}>
                              Phyton
                            </button>
                            <button className="btn btn-warning text-white ms-3" style={{ backgroundColor: "#FBB017" }}>
                              Laravel
                            </button>
                            <button className="btn btn-warning text-white ms-3" style={{ backgroundColor: "#FBB017" }}>
                              Golang
                            </button>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-warning text-white" style={{ backgroundColor: "#FBB017" }}>
                              Javascript
                            </button>
                            <button className="btn btn-warning text-white ms-3" style={{ backgroundColor: "#FBB017" }}>
                              PHP
                            </button>
                            <button className="btn btn-warning text-white ms-3" style={{ backgroundColor: "#FBB017" }}>
                              HTML
                            </button>
                          </div>
                          <div className="mt-4">
                            <button className="btn btn-warning text-white" style={{ backgroundColor: "#FBB017" }}>
                              C++
                            </button>
                            <button className="btn btn-warning text-white ms-3" style={{ backgroundColor: "#FBB017" }}>
                              Kotlin
                            </button>
                            <button className="btn btn-warning text-white ms-3" style={{ backgroundColor: "#FBB017" }}>
                              Swift
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ms-5 ps-5">
                    <div className='d-flex flex-column'>
                    <h1 className="pb-2" style={{fontWeight:'600', fontSize:'48px'}}>Hubungi Louis Tomlinson</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h3>
                    <form>
                    <div className="mt-5 pt-4">
                          <label className="form-label" style={{color:'#9EA0A5', fontWeight:'500'}}>
                            Untuk Posisi
                          </label>
                          <input style= {{
                            fontSize:'22px'
                          }}
                            type="text"
                            className="form-control p-4"
                            placeholder="Fulltime Frontend Developer"
                          />
                        </div>
                        <div className="mt-5">
                          <label className="form-label" style={{color:'#9EA0A5', fontWeight:'500'}}>
                            Deskripsi
                          </label>
                          <textarea 
                            type="text"
                            className="form-control p-3 mt-0"
                            placeholder="Membuat fitur dan maintenance untuk dashrboard admin dan posisi remote"
                            style={{ minHeight: "400px", fontSize:'20px', resize:'none' }}
                          />
                        </div>
                    </form>
                    </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "2000px" }}>
        <Footer />
      </div>
    </div>
    
    </>
  )
}
