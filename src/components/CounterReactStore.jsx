import { useStore } from "@nanostores/react";
import { $counter } from "./store";

export default function CounterReactStore() {
    const count = useStore($counter);

    return (
        <div style={{ border: '2px solid #00d8ff', padding: '1rem' }}>
            <h3>React Island (Publisher)</h3>
            <p>
                Counter : {count}
            </p>
            <button onClick={() => $counter.set(count - 1)}>Decrease by 1</button>
            <button onClick={() => $counter.set(count + 1)}>Increase by 1</button>
        </div>
    )
}