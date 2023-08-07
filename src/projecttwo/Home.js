import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'


const Home = () => {

	const [name,setName] = useState("")
	const [list,setList] = useState([])
	const [isEditing,setIsEditing] = useState(false)
	const [editID, setEditID] = useState(null)
	const [alert,setAlert] = useState({ show:false,msg:'',type:'' })
 

 	const handleSubmit = (e) => {
 		e.preventDefault()
 		if(!name) {
 			// display alert
 		} else if(name && isEditing) {
 			// deal with alert
 		} else {
 			const newItem = {id: new Date().getTime().toString(), title:name}
 			setList([...list, newItem])
 			setName('')
 		}
 	}

	return (
		<>
			<section>

				<form onSubmit={handleSubmit}>
					{alert.show && <Alert />}
					<h3>grocery buy</h3>
					<div className="form-control">
						<input 
							type="text"
							placeholder="e.g. eggs" 
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<button type="submit">
							{isEditing ? "edit" : "submit"}
						</button>
					</div>
				</form>

				<div>
					<List />
					<button>clear items</button>
				</div>
			</section>
		</>
	)
}

export default Home