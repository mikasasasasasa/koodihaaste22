import React from 'react'
import Container from '@mui/material/Container'

function ContainerComponent({ children }) {
  return (
    <Container maxWidth="sm">
      {children}
    </Container>
  )
}

export default ContainerComponent
