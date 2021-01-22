import React, { Component, Fragment } from "react";
import "./LandingPage.Container.css";
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import Overview from "../../components/overview/overview";
import { connect } from 'react-redux';
import { getTnxbyhashRequest } from '../../store/BlockStore/block.action';

class LandingPage extends Component {
    constructor(props) {
        super();
        this.getTnxbyhash = this.getTnxbyhash.bind(this);
    }

    getTnxbyhash() {
        this.props.getTnxbyhashRequest({
            "jsonrpc":"2.0",
            "method":"eth_getBlockByHash",
            "params":[
                "0xad1328d13f833b8af722117afdc406a762033321df8e48c00cd372d462f48169", 
                true
            ],
            "id":1
        })
    }
    render() {
        return (
            <Fragment>
                <Header />
                <Search />
                <Overview />
            </Fragment>
        );
    }

}

const stateToProps = response => ({
        block : response.blockReducer.block
})

const dispatchToProps = {
    getTnxbyhashRequest: getTnxbyhashRequest
}

export default connect(
    stateToProps,
    dispatchToProps
)(LandingPage);
