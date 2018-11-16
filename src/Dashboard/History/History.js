import React from 'react';

import {
  Container,
  HeaderWrapper,
  WorkSpaceColor,
  VisualButton,
  ListButton,
  ButtonWrapper,
  HistoryImg,
  Wrapper,
  Header3,
} from './styles';

const History = ({
  workspace,
  currentWsUI
}) => (
  <Container>
    <Wrapper>
      {
        workspace.map((ws, i) =>
          <HeaderWrapper
            key={i}
          >
          <Header3>
            <WorkSpaceColor color={ws.color || '#5C4EFF'}> </WorkSpaceColor>
            {ws[0]}
            {currentWsUI}
          </Header3>
          <ButtonWrapper>
            <VisualButton>Visual</VisualButton>
            <ListButton>List</ListButton>
          </ButtonWrapper>
          </HeaderWrapper>
        )
      }
    <HistoryImg />
    </Wrapper>
  </Container>
);

export default History;
