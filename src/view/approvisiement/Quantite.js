import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as apis from './appro.service';

const useStyle = makeStyles((theme) => ({
  principale: {},
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '300px',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: ' center',
    flexDirection: 'column',
  },
  button: {
    margin: '1rem auto',
    width: '150px',
  },
}));
export default function Quantite(props) {
  const clases = useStyle();
  const [qt, setqt] = React.useState(0);
  const handleChange = (e) => {
    setqt(e.target.value);
  };
  const handlesubmit = async () => {
    if (qt > 0) {
      const data = {
        id_article: props.id_article,
        // id_fournisseur: props.id_fournisseur,
        code_article: props.code_article,
        quantite: qt,
        libelle: props.libelle,
      };
      props.ajoutliste(data);
      // const res = await apis.ajoutcommande(data);
      // console.log(res);
    }
  };
  return (
    <div className={clases.principale}>
      <Paper className={clases.paper}>
        <TextField
          id='outlined-basic'
          type='number'
          label='Quantité'
          variant='outlined'
          //   className={clases.input}
          required
          onChange={(e) => {
            handleChange(e, 'id');
          }}
          size='small'
        />
        <Button
          variant='contained'
          color='primary'
          className={clases.button}
          onClick={handlesubmit}
        >
          Confirmer
        </Button>
      </Paper>
    </div>
  );
}
