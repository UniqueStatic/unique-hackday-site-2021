import React, { FC } from 'react';
// import './styles.css';
import pics from './common';
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
  alignItems: 'center',
  overflow: 'hidden',
  flexFlow: 'column',
}));

const ComputerLayout = styled.div({
  position: 'relative',
  width: 'calc(80vh * 421 / 403)',
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
  fontSize: '2.2vmin',
});

const Reboot2021 = styled.div({
  position: 'absolute',
  top: '66%',
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
});

const SignUpBackground = styled.div({
  position: 'absolute',
  bottom: '6.5vh',
  left: 'calc(50% - 0.5 * (50px + 10vmin))',
  height: 'calc(20px + 4vmin)',
  width: 'calc(50px + 10vmin)',
  backgroundColor: '#E3E3E3',
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


const Splash = React.forwardRef<HTMLDivElement|null>((props, ref) => (
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

export { Splash };
