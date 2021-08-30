import React from 'react'
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

const useStyles =makeStyles((theme)=>({
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
         transition: 'all 0.5s' ,transform: '2s',
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
}))
const columns =[
    {
        field:'id',
        headerName:'Code Fournisseur',
        width:150,
        flex:1,
    },
    {
        field:'nomclient',
        headerName:'Nom Fournisseur',
        width:150,
        flex:1,
    },
    {
        field:'telephone',
        headerName:'Télephone',
        width:150,
        flex:1,
    },
    {
        field:'adresse',
        headerName:'Adresse',
        width:150,
        flex:1,
    },
];
const rows=[
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
]

export default  function Fournisseurs() {
const clases =useStyles();
const [open,setopen] =React.useState(false);
const handleOpen =()=>{
    setopen(true);
}
const handleClose = () =>{
    setopen(false)
};
return(
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
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          autoHeight
        />{' '}
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
      <Addfournisseur/>
      </Modal>
    </div>
)
}