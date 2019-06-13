import React, {Component} from 'react';
import './App.css';
import  AddTodo  from  './AddTodo/AddTodo';
import  TodoList from  './TodoList/TodoList';


class App extends Component {

	constructor() {
		this.state = {
			listNote: []
		}
	}

	handleAddNewTodo = (note) => {
		this.setState((oldState) => {
			return { listNote: [note, ...oldState.listNote] }
		});
	}
	handleEditTodo = (index, note) => {
		let editListNote = [...this.state.listNote];
			editListNote[index] = note;

		this.setState({editListNote});
	}


	handleDeleteTodo = index => {
		let deleteListNote = [...this.state.listNote];
		deleteListNote.splice(index, 1);

		this.setState({deleteListNote});
	}


	render() {

		const {listNote} = this.state;

		return(
			<div className="container"> 
			<AddTodo
			onAdd = {this.handleAddNewTodo}
			/>
			<TodoList
			handleDeleteTodo = {this.handleDeleteTodo}
			handleEditTodo = {this.handleEditTodo}
			listMap = {listNote}
			/>
			</div>
			);
		}
	}

	export default App;