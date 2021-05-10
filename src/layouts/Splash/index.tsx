import React, { useState, useEffect, FC } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';

const SplashLayout = styled.div({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  // color: 'white',
});

interface AppProps {}

const Splash: FC<AppProps> = ({}) => {
  // Create the count state.
  return (
    <SplashLayout>
      <div>Splash</div>
    </SplashLayout>
  );
};

export default Splash;
