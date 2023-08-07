const ContactCard = (props) => {
	const{id, name, email} = props.contact
	return (
		<>
			<div className="contact-list">

				<div className="item">
					<div className="item-sub">
						<p>{name}</p>
						<p>{email}</p>
					</div>
					<button>delete</button>
				</div>

			</div>
		</>
	)
}

export default ContactCard