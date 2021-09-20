// Import
import { Fragment } from "react";
import { Link } from "react-router-dom";

import ContactList from "../ContactList/ContactList";
import SideBar from "../SideBar/SideBar";

const Main = ({ List, onChangeStatus, onCountContact, onGetCurrentContact, onDelete }) => {
	return (
		<Fragment>
			<div className="row">
				<SideBar CountAll={List.length}
					CountWork={onCountContact("Work")}
					CountFamily={onCountContact("Family")}
					CountPrivate={onCountContact("Private")}
					CountFriends={onCountContact("Friends")} />
				<div className="col-9">
					<div className="card shadow">
						<div className="card-body">
							<div className="d-flex justify-content-between align-items-center">
								<Link to="/add-contact" className="btn btn-primary">Add New Contact</Link>
								<form className="d-flex">
									<input className="form-control me-sm-2" type="text" placeholder="Search" />
								</form>
							</div>
						</div>
					</div>
					<div className="card shadow mt-3">
						<div className="card-body">
							<table className="table table-hover" style={{ marginBottom: '0' }}>
								<thead className="thead-dark" style={{ border: '1px solid #454d55' }}>
									<tr>
										<th style={{ width: '10%' }}></th>
										<th style={{ width: '25%' }}>Name</th>
										<th style={{ width: '25%' }}>Phone</th>
										<th style={{ width: '25%' }}>Email</th>
										<th style={{ width: '15%' }}></th>
									</tr>
								</thead>
								<tbody style={{ border: '1px solid #dee2e6' }}>
									<ContactList List={List} onChangeStatus={onChangeStatus} onGetCurrentContact={onGetCurrentContact} onDelete={onDelete} />
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Main;