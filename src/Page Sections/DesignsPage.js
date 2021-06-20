import React, { Component } from "react";
import MyDesigns from "../Project Display/GraphicDesigns";
import "../Page Sections CSS/DesignsPage.css";

class Design extends Component {
  render() {
    return (
      <div>
        <div className="sectionPage" id="Designs">
          <MyDesigns />
        </div>
      </div>
    );
  }
}

export default Design;
