import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

class EditContact extends Component {

	state = {
		Id: this.props.CurrentContact.Id,
		Name: this.props.CurrentContact.Name,
		Image:  this.props.CurrentContact.Image,
		Phone: this.props.CurrentContact.Phone,
		Gender: this.props.CurrentContact.Gender,
		Email:  this.props.CurrentContact.Email,
		Status:  this.props.CurrentContact.Status,
		isRedirect: false
	}

	onGetName = (e) => {
		const name = e.target.value
		this.setState({
			Name: name
		})
	}

	onGetPhone = (e) => {
		const phone = e.target.value
		this.setState({
			Phone: phone
		});
	}

	onGetEmail = (e) => {
		const email = e.target.value
		this.setState({
			Email: email
		});
	}

	onGetGender = (e) => {
		const gender = e.target.value
		this.setState({
			Gender: gender
		});
	}

	onGetStatus = (e) => {
		const status = e.target.value
		this.setState({
			Status: status
		});
	}

	onGetAvatar = (e) => {
		const avatar = e.target.value
		this.setState({
			Image: avatar
		});
	}

	onEditContact = (e) => {
		e.preventDefault();
		
		const { Id, Name, Image, Phone, Gender, Email, Status } = this.state;

		const { onEditContact } = this.props;

		const contact = {
			Id,
			Name,
			Image,
			Phone,
			Gender,
			Email,
			Status
		}

		onEditContact(contact)

		this.setState({
			isRedirect: true
		})
	}

	render() {
		let { Name, Image, Phone, Gender, Email, Status } = this.props.CurrentContact;
		const Avatar = Image;
		let { isRedirect } = this.state;

		if (isRedirect === true) {
			return <Redirect to="/" />
		}

		if (Image === null || Image === "") {
			Image = "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg";
		} else {
			Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
		}

		return (
			<Fragment>
				<div className="row">
					<div className="col-12 mb-3">
						<div className="card shadow">
							<div className="card-body">
								<Link to="/">Contact list</Link>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card shadow">
							<form className="card-body" onSubmit={this.onEditContact}>
								<div className="form-group">
									<label htmlFor="Name" className="form-label">Name</label>
									<input type="text" className="form-control" placeholder="Name" defaultValue={Name} onChange={this.onGetName} />
								</div>
								<div className="form-group">
									<label htmlFor="Phone" className="form-label">Phone</label>
									<input type="text" className="form-control" placeholder="Phone" defaultValue={Phone} onChange={this.onGetPhone} />
								</div>
								<div className="form-group">
									<label htmlFor="Email" className="form-label">Email</label>
									<input type="text" className="form-control" placeholder="Email" defaultValue={Email} onChange={this.onGetEmail} />
								</div>
								<div className="form-group">
									<label htmlFor="Status">Gender</label>
									<select className="custom-select" onChange={this.onGetGender}>
										<option defaultValue>{Gender}</option>
										<option value="men">Men</option>
										<option value="women">Women</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="Status">Status</label>
									<select className="form-control" onChange={this.onGetStatus}>
										<option defaultValue>{Status}</option>
										<option value="Friend">Friend</option>
										<option value="Work">Work</option>
										<option value="Private">Private</option>
										<option value="Family">Family</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="Avatar">Avatar</label>
									<input type="number" min="0" max="99" className="form-control" defaultValue={Avatar} onChange={this.onGetAvatar} />
								</div>
								<button type="submit" className="btn btn-primary">Edit Contact</button>
							</form>
						</div>
					</div>
					<div className="col-6">
						<div className="card shadow">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img src={Image} className="rounded-circle" width="128" alt="Admin" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EditContact;