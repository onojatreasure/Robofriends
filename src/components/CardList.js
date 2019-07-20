import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div style={{overflow: 'auto'}}>
    {
    robots.map((user, i) => {
        return  (
        <Card key={i} 
            id={robots[i].id} n
            name={robots[i].name} 
            email={robots[i].email}/> 
    );
    })
    }
    </div>
    
    );
}

export default CardList;
