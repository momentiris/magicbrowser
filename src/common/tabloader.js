import styled from 'styled-components';
import React from 'react';

const Spinner = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 31px;
  height: 31px;

 div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 1, 0.5, 1) infinite;
  border-color:
#3942ee #001ab3 #001ab3 #001ab3;
}
 div:nth-child(1) {
  animation-delay: -0.45s;
}
 div:nth-child(2) {
  animation-delay: -0.3s;
}
 div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;

export const TabLoader = () => (
  <Spinner className="lds-ring"><div></div><div></div><div></div><div></div></Spinner>
);
