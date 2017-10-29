import * as constants from "./constants";


export function retrieveTopics() {
    return {
        type: constants.TOPICS_RETRIEVE_PENDING
    };
}

export function retrievePosts(topicId) {
    return {
        type: constants.POSTS_RETRIEVE_PENDING,
        payload: {
            topicId
        }
    };
}

export function addPost(topicId) {
    return {
        type: constants.POST_CREATE_PENDING,
        payload: {
            topicId
        }
    };
}
