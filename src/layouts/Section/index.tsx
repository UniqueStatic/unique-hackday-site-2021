import React, { useState, useEffect, FC, useCallback, useRef } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { Background, Primary, Secondary } from '@/consts/color';
import { Access, Awards, FAQs, Introduction, Schedule } from './data';
import type { IRefForwarder } from '@/interface';

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
  paddingTop: '12vh',
  minHeight: '100vh',

  // '&::after': {
  //   content: '""',
  //   width: '100%',
  //   /* display: table; */
  //   position: 'absolute',
  //   height: BorderWidth,
  //   top: '70vh',
  //   background: Primary,
  // },
});

const withBorder = css({
  border: `${BorderWidth} solid ${Primary}`,
  marginLeft: `-${BorderWidth}`,
});

interface IExpandable {
  expanded?: boolean;
}

const ItemLayout = styled.li<IExpandable>(
  ({ expanded = false }) => ({
    position: 'relative',
    overflow: 'hidden',

    listStyle: 'none',
    width: expanded ? '41vw' : '7vw',
    height: '80vh',

    // maxHeight: expanded ? '90vh' : '60vh',
    transition: 'width .5s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    zIndex: 1,
  }),

  withBorder,
);

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const ScrollView = styled.div<IExpandable>(({ expanded = false }) => ({
  // padding: '0 3vw',
  borderTop: `${BorderWidth} solid ${Primary}`,
  overflowY: 'auto',
  width: 'calc(41vw + 1px)',

  // whiteSpace:'nowrap',
  marginRight: `-${BorderWidth}`,
  marginBottom: `-${BorderWidth}`,
  // animation: `${fadeIn} 1s ease;`,
  // animationFillMode:'backwards',
  // animationDelay: '.5s',
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
}));

interface AppProps {}

const RotatedText = styled.div({
  transform: 'rotate(-90deg)',
  transformOrigin: 'left top',
  fontSize: '25px',
  position: 'absolute',
  bottom: '0',
  left: 'calc(50% - 1ch)',
  fontFamily: ['Russo One'],
});

const BlackText = styled.div<IExpandable>(({ expanded = false }) => ({
  margin: expanded ? '3vw' : 'initial',
  fontFamily: ['Russo One'],
}));

const ItemTitle = styled.div<IExpandable>(({ expanded = false }) => ({
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
  return (
    <>
      {' '}
      <ItemTitle {...{ expanded }}>
        <BlackText {...{ expanded }}>0{index + 1}</BlackText>
        {expanded && ` ${nameChn} / ${nameEng}`}
      </ItemTitle>
      {expanded ? (
        <ScrollView onWheelCapture={ev=>ev.stopPropagation()} >{content}</ScrollView>
      ) : (
        <RotatedText>{nameEng}</RotatedText>
      )}
    </>
  );
};

interface ISectionProps {
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

const Container = React.forwardRef<HTMLDivElement | null, ISectionProps>(
  ({ pageIndex, setPageIndex }, ref) => {
    // Create the count state.
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
      if (pageIndex) setIndex(pageIndex === 0 ? pageIndex : pageIndex - 1);
    }, [pageIndex]);

    const handleSwitch = useCallback(
      (i: number) => {
        if (animating || i == index) return;
        setAnimating(true);
        if (ref && 'current' in ref) {
          ref.current?.addEventListener(
            'transitionend',
            () => setAnimating(false),
            {
              once: true,
            },
          );
        }
        // setIndex(i);
        setPageIndex(i + 1);
        return () => {};
      },
      [animating, index],
    );
    return (
      <ContentLayout ref={ref}>
        {data.map((v, i) => {
          const expanded = i === index;
          return (
            <ItemLayout
              key={v.nameEng}
              onClick={() => handleSwitch(i)}
              {...{ expanded }}
            >
              <Content expanded={expanded} index={i} animating={animating} />
            </ItemLayout>
          );
        })}
      </ContentLayout>
    );
  },
);

export default Container;
