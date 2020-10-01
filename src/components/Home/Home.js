import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/availableAppointments">See the available appointments.</Link>
        </div>
    );
};

export default Home;