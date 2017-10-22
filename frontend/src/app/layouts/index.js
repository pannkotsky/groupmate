import React, {Component} from "react";
import {connect} from "react-redux";

import Footer from "./footer";
import Header from "./header";


class Layout extends Component {

    render() {

        return (
            <div className="wrapper">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default connect()(Layout);
