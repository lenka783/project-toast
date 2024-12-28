import React from 'react';
import { useEscapeKey } from '../../hooks/use-escape-key';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissAllToasts = React.useCallback(() => setToasts([]), []);
  useEscapeKey(dismissAllToasts);

  const dismissToast = (removeId) => {
    const nextToasts = toasts.filter(({ id }) => id !== removeId);
    setToasts(nextToasts);
  };

  const createToast = (newToast) => {
    const newId = crypto.randomUUID();
    const nextToasts = [
      ...toasts,
      {
        id: newId,
        ...newToast,
      },
    ];

    setToasts(nextToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, dismissToast, createToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
