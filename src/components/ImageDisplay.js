import React, { Component } from 'react'
import './ImageDisplay.css'

class ImageDisplay extends Component {
    render() {
        const { urls, description } = this.props.image
        return (
            <div className="image-display">
            <button onClick={this.props.closeImage}>X</button>
                <div className="image-container">
                <center>

                    <a href={urls.regular} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={urls.regular}
                            alt={description} 
                            />
                    </a>
                </center>
                </div>
            </div>
        )
    }
}

export default ImageDisplay