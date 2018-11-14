import React, { Component, Fragment } from 'react';
import { InnerColorPickerContainer, ColorPickerContainer} from './styles';
import {
  DotIcon,
} from '../../../common/assets/icons';
import { iconColors } from '../../../common/stylesheet';
class WsColor extends Component {
  constructor(props) {
    super(props);

  }

  handlePickColor = color => {
    this.props.updateWsColor(color);

  }

  render() {
    return (
      <ColorPickerContainer>
        <InnerColorPickerContainer>
          {
            iconColors && iconColors.map((c, i) => <div key={i} onClick={() => this.handlePickColor(c)} color={c}><DotIcon style={{height: '24px', width: '24px'}} color={c} /></div> )
          }
        </InnerColorPickerContainer>
      </ColorPickerContainer>
    );
  }
}

export default WsColor;
