import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';
import Bonreception from './Bonreception';

const useStyle = makeStyles((theme) => ({
  header: {
    fontSize: '.6rem',
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    margin: '1rem',
    cursor: 'pointer',
    transition: 'all .5s',
    '&:hover': {
      border: '2px solid #626ed4',
      transform: 'scale(1.03)',
    },
    position: 'relative',
  },
  date: {
    fontSize: '.4rem',
  },
  fournissuer: {
    fontSize: '.4rem',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid gray',
    margin: '.3rem',
  },
  head: {
    background: '#777',
    padding: '.2rem',
    color: '#fff',
  },
  p: {
    margin: '.07rem 0',
  },
  table: {
    width: '100%',
    marginBottom: '2rem',
  },
  body: {
    fontSize: '.3rem',
    padding: '4px',
  },
}));
export default function Bonreceptions() {
  const clases = useStyle();
  const [open, setOpen] = React.useState(false);
  const handleclick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card elevation={2} className={clases.card} onClick={handleclick}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Bonreception />
      </Modal>
    </div>
  );
}
