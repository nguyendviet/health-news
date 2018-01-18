import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card border-success mb-3">
        <div className="card-header text-white bg-success border-success">
            <i className="material-icons">{props.icon}</i>
            <span className="card-title ml-2">{props.title}</span>
        </div>
        <div className="card-body">
            <div className="panel-body">{props.children}</div>
        </div>
    </div>
);

export default Card;