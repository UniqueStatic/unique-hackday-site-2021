import React, { useState, useEffect, FC } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';

const ContentLayout = styled.div({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  // color: 'white',
});

interface AppProps {}

const Content: FC<AppProps> = ({}) => {
  // Create the count state.
  return (
    <ContentLayout>
      <div>Content</div>
    </ContentLayout>
  );
};

export default Content;
