
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TopAppBarProps {
  title: string;
  showBack?: boolean;
  rightIcon?: string;
  onRightIconClick?: () => void;
}

const TopAppBar: React.FC<TopAppBarProps> = ({ title, showBack = false, rightIcon = "search", onRightIconClick }) => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 justify-between border-b border-gray-200 dark:border-white/10">
      <div className="text-primary flex size-10 shrink-0 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity">
        {showBack ? (
          <button onClick={() => navigate(-1)} className="flex items-center">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </button>
        ) : (
          <span className="material-symbols-outlined text-3xl">menu</span>
        )}
      </div>
      <h2 className="text-slate-900 dark:text-white text-lg font-extrabold leading-tight tracking-[-0.015em] flex-1 text-center font-display uppercase tracking-widest truncate px-2">
        {title}
      </h2>
      <div className="flex w-10 items-center justify-end">
        <button 
          onClick={onRightIconClick}
          className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-transparent text-slate-900 dark:text-white hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">{rightIcon}</span>
        </button>
      </div>
    </nav>
  );
};

export default TopAppBar;
