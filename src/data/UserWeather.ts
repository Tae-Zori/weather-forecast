import { useEffect, useState } from "react";
import { IUserInfo, IWeatherData } from "../interfaces/InterfaceData";

export const useUserWeather = () => {
    const apiKey = "1c2c4ba219a756b15b1456355c09af68";
    const userLanguage = "ru"
    const [dataWeather, setDataWeather] = useState<IWeatherData>({} as IWeatherData)
    const [loading, setLoding] = useState<boolean>(true);
    const [errUserWeather, setErrUserWeather] = useState<string>("");

    async function userInfo(): Promise<IUserInfo | string> {
        try {
            const response = await fetch(
                `https://json.geoiplookup.io/`
            );
            const data = await response.json();
            return data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                const errorMessage = `${error.message}`;
                console.error(errorMessage);
                return errorMessage;
            } else {
                const errorMessage = "неизвестная ошибка"
                console.error(errorMessage);
                return errorMessage;
            }
        }
    }
    async function userWeather(): Promise<void> {
        setErrUserWeather("");
        try {
            const info = await userInfo();

            if (typeof info === "object" && "latitude" in info && "longitude" in info) {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${info.latitude}&lon=${info.longitude}&units=metric&appid=${apiKey}&lang=${userLanguage}`)
                const data = await response.json()
                setDataWeather(data)
            } else {
                setErrUserWeather(`Ошибка получения данных пользователя: ${info}`);
                return
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                const errorMessage = error.message;
                console.error(errorMessage);
                setErrUserWeather(`Невозможно получить данные погоды пользователя:${errorMessage}`);
            } else {
                const errorMessage = "неизвестная ошибка"
                console.error(errorMessage);
                setErrUserWeather(`Невозможно получить данные погоды пользователя:${errorMessage}`);
            }
        }finally{
            setLoding(false)  
        }
    }

    useEffect(() => {
        userWeather()
    },[])

    return {dataWeather, loading, errUserWeather}
};
