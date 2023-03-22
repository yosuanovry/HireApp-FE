import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import peworld from "../../Assets/LandingPage/hireapp_logo.png"


export default function Navbar() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <nav className="mt-5">
                <div className="row" >  
                    <div className="col-sm-4 d-flex justify-content-center">
                        <img src={peworld} alt="" style={{minWidth:'10vw'}} />
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-4 ms-4">
                        <div className="row">
                            <div className="col d-flex justify-content-end align-items-center">
                        <Link to='/auth/login-pekerja'type="button" className="btn-1 btn p-3" style={{
                            borderColor: '#5E50A1',
                            borderWidth: '2px',
                            color:'#5E50A1',
                            fontWeight: '700',
                            fontSize: '1vw',
                        }}>Masuk Untuk Pekerja</Link>
                            </div>
                            <div className="col d-flex justify-content-start align-items-center">
                        <Link to='/auth/login-perekrut' type="button" className="btn-2 btn p-3" style={{
                            borderColor: '#5E50A1',
                            backgroundColor: '#5E50A1',
                            borderWidth: '2px',
                            color:'white',
                            fontWeight: '700',
                            fontSize: '1vw',
                        }}>Masuk Untuk Perekrut</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  );
};
