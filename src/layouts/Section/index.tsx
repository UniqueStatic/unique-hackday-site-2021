import React, { useState, useEffect, FC, useCallback, useRef } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Background, Primary, Secondary } from '@/consts/color';
import { Access, Awards, FAQs, Introduction, Schedule } from './data';

const BorderWidth = '1.5px';

const data = [
  {
    nameChn: '比赛介绍',
    nameEng: 'Introduction',
    content: Introduction,
  },
  {
    nameChn: '流程安排',
    nameEng: 'Schedule',
    content: Schedule,
  },
  {
    nameChn: '奖项设置',
    nameEng: 'Awards',
    content: Awards,
  },
  {
    nameChn: '常见问题',
    nameEng: 'FAQs',
    content: FAQs,
  },
  {
    nameChn: '联系我们',
    nameEng: 'Contact',
    content: Access,
  },
];

const ContentLayout = styled.div({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  width: '80vw',
  margin: '0 10%',
  borderTop: `${BorderWidth} solid ${Primary}`,
  '&::after': {
    content: '""',
    width: '100%',
    /* display: table; */
    position: 'absolute',
    height: BorderWidth,
    top: '60vh',
    background: Primary,
  },
});

const withBorder = css({
  border: `${BorderWidth} solid ${Primary}`,
  marginLeft: `-${BorderWidth}`,
  marginTop: `-${BorderWidth}`,
});

const ItemLayout = styled.li<{ expanded?: boolean }>(
  ({ expanded = false }) => ({
    position: 'relative',

    listStyle: 'none',
    width: expanded ? '41vw' : '7vw',
    minHeight:'60vh',
    maxHeight: expanded ? '80vh' : '60vh',
    transition: 'width .5s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    zIndex: 1,
  }),

  withBorder,
);

const ScrollView = styled.div({
  padding: '0 3vw',
  borderTop: `${BorderWidth} solid ${Primary}`,
  overflowY: 'scroll',
  marginRight: `-${BorderWidth}`,
  marginBottom: `-${BorderWidth}`,
  '::-webkit-scrollbar': {
    width: '32px',
  },
  '::-webkit-scrollbar-track': {
    border: `${BorderWidth} solid ${Primary}`,
    borderTop: `none`,
    background: Background,
  },
  '::-webkit-scrollbar-thumb': {
    border: '6px solid transparent;',
    boxShadow: `inset 0 0 0 ${BorderWidth} ${Primary}, inset 0 0 0 20px ${Secondary}`,
  },
});

interface AppProps {}

const RotatedText = styled.div({
  transform: 'rotate(-90deg)',
  transformOrigin: 'left top',
  fontSize: '25px',
  position: 'absolute',
  bottom: '0',
  left: 'calc(50% - 1ch)',
  fontFamily: ['Archivo Black'],
});

const BlackText = styled.div<{ expanded: boolean }>(({ expanded = false }) => ({
  margin: expanded ? '3vw' : 'initial',
  fontFamily: ['Archivo Black'],
}));

const ItemTitle = styled.div<{ expanded: boolean }>(({ expanded = false }) => ({
  flex: '0 0 10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: expanded ? 'flex-start' : 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  // div: {
  //   display: 'contents',
  // },
}));

interface IContentProps {
  expanded?: boolean;
  index: number;
  animating: boolean;
}

const Content: FC<IContentProps> = ({ expanded = false, index, animating }) => {
  const { nameChn, nameEng, content } = data[index];
  console.log(content);
  return (
    <>
      {' '}
      <ItemTitle {...{ expanded }}>
        <BlackText {...{ expanded }}>0{index + 1}</BlackText>
        {expanded && ` ${nameChn} / ${nameEng}`}
      </ItemTitle>
      {expanded ? (
        !animating && <ScrollView>{content}</ScrollView>
      ) : (
        <RotatedText>{nameEng}</RotatedText>
      )}
    </>
  );
};

const Container: FC<AppProps> = ({}) => {
  // Create the count state.
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const handleSwitch = useCallback(
    (i: number) => {
      if (animating || i == index) return;
      setAnimating(true);

      ref.current?.addEventListener(
        'transitionend',
        () => setAnimating(false),
        {
          once: true,
        },
      );

      setIndex(i);
      return () => {};
    },
    [animating, index],
  );
  return (
    <ContentLayout ref={ref}>
      {data.map((v, i) => {
        const expanded = i === index;
        return (
          <ItemLayout key={i} onClick={() => handleSwitch(i)} {...{ expanded }}>
            <Content expanded={expanded} index={i} animating={animating} />
          </ItemLayout>
        );
      })}
    </ContentLayout>
  );
};

export default Container;
