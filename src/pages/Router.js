import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route,Link} from "react-router-dom";
import ShopNow from './ShopNow'
import About from './About';
import Contact from './Contact';
import Login from './Login';
import ItemsDetails from './ItemsDetails';
import Test from './Test';
import { useSelector } from 'react-redux';
import { BsFileEarmarkExcelFill,BsCartPlusFill} from "react-icons/bs";
import { removeItem } from './state/action-creater';
import { useDispatch } from 'react-redux'
import Footer from './Footer';
import Catagory from './Category';
import SignIn from './Login';
import Afterlogin from './Afterlogin';
import {Button, Card} from 'react-bootstrap/';
export default function Router() {
  const [show, setShow] = useState(false);
  const inputarr = useSelector(state => state.inputarr)
  const length = inputarr.length;
  // console.log(inputarr);
  const dispatch = useDispatch();
  const url = "https://rzp.io/i/zBdPrPOGW";
  const Paynow = () => {
    window.open(url, '_blank');
    window.open(url);
  }
  let sum = inputarr.reduce(function (prev, current) {
    return prev + +current.marks
  }, 0);
// Razorpay start
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
const loadScript = (src) => {
  return new Promise((resovle) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resovle(true);
    };

    script.onerror = () => {
      resovle(false);
    };

    document.body.appendChild(script);
  });
};

 const displayRazorpay = async (amount) => {
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("You are offline... Failed to load Razorpay SDK");
    return;
  }

  const options = {
    key: "rzp_live_aMFNd3UamMlBzo",
    currency: "INR",
    amount: sum * 100,
    name: "Paynow",
    description: "Thanks for purchasing",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Razorpay_logo.svg/1896px-Razorpay_logo.svg.png",

    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("Payment Successfully");
    },
    prefill: {
      name: "asim hasnain zaidi",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
// Razorpay End
  return (
    <div className='router'>
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/shopping_cart/">Shop</Link>
            <Link to="/shopping_cart/about">About</Link>
            <Link to="/shopping_cart/contact">Contact</Link>
         
           
          
    
            <Link to="/shopping_cart/login">Login</Link>
      
            {/* <Nav.Link href="/shopping_cart/catagory">Catagory</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
                    <Nav.Link href="#"><span className='icone' onClick={() => setShow(!show)}><BsCartPlusFill /> {length}</span></Nav.Link>
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
          {/* <Route path="shopping_cart/pay" element={<Razorpay/>} /> */}
       
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
                    <td>{formatter.format(info.marks)}</td>

                    <td><button onClick={() => {
                      dispatch(removeItem({ i }))
                    }}><BsFileEarmarkExcelFill/></button></td>
                  </tr>
                )
              })
            }
            
            <p className='totalPrice' >Total Amount is: {formatter.format(sum)}
            <Button onClick={displayRazorpay}>Pay With Razorpay</Button></p>

          </table>
        ) : null}

      </tbody>
      {
      }
      <Footer/>

    </div>

  )
}
