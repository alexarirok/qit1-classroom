import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#6ad5d9',
      main: '#66d1cf',
      dark: '#66cad4',
      contrastText: '#f5f5f5',
    },
    secondary: {
      light: '#FF0000',
      main: '#f57c00',
      dark: '#bb1f00',
      contrastText: '#fff082',
    },
      openTitle: '#00bb1f',
      protectedTitle: '#79f299',
      type: 'light'
    }
  })

  export default theme