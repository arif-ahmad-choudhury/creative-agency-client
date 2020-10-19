import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import logo from '../../../images/logos/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        data.image = loggedInUser.photo;

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
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
                        <img src={logo} alt="logo" className="my-4 logo" style={{ height: '40px' }} />
                    </Link>
                    <Link to="/order">
                        <img src="https://i.ibb.co/PN40LT1/shopping-cart-of-checkered-design.png" alt="customerServiceList" style={iconStyle} />
                        Order
                    </Link>
                    <Link to="/customerServiceList">
                        <img className="my-2" src="https://i.ibb.co/10VkpqZ/suitcase.png" alt="addService" style={iconStyle} />
                        Services List
                    </Link>
                    <Link to="/review" className="text-success">
                        <img src="https://i.ibb.co/HBCpr8F/comment.png" alt="makeAdmin" style={iconStyle} />
                        Review
                    </Link>
                </div>
                <div className="col-md-9 p-3 text-left" style={{ backgroundColor: 'rgb(210 255 248)' }}>
                    <div className="header-info d-flex justify-content-between">
                        <h5 className="my-4 ml-2 font-weight-bold text-left">Review</h5>
                        <h5 className="my-4 font-weight-bold">{loggedInUser.displayName}</h5>
                    </div>
                    <div className="row text-left">
                        <div className="w-75 p-3">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input name="name" className="form-control p-2  my-2" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="Your Name" />
                                {errors.name && <span className="text-danger text-left">Name is required</span>}

                                <input type="text" name="title" className="form-control p-2  my-2" ref={register({ required: true })} placeholder="Company's name, Designation" />
                                {errors.title && <span className="text-danger text-left">Company's name, Designation is required</span>}

                                <textarea name="feedback" type="text" rows="3" className="form-control my-2" ref={register({ required: true })} placeholder="Description" ></textarea>
                                {errors.feedback && <span className="text-danger text-left">Description is required</span>}

                                <button className="btn btn-dark" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Review;