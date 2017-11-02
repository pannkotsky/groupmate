import React, {Component} from "react";
import {Link} from "react-router";

import {urls} from "app/routes";
import stylesheets from "app/stylesheets/header.less"; //eslint-disable-line no-unused-vars


class Header extends Component {
    render() {

        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to={urls.topics}>
                                <img src={window.django.urls.staticRoot + "logo.png"}/>
                            </Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                              <li>
                                  <a href="#">{window.django.user.full_name}</a>
                              </li>
                              <li>
                                  <a href={window.django.urls.change_password}>
                                      Change password
                                  </a>
                              </li>
                              <li>
                                  <a href={window.django.urls.logout}>
                                      Logout
                                  </a>
                              </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
