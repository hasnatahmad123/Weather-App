# 🌦️ Weather Web App

A responsive, modern weather application that allows users to search for weather information by city name or current location.  
Built with **HTML, CSS, JavaScript** and powered by the **OpenWeatherMap API**.

---

## 🚀 Features

### 🔑 Core Features
- 🔍 **City Search**: Enter any city name to get current weather information  
- 📍 **Location Detection**: Automatically detect your current location  
- 🌡️ **Temperature Toggle**: Switch between Celsius and Fahrenheit  
- 🌙 **Dark/Light Theme**: Toggle between light and dark modes  
- 💾 **Local Storage**: Saves your last searched city and preferences  
- ⚡ **Loading States**: Beautiful loading spinner during data fetching  
- ❌ **Error Handling**: Clear error messages for various scenarios  

### 🌤️ Weather Information Displayed
- City name and country  
- Current temperature  
- Weather condition and description  
- Weather icon from OpenWeatherMap  
- Feels like temperature  
- Humidity percentage  
- Wind speed  
- Atmospheric pressure  

### 🎨 Design Features
- 📱 **Responsive Design**: Works perfectly on mobile and desktop  
- 🎨 **Dynamic Backgrounds**: Background changes based on weather conditions  
- ✨ **Modern UI**: Clean, card-based design with smooth animations  
- 🎯 **Accessibility**: Proper focus styles and reduced motion support  
- 🚀 **Fast Loading**: Optimized for performance  

---

## 🛠️ Technologies Used
- **HTML5**: Semantic structure  
- **CSS3**: Flexbox/Grid, custom properties  
- **Vanilla JavaScript (ES6+)**: Fetch API, Geolocation API  
- **OpenWeatherMap API**: Real-time weather data  
- **Google Fonts**: Poppins font family  
- **Font Awesome**: UI icons  

---

## ⚙️ Setup Instructions

1. **Get OpenWeatherMap API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/)  
   - Create a free account  
   - Generate an API key  

2. **Configure the App**
   - Open `script.js`  
   - Replace the placeholder with your actual API key:
     ```js
     this.API_KEY = 'your_actual_api_key_here';
     ```

3. **Run the Application**
   - Open `index.html` in your web browser  
   - Or use a local server for best results  

4. **Deploy (Optional)**
   - **Netlify**: Drag and drop the folder  
   - **Vercel**: Import from GitHub  
   - **GitHub Pages**: Push to repository and enable Pages  

---

## 📂 File Structure

weather-app/
├── index.html # Main HTML file
├── style.css # Styling and responsive design
├── script.js # JavaScript functionality
└── README.md # Documentation

---

## 🌐 Browser Support
- Chrome 60+  
- Firefox 60+  
- Safari 12+  
- Edge 79+  

---

## 🌍 API Usage

This app uses the **OpenWeatherMap Current Weather API**:  
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`  
- Free tier: 1000 calls/day  
- No billing information required  

---

## 🔧 Development & Customization

### Adding New Features
- 5-Day Forecast → integrate OpenWeather forecast API  
- Weather Maps → add radar visualization  
- Push Notifications → service workers  
- Weather Alerts → severe weather warnings  

### Customization
- 🎨 Colors: Edit CSS custom properties in `:root`  
- 🔤 Fonts: Change Google Fonts in CSS  
- 🖼️ Layout: Adjust Flexbox/Grid in `style.css`  
- ✨ Animations: Modify CSS keyframes  

---

## 🛠️ Troubleshooting

**Common Issues**  
- *"Please add your API key"*: Add your key in `script.js`  
- *"City not found"*: Check spelling or try a different city  
- *Location detection not working*: Allow location permissions + ensure HTTPS  
- *App not loading*: Check console errors and file paths  

---

## 📜 License
This project is open source and available under the **MIT License**.

---

## 🤝 Contributing
1. Fork the project  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

---

## 📬 Contact
If you have any questions or suggestions, feel free to reach out.  

Enjoy using your Weather App! 🌤️
