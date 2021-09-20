const SideBar = ({CountAll, CountWork, CountFamily, CountPrivate, CountFriends}) => {
	return (
		<div className="col-3">
			<div className="card shadow">
				<div className="card-body">
					<div className="card-title">
						<h4 className=" d-flex justify-content-between">All contacts<span>{CountAll}</span></h4>
					</div>
					<div className="input-group">
						<input type="text" className="contacts-search" placeholder="Search" />
					</div>
					<div className="my-3">
						<h3>Labels</h3>
						<div className="d-flex justify-content-between my-1">
							<div className="col-5 bg-success">Work</div>
							<span>{CountWork}</span>
						</div>
						<div className="d-flex justify-content-between my-1">
							<div className="col-5 bg-primary">Family</div>
							<span>{CountFamily}</span>
						</div>
						<div className="d-flex justify-content-between my-1">
							<div className="col-5 bg-danger">Private</div>
							<span>{CountPrivate}</span>
						</div>
						<div className="d-flex justify-content-between my-1">
							<div className="col-5 bg-warning">Friends</div>
							<span>{CountFriends}</span>
						</div>
						<button type="button" className="btn btn-primary mt-2">Add new label</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBar;