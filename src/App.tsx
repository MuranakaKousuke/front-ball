import React from 'react';
import styled from 'styled-components';

import Player from '../src/components/pages/Player';


function App() {
  return (
    <Container>
      <Player />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`