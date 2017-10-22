import React from "react";
import {
    Body,
    Header,
    Title,
    Tools,
    Wrapper
} from "./AdminBox";

import LinkedListGroup from "app/components/LinkedListGroup";
import Pagination from "app/components/Pagination";
import RefreshButton from "app/components/RefreshButton";
import SearchBox from "app/components/SearchBox";


class MasterBox extends React.Component {
    render() {
        const {collection, CreateForm, QueryForm} = this.props;

        return (
            <Wrapper>
                <Header>
                    <Title>{collection.title}</Title>
                    <Tools>
                        <SearchBox {...this.props}/>
                    </Tools>
                </Header>
                <Body>
                    <LinkedListGroup {...this.props}/>
                    <div className="text-center">
                        <CreateForm {...this.props}/>
                        <RefreshButton {...this.props}/>
                        <QueryForm {...this.props}/>
                    </div>
                    <Pagination {...this.props}/>
                </Body>
            </Wrapper>
        );
    }
}

export default MasterBox;
