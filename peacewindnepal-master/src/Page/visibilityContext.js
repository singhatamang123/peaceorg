// visibilityContext.js
import React, { createContext, useContext, useState } from 'react';

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibility = (value) => {
    setIsVisible(value);
  };

  return (
    <VisibilityContext.Provider value={{ isVisible, setVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error('useVisibility must be used within a VisibilityProvider');
  }
  return context;
};
