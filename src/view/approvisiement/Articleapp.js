import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import * as apis from '../fournisseur/service.fournisseur';
import { useHistory, useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

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
}));

export default function Articleapp() {
  const [rows, setrow] = React.useState([]);
  const [isloaded, setisloaded] = React.useState(false);

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
        />
      ),
    },
  ];
  const { id } = useParams();

  useEffect(() => {
    fetch();
  }, [id]);
  const fetch = () => {
    apis.getarticles(id).then((res) => {
      setrow(res);
      setisloaded(true);
    });
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
    </div>
  );
}