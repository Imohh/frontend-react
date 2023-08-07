import React, {useState,useEffect} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import './style.css'

const Home = () => {
	const LOCAL_STORAGE_KEY = "contacts"
	const [contacts, setContacts] = useState([])

	const addContactHandler = (contact) => {
		setContacts([...contacts, contact])
	}

	// const removeContactHandler = (id) => {
	// 	const newContactList = contacts.filter((contact) => {
	// 		return contact.id !== id
	// 	})
	// 	setContacts(newContactList)
	// }

	useEffect(() => {
		const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if(retrieveContacts) setContacts(retrieveContacts)
	}, [])


	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
	}, [contacts])



	return (
		<>

			<Header />
			<AddContact addContactHandler={addContactHandler} />
			<ContactList contacts={contacts}/>

		</>
	)
}

export default Home