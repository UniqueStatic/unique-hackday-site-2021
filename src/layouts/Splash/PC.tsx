import React, { FC } from 'react';
// import './styles.css';
import { pics } from '.';
import styled from '@emotion/styled';
import { Background, Primary, Secondary } from '@/consts/color';
import { jsx, css } from '@emotion/react';

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
  background: Background,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  flexFlow: 'column',
}));

const ComputerLayout = styled.div({
  position: 'relative',
  top: '-8vh', // I have no choices...
  width: 'calc(100vh * 421 / 403)',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  alignItems: 'center',
});

const ComputerPic = styled.img({
  maxHeight: '100%',
  maxWidth: '100%',
});

const RebootTextLayout = styled.div({
  position: 'absolute',
  top: '31%',
  left: '35%',
  fontFamily: 'Swis721 BlkEx BT',
  fontSize: '2.2vmin',
});

const Reboot2021 = styled.div({
  fontFamily: 'Swis721 BlkEx BT',
  position: 'absolute',
  top: '66%',
  left: '16%',
  fontSize: '1.2vmin',
  color: 'black',
  transform: 'rotate(-7deg)',
});

const RebootText = styled.div((props) => ({
  color: props.color,
}));

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
  background: 'white',
});

const SignUpBackground = styled.div({
  position: 'absolute',
  bottom: '6.5vh',
  left: 'calc(50% - 0.5 * (50px + 10vmin))',
  height: 'calc(20px + 4vmin)',
  width: 'calc(50px + 10vmin)',
  background: '#E3E3E3',
  border: '1px black solid',
  cursor: 'pointer',
});

const SignUp: FC = () => {
  return (
    <SignUpBackground color="#E6E6E6">
      <SignUpBlock color="white">立即报名</SignUpBlock>
    </SignUpBackground>
  );
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

const FrontPage: FC = ({}) => {
  return (
    <FrontPageLayout>
      <ComputerLayout>
        <ComputerPic src={pics.computer} />
        <Reboot />
        <Reboot2021>2021</Reboot2021>
      </ComputerLayout>
      <SignUp />
    </FrontPageLayout>
  );
};

interface IDark {
  dark?: boolean;
}

interface HeaderProps extends IDark {
  switchMenu: () => void;
  pageIndex: number;
  showMenu: boolean;
}
const Header: FC<HeaderProps> = (props) => {
  const { showMenu, switchMenu, pageIndex, dark = false } = props;
  return (
    <>
      <HeaderLayout dark={dark}>
        <HeaderLine />
        <No2021>NO.2021</No2021>
        <HackDayTitle shouldUp={pageIndex === 0 ? false : true} />
        <MenuButton active={showMenu} click={switchMenu} />
      </HeaderLayout>
    </>
  );
};

interface HackdayProps {
  shouldUp: boolean;
}

const HackDayTitle: FC<HackdayProps> = (props) => {
  const { shouldUp } = props;
  return (
    <HackdayTitleLayout shouldUp={shouldUp}>
      <UniqueText>UNIQUESTUDIO</UniqueText>
      <HackdayText>HACKDAY</HackdayText>
    </HackdayTitleLayout>
  );
};

const HeaderLayout = styled.div<IDark>(({ dark }) => ({
  position: 'fixed',
  width: '-webkit-fill-available',
  top: '0',
  height: '0',
  background: dark ? '#fff' : Background,
  zIndex: 2,
  paddingTop: '8vh',
  display: 'flex',
  justifyContent: 'center',
  filter: dark ? 'invert(1)' : 'none',
  paddingBottom: '1vh',
}));

const HeaderLine = styled.div({
  position: 'absolute',
  bottom: '0',
  width: '94vw',
  height: '2px',
  background: 'black',
});

const No2021 = styled.div({
  position: 'absolute',
  right: '3vw',
  top: 'calc(8vh - 12px - 2vmin)',
  fontSize: 'calc(4px + 2vmin)',
  fontWeight: 400,
});

const HackdayTitleLayout = styled.div<HackdayProps>(({ shouldUp }) => ({
  position: 'absolute',
  left: '3vw',
  // top: '10px',
  padding: '10px 0 0',
  transform: `translateY(${shouldUp ? '-100%' : 0})`,
  transition: 'transform 0.5s',
}));

const UniqueText = styled.div({
  fontSize: '2vmin',
  fontWeight: 400,
  letterSpacing: '4.5px',
});

const HackdayText = styled.div({
  fontSize: '3vmin',
  fontFamily: 'Swis721 BlkEx BT',
  position: 'relative',
  left: '-2px',
});
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
  background: props.color,
  transform:
    props.isTop && props.active
      ? 'rotate(45deg) translateY(5.5px)'
      : props.isBottom && props.active
      ? 'rotate(-45deg) translateY(-5.5px)'
      : 'none',
  transition: '0.5s',
}));

const MenuButtonLayout = styled.div({
  position: 'absolute',
  top: 'calc(8vh + 20px)',
  right: '10vmin',
  width: '20px',
  cursor: 'pointer',
});

interface MenuButtonProps {
  click: () => void;
  active: boolean;
}

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

interface MenuLayoutProps {
  isHidden: boolean;
}

const MenuLayout = styled.div<MenuLayoutProps>((props) => ({
  position: 'absolute',
  background: Background,
  height: '100vh',
  width: '-webkit-fill-available',
  top: 0,
  transform: props.isHidden ? 'translateY(-100%)' : 'none',
  transition: 'transform 1s',
  zIndex: 1,
}));

const MenuTitleBlock = styled.div({
  position: 'absolute',
  height: 'calc(10px + 4vmin)',
  width: 'calc(100px + 20vmin)',
  border: '1px black solid',
  fontSize: 'calc(5px + 2vmin)',
  fontWeight: 400,
  fontFamily: 'Swis721 BlkEx BT',
  left: '-6px',
  top: '-6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: Background,
});

const MenuTitleBackground = styled.div({
  position: 'absolute',
  top: '6vh',
  left: '15vw',
  height: 'calc(10px + 4vmin)',
  width: 'calc(100px + 20vmin)',
  background: 'transparent',
  border: '1px black solid',
  cursor: 'pointer',
});

const Line = styled.div({
  width: '100px',
  height: '0',
  borderTop: '1.5px black solid',
  margin: '0 10px',
});

const MenuTitle: FC = () => {
  return (
    <MenuTitleBackground>
      <MenuTitleBlock>MENU —— 2021</MenuTitleBlock>
    </MenuTitleBackground>
  );
};

const Select = styled.div({
  position: 'absolute',
  top: '15%',
  left: '15%',
});

const Option = styled.div({
  width: 'calc(200px + 40vmin)',
  height: 'calc(10px + 2vmin)',
  padding: 'calc(6px + 2vmin)',
  fontWeight: 400,
  fontSize: '2.5vmin',
  cursor: 'pointer',
});

const MenuMain = styled.div({
  position: 'relative',
  marginTop: 'calc(50px + 10vh)',
  height: 'calc(90vh - 50px)',
  overflow: 'hidden',
});
interface MenuProps {
  isHidden: boolean;
  setPageIndex: (n: number) => void;
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
  const { isHidden, setPageIndex } = props;
  const options = optionText.map((_, i) => (
    <Option onClick={() => setPageIndex(i)} key={_}>
      {_}
    </Option>
  ));
  return (
    <MenuLayout isHidden={isHidden}>
      <MenuMain>
        <MenuTitle />
        <Select>{options}</Select>
      </MenuMain>
    </MenuLayout>
  );
};

export { Splash, Header, Menu };
