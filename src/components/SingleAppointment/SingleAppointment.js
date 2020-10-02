import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppointment = (props) => {
    console.log(props.appointmentInfo)
    return (
        <div style={{border: '1px solid red', padding: '20px'}}>
            <h4>{props.appointmentInfo.name}</h4>
            <Link to={`/bookAppointment/${props.appointmentInfo.appointmentId}`}>
                <button>BOOK APPOINTMENT</button>
            </Link>
        </div>
    );
};

export default SingleAppointment;