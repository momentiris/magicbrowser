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
  currentWsUI,
  animateshistory,
}) => {
  return (

    <Container isActive={animateshistory}>
      <Wrapper >
        {
          workspace.map((ws, i) =>
            <HeaderWrapper key={i}>
              <Header3 isActive={animateshistory}>
                <WorkSpaceColor className="workspacecolor" color={ws.color}> </WorkSpaceColor>
                {ws[0]}
                {currentWsUI}
              </Header3>
              <ButtonWrapper isActive={animateshistory}>
                <VisualButton>Visual</VisualButton>
                <ListButton>List</ListButton>
              </ButtonWrapper>
            </HeaderWrapper>
          )
        }
        <HistoryImg isActive={animateshistory}/>
      </Wrapper>
    </Container>
  );
};

export default History;
