import React, {useState} from 'react'
import {humans} from './data'

function Tutorial() {
	// console.log(useState('hello world'))
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler);
	const [text,setText] = useState("Imoh");
	const [people,setPeople] = useState(humans);
	const [bula, setBula] = useState({
		name: 'peter',
		age: 24,
		message: 'random message'
	})

	const handleClick = () => {
		if(text === 'Imoh') {
			setText('HELLO WORLD')
		} else {
			setText('starboy')
		}
	}

	// DELETE SINGLE ITEM
	const removeItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id)
		setPeople(newPeople)
	}

	const changeMessage = () => {
		if(bula === 'random message') {
			setBula({message:'Bulaba'})
		} else {
			setBula({message: 'hello world'})
		}
	}


	const [ count, setCount ] = useState(0);

	const startCount = () => {

	}


	return (
		<section className="booklist">



			{/*example 1*/}
			<h2>{text}</h2>
			<button onClick={handleClick}>Change Title</button>
			<br/>

			{/*example 2*/}
			{people.map((person) => {
				const {id, name} = person;
				return <>
					<div key={id}>
						<p>{name}</p>
						<button onClick={() => removeItem(id)}>Delete</button>
					</div>
				</>
			})}

			<button onClick={() => setPeople([])}>Clear All</button>

			{/*example 3*/}

			<p>{bula.name}</p>
			<p>{bula.age}</p>
			<p>{bula.message}</p>
			<button onClick={changeMessage}>Change Message</button>


			{/*forth example*/}
			<h2>{count}</h2>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(count + 1)}>+</button>

		</section>
	)
}

export default Tutorial