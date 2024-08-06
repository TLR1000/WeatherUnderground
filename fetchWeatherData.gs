function fetchWeatherData() {
  var apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  var stationId = 'IHELLE11'; // Hellecat

  var url = 'https://api.weather.com/v2/pws/observations/current?stationId=' + stationId + '&format=json&units=m&numericPrecision=decimal&apiKey=' + apiKey;

  var response = UrlFetchApp.fetch(url);
  var result = JSON.parse(response.getContentText());
  var observation = result.observations[0];

  // Extract data
  /*
  The measurements provided by the Weather Underground API in your script are given in metric units, as specified by the units=m parameter in the API URL. Specifically:
  
  Temperature: Celsius (°C)
  Wind Speed: kilometers per hour (km/h)
  Wind Gust: kilometers per hour (km/h)
  Pressure: hectopascals (hPa)
  Rain: millimeters (mm)
  Rain Rate: millimeters per hour (mm/h)
  Wind Chill: Celsius (°C)
  Heat Index: Celsius (°C)
  Dew Point: Celsius (°C)
  The script converts these values to other units (e.g., Fahrenheit, m/s, mph) for additional use or logging.
  */

  var timestamp = observation.obsTimeLocal;
  var solarRadiation = observation.solarRadiation;
  var winddir = observation.winddir;
  var uv = observation.uv;
  var humidity = observation.humidity;
  var temperatureC = observation.metric.temp;
  var windspeedKnots = observation.metric.windSpeed;
  var pressure = observation.metric.pressure;
  var rain = observation.metric.precipTotal;
  var rain_rate = observation.metric.precipRate;
  var windchillC = observation.metric.windChill;
  var heatindexC = observation.metric.heatIndex;
  var dewptC = observation.metric.dewpt;
  var windstootKnots = observation.metric.windGust;

  // Conversions
  var timestamp = observation.obsTimeLocal;
  var solarRadiation = observation.solarRadiation;
  var winddir = observation.winddir;
  var uv = observation.uv;
  var humidity = observation.humidity;
  var temperatureC = observation.metric.temp;
  var windspeedKph = observation.metric.windSpeed;
  var pressure = observation.metric.pressure;
  var rain = observation.metric.precipTotal;
  var rain_rate = observation.metric.precipRate;
  var windchillC = observation.metric.windChill;
  var heatindexC = observation.metric.heatIndex;
  var dewptC = observation.metric.dewpt;
  var windgustKph = observation.metric.windGust;

  // Conversions
  var temperatureF = temperatureC * 9 / 5 + 32; // Celsius to Fahrenheit
  var windspeedMs = windspeedKph * 0.27778; // km/h to m/s
  var windspeedKnots = windspeedKph / 1.852; // km/h to knots
  var windspeedMph = windspeedKph * 0.621371; // km/h to mph
  var windgustMs = windgustKph * 0.27778; // km/h to m/s
  var windgustKnots = windgustKph / 1.852; // km/h to knots
  var windgustMph = windgustKph * 0.621371; // km/h to mph
  var windchillF = windchillC * 9 / 5 + 32; // Celsius to Fahrenheit
  var heatindexF = heatindexC * 9 / 5 + 32; // Celsius to Fahrenheit
  var dewptF = dewptC * 9 / 5 + 32; // Celsius to Fahrenheit

  // Log the data
  Logger.log('Station: ' + stationId);
  Logger.log('Temperature (C): ' + temperatureC);
  Logger.log('Temperature (F): ' + temperatureF);
  Logger.log('Windspeed (km/h): ' + windspeedKph);
  Logger.log('Windspeed (m/s): ' + windspeedMs);
  Logger.log('Windspeed (knots): ' + windspeedKnots);
  Logger.log('Windspeed (mph): ' + windspeedMph);
  Logger.log('Wind Gust (km/h): ' + windgustKph);
  Logger.log('Wind Gust (m/s): ' + windgustMs);
  Logger.log('Wind Gust (knots): ' + windgustKnots);
  Logger.log('Wind Gust (mph): ' + windgustMph);
  Logger.log('Wind Direction: ' + winddir);
  Logger.log('Pressure (hPa): ' + pressure);
  Logger.log('Humidity (%): ' + humidity);
  Logger.log('Solar Radiation (W/m²): ' + solarRadiation);
  Logger.log('UV Index: ' + uv);
  Logger.log('Rain (mm): ' + rain);
  Logger.log('Rain Rate (mm/h): ' + rain_rate);
  Logger.log('Wind Chill (C): ' + windchillC);
  Logger.log('Wind Chill (F): ' + windchillF);
  Logger.log('Heat Index (C): ' + heatindexC);
  Logger.log('Heat Index (F): ' + heatindexF);
  Logger.log('Dew Point (C): ' + dewptC);
  Logger.log('Dew Point (F): ' + dewptF);
  Logger.log('Timestamp: ' + timestamp);
}
