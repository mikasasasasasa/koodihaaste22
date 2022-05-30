import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Typography } from '@mui/material'
import fetchV1 from '../api/fetchV1'
import ContainerComponent from './Container'

function TodayResults() {
  const [results, setResults] = React.useState()

  React.useEffect(() => {
    fetchV1('results').then((res) => {
      setResults(res.results.sort((r1, r2) => r2.votes - r1.votes))
    })
  }, [])

  if (!results) {
    return (
      <ContainerComponent>
        <Typography align="center" variant="h5" style={{ marginTop: '16px' }}>
          Ladataan...
        </Typography>
      </ContainerComponent>
    )
  }

  if (results.length === 0) {
    return (
      <ContainerComponent>
        <Typography align="center" variant="h5" style={{ marginTop: '16px' }}>
          Ei tuloksia tälle päivälle
        </Typography>
      </ContainerComponent>
    )
  }

  return (
    <ContainerComponent>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ravintola</TableCell>
            <TableCell>Paikkakunta</TableCell>
            <TableCell align="right">Äänet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            results.map((res) => (
              <TableRow
                key={res.restaurantid}
              >
                <TableCell component="th" scope="row">
                  {res.name}
                </TableCell>
                <TableCell>{res.city}</TableCell>
                <TableCell align="right">{res.votes}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </ContainerComponent>
  )
}

export default TodayResults
