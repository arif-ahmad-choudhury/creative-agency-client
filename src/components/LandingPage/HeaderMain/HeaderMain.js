import React from 'react';
import './HeaderMain.css';
import Frame from '../../../images/p8.jpg';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
const HeaderMain = () => {
    return (
        <Container>
            <main style={{background:'#FFFFFF'}} className="row d-flex align-items-center py-5">
                <Header/> 
                <div className="col-md-4 offset-md-1">
                    <h1>Let’s Grow Your <br/> Brand To The<br/> Next Level</h1>
                    <p className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                    <Link to="/login">
                            <button className="btn btn-dark">Hire us</button>
                    </Link>                
                </div>
                <div className="col-md-6">
                    <img src={Frame} alt="" className="img-fluid"/>
                </div>
            </main> 
        </Container>      
    );
};
export default HeaderMain;

