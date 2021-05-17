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

const primaryBorder = '2px solid black'
const innerMargin = 'calc(6vw + 2px)'
const outerMargin = '5vw'
const fontSizeData = Array(6).fill(null).map((_, i) => `calc(${6 + i * 2}px + ${(6 + i * 2) / 10}vmax)`)
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
  borderLeft: primaryBorder,
  paddingLeft: innerMargin,
  lineHeight: 'calc(100% + 20px)',
  fontSize: '1rem',
  marginBottom: '162px',
});

const SubTitle = styled.div({
  fontSize: '3vw',
  position: 'relative',
  width: '-webkit-fill-available',
  top: '-5vh',
  display: 'flex',
  justifyContent: 'center',
  letterSpacing: '0.3ch',
  fontWeight: 350
});

interface FloatBlockProps {
  isRight: boolean;
}

const FloatBlock = styled.div<FloatBlockProps>(({ isRight }) => ({
  marginBottom: '6vh',
  borderLeft: primaryBorder,
  paddingLeft: '5vw',
  position: 'relative',
  left: isRight ? '100%' : 'none',
  transform: isRight ? 'translateX(-120%)' : 'none',
}));

interface TextBlockProps {
  fontSize: number;
  fontWeight: number;
}

const TextBlock = styled.div<TextBlockProps>(({ fontSize, fontWeight }) => ({
  fontSize: fontSizeData[fontSize],
  fontWeight: fontWeight,
  lineHeight: 'calc(100% + 20px)',
}));

const IntroImg = styled.img({
  width: 'calc(16px + 1.6vmax)',
  height: 'calc(16px + 1.6vmax)',
  position: 'absolute',
  transform: 'translateY(25%)',
  right: '-11vw',
});

const Text = styled.text({
  position: 'relative',
});

const IntroMessage = styled.p({
  fontSize: fontSizeData[2],
  lineHeight: 'calc(100% + 1.5vh)',
  ':last-child': {
    margin: 0,
  },
  ':first-of-type': {
    margin: 0,
  }
});

const Introduction: FC = () => {
  return (
    <>
      <IntroLayout>
        <IntroMessage>{introductionData[0]}</IntroMessage>
        <IntroMessage>{introductionData[1]}</IntroMessage>
        <IntroMessage>{introductionData[2]}</IntroMessage>
      </IntroLayout>
      <ItemTitle width="calc(100% - 12vw)">{introductionData[3]}</ItemTitle>
      <SubTitle>{introductionData[4]}</SubTitle>
      <FloatBlock isRight={false}>
        <TextBlock fontWeight={500} fontSize={3}>
          <Text>
            <IntroImg src={pic.twentyFourPic} />
            {introductionData[5]}
          </Text>
        </TextBlock>
        <TextBlock fontWeight={400} fontSize={2}>{introductionData[6]}</TextBlock>
        <TextBlock fontWeight={400} fontSize={2}>{introductionData[7]}</TextBlock>
      </FloatBlock>
      <FloatBlock isRight={true}>
        <TextBlock fontWeight={500} fontSize={3}>
          <Text>
            <IntroImg src={pic.travelFoodPic} />
            {introductionData[8]}
          </Text>
        </TextBlock>
        <TextBlock fontWeight={400} fontSize={2}>{introductionData[9]}</TextBlock>
        <TextBlock fontWeight={400} fontSize={2}>{introductionData[10]}</TextBlock>
      </FloatBlock>
      <FloatBlock isRight={false}>
        <TextBlock fontWeight={500} fontSize={3}>
          <Text>
            <IntroImg src={pic.trophyPic} />
            {introductionData[11]}
          </Text>
        </TextBlock>
        <TextBlock fontWeight={400} fontSize={2}>{introductionData[12]}</TextBlock>
        <TextBlock fontWeight={400} fontSize={2}>{introductionData[13]}</TextBlock>
      </FloatBlock>
    </>
  );
};

