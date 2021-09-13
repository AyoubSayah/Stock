import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReactToPrint from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';

const useStyle = makeStyles((theme) => ({
  header: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    margin: '1rem',
    transition: 'all .5s',
    width: '500px',
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
    marginBottom: '4rem',
  },
  body: {
    padding: '4px',
  },
  button: {
    position: 'fixed',
    right: '1%',
    top: '4%',
    color: '#9e9e9e',
    width: '2rem',
    height: '2rem',
    zIndex: '555',
    background: '#fff',
    borderRadius: '3rem',
    padding: '.5rem',
    cursor: 'pointer',
    transition: 'all .2s',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
}));
export default function Bonreception() {
  const clases = useStyle();
  const componentRef = React.useRef();

  return (
    <div>
      {' '}
      <ReactToPrint
        trigger={() => <PrintIcon className={clases.button}></PrintIcon>}
        content={() => componentRef.current}
      />
      <Card elevation={2} className={clases.card} ref={componentRef}>
        <p className={clases.header}>Bon de Reception</p>
        <p className={clases.date}>Date de Creation: 12/05/2021</p>
        <p className={clases.date}>
          Commande № <strong>356561</strong>
        </p>
        <p className={clases.date}>
          Bon de Reception № <strong>756561</strong>
        </p>
        <div className={clases.fournissuer}>
          <div className={clases.head}>fournisseur</div>
          <p className={clases.p}>Nom :Hedi mohamed</p>
          <p className={clases.p}>Adresse:Skanes moanstir</p>
          <p className={clases.p}>email:sayah@gmail.com</p>{' '}
        </div>
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

              <TableCell className={clases.body}>300</TableCell>
              <TableCell className={clases.body}>200</TableCell>
            </TableRow>
            <TableRow key={'2'}>
              <TableCell className={clases.body} component='th' scope='row'>
                ad54656
              </TableCell>
              <TableCell className={clases.body}>homs</TableCell>
              <TableCell className={clases.body}>700</TableCell>

              <TableCell className={clases.body}>700</TableCell>
              <TableCell className={clases.body}>0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
