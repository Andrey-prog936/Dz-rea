import { Link } from "react-router-dom"

const ContactItem = ({ Name, Image, Phone, Email, Status, Gender, onChangeStatus, onGetCurrentContact, onDelete }) => {

	var lab = "col-6 bg-"

	if (Status === "Work")
		lab += "success"
	else if (Status === "Family")
		lab += "primary"
	else if (Status === "Private")
		lab += "danger"
	else if (Status === "Friend")
		lab += "warning"

	const imageURL = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;

	return (
		<tr>
			<td className="align-middle">
				<img className="rounded-circle" src={imageURL} alt="Avatar" style={{ height: '50px' }} />
			</td>
			<td className="align-middle">
				{Name}
				<div className={lab} onClick={onChangeStatus}>
					{Status}
				</div>
			</td>
			<td className="align-middle">{Phone}</td>
			<td className="align-middle">{Email}</td>
			<td className="align-middle">
				<Link to="/edit-contact">
					<i className="far fa-edit" onClick={onGetCurrentContact}></i>
				</Link>
				<i className="far fa-trash-alt ml-2" onClick={onDelete} ></i>
			</td>
		</tr>
	)
}

export default ContactItem;