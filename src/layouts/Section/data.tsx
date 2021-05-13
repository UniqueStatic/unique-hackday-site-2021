/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';

const Container = styled.div({
  padding: '0 4vw',
  h2: {
    fontSize: '1.7rem',
    // margin: '2em 0',
  },
  h3: {
    fontSize: '1.3rem',
    marginBottom: '2rem',
  },
  small: {
    fontSize: '1.2rem',
    // margin:'none'
  },
  p: {
    fontSize: '1.45rem',
  },
  '& > *': {
    // display:'none'
    margin: '0 0 3rem',
    ':first-child': {
      margin: '3rem 0',
    },
  },
});

export const Introduction = (
  <Container>
    <h2>Unique Hackday</h2>
    <p>
      最初源于联创团队内部成员的Hackday比赛之后将比赛的规模扩大，邀请来自全国的大学一同参与。
    </p>
    <p>
      因疫情缘故缺席了2020年，而今年我们决定重启，继续将开放、创新、极客的精神传递给更多的人。
    </p>
    <h2>
      150名参赛选手{' '}
      <small
        css={css({
          display: 'inline-block',
          fontWeight: 'normal',
          fontSize: '1rem!important',
          letterSpacing: '0.5ch',
        })}
      >
        通过简历筛选出来来自全国各大高校的150名学生
      </small>
    </h2>

    <h3>24小时</h3>
    <small>程序、设计、产品在24小时内实现产品开发。</small>
    <h3>{'旅行&食物'}</h3>
    <small>报销交通费与无限量的食物供应。</small>
    <h3>{'奖金&纪念'}</h3>
    <small>丰厚的奖金与精美的纪念品。</small>
  </Container>
);

const scheduleData = [
  {
    date: '2021.06.13',
    spans: [
      { from: '08:00', to: '09:30', content: '参会嘉宾/比赛选手 ·签到' },
      { from: '09:30', to: '11:00', content: '启明学院报告厅 ·比赛开幕式' },
      { from: '11:00', to: '13:00', content: '自由组队 进行午餐' },
      { from: '13:00', to: '18:00', content: '启明学院众创空间 ·开始比赛' },
      { from: '18:00', to: '19:00', content: '进行晚餐' },
    ],
  },
  {
    date: '2021.06.13',
    spans: [
      { from: '07:00', to: '08:00', content: '进行早餐' },
      { from: '11:00', to: '13:00', content: '进行午餐 休息' },
      { from: '14:00', to: '16:30', content: '项目展示' },
      { from: '16:30', to: '18:00', content: '闭幕式&颁奖仪式' },
      { from: '16:30', to: '18:30', content: '合影留念' },
    ],
  },
];

export const Schedule = (
  <Container>
    {scheduleData.map((day, i) => (
      <div key={i}>
        <h2>
          DAY {i + 1} <small>{day.date}</small>
        </h2>
        {day.spans.map(({ from, to, content }) => (
          <div key={from}>
            <h3>
              {from}~{to}
            </h3>
            <p>{content}</p>
          </div>
        ))}
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

export const Awards = (
  <Container>
    {awardsData.map(({ nameChn, nameEng, value }, i) => (
      <div key={i}>
        <h2>
          {nameChn} <small>{nameEng}</small>
        </h2>
        <p>{value}</p>
      </div>
    ))}
  </Container>
);

const faqsData = [
  {
    question: '谁可以参加？',
    answer: `不管你是高中毕业生，还是大学在校生,都可以报名参加我们的比赛。`,
  },
  {
    question: '参加HACKDAY需要多少钱？',
    answer: `我们不仅不会收取费用，我们还会为您提供一个周末的餐饮和小吃。如果您不是来自武汉，我们还会为您的报销支付至多700元人民币的费用。`,
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
          <a href="https://console.hack.hustunique.com">
            console.hack.hustunique.com
          </a>
          进入您的控制台并选择“我的队伍”更新您的参赛信息。
        </p>
      </>
    ),
  },
  {
    question: '参加比赛有硬件提供吗？',
    answer: `如果您有特定的硬件，请随身携带。我们将尽最大努力在活动中提供硬件。有关这方面的更多细节将在活动附近提供。`,
  },
  {
    question: '如何成为赞助商？',
    answer: (
      <>
        如果您希望能够在黑客马拉松中展示您的品牌，并在您的目标群体进行宣传，请发送邮件至
        <a
          href="
        mailto:contact@hustunique.com"
        >
          contact@hustunique.com
        </a>
        。
      </>
    ),
  },
];

export const FAQs = (
  <Container>
    {faqsData.map(({ question, answer }, i) => (
      <div key={i}>
        <h2>{question}</h2>
        <div>{answer}</div>
      </div>
    ))}
  </Container>
);

export const Access = (
  <Container>
    <h2>湖北省 武汉市 洪山区 珞喻路 1037号</h2>
    <h2>华中科技大学 启明学院</h2>
    <a
      href="
        mailto:contact@hustunique.com"
    >
      contact@hustunique.com
    </a>
    <p>官方FAQ QQ群组：852034326</p>
  </Container>
);
