import React from 'react';

const NotFound = () => {
    const notFound = {
        color: 'red',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '5%',
        padding: '10%',        
        width: '40%',
        background: 'rgb(135 254 253)'
        }
    return (
        <div style={notFound}>
            <h3> 404 Error!!!</h3>
            <h3>Sorry Not Found !!!</h3>
        </div>
    );
};

export default NotFound;
