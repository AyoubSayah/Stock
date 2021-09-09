
import React, { useState,useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import * as apis from './service.fournisseur';

const usestyles = makeStyles((theme) => ({
  h1: {
    color: '#626ED4',
    textAlign: 'center',
  },
  flex: {
    margin:'3rem',
    marginLeft:'4rem'
    
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
  };
}
export default function Updatefournisseur(props) {
  const clases = usestyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [isloaded, setisloaded] = useState(false)
  const [fournisseur, setfournisseur] = useState({
    id: 0,
    N_CNSS: 0,
    nom: '',
    adresse: '',
    raison_social: '',
    email: '',
    iden_fiscal:0,
    telephone:0,
    ref_commerciale:0,
    site:''
  });
  useEffect(() => {
    fetch()
    console.log(props.id);
  }, [props.id]);
  const fetch = ()=>{
      apis.getFournisseurById(props.id).then((res)=>{
          setfournisseur(res)
        setisloaded(true)
      })
  }
  const handleChange = (e, type) => {
    setfournisseur((prev) => ({ ...prev, [type]: e.target.value }));
    console.log(fournisseur);
  };
  const handlesubmit = () => {
    apis.updateFournisseur(fournisseur).then((res) => {
      console.log('aaa');
      props.handlealert();
      props.handleclose(); 
    });
  };
  return (
    <div>
      <Paper style={modalStyle} className={clases.modal}>
        <h1 className={clases.h1}>Modifer Fournisseur</h1>
       {isloaded &&( 
       <div className={clases.flex}>
        {  <TextField
            id='outlined-basic'
            label='Code Fournisseur'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.id}
            type='number'
            required
            onChange={(e) => {
              handleChange(e, 'id');
            }}
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle className={clases.icon} />
                </InputAdornment>
              ),
            }}
          /> }
             <TextField
            id='outlined-basic'
            label='N °CNSS'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.N_CNSS}
            type='number'
            required
            onChange={(e) => {
              handleChange(e, 'N_CNSS');
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
            label='Non Fournisseur'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.nom}
            required
            onChange={(e) => {
              handleChange(e, 'nom');
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
            label='Adresse'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.adresse}
            required
            onChange={(e) => {
              handleChange(e, 'adresse');
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
            label='Raison sociale/Non Responsable'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.raison_social}
            required
            onChange={(e) => {
              handleChange(e, 'raison_social');
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
            label='Email'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.email}
            required
            onChange={(e) => {
              handleChange(e, 'email');
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
            label='Identificateur Fiscal'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.iden_fiscal}
            type='number'
            required
            onChange={(e) => {
              handleChange(e, 'iden_fiscal');
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
            label='Téléphone'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.telephone}
            type='number'
            required
            onChange={(e) => {
              handleChange(e, 'telephone');
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
            label='Référence commerciale'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.ref_commerciale}
            type='number'
            onChange={(e) => {
              handleChange(e, 'ref_commerciale');
            }}
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <PhoneIcon className={clases.icon} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            id='outlined-basic'
            label='Site'
            variant='outlined'
            className={clases.input}
            defaultValue={fournisseur.site}
            onChange={(e) => {
              handleChange(e, 'site');
            }}
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HomeIcon className={clases.icon} />
                </InputAdornment>
              ),
            }}
            required
          />
        </div>
        
        )}
        <Button
            variant='contained'
            color='primary'
           
            style={{ background: '#626ED4',width:'15rem',height:'4rem', margin: 'auto', display: 'block' }}

            onClick={handlesubmit}
          >
            <span style={{fontSize:'1.5rem',textAlign:'center' }}>
              {' '}
              <AddCircleOutlineIcon /> Modifer
            </span>
          </Button>
      </Paper>
    </div>
  );
}
