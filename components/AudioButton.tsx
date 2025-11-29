import React from 'react';
import { Volume2 } from 'lucide-react';
import { playText } from '../services/speechService';

interface AudioButtonProps {
  text: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ text, label, size = 'md', className = '' }) => {
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playText(text);
  };

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 24 : 18;

  return (
    <button 
      onClick={handleClick}
      className={`flex items-center gap-2 text-slate-400 hover:text-yellow-600 transition-colors active:scale-95 ${className}`}
      aria-label={`Ouvir pronúncia de ${text}`}
    >
      <Volume2 size={iconSize} />
      {label && <span className="font-sans text-xs font-bold uppercase">{label}</span>}
    </button>
  );
};

export default AudioButton;
