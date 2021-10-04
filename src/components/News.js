import React, { Component } from "react";
import PropTypes from "prop-types";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    pageSize: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired,
    apiKey: PropTypes.string.isRequired,
  };
  static defaultProps = {
    pageSize: "6",
    category: "general",
    country: "in",
    apiKey: "abc",
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&category=${this.props.category}&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(40);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&category=${this.props.category}&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="my-5 text-center">{`NewsMonkey - Top ${this.capitalizeFirstLetter(
          this.props.category
        )} Headlines`}</h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults !== this.state.articles.length}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((article) => {
                return (
                  <div className="col-md-4" key={article.url}>
                    <NewItem
                      title={!article.title ? "" : article.title}
                      description={
                        !article.description ? "" : article.description
                      }
                      imageUrl={
                        article.urlToImage
                          ? article.urlToImage
                          : "https://static.toiimg.com/photo/86712611.cms"
                      }
                      newsUrl={article.url}
                      author={article.author ? article.author : "Unknown"}
                      publishedDate={article.publishedAt}
                      source={article.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
