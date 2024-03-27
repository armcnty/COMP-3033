import React from 'react';
import axios from 'axios';

export default class ContactList extends React.Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.getCustomers();
    }

    getCustomers() {
        axios.get('http://localhost:3000/contact')
        .then(res => {
            const contacts = res.data;
            this.setState({contacts});
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>Contact List</h3>
                <table>
                    {
                        this.state.contacts
                        .map(contact => 
                            <tr key={contact._id}>
                                <td>{contact.firstname}</td>
                                <td>{contact.lastname}</td>
                                <td>{contact.email}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        )
    }
}