import React from "react";
import imghome from "./images/3.png";


const Home = () => {
    return(
        <>
           <section id="header" className="tope_header">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1">
                            <h1> This is my <strong className="brand-name">ReactJs</strong> project </h1>
                            <h2 className="my-3"> I am an enthusiastic developer and coder </h2>
                            <div className="mt-3">
                                <a href="" className="btn-get-started">Get Started</a>
                            </div> 
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={imghome} className="img-fluid animated" alt="home img" width="550" height="550" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Home;