import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addTodo }) {
    console.log(toDos);
    const [text, setText] = useState('');
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText('');
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(todo => (
                    <ToDo {...todo} key={todo.id} />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = state => {
    return { toDos: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log(dispatch);
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text)),
        deleteTodo: (id) => dispatch(actionCreators.deleteTodo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
