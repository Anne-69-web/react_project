import myimage from "../images/logoo.jpg";
import { useNavigate, Link } from "react-router-dom";
import cart from "../images/cart.png";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap"; 
import axios from "axios";
import { useEffect } from "react";


const NavBar = () => {

        let [username, setUsername]=useState("")
        let [email, setEmail]=useState("")
        let [phone, setPhone]=useState("")
        let [password, setPassword]=useState("")
        let [loading,setLoading]=useState("")
        let [success, setSuccess]=useState("")
        let [error,setError]=useState("") 
        let [user,setUser]=useState(null)
    
        const submit=(e)=>{
            e.preventDefault()
        }

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
        navigate("/");
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
            await closeModal2()
            window.location.reload();
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

      const [isModal2Open, setIsModal2Open]=useState(false);
      
      const openModal2=()=>setIsModal2Open(true);
      
      const closeModal2 = () => setIsModal2Open(false);
      


    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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


    const togglePassword=()=>{
        const passwordInput=document.getElementById("password")
        const icon=document.getElementById("icon")

        let current_type=passwordInput.getAttribute("type")
        let new_type=''
        if (current_type==="password"){
            new_type="text"
            icon.classList.remove("bi-eye")
            icon.classList.add("bi-eye-slash")

        }else{
            new_type="password"
            icon.classList.add("bi-eye")
            icon.classList.remove("bi-eye-slash")

        }
        passwordInput.setAttribute("type",new_type)
    }


    const togglePassword2=()=>{
        const passwordInput=document.getElementById("password2")
        const icon=document.getElementById("icon2")

        let current_type=passwordInput.getAttribute("type")
        let new_type=''
        if (current_type==="password"){
            new_type="text"
            icon.classList.remove("bi bi-eye")
            icon.classList.add("bi bi-eye-slash")

        }else{
            new_type="password"
            icon.classList.add("bi bi-eye")
            icon.classList.remove("bi bi-eye-slash")

        }
        passwordInput.setAttribute("type",new_type)
    }

    // Fetch user from localStorage on component mount
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);


    return (
        <div className="container-fluid">
            <section className="row">
                <div className="col-md-12">
                    <div className="navbar navbar-expand-md t">
                        <Link to="/" className="navbar-brand">
                            <img src={myimage} alt="Logo" id="logo" />
                            Sweet Encounter
                        </Link>

                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div id="nav" className="collapse navbar-collapse">
                            <div className="navbar-nav ms-auto">
                                <span>
                                <i class="bi bi-cart4"></i>
                                </span>

                                {/* User logged in */}
                                {user ? (
                                    <div className="navbar-nav ms-auto">
                                        <b className="text-success nav-link">Hello {user.username}</b>
                                        <button className="nav-link btn btn-link" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="navbar-nav ms-auto">
                                       
                                        {/* Register Link */}
                                        <span onClick={openModal}>
                                            Register
                                        </span>

                                        {/* React-Bootstrap Modal */}
                                        <Modal show={isModalOpen} onHide={closeModal}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Sign Up</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
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
                                                    <div className="input-group">
                                                    <input type="password" className="form-control" id="password" placeholder="Enter password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
                                                    <span className="input-group-text" onClick={togglePassword}><i id="icon" class="bi bi-eye"></i>
                                                    </span>
                                                    </div>
                                                     <br />
                                                     <button type="submit" className="btn btn-danger" >Submit</button>
                                            
                                                     <p >Already have an account?<span id="inn" onClick={()=>{closeModal(); openModal2();}}>Sign in</span></p>
                                                        
                                            </form>           
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={closeModal}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <Modal isOpen={isModal2Open} closeModal={closeModal2} />
                                                     <Modal show={isModal2Open} onHide={closeModal2}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Sign Up</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                                    <b className="text-secondary">{loading}</b>
                                                                    <b className="text-success">{success}</b>
                                                                    <b className="text-danger">{error}</b>
                                                                    <form onSubmit={submitForm2}>
                                                                        <input type="text" className="form-control" placeholder="Enter email/username" required value={username} onChange={(e)=> setUsername(e.target.value)}/>
                                                                        <br />
                                                                        <div className="input-group">
                                                                        <input type="password" className="form-control" placeholder="Enter password" id="password2" required value={password} onChange={(e)=> setPassword(e.target.value)} />
                                                                        <span onClick={togglePassword2} id="icon2" className="input-group-text"><i class="bi bi-eye"></i>
                                                                        </span>
                                                                        </div>                                                                    
                                                                        <br />
                                                                        <button type="submit" className="btn btn-danger"  >Submit</button>
                                                            
                                                                        <p >Don't have an account?<Link onClick={openModal}>Sign Up</Link></p>
                                                            
                                                                    </form>
                                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={closeModal2}>
                                                                Close
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                    </div>
                                )}

                                <Link to="/#menu" className="nav-link">Menu</Link>
                                <Link to="./#reviews" className="nav-link">Reviews</Link>
                                <Link to="./HomePage#delivery.html" className="nav-link">Delivery</Link>
                                <Link to="./#foot" className="nav-link">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NavBar;
