import React from 'react'
import Score from './Score'

export default function Student(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
            <ul>
            {props.scores.map(({date, score}) => 
                <Score date={date} score={score} />
            )}
            </ul>
        </div>
    );
}