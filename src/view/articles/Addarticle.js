import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const useStyles = makeStyles((theme) => ({
  h1: {
    color: '#626ED4',
    textAlign: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '1rem',

    '& :invalid:focus:not(:placeholder-shown) + fieldset': {
      borderColor: '#f44336',
      borderWidth: 2,
    },
  },
  modal: {
    animation: '$myEffect 1000ms',
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: ' translateX(-50%) translateY(100%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(-50%) translateY(-55%)',
    },
  },

  icon: {
    color: '#697886',
  },
}));
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position: 'absolute',
    background: 'white',
    brderRadius: '1rem',
    padding: '2rem 4rem',
  };
}
export default function Addarticle() {
  const clases = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Paper style={modalStyle} className={clases.modal}>
        <h2 className={clases.h1}>Ajouter Article</h2>
        <div className={clases.flex}>
          <TextField
            id='outlined-basic'
            label='Libelle'
            variant='outlined'
            className={clases.input}
            required
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle className={clases.icon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id='outlined-basic'
            label='Prix Unitaire HT'
            variant='outlined'
            className={clases.input}
            type='number'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MonetizationOnIcon className={clases.icon} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            id='outlined-basic'
            label='TVA'
            variant='outlined'
            className={clases.input}
            type='number'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AttachMoneyIcon className={clases.icon} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            id='outlined-basic'
            label='Stock Initial'
            variant='outlined'
            size='small'
            className={clases.input}
            type='number'
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MoveToInboxIcon className={clases.icon} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          style={{ background: '#626ED4', margin: 'auto', display: 'block' }}
        >
          <span style={{ display: 'flex', alignItems: 'center',}}>
            {' '}
            <AddCircleOutlineIcon /> Ajouter
          </span>
        </Button>
      </Paper>
    </div>
  );
}
