import React from "react";
import PropTypes from "prop-types";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, publishedDate, source } =
    props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-dark">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://static-assets.bleacherreport.net/img/br_630_height.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(publishedDate).toUTCString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  newsUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

NewsItem.defaultProps = {
  title: "",
  description: "",
  imageUrl: "https://static.toiimg.com/photo/86712611.cms",
  newsUrl: "",
  author: "Unknown",
  publishedDate: "",
  source: "",
};

export default NewsItem;
