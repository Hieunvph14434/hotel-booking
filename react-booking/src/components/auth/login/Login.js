import React, { useState } from 'react'
import './Login.css';
import { toast } from 'react-toastify';
import { loginApi, profileApi } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';
import { toastSuccess } from '../../../untils/Toast';
import Cookies from 'js-cookie';

function Login() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const changeData = (e) => {
        const name = e.target.name; 
        const val =  e.target.value;
        setData({...data, [name]: val});
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const response = await loginApi(data);
            if(response.data.status) {
                const token  = response.data.token;
                const user = await profileApi(token);
                const expires = new Date();
                expires.setMinutes(expires.getMinutes() + 60);
                Cookies.set('user', JSON.stringify(user.data), {
                    expires: expires
                })
                Cookies.set("token", token, {
                    expires: expires
                });
                setData({
                    email: "",
                    password: ""
                });
                navigate("/");
                toastSuccess(response.data.message);
            }
        } catch (error) {
            let message = "";
            if (error.response && error.response.data && error.response.data.errors) {
                const errors = error.response.data.errors;
                for (const key in errors) {
                  if (errors[key] && errors[key].length > 0) {
                    const firstError = errors[key][0];
                    message = firstError;
                    break; 
                  }
                }
              } else {
                message = error.message;
              }
            toast.error(`${message}!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                onOpen: () => {
                    setIsSubmitting(true);
                },
                onClose: () => {
                    setIsSubmitting(false);
                }
            });
        }
    }

  return (
    <>
        <section className="gradient-form" style={{height: "100vh", backgroundColor: "#eee"}}>
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
      
                      <form onSubmit={handleLogin}>
                        <p className="fw-bold fs-2">Login</p>
                        <div className="d-flex align-items-center justify-content-start pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <a type="button" className="color-green">Request account</a>
                          </div>
      
                        <div className="form-outline mb-4">
                          <input type="email" id="email" value={data.email} name='email' className="form-control border-bot" onChange={(e) => changeData(e)} placeholder='Email'/>
                        </div>
      
                        <div className="form-outline mb-3">
                          <input type="password" id="password" value={data.password} name='password' className="form-control border-bot" onChange={(e) => changeData(e)} placeholder='Password'/>
                        </div>

                        <div className="text-end mb-4 pb-1">
                            <a className="color-green" href="#!">Forgot password?</a>
                        </div>
      
                        <div className="text-center pt-1 mb-1 pb-1">
                          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 fs-5 w-100" disabled={isSubmitting}>
                          {isSubmitting ? "Submited..." : "Login"}</button>
                          </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="login-square-container">
                        <div className="login-square-content"></div>
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

export default Login