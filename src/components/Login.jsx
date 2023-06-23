import  Row  from "react-bootstrap/Row";
import  Col  from 'react-bootstrap/Col';
import Loginimg from '../assets/login-pic.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login({setUser}){
    
    const [email , setEmail] = useState('')
    const navigate = useNavigate()
    return(
        <div style={ {  height:'88.5vh',  backgroundColor:'#ff4081' , overflowX:'hidden' , overflowY:'hidden'}}>
            <Row>
                <Col style={{width:'100%',padding:'14rem 0rem' , marginLeft:'7rem'}}>
                  <h4 style={{color:'white'}}>InstaBuy !..</h4>
                  <h5 style={{color:'white'}}>Here is the place were all product's come together</h5>
                  <div>
                     <Form>
                        <div className="inside-form">
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.currentTarget.value)} />
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicPassword">
                             <Form.Control type="password" placeholder="Password" />
                           </Form.Group>
                        </div>
                       <Button style={{width:'65%', backgroundColor:'#ff4081' , border:'1px solid white'}} 
                          type="submit"
                          onClick={() =>{
                            localStorage.setItem('userEmail' , email)
                            setUser(email)
                            navigate('/');
                       }}>
                         Start Shopping...
                       </Button>
                       <div style={{color:'white' ,marginTop:'1.5rem' , fontSize:'1.2rem'}}>
                        Join the Club, <a style={{color:'white'}}onClick={() => {navigate('/signup')}} >click Here..</a>
                       </div>
                     </Form>
                  </div>
                </Col>
                <Col style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                  <img  src={Loginimg}/>
                </Col>
            </Row>
        </div>
    )
}