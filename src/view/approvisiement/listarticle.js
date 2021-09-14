import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as apis from './appro.service';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Scale } from 'chart.js';
const useStyle = makeStyles((theme) => ({
  principale: {},
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '600px',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: '1rem auto',
    width: '150px',
  },
  icon: {
    color: '#ff5722',
    width: '1.8rem',
    height: '1.8rem',
    cursor: 'pointer',
    transition: 'all .06s',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
}));
export default function Listeartcle({ listearticle }) {
  const clases = useStyle();

  return (
    <div className={clases.principale}>
      <Paper className={clases.paper}>
        <Table className={clases.table} aria-label='simple table'>
          <TableHead className={clases.table}>
            <TableRow>
              <TableCell className={clases.body}>code_article</TableCell>
              <TableCell className={clases.body}>libelle</TableCell>

              <TableCell className={clases.body}>QT Commandées</TableCell>
              <TableCell className={clases.body}>Actions</TableCell>
            </TableRow>
          </TableHead>
          {listearticle && listearticle.length > 0 && (
            <TableBody>
              {listearticle.map((data) => {
                return (
                  <TableRow key={'1'}>
                    <TableCell
                      className={clases.body}
                      component='th'
                      scope='row'
                    >
                      {data.code_article}
                    </TableCell>
                    <TableCell className={clases.body}>
                      {data.libelle}
                    </TableCell>
                    <TableCell className={clases.body}>
                      {data.quantite}
                    </TableCell>
                    <TableCell className={clases.body}>
                      {' '}
                      <DeleteForeverIcon className={clases.icon} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
        <Button variant='contained' color='primary' className={clases.button}>
          Confirmer
        </Button>
      </Paper>
    </div>
  );
}
