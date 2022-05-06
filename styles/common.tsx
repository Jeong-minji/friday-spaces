import { Global, css } from '@emotion/react'
import reset from 'emotion-reset'

export const globalStyles = (
  <Global
    styles={css`
      ${reset}
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
      }
      html {
        background: #fff;
        height: 100%;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 10px;
      }
      #__next {
        height: 100%;
      }
    `}
  />
)
