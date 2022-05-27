import React from 'react'
import  Card  from '@material-ui/core/Card'
import  CardHeader  from '@material-ui/core/CardHeader'
import  CardMedia  from '@material-ui/core/CardMedia'
import  CardContent  from '@material-ui/core/CardContent'
import { IconButton, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'

export default function PaintingCard({paint, handleDelete}) {
  return (
    <div>
      <Card elevation={3}>
          <CardHeader 
              action={
                  <IconButton onClick={() => handleDelete(paint.id)}>
                      <DeleteOutline />
                  </IconButton>
              }
              title={paint.remarks}
              subheader={paint.size}
          />
          <CardMedia 
              component='img'
              height='194'
              image={paint.img}
              alt='Paella Painting'
          />
          <CardContent>
              <Typography variant='body2'>
                  {paint.details}
              </Typography>
          </CardContent>
      </Card>
    </div>
  )
}

