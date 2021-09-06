import React, { useState } from 'react';
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
import * as apis from './service.article';

const useStyles = makeStyles((theme) => ({
  h1: {
    color: '#626ED4',
    textAlign: 'center',
  },
  flex: {
    margin: '3rem',
    marginLeft: '4rem',
  },
  input: {
    margin: '1rem',
    width: '25rem',

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
    width: '1000px',
    flexDirection: 'row',
  };
}
export default function Addarticle(props) {
  const clases = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [Article, setArticle] = useState({
    libelle: '',
    prixHT: '',
    TVA: '',
    remise: 0,
    qte: 0,
    ref_article: '',
  });
  const handleChange = (e, type) => {
    setArticle((prev) => ({ ...prev, [type]: e.target.value }));
    console.log(Article);
  };
  const handlesubmit = () => {
    apis.addarticle(Article).then((res) => {
      console.log('aaa');
      props.handlealert();
      props.handleclose();
    });
  };
  return (
    <div>
      <Paper style={modalStyle} className={clases.modal}>
        <h1 className={clases.h1}>Ajouter Article</h1>
        <div className={clases.flex}>
          <TextField
            id='outlined-basic'
            label='Libelle'
            variant='outlined'
            className={clases.input}
            required
            onChange={(e) => {
              handleChange(e, 'libelle');
            }}
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
            label='Ref_article'
            variant='outlined'
            className={clases.input}
            required
            onChange={(e) => {
              handleChange(e, 'ref_article');
            }}
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
            label='Prix HT'
            variant='outlined'
            className={clases.input}
            type='number'
            size='small'
            onChange={(e) => {
              handleChange(e, 'prixHT');
            }}
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
            onChange={(e) => {
              handleChange(e, 'TVA');
            }}
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
            label='Remise'
            variant='outlined'
            className={clases.input}
            type='number'
            size='small'
            onChange={(e) => {
              handleChange(e, 'remise');
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MonetizationOnIcon className={clases.icon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id='outlined-basic'
            label='quantité Initial'
            variant='outlined'
            size='small'
            className={clases.input}
            type='number'
            onChange={(e) => {
              handleChange(e, 'qte');
            }}
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
          style={{
            background: '#626ED4',
            margin: 'auto',
            display: 'block',
            width: '12rem',
            height: '3.5rem',
          }}
          onClick={handlesubmit}
        >
          <span
            style={{
              alignItems: 'center',
              fontSize: '1.5rem',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {' '}
            <AddCircleOutlineIcon
              style={{ width: '2rem', height: '2rem', marginRight: '.5rem' }}
            />{' '}
            Ajouter
          </span>
        </Button>
      </Paper>
    </div>
  );
}
