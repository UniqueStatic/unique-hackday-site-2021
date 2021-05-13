import React, { useState, useEffect, FC } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import pics from './common'
import styled from '@emotion/styled';

const SplashLayout = styled.div({
  minHeight: '100vh',
  width:'-webkit-fill-available',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  // color: 'white',
});

const FrontPageLayout = styled.div(props => ({
  height: '100vh',
  width:'-webkit-fill-available',
  backgroundColor: '#EFB8D3',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  flexFlow: 'column'
}))

const SplitLine = styled.div({
  position: 'relative',
  width: '94vw',
  height: '1.5px',
  backgroundColor: 'black',
  zIndex: 2,
  margin: '0 auto',
  marginTop: '12vh',
})

const No2021 = styled.div({
  position: 'absolute',
  right: '0',
  top: 'calc(-1 * (12px + 2vmin))',
  fontSize: 'calc(4px + 2vmin)',
  fontWeight: 300,
})

const HackdayTitleLayout = styled.div({
  position: 'absolute',
  left: '0',
  top: '10px'
})

const UniqueText = styled.div({
  fontSize: 'calc(6px + 1vmin)',
  fontWeight: 300,
  letterSpacing: '3px'
})

const HackdayText = styled.div({
  fontSize: 'calc(12px + 2vmin)'
})

const ComputerLayout = styled.div({
  position: 'relative',
  width: 'calc(80vh * 421 / 403)',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  alignItems: 'center',
})

const ComputerPic = styled.img({
  maxHeight: '100%',
  maxWidth: '100%',
})

const RebootTextLayout = styled.div({
  position: 'absolute',
  top: '31%',
  left: '35%',
  fontSize: '2.2vmin',
})

const Reboot2021 = styled.div({
  position: 'absolute',
  top: '66%',
  left: '16%',
  fontSize: '1.5vmin',
  color: 'black',
  transform: 'rotate(-7deg)',
  fontWeight: 900
})

const RebootText = styled.div(props => ({
  color: props.color
}))

const SignUpBlock = styled.div({
  position: 'absolute',
  height: 'calc(20px + 4vmin)',
  width: 'calc(50px + 10vmin)',
  border: '1px black solid',
  letterSpacing: '2px',
  left: '-4px',
  top: '-4px',
  display: 'flex',
  fontSize: 'calc(6px + 2vmin)',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
})

const SignUpBackground = styled.div({
  position: 'absolute',
  bottom: '6.5vh',
  left: 'calc(50% - 0.5 * (50px + 10vmin))',
  height: 'calc(20px + 4vmin)',
  width: 'calc(50px + 10vmin)',
  backgroundColor: '#E3E3E3',
  border: '1px black solid',
  cursor: 'pointer'
})

interface AppProps { }

interface MenuButtonBlockProps {
  color: string,
  isTop: boolean,
  isBottom: boolean,
  active: boolean,
}
const MenuButtonBlock = styled.div<MenuButtonBlockProps>(props => ({
  width: '100%',
  height: '3px',
  margin: '1px 0',
  backgroundColor: props.color,
  transform: props.isTop && props.active ? 'rotate(45deg) translateY(5.5px)' : props.isBottom && props.active ? 'rotate(-45deg) translateY(-5.5px)' : 'none',
  transition: '0.5s'
}))

const MenuButtonLayout = styled.div({
  position: 'absolute',
  top: '20px',
  right: '10vmin',
  width: '20px',
  cursor: 'pointer'
})

interface MenuButtonProps {
  click: () => void
}

const MenuButton: FC<MenuButtonProps> = (props) => {
  const [active, setActive] = useState(false)

  let onClick = () => {
    props.click()
    setActive(!active)
  }
  return (
    <MenuButtonLayout onClick={onClick}>
      <MenuButtonBlock color='black' isTop={true} isBottom={false} active={active} />
      <MenuButtonBlock color='transparent' isTop={false} isBottom={false} active={active} />
      <MenuButtonBlock color='black' isTop={false} isBottom={true} active={active} />
    </MenuButtonLayout>
  )
}

