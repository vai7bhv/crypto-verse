import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContex'

const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    flex: 1,
    padding: '5px',
    margin: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}))

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    type: 'dark',
  },
})

function Header() {
  const navigate = useNavigate()
  const classes = useStyles()
  const { currency, setcurrency } = CryptoState()
  // console.log(currency)
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate('/')} className={classes.title}>
              CRYPTO VERSE
            </Typography>
            <Select
              style={{
                width: 100,
                height: 40,
                marginRight: '10px',
              }}
              variant='outlined'
              value={currency}
              onChange={(e) => {
                setcurrency(e.target.value)
              }}
            >
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='INR'>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
