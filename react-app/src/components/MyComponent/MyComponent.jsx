import React from 'react';
import { useState } from 'react';
import './MyComponent.css';
function MyComponent() {
    const [count, setCount] = useState(0);
  return (
    <div className='my-component'>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
  )
}

export default MyComponent