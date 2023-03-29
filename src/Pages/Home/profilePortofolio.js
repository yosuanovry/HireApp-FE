import React, {useState, useEffect} from "react";
import NavbarUser from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import iconloc from "../../Assets/Profile/mappin.png";
import mail from "../../Assets/Profile/mail.PNG";
import ig from "../../Assets/Profile/ig.PNG";
import github from "../../Assets/Profile/github.png";
import fox from "../../Assets/Profile/fox.png";
import tokopedia from "../../Assets/Profile/tokopedia.png"
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

export default function EditProfileCorporate() {
  const [user,setUser] = useState()
  const [portofolio, setPortofolio] = useState()
  const [experience, setExperience] = useState()


  const {id} = useParams()
  

  useEffect(() => {
    getUserById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    getPortofolioById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    getExperienceById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const getUserById = () => {
    var url = `${process.env.REACT_APP_BASE_URL}/pekerja/detail/${id}`
    axios
      .get(url)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  const getPortofolioById = () => {
    var url = `${process.env.REACT_APP_BASE_URL}/portofolio/show/${id}`
    axios
      .get(url)
      .then((res) => {
        setPortofolio(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getExperienceById = () => {
    var url = `${process.env.REACT_APP_BASE_URL}/experience/show/${id}`
    axios
      .get(url)
      .then((res) => {
        setExperience(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ background: "#f5f4f4" }}>
      <NavbarUser />
      <div>
        <div
          className="container-fluid border-0 z-index-1 position-absolute"
          style={{
            height: "35vh",
            backgroundColor: "#5E50A1",
          }}
        ></div>
        <div className="container z-index-2 position-absolute top-50 start-50 translate-middle" style={{ height: "70vh", marginTop: "7vh" }}>
          <div className="container" style={{ position: "relative", height: "" }}>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="border-0 rounded-4 " style={{ backgroundColor: "white" }}>
                    <div className="d-flex align-items-center justify-content-center p-5">
                      {user?.map((item,index) => (
                        <div key={index} className="row">
                        <div className="text-center">
                          <img src={item.photo} className="rounded-circle" alt={IconProfile} style={{ width: "280px" }} />
                        </div>
                        <div className=" mx-auto text-center"></div>
                        <div className="mt-4">
                          <h4 className="mt-3" style={{ fontWeight: "700", fontSize: "30px" }}>
                            {item.nama}
                          </h4>
                          <h5 className="mt-3" style={{ fontWeight: "600" }}>
                            {item.job}
                          </h5>
                          <div className="d-flex">
                            <img className="mt-2" src={iconloc} alt="" style={{ height: "30px" }} />
                            <h6 className="mt-3 ms-2" style={{ color: "#9EA0A5" }}>
                              {item.kota}, {item.provinsi}
                            </h6>
                          </div>
                          <h5 className="mt-3" style={{ color: "#9EA0A5" }}>
                          </h5>
                          <h5 className="mt-4" style={{ color: "#9EA0A5", fontWeight: "400" }}>
                            {item.deskripsi}
                          </h5>
                          <h4 style={{ fontWeight: "700", fontSize: "28px", marginTop: "120px" }}>Skill</h4>

                         <div className="row">
                          {item.nama_skill.split(",").map((item,index) => (
                            <div key={index} className="col mt-4 d-flex align-items-start">
                            <button className="btn btn-warning text-white" style={{ backgroundColor: "#FBB017" }}>
                              {item}
                            </button> 
                          </div>
                          ))}
                          </div>
                          
                            <div>
                              <div className="d-flex align-items-center mt-5 pt-5">
                                <img src={mail} alt="" style={{ height: "25px" }} />
                                <h5 className="mt-1 ms-4" style={{ color: "#9EA0A5" }}>
                                  {item.email}
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <img src={ig} alt="" style={{ height: "30px" }} />
                                <h5 className="mt-1 ms-4" style={{ color: "#9EA0A5" }}>
                                  @Louist91
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <img src={github} alt="" style={{ height: "30px" }} />
                                <h5 className="mt-1 ms-4" style={{ color: "#9EA0A5" }}>
                                  @Louistommo
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <img src={fox} alt="" style={{ height: "30px" }} />
                                <h5 className="mt-1 ms-4" style={{ color: "#9EA0A5" }}>
                                  @Louistommo91
                                </h5>
                              </div>
                              <div className="d-flex justify-content-center mt-5 pt-4">
                                <Link to={`/profile-hire/${item.id_user}`}>
                              <button type="button" className="btn text-white p-3" style={{ background: "#5E50A1",
                            width:'300px',
                            fontWeight:'700',
                            fontSize:'20px' }}>
                                Hire
                              </button>
                              </Link>
                              </div>
                            </div>
                        </div>
                      </div>
                      ))} 
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-8">
                <div
                  className="border-0 rounded-4"
                  style={{
                    backgroundColor: "white",
                    minWidth: "20vw",
                    minHeight: "1500px",
                  }}
                >
                  
                    <div className="row">
                    <div className="p-5">
                    <h3 className="pb-2" style={{fontWeight:'700', borderBottom:'5px solid #5E50A1',
                        borderColor:'#5E50A1'}}>Portofolio</h3>
                    <div className="row">
                      {portofolio?.map((item,index) => (
                        <div key={index} className="col mt-5 d-flex justify-content-between">
                        <div>
                        <img src={item.photo} alt="" style={{width:'180px'}}/>
                        <h5 className="d-flex justify-content-center mt-2">{item.nama_perusahaan}</h5>
                        </div>
                     </div>
                      ))}
                      </div>
                    </div>
                  </div>

                  

                  <div className="row">
                    <div className="p-5">
                    <h3 className="pb-2"style={{fontWeight:'700', borderBottom:'5px solid #5E50A1',
                        borderColor:'#5E50A1'}}>Pengalaman Kerja</h3>
                     {experience?.map((item,index) => (
                      <div key={index} className="row mt-4">
                        <div className="col-2 d-flex justify-content-center">
                            <img  src={tokopedia} alt="" style={{height:'100px'}}/>
                        </div>
                        <div className="col-9 border-bottom border-4 d-flex flex-column pb-4">
                            <h3 style={{fontWeight:'700'}}>{item.posisi}</h3>
                            <h3>{item.nama_perusahaan}</h3>
                            <div className="d-flex">
                            <h4 style={{color:'#9EA0A5'}}>{item.start_at} - {item.end_at}</h4>
                            <h4 style={{color:'#9EA0A5', marginLeft:'30px', fontWeight:'400'}}>6 months</h4>
                            </div>
                            <h5 style={{marginTop:'20px'}}>{item.deskripsi}</h5>
                        </div>
                     </div>
                     ))}
                    </div>
                  </div>
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
  );
}
