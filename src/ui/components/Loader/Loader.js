import { Spin } from "antd";
import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loading">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
