import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img src={`images/${props.player.kit}.jpg`} alt={`${props.player.name}`}/>
        <div className="text-block">
            <h4>{`${props.player.kit}`}</h4>
        </div>
        <h1>{props.player.name}</h1>
        <h3>{props.player.position}</h3>
    </div>
)  