//built-in React hook that accepts one argument as the initial value
// and returns a reference (aka ref)
import React, { useRef } from 'react';


// const inputRef = useRef() creates a reference to hold the input element.
export default function Form(props) {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDeafault();
        const val = inputRef.current.value;
        console.log('val', val)
        props.handleSubmit(val);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder="Search New Gifs Here" />
        </form>
    )
}