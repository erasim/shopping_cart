import React, { useState, useEffect, Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from './state/action-creater';
import Category from './Category'


export default function ShopNow() {
  const [Users, fetchUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchitem, setSearch] = useState("");
 
  const [listType, setListType] = useState("");

  const showToastMessage = () => {
    toast.success("Item Added Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getData = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => {
     
        fetchUsers(res);
      });
  };
  // test comment
  useEffect(() => {
    getData();

  }, []);



const filterdata=Users.filter((val)=>{
  let data=val;
  if(searchitem !==""){
     data=val.title.toLowerCase().includes(searchitem.toLowerCase())
  }
  return data;  
})




  return (
    <div className="Rightbox">
      {(listType === '' || listType === 'search') &&
        <Fragment>
          <h2>Searching here</h2>
          <input
            tyle="text"
            className="searchBar"
            name="name"
            onChange={(evt) => {
              setListType("search")
              setSearch(evt.target.value);
            }}
          />
        </Fragment>
      }
      {(listType === '' || listType === 'category') &&
        <Category setListType={setListType}/>
      }

      {(listType === '' || listType === 'search') &&
        <Fragment>
          <h2>Shopping List</h2>
          <div className="Allitems">

            {filterdata.map((item) => (
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
                      dispatch(addItem({ name, marks }))
                    }}
                  >
                    Add To Card
                  </Button>
                  <br />
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
        </Fragment>
      }

      <ToastContainer />
    </div>
  );
}
