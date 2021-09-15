import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import * as apis from '../articles/service.article'
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';

import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import  Listeartcle from './lisearticle'
import Quantite from './Quantite';
    

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '2rem',
    flexGrow: '1',
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
  palylist :{
position:'absolute',
width:'2rem'
  }
}));

export default function Articlevente() {
  const [rows, setrow] = React.useState([]);
  const [isloaded, setisloaded] = React.useState(false);
  const [_id, setid] = useState('');
  const [libelle, setlibelle] = useState('');
  const [listearticle, setlistearticle] = useState([]);
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
      hide: true,
      width: 150,
      flex: 1,
    },

    {
      field: 'TVA',
      headerName: 'TVA',
      type: 'number',
      hide: true,

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
      field: 'action',
      headerName: 'Action',
      width: 110,
      flex: 1,

      renderCell: (params) => (
        <PostAddIcon
          variant='contained'
          color='primary'
          size='small'
          style={{ marginLeft: 16 }}
          onClick={() => {
            handleOpen(
              params.getValue(params.id, '_id'),
              params.getValue(params.id, 'libelle'),
              params.getValue(params.id, 'id')
            );
          }}
        />
      ),
    },
  ];
  const { id } = useParams();
  
  const [code_article, setcodearticle] = useState('');
  useEffect(() => {
    fetch();
  }, [id]);
  const fetch = () => {
    apis.getallarticle().then((res) => {
      setrow(res);
      setisloaded(true);
      console.log("come now")
    });
  };
  const [open, setOpen] = useState(false);

  const handleOpen = (data, lib, cd) => {
    setOpen(true);
    setid(data);
    setlibelle(lib);
    setcodearticle(cd);
  };
  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
  };
  const ajoutliste = (data) => {
    const liste = listearticle;
    liste.push(data);
    console.log(liste.indexOf(data.code_article));
    setlistearticle(liste);
    console.log(liste);
  };
  return (
    <div>
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
      <PlaylistAddCheckIcon  
      style={{
        position:'absolute',
        color:'#fff',
        width:'2.5rem',
        height:'2.5rem',
        cursor:'pointer',
        background:'#626ed4',
        padding:'.5rem',
        borderRadius:'4rem',
        bottom:"5%",
        right:'5%' 

      }}
      onClick={() => {
        handleOpen2();
      }}
      />
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Quantite 
          id_article={_id}
          id_fournisseur={id}
          libelle={libelle}
          code_article={code_article}
          ajoutliste={ajoutliste}
          handleclose={handleClose}
        />
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Listeartcle listearticle={listearticle}/>
      </Modal>
    </div>
  );
}
