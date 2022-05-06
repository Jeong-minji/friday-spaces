import { ButtonColors } from 'components/common/Button/Types'

export const ButtonFontColor = (colorCode: ButtonColors) => {
  const backgroundValue = +colorCode.split('_')[1]
  if (backgroundValue < 50) {
    return 'rgba(0,0,0,0.9)'
  }
  return '#fff'
}
