import React, {useState, useEffect} from 'react'

export default function hookDataFetchOnButtonClick() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => res.json())
            .then(res => setPost(res))
            .catch(err => console.log(err));
    }, [idFromButtonClick]);

    return (
        <>
            <h2>DataFetchOnButtonClick</h2>
            ID : <input type="text" value={id} onChange = {e => setId(e.target.value)} />
            <button className='ml-4' type="button" onClick={()=> setIdFromButtonClick(id)}>Fetch Post</button>
            <div className='mt-4'><b>TITLE :</b> { post.title }</div>
        </>
    )
}