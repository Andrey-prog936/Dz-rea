import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {

	state = {
		Name: "",
		Image: null,
		Phone: "",
		Gender: "",
		Email: "",
		Status: "",
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

	onCreateContact = (e) => {
		e.preventDefault();
		
		const { Name, Image, Phone, Gender, Email, Status } = this.state;
		
		const { onCreateContact } = this.props;

		const contact = {
			Id: uuidv4(),
			Name,
			Image,
			Phone,
			Gender,
			Email,
			Status
		}

		onCreateContact(contact)

		this.setState({
			isRedirect: true
		})
	}

	render() {
		let { Gender, Image, isRedirect } = this.state;

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
							<form className="card-body" onSubmit={this.onCreateContact}>
								<div className="form-group">
									<label htmlFor="Name" className="form-label">Name</label>
									<input type="text" className="form-control" placeholder="Name" onChange={this.onGetName} />
								</div>
								<div className="form-group">
									<label htmlFor="Phone" className="form-label">Phone</label>
									<input type="text" className="form-control" placeholder="Phone" onChange={this.onGetPhone} />
								</div>
								<div className="form-group">
									<label htmlFor="Email" className="form-label">Email</label>
									<input type="text" className="form-control" placeholder="Email" onChange={this.onGetEmail} />
								</div>
								<div className="form-group">
									<label htmlFor="Status">Gender</label>
									<select className="custom-select" onChange={this.onGetGender}>
										<option value="" selected>Please choose</option>
										<option value="men">Men</option>
										<option value="women">Women</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="Status">Status</label>
									<select className="form-control" onChange={this.onGetStatus}>
										<option value="" selected>Please choose</option>
										<option value="Friends">Friend</option>
										<option value="Work">Work</option>
										<option value="Private">Private</option>
										<option value="Family">Family</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="Avatar">Avatar</label>
									<input type="number" min="0" max="99" className="form-control" onChange={this.onGetAvatar} />
								</div>
								<button type="submit" className="btn btn-primary">Add Contact</button>
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

export default AddContact;