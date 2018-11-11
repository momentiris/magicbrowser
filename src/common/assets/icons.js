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
  <svg style={{transformOrigin: 'center',transition: 'transform 100ms ease', transform: flip ? 'rotate(180deg)' : 'none', }} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.825 0L5 3.81667L1.175 0L0 1.175L5 6.175L10 1.175L8.825 0Z" fill="#1E1E1E"/>
  </svg>
);

export const ReadingListIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.25 0.875H14V2.625H5.25V0.875ZM5.25 6.125H14V7.875H5.25V6.125ZM5.25 11.375H14V13.125H5.25V11.375ZM0 1.75C0 0.783125 0.783125 0 1.75 0C2.71688 0 3.5 0.783125 3.5 1.75C3.5 2.71688 2.71688 3.5 1.75 3.5C0.783125 3.5 0 2.71688 0 1.75ZM0 7C0 6.03312 0.783125 5.25 1.75 5.25C2.71688 5.25 3.5 6.03312 3.5 7C3.5 7.96688 2.71688 8.75 1.75 8.75C0.783125 8.75 0 7.96688 0 7ZM0 12.25C0 11.2831 0.783125 10.5 1.75 10.5C2.71688 10.5 3.5 11.2831 3.5 12.25C3.5 13.2169 2.71688 14 1.75 14C0.783125 14 0 13.2169 0 12.25Z" fill="black"/>
  </svg>
);

export const NavSettingsIcon = () => (
  <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.75 3.5C2.7125 3.5 3.5 2.7125 3.5 1.75C3.5 0.7875 2.7125 0 1.75 0C0.7875 0 0 0.7875 0 1.75C0 2.7125 0.7875 3.5 1.75 3.5ZM1.75 5.25C0.7875 5.25 0 6.0375 0 7C0 7.9625 0.7875 8.75 1.75 8.75C2.7125 8.75 3.5 7.9625 3.5 7C3.5 6.0375 2.7125 5.25 1.75 5.25ZM1.75 10.5C0.7875 10.5 0 11.2875 0 12.25C0 13.2125 0.7875 14 1.75 14C2.7125 14 3.5 13.2125 3.5 12.25C3.5 11.2875 2.7125 10.5 1.75 10.5Z" fill="black"/>
  </svg>
);

export const DashboardIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2632 7.36842H0.736842C0.331579 7.36842 0 7.7 0 8.10526V12.5263C0 12.9316 0.331579 13.2632 0.736842 13.2632H13.2632C13.6684 13.2632 14 12.9316 14 12.5263V8.10526C14 7.7 13.6684 7.36842 13.2632 7.36842ZM15.2632 0H2.73684C2.33158 0 2 0.331579 2 0.736842V5.15789C2 5.56316 2.33158 5.89474 2.73684 5.89474H15.2632C15.6684 5.89474 16 5.56316 16 5.15789V0.736842C16 0.331579 15.6684 0 15.2632 0Z" fill="white"/>
  </svg>
);

export const ToDashboardIcon = () => (
  <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.705 0L3 0.705L5.29 3L3 5.295L3.705 6L6.705 3L3.705 0Z" fill="black"/>
    <path d="M0.705 0L0 0.705L2.29 3L0 5.295L0.705 6L3.705 3L0.705 0Z" fill="black"/>
  </svg>
);

export const UpdateTabIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6H9.99963L12.2428 3.757C11.1097 2.624 9.6026 2 7.9995 2C6.3964 2 4.89031 2.624 3.75624 3.757C2.62316 4.89 1.99913 6.397 1.99913 8C1.99913 9.603 2.62316 11.109 3.75624 12.243C4.88931 13.376 6.3964 14 7.9995 14C9.6026 14 11.1087 13.376 12.2428 12.243C12.3378 12.148 12.4278 12.051 12.5158 11.951L14.0209 13.268C12.5548 14.942 10.4007 16 8.0005 16C3.58222 16 0 12.418 0 8C0 3.582 3.58222 0 8.0005 0C10.2096 0 12.2098 0.896 13.6569 2.344L16 0V6Z" fill="black"/>
  </svg>
);

export const TabNavigationArrowIcon = ({ flip }) => (
  <svg style={{transformOrigin: 'center', transform: flip ? 'rotate(180deg)' : 'none', }} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.04932 13.3795L0.335137 7.66529C-0.111712 7.21958 -0.111712 6.49503 0.335137 6.04932L6.04932 0.335137C6.49617 -0.111712 7.21958 -0.111712 7.66529 0.335137C8.111 0.781986 8.11214 1.5054 7.66529 1.95111L3.90193 5.71447H14.8572C15.488 5.71447 16 6.22646 16 6.85731C16 7.48815 15.488 8.00014 14.8572 8.00014H3.90193L7.66529 11.7635C7.88814 11.9864 8.00014 12.2789 8.00014 12.5715C8.00014 12.8641 7.88814 13.1566 7.66529 13.3795C7.21844 13.8263 6.49503 13.8263 6.04932 13.3795Z" fill="black"/>
  </svg>
);
