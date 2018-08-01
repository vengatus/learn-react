import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    if(Math.random() > 0.9)
        throw new Error('Mi error !');
    return (
        <div className={classes.Person}>
            <button className={"danger"} onClick={props.delete}>Remove</button>
            <p onClick={props.click}>Hello, my name is <strong>{props.name}</strong> and I'm <strong>{props.career}</strong></p>
            <small>{props.children}</small>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );

};

export default Person;