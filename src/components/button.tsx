import Link from 'next/link';

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
