import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import TimePicker from 'react-time-picker'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import SingleAppointment from '../SingleAppointment/SingleAppointment';


// npm i @date-io/date-fns@1.x date-fns

const AvailableAppointments = () => {

    const [currentTime, setCurrentTime] = useState('10:00');
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleTimePicker = () => {
        console.log(typeof(currentTime))
        const time = currentTime.split(':');
        const clockHours = parseFloat(time[0]);
        const clockMins = parseFloat(time[1]);
        console.log(`Hours = ${clockHours} and mins = ${clockMins}`);
        let dayTime = 'AM';
        let hour;
        let dayTimeFinder = clockHours - 12; 
        console.log(dayTimeFinder)
        if( dayTimeFinder >= 0) {
            dayTime = 'PM';
            if(dayTimeFinder === 0) {
                hour = 12;
            } else {
                hour = dayTimeFinder;
            }
        }
        if( dayTimeFinder < 0) {
            dayTime = 'AM';
            if(dayTimeFinder === -12) {
                hour = 12
            } else {
                hour = clockHours;
            }
        }
        const selectedTime = `${hour}: ${clockMins} ${dayTime}`
        console.log(selectedTime)
    }
    
    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item md="6">
                    <Calendar
                       onChange={setCurrentDate}
                       value={currentDate} 
                    />
                    <TimePicker
                        onChange={setCurrentTime}
                        onBlur={handleTimePicker}
                        value={currentTime}
                    />
                </Grid>

                <Grid item md="6">
                   
                </Grid>
            </Grid>
            <div>
            <SingleAppointment appointmentInfo={{name: 'Teeth Cleaning', currentDate, appointmentId: 1}}></SingleAppointment>
            </div>
        </Container>
    );
};

export default AvailableAppointments;