import React, {Component} from "react";
import {connect} from "react-redux";

import Header from "./header";


class Layout extends Component {

    render() {

        return (
            <div className="wrapper">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default connect()(Layout);
