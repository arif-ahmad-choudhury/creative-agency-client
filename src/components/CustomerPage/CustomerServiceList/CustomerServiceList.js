import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const CustomerServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [customerServiceList, setCustomerServiceList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/showOrder?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setCustomerServiceList(data);
            })
    }, [])

    const iconStyle = {
        width: '20px',
        marginRight: '10px'
    }
    return (
        <Container>
            <div className="row side-nav">
                <div className="col-md-3 d-flex flex-column">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-4 logo" style={{ height: '40px' }} />
                    </Link>
                    <Link to="/order">
                        <img src="https://i.ibb.co/PN40LT1/shopping-cart-of-checkered-design.png" alt="customerServiceList" style={iconStyle} />
                        Order
                    </Link>
                    <Link to="customerServiceList" className="text-success">
                        <img className="my-2" src="https://i.ibb.co/10VkpqZ/suitcase.png" alt="addService" style={iconStyle} />
                        Services List
                    </Link>
                    <Link to="/review">
                        <img src="https://i.ibb.co/HBCpr8F/comment.png" alt="makeAdmin" style={iconStyle} />
                        Review
                    </Link>
                </div>
                <div className="col-md-9 p-3 text-left" style={{ backgroundColor: 'rgb(210 255 248)' }}>
                    <div className="header-info d-flex justify-content-between">
                        <h5 className="my-4 ml-2 font-weight-bold text-left">Service List</h5>
                        <h5 className="my-4 font-weight-bold">{loggedInUser.displayName}</h5>
                    </div>
                    <div className="row text-left p-3">
                        {
                            customerServiceList.map(service =>
                                <div className="col-md-6" key={service._id}>
                                    <div className="bg-white p-4 my-2 rounded">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                {
                                                    service.image.img && <img src={`data:image/png;base64,${service.image.img}`} className="w-25" alt="service" />
                                                }
                                            </div>
                                            <button className=
                                                {
                                                    service.status === "Pending" ? "btn btn-danger"
                                                        : service.status === "On going" ? "btn btn-warning"
                                                            : "btn btn-success"
                                                }
                                            >{service.status}</button>
                                        </div>
                                        <div className="my-3">
                                            <h5>{service.project}</h5>
                                            <p className="text-secondary">{service.projectDetails}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CustomerServiceList;