import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import * as apis from './appro.service';

const useStyle = makeStyles((theme) => ({
  principale: {},
  paper: {
    position: 'absolute',
    left: '80%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '600px',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: '1rem auto',
    width: '150px',
  },
}));
export default function Listeartcle(props) {
  const clases = useStyle();
  const [listeart, setliste] = React.useState(0);
 
  return (
    <div className={clases.principale}>
      <Paper className={clases.paper}>
    
        <Button
          variant='contained'
          color='primary'
          className={clases.button}
        
        >
          Confirmer
        </Button>
      </Paper>
    </div>
  );
}
