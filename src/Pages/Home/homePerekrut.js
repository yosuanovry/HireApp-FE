import React, {useEffect, useState} from "react";
import axios from "axios";
import NavbarUser from "../../Component/Navbar/navbar";
// import Page from "../../Component/Pagination/pagination"
import "./home.css";
import iconloc from "../../Assets/Profile/mappin.png";
import Footer from "../../Component/Footer/footerCorporate";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// import { getUserPerekrut } from "../../Storages/Actions/userPerekrut";
// import { useDispatch, useSelector } from 'react-redux';
// import IconProfile from "../../Assets/NavCorporate/louisth.png";

export default function HomePerekrut() {
  const [datas, setDatas] = useState();
  const [searchText, setSearchText] = useState();
  const [currentPage, setCurrentPage] = useState(1)

  // const dispatch = useDispatch()

  useEffect(() => {
    getUserData(1,4);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUserData(currentPage,4);
  }, [currentPage]);

  const prevPage = () => {
    const pg = currentPage - 1
    setCurrentPage(pg)
  }

  const nextPage = () => {
    const pg = currentPage + 1
    setCurrentPage(pg)
  }

  const getUserData = async (page, limit) => {
    var url = `${process.env.REACT_APP_BASE_URL}/pekerja?page=${page}&limit=${limit}`;
    return await axios
      .get(url, { mode: 'no-cors' })
      .then((res) => {
        console.log(res);
        setDatas(res.data.data);
        setCurrentPage(page)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function searchUser() {
    var url = `${process.env.REACT_APP_BASE_URL}/pekerja/search?nama=` + searchText;
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


  console.log(datas);

  return (
    <>
      <NavbarUser />
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
            <img style={{ width: "150px" }} src={item.photo} alt="" />
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
        <div className="row d-flex align-items-center">
          <div className="col p-3">
            <Button className="butt-2" onClick={prevPage} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}><pre style={{fontSize: '1.2em'}}>&lt;</pre></Button>
          </div>
          <div className="col p-3">
            <Button  className="butt-2" onClick={(e) => setCurrentPage(1)} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}>1</Button>
          </div>
          <div className="col p-3">
            <Button  className="butt-2" onClick={(e) => setCurrentPage(2)} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}>2</Button>
          </div>
          <div className="col p-3">
            <Button  className="butt-2" onClick={(e) => setCurrentPage(3)} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}>3</Button>
          </div>
          <div className="col p-3">
            <Button className="butt-2" onClick={(e) => setCurrentPage(4)} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}>4</Button>
          </div>
          <div className="col p-3">
            <Button className="butt-2" onClick={(e) => setCurrentPage(5)} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}>5</Button>
          </div>
          <div className="col p-3">
            <Button className="butt-2" onClick={(e) => setCurrentPage(6)} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}>6</Button>
          </div>
          <div className="col p-3">
            <Button className="butt-2" onClick={nextPage} style={{fontSize:'40px' , width:'100px', height:'100px', backgroundColor:'#5E50A1', border:'none'}}><pre style={{fontSize: '1.2em'}}>&gt;</pre></Button>
          </div>
        </div>
      </div>
      
      <Footer/>
      </div>
    </>
  );
};
