import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const ServicesList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminServiceList, setAdminServiceList] = useState([]);
    const [status, setStatus] = useState("Pending");

    const handleStatus = (status, id) => {
        setStatus(status);
        fetch(`https://rocky-waters-36239.herokuapp.com/statusUpdate`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status, id })
        })
            .then(res => res.json())
            .then(data => {
                console.log("updated");
            })
    }

    useEffect(() => {
        fetch(`https://rocky-waters-36239.herokuapp.com/adminShowServices`)
            .then(res => res.json())
            .then(data => {
                setAdminServiceList(data);
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
                    <Link to="/servicesList" className="text-success">
                        <img src="https://i.ibb.co/10VkpqZ/suitcase.png" alt="serviceList" style={iconStyle} />
                        Service list
                    </Link>
                    <Link to="/addService">
                        <img className="my-2" src="https://i.ibb.co/cD7JGpS/plus.png" alt="addService" style={iconStyle} />
                        Add Service
                    </Link>
                    <Link to="/makeAdmin">
                        <img className="my-2" src="https://i.ibb.co/CnvTwTg/add-user.png" alt="makeAdmin" style={iconStyle} />
                        Make Admin
                    </Link>
                </div>
                <div className="col-md-9 p-3 text-left" style={{ backgroundColor: 'rgb(210 255 248)' }}>
                    <div className="header-info d-flex justify-content-between">
                        <h5 className="my-4 font-weight-bold">Service List</h5>
                        <h5 className="my-4 font-weight-bold">{loggedInUser.displayName}</h5>
                    </div>
                    <div className="row p-3">
                        <Table className="adminTable">
                            <thead className="adminTableHead">
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Project Details</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    adminServiceList.map(
                                        singleService =>
                                            <tr key={singleService._id}>
                                                <td>{singleService.name}</td>
                                                <td>{singleService.email}</td>
                                                <td>{singleService.project}</td>
                                                <td>{singleService.projectDetails}</td>
                                                <td>
                                                    <Dropdown as={ButtonGroup}>
                                                        <Button variant="" className={singleService.status === "Pending" ? "text-danger" : singleService.status === "On going" ? "text-warning" : "text-success"}>{singleService.status}</Button>
                                                        <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item
                                                                href=""
                                                                onClick={() => { handleStatus("Pending", singleService._id) }}>
                                                                <Link to="/login" className="text-danger">Pending</Link>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item
                                                                href=""
                                                                onClick={() => { handleStatus("On going", singleService._id) }}>
                                                                <Link to="/login" className="text-warning">On going</Link>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item
                                                                href=""
                                                                onClick={() => { handleStatus("Done", singleService._id) }}>
                                                                <Link to="/login" className="text-success">Done</Link>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ServicesList;