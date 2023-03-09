import React from 'react';

const Hobby = (props) => {
    return (
        <h5>
            My hobby: <span className='hobby'>{props.hobby}</span> 
        </h5>
    );
};

export default Hobby;