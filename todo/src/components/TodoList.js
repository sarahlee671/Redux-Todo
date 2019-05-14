import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo, addTodo} from '../Actions'
import '../App.css';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    }
    

    handleChanges = e => {
        this.setState({newTodo: e.target.value});
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ""});
    };

    toggleTodo = id => {
        this.props.toggleTodo(id);
    }

    deleteTodo = id => {
        this.props.deleteTodo(id);
       
    }

    render() {
        return (
            <React.Fragment>
                <div className="todo-list">
                    {this.props.todos &&
                        this.props.todos.map(todo => (
                            <div className={`todo ${todo.completed ? " completed" : ""}`} 
                            onClick={() => this.toggleTodo(todo.completed) }>
                                <h3 className="todos" onClick={() => this.toggleTodo(todo.id)} key={todo.id}>
                                    {todo.value}
                                </h3>
                                <button className="delete-button" onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                            </div>
                          
                        ))}
                </div>
                <div className="form">
                    <input className="input" type="text" value={this.state.newTodo} onChange={this.handleChanges} placeholder="Add Todo" />
                    <button className="add-button" onClick={this.addTodo}>Add Todo</button>
                </div>
            </React.Fragment>
        );
    }
}



const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo, toggleTodo, deleteTodo})(TodoList);