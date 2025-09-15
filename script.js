// Weather App JavaScript
class WeatherApp {
    constructor() {
        this.API_KEY = '0159c07fcd2805290f4b482a25ec5757'; // Replace with your actual API key
        this.BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
        this.currentUnit = 'celsius';
        this.weatherData = null;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.loadLastSearchedCity();
        this.initializeTheme();
        this.checkApiKey();
    }

    initializeElements() {
        // Input elements
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.locationBtn = document.getElementById('locationBtn');
        this.themeToggle = document.getElementById('themeToggle');
        
        // Display elements
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.errorMessage = document.getElementById('errorMessage');
        this.weatherCard = document.getElementById('weatherCard');
        this.errorText = document.getElementById('errorText');
        
        // Weather info elements
        this.cityName = document.getElementById('cityName');
        this.countryName = document.getElementById('countryName');
        this.tempValue = document.getElementById('tempValue');
        this.weatherDescription = document.getElementById('weatherDescription');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.pressure = document.getElementById('pressure');
        
        // Temperature unit toggles
        this.tempUnits = document.querySelectorAll('.temp-unit');
    }

    initializeEventListeners() {
        // Search functionality
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch();
            }
        });
        
        // Location detection
        this.locationBtn.addEventListener('click', () => this.getCurrentLocation());
        
        // Theme toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Temperature unit toggle
        this.tempUnits.forEach(unit => {
            unit.addEventListener('click', () => this.toggleTemperatureUnit(unit.dataset.unit));
        });
    }

    checkApiKey() {
        if (this.API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
            this.showError('Please add your OpenWeatherMap API key to script.js to use this app.');
        }
    }

    async handleSearch() {
        const city = this.cityInput.value.trim();
        if (!city) {
            this.showError('Please enter a city name.');
            return;
        }
        
        await this.fetchWeatherData(city);
    }

    async fetchWeatherData(city) {
        if (this.API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
            this.showError('API key not configured. Please add your OpenWeatherMap API key.');
            return;
        }

        this.showLoading();
        
        try {
            const url = `${this.BASE_URL}?q=${encodeURIComponent(city)}&appid=${this.API_KEY}&units=metric`;
            const response = await fetch(url);
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('City not found. Please check the spelling and try again.');
                } else if (response.status === 401) {
                    throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
                } else {
                    throw new Error('Failed to fetch weather data. Please try again later.');
                }
            }
            
            const data = await response.json();
            this.weatherData = data;
            this.displayWeatherData(data);
            this.saveLastSearchedCity(city);
            this.updateBackgroundBasedOnWeather(data.weather[0].main.toLowerCase());
            
        } catch (error) {
            console.error('Weather API Error:', error);
            this.showError(error.message);
        }
    }

    async fetchWeatherByCoords(lat, lon) {
        if (this.API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY') {
            this.showError('API key not configured. Please add your OpenWeatherMap API key.');
            return;
        }

        this.showLoading();
        
        try {
            const url = `${this.BASE_URL}?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Failed to fetch weather data for your location.');
            }
            
            const data = await response.json();
            this.weatherData = data;
            this.displayWeatherData(data);
            this.saveLastSearchedCity(data.name);
            this.updateBackgroundBasedOnWeather(data.weather[0].main.toLowerCase());
            
        } catch (error) {
            console.error('Weather API Error:', error);
            this.showError(error.message);
        }
    }

    displayWeatherData(data) {
        // Update city information
        this.cityName.textContent = data.name;
        this.countryName.textContent = data.sys.country;
        
        // Update temperature
        const temp = this.currentUnit === 'celsius' ? data.main.temp : this.celsiusToFahrenheit(data.main.temp);
        this.tempValue.textContent = Math.round(temp);
        
        // Update weather description and icon
        this.weatherDescription.textContent = data.weather[0].description;
        this.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        this.weatherIcon.alt = data.weather[0].description;
        
        // Update weather details
        const feelsLikeTemp = this.currentUnit === 'celsius' ? data.main.feels_like : this.celsiusToFahrenheit(data.main.feels_like);
        this.feelsLike.textContent = `${Math.round(feelsLikeTemp)}°${this.currentUnit === 'celsius' ? 'C' : 'F'}`;
        this.humidity.textContent = `${data.main.humidity}%`;
        this.windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
        this.pressure.textContent = `${data.main.pressure} hPa`;
        
        // Update input field
        this.cityInput.value = data.name;
        
        // Show weather card and hide loading/error
        this.hideLoading();
        this.hideError();
        this.showWeatherCard();
    }

    getCurrentLocation() {
        if (!navigator.geolocation) {
            this.showError('Geolocation is not supported by your browser.');
            return;
        }
        
        this.showLoading();
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                this.fetchWeatherByCoords(latitude, longitude);
            },
            (error) => {
                console.error('Geolocation error:', error);
                let errorMessage = 'Unable to get your location. ';
                
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage += 'Location access denied by user.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage += 'Location information unavailable.';
                        break;
                    case error.TIMEOUT:
                        errorMessage += 'Location request timed out.';
                        break;
                    default:
                        errorMessage += 'An unknown error occurred.';
                        break;
                }
                
                this.showError(errorMessage);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000 // 5 minutes
            }
        );
    }

    toggleTemperatureUnit(unit) {
        if (this.currentUnit === unit || !this.weatherData) return;
        
        this.currentUnit = unit;
        
        // Update active unit button
        this.tempUnits.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.unit === unit) {
                btn.classList.add('active');
            }
        });
        
        // Update temperature display
        const temp = unit === 'celsius' ? this.weatherData.main.temp : this.celsiusToFahrenheit(this.weatherData.main.temp);
        const feelsLikeTemp = unit === 'celsius' ? this.weatherData.main.feels_like : this.celsiusToFahrenheit(this.weatherData.main.feels_like);
        
        this.tempValue.textContent = Math.round(temp);
        this.feelsLike.textContent = `${Math.round(feelsLikeTemp)}°${unit === 'celsius' ? 'C' : 'F'}`;
        
        // Save preference
        localStorage.setItem('weatherApp_tempUnit', unit);
    }

    celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    updateBackgroundBasedOnWeather(weatherMain) {
        // Remove existing weather classes
        document.body.classList.remove('clear', 'sunny', 'cloudy', 'rainy', 'snowy');
        
        // Add appropriate class based on weather
        switch (weatherMain) {
            case 'clear':
                document.body.classList.add('clear');
                break;
            case 'clouds':
                document.body.classList.add('cloudy');
                break;
            case 'rain':
            case 'drizzle':
            case 'thunderstorm':
                document.body.classList.add('rainy');
                break;
            case 'snow':
                document.body.classList.add('snowy');
                break;
            default:
                document.body.classList.add('sunny');
        }
    }

    initializeTheme() {
        // Load saved theme
        const savedTheme = localStorage.getItem('weatherApp_theme') || 'light';
        this.setTheme(savedTheme);
        
        // Load saved temperature unit
        const savedUnit = localStorage.getItem('weatherApp_tempUnit') || 'celsius';
        this.currentUnit = savedUnit;
        this.tempUnits.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.unit === savedUnit) {
                btn.classList.add('active');
            }
        });
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        localStorage.setItem('weatherApp_theme', newTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = this.themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    saveLastSearchedCity(city) {
        localStorage.setItem('weatherApp_lastCity', city);
    }

    loadLastSearchedCity() {
        const lastCity = localStorage.getItem('weatherApp_lastCity');
        if (lastCity && this.API_KEY !== 'YOUR_OPENWEATHERMAP_API_KEY') {
            this.cityInput.value = lastCity;
            this.fetchWeatherData(lastCity);
        }
    }

    showLoading() {
        this.loadingSpinner.classList.add('show');
        this.weatherCard.classList.remove('show');
        this.errorMessage.classList.remove('show');
    }

    hideLoading() {
        this.loadingSpinner.classList.remove('show');
    }

    showError(message) {
        this.errorText.textContent = message;
        this.errorMessage.classList.add('show');
        this.weatherCard.classList.remove('show');
        this.hideLoading();
    }

    hideError() {
        this.errorMessage.classList.remove('show');
    }

    showWeatherCard() {
        this.weatherCard.classList.add('show');
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}