import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Footer from './Footer';
import menu from "../images/cakemenu.jpg"
import axios from "axios";
import { useEffect, useState } from "react";
import { hover } from '@testing-library/user-event/dist/hover';




const HomePage = () => {

    const img_url="https://Ndush.pythonanywhere.com/static/images/";

    let [products,setProducts]=useState([])
    let [comments,setComments]=useState([])
    let [loading,setLoading]=useState(null)
    let [loading2,setLoading2]=useState(null)
    let [error,setError]=useState(null)

    let [filteredProducts,setFilteredProducts]=useState([])


    const getProducts=async()=>{
        setError("")
        setLoading("Loading products...")
        try {
            const response = await axios.get("https://Ndush.pythonanywhere.com/api/getproducts");
            setProducts(response.data)
            setFilteredProducts(response.data)

            // if (Array.isArray(response.data)) {
            //     setProducts(response.data);
            // } else {
            //     setError("Invalid product data received.");
            // }
            setLoading("");
        } catch (error) {
            setError("Failed to load products: " + error.message);
            setLoading("");
        }
  
      }

// function ya kuexecute the search process
      const handleSearch = (value) => {
        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
    
    // const handleSearch=(value) =>{
    //     const filtered=products && products.filter(()=>product.product_name.toLowerCase().includes(value.toLowerCase()))
    //     setFilteredProducts(filtered);
    // }
      // getProducts()
      useEffect(()=>{
          getProducts();
      },[])
      const getComments=async()=>{
        setError("")
        setLoading2("Loading reviews...")
        try {
            const response = await axios.get("https://Ndush.pythonanywhere.com/api/gtcomment");
            setComments(response.data)

            // if (Array.isArray(response.data)) {
            //     setProducts(response.data);
            // } else {
            //     setError("Invalid product data received.");
            // }
            setLoading2("");
        } catch (error) {
            setError("Failed to load reviews: " + error.message);
            setLoading2("");
        }
  
      }

      useEffect(()=>{
        getComments();
    },[])



    return (  
        <div className="container-fluid" id='homebody'>
            {/* navbar */}
        {<NavBar/>}
        {/* carousel */}
        {<Carousel/>}
      {/* body */}
      <div className="" id="menu">
        
      <img src={menu} alt="menu" height="200px" width="100%"/>
      </div>
              <section className="row" >
                <h1>Cake Flavors</h1>
                <div className="col-md-4">
                    <ul>
                        <li>Vanilla Cakes</li>
                        <li>Passion Cakes</li>
                        <li>Blueberry Cakes</li>
                        <li>Lemon Cakes</li>
                        <li>Orange Cakes</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li>Lemon Blueberry Cakes</li>
                        <li>Pinacolada Cakes</li>
                        <li>Marble Cakes</li>
                        <li>Vanilla Chocolate chip Cakes</li>
                        <li>Chocolate mint Cakes</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li>Chocolate fudge Cakes</li>
                        <li>Rich Fruit Cakes</li>
                    </ul>
                </div>
              </section>
              <hr/>
              <h1>Event Based Cakes</h1>
              <p>We make cakes for any and all events. Whether it is a Bithday, Graduation, Aniversary etc</p>
              <p>Here are sample cakes we do;</p>
              {error && <b className="text-danger">{error}</b>}
              {loading && <b className="text-warning">{loading}</b>}
              <br />
              {loading && <b className="text-warning">{loading2}</b>}

{/* the input form for search */}
          
            
        
              <section className="row justify-content-center ">
              <div className=" row my-4">
                <div className="col-md-4">
                    <input type="text" name="" id="" className='form-control ' placeholder='Search' onChange={(e)=>handleSearch(e.target.value)}/>

                </div>
              </div>

                {/* specify roducts  for search */}
              {filteredProducts.map((product)=>(
                <div className="col-md-3 justify-content-center mb-4 mx-2" >
                <div id='productt'>
                <img src={img_url+product.product_photo} alt="" className="product_img mt-4" />
                <div className="card-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <b className="text-warning">Order Now!!</b>
                </div>
                </div>
                </div>
                ))};
            
                
              </section>

              <section className="row justify-content-center">
              {comments.map((comment)=>(
                <div className="col-md-3 justify-content-center mb-4 mx-2" >
                <div className='card-header'>
                    <h5>{comment.email}</h5>
                <div className="card-body">
                    <p>{comment.comment}</p>
                </div>
                </div>
                </div>                
              ))}
              </section>
        {/* footer */}
        {<Footer/>}
         </div>
    );
}
export default HomePage;
