import {React,useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Row,Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import './Playercard.css'
import './View.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function View() {

  //state to store employee data
  const [Player,setPlayer]=useState({})

  const params=useParams()

  let location=useNavigate()



  const fetchPlayer= async ()=>{
    const result=await axios.get('http://localhost:8000/getPlayer/'+params.id)
    setPlayer(result.data.player);
  }    

  const handleDelete= async (id) => {
    const result=await axios.delete("http://localhost:8000/deletePlayer/"+id)
    alert(result.data.message)

    location('/')
  

    //to refresh that table content
    fetchPlayer()
  }
  

  
  useEffect(()=>{
    fetchPlayer()
  },[])
  

  return (
    <div>

        {/* <Card className="first m-5" style={{ width: '18rem'}}>
          <Card.Img variant="top" src={Player.photo} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
    
            </Card.Text>
          </Card.Body>
        </Card> */}
      
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


     
      <Row>
       <Col lg={4} md={6} className='p-5 text-center' >
       <Card className="first p-5" style={{ width: '18rem'}}>
             <Card.Img variant="top" src={Player.photo} />
             <Card.Body>
               <Card.Title></Card.Title>
               <Card.Text>
                  {Player.exact}
               </Card.Text>
             </Card.Body>
           </Card>

       </Col>

    <div  className='main container  '>
         <div className='second'>
         <div className='col bg-black text-center '>
         <p>{Player.name}</p>
         </div>
         <div className=' col bg-black '>
          <p> Age:- {Player.age}</p>
         </div>
         <div className='col bg-black '>
          <p> Nationality:-{Player.nationality}</p>

         </div>
         </div>

         <div className='third'>
         <div className='col bg-black text-center '>
         <p>Club:-{Player.club}</p>
         </div>
         <div className='col bg-black '>
          <p>Position:-{Player.position}</p>
         </div>
         <div className='col bg-black '>
          <p>Preferred_Foot:-{Player.foot}</p>
         </div>
         </div>

  
    </div>

     </Row> 

     <div className="edit text-start fs-4   ">
      <Link  style={{textDecoration:'none'}} to={'/edit/'+Player.id}>
      <Button variant="success" className="me-3 rounded-pills" style={{width:'10rem',backgroundColor:'#5ddcff',borderRadius:'20%',fontWeight:'bolder'}} > <i class="fa-solid fa-user-pen me-2"></i>Update Data
      </Button>{" "}
      </Link> 

        <Button onClick={()=>handleDelete(Player.id)} variant="danger" className='rounded-pills'  style={{width:'10rem',backgroundColor:'#5ddcff',borderRadius:'20%',fontWeight:'bolder'}}><i class="fa-solid fa-user-xmark me-2"></i>Delete Player
         </Button>{" "}
  
    </div>


   
    </div>
  )
}

export default View;

