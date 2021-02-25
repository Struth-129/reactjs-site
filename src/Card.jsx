import React from "react";
import cpp from "./images/cpp.png"
import Sdata from "./Sdata";

const Card = (props) => {
    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
            <div class="card hh" style={{width :"18rem"}}>
                <img src={props.imgsrc} class="card-img-top hove" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
               </div>
            </div>
        </div>
        </>
    )
}

export default Card;