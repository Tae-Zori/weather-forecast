import React from "react";
import "./styles/App.scss";
import Navigation from "./components/UI/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useHandlerTimeOfDay } from "./hooks/HandlerTimeOfDay";
import { UserWeatherPage } from "./pages/UserWeatherPage";
import { CityWeatherPage } from "./pages/CityWeatherPage";

function App() {
  const timeOfDay = useHandlerTimeOfDay()

    return (
        <div className={`App`} data-time={timeOfDay}>
            <Router>
                <Navigation />
                <Routes>
                    <Route
                        path="/"
                        element={<UserWeatherPage timeOfDay={timeOfDay} />}
                    />
                    <Route
                        path="/weather"
                        element={<CityWeatherPage timeOfDay={timeOfDay} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
