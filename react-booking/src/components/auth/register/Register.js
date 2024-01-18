import React, { useState } from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { registerApi } from '../../../api/auth';

function Register() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const navigate = useNavigate();

    const changeData = (e) => {
        const name = e.target.name; 
        const val =  e.target.value;
        setData({...data, [name]: val});
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await registerApi(data);
             
        } catch (error) {
            
        }
    }
  return (
    <>
    <section className="h-100 gradient-form register" style={{backgroundColor: "#eee"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6 b-right position-relative" style={{backgroundColor: "#e0e0e0"}}>
                <div className="card-body card-body w-75 ps-5 pe-0 w-75">
  
                  <div className="text-start">
                    <h4 className="mt-1 mb-5 pb-1">Hotel Booking</h4>
                  </div>
  
                  <form onSubmit={handleRegister}>
                    <p className="fw-bold fs-2">Login</p>
                    <div className="d-flex align-items-center justify-content-start pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <a type="button" className="color-green">Request account</a>
                      </div>

                    <div className="form-outline mb-3">
                      <input type="password" id="name" value={data.name} name='name' className="form-control border-bot" onChange={(e) => changeData(e)} placeholder='Full name'/>
                    </div>
  
                    <div className="form-outline mb-4">
                      <input type="email" id="email" value={data.email} name='email' className="form-control border-bot" onChange={(e) => changeData(e)} placeholder='Email'/>
                    </div>

                    <div className="form-outline mb-3">
                      <input type="password" id="password" value={data.password} name='password' className="form-control border-bot" onChange={(e) => changeData(e)} placeholder='Password'/>
                    </div>

                    <div className="form-outline mb-3">
                      <input type="password" id="password_confirmation" value={data.password_confirmation} name='password_confirmation' className="form-control border-bot" onChange={(e) => changeData(e)} placeholder='Password confirm'/>
                    </div>

                    <div className="text-end mb-4 pb-1">
                        <a className="color-green" href="#!">Forgot password?</a>
                    </div>
  
                    <div className="text-center pt-1 mb-1 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 fs-5 w-100" disabled={isSubmitting}>
                      {isSubmitting ? "Submited..." : "Register"}</button>
                      </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="register-square-container">
                    <div className="register-square-content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default Register
