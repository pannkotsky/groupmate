import {fromJS, List} from "immutable";

import * as constants from "./constants";


const defaultState = fromJS({
    topics: [],
    topicsPending: false,
    topicsError: null
});


export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.TOPICS_RETRIEVE_PENDING:
            return state.merge({
                "topicsPending": true,
                "topics": List(),
                "topicsError": null
            });
        case constants.TOPICS_RETRIEVE_SUCCESS:
            return state.merge({
                "topicsPending": false,
                "topics": action.payload.data.results,
                "topicsError": null
            });
        case constants.TOPICS_RETRIEVE_ERROR:
            return state.merge({
                "topicsPending": false,
                "topics": List(),
                "topicsError": action.payload.error
            });
        default:
            return state;
    }
}