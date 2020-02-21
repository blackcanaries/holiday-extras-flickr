import { Layout } from "antd";
import React from "react";
import "./FlickrHeader.scss";

const { Header } = Layout;

class FlickrHeader extends React.Component {
  render() {
    return (
      <Header className="main-header">
        <h1>
          <a href="/">Flickr Photo Stream</a>
        </h1>
      </Header>
    );
  }
}

export default FlickrHeader;
