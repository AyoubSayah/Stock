import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';
import Commande from './commande';

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
  },
  body: {
    fontSize: '.3rem',
    padding: '4px',
  },
  payments: {
    display: 'flex',
    fontSize: '.4rem',
    width: '50%',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    background: '#f7f7f7',
    margin: '0.05rem',
  },
  pay: {
    margin: '.2rem 0',
  },
  icon: {
    position: 'absolute',
    /* margin-left: 12rem; */
    bottom: ' 0',
    right: ' 0',
    width: ' 3rem',
    height: ' 3rem',
  },
}));
export default function Commandes() {
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
      {' '}
      <Grid container spacing={0} className={clases.grid}>
        <Grid item xs={4} className={clases.girdrigt}>
          <Card elevation={2} className={clases.card}>
            <p className={clases.header}>Commande d'Achat</p>
            <p className={clases.date}>Date de Creation: 12/05/2021</p>
            <p className={clases.date}>
              Commande № <strong>356561</strong>
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

                  <TableCell className={clases.body}>prixHT</TableCell>
                  <TableCell className={clases.body}>TVA</TableCell>
                  <TableCell className={clases.body}>Remise</TableCell>
                  <TableCell className={clases.body}>QT</TableCell>
                  <TableCell className={clases.body}>PrixTotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={'1'}>
                  <TableCell className={clases.body} component='th' scope='row'>
                    adzadaz
                  </TableCell>
                  <TableCell className={clases.body}>Jus</TableCell>
                  <TableCell className={clases.body}>5TND</TableCell>
                  <TableCell className={clases.body}>10%</TableCell>
                  <TableCell className={clases.body}>19%</TableCell>

                  <TableCell className={clases.body}>55</TableCell>
                  <TableCell className={clases.body}>5.5TND</TableCell>
                </TableRow>
                <TableRow key={'2'}>
                  <TableCell className={clases.body} component='th' scope='row'>
                    adzadaz
                  </TableCell>
                  <TableCell className={clases.body}>Jus</TableCell>
                  <TableCell className={clases.body}>5TND</TableCell>
                  <TableCell className={clases.body}>10%</TableCell>
                  <TableCell className={clases.body}>19%</TableCell>

                  <TableCell className={clases.body}>55</TableCell>
                  <TableCell className={clases.body}>5.5TND</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className={clases.payments}>
              <div className={clases.flex}>
                <p className={clases.pay}>Sous-total</p>
                <p className={clases.pay}>330(TND)</p>
              </div>
              <div className={clases.flex}>
                <p className={clases.pay}>Remise</p>
                <p className={clases.pay}>10(TND)</p>
              </div>
              <div className={clases.flex}>
                <p className={clases.pay}>TVA</p>
                <p className={clases.pay}>10(TND)</p>
              </div>
              <div className={clases.flex}>
                <p className={clases.pay}>Total</p>
                <p className={clases.pay}>350(TND)</p>
              </div>
            </div>
            <CheckCircleIcon
              className={clases.icon}
              style={{ color: '#4caf50' }}
            ></CheckCircleIcon>
          </Card>
        </Grid>

        <Grid item xs={4} className={clases.girdrigt}>
          <Card elevation={2} className={clases.card} onClick={handleclick}>
            <p className={clases.header}>Commande d'Achat</p>
            <p className={clases.date}>Date de Creation: 12/05/2021</p>
            <p className={clases.date}>
              Commande № <strong>356561</strong>
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

                  <TableCell className={clases.body}>prixHT</TableCell>
                  <TableCell className={clases.body}>TVA</TableCell>
                  <TableCell className={clases.body}>Remise</TableCell>
                  <TableCell className={clases.body}>QT</TableCell>
                  <TableCell className={clases.body}>PrixTotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={'1'}>
                  <TableCell className={clases.body} component='th' scope='row'>
                    adzadaz
                  </TableCell>
                  <TableCell className={clases.body}>Jus</TableCell>
                  <TableCell className={clases.body}>5TND</TableCell>
                  <TableCell className={clases.body}>10%</TableCell>
                  <TableCell className={clases.body}>19%</TableCell>

                  <TableCell className={clases.body}>55</TableCell>
                  <TableCell className={clases.body}>5.5TND</TableCell>
                </TableRow>
                <TableRow key={'2'}>
                  <TableCell className={clases.body} component='th' scope='row'>
                    adzadaz
                  </TableCell>
                  <TableCell className={clases.body}>Jus</TableCell>
                  <TableCell className={clases.body}>5TND</TableCell>
                  <TableCell className={clases.body}>10%</TableCell>
                  <TableCell className={clases.body}>19%</TableCell>

                  <TableCell className={clases.body}>55</TableCell>
                  <TableCell className={clases.body}>5.5TND</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className={clases.payments}>
              <div className={clases.flex}>
                <p className={clases.pay}>Sous-total</p>
                <p className={clases.pay}>330(TND)</p>
              </div>
              <div className={clases.flex}>
                <p className={clases.pay}>Remise</p>
                <p className={clases.pay}>10(TND)</p>
              </div>
              <div className={clases.flex}>
                <p className={clases.pay}>TVA</p>
                <p className={clases.pay}>10(TND)</p>
              </div>
              <div className={clases.flex}>
                <p className={clases.pay}>Total</p>
                <p className={clases.pay}>350(TND)</p>
              </div>
            </div>
            <HourglassFullIcon
              className={clases.icon}
              style={{ color: '#f3da05' }}
            ></HourglassFullIcon>
          </Card>{' '}
        </Grid>
      </Grid>{' '}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Commande />
      </Modal>
    </div>
  );
}
