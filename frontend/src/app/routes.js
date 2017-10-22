import React from "react";
import {IndexRedirect, Route} from "react-router";

import RouteNotFound from "app/components/RouteNotFound";
import Forum from "app/apps/forum/components/Forum";
import Layout from "app/layouts";


export const urls = {
    forum: "/forum"
};


const routes = (
    <Route path="/" component={Layout}>
        <IndexRedirect to={urls.forum}/>
        <Route path={urls.forum} component={Forum}/>
        <Route path="*" component={RouteNotFound}/>
    </Route>
);

export default routes;
