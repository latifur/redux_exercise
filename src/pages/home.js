import React, { Component } from "react";
import ShowAllPhone from "../component/showAllPhone";
import ShowAllRooms from "../component/showAllRooms";

export default class Home extends Component {
  render() {
    return (
      <>
        <ShowAllPhone />
        <ShowAllRooms />
      </>
    );
  }
}
