import { ButtonStyle } from './Style'
import type { ButtonProps } from './Types'

const Button = ({ buttonType, buttonColor, label }: ButtonProps) => {
  return (
    <ButtonStyle
      type="button"
      buttonType={buttonType}
      buttonColor={buttonColor}
    >
      {label}
    </ButtonStyle>
  )
}

export default Button
