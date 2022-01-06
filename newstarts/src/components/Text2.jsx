import React from 'react';

const Text2 = (props) => {
    return (
        <div className='text2'>
            <div className='post__content'>
            {props.post.id} . {props.post.title}
            </div>
            {props.post.body}
        </div>
    );
};

export default Text2;