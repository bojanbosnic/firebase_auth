import React, { useState } from 'react';

const dashboard = () => {
    const[counter, setCounter]= useState(0);
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', margin: '5rem 10rem'}}>
            <h1>Hello this is Dashboar page!!</h1>
            <textarea style={{margin: '2rem 0'}}>Type text here</textarea>
            <button style={{padding: '0.5rem 1rem'}} onClick={(e)=>setCounter(counter+1)}>Click me!</button>
            {counter}
        </div>
    );
};

export default dashboard;