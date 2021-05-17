import React, { useState, useEffect, FC } from 'react';
import logo from '@/assets/logo.svg';
import { Background, Primary } from '@/consts/color';
// import './styles.css';
import { pics } from '.';
import styled from '@emotion/styled';

const SplashLayout = styled.div({
  minHeight: '100vh',
  width: '-webkit-fill-available',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  // color: 'white',
});

const FrontPageLayout = styled.div((props) => ({
  height: '100vh',
  width: '-webkit-fill-available',
  backgroundColor: '#EFB8D3',
  display: 'flex',
  justifyContent: 'center',
}));

const UniqueLayout = styled.img({
  position: 'absolute',
  top: '15%',
  width: '60%',
});

const ComputerLayout = styled.div({
  position: 'absolute',
  top: '35%',
  width: '100%',
  height: 'calc(80vw * 403 / 421)',
  display: 'flex',
  justifyContent: 'center',
});

const ComputerPic = styled.img({
  width: '100%',
  position: 'absolute',
  top: 0,
});

const RebootTextLayout = styled.div({
  fontFamily: 'Swis721 BlkEx BT',
  position: 'absolute',
  top: '40%',
  left: '35%',
  fontSize: '2.2vmin',
});

const Reboot2021 = styled.div({
  position: 'absolute',
  top: '82%',
  left: '16%',
  fontSize: '1vmin',
  fontFamily: 'Swis721 BlkEx BT',
  color: 'black',
  transform: 'rotate(-7deg)',
  fontWeight: 900,
});

const RebootText = styled.div((props) => ({
  color: props.color,
}));

const SignUpBlock = styled.div({
  position: 'absolute',
  height: 'calc(20px + 4vmin)',
  width: '35vw',
  letterSpacing: '3px',
  bottom: '8vh',
  display: 'flex',
  fontSize: 'calc(6px + 2vmin)',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 600,
  fontFamily: 'Swis721 BlkEx BT',
});

const SignUp: FC = () => {
  return <SignUpBlock>START</SignUpBlock>;
};

const Reboot: FC = () => {
  return (
    <RebootTextLayout>
      <RebootText color="#EFB8D3">REBOOT</RebootText>
      <RebootText color="#EFB8D3">THE</RebootText>
      <RebootText color="white">HACKDAY</RebootText>
    </RebootTextLayout>
  );
};

const Splash = React.forwardRef<HTMLDivElement | null>((props, ref) => (
  <SplashLayout ref={ref}>
    <FrontPage />
  </SplashLayout>
));

interface MenuLayoutProps {
  isHidden: boolean;
}

const MenuLayout = styled.div<MenuLayoutProps>((props) => ({
  position: 'fixed',
  backgroundColor: Background,
  height: '100vh',
  width: '-webkit-fill-available',
  top: 0,
  transform: props.isHidden ? 'translateY(-100%)' : 'none',
  transition: 'transform 1s',
  zIndex: 1,
}));

const MenuTitle = styled.div({
  position: 'relative',
  top: '0',
  left: '20px',
  height: 'calc(15px + 4vmin)',
  width: '60vw',
  backgroundColor: 'black',
  color: 'white',
  fontSize: 'calc(10px + 2vmin)',
  fontFamily: 'Swis721 BlkEx BT',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
});

const Select = styled.div({
  position: 'relative',
  margin: '20px',
  borderLeft: '2px black solid',
});

interface ActiveProps {
  active: boolean;
}

const OptionBlock = styled.a<ActiveProps>(({ active }) => ({
  color: 'black',
  position: 'relative',
  top: '-4px',
  width: 'calc(200px + 40vmin)',
  height: active ? 'calc(28px + 4vmin)' : 'calc(15px + 2vmin)',
  padding: 'calc(6px + 2vmin)',
  paddingTop: '0',
  paddingBottom: 'calc(12px + 4vmin)',
  fontWeight: active ? 600 : 400,
  fontSize: active ? 'calc(14px + 2vmin)' : 'inherit',
  display: 'flex',
  alignItems: 'flex-start',
  textDecoration: 'none',
}));

const MenuMain = styled.div({
  position: 'relative',
  marginTop: 'calc(50px + 10vh)',
  height: 'calc(90vh - 50px)',
  overflow: 'hidden',
});

