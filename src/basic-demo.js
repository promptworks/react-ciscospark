import React from 'react';
import ReactDOM from 'react-dom';

import {IntlProvider} from 'react-intl';
import messages from './locales/en';

import '@ciscospark/react-component-spark-fonts';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, green800} from 'material-ui/styles/colors';

import DemoWidgetMessageMeet from './demo-widget-message-meet';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue600,
    accent1Color: green800
  }
});

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <IntlProvider locale={`en`} messages={messages}>
      <DemoWidgetMessageMeet />
    </IntlProvider>
  </MuiThemeProvider>,
  document.getElementById(`main`)
);
