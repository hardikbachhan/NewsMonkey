import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewItem extends Component {
  static propTypes = {};

  render() {
    let { title, description } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetials" className="btn btn-primary">
              Keep on Reading...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
