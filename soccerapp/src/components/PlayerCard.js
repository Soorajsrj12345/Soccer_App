import React from "react";
import './Playercard.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function PlayerCard({playerdata}) {
  return (
    <>
       <Link to={`/view/${playerdata.id}`} style={{textDecoration:'none'}}>
        <Card className="first card" style={{ width: '18rem'}}>
          <Card.Img variant="top" src={playerdata.photo} />
          <Card.Body>
            <Card.Title><b>{playerdata.name}</b></Card.Title>
            <Card.Text>
            <p> {playerdata.exact}</p>
            </Card.Text>
          </Card.Body>
        </Card>

      </Link>   
  </>
  );
}

export default PlayerCard;
