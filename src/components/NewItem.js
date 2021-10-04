import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    newsUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  };
  static defaultProps = {
    title: "",
    description: "",
    imageUrl: "https://static.toiimg.com/photo/86712611.cms",
    newsUrl: "",
    author: "Unknown",
    publishedDate: "",
    source: "",
  };

  //   constructor(){
  //       super();       // called in order to add contents in constructor of Component class.
  //       console.log("i am the constructor in news item.");    // constructor here will run equal to news item times.
  //   }

  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedDate,
      source,
    } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-dark"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
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
              {" "}
              {/** _blank opens link in new tab. */}
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
