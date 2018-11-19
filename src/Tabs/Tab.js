import React from 'react';
import {
  SingleTabContainer,
  TabTitle,
  FavIcon,
  CloseTabButton
} from './styles';

import {
  AddTabIcon
} from '../common/assets/icons.js';

import dashboardTabIcon from '../common/assets/icons/dashboardTabIcon.svg';
import TabLoader from '../common/TabLoader/TabLoader';
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.elem = React.createRef();
  }
  componentDidMount() {

    this.props.registerContextMenuEvents(this.elem.current);
  }

  render() {
    const { removeSelectedTab, setActive, isActive, favicon, title, id, src, key } = this.props;
    return (
      <SingleTabContainer
        className="Showcase__style__stylizedHelper"
        ref={this.elem}
        id={id}
        key={key}
        isActive={isActive}
      >
        {
          favicon || src === 'dashboard' ?
            <FavIcon src={src === 'dashboard' && dashboardTabIcon || favicon || 'false'}/> :
            <TabLoader />
        }

        <TabTitle id={id} onClick={setActive} >{title || src}</TabTitle>
        <CloseTabButton isActive={isActive} onClick={removeSelectedTab}>
          <AddTabIcon tilt/>
        </CloseTabButton>
      </SingleTabContainer>
    );
  }
}


export default Tab;
