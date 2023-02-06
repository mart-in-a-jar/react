import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default Count;
