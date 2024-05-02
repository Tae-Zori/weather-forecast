import React, { useEffect, useState } from "react";
import { IWeatherData } from "../interfaces/InterfaceData";

interface IPrecipitation {
    precipitation: boolean;
    qtyPrecipitation: number;
}
export function usePrecipitation(
    data: IWeatherData | undefined
): IPrecipitation {
    const [precipitation, setPrecipitation] = useState<boolean>(false);
    const [qtyPrecipitation, setQtyPrecipitation] = useState<number>(0);

    function handlerDirection() {
        if (data?.rain) {
            const rain = data?.rain["1h"];
            setPrecipitation(true);
            setQtyPrecipitation(rain);
        }
        if (data?.snow) {
            const snow = data?.snow["1h"];
            setPrecipitation(true);
            setQtyPrecipitation(snow);
        }
    }

    useEffect(() => {
        if (data) {
            handlerDirection();
        }
    }, [data]);

    return { precipitation, qtyPrecipitation };
}
