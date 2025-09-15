Weather Web App
A responsive, modern weather application that allows users to search for weather information by city name or current location.

Features
Core Features
🔍 City Search: Enter any city name to get current weather information
📍 Location Detection: Automatically detect your current location
🌡️ Temperature Toggle: Switch between Celsius and Fahrenheit
🌙 Dark/Light Theme: Toggle between light and dark modes
💾 Local Storage: Saves your last searched city and preferences
⚡ Loading States: Beautiful loading spinner during data fetching
❌ Error Handling: Clear error messages for various scenarios
Weather Information Displayed
City name and country
Current temperature
Weather condition and description
Weather icon from OpenWeatherMap
Feels like temperature
Humidity percentage
Wind speed
Atmospheric pressure
Design Features
📱 Responsive Design: Works perfectly on mobile and desktop
🎨 Dynamic Backgrounds: Background changes based on weather conditions
✨ Modern UI: Clean, card-based design with smooth animations
🎯 Accessibility: Proper focus styles and reduced motion support
🚀 Fast Loading: Optimized for performance
Technologies Used
HTML5: Semantic structure
CSS3: Modern styling with Flexbox/Grid, CSS Custom Properties
Vanilla JavaScript: ES6+ features, Fetch API, Geolocation API
OpenWeatherMap API: Real-time weather data
Google Fonts: Poppins font family
Font Awesome: Icons for UI elements
Setup Instructions
1. Get OpenWeatherMap API Key
Visit OpenWeatherMap
Create a free account
Generate an API key
2. Configure the App
Open script.js
Replace YOUR_OPENWEATHERMAP_API_KEY with your actual API key:
this.API_KEY = 'your_actual_api_key_here';
3. Run the Application
Open index.html in your web browser
Or serve it using a local server for best results
4. Deploy (Optional)
The app is ready for deployment on:

Netlify: Drag and drop the folder
Vercel: Import from GitHub
GitHub Pages: Push to repository and enable Pages
File Structure
weather-app/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
Browser Support
Chrome 60+
Firefox 60+
Safari 12+
Edge 79+
API Usage
This app uses the OpenWeatherMap Current Weather API:

Endpoint: https://api.openweathermap.org/data/2.5/weather
Free tier: 1000 calls/day
No billing information required
Features Explanation
Weather-Based Backgrounds
Clear Sky: Warm gradient (orange to peach)
Sunny: Blue gradient
Cloudy: Purple gradient
Rainy: Dark gray gradient
Snowy: Orange to yellow gradient
Local Storage
The app stores:

Last searched city
Theme preference (light/dark)
Temperature unit preference (°C/°F)
Error Handling
Invalid city names
Network connectivity issues
API key problems
Geolocation errors
API rate limits
Responsive Design
Mobile: Single column layout, optimized touch targets
Tablet/Desktop: Enhanced spacing and hover effects
Development
Adding New Features
The code is modular and easy to extend:

5-Day Forecast: Add forecast API endpoint
Weather Maps: Integrate weather radar
Push Notifications: Add service worker notifications
Weather Alerts: Display severe weather warnings
Customization
Colors: Modify CSS custom properties in :root
Fonts: Change Google Fonts import and CSS font-family
Layout: Adjust CSS Grid/Flexbox properties
Animations: Modify CSS keyframes and transitions
Troubleshooting
Common Issues
"Please add your API key" error

Solution: Replace the placeholder API key in script.js
"City not found" error

Solution: Check spelling or try a different city name
Location detection not working

Solution: Allow location permissions in browser
Ensure HTTPS when deployed
App not loading

Solution: Check browser console for errors
Verify all files are in the same directory
License
This project is open source and available under the MIT License.

Contributing
Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
Contact
If you have any questions or suggestions, feel free to reach out!

Enjoy using your weather app! 🌤️
