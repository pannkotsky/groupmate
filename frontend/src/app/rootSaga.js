import {all} from "redux-saga/effects";

import forumSaga from "app/apps/forum/sagas";


export default function* rootSaga() {
    yield all([
        forumSaga()
    ]);
}
