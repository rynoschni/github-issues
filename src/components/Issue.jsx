import React from 'react';

const Issue = props =>{
    
        return(
    <>
        <h1>This is the the Issues</h1>
        <h2>{props.post.title}</h2> 
        <a href={props.post.url}>{props.post.url}</a>
        <p>{props.post.body}</p>
    </>
    );

}

export default Issue;