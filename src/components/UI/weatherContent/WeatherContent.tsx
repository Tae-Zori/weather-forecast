import React from "react";
import style from "./Weather.module.scss";
import { IWeatherData } from "../../../interfaces/InterfaceData";
import { useFormattedTime } from "../../../hooks/FormattedTime";
import { useWindDirection } from "../../../hooks/WindDirection";
import { usePrecipitation } from "../../../hooks/Precipitation";

interface ContentWeatherProps {
    weatherData: IWeatherData | undefined;
}

const WeatherContent = ({ weatherData }: ContentWeatherProps) => {
    const { sunrise, sunset } = useFormattedTime(weatherData);
    const { windDirection } = useWindDirection(weatherData);
    const { precipitation, qtyPrecipitation } = usePrecipitation(weatherData);

    return (
        <div className={style.content}>

            <div className={style.content__city}>
                <h1 className={style.content__nameCity}>
                    {weatherData?.name.toUpperCase()}
                </h1>
            </div>

            <div className={style.content__info}>

                <section className={style.content__currentTemp}>
                    <p>CEЙЧАС</p>
                    {weatherData && (
                        <h2>{Math.round(weatherData?.main.temp)}<span className={style.content__c1}>°C</span></h2>
                    )}
                    {weatherData && (
                        <p className={style.content__feels}>
                            Ощущается: {Math.round(weatherData?.main.feels_like)} <span className={style.content__c2}>°</span>
                        </p>
                    )}
                </section>

                <section className={style.content__otherInfo}>
                    <p className={style.content__description}>{weatherData?.weather[0].description.toUpperCase()}</p>

                    {precipitation && (
                        <p>Осадки за последний час: {qtyPrecipitation}мм</p>
                    )}

                    <p>Влажность: {weatherData?.main.humidity}%</p>

                    {weatherData && (
                        <>
                            <p>Ветер:</p>
                            <p>
                                {windDirection},{" "}
                                {Math.round(weatherData?.wind.speed)} м/с.
                            </p>
                        </>
                    )}
                </section>

            </div>
                <section className={style.content__twilight}>
                    <p className={style.content__twilightItem} >Рассвет: {sunrise}</p>
                    <p className={style.content__twilightItem} >Закат: {sunset}</p>
                </section>
        </div>
    );
};

export default WeatherContent;
