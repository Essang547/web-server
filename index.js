require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 4000; // Change to port 4000

app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name || 'Visitor';
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    let city = 'Unknown';
    let temperature = 'Unknown';

    try {
        // Use OpenWeatherMap to get location and temperature based on IP
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.OPENWEATHERMAP_KEY}&units=metric`);
        city = response.data.name || 'Unknown';
        temperature = response.data.main.temp;
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }

    res.json({
        client_ip: clientIp,
        location: city,
        greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${city}`
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
