import React, { useEffect } from 'react';
import { useChangeLanguage } from '../Hooks/useChangeLanguage';

const ReloadableComponent = ({ children}:any) => {
    const { currentlanguage, changelanguage } = useChangeLanguage();

  useEffect(() => {
    // This effect will run every time the language changes
    // You can add any logic here that needs to be executed when the language changes
  }, [currentlanguage,changelanguage]); // Add currentlanguage as a dependency

  return <>{children}</>;
};

export default ReloadableComponent;
