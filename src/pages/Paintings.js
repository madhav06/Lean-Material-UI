import React, { useEffect, useState } from 'react'
import  Grid  from '@material-ui/core/Grid'
import  Paper  from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import PaintingCard from '../components/PaintingCard'

export default function Paintings() {

  const [paintings, setPainting] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/paintings').then(res => res.json()).then(data => setPainting(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:9000/paintings' + id, {
      method: 'DELETE'
    })

    const newPainting = paintings.filter(paint => paint.id != id)
    setPainting(newPainting)
  }


  return (
    <Container>
    <Grid container spacing={3}>
      {paintings.map(paint => (
        <Grid item key={paint.id} xs = {12} md={6} lg={4}>
          <PaintingCard paint={paint} handleDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
      
    </Container>
  )
}
