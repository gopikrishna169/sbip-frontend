import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import './details.css';

class Details extends Component {
    constructor(props) {
        super();
        this.state = {
            show: false,
        }
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidUpdate(prevProps) {
        if ((this.props.block !== prevProps.block) || (this.props.block !== prevProps.block)

        ) {
            this.setState({ show: true });
        }
    }

    closeModal() {
        this.setState({ show: false });
    }

    render() {
        let temp = <span />
        temp = this.props.block && this.props.block !== undefined && Object.entries(this.props.block).map((item) => {
            switch (item[0]) {
                case "logsbloom":
                    break;
                case "input":
                    break;
                case "r":
                    break;
                case "s":
                    break;
                case "v":
                    break;
                case "extraData":
                    break;
                case "transactions":
                    console.log(item[0])
                    return (<tr><td>{item[0].toUpperCase()}</td><td>{item[1].length} number of Transactions</td></tr>)
                default:
                    return (<tr><td>{item[0].toUpperCase()}</td><td>{(item[1])}</td></tr>)
            }
        })
        return (
            <div>
                <Modal
                    show={this.state.show}
                    onHide={() => { this.closeModal() }}
                    dialogClassName="modal-90w"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="detail-title">
                            Overview - {this.props.block && this.props.block !== undefined && this.props.block.difficulty  ? 'Block By Hash' : 'Transaction By Hash'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table responsive="sm" striped={true} borderless={true}>
                            <tbody>
                                {temp}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Details;
