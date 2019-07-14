import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "./context";
import AddContact from "./components/contacts/AddContact1";
// Changing BrowserRouter to HashRouter because of GHPages
//import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import About from './components/pages/About';
import NotFound from "./components/pages/NotFound";
import EditContact from './components/contacts/EditContact';

// In order to use the ContextAPI we have to wrap everything in a Provider Component
function App() {
    return (
        <Provider>
            <Router>
                <div className="App">
                    <Header branding="Contact Manager"/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Contacts}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/contact/edit/:id" component={EditContact}/>
                            <Route exact path="/contact/add" component={AddContact}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
