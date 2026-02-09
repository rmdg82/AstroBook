import { useStore } from "@nanostores/react";
import { $counter } from "./store";

export default function CounterReaderReactStore()
{    const count = useStore($counter);

    return (
        <div style={{ border: '2px solid #00d8ff', padding: '1rem' }}>
            <h3>React Island (Reader)</h3>
            <p>
                Counter : {count}
            </p>
        </div>
    )
}