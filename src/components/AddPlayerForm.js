import React, { Component } from 'react'

export default class AddPlayerForm extends Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        //console.log('this is e: '+ e.target.)
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value:''})
    }

    render() {
        console.log(this.state.value)
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value = {this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a players name"
                />
                <input 
                    type='submit'
                    value ='Add Player'
                />
            </form>
        )
    }
}
