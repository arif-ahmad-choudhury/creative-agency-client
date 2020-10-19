import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    const onSubmit = (data) => {
        fetch('https://rocky-waters-36239.herokuapp.comad/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
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
                    <Link to="/addService">
                        <img className="my-2" src="https://i.ibb.co/cD7JGpS/plus.png" alt="addService" style={iconStyle}/>
                        Add Service
                    </Link>
                    <Link to="/makeAdmin" className="text-success">
                        <img className="my-2" src="https://i.ibb.co/CnvTwTg/add-user.png" alt="makeAdmin" style={iconStyle}/>
                        Make Admin
                    </Link>
                </div>
                <div className="col-md-9 p-3 text-left" style={{backgroundColor:'rgb(210 255 248)'}}>
                    <div className="header-info d-flex justify-content-between">
                        <h5 className="my-4 font-weight-bold">Make Admin</h5>
                        <h5 className="my-4 font-weight-bold">{loggedInUser.displayName}</h5>
                    </div>
                    <div className="row">
                        <div className="w-75 text-left p-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-row">
                                    <div class="form-group col-md-9">
                                        <label className="font-weight-bold">Email</label>
                                        <input name="email" className="form-control" ref={register({ required: true })} placeholder="jon@gmail.com" />
                                        {errors.email && <span className="text-danger text-left">Email is required</span>}
                                    </div>
                                    <div class="form-group col-md-3">
                                        <button className="btn btn-success" style={{ marginTop: '30px' }} type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MakeAdmin;