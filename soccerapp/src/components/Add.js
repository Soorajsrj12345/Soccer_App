import {React,useEffect,useState } from "react";
import "./Admin.css";
import "./Add.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from "react-uuid";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";


function Add() {

  const [id,setId]=useState('')
  const [name,setname]=useState('')
  const [age,setAge]=useState('')
  const [photo,setPhoto]=useState('')
  const [position,setPosition]=useState('')
  const [club,setClub]=useState('')
  const [nationality,setNationality]=useState('')
  const [foot,setFoot]=useState('')
  const [exact,setExact]=useState('')

  const[sort,setSortId]=useState('')


  useEffect(()=>{
   setId(uuid().slice(0,3)) 
  },[])

  const sid=(un)=>{
    if(un=="Striker"){
      setSortId("1")
    }
    else if(un=="Defender"){
     setSortId("2")
    }
    else if(un=="Midfielder"){
      setSortId("3")
     }
     else if(un=="Goalkeeper"){
      setSortId("4")
     }

 
  }
  
//create an object for the hook
let location=useNavigate()


  const addPlayer=async(e)=>{
    e.preventDefault()

    setId(uuid().slice(0,3));
    const body={
      id,
      name,
      age,
      photo,
      position,
      club,
      nationality,
      foot,
      exact,
      sort
      }
    const result=await axios.post('http://localhost:8000/addPlayer',body)
    alert(result.data.message)
    console.log(result.data.message);

    //redirect to home page
    location('/')
    
  }

  return (
    <div>

<nav class=" navbar navbar-expand-lg navbar-dark "  >
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <h1> 
            <strong>
            <a class="nav-link active" href="/"> SPORT X         
            <span class="visually-hidden">(current)</span>
          </a>
           </strong>       
         </h1>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <Form className="p-5 mt-5 w-100 container text-center ">
<div className="frm">
         <h1 className="text-white text-center  " style={{fontWeight:'bolder',marginLeft:'-8rem'}}><i class="fa-solid fa-user-plus me-1 text-info"></i>Add Player</h1> 
  <div className="content ">
          <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlInput1"> 
            <Form.Label></Form.Label>
            <Form.Control className="cn rounded-pill " onChange={(e)=>setname(e.target.value)} type="text" placeholder="Name" />
          </Form.Group>
    
          <Form.Group className=" w-50 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control className=" cn rounded-pill" onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Age" />
          </Form.Group>
    
  </div> 
  <div className="content">
          <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control className=" cn rounded-pill" onChange={(e)=>setPhoto(e.target.value)} type="text" placeholder="Profile_Url" />
          </Form.Group>
    
          <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control className=" cn rounded-pill" onChange={(e)=>setNationality(e.target.value)} type="text" placeholder="Nationality" />
          </Form.Group>
    
  </div>
  <div className="content">
          <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control className=" cn rounded-pill" onChange={(e)=>setClub(e.target.value)} type="text" placeholder="Club" />
          </Form.Group>
    
          <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control className=" cn rounded-pill" onChange={(e)=>(e.target.value)?setPosition(e.target.value) || sid(e.target.value) : setPosition(e.target.value)} type="text" placeholder="Position" />
          </Form.Group>
    
  </div>        
  <div className="content">
          <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control className=" cn rounded-pill" onChange={(e)=>setExact(e.target.value)} type="text" placeholder="Exact_pos" />
          </Form.Group>
    
          <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control className="cn rounded-pill" onChange={(e)=>setFoot(e.target.value)} type="text" placeholder="Preferred_Foot" />
          </Form.Group>
    
  </div>
    
  
  
        <Button className=" rounded-pill mt-5 me-5  "  style={{width:'10rem',backgroundColor:'#5ddcff',borderRadius:'20%',fontWeight:'bolder',marginLeft:'-6rem'}} onClick={(e)=>addPlayer(e)} variant="success">Add</Button>{' '}
  
  <Link to={'/'}>
          <Button variant="warning"  style={{width:'10rem',backgroundColor:'#5ddcff',borderRadius:'20%',fontWeight:'bolder',marginLeft:'rem'}}className="me-5 mt-5 rounded-pill">Cancel</Button>{' '}
    
  </Link>
  
  
</div>  

  </Form>

    </div>
  );
}

export default Add;


