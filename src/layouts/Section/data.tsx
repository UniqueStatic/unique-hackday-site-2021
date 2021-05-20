/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';
import schedulePic from '../../assets/imgs/流程安排.png';
import twentyFourPic from '../../assets/imgs/24小时.png';
import travelFoodPic from '../../assets/imgs/旅行食物.png';
import trophyPic from '../../assets/imgs/奖杯.png';
import introPic from '../../assets/imgs/Introduction.png';
import questionPic from '../../assets/imgs/问号.png';

export const pic = {
  schedulePic,
  twentyFourPic,
  travelFoodPic,
  trophyPic,
  introPic,
  questionPic,
};

const Container = styled.div({
  padding: '0 4vw',
  h2: {
    fontSize: '1.5rem',
    fontWeight: 500,
    // margin: '2em 0',
  },
  h3: {
    fontSize: '1.2rem',
    fontWeight: 500,
    // margin: '0 0 32px 0',
  },
  small: {
    fontSize: '1rem',
    margin: '0 0 0 20px',
    // margin:'none'
  },

  p: {
    fontSize: '1rem',
    // margin: '0',
  },

  a: {
    color: 'black',
    fontWeight: 'bold',
  },
});

interface PhraseProps {
  doubleMargin: boolean;
}

const P = styled.p<PhraseProps>(({ doubleMargin }) => ({
  marginBottom: doubleMargin ? '72px!important' : '36px',
}));

const Div = styled.div<PhraseProps>({
  marginBottom: '4vh',
});

const introductionData = [
  'Unique Hackday',
  '最初源于联创团队内部成员的Hackday比赛，之后将比赛的规模扩大，邀请来自全国的大学一同参与。',
  '因疫情缘故缺席了2020年，而今年我们决定重启，继续将开放、创新的极客精神传递给更多的人。',
  '120名参赛选手',
  '通过简历筛选出来来自全国各大高校的120名学生',
  '24小时',
  '程序、设计、产品',
  '在24小时内实现产品开发',
  '旅行&食物',
  '报销交通费',
  '无限量的食物供应',
  '奖金&纪念',
  '丰厚的奖金',
  '精美的纪念品',
] as const;

const IntroImg = styled.img({
  width: '6vmin',
  height: '6vmin',
  position: 'absolute',
  top: '0',
  transform: 'translateY(-25%)',
  right: '-10vw',
});

const Text = styled.div({
  position: 'relative',
  display: 'inline-block',
  fontWeight: 500,
});

const IntroMessage = styled.p({
  marginTop: '3vh',
});

const Introduction = (
  <Container>
    <h2
      css={css`
        margin-top: 4vh;
      `}
    >
      Unique Hackday
    </h2>
    <IntroMessage>
      最初源于联创团队内部成员的Hackday比赛，之后将比赛的规模扩大，邀请来自全国的大学一同参与。
    </IntroMessage>
    <IntroMessage>
      因疫情缘故缺席了2020年，而今年我们决定重启，继续将开放、创新的极客精神传递给更多的人。
    </IntroMessage>
    <h2
      css={css`
        margin-top: 4vh;
        margin-bottom: 0;
      `}
    >
      120名参赛选手
    </h2>
    <small
      css={css({
        display: 'inline-block',
        fontWeight: 'normal',
        fontSize: '1rem!important',
        letterSpacing: '0.5ch',
        margin: '0 0 5vh 0!important',
      })}
    >
      通过简历筛选出来来自全国各大高校的120名学生
    </small>
    <h3>
      <Text>
        <IntroImg src={pic.twentyFourPic} />
        24小时
      </Text>
    </h3>
    <P doubleMargin={true}>程序、设计、产品在24小时内实现产品开发。</P>
    <h3>
      <Text>
        <IntroImg src={pic.travelFoodPic} />
        {'旅行&食物'}
      </Text>
    </h3>
    <P doubleMargin={true}>报销交通费与无限量的食物供应。</P>
    <h3>
      <Text>
        <IntroImg src={pic.trophyPic} />
        {'奖金&纪念'}
      </Text>
    </h3>
    <P doubleMargin={true}>丰厚的奖金与精美的纪念品。</P>
  </Container>
);

const scheduleData = [
  {
    date: '2021.06.13',
    day: 'DAY 1',
    spans: [
      { from: '08:00', to: '09:30', content: '参会嘉宾/比赛选手 ·签到' },
      { from: '09:30', to: '11:00', content: '启明学院报告厅 ·比赛开幕式' },
      { from: '11:00', to: '13:00', content: '自由组队 进行午餐' },
      { from: '13:00', to: '18:00', content: '启明学院众创空间 ·开始比赛' },
      { from: '18:00', to: '19:00', content: '进行晚餐' },
    ],
  },
  {
    date: '2021.06.14',
    day: 'DAY 2',
    spans: [
      { from: '07:00', to: '08:00', content: '进行早餐' },
      { from: '11:00', to: '13:00', content: '进行午餐 休息' },
      { from: '14:00', to: '16:30', content: '项目展示' },
      { from: '16:30', to: '18:00', content: '闭幕式&颁奖仪式' },
      { from: '18:00', to: '18:30', content: '合影留念' },
    ],
  },
];

interface TitleProps {
  needBorder: boolean;
}

const Title = styled.div<TitleProps>(({ needBorder }) => ({
  fontSize: '1.2rem',
  fontWeight: 500,
  margin: '5vh 0 0 0',
  paddingLeft: '5px',
  borderLeft: needBorder ? '2px solid black' : 'none',
  position: 'relative',
  left: '-7px',
  display: 'flex',
  alignItems: 'center',
}));

