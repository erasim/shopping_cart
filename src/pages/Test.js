import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Test() {
  const [Users, fetchUsers] = useState([]);
  const navigate = useNavigate();
  const [inputarr, setInputarr] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchitem, setSearch] = useState("");

  console.log(searchitem);
  const showToastMessage = () => {
    toast.success("Item Added Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getData = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchUsers(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Rightbox">
      <h2>Shopping List</h2>
      <h2>Searching here</h2>
      <input
        tyle="text"
        className="searchBar"
        name="name"
        onChange={(evt) => {
          setSearch(evt.target.value);
        }}
      />
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
          // <h5 key={item.id}>{item.title}</h5>
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
                  setInputarr([...inputarr, { name, marks }]);
                  localStorage.setItem("arr", JSON.stringify(inputarr));
                  setTotal(total + marks);
                  console.log(inputarr);
                }}
              >
                Add To Card-{item.id}
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
      <ToastContainer />
    </div>
  );
}
