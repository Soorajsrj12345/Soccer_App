
import { React, useState, useEffect } from "react";
import "./Admin.css";
import PlayerCard from "./PlayerCard";
import Card from 'react-bootstrap/Card';

import axios from "axios";
import { Link,useNavigate,useParams } from "react-router-dom";
import { Row,Col } from "react-bootstrap";

function  ViewPlayers() {
  const [Player, setPlayers] = useState([]);
  const [searchkey, setsearchkey] = useState("");


  const params=useParams()

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/viewPlayers/" +params.id);
    setPlayers(result.data.player);
  };

  console.log(Player);
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
            <a class="nav-link active" href="/"> SPORT X         
            <span class="visually-hidden">(current)</span>
          </a>
           </strong>       
         </h1>
        </li>
      </ul>

      <div className="text-start fs-4 ">
       <Link to={"/add"} style={{textDecoration:'none'}}>
       <a class="nav-link text-white m-3" href="#"><i class="fa-solid fa-user-plus me-1"></i>Add Player</a>
       </Link>
    </div>

      <form class="d-flex">
        <input class="form-control me-sm-2 rounded-pill" type="search"  placeholder="Search" onChange={(e)=>setsearchkey(e.target.value)} />
      </form>
    </div>
  </div>
</nav>

          
<Row>

{Player?.filter((val)=>{
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

export default ViewPlayers;



