import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import ReactToPrint from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';
import TableRow from '@material-ui/core/TableRow';
const useStyle = makeStyles((theme) => ({
  middle: {},
  header: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    margin: '1rem',
    transition: 'all .5s',
    width: '600px',
    padding: '2rem 0rem',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    overflow: 'auto',
    height: '92%',
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
  },
  body: {
    padding: '4px',
  },
  payments: {
    display: 'flex',
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
    margin: '.1rem',
  },
  pay: {
    margin: '.4rem',
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
export default function Commande() {
  const clases = useStyle();
  const componentRef = React.useRef();

  return (
    <div className={clases.middle}>
      <ReactToPrint
        trigger={() => <PrintIcon className={clases.button}></PrintIcon>}
        content={() => componentRef.current}
      />
      <Card elevation={2} className={clases.card}>
        <div
          style={{ margin: '2rem', position: 'relative' }}
          ref={componentRef}
        >
          <p className={clases.header}>Commande d'Achat</p>
          <p className={clases.date}>Date de Creation: 12/05/2021</p>
          <div className={clases.fournissuer}>
            <div className={clases.head}>Fournisseur</div>
            <p className={clases.p}>Nom :Hedi mohamed</p>
            <p className={clases.p}>Adresse:Skanes moanstir</p>
            <p className={clases.p}>email:sayah@gmail.com</p>{' '}
          </div>
          <Table className={clases.table} aria-label='simple table'>
            <TableHead className={clases.table}>
              <TableRow>
                <TableCell className={clases.body}>Code_Article</TableCell>
                <TableCell className={clases.body}>Libelle</TableCell>

                <TableCell className={clases.body}>PrixHT</TableCell>
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
              <TableRow key={'8'}>
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
              <TableRow key={'6'}>
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
              <TableRow key={'4'}>
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
              <TableRow key={'3'}>
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
              <TableRow key={''}>
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
        </div>
      </Card>
    </div>
  );
}