const Schedule = (
  <Container>
    {scheduleData.map((day, i) => (
      <div key={i}>
        <Title needBorder={true}>
          DAY {i + 1} <small>{day.date}</small>
        </Title>
        <div
          css={css`
            margin-top: 3vh;
            padding-left: 0.5vw;
          `}
        >
          {day.spans.map(({ from, to, content }) => (
            <h2 key={from}>
              <p
                css={css`
                  margin-bottom: 18px !important;
                `}
              >
                {from}~{to}
              </p>
              <p
                css={css`
                  font-size: 1rem !important;
                  margin-bottom: 40px !important;
                  font-weight: 400;
                `}
              >
                {content}
              </p>
            </h2>
          ))}
        </div>
      </div>
    ))}
  </Container>
);

const awardsData = [
  { nameChn: '冠军', nameEng: 'Champion', value: '15,000 RMB' },
  { nameChn: '亚军', nameEng: 'Silver', value: '8,000 RMB' },
  { nameChn: '季军', nameEng: 'Bronze', value: '5,000 RMB' },
  { nameChn: '分类最佳奖', nameEng: 'Best of Category', value: '2,500 RMB' },
  { nameChn: '企业特色奖', nameEng: 'Corporate', value: 'TBD' },
];

const Awards = (
  <Container>
    {awardsData.map(({ nameChn, nameEng, value }, i) => (
      <div key={i}>
        <Title
          needBorder={false}
          css={css`
            margin-botton: 1vh;
          `}
        >
          {nameChn} <small>{'/'}</small>
          <small>{nameEng}</small>
        </Title>
        <p
          css={css`
            margin-top: 15px;
            margin-bottom: 50px !important;
          `}
        >
          {value}
        </p>
      </div>
    ))}
  </Container>
);

const faqsData = [
  {
    question: '谁可以参加？',
    answer: (
      <p>不管你是本科生，还是研究生，都可以报名参加我们的比赛。</p>
    ),
  },
  {
    question: '参加HACKDAY需要多少钱？',
    answer: (
      <p>
        我们不仅不会收取费用，我们还会为您提供一个周末的餐饮和小吃。如果您需要进行核酸检测，我们还可以为您报销支付至多150元人民币的核酸检测费用。
      </p>
    ),
  },
  {
    question: '参加比赛需要准备什么？',
    answer: (
      <>
        <p>
          建议携带：笔记本电脑和充电器，手机和充电器，睡袋，洗漱用品，几件衣服。
        </p>
        <p>可以准备好：一个预先组好的队伍，一个好的点子或者想法。</p>
        <p>
          请勿携带：有威胁其他人安全的物品，酒精焊接等，动物（无论多么可爱）。
        </p>
      </>
    ),
  },
  {
    question: '队伍人数有限制吗？',
    answer: (
      <>
        <p>
          您可以组成最多5人的队伍。对队伍成员没有限制，所以你可以与任何学校，国家或经验水平的参赛者合作！
        </p>
        <p>你可以以个人申请，你也可组好队伍以一个团队一起申请。</p>
        <p>
          你可以在
          <a
            css={css`
              color: black;
              font-weight: bold;
            `}
            href="https://console.hack.hustunique.com"
          >
            console.hack.hustunique.com
          </a>
          进入您的控制台并选择“我的队伍”更新您的参赛信息。
        </p>
      </>
    ),
  },
  {
    question: '参加比赛有硬件提供吗？',
    answer: (
      <p>
        如果您有特定的硬件，请随身携带。我们将尽最大努力在活动中提供硬件。有关这方面的更多细节将在活动时提供。
      </p>
    ),
  },
  {
    question: '如何成为赞助商？',
    answer: (
      <p>
        如果您希望能够在黑客马拉松中展示您的品牌，并在您的目标群体进行宣传，请发送邮件至
        <a
          css={css`
            color: black;
            font-weight: bold;
          `}
          href="
        mailto:contact@hustunique.com"
        >
          contact@hustunique.com
        </a>
        。
      </p>
    ),
  },
];

const FAQs = (
  <Container>
    {faqsData.map(({ question, answer }, i) => (
      <div key={i}>
        <h3
          css={css`
            margin-top: 5vh;
          `}
        >
          {question}
        </h3>
        <Div doubleMargin={true}>{answer}</Div>
      </div>
    ))}
  </Container>
);

const accessData = {
  position: '湖北省 武汉市 洪山区 珞喻路 1037号',
  institution: '华中科技大学 启明学院',
  mail: 'contact@hustunique.com',
  qq: '官方FAQ QQ群组：1057802260',
};

const Access = (
  <Container
    css={css`
      margin-top: 4vh;
    `}
  >
    <h2>{accessData.position}</h2>
    <h2>{accessData.institution}</h2>
    <p
      css={css`
        margin-top: 4vh;
        margin-bottom: 0;
      `}
    >
      <a href="mailto:contact@hustunique.com">{accessData.mail}</a>
    </p>
    <p
      css={css`
        margin-top: 1vh;
      `}
    >
      {accessData.qq}
    </p>
  </Container>
);

const titleData = [
  {
    nameChn: '比赛介绍',
    nameEng: 'Introduction',
    content: Introduction,
  },
  {
    nameChn: '流程安排',
    nameEng: 'Schedule',
    content: Schedule,
  },
  {
    nameChn: '奖项设置',
    nameEng: 'Awards',
    content: Awards,
  },
  {
    nameChn: '常见问题',
    nameEng: 'FAQs',
    content: FAQs,
  },
  {
    nameChn: '联系我们',
    nameEng: 'Contact',
    content: Access,
  },
];

const data = {
  titleData,
  introductionData,
  scheduleData,
  awardsData,
  faqsData,
  accessData,
};

export default data;
