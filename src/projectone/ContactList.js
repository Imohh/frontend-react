import ContactCard from './ContactCard'

const ContactList = (props) => {

	const renderContactsList = props.contacts.map((contact) => {
		return (
			<ContactCard contact={contact}  />
		)
	})
	return (
		<>
			{renderContactsList}
		</>
	)
}

export default ContactList