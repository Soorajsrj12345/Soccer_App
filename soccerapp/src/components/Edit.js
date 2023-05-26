import {React,useEffect,useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Edit.css";
import axios from "axios";
import { Link,useParams,useNavigate } from "react-router-dom";

function Edit() {

  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [photo,setPhoto]=useState('')
  const [position,setPosition]=useState('')
  const [club,setClub]=useState('')
  const [nationality,setNationality]=useState('')
  const [foot,setFoot]=useState('')
  const [exact,setExact]=useState('')


//object fro hook
const params=useParams()

let location=useNavigate()

const fetchEmp= async ()=>{
const result=await axios.get('http://localhost:8000/getPlayer/'+params.id)

setId(result.data.player.id)
setName(result.data.player.name)
setAge(result.data.player.age)
setPhoto(result.data.player.photo)
setPosition(result.data.player.position)
setClub(result.data.player.club)
setNationality(result.data.player.nationality)
setFoot(result.data.player.foot)
setExact(result.data.player.exact)

}

const handleUpdate=async(e)=>{
  e.preventDefault()

  const body={
    id,
    name,
    age,
    photo,
    position,
    club,
    nationality,
    foot,
    exact

  }

  const result=await axios.post('http://localhost:8000/editPlayer',body)
 alert(result.data.message);

 location('/')
 
}

useEffect(()=>{
  fetchEmp()
},[])

  return (
    <div>

      
  <nav class="navbar navbar-expand-lg navbar-dark "  >
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


     <div>

     <Form className="p-5 mt-5 w-100 text-white   container">
      <h1 className="text-center" style={{fontWeight:'bolder',marginLeft:'-6rem'}}><i class="fa-solid fa-user-pen me-2 text-info"></i>Update data</h1>
<div className="content">
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control className=" cn rounded-pill" type="text"  placeholder="" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
  
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Age</Form.Label>
          <Form.Control className="rounded-pill" value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="" />
        </Form.Group>
  
</div>
<div className="content">
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Profile_Url</Form.Label>
          <Form.Control className=" cn rounded-pill" value={photo} onChange={(e)=>setPhoto(e.target.value)} type="text" placeholder="" />
        </Form.Group>
  
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Nationality</Form.Label>
          <Form.Control className="rounded-pill" value={nationality} onChange={(e)=>setNationality(e.target.value)} type="text" placeholder="" />
        </Form.Group>
  
</div>
<div className="content">
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Club</Form.Label>
          <Form.Control className=" cn rounded-pill" value={club} onChange={(e)=>setClub(e.target.value)} type="text" placeholder="" />
        </Form.Group>
  
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Position</Form.Label>
          <Form.Control className="rounded-pill" value={position} onChange={(e)=>setPosition(e.target.value)} type="text" placeholder="" />
        </Form.Group>
  
</div>        
<div className="content">
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Exact_pos</Form.Label>
          <Form.Control className=" cn rounded-pill" value={exact} onChange={(e)=>setExact(e.target.value)} type="text" placeholder="" />
        </Form.Group>
  
        <Form.Group className="w-50 mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Preferred_Foot</Form.Label>
          <Form.Control className="rounded-pill" value={foot} onChange={(e)=>setFoot(e.target.value)} type="text" placeholder="" />
        </Form.Group>
  
</div>

{/* <Link to={'/'}> */}
        <Button onClick={(e)=>handleUpdate(e)} variant="success"  style={{width:'10rem',borderRadius:'20%',fontWeight:'bolder',backgroundColor:'#5ddcff',marginLeft:'29rem'}} className=" mt-5 edit Button">Update</Button>{' '}
  
{/* </Link> */}

    </Form>

    </div>
    </div>
  )
}

export default Edit

