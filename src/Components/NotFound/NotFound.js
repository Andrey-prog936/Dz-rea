import { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Fragment>
			<div className="row" style={{justifyContent: 'center'}}>
				<div className="col-8">
					<div className="card shadow mt-5">
						<div className="card-body text-center">
							<h3 style={{ fontSize: '10rem', fontWeight: '800' }}>404</h3>
							<h2 style={{ fontSize: '3rem', fontWeight: '800' }}>Opps - Page not found</h2>
							<Link to="/" className="btn btn-outline-dark my-4" >Go to home page</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default NotFound;