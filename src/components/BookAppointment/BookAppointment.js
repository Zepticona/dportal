import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const BookAppointment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const appointmentName = useParams()
    console.log(appointmentName.appointmentNamem, loggedInUser);
    return (
        <div>
            <h2>Enter the following informations to book the appointment</h2>
            <form action="/sendBooking" method="post">
                <h4>{appointmentName.appointmentName}</h4>
                <input type="time" style={{display: 'block'}} required />
                <input type="text" name="name" placeholder="Your Name" style={{display: 'block'}} required />
                <input type="phone" name="phone" placeholder="Phone Number" style={{display: 'block'}} required />
                <input type="email" name="email" placeholder="Email" style={{display: 'block'}} required />
                <input type="date" name="date" style={{display: 'block'}} required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default BookAppointment;