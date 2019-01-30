import React, { Component } from 'react'

class LoadMoreButton extends Component {
    render() {
        return(
            <div>
                <button className="ui button" style={{ padding: '10px' }} onClick={this.props.loadMoreImages}>Load More</button>
            </div>
        )
    }
}

export default LoadMoreButton