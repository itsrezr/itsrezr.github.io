import React, { Component } from "react";
import MyDesigns from "../Project Display/GraphicDesigns";
import "./components.css";

class Design extends Component {
  render() {
    return (
      <div>
        <div className="sectionPage" id="designs">
          <MyDesigns />
        </div>
      </div>
    );
  }
}

export default Design;
