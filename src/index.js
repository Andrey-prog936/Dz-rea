import ReactDOM from "react-dom";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//import
import APIService from "./Servise/APIService"

//inport Components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import AddContact from "./Components/AddContact/AddContact"
import EditContact from "./Components/EditContact/EditContast"

class App extends Component {

	state = {
		ContactList: [],
		CurrentContact: "",
	}

	componentDidMount() {
		var API = new APIService();
		API.fetchContactList().then(Data => {
			this.setState({
				ContactList: Data.Contacts
			})
		})
	}

	onChangeStatus = (Id) => {
		const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
		let contact = this.state.ContactList[index];

		switch (contact.Status) {
			case 'Work':
				contact.Status = "Friends";
				break;
			case "Friends":
				contact.Status = "Family";
				break;
			case "Family":
				contact.Status = "Private";
				break;
			case "Private":
				contact.Status = "Work";
				break;
			default:
				break;
		}

		const newArray = this.state.ContactList.slice();
		newArray[index] = contact;

		this.setState({
			ContactList: newArray
		})

		var API = new APIService();
		API.updateDatabse(newArray);
	}

	onCountContact = (status) => {
		const arr = this.state.ContactList.filter(elem => elem.Status === status);
		return arr.length;
	}

	onDelete = (Id) => {
		const index = this.state.ContactList.findIndex(elem => elem.Id === Id);

		const arrayPartOne = this.state.ContactList.slice(0, index);
		const arrayPartTwo = this.state.ContactList.slice(index + 1);
		const newArray = [...arrayPartOne, ...arrayPartTwo];

		this.setState({
			ContactList: newArray
		})

		var API = new APIService();
		API.updateDatabse(newArray);
	}

	onCreateContact = (contact) => {
		const copyArray = this.state.ContactList.slice();
		const newArray = [...copyArray, contact];

		this.setState({
			ContactList: newArray
		});

		var API = new APIService();
		API.updateDatabse(newArray);
	}

	onEditContact = (contact) => {
		const newArray = this.state.ContactList.slice();
		const index = newArray.findIndex(elem => elem.Id === contact.Id);
		newArray[index] = contact;

		this.setState({
			ContactList: newArray
		});

		var API = new APIService();
		API.updateDatabse(newArray);
	}

	onGetCurrentContact = (Id) => {
		const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
		const tmpList = this.state.ContactList.slice()

		const currentContact = tmpList[index];
		this.setState({
			CurrentContact: currentContact
		})
	}

	render() {
		const { ContactList, CurrentContact } = this.state;
		return (
			<div className="container">
				<Router>
					<Switch>
						<Route path="/" exact component={() => (
							<Main List={ContactList}
								onChangeStatus={this.onChangeStatus}
								onCountContact={this.onCountContact}
								onGetCurrentContact={this.onGetCurrentContact}
								onDelete={this.onDelete} />
						)} />
						<Route path="/add-contact" exact render={() => (<AddContact onCreateContact={this.onCreateContact} />)} />
						<Route path="/edit-contact" exact render={() => (<EditContact CurrentContact={CurrentContact} onEditContact={this.onEditContact} />)} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));