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

export default function Create() {

  const history = useHistory()
  const classes = useStyles()
  const [remarks, setRemarks] = useState('')
  const [details, setDetails] = useState('')
  const [remarksError, setRemarksError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [size, setSize] = useState('8×10 Inches')

  const handleSubmit = (e) => {
    e.preventDefault()
    setRemarksError(false)
    setDetailsError(false)

    if (remarks == ''){
      setRemarksError(true)
    }

    if (details == ''){
      setDetailsError(true)
    }

    if(remarks && details) {
      // console.log(title, details, category)
      fetch('http://localhost:9000/paintings', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({remarks, details, size})
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
        Order A Custom Painting
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setRemarks(e.target.value)}
          label='Remarks for Paintings'
          color='secondary'
          variant='outlined'
          fullWidth
          required
          error={remarksError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label='Description'
          color='secondary'
          variant='outlined'
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Select a size:</FormLabel>
          <RadioGroup value={size} onChange={(e) => setSize(e.target.value)} >
          <FormControlLabel 
            control={<Radio />} label='5×7 Inches' value='5×7 Inches'
          />
          <FormControlLabel 
            control={<Radio />} label='8×10 Inches' value='8×10 Inches'
          />
          <FormControlLabel 
            control={<Radio />} label='11×14 Inches' value='11×14 Inches'
          />
          <FormControlLabel 
            control={<Radio />} label='16×20 Inches' value='16×20 Inches'
          />
          <FormControlLabel 
            control={<Radio />} label='18×24 Inches' value='18×24 Inches'
          />
          <FormControlLabel 
            control={<Radio />} label='24×30 Inches' value='24×30 Inches'
          />

          </RadioGroup>
        </FormControl>

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
