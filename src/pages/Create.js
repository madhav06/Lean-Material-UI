import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: 'block'
  }
})

{/*
const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
    backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})
*/}

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == ''){
      setTitleError(true)
    }

    if (details == ''){
      setDetailsError(true)
    }

    if(title && details) {
      console.log(title, details)
    }
  }

  return (
    <Container>
      <Typography

        className={classes.title} 
        variant='h6'
        component='h2'
        gutterBottom
        color='secondary'
        align='center'
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          color='secondary'
          variant='outlined'
          fullWidth
          required
          error={titleError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label='Details'
          color='secondary'
          variant='outlined'
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <Button
          className={classes.btn} 
          type='submit' 
          color='secondary' 
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}  
        >
          Submit
        </Button>
      </form>

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

      {/*button component with icons*

      <Button
        className={classes.btn} 
        type='submit' 
        color='secondary' 
        variant='contained' 
        onClick={() => alert('Hello! Welocme to Lean-Material-UI@madhav')}
        endIcon={<KeyboardArrowRightIcon />}  
      >
        Submit
      </Button>
      * startIcon, endIcon both are available.*/}


    </Container>
  )
}
