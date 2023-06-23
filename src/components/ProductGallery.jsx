import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function ProductGallery(){

    const [products , setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        async function getProducts(){
            const response = await axios.get(' https://api.escuelajs.co/api/v1/products?offset=0&limit=60')
            console.log(response.data);
            setProducts(response.data)
        }
        getProducts();
    },[])

    return(
        <div style={{padding:'1.5rem'}}>
            <h2 style={{textAlign:'center' , color:'#e91e63' , fontSize:'3rem'}}>Select a Product...</h2>
            <div style={{display:'flex' , flexWrap:'wrap' ,marginLeft:"4rem" }}>
                {
                    products.map((product) =>{

                        return(
                           <Card key={product.id} style={{width:'15rem', height:'20rem' , margin:'1rem' , border:'none'}}>
                             <Card.Img src={product.images[0]} style={{height:'12rem'}}/>
                             <Card.Title style={{marginTop:'10px'}}>{product.title}</Card.Title>
                             <Card.Text>${product.price}/-</Card.Text>
                             <Button onClick={() => {navigate(`/product/${product.id}`,{state:product})}} style={{width:'10rem'}}>View Product</Button>
                           </Card>
                        )
                    })
                }
            </div>

        </div>
    )

}