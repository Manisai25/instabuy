import { useEffect, useState } from 'react'
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import { Badge, Button } from 'react-bootstrap';
import logo from './assets/logo1.png'
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes , Route, useNavigate } from 'react-router-dom';
import ProductGallery from './components/ProductGallery';
import ProductsDetails from './components/ProductsDetails';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';


function App() {
  let navigate = useNavigate()
  const [user , setUser] = useState('')

  useEffect(() => {
    const userEmail  = localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail)
    }
  } , [])

  const [cartItems , setCartItems] = useState({})

  function handleAddToCart(item){
    setCartItems({...cartItems , ...item})

  }

  function handleLogoutButton(){
    navigate('/login')
    // localStorage.clear()
    setUser("")
  }
  return (
    <div>
      <Navbar style={{padding:'1rem 2rem' , borderBottom:'1px solid black'}}>
         <Navbar.Brand onClick={() => {navigate('/')}}>
          <div style={{display:'flex'}}>
            <img style={{height:'2rem'}} src={logo}/>
            <h4>InstaBuy!</h4> 
          </div>
          
          </Navbar.Brand>
         <Navbar.Collapse className="justify-content-end">
             {user && <Button onClick={() =>{ navigate('/cart')}}> Cart &nbsp; {Object.keys(cartItems).length > 0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)} </Button> }
             &nbsp;&nbsp;&nbsp;
            <Button onClick={handleLogoutButton}> { user ? 'LogOut':'Login'}</Button>
         </Navbar.Collapse>
     </Navbar>
       <Routes>
         <Route path='/' element={<Home user={user}/>} />
         <Route path='/login' element={<Login setUser={setUser}/>} />
         <Route path='/signup' element={<Signup setUser={setUser}/>} />
         <Route path='/products' element={<ProductGallery />} />
         <Route path='/product/:id' element={<ProductsDetails handleAddToCart={handleAddToCart} cartItems={cartItems} />}/>
         <Route path='/cart' element={<Cart cartItems={cartItems} />}/>
         <Route path='/checkout' element={<CheckOut/>} />


       </Routes>
    </div>
  )
}

export default App
