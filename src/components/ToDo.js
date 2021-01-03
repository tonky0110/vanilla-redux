import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({ text, id, onBtnClick }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
                <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
   onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)) 
});

export default connect(null, mapDispatchToProps)(ToDo);
