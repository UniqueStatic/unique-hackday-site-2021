import React, { useState, useEffect, FC } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import Splash from '../Splash';
import Content from '../Content';

const BasicLayout = styled.div({
  background: '#e3e3e3',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: '#1a1a1a',
});

interface AppProps {}

const Main: FC<AppProps> = ({}) => {
  // Create the count state.
  return (
    <BasicLayout>
      <Splash />
      <Content />
    </BasicLayout>
  );
};

export default Main;
