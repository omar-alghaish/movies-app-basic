import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from "../css/navbar.css"

function Navebar({search}) {
  const onSearch=(word) =>{
    search(word)

  }
  return (
    <div className="navbarr">

      <div className="search">
        <i className="fa fa-search"></i>
        <input onChange={(e) => onSearch(e.target.value)} type="text" className="inputt" placeholder="ابحث" />
                <button className="buttonn">بحث</button>

      </div>
      
    </div>
  );
}


export default Navebar;