import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './search.css';

class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            searchText: '',
        }
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchFunction = this.searchFunction.bind(this);
    }

    handleSearchText = e => {
        console.log(e)
        this.setState({
            searchText: e.target.value
        });
    }

    searchFunction() {
        this.props.search(this.state.searchText);
    }

    render() {
        return (
            <div>
                <div class="card search-card">
                    <div class="card-body">
                        <label class="searh-heading">The Ethereum Blockchain Explorer</label>
                        <div class="input-group mb-3">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search by Txn Hash / Block Hash"
                                    aria-label="search"
                                    aria-describedby="basic-addon2"
                                    onChange={(event) => this.handleSearchText(event)}
                                />
                                <InputGroup.Append className='search-button' onClick={() => this.searchFunction()}>
                                    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
