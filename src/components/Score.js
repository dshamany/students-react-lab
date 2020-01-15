import React from 'react'

export default function Score(props){
    return (
        <li>
            <p><b>{props.date}:</b> {props.score} points</p>
        </li>
    )
}