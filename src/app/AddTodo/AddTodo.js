import React, {Component, Fragment} from 'react';
import './AddTodo.css';

class AddTodo extends Component {

	state = {
		value: '',
		isAdmin: true,
		someData: []
	}

	handleAddTodo = () => {
		let newNote = {
			text: this.state.value,
			done: false,
			disabled: true
		}
		this.props.onAdd(newNote);
		this.setState({value: ''});
	}

	handleOnChange = e => {
		this.setState({value: e.target.value});
	}
	render() {
		return( 
			<div>
			<input 
			 className='input' 
			 value= {this.state.value}
			 onChange={this.handleOnChange} />
			
			<button
			 className="button"
			 onClick={this.handleAddTodo} > Add </button>
		</div>
		);
	}
}

export default AddTodo;