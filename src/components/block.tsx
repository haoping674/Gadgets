import React from 'react';

interface DescriptionBlockProps {
    children: React.ReactNode;
}

export const DescriptionBlock: React.FC<DescriptionBlockProps> = ({ children }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {children}
        </div>
    );
};

interface InputBlockProps {
    children: React.ReactNode;
}

export const InputBlock: React.FC<InputBlockProps> = ({ children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {children}
        </div>
    );
}