import React, {useState, useEffect} from 'react';
import axios from "axios";
import NavbarUser from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footerCorporate";
import IconProfile from "../../Assets/NavCorporate/louisth.png";
import iconloc from "../../Assets/Profile/mappin.png";
import { useParams, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { chatPekerja } from '../../Storages/Actions/chatPekerja';

export default function HalamanHire() {
  const [user,setUser] = useState()

  const {id} = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [position, setPosition] = useState()
  const [description, setDescription] = useState()
  const [chat, setChat] = useState()

  const postChatPekerja = (e) => {
    e.preventDefault();
    const data = {
      position,
      description,
      chat
    };
    dispatch(chatPekerja(id, data, navigate));
  };

  useEffect(() => {
    getUserById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

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

  return (
    <>
    <div className="boxsh" style={{ background: "#f5f4f4" }}>
      <NavbarUser />
      <div>
        <div className="container z-index-2 position-absolute top-50 start-50 translate-middle" style={{ height: "70vh", marginTop: "5vh" }}>
          <div className="container" style={{ position: "relative", height: "" }}>
            <div className="row">
              <div className="col-4">
                {user?.map((item,index) => (
                  <div key={index} className="row">
                  <div className="border-0 rounded-4 " style={{ backgroundColor: "white" }}>
                    <div className="d-flex align-items-center justify-content-center p-5">
                      <div className="row">
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
                          <h5 className="mt-4" style={{ color: "#9EA0A5", fontWeight: "400" }}>
                          {item.deskripsi}
                          </h5>
                          <h4 style={{ fontWeight: "700", fontSize: "28px", marginTop: "120px" }}>Skill</h4>
                          <div className='row'>
                          {item.nama_skill.split(",").map((item,index) => (
                            <div key={index} className="col mt-4">
                            <button className="btn btn-warning text-white" style={{ backgroundColor: "#FBB017" }}>
                              {item}
                            </button>
                          </div>
                          ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>

              
              <div className="col ms-5 ps-5">
                
                  <div className='d-flex flex-column'>
                  {user?.map((item,index) => (
                    <h1 key={index} className="pb-2" style={{fontWeight:'600', fontSize:'48px'}}>Hubungi {item.nama}</h1>
                    ))}
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h3>
                    <form onSubmit={postChatPekerja}>
                    <div className="mt-5 pt-4">
                          <label className="form-label" style={{color:'#9EA0A5', fontWeight:'500'}}>
                            Untuk Posisi
                          </label>
                          <input style= {{
                            fontSize:'22px'
                          }}
                            required
                            onChange={(e) => setPosition(e.target.value)}
                            value={position}
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
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            value={description} 
                            type="text"
                            className="form-control p-3 mt-0"
                            placeholder="Membuat fitur dan maintenance untuk dashrboard admin dan posisi remote"
                            style={{ minHeight: "200px", fontSize:'20px', resize:'none' }}
                          />
                        </div>

                        <div className="mt-5 pt-4">
                          <label className="form-label" style={{color:'#9EA0A5', fontWeight:'500'}}>
                            First Message
                          </label>
                          <input style= {{
                            fontSize:'22px'
                          }}
                            required
                            onChange={(e) => setChat(e.target.value)}
                            value={chat}
                            type="text"
                            className="form-control p-4"
                            placeholder="Fulltime Frontend Developer"
                          />
                        </div>
                        <div className='mt-5 text-center'>
                      <button type="submit" className='btn btn-warning text-white p-3' style={{
                        width:'750px',
                        fontWeight:'700',
                        fontSize:'24px'
                      }}>
                          Hire
                      </button>
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
