import { useEffect, useState } from "react";

export const useHandlerTimeOfDay = (): string => {
    const [timeOfDay, setTimeOfDay] = useState<string>("morning");
    useEffect(() => {
        function timeBg() {
            const userDate = new Date();
            const userHours = userDate.getHours();

            if (userHours >= 4 && userHours <= 11) {
                setTimeOfDay("morning");
            }
            if (userHours >= 12 && userHours <= 17) {
                setTimeOfDay("noon");
            }
            if (userHours >= 18 && userHours <= 22) {
                setTimeOfDay("evening");
            }
            if (userHours == 23 || userHours <= 3) {
                setTimeOfDay("night");
            }
        }

        timeBg();
    }, []);

    return timeOfDay;
};
