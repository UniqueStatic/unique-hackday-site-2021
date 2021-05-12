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
  justifyContent: 'center',
}))

const SplitLine = styled.div({
  position: 'relative',
  width: '-webkit-fill-available',
  height: '1.5px',
  backgroundColor: 'black',
  zIndex: 2,
  margin: '0 auto',
  marginTop: '12vh',
})

const HackdayTitleLayout = styled.div({
  position: 'absolute',
  left: '20px',
  top: '-40px'
})

const UniqueText = styled.div({
  fontSize: 'calc(6px + 1vmin)',
  fontWeight: 300,
  letterSpacing: '3px'
})

const HackdayText = styled.div({
  fontSize: 'calc(12px + 2vmin)'
})

const UniqueLayout = styled.img({
  position: 'absolute',
  top: '20%',
  width: '60%'
})

const ComputerLayout = styled.div({
  position: 'absolute',
  top: '40%',
  width: '100%',
  height: 'calc(80vw * 403 / 421)',
  display: 'flex',
  justifyContent: 'center',
})

const ComputerPic = styled.img({
  width: '100%',
  position: 'absolute',
  top: 0,
})

const RebootTextLayout = styled.div({
  position: 'absolute',
  top: '40%',
  left: '35%',
  fontSize: '2.2vmin',
})

const Reboot2021 = styled.div({
  position: 'absolute',
  top: '82%',
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
  width: '130px',
  letterSpacing: '3px',
  bottom: '30px',
  display: 'flex',
  fontSize: 'calc(6px + 2vmin)',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 600,
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
  top: '-30px',
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
    <SignUpBlock>START</SignUpBlock>
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

const MenuTitle = styled.div({
  position: 'relative',
  top: '0',
  left: '20px',
  height: 'calc(15px + 4vmin)',
  width: '60vw',
  backgroundColor: 'black',
  color: 'white',
  fontSize: 'calc(10px + 2vmin)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
})

const Select = styled.div({
  position: 'relative',
  margin: '20px',
  borderLeft: '2px black solid'
})

interface ActiveProps{
  active: boolean
}

const OptionBlock = styled.div<ActiveProps>(props => ({
  width: 'calc(200px + 40vmin)',
  height: 'calc(15px + 2vmin)',
  padding: 'calc(6px + 2vmin)',
  fontWeight: props.active ? 600 : 400,
  fontSize: props.active ? 'calc(14px + 2vmin)' : 'inherit'
}))

const MenuMain = styled.div({
  position: 'relative',
  marginTop: 'calc(50px + 10vh)',
  height: 'calc(90vh - 50px)',
  overflow: 'hidden'
})

interface OptionProps{
  word: string,
  active: boolean
}

const Option: FC<OptionProps> = ( props ) => {
  const {word, active} = props
  return(
    <OptionBlock active={active}>{(active ? `-  ` : '') + word}</OptionBlock>
  )
}

interface MenuProps {
  isHidden: boolean
}

const Menu: FC<MenuProps> = (props) => {
  return (
    <MenuLayout isHidden={props.isHidden}>
      <MenuMain>
      <MenuTitle>MENU ---- 2021</MenuTitle>
      <Select>
        <Option word='首页&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Top' active={true}></Option>
        <Option word='比赛介绍&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Introduction' active={false}></Option>
        <Option word='流程安排&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Schedule' active={false}></Option>
        <Option word='奖项设置&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Awards' active={false}></Option>
        <Option word='常见问题&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;FAQs' active={false}></Option>
        <Option word='联系我们&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Access' active={false}></Option>
        <Option word='主办方&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;About Us' active={false}></Option>
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
      <UniqueLayout src={pics.unique}/>
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
