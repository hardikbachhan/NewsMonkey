import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewItem from './NewItem';

export class News extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="container my-3" >
                <h2 className="my-3" >NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-3">
                        <NewItem title="myTitle" description="myDesc" />    
                    </div>
                    <div className="col-md-3">
                        <NewItem title="myTitle" description="myDesc" />    
                    </div>
                    <div className="col-md-3">
                        <NewItem title="myTitle" description="myDesc" />    
                    </div>
                    <div className="col-md-3">
                        <NewItem title="myTitle" description="myDesc" />    
                    </div>
                    <div className="col-md-3">
                        <NewItem title="myTitle" description="myDesc" />    
                    </div>
                    <div className="col-md-3">
                        <NewItem title="myTitle" description="myDesc" />    
                    </div>
                    <div className="col-md-3">
                        <NewItem title="myTitle" description="myDesc" />    
                    </div>
                </div>
            </div>
        )
    }
}

export default News
