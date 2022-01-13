import React from "react";
import styled from 'styled-components';

import Console from "./components/console";
import Flex from "./components/flex";
import Title from "./components/title";

// создание стилизованного компонента для оборачивания основного компонента
const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  font-size: 24px;

  @media ${props => props.theme.media.phone} {
    font-size: 18px;
  }
  @media ${props => props.theme.media.tablet} {
    font-size: 20px;
  }
`

const App = () => {
  return (
    <AppWrapper>
      <Flex justify={'center'}>
        <Title >Console cmd. fake</Title>
      </Flex>
      <Flex direction={'column'} margin={'10px 0px'}>
        <Console />
      </Flex>
    </AppWrapper>
  );
}

export default App;
