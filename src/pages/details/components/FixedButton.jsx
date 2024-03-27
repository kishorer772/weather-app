import React from 'react';

const FixedButton = ({ isMobile, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: isMobile ? 'calc(100% / 2) ' : 'calc(100% /2)',
        right: 'calc(100% / 9)',
      }}
    >
      {children}
    </div>
  );
};

export default FixedButton;
