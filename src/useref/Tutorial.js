import {useEffect, useRef} from 'react'

const Tutorial = () => {
	const refContainer = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value)
	}

	console.log(refContainer)

	return (

		<form onSubmit={handleSubmit}>
			<input
				type="text" 
				ref={refContainer}
			/><br/>

			<button>Submit</button>
		</form>


	)
}

export default Tutorial