
import React from 'react';

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode; // Optional icon component or element
  onClick?: () => void; // Optional onClick for non-link buttons
  target?: string;
  rel?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, icon, onClick, target = '_blank', rel = 'noopener noreferrer' }) => {
  // Use custom Tailwind colors defined in the config
  const commonClasses = "flex items-center justify-center w-full px-4 py-3 text-center font-medium text-white bg-custom-gray-700 rounded-lg hover:bg-custom-gray-600 transition-colors duration-200 ease-in-out";

  if (onClick) {
    return (
      <button onClick={onClick} className={commonClasses}>
        {icon && <span className="mr-2 text-lg">{icon}</span>} {/* Added text-lg for slightly larger icon */}
        {text}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={commonClasses}
    >
      {icon && <span className="mr-2 text-lg">{icon}</span>} {/* Added text-lg for slightly larger icon */}
      {text}
    </a>
  );
};

export default LinkButton;

