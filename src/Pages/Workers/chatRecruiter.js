/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarUser from "../../Component/Navbar/navbar";
import Footer from "../../Component/Footer/footerCorporate";
import IconChat from "../../Assets/Profile/iconchat.png";
import IconSend from "../../Assets/Profile/send.png";

export default function ChatWorkers() {
  let token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;

  const [workers, setWorkers] = useState();
  const [room_profile, setRoom_Profile] = useState({
    photo: IconChat, nama:"", position:""
  })
  const [chat_id, setChat_Id] = useState();
  const [message, setMessage] = useState();
  const [receiver_id, setReceiver_Id] = useState();
  const [chat, setChat] = useState();

  
  // get pekerja
  useEffect(() => {
    const fetchPekerja = async () => {
      try {
        const res = await axios.get(`${url}/chat/myChat`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.setItem("id", res.data.data[0].id_pekerja)
        res.data.data && setWorkers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPekerja();
  }, [token, url]);

  // get chat message
  const fetchChat = async () => {
    try {
      const res = await axios.get(`${url}/chat/detail/${chat_id}`);
      let result = res.data.data;
      result && setMessage(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChat();
  }, [chat_id]);

// send message
const sendMessage = async (e) => {
  e.preventDefault()
  try {
    const data = {
      receiver_id,
      chat
    }
     await axios.post(`${url}/chat/messages/${chat_id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    window.location.reload(false)
  } catch (err) {
    console.log(err)
  }
}

const inputForm = () => {
    if (chat_id) {
      return (
        <div className="row" style={{ marginTop: "400px" }}>
          <form onSubmit={sendMessage} className="row">
            <div className="col-10">
              <div className="mt-3 mb-3">
                <input onChange={(e) => setChat(e.target.value)} value={chat} type="text" className="form-control p-3 rounded-pill" placeholder="type message..." />
              </div>
            </div>
            <div className="col-2">
              <div className="mt-3 text-center">
                <button type="submit" className="btn text-white p-3 rounded-circle" style={{ backgroundColor: "#5E50A1" }}>
                  <img className="" src={IconSend} style={{ width: "20px" }} />
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return <div className="row" style={{ marginTop: "400px" }}></div>;
    }
  };

  return (
    <div style={{ background: "#E5E5E5" }}>
      <NavbarUser />

      <div className="container mb-5">
        <div class="row mt-5 mb-5">
          <div class="col-4 ">
            {workers?.map((item, index) => (
              <div key={index} onClick={(e) => {
                setChat_Id(item.id);
                setReceiver_Id(item.id_pekerja)
                setRoom_Profile({
                  photo: item.photo,
                  nama: item.nama_perusahaan,
                  position: item.position
                });
              }} className="p-4 w-100 bg-white border-0 border-light-subtle rounded-3" style={{ minHeight: "800px" }}>
                <div className="border-bottom border-2">
                  <h5 className="fw-bold p-2">Messages</h5>
                </div>
                <div className="p-2 mt-5 bg-warning">
                  <div className="row d-flex align-items-center" style={{cursor:'pointer'}}>
                    <div className="col-2 align-self-center">
                      <img className="img me-3" src={item.photo} style={{width:'40px'}} />
                    </div>
                    <div className="col-10 align-self-center">
                      <h6 className="fw-bold">{item.nama_perusahaan}</h6>
                      <p className="fs-6">{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="col-8">
            <div className="p-4 w-100 bg-white border-0 border-light-subtle rounded-3" style={{ minHeight: "800px" }}>
              <div className="row border-bottom border-2">
                <h5 className="col-5 fw-bold align-self-center">
                  <img className="img me-3" src={IconChat} style={{width:'40px'}}/>
                  {room_profile.nama}
                </h5>
                <h5 className="col-3 fs-6 align-self-center">{room_profile.position}</h5>
                <h5 className="col-4 align-self-center text-end">Detail Profile</h5>
              </div>
              {message?.map((item, index) => {
                if (item.sender === localStorage.getItem("id")) {
                  return (
                    <div key={index} className="p-2 mt-5 align-self-center">
                      <div className="text-end">
                        <p className="fs-6">{item.chat}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="p-2 mt-5 align-self-center">
                      <div className="text-start">
                        <p className="fs-6">{item.chat}</p>
                      </div>
                    </div>
                  );
                }
              })}

              {/* send chat */}
              <div>{inputForm()}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
