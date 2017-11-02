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
            <div className="topics">
                <div className="section-header topics--header">
                    <h1 className="section-header--title">Groupmate feed</h1>
                    <span className="section-header--info">
                        {topicsData.count} {pluralize("topic", topicsData.count)}
                    </span>
                </div>

                {this.props.topics.pending ?
                    <span>Loading...</span> :
                    <ul className="section-list topics--list">
                        {topicsData.results.map((topic) => {
                            return (
                                <li key={topic.id} className="topics--list--item">
                                    <div className="topics--list--item--name">
                                        <Link to={urls.posts.replace(":topicId", topic.id)}>{topic.name}</Link>
                                    </div>
                                    <div className="topics--list--item--posts-count">
                                        {topic.posts_count} {pluralize("post", topic.posts_count)}
                                    </div>
                                    {topic.latest_post ?
                                    <div className="topics--list--item--latest-post">
                                        <div>Latest post:</div>
                                        <div>{moment(topic.latest_post.created).format("D MMM YYYY")}</div>
                                        <div>{topic.latest_post.author_info.get_full_name}</div>
                                    </div> : null}
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
