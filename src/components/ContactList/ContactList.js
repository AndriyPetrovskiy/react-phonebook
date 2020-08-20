import React from 'react';
import './ContactList.module.css'
import classes from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p className={classes.form_name}>{contact.name}</p>
                    <p>{contact.number}</p>
                    <button type='button' onClick={() => onDeleteContact(contact.id)}>del</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;