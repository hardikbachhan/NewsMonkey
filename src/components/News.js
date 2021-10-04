import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    // will run only once for page 1.
    updateNews(); // this will be the effect run
    // no cleanup done here
    //eslint-disable-next-line
  }, []); // when input specified in array, on change in it, this useEffect hook will run.

  // const componentDidMount = async () => {   // useEffect will do the work of componentDidMount
  // }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=${page + 1}&pageSize=${props.pageSize}`;
    // updating value of page takes some time as it is an async function, due to which incorrect
    // page value is used in url and same data gets fetched twice, to remove this error, 
    // setPage is used below url and page number in url is set manually.
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        style={{ margin: "35px 0px", marginTop: "90px" }}
        className="text-center"
      >{`NewsMonkey - Top ${capitalizeFirstLetter(
        props.category
      )} Headlines`}</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={totalResults !== articles.length}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => {
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
};

News.propTypes = {
  pageSize: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
};

News.defaultProps = {
  pageSize: "6",
  category: "general",
  country: "in",
  apiKey: "abc",
};

export default News;
