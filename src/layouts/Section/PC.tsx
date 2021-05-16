import React, { useState, useEffect, FC, useCallback, useRef } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { Background, Primary, Secondary } from '@/consts/color';
import data from './data';
import { pic } from './data';
import type { IRefForwarder } from '@/interface';

const BorderWidth = '2px';

const titleData = data.titleData;

const ContentLayout = styled.div({
  display: 'flex',
  position: 'relative',
  top: '-2px',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  width: '80vw',
  margin: '0 10%',
  background: Background,
  minHeight: '100vh',
  '&::after': {
    content: '""',
    width: '94vw',
    /* display: table; */
    position: 'absolute',
    height: BorderWidth,
    top: 'calc(80vh)',
    // bottom:'10vh',
    background: Primary,
  },
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
    top: '-2px',
    overflow: 'hidden',
    background: '#e3e3e3',
    listStyle: 'none',
    width: expanded ? '41vw' : '7vw',
    height: '80vh',

    // maxHeight: expanded ? '90vh' : '60vh',
    transition: 'width .5s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    zIndex: 1,
  }),

  withBorder,
);

const ScrollView = styled.div<IExpandable>(({ expanded = false }) => ({
  // padding: '0 3vw',
  borderTop: `${BorderWidth} solid ${Primary}`,
  overflowY: 'auto',
  overflowX: 'hidden',
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
    background: 'e3e3e3',
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
  left: 'calc(50% - 12.5px)',
  fontFamily: 'Swis721 BlkEx BT',
});

const BlackText = styled.div<IExpandable>(({ expanded = false }) => ({
  margin: expanded ? '3vw' : 'initial',
  fontFamily: 'Swis721 BlkEx BT',
  fontSize: 'calc(6px + 2vmin)',
}));

const ItemTitle = styled.div<IExpandable>(({ expanded = false }) => ({
  flex: '0 0 10vh',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: expanded ? 'flex-start' : 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  position: 'relative',
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
  const { nameChn, nameEng, content } = titleData[index];
  return (
    <>
      <ItemTitle {...{ expanded }}>
        <BlackText {...{ expanded }}>0{index + 1}</BlackText>
        {expanded && ` ${nameChn} / ${nameEng}`}
      </ItemTitle>
      {expanded ? (
        <ScrollView onWheelCapture={(ev) => ev.stopPropagation()}>
          {content}
        </ScrollView>
      ) : (
        <RotatedText>{nameEng}</RotatedText>
      )}
    </>
  );
};
interface TitleImgProps {
  isExpanded: boolean;
}

const TitleImg = styled.img<TitleImgProps>(({ isExpanded }) => ({
  position: 'absolute',
  width: '6vh',
  height: '6vh',
  top: 'calc(9vh - 4vh)',
  left: 'calc(90% - 4vh)',
  visibility: isExpanded ? 'visible' : 'hidden',
  zIndex: 2,
}));
interface ISectionProps {
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

const Container = React.forwardRef<HTMLDivElement | null, ISectionProps>(
  ({ pageIndex, setPageIndex }, ref) => {
    // Create the count state.
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const imgs = [
      pic.introPic,
      pic.schedulePic,
      pic.trophyPic,
      pic.questionPic,
      '',
    ];

    useEffect(() => {
      if (pageIndex && pageIndex <= 5) // magic
        setIndex(pageIndex === 0 ? pageIndex : pageIndex - 1);
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
        {titleData.map((v, i) => {
          const expanded = i === index;
          return (
            <ItemLayout
              key={v.nameEng}
              onClick={() => handleSwitch(i)}
              {...{ expanded }}
            >
              <TitleImg
                isExpanded={expanded && index != 4}
                src={imgs[index]}
              ></TitleImg>
              <Content expanded={expanded} index={i} animating={animating} />
            </ItemLayout>
          );
        })}
      </ContentLayout>
    );
  },
);

export default Container;
