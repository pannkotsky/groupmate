import React, {Component} from "react";
import {Provider} from "react-redux";
import {Router} from "react-router";

import stylesheets from "app/stylesheets/index.less"; //eslint-disable-line no-unused-vars
import configureStore, {sagaMiddleware} from "app/configureStore";
import history from "app/history";
import routes from "app/routes";
import rootSaga from "app/rootSaga";


const store = configureStore();
sagaMiddleware.run(rootSaga);


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}

export default Root;
