import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/photograpy-logo1.png';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [file, setFile] = useState(null);

    const history = useHistory();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('project', data.project);
        formData.append('projectDetails', data.projectDetails);
        formData.append('price', data.price);
        formData.append('status', "Pending");

        fetch('https://rocky-waters-36239.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        history.push('/succeess');
    }
    const iconStyle = {
        width: '20px',
        marginRight: '10px'
    }
    return (
        <Container>
            <div className="row side-nav">
                <div className="col-md-3 d-flex flex-column">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-4 logo" />
                    </Link>
                    <Link to="/order" className="text-success">
                        <img src="https://i.ibb.co/PN40LT1/shopping-cart-of-checkered-design.png" alt="customerServiceList" style={iconStyle} />
                        Order
                    </Link>
                    <Link to="/customerServiceList">
                        <img className="my-2" src="https://i.ibb.co/10VkpqZ/suitcase.png" alt="addService" style={iconStyle} />
                        Services List
                    </Link>
                    <Link to="/review">
                        <img src="https://i.ibb.co/HBCpr8F/comment.png" alt="makeAdmin" style={iconStyle} />
                        Review
                    </Link>
                </div>
                <div className="col-md-9 text-left" style={{ backgroundColor: 'rgb(210 255 248)' }}>
                    <div className="header-info d-flex justify-content-between">
                        <h5 className="my-4 ml-2 font-weight-bold text-left">Order</h5>
                        <h5 className="my-4 font-weight-bold">{loggedInUser.displayName}</h5>
                    </div>
                    <div className="row">
                        <div className="w-75 p-3">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input name="name" className=" form-control p-2  my-2" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="Your Name" />
                                {errors.name && <span className="text-danger text-left">Name is required</span>}

                                <input name="email" className=" form-control p-2  my-2" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                                {errors.email && <span className="text-danger text-left">Email is required</span>}

                                <input type="text" name="project" className=" form-control p-2  my-2" ref={register({ required: true })} placeholder="Project"  autoComplete="off"/>
                                {errors.project && <span className="text-danger text-left">Project is required</span>}

                                <textarea name="projectDetails" type="text" rows="3" className="form-control" ref={register({ required: true })} placeholder="Project Details"></textarea>
                                {errors.projectDetails && <span className="text-danger text-left">Project Details is required</span>}

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input name="price" className="form-control p-2  my-2" ref={register({ required: true })} placeholder="Price" />
                                        {errors.price && <span className="text-danger text-left">Price is required</span>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="file" name="file" onChange={handleFileChange} className="my-3" />
                                    </div>
                                </div>
                                <button className="btn btn-dark float-left" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Order;