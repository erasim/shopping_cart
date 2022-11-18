import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const amount  = useSelector(state=>state.amount)
  return (

    <div className='cart'>
        <h2>Accunt Balance is -{amount}</h2>
    </div>
  )
}
   