//MODELS COLOR
export enum Color {
    VIOLET = '#9E25FC',
    DARK_VIOLET = '#250341',
    LIGHT_GRAY = '#F4F4F4',
    WHITE = '#FFF',
    PINK = '#FE19CF'
  }

export type ThemeType = 'dark' | 'light';

export interface Theme {
  detail: Color;
  primary: Color;
  secondary: Color;
  background: Color;
  white: Color;
  contrastThresHold: number;
  canalOfSet: number,
}


