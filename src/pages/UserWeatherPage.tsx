import React from "react";
import { useUserWeather } from "../data/UserWeather";
import WeatherContent from "../components/UI/weatherContent/WeatherContent";
import Loader from "../components/UI/loader/Loader";
import ErrorMassage from "../components/errorMessage/ErrorMessage";

export const UserWeatherPage = () => {
    const { dataWeather, loading, errUserWeather } = useUserWeather();

    return (
        <>
            {loading && <Loader/>}
            {!loading && errUserWeather.length === 0 ? (
                <WeatherContent weatherData={dataWeather} />
            ) : (
                <ErrorMassage errMessage={errUserWeather}/>
            )}
        </>
        // <div className="App__content" data-time={timeOfDay}>
        // </div>
    );
};
