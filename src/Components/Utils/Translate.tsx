import React, { memo } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
import { useTranslation } from 'react-i18next'
const Translate: React.FC = () => {
  const { currentlanguage, changelanguage } = useChangeLanguage();
  const { t } = useTranslation();

  const EnLanguage = memo(() => (
    <div className="MenuChange" onClick={EnLanguageClickHandler}>
       <img alt='' src='../Lang/En.svg' width={20} height={20} /> 
      {t('En')}
    </div>
  ));
  
  const ArLanguage = memo(() => (
    <div  className="MenuChange" onClick={ArLanguageClickHandler}>
      <img alt='' src='../Lang/Ar.svg' width={20} height={20} /> 
      {t('Ar')}
    </div>
  ));

  const KrLanguage = memo(() => (
    <div  className="MenuChange" onClick={KrLanguageClickHandler}>
      <img alt='' src='../Lang/kr.png' width={20} height={20} /> 
      {t('Kr')}
    </div>
  ));

  
  const EnLanguageClickHandler = React.useCallback(() => {
    changelanguage('en');
  }, [changelanguage]);
  
  const ArLanguageClickHandler = React.useCallback(() => {
    changelanguage('ar');
  }, [changelanguage]);

  const KrLanguageClickHandler = React.useCallback(() => {
    changelanguage('kr');
  }, [changelanguage]);
  
  
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <EnLanguage />,
    },
    {
      key: '2',
      label: <ArLanguage />,
    },
    {
      key: '3',
      label: <KrLanguage />,
    },
  ];

  let languageComponent;

  switch (currentlanguage) {
    case 'en':
      languageComponent = <EnLanguage />;
      break;
    case 'ar':
      languageComponent = <ArLanguage />;
      break;
    case 'kr':
      languageComponent = <KrLanguage />;
      break;
    default:
      languageComponent = null; // You can set a default component or handle this case as needed
  }

  return (
    <Space direction="vertical">
      <Dropdown menu={{ items }} placement="top">
        {/* <Button disabled>{currentlanguage === 'en' ? <EnLanguage /> : <ArLanguage />  }</Button> */}
        <Button disabled>{languageComponent}</Button>
      </Dropdown>
    </Space>
  );
};

export default Translate;
