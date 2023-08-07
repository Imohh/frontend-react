import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'


const Tutorial = () => {
	const [users, setUsers] = useState([])

	const getUsers = async() => {
		const response = await fetch(url)
		const users = await response.json()
		setUsers(users)
	}


	useEffect(() => {
		getUsers()
	},[])



	// useEffect(() => {
	// 	console.log('call useEffect');

	// 	document.title = `New Messages(${value})`

	// },[value])

	return (
		<>
			{/*<h2>{value}</h2>
			<button onClick={() => setValue(value + 1)}> Click Me</button>*/}

			{/*fetch data*/}
			<h3>github users</h3>
			{users.map((user) => {
				const {id, login, avatar_url,html_url} = user
				return <>
					<img src={avatar_url} alt={login} />
					<h4>{login}</h4>
					<p>{html_url}</p>
				</>
			})}



		</>
	)
}

export default Tutorial