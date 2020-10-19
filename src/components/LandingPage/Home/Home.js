import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import Services from '../Services/Services';
import Feedback from '../Feedback/Feedback';
import Portfolio from '../Portfolio/Portfolio';
import ClientService from '../ClientService/ClientService';
import Contact from '../Contact/Contact';
import HeaderMain from '../HeaderMain/HeaderMain';
const Home = () => {
    return (
        <Container >
            <HeaderMain></HeaderMain>
            <ClientService></ClientService>
            <Services></Services>
            <Portfolio></Portfolio>
            <Feedback></Feedback>
            <Contact></Contact>
        </Container>
    );
}
export default Home;