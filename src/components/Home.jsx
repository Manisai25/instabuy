// import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import  Row  from "react-bootstrap/Row";
import  Col  from 'react-bootstrap/Col';
import One from '../assets/p.png'
import Two from '../assets/m.png'
import Three from '../assets/r.png'
import AvailableProducts from '../assets/apa.png'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Home({user}){

  const navigate = useNavigate()

  const handleExploreButton = ()=>{
    if(user){
      navigate('/products');
    }else{
      navigate('/login');
    }
  }

    return(
        <div style={{padding:'2rem'}}>
            <Carousel>
                <Carousel.Item>
                    <Row>
                      <Col>
                       <div className='home-info'>
                         <h3>SHOP WITH UTMOST</h3>
                         <h2><i>CONFIDENT</i></h2>
                         <p> adipisicing elit. Rem minus libero voluptas, cumque fugiat ratione totam labore deserunt nihil praesentium debitis aliquid optio exercitationem? Ea velit commodi dolor laborum quis?</p>
                         <div>
                          <Button onClick={handleExploreButton}>EXPLORE MORE..</Button>
                         </div>
                         <div className='available-products'>
                          <h4>Products available from ... </h4>
                          <img src={AvailableProducts}/>
                         </div>
                       </div>
                      </Col>
                      <Col>
                        <div className='img-div'>
                          <img  src={One}/>
                        </div>
                      </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                      <Col>
                      <div className='home-info' >
                         <h3>SHOP WITH UTMOST</h3>
                         <h2><i>STYLE</i></h2>
                         <p> adipisicing elit. Rem minus libero voluptas, cumque fugiat ratione totam labore deserunt nihil praesentium debitis aliquid optio exercitationem? Ea velit commodi dolor laborum quis?</p>
                         <div>
                           <Button onClick={handleExploreButton}>EXPLORE MORE..</Button>
                         </div>
                         <div className='available-products'>
                           <h4>Products available from ... </h4>
                           <img src={AvailableProducts}/>
                         </div>
                       </div>
                      </Col>
                      <Col>
                       <div className='img-div'>
                         <img src={Two}/>
                       </div>
                      </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                      <Col>
                      <div className='home-info'>
                         <h3>SHOP WITH UTMOST</h3>
                         <h2><i>DISCOUNT</i></h2>
                         <p> adipisicing elit. Rem minus libero voluptas, cumque fugiat ratione totam labore deserunt nihil praesentium debitis aliquid optio exercitationem? Ea velit commodi dolor laborum quis?</p>
                         <div>
                           <Button onClick={handleExploreButton}>EXPLORE MORE..</Button>
                         </div>
                         <div className='available-products'>
                           <h4>Products available from ... </h4>
                           <img src={AvailableProducts}/>
                         </div>
                       </div>
                      </Col>
                      <Col>
                        <div className='img-div'>
                         <img src={Three}/>
                        </div>
                      </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}