import React, {
  useState,
  useEffect,
  FC,
  useCallback,
  useRef,
  forwardRef,
} from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { MobileBackground } from '@/consts/color';
import data, { pic } from './data';
const { titleData, introductionData, scheduleData, awardsData } = data;

// const ContentContainer = styled.div({
//   height: '100vh',
//   width: '-webkit-fill-available',
//   background: '#e3e3e3',
//   overflow: 'auto',
// })

// const Content : FC = () => {
//   return(
//     <ContentContainer></ContentContainer>
//   )
// }

// export default Content;
const IntroLayout = styled.div({
  borderLeft: '2px solid black',
  paddingLeft: '20px',
  lineHeight: 'calc(100% + 20px)',
  fontSize: '1rem',
  marginBottom: '162px',
});

const SubTitle = styled.div({
  fontSize: '0.75rem',
  position: 'relative',
  top: '-5vh',
  display: 'flex',
  justifyContent: 'center',
  letterSpacing: '0.3ch',
});

interface FloatBlockProps {
  isRight: boolean;
}

const FloatBlock = styled.div<FloatBlockProps>(({ isRight }) => ({
  marginBottom: '6vh',
  borderLeft: '2px solid black',
  paddingLeft: '20px',
  position: 'relative',
  left: isRight ? '100%' : 'none',
  transform: isRight ? 'translateX(-100%)' : 'none',
}));

interface TextBlockProps {
  isTitle: boolean;
}

const TextBlock = styled.div<TextBlockProps>(({ isTitle }) => ({
  fontSize: isTitle ? '1.5rem' : '1.2rem',
  lineHeight: 'calc(100% + 20px)',
}));

const IntroImg = styled.img({
  width: '8vw',
  height: '8vw',
  position: 'absolute',
  top: '0',
  right: '-11vw',
});

const Text = styled.text({
  position: 'relative',
});

const IntroMessage = styled.p({
  margin: '0 0 1.5vh 0',
  ':last-child': {
    margin: 0,
  },
});

const Introduction: FC = () => {
  return (
    <>
      <IntroLayout>
        <IntroMessage>{introductionData[0]}</IntroMessage>
        <IntroMessage>{introductionData[1]}</IntroMessage>
        <IntroMessage>{introductionData[2]}</IntroMessage>
      </IntroLayout>
      <ItemTitle width="80%">{introductionData[3]}</ItemTitle>
      <SubTitle>{introductionData[4]}</SubTitle>
      <FloatBlock isRight={false}>
        <TextBlock isTitle={true}>
          <Text>
            <IntroImg src={pic.twentyFourPic} />
            {introductionData[5]}
          </Text>
        </TextBlock>
        <TextBlock isTitle={false}>{introductionData[6]}</TextBlock>
        <TextBlock isTitle={false}>{introductionData[7]}</TextBlock>
      </FloatBlock>
      <FloatBlock isRight={true}>
        <TextBlock isTitle={true}>
          <Text>
            <IntroImg src={pic.travelFoodPic} />
            {introductionData[8]}
          </Text>
        </TextBlock>
        <TextBlock isTitle={false}>{introductionData[9]}</TextBlock>
        <TextBlock isTitle={false}>{introductionData[10]}</TextBlock>
      </FloatBlock>
      <FloatBlock isRight={false}>
        <TextBlock isTitle={true}>
          <Text>
            <IntroImg src={pic.trophyPic} />
            {introductionData[11]}
          </Text>
        </TextBlock>
        <TextBlock isTitle={false}>{introductionData[12]}</TextBlock>
        <TextBlock isTitle={false}>{introductionData[13]}</TextBlock>
      </FloatBlock>
    </>
  );
};

const DateBlock = styled.div({
  paddingLeft: '16px',
  borderLeft: '2px solid black',
});

const TimeBlock = styled.div({
  margin: '2.5vh',
});

const DateText = styled.div({
  fontWeight: 200,
  marginBottom: '18px',
});

const ContentText = styled.div({
  fontSize: '1rem',
});

