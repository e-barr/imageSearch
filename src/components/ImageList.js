import React from 'react'

const ImageList = props => {
    const imagesFormatted = props.images.map(image => <img src={image.urls.regular} alt={image.description} />)
    return <div>{imagesFormatted}</div>
}

export default ImageList