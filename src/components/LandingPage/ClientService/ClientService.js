import React from 'react';
import logo1 from '../../../images/logos/slack.png';
import logo2 from '../../../images/logos/google.png';
import logo3 from '../../../images/logos/uber.png';
import logo4 from '../../../images/logos/netflix.png';
import logo5 from '../../../images/logos/airbnb.png';
const ClientData = [
    {      
        img: logo1       
    },
    {      
        img: logo2       
    },
    {      
        img: logo3       
    },
    {      
        img: logo4       
    },
    {      
        img: logo5       
    }
]
const ClientService = () => {
    return (
        <section className="d-flex justify-content-center pt-5">
            <div className="w-20 row m-auto">
                {
                    ClientData.map(client => <img style={{height: '70px',padding: '10px'}} src={client.img} alt="" key={client.img}/>)
                }
            </div>
        </section>
    );
};

export default ClientService;