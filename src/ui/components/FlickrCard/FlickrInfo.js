import { Tag, Tooltip } from "antd";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import React from "react";

const FlickrInfo = ({ id, description, owner, ownername, tags, title }) => {
  const tagsArray = tags !== "" ? tags.split(" ") : null;

  return (
    <div className="photo-info">
      <h3>
        <a
          href={`https://www.flickr.com/photo.gne?id=${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title ? title : "Untitled"}
        </a>
      </h3>
      <p>
        by{" "}
        <a
          className="author"
          href={`https://www.flickr.com/photos/${owner}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ownername}
        </a>
      </p>

      {description._content && (
        <React.Fragment>
          <h4>DESCRIPTION</h4>
          <p className="desc">{parse(description._content)}</p>
        </React.Fragment>
      )}
      {tagsArray && (
        <React.Fragment>
          <h4>TAGS</h4>
          {tagsArray.map(
            (tag, i) =>
              i < 2 && (
                <Tag key={i} color="#2ea1f8">
                  <a href={`/search/${tag}`}>{tag}</a>
                </Tag>
              )
          )}
          {tagsArray.length > 2 && (
            <Tooltip placement="top" title={tags.replace(" ", " / ")}>
              <Tag color="#2ea1f8">{`+${tagsArray.length - 2}`}</Tag>
            </Tooltip>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

FlickrInfo.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  owner: PropTypes.string.isRequired,
  ownername: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default FlickrInfo;
