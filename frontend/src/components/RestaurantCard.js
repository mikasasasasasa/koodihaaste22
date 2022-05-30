/* eslint-disable no-nested-ternary */
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ClearIcon from '@mui/icons-material/Clear'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useTheme } from '@mui/material/styles/'
import Skeleton from '@mui/material/Skeleton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import fetchV1 from '../api/fetchV1'

function RestaurantCard({ restaurant = {}, getRestaurants, votedId }) {
  const theme = useTheme()

  const {
    id, name, openingHours, dishes, votes,
  } = restaurant

  const loading = id !== undefined

  const vote = () => {
    fetchV1(`vote/${id}`, { method: 'POST' }).then(() => {
      getRestaurants()
    })
  }

  const voted = votedId === id

  return (
    <Card style={{ border: `2px solid ${theme.palette.primary.main}` }}>
      <CardHeader
        disableTypography
        title={(
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Typography variant="h5">{loading ? name : <Skeleton width="250px" />}</Typography>
            <Typography variant="h5">{loading ? `+${votes}` : <Skeleton width="50px" />}</Typography>
          </div>
        )}
        subheader={(
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px',
          }}
          >
            <AccessTimeIcon />
            <Typography>
              {
                loading ? (
                  openingHours !== '' ? openingHours : 'aukioloaika ei saatavilla'
                ) : (
                  <Skeleton width="150px" />
                )
              }
            </Typography>
          </div>
        )}
      />
      <CardContent>
        <Button
          disabled={!loading}
          style={{ marginBottom: '16px' }}
          onClick={vote}
          fullWidth
          startIcon={voted ? <ClearIcon /> : <ThumbUpIcon />}
          variant={voted ? 'outlined' : 'contained'}
          color="primary"
        >
          {
            loading ? (
              voted ? 'Poista ääni' : 'Äänestä'
            ) : (
              <Skeleton width="100%" />
            )
          }
        </Button>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Ateria</TableCell>
              <TableCell />
              <TableCell align="right">Hinta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              loading ? (
                dishes && dishes.length > 0 ? dishes.map((d) => {
                  if (d.name === '') {
                    return null
                  }

                  return (
                    <TableRow
                      hover
                      key={d.name}
                    >
                      <TableCell component="th" scope="row">
                        {d.name}
                      </TableCell>
                      <TableCell>
                        <div style={{ display: 'flex' }}>
                          {
                            d.attributes.filter((item, pos) => d.attributes.indexOf(item) === pos).map((a) => (
                              <Chip key={`${d.name}-${a}`} size="small" label={a} color="primary" style={{ marginLeft: '4px' }} />
                            ))
                          }
                        </div>
                      </TableCell>
                      <TableCell align="right">{d.price}</TableCell>
                    </TableRow>
                  )
                }) : (
                  <TableRow hover>
                    <TableCell component="th" scope="row" colSpan="3">
                      Lounaslista ei saatavilla
                    </TableCell>
                  </TableRow>
                )
              ) : (
                <>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Skeleton width="300px" />
                    </TableCell>
                    <TableCell>
                      <Skeleton width="50px" />
                    </TableCell>
                    <TableCell align="right">
                      <Skeleton width="50px" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Skeleton width="300px" />
                    </TableCell>
                    <TableCell>
                      <Skeleton width="50px" />
                    </TableCell>
                    <TableCell align="right">
                      <Skeleton width="50px" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Skeleton width="300px" />
                    </TableCell>
                    <TableCell>
                      <Skeleton width="50px" />
                    </TableCell>
                    <TableCell align="right">
                      <Skeleton width="50px" />
                    </TableCell>
                  </TableRow>
                </>
              )
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RestaurantCard
