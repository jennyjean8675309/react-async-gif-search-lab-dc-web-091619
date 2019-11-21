import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

// this Container will handle the fetch call to the API
// 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    handleSearchSubmit = (e, searchText) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(gifData => this.setState({
            gifs: gifData.data.slice(0, 3)
        }))
    }

    render() {
        return (
            <div>
                <GifSearch handleSearchSubmit={this.handleSearchSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer