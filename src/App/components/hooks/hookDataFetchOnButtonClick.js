import {useState, useEffect, useCallback} from 'react'

export default function HookDataFetchOnButtonClick() {

    const [post, setPost] = useState({})
    const [fixedPost, setFixedPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => res.json())
            .then(res => setPost(res))
            .catch(err => console.log(err));
    }, [idFromButtonClick]);

    const memoizedCallback = useCallback((id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(res => setFixedPost(res))
            .catch(err => console.log(err));
    },[]);

    return (
        <>
            <h2>DataFetchOnButtonClick</h2>
            ID : <input type="text" value={id} onChange = {e => setId(e.target.value)} />
            <button className='ml-4' type="button" onClick={()=> setIdFromButtonClick(id)}>Fetch Post</button>
            <div className='m2-4'><b>TITLE :</b> { post.title }</div>
            <button className='mt-4' type="button" onClick={()=> memoizedCallback(10)}>Fetch 10th Post</button>
            <div className='m2-4'><b>10th Post TITLE :</b> { fixedPost.title }</div>
        </>
    )
}