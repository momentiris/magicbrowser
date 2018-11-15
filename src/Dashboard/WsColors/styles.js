import styled from 'styled-components';

export const InnerColorPickerContainer = styled.div`
  width: 240px;
  margin-left: -4px;
  display: flex;
  flex-wrap: wrap;
  svg {
    margin: 4px 8px 12px 8px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;
    &:active{
      border: 3px solid #DDDFE3;
      box-sizing: border-box;
    }
  }
`;

export const ColorPickerContainer = styled.div`
  margin: 0px 0px 12px -4px;
`;
