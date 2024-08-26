import React from "react";
import "./styles/App.scss";
import Navigation from "./components/UI/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useHandlerTimeOfDay } from "./hooks/HandlerTimeOfDay";
import { UserWeatherPage } from "./pages/UserWeatherPage";
import { CityWeatherPage } from "./pages/CityWeatherPage";

function App() {
    const timeOfDay = useHandlerTimeOfDay();

    return (
        <div className={`App`} data-time={timeOfDay}>
            <Router basename="/weather-forecast">
                <Navigation />
                <div className="App__content" data-time={timeOfDay}>
                    <Routes>
                        <Route path="/" element={<UserWeatherPage />} />
                        <Route path="/weather" element={<CityWeatherPage />} />
                        <Route path="*" element={<UserWeatherPage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
