import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import RestaurantCard from './RestaurantCard'
import ContainerComponent from './Container'

function Restaurants({
  restaurants, getRestaurants, value, votedId,
}) {
  // sort by votes, then sort by dishes amount
  const sortedRestaurants = restaurants && restaurants.sort((r1, r2) => r2.votes - r1.votes || r2.dishes.length - r1.dishes.length)

  return (
    <ContainerComponent>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ marginTop: '16px' }}>
          <Typography variant="h5" align="center">
            {value}
            {' '}
            {new Date().toLocaleDateString()}
          </Typography>
        </Grid>
        {
          restaurants ? (
            sortedRestaurants.map((r) => (
              <Grid item xs={12} key={r.id}>
                <RestaurantCard restaurant={r} getRestaurants={getRestaurants} votedId={votedId} />
              </Grid>
            ))
          ) : (
            ['r1', 'r2', 'r3', 'r4', 'r5'].map((r) => (
              <Grid item xs={12} key={r}>
                <RestaurantCard getRestaurants={getRestaurants} votedId={votedId} />
              </Grid>
            ))
          )
        }
        {
          restaurants && restaurants.length === 0 && (
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Lounaslistoja ei löytynyt
              </Typography>
            </Grid>
          )
        }
      </Grid>
    </ContainerComponent>
  )
}

export default Restaurants
