import React, { useState, useEffect, FC } from 'react';
import styled from '@emotion/styled';
import computer from '../../assets/imgs/Computer.png';
import unique from '../../assets/imgs/UniqueMoblie.png';
const pics = {
  computer,
  unique,
};

// interface HeaderProps {
//   switchMenu: () => void;
// }
// const Header: FC<HeaderProps> = (props) => {
//   return (
//       <SplitLine>
//         <HeaderContainer>
//           <HackDayTitle />
//           <MenuButton click={props.switchMenu} />
//         </HeaderContainer>
//       </SplitLine>
//   );
// };
// const HeaderContainer = styled.div({
//   position: 'relative',
// })
// const HackDayTitle: FC = () => {
//   return (
//     <HackdayTitleLayout>
//       <UniqueText>UNIQUESTUDIO</UniqueText>
//       <HackdayText>HACKDAY</HackdayText>
//     </HackdayTitleLayout>
//   );
// };

// const SplitLine = styled.div({
//   position: 'fixed',
//   width: '-webkit-fill-available',
//   height: '1.5px',
//   backgroundColor: 'black',
//   zIndex: 2,
//   margin: '0 auto',
//   marginTop: '12vh',
// });

// const HackdayTitleLayout = styled.div({
//   position: 'absolute',
//   left: '20px',
//   top: '-40px',
// });

// const UniqueText = styled.div({
//   fontSize: 'calc(6px + 1vmin)',
//   fontWeight: 300,
//   letterSpacing: '3px',
// });

// const HackdayText = styled.div({
//   fontSize: 'calc(12px + 2vmin)',
// });
// const MenuButtonLayout = styled.div({
//   position: 'absolute',
//   top: '-30px',
//   right: '10vmin',
//   width: '20px',
//   cursor: 'pointer',
// });

// interface MenuButtonProps {
//   click: () => void;
// }
// interface MenuButtonBlockProps {
//   color: string;
//   isTop: boolean;
//   isBottom: boolean;
//   active: boolean;
// }
// const MenuButtonBlock = styled.div<MenuButtonBlockProps>((props) => ({
//   width: '100%',
//   height: '3px',
//   margin: '1px 0',
//   backgroundColor: props.color,
//   transform:
//     props.isTop && props.active
//       ? 'rotate(45deg) translateY(5.5px)'
//       : props.isBottom && props.active
//         ? 'rotate(-45deg) translateY(-5.5px)'
//         : 'none',
//   transition: '0.5s',
// }));
// const MenuButton: FC<MenuButtonProps> = (props) => {
//   const [active, setActive] = useState(false);

//   let onClick = () => {
//     props.click();
//     setActive(!active);
//   };
//   return (
//     <MenuButtonLayout onClick={onClick}>
//       <MenuButtonBlock
//         color="black"
//         isTop={true}
//         isBottom={false}
//         active={active}
//       />
//       <MenuButtonBlock
//         color="transparent"
//         isTop={false}
//         isBottom={false}
//         active={active}
//       />
//       <MenuButtonBlock
//         color="black"
//         isTop={false}
//         isBottom={true}
//         active={active}
//       />
//     </MenuButtonLayout>
//   );
// };

interface HeaderProps {
  switchMenu: () => void;
  pageIndex: number;
  showMenu: boolean;
}
const Header: FC<HeaderProps> = (props) => {
  const { showMenu, switchMenu, pageIndex } = props;
  return (
    <>
      <SplitLine>
        <No2021>NO.2021</No2021>
        <HackDayTitle shouldUp={pageIndex === 0 ? false : true} />
        <MenuButton active={showMenu} click={switchMenu} />
      </SplitLine>
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

const SplitLine = styled.div({
  position: 'fixed',
  width: '94vw',
  height: '2px',
  backgroundColor: 'black',
  zIndex: 2,
  margin: '0 auto',
  marginTop: '12vh',
});

const No2021 = styled.div({
  position: 'absolute',
  right: '0',
  top: 'calc(-1 * (12px + 2vmin))',
  fontSize: 'calc(4px + 2vmin)',
  fontWeight: 300,
});

const HackdayTitleLayout = styled.div<HackdayProps>(({ shouldUp }) => ({
  position: 'absolute',
  left: '0',
  // top: '10px',
  padding:'10px 0 0',
  transform: `translateY(${shouldUp ? '-100%' : 0})`,
  transition: 'transform 0.5s',
}));

const UniqueText = styled.div({
  fontSize: 'calc(6px + 1vmin)',
  fontWeight: 300,
  letterSpacing: '3px',
});

const HackdayText = styled.div({
  fontSize: 'calc(12px + 2vmin)',
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
  backgroundColor: props.color,
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
  top: '20px',
  right: '10vmin',
  width: '20px',
  cursor: 'pointer',
});

interface MenuButtonProps {
  click: () => void;
  active: boolean;
}

const MenuButton: FC<MenuButtonProps> = (props) => {
  const {click, active} = props
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
  backgroundColor: '#E3E3E3',
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
  fontWeight: 300,
  left: '-6px',
  top: '-6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E3E3E3',
});

const MenuTitleBackground = styled.div({
  position: 'absolute',
  top: '5%',
  left: '15%',
  height: 'calc(10px + 4vmin)',
  width: 'calc(100px + 20vmin)',
  backgroundColor: 'transparent',
  border: '1px black solid',
  cursor: 'pointer',
});

const MenuTitle: FC = () => {
  return (
    <MenuTitleBackground>
      <MenuTitleBlock>MENU ---------- 2021</MenuTitleBlock>
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
  fontWeight: 300,
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
    '主办方 / About Us',
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

const components = {
  Header,
  Menu,
};

export default pics;

export { pics, components };