const DateBlock = styled.div({
  paddingLeft: '6vw',
  borderLeft: primaryBorder,
});

const TimeBlock = styled.div({
  margin: innerMargin,
});

const DateText = styled.div({
  fontWeight: 200,
  fontSize: fontSizeData[2],
  marginBottom: '18px',
});

const Schedule: FC = () => {
  const elements = scheduleData.map((_) => {
    const times = _.spans.map((_) => (
      <TimeBlock key={_.from}>
        <TextBlock fontWeight={500} fontSize={2}>
          {_.from}~{_.to}
        </TextBlock>
        <TextBlock fontWeight={400} fontSize={1}>{_.content}</TextBlock>
      </TimeBlock>
    ));
    return (
      <div key={_.day}>
        <DateBlock>
          <DateText>{_.date}</DateText>
          <TextBlock fontWeight={500} fontSize={3}>
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
  marginLeft: '6vw'
});

const Awards: FC = () => {
  const awards = awardsData.map((_) => (
    <AwardsBlock key={_.nameChn}>
      <TextBlock fontWeight={450} fontSize={3}>
        {_.nameChn} / {_.nameEng}
      </TextBlock>
      <TextBlock fontWeight={400} fontSize={2}>{_.value}</TextBlock>
    </AwardsBlock>
  ));
  return <>{awards}</>;
};
const FAQBlock = styled.div({
  margin: `0 ${innerMargin}`,
  marginBottom: '48px',
});

const FAQTitle = styled.div({
  fontSize: fontSizeData[3],
  marginBottom: fontSizeData[3],
  fontWeight: 500,
})

const FAQs: FC = () => {
  const faqs = data.faqsData.map((_) => (
    <FAQBlock key={_.question}>
      <FAQTitle>{_.question}</FAQTitle>
      <TextBlock fontWeight={400} fontSize={2}>{_.answer}</TextBlock>
    </FAQBlock>
  ));
  return <>{faqs}</>;
};

const AccessLayout = styled.div({
  minHeight: 'calc(65vh - 100px)',
})

const AccessBlock = styled.div({
  borderLeft: primaryBorder,
  paddingLeft: innerMargin,

});

const AccessMail = styled.a({
  color: 'black',
  marginTop: '50px',
  display: 'block',
  fontSize: fontSizeData[2],
});

const Access: FC = () => {
  const { position, institution, mail, qq } = data.accessData;
  return (
    <AccessLayout>
      <AccessBlock>
        <TextBlock fontWeight={400} fontSize={2}>{position}</TextBlock>
        <TextBlock fontWeight={400} fontSize={2}>{institution}</TextBlock>
        <AccessMail href={`mailto:${mail}`}>{mail}</AccessMail>
        <TextBlock fontWeight={400} fontSize={2}>{qq}</TextBlock>
      </AccessBlock>
    </AccessLayout>
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
  width: 'auto',
  background: MobileBackground,
});

interface IExpandable {
  expanded?: boolean;
}

const ItemLayout = styled.div({
  overflow: 'hidden',
  display: 'flex',
  flexFlow: 'column',
  margin: `0 ${outerMargin}`,
  alignItems: 'flex-start',
});

interface ItemTitleProps {
  width: string;
}

const ItemTitle = styled.div<ItemTitleProps>(({ width }) => ({
  color: 'white',
  background: 'black',
  padding: `1vmin ${innerMargin}`,
  margin: '0 0 6vh',
  width: width,
  fontSize: fontSizeData[4],
  fontWeight: 600,
}));

const EngText = styled.div({
  display: 'inline',
  fontSize: fontSizeData[4],
  fontWeight: 400
})

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
      <ItemTitle width="auto">{nameChn}<EngText>{` / ${nameEng}`}</EngText></ItemTitle>
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
        return () => { };
      },
      [animating, index],
    );
    return (
      <ContentContainer ref={ref} index={index} handleSwitch={handleSwitch} />
    );
  },
);

export default Container;
