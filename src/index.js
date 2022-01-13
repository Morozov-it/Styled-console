import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

//создание глобальных стилей всего приложения
//не забывать ставить ";" после каждого свойства!!! 
const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
  background: black;
}
`
//создание объекта для изменения темы приложения
const theme = {
  colors: {
    primary: 'green',
    secondary: 'red'
  },
  // mode: {
  //   night: {
  //     fg: 'white',
  //     bg: 'black'
  //   },
  //   day: {
  //     fg: 'black',
  //     bg: 'white'
  //   }
  // },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
