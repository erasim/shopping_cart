import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Draggable from 'react-draggable';
import {BsVolumeUp } from "react-icons/bs";

export default function About() {
  return (
    <div className='about'>
      <h1>Welcome to My Shopping Cart</h1><br/>
      
    <Container>
      <Row>
      <Draggable>   
         <Col> <h2 >About Project</h2>
        <p>This project like a shopping website, Use all the functionality found on an e-commerce website in this project.</p>
       
        </Col>
      </Draggable>
    
        <Draggable><Col className='colcolore'><h2 >Features of this Project</h2>
        <p><BsVolumeUp/> Add to card </p>
        <p><BsVolumeUp/> Remove from card </p>
        <p><BsVolumeUp/> products full details </p>
        <p><BsVolumeUp/> Total of all Card products </p>
        <p><BsVolumeUp/> Payment of all card products </p>
        <p><BsVolumeUp/> Searching on keypress </p>
        <p><BsVolumeUp/> Products by Catagory </p>
        <p><BsVolumeUp/> Dragging in this About Page </p>
        </Col>
      </Draggable>
        
      </Row>
      <Row>
        <Draggable>
        <Col className='colcolore'><h2>Use Tech Skill</h2>
        <p><BsVolumeUp/> React </p>
        <p><BsVolumeUp/> Routing </p>
        <p><BsVolumeUp/> Redux </p>
        <p><BsVolumeUp/> React-Boostrap </p>
        <p><BsVolumeUp/> Razerpay </p>
        <p><BsVolumeUp/> React-draggable </p>
        <p><BsVolumeUp/> Google login</p>
        <p><BsVolumeUp/>  React-toastify</p>
        <p><BsVolumeUp/>  React-icons</p>
        
        </Col>
        </Draggable>
      
        <Draggable>
        <Col><h2>Why this Projects</h2>
       <p> I chose this project because it is more popular for people to sell items online.
         An e-commerce website is the most straightforward way to do this, I want to use my react skills to my project.</p>
        </Col>
          </Draggable>
      </Row>
    </Container>    
    </div>
  
  )
}
