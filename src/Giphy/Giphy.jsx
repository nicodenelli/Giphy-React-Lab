import React from 'react';

export default function Giphy({giphySrc}) {
    return (
        <div className='gif-row'>
            <img src={giphySrc.image_url} alt="Giphy" />
        </div>
    )
}