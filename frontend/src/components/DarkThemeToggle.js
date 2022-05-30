import React from 'react'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

function DarkThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FormControlLabel
        control={(
          <Switch
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
          />
        )}
        label="Tumma teema"
      />
    </div>
  )
}

export default DarkThemeToggle
