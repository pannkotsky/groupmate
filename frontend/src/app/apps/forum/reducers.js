import {fromJS} from "immutable";

import * as constants from "./constants";


const defaultState = fromJS({
    topics: {
        data: {
            results: [],
            count: 0,
            previous: null,
            next: null
        },
        pending: false,
        error: null
    },

    topicDetails: {
        data: {
            name: ""
        },
        pending: false,
        error: null
    },

    posts: {
        data: {
            results: [],
            count: 0,
            previous: null,
            next: null
        },
        pending: false,
        error: null
    }
});


function handlePending(state, dataType) {
    return state.set(dataType, fromJS({
        "pending": true,
        "data": defaultState.getIn([dataType, "data"]),
        "error": null
    }));
}


function handleSuccess(state, dataType, action) {
    return state.set(dataType, fromJS({
        "pending": false,
        "data": action.payload.data,
        "error": null
    }));
}


function handleError(state, dataType, action) {
    return state.set(dataType, fromJS({
        "pending": false,
        "data": defaultState.getIn([dataType, "data"]),
        "error": action.payload.error
    }));
}


function handleNewItem(state, dataType, action) {
    const newItems = state.getIn([dataType, "data", "results"]).unshift(fromJS(action.payload.data));
    return state.setIn([dataType, "data", "results"], newItems);
}


export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.TOPICS_RETRIEVE_PENDING:
            return handlePending(state, "topics");
        case constants.TOPICS_RETRIEVE_SUCCESS:
            return handleSuccess(state, "topics", action);
        case constants.TOPICS_RETRIEVE_ERROR:
            return handleError(state, "topics", action);

        case constants.TOPIC_DETAILS_PENDING:
            return handlePending(state, "topicDetails");
        case constants.TOPIC_DETAILS_SUCCESS:
            return handleSuccess(state, "topicDetails", action);
        case constants.TOPIC_DETAILS_ERROR:
            return handleError(state, "topicDetails", action);

        case constants.POSTS_RETRIEVE_PENDING:
            return handlePending(state, "posts");
        case constants.POSTS_RETRIEVE_SUCCESS:
            return handleSuccess(state, "posts", action);
        case constants.POSTS_RETRIEVE_ERROR:
            return handleError(state, "posts", action);

        case constants.POST_CREATE_SUCCESS:
            return handleNewItem(state, "posts", action);
        default:
            return state;
    }
}