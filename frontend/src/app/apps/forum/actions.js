import * as constants from "./constants";


export function retrieveTopics() {
    return {
        type: constants.TOPICS_RETRIEVE_PENDING
    };
}
