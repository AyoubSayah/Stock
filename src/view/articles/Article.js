import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Modal from '@material-ui/core/Modal';
import Addarticle from './Addarticle';
import * as apis from './service.article';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import UpdateArticle from './update';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  card: {
    padding: '2rem',
    flexGrow: '1',
    minHeight: '40vh',
  },
  icon: {
    width: '3.5rem',
    height: '4rem',
    color: '#626ED4',
    margin: '1rem',
    cursor: 'pointer',
    transition: 'all 0.5s',
    backfaceVisibility: 'hidden',

    '&:hover': {
      transform: 'scale(1.04) translateZ(0)',
    },
  },
  root: {
    padding: '4px 6px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '1rem',
    borderRadius: '2rem',
    height: '40px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: '.5rem',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

// const rows = [
//   { id: 1, prixht: '1', libelle: 'Jon', qte: 35, TVA: 15 },
//   { id: 2, prixht: '5', libelle: 'Cersei', qte: 42, TVA: 15 },
//   { id: 3, prixht: '7', libelle: 'Jaime', qte: 45, TVA: 15 },
//   { id: 4, prixht: '8', libelle: 'Arya', qte: 16, TVA: 15 },
//   { id: 5, prixht: '623', libelle: 'Daenerys', qte: null, TVA: 15 },
//   { id: 6, prixht: '3', libelle: 'aaaaaa', qte: 150, TVA: 15 },
//   { id: 7, prixht: '4', libelle: 'Ferrara', qte: 44, TVA: 15 },
//   { id: 8, prixht: '5', libelle: 'Rossini', qte: 36, TVA: 15 },
//   { id: 9, prixht: '55', libelle: 'Harvey', qte: 65, TVA: 15 },
// ];

export default function Article() {
  const [alert, setalert] = React.useState(false);
  const [id, setid] = React.useState('');
  const [rows, setrow] = React.useState([]);
  const [isloaded, setisloaded] = React.useState(false);
  const apis2 = apis;
  const clases = useStyles();
  useEffect(() => {
    console.log('useffect');
    fetch();
  }, []);
  const fetch = () => {
    apis2.getallarticle().then((res) => {
      setrow(res);
      console.log(res);
      setisloaded(true);
    });
  };

  const deleteArticle = (id) => {
    apis2.deletearticle(id).then((res) => {
      console.log(res);
    });
  };

  const handlealert = () => {
    console.log('aaaaaaaaaaaaaaaaaaaa');
    setalert(true);
    fetch();
  };
  const [open, setopen] = React.useState(false);
  const handleOpen = () => {
    setopen(true);
  };
  const [open2, setopen2] = React.useState(false);
  const handleOpen2 = (id) => {
    setid(id);
    setopen2(true);
    console.log(id);
  };
  const handleClose = () => {
    setopen(false);
    setopen2(false);
  };
  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setalert(false);
  };
  const columns = [
    {
      field: 'id',
      headerName: 'Code Article',
      flex: 1,
      valueGetter: (params) => params.id,
    },
    /* { field: '_id',
     headerName: 'Code Article', 
    flex: 1 , 
     hide:true 
    }, */

    {
      field: 'libelle',
      headerName: 'Nom Article',
      width: 150,
      flex: 1,
    },
    {
      field: 'prixHT',
      headerName: 'Prix HT',
      type: 'number',

      width: 150,
      flex: 1,
    },
    {
      field: 'qte',
      headerName: 'Quantité',
      type: 'number',
      width: 110,
      flex: 1,
    },
    {
      field: 'TVA',
      headerName: 'TVA',
      type: 'number',
      width: 110,
      flex: 1,
    },
    {
      field: 'prix unitaire',
      headerName: 'Prix Unitaire',
      type: 'number',

      width: 180,
      flex: 1,

      valueGetter: (params) =>
        `${
          parseFloat(params.getValue(params.id, 'prixHT')) +
          (parseFloat(params.getValue(params.id, 'TVA')) / 100) *
            parseFloat(params.getValue(params.id, 'prixHT')) +
          ' TND'
        }`,
    },
    {
      field: 'prixvent',
      headerName: 'Prix Vent',
      type: 'number',
      width: 110,
      flex: 1,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 110,
      flex: 1,

      renderCell: (params) => (
        <strong>
          <DeleteIcon
            variant='contained'
            color='primary'
            size='small'
            style={{ marginLeft: 16 }}
            onClick={() => {
              deleteArticle(params.getValue(params.id, '_id'));
            }}
          />
          <UpdateIcon
            variant='contained'
            color='primary'
            size='small'
            style={{ marginLeft: 16 }}
            onClick={() => {
              handleOpen2(params.getValue(params.id, '_id'));
            }}
          />
        </strong>
      ),
    },
  
  ];

  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      {' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AddCircleIcon className={clases.icon} onClick={handleOpen} />
        <Paper component='form' className={clases.root}>
          <InputBase
            className={clases.input}
            placeholder='Rechercher'
            inputProps={{ 'aria-label': 'Rechercher' }}
          />
          <IconButton
            type='submit'
            className={clases.iconButton}
            aria-label='search'
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <Card className={clases.card}>
        {isloaded && (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            autoHeight
            autoPageSize
            disableColumnMenu='true'
          />
        )}
        {!isloaded && (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '15rem',
            }}
          >
            <CircularProgress color='primary' />
          </div>
        )}
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Addarticle handlealert={handlealert} handleclose={handleClose} />
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <UpdateArticle
          handlealert={handlealert}
          handleclose={handleClose}
          id={id}
        />
      </Modal>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleClose2}
          severity='success'
        >
          Artice ajouteé avec succés
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
