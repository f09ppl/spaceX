import React, { Component } from 'react';



class TodoElement extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.setState({value: this.props.note.text});
    }

    componentDidUpdate(prevProps){
        // to avoid infinite loop, set state in condition
        if( this.props.note !== prevProps.note ){
            this.setState({value: this.props.note.text})
        }
    }

    handleEditClick = () => {
        const { note, handleEditTodo, index } = this.props;
        note.disabled = false;
        handleEditTodo( index, note );
    }

    // handleSaveClick = () => {
    //     const { todo, handleEditTodo, index } = this.props;
    
    //     todo.disabled = true;
    //     todo.text = this.state.value;

    //     handleEditTodo( index, todo );
    // }

    // handleDoneClick = () => {
    //     const { todo, handleEditTodo, index } = this.props;
    //     todo.done = !todo.done;
    //     handleEditTodo(index, todo);
    // }

    // handleDeleteClick = () => {
    //     const { handleDeleteTodo, index } = this.props;
    //     handleDeleteTodo(index);
    // }

    handleOnChange = e => {
        this.setState({value : e.target.value});
    }

    render() {

        const { note } = this.props;
        const { value } = this.state;

        return (
            <div className={`TodoElement ${note.done ? 'TodoElement--done' : ''} `} >
            <input 
            className={`input ${note.disabled ? 'input--disabled' : ''} `} 
            value={value} 
            disabled={note.disabled} 
            onChange={this.handleOnChange}
            />
            <div className="TodoElement__actions" >
            { note.disabled && !note.done && <button onClick={this.handleEditClick} className="button" >Edit</button>}
            { !note.disabled && !note.done && <button className="button" onClick={this.handleSaveClick} >Save</button>}
            <button className="button" onClick={this.handleDeleteClick} >Delete</button>
            <button className="button" onClick={this.handleDoneClick} >{ note.done ? 'Undone' : 'Done' }</button>
            </div>
            </div>
            );
        }
    }

    export default TodoElement;