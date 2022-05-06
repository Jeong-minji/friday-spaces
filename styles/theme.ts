import { Theme } from '@emotion/react'

const theme: Theme = {
  color: {
    // Gray Palette
    gray_1: '#F8F8F8',
    gray_2: '#F1F2F3',
    gray_3: '#E1E3E6',
    gray_4: '#C3C7CE',
    gray_5: '#757D8A',
    gray_6: '#5A6474',

    // Blue Palette
    blue_8: 'rgba(78, 115, 248, 0.08)',
    blue_24: 'rgba(78, 115, 248, 0.24)',
    blue_40: 'rgba(78, 115, 248, 0.4)',
    blue_64: 'rgba(78, 115, 248, 0.64)',
    blue_100: '#4E73F8',
    blue_gradient: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)',

    // Red Palette
    red_8: 'rgba(244, 60, 60, 0.08)',
    red_24: 'rgba(244, 60, 60, 0.24)',
    red_40: 'rgba(244, 60, 60, 0.4)',
    red_64: 'rgba(244, 60, 60, 0.64)',
    red_100: '#F43C3C',
    red_gradient: 'linear-gradient(180deg, #FF5959 0%, #EF2C2C 100%)',

    // Yellow Palette
    yellow_8: 'rgba(252, 165, 73, 0.08)',
    yellow_24: 'rgba(252, 165, 73, 0.24)',
    yellow_40: 'rgba(252, 165, 73, 0.4)',
    yellow_64: 'rgba(252, 165, 73, 0.64)',
    yellow_100: '#FCA549',
    yellow_gradient: 'linear-gradient(180deg, #FCA549 0%, #F39531 100%)',

    // Green Palette
    green_8: 'rgba(7, 162, 135, 0.08)',
    green_24: 'rgba(7, 162, 135, 0.24)',
    green_40: 'rgba(7, 162, 135, 0.4)',
    green_64: 'rgba(7, 162, 135, 0.64)',
    green_100: '#07A287',
    green_gradient: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',

    // Pink Palette
    pink_8: 'rgba(255, 75, 110, 0.08)',
    pink_24: 'rgba(255, 75, 110, 0.24)',
    pink_40: 'rgba(255, 75, 110, 0.4)',
    pink_64: 'rgba(255, 75, 110, 0.64)',
    pink_100: '#FF4B6E',
    pink_gradient: 'linear-gradient(180deg, #FF4B6E 0%, #EC234A 100%)',

    // Purple Palette
    purple_8: 'rgba(85, 82, 217, 0.08)',
    purple_24: 'rgba(85, 82, 217, 0.24)',
    purple_40: 'rgba(85, 82, 217, 0.4)',
    purple_64: 'rgba(85, 82, 217, 0.64)',
    purple_100: '#5552D9',
    purple_gradient: 'linear-gradient(180deg, #605CF3 0%, #4D4AC8 100%)',
  },
  shadow: {
    // Gray Shadow Palette
    gray_1: '0px 4px 2px -2px rgba(27, 46, 94, 0.02)',
    gray_2: '0px 4px 8px -2px rgba(27, 46, 94, 0.04)',
    gray_3: '0px 2px 4px -2px rgba(27, 46, 94, 0.08)',
    gray_4:
      '0px 4px 8px -6px rgba(27, 46, 94, 0.03), 0px 16px 8px -4px rgba(27, 46, 94, 0.03)',
    gray_5: '0px 8px 24px -4px rgba(27, 46, 94, 0.08)',
    gray_6: '0px 8px 24px -4px rgba(27, 46, 94, 0.12)',
    gray_inner: 'inset 0px 1px 2px rgba(27, 46, 94, 0.3)',

    // Blue Shadow Palette
    blue_1: '0px 4px 2px -2px rgba(78, 115, 248, 0.02)',
    blue_2: '0px 2px 4px -2px rgba(78, 115, 248, 0.08)',
    blue_3: '0px 4px 8px -2px rgba(78, 115, 248, 0.04)',
    blue_4:
      '0px 4px 8px -6px rgba(78, 115, 248, 0.03), 0px 16px 8px -4px rgba(78, 115, 248, 0.03)',
    blue_5: '0px 8px 24px -4px rgba(78, 115, 248, 0.08)',
    blue_6: '0px 0px 8px rgba(89, 124, 250, 0.32)',
    blue_inner: 'inset 0px 1px 2px rgba(62, 69, 239, 0.3)',
  },
  mq: {
    // Media Query
    lg: '1440px',
    md: '1080px',
    sm: '768px',
    xs: '360px',
  },
}

export default theme
