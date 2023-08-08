// import React, { Component } from 'react'
// import axios from 'axios'

// class Home extends Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			users: []
// 		}
// 	}

// 	// API FOR FAKE DATA
// 	// https://jsonplaceholder.typicode.com/users
// 	componentDidMount() {
// 		axios.get('https://jsonplaceholder.typicode.com/users')
// 		.then(response => {
// 			this.setState({
// 				users: response.data
// 			})
// 			console.log(response.data)
// 		})
// 	}

// 	render() {
// 		const {users} = this.state
// 		return (
// 			<div>
// 				<input type="text" placeholder="Search..." className="search" />
// 				<ul className="list">
// 					<li className="list-item">Precious</li>
// 					<li className="list-item">Imoh</li>
// 				</ul>

// 				{users.map(user => <div key={user.id}>{user.name}</div>)}
// 			</div>
// 		)
// 	}
// }

// export default Home


import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Table from './Table'

const Home = () => {

	const [users, setUser] = useState([])
	const [query, setQuery] = useState("")

	const keys = ["name", "username", "email"]

	const search = (data) => {
		return data.filter((item) => 
			keys.some((key) => item[key].toLowerCase().includes(query))
		)
	}

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users?q=${query}`)
		.then(response => {
			setUser(response.data)
		})
	}, [query])

	return (
		<div>
			<input 
				type="text" 
				placeholder="Search..." 
				className="search" 
				onChange={(e) => setQuery(e.target.value)}
			/>
 			<Table data={search(users)} />
		</div>
	)
}

export default Home