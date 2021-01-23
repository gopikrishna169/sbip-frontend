import React, { Component, Fragment } from "react";
import "./LandingPage.Container.css";
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import Overview from "../../components/overview/overview";
import Details from "../../components/details/details";
import { connect } from 'react-redux';
import { getBlockbyhashRequest, getTxnbyhashRequest } from '../../store/BlockStore/block.action';

class LandingPage extends Component {
    constructor(props) {
        super();
        this.searchByHash = this.searchByHash.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.block !== prevProps.block) {

        }
    }

    searchByHash(searchText) {
        this.props.getBlockbyhashRequest({
            "jsonrpc": "2.0",
            "method": "eth_getBlockByHash",
            "params": [
                searchText,
                true
            ],
            "id": 1
        })

        this.props.getTxnbyhashRequest({
            "jsonrpc": "2.0",
            "method": "eth_getTransactionByHash",
            "params": [
                searchText
            ],
            "id": 1
        })
    }
    render() {
        return (
            <Fragment>
                <Header />
                <Search search={this.searchByHash} />
                <Overview />
                <Details block={this.props.block ? this.props.block : this.props.transaction} />
            </Fragment>
        );
    }

}

const stateToProps = response => ({
    block: response.blockReducer.block,
    transaction: response.blockReducer.transaction
})

const dispatchToProps = {
    getBlockbyhashRequest: getBlockbyhashRequest,
    getTxnbyhashRequest: getTxnbyhashRequest
}

export default connect(
    stateToProps,
    dispatchToProps
)(LandingPage);
