import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServicesDetails/ServicesDetail';
import './Services.css';

const Services = () => {   
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-waters-36239.herokuapp.com/getService`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <section className="services-container my-5 py-5">
            <div className="text-center">
                <h2>Provide awesome <span style={{ color: 'green' }} >services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-5 w-75">
                    {
                        services.map(service =>
                            <ServiceDetail
                                service={service}
                                key={service._id}>
                            </ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;