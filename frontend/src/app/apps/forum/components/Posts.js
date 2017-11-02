import React, {Component} from "react";
import {connect} from "react-redux";
import pluralize from "pluralize";
import moment from "moment";

import {retrieveTopicDetails, retrievePosts, addPost} from "../actions";
import Form from "app/components/Form";


class Posts extends Component {
    componentWillMount() {
        const topicId = this.props.params.topicId;
        this.props.retrieveTopicDetails(topicId);
        this.props.retrievePosts(topicId);
    }

    render() {
        const topicData = this.props.topicDetails.data;
        const postsData = this.props.posts.data;
        return (
            <div className="posts">
                <div className="section-header posts--header">
                    <h1 className="section-header--title">{topicData.name}</h1>
                    <span className="section-header--info">
                        {topicData.posts_count} {pluralize("post", topicData.posts_count)}
                    </span>
                </div>

                {this.props.posts.pending ?
                    <span>Loading...</span> :
                    <ul className="section-list posts--list">
                        {postsData.results.map((post) => {
                            return (
                                <li key={post.id} className="posts--list--item">
                                    <div className="posts--list--item--text">{post.text}</div>
                                    <div>{moment(post.created).format("D MMM YYYY")}</div>
                                    {post.author_info ? <div>{post.author_info.get_full_name}</div> : null}
                                </li>
                            );
                        })}
                    </ul>
                }
                <div className="posts--form">
                    <Form
                        submit={(text) => this.props.addPost(window.django.user.id, this.props.params.topicId, text)}
                        placeholder={"Add your post here..."}
                        buttonText={"Submit"}
                    />
                </div>
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


export default connect(mapStateToProps, {retrieveTopicDetails, retrievePosts, addPost})(Posts);
