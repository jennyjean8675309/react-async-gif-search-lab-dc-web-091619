import React, { Component } from 'react';

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchText: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Enter a search term:</h3>
                <form onSubmit={(e) => this.props.handleSearchSubmit(e, this.state.searchText)}>
                    <input type='text' onChange={this.handleOnChange} value={this.state.searchText}></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default GifSearch