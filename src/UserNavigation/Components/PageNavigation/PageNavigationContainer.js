import React from 'react';
import {
  Container,
  PageNavButton
} from './styles';

import {
  UpdateTabIcon,
  TabNavigationArrowIcon
} from '../../../common/assets/icons.js';

const PageNavigationContainer = ({}) => (
  <Container>
    <PageNavButton>
      <TabNavigationArrowIcon />
    </PageNavButton>
    <PageNavButton>
      <TabNavigationArrowIcon flip />
    </PageNavButton>
    <PageNavButton>
      <UpdateTabIcon />
    </PageNavButton>
  </Container>
);

export default PageNavigationContainer;
