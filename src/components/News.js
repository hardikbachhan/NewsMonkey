import React, { Component } from "react";
import PropTypes from "prop-types";
import NewItem from "./NewItem";

export class News extends Component {
  static propTypes = {};

  constructor() {
    super();
    // console.log("i am the constructor in news item.");   //rendered first in we app.
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // an async function waits for a promise to get resolved, that's why async and await are used.
  async componentDidMount() {
    // console.log("i am Component did mount method");  // run after render method is completed, state is set here.
    let url =
      "https://newsapi.org/v2/top-headlines?apiKey=bfe19d94037740b589a51d14fdb90001&category=general&country=in&page=" +
      this.state.page;
    let data = await fetch(url); // returns a promise
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: true,
    });
  }

  handlePrevClick() {
    this.setState();
  }

  handleNextClick() {
    console.log("next is clicked");
  }

  render() {
    // console.log("i am render method");           // rendered after constructor.
    return (
      <div className="container my-3">
        <h1 className="my-3">NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-3" key={article.url}>
                {" "}
                {/** Key is added to element which is to be returned. */}
                <NewItem
                  title={!article.title ? "" : article.title.slice(0, 45)}
                  description={
                    !article.description ? "" : article.description.slice(0, 88)
                  }
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page<=1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
