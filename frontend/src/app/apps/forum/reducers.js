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
    return state.setIn([dataType, "pending"], true);
}


function handleSuccessDetails(state, dataType, action) {
    return state
        .setIn([dataType, "pending"], false)
        .setIn([dataType, "error"], null)
        .setIn([dataType, "data"], fromJS(action.payload.data));
}


function handleSuccessList(state, dataType, action) {
    const oldItems = state.getIn([dataType, "data", "results"]);
    const newItems = oldItems.concat(fromJS(action.payload.data.results));
    const newData = fromJS(action.payload.data).set("results", newItems);
    return state
        .setIn([dataType, "pending"], false)
        .setIn([dataType, "error"], null)
        .setIn([dataType, "data"], newData);
}


function handleError(state, dataType, action) {
    return state
        .setIn([dataType, "error"], action.payload.error)
        .setIn([dataType, "pending"], false);
}


function handleReset(state, dataType) {
    return state.set(dataType, defaultState.get(dataType));
}


function handleNewItem(state, dataType, action) {
    const oldItems = state.getIn([dataType, "data", "results"]);
    const newItems = oldItems.unshift(fromJS(action.payload.data));
    const newCount = state.getIn([dataType, "data", "count"]) + 1;
    return state
        .setIn([dataType, "data", "results"], newItems)
        .setIn([dataType, "data", "count"], newCount);
}


export default function(state = defaultState, action) {
    switch (action.type) {
        case constants.TOPICS_RETRIEVE_PENDING:
            return handlePending(state, "topics");
        case constants.TOPICS_RETRIEVE_SUCCESS:
            return handleSuccessList(state, "topics", action);
        case constants.TOPICS_RETRIEVE_ERROR:
            return handleError(state, "topics", action);
        case constants.TOPICS_RESET:
            return handleReset(state, "topics");

        case constants.TOPIC_DETAILS_PENDING:
            return handlePending(state, "topicDetails");
        case constants.TOPIC_DETAILS_SUCCESS:
            return handleSuccessDetails(state, "topicDetails", action);
        case constants.TOPIC_DETAILS_ERROR:
            return handleError(state, "topicDetails", action);
        case constants.TOPIC_DETAILS_RESET:
            return handleReset(state, "topicDetails");

        case constants.POSTS_RETRIEVE_PENDING:
            return handlePending(state, "posts");
        case constants.POSTS_RETRIEVE_SUCCESS:
            return handleSuccessList(state, "posts", action);
        case constants.POSTS_RETRIEVE_ERROR:
            return handleError(state, "posts", action);
        case constants.POSTS_RESET:
            return handleReset(state, "posts");

        case constants.POST_CREATE_SUCCESS:
            return handleNewItem(state, "posts", action);
        case constants.POST_CREATE_ERROR:
            return handleError(state, "posts", action);

        default:
            return state;
    }
}