fetch("https://api.weather.gov/gridpoints/LWX/96,70/forecast")
  .then(response => response.json())
  .then(data => {
    var allUsers = data.properties.periods;
  
    allUsers.forEach(user => {
      var element = document.createElement('div');
     
      element.className = 'user-card';
      element.innerHTML = `
        <h2>${user.name}</h2>
   
        <p>Wind Speed: ${user.startTime}</p>
        <p>Short Forecast: ${user.endTime}</p>
        <p>Temperature: ${user.temperature}</p>
        <p>Temperature Unit: ${user.temperatureUnit}</p>
        <p>Temperature Trend: ${user.temperatureTrend}</p>
        <p>Wind Speed: ${user.windSpeed}</p>
        <p>Wind Direction: ${user.windDirection}</p>
        <p>Short Forecast: ${user.shortForecast}</p>
        <p>Longer Forecast: ${user.detailedForecast}</p>
   
        
      `;
      
      document.body.appendChild(element);
    });
  })
  .catch(error => console.error('Error:', error));
