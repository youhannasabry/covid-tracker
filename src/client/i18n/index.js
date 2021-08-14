import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import arLocaleData from 'react-intl/locale-data/ar';
import translations from './locales';
import JssRtlProvider from './jss-rtl';

addLocaleData(enLocaleData);
addLocaleData(arLocaleData);

class LocalizationProvider extends React.Component {
  componentDidMount() {}

  render() {
    const { children, locale } = this.props; //eslint-disable-line
    const messages = translations[locale];
    return (
      <IntlProvider locale={locale} key={locale} defaultLocale="en" messages={messages}>
        <JssRtlProvider>{children}</JssRtlProvider>
      </IntlProvider>
    );
  }
}

export default LocalizationProvider;
