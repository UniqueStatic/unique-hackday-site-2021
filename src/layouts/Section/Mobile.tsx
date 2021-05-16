import React, { useState, useEffect, FC, useCallback, useRef, forwardRef } from 'react';
import logo from '@/assets/logo.svg';
// import './styles.css';
import styled from '@emotion/styled';
import SponsorPic from '../../assets/imgs/Sponsor.png'
import { css, keyframes } from '@emotion/react';
import { Background, Primary, Secondary } from '@/consts/color';
import data, {pic} from './data';
import type { IRefForwarder } from '@/interface';
const { titleData, introductionData, scheduleData, awardsData } = data



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
  marginBottom: '162px'
})

const SubTitle = styled.div({
  fontSize: '0.75rem',
  position: 'relative',
  top: '-50px'
})

interface FloatBlockProps {
  isRight: boolean
}

const FloatBlock = styled.div<FloatBlockProps>(({ isRight }) => ({
  borderLeft: '2px solid black',
  paddingLeft: '20px',
  position: 'relative',
  left: isRight ? '100%' : 'none',
  transform: isRight ? 'translateX(-100%)' : 'none'
}))

interface TextBlockProps {
  isTitle: boolean
}

const TextBlock = styled.div<TextBlockProps>(({ isTitle }) => ({
  fontSize: isTitle ? '1.2rem' : '1rem',
  lineHeight: 'calc(100% + 20px)',
}))

const IntroImg = styled.img({
  width: '8vw',
  height: '8vw',
  position: 'absolute',
  top: '0',
  right: '-15vw'
})

const Text = styled.text({
  position: 'relative',
})

const Introduction: FC = () => {
  return (
    <>
      <IntroLayout>
        {introductionData[0]}
        <br />
        {introductionData[1]}
        <br />
        {introductionData[2]}
      </IntroLayout>
      <ItemTitle width='80%'>{introductionData[3]}</ItemTitle>
      <SubTitle>{introductionData[4]}</SubTitle>
      <FloatBlock isRight={false}>
        <TextBlock isTitle={true}>
          <Text><IntroImg src={pic.twentyFourPic}/>{introductionData[5]}</Text>
        </TextBlock>
        <TextBlock isTitle={false}>{introductionData[6]}</TextBlock>
        <TextBlock isTitle={false}>{introductionData[7]}</TextBlock>
      </FloatBlock>
      <FloatBlock isRight={true}>
        <TextBlock isTitle={true}>
<<<<<<< HEAD
          <Text><IntroImg src={pic.travelFoodPic}/>{introductionData[8]}</Text>
=======
          <Text><IntroImg src={pic.travelFoodPic}/>{introductionData[5]}</Text>
>>>>>>> 65656405eab7d96cc465ae70dde002d888da89c3
        </TextBlock>
        <TextBlock isTitle={false}>{introductionData[9]}</TextBlock>
        <TextBlock isTitle={false}>{introductionData[10]}</TextBlock>
      </FloatBlock>
      <FloatBlock isRight={false}>
        <TextBlock isTitle={true}>
<<<<<<< HEAD
          <Text><IntroImg src={pic.trophyPic}/>{introductionData[8]}</Text>
=======
          <Text><IntroImg src={pic.trophyPic}/>{introductionData[5]}</Text>
>>>>>>> 65656405eab7d96cc465ae70dde002d888da89c3
        </TextBlock>
        <TextBlock isTitle={false}>{introductionData[12]}</TextBlock>
        <TextBlock isTitle={false}>{introductionData[13]}</TextBlock>
      </FloatBlock>
    </>
  )
}

const DateBlock = styled.div({
  paddingLeft: '16px',
  borderLeft: '2px solid black',
  marginBottom: '42px'
})

const TimeBlock = styled.div({
  margin: '32px 18px'
})

const DateText = styled.div({
  fontWeight: 200,
  marginBottom: '18px'
})

const Schedule: FC = () => {
  const elements = scheduleData.map((_) => {
    const times = _.spans.map(_ =>
      <TimeBlock key={_.from}>
<<<<<<< HEAD
        <TextBlock isTitle={false}>{_.from}~{_.to}</TextBlock>
=======
        <TextBlock isTitle={false}>{_.from} ~ {_.to}</TextBlock>
>>>>>>> 65656405eab7d96cc465ae70dde002d888da89c3
        <TextBlock isTitle={false}>{_.content}</TextBlock>
      </TimeBlock>
    )
    return (
      <div key={_.day}>
        <DateBlock>
          <DateText>{_.date}</DateText>
          <TextBlock isTitle={true}>{_.day}</TextBlock>
        </DateBlock>
        {times}
      </div>
    )
  })
  return (
    <>
      {elements}
    </>
  )
}

const AwardsBlock = styled.div({
  marginBottom: '48px'
})

