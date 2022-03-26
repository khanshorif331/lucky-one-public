import React from 'react';
import './Faq.css'
const Faq = () => {
    return (
        <div className='faq-container'>
            <h1>How React Works???</h1>
            <p>React makes a virtual dom same as the dom.React compares this virtual dom and finds the changes in the dom.Then react only renders that part which is changed.Then we see this changes in a very fast time with the help of reconcilation algorithm.</p>
            <h1>Props Vs States</h1>
            <p><strong>Props:</strong>Props are immutable.We can pass props from parent component to child components.Props are read only.They remain static.</p>
            <p><strong>States:</strong>State are mutable.We can define states in the component.The state is set and updated by the object.</p>
            <h1>How useState Works???</h1>
            <p>State allows us to manage changing data in application.The state hook returns an array with two elements.First is the current state of the element and the second is a setter function.We call the setter function with a new value to set the state which will rerender the component.</p>
        </div>
    );
};

export default Faq;