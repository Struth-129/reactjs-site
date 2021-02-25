import React, { useState } from "react";
import './index.css';


const Contact = () => {
    const [data, setData] = useState({
        fullname:'',
        email:'',
        message:'',
    });
    const inputEvent = (event) =>{
        const {name , value } = event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`${data.fullname} your message is sent using email ${data.email}`)
    };
    
    return(
        <>
          <div className="my-5">
              <h1 className="text-center"> Contact Me </h1>
          </div>
          <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit = {formSubmit}>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                        Fullname
                        </label>
                        <input type="name" 
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name = "fullname"
                        value = {data.fullname}
                        onChange = {inputEvent} 
                        placeholder="Your name here"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                        Email address
                        </label>
                        <input type="email" 
                        class="form-control" 
                        id="exampleFormControlInput1" 
                        name = "email"
                        value = {data.email}
                        onChange = {inputEvent}
                        placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" 
                        class="form-label">
                        Your message</label>
                        <textarea class="form-control"
                        name = "message"
                        value = {data.message}
                        onChange = {inputEvent} 
                        id="exampleFormControlTextarea1" rows="3">
                        </textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-primary"
                        type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
                </div>

            </div>
          </div>    
        </>
    )
}

export default Contact;