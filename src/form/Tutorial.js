import {useState} from 'react'



const Tutorial = () => {

	const [email, setEmail] = useState('')
	const [fullName, setFullName] = useState('')
	const [people, setPeople] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault();

		if(email && fullName) {
			const person = {email, fullName}
			// console.log(person)
			setPeople((people) => {
				return [...people, person]
			})
			setEmail('')
			setFullName('')
		} else {
			console.log("submit something nigga!")
		}

	}

return (
		<>

			<form>
				<label>Email: </label>
				<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

				<label>Full Name: </label>
				<input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /><br />

				<button onClick={handleSubmit}>submit</button>

			</form>


			{people.map((person) => {
				return (
					<p>{person.email} {person.fullName}</p>
				)
			})}

		</>
		
	)
}

export default Tutorial