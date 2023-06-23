import React, { useEffect, useState } from "react";
import { Row , Col, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cartimg from '../assets/cartimg.png'

export default function Cart({cartItems}){

    const navigate = useNavigate();

    const [totalPrice , setTotalPrice] = useState(0)
    const [totalQuantity , setTotalQuantity] = useState(0)

    useEffect(() =>{
        let basePrice = 0;
        let baseQuantity = 0;
        Object.keys(cartItems).map((cartItemsId)=>{
            const details = cartItems[cartItemsId];
            baseQuantity += details.quantity;
            basePrice += details.quantity * details.price;
        })
        setTotalPrice(basePrice);
        setTotalQuantity(baseQuantity);
    } , [])
    return(
        <div style={{padding:'1.5rem'}}>
            <Row>
                <Col>
                    <h1>YOUR CART:</h1>
                    <div>
                        <Table className="table" >
                            <thead style={{textAlign:'center'}}>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            { Object.keys(cartItems).map((cartItemsId) => {
                                const itemDetails = cartItems[cartItemsId]
                                    return(
                                        <tr >
                                            <td>{itemDetails.title}</td>
                                            <td style={{textAlign:'center'}}>{itemDetails.quantity}</td>
                                            <td style={{textAlign:'center'}}>$ {itemDetails.quantity * itemDetails.price}</td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <th>Total</th>
                                    <th style={{textAlign:'center'}}>{totalQuantity}</th>
                                    <th style={{textAlign:'center'}}>$ {totalPrice}/-</th>
                                </tr>
                            </tbody>
                        </Table>
                        <Button onClick={() => {navigate("/checkout")}}  style={{margin:"1.5rem 1rem"}}>CheckOut...</Button>
                    </div>
                </Col>
                <Col>
                 <img style={{marginLeft:'8rem' , marginTop:'4rem'}} src={Cartimg}/>
                </Col>
            </Row>
        </div>
    )
}