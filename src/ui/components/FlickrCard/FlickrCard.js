import PropTypes from "prop-types";
import React from "react";
import LazyLoad from "react-lazy-load";
import "./FlickrCard.scss";
import FlickrInfo from "./FlickrInfo";
import CardPhoto from "./FlickrPhoto";

class FlickrCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { id, title, url_n } = this.props;

    return (
      <div
        className={`card${this.state.hover ? " animate" : ""}`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="card-content">
          {url_n && (
            <div className="photo-container">
              <LazyLoad>
                <CardPhoto src={url_n} alt={title} />
              </LazyLoad>
              <div className="photo_overlay"></div>
              <a
                href={`https://www.flickr.com/photo.gne?id=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view_details"
              >
                View on Flickr
              </a>
            </div>
          )}
          <FlickrInfo {...this.props} />
        </div>
      </div>
    );
  }
}

FlickrCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url_n: PropTypes.string.isRequired
};

export default FlickrCard;
