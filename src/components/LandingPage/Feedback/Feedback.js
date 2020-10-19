import React, { useEffect, useState } from 'react';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';
import './Feedback.css';

const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/feedback`)
            .then(res => res.json())
            .then(data => {
                setFeedbackData(data);
            })
    }, [])

    return (
        <section className="feedbacks my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Clients <span style={{ color: 'green' }} > Feedback</span></h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row mt-5 w-75">
                        {
                            feedbackData.map(feedback =>
                                <FeedbackDetails
                                    feedback={feedback}
                                    key={feedback._id}>
                                </FeedbackDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;