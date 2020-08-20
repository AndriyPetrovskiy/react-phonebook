import React, { Component } from 'react';
import classes from './ContactForm.module.css';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        this.props.getNewContact(this.state.name, this.state.number)
        this.setState({name: '', number: ''})
    }
    newAddContact = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value, 
        })
    }


    render() {
        
        const {name, number} = this.state;
        
        return (
      
                <form onSubmit={this.handleSubmit} className={classes.form}> 
                    <label>Name
                        <input 
                        type='text' 
                        name="name"
                        value={this.state.name}
                        onChange={this.newAddContact}/>
                    </label>
                    <br />
                    <label>Number
                        <input type='number'
                        name="number"
                        value={this.state.number}
                        onChange={this.newAddContact} />
                    </label>
                    <button>Add contact</button>
                </form>

        );
    }
}