interface MenuProps {
  isHidden: boolean;
  setPageIndex: (n: number) => void;
  pageIndex: number;
}

const Menu: FC<MenuProps> = (props) => {
  const optionText = [
    '首页 / Top',
    '比赛介绍 / Introduction',
    '流程安排 / Schedule',
    '奖项设置 / Awards',
    '常见问题 / FAQs',
    '联系我们 / Access',
    '赞助商 / Sponsor',
  ];
  const { pageIndex, isHidden, setPageIndex } = props;
  const options = optionText.map((_, i) => (
    <OptionBlock
      onClick={() => setPageIndex(i)}
      active={pageIndex === i ? true : false}
      key={_}
      href={`#item${i - 1}`}
    >
      {pageIndex === i ? `- ${_}` : _}
    </OptionBlock>
  ));
  return (
    <MenuLayout isHidden={isHidden}>
      <MenuMain>
        <MenuTitle>MENU —— 2021</MenuTitle>
        <Select>{options}</Select>
      </MenuMain>
    </MenuLayout>
  );
};

const FrontPage: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <FrontPageLayout>
      <UniqueLayout src={pics.unique} />
      <ComputerLayout>
        <ComputerPic src={pics.computer} />
        <Reboot />
        <Reboot2021>2021</Reboot2021>
      </ComputerLayout>
      <SignUp />
    </FrontPageLayout>
  );
};

interface HeaderProps {
  switchMenu: () => void;
  showMenu: boolean;
}
const Header: FC<HeaderProps> = (props) => {
  const { showMenu, switchMenu } = props;
  return (
    <SplitLine>
      <HeaderContainer>
        <HackDayTitle />
        <MenuButton active={showMenu} click={switchMenu} />
      </HeaderContainer>
    </SplitLine>
  );
};
const HeaderContainer = styled.div({
  position: 'relative',
});
const HackDayTitle: FC = () => {
  return (
    <HackdayTitleLayout>
      <UniqueText>UNIQUESTUDIO</UniqueText>
      <HackdayText>HACKDAY</HackdayText>
    </HackdayTitleLayout>
  );
};

const SplitLine = styled.div({
  position: 'fixed',
  width: '-webkit-fill-available',
  height: '0',
  top: '0',
  borderBottom: '1.5px solid black',
  backgroundColor: '#EFB8D3',
  zIndex: 2,
  margin: '0 auto',
  paddingTop: '8vh',
});

const HackdayTitleLayout = styled.div({
  position: 'absolute',
  left: '20px',
  top: '-40px',
});

const UniqueText = styled.div({
  fontSize: 'calc(6px + 1vmin)',
  fontWeight: 400,
  letterSpacing: '4.5px',
});

const HackdayText = styled.div({
  fontSize: 'calc(12px + 2vmin)',
  fontFamily: 'Swis721 BlkEx BT',
  position: 'relative',
  left: '-2px',
});
const MenuButtonLayout = styled.div({
  position: 'absolute',
  top: '-30px',
  right: '10vmin',
  width: '20px',
  cursor: 'pointer',
});

interface MenuButtonProps {
  click: () => void;
  active: boolean;
}
interface MenuButtonBlockProps {
  color: string;
  isTop: boolean;
  isBottom: boolean;
  active: boolean;
}
const MenuButtonBlock = styled.div<MenuButtonBlockProps>((props) => ({
  width: '100%',
  height: '3px',
  margin: '1px 0',
  backgroundColor: props.color,
  transform:
    props.isTop && props.active
      ? 'rotate(45deg) translateY(5.5px)'
      : props.isBottom && props.active
      ? 'rotate(-45deg) translateY(-5.5px)'
      : 'none',
  transition: '0.5s',
}));
const MenuButton: FC<MenuButtonProps> = (props) => {
  const { click, active } = props;
  return (
    <MenuButtonLayout onClick={click}>
      <MenuButtonBlock
        color="black"
        isTop={true}
        isBottom={false}
        active={active}
      />
      <MenuButtonBlock
        color="transparent"
        isTop={false}
        isBottom={false}
        active={active}
      />
      <MenuButtonBlock
        color="black"
        isTop={false}
        isBottom={true}
        active={active}
      />
    </MenuButtonLayout>
  );
};

export { Splash, Header, Menu };
