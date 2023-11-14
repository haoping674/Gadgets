'use client'
import { useState } from 'react';
import { Button } from '@/components/button';
import { DescriptionBlock } from '@/components/block';

export default function LocationFinder() {
    const [location, setLocation] = useState<{ latitude: number, longitude: number }>({ latitude: 0, longitude: 0 });
    const [isFound, setIsFound] = useState<boolean>(false);

    const handleLocationClick = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setIsFound(true);
            },
            (error) => {
                console.error(error);
                setIsFound(false);
            }
        );
    };

    const handleCopyClick = (latitude: number, longitude: number) => {
        navigator.clipboard.writeText(latitude.toString() + ',' + longitude.toString());
    };

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 space-y-10 text-center">
            <Button
                text='Find Location'
                onClick={handleLocationClick}
            />
            {isFound && (
                <DescriptionBlock>
                    <h2 className="text-2xl font-bold mb-4">Your Location</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Latitude: {location.latitude}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Longitude: {location.longitude}
                    </p>
                    <Button
                        text='Copy'
                        className='mt-4'
                        onClick={() => handleCopyClick(location.latitude, location.longitude)}
                    />
                </DescriptionBlock>
            )}
        </div>
    );
}
