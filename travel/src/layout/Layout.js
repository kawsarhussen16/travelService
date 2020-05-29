import React, { Component } from "react";
import Footer from "../components/Footer";
class Layout extends Component {
  render() {
    return (
      <div>
        <div className="page_container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
