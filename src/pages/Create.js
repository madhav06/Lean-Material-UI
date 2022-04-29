import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
export default function Create() {
  return (
    <Container>
      <Typography 
        variant='h6'
        component='h2'
        gutterBottom
        color='secondary'
        align='center'
      >
        Create a new Note
      </Typography>

      <Button type='submit' color='primary' variant='contained' onClick={() => alert('Hello!')}>
        Submit
      </Button>

    </Container>
  )
}
