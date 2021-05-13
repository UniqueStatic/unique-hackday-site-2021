import React, { useState, useEffect, FC } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import pics from './common';
import styled from '@emotion/styled';
import type { IRefForwarder } from '@/interface';

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
  top: '20%',
  width: '60%',
});

const ComputerLayout = styled.div({
  position: 'absolute',
  top: '40%',
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
  position: 'absolute',
  top: '40%',
  left: '35%',
  fontSize: '2.2vmin',
});

const Reboot2021 = styled.div({
  position: 'absolute',
  top: '82%',
  left: '16%',
  fontSize: '1.5vmin',
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
  position: 'absolute',
  backgroundColor: '#E3E3E3',
  height: '100vh',
  width: '-webkit-fill-available',
  top: 0,
  transform: props.isHidden ? 'translateY(-100%)' : 'none',
  transition: 'transform 1s',
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

const OptionBlock = styled.div<ActiveProps>((props) => ({
  width: 'calc(200px + 40vmin)',
  height: 'calc(15px + 2vmin)',
  padding: 'calc(6px + 2vmin)',
  fontWeight: props.active ? 600 : 400,
  fontSize: props.active ? 'calc(14px + 2vmin)' : 'inherit',
}));

const MenuMain = styled.div({
  position: 'relative',
  marginTop: 'calc(50px + 10vh)',
  height: 'calc(90vh - 50px)',
  overflow: 'hidden',
});

interface OptionProps {
  word: string;
  active: boolean;
}

const Option: FC<OptionProps> = (props) => {
  const { word, active } = props;
  return (
    <OptionBlock active={active}>{(active ? `-  ` : '') + word}</OptionBlock>
  );
};

interface MenuProps {
  isHidden: boolean;
}

const Menu: FC<MenuProps> = (props) => {
  return (
    <MenuLayout isHidden={props.isHidden}>
      <MenuMain>
        <MenuTitle>MENU ---- 2021</MenuTitle>
        <Select>
          <Option
            word="首页&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Top"
            active={true}
          ></Option>
          <Option
            word="比赛介绍&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Introduction"
            active={false}
          ></Option>
          <Option
            word="流程安排&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Schedule"
            active={false}
          ></Option>
          <Option
            word="奖项设置&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Awards"
            active={false}
          ></Option>
          <Option
            word="常见问题&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;FAQs"
            active={false}
          ></Option>
          <Option
            word="联系我们&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Access"
            active={false}
          ></Option>
          <Option
            word="主办方&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;About Us"
            active={false}
          ></Option>
        </Select>
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
      <Menu isHidden={!showMenu} />
    </FrontPageLayout>
  );
};

export { Splash };
