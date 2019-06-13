import React, { Component, Fragment } from 'react';
import TodoElement from './TodoElement/TodoElement';


class TodoList extends Component {

	render() {
		const {listMap, handleEditTodo, handleDeleteTodo} = this.props;  
		return ( 
			
			<Fragment>
			{
			listMap.map( (note, index ) => (
				<TodoElement
					handleEditTodo = {handleEditTodo}
					handleDeleteTodo = {handleDeleteTodo}
					key = {index}
					index = {index}
					note = {note}
				/>
				))
			}
			</Fragment>
			
			);
		}
	}

	export default TodoList;