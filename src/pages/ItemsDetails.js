import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function ItemsDetails() {
  let { id } = useParams();
    const [Users, fetchUsers] = useState([])
    const getData = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
        })
    }
  
    useEffect(() => {
      getData()
    }, [])
  
    return (
      <div className='Rightbox'>
        <h3>{Users.category}</h3>
        <h1>{Users.title}</h1>
        <h3>{Users.description}</h3>
        <h2>Price -₹{Users.price}</h2>
        <img src={Users.image} alt="img"/>
     </div>
    )
  }