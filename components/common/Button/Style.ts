import styled from '@emotion/styled'
import { defaultButton } from 'styles/common'
import { ButtonFontColor } from 'utils/fontColor'
import { ButtonProps } from './Types'

type ButtonStyleTypes = Partial<ButtonProps>

export const ButtonStyle = styled.button<ButtonStyleTypes>`
  ${defaultButton}
  background: ${({ theme, buttonColor }) =>
    buttonColor && theme.color[buttonColor]};
  border: 1px solid transparent;
  color: ${({ buttonColor }) => buttonColor && ButtonFontColor(buttonColor)};

  ${({ buttonType }) =>
    buttonType === 'Primary' &&
    `

  `}
  ${({ buttonType }) =>
    buttonType === 'Secondary' &&
    `
  
  `}
  ${({ buttonType }) =>
    buttonType === 'Outline' &&
    `
  
  `}
  ${({ buttonType }) =>
    buttonType === 'Clear' &&
    `
    
  `}
`
