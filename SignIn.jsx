import axios from "axios";
import { useNavigate, Link, Navigate} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { useEffect } from "react";



function Modal({ isOpen, closeModal }) {

    
    let [username, setUsername]=useState("")
    let [password, setPassword]=useState("")
    let [loading,setLoading]=useState("")
    let [success, setSuccess]=useState("")
    let [error,setError]=useState("") 

    const navigate = useNavigate();

    const submit=(e)=>{
        e.preventDefault()
    };

    
    const submitForm2 = async (e) => {
        e.preventDefault();
        try {
          setError("");
          setLoading("Please wait ...");
    
          const data = new FormData();
          data.append("username", username);
          data.append("password", password);
    
          const response = await axios.post(
            "https://Ndush.pythonanywhere.com/api/signin",
            data
          );
          if (response.data.user) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/");
          } else {
            setLoading("");
            setError(response.data.message);
          }
        } catch (error) {
          setLoading("");
          setError("Something went wrong");
        }
      };



if (!isOpen) return null; 
return (
         <div style={modalStyles} className="modal-xl">
           <div style={modalContentStyles} >
           <span onClick={closeModal}><i class="bi bi-x-octagon-fill"></i></span>
             <h2>Sign In</h2>
             <div className="modal-body">
        <b className="text-secondary">{loading}</b>
        <b className="text-success">{success}</b>
        <b className="text-danger">{error}</b>
        <form onSubmit={submitForm2}>
            <input type="text" className="form-control" placeholder="Enter email/username" required value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <br />
            <input type="password" className="form-control" placeholder="Enter password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
        
            <br />
            <button type="submit" className="btn btn-danger"  >Submit</button>

            <p >Don't have an account?<Link to="/signup">Sign Up</Link></p>

        </form>
        </div>
           </div>
         </div>
       );
}


function App(){
const [isModal2Open, setIsModal2Open]=useState(false);

const openModal2=()=>setIsModal2Open(true);

const closeModal2 = () => setIsModal2Open(false);

return (
         <div>
           <button className="btn btn-secondary" onClick={openModal2} ></button>
           <Modal isOpen={isModal2Open} closeModal={closeModal2} />
         </div>
       );
     
    
}
 
// modalstyles
const modalStyles = {
position: 'fixed',
top: '0',
left: '0',
width: '100%',
height: '100%',
backgroundColor: 'rgba(0,0,0,0.5)',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
};

const modalContentStyles = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '600px'
  };

export default App;
