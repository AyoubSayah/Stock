import React from 'react';
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
import ServiceArticle from './service.article';


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
const columns = [
  { field: 'id', headerName: 'Code Article', flex: 1 },
  {
    field: 'nomarticle',
    headerName: 'Nom Article',
    width: 150,
    flex: 1,
  },
  {
    field: 'prixunitaire',
    headerName: 'Prix unitaire',
    width: 150,
    flex: 1,
    type: 'number',
  },
  {
    field: 'stock',
    headerName: 'Stock',
    // type: 'number',
    width: 110,
    flex: 1,
    type: 'number',
  },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 180,
  //     flex: 1,

  //     valueGetter: (params) =>
  //       `${params.getValue(params.id, 'firstName') || ''} ${
  //         params.getValue(params.id, 'prixunitaire') || ''
  //       }`,
  //   },
];

const rows = [
  { id: 1, prixunitaire: '1', nomarticle: 'Jon', stock: 35 },
  { id: 2, prixunitaire: '5', nomarticle: 'Cersei', stock: 42 },
  { id: 3, prixunitaire: '7', nomarticle: 'Jaime', stock: 45 },
  { id: 4, prixunitaire: '8', nomarticle: 'Arya', stock: 16 },
  { id: 5, prixunitaire: '623', nomarticle: 'Daenerys', stock: null },
  { id: 6, prixunitaire: '3', nomarticle: 'aaaaaa', stock: 150 },
  { id: 7, prixunitaire: '4', nomarticle: 'Ferrara', stock: 44 },
  { id: 8, prixunitaire: '5', nomarticle: 'Rossini', stock: 36 },
  { id: 9, prixunitaire: '55', nomarticle: 'Harvey', stock: 65 },
];

export default function Article({article}) {
  const clases = useStyles();
 const listArticle=[]

 console.log("the list of articls is",article)
 /*  listArticle= ServiceArticle(state =>state.article)
console.log(listArticle) */
/* const getArticle = ({article})=>{
listArticle=article
console.log("the list of articls is",article)
} */
  const [open, setopen] = React.useState(false);
  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
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
        <Addarticle />
      </Modal>
      <ServiceArticle/>
    </div>
  );
}
