import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppointment = (props) => {
    return (
        <div style={{border: '1px solid red', padding: '20px'}}>
            <h4>{props.name}</h4>
            <Link to={`/bookAppointment/${props.name}`}>
                <button>BOOK APPOINTMENT</button>
            </Link>
        </div>
    );
};

export default SingleAppointment;