import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./Admin.css";
import PlayerCard from "./PlayerCard";
import Card from 'react-bootstrap/Card';

import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { Row,Col } from "react-bootstrap";

function Admin() {
  const [allPlayer, setAllPlayers] = useState([]);
  const [searchkey, setsearchkey] = useState("");

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/allPlayer");
    setAllPlayers(result.data.player);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <div>  

      
      <nav class="navbar navbar-expand-lg navbar-dark "  >
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <h1> 
            <strong>
            <a class="nav-link active " href="/"> SPORT X         
            <span class="visually-hidden">(current)</span>
          </a>
           </strong>       
         </h1>
        </li>
      </ul>

      <div className="text-end fs-4 ">
       <Link to={"/add"} style={{textDecoration:'none'}}>
       <a class="nav-link text-white m-3" href="#"><i class="fa-solid fa-user-plus fa-shake me-1 text-info"></i>Add Player</a>
       </Link>
    </div>

      <form class="d-flex">
        <input type="text" className="form-control me-sm-2 rounded-pill" placeholder="Search player" onChange={(e)=>setsearchkey(e.target.value)}/>
   

      </form>
    </div>
  </div>
</nav>

   <div 
      className='banner'
      style={{
        backgroundSize:'cover',
        backgroundImage:`url(https://i.postimg.cc/g08V6rJS/soccer.jpg)`
      }}
      >
        {/* <div className="icon">
        <i class=" icons fa-solid fa-futbol fa-bounce fs-1 text-black"></i>

        </div> */}

    </div>

     <div className=" mt-2 me-5 " style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
  <Link to={"/viewplayers/" +1}>
       <Button variant=""  className="new m-3 p-3   ">Strikers</Button>{' '}
  
  </Link>  
  <Link to={"/viewplayers/" +2}>
        <Button variant="" className=" new btn m-3 p-3 ">Defenders</Button>{' '}
  
  </Link>     
   <Link to={"/viewplayers/" +3}>
     <Button variant="" className=" new m-3 p-3 ">Midfielders</Button>{' '}
  
   </Link>   
   <Link to={"/viewplayers/" +4}>
     <Button variant="" className=" new btn m-3 p-3 ">GoalKeepers</Button>{' '}
  
    </Link>    
     </div>
          
        <Row>

            {allPlayer?.filter((val)=>{
              if(searchkey==""){
                return val
              }
              else if(
                val.name.toLowerCase().includes(searchkey.toLowerCase())){
                  return val
                }}). map((item, index) => (
                  <Col className="p-5" lg={4} md={6} >
                  <PlayerCard playerdata={item}></PlayerCard>
  
                 </Col>
                          
                  ))}
  
            
        </Row>   

 </div>
  );
}

export default Admin;



