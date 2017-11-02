import "regenerator-runtime/runtime";
import { call, put, takeLatest } from "redux-saga/effects";

import * as constants from "./constants";
import * as rest from "app/utils/rest";


function *fetchTopics() {
    try {
        const topics = yield call(rest.get, "topics/");
        yield put({type: constants.TOPICS_RETRIEVE_SUCCESS, payload: topics});
    } catch (e) {
        yield put({type: constants.TOPICS_RETRIEVE_ERROR, error: e.message});
    }
}

function *fetchTopicDetails(action) {
    try {
        const topic = yield call(rest.get, `topics/${action.payload.topicId}`);
        yield put({type: constants.TOPIC_DETAILS_SUCCESS, payload: topic});
    } catch (e) {
        yield put({type: constants.TOPIC_DETAILS_ERROR, error: e.message});
    }
}

function *fetchPosts(action) {
    try {
        const posts = yield call(rest.get, "posts/", {topic: action.payload.topicId});
        yield put({type: constants.POSTS_RETRIEVE_SUCCESS, payload: posts});
    } catch (e) {
        yield put({type: constants.POSTS_RETRIEVE_ERROR, error: e.message});
    }
}

function *createPost(action) {
    try {
        const post = yield call(rest.post, "posts/", action.payload);
        yield put({type: constants.POST_CREATE_SUCCESS, payload: post});
    } catch (e) {
        yield put({type: constants.POST_CREATE_ERROR, error: e.message});
    }
}

export default function *forumSaga() {
    yield takeLatest(constants.TOPICS_RETRIEVE_PENDING, fetchTopics);
    yield takeLatest(constants.TOPIC_DETAILS_PENDING, fetchTopicDetails);
    yield takeLatest(constants.POSTS_RETRIEVE_PENDING, fetchPosts);
    yield takeLatest(constants.POST_CREATE_PENDING, createPost);
}
