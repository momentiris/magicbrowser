import styled from 'styled-components';
export const stylesheet = {
  // Colors
  darkgrey: '#CDD0D6',
  mediumgrey: '#DDDFE3',
  lightgrey: '#E9EBEE',
  lightergrey: '#F5F5F5',
  dashboardgrey: '#F3F4F7',
  darkdashboardgrey: '#C4C4C4',
  bluepurple: '#4738F9',
  white: '#FFFFFF',
  black: '#000000',
  semiblack: '#5A5A5A',
  red: '#F74034',
  // Font sizes
  small: '12px',
  medium: '16px',
  large: '24px',
  // Button config
  paddingbutton: '6px 22px',
  br: '4px',
  // blue button states
  bluebuttonidle: '#4738F9',
  bluebuttonhover: '#5C4EFF',
  bluebuttonactive: '#1507BD',
  // grey button states
  greybuttonidle: '#E9EBEE',
  greybuttonhover: '#DDDFE3',
  greybuttonactive: '#CDD0D6',
  borderradiuscolor: '#E0E0E0',
  navhovertransition: '200ms ease',
};

export const iconColors = [
  '#F22B1E',
  '#F2D01E',
  '#1E40F2',
  '#1EF28C',
  '#1ABCFE',
  '#F24E1E',
  '#FDA015',
  '#1EF28C',
  '#A259FF',
  '#F24E1E',
  '#1E40F2',
  '#F21EC3',
];

export const Button = styled.button`
  background: none;
  border: none;
  border-radius: ${props => props.theme.br};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  :focus {
    outline: none;
  }
`;
