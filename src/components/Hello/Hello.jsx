import React from 'react';

const Hello = (props) => {
    console.log(props)
    return (
        <p>
            Hello <span>{props.name}.</span> Возраст <span>{props.age}</span> 
        </p>
    );
};

export default Hello;