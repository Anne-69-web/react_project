import axios from "axios";
import { Link} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';



function Modal({ isOpen, closeModal }) {

    
        let [username, setUsername]=useState("")
        let [email, setEmail]=useState("")
        let [phone, setPhone]=useState("")
        let [password, setPassword]=useState("")
        let [loading,setLoading]=useState("")
        let [success, setSuccess]=useState("")
        let [error,setError]=useState("") 
    
        const submit=(e)=>{
            e.preventDefault()
        }
    
       
            
    
        const submitForm=async(e)=>{
            e.preventDefault();
    
            try{
                setError("")
                setSuccess("")
                setLoading("Please wait as we submit your data :)");  
                const data=new FormData();    
                data.append("username",username);
                data.append("email",email);
                data.append("phone",phone);
                data.append("password",password);
    
                const response= await axios.post("https://Ndush.pythonanywhere.com/api/signup",data)
                setLoading("")
                setSuccess(response.data.success)
                setUsername("");
                setEmail("");
                setPhone("");
                setPassword("");

    
             }catch(error){
                setLoading("")
                setError("Something went wrong:)")
            }
        }  



    if (!isOpen) return null; 
    return (
             <div style={modalStyles} className="modal-xl">
               <div style={modalContentStyles} >
               <span onClick={closeModal}><i class="bi bi-x-octagon-fill"></i></span>
                 <h2>Sign Up</h2>
                 <div className="modal-body">
            <b className="text-secondary">{loading}</b>
            <b className="text-success">{success}</b>
            <b className="text-danger">{error}</b>
            <form onSubmit={submitForm}>
                <input type="text" className="form-control" placeholder="Enter username" required value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <br />
                <input type="email" className="form-control" placeholder="Enter email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <br />
                <input type="tel" className="form-control" placeholder="Enter phone number" required value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                <br />
                <input type="password" className="form-control" placeholder="Enter password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
            
                <br />
                <button type="submit" className="btn btn-danger" >Submit</button>

                <p >Already have an account?<Link to="/signin">Sign in</Link></p>

            </form>
            </div>
               </div>
             </div>
           );
}


function App(){
    const [isModalOpen, setIsModalOpen]=useState(false);

    const openModal=()=>setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
             <div>
               <button className="btn btn-secondary" onClick={openModal} id="modalup"></button>
               <Modal isOpen={isModalOpen} closeModal={closeModal} />
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



const SignUp=()=>{
    let [username, setUsername]=useState("")
    let [email, setEmail]=useState("")
    let [phone, setPhone]=useState("")
    let [password, setPassword]=useState("")
    let [loading,setLoading]=useState("")
    let [success, setSuccess]=useState("")
    let [error,setError]=useState("") 

    const submit=(e)=>{
        e.preventDefault()
    }

   
        

    const submitForm=async(e)=>{
        e.preventDefault();

        try{
            setError("")
            setSuccess("")
            setLoading("Please wait as we submit your data :)");  
            const data=new FormData();    
            data.append("username",username);
            data.append("email",email);
            data.append("phone",phone);
            data.append("password",password);

            const response= await axios.post("https://Ndush.pythonanywhere.com/api/signup",data)
            setLoading("")
            setSuccess(response.data.success)
            setUsername("");
            setEmail("");
            setPhone("");
            setPassword("");

         }catch(error){
            setLoading("")
            setError("Something went wrong:)")
        }
    }

    


    return ( 
        <div className="container-fluid">
        
        <section>
        <div className=" modal row justify-content-center mt-4" id="signup">
        <div className="col-md-5 p-4 modal-dialog" id="body">
            <div className="modal-content">
            <div className="modal-header">
            <h2 className="modal-title">Sign Up</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <b className="text-secondary">{loading}</b>
            <b className="text-success">{success}</b>
            <b className="text-danger">{error}</b>
            <form onSubmit={submitForm}>
                <input type="text" className="form-control" placeholder="Enter username" required value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <br />
                <input type="email" className="form-control" placeholder="Enter email" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <br />
                <input type="tel" className="form-control" placeholder="Enter phone number" required value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                <br />
                <input type="password" className="form-control" placeholder="Enter password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
            
                <br />
                <button type="submit" className="btn btn-danger" >Submit</button>
            </form>
            </div>
            <p >Already have an account?<Link to="/signin">Sign in</Link></p>
            </div>
        </div>
        </div>
        </section>
        </div>
     );
}
 
// export default SignUp;