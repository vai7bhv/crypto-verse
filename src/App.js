import { makeStyles } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Coin from './component/Coin'
import Header from './component/Header'
import Homepage from './component/HomePage'

function App() {
  const useStyles = makeStyles(() => ({
    app: {
      backgroundColor: ' #485461',
      backgroundImage: ' linear-gradient(315deg,#1b1c20 0%,#1a1a1d 74%)',
      color: 'white',
      minHeight: '100vh',
    },
  }))

  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} exact />
          <Route path='coin/:id' element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
