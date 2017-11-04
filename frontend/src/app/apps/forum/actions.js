import * as constants from "./constants";


export function retrieveTopics() {
    return {
        type: constants.TOPICS_RETRIEVE_PENDING
    };
}

export function resetTopics() {
    return {
        type: constants.TOPICS_RESET
    };
}

export function retrieveTopicDetails(topicId) {
    return {
        type: constants.TOPIC_DETAILS_PENDING,
        payload: {
            topicId
        }
    };
}

export function resetTopicDetails() {
    return {
        type: constants.TOPIC_DETAILS_RESET
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

export function resetPosts() {
    return {
        type: constants.POSTS_RESET
    };
}

export function addPost(author, topic, text) {
    return {
        type: constants.POST_CREATE_PENDING,
        payload: {
            author,
            topic,
            text
        }
    };
}
