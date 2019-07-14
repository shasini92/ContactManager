import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                // We want to check if this is the contact being updated and if not simply return the original contact
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload): contact)
            };
        default:
            return state;
    }
};

// This is the global state
export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };

    async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({contacts: response.data})
    }


    // Before Async/Await
    /*componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>this.setState({contacts:response.data}))
    }*/

    render() {
        return (
            // Anything that we want to be available throughout the application we pass in here
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

// We have a provider and then we have a consumer within any component that we want to access the state from
export const Consumer = Context.Consumer;