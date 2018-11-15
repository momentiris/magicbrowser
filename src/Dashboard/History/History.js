import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

import { Container,
  Header2,
  WorkSpaceColor,
  BorderBottom,
  VisualButton,
  ListButton,
  ButtonWrapper
} from './styles';

const History = ({
  workspace,
  currentWsUI
}) => (
  <Container>
    <ButtonWrapper>
      <VisualButton>Visual</VisualButton>
      <ListButton>List</ListButton>
    </ButtonWrapper>
    {
      workspace.map((ws, i) =>
        <Header2
          key={i}
        >
          <WorkSpaceColor color={ws.color || '#5C4EFF'}> </WorkSpaceColor>
          {ws[0]}
          {currentWsUI}
        </Header2>
      )
    }
  </Container>
);

export default History;
