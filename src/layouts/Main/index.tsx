import React, { useState, useEffect, FC, useRef, useCallback } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import Splash from '../Splash';
import Section from '../Section';
import { Background, Primary } from '@/consts/color';
import { Global, css } from '@emotion/react';
import Pager from '@/components/Pager';
import * as SplashCommon from '../Splash/common';

const BasicLayout = styled.div({
  position: 'relative',
  background: Background,
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  overflowY: 'hidden',
  fontSize: 'calc(10px + 2vmin)',
  color: Primary,
  scrollBehavior: 'smooth',
});

const enum Direction {
  Prev,
  Next,
}

const PageMax = 5;

const Main: FC = () => {
  const { Header, Menu } = SplashCommon.components;
  const [showMenu, setShowMenu] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const SplashRef = useRef<HTMLDivElement | null>(null);
  const SectionRef = useRef<HTMLDivElement | null>(null);
  const switchPage = useCallback((pageIndex: number) => {
    switch (pageIndex) {
      case 0: {
        SplashRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      default: {
        SectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  }, []);
  const handleScroll = useCallback(
    (direction: Direction) => {
      setPageIndex((index) => {
        let ret = index;
        switch (direction) {
          case Direction.Next: {
            ret = index == PageMax ? index : index + 1;
            break;
          }
          case Direction.Prev:
            ret = index == 0 ? index : index - 1;
            break;
          default:
            break;
        }
        switchPage(ret);
        return ret;
      });
    },
    [setPageIndex],
  );

  useEffect(() => {
    let throttle: number | null = null;
    const handler = (ev: WheelEvent) => {
      ev.preventDefault();

      if (throttle) return;
      if (ev.deltaY > 0) {
        handleScroll(Direction.Next);
      } else {
        handleScroll(Direction.Prev);
      }
      throttle = setTimeout(() => {
        throttle = null;
      }, 500);
    };
    layoutRef.current?.addEventListener('wheel', handler);
    return () => {
      layoutRef.current?.removeEventListener('wheel', handler);
      throttle && clearTimeout(throttle);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handler = () => switchPage(pageIndex);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [pageIndex, switchPage]);

  let handleMenuOption = (pageIndex: number) => {
    setPageIndex(pageIndex);
    setShowMenu(false);
    switchPage(pageIndex)
  };
  // Create the count state.
  return (
    <>
      <Global
        styles={css`
          html {
            -webkit-text-size-adjust: none;
          }
          body {
            margin: 0;
          }
        `}
      />
      <BasicLayout ref={layoutRef}>
        <Header
          switchMenu={setShowMenu.bind(this, !showMenu)}
          pageIndex={pageIndex}
          showMenu={showMenu}
        />
        <Splash.PC ref={SplashRef} />
        <Section
          ref={SectionRef}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </BasicLayout>
      <Pager pageIndex={pageIndex} />
      <Menu setPageIndex={handleMenuOption} isHidden={!showMenu} />
    </>
  );
};

export default Main;
