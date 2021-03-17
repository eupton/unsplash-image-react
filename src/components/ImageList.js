import React from 'react'

const ImageList = ({images}) => {
    return (
        <div>
            {console.log(images)}
            {images.map(image => <img key={image.id} src={image.urls.small} />) }
        </div>
    );
}

export default ImageList