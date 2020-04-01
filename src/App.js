import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Menu from './components/Menu';
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

const AppContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 4fr;
`;

function App() {
  const [bikes, setBikes] = useState(true);
  const [buses, setBuses] = useState(true);
  const [metro, setMetro] = useState(true);

  return (
    <AppContainer>
      <GlobalStyle></GlobalStyle>
      <Menu
        bikes={bikes}
        setBikes={setBikes}
        buses={buses}
        setBuses={setBuses}
        metro={metro}
        setMetro={setMetro}
      ></Menu>
      <WebMapView bikes={bikes} buses={buses} metro={metro}></WebMapView>
    </AppContainer>
  );
}

export default App;
