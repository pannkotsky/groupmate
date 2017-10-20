import React from "react";
import {IndexRedirect, Route} from "react-router";

import Admin from "app/layouts/Admin";
import RouteNotFound from "app/components/RouteNotFound";
import users from "app/users/urls";
import Forum from "app/forum/components/Forum";


const urls = (
    <Route path="/">
        <IndexRedirect to="forum"/>
        <Route component={Admin} path="admin">
            <IndexRedirect to="users"/>
            {users}
            <Route path="*" component={RouteNotFound}/>
        </Route>
        <Route path="/forum" component={Forum}/>
    </Route>
);

export default urls;
