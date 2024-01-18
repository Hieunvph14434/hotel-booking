import { useEffect } from 'react';
import './App.css';
import Router from './Router.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function App() {
  // useEffect(()=>{
  //   axios.get('http://127.0.0.1:8000/api/list-rooms').then((res)=>{
  //     console.log("res", res);
  //   }).catch((err)=> {
  //     console.log("err", err);
  //   })
  // }, []);
  return (
    <div className="App">
       <Router/>
       <ToastContainer/>
    </div>
  );
}

export default App;
