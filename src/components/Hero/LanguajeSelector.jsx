import React, { useEffect, useState } from 'react';

const LanguajeSelector = ({ idioma }) => {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    idioma === 'es' && setLanguage('es');
    idioma === 'ar' && setLanguage('ar');
    idioma === 'en' && setLanguage('en');
  }, []);

  return (
    <div className="absolute left-1/2 top-12 flex h-auto translate-x-[-50%]  justify-center md:top-8 xl:top-12 xl:right-0 xl:left-auto 2xl:right-16">
      <a
        href="/"
        className={`text-xl ${
          language === 'es' ? 'text-one' : 'text-white'
        }`}>
        Es
      </a>
      <p className="mx-2 pt-0.5 text-xl text-white">/</p>
      <a
        href="/en"
        className={`text-xl ${
          language === 'en' ? 'text-one' : 'text-white'
        }`}>
        En
      </a>
      <p className="mx-2 pt-0.5 text-xl text-white">/</p>
      <a
        href="/ar"
        className={`text-xl leading-5 ${
          language === 'ar' ? 'text-one' : 'text-white'
        }`}>
        عربي
      </a>
    </div>
  );
};

export default LanguajeSelector;
