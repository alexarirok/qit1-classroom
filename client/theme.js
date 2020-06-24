import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#33f5f2',
      main: '#26babf',
      dark: '#1ed3d9',
      contrastText: '#fffde7',
    },
    secondary: {
      light: '#eb2d1c',
      main: '#f52900',
      dark: '#bb1900',
      contrastText: '#fffde7',
    },
      openTitle: '#04ba4d',
      protectedTitle: '#f5a700',
      type: 'light'
    }
  })

  export default theme