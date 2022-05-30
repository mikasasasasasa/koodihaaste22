import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import CitySelect from './components/CitySelect'
import Restaurants from './components/Restaurants'
import fetchV1 from './api/fetchV1'
import TodayResults from './components/TodayResults'
import DarkThemeToggle from './components/DarkThemeToggle'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [value, setValue] = React.useState('Helsinki')
  const [restaurants, setRestaurants] = React.useState()
  const [votedId, setVotedId] = React.useState()
  const [tabValue, setTabValue] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  const getRestaurants = React.useCallback(() => {
    if (!value) {
      setRestaurants()
      setVotedId()
    } else {
      fetchV1(`restaurants/${value}`).then((res) => {
        setRestaurants(res.restaurants)
        setVotedId(res.alreadyVoted)
      })
    }
  }, [value])

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#A9BCD0',
      },
      background: {
        // default: '#f6f6f6',
      },
    },
  })

  React.useEffect(() => {
    getRestaurants()
  }, [getRestaurants])

  const renderTab = () => {
    if (tabValue === 0) {
      return (
        value ? (
          <Restaurants
            restaurants={restaurants}
            getRestaurants={getRestaurants}
            value={value}
            votedId={votedId}
          />
        ) : (
          <Typography align="center" variant="h5">
            Nähdäksesi lounaslistan sinun tulee valita paikkakunta ensin
          </Typography>
        )
      )
    }

    return <TodayResults />
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DarkThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <CitySelect
        value={value}
        setValue={(val) => { setValue(val); setRestaurants() }}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        tabValue={tabValue}
        handleTabChange={handleTabChange}
      />
      {
        renderTab()
      }
    </ThemeProvider>
  )
}

export default App
