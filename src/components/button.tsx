'use client'
import Link from 'next/link';
import { useState } from 'react';
import { DescriptionBlock } from './block';

interface LinkButtonProps {
  href: string;
  text: string;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, text, className }) => {
  return (
    <Link href={href} className={`px-6 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-800 hover:bg-gradient-to-br rounded-md focus:ring-4 focus:outline-none focus:ring-indigo-300 ${className}`}>
      {text}
    </Link>
  );
};

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button onClick={onClick} className={`px-6 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-800 hover:bg-gradient-to-br rounded-md focus:ring-4 focus:outline-none focus:ring-indigo-300 ${className}`}>
      {text}
    </button>
  );
};

interface MessageButtonProps {
  message: string;
}

export const MessageButton: React.FC<MessageButtonProps> = ({ message }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="fixed bottom-3 right-2">
      <button onClick={handleClick} className="px-4 py-1.5 text-white bg-gradient-to-r from-gray-600 to-gray-500 hover:bg-gradient-to-br rounded-full focus:outline-none">
        i
      </button>
      {showMessage && (
        <div className="absolute right-0 bottom-full mb-2 mr-4 w-40 sm:w-48 md:w-56 lg:w-64">
          <DescriptionBlock>
            <h4 className="text-lg font-bold mb-2">為何設計</h4>
            <p className="text-gray-700 leading-relaxed text-sm">{message}</p>
          </DescriptionBlock>
        </div>
      )}
    </div>
  );
};

