import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = props => {
    const formattedImages = props.images.map((image) => <ImageCard image={image} key={image.id} imageSelected={props.imageSelected} />)
    return <div className="image-list" style={{ padding: '10px'}}>
        {formattedImages}
    </div>
}
export default ImageList