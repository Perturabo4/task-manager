import React from 'react';
import {connect} from 'react-redux';

import {taskDone} from '../../actions';
import CheckBox from '../check-box';
import Dropdown from '../dropdown';
import './card.scss';


const Card = ( {task, taskDone } ) => {
    const {done, imgSrc, title, text, id, open} = task;
    return (
        <div className="card">
            {done && <CheckBox onChange={() => taskDone(id)}/>}
            <div className="card-image">
                <img src={ imgSrc } alt="IMG"/>
                <span className="card-title">{ title }</span>
            </div>
            <div className="card-content">
                <p>{ text }</p>
            </div>
            <div className="card-action">
                {!done && <Dropdown open={open} id={id} />}
            </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {} 
}

const mapDispatchToProps = {
    taskDone
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);