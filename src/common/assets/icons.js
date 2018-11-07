import React, { Component } from 'react';

export const AddTabIcon = ({ tilt }) => (
  <svg style={{ transition: 'transform 100ms ease', transform: tilt ? 'rotate(45deg)' : 'none', }} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571V0H5.71429V4.28571H10V5.71429Z" fill="#1E1E1E"/>
  </svg>
);

export const CloseTabIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="black"/>
  </svg>
);

export const DotIcon = ({ color }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="7" fill={color}/>
  </svg>
);

export const ArrowIcon = ({ flip }) => (
  <svg style={{transformOrigin: 'center',transition: 'transform 100ms ease', transform: flip ? 'rotate(180deg)' : 'none', }}width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.825 0L5 3.81667L1.175 0L0 1.175L5 6.175L10 1.175L8.825 0Z" fill="#1E1E1E"/>
  </svg>
);
