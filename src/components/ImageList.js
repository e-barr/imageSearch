import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

// const ImageList = props => {
//     const imagesFormatted = props.images.map(({ id, urls, description }) => <img key={id} src={urls.regular} alt={description} />)
//     return <div className="image-list">{imagesFormatted}</div>
// }

const ImageList = props => {
    const formattedImages = props.images.map((image) => <ImageCard image={image} key={image.id} />)
    return <div className="image-list">{formattedImages}</div>
}
export default ImageList