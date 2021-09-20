// Import
import ContactItem from "../ContactList/ContactItem/ContactItem";

const ContactList = ({ List, onChangeStatus, onGetCurrentContact, onDelete }) => {
	const item = List.map(listItem => {
		return (
			<ContactItem key={listItem.Id}
				{...listItem}
				onChangeStatus={() => onChangeStatus(listItem.Id)}
				onGetCurrentContact={()=> onGetCurrentContact(listItem.Id)}
				onDelete={() => onDelete(listItem.Id)} />
		)
	})
	return (
		item.length > 0 ? item : <tr><td colSpan="5" className="text-center"><h4>Contact list is empty.</h4></td></tr>
	)
}

export default ContactList;