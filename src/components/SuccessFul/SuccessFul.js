import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import ServicesList from '../AdminPage/ServicesList/ServicesList';
import Order from '../CustomerPage/Order/Order';

const SuccessFul = () => {
    const successFul = {
        color: '#3d03b4',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '5%',
        padding: '10%',
        width: '40%',
        background: 'rgb(231 255 255)'
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allAdmin`)
            .then(res => res.json())
            .then(data => {
                const currentAdmin = data.find(data => data.email === loggedInUser.email);
                setAdmin(currentAdmin);
            })
    }, [])
    return (
        <div style={successFul}>
            <div>
                <h3> SuccessFully done!</h3><br/><br/>
                <h3>Go home? <br/>
                    <Link to="/home" className>Home</Link>
                </h3>
                <br />
                <h3>------OR------</h3>
                <br />
            </div>
            <div>
                {
                    admin ?
                    <Link to="/servicesList"><h3>Admin Panel</h3></Link>
                    : 
                    <Link to="/order"><h3>Customer Panel</h3></Link>
                }
            </div>
        </div>
    );
};

export default SuccessFul;