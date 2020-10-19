import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="home-service p-2 my-2">
                <Link to="/order">
                    {
                        service.image ?
                            <img style={{ height: '50px' }} src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
                            :
                            <img style={{ height: '50px' }} src={`https://rocky-waters-36239.herokuapp.com/${service.img}`} alt="" />
                    }
                    <h5 className="mt-3 mb-3">{service.title}</h5>
                    <p className="text-secondary">{service.description}</p>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;