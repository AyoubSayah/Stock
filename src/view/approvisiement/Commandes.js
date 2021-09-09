import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
const useStyle = makeStyles((theme) => ({
  header: {
    fontSize: '.6rem',
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    margin: '1rem',
  },
  date: {
    fontSize: '.4rem',
  },
}));
export default function Commandes() {
  const clases = useStyle();
  return (
    <div>
      {' '}
      <Grid container spacing={0} className={clases.grid}>
        <Grid item xs={4} className={clases.girdrigt}>
          <Card elevation={2} className={clases.card}>
            <p className={clases.header}>Commande d'achat</p>
            <p className={clases.date}>Date de Creation: 12/05/2021</p>
          </Card>
        </Grid>
      </Grid>{' '}
    </div>
  );
}
