import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'auto', border: '5px solid black', height: '500px', borderRadius: '1px'}}>
            { props.children }
        </div>
    );
}

export default Scroll;