import React from 'react'


class AddContact extends React.Component {
	state ={
		name: "",
		email: ""
	}

	add = (e) => {
		e.preventDefault()
		if(this.state.name === "" && this.state.email === "") {
			alert("All field are mandatory!")
			return
		} else {
			this.props.addContactHandler(this.state)
			this.setState({name:"", email: ""})
		}
	}

	render() {
		return (
			<>

				<div className="add-contact">
					<form onSubmit={this.add} className="form-field">
						<label>Name</label>
						<input 
							type="text"
							placeholder="name"
							value={this.state.name}
							onChange={(e) => this.setState({name: e.target.value})}
						/><br />

						<label>Email</label>
						<input 
							type="text"
							placeholder="email"
							value={this.state.email}
							onChange={(e) => this.setState({email: e.target.value})}
						/><br/>

						<button>Add</button>
					</form>
				</div>
			</>
		)
	}
}

export default AddContact