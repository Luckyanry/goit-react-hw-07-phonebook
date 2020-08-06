import React from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { getFilteredContact } from "../../redux/contacts/contactsSelectors";
import SingleContact from "../SingleContact/SingleContact";
import "./ContactList.css";

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="ContactList">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} classNames="ListItem" timeout={250}>
          <SingleContact id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => ({
  contacts: getFilteredContact(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      namber: PropTypes.string,
    })
  ).isRequired,
};
