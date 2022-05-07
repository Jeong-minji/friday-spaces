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

export const defaultButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px 43px;
  margin: 0;
  background: transparent;
  border-radius: 8px;
  appearance: none;
  cursor: pointer;
`

export const buttonRing = css`
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -2px;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 8px;
  }
`
