import React, {useContext, useState} from 'react'
import { data } from '../data'

const PersonContext = React.createContext()



const Tutorial = () => {
	const [people, setPeople] = useState(data)

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id)
		})
	}

	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>Context API / useContext</h3>
			<List />
		</PersonContext.Provider>
	)
}


const List = () => {
	const mainData = useContext(PersonContext)

	return (
		<>
			{mainData.people.map((person) => {
				return <>
					<SinglePerson key={person.id} {...person} />
				</>
			})}
		</>
	)
}


const SinglePerson = ({id, name}) => {
	const {removePerson} = useContext(PersonContext)

	return (
		<>
			<h1>{name}</h1>
			<button onClick={() => removePerson(id)}>Remove</button>
		</>
	)
}


export default Tutorial