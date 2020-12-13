import React from 'react';
import styled from 'styled-components';

import Player from './views/pages/Player';


function App() {
  return (
    <Container>
      <Player />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  background-color: white;
  /* スマホ用 */
  @media screen and (max-width: 600px) {
    max-width: 400px;
    min-width: 320px;
  }
  /* タブレット用 */
  @media screen and (max-width: 1024px) and (min-width: 600px) {
    max-width: 600px;
  }
  /* PC用 */
  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }
`