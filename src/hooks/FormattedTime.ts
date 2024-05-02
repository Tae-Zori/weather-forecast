import React, { useEffect, useState } from "react";
import { IWeatherData } from "../interfaces/InterfaceData";

interface IFormattedTime {
    sunrise: string;
    sunset: string;
}

export function useFormattedTime(
    data: IWeatherData | undefined
): IFormattedTime {
    const [sunrise, setSunrise] = useState<string>("");
    const [sunset, setSunset] = useState<string>("");

    function formattedTime(time: number) {
        const date = new Date(time * 1000);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }
    useEffect(() => {
        if (data) {
            const formattedSunrise = formattedTime(data.sys.sunrise);
            const formattedSunset = formattedTime(data.sys.sunset);
            setSunrise(formattedSunrise);
            setSunset(formattedSunset);
        }
    }, [data]);

    return { sunrise, sunset };
}
