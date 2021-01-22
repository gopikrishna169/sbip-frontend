import React, { Component } from "react";
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

                        </div>
                        <div class="col-md-6 col-lg-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview;
