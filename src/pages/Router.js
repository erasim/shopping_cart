import React,{useState} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ShopNow from './ShopNow'
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import ItemsDetails from './ItemsDetails';
import Test from './Test';
import Popup from './Popup';
import { useSelector } from 'react-redux';
import AddToCard from './AddtoCard';
import {BsCartXFill } from "react-icons/bs";
import { removeItem  } from './state/action-creater';
import { useDispatch } from 'react-redux'
export default function Router() {
  const [show, setShow] = useState(false);
  const inputarr  = useSelector(state=>state.inputarr)
  const length=inputarr.length;
  console.log(inputarr);
  const dispatch=useDispatch();
  let sum = inputarr.reduce(function(prev, current) {
    return prev + +current.marks
  }, 0);
  return (
    <div className='router'>
 <ul className="links">
 <li><Link to="/">Shop</Link></li>     
     <li><Link to="/about">About</Link></li>
    <li>  <Link to="/contact">Contact</Link></li>
    <li  > < Link to="/login" >Login</Link></li>
    <li >  <Link to="/signup">SignUp</Link></li>


  <span className='icone' onClick={() => setShow(!show)}><BsCartXFill/> {length}</span>
  </ul>
  <div className="mainbar">
<Routes>

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<ShopNow />} />
        <Route path="shop/:id" element={<ItemsDetails />} />
        <Route path="test" element={<Test/>}/>
        <Route path="popup" element={<Popup/>}/>
    

       
      </Routes> 
   
      </div>
      <tbody>
      { show ? (
<table className='cart'>
 { 

 inputarr.map((info,i)=>{ 
  console.log("index",i);
                return(
                  
                    <tr key={i}>
                    <td>{info.name}</td>
                    <td>{info.marks}</td>
                    
                   <td><button  onClick={() => { dispatch(removeItem({i}))
                }}>Remove</button></td>
                    </tr>
                )
            })
         }
         <p className='totalPrice' >Total Amount is: ₹{sum} <button >Paynow</button></p>
        
</table>
) : null} 

</tbody>
{ 
}

    </div>

  )
}
