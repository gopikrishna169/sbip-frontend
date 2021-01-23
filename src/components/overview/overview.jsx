import React, { Component } from "react";
import { Table } from "react-bootstrap";
import './overview.css';

class Overview extends Component {
    constructor(props) {
        super();
    }
    render() {
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
                                    <tr></tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div class="card recent-txn">
                        <div class="card-body">
                            <label>Latest Transactions</label>
                            <Table>
                                <tbody>
                                    <tr></tr>
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
