import React, { useState, useEffect, FC } from 'react';
import styled from '@emotion/styled';
import { Background, Primary } from '@/consts/color';
import { Global, css } from '@emotion/react';

const PagerContainer = styled.div({
  display: 'flex',
  border: `${Primary} 2px solid`,
  borderRadius: '2px',
  background: '#fff',
  position: 'fixed',
  bottom: '2vh',
  right: '5vw',
  padding: '2px 1px',
});
interface IPagerItemProps {
  show?: boolean;
}
const PagerItem = styled.li<IPagerItemProps>(({ show = false }) => ({
  listStyle: 'none',
  width: '1ch',
  height: '2.5ch',
  margin: '0 1px',
  borderRadius: '2px',
  transition: 'background .5s linear',
  background: show ? Primary : 'none',
}));

interface IPagerProps {
  pageIndex?: number;
  max?: number;
}

const Pager: FC<IPagerProps> = ({ pageIndex = 0, max = 6 }) => {
  return (
    <PagerContainer>
      {Array(max)
        .fill(null)
        .map((_, i) => (
          <PagerItem show={i <= pageIndex} />
        ))}
    </PagerContainer>
  );
};

export default Pager;
