import React, {useEffect, useState} from "react";
import axios from "axios";
import NavbarCorporate from "../../Component/Navbar/navbarCorporate";
import "./home.css";
import louisth from "../../Assets/LandingPage/louisth.png";
import iconloc from "../../Assets/Profile/mappin.png";
import Footer from "../../Component/Footer/footerCorporate";
import { Link } from "react-router-dom";
// import { getUserPerekrut } from "../../Storages/Actions/userPerekrut";
// import { useDispatch, useSelector } from 'react-redux';
// import IconProfile from "../../Assets/NavCorporate/louisth.png";

export default function HomePerekrut() {
  const [datas, setDatas] = useState();
  const [searchText, setSearchText] = useState();
  
  // const dispatch = useDispatch()

  useEffect(() => {
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserData = async () => {
    var url = `${process.env.REACT_APP_BASE_URL}/pekerja`;
    return await axios
      .get(url, { mode: 'no-cors' })
      .then((res) => {
        console.log(res);
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function searchUser() {
    var url = `${process.env.REACT_APP_BASE_URL}/pekerja/search`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        if (!searchText) {
          window.location.reload(false);
        }
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  // const get_user = useSelector((state)=>state.get_UserPerekrut)

  // useEffect(() => {
  //   dispatch(getUserPerekrut());
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  console.log(datas);

  return (
    <>
      <NavbarCorporate />
      <div style={{backgroundColor:'#f7f7f7'}}>
      <div className="container-fluid d-flex align-items-center" style={{ height: "90px", backgroundColor: "#5E50A1" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 style={{ color: "white", fontWeight: "700" }}>Top Jobs</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5" >
        <div className="row">
          <div className="col-8">
            <input onChange={(e) => setSearchText(e.target.value)} className="inp-1 p-4" type="text" placeholder="Search for any skill" style={{ border: "none" }} />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <button onClick={searchUser}
              className="search-button btn btn-warning text-white p-4"
              style={{
                backgroundColor: "#5E50A1",
                border: "none",
                width: "120px",
              }}
            >
              Search
            </button>
            <select
              className="btn btn-warning p-3 dropdown-toggle text-white shadow-none ms-4"
              style={{
                backgroundColor: "#5E50A1",
                border: "none",
              }}
            >
              <option>Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-5">
      </div>

{datas?.map((item, index) => (
  <div key={index} className="container">
        <div className="row d-flex align-items-center border-bottom" style={{ backgroundColor: "white", height: "300px" }}>
          <div className="col-2 d-flex justify-content-center">
            <img style={{ width: "150px" }} src={louisth} alt="" />
          </div>
          <div className="col-4">
            <h3 style={{ fontWeight: "700" }}>{item.nama}</h3>
            <h5 style={{ marginTop: "15px", color: "#9EA0A5", fontWeight: "400" }}>{item.job}</h5>
            <div style={{ marginTop: "15px" }} className="d-flex align-items-center flex-rows">
              <img src={iconloc} alt="" style={{ height: "30px" }} />
              <h5 className="ms-3 mt-1" style={{ color: "#9EA0A5", fontWeight: "400" }}>
                {item.email}
              </h5>
            </div>
            <div className="d-flex">
            {item.nama_skill.split(",").map((item,index) => (
              <div key={index} style={{ marginTop: "15px" }} className="d-flex align-items-center flex-rows">
              <button className="btn btn-warning text-white ms-2" style={{ backgroundColor: "#ffd547" }}>
                {item}
              </button>
            </div>
            ))}
          </div>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <Link to={`/profile-portofolio/${item.id_user}`}>
            <button
              className="search-button btn btn-warning text-white p-4"
              style={{
                backgroundColor: "#5E50A1",
                border: "none",
                width: "180px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Lihat Profile
            </button>
            </Link>
          </div>
        </div>
      </div>
))}
      

      <div className="container d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="home-perekrut" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="home-perekrut">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="home-perekrut">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="home-perekrut">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="home-perekrut" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      <Footer/>
      </div>
    </>
  );
};
