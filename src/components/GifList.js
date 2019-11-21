import React, { Component } from 'react';

class GifList extends Component {
    displayGifs = (gifsArray) => {
        return gifsArray.map( gif => {
            return (
                <li class='gif' >
                    <img src={gif.images.original.url} />
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul id='gif-list'>
                    {this.displayGifs(this.props.gifs)}
                </ul>
            </div>
        )
    }
}

export default GifList

