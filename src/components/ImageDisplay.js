import React, { Component } from 'react'
import './ImageDisplay.css'

class ImageDisplay extends Component {
    render() {
        const { urls, description } = this.props.image
        return (
            <div className="image-container">
                <img 
                    src={urls.regular} 
                    alt={description} 
                    onClick={this.props.closeImage}
                 />
            </div>
        )
    }
}

export default ImageDisplay