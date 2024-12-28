import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscapeKeyDown = (event) => {
      if (event.code === 'Escape') {
        callback(event);
      }
    };

    window.addEventListener('keydown', handleEscapeKeyDown);

    return () => window.removeEventListener('keydown', handleEscapeKeyDown);
  }, [callback]);
};
