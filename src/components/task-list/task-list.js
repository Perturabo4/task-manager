import React from 'react'
import {connect} from 'react-redux';

import Card from '../card';

const TaskList = ({tasks}) => {
    return (
        <>
           {
                tasks.map((task, id) => {
                    return <Card {...task} key={id}/>
                })
           }
        </>
    )
}

const mapStateToProps = ({tasks}) => ({tasks});

export default connect(mapStateToProps)(TaskList);