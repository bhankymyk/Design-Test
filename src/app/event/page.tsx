import React from "react";
import EventsSec from "../Components/Event/EventSection";
import SideBar from "../Components/Event/SideBar";

export default function page() {
  return (
    <div className="container-fluid">
      <div className="flex">

      <SideBar/>
      <EventsSec />
      </div>
    </div>
  );
}
