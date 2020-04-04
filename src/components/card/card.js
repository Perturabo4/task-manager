import React from 'react';
import {connect} from 'react-redux';
import {compose} from '../../utils';
import WithTaskService from '../hoc';
import Spinner from '../spinner';
import {updateTask} from '../../actions';
import CheckBox from '../check-box';
import Dropdown from '../dropdown';
import './card.scss';

const Priority = ({priority}) => {
    const text = {low: 'Низкий', normal: 'Средний', high: 'Высокий'};
    const color = {low: 'green', normal: 'orange', high: 'red'};

    return (
        <span style={{fontSize: '0.8rem'}}>
            Приоритет:<br/>
            <span 
                style={{color: color[priority], fontSize: '1.2rem'}}
            >
                {text[priority]}
            </span>
        </span>
    );
}

const Card = ( {task, updateTask} ) => {
    const {done, imgSrc, title, text, id, open, priority, inProgres} = task;
    const classes = [];

    if(done) {
        classes.push('done');
    }

    if(inProgres) {
        classes.push('inProgres');
    }

    return (
        <div className={`card ${classes.join(' ')}`}>
            <div className="card-shadow">
                {inProgres && <Spinner />}
            </div>
            {done && <CheckBox onChange={() => updateTask(id, null, ['done', false])}/>}
            <div className="card-image">
                <img src={ imgSrc } alt="IMG"/>
                <span className="card-title">{ title }</span>
            </div>
            <div className="card-content">
                <p>{ text }</p>
            </div>
            <div className="card-action">
                <Priority priority={priority}/>
                {!done && <Dropdown open={open} id={id} done={done}/>}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, {TaskService}) => {
    return {
        updateTask: updateTask(dispatch, TaskService)
    }
}
    
export default compose(
        WithTaskService(),
        connect(null, mapDispatchToProps)
    )(Card);