import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from "react-bootstrap";
import { removeItem  } from './state/action-creater';
import { useDispatch } from 'react-redux'

export default function AddtoCard() {
  const dispatch=useDispatch();
  const inputarr  = useSelector(state=>state.inputarr);
  let sum = inputarr.reduce(function(prev, current) {
    return prev + +current.marks
  }, 0);
 
 console.log(inputarr);
  return (
    

    <div className='addtocart' >
      <h1>Cart List </h1>
      {inputarr.map((item, i) => {
       
          return  <ul key={i}>
       <li>{item.name}</li>
       <li>{item.marks}</li>
       <button  onClick={() => { dispatch(removeItem({i}))
                }}>-</button>
        </ul>
        })}
         
    </div>
  )
}
