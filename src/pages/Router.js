import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route} from "react-router-dom";
import ShopNow from './ShopNow'
import About from './About';
import Contact from './Contact';
import Login from './Login';
import ItemsDetails from './ItemsDetails';
import Test from './Test';
import { useSelector } from 'react-redux';
import { BsCartXFill } from "react-icons/bs";
import { removeItem } from './state/action-creater';
import { useDispatch } from 'react-redux'
import Footer from './Footer';
import Catagory from './Category';
import SignIn from './Login';
import Afterlogin from './Afterlogin';
export default function Router() {
  const [show, setShow] = useState(false);
  const inputarr = useSelector(state => state.inputarr)
  const length = inputarr.length;
  console.log(inputarr);
  const dispatch = useDispatch();
  const url = "https://rzp.io/i/zBdPrPOGW";
  const Paynow = () => {
    window.open(url, '_blank');
    window.open(url);
  }
  let sum = inputarr.reduce(function (prev, current) {
    return prev + +current.marks
  }, 0);
  return (
    <div className='router'>
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/shopping_cart/">Shop</Nav.Link>
            <Nav.Link href="/shopping_cart/about">About</Nav.Link>
            <Nav.Link href="/shopping_cart/contact">Contact</Nav.Link>
            <Nav.Link href="/shopping_cart/login">Login</Nav.Link>
            {/* <Nav.Link href="/shopping_cart/catagory">Catagory</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
                    <Nav.Link href="#"><span className='icone' onClick={() => setShow(!show)}><BsCartXFill /> {length}</span></Nav.Link>
      </Container>
    </Navbar>

      <div className="mainbar">
        <Routes>
          <Route path="shopping_cart/about" element={<About />} />
          <Route path="shopping_cart/contact" element={<Contact />} />
          <Route path="shopping_cart/login" element={<Login />} />
          <Route path="shopping_cart/catagory/" element={<Catagory />} />
          <Route path="shopping_cart/" element={<ShopNow />} />
          <Route path="/shopping_cart/:id" element={<ItemsDetails />} />
          <Route path="shopping_cart/test" element={<Test />} />
          <Route path="shopping_cart/sign-in" element={< SignIn/>} />
          <Route path="shopping_cart/after-login" element={< Afterlogin/>} />
       
        </Routes>
      </div>
      <tbody>
        {show ? (
          <table className='cart'>
            {

              inputarr.map((info, i) => {
                console.log("index", i);
                return (

                  <tr key={i}>
                    <td>{info.name}</td>
                    <td>{info.marks}</td>

                    <td><button onClick={() => {
                      dispatch(removeItem({ i }))
                    }}>Remove</button></td>
                  </tr>
                )
              })
            }
            <p className='totalPrice' >Total Amount is: ₹{sum} <button onClick={Paynow} >Paynow</button></p>

          </table>
        ) : null}

      </tbody>
      {
      }
      <Footer/>

    </div>

  )
}
