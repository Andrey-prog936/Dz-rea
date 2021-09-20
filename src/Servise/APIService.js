import { Component } from "react";

class APIService extends Component {

    URl = "https://database-d0d55-default-rtdb.firebaseio.com/contacts.json";

    fetchContactList = () => {
        const Contacts = fetch(this.URl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data;
            })
            .then(contacts => {
                if (contacts === null)
                    return { Contacts: [] }
                else
                    return { Contacts: contacts };
            })
            .catch(error => console.log(error));

        return Contacts;
    }

    updateDatabse = (contact) => {
        fetch(this.URl,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(contact)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }
}

export default APIService;