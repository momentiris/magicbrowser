import styled from 'styled-components';
import React from 'react';
import Lottie from 'lottie-react-web';
import * as animationData from './animation.json';
import './style.css';

const TabLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>

  );
};

export default TabLoader;
