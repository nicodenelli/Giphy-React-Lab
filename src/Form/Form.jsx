//built-in React hook that accepts one argument as the initial value
// and returns a reference (aka ref)
import React, { useState } from 'react';


// const inputRef = useRef() creates a reference to hold the input element.
export default function Form(props) {
    const [gifURL, setGifURL] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(gifURL)
        setGifURL('')
    };

    function handleChange(e){
        setGifURL(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={gifURL} placeholder="Search for Gif" />
            <button>{gifURL ? 'Search' : 'Random'}</button>
        </form>
    );
}