import {useState} from 'react'
import {data} from './data'

const Tutorial = () => {

	const [people, setPeople] = useState(data);

	const deleteItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id)
		setPeople(newPeople)
	}

	return (
		<>

			{people.map((person) => {
				return (
					<article key={person.id}>
						<h2>{person.name}</h2>
						<p>{person.age}</p>
						<button onClick={() => deleteItem(person.id)}>Delete Item</button>
					</article>

				)
			} )}
			
			<button onClick={() => setPeople([])}>Clear All</button>

		</>
	)
}

export default Tutorial