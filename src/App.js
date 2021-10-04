import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  pageSize = "6";

  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />

          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                category="general"
                country="in"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                category="business"
                country="in"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                category="entertainment"
                country="in"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                category="health"
                country="in"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                category="science"
                country="in"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                category="sports"
                country="in"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                category="technology"
                country="in"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
