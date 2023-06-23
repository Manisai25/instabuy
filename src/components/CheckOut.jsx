import React from "react";
import CheckImg from '../assets/checkout.png';

export default function CheckOut(){
    return(
        <div className="checkout">
            <img src={CheckImg}/>
            <h2>SUCCESS</h2>
        </div>
    )
}