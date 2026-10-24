import type TemaPadrao from './Themes/Padrao'

type Tema = typeof TemaPadrao

declare module 'styled-components' {
  export interface DefaultTheme extends Tema {}
}
