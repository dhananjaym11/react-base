import React, {useState, useEffect} from 'react';

export default function HooksContainer() {
	const [counter, setCounter] = useState(0);
	const [users, setUsers] = useState([]);

	const increamentCounter = () => {
		setCounter(counter+1)
	}

	async function fetchData() {
	    const res = await fetch("https://api.github.com/users?since=");
	    res.json()
	      .then(res => setUsers(res));
	}

	useEffect(() => {
	    fetchData();
	}, []);

	return (
		<div>
			<h1>Hooks</h1>
			<hr/>
			<h2>Basic</h2>
			<h5>{counter}</h5>
			<button onClick={increamentCounter}>Increament</button>
			<hr/>
			<h2>Api call on mount</h2>
			<div>
			{
				users.map(user=> (
					<div key={user.id}>{user.login}</div>
				))
			}
			</div>
		</div>
	)
} 