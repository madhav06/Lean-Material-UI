import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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

      {/*button*
      <Button type='submit' color='primary' variant='contained' onClick={() => alert('Hello!')}>
        Submit
      </Button>/}

      {/*icons*/}
      {/*<br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon  color='secondary' fontSize='large' />
      <AcUnitOutlinedIcon  color='action' fontSize='medium' />
      <AcUnitOutlinedIcon  color='error' fontSize='small' />
      <AcUnitOutlinedIcon  color='disabled' fontSize='small' />*/}

      {/*button component with icons*/}
      <Button 
        type='submit' 
        color='primary' 
        variant='contained' 
        onClick={() => alert('Hello! Welocme to Lean-Material-UI@madhav')}
        endIcon={<KeyboardArrowRightIcon />}  
      >
        Submit
      </Button>
      {/* startIcon, endIcon both are available.*/}


    </Container>
  )
}