const SignUp: FC<AppProps> = ({ }) => {
  return (
    <SignUpBackground color='#E6E6E6'>
      <SignUpBlock color='white'>立即报名</SignUpBlock>
    </SignUpBackground>
  )
}

const Reboot: FC<AppProps> = ({ }) => {
  return (
    <RebootTextLayout>
      <RebootText color='#EFB8D3'>REBOOT</RebootText>
      <RebootText color='#EFB8D3'>THE</RebootText>
      <RebootText color='white'>HACKDAY</RebootText>
    </RebootTextLayout>
  )
}

const Splash: FC<AppProps> = ({ }) => {
  // Create the count state.
  return (
    <SplashLayout>
      <FrontPage />
    </SplashLayout>
  );
};

const HackDayTitle: FC<AppProps> = ({ }) => {
  return (
    <HackdayTitleLayout>
      <UniqueText>UNIQUESTUDIO</UniqueText>
      <HackdayText>HACKDAY</HackdayText>
    </HackdayTitleLayout>
  )
}
interface HeaderProps {
  switchMenu: () => void
}
const Header: FC<HeaderProps> = (props) => {
  return (
    <>
      <SplitLine>
        <No2021>NO.2021</No2021>
        <HackDayTitle />
        <MenuButton click={props.switchMenu} />
      </SplitLine>
    </>
  )
}

interface MenuLayoutProps {
  isHidden: boolean
}

const MenuLayout = styled.div<MenuLayoutProps>(props => ({
  position: 'absolute',
  backgroundColor: '#E3E3E3',
  height: '100vh',
  width: '-webkit-fill-available',
  top: 0,
  transform: props.isHidden ? 'translateY(-100%)' : 'none',
  transition: 'transform 1s',
}))

const MenuTitleBlock = styled.div({
  position: 'absolute',
  height: 'calc(10px + 4vmin)',
  width: 'calc(100px + 20vmin)',
  border: '1px black solid',
  fontSize: 'calc(5px + 2vmin)',
  fontWeight: 300,
  left: '-6px',
  top: '-6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E3E3E3',
})

const MenuTitleBackground = styled.div({
  position: 'absolute',
  top: '5%',
  left: '15%',
  height: 'calc(10px + 4vmin)',
  width: 'calc(100px + 20vmin)',
  backgroundColor: 'transparent',
  border: '1px black solid',
  cursor: 'pointer'
})

const MenuTitle: FC<AppProps> = ({ }) => {
  return (
    <MenuTitleBackground>
      <MenuTitleBlock>MENU ---------- 2021</MenuTitleBlock>
    </MenuTitleBackground>
  )
}

const Select = styled.div({
  position: 'absolute',
  top: '15%',
  left: '15%'
})

const Option = styled.div({
  width: 'calc(200px + 40vmin)',
  height: 'calc(10px + 2vmin)',
  padding: 'calc(6px + 2vmin)',
  fontWeight: 300,

})

const MenuMain = styled.div({
  position: 'relative',
  marginTop: 'calc(50px + 10vh)',
  height: 'calc(90vh - 50px)',
  overflow: 'hidden'
})
interface MenuProps {
  isHidden: boolean
}

const Menu: FC<MenuProps> = (props) => {
  return (
    <MenuLayout isHidden={props.isHidden}>
      <MenuMain>
      <MenuTitle />
      <Select>
        <Option>首页&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Top</Option>
        <Option>比赛介绍&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Introduction</Option>
        <Option>流程安排&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Schedule</Option>
        <Option>奖项设置&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Awards</Option>
        <Option>常见问题&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;FAQs</Option>
        <Option>联系我们&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Access</Option>
        <Option>主办方&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;About Us</Option>
      </Select>
      </MenuMain>
    </MenuLayout>
  )
}

const FrontPage: FC<AppProps> = ({ }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <FrontPageLayout>
      <Header switchMenu={setShowMenu.bind(this, !showMenu)} />
      <ComputerLayout>
        <ComputerPic src={pics.computer} />
        <Reboot />
        <Reboot2021>2021</Reboot2021>
      </ComputerLayout>
      <SignUp />
      <Menu isHidden={!showMenu} />
    </FrontPageLayout>
  )
}

export {Splash};
