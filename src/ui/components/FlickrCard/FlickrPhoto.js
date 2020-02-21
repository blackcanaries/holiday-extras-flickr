import { Spin } from "antd";
import PropTypes from "prop-types";
import React from "react";

const _loaded = {};

class FlickrPhoto extends React.Component {
  state = {
    loaded: _loaded[this.props.src]
  };

  static defaultProps = {
    className: "",
    loadingClassName: "photo-loading",
    loadedClassName: "photo-loaded"
  };

  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {
    let {
      className,
      loadedClassName,
      loadingClassName,
      onClick,
      src,
      alt
    } = this.props;

    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`;

    return (
      <React.Fragment>
        <img
          src={src}
          onClick={onClick}
          className={className}
          onLoad={this.onLoad}
          alt={alt}
        />
        <div className={className}>
          <Spin />
        </div>
      </React.Fragment>
    );
  }
}

FlickrPhoto.propTypes = {
  className: PropTypes.string.isRequired,
  loadedClassName: PropTypes.string.isRequired,
  loadingClassName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default FlickrPhoto;
