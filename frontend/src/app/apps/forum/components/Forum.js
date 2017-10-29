import React, {Component} from "react";
import {connect} from "react-redux";

import {retrieveTopics} from "../actions";


class Forum extends Component {
    componentWillMount() {
        this.props.retrieveTopics();
    }

    render() {
        return (
            <div className="topics">
                <ul>
                    {this.props.forum.topics.map((topic) => {
                        return (
                            <li key={topic.id}>{topic.name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        forum: state.get("forum").toJS()
    };
}


export default connect(mapStateToProps, {retrieveTopics})(Forum);
