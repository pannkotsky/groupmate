import React from "react";
import {IndexRedirect, Route} from "react-router";

import RouteNotFound from "app/components/RouteNotFound";
import Topics from "app/apps/forum/components/Topics";
import Posts from "app/apps/forum/components/Posts";
import Layout from "app/layouts";


export const urls = {
    topics: "/topics",
    posts: "/topics/:topicId/posts"
};


const routes = (
    <Route path="/" component={Layout}>
        <IndexRedirect to={urls.topics}/>
        <Route path={urls.topics} component={Topics}/>
        <Route path={urls.posts} component={Posts}/>
        <Route path="*" component={RouteNotFound}/>
    </Route>
);

export default routes;
