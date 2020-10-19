import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Order from '../CustomerPage/Order/Order';
import ServicesList from './ServicesList/ServicesList';

const AdminPage = () => {
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
        <div>
            {
                admin? <ServicesList/> : <Order/> 
            }
        </div>
    );
};

export default AdminPage;