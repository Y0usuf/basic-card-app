import React, { Component } from "react";
import Card from "./Card";
import "../../assets/css/card.css";

export default class Cards extends Component {
  render() {
    return (
      <>
        <Card />
        <Card />
        <Card />
      </>
    );
  }
}
