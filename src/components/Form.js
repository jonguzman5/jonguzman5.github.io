import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            msg: ""
        }
    }

    handleChange = event => {
       this.setState({
           [event.target.name]: event.target.value
        });
    }

    onFormSubmit = (event) => {
        alert("Your respond has been sent. Please await a response within the next 48 hours")
    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                <h3>Contact Me!</h3>
                <label>Name: {this.state.name}</label>
                <input name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>Email: {this.state.email}</label>
                <input name="email" value={this.state.email} onChange={this.handleChange}/>                
                <label>Message: {this.state.msg}</label>
                <input name="msg" value={this.state.msg} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        )
    
    }
}

export default Form;
