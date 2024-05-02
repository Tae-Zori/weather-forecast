import React, { useEffect, useState } from "react";
import { IWeatherData } from "../interfaces/InterfaceData";

interface IWindDirection {
    windDirection: string;
}

export function useWindDirection(
    data: IWeatherData | undefined
): IWindDirection {
    const [windDirection, setWindDirection] = useState<string>("");

    function handlerDirection() {
        const windDeg = data?.wind.deg;
        if (windDeg === undefined) {
            return "неизвестного направления";
        }
        if (windDeg === 0 || windDeg === 360) {
            return "cеверный";
        }
        if (windDeg > 0 && windDeg < 90) {
            return "cеверо-восточный";
        }
        if (windDeg === 90) {
            return "восточный";
        }
        if (windDeg > 90 && windDeg < 180) {
            return "юго-восточный";
        }
        if (windDeg === 180) {
            return "южный";
        }
        if (windDeg > 180 && windDeg < 270) {
            return "юго-западный";
        }
        if (windDeg === 270) {
            return "западный";
        }
        if (windDeg > 270 && windDeg < 360) {
            return "северо-западный";
        }
        return "нет данных";
    }

    useEffect(() => {
        if (data) {
            const direction = handlerDirection();
            setWindDirection(direction);
        }
    }, [data]);

    return { windDirection };
}
