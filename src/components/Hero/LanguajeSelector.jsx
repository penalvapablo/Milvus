import React, { useEffect, useState } from 'react';

const LanguajeSelector = ({}) => {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let path = window.location.pathname;
      if (path.startsWith('/en')) {
        setLanguage('en');
      } else if (path.startsWith('/ar')) {
        setLanguage('ar');
      } else {
        setLanguage('es');
      }
    }
  }, []);

  return (
    <div className="absolute left-1/2 top-12 flex h-auto translate-x-[-50%]  justify-center xl:right-0 xl:left-auto 2xl:right-16">
      <a
        href="/"
        className={`text-2xl ${
          language === 'es' ? 'text-one' : 'text-white'
        }`}>
        Es
      </a>
      <p className="mx-2 pt-0.5 text-xl text-white">/</p>
      <a
        href="/en"
        className={`text-2xl ${
          language === 'en' ? 'text-one' : 'text-white'
        }`}>
        En
      </a>
      <p className="mx-2 pt-0.5 text-xl text-white">/</p>
      <a
        href="/ar"
        className={`text-2xl leading-5 ${
          language === 'ar' ? 'text-one' : 'text-white'
        }`}>
        عربي
      </a>
    </div>
  );
};

export default LanguajeSelector;
