import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      // Gray Palette
      gray_1: string
      gray_2: string
      gray_3: string
      gray_4: string
      gray_5: string
      gray_6: string

      // Blue Palette
      blue_8: string
      blue_24: string
      blue_40: string
      blue_64: string
      blue_100: string
      blue_gradient: string

      // Red Palette
      red_8: string
      red_24: string
      red_40: string
      red_64: string
      red_100: string
      red_gradient: string

      // Yellow Palette
      yellow_8: string
      yellow_24: string
      yellow_40: string
      yellow_64: string
      yellow_100: string
      yellow_gradient: string

      // Green Palette
      green_8: string
      green_24: string
      green_40: string
      green_64: string
      green_100: string
      green_gradient: string

      // Pink Palette
      pink_8: string
      pink_24: string
      pink_40: string
      pink_64: string
      pink_100: string
      pink_gradient: string

      // Purple Palette
      purple_8: string
      purple_24: string
      purple_40: string
      purple_64: string
      purple_100: string
      purple_gradient: string
    }
    shadow: {
      // Gray Shadow Palette
      gray_1: string
      gray_2: string
      gray_3: string
      gray_4: string
      gray_5: string
      gray_6: string
      gray_inner: string

      // Blue Shadow Palette
      blue_1: string
      blue_2: string
      blue_3: string
      blue_4: string
      blue_5: string
      blue_6: string
      blue_inner: string
    }
    mq: {
      // Media Query
      lg: string
      md: string
      sm: string
      xs: string
    }
  }
}
