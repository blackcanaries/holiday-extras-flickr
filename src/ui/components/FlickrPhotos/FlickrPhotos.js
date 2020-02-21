import { Col, Layout, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";
import Masonry from "react-masonry-css";
import FlickrCard from "../FlickrCard/FlickrCard";
import "./FlickrPhotos.scss";

const { Content } = Layout;

const breakpoints = {
  default: 4,
  1024: 3,
  768: 2,
  500: 1
};

const FlickrPhotos = ({ photos }) => {
  return (
    <Content>
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 12, offset: 2 }}
          md={{ span: 16, offset: 4 }}
        >
          {photos && (
            <Masonry
              breakpointCols={breakpoints}
              className="masonry-grid"
              columnClassName="grid_column"
            >
              {photos.map(photo => (
                <FlickrCard key={photo.id} {...photo} />
              ))}
            </Masonry>
          )}
        </Col>
      </Row>
    </Content>
  );
};

FlickrPhotos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object)
};

export default FlickrPhotos;
