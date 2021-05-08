import {useState, useMemo, useCallback} from 'react'

export default function HookMemo() {

    const [name, setName] = useState('John');
    const [length, setLength] = useState(1);

    const memoizedSum = useMemo(() => {
        let sum = 0;
        for(let i=0; i<=length; i++) {
            sum += i;
        }
        return sum;
    }, [length]);
    
    const memoizedCallback = useCallback(() => {
        let sum = 0;
        for(let i=0; i<=length; i++) {
            sum += i;
        }
        return sum;
    }, [length]);

    return (
        <>
            <h2>memoization </h2>
            <input type="text" value={name} onChange = {e => setName(e.target.value)} />
            <br/>
            <input type="text" value={length} onChange = {e => setLength(e.target.value)} />
            <br/>
            <p>Name: {name}</p>
            <p>Sum of Length: {length} is {memoizedSum}</p>
            <p>Sum of Length: {length} is {memoizedCallback()}</p>
        </>
    )
}