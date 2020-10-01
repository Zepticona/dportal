import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import TimePicker from 'react-time-picker'

// npm i @date-io/date-fns@1.x date-fns

const AvailableAppointments = () => {

    const [value, onChange] = useState('10:00');
    
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date)
    };

    const handleTimePicker = () => {
        console.log(typeof(value))
        const time = value.split(':');
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            
                            <TimePicker
                                onChange={onChange}
                                onBlur={handleTimePicker}
                                value={value}
                            />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item md="6">
                    picture
                </Grid>
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;