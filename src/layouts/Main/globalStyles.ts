import { css } from '@emotion/react';
import swz from '@/assets/font/swz721ke.woff2';

export const globalStyles = css({
  body: {
    margin: 0,
    fontFamily: `Arial, -apple-system, 'PingFang SC', 'Noto Sans CJK SC',
      'Microsoft YaHei', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;`,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    '@font-face':{
      fontFamily: 'Arial',
      src: 'url("//db.onlinewebfonts.com/t/8d223b3ad8d4819e9dcf22757e4cc2c4.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/8d223b3ad8d4819e9dcf22757e4cc2c4.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/8d223b3ad8d4819e9dcf22757e4cc2c4.woff") format("woff"), url("//db.onlinewebfonts.com/t/8d223b3ad8d4819e9dcf22757e4cc2c4.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/8d223b3ad8d4819e9dcf22757e4cc2c4.svg#Arial") format("svg")',
    },
  },
  '@font-face': 
    {
      fontFamily: 'Swis721 BlkEx BT',
      src: `url("${swz}") format("woff2")`,
    },
});
