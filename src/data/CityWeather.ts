import { useEffect, useState } from "react";
import { IWeatherData } from "../interfaces/InterfaceData";

type SetLoadingFunction = (loading: boolean) => void;
type SetDataFunction = (data: IWeatherData) => void;
type SetErrorFunction = (error: string) => void;

type CityWeatherFunction = (
    cityName: string,
    setLoading: SetLoadingFunction,
    setData: SetDataFunction,
    setError: SetErrorFunction
) => void; 

export const CityWeather:CityWeatherFunction = (cityName, setLoading, setData, setError) => {
    const apiKey = "1c2c4ba219a756b15b1456355c09af68";
    const userLanguage = "ru"
 

    async function fetchData(): Promise<void> {
        setLoading(true)
        setError("");
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}&lang=${userLanguage}`);
            const data = await response.json();
            if(data.cod >= 400){
                setError(`Город "${cityName}" не найден. Убедитесь в корректности названия.`)
            }else{
                setData(data);
            }

        } catch (error: unknown) {
            if (error instanceof Error) {
                const errorMessage = `Ошибка: ${error.message}`;

                setError(errorMessage);
            } else {
                setError("Неизвестная ошибка");
            }
        }finally{
            setLoading(false)
        }
    }

    fetchData();

}