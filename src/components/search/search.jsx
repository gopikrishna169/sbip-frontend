import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './search.css';

class Search extends Component {
    constructor(props) {
        super();
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
                                />
                                <InputGroup.Append className='search-button'>
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
