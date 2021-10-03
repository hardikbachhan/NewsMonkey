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
      totalResults: 0,
    };
  }

  // an async function waits for a promise to get resolved, that's why async and await are used.
  async componentDidMount() {
    // console.log("i am Component did mount method");  // run after render method is completed, state is set here.
    let url =
      `https://newsapi.org/v2/top-headlines?apiKey=bfe19d94037740b589a51d14fdb90001&category=general&country=in&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url); // returns a promise
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      loading: this.state.loading, // todo
      page: this.state.page,
      totalResults: parsedData.totalResults,
    });
    // console.log(this.state.page);
  }

  handlePrevClick = async () => {
    // console.log("next is clicked");
    // document.getElementById("next-button").classList.remove("disabled");
    let url = `https://newsapi.org/v2/top-headlines?apiKey=bfe19d94037740b589a51d14fdb90001&category=general&country=in&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url); // returns a promise
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      loading: this.state.loading,
      page: this.state.page - 1,
      totalResults: parsedData.totalResults,
    });
  };

  handleNextClick = async () => {
    // console.log("next is clicked");
    // if ((this.state.page + 1) > Math.ceil(this.state.totalResults / 20)){
    //   if (!document.getElementById("next-button").classList.contains("disabled")){
    //     document.getElementById("next-button").classList.add("disabled");
    //   }
    // }else{
    // document.getElementById("next-button").classList.remove("disabled");
    let url = `https://newsapi.org/v2/top-headlines?apiKey=bfe19d94037740b589a51d14fdb90001&category=general&country=in&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url); // returns a promise
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      loading: this.state.loading,
      page: this.state.page + 1,
      totalResults: parsedData.totalResults,
    });
    // console.log(this.state.page);
    // Checking if next page will be empty or not so as to disable next button.
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    //   document.getElementById("next-button").classList.add("disabled");
    // }
    // }
  };

  render() {
    // console.log("i am render method");           // rendered after constructor.
    return (
      <div className="container my-3">
        <h1 className="my-3 text-center">NewsMonkey - Top Headlines</h1>
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
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            id="next-button"
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
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
