import React from "react";
import './index.css';
import './button.css';


const About = () => {
    return(
        <>
            <section id="header" className="d-flex align-item-center tope_header">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-10 pt-10">
                            <h1>This page displays information about me.</h1>
                            <h2>🖐Hi my name is </h2><h2>
                             <strong className="brand-name">Saket srivastava</strong></h2><h2> and I am a student of👦</h2>
                             <h2><strong className="brand-name">National Institute of Technology Patna🥇</strong></h2><br></br>
                             <h3>You can see my CV below 📜</h3>
                             <a href="https://drive.google.com/file/d/1lMICwqC3JvBDQfz87BQii5q6FQ-16Xu1/view?usp=sharing"  target="_blank" >
                             <div class="box-l">
                                <div class="container-fluid">
	                                <div class="row">
		                                <div id="ms-container">
			                                <label for="ms-download">
				                                <div class="ms-content">
					                                <div class="ms-content-inside">
						                            <input type="checkbox" id="ms-download" />
						                            <div class="ms-line-down-container">
							                        <div class="ms-line-down"></div>
						                            </div>
						                            <div class="ms-line-point"></div>
					                            </div>
				                                </div>
			                                </label>
		                                </div>
	                                </div>
                                </div>
                            </div>
                             </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default About;