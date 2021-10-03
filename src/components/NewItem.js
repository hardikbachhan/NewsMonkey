import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewItem extends Component {
  static propTypes = {};

  //   constructor(){
  //       super();       // called in order to add contents in constructor of Component class.
  //       console.log("i am the constructor in news item.");    // constructor here will run equal to news item times.
  //   }

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card">
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
