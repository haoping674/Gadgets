'use client'
import { MessageButton } from '@/components/button';
import React, { useEffect, useState } from 'react';

const WeatherPage: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const auth_key = 'CWA-E8ACF51F-7B9F-4D1D-AFE5-B3E4C37B832B';
                const response = await fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=' + auth_key);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <section>
            <MessageButton 
                message='練習抓取 API 的資料並且顯示在網頁上。'
            />
            <h2 className="text-2xl font-bold mb-4 text-center">Taiwan Weather</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
                {weatherData ? (
                    weatherData.records.location.map((location: any) => (
                        <div key={location.locationName} className="p-2 rounded shadow">
                            <h2 className="text-xl font-bold mb-4">{location.locationName}</h2>
                            <div className="">
                                {location.weatherElement.map((element: any) => (
                                    <div key={element.elementName} className="flex items-center ">
                                        <strong className="mr-2">{element.elementName}</strong>: {element.time[0].parameter.parameterName}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </section>
    );
};

export default WeatherPage;
