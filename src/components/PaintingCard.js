import React from 'react'
import  Card  from '@material-ui/core/Card'
import  CardHeader  from '@material-ui/core/CardHeader'
import  CardMedia  from '@material-ui/core/CardMedia'
import  CardContent  from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { blue, yellow, green, pink } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (paint) =>{
            if(paint.category == '8×10 Inches') {
                return yellow[700]
            }
            if(paint.category == '11×14 Inches') {
                return green[500]
            }
            if(paint.category == '16×20 Inches') {
                return pink[500]
            }
            return blue[500]
        }
    }
})


export default function PaintingCard({paint, handleDelete}) {
    const classes = useStyles(paint)
  return (
    <div>
      <Card elevation={3}>
          <CardHeader 
              avatar={
                  <Avatar>
                      {paint.details[0].toUpperCase()}
                  </Avatar>
              }
              action={
                  <IconButton onClick={() => handleDelete(paint.id)}>
                      <DeleteOutline />
                  </IconButton>
              }
              title={paint.remarks}
              subheader={paint.category}
              
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
          <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
              </IconButton>
              <IconButton>
                  <ShareIcon />
              </IconButton>
          </CardActions>
      </Card>
    </div>
  )
}

