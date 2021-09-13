import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyle = makeStyles((theme) => ({
  header: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    margin: '1rem',
    transition: 'all .5s',
    width: '700px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '1rem 1.5rem',
  },
  date: {},
  fournissuer: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid gray',
    margin: '1rem',
    width: '350px',
  },
  head: {
    background: '#777',
    padding: '.2rem',
    color: '#fff',
  },
  p: {
    margin: '.6rem 0',
  },
  table: {
    width: '100%',
    marginBottom: '1rem',
  },
  body: {
    padding: '4px',
  },
  btn: {
    display: 'block',
    margin: '2rem auto',
  },
  input: {
    margin: '.5rem 0',
  },
}));
export default function Ajoutreception() {
  const clases = useStyle();
  return (
    <div>
      <Card elevation={0} className={clases.card}>
        <p className={clases.header}>Bon de Reception</p>
        <Card elevation={2}>
          <Table className={clases.table} aria-label='simple table'>
            <TableHead className={clases.table}>
              <TableRow>
                <TableCell className={clases.body}>code_article</TableCell>
                <TableCell className={clases.body}>libelle</TableCell>

                <TableCell className={clases.body}>QT Commandées</TableCell>
                <TableCell className={clases.body}>QT livreés</TableCell>
                <TableCell className={clases.body}>QT Restant</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={'1'}>
                <TableCell className={clases.body} component='th' scope='row'>
                  adzasadaz
                </TableCell>
                <TableCell className={clases.body}>Jus</TableCell>
                <TableCell className={clases.body}>500</TableCell>

                <TableCell className={clases.body}>
                  {' '}
                  <TextField
                    required
                    id='standard-required'
                    label='Qt'
                    variant='outlined'
                    className={clases.input}
                    size='small'
                  />
                </TableCell>
                <TableCell className={clases.body}>200</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Button variant='contained' color='primary' className={clases.btn}>
          Ajouter{' '}
        </Button>
      </Card>
    </div>
  );
}
