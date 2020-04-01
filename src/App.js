import React from 'react';
import { createGlobalStyle } from 'styled-components';

import WebMapView from './components/WebMapView';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <WebMapView></WebMapView>
    </div>
  );
}

export default App;
