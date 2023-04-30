import React from 'react';

export default function Giphy({image}) {
    return (
        <div>
            <img src={image.image_url} alt="image" />
        </div>
    )
}