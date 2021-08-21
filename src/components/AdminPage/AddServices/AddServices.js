import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/photograpy-logo1.png';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const AddServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [file, setFile] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', data.title);
        formData.append('description', data.description);
        console.log(data);

        fetch('https://rocky-waters-36239.herokuapp.com/addService', {
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
    const iconStyle={
        width:'20px',
        marginRight:'10px'
    }
    return (
        <Container>
            <div className="row side-nav">
                <div className="col-md-3 d-flex flex-column">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-4 logo" style={{ height: '40px' }} />
                    </Link>
                    <Link to="/servicesList">
                        <img src="https://i.ibb.co/10VkpqZ/suitcase.png" alt="serviceList" style={iconStyle}/>
                        Service list
                    </Link>
                    <Link to="/addService" className="text-success">
                        <img className="my-2" src="https://i.ibb.co/cD7JGpS/plus.png" alt="addService" style={iconStyle}/>
                        Add Service
                    </Link>
                    <Link to="/makeAdmin">
                        <img className="my-2" src="https://i.ibb.co/CnvTwTg/add-user.png" alt="makeAdmin" style={iconStyle}/>
                        Make Admin
                    </Link>
                </div>
                <div className="col-md-9 text-left" style={{backgroundColor:'rgb(210 255 248)'}}>
                    <div className="header-info d-flex justify-content-between">
                        <h5 className="my-4 font-weight-bold">Add Services</h5>
                        <h5 className="my-4 font-weight-bold">{loggedInUser.displayName}</h5>
                    </div>
                    <div className="w-75">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="font-weight-bold">Service Title</label>
                                    <input name="title" className="form-control" ref={register({ required: true })} placeholder="Enter title" autoComplete="off"/>
                                    {errors.title && <span className="text-danger text-left">Service title is required</span>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="font-weight-bold">Icon</label>
                                    <input onChange={handleFileChange} type="file" name="file" ref={register({ required: true })} />
                                    {errors.file && <span className="text-danger text-left">Icon is required</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Description</label>
                                <textarea name="description" type="text" rows="3" className="form-control" ref={register({ required: true })} placeholder="Enter description" ></textarea>
                                {errors.description && <span className="text-danger text-left">Project Details is required</span>}
                            </div>
                            <button className="btn btn-success btn-block" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AddServices;