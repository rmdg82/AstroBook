import { useState } from 'react';

export default function CounterReact() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '2px solid #00d8ff', padding: '1rem' }}>
            <h3>React Counter: {count}</h3>
            <button onClick={() => setCount(count -1)}>Decrease by 1</button>
            <button onClick={() => setCount(count + 1)}>Increase by 1</button>
        </div>
    )
 }
