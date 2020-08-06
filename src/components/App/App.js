import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { getContacts } from "../../redux/contacts/contactOperations";
import { itemsSelector } from "../../redux/contacts/contactsSelectors";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import "./App.css";

class App extends Component {
  state = {
    animation: false,
  };

  componentDidMount() {
    this.props.onGetContacts();
    this.setState((state) => ({
      animation: !state.animation,
    }));
  }

  render() {
    return (
      <div className="Container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="Title-slideIn"
          timeout={500}
          unmountOnExit
        >
          <h1 className="AppTitle">Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        {this.props.contacts.length === 0 && (
          <>
            <h2 className="ContactTitle">Contacts</h2>
            <p>Contacts list is empty. Please, create new cotnact!</p>
          </>
        )}

        <CSSTransition
          in={this.props.contacts.length > 1}
          classNames="FilterAnimation"
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: itemsSelector(state),
});

const mapDispatchToProps = {
  onGetContacts: getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