const Schedule: FC = () => {
  const elements = scheduleData.map((_) => {
    const times = _.spans.map((_) => (
      <TimeBlock key={_.from}>
        <TextBlock isTitle={false}>
          {_.from}~{_.to}
        </TextBlock>
        <ContentText>{_.content}</ContentText>
      </TimeBlock>
    ));
    return (
      <div key={_.day}>
        <DateBlock>
          <DateText>{_.date}</DateText>
          <TextBlock
            isTitle={true}
            css={css`
              font-size: 1.5rem;
            `}
          >
            {_.day}
          </TextBlock>
        </DateBlock>
        {times}
      </div>
    );
  });
  return <>{elements}</>;
};

const AwardsBlock = styled.div({
  marginBottom: '48px',
});

const Awards: FC = () => {
  const awards = awardsData.map((_) => (
    <AwardsBlock key={_.nameChn}>
      <TextBlock isTitle={false}>
        {_.nameChn} / {_.nameEng}
      </TextBlock>
      <ContentText>{_.value}</ContentText>
    </AwardsBlock>
  ));
  return <>{awards}</>;
};
const FAQBlock = styled.div({
  marginBottom: '48px',
});

const FAQText = styled.div<TextBlockProps>(({ isTitle }) => ({
  fontSize: isTitle ? '1.2rem' : '1rem',
  marginBottom: isTitle ? '1rem' : '0',
  fontWeight: isTitle ? 500 : 400,
}));

const FAQs: FC = () => {
  const faqs = data.faqsData.map((_) => (
    <FAQBlock key={_.question}>
      <FAQText isTitle={true}>{_.question}</FAQText>
      <FAQText isTitle={false}>{_.answer}</FAQText>
    </FAQBlock>
  ));
  return <>{faqs}</>;
};

const AccessBlock = styled.div({
  borderLeft: '2px solid black',
  paddingLeft: '20px',
});

const AccessMail = styled.a({
  color: 'black',
  marginTop: '50px',
  display: 'block',
});

const Access: FC = () => {
  const { position, institution, mail, qq } = data.accessData;
  return (
    <AccessBlock>
      <TextBlock isTitle={false}>{position}</TextBlock>
      <TextBlock isTitle={false}>{institution}</TextBlock>
      <AccessMail href={`mailto:${mail}`}>{mail}</AccessMail>
      <TextBlock isTitle={false}>{qq}</TextBlock>
    </AccessBlock>
  );
};

interface ContentContainerProps {
  index: number;
  handleSwitch: (n: number) => void;
}

const ContentContainer = forwardRef<
  HTMLDivElement | null,
  ContentContainerProps
>(({ index, handleSwitch }, ref) => {
  return (
    <ContentLayout ref={ref}>
      {titleData.map((v, i) => {
        return (
          <ItemLayout key={v.nameEng} id={`item${i}`}>
            <Content index={i} />
          </ItemLayout>
        );
      })}
      {/* <Sponsor id="item5" /> */}
    </ContentLayout>
  );
});

const ContentLayout = styled.div({
  paddingTop: '15vh',
  width: '100%',
  background: MobileBackground,
});

interface IExpandable {
  expanded?: boolean;
}

const ItemLayout = styled.div({
  display: 'flex',
  flexFlow: 'column',
  padding: '0 24px',
  alignItems: 'flex-start',
});

interface ItemTitleProps {
  width: string;
}

const ItemTitle = styled.div<ItemTitleProps>(({ width }) => ({
  color: 'white',
  background: 'black',
  padding: '4px 20px',
  margin: '0 0 6vh',
  width: width,
}));

interface IContentProps {
  index: number;
}

const ContentBlock = styled.div({
  marginBottom: '100px',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start',
});

const Content: FC<IContentProps> = ({ index }) => {
  const { nameChn, nameEng } = titleData[index];
  const Contents = [
    <Introduction />,
    <Schedule />,
    <Awards />,
    <FAQs />,
    <Access />,
  ];
  return (
    <ContentBlock>
      <ItemTitle width="auto">{`${nameChn} / ${nameEng}`}</ItemTitle>
      {Contents[index]}
    </ContentBlock>
  );
};

interface ISectionProps {
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

const Container = forwardRef<HTMLDivElement | null, ISectionProps>(
  ({ pageIndex, setPageIndex }, ref) => {
    // Create the count state.
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
      if (pageIndex) setIndex(pageIndex === 0 ? pageIndex : pageIndex - 1);
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
      <ContentContainer ref={ref} index={index} handleSwitch={handleSwitch} />
    );
  },
);

export default Container;
