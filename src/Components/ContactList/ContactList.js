

import React from 'react';
import  PropTypes from 'prop-types';

import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import './ContactList.css';
const ContactList = ({ contacts, removeContactId }) => {

    return(
            <ul>
                {
                    contacts.map(({id, name, phone}) => (
                        <li key={id}><span> {name}: {phone} </span><button className="contactDelBtn" onClick={()=>{removeContactId(id)}}>Удалить</button> </li>
                    ))
                }
            </ul>
    )
}

ContactList.defaultProps = {
    contacts:[],
    removeContactId:() =>{}
}
ContactList.propTypes = {
    contacts:PropTypes.array.isRequired,
    removeContactId:PropTypes.func
}

const filterContacts = (filter, contacts)=>{
    return contacts.filter(contact => contact.name.toLowerCase().startsWith(filter.toLowerCase()))
}

const mapStateToProps = state =>{
    const {filter, contacts} = state.phonebook;

    return { contacts: filterContacts(filter, contacts)}
}

const mapDispatchToProps = dispatch =>({
    removeContactId: id => dispatch(phonebookActions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)