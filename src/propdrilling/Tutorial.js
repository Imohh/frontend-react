import {useEffect, useState} from 'react'
import { data } from '../data'

const Tutorial = () => {
	const [people, setPeople] = useState(data)
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id)
		})
	}


	return (
		<section>
			<h3>Prop Drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	)

}


const List = ({people, removePerson}) => {
	return (
		<>
			{people.map((person) => {
				return <>
					<SinglePerson key={person.id} {...person} removePerson={removePerson} />
				</>
			})}
		</>
	)
}

const SinglePerson = ({id, name, removePerson}) => {
	return (
		<>
			<h2>{name}</h2>
			<button onClick={() => removePerson(id)}>Remove</button>
		</>
	)
}

export default Tutorial