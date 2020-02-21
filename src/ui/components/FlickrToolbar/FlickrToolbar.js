import { Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./FlickrToolbar.scss";

class FlickrToolbar extends React.Component {
  handleSearch = value => {
    this.props.handleSearch(value);
  };

  render() {
    const { title, total } = this.props;
    return (
      <div className="toolbar">
        <Row>
          <Col xs={{ span: 22, offset: 1 }} sm={{ span: 16, offset: 4 }}>
            <div className="toolbar-title">
              <h2>{title}</h2>
              {total > 0 && <span className="total">Found {total} photos</span>}
            </div>
            <SearchForm handleSearch={value => this.handleSearch(value)} />
          </Col>
        </Row>
      </div>
    );
  }
}

FlickrToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
};

export default FlickrToolbar;
