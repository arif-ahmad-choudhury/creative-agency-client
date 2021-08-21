import React from 'react';
import img from '../../../images/customer-2.png';
import './FeedbackDetails.css'

const FeedbackDetails = (props) => {
    const { name, title, feedback } = props.feedback;
    return (
        <div className="col-md-4">
            <div className="feedbackDetail p-2 my-2">
                <div className="d-flex align-items-center">
                    <img className="mx-3" src={img} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p>{title}</p>
                    </div>
                </div>
                <div className="feedback-text">
                    <p className="text-secondary mt-4 text-left">{feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackDetails;