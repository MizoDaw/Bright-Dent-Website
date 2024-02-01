import { useCallback, useEffect, useState } from "react";
import translationEN from '../translate/en.json';
import translationAR from '../translate/ar.json';
import translationKR from '../translate/kr.json';
import { initReactI18next } from 'react-i18next';

import i18n from 'i18next'; // Make sure this import is correct
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    ar: {
      translation: translationAR
    },
    kr: {
      translation: translationKR
    }
  },
  lng: localStorage.getItem('language') ?? 'en', 
  interpolation: {
    escapeValue: false
  }
});
export const useChangeLanguage= () => {
    const [currentlanguage, setCurrentlanguage] = useState(localStorage.getItem('language') ?? 'en');
  
    useEffect(() => {

      if (currentlanguage=== 'ar') {
        i18n.changeLanguage('ar'); 
        document.body.setAttribute('dir', 'rtl'); 
        document.body.classList.add('ar');

      } else if(currentlanguage=== 'en'){
        i18n.changeLanguage('en'); 
        document.body.setAttribute('dir', 'ltr');
        document.body.classList.add('en')

      }
      else{
        i18n.changeLanguage('kr'); 
        document.body.setAttribute('dir', 'rtl');
        document.body.classList.add('kr')
      }
      console.log('Current Language from localStorage:', localStorage.getItem('language'));

      localStorage.setItem('language', currentlanguage);
    }, [currentlanguage]);
  
    const changelanguage= useCallback((newlanguage:any) => {
      setCurrentlanguage(newlanguage);
    }, []);
  
    return { currentlanguage, changelanguage};
  };
  