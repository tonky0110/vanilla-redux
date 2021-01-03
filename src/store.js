import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addTodo = text => ({ type: ADD, text});

const deleteTodo = id => ({ type: DELETE, id });

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now()}, ...state];
        case DELETE:
            const cleaned = state.filter(todo => todo.id !== action.id);
            return cleaned;
        default:
            return state;
    }
};

const store = createStore(reducer);

// store.subscribe(); // react에서는 react-redux에서 처리해줌.

export default store;
