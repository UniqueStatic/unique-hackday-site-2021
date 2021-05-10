import React, { useState, useEffect, FC } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import Splash from '../Splash';
import Section from '../Section';
import { Background, Primary } from '@/consts/color';

const BasicLayout = styled.div({
  background: Background,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: Primary,
});

interface AppProps {}

const Main: FC<AppProps> = ({}) => {
  // Create the count state.
  return (
    <BasicLayout>
      {/* <Splash /> */}
      <Section />
    </BasicLayout>
  );
};

export default Main;
