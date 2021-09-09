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
import Addfournisseur from './addfournisseur';
import Updatefournisseur from './update';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import * as apis from './service.fournisseur';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
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
    transform: '2s',
    backfaceVisibility: 'hidden',

    '&:hover': {
      transform: 'scale(1.04) translateZ(1)',
      transform: 'rotate(180deg)',
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
}));

/* const rows=[
     {id:1,nomclient:'ali',telephone:97845634,adresse:'aaaaaaaa'},
    {id:2,nomclient:'kacem',telephone:97845634,adresse:'aaaaaaaa'},
    {id:3,nomclient:'makrem',telephone:97845634,adresse:'aaaaaaaa'},
    {id:4,nomclient:'mounir',telephone:97845634,adresse:'aaaaaaaa'},
    {id:5,nomclient:'ayoub',telephone:97845634,adresse:'aaaaaaaa'},
    {id:6,nomclient:'salah',telephone:97845634,adresse:'aaaaaaaa'},
    {id:7,nomclient:'walid',telephone:97845634,adresse:'aaaaaaaa'},
    {id:8,nomclient:'ali',telephone:97845634,adresse:'aaaaaaaa'},
    {id:9,nomclient:'ali',telephone:97845634,adresse:'aaaaaaaa'},
    {id:10,nomclient:'ali',telephone:97845634,adresse:'aaaaaaaa'},
    {id:11,nomclient:'ali',telephone:97845634,adresse:'aaaaaaaa'}, 
] */

export default function Fournisseurs() {
  const clases = useStyles();
  const [open, setopen] = React.useState(false);
  const [rows, setrow] = React.useState([]);
  const [alert, setalert] = React.useState(false);
  const [isloaded, setisloaded] = React.useState(false);

  const [id, setid] = React.useState('');
  useEffect(() => {
    fetch();
  }, []);
  const handleOpen = () => {
    setopen(true);
  };
 
  const handleClose = () => {
    setopen(false);
    setopen2(false);
  };
  const handlealert = () => {
    setalert(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setalert(false);
  };
  const fetch = () => {
    apis.getallfournisseur().then((res) => {
      setrow(res);
      setisloaded(true);
    });
  };
  const deleteFornisseur = (id) => {
    apis.deleteFournisseur(id).then((res) => {
      console.log(res);
    });
  };
  console.log(rows);
  const [open2, setopen2] = React.useState(false);
  const handleOpen2 = (id) => {
    setid(id);
    setopen2(true);
    console.log(id);
  };
  const columns = [
    {
      field: 'mid',
      headerName: 'Code Fournisseur',
      flex: 1,
      valueGetter: (params) => params.id,
    },
    {
      field: 'nom',
      headerName: 'Nom Fournisseur',
      flex: 1,
    },
    {
      field: 'raison_social',
      headerName: 'Raison social/Nom Responsable',
      flex: 1,
    },
    {
      field: 'iden_fiscal',
      headerName: 'Identificateur Fiscale',
      type: 'number',
      flex: 1,
    },
    {
      field: 'ref_commerciale',
      headerName: 'Référence Commerciale',
      type: 'number',
      flex: 1,
    },
    {
      field: ' N_CNSS',
      headerName: 'N° CNSS',
      type: 'number',
      flex: 1,
    },
    {
      field: 'adresse',
      headerName: 'Adresse',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'telephone',
      headerName: 'Téléphone',
      type: 'number',
      flex: 1,
    },
    {
      field: 'site',
      headerName: 'Site',
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
                 deleteFornisseur(params.getValue(params.id, '_id'));
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
        <Addfournisseur handlealert={handlealert} handleclose={handleClose} />
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Updatefournisseur
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
