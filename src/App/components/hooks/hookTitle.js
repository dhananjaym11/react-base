import {useState, useEffect} from 'react'

export default function HookTitle() {
    const [count, setCount] = useState(0);
    const [show, toggleShow] = useState(false);

    useEffect(() => {
        document.title =  `Clicked ${count} times`;
    },[show]);

    return (
        <div>
            <h2>Title</h2>
           <button onClick={() => setCount(count + 1)}>Click {count} times</button> 
           <button onClick={() => toggleShow(!show)}>Update title</button>
        </div>
    )
}