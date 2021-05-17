import { css } from '@emotion/react';
import swz from '@/assets/font/swz721ke.woff2';

export const globalStyles = css({
  body: {
    margin: 0,
    fontFamily: `-apple-system, 'PingFang SC', 'Noto Sans CJK SC',
      'Microsoft YaHei', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;`,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  '@font-face': {
    fontFamily: 'Swis721 BlkEx BT',
    src: `url("${swz}") format("woff2")`,
  },
});
