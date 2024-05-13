// app.js

const express = require('express');
const app = express();

// Import calendarService and emailService
const calendarService = require('./calendarService');
const emailService = require('./emailService');

// Define routes to handle calendar and email functionalities
app.post('/add-event', (req, res) => {
    // Add event to calendar
    calendarService.addEvent(req.body)
        .then(() => {
            res.send('Event added successfully');
        })
        .catch(error => {
            console.error('Error adding event:', error);
            res.status(500).send('Error adding event');
        });
});

app.post('/send-email', (req, res) => {
    // Send email
    emailService.sendEmail(req.body)
        .then(() => {
            res.send('Email sent successfully');
        })
        .catch(error => {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
