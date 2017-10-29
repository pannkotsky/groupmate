import React, {Component} from "react";
import {connect} from "react-redux";
import pluralize from "pluralize";

import {retrievePosts, addPost} from "../actions";


class Posts extends Component {
    render() {
        return (
            <div className="posts">Posts for topic {this.props.params.topicId}</div>
        );
    }
}


export default connect(null, {retrievePosts, addPost})(Posts);
