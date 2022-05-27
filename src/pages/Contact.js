import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {FormControlLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router-dom';


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

export default function Contact() {

  const history = useHistory()
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [img, setImg] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [size, setSize] = useState('8×10 Inches')

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)
    setEmailError(false)
    setDetailsError(false)
    setImgError(false)

    if (name == ''){
      setNameError(true)
    }

    if (email == ''){
        setEmailError(true)
      }

    if (details == ''){
      setDetailsError(true)
    }

    if(img == ''){
      setImgError(true)
    }

    if(name && email && details) {
      // console.log(title, details, category)
      fetch('http://localhost:9000/paintings', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({name, email,details, size})
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
      <Typography

        className={classes.remarks} 
        variant='h6'
        component='h2'
        gutterBottom
        color='secondary'
        align='center'
      >
        Get in Touch
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setName(e.target.value)}
          label='Your Full Name'
          color='secondary'
          variant='outlined'
          fullWidth
          required
          columns={2}
          error={nameError}
        />
       
        
        <TextField
          className={classes.field}
          onChange={(e) => setEmail(e.target.value)}
          label='Your Email'
          color='secondary'
          variant='outlined'
          fullWidth
          required
          columns={2}
          error={emailError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label='Your Message'
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
          Send
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
