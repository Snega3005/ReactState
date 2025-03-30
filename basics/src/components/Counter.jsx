import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(0);
    const update = ()=> {
        setCount(++count);
    }
    const decrease = () => {
        setCount(--count);
    }
    const reset = () => {
        count = 0;
        setCount(count);
    }
    return (
        <div>
            <>
            <h1>Count: {count}</h1>
            <button onClick={update}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
            </>
        </div>
    )
}