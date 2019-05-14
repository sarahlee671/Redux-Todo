import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../Actions';

const initialState = {
    todos: [
        { value: "Laundry", completed: false, id: 1 },
        { value: 'Clean Room', completed: false, id: 2},
    
    ],
    counter: 2
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO:

            return {
                ...state,
                counter: state.counter + 1,
                todos: [
                    ...state.todos,
                    { value: action.payload, completed: false, id: state.counter + 1}
                ]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } 
                    return todo;
                })
            }

        case DELETE_TODO:
            const updatedTodos = state.todos.filter(todo => todo.id !== action.id)
            return {
                ...state,
                todos: updatedTodos
                
            }
        default:
            return state
    }
}

export default reducer;

