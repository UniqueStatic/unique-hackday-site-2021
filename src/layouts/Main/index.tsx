import React, { useState, useEffect, FC, useRef, useCallback } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import * as SectionCommon from '../Section';
import { Background, Primary } from '@/consts/color';
import { Global, css } from '@emotion/react';
import Pager from '@/components/Pager';
import * as SplashCommon from '../Splash';
import { globalStyles } from './globalStyles';

const isSafari = window.navigator.userAgent.includes('Safari');
const isChrome = window.navigator.userAgent.includes('Chrome');

interface BasicLayoutProps {
  isPC: boolean;
}

const BasicLayout = styled.div<BasicLayoutProps>(({ isPC }) => ({
  position: 'relative',
  background: Background,
  maxHeight: '88vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  overflowY: !isPC || (isSafari && !isChrome) ? 'auto' : 'hidden',
  marginTop: '12vh',
  fontSize: 'calc(10px + 2vmin)',
  color: Primary,
  scrollBehavior: 'smooth',
  msOverflowStyle: 'none' /* IE and Edge */,
  scrollbarWidth: 'none' /* Firefox */,
  '::-webkit-scrollbar': { display: 'none' },
}));

const enum Direction {
  Prev,
  Next,
}

const PageMax = 5;

const shouldShowPCLayout = () =>
  !(window.innerWidth / window.innerHeight < 0.8);

const Main: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isPC, setIsPC] = useState(shouldShowPCLayout());
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const SplashRef = useRef<HTMLDivElement | null>(null);
  const SectionRef = useRef<HTMLDivElement | null>(null);
  const switchPage = useCallback((pageIndex: number) => {
    if (!pageIndex) {
      SplashRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      SectionRef.current?.scrollIntoView({ behavior: 'smooth' });
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
    if (isPC) {
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
        }, 1000);
      };
      layoutRef.current?.addEventListener('wheel', handler);
      return () => {
        layoutRef.current?.removeEventListener('wheel', handler);
        throttle && clearTimeout(throttle);
      };
    }
  }, [handleScroll, isPC]);

  useEffect(() => {
    const handler = () => {
      switchPage(pageIndex);
      setIsPC(shouldShowPCLayout());
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [pageIndex, switchPage, setIsPC]);

  const handleMenuOption = useCallback(
    (pageIndex: number) => {
      setPageIndex(pageIndex);
      setShowMenu(false);
      isPC && switchPage(pageIndex);
    },
    [isPC, switchPage, setPageIndex, setShowMenu],
  );

  const { Header, Menu, Splash } = isPC
    ? SplashCommon.components.PC
    : SplashCommon.components.Mobile;

  const Section = isPC
    ? SectionCommon.components.PC
    : SectionCommon.components.Mobile;
  // Create the count state.
  return (
    <>
      <Global
        styles={globalStyles}
      />
      <Header
        switchMenu={setShowMenu.bind(this, !showMenu)}
        pageIndex={pageIndex}
        showMenu={showMenu}
      />
      <BasicLayout ref={layoutRef} isPC={isPC}>
        <Splash ref={SplashRef} />
        <Section
          ref={SectionRef}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </BasicLayout>
      <Pager pageIndex={pageIndex} showPager={isPC} />
      <Menu
        pageIndex={pageIndex}
        setPageIndex={handleMenuOption}
        isHidden={!showMenu}
      />
    </>
  );
};

export default Main;
