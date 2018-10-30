import React from 'react';


const Webview = ({ src, active = true, visible = true }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh'}}>
      <webview  style={{width: '100%', height: '100%', top: 0, right: 0, left: 0, bottom: 0}} src={src || 'https://google.se'} />
    </div>
  );
};


export default Webview;
