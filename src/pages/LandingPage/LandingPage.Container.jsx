import React, { Component, Fragment } from "react";
import "./LandingPage.Container.css";
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import Overview from "../../components/overview/overview";
import Details from "../../components/details/details";
import { connect } from 'react-redux';
import { getBlockbyhashRequest, getTxnbyhashRequest, getLogRequest } from '../../store/BlockStore/block.action';

class LandingPage extends Component {
    constructor(props) {
        super();
        this.getBlockByHash = this.getBlockByHash.bind(this);
        this.getTxnByHash = this.getTxnByHash.bind(this);
        this.searchByHash = this.searchByHash.bind(this);
    }

    componentDidMount() {
        this.getLogs();
    }

    componentDidUpdate(prevProps) {
        if (this.props.block !== prevProps.block) {

        }
    }

    searchByHash(searchText) {
        if (searchText !== '') {
            this.getBlockByHash(searchText);
            this.getTxnByHash(searchText);
        }
    }

    getBlockByHash(searchText) {
        if (searchText !== '') {
            this.props.getBlockbyhashRequest({
                "jsonrpc": "2.0",
                "method": "eth_getBlockByHash",
                "params": [
                    searchText,
                    true
                ],
                "id": 1
            })
        }
    }

    getTxnByHash(searchText) {
        if (searchText !== '') {
            this.props.getTxnbyhashRequest({
                "jsonrpc": "2.0",
                "method": "eth_getTransactionByHash",
                "params": [
                    searchText
                ],
                "id": 1
            })
        }
    }

    getLogs() {
        this.props.getLogRequest({
            "jsonrpc": "2.0",
            "method": "eth_getLogs",
            "params": [],
            "id": 1
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Search search={this.searchByHash} />
                <Overview logs={this.props.logs} getBlockByHash={this.getBlockByHash} getTxnbyHash={this.getTxnbyHash} />
                <Details block={this.props.block ? this.props.block : this.props.transaction} />
            </Fragment>
        );
    }

}

const stateToProps = response => ({
    block: response.blockReducer.block,
    transaction: response.blockReducer.transaction,
    logs: response.blockReducer.logs
})

const dispatchToProps = {
    getBlockbyhashRequest: getBlockbyhashRequest,
    getTxnbyhashRequest: getTxnbyhashRequest,
    getLogRequest: getLogRequest
}

export default connect(
    stateToProps,
    dispatchToProps
)(LandingPage);
