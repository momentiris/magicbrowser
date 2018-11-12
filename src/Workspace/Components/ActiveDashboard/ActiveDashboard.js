import React, { Component, Fragment } from 'react';
import { Container, TabItems, TabWrapper, Column, Header2, BorderBottom, AddNewTab } from './styles';

class ActiveDashboard extends Component {

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    const { tabs } = this.props;
    const { workspaces } = this.props;
    return (
      <Container>
        <Column>
          {
            workspaces.map((ws, i) =>
              <BorderBottom>
                <Header2
                  key={i}
                >
                  {ws[0]}
                </Header2>
              </BorderBottom>
            )
          }
          <TabWrapper>
            {
              tabs.map((tab, i) =>
                <TabItems
                  key={i}
                  id={i}
                >
                  {tab.src}
                </TabItems>
              )
            }
            <AddNewTab />
          </TabWrapper>
        </Column>
      </Container>
    );
  }
}

export default ActiveDashboard;
