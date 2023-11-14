import React from 'react';

interface InputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: number | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ label, type, name, placeholder, value, onChange }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor={label}>
                {label}
            </label>
            <input
                className="border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                type={type}
                id={label}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};