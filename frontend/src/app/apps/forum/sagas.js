import "regenerator-runtime/runtime";
import { call, put, takeLatest } from "redux-saga/effects";

import * as constants from "./constants";
import * as rest from "app/utils/rest";


function* fetchTopics() {
    try {
      const topics = yield call(rest.get, "topics");
      yield put({type: constants.TOPICS_RETRIEVE_SUCCESS, payload: topics});
   } catch (e) {
      yield put({type: constants.TOPICS_RETRIEVE_ERROR, error: e.message});
   }
}

export default function* forumSaga() {
    yield takeLatest(constants.TOPICS_RETRIEVE_PENDING, fetchTopics);
}
