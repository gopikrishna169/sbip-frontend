import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import './overview.css';

class Overview extends Component {
    constructor(props) {
        super();
    }
    render() {
        let blockImg = (<div class="d-none d-sm-flex mr-2"><span class="btn btn-icon btn-soft-secondary"><span class="btn-icon__inner text-dark">Bk</span></span></div>)
        let txnImg = (<div class="d-none d-sm-flex mr-2"><span class="btn btn-icon btn-soft-secondary rounded-circle"><span class="btn-icon__inner text-dark">Tx</span></span></div>)
        let recentBlocks = this.props.logs.map((log) => {
            return (<tr><td>{blockImg}</td><td><div class='bluelight'>{parseInt(log.blockNumber)}</div></td></tr>)
        })
        recentBlocks.push(<tr><td colSpan={2}><Button
            variant="outline-primary"
            disabled={false}
            size='sm'
            block={true}
        >View all Blocks</Button></td></tr>);
        let recentTxn = this.props.logs.map((log) => {
            return (<tr><td>{txnImg}</td><td><div class='bluelight'>{log.transactionHash.substring(0,10) + '...'}</div></td></tr>)
        })
        recentTxn.push(<tr><td colSpan={2}><Button
            variant="outline-primary"
            disabled={false}
            size='sm'
            block={true}
        >View all Transactions</Button></td></tr>);
        return (
            <div>
                <div class="card overview-card">
                    <div class="card-body">
                        <div class="col-md-6 col-lg-4">
                            <div>
                                <div class="text">Ether Price</div>
                                <div class="text">$1,365.00 @ 0.03846 BTC</div>
                            </div>
                            <hr class="long-space-line"></hr>
                            <div>
                                <div class="text">Market Cap</div>
                                <div class="text">$156,054,819,075</div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div>
                                <div class="text">TRANSACTIONS</div>
                                <div class="text">983.75 M</div>
                            </div>
                            <hr class="long-space-line"></hr>
                            <div>
                                <div class="text">DIFFICULTY</div>
                                <div class="text">4314.53 TH</div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4"></div>
                    </div>
                </div>
                <div class='recent'>
                    <div class="card recent-block">
                        <div class="card-body">
                            <label>Latest Blocks</label>
                            <Table>
                                <tbody>
                                    {recentBlocks}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div class="card recent-txn">
                        <div class="card-body">
                            <label>Latest Transactions</label>
                            <Table>
                                <tbody>
                                    {recentTxn}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview;
