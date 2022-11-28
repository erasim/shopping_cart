import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { addItem } from './state/action-creater';
import { useNavigate } from "react-router-dom";

export default function Category({setListType}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Catagory, fetchCatagory] = useState([]);
  const [Catagoryitem, fetchCatagoryitem] = useState([]);
  const [Catname, fetchCatname] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${Catname}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("asas =======> ", res);
        fetchCatagoryitem(res);
      });
  }, [Catname])


  const getData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        fetchCatagory(res);
        fetchCatname('electronics');
      });
  };
  // test comment
  useEffect(() => {
    getData();
  }, []);

  // test comment
  //      useEffect(() => {
  //      getData2();
  //  },[Catname]);

  const showToastMessage = () => {
    toast.success("Item Added Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };


  return (
    <div className="catagory">
      <div className="catlist">
        {Catagory.map((item) => (
          <Button variant="outline-primary" key={item.id} size="lg" onClick={() => {
            console.log("zaidi =========>")
            fetchCatname(item);
            setListType('category')
            //              getData2();
          }}>{item.toUpperCase()}</Button>
        ))}
      </div>
      <div className="Allitems">
        {Catagoryitem.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <br />
              <Button
                variant="primary"
                onClick={() => {
                  let name = item.title;
                  let marks = item.price;
                  dispatch(addItem({ name, marks }))
                  showToastMessage();
                }}
              >
                Add To Card
              </Button>
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
  )
}



