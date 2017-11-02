import React, {Component} from "react";
import {connect} from "react-redux";
import pluralize from "pluralize";
import {Link} from "react-router";
import moment from "moment";

import {retrieveTopics} from "../actions";
import {urls} from "app/routes";


class Topics extends Component {
    componentWillMount() {
        this.props.retrieveTopics();
    }

    render() {
        const topicsData = this.props.topics.data;
        return (
            <div className="topics content-container">
                <div className="section-header topics--header">
                    <div>
                        <h1 className="section-header--title">Groupmate feed</h1>
                    </div>
                    <div className="section-header--info">
                        {topicsData.count} {pluralize("topic", topicsData.count)}
                    </div>
                </div>

                {this.props.topics.pending ?
                    <span>Loading...</span> :
                    <ul className="section-list topics--list">
                        {topicsData.results.map((topic) => {
                            return (
                                <li key={topic.id} className="section-list--item">
                                    <Link to={urls.posts.replace(":topicId", topic.id)}>
                                        <div className="section-list--item--top-row">
                                            <div className="topics--list--item--name">
                                                <h4>{topic.name}</h4>
                                            </div>
                                            <div className="topics--list--item--posts-count">
                                                {topic.posts_count} {pluralize("post", topic.posts_count)}
                                            </div>
                                        </div>
                                        {topic.latest_post ?
                                        <div className="section-list--item--post-info">
                                            <div>Latest post:</div>
                                            <div>{moment(topic.latest_post.created).format("D MMM YYYY HH:mm")}</div>
                                            <div className="topics--list--item--latest-post--author">
                                                {topic.latest_post.author_info.get_full_name}
                                            </div>
                                        </div> : null}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        topics: state.getIn(["forum", "topics"]).toJS()
    };
}


export default connect(mapStateToProps, {retrieveTopics})(Topics);