const Awards: FC = () => {
  const awards = awardsData.map(_ =>
    <AwardsBlock key={_.nameChn}>
      <TextBlock isTitle={false}>{_.nameChn} / {_.nameEng}</TextBlock>
      <TextBlock isTitle={false}>{_.value}</TextBlock>
    </AwardsBlock>
  )
  return (
    <>
      {awards}
    </>
  )
}
const FAQBlock = styled.div({
  marginBottom: '48px'
})

const FAQText = styled.div<TextBlockProps>(({ isTitle }) => ({
  fontSize: isTitle ? '1.2rem' : '1rem',
  marginBottom: isTitle ? '1rem' : '0'
}))

const FAQs: FC = () => {
  const faqs = data.faqsData.map(_ =>
    <FAQBlock key={_.question}>
      <FAQText isTitle={true}>{_.question}</FAQText>
      <FAQText isTitle={false}>{_.answer}</FAQText>
    </FAQBlock>
  )
  return (
    <>
      {faqs}
    </>
  )
}

const AccessBlock = styled.div({
  borderLeft: '2px solid black',
  paddingLeft: '20px',
})

const AccessMail = styled.a({
  color: 'black',
  marginTop: '50px',
  display: 'block'
})

const Access: FC = () => {
  const { position, institution, mail, qq } = data.accessData
  return (
    <AccessBlock>
      <TextBlock isTitle={false}>{position}</TextBlock>
      <TextBlock isTitle={false}>{institution}</TextBlock>
      <AccessMail href={`mailto:${mail}`}>{mail}</AccessMail>
      <TextBlock isTitle={false}>{qq}</TextBlock>
    </AccessBlock>
  )
}

interface ContentContainerProps {
  index: number;
  handleSwitch: (n: number) => void;
}

const ContentContainer = forwardRef<HTMLDivElement | null, ContentContainerProps>(({ index, handleSwitch }, ref) => {
  return (
    <ContentLayout ref={ref}>
      {titleData.map((v, i) => {
        return (
          <ItemLayout
            key={v.nameEng}
            id={`item${i}`}
          >
            <Content index={i} />
          </ItemLayout>
        );
      })}
      <Sponsor id='item5'/>
    </ContentLayout>
  )
})

const ContentLayout = styled.div({
  paddingTop: '15vh',
  width: '100%',
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
  width: string
}

const ItemTitle = styled.div<ItemTitleProps>(({ width }) => ({
  color: 'white',
  background: 'black',
  padding: '4px 20px',
  margin: '0 0 64px',
  width: width
}))

interface IContentProps {
  index: number;
}
const SponsorBlock = styled.div({
  position: 'relative',
  minHeight: 'calc(100vh - 100px)',
  padding: '50px 30px',
  background: 'black',
  width: '-webkit-fill-available',
  zIndex: 4,
})

const SponsorTitle = styled.div({
  color: 'white',
  background: 'black',
  margin: '0 0 64px',
})

const SponsorImg = styled.img({
  position: 'absolute',
  top: '90px',
  left: '30px',
  maxHeight: '20px'
})

const SponsorName = styled.div({
  fontSize: '1.2rem',
  paddingTop: '10vh',
  color: 'white',
  background: 'black',
})

const SponsorText = styled.div({
  fontSize: '0.8rem',
  lineHeight: 'calc(100% + 20px)',
  paddingTop: '15px',
  color: 'white',
  background: 'black',
})

interface SponsorProps {
  id: string 
}

const Sponsor: FC<SponsorProps> = ({ id }) => {
  return (
    <SponsorBlock id={id}>
      <SponsorTitle>赞助商 / Sponsor</SponsorTitle>
      <SponsorImg src={SponsorPic}></SponsorImg>
      <SponsorName>武汉夜莺科技有限公司</SponsorName>
      <SponsorText>坐落于武汉光谷核心繁华地带（K11写字楼）。
核心创始人来自华中科技大学联创团队。
是一家专注于智能营销领域的科技公司。
于2016年获得知名投资机构真格基金投资、于2018年获得近
千万元战略融资、于2021年获得新一轮融资。
核心业务微伴助手、壹伴助手直接或间影响国内数亿C端用户。
近3年公司估值上涨百倍，除此之外，目前仍在超高速上涨！
“是一个不折不扣的潜力股”。
这些Tag可以更好的给我们做一个概述：
大厂薪资、酷炫工作氛围、优质办公环境、大牛多、扁平化、
双休、涨薪快（半年固定涨）、弹性工作、零食下午茶、生日
庆祝、周年礼物、节日礼包、学习报销……
我们欢迎有理想的小伙伴加入！</SponsorText>
    </SponsorBlock>
  )
}
const ContentBlock = styled.div({
  marginBottom: '100px',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'flex-start'
})

const Content: FC<IContentProps> = ({ index }) => {
  const { nameChn, nameEng } = titleData[index];
  const Contents = [
    <Introduction />,
    <Schedule />,
    <Awards />,
    <FAQs />,
    <Access />,
  ]
  return (
    <ContentBlock>
      <ItemTitle width='auto'>
        {`${nameChn} / ${nameEng}`}
      </ItemTitle>
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
