import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositeMoney,withdralMoney  } from './state/action-creater';



export default function Home() {
  const [plusVal,setPlusval]=useState(0);
  const dispatch=useDispatch();
  const handlePlus=()=>{
    dispatch(depositeMoney(plusVal))
  }
  const handlePlus2=()=>{
    dispatch(withdralMoney(plusVal))
  }
  return (
    <div className='home'>
        <h1>Deposite/Withdrawn Amount</h1>
        <input type='number' name="message"  
        className='inputBox' onChange={(e)=>{setPlusval(e.target.value)}}  value={plusVal}/>
        <button className='plus' onClick={()=>handlePlus()}>+</button>
        <button className='minus' onClick={()=>handlePlus2()}>-</button>
                </div>
  )
}
