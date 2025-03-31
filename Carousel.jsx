
import React from "react";
import caro1 from "../images/caro1.jpg";
import caro from "../images/caro.jpg";
import caro2 from "../images/caro2.jpg";
import caro4 from "../images/caro4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';





const MyCarousel = () => {


    return ( 
        <div className="container-fluid">
        <section className="row ">
             <div className="col-md-12">
             <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
                         <div className="carousel-inner">
                             <div className="carousel-item active " >
                                 <img src={caro1} alt="" className="d-block w-100" height="600px"/>
                                 <div className="carousel-caption">
                                     <h4 className="title">Do you like Cake?</h4>
                                     <p>We make varieties of cakes of different flavors, size and aesthetics.</p>
                                 </div>
                             </div>
                             <div className="carousel-item">
                                 <img src={caro2} alt="" className="d-block w-100" height="600px"/>
                                 <div className="carousel-caption">
                                     <h4 className="title">Looking for cupcakes?</h4>
                                     <p>Don't worry, Sweet Encounter has got your back.</p>
                                 </div>
                             </div>
                             <div className="carousel-item">
                                 <img src={caro} alt="" className="d-block w-100" height="600px"/>
                                 <div className="carousel-caption">
                                     <h4 className="title">Wanna buy for a friend or family?</h4>
                                     <p>Thats Great! We do deliveries across all parts of Nairobi.</p>
                                 </div>
                             </div>
                             <div className="carousel-item">
                                 <img src={caro4} alt="" className="d-block w-100" height="600px"/>
                                 <div className="carousel-caption">
                                     <h4 className="title">Have your own thoughts on the decoration?</h4>
                                     <p>We listen and make the order as requested to your satisfaction.</p>
                                 </div>
                             </div>
                         </div>
                         {/* <!-- navigation button --> */}
                         <a href="#myCarousel" className="carousel-control-prev" data-bs-slide="prev">
                             <span className="carousel-control-prev-icon"></span>
                         </a>
                         <a href="#myCarousel" className="carousel-control-next" data-bs-slide="next">
                             <span className="carousel-control-next-icon"></span>
                         </a>
                         {/* <!-- navigation button --> */}
                          <ol className="carousel-indicators">
                             <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active">.</li>
                             <li data-bs-target="#myCarousel" data-bs-slide-to="1">.</li>
                             <li data-bs-target="#myCarousel" data-bs-slide-to="2">.</li>
                             <li data-bs-target="#myCarousel" data-bs-slide-to="3">.</li>
                          </ol>
             </div>
             </div>
           </section>

        </div>
     );
}
 
export default MyCarousel;