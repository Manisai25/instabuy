import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import  Row  from "react-bootstrap/Row";
import  Col  from 'react-bootstrap/Col';
import { Button, Card } from "react-bootstrap";
import axios from "axios";

export default function ProductsDetails({ cartItems,handleAddToCart}){
    const navigate = useNavigate()
    const location = useLocation()
    const {title , price , images , description , category, id} = location.state
    
    const [similarData , setSimilarData] = useState([])

 useEffect(() =>{
    async function getdata(){
        const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`)
        setSimilarData(response.data)
        console.log(response.data);
    }
    getdata()
 } , [])

    return (
        <div style={{padding: '2rem'}}>
         <Row>
            <Col lg={2}>
                <div style={{marginTop:'5rem'}}>
                    {
                        images.map((image , index) =>{
                            return(
                                <img key={index} src={image} width={120} style={{margin:'1rem' , borderRadius:'10px'}}/>
                            )
                        })
                    }
                </div>
            </Col>
            <Col lg={4}>
                <div style={{marginTop:'3rem'}}>
                    <img src={images[0]} style={{height:'18rem', borderRadius:'10px'}}/>
                    <h3 style={{marginTop:'0.5rem' ,}}>{title}</h3>
                    <p>{description}</p>
                    <h2 style={{color:'#5e35b1'}}>${price}/-</h2>
                    <Button style={{marginTop:'0.8rem'}} onClick={() =>{
                        alert('Click OK , If you want to add item to Cart')
                        if(id in cartItems){
                            const currentitem = cartItems[id];
                            handleAddToCart({[id]: {title , price , quantity:currentitem.quantity + 1}})
                        } else{
                            handleAddToCart({[id]: {title , price , quantity:1}})
                        }     
                        // navigate("/cart")
                    }}
                    >Add To Cart</Button>
                </div>
            </Col>
            <Col lg={6}>
                <div>
                    <h1 style={{marginLeft:'4rem'}}>Product's releated to it...</h1>
                    <div style={{display:'flex' , flexWrap:'wrap' ,marginLeft:"4rem"}}>
                {
                    similarData.map((product) =>{
                        if(product.id == id) return
                        return(
                           <Card key={product.id} style={{width:'10rem',height:'20rem' , margin:'1rem' , border:'none'}}>
                             <Card.Img height={150} src={product.images[0]}/>
                             <Card.Title style={{marginTop:'10px'}}>{product.title}</Card.Title>
                             <Card.Text style={{color:'#5e35b1'}}>${product.price}/-</Card.Text>
                             <Button onClick={() => {navigate(`/product/${product.id}`,{state:product})}} style={{width:'10rem'}}>View Product</Button>
                           </Card>
                        )
                    })
                }
            </div>
                </div>
            </Col>

         </Row>
        </div>
    )
}