import React, {Component} from "react";
import {Link} from "react-router";

import {urls} from "app/routes";


class Header extends Component {
    render() {

        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to={urls.topics}>Groupmate</Link>
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
                                      <span className="glyphicon glyphicon-log-out"/> Log out
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
