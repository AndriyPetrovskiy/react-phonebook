import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  


  addContact = (name, number) => {
    const compresionOfName = this.state.contacts.map(contact => 
      contact.name).includes(name);
    
      const compresionOfNumber = this.state.contacts.map(contact => 
        contact.number).includes(number);
    

    if(compresionOfName) {
      alert(`${name} has already in contacts`)
    } else if (!number.length) {
      alert(`Please enter a number`)
    } else if (!name.length) {
      alert(`Please enter name`)
    } else if (compresionOfNumber) {
      alert(`${number} has already in contacts`)
    } else {
      const newContact = {
        id: uuidv4(),
        name,
        number,
      }
  
      this.setState(prev => {
        return {
          contacts: [...prev.contacts, newContact],
        }
      })
    }
      

  }

  deleteContact = (contactId) => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.id !== contactId)
      }
    })
   
  }

  filterContacts = filter => {
    this.setState({ filter })
  }

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
          <ContactForm getNewContact={this.addContact}/>
         
        {visibleContacts.length > 1 &&  
        <Filter filter={this.state.filter}
         filterContacts={this.filterContacts}/>}
        
         
   
          <ContactList contacts={visibleContacts}
          onDeleteContact={this.deleteContact}/>
      </div>
    );
  }
}

