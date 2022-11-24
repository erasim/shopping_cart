import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem, removeItem  } from './state/action-creater';

export default function ShopNow() {
  const [Users, fetchUsers] = useState([]);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [searchitem, setSearch] = useState("");

  const showToastMessage = () => {
    toast.success("Item Added Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getData = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        fetchUsers(res);
      });
  };
// test comment
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Rightbox">
     
      <h2>Searching here</h2>
      <input
        tyle="text"
        className="searchBar"
        name="name"
        onChange={(evt) => {
          setSearch(evt.target.value);
        }}
      />
       <h2>Shopping List</h2>
      <div className="Allitems">
        
        {Users.filter((value) => {
          if (searchitem === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchitem.toLowerCase())
          ) {
            return value;
          }
        }).map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Button
                variant="primary"
                onClickCapture={showToastMessage}
                onClick={() => {
                  let name = item.title;
                  let marks = item.price;
                  dispatch(addItem({name, marks}))
                }}
              >
                Add To Card
              </Button>
              <br/>
              <Button
                variant="primary"
                onClick={() => {
                  let id = item.id;
                  const url = `./${id}`;
                  navigate(url);
                }}
              >
                Get Details{" "}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
