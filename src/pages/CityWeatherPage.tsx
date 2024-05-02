import React, { useState } from "react";

import { IAppProps, IWeatherData } from "../interfaces/InterfaceData";
import { CityWeather } from "../data/CityWeather";
import MyButton from "../components/UI/button/MyButton";
import Modal from "../components/UI/modal/Modal";
import MyInput from "../components/UI/input/MyInput";
import WeatherContent from "../components/UI/weatherContent/WeatherContent";
import Loader from "../components/UI/loader/Loader";
import ErrorMassage from "../components/errorMessage/ErrorMessage";
import FoundCity from "../components/UI/FoundCity/FoundCity";

export const CityWeatherPage: React.FC<IAppProps> = ({ timeOfDay }) => {
    const [valueInput, setValueInput] = useState<string>("");
    const [visibleModal, setVisibleModal] = useState<boolean>(true);
    const [data, setData] = useState<IWeatherData>({} as IWeatherData);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    function HandlerWeatherData() {
        const city = valueInput.trim().toLowerCase();
        if (city.length === 0) {
            setValueInput("");
        } else {
            setVisibleModal(false);
            CityWeather(city, setLoading, setData, setError);
            setValueInput("")
        }
    }

    return (
        <div className="App__content" data-time={timeOfDay}>

            {!visibleModal && 
                <FoundCity onClick={() => setVisibleModal(true)}>
                    Найти—ещё
                </FoundCity>
            }
            
            <Modal visible={visibleModal} setVisible={setVisibleModal}>

                <MyInput
                    value={valueInput}
                    type="text"
                    onChange={(e) => setValueInput(e.target.value)}
                    placeholder="Введите название города"
                />

                <MyButton onClick={() => HandlerWeatherData()}>
                    Найти
                </MyButton>
            </Modal>
            {loading && <Loader/>}
            {!loading && error.length === 0 ? (     
                
               <WeatherContent weatherData={data} />
                
                 
            ) : (
                
                    <ErrorMassage errMessage={error}/>
                
            )}
        </div>
    );
};
