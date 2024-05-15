import React from "react";
import Nav from "../Components/AfroShipper/Nav";
import SideBar from "../Components/AfroShipper/SideBar ";

export default function page() {
  return (
    <div className="container-fluid">
      <div className="flex">
        <SideBar/>
        <Nav/>
      </div>
    </div>
  );
}
