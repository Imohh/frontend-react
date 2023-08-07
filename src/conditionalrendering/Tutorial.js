import {useState, useEffect} from 'react'


const Tutorial = () => {

	const [text, setText] = useState('');
	const firstValue = text || 'hello world';
	const secondValue = text && 'hello world'

	return (
		<>

		<h1>{text || 'john doe'}</h1>
		{text && <h1>hello world</h1>}
		{!text && <h1>hello world</h1>}
		


		</>
	)
}

export default Tutorial