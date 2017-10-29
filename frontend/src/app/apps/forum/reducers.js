import {fromJS} from "immutable";

import * as constants from "./constants";


const defaultState = fromJS({
    topicsData: {
        results: [],
        count: 0,
        previous: null,
        next: null
    },
    topicsPending: false,
    topicsError: null
});


export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.TOPICS_RETRIEVE_PENDING:
            return state.merge({
                "topicsPending": true,
                "topicsData": defaultState.get("topicsData"),
                "topicsError": null
            });
        case constants.TOPICS_RETRIEVE_SUCCESS:
            return state.merge({
                "topicsPending": false,
                "topicsData": action.payload.data,
                "topicsError": null
            });
        case constants.TOPICS_RETRIEVE_ERROR:
            return state.merge({
                "topicsPending": false,
                "topicsData": defaultState.get("topicsData"),
                "topicsError": action.payload.error
            });
        default:
            return state;
    }
}