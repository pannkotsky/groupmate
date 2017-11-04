import React, {Component} from "react";
import {connect} from "react-redux";
import pluralize from "pluralize";
import moment from "moment";
import autoBind from "react-autobind";

import {retrieveTopicDetails, retrievePosts, addPost, resetPosts, resetTopicDetails} from "../actions";
import Form from "app/components/Form";


class Posts extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentWillMount() {
        this.props.retrieveTopicDetails(this.props.params.topicId);
        this.retrievePosts();
    }

    componentWillUnmount() {
        this.props.resetPosts();
        this.props.resetTopicDetails();
    }

    retrievePosts() {
        this.props.retrievePosts(this.props.params.topicId);
    }

    addPost(text) {
        this.props.addPost(window.django.user.id, this.props.params.topicId, text);
    }

    render() {
        const topicData = this.props.topicDetails.data;
        const postsData = this.props.posts.data;
        return (
            <div className="posts content-container">
                <div className="section-header posts--header">
                    <div>
                        <h1 className="section-header--title">{topicData.name}</h1>
                    </div>
                    <div className="section-header--info">
                        {postsData.count} {pluralize("post", postsData.count)}
                    </div>
                </div>

                <div className="posts--form">
                    <Form
                        submit={this.addPost}
                        placeholder={"Add your post here..."}
                        buttonText={"Submit"}
                    />
                </div>

                <ul className="section-list posts--list">
                    {postsData.results.map((post) => {
                        return (
                            <li key={post.id} className="posts--list--item">
                                <div className="posts--list--item--text">{post.text}</div>
                                <div className="section-list--item--post-info">
                                    <div>{moment(post.created).format("D MMM YYYY HH:mm")}</div>
                                    {post.author_info ? <div>{post.author_info.get_full_name}</div> : null}
                                </div>
                            </li>
                        );
                    })}
                    {this.props.posts.pending && <span>Loading...</span>}
                    {postsData.next && !this.props.posts.pending ?
                        <div className="section--load-more" onClick={this.retrievePosts}>
                            Load more...
                        </div> :
                        null}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        topicDetails: state.getIn(["forum", "topicDetails"]).toJS(),
        posts: state.getIn(["forum", "posts"]).toJS()
    };
}


export default connect(mapStateToProps, {
    retrieveTopicDetails,
    retrievePosts,
    addPost,
    resetPosts,
    resetTopicDetails
})(Posts);